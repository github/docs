---
title: Exportieren von Serverstatistiken
shortTitle: Export Server Statistics
intro: 'Du kannst deine eigenen Tools verwenden, um deine {% data variables.product.prodname_ghe_server %}-Nutzung im Zeitverlauf zu analysieren, indem du deine {% data variables.product.prodname_server_statistics %}-Metriken in einer CSV- oder JSON-Datei herunterlädst.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/exploring-server-statistics
ms.openlocfilehash: 4e8fa1d040303ec569d11a8a41708ede10b3e76e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718165'
---
Du kannst die {% data variables.product.prodname_server_statistics %}-Daten der letzten 365 Tage als CSV- oder JSON-Datei herunterladen. Diese Daten enthalten aggregierte Metriken zu Repositorys, Issues und Pull Requests, die dazu beitragen können, die Bedürfnisse deiner Organisation zu antizipieren, zu verstehen, die Arbeit deines Teams nachzuvollziehen und den Nutzen darzustellen, den du aus {% data variables.product.prodname_ghe_server %} ziehst. 

Du musst {% data variables.product.prodname_server_statistics %} aktivieren, bevor du diese Daten herunterladen kannst. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_server_statistics %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise). 

Weitere Informationen zum Anzeigen einer Vorschau für die herunterladbaren Metriken findest du unter [Informationen zu {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics).

Du musst Unternehmensbesitzer oder Organisationsbesitzer in {% data variables.product.prodname_ghe_cloud %} sein, um diese Metriken herunterladen zu können.
  - Wenn {% data variables.product.product_location %} mit einem Unternehmenskonto in {% data variables.product.prodname_ghe_cloud %} verknüpft ist, findest du weitere Informationen unter [Herunterladen von Metriken aus deinem Unternehmenskonto](#downloading-metrics-from-your-enterprise-account).
  - Wenn {% data variables.product.product_location %} mit einer Organisation in {% data variables.product.prodname_ghe_cloud %} verknüpft ist, findest du weitere Informationen unter [Herunterladen von Metriken aus deiner Organisation](#downloading-metrics-from-your-organization).

Weitere Informationen zu {% data variables.product.prodname_github_connect %} findest du unter [Informationen zu {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect).

## Herunterladen von Metriken aus deinem Unternehmenskonto

1. Klicke in der oberen rechten Ecke von {% data variables.product.prodname_ghe_cloud %} auf dein Profilfoto und dann auf **Deine Unternehmen**.
  ![Dropdownmenü mit Option „Deine Unternehmen“](/assets/images/help/enterprises/enterprise-admin-account-settings.png)

2. Klicke neben dem gewünschten Unternehmenskonto auf **Einstellungen**.
  ![Schaltfläche „Einstellungen“ neben dem Enterprise-Administratorkonto](/assets/images/help/enterprises/enterprise-admin-account-settings-button.png)

3. Klicke auf der linken Seite auf **GitHub Connect**.
  ![Option „GitHub Connect“ im Enterprise-Administratorkonto](/assets/images//help/enterprises/enterprise-admin-github-connect.png)

{% data reusables.server-statistics.csv-download %}

## Herunterladen von Metriken aus deiner Organisation

1. Klicke in der oberen rechten Ecke von {% data variables.product.prodname_ghe_cloud %} auf dein Profilfoto und dann auf **Deine Organisationen**.
  ![Dropdownmenü mit Option „Deine Organisationen“](/assets/images/help/enterprises/github-enterprise-cloud-organizations.png)

2. Klicke in der Liste der Organisationen neben der Organisation, die mit {% data variables.product.product_location %} verknüpft ist, auf **Einstellungen**.
  ![Schaltfläche „Einstellungen“ neben der {% data variables.product.prodname_ghe_cloud %}-Organisation](/assets/images/help/enterprises/settings-for-ghec-org.png)

3. Klicke auf der linken Seite auf **GitHub Connect**.
  ![Option „GitHub Connect“ auf der linken Seitenleiste der Einstellungen eines Organisationskontos](/assets/images/help/enterprises/github-connect-option-for-ghec-org.png)

{% data reusables.server-statistics.csv-download %}
