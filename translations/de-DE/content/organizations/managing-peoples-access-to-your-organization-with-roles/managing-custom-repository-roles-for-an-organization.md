---
title: Verwalten benutzerdefinierter Repositoryrollen für eine Organisation
intro: 'Du kannst benutzerdefinierte Repositoryrollen für deine Organisation erstellen, bearbeiten oder löschen.'
permissions: Organization owners can manage custom repository roles.
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: Manage custom roles
redirect_from:
  - /early-access/github/articles/managing-custom-repository-roles-for-an-organization
ms.openlocfilehash: f7f8be4eda3ecf62a1b587a509881f9fee1a463f
ms.sourcegitcommit: ca040a1871ab5e929b596686ef955b02c5afa051
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/02/2022
ms.locfileid: '148131002'
---
{% data reusables.organizations.custom-repo-roles-ghec-only %}

## Informationen zu benutzerdefinierten Repositoryrollen

{% data reusables.organizations.about-custom-repo-roles %} Weitere Informationen findest du unter „[Informationen zu benutzerdefinierten Repositoryrollen](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles)“.

## Erstellen einer Repositoryrolle

Um eine neue Repositoryrolle zu erstellen, füge Berechtigungen zu einer geerbten Rolle hinzu und geben der benutzerdefinierten Rolle einen Namen.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
5. Klicke auf **Rolle erstellen**.
  ![Screenshot der Schaltfläche „Rolle erstellen“](/assets/images/help/organizations/repository-role-create-role.png)
4. Gib unter „Name“ den Namen deiner Repositoryrolle ein.
  ![Feld zum Eingeben eines Namens für die Repositoryrolle](/assets/images/help/organizations/repository-role-name.png)
5. Gib unter „Beschreibung“ eine Beschreibung deiner Repositoryrolle ein.
  ![Feld zum Eingeben einer Beschreibung der Repositoryrolle](/assets/images/help/organizations/repository-role-description.png)
6. Wähle unter „Rolle zum Erben auswählen“ die Rolle aus, die du erben möchtest.
  ![Auswählen der Basisrollenoption für Repositoryrollen](/assets/images/help/organizations/repository-role-base-role-option.png)
7. Verwende die Dropdownliste unter „Berechtigungen hinzufügen“, um die Berechtigungen für deine benutzerdefinierte Rolle auszuwählen.
  ![Auswählen von Berechtigungsstufen aus der Dropdownliste für Repositoryrollen](/assets/images/help/organizations/repository-role-drop-down.png)
7. Klicke auf **Rolle erstellen**.
  ![Bestätigen des Erstellens einer Repositoryrolle](/assets/images/help/organizations/repository-role-creation-confirm.png)

## Bearbeiten einer Repositoryrolle

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. Klicke rechts neben der Rolle, die du bearbeiten möchtest, auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und dann auf **Bearbeiten**.
  ![Bearbeitungsoption in der Dropdownliste für Repositoryrollen](/assets/images/help/organizations/repository-role-edit-setting.png)
4. Bearbeite die Rolle, und klicke dann auf **Rolle aktualisieren**.
  ![Bearbeiten von Feldern und Aktualisieren von Repositoryrollen](/assets/images/help/organizations/repository-role-update.png)

## Löschen einer Repositoryrolle

Wenn du eine vorhandene Repositoryrolle löschst, werden alle ausstehenden Einladungen, Teams und Benutzer*innen mit der benutzerdefinierten Rolle wieder den Basisberechtigungen der Organisation zugewiesen.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. Klicke rechts neben der Rolle, die du löschen möchtest, auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und dann auf **Löschen**.
  ![Bearbeitungsoption in der Dropdownliste für Repositoryrollen](/assets/images/help/organizations/repository-role-delete-setting.png)
4. Überprüfe Änderungen an der Rolle, die du entfernen möchtest, und klicke dann auf **Rolle löschen**.
  ![Bestätigen des Löschens einer Repositoryrolle](/assets/images/help/organizations/repository-role-delete-confirm.png)
