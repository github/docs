---
title: Bereitstellungsaktivitäten für Dein Repository anzeigen
intro: Du kannst Informationen zu Bereitstellungen für Dein gesamtes Repository oder für einen bestimmten Pull Request anzeigen.
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/viewing-deployment-activity-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View deployment activity
ms.openlocfilehash: 395f25648609801ee376b3f689c11bb651c23195
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132033'
---
{% note %}

**Hinweis:** Das Dashboard für Bereitstellungen liegt derzeit als Beta-Funktion vor und kann geändert werden.

{% endnote %}

Personen mit Lesezugriff auf ein Repository können eine Zusammenfassung sämtlicher aktueller Bereitstellungen und ein Protokoll der letzten Bereitstellungsaktivität anzeigen, sofern der Bereitstellungs-Workflow des Repositorys über die API für Bereitstellungen oder über eine App aus [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment) in {% data variables.product.product_name %} integriert ist. Weitere Informationen findest du unter [Bereitstellungen](/rest/reference/repos#deployments).

Darüber hinaus können Bereitstellungsinformationen auf der Registerkarte „Conversation“ (Unterhaltung) eines Pull-Requests angezeigt werden.

## Dashboard für Bereitstellungen anzeigen

{% data reusables.repositories.navigate-to-repo %}
2. Klicke rechts neben der Liste der Dateien auf **Umgebungen**.
![Umgebungen auf der rechten Seite des Repositorys](/assets/images/help/repository/environments.png)

## Weiterführende Themen
 - [Informationen zu Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
