---
title: À propos de votre tableau de bord d’organisation
intro: 'En tant que membre de l’organisation, vous pouvez visiter le tableau de bord de votre organisation tout au long de la journée pour rester informé de l’activité récente et suivre les problèmes et les demandes de tirage sur lesquels vous travaillez ou que vous suivez dans l’organisation.'
redirect_from:
  - /articles/about-your-organization-dashboard
  - /github/setting-up-and-managing-organizations-and-teams/about-your-organization-dashboard
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Organization dashboard
ms.openlocfilehash: c5f25d589e7b640fa411cd26f004961081c9d8e8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880773'
---
## Accès à votre tableau de bord d’organisation

{% data reusables.dashboard.access-org-dashboard %}

## Recherche de votre activité récente

Dans la section « Activité récente » de votre fil d’actualité, vous pouvez rapidement rechercher et suivre les problèmes et les demandes de tirage récemment mis à jour dans votre organisation.

{% data reusables.dashboard.recent-activity-qualifying-events %}

## Recherche de référentiels dans votre organisation

Dans la barre latérale de gauche de votre tableau de bord, vous pouvez accéder aux principaux référentiels de l’organisation dans lesquels vous êtes actif.

![Liste des référentiels dans lesquels vous êtes le plus actif au sein de votre organisation](/assets/images/help/dashboard/repositories-from-organization-dashboard.png)

## Se tenir à jour de l’activité de l’organisation

Dans la section « Toutes les activités » de votre flux d’actualités, vous pouvez afficher les mises à jour d’autres équipes et référentiels de votre organisation.

La section « Toutes les activités » affiche toutes les activités récentes de l’organisation, notamment l’activité dans les référentiels auxquels vous n’êtes pas abonné et les personnes que vous ne suivez pas. Pour plus d’informations, consultez « [À propos des notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications) » et « [Suivre des personnes](/articles/following-people) ».

Le flux d’actualités de l’organisation affiche par exemple des mises à jour quand une personne de l’organisation :
 - Crée une branche.
 - Fait des commentaires sur un problème ou une demande de tirage (pull request).
 - Envoie un commentaire de révision de demande de tirage (pull request).
 - Duplique (fork) un référentiel.
 - Crée une page wiki.
 - Envoie (push) des validations (commits).{% ifversion fpt or ghes or ghec %}
 - Crée un dépôt public.{% endif %}

## Informations supplémentaires

- « [À propos de votre tableau de bord personnel](/articles/about-your-personal-dashboard) »
