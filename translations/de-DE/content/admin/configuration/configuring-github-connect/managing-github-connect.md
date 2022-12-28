---
title: Verwalten von GitHub Connect
shortTitle: Manage GitHub Connect
intro: 'Du kannst auf zusätzliche Features und Workflows für {% data variables.location.product_location %} zugreifen, indem du {% data variables.product.prodname_github_connect %} aktivierst.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
ms.openlocfilehash: 30a170543b63c390aa8975b1ca57c265bc7fa8fa
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160649'
---
{% data reusables.github-connect.beta %}

## Informationen zu {% data variables.product.prodname_github_connect %}

Du kannst auf zusätzliche Features und Workflows für {% data variables.location.product_location %} zugreifen, indem du {% data variables.product.prodname_github_connect %} aktivierst. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect).

Wenn du {% data variables.product.prodname_github_connect %} aktivierst, konfiguriere eine Verbindung zwischen {% data variables.location.product_location %} und einem Organisations- oder Unternehmenskonto für {% data variables.product.prodname_ghe_cloud %}. {% data reusables.github-connect.connection-port-protocol %}

Die Aktivierung von {% data variables.product.prodname_github_connect %} erstellt eine {% data variables.product.prodname_github_app %}, die dem Organisations- oder Unternehmenskonto auf {% data variables.product.prodname_ghe_cloud %} gehört. {% data variables.product.product_name %} verwendet die Anmeldeinformationen von {% data variables.product.prodname_github_app %}, um Anforderungen an {% data variables.product.prodname_ghe_cloud %} zu stellen.

{% ifversion ghes %} {% data variables.product.prodname_ghe_server %} speichert Anmeldeinformationen aus der {% data variables.product.prodname_github_app %}. Diese Anmeldeinformationen werden zu allen Knoten in einer Hochverfügbarkeits- oder Clusteringumgebung repliziert und in von {% data variables.product.prodname_enterprise_backup_utilities %} erstellten Sicherungen, einschließlich Momentaufnahmen, gespeichert.
- Ein Authentifizierungstoken, das eine Stunde lang gültig ist
- Ein privater Schlüssel, der zum Generieren eines neuen Authentifizierungstokens {% endif %} verwendet wird

## Voraussetzungen

Um {% data variables.product.prodname_github_connect %} zu verwenden, musst du über ein Organisations- oder Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %} verfügen, das {% data variables.product.prodname_ghe_cloud %} verwendet. Möglicherweise ist {% data variables.product.prodname_ghe_cloud %} bereits in deinem Plan enthalten. {% data reusables.enterprise.link-to-ghec-trial %}

{% ifversion ghes %} Wenn deine Organisations- oder Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %} IP-Zulassungslisten verwendet, musst du die IP-Adresse oder das Netzwerk für {% data variables.location.product_location %} zu deiner IP-Zulassungsliste auf {% data variables.product.prodname_dotcom_the_website %} hinzufügen. Weitere Informationen findest du in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation unter [Verwalten zulässiger IP-Adressen für deine Organisation](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization) und [Erzwingen von Richtlinien für Sicherheitseinstellungen in deinem Unternehmen](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise).

Um eine Verbindung zu konfigurieren, muss deine Proxykonfiguration die Konnektivität mit `github.com`, `api.github.com` und `uploads.github.com` zulassen. Weitere Informationen findest du unter [Konfigurieren eines ausgehenden Webproxyservers](/enterprise/admin/guides/installation/configuring-an-outbound-web-proxy-server).
{% endif %}

## {% data variables.product.prodname_github_connect %} aktivieren

Unternehmensbesitzer*innen, die auch Besitzer*innen eines Organisations- oder Unternehmenskontos sind, das {% data variables.product.prodname_ghe_cloud %} verwendet, können {% data variables.product.prodname_github_connect %} aktivieren.

Wenn du {% data variables.location.product_location %} mit einer Organisation auf {% data variables.product.prodname_ghe_cloud %} verbindest, die nicht zu einem Unternehmenskonto gehört, musst du dich bei {% data variables.product.prodname_dotcom_the_website %} als Organisationsbesitzer*in anmelden.

Wenn du {% data variables.location.product_location %} mit einer Organisation auf {% data variables.product.prodname_ghe_cloud %} verbindest, die zu einem Unternehmenskonto oder einem Unternehmen selbst gehört, musst du dich bei {% data variables.product.prodname_dotcom_the_website %} als Unternehmensbesitzer*in anmelden.

{% ifversion ghes %}
1. Melde dich bei {% data variables.location.product_location %} und {% data variables.product.prodname_dotcom_the_website %} an.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Melde dich bei {% data variables.location.product_location %} und {% data variables.product.prodname_dotcom_the_website %} an.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. Klicke unter „{% data variables.product.prodname_github_connect %} noch nicht aktiviert“, und klicke auf **{% data variables.product.prodname_github_connect %} aktivieren**. Durch Klicken auf **{% data variables.product.prodname_github_connect %} aktivieren** erklärst du dich mit den <a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">{% data variables.product.prodname_dotcom %}-Bedingungen für zusätzliche Produkte und Funktionen</a> einverstanden.
{% ifversion ghes %} ![Schaltfläche „GitHub Connect aktivieren“](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %} ![Schaltfläche „GitHub Connect aktivieren“](/assets/images/enterprise/github-ae/enable-github-connect-button.png){% endif %}
1. Klicke neben dem Unternehmenskonto oder der Organisation, das bzw. die du verbinden möchtest, auf **Verbinden**.
  ![Schaltfläche „Verbinden“ neben einem Unternehmenskonto oder einer Organisation](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## Deaktivieren von {% data variables.product.prodname_github_connect %}

Unternehmensbesitzer*innen können {% data variables.product.prodname_github_connect %} deaktivieren.

Wenn du die Verbindung zur {% data variables.product.prodname_ghe_cloud %} trennst, wird die {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} aus deinem Unternehmenskonto oder deiner Organisation gelöscht. Zudem werden die auf {% data variables.location.product_location %} gespeicherten Anmeldeinformationen gelöscht.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. Klicke neben dem Unternehmenskonto oder der Organisation, das bzw. die du trennen möchtest, auf **{% data variables.product.prodname_github_connect %} deaktivieren**.
{% ifversion ghes %} ![Schaltfläche „GitHub Connect deaktivieren“ neben einem Unternehmenskonto oder Organisationsnamen](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. Lies die Informationen zum Trennen, und klicke auf **{% data variables.product.prodname_github_connect %} deaktivieren**.
  ![Modalfenster mit Warnhinweisen zur Trennung und Schaltfläche zur Bestätigung](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)  
{% else %} ![Schaltfläche „GitHub Connect deaktivieren“ neben einem Unternehmenskonto oder Organisationsnamen](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. Lies die Informationen zum Trennen, und klicke auf **{% data variables.product.prodname_github_connect %} deaktivieren**.
  ![Modalfenster mit Warnhinweisen zur Trennung und Schaltfläche zur Bestätigung](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png) {% endif %} 
