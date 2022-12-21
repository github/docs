---
title: À propos des restrictions d’accès des applications OAuth
intro: Les organisations peuvent déterminer les {% data variables.product.prodname_oauth_apps %} qui ont accès à leurs référentiels et à d’autres ressources en activant les restrictions d’accès {% data variables.product.prodname_oauth_app %}.
redirect_from:
- /articles/about-third-party-application-restrictions
- /articles/about-oauth-app-access-restrictions
- /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: OAuth App access
ms.openlocfilehash: 43e12066ec9381a94fe45187d066300479aa495e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145134415"
---
## À propos des restrictions d’accès des applications OAuth

Quand les restrictions d’accès d’{% data variables.product.prodname_oauth_app %} sont activées, les membres de l’organisation ne peuvent pas autoriser l’accès d’{% data variables.product.prodname_oauth_app %} aux ressources de l’organisation. Les membres de l’organisation peuvent demander l’approbation du propriétaire pour les {% data variables.product.prodname_oauth_apps %} qu’ils souhaitent utiliser, et les propriétaires de l’organisation reçoivent une notification des demandes en attente.

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**Conseil** : Quand une organisation n’a pas configuré les restrictions d’accès d’{% data variables.product.prodname_oauth_app %}, une {% data variables.product.prodname_oauth_app %} autorisée par un membre de l’organisation peut également accéder aux ressources privées de l’organisation.

{% endtip %}

{% ifversion fpt %} Pour protéger davantage les ressources de votre organisation, vous pouvez effectuer une mise à niveau vers {% data variables.product.prodname_ghe_cloud %}, qui inclut des fonctionnalités de sécurité comme l’authentification unique SAML. {% data reusables.enterprise.link-to-ghec-trial %} {% endif %}

## Configuration des restrictions d’accès d’une {% data variables.product.prodname_oauth_app %}

Quand un propriétaire d’organisation configure restrictions d’accès d’{% data variables.product.prodname_oauth_app %} pour la première fois :

- **Les applications appartenant à l’organisation** reçoivent automatiquement l’accès aux ressources de l’organisation.
- **Les {% data variables.product.prodname_oauth_apps %}** perdent immédiatement l’accès aux ressources de l’organisation.
- **Les clés SSH créées avant février 2014** perdent immédiatement l’accès aux ressources de l’organisation (ceci inclut les clés d’utilisateur et de déploiement).
- **Les clés SSH créées par des {% data variables.product.prodname_oauth_apps %} pendant ou après février 2014** perdent immédiatement l’accès aux ressources de l’organisation.
- **Les remises de hooks depuis des dépôts d’organisation privés** ne seront plus envoyés aux {% data variables.product.prodname_oauth_apps %} non approuvées.
- **L’accès de l’API** à des dépôts d’organisation privés n’est pas disponible pour les {% data variables.product.prodname_oauth_apps %} non approuvées. En outre, il n’existe pas d’actions de création, de mise à jour ou de suppression privilégiée sur les ressources des organisations publiques.
- **Les hooks créés par des utilisateurs et les hooks créés avant mai 2014** ne seront pas affectés.
- **Les duplications (forks) privées de dépôts appartenant à une organisation** sont soumises aux restrictions d’accès de l’organisation.

## Résolution des échecs d’accès SSH

Quand une clé SSH créée avant février 2014 perd l’accès à une organisation avec des restrictions d’accès d’{% data variables.product.prodname_oauth_app %} activées, les tentatives d’accès SSH suivantes échouent. Les utilisateurs reçoivent un message d’erreur qui les dirige vers une URL où ils peuvent approuver la clé ou charger une clé approuvée à sa place.

## Webhooks

Quand une {% data variables.product.prodname_oauth_app %} est autorisée à accéder à l’organisation une fois les restrictions activées, tous les webhooks préexistants créés par cette {% data variables.product.prodname_oauth_app %} reprennent la distribution.

Quand une organisation supprime l’accès depuis une {% data variables.product.prodname_oauth_app %} précédemment approuvée, tous les webhooks préexistants créés par cette application ne seront plus distribués (ces hooks seront désactivés mais pas supprimés).

## Réactivation de restrictions d’accès

Si une organisation désactive les restrictions d’accès d’{% data variables.product.prodname_oauth_app %}, puis les réactive ultérieurement, l’{% data variables.product.prodname_oauth_app %} précédemment approuvée est automatiquement autorisée à accéder aux ressources de l’organisation.

## Pour aller plus loin

- « [Activation des restrictions d’accès d’{% data variables.product.prodname_oauth_app %} pour votre organisation](/articles/enabling-oauth-app-access-restrictions-for-your-organization) »
- « [Approbation d’{% data variables.product.prodname_oauth_apps %} pour votre organisation](/articles/approving-oauth-apps-for-your-organization) »
- « [Examen des intégrations installées de votre organisation](/articles/reviewing-your-organization-s-installed-integrations) »
- « [Refus de l’accès à une {% data variables.product.prodname_oauth_app %} précédemment approuvée pour votre organisation](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization) »
- « [Désactivation des restrictions d’accès d’{% data variables.product.prodname_oauth_app %} pour votre organisation](/articles/disabling-oauth-app-access-restrictions-for-your-organization) »
- « [Demande d’approbation de l’organisation pour {% data variables.product.prodname_oauth_apps %}](/articles/requesting-organization-approval-for-oauth-apps) »
- « [Autorisation des {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps) »
