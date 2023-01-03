---
title: Hostname konfigurieren
intro: 'Es wird empfohlen, einen Hostnamen für deine Appliance festzulegen, anstatt eine hartcodierte IP-Adresse zu verwenden.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-hostnames
  - /enterprise/admin/installation/configuring-a-hostname
  - /enterprise/admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-a-hostname
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
ms.openlocfilehash: a12955707c3ebcfbb65e5be8053ea0b62bc82072
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147723231'
---
Wenn du einen Hostnamen konfigurierst, anstatt eine hartcodierte IP-Adresse zu verwenden, kannst du die physische Hardware ändern, auf der {% data variables.product.product_location %} ausgeführt wird, ohne dass sich dies auf die Benutzer oder auf die Clientsoftware auswirkt.

Die Einstellung des Hostnamens in der {% data variables.enterprise.management_console %} sollte auf einen geeigneten vollqualifizierten Domainnamen (FQDN) gesetzt werden, der im Internet oder in deinem internen Netzwerk auflösbar ist. Deine Hostnameneinstellung könnte beispielsweise `github.companyname.com.` sein. Web- und API-Anforderungen werden automatisch an den in der {% data variables.enterprise.management_console %} konfigurierten Hostnamen weitergeleitet. Beachte, dass `localhost` keine gültige Hostnameneinstellung ist. 

Hostnamen müssen gemäß [Abschnitt 2.3.4 des RFC für Domänennamenspezifikation](https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.4) weniger als 63 Zeichen lang sein.

Nachdem du einen Hostnamen konfiguriert hast, kannst du die Subdomain-Isolation aktivieren, um die Sicherheit von {% data variables.product.product_location %} weiter zu steigern. Weitere Informationen findest du unter [Aktivieren der Subdomain-Isolation](/enterprise/admin/guides/installation/enabling-subdomain-isolation/).

Weitere Informationen zu den unterstützten Hostnamentypen findest du im [Abschnitt 2.1 des HTTP-RFC](https://tools.ietf.org/html/rfc1123#section-2).

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. Gib den Hostnamen ein, den du für {% data variables.product.product_location %} festlegen möchtest.
  ![Feld zum Festlegen eines Hostnamens](/assets/images/enterprise/management-console/hostname-field.png)
5. Klicke zum Testen der DNS- und SSL-Einstellungen für den neuen Hostnamen auf **Domäneneinstellungen testen**.
  ![Schaltfläche „Domäneneinstellungen testen“](/assets/images/enterprise/management-console/test-domain-settings.png) {% data reusables.enterprise_management_console.test-domain-settings-failure %} {% data reusables.enterprise_management_console.save-settings %}

Um verschiedene Cross-Site Scripting-Sicherheitsrisiken zu verringern, solltest du die Subdomain-Isolation für {% data variables.product.product_location %} aktivieren, nachdem du einen Hostnamen konfiguriert hast. Weitere Informationen findest du unter [Aktivieren der Subdomain-Isolation](/enterprise/admin/guides/installation/enabling-subdomain-isolation/).
