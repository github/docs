---
title: "Exiger l’authentification à 2\_facteurs pour une organisation"
intro: 'Vous pouvez imposer aux membres et collaborateurs externes d’une organisation d’activer l’authentification à deux facteurs pour leurs comptes personnels de l’organisation, ce qui complique l’accès aux dépôts et aux paramètres de l’une organisation pour les acteurs malveillants.'
redirect_from:
  - /enterprise/admin/user-management/requiring-two-factor-authentication-for-an-organization
  - /admin/user-management/requiring-two-factor-authentication-for-an-organization
versions:
  ghes: '*'
type: how_to
topics:
  - 2FA
  - Enterprise
  - Organizations
  - Policies
  - Security
shortTitle: Require 2FA
ms.openlocfilehash: 2f7fe986cf3b13a171f85da9d5fdb74eeed0d648
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '146331639'
---
Quand vous utilisez LDAP ou l’authentification intégrée, l’authentification à 2 facteurs est prise en charge sur {% data variables.product.product_location %}. Les administrateurs d’organisation peuvent exiger que l’authentification à 2 facteurs soit activée pour les membres.

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

Pour plus d’informations, consultez « [À propos de l’authentification à deux facteurs](/github/authenticating-to-github/about-two-factor-authentication) ».

## Exigences relatives à l’application de l’authentification à 2 facteurs

Pour pouvoir exiger que les membres de l’organisation et les collaborateurs externes utilisent l’authentification à 2 facteurs, vous devez [activer l’authentification à 2 facteurs](/enterprise/user/articles/securing-your-account-with-two-factor-authentication-2fa/) pour votre propre compte personnel.

{% warning %}

**Avertissements :**

- Quand vous exigez l’authentification à 2 facteurs, les membres et les collaborateurs externes (y compris les comptes de bot) qui ne l’utilisent pas sont supprimés de l’organisation et perdent l’accès à ses dépôts, y compris à leurs duplications et dépôts privés. S’ils activent l’authentification à 2 facteurs pour leur compte personnel dans les trois mois suivant leur suppression de l’organisation, vous pouvez [rétablir leurs paramètres et privilèges d’accès](/enterprise/user/articles/reinstating-a-former-member-of-your-organization).
- Quand l’authentification à 2 facteurs est exigée, les membres de l’organisation ou les collaborateurs externes qui la désactivent sont automatiquement supprimés de l’organisation.
- Si vous êtes le seul propriétaire d’une organisation qui exige l’authentification à 2 facteurs, vous ne pourrez pas la désactiver pour votre compte personnel sans désactiver l’authentification à 2 facteurs exigée pour l’organisation.

{% endwarning %}

Avant d’exiger l’authentification à 2 facteurs, nous vous recommandons d’en informer les membres de l’organisation et les collaborateurs externes et de leur demander de la configurer pour leurs comptes. Vous pouvez [voir si les membres et les collaborateurs externes utilisent déjà l’authentification à 2 facteurs](/enterprise/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled) sous l’onglet Personnes d’une organisation.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.require_two_factor_authentication %} {% data reusables.organizations.removed_outside_collaborators %}

## Visualisation des personnes qui ont été supprimées de votre organisation

Pour voir les personnes qui ont été automatiquement supprimées de votre organisation parce qu’elles ne se sont pas conformées à votre exigence d’authentification à 2 facteurs, vous pouvez [effectuer une recherche dans le journal d’audit](/enterprise/admin/guides/installation/searching-the-audit-log/) en entrant `reason:two_factor_requirement_non_compliance` dans le champ de recherche.

{% data reusables.audit_log.octicon_icon %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.audit_log.audit_log_sidebar_for_site_admins %}
4. Entrez votre requête de recherche avec `reason:two_factor_requirement_non_compliance`.
 ![Événement du journal d’audit relatif aux outils du personnel montrant qu’un utilisateur a été supprimé parce qu’il ne s’est pas conformé à l’exigence d’authentification à 2 facteurs](/assets/images/help/2fa/2fa_noncompliance_stafftools_audit_log_search.png) Pour affiner votre recherche sur :
    - Les membres d’organisation supprimés, entrez `action:org.remove_member AND reason:two_factor_requirement_non_compliance`
    - Les collaborateurs externes supprimés, entrez `action:org.remove_outside_collaborator AND reason:two_factor_requirement_non_compliance`

  Vous pouvez également voir les personnes supprimées d’une organisation spécifique en spécifiant le nom de l’organisation dans votre recherche :
    - `org:octo-org AND reason:two_factor_requirement_non_compliance`
5. Cliquez sur **Rechercher**.  

## Aider les membres et collaborateurs externes supprimés à réintégrer votre organisation

Si des membres ou des collaborateurs externes sont supprimés de l’organisation quand vous activez l’exigence d’utilisation de l’authentification à 2 facteurs, ils reçoivent un e-mail les informant qu’ils ont été supprimés. Ils doivent alors activer l’authentification à 2 facteurs pour leur compte personnel et contacter un propriétaire de l’organisation pour demander l’accès à votre organisation.

## Pour aller plus loin

- « [Voir si l’authentification à 2 facteurs est activée pour des utilisateurs de votre organisation](/enterprise/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled) »
- « [Sécurisation de votre compte avec l’authentification à 2 facteurs](/enterprise/user/articles/securing-your-account-with-two-factor-authentication-2fa) »
- « [Rétablissement d’un ancien membre de votre organisation](/enterprise/user/articles/reinstating-a-former-member-of-your-organization) »
- « [Rétablissement de l’accès d’un ancien collaborateur externe à votre organisation](/enterprise/user/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization) »
