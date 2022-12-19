---
title: Types de comptes GitHub
intro: 'Les comptes sur {% data variables.product.product_name %} vous permettent d’organiser et de contrôler l’accès au code.'
redirect_from:
  - /manage-multiple-clients
  - /managing-clients
  - /articles/what-s-the-difference-between-user-and-organization-accounts
  - /articles/differences-between-user-and-organization-accounts
  - /articles/types-of-github-accounts
  - /github/getting-started-with-github/types-of-github-accounts
  - /github/getting-started-with-github/learning-about-github/types-of-github-accounts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
ms.openlocfilehash: 9316fcb8b069b0b596c89d10ac1f89d86f1a62b7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128893'
---
## À propos des comptes sur {% data variables.product.product_name %}

Avec {% data variables.product.product_name %}, vous pouvez stocker du code et collaborer sur ce code. Les comptes vous permettent d’organiser et de contrôler l’accès à ce code. Il y a trois types de comptes sur {% data variables.product.product_name %}.
- Comptes personnels
- Comptes d’organisation
- Compte d’entreprise

Chaque personne qui utilise {% data variables.product.product_name %} se connecte à un compte personnel. Un compte d’organisation améliore la collaboration entre plusieurs comptes personnels et {% ifversion fpt or ghec %}un compte d’entreprise{% else %}le compte d’entreprise pour {% data variables.product.product_location %}{% endif %} permet de gérer de manière centralisée plusieurs organisations.

## Comptes personnels

Chaque personne qui utilise {% data variables.product.product_location %} se connecte à un compte personnel. Votre compte personnel est votre identité sur {% data variables.product.product_location %}, et a un nom d’utilisateur et un profil. Par exemple, consultez le [profil de @octocat](https://github.com/octocat).

Votre compte personnel peut avoir des ressources comme des dépôts, des packages et des projets. Chaque fois que vous effectuez une action sur {% data variables.product.product_location %}, par exemple, la création d’un problème ou la révision d’une demande de tirage, l’action est attribuée à votre compte personnel.

{% ifversion fpt or ghec %}Chaque compte personnel utilise {% data variables.product.prodname_free_user %} ou {% data variables.product.prodname_pro %}. Tous les comptes personnels peuvent avoir un nombre illimité de dépôts publics et privés, avec un nombre illimité de collaborateurs sur ces dépôts. Si vous utilisez {% data variables.product.prodname_free_user %}, les dépôts privés appartenant à votre compte personnel ont un ensemble de fonctionnalités limité. Vous pouvez mettre à niveau votre plan vers {% data variables.product.prodname_pro %} afin d’obtenir un ensemble complet de fonctionnalités pour les dépôts privés. Pour plus d’informations, consultez « [Produits de {% data variables.product.prodname_dotcom %}](/articles/githubs-products) ». {% else %}Vous pouvez créer un nombre illimité de dépôts appartenant à votre compte personnel, avec un nombre illimité de collaborateurs sur ces dépôts.{% endif %}

{% tip %}

**Astuce** : Les comptes personnels sont destinés aux humains, mais vous pouvez créer des comptes pour automatiser l’activité sur {% data variables.product.product_name %}. Ce type de compte est appelé utilisateur machine. Par exemple, vous pouvez créer un compte d’utilisateur machine pour automatiser les workflows d’intégration continue (CI).

{% endtip %}

{% ifversion fpt or ghec %} La plupart des gens utilisent un compte personnel pour tout leur travail sur {% data variables.product.prodname_dotcom_the_website %}, y compris les projets open source et les emplois rémunérés. Si vous utilisez actuellement plusieurs comptes personnels que vous avez créés pour vous-même, nous vous suggérons de les combiner. Pour plus d’informations, consultez « [Fusion de plusieurs comptes personnels](/articles/merging-multiple-user-accounts) ».
{% endif %}

## Comptes d’organisation

Les organisations sont des comptes partagés dans lesquels un nombre illimité de personnes peuvent collaborer simultanément sur de nombreux projets. 

À l’instar de votre compte personnel, les organisations peuvent avoir des ressources comme des dépôts, des packages et des projets. Toutefois, vous ne pouvez pas vous connecter à une organisation. À la place, chaque personne se connecte à son propre compte personnel et toutes les actions effectuées par la personne sur les ressources de l’organisation sont attribuées à son compte personnel. Chaque compte personnel peut être membre de plusieurs organisations.

Les comptes personnels au sein d’une organisation peuvent avoir des rôles différents dans l’organisation, accordant différents niveaux d’accès à l’organisation et à ses données. Tous les membres peuvent collaborer entre eux dans des dépôts et des projets, mais seuls les propriétaires d’organisation et les responsables de sécurité peuvent gérer les paramètres de l’organisation et contrôler l’accès aux données de l’organisation avec des fonctionnalités sophistiquées de sécurité et d’administration. Pour plus d’informations, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) » et « [Maintenir la sécurité de votre organisation](/organizations/keeping-your-organization-secure) ».

