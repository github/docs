---
title: Synchronisation d’équipe
intro: 'L’API de synchronisation d’équipe vous permet de gérer les connexions entre les équipes {% data variables.product.product_name %} et les groupes de fournisseurs d’identité externes.'
versions:
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 6a5d379b1050e10f9e31e14ed2b094a684676737
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067161'
---
## À propos de l’API de synchronisation d’équipe

Pour utiliser cette API, l’utilisateur authentifié doit être un responsable d’équipe ou un propriétaire de l’organisation associée à l’équipe. Le jeton que vous utilisez pour l’authentification doit également être autorisé à être utilisé avec votre fournisseur d’identité (SSO). Pour plus d’informations, consultez « [Autorisation d’un jeton d’accès personnel à utiliser avec une organisation d’authentification unique SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) ».

Vous pouvez gérer les membres de l’équipe GitHub via votre fournisseur d’identité avec la synchronisation d’équipe. La synchronisation d’équipe doit être activée pour utiliser l’API Synchronisation d’équipe. Pour plus d’informations, consultez « [Synchronisation des équipes entre votre fournisseur d’identité et GitHub](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) ».

{% note %}

**Remarque :** L’API Synchronisation d’équipe ne peut pas être utilisée avec {% data variables.product.prodname_emus %}. Pour en savoir plus sur la gestion d’une {% data variables.product.prodname_emu_org %}, consultez « [API Groupes externes](/enterprise-cloud@latest/rest/reference/teams#external-groups) ».

{% endnote %}
