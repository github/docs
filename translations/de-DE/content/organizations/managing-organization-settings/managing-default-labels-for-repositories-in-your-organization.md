---
title: Standardkennzeichnungen für Repositorys in Ihrer Organisation verwalten
intro: 'Du kannst die Kennzeichnungen anpassen, die in jedem neuen Repository deiner Organisation enthalten sind.'
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-default-labels-for-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default labels
ms.openlocfilehash: a2591c84d3844bfdadc3c7321d7ce8eec2adf293
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125729'
---
Organisationsinhaber können die Standardkennzeichnungen für Repositorys in der Organisation verwalten.

Standardkennzeichnungen sind in jedem neuen Repository Deiner Organisation beinhaltet, aber jeder mit Schreibzugriff auf das Repository kann die Kennzeichnungen in diesem Repository später bearbeiten oder löschen. Standardkennzeichnungen hinzuzufügen, zu bearbeiten oder zu löschen wird diese Kennzeichnungen für bestehende Repositorys weder hinzufügen noch bearbeiten oder löschen.

## Eine Standardkennzeichnung erstellen

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

5. Klicke unter „Repositorybezeichnungen“ auf **Neue Bezeichnung**.
  ![Schaltfläche „Neue Bezeichnung“](/assets/images/help/organizations/new-label-button.png) {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.create-label %}

## Eine Standardkennzeichnung bearbeiten

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.edit-label %} {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.save-label %}

## Eine Standardkennzeichnung löschen

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.delete-label %} {% data reusables.project-management.confirm-label-deletion %}

## Weiterführende Themen

- [Informationen zu Kennzeichnungen](/articles/about-labels)
