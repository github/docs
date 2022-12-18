---
title: Personen mit Zugriff auf dein Repository anzeigen
intro: Du kannst{% ifversion ghec or ghes or ghae %} anzeigen und{% endif %} eine Liste mit Personen exportieren, die Zugriff auf ein Repository innerhalb einer Organisation haben.
redirect_from:
- /articles/viewing-people-with-access-to-your-repository
- /github/setting-up-and-managing-organizations-and-teams/viewing-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: View people with access
permissions: Organization owners can view people with access to a repository.
ms.openlocfilehash: 01ee5b1844e32b4ba631fda67babaa9e9f8a982e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147066634"
---
## Informationen zur Liste der Personen mit Zugriff auf dein Repository

Anhand dieser Informationen kannst du außenstehende Personen unterstützen, Daten für Compliance-Zwecke erfassen und andere allgemeine Sicherheitsüberprüfungen durchführen. 

{% ifversion fpt %} Organisationen, die {% data variables.product.prodname_ghe_cloud %} verwenden, können auch eine CSV-Liste von Personen exportieren, die Zugriff auf ein Repository haben. Weitere Informationen findest du unter [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-access-to-your-organizations-repositories/viewing-people-with-access-to-your-repository).
{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} ![ Übersicht über die Zugriffsverwaltung](/assets/images/help/repository/manage-access-overview.png) {% else %} ![Liste mit Berechtigungen für Personen im Repository](/assets/images/help/repository/repository-permissions-list.png) {% endif %}
## Personen mit Zugriff auf dein Repository anzeigen

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Du kannst eine kombinierte Übersicht über Teams und Personen mit Zugriff auf dein Repository in deinen Repositoryeinstellungen sehen. Weitere Informationen findest du unter „[Verwalten von Teams und Personen mit Zugriff auf dein Repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories)“. {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %} {% endif %}

{% ifversion ghec or ghes or ghae %}
## Liste der Personen mit Zugriff auf dein Repository exportieren

{% ifversion ghec %} {% note %}

**Hinweis:** Nur Organisationen, die {% data variables.product.prodname_ghe_cloud %} verwenden, können eine Liste von Personen mit Zugriff auf ein Repository exportieren. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.accessing-repository-people %}
4. Klicke auf **CSV exportieren**.
  ![Registerkarte „Personen“ in der Repository-Seitenleiste](/assets/images/help/repository/export-repository-permissions.png) {% endif %}
