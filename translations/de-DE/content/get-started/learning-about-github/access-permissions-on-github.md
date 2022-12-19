---
title: Zugriffsberechtigungen auf GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do
  - /articles/what-are-the-different-types-of-team-permissions
  - /articles/what-are-the-different-access-permissions
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: 'Mit Rollen kannst du steuern, wer Zugriff auf deine Konten und Ressourcen auf {% data variables.product.product_name %} hat und welche Zugriffsebene jede Person hat.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Permissions
  - Accounts
shortTitle: Access permissions
ms.openlocfilehash: 32db1949cbc110559023f719682caed0319aae9e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145131205'
---
## Informationen zu Zugriffsberechtigungen auf {% data variables.product.prodname_dotcom %}

{% data reusables.organizations.about-roles %} 

Rollen haben für verschiedene Kontotypen unterschiedliche Funktionen. Weitere Informationen zu Konten findest du unter „[Typen von {% data variables.product.prodname_dotcom %}-Konten](/get-started/learning-about-github/types-of-github-accounts)“.

## Persönliche Konten

Ein Repository im Besitz eines persönlichen Kontos verfügt über die beiden Berechtigungsstufen *Repositorybesitzer* und *Mitarbeiter*. Weitere Informationen findest du unter „[Berechtigungsstufen für ein Repository eines persönlichen Kontos](/articles/permission-levels-for-a-user-account-repository)“.

## Organisationskonten

Organisationsmitglieder können über die Rolle *Besitzer*{% ifversion fpt or ghec %}, *Abrechnungsmanager*{% endif %} oder *Mitglied* verfügen. Besitzer haben vollständigen administrativen Zugriff auf deine Organisation{% ifversion fpt or ghec %}, wohingegen Abrechnungsmanager Abrechnungseinstellungen verwalten können{% endif %}. Die Standardrolle für alle übrigen Personen lautet „Mitglied“. Du kannst die Zugriffsberechtigungen für mehrere Mitglieder gleichzeitig in Teams verwalten. Weitere Informationen finden Sie unter
- [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)
- [Projektboardberechtigungen für eine Organisation](/articles/project-board-permissions-for-an-organization)
- [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)
- [Informationen zu Teams](/articles/about-teams)

## Unternehmenskonten

{% ifversion fpt %} {% data reusables.gated-features.enterprise-accounts %} 

Weitere Informationen zu Berechtigungen für Enterprise-Konten findest du in der [{% data variables.product.prodname_ghe_cloud %}-Dokumentation](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github).
{% else %} *Enterprise-Besitzer* haben volle Kontrolle über das Enterprise-Konto und können jede Aktion unter diesem Konto ausführen.{% ifversion ghec or ghes %} *Abrechnungsmanager* können die Abrechnungseinstellungen deines Enterprise-Kontos verwalten.{% endif %} Mitglieder und externe Mitarbeiter von Organisationen im Besitz deines Enterprise-Kontos sind automatisch Mitglieder des Enterprise-Kontos, haben aber keinen Zugriff auf das Enterprise-Konto selbst oder dessen Einstellungen. Weitere Informationen findest du unter [Rollen in einem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise).

{% ifversion ghec %} Wenn ein Unternehmen {% data variables.product.prodname_emus %} verwendet, werden Mitglieder als neue persönliche Konten auf {% data variables.product.prodname_dotcom %} bereitgestellt und werden vollständig vom Identitätsanbieter verwaltet. {% data variables.product.prodname_managed_users %} verfügen über schreibgeschützten Zugriff auf Repositorys, die nicht Teil ihres Unternehmens sind, und können nicht mit Benutzern interagieren, die nicht auch Mitglieder des Unternehmens sind. Innerhalb der Organisationen, die im Besitz des Unternehmens sind, können {% data variables.product.prodname_managed_users %} dieselben differenzierten Zugriffsebenen wie regulären Organisationen gewährt werden. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).
{% endif %} {% endif %}

## Weitere Informationsquellen

- "[Unterschiedliche Arten von {% data variables.product.prodname_dotcom %}-Konten](/articles/types-of-github-accounts)"
