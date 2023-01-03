---
title: Ajout de collaborateurs externes à des dépôts de votre organisation
intro: Vous pouvez autoriser des personnes qui ne sont pas membres de votre organisation à accéder aux référentiels appartenant à votre organisation.
redirect_from:
- /articles/adding-outside-collaborators-to-repositories-in-your-organization
- /github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Add outside collaborator
permissions: People with admin access to a repository can add an outside collaborator to the repository.
ms.openlocfilehash: caac79aba845f433effd3a3461e739d07cee135b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145128507"
---
## À propos des collaborateurs externes

Un collaborateur externe est une personne qui n’est pas membre de votre organisation, mais qui dispose d’un accès à un ou plusieurs référentiels de votre organisation. Vous pouvez choisir le niveau d’accès à accorder à chaque collaborateur externe. {% data reusables.organizations.outside_collaborator_forks %}

{% data reusables.organizations.outside-collaborators-use-seats %}

{% ifversion fpt %} Les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} peuvent restreindre la possibilité d’inviter des collaborateurs. Pour plus d’informations, consultez « [Définition d’autorisations pour l’ajout de collaborateurs externes](/enterprise-cloud@latest/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators) » dans la documentation {% data variables.product.prodname_ghe_cloud %}.
{% else %} Un propriétaire d’organisation peut restreindre la possibilité d’inviter des collaborateurs. Pour plus d’informations, consultez « [Définition des autorisations pour l’ajout de collaborateurs externes](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators) ».
{% endif %}

{% ifversion ghes %} Avant d’ajouter une personne en tant que collaborateur externe sur un référentiel, celle-ci doit disposer d’un compte personnel sur {% data variables.product.product_location %}. Si votre entreprise utilise un système d’authentification externe tel que SAML ou LDAP, la personne que vous souhaitez ajouter doit se connecter via ce système pour créer un compte. Si la personne n’a pas accès au système d’authentification et que l’authentification intégrée est activée pour votre entreprise, un administrateur de site peut créer un compte pour cette personne. Pour plus d’informations, consultez « [Configuration de l’authentification intégrée](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication) ».
{% endif %}

{% ifversion not ghae %} Si votre organisation requiert une authentification à deux facteurs, tous les collaborateurs externes doivent activer l’authentification à deux facteurs avant d’accepter votre invitation à collaborer sur un référentiel. Pour plus d’informations, consultez « [Exiger l’authentification à 2 facteurs dans votre organisation](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization) ».
{% endif %}

## Ajout de collaborateurs externes à un référentiel

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Vous pouvez accorder aux collaborateurs externes l’accès à un référentiel dans les paramètres de votre référentiel. Pour plus d’informations, consultez « [Gestion des équipes et des personnes ayant accès à votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person) ». {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
5. Dans la barre latérale gauche, cliquez sur **Collaborateurs & équipes**.
  ![Barre latérale des paramètres du référentiel avec Collaborateurs et équipes mis en surbrillance](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. Sous « Collaborateurs », entrez le nom de la personne à laquelle vous souhaitez accorder l’accès au référentiel, puis cliquez sur **Ajouter un collaborateur**.
![Section Collaborateurs avec le nom d’utilisateur Octocat entré dans le champ de recherche](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. En regard du nom du nouveau collaborateur, utilisez le menu déroulant et sélectionnez le niveau d’accès qui convient.
![Sélecteur d’autorisations de référentiel](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png) {% endif %}
