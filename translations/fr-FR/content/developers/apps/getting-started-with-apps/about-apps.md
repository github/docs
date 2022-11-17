---
title: À propos des applications
intro: 'Vous pouvez créer des intégrations avec les API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} pour ajouter de la souplesse et réduire les frictions dans votre propre workflow.{% ifversion fpt or ghec %} Vous pouvez également partager des intégrations avec d’autres personnes dans [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace).{% endif %}'
redirect_from:
  - /apps/building-integrationssetting-up-a-new-integration
  - /apps/building-integrations
  - /apps/getting-started-with-building-apps
  - /apps/about-apps
  - /developers/apps/about-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: a66af14f6047b2aff435ac4ac8dc83d7a1181e92
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107356'
---
Les applications sur {% data variables.product.prodname_dotcom %} vous permettent d’automatiser et d’améliorer votre workflow. Vous pouvez créer des applications pour améliorer votre workflow.{% ifversion fpt or ghec %} Vous pouvez également partager ou vendre des applications dans [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace). Pour découvrir comment répertorier une application sur {% data variables.product.prodname_marketplace %}, consultez « [Bien démarrer avec la Place de marché GitHub](/marketplace/getting-started/). »{% endif %}

{% data reusables.marketplace.github_apps_preferred %}, mais GitHub prend en charge {% data variables.product.prodname_oauth_apps %} et {% data variables.product.prodname_github_apps %}. Pour plus d’informations sur le choix du type d’application, consultez « [Différences entre les applications GitHub et les applications OAuth](/developers/apps/differences-between-github-apps-and-oauth-apps) ».

{% data reusables.apps.general-apps-restrictions %}

Pour obtenir une procédure pas à pas du processus de création de {% data variables.product.prodname_github_app %}, consultez « [Création de votre première application {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app). »

## À propos de {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_github_apps %} sont des acteurs de première classe dans GitHub. {% data variables.product.prodname_github_app %} agit en son propre nom, en effectuant des actions via l’API directement à l’aide de sa propre identité. Cela signifie que vous n’avez pas besoin de gérer un bot ni un compte de service en tant qu’utilisateur distinct.

{% data variables.product.prodname_github_apps %} peut être installé directement sur les comptes d’organisations et les comptes personnels, et être autorisé à avoir accès à des référentiels spécifiques. Elles sont fournies avec des webhooks intégrés et des autorisations spécifiques et limitées. Quand vous configurez votre {% data variables.product.prodname_github_app %}, vous pouvez sélectionner les référentiels auxquels l’application doit accéder. Vous pouvez par exemple configurer une application appelée `MyGitHub` qui écrit des problèmes dans le référentiel `octocat` et _uniquement_ dans le référentiel `octocat`. Pour installer {% data variables.product.prodname_github_app %}, vous devez être propriétaire de l’organisation ou disposer d’autorisations d’administrateur dans un référentiel.

{% data reusables.apps.app_manager_role %}

{% data variables.product.prodname_github_apps %} sont des applications qui nécessitent un hébergement. Pour des instructions pas à pas couvrant les serveurs et l’hébergement, consultez « [Création de votre première application {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app). »

Pour améliorer votre workflow, vous pouvez créer {% data variables.product.prodname_github_app %} qui contient plusieurs scripts ou une application entière, puis connecter cette application à de nombreux autres outils. Par exemple, vous pouvez connecter {% data variables.product.prodname_github_apps %} à GitHub, Slack, d’autres applications internes que vous utilisez, des programmes de messagerie ou d’autres API.

Gardez ces idées à l’esprit lors de la création de {% data variables.product.prodname_github_apps %} :

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-github-apps-allowed %} {% endif %}
* {% data variables.product.prodname_github_app %} doit effectuer des actions indépendamment d’un utilisateur (sauf si l’application utilise un jeton [user-to-server](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests)). {% data reusables.apps.expiring_user_authorization_tokens %}

* Assurez-vous que {% data variables.product.prodname_github_app %} s’intègre à des référentiels spécifiques.
* {% data variables.product.prodname_github_app %} doit se connecter à un compte personnel ou à une organisation.
* Ne vous attendez pas à ce que {% data variables.product.prodname_github_app %} soit en mesure de connaître et de réaliser tout ce qu’un utilisateur peut faire.
* N’utilisez pas {% data variables.product.prodname_github_app %} si vous avez uniquement besoin d’un service « Se connecter avec GitHub ». Toutefois, {% data variables.product.prodname_github_app %} peut utiliser un [flux d’identification utilisateur](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) pour connecter les utilisateurs _et_ effectuer d’autres opérations.
* Ne générez pas {% data variables.product.prodname_github_app %} si vous souhaitez _uniquement_ agir en tant qu’utilisateur GitHub et effectuer les mêmes opérations qu’un utilisateur.{% ifversion fpt or ghec %}
* {% data reusables.apps.general-apps-restrictions %}{% endif %}

Pour commencer à développer {% data variables.product.prodname_github_apps %}, commencez par « [Création de {% data variables.product.prodname_github_app %}](/apps/building-github-apps/creating-a-github-app/). »{% ifversion fpt or ghec %} Pour découvrir l’utilisation des manifestes {% data variables.product.prodname_github_app %}, permettant la création de {% data variables.product.prodname_github_apps %} préconfigurées, consultez « [Création de {% data variables.product.prodname_github_apps %} à partir d’un manifeste](/apps/building-github-apps/creating-github-apps-from-a-manifest/). »{% endif %}

## À propos de {% data variables.product.prodname_oauth_apps %}

OAuth2 est un protocole qui permet aux applications externes de demander l’autorisation pour des détails privés du compte {% data variables.product.prodname_dotcom %} d’un utilisateur sans accéder à son mot de passe. Il est préférable à l’authentification de base, car les jetons peuvent être limités à des types de données spécifiques et peuvent être révoqués par les utilisateurs à tout moment.

{% data reusables.apps.deletes_ssh_keys %}

{% data variables.product.prodname_oauth_app %} utilise {% data variables.product.prodname_dotcom %} comme fournisseur d’identité pour s’authentifier en tant qu’utilisateur qui autorise l’accès à l’application. Cela signifie que lorsqu’un utilisateur attribue un accès {% data variables.product.prodname_oauth_app %}, il autorise l’accès à _tous_ les référentiels dans son compte, ainsi qu’aux organisations auxquelles il appartient où l’accès tiers n’est pas bloqué.

La création de {% data variables.product.prodname_oauth_app %} est une option judicieuse si vous créez des processus plus complexes que ceux traités par un simple script. Notez que les applications {% data variables.product.prodname_oauth_apps %} nécessitent un hébergement.

Gardez ces idées à l’esprit lors de la création de {% data variables.product.prodname_oauth_apps %} :

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-oauth-apps-allowed %} {% endif %}
* {% data variables.product.prodname_oauth_app %} doivent toujours agir comme l’utilisateur {% data variables.product.prodname_dotcom %} authentifié pour tout {% data variables.product.prodname_dotcom %} (par exemple quand ils fournissent des notifications utilisateur).
* {% data variables.product.prodname_oauth_app %} peut être utilisé en tant que fournisseur d’identité en activant une « Connexion avec {% data variables.product.prodname_dotcom %} » pour l’utilisateur authentifié.
* Ne générez pas de {% data variables.product.prodname_oauth_app %} si vous souhaitez que votre application agisse sur un référentiel unique. Dans l’étendue OAuth `repo`, {% data variables.product.prodname_oauth_apps %} peut agir sur _tous_ les référentiels d’utilisateurs authentifiés.
* Ne créez pas de {% data variables.product.prodname_oauth_app %} pour servir d’application pour votre équipe ou votre entreprise. Les {% data variables.product.prodname_oauth_apps %} s’authentifient en tant qu’utilisateur unique. Par conséquent, si une personne crée {% data variables.product.prodname_oauth_app %} pour une entreprise, puis quitte l’entreprise, aucun autre utilisateur n’y a accès.{% ifversion fpt or ghec %}
* {% data reusables.apps.oauth-apps-restrictions %}{% endif %}