![Diagramme montrant que les utilisateurs doivent se connecter à leur compte personnel pour accéder aux ressources d’une organisation](/assets/images/help/overview/sign-in-pattern.png)

{% ifversion fpt or ghec %} Même si vous êtes membre d’une organisation qui utilise l’authentification unique SAML, vous vous connectez toujours à votre propre compte personnel sur {% data variables.product.prodname_dotcom_the_website %}, et ce compte personnel est lié à votre identité dans le fournisseur d’identité de votre organisation. Pour plus d’informations, consultez « [À propos de l’authentification avec l’authentification unique SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}{% else %}. »{% endif %}

Toutefois, si vous êtes membre d’une entreprise qui utilise {% data variables.product.prodname_emus %}, au lieu d’utiliser un compte personnel que vous avez créé, un nouveau compte est provisionné pour vous par le fournisseur d’identité de l’entreprise. Pour accéder aux organisations appartenant à cette entreprise, vous devez vous authentifier en utilisant son fournisseur d’identité au lieu d’un nom d’utilisateur et d’un mot de passe {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [À propos d’{% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %}. »{% endif %} {% endif %}

Vous pouvez également créer des sous-groupes imbriqués de membres d’organisation, appelés équipes, pour refléter la structure de votre groupe et simplifier la gestion des accès. Pour plus d’informations, consultez « [À propos des équipes](/organizations/organizing-members-into-teams/about-teams) ».

{% data reusables.organizations.organization-plans %}

Pour plus d’informations sur toutes les fonctionnalités des organisations, consultez « [À propos des organisations](/organizations/collaborating-with-groups-in-organizations/about-organizations) ».

## Compte d’entreprise

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %} et {% data variables.product.prodname_ghe_server %} comprennent des comptes d’entreprise, qui permettent aux administrateurs de gérer de manière centralisée la stratégie et la facturation de plusieurs organisations, et de mettre en place l’inner sourcing entre les organisations. Pour plus d’informations, consultez « [À propos des comptes d’entreprise](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts) » dans la documentation {% data variables.product.prodname_ghe_cloud %}.
{% elsif ghec %} Les comptes d’entreprise permettent de gérer de manière centralisée la stratégie et la facturation pour plusieurs organisations. Vous pouvez utiliser votre compte d’entreprise pour gérer de manière centralisée la stratégie et la facturation. Contrairement aux organisations, les comptes d’entreprise ne peuvent pas avoir directement des ressources comme des dépôts, des packages ou des projets. À la place, ces ressources sont détenues par les organisations au sein du compte d’entreprise. Pour plus d’informations, consultez « [À propos des comptes d’entreprise](/admin/overview/about-enterprise-accounts) ».
{% elsif ghes or ghae %} Votre compte d’entreprise est une collection de toutes les organisations {% ifversion ghae %}détenues par{% elsif ghes %}sur{% endif %} {% data variables.product.product_location %}. Vous pouvez utiliser votre compte d’entreprise pour gérer de manière centralisée la stratégie et la facturation. Contrairement aux organisations, les comptes d’entreprise ne peuvent pas avoir directement des ressources comme des dépôts, des packages ou des projets. À la place, ces ressources sont détenues par les organisations au sein du compte d’entreprise. Pour plus d’informations, consultez « [À propos des comptes d’entreprise](/admin/overview/about-enterprise-accounts) ».
{% endif %}

## Pour aller plus loin

{% ifversion fpt or ghec %}
- « [Inscription à un nouveau compte {% data variables.product.prodname_dotcom %}](/articles/signing-up-for-a-new-github-account) »{% endif %}
- « [Création d’un compte d’organisation](/articles/creating-a-new-organization-account) »
- Vidéo [Organisation des personnes pour une collaboration réussie](https://vimeo.com/333786093) dans les ressources {% data variables.product.company_short %}
