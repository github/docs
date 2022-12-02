---
title: Autorisation des applications OAuth
intro: 'Vous pouvez connecter votre identité {% data variables.product.product_name %} à des applications tierces à l’aide d’OAuth. Quand vous autorisez une {% data variables.product.prodname_oauth_app %}, veillez à ce qu’il s’agisse d’une application de confiance, à vérifier par qui elle a été développée et à passer en revue les types d’informations auxquels elle veut accéder.'
redirect_from:
  - /articles/authorizing-oauth-apps
  - /github/authenticating-to-github/authorizing-oauth-apps
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 7d116f8fc5117cdcbdbd5582e007351c47b2d55d
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184019'
---
Quand une {% data variables.product.prodname_oauth_app %} souhaite vous identifier par le biais de votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, une page s’affiche avec les coordonnées du développeur de l’application et une liste des données spécifiques nécessaires.

{% ifversion fpt or ghec %}

{% tip %}

**Conseil :** Vous devez [vérifier votre adresse e-mail](/articles/verifying-your-email-address) pour pouvoir autoriser une {% data variables.product.prodname_oauth_app %}.

{% endtip %}

{% endif %}

## Accès d’une {% data variables.product.prodname_oauth_app %}

Les{% data variables.product.prodname_oauth_apps %} peuvent avoir un accès *en lecture* ou *en écriture* à vos données {% data variables.product.product_name %}.

- L’**accès en lecture** permet uniquement à une application de *consulter* vos données.
- L’**accès en écriture** permet à une application de *modifier* vos données.

{% tip %}

**Conseil :** {% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

### À propos des étendues OAuth

Les *étendues* sont des groupes d’autorisations nommés qu’une {% data variables.product.prodname_oauth_app %} peut demander pour accéder aux données publiques et non publiques.

Quand vous souhaitez utiliser une {% data variables.product.prodname_oauth_app %} qui s’intègre à {% data variables.product.product_name %}, cette application vous indique le type d’accès à vos données dont elle a besoin. Si vous accordez l’accès à l’application, celle-ci pourra effectuer des actions en votre nom telles que la lecture ou la modification de données. Par exemple, si vous voulez utiliser une application qui demande l’étendue `user:email`, cette application aura accès en lecture seule à vos adresses e-mail privées. Pour plus d’informations, consultez « [À propos des étendues pour les {% data variables.product.prodname_oauth_apps %}](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps) ».

{% tip %}

**Remarque :** Actuellement, vous ne pouvez pas limiter l’accès au code source à la lecture seule.

{% endtip %}

{% data reusables.apps.oauth-token-limit %}

### Types de données demandées

Les {% data variables.product.prodname_oauth_apps %} peuvent demander plusieurs types de données.

| Type de données | Description |
| --- | --- |
| État de commit | Vous pouvez accorder à une application l’accès à votre état de commit. L’accès à l’état de commit permet aux applications de déterminer si une génération réussit par rapport à un commit spécifique. Les applications n’ont pas accès à votre code, mais elles peuvent lire et écrire des informations d’état pour un commit spécifique. |
| Déploiements | L’accès à l’état de déploiement permet aux applications de déterminer si un déploiement réussit par rapport à un commit spécifique pour des dépôts publics et privés. Les applications n’ont pas accès à votre code. |
| Gists | L’accès aux [Gists](https://gist.github.com) permet aux applications de lire vos Gist publics et secrets et d’écrire dans ces derniers. |
| Hooks | L’accès aux [webhooks](/webhooks) permet aux applications de lire ou d’écrire des configurations de hook sur les dépôts que vous gérez. |
| Notifications | L’accès aux notifications permet aux applications de lire vos notifications {% data variables.product.product_name %} telles que les commentaires sur les problèmes et les demandes de tirage (pull request). Toutefois, les applications ne peuvent toujours pas accéder à quoi que ce soit dans vos dépôts. |
| Organisations et équipes | L’accès aux organisations et équipes permet aux applications d’accéder à l’appartenance aux organisations et équipes et de la gérer. |
| Données personnelles de l’utilisateur | Les données utilisateur incluent des informations trouvées dans votre profil utilisateur telles que votre nom, votre adresse e-mail et votre emplacement. |
| Référentiels | Les informations de dépôt incluent les noms des contributeurs, les branches que vous avez créées et les fichiers réels dans votre dépôt. Les applications peuvent demander l’accès à des dépôts publics ou privés au niveau de l’utilisateur. |
| Suppression de dépôt | Les applications peuvent demander à supprimer des dépôts que vous administrez, mais elles n’auront pas accès à votre code. |{% ifversion projects-oauth-scope %}
| Projets | Accédez aux {% data variables.projects.projects_v2 %} de l’utilisateur et de l’organisation. Les applications peuvent demander un accès en lecture/écriture ou en lecture seule. |{% endif %}

## Demande d’autorisations mises à jour

Quand des {% data variables.product.prodname_oauth_apps %} demandent de nouvelles autorisations d’accès, elles vous informent des différences entre leurs autorisations actuelles et les nouvelles autorisations.

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_oauth_apps %} et organisations

Quand vous autorisez une {% data variables.product.prodname_oauth_app %} pour votre compte personnel, vous voyez également comment l’autorisation va affecter chaque organisation dont vous êtes membre.

- **Pour les organisations *avec* des restrictions d’accès d’{% data variables.product.prodname_oauth_app %}, vous pouvez demander à l’administrateur d’une organisation d’approuver l’application pour une utilisation dans cette organisation.** Si l’organisation n’approuve pas l’application, celle-ci pourra accéder uniquement aux ressources publiques de l’organisation. Si vous êtes administrateur d’une organisation, vous pouvez [approuver l’application](/articles/approving-oauth-apps-for-your-organization) vous-même.

- **Pour les organisations *sans* restrictions d’accès d’{% data variables.product.prodname_oauth_app %}, l’application sera automatiquement autorisée à accéder aux ressources de ces organisations.** Ainsi, vous devez être prudent quant aux {% data variables.product.prodname_oauth_apps %} pour lesquelles vous approuvez l’accès aux ressources de votre compte personnel et à toutes les ressources de l’organisation.

Si vous faites partie d’organisations où l’authentification unique (SSO) SAML est activée et que vous avez créé une identité liée pour cette organisation en vous authentifiant via SAML auparavant, vous devez disposer d’une session SAML active pour chaque organisation chaque fois que vous autorisez une {% data variables.product.prodname_oauth_app %}.

{% note %}

**Remarque :** en cas de problèmes avec une {% data variables.product.prodname_oauth_app %} ou {% data variables.product.prodname_github_app %} autorisée qui accède à une organisation protégée par SAML, vous devez peut-être révoquer l’application sur votre page [{% data variables.product.prodname_github_apps %} autorisés](https://github.com/settings/applications) ou [{% data variables.product.prodname_oauth_apps %} autorisés](https://github.com/settings/apps/authorizations), consultez l’organisation pour vous identifier et établir une session SAML active, puis essayez de réautoriser l’application en y accédant.

{% endnote %}

## Pour aller plus loin

- « [À propos des restrictions d’accès d’une {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions) »
- « [Autorisation des applications GitHub](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps) »
- « [Support pour {% data variables.product.prodname_marketplace %}](/articles/github-marketplace-support) »

{% endif %}