Pour plus d’informations sur {% data variables.product.prodname_oauth_apps %}, consultez « [Création de {% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/creating-an-oauth-app/) » et « [Inscription de votre application](/rest/guides/basics-of-authentication#registering-your-app). »

## {% data variables.product.pat_generic_caps %}s

Un [{% data variables.product.pat_generic %}](/articles/creating-a-personal-access-token-for-the-command-line/) est une chaîne de caractères qui fonctionne de la même façon qu’un [jeton OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/) dans lequel vous pouvez spécifier ses autorisations via des [ étendues](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). Un {% data variables.product.pat_generic %} est également similaire à un mot de passe, sauf que vous pouvez en avoir plusieurs et que vous pouvez révoquer l’accès à chacun d’eux à tout moment.

Vous pouvez par exemple activer un {% data variables.product.pat_generic %} pour écrire dans vos dépôts. Si vous exécutez ensuite une commande cURL ou que vous écrivez un script qui [crée un problème](/rest/reference/issues#create-an-issue) dans votre dépôt, vous allez passer le {% data variables.product.pat_generic %} pour vous authentifier. Vous pouvez stocker le {% data variables.product.pat_generic %} en tant que variable d’environnement pour éviter de devoir le taper chaque fois que vous l’utilisez.

Gardez ces idées à l’esprit lors de l’utilisation de {% data variables.product.pat_generic %}s :

* N’oubliez pas d’utiliser ce jeton pour vous représenter uniquement.
* Vous pouvez effectuer des demandes cURL ponctuelles.
* Vous pouvez exécuter des scripts personnels.
* Ne configurez pas de script pour votre équipe ou votre entreprise entière.
* Ne configurez pas de compte personnel partagé pour agir en tant qu’utilisateur de bot.
* Accordez à votre jeton les privilèges minimaux dont il a besoin.
* Définissez un délai d’expiration pour vos {% data variables.product.pat_generic %}s, afin de sécuriser vos informations.

## Détermination de l’intégration à générer

Avant de commencer à créer des intégrations, vous devez déterminer le meilleur moyen d’accéder, d’authentifier et d’interagir avec les API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. L’image suivante montre des questions à vous poser quand vous décidez d’utiliser des {% data variables.product.pat_generic %}s, des {% data variables.product.prodname_github_apps %} ou des {% data variables.product.prodname_oauth_apps %} pour votre intégration.

![Présentation du flux d’interrogation des applications](/assets/images/intro-to-apps-flow.png)

Prenez en compte les questions suivantes concernant le comportement de votre intégration et les accès autorisés :

* Mon intégration agira-t-elle uniquement comme moi ou agira-t-elle comme une application ?
* Doit-elle agir indépendamment de moi, comme une entité propre ?
* Les autorisations d’accès sont-elles identiques aux miennes ou dois-je limiter l’accès ?
* S’agit-il d’une intégration simple ou complexe ? Par exemple, les {% data variables.product.pat_generic %}s sont adaptés aux cURL et aux scripts simples, tandis qu’une {% data variables.product.prodname_oauth_app %} peut gérer des scripts plus complexes.

## Demande de support

{% data reusables.support.help_resources %}
