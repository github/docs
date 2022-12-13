---
title: Migrieren deines Projekts zu „Projekte“ (Beta)
intro: Du kannst deine Projekte aus der alten Projektumgebung zu „Projekte“ (Beta) migrieren.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 9361f3f28d3d365ecbb6053e908644cc8f34f1d0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "147080220"
---
{% note %}

**Hinweise:**

- „Projekte“ (Beta) ist derzeit in der öffentlichen Betaphase und kann sich noch ändern.
- Wenn das Projekt, das du migrierst, mehr als 1.200 Elemente enthält, werden offene Issues priorisiert, gefolgt von offenen Pull Requests und dann Hinweisen. Der verbleibende Platz wird für geschlossene Issues sowie gemergte und geschlossene Pull Requests genutzt. Elemente, die aufgrund dieses Grenzwerts nicht migriert werden können, werden ins Archiv verschoben. Wenn der Archivgrenzwert von 10.000 Elementen erreicht ist, werden weitere Elemente nicht migriert.
- Hinweiskarten werden in Issue-Entwürfe konvertiert, der Inhalt wird im Textkörper des Issue-Entwurfs gespeichert. Wenn Informationen fehlen sollten, mache alle verborgenen Felder sichtbar. Weitere Informationen findest du unter [Anzeigen und Ausblenden von Feldern](/issues/trying-out-the-new-projects-experience/customizing-your-project-views#showing-and-hiding-fields).
- Automatisierungen werden nicht migriert.
- Selektierung, Archiv und Aktivität werden nicht migriert.
- Nach der Migration bleiben das neue migrierte Projekt und das alte Projekt nicht mehr synchronisiert.

{% endnote %}

## <a name="about-project-migration"></a>Informationen zur Projektmigration

Du kannst deine Projektboards zur neuen Umgebung von „Projekte“ (Beta) migrieren und Tabellen, mehrere Ansichten, neue Automatisierungsoptionen und leistungsstarke Feldtypen ausprobieren. Weitere Informationen findest du unter [Informationen zu Projekten (Beta)](/issues/trying-out-the-new-projects-experience/about-projects).

## <a name="migrating-an-organization-project-board"></a>Migrieren eines Organisationsprojektboards

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}
1. Klicke auf der linken Seite auf **Projekte (klassisch)** .
  ![Screenshot der Menüoption „Projekte“ (klassisch)}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}

## <a name="migrating-a-user-project-board"></a>Migrieren eines Benutzerprojektboards

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_profile %}
1. Klicke oben auf deiner Profilseite in der Hauptnavigation auf {% octicon "project" aria-label="The project board icon" %} **Projekte**.
![Registerkarte „Projekte“](/assets/images/help/projects/user-projects-tab.png)
1. Klicke über der Liste der Projekte auf **Projekte (klassisch)** .
  ![Screenshot der Menüoption „Projekte“ (klassisch)}](/assets/images/help/issues/projects-classic-user.png) {% data reusables.projects.migrate-project-steps %}

## <a name="migrating-a-repository-project-board"></a>Migrieren eines Repositoryprojektboards

{% note %}

**Hinweis:** „Projekte“ (Beta) unterstützt keine Projekte auf Repositoryebene. Wenn du ein Repositoryprojektboard migrierst, wird es entweder in die Organisation oder in das persönliche Konto migriert, das Besitzer des Repositoryprojekts ist, und das migrierte Projekt wird an das ursprüngliche Repository angeheftet.

{% endnote %}

{% data reusables.projects.enable-migration %} {% data reusables.repositories.navigate-to-repo %}
1. Klicke unter dem Namen des Repositorys auf {% octicon "project" aria-label="The project board icon" %} **Projekte**.
![Registerkarte „Projekte“](/assets/images/help/projects/repo-tabs-projects.png)
1. Klicke auf **Projekte (klassisch)** .
  ![Screenshot der Menüoption „Projekte“ (klassisch)}](/assets/images/help/issues/projects-classic-org.png) {% data reusables.projects.migrate-project-steps %}
