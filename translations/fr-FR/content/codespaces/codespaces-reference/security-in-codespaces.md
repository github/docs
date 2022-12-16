---
title: Sécurité dans Codespaces
intro: Vue d’ensemble de l’architecture de sécurité de {% data variables.product.prodname_codespaces %}, avec des directives pour vous aider à maintenir la sécurité et à minimiser le risque d’attaque.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
- Security
type: reference
shortTitle: Security in Codespaces
ms.openlocfilehash: 679cc2de9b31159f4162eaea473ca9dd5001d22d
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "146764570"
---
## <a name="overview-of-codespace-security"></a>Vue d’ensemble de la sécurité des espaces de code

{% data variables.product.prodname_codespaces %} est conçu avec une sécurité renforcée par défaut. Par conséquent, vous devez vous assurer que vos pratiques de développement de logiciels ne risquent pas de réduire la posture de sécurité de votre espace de code. 

Ce guide décrit la façon dont Codespaces maintient sécurisé votre environnement de développement et fournit certaines des bonnes pratiques qui favorisent le maintien de votre sécurité au travail. Comme avec tout outil de développement, n’oubliez pas que vous devez ouvrir et travailler uniquement dans des dépôts que vous connaissez et approuvez.

### <a name="environment-isolation"></a>Isolation de l’environnement

{% data variables.product.prodname_codespaces %} est conçu pour maintenir vos espaces de code séparés les uns des autres, chacun utilisant sa propre machine virtuelle et son propre réseau.

#### <a name="isolated-virtual-machines"></a>Machines virtuelles isolées

Chaque espace de code est hébergé sur sa propre machine virtuelle nouvellement créée. Deux espaces de code ne sont jamais colocalisés sur la même machine virtuelle. 

Chaque fois que vous redémarrez un espace de code, il est déployé sur une nouvelle machine virtuelle avec les dernières mises à jour de sécurité disponibles.

#### <a name="isolated-networking"></a>Mise en réseau isolée

Chaque espace de code possède son propre réseau virtuel isolé. Nous utilisons des pare-feu pour bloquer les connexions entrantes à partir d’Internet et empêcher les espaces de code de communiquer entre eux sur des réseaux internes. Par défaut, les espaces de code sont autorisés à établir des connexions sortantes vers Internet.

### <a name="authentication"></a>Authentification

Vous pouvez vous connecter à un espace de code à l’aide d’un navigateur web ou à partir de {% data variables.product.prodname_vscode %}. Si vous vous connectez à partir de {% data variables.product.prodname_vscode_shortname %}, vous êtes invité à vous authentifier auprès de {% data variables.product.product_name %}. 

Chaque fois qu’un espace de code est créé ou redémarré, il reçoit un nouveau jeton {% data variables.product.company_short %} avec une période d’expiration automatique. Cette période vous permet de travailler dans l’espace de code sans avoir à vous réauthentifier au cours d’une journée de travail classique, mais elle réduit le risque de laisser une connexion ouverte quand vous cessez d’utiliser l’espace de code.

L’étendue du jeton varie en fonction de l’accès dont vous disposez au dépôt où l’espace de code a été créé :

- **Si vous disposez d’un accès en écriture au dépôt** : le jeton est limité pour l’accès en lecture/écriture au dépôt.
- **Si vous disposez uniquement d’un accès en lecture au dépôt**: le jeton autorise uniquement le clonage du code à partir du dépôt source. Si vous tentez de pousser (push) vers un dépôt privé où vous disposez uniquement d’un accès en lecture, {% data variables.product.prodname_codespaces %} vous invite à créer une duplication (fork) personnelle du dépôt. Le jeton sera ensuite mis à jour pour avoir un accès en lecture/écriture à la nouvelle duplication personnelle. 
- **Si vous avez activé votre espace de code pour accéder à d’autres dépôts** : quand un espace de code a été autorisé [à accéder à d’autres dépôts](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces), tout espace de code créé à partir de ce dépôt aura des jetons de lecture/écriture limités au dépôt source. En outre, les jetons recevront également un accès en lecture à d’autres dépôts indiqués par l’utilisateur ou l’organisation.

Les administrateurs d’une organisation spécifient quels dépôts doivent être considérés comme approuvés. Un administrateur peut [choisir d’approuver](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces) aucun des dépôts de l’organisation, tous les dépôts ou une partie de ces dépôts. Un espace de code ne peut pas avoir plus d’autorisations pour accéder aux ressources que la personne qui l’a créé, même si l’administrateur de l’organisation a accordé l’accès à tous les utilisateurs et à tous les dépôts.

### <a name="codespace-connections"></a>Connexions aux espaces de code

Vous pouvez vous connecter à votre espace de code à l’aide du tunnel chiffré TLS fourni par le service {% data variables.product.prodname_codespaces %}. Seul le créateur d’un espace de code peut se connecter à un espace de code. Les connexions sont authentifiées avec {% data variables.product.product_name %}.

Si vous devez autoriser un accès externe aux services s’exécutant sur un espace de code, vous pouvez activer le réacheminement de port pour un accès privé ou public.

### <a name="port-forwarding"></a>Réacheminement de port

Si vous devez vous connecter à un service (tel qu’un serveur web de développement) s’exécutant dans votre espace de code, vous pouvez configurer le réacheminement de port pour rendre le service disponible sur Internet. 

Les propriétaires d’organisation peuvent restreindre la possibilité de rendre les ports de réacheminement disponibles publiquement ou au sein de l’organisation. Pour plus d’informations, consultez « [Restriction de la visibilité des ports transférés](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports) ».

