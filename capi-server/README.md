# Aurea CAPI — Meta Conversions API proxy

Tiny vanilla Node service that complements the client-side Meta Pixel
with server-side events. Events arrive at `POST /api/capi/event`,
nginx proxies them to a local Node daemon, which forwards them to Meta.

Each event includes the same `event_id` as the client-side pixel call
so Meta deduplicates both signals automatically.

## File layout

| File                      | Purpose                                          |
|---------------------------|--------------------------------------------------|
| `server.js`               | The HTTP server. Vanilla Node, no deps.          |
| `.env.example`            | Template for env vars (token, pixel id).         |
| `aurea-capi.service`      | systemd unit (runs as `deploy`).                 |
| `nginx.snippet.conf`      | Reverse-proxy config to paste in nginx.          |
| `install.sh`              | One-time bootstrap script for the VPS.           |

## One-time deploy (on the VPS, as root)

1. **Generate the access token** in Events Manager:
   *Settings → Conversions API → Generate access token*
   (Pick the system user; the token starts with `EAA...`)

2. **Run the installer** from the freshly-rsynced repo:
   ```bash
   sudo bash /home/deploy/aurea-repo/capi-server/install.sh
   ```
   (If you don't have a checkout on the VPS, scp the `capi-server/`
   folder over first.)

3. **Edit the env file** that was just written:
   ```bash
   sudo nano /opt/aurea-capi/.env
   # set META_ACCESS_TOKEN to the value from step 1
   ```

4. **Start the service**:
   ```bash
   sudo systemctl start aurea-capi.service
   sudo systemctl status aurea-capi.service   # should be "active (running)"
   ```

5. **Wire nginx**: paste `nginx.snippet.conf` inside the `server { }`
   block of `/etc/nginx/sites-available/aureasystems.es.conf`, then
   reload:
   ```bash
   sudo nginx -t && sudo systemctl reload nginx
   ```

6. **Verify**:
   ```bash
   curl -s https://aureasystems.es/api/capi/health
   # expected: ok
   ```

## Validating with Meta's Test Events tool

Before going live, set a test event code:
```bash
# /opt/aurea-capi/.env
META_TEST_EVENT_CODE=TEST12345    # value from Events Manager → Test events
```
Restart the service:
```bash
sudo systemctl restart aurea-capi.service
```
Browse aureasystems.es and the events should appear in real time on
Events Manager → Test events. Once confirmed, **remove** the
`META_TEST_EVENT_CODE` line and restart — otherwise live events go to
the test bucket instead of the real one.

## Operational notes

- The service binds to `127.0.0.1:3001`. Nginx is the only public face.
- Body size limited to 32 KB; only allowed Meta standard events are
  forwarded (`PageView`, `Lead`, `Contact`, etc.).
- IP + User-Agent are extracted from the request and passed to Meta as
  `client_ip_address` / `client_user_agent` (used for attribution).
- `_fbp` / `_fbc` cookies, when present, are forwarded for better
  attribution windows.
- No personal data (email, name, phone) is collected by this proxy —
  if you start collecting form submissions, you'll want to hash those
  fields with SHA-256 here before forwarding (see Meta CAPI docs).

## Logs

```bash
sudo journalctl -u aurea-capi -f
```
