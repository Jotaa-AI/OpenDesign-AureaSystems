#!/usr/bin/env bash
# Aurea CAPI — one-time installer to run ON THE VPS as root
#
# What this does:
#   1. Installs Node.js 20 LTS if missing.
#   2. Copies server.js + .env to /opt/aurea-capi/.
#   3. Installs the systemd unit and enables it.
#   4. Reminds you to paste the nginx snippet + reload nginx.
#
# Run from the repo on the VPS:
#   sudo bash capi-server/install.sh
set -euo pipefail

INSTALL_DIR=/opt/aurea-capi
SERVICE_FILE=/etc/systemd/system/aurea-capi.service
HERE="$(cd "$(dirname "$0")" && pwd)"

echo "==> Aurea CAPI install"

# 1) Node.js 20 LTS
if ! command -v node >/dev/null 2>&1; then
  echo "==> Installing Node.js 20 LTS"
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi
node --version

# 2) Layout
mkdir -p "$INSTALL_DIR"
cp -a "$HERE/server.js" "$INSTALL_DIR/server.js"

if [[ ! -f "$INSTALL_DIR/.env" ]]; then
  cp -a "$HERE/.env.example" "$INSTALL_DIR/.env"
  echo "!! Wrote $INSTALL_DIR/.env from template — edit META_ACCESS_TOKEN before starting"
fi
chown -R deploy:deploy "$INSTALL_DIR"
chmod 640 "$INSTALL_DIR/.env"

# 3) systemd unit
cp -a "$HERE/aurea-capi.service" "$SERVICE_FILE"
systemctl daemon-reload
systemctl enable aurea-capi.service

# Only start if the env has been edited
if grep -q "__PUT_TOKEN_HERE__" "$INSTALL_DIR/.env"; then
  echo
  echo "!! META_ACCESS_TOKEN still has the placeholder. Edit:"
  echo "     $INSTALL_DIR/.env"
  echo "   then start the service with:"
  echo "     systemctl start aurea-capi.service"
else
  systemctl restart aurea-capi.service
  sleep 1
  systemctl --no-pager status aurea-capi.service | head -15
fi

cat <<'EOF'

==> Next step — wire nginx:
    Paste capi-server/nginx.snippet.conf inside the server{} block of
    /etc/nginx/sites-available/aureasystems.es.conf (or equivalent),
    then:
      nginx -t && systemctl reload nginx
    Verify with:
      curl -s https://aureasystems.es/api/capi/health
    (must return "ok").
EOF
