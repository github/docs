---
title: Verwalten des Standardbranchnamens für Repositorys in deiner Organisation
intro: 'Du kannst den Standardverzweigungsnamen für Repositorys festlegen, die Mitglieder in deiner Organisation auf {% data variables.product.product_location %} erstellen.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization
permissions: Organization owners can manage the default branch name for new repositories in the organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default branch name
ms.openlocfilehash: 38bd35506728f4437c9a1644235fe748c6a8a58a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886606'
---
## About the default branch name

Wenn ein Mitglied deiner Organisation ein neues Repository in deiner Organisation erstellt, enthält das Repository einen Branch, der der Standardbranch ist. Du kannst den Namen ändern, den {% data variables.product.product_name %} für den Standardbranch in neuen Repositorys verwendet, die Mitglieder deiner Organisation erstellen. Weitere Informationen zum Standardbranch findest du unter [Informationen zu Branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch).

{% data reusables.branches.change-default-branch %}

Wenn ein Unternehmensbesitzer eine Richtlinie für den Standardbranchnamen für dein Unternehmen erzwungen hat, kannst du keinen Standardbranchnamen für deine Organisation festlegen. Stattdessen kannst du den Standardbranch für einzelne Repositorys ändern. Weitere Informationen findest du unter {% ifversion fpt %}[Erzwingen von Repositoryverwaltungsrichtlinien in einem Unternehmen](/enterprise-cloud@latest/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name){% else %}[Erzwingen von Repositoryverwaltungsrichtlinien in einem Unternehmen](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name){% endif %} und [Ändern des Standardbranchs](/github/administering-a-repository/changing-the-default-branch).

## Festlegen des Standardbranchnamens

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}
3. Klicke unter „Standardbranch für Repository“ auf **Standardbranchnamen jetzt ändern**.
    ![Schaltfläche zum Überschreiben](/assets/images/help/organizations/repo-default-name-button.png)
4. Gib den Standardnamen ein, den du für neue Branches verwenden möchtest.
    ![Textfeld zum Eingeben des Standardnamens](/assets/images/help/organizations/repo-default-name-text.png)
5. Klicken Sie auf **Aktualisieren**.
    ![Schaltfläche „Aktualisieren“](/assets/images/help/organizations/repo-default-name-update.png)

## Weiterführende Themen

- [Verwalten des Standardbranchnamens für deine Repositorys](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories)
