---
title: Informationen zu Organisationen
intro: 'Bei Organisationen handelt es sich um freigegebene Konten mit komplexen Sicherheits- und Verwaltungsfeatures, in denen Unternehmen und Open-Source-Projekte an vielen Projekten gleichzeitig zusammenarbeiten können.'
redirect_from:
  - /articles/about-organizations
  - /github/setting-up-and-managing-organizations-and-teams/about-organizations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 0269554568c8781706a8d79600f5b6191d0b9598
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164331'
---
## Informationen zu Organisationen

{% data reusables.organizations.about-organizations %} Weitere Informationen zu Kontotypen findest du unter [Arten von {% data variables.product.prodname_dotcom %}-Konten](/get-started/learning-about-github/types-of-github-accounts).

Du kannst eine unbegrenzte Anzahl von Personen zu deiner Organisation einladen und diesen Organisationsmitgliedern dann verschiedene Rollen zuteilen, die unterschiedlichen Zugriff auf die Organisation und deren Daten gewähren. Weitere Informationen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

Zusätzlich zum Verwalten des Zugriffs auf die Organisation selbst, kannst du getrennt davon den Zugriff auf die Repositorys, Projektboards und Apps der Organisation verwalten. Weitere Informationen findest du unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization), [Projektboardberechtigungen für eine Organisation](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization) und [Verwalten des Zugriffs auf die Apps deiner Organisation](/organizations/managing-access-to-your-organizations-apps).

Um die Zugriffsverwaltung zu vereinfachen und die Zusammenarbeit zu verbessern, kannst du geschachtelte Teams mit kaskadierenden Zugriffsberechtigungen und Erwähnungen erstellen, die die Struktur deiner Gruppe widerspiegeln. Weitere Informationen findest du unter [Informationen zu Teams](/organizations/organizing-members-into-teams/about-teams).

Du kannst die Organisation für die speziellen Bedürfnisse deiner Gruppe konfigurieren, indem du die Einstellungen verwaltest. Du kannst beispielsweise die Arten von Repositorys einschränken, die Mitglieder erstellen können. Weitere Informationen findest du unter [Verwalten von Organisationseinstellungen](/organizations/managing-organization-settings).

Um die Sicherheit deiner Organisation zu härten, kannst du Sicherheitsanforderungen erzwingen und das Überwachungsprotokoll der Organisation überprüfen. Weitere Informationen findest du unter „[Schutz deiner Organisation](/organizations/keeping-your-organization-secure).“

Informationen zum effektiven Einsatz von Organisationen findest du unter [Bewährte Methoden für Organisationen](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations).

{% ifversion fpt or ghec %}
## Informationen zur Featureverfügbarkeit

{% data reusables.organizations.organization-plans %} {% endif %}

## Organisationen und Enterprise-Konten

{% ifversion fpt %} Unternehmenskonten sind ein Feature von {% data variables.product.prodname_ghe_cloud %}, mit dem Besitzer*innen die Richtlinien und Abrechnung für mehrere Organisationen zentral verwalten können. Weitere Informationen findest du unter [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations).
{% else %} {% ifversion ghec %} Bei Organisationen, die zu einem Unternehmenskonto gehören, wird die Abrechnung auf Unternehmenskontoebene verwaltet, und die Abrechnungseinstellungen sind auf Organisationsebene nicht verfügbar.{% endif %} Unternehmensbesitzer*innen können Richtlinien für alle Organisationen im Unternehmenskonto festlegen oder es Organisationsbesitzer*innen gestatten, die Richtlinie auf Organisationsebene festzulegen. Organisationsinhaber können die für deine Organisation erzwungenen Einstellungen auf der Ebene des Enterprise-Kontos nicht ändern. Wenn du Fragen zu einer Richtlinie oder einer Einstellung für deine Organisation hast, wende Dich an den Inhaber deines Enterprise-Kontos.

{% ifversion ghec %} {% data reusables.enterprise.create-an-enterprise-account %} Weitere Informationen findest du unter [Erstellen eines Unternehmenskontos](/admin/overview/creating-an-enterprise-account).

{% data reusables.enterprise-accounts.invite-organization %}

{% endif %} {% endif %}

{% ifversion fpt or ghec %}
## Nutzungsbedingungen und Datenschutz für Organisationen

Eine Entität, beispielsweise ein Unternehmen, eine gemeinnützige Organisation oder eine Gruppe, kann die Standardnutzungsbedingungen oder die Unternehmensnutzungsbedingungen für ihre Organisation akzeptieren. Weitere Informationen findest du unter [Upgrade auf die Vertragsbedingungen für Unternehmen](/articles/upgrading-to-the-corporate-terms-of-service).

{% endif %}
