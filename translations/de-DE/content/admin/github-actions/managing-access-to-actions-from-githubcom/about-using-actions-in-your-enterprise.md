---
title: Informationen zum Verwenden von Aktionen in deinem Unternehmen
intro: '{% data variables.product.product_name %} enthält die meisten von {% data variables.product.prodname_dotcom %} erstellten Aktionen und verfügt über Optionen vom Aktivieren des Zugriffs auf weitere Aktionen von {% data variables.product.prodname_dotcom_the_website %} und dem {% data variables.product.prodname_marketplace %} aus.'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-actions-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
shortTitle: About actions in your enterprise
ms.openlocfilehash: 2e18b932548aa7ad9b65c090b6a5418762bcb501
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139008'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Aktionen in {% data variables.product.product_name %}

Workflows von {% data variables.product.prodname_actions %} kannst _Aktionen_ verwenden, bei denen es sich um einzelne Vorgänge handelt, die du zum Erstellen von Aufträgen und dem Anpassen des Workflows kombinieren kannst. Du kannst eigene Aktionen erstellen oder Aktionen verwenden und anpassen, die von der {% data variables.product.prodname_dotcom %}-Community geteilt wurden.

{% data reusables.actions.enterprise-no-internet-actions %} Du kannst deine Entwickler*innen auf das Verwenden von Aktionen beschränken, die auf {% data variables.product.product_location %} gespeichert sind. Dazu gehören die meisten offiziellen Aktionen von {% data variables.product.company_short %} sowie alle von deinen Entwickler*innen erstellten Aktionen. Alternativ kannst du den Zugriff auf weitere Aktionen von {% data variables.product.prodname_dotcom_the_website %} konfigurieren, damit deine Entwickler*innen von sämtlichen Aktionen profitieren, die von Branchenführern und der Open-Source-Community erstellt wurden. 

Es wird empfohlen, den automatischen Zugriff auf alle Aktionen von {% data variables.product.prodname_dotcom_the_website %} zu ermöglichen. {% ifversion ghes %} Dies erfordert jedoch, dass {% data variables.product.product_name %} ausgehende Verbindungen mit {% data variables.product.prodname_dotcom_the_website %} herstellt. Wenn du diese Verbindungen nicht zulassen möchtest oder {% else %}wenn{% endif %} mehr Kontrolle darüber haben möchtest, welche Aktionen in deinem Unternehmen verwendet werden, kannst du manuell bestimmte Aktionen von {% data variables.product.prodname_dotcom_the_website %} synchronisieren.

## Offizielle Aktionen, die mit deiner Unternehmensinstanz gebündelt sind

{% data reusables.actions.actions-bundled-with-ghes %}

Die gebündelten, offiziellen Aktionen umfassen unter anderem die folgenden:
- `actions/checkout`
- `actions/upload-artifact`
- `actions/download-artifact`
- `actions/labeler`
- Verschiedene `actions/setup-`-Aktionen

Um alle offiziellen Aktionen in deiner Unternehmensinstanz anzuzeigen, navigiere zur Organisation `actions` in deiner Instanz: <code>https://<em>HOSTNAME</em>/actions</code>.

Zwischen {% data variables.product.product_location %} und {% data variables.product.prodname_dotcom_the_website %} wird keine Verbindung benötigt, um diese Aktionen zu nutzen.

Bei jeder Aktion handelt es sich um ein Repository in der Organisation `actions`, und jedes Aktions-Repository enthält die erforderlichen Tags, Branches und Commit-SHAs, mit denen deine Workflows auf die Aktion verweisen können. Informationen zum Aktualisieren der gebündelten, offiziellen Aktionen findest du unter [Verwenden der neuesten Version der offiziellen gebündelten Aktionen](/admin/github-actions/using-the-latest-version-of-the-official-bundled-actions).

{% note %}

**Hinweise:** 
- Wenn du Setupaktionen (z. B. `actions/setup-LANGUAGE`) in {% data variables.product.product_name %} mit selbst gehosteten Runnern verwendest, musst du eventuell den Toolscache für Runner ohne Internetzugriff einrichten. Weitere Informationen findest du unter [Einrichten des Toolcaches auf selbst gehosteten Runnern ohne Internetzugriff](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access).
- Wenn {% data variables.product.product_name %} aktualisiert wird, werden gebündelte Aktionen automatisch durch die Standardversionen im Upgradepaket ersetzt.

{% endnote %}

## Konfigurieren des Zugriffs auf Aktionen auf {% data variables.product.prodname_dotcom_the_website %}

{% data reusables.actions.access-actions-on-dotcom %}

Es wird empfohlen, den automatischen Zugriff auf alle Aktionen von {% data variables.product.prodname_dotcom_the_website %} zu ermöglichen. Dazu verwendest du {% data variables.product.prodname_github_connect %}, um {% data variables.product.product_name %} mit {% data variables.product.prodname_ghe_cloud %} zu integrieren. Weitere Informationen findest du unter [Aktivieren des automatischen Zugriffs auf Aktionen auf {% data variables.product.prodname_dotcom_the_website %} mithilfe von {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect). 

{% ifversion ghes %} {% note %}

**Hinweis:** Bevor du den Zugriff auf Aktionen auf {% data variables.product.prodname_dotcom_the_website %} konfigurieren kannst, musst du {% data variables.product.product_location %} so konfigurieren, dass {% data variables.product.prodname_actions %} verwendet werden. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server).


{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

{% data reusables.actions.enterprise-limit-actions-use %}

Wenn du über eine strenge Kontrolle verfügen möchtest, welche Aktionen in deinem Unternehmen zulässig sind oder du keine ausgehenden Verbindungen mit {% data variables.product.prodname_dotcom_the_website %} zulassen möchtest, kannst du Aktionen manuell mithilfe des `actions-sync`-Tools auf deine Unternehmensinstanz herunterladen und synchronisieren. Weitere Informationen findest du unter [Manuelles Synchronisieren von Aktionen von {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom).
