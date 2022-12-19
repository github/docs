---
title: Connexion avec des applications tierces
intro: 'Vous pouvez connecter votre identité {% data variables.product.product_name %} à des applications tierces à l’aide d’OAuth. Quand vous autorisez une de ces applications, veillez à ce qu’il s’agisse d’une application de confiance, à vérifier par qui elle a été développée et à passer en revue les types d’informations auxquels elle veut accéder.'
redirect_from:
  - /articles/connecting-with-third-party-applications
  - /github/authenticating-to-github/connecting-with-third-party-applications
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/connecting-with-third-party-applications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Third-party applications
ms.openlocfilehash: b8cd20d36926c373116061e211be62701b1bd2f6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104121'
---
Quand une application tierce veut vous identifier par votre connexion {% data variables.product.product_name %}, vous voyez une page contenant les informations de contact du développeur et une liste des données spécifiques demandées.

## Contacter le développeur de l’application

Étant donné qu’une application est développée par un tiers qui n’est pas {% data variables.product.product_name %}, nous ne savons pas exactement comment elle utilise les données dont elle demande l’accès. Vous pouvez utiliser les informations du développeur en haut de la page pour contacter l’administrateur de l’application si vous avez des questions ou des doutes concernant leur application.

![Informations du propriétaire - {% data variables.product.prodname_oauth_app %}](/assets/images/help/platform/oauth_owner_bar.png)

Une description détaillée de l’application ainsi que son site web figurent sur le côté droit de la page si le développeur a choisi de les fournir.

![Informations et site web de l’application OAuth](/assets/images/help/platform/oauth_app_info.png)

## Types d’accès aux données par les applications

Les applications peuvent avoir un accès *en lecture* ou *en écriture* à vos données {% data variables.product.product_name %}.

- L’**accès en lecture** permet uniquement à une application de *consulter* vos données.
- L’**accès en écriture** permet à une application de *modifier* vos données.

### À propos des étendues OAuth

Les *étendues* sont des groupes nommés d’autorisations qu’une application peut demander pour accéder aux données publiques et non publiques.

Quand vous souhaitez utiliser une application tierce qui s’intègre à {% data variables.product.product_name %}, cette application vous indique le type d’accès à vos données dont elle a besoin. Si vous accordez l’accès à l’application, celle-ci pourra effectuer des actions en votre nom telles que la lecture ou la modification de données. Par exemple, si vous voulez utiliser une application qui demande l’étendue `user:email`, cette application aura accès en lecture seule à vos adresses e-mail privées. Pour plus d’informations, consultez « [À propos des étendues pour les {% data variables.product.prodname_oauth_apps %}](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps) ».

{% tip %}

**Remarque :** Actuellement, vous ne pouvez pas limiter l’accès au code source à la lecture seule.

{% endtip %}

### Types de données demandées

Il existe plusieurs types de données que les applications peuvent demander.

![Détails de l’accès OAuth](/assets/images/help/platform/oauth_access_types.png)

{% tip %}

**Conseil :** {% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

| Type de données | Description |
| --- | --- |
| État de commit | Vous pouvez accorder à une application tierce l’accès à votre état de commit. L’accès à l’état de commit permet aux applications de déterminer si une génération réussit par rapport à un commit spécifique. Les applications n’ont pas accès à votre code, mais elles <em>peuvent</em> lire et écrire des informations d’état pour un commit spécifique. |
| Déploiements | L’accès à l’état de déploiement permet aux applications de déterminer si un déploiement réussit par rapport à un commit spécifique pour un dépôt. Les applications n’ont pas accès à votre code. |
| Gists | L’accès aux [Gists](https://gist.github.com) permet aux applications de lire ou d’écrire dans {% ifversion not ghae %}vos Gists publics et{% else %}vos Gists internes et{% endif %} vos Gists secrets. |
| Hooks | L’accès aux [webhooks](/webhooks) permet aux applications de lire ou d’écrire des configurations de hook sur les dépôts que vous gérez. |
| Notifications | L’accès aux notifications permet aux applications de lire vos notifications {% data variables.product.product_name %} telles que les commentaires sur les problèmes et les demandes de tirage (pull request). Toutefois, les applications ne peuvent toujours pas accéder à quoi que ce soit dans vos dépôts. |
| Organisations et équipes | L’accès aux organisations et équipes permet aux applications d’accéder à l’appartenance aux organisations et équipes et de la gérer. |
| Données personnelles de l’utilisateur | Les données utilisateur incluent des informations trouvées dans votre profil utilisateur telles que votre nom, votre adresse e-mail et votre emplacement. |
| Référentiels | Les informations de dépôt incluent les noms des contributeurs, les branches que vous avez créées et les fichiers réels dans votre dépôt. Une application peut demander l’accès à tous vos dépôts quel que soit leur niveau de visibilité. Pour plus d’informations, consultez « [À propos des dépôts](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) ». |
| Suppression de dépôt | Les applications peuvent demander à supprimer des dépôts que vous administrez, mais elles n’auront pas accès à votre code. |

## Demande d’autorisations mises à jour

Les applications peuvent demander de nouveaux privilèges d’accès. Quand une application demande des autorisations mises à jour, elle vous informe des différences.

![Modification de l’accès des applications tierces](/assets/images/help/platform/oauth_existing_access_pane.png)
