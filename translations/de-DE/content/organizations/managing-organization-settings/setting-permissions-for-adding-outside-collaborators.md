---
title: Berechtigungen für das Hinzufügen von externen Mitarbeitern festlegen
intro: 'Zum Schutz deiner Organisationsdaten und der Anzahl der bezahlten Lizenzen in deiner Organisation kannst du konfigurieren, wer Organisations-Repositorys externe Mitarbeiter hinzufügen kann.'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Set collaborator policy
ms.openlocfilehash: ec9133f5a4be38999d1b2051d538dadff4923abf
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108514'
---
Standardmäßig kann jede Person mit Administratorzugriff auf ein Repository externe Mitarbeiter einladen, an dem Repository mitzuarbeiten. Du kannst die Möglichkeit, externe Mitarbeiter hinzuzufügen, auf die Besitzer der Organisation beschränken.

{% ifversion ghec %} {% note %}

**Hinweis:** Nur Organisationen, die {% data variables.product.prodname_ghe_cloud %} verwenden, können die Fähigkeit zum Einladen externer Mitarbeiter auf Organisationsbesitzer beschränken. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% ifversion ghec %}Wenn deine Organisation zu einem Unternehmenskonto gehört, kannst du{% else %}Du kannst{% endif %} diese Einstellung für deine Organisation möglicherweise nicht konfigurieren, wenn ein Unternehmensbesitzer eine Richtlinie auf Unternehmensebene festgelegt hat. Weitere Informationen findest du unter [Erzwingen von Repositoryverwaltungsrichtlinien in einem Unternehmen]{% ifversion ghec %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-collaborators-to-repositories){% else %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories){% endif %}.

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}
5. Deaktiviere unter „Externe Repositorymitarbeiter“ die Option **Repositoryadministratoren dürfen externe Mitarbeiter zu Repositorys für diese Organisation einladen**.
  ![Kontrollkästchen „Repositoryadministratoren dürfen externe Mitarbeiter zu Repositorys für diese Organisation einladen“](/assets/images/help/organizations/repo-invitations-checkbox-updated.png)
6. Klicken Sie auf **Speichern**.
