---
title: À propos des équipes
intro: Les équipes sont des groupes de membres de l’organisation qui reflètent la structure de votre entreprise ou de votre groupe avec des mentions et des autorisations d’accès en cascade.
redirect_from:
  - /articles/about-teams
  - /github/setting-up-and-managing-organizations-and-teams/about-teams
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 7b899cf08ca58170acdf8fb2fb2ad13d251b76e3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145149844'
---
![Liste des équipes dans une organisation](/assets/images/help/teams/org-list-of-teams.png)

Les propriétaires de l’organisation et les responsables d’équipe peuvent accorder aux équipes un accès en lecture, en écriture ou administrateur aux dépôts de l’organisation. Les membres de l’organisation peuvent envoyer une notification à une équipe entière en mentionnant le nom de l’équipe. Les membres de l’organisation peuvent également envoyer une notification à une équipe entière en demandant une revue à cette équipe. Les membres de l’organisation peuvent demander des revues à des équipes spécifiques disposant d’un accès en lecture au dépôt où la demande de tirage (pull request) est ouverte. Des équipes peuvent être désignées comme propriétaires de certains types ou parties de code dans un fichier CODEOWNERS.

Pour plus d'informations, consultez les pages suivantes :
- « [Gestion de l’accès de l’équipe à un dépôt de l’organisation](/articles/managing-team-access-to-an-organization-repository) »
- « [Mention de personnes et d’équipes](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) »
- « [À propos des propriétaires de code](/articles/about-code-owners/) »

![Image d’une mention d’équipe](/assets/images/help/teams/team-mention.png)

{% ifversion ghes %}

Vous pouvez aussi utiliser LDAP Sync pour synchroniser les membres d’équipe et les rôles d’équipe {% data variables.product.product_location %} sur vos groupes LDAP établis. Ceci vous permet d’établir un contrôle d’accès en fonction du rôle pour les utilisateurs de votre serveur LDAP au lieu de le faire manuellement dans {% data variables.product.product_location %}. Pour plus d’informations, consultez « [Activation de la synchronisation LDAP](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) ».

{% endif %}

{% data reusables.organizations.team-synchronization %}

## Visibilité des équipes

{% data reusables.organizations.types-of-team-visibility %}

Vous pouvez voir toutes les équipes auxquelles vous appartenez sur votre tableau de bord personnel. Pour plus d’informations, consultez « [À propos de votre tableau de bord personnel](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#finding-your-top-repositories-and-teams) ».

## Pages d’équipe

Chaque équipe a sa propre page au sein d’une organisation. Sur la page d’une équipe, vous pouvez voir les membres de l’équipe, les équipes enfants et les dépôts de l’équipe. Les propriétaires d’organisation et les gestionnaires d’équipe peuvent accéder aux paramètres de l’équipe, et mettre à jour la description et l’image du profil de l’équipe à partir de la page de l’équipe.

Les membres de l’organisation peuvent créer et participer à des discussions avec l’équipe. Pour plus d’informations, consultez « [À propos des discussions d’équipe](/organizations/collaborating-with-your-team/about-team-discussions) ».

![Page d’équipe listant les membres et les discussions de l’équipe](/assets/images/help/organizations/team-page-discussions-tab.png)

## Équipes imbriquées

Vous pouvez refléter la hiérarchie de votre groupe ou de votre entreprise au sein de votre organisation {% data variables.product.product_name %} avec plusieurs niveaux d’équipes imbriquées. Une équipe parente peut avoir plusieurs équipes enfants, tandis que chaque équipe enfant n’a qu’une seule équipe parente. Vous ne pouvez pas imbriquer des équipes secrètes.

Les équipes enfants héritent des autorisations d’accès du parent, ce qui simplifie la gestion des autorisations pour les grands groupes. Les membres des équipes enfants reçoivent également des notifications quand l’équipe parente est @mentioned, ce qui simplifie la communication avec plusieurs groupes de personnes.

Par exemple, si votre structure d’équipe est Employés > Ingénierie > Ingénierie d’application > Identité, l’octroi d’un accès en écriture à Ingénierie sur un dépôt signifie que Ingénierie d’application et Identité obtiennent également cet accès. Si vous utilisez @mention pour l’équipe Identité ou toute autre équipe en bas de la hiérarchie de l’organisation, elles seront les seules à recevoir une notification.

![Page des équipes avec une équipe parente et des équipes enfants](/assets/images/help/teams/nested-teams-eng-example.png)

Pour comprendre facilement qui partage les autorisations et les mentions d’une équipe parente, vous pouvez voir tous les membres des équipes enfants d’une équipe parente sous l’onglet Membres de la page de l’équipe parente. Les membres d’une équipe enfant ne sont pas des membres directs de l’équipe parente.

![Page d’équipe parente avec tous les membres des équipes enfants](/assets/images/help/teams/team-and-subteam-members.png)

Vous pouvez choisir un parent quand vous créez l’équipe ou déplacer ultérieurement une équipe dans la hiérarchie de votre organisation. Pour plus d’informations, consultez « [Déplacement d’une équipe dans la hiérarchie de votre organisation](/articles/moving-a-team-in-your-organization-s-hierarchy) ».

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

## Préparation à l’imbrication d’équipes dans votre organisation

Si votre organisation dispose déjà d’équipes existantes, vous devez auditer les autorisations d’accès aux dépôts de chaque équipe avant d’imbriquer des équipes au-dessus ou en dessous de celle-ci. Vous devez aussi envisager la nouvelle structure que vous souhaitez implémenter pour votre organisation.

En haut de la hiérarchie d’équipe, vous devez accorder des autorisations d’accès aux dépôts des équipes parentes qui sont sécurisées pour chaque membre de l’équipe parente et de ses équipes enfants. Quand descendez vers le bas de la hiérarchie, vous pouvez accorder aux équipes enfants un accès plus précis aux dépôts plus sensibles.

1. Supprimez tous les membres d’équipes existantes
2. Auditez et ajustez les autorisations d’accès aux dépôts de chaque équipe, et donnez à chaque équipe un parent
3. Créez toutes les équipes dont vous avez besoin, choisissez un parent pour chaque nouvelle équipe et donnez-leur accès aux dépôts
4. Ajoutez des personnes directement à des équipes

## Pour aller plus loin

- « [Création d’une équipe](/articles/creating-a-team) »
- « [Ajout de membres d’une organisation à une équipe](/articles/adding-organization-members-to-a-team) »
