---
title: À propos des organisations
intro: 'Les organisations sont des comptes partagés dans lesquels des entreprises et des projets open source peuvent collaborer sur de nombreux projets à la fois, avec des fonctionnalités sophistiquées de sécurité et d’administration.'
redirect_from:
  - /articles/about-organizations
  - /github/setting-up-and-managing-organizations-and-teams/about-organizations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 0269554568c8781706a8d79600f5b6191d0b9598
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164330'
---
## À propos des organisations

{% data reusables.organizations.about-organizations %} Pour plus d’informations sur les types de comptes, consultez « [Types de comptes {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts) ».

Vous pouvez inviter un nombre illimité de personnes à rejoindre votre organisation, puis donner à ces membres de l’organisation une variété de rôles qui accordent différents niveaux d’accès à l’organisation et à ses données. Pour plus d’informations, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) ».

En plus de gérer l’accès à l’organisation elle-même, vous pouvez gérer séparément l’accès aux dépôts, aux tableaux de projet et aux applications de votre organisation. Pour plus d’informations, consultez « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) », « [Autorisations de tableau de projet pour une organisation](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization) » et « [Gestion de l’accès aux applications de votre organisation](/organizations/managing-access-to-your-organizations-apps) ».

Pour simplifier la gestion des accès et améliorer la collaboration, vous pouvez créer des équipes imbriquées qui reflètent la structure de votre groupe, avec des autorisations d’accès et des mentions en cascade. Pour plus d’informations, consultez « [À propos des équipes](/organizations/organizing-members-into-teams/about-teams) ».

Vous pouvez configurer l’organisation pour répondre aux besoins spécifiques de votre groupe en gérant des paramètres, comme restreindre les types de dépôts que les membres peuvent créer. Pour plus d’informations, consultez « [Gestion des paramètres d’organisation](/organizations/managing-organization-settings) ».

Pour renforcer la sécurité de votre organisation, vous pouvez appliquer des exigences de sécurité et passer en revue le journal d’audit de l’organisation. Pour plus d’informations, consultez « [Maintenir la sécurité de votre organisation](/organizations/keeping-your-organization-secure) ».

Pour savoir comment utiliser les organisations le plus efficacement possible, consultez « [Meilleures pratiques pour les organisations](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations) ».

{% ifversion fpt or ghec %}
## À propos de la disponibilité des fonctionnalités

{% data reusables.organizations.organization-plans %} {% endif %}

## Organisations et comptes d’entreprise

{% ifversion fpt %} Les comptes d’entreprise sont une fonctionnalité de {% data variables.product.prodname_ghe_cloud %} qui permet aux propriétaires de gérer de manière centralisée la stratégie et la facturation pour plusieurs organisations. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations).
{% else %} {% ifversion ghec %}Pour les organisations appartenant à un compte d’entreprise, la facturation est gérée au niveau du compte d’entreprise et les paramètres de facturation ne sont pas disponibles au niveau de l’organisation.{% endif %} Les propriétaires d’entreprise peuvent définir une stratégie pour toutes les organisations du compte d’entreprise ou autoriser les propriétaires d’organisation à définir la stratégie au niveau de l’organisation. Les propriétaires d’organisation ne peuvent pas modifier les paramètres appliqués à votre organisation au niveau du compte d’entreprise. Si vous avez des questions sur une stratégie ou un paramètre pour votre organisation, contactez le propriétaire de votre compte d’entreprise.

{% ifversion ghec %} {% data reusables.enterprise.create-an-enterprise-account %} Pour plus d’informations, consultez « [Création d’un compte d’entreprise](/admin/overview/creating-an-enterprise-account) ».

{% data reusables.enterprise-accounts.invite-organization %}

{% endif %} {% endif %}

{% ifversion fpt or ghec %}
## Conditions d’utilisation du service et protection des données pour les organisations

Une entité, telle qu’une entreprise, une association ou un groupe, peut accepter les conditions d’utilisation du service standard ou les conditions d’utilisation du service de l’entreprise pour son organisation. Pour plus d’informations, consultez « [Mise à niveau vers les conditions d’utilisation Entreprise](/articles/upgrading-to-the-corporate-terms-of-service) ».

{% endif %}
