---
title: Puis-je créer des comptes pour des personnes de mon organisation ?
intro: 'Même si vous pouvez ajouter des utilisateurs à une organisation que vous avez créée, vous ne pouvez pas créer de comptes personnels pour le compte d’une autre personne.'
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization
  - /articles/can-i-create-accounts-for-people-in-my-organization
  - /github/setting-up-and-managing-organizations-and-teams/can-i-create-accounts-for-people-in-my-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Create accounts for people
ms.openlocfilehash: 9ddbb857d86a3cada3f11a20a3ed1fab7bb263b8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145101509'
---
## À propos des comptes personnels

Étant donné que vous accédez à une organisation en vous connectant à un compte personnel, chaque membre de votre équipe doit créer son propre compte personnel. Une fois que vous avez les noms d’utilisateur de toutes les personnes à ajouter à votre organisation, vous pouvez ajouter les utilisateurs aux équipes.

{% ifversion fpt or ghec %} {% ifversion fpt %}Organisations qui utilisent {% data variables.product.prodname_ghe_cloud %}{% else %}Vous{% endif %} pouvez utiliser une authentification unique SAML pour gérer de manière centralisée l’accès des comptes d’utilisateur aux ressources de l’organisation via un fournisseur d’identité (IdP). Pour plus d’informations, consultez « [À propos de la gestion des identités et des accès avec l’authentification unique SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

Vous pouvez également consulter {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %} {% endif %}

## Ajout d’utilisateurs à votre organisation

1. Donnez à chaque personne des instructions pour [créer un compte personnel](/articles/signing-up-for-a-new-github-account).
2. Demandez le nom d’utilisateur de chaque personne à laquelle vous souhaitez accorder l’appartenance à l’organisation.
3. [Invitez les nouveaux comptes personnels à rejoindre](/articles/inviting-users-to-join-your-organization) votre organisation. Utilisez des [rôles d’organisation](/articles/permission-levels-for-an-organization) et des [autorisations de dépôt](/articles/repository-permission-levels-for-an-organization) pour limiter l’accès de chaque compte.
