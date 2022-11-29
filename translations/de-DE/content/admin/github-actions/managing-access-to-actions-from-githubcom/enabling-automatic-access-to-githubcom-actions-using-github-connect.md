---
title: Aktivieren des automatischen Zugriffs auf GitHub.com-Aktionen mit GitHub Connect
intro: 'Damit {% data variables.product.prodname_actions %} in deinem Unternehmen Aktionen von {% data variables.product.prodname_dotcom_the_website %} durchführen kann, kannst du deine Unternehmensinstanz mit {% data variables.product.prodname_ghe_cloud %} verbinden.'
permissions: 'Enterprise owners can enable access to all {% data variables.product.prodname_dotcom_the_website %} actions.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
  - /admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
shortTitle: Use GitHub Connect for actions
ms.openlocfilehash: e666929288a63dc35ffe98a734918e3495579939
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107261'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zum automatischen Zugriff auf {% data variables.product.prodname_dotcom_the_website %}-Aktionen

Standardmäßig können in {% data variables.product.prodname_actions %}-Workflows in {% data variables.product.product_name %} keine Aktionen direkt von {% data variables.product.prodname_dotcom_the_website %} oder [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) verwendet werden. Du kannst {% data variables.product.prodname_github_connect %} dazu verwenden, {% data variables.product.product_name %} mit {% data variables.product.prodname_ghe_cloud %} zu integrieren, um alle Aktionen von {% data variables.product.prodname_dotcom_the_website %} in deiner Unternehmensinstanz verfügbar zu machen. 

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

Wenn du über eine strenge Kontrolle darüber verfügen möchtest, welche Aktionen in deinem Unternehmen zulässig sind, kannst du alternativ dazu mit dem `actions-sync`-Tool Aktionen manuell in deine Unternehmensinstanz herunterladen und synchronisieren. Weitere Informationen findest du unter [Manuelles Synchronisieren von Aktionen von {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom).

## Informationen zur Auflösung von Aktionen mit {% data variables.product.prodname_github_connect %}

{% data reusables.actions.github-connect-resolution %}

Wenn ein*e Benutzer*in bereits eine Organisation und ein Repository im Unternehmen erstellt hat, die bzw. das einem Organisations- und Repositorynamen auf {% data variables.product.prodname_dotcom_the_website %} entspricht, wird das Repository in deinem Unternehmen anstelle des {% data variables.product.prodname_dotcom_the_website %}-Repositorys verwendet. {% ifversion ghae %}Ein böswilliger Benutzer könnte diese Vorgehensweise ausnutzen, um Code als Teil eines Workflows auszuführen.{% else %}Weitere Informationen findest du unter [Automatisches Deaktivieren von Namespaces für Aktionen, auf die über {% data variables.product.prodname_dotcom_the_website%} zugegriffen wird](#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom).
{% endif %}

## Aktivieren des automatischen Zugriffs auf alle {% data variables.product.prodname_dotcom_the_website %}-Aktionen

Bevor du den Zugriff auf alle Aktionen von {% data variables.product.prodname_dotcom_the_website %} für dein Unternehmen aktivierst, musst du folgende Schritte ausführen{% ifversion ghes %}:
- Konfiguriere {% data variables.location.product_location %} für die Verwendung von {% data variables.product.prodname_actions %}. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server).
- Aktiviere {% else %} aktiviere{% endif %} {% data variables.product.prodname_github_connect %}. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. Verwende unter „Users can utilize actions from GitHub.com in workflow runs“ (Benutzer können Aktionen von GitHub.com in Workflowausführungen nutzen), das Dropdownmenü, und wähle **Enabled** (Aktiviert) aus.
  ![Dropdownmenü zu Aktionen von GitHub.com in Workflowausführungen](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down-ae.png)
1. {% data reusables.actions.enterprise-limit-actions-use %}

## Automatisches Deaktivieren von Namespaces für Aktionen, auf die über {% data variables.product.prodname_dotcom_the_website %} zugegriffen wird

Wenn du {% data variables.product.prodname_github_connect %} aktivierst, nehmen Benutzer für bestehende Workflows keine Änderung am Systemverhalten wahr, da von {% data variables.product.prodname_actions %} die {% data variables.location.product_location %} nach den einzelnen Aktionen durchsucht wird, bevor auf {% data variables.product.prodname_dotcom_the_website%} zurückgegriffen wird. Dadurch wird sichergestellt, dass alle benutzerdefinierten Versionen der von deinem Unternehmen erstellten Aktionen vorrangig vor ihren Pendants auf {% data variables.product.prodname_dotcom_the_website%} verwendet werden.

Durch automatisches Deaktivieren von Namespaces für Aktionen, auf die über {% data variables.product.prodname_dotcom_the_website %} zugegriffen wird, wird die Gefahr von Man-in-the-Middle-Angriffen durch einen böswilligen Benutzer, der auf {% data variables.location.product_location %} zugreifen kann, ausgeschlossen. Wenn eine Aktion auf {% data variables.product.prodname_dotcom_the_website %} zum ersten Mal verwendet wird, wird der entsprechende Namespace in {% data variables.location.product_location %} deaktiviert. Dadurch wird verhindert, dass ein*e Benutzer*in eine Organisation und ein Repository in deinem Unternehmen erstellen kann, die bzw. das dem Namen dieser Organisation und des Repositorys auf {% data variables.product.prodname_dotcom_the_website %} entspricht. So wird sichergestellt, dass beim Ausführen eines Workflows immer die beabsichtigte Aktion ausgeführt wird.

Wenn du nach Verwendung einer Aktion von {% data variables.product.prodname_dotcom_the_website %} eine Aktion in {% data variables.location.product_location %} mit demselben Namen erstellen möchtest, musst du zunächst den Namespace für diese Organisation und das Repository verfügbar machen.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Klicke in der linken Randleiste unter **Site admin** (Websiteadministrator) auf **Retired Namespaces** (Deaktivierte Namespaces).
3. Suche den Namespace, den du in {% data variables.location.product_location %} verwenden möchtest, und klicke auf **Deaktivierung aufheben**.
   ![Aufheben der Deaktivierung des Namespace](/assets/images/enterprise/site-admin-settings/unretire-namespace.png)
4. Wechsle zur relevanten Organisation, und erstelle ein neues Repository.

   {% tip %}

   **Tipp:** Wenn du die Deaktivierung eines Namespace aufhebst, erstellst du das neue Repository mit diesem Namen immer so schnell wie möglich. Wenn von einem Workflow die zugeordnete Aktion auf {% data variables.product.prodname_dotcom_the_website %} aufgerufen wird, bevor du das lokale Repository erstellst, wird der Namespace wieder deaktiviert. Bei Aktionen, die in häufig ausgeführten Workflows verwendet werden, kann es passieren, dass ein Namespace wieder deaktiviert wird, noch bevor du Zeit zum Erstellen des lokalen Repositorys hast. In diesem Fall kannst du die relevanten Workflows vorübergehend deaktivieren, bis du das neue Repository erstellt hast.

   {% endtip %}
