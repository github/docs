---
title: Gestion du coût de GitHub Codespaces dans votre organisation
shortTitle: Manage Codespaces costs
intro: 'Vous pouvez vérifier votre utilisation de {% data variables.product.prodname_github_codespaces %} et définir des limites d’utilisation.'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Billing
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization
ms.openlocfilehash: f11c6e22fa8a233fd4429b91390d25471ad17e6d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158708'
---
## Vue d’ensemble

Votre organisation est facturée en fonction de son utilisation du calcul et du stockage pour {% data variables.product.prodname_github_codespaces %}. Cet article explique comment vous, en tant que propriétaire d’organisation, pouvez gérer ces coûts.

Pour découvrir les tarifs appliqués pour l’utilisation de {% data variables.product.prodname_github_codespaces %}, consultez « [À propos de la facturation pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing) ».

## Limites de dépense

Vous pouvez définir une limite de dépense pour {% data variables.product.prodname_github_codespaces %} pour votre organisation. Cette limite est appliquée au coût total du calcul et du stockage pour {% data variables.product.prodname_github_codespaces %}. Pour plus d’informations, consultez « [Gestion des limites de dépense pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces) ».
 
- **Utilisation du calcul :** Il s’agit de la durée totale pendant laquelle toutes les instances {% data variables.product.prodname_github_codespaces %} (« codespaces ») étaient actives dans un mois de facturation. 

- **Utilisation du stockage :** Pour la facturation de {% data variables.product.prodname_github_codespaces %}, ceci inclut tous les fichiers utilisés par tous les codespaces et prébuilds dans votre compte. Y compris des ressources telles que, entre autres, des référentiels clonés, des fichiers config et des extensions. 

Vous pouvez vérifier l’utilisation du calcul et du stockage pour {% data variables.product.prodname_github_codespaces %} pour le mois de facturation actuel. Pour plus d’informations, consultez « [Consultation de votre utilisation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage) ».

{% note %}

**Remarque** : Les prébuilds pour {% data variables.product.prodname_github_codespaces %} sont créées et mises à jour avec {% data variables.product.prodname_actions %}. Cela peut entraîner des coûts facturables pour {% data variables.product.prodname_actions %}. Vous pouvez définir une limite de dépense pour {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds) » et « [Gestion de votre limite de dépense pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions) ». Le stockage des prébuilds générées est facturé au même tarif que vos codespaces et est inclus dans votre limite de dépense pour {% data variables.product.prodname_github_codespaces %}.

{% endnote %}

## Désactivation ou limitation de {% data variables.product.prodname_codespaces %}

Vous pouvez désactiver toute utilisation de {% data variables.product.prodname_github_codespaces %} susceptible d’être facturée à votre organisation. Vous pouvez aussi spécifier les membres ou collaborateurs de l’organisation autorisés à utiliser {% data variables.product.prodname_codespaces %} aux frais de votre organisation. Pour plus d'informations, consultez « [Activation de {% data variables.product.prodname_github_codespaces %} pour votre organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization) ».

{% data reusables.codespaces.codespaces-disabling-org-billing %}

Vous pouvez configurer les dépôts accessibles à partir des codespaces créés pour un dépôt particulier. Pour plus d’informations, consultez « [Gestion de l’accès à d’autres dépôts dans votre codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces) ».

Vous pouvez limiter le choix des types de machines disponibles pour les codespaces créés à partir des dépôts appartenant à votre organisation. Ainsi, vous empêchez les utilisateurs d’utiliser des machines avec des ressources excessives pour leurs codespaces et vous évitez de vous exposer à des frais inutiles. Pour plus d’informations, consultez « [Restriction de l’accès à des types de machine](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) ».

Vous pouvez définir une contrainte de délai d’inactivité maximal pour limiter le délai d’expiration maximal que les utilisateurs peuvent définir pour les codespaces facturables à votre organisation. Cela peut réduire les frais d’utilisation du calcul générés par les codespaces qui continuent de s’exécuter dans un état inactif, en arrêtant le codespace actif après une période d’expiration plus courte. Pour plus d’informations, consultez « [Restriction de la période du délai d’inactivité](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period) ».

Vous pouvez aussi limiter la durée pendant laquelle les codespaces arrêtés peuvent rester inutilisés avant d’être automatiquement supprimés. Vous réduisez ainsi les coûts de stockage liés à {% data variables.product.prodname_codespaces %}. Pour plus d’informations, consultez « [Restriction de la durée de conservation pour les espaces de code](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces) ».

Les propriétaires de dépôt qui configurent des prébuilds pour leur dépôt peuvent réduire les coûts de stockage des prébuilds en les configurant de telle sorte qu’elles ne soient créées que dans des régions spécifiques. Pour plus d’informations, consultez « [Configuration des prébuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds) ».

## Suppression des espaces de code inutilisés

Vos utilisateurs peuvent supprimer leurs propres codespaces dans https://github.com/codespaces et à partir de {% data variables.product.prodname_vscode %}. Pour réduire la taille d’un espace de code, les utilisateurs peuvent supprimer manuellement des fichiers à l’aide du terminal ou à partir de {% data variables.product.prodname_vscode_shortname %}. 

En tant que propriétaire d’organisation, vous pouvez supprimer n’importe quel codespace dans votre organisation. Pour plus d’informations, consultez « [Suppression d’un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization) ».

{% note %}

**Remarque :** Les codespaces sont automatiquement supprimés une fois qu’ils ont été arrêtés et qu’ils sont restés inactifs pendant un nombre de jours définissable par l’utilisateur. Pour plus d’informations, consultez « [Configuration de la suppression automatique de vos espaces de code](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces) ». En tant que propriétaire d’organisation, vous pouvez définir la période de conservation maximale pour les codespaces appartenant à votre organisation. Cela remplace le paramètre de conservation personnel d’un utilisateur. Pour plus d’informations, consultez « [Restriction de la durée de conservation pour les espaces de code](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces) ».

{% endnote %}

## Pour aller plus loin

- « [Liste des codespaces de votre organisation](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization) »
