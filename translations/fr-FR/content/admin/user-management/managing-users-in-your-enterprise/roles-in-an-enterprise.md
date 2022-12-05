---
title: Rôles dans une entreprise
intro: 'Tout le monde dans une entreprise est membre de l’entreprise. Pour contrôler l’accès aux paramètres et aux données de votre entreprise, vous pouvez attribuer différents rôles aux membres de votre entreprise.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/roles-for-an-enterprise-account
  - /articles/permission-levels-for-a-business-account
  - /articles/roles-for-an-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
ms.openlocfilehash: 10787e2326f2bb3c4768c5e499d445f65cf9e57d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178454'
---
## À propos des rôles dans une entreprise

Tout le monde dans une entreprise est membre de l’entreprise. Vous pouvez également attribuer des rôles d’administration aux membres de votre entreprise. Chaque rôle Administrateur est mappé à des fonctions métier et fournit des autorisations pour effectuer des tâches spécifiques au sein de l’entreprise.

{% data reusables.enterprise-accounts.enterprise-administrators %}

{% ifversion ghec %} Si votre entreprise n’utilise pas {% data variables.product.prodname_emus %}, vous pouvez inviter une personne à prendre un rôle d’administration en utilisant un compte d’utilisateur qu’elle contrôle sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Inviter des personnes à gérer votre entreprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise) ».

Dans une entreprise qui utilise {% data variables.product.prodname_emus %}, les nouveaux propriétaires et membres doivent être provisionnés par le biais de votre fournisseur d’identité. Les propriétaires d’entreprise et d’organisation ne peuvent pas ajouter de nouveaux membres ou propriétaires à l’entreprise à l’aide de {% data variables.product.prodname_dotcom %}. Vous pouvez sélectionner le rôle d’entreprise d’un membre à l’aide de votre fournisseur d’identité et celui-ci ne peut pas être modifié sur {% data variables.product.prodname_dotcom %}. Vous pouvez sélectionner le rôle d’un membre dans une organisation sur {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [À propos d’{% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users) ».
{% else %} Pour plus d’informations sur l’ajout de personnes à votre entreprise, consultez « [Authentification](/admin/authentication) ».

{% endif %}

## Propriétaires d’entreprise

Les propriétaires d’entreprise disposent d’un contrôle total sur l’entreprise et peuvent effectuer n’importe quelle action, notamment :
- Gestion des administrateurs
- {% ifversion ghec %}Ajout et suppression {% elsif ghae or ghes %}Gestion{% endif %} d’organisations {% ifversion ghec %}dans et à partir de {% elsif ghae or ghes %} dans{% endif %} l’entreprise{% ifversion remove-enterprise-members %}
- Suppression de membres de l’entreprise de toutes les organisations appartenant à l’entreprise{% endif %}
- Gestion des paramètres d’entreprise
- Application d’une stratégie à toutes les organisations {% ifversion ghec %}- Gestion des paramètres de facturation{% endif %}

{% ifversion enterprise-owner-join-org %} Par défaut, les propriétaires d’entreprise n’ont pas accès aux paramètres ou au contenu des organisations. Pour obtenir cet accès, les propriétaires d’entreprise peuvent rejoindre n’importe quelle organisation appartenant à leur entreprise. Pour plus d’informations, consultez « [Gestion de votre rôle dans une organisation appartenant à votre entreprise](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise) ».

Les propriétaires d’organisations de votre entreprise n’ont pas accès à l’entreprise elle-même, sauf si vous les définissez comme propriétaires d’entreprise.
{% else %} Les propriétaires d’entreprise ne peuvent pas accéder aux paramètres ou au contenu des organisations, sauf s’ils sont définis comme propriétaire d’une organisation ou si un accès direct à un dépôt appartenant à l’organisation leur est affecté. De même, les propriétaires d’organisations de votre entreprise n’ont pas accès à l’entreprise elle-même, sauf si vous les définissez comme propriétaires d’entreprise.
{% endif %}

Un propriétaire d’entreprise consomme une licence uniquement s’il est propriétaire ou membre d’au moins une organisation de l’entreprise. Même si un propriétaire d’entreprise a un rôle dans plusieurs organisations, il consomme une seule licence. {% ifversion ghec %}Les propriétaires d’entreprise doivent avoir un compte personnel sur {% data variables.product.prodname_dotcom %}.{% endif %} Une bonne pratique consiste à définir seulement quelques personnes comme propriétaires d’entreprise dans votre société pour réduire le risque pour votre activité.

## Membres d’entreprise

Les membres d’organisations appartenant à votre entreprise sont aussi automatiquement membres de l’entreprise. Les membres peuvent collaborer dans des organisations et être propriétaires d’organisation, mais les membres ne peuvent pas accéder ni configurer les paramètres d’entreprise{% ifversion ghec %}, y compris les paramètres de facturation{% endif %}.

Les personnes dans votre entreprise peuvent avoir différents niveaux d’accès aux différentes organisations appartenant à votre entreprise et aux dépôts au sein de ces organisations. Vous pouvez voir les ressources auxquelles chaque personne a accès. Pour plus d’informations, consultez « [Visualisation des personnes dans votre entreprise](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise) ».

Pour plus d’informations sur les autorisations au niveau de l’organisation, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) ».

Les personnes ayant un accès de collaborateur externe aux dépôts appartenant à votre organisation sont également listées dans l’onglet Personnes de votre entreprise, mais ne sont pas membres de l’entreprise et n’ont pas accès à l’entreprise. Pour plus d’informations sur les collaborateurs externes, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators) ».

{% ifversion ghec %}

## Gestionnaires de facturation

Les gestionnaires de facturation ont accès uniquement aux paramètres de facturation de votre entreprise. Les gestionnaires de facturation de votre entreprise peuvent :
- Voir et gérer les licences utilisateur, les packs {% data variables.large_files.product_name_short %} et d’autres paramètres de facturation
- Voir la liste des gestionnaires de facturation
- Ajouter ou supprimer d’autres gestionnaires de facturation

Les gestionnaires de facturation consomment une licence uniquement s’ils sont propriétaires ou membres d’au moins une organisation de l’entreprise. Les gestionnaires de facturation n’ont pas accès aux organisations ou aux dépôts de votre entreprise et ne peuvent pas ajouter ou supprimer des propriétaires d’entreprise. Les gestionnaires de facturation doivent avoir un compte personnel sur {% data variables.product.prodname_dotcom %}.

## À propos des droits au support

{% data reusables.enterprise-accounts.support-entitlements %}

## Pour aller plus loin

- « [À propos des comptes d’entreprise](/admin/overview/about-enterprise-accounts) »

{% endif %}
