| Port | Service | Description                                                |
|------|---------|------------------------------------------------------------|
| 22   | SSH     | Git over SSH access. Clone, fetch, and push operations to public/private repositories supported. |
| 25   | SMTP    | SMTP with encryption (STARTTLS) support. |
| 80   | HTTP    | Web application access. _All requests are redirected to the HTTPS port when SSL is enabled._ |
| 122  | SSH     | Instance shell access. _The default SSH port (22) is dedicated to application git+ssh network traffic._ |
| 161/UDP | SNMP | Required for network monitoring protocol operation. |
| 443  | HTTPS   | Web application and Git over HTTPS access. |
| 1194/UDP | VPN | Secure replication network tunnel in high availability configuration. |
| 8080 | HTTP    | Plain-text web based {% data variables.enterprise.management_console %}. _Not required unless SSL is disabled manually._ |
| 8443 | HTTPS   | Secure web based {% data variables.enterprise.management_console %}. _Required for basic installation and configuration._ |
| 9418 | Git     | Simple Git protocol port. Clone and fetch operations to public repositories only. _Unencrypted network communication._ {% data reusables.enterprise_installation.when-9418-necessary %}  |
