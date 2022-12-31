---
title: Konfigurieren eines ausgehenden Webproxyservers
intro: 'Ein Proxyserver bietet eine zusätzliche Sicherheitsebene für {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-a-proxy-server
  - /enterprise/admin/installation/configuring-an-outbound-web-proxy-server
  - /enterprise/admin/configuration/configuring-an-outbound-web-proxy-server
  - /admin/configuration/configuring-an-outbound-web-proxy-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure an outbound proxy
ms.openlocfilehash: 4285f24dd45d127efec4ace66729bf6fd1f188c5
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876790'
---
## Informationen zu Proxys mit {% data variables.product.product_name %}

Wenn ein Proxyserver für {% data variables.product.product_location %} aktiviert ist, werden ausgehende Nachrichten, die von {% data variables.product.prodname_ghe_server %} gesendet wurden, zunächst über den Proxyserver geleitet, sofern der Zielhost nicht als HTTP-Proxyausschluss hinzugefügt wurde. Zu den Typen ausgehender Nachrichten zählen ausgehende Webhooks, das Hochladen von Bundles und das Abrufen von veralteten Avataren. Die URL des Proxyservers ist die Protokoll-, Domänen- oder IP-Adresse plus die Portnummer, also beispielsweise `http://127.0.0.1:8123`.

{% note %}

**Hinweis**: Um {% data variables.product.product_location %} mit {% data variables.product.prodname_dotcom_the_website %} zu verbinden, muss deine Proxykonfiguration Konnektivität mit `github.com` und `api.github.com` zulassen. Weitere Informationen findest du unter [Verbinden deines Unternehmenskontos mit {% data variables.product.prodname_dotcom_the_website %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud).

{% endnote %}

{% data reusables.actions.proxy-considerations %} Weitere Informationen zum Verwenden von {% data variables.product.prodname_actions %} mit {% data variables.product.prodname_ghe_server %} findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_server %}](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server).

## Konfigurieren eines ausgehenden Webproxyservers

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
1. Gib unter **HTTP-Proxyserver** die URL deines Proxyservers ein.
  ![Feld zur Eingabe der HTTP-Proxyserver-URL](/assets/images/enterprise/management-console/http-proxy-field.png)
  
5. Gib optional unter **HTTP-Proxyausschluss** die Hosts ein, für die kein Proxyzugriff erforderlich ist, und trenne dabei die Hosts durch Kommas voneinander. Um alle Hosts in einer Domäne von der Anforderung des Proxyzugriffs auszuschließen, kannst du `.` als Platzhalterpräfix verwenden.  Beispiel: `.octo-org.tentacle`
  ![Feld zur Eingabe von HTTP-Proxyausschlüssen](/assets/images/enterprise/management-console/http-proxy-exclusion-field.png)

{% data reusables.enterprise_management_console.save-settings %}