**Ports transférés en privé** : sont accessibles sur Internet, mais seul le créateur de l’espace de code peut y accéder, après s’être authentifié auprès de {% data variables.product.product_name %}.

**Ports transférés publiquement au sein de votre organisation** : sont accessibles sur Internet, mais uniquement aux membres de la même organisation que l’espace de code, après authentification auprès de {% data variables.product.product_name %}.

**Ports transférés publiquement** : sont accessibles sur Internet, et n’importe qui sur Internet peut y accéder. Aucune authentification n’est nécessaire pour accéder aux ports transférés publics.

Tous les ports transférés sont privés par défaut, ce qui signifie que vous devez vous authentifier avant de pouvoir y accéder. L’accès aux ports transférés privés d’un espace de code est contrôlé par les cookies d’authentification avec une période d’expiration de 3 heures. Quand le cookie expire, vous devez vous réauthentifier.

Un port transféré public redevient automatiquement privé quand vous supprimez et rajoutez le port, ou si vous redémarrez l’espace de code.

Vous pouvez utiliser le panneau « Ports » pour configurer un port pour un accès public ou privé, et vous pouvez arrêter le transfert de port lorsqu’il n’est plus nécessaire. Pour plus d’informations, consultez « [Transfert de ports dans votre espace de code](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace) ».

## <a name="good-security-practices-for-your-codespaces"></a>Bonnes pratiques de sécurité pour vos espaces de code

Les espaces de code sont conçus de manière à ce que leur sécurité soit renforcée par défaut. Pour vous aider à maintenir cette posture, nous vous recommandons de suivre les bonnes pratiques de sécurité pendant vos procédures de développement : 

- Comme avec tout outil de développement, n’oubliez pas que vous devez ouvrir et travailler uniquement dans des dépôts que vous connaissez et approuvez.
- Avant d’ajouter de nouvelles dépendances à l’espace de code, vérifiez si elles sont bien gérées et si elles publient des mises à jour pour corriger les vulnérabilités de sécurité trouvées dans leur code.

### <a name="using-secrets-to-access-sensitive-information"></a>Utilisation de secrets pour accéder aux informations sensibles 

Utilisez toujours des secrets chiffrés quand vous souhaitez utiliser des informations sensibles (telles que des jetons d’accès) dans un espace de code. Vous pouvez accéder à vos secrets en tant que variables d’environnement dans l’espace de code, y compris à partir du terminal. Par exemple, vous pouvez lancer un terminal dans votre espace de code et utiliser `echo $SECRET_NAME ` pour afficher la valeur d’un secret.

Les valeurs secrètes sont copiées dans des variables d’environnement chaque fois que l’espace de code est repris ou créé, et sont également synchronisées lorsqu’elles sont modifiées.

Les secrets ne sont pas copiés dans l’environnement si vous n’avez pas accès en écriture au référentiel de l’espace de code.

Pour plus d’informations sur les secrets, consultez :
- « [Gestion des secrets chiffrés pour vos espaces de code](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) »
- « [Gestion des secrets chiffrés de votre dépôt et de votre organisation pour Codespaces](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces) »

### <a name="working-with-other-peoples-contributions-and-repositories"></a>Utilisation des contributions et dépôts d’autres personnes

Lorsque vous créez un espace de code à partir d’une branche de demande de tirage à partir d’une duplication, le jeton figurant dans l’espace de code varie selon que le dépôt est public ou privé :
- Pour un dépôt privé, l’espace de code se voit accorder un accès à la fois à la duplication et au parent.
- Pour un dépôt public, l’espace de code n’a accès qu’à la duplication et aux demandes de tirage d’ouverture sur le parent.

Nous vous protégeons également dans ces scénarios en n’injectant aucun de vos [secrets d’espace de code](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) dans l’environnement.

### <a name="additional-good-practices"></a>Bonnes pratiques supplémentaires

Il existe d’autres bonnes pratiques et risques que vous devez connaître lors de l’utilisation de {% data variables.product.prodname_codespaces %}. 

#### <a name="understanding-a-repositorys-devcontainerjson-file"></a>Présentation du fichier devcontainer.json d’un dépôt

Quand vous créez un espace de code, si un fichier `devcontainer.json` est trouvé pour votre dépôt, il est analysé et utilisé pour configurer votre espace de code. Le fichier `devcontainer.json` peut contenir des fonctionnalités puissantes, telles que l’installation d’extensions tierces et l’exécution de code arbitraire fourni dans une `postCreateCommand`.

Pour plus d’informations, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) ».

#### <a name="granting-access-through-features"></a>Octroi de l’accès via des fonctionnalités

Certaines fonctionnalités de développement peuvent potentiellement ajouter des risques à votre environnement. Par exemple, la signature de validation, les secrets injectés dans des variables d’environnement, l’accès au registre authentifié et l’accès aux packages peuvent tous présenter des problèmes de sécurité potentiels. Nous vous recommandons d’accorder uniquement l’accès à ceux qui en ont besoin et d’adopter une stratégie visant à être aussi restrictif que possible. 

#### <a name="using-extensions"></a>Utilisation d’extensions

Toute autre extension {% data variables.product.prodname_vscode_shortname %} que vous avez installée peut éventuellement entraîner des risques supplémentaires. Pour atténuer ces risques, veillez à installer uniquement des extensions approuvées et à toujours les maintenir à jour.
