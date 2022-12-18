---
title: Exiger l’authentification à deux facteurs dans votre organisation
intro: 'Les propriétaires d’organisations peuvent exiger {% ifversion fpt or ghec %}que les membres d’organisations, les collaborateurs externes et les gestionnaires de facturation{% else %}que les membres d’organisations, les collaborateurs externes et les gestionnaires de facturation{% endif %} activent l’authentification à deux facteurs pour leurs comptes personnels, ce qui complique l’accès aux référentiels et aux paramètres d’une organisation par des acteurs malveillants.'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/requiring-two-factor-authentication-in-your-organization
  - /organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Require 2FA
ms.openlocfilehash: 1a6ea397b010855917f9304db9a5c51cb5440a22
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147872302'
---
## À propos de l’authentification à 2 facteurs pour les organisations

{% data reusables.two_fa.about-2fa %} Vous pouvez obliger tous les {% ifversion fpt or ghec %}membres, collaborateurs externes et gestionnaires de facturation{% else %}membres et collaborateurs externes{% endif %} de votre organisation à activer l’authentification à 2 facteurs sur {% data variables.product.product_name %}. Pour plus d’informations sur l’authentification à 2 facteurs, consultez « [Sécurisation de votre compte avec l’authentification à deux facteurs (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa) ».

{% ifversion fpt or ghec %}

Vous pouvez également exiger une authentification à 2 facteurs pour les organisations d’une entreprise. Pour plus d’informations, consultez « [Application de stratégies pour les paramètres de sécurité dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise) ».

{% endif %}

{% warning %}

**Avertissements :**

- Quand vous rendez obligatoire l’utilisation d’une authentification à 2 facteurs pour votre organisation, {% ifversion fpt or ghec %}ses membres, collaborateurs externes et gestionnaires de facturation{% else %}ses membres et collaborateurs externes{% endif %} (y compris les comptes de bot) qui n’utilisent pas une authentification à 2 facteurs sont supprimés de l’organisation et perdent l’accès à ses dépôts. Ils perdent également l’accès à leurs duplications (fork) des dépôts privés de l’organisation. Vous pouvez [rétablir leurs paramètres et privilèges d’accès](/articles/reinstating-a-former-member-of-your-organization) s’ils activent l’authentification à 2 facteurs pour leur compte personnel dans les trois mois suivant leur suppression de votre organisation.
- Si un propriétaire, membre, {% ifversion fpt or ghec %}gestionnaire de facturation{% endif %} ou collaborateur externe d’une organisation désactive l’authentification à 2 facteurs pour son compte personnel alors que vous avez activé l’exigence d’authentification à 2 facteurs, il est automatiquement supprimé de l’organisation.
- Si vous êtes le seul propriétaire d’une organisation qui exige l’authentification à 2 facteurs, vous ne pourrez pas la désactiver pour votre compte personnel sans désactiver l’authentification à 2 facteurs exigée pour l’organisation.

{% endwarning %}

{% data reusables.two_fa.auth_methods_2fa %}

## Prérequis

Avant d’obliger les {% ifversion fpt or ghec %}membres de l’organisation, collaborateurs externes et gestionnaires de facturation{% else %}membres de l’organisation et collaborateurs externes{% endif %} à utiliser l’authentification à 2 facteurs, vous devez activer celle-ci pour votre compte sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Sécurisation de votre compte avec l’authentification à deux facteurs (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa) ».

Avant d’exiger l’utilisation de l’authentification à 2 facteurs, il est recommandé d’avertir les {% ifversion fpt or ghec %}membres de l’organisation, collaborateurs externes et gestionnaires de facturation{% else %}membres de l’organisation et collaborateurs externes{% endif %} et de leur demander de configurer l’authentification à 2 facteurs pour leurs comptes. Vous pouvez voir si les membres et les collaborateurs externes utilisent déjà l’authentification à 2 facteurs. Pour plus d’informations, consultez « [Voir si l’authentification à 2 facteurs est activée pour des utilisateurs de votre organisation](/organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled) ».

## Exiger l’authentification à deux facteurs dans votre organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.require_two_factor_authentication %} {% data reusables.organizations.removed_outside_collaborators %} {% ifversion fpt or ghec %}
8. Si des membres ou des collaborateurs externes sont supprimés de l’organisation, nous vous recommandons de leur envoyer une invitation pour pouvoir rétablir leurs anciens privilèges et accès à votre organisation. Ils doivent activer l’authentification à 2 facteurs pour pouvoir accepter votre invitation.
{% endif %}

## Visualisation des personnes qui ont été supprimées de votre organisation

Pour voir les personnes qui ont été automatiquement supprimées de votre organisation parce qu’elles ne se sont pas conformées à votre exigence d’authentification à 2 facteurs, vous pouvez [rechercher dans le journal d’audit de l’organisation](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log) les personnes supprimées de votre organisation. L’événement de journal d’audit indique si une personne a été supprimée pour non-conformité à l’authentification à 2 facteurs.

![Événement de journal d’audit montrant un utilisateur supprimé pour non-conformité à l’authentification à 2 facteurs](/assets/images/help/2fa/2fa_noncompliance_audit_log_search.png)

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.audit_log.audit_log_sidebar_for_org_admins %}
4. Entrez votre requête de recherche. Pour rechercher :
    - Les membres de l’organisation supprimés, utilisez `action:org.remove_member` dans votre requête de recherche
    - Les collaborateurs externes supprimés, utilisez `action:org.remove_outside_collaborator` dans votre requête de recherche{% ifversion fpt or ghec %}
    - Les gestionnaires de facturation supprimés, utilisez `action:org.remove_billing_manager` dans votre requête de recherche{% endif %}

 Vous pouvez également afficher les personnes qui ont été supprimées de votre organisation en utilisant un [délai d’exécution](/articles/reviewing-the-audit-log-for-your-organization/#search-based-on-time-of-action) dans votre recherche.

## Aider les membres et collaborateurs externes supprimés à réintégrer votre organisation

Si des membres ou des collaborateurs externes sont supprimés de l’organisation quand vous activez l’exigence d’utilisation de l’authentification à 2 facteurs, ils reçoivent un e-mail les informant qu’ils ont été supprimés. Ils doivent alors activer l’authentification à 2 facteurs pour leur compte personnel et contacter un propriétaire de l’organisation pour demander l’accès à votre organisation.

## Pour aller plus loin

- « [Voir si l’authentification à 2 facteurs est activée pour des utilisateurs de votre organisation](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled) »
- « [Sécurisation de votre compte avec l’authentification à 2 facteurs](/articles/securing-your-account-with-two-factor-authentication-2fa) »
- « [Rétablissement d’un ancien membre de votre organisation](/articles/reinstating-a-former-member-of-your-organization) »
- « [Rétablissement de l’accès d’un ancien collaborateur externe à votre organisation](/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization) »
