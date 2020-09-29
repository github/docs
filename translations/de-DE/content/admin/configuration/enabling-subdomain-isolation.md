---
title: Subdomain-Isolation aktivieren
intro: 'Sie können die Subdomain-Isolation so festlegen, dass der Benutzerinhalt von anderen Teilen Ihrer {% data variables.product.prodname_ghe_server %}-Appliance sicher getrennt wird.'
redirect_from:
  - /enterprise/admin/guides/installation/about-subdomain-isolation/
  - /enterprise/admin/installation/enabling-subdomain-isolation
  - /enterprise/admin/configuration/enabling-subdomain-isolation
versions:
  enterprise-server: '*'
---

### Informationen zur Subdomain-Isolation

Die Subdomain-Isolation mindert Cross-Site-Scripting und andere verwandte Schwachstellen. Weitere Informationen finden Sie unter „[Cross-Site-Scripting](https://de.wikipedia.org/wiki/Cross-Site-Scripting)“ auf Wikipedia. Es wird dringend empfohlen, die Subdomain-Isolation auf {% data variables.product.product_location_enterprise %} zu aktivieren.

Bei aktivierter Subdomain-Isolation ersetzt {% data variables.product.prodname_ghe_server %} verschiedene Pfade durch Subdomains.

{% if currentVersion ver_gt "enterprise-server@2.21" %}
To use Docker with {% data variables.product.prodname_registry %}, you must also enable subdomain isolation. For more information, see "[Configuring Docker for use with {% data variables.product.prodname_registry %}](/enterprise/{{ currentVersion }}/user/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages)."

{% data reusables.package_registry.packages-ghes-release-stage %}
|
{% endif %}
| Pfad ohne Subdomain-Isolation                                                                                         | Pfad mit Subdomain-Isolation                                           |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `http(s)://HOSTNAME/assets/`                                                                                          | `http(s)://assets.HOSTNAME/`                                           |
| `http(s)://HOSTNAME/avatars/`                                                                                         | `http(s)://avatars.HOSTNAME/`                                          |
| `http(s)://HOSTNAME/codeload/`                                                                                        | `http(s)://codeload.HOSTNAME/`                                         |
| `http(s)://HOSTNAME/gist/`                                                                                            | `http(s)://gist.HOSTNAME/`                                             |
| `http(s)://HOSTNAME/media/`                                                                                           | `http(s)://media.HOSTNAME/`                                            |
| `http(s)://HOSTNAME/pages/`                                                                                           | `http(s)://pages.HOSTNAME/`                                            |
| `http(s)://HOSTNAME/raw/`                                                                                             | `http(s)://raw.HOSTNAME/`                                              |
| `http(s)://HOSTNAME/render/`                                                                                          | `http(s)://render.HOSTNAME/`                                           |
| `http(s)://HOSTNAME/reply/`                                                                                           | `http(s)://reply.HOSTNAME/`                                            |
| `http(s)://HOSTNAME/uploads/`                                                                                         | `http(s)://uploads.HOSTNAME/`     |{% if currentVersion ver_gt "enterprise-server@2.21" %}
| N/A, Docker with {% data variables.product.prodname_registry %} will not work with subdomain isolation disabled. | `http(s)://uploads.HOSTNAME/`                                          |
| `https://HOSTNAME/_registry/npm/`                                                                                     | `https://npm.HOSTNAME/`                                                |
| `https://HOSTNAME/_registry/rubygems/`                                                                                | `https://rubygems.HOSTNAME/`                                           |
| `https://HOSTNAME/_registry/maven/`                                                                                   | `https://maven.HOSTNAME/`                                              |
| `https://HOSTNAME/_registry/nuget/`                                                                                   | `https://nuget.HOSTNAME/`{% endif %}

### Vorrausetzungen

{% data reusables.enterprise_installation.disable-github-pages-warning %}

Vor der Aktivierung der Subdomain-Isolation müssen Sie Ihre Netzwerkeinstellungen für Ihre neue Domain konfigurieren.

- Geben Sie anstelle einer IP-Adresse einen gültigen Domain-Namen als Ihren Hostnamen an. Weitere Informationen findest Du unter "[Hostname konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-a-hostname)."

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

- Legen Sie einen Domain Name System-Platzhaltereintrag (DNS) oder einzelne DNS-Einträge für die oben aufgelisteten Subdomains fest. Sie sollten einen Eintrag für `*.HOSTNAME` erstellen, der auf die IP-Adresse Ihres Servers verweist, damit Sie nicht für jede Subdomain mehrere Einträge erstellen müssen.
- Rufen Sie ein Transport Layer Security-Platzhalterzertifikat (TLS) für `*.HOSTNAME` mit Subject Alternative Name (SAN) für `HOSTNAME` und für die Platzhalter-Domain `*.HOSTNAME` ab. Wenn Ihr Hostname beispielsweise `github.octoinc.com` lautet, rufen Sie ein Zertifikat mit dem CN-Wert `*.github.octoinc.com` und einem SAN-Wert ab, der auf `github.octoinc.com` und `*.github.octoinc.com` festgelegt ist.
- Aktivieren Sie TLS auf Ihrer Appliance. Weitere Informationen finden Sie unter „[TLS konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls/)“.

### Subdomain-Isolation aktivieren

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.hostname-menu-item %}
4. Wählen Sie **Subdomain isolation (recommended)** (Subdomain-Isolation (empfohlen)) aus. ![Kontrollkästchen zum Aktivieren der Subdomain-Isolation](/assets/images/enterprise/management-console/subdomain-isolation.png)
{% data reusables.enterprise_management_console.save-settings %}
