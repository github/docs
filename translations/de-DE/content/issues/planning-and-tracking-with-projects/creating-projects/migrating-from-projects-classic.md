---
title: 'Migrieren von {% data variables.product.prodname_projects_v1 %}'
intro: 'Du kannst deine {% data variables.projects.projects_v1_board %}s in die neue Umgebung von {% data variables.product.prodname_projects_v2 %} migrieren.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/migrating-your-project
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e6db4fd8c6587f413ee0e6832dbae93bbf281573
ms.sourcegitcommit: 9bf175b190674416ad4e11b5c567409f74c00ad2
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/23/2022
ms.locfileid: '148181221'
---
{% note %}

**Hinweise:**

- Wenn das Projekt, das du migrierst, mehr als {% data variables.projects.item_limit %} Elemente enthält, werden offene Issues priorisiert, gefolgt von offenen Pull Requests und Anmerkungen. Der verbleibende Platz wird für geschlossene Issues sowie gemergte und geschlossene Pull Requests genutzt. Elemente, die aufgrund dieses Grenzwerts nicht migriert werden können, werden ins Archiv verschoben. Wenn der Archivgrenzwert von {% data variables.projects.archived_item_limit %} Elementen erreicht ist, werden keine weiteren Elemente migriert.
- Hinweiskarten werden in Issueentwürfe konvertiert, der Inhalt wird im Textkörper des Issueentwurfs gespeichert. Wenn Informationen fehlen sollten, mache alle verborgenen Felder sichtbar. Weitere Informationen findest du unter [Anzeigen und Ausblenden von Feldern](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#showing-and-hiding-fields).
- Automatisierungen werden nicht migriert.
- Selektierung, Archiv und Aktivität werden nicht migriert.
- Nach der Migration bleiben das neue migrierte Projekt und das alte Projekt nicht mehr synchronisiert.

{% endnote %}

## Informationen zur Projektmigration

Du kannst deine Projektboards zur neuen Umgebung von {% data variables.product.prodname_projects_v2 %} migrieren und Tabellen, mehrere Ansichten, neue Automatisierungsoptionen und leistungsstarke Feldtypen ausprobieren. Weitere Informationen findest du unter [Informationen zu Projekten](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects).

## Migrieren des Projektboards einer Organisation

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}
1. Klicke auf der linken Seite auf **Projekte (klassisch)** .
  ![Screenshot der Menüoption „Projekte“ (klassisch)}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}

## Migrieren eines Benutzerprojektboards

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_profile %}
1. Klicke oben auf deiner Profilseite in der Hauptnavigation auf {% octicon "table" aria-label="The project board icon" %} **Projekte**.
  ![Screenshot der Registerkarte „Projekte“](/assets/images/help/projects-v2/tab-projects.png)
1. Klicke über der Liste der Projekte auf **Projekte (klassisch)** .
  ![Screenshot der Menüoption „Projekte“ (klassisch)}](/assets/images/help/issues/projects-classic-user.png) {% data reusables.projects.migrate-project-steps %}

## Migrieren eines Repositoryprojektboards

{% note %}

**Hinweis:** Projekte auf Repositoryebene werden von {% data variables.projects.projects_v2_caps %} nicht unterstützt. Wenn du ein Repositoryprojektboard migrierst, wird es entweder in die Organisation oder in das persönliche Konto migriert, zu dem das Repositoryprojekt gehört, und das migrierte Projekt wird an das ursprüngliche Repository angeheftet.

{% endnote %}

{% data reusables.projects.enable-migration %} {% data reusables.repositories.navigate-to-repo %}
1. Klicke unter dem Namen des Repositorys auf {% octicon "table" aria-label="The project board icon" %} **Projekte**.
![Registerkarte „Projekte“](/assets/images/help/projects-v2/repo-tabs-projects.png)
1. Klicke auf **Projekte (klassisch)** .
  ![Screenshot der Menüoption „Projekte“ (klassisch)}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}
