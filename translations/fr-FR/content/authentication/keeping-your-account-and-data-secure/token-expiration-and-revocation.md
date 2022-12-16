---
title: Expiration et révocation des jetons
intro: 'Vos jetons peuvent expirer et peuvent aussi être révoqués par vous, les applications que vous avez autorisées et {% data variables.product.product_name %} lui-même.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Token expiration
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation
ms.openlocfilehash: 00ccfc3117401bfa9464da9599067fe1d2f514dd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106996'
---
Quand un jeton a expiré ou a été révoqué, il ne peut plus être utilisé pour authentifier les requêtes Git et les requêtes d’API. Il n’est pas possible de restaurer un jeton révoqué ou qui a expiré. Un autre jeton devra être créé par l’application ou par vous-même.

Cet article explique les raisons possibles pour lesquelles votre jeton {% data variables.product.product_name %} a été révoqué ou a expiré.

{% note %}

**Remarque :** Quand un {% data variables.product.pat_generic %} ou un jeton OAuth expire ou est révoqué, vous pouvez voir une action `oauth_authorization.destroy` dans votre journal de sécurité. Pour plus d’informations, consultez « [Examen de votre journal de sécurité](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log) ».

{% endnote %}

## Jeton révoqué après avoir atteint sa date d’expiration

Quand vous créez un {% data variables.product.pat_generic %}, nous vous recommandons de définir une date d’expiration pour ce jeton. Quand la date d’expiration de votre jeton est atteinte, il est automatiquement révoqué. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) ».

{% ifversion fpt or ghec %}
## Jeton révoqué quand il est poussé (push) sur un dépôt ou un Gist public

Si un jeton OAuth valide, un jeton d’{% data variables.product.prodname_github_app %} ou un {% data variables.product.pat_generic %} est poussé vers un dépôt public ou un Gist public, le jeton est automatiquement révoqué. 

{% endif %}

{% ifversion fpt or ghec %}
## Le jeton a expiré car il n’est pas suffisamment utilisé

{% data variables.product.product_name %} révoque automatiquement un jeton OAuth ou un {% data variables.product.pat_generic %} quand le jeton n’a pas été utilisé depuis un an.
{% endif %}

## Jeton révoqué par l’utilisateur

Vous pouvez révoquer votre autorisation d’une {% data variables.product.prodname_github_app %} ou d’une {% data variables.product.prodname_oauth_app %} à partir de vos paramètres de compte, ce qui révoque tous les jetons associés à l’application. Pour plus d’informations, consultez « [Examen de vos intégrations autorisées](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations) » et « [Examen de vos applications autorisées (OAuth)](/github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-applications-oauth) ».

Quand une autorisation est révoquée, tous les jetons associés à l’autorisation sont également révoqués. Pour réautoriser une application, suivez les instructions de l’application ou du site web tiers afin de reconnecter votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}.

## Jeton révoqué par l’{% data variables.product.prodname_oauth_app %}

Le propriétaire d’une {% data variables.product.prodname_oauth_app %} peut révoquer l’autorisation d’un compte de son application, ce qui révoque également tous les jetons associés à l’autorisation. Pour plus d’informations sur la révocation des autorisations de votre application OAuth, consultez « [Supprimer une autorisation d’application](/rest/reference/apps#delete-an-app-authorization) ».

Des propriétaires {% data variables.product.prodname_oauth_app %} peuvent également révoquer des jetons individuels associés à une autorisation. Pour plus d’informations sur la révocation de jetons individuels pour votre application OAuth, consultez « [Supprimer un jeton d’application](/rest/apps/oauth-applications#delete-an-app-token) ».

## Jeton révoqué en raison d’un excès de jetons pour une {% data variables.product.prodname_oauth_app %} avec la même étendue

{% data reusables.apps.oauth-token-limit %}

## Jeton utilisateur révoqué en raison de la configuration d’une {% data variables.product.prodname_github_app %}

Par défaut, les jetons d’utilisateur à serveur créés par une {% data variables.product.prodname_github_app %} expirent au bout de huit heures. Les propriétaires d’{% data variables.product.prodname_github_apps %} peuvent configurer leurs applications pour que les jetons d’utilisateur à serveur n’expirent pas. Pour plus d’informations sur la modification du comportement des jetons d’utilisateur à serveur de votre application {% data variables.product.prodname_dotcom %}, consultez « [Activation des fonctionnalités facultatives pour les applications](/developers/apps/getting-started-with-apps/activating-optional-features-for-apps) ».
