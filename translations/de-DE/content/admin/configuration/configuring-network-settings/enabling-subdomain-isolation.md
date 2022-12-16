---
title: Subdomain-Isolation aktivieren
intro: 'Du kannst die Subdomain-Isolation so festlegen, dass der Benutzerinhalt von anderen Teilen deiner {% data variables.product.prodname_ghe_server %}-Appliance sicher getrennt wird.'
redirect_from:
  - /enterprise/admin/guides/installation/about-subdomain-isolation
  - /enterprise/admin/installation/enabling-subdomain-isolation
  - /enterprise/admin/configuration/enabling-subdomain-isolation
  - /admin/configuration/enabling-subdomain-isolation
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
shortTitle: Enable subdomain isolation
ms.openlocfilehash: e48b6d474bf4d930836047343eab267731e67823
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107133'
---
## Informationen zur Subdomain-Isolation

Die Subdomain-Isolation mindert Cross-Site-Scripting und andere verwandte Schwachstellen. Weitere Informationen findest Du unter „[Cross-Site Scripting](http://en.wikipedia.org/wiki/Cross-site_scripting)“ in Wikipedia. Es wird dringend empfohlen, die Subdomain-Isolation auf {% data variables.location.product_location %} zu aktivieren.

Bei aktivierter Subdomain-Isolation ersetzt {% data variables.product.prodname_ghe_server %} verschiedene Pfade durch Subdomains. Nach dem Aktivieren der Subdomain-Isolation wird versucht, auf die vorherigen Pfade für einige vom Benutzer bereitgestellte Inhalte zuzugreifen, z. B. kann `http(s)://HOSTNAME/raw/` `404`-Fehler zurückgeben .

| Pfad ohne Subdomain-Isolation  | Pfad mit Subdomain-Isolation   |
| --- | --- |
| `http(s)://HOSTNAME/assets/`      | `http(s)://assets.HOSTNAME/`      |
| `http(s)://HOSTNAME/avatars/`     | `http(s)://avatars.HOSTNAME/`     |
| `http(s)://HOSTNAME/codeload/`    | `http(s)://codeload.HOSTNAME/`    |
| `http(s)://HOSTNAME/gist/`        | `http(s)://gist.HOSTNAME/`        |
| `http(s)://HOSTNAME/media/`       | `http(s)://media.HOSTNAME/`       |
| `http(s)://HOSTNAME/pages/`       | `http(s)://pages.HOSTNAME/`       |
| `http(s)://HOSTNAME/raw/`         | `http(s)://raw.HOSTNAME/`         |
{%- ifversion viewscreen-and-notebooks %} | `http(s)://HOSTNAME/viewscreen/`  | `http(s)://viewscreen.HOSTNAME/`  | | `http(s)://HOSTNAME/notebooks/`   | `http(s)://notebooks.HOSTNAME/`   | {%- else %} | `http(s)://HOSTNAME/render/`      | `http(s)://render.HOSTNAME/`      | {%- endif %} | `http(s)://HOSTNAME/reply/`       | `http(s)://reply.HOSTNAME/`       | | `http(s)://HOSTNAME/uploads/`     | `http(s)://uploads.HOSTNAME/`     | {% ifversion ghes %} | `https://HOSTNAME/` | `http(s)://docker.HOSTNAME/`{% endif %}{% ifversion ghes %} | `https://HOSTNAME/_registry/npm/` | `https://npm.HOSTNAME/`
| `https://HOSTNAME/_registry/rubygems/` | `https://rubygems.HOSTNAME/`
| `https://HOSTNAME/_registry/maven/` | `https://maven.HOSTNAME/`
| `https://HOSTNAME/_registry/nuget/` | `https://nuget.HOSTNAME/`{% endif %}{% ifversion ghes > 3.4 %} | Nicht unterstützt | `https://containers.HOSTNAME/` |{% endif %}

## Voraussetzungen

{% data reusables.enterprise_installation.disable-github-pages-warning %}

Vor der Aktivierung der Subdomain-Isolation musst du deine Netzwerkeinstellungen für deine neue Domain konfigurieren.

- Gib anstelle einer IP-Adresse einen gültigen Domain-Namen als deinen Hostnamen an. Weitere Informationen findest Du unter „[Konfigurieren eines Hosznamens](/enterprise/admin/guides/installation/configuring-a-hostname)“.

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

- Lege einen Domain Name System-Platzhaltereintrag (DNS) oder einzelne DNS-Einträge für die oben aufgelisteten Subdomains fest. Du solltest einen Eintrag für `*.HOSTNAME` erstellen, der auf die IP-Adresse Ihres Servers verweist, damit Du nicht für jede Subdomain mehrere Einträge erstellen musst.
- Rufe ein TLS-Zertifikat (Transport Layer Security) für `*.HOSTNAME` mit einem Subject Alternative Name (SAN) für `HOSTNAME` und die Wildcard-Domäne `*.HOSTNAME` ab. Wenn Dein Hostname beispielsweise `github.octoinc.com` lautet, rufe ein Zertifikat ab, in dem der Wert „Common Name“ (Gemeinsamer Name) auf `*.github.octoinc.com` festgelegt ist, und einen SAN-Wert, der auf `github.octoinc.com` und `*.github.octoinc.com` festgelegt ist.
- Aktiviere TLS auf deiner Appliance. Weitere Informationen findest du unter [Konfigurieren von TLS](/enterprise/admin/guides/installation/configuring-tls/).

## Subdomain-Isolation aktivieren

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. Wähle **Subdomänen-Isolation (empfohlen)** aus.
  ![Kontrollkästchen zum Aktivieren der Subdomänen-Isolation](/assets/images/enterprise/management-console/subdomain-isolation.png) {% data reusables.enterprise_management_console.save-settings %}
