---
title: Autorisations d’accès sur GitHub
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do
  - /articles/what-are-the-different-types-of-team-permissions
  - /articles/what-are-the-different-access-permissions
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: 'Avec des rôles, vous pouvez contrôler qui a accès à vos comptes et ressources dans {% data variables.product.product_name %} et le niveau d’accès de chaque personne.'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128917'
---
## À propos des autorisations d’accès sur {% data variables.product.prodname_dotcom %}

{% data reusables.organizations.about-roles %} 

Les rôles fonctionnent différemment selon le type du compte. Pour plus d’informations sur les comptes, consultez « [Types de comptes {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts) ».

## Comptes personnels

Un dépôt détenu par un compte personnel a deux niveaux d’autorisation : *propriétaire du dépôt* et *collaborateurs*. Pour plus d’informations, consultez « [Niveaux d’autorisation pour un dépôt de compte personnel](/articles/permission-levels-for-a-user-account-repository) ».

## Comptes d’organisation

Les membres d’organisation peuvent avoir les rôles *propriétaire*{% ifversion fpt or ghec %}, *gestionnaire de facturation*,{% endif %} ou *membre*. Les propriétaires ont un accès administratif complet à votre organisation{% ifversion fpt or ghec %}, tandis que les gestionnaires de facturation peuvent gérer les paramètres de facturation{% endif %}. Membre est le rôle par défaut pour tous les autres. Vous pouvez gérer les autorisations d’accès pour plusieurs membres à la fois avec des équipes. Pour plus d'informations, consultez les pages suivantes :
- « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) »
- « [Autorisations de tableau de projet pour une organisation](/articles/project-board-permissions-for-an-organization) »
- « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) »
- « [À propos des équipes](/articles/about-teams) »

## Compte d’entreprise

{% ifversion fpt %} {% data reusables.gated-features.enterprise-accounts %} 

Pour plus d’informations sur les autorisations des comptes d’utilisateur, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github).
{% else %} Les *propriétaires d’entreprise* ont un pouvoir ultime sur le compte d’entreprise et peuvent prendre toutes les mesures dans le compte d’entreprise.{% ifversion ghec or ghes %} Les *responsables de facturation* peuvent gérer les paramètres de facturation de votre compte d’entreprise.{% endif %} Les membres et les collaborateurs externes d’organisations appartenant à votre compte d’entreprise sont automatiquement membres du compte d’entreprise, bien qu’ils n’aient pas accès au compte d’entreprise lui-même ou à ses paramètres. Pour plus d’informations, consultez « [Rôles dans une entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise) ».

{% ifversion ghec %} Si une entreprise utilise {% data variables.product.prodname_emus %}, les membres sont provisionnés sous forme de nouveaux comptes personnels sur {% data variables.product.prodname_dotcom %} et sont entièrement gérés par le fournisseur d’identité. Les {% data variables.product.prodname_managed_users %} ont un accès en lecture seule aux dépôts qui ne font pas partie de leur entreprise et ne peuvent pas interagir avec les utilisateurs qui ne sont pas également membres de l’entreprise. Dans les organisations détenues par l’entreprise, les {% data variables.product.prodname_managed_users %} peuvent bénéficier des mêmes niveaux d’accès granulaires que ceux disponibles pour les organisations normales. Pour plus d’informations, consultez « [À propos d’{% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users) ».
{% endif %} {% endif %}

## Pour aller plus loin

- « [Types de comptes {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts) »
