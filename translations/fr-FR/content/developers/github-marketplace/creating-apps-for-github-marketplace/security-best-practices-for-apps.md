---
title: Meilleures pratiques en matière de sécurité pour les applications
intro: 'Conseils pour préparer une application sécurisée à partager sur {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/marketplace/getting-started/security-review-process
  - /marketplace/getting-started/security-review-process
  - /developers/github-marketplace/security-review-process-for-submitted-apps
  - /developers/github-marketplace/security-best-practices-for-apps
shortTitle: Security best practice
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: aaff313f73b74ba28f765050a8f993a9dddea1be
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086382'
---
Si vous suivez ces bonnes pratiques, vous allez plus facilement proposer une expérience utilisateur sécurisée.

## Autorisation, authentification et contrôle d’accès

Nous vous recommandons de créer une application GitHub plutôt qu’une application OAuth. {% data reusables.marketplace.github_apps_preferred %}. Pour plus d’informations, consultez « [Différences entre les applications GitHub et les applications OAuth](/apps/differences-between-apps/) ».
- Les applications doivent utiliser le principe du privilège minimum et ne doivent demander que les étendues OAuth et les autorisations d’application GitHub dont l’application a besoin pour effectuer ses fonctionnalités prévues. Pour plus d’informations, consultez [Principe du privilège minimum](https://en.wikipedia.org/wiki/Principle_of_least_privilege) dans Wikipédia.
- Les applications doivent fournir aux clients un moyen de supprimer leur compte, sans avoir à envoyer un e-mail ou à appeler un technicien.
- Les applications ne doivent pas partager de jetons entre différentes implémentations de l’application. Par exemple, une application de bureau doit avoir un jeton distinct d’une application web. Les jetons individuels permettent à chaque application de demander l’accès nécessaire pour les ressources GitHub séparément.
- Concevez votre application avec différents rôles d’utilisateur, en fonction des fonctionnalités requises par chaque type d’utilisateur. Par exemple, un utilisateur standard ne doit pas avoir accès aux fonctionnalités d’administrateurs et les gestionnaires de facturation n’ont peut-être pas besoin d’accéder par envoi (push) au code du référentiel.
- Les applications ne doivent pas partager de comptes de service tels que les services par e-mail ou de base de données pour gérer votre service SaaS.
- Tous les services utilisés dans votre application doivent avoir des informations d’identification de connexion et de mot de passe uniques.
- L’accès aux privilèges Administrateur à l’infrastructure d’hébergement de production ne doit être accordé qu’aux ingénieurs et aux employés qui ont des tâches administratives.
- Les applications ne doivent pas utiliser de jetons d’accès personnels pour s’authentifier et doivent s’authentifier en tant qu’[Application OAuth](/apps/about-apps/#about-oauth-apps) ou [Application GitHub](/apps/about-apps/#about-github-apps) :
  - Les applications OAuth doivent s’authentifier à l’aide d’un [jeton OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/).
  - Les applications GitHub doivent s’authentifier à l’aide d’un [JSON Web Token (JWT),](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) d’un [jeton OAuth](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) ou d’un [jeton d’accès à l’installation](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

## Protection des données

- Les applications doivent chiffrer les données transférées sur l’Internet public à l’aide du protocole HTTPS, avec un certificat TLS valide ou SSH pour Git.
- Les applications doivent stocker en toute sécurité l’ID client et les clés secrètes client. Nous vous recommandons de les stocker en tant que [variables environnementales](http://en.wikipedia.org/wiki/Environment_variable#Getting_and_setting_environment_variables).
- Les applications doivent supprimer toutes les données utilisateur GitHub dans les 30 jours suivant la réception d’une requête de l’utilisateur ou dans les 30 jours suivant la fin de la relation juridique de l’utilisateur avec GitHub.
- Les applications ne doivent pas obliger l’utilisateur à fournir son mot de passe GitHub.
- Les applications doivent chiffrer des jetons, des ID client et des clés secrètes clients.

## Enregistrement et surveillance

Les applications doivent avoir des fonctionnalités de journalisation et d’analyse. Les journaux d’activité d’application doivent être conservés pendant au moins 30 jours et archivés pendant au moins un an.
Un journal de sécurité doit inclure :

- des événements d’authentification et d’autorisation
- des changements de configuration de service
- des lectures et écritures d’objets
- toutes les modifications d’autorisation d’utilisateur et de groupe
- l’élévation du rôle à l’administrateur
- un horodatage cohérent pour chaque événement
- des utilisateurs sources, adresses IP et/ou noms d’hôte pour toutes les actions journalisées

## Workflow de réponse aux incidents

Pour offrir une expérience sécurisée aux utilisateurs, vous devez disposer d’un plan de réponse aux incidents clair en place avant de répertorier votre application. Nous vous recommandons d’avoir une équipe de réponse aux incidents de sécurité et d’exploitation dans votre entreprise plutôt que d’utiliser un fournisseur tiers. Vous devez avoir la possibilité de notifier {% data variables.product.product_name %} dans les 24 heures suivant un incident confirmé.

Pour obtenir un exemple de workflow de réponse aux incidents, consultez « Stratégie de réponse aux violations de données » sur le [site web de l’Institut SANS](https://www.sans.org/information-security-policy/). Un court document avec des étapes claires à suivre en cas d’incident est plus utile qu’un modèle de stratégie long.

## Workflow de gestion des vulnérabilités et de mise à jour corrective

Vous devez effectuer des analyses régulières des vulnérabilités de l’infrastructure de production. Vous devez trier les résultats des analyses de vulnérabilité et définir une période de temps dans laquelle vous acceptez de corriger la vulnérabilité.

Si vous n’êtes pas prêt à configurer un programme de gestion des vulnérabilités complet, il est utile de commencer par créer un processus de mise à jour corrective. Pour obtenir des conseils sur la création d’une stratégie de gestion des correctifs, consultez cet article TechRepublic « [Établir une stratégie de gestion des patchs](https://www.techrepublic.com/article/establish-a-patch-management-policy-87756/) ».
