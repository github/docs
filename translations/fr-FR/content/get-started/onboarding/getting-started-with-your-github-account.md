---
title: Bien démarrer avec votre compte GitHub
intro: 'Avec un compte personnel sur {% data variables.product.prodname_dotcom %}, vous pouvez importer ou créer des référentiels, collaborer avec d’autres personnes et vous connecter à la communauté {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 38d23c1a1b5021a681aedff8813daad751905d8a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408921'
---
Ce guide vous accompagne tout au long de la configuration de votre compte {% data variables.product.company_short %} et de la prise en main des fonctionnalités de{% data variables.product.product_name %} pour la collaboration et la communauté.

## Partie 1 : Configuration de votre compte {% data variables.product.prodname_dotcom %}

{% ifversion fpt or ghec %} Les premières étapes à suivre pour commencer à utiliser {% data variables.product.product_name %} sont de créer un compte, de choisir un produit qui répond au mieux à vos besoins, de vérifier votre e-mail, de configurer une authentification à deux facteurs et d’afficher votre profil.
{% elsif ghes %} Les premières étapes à suivre pour commencer à utiliser {% data variables.product.product_name %} sont d’accéder à votre compte, de configurer une authentification à deux facteurs et d’afficher votre profil.
{% elsif ghae %} Les premières étapes à suivre pour commencer à utiliser {% data variables.product.product_name %} sont d’accéder à votre compte et d’afficher votre profil.
{% endif %}

{% ifversion fpt or ghec %}Il existe plusieurs types de comptes sur {% data variables.product.prodname_dotcom %}. {% endif %} Chaque personne qui utilise {% data variables.product.product_name %} possède son propre compte personnel, qui peut faire partie de plusieurs organisations et équipes. Votre compte personnel est votre identité sur {% data variables.product.product_location %}, et vous représente en tant qu’individu.

{% ifversion fpt or ghec %}
### 1. Création d’un compte
Pour créer un compte sur {% data variables.product.product_location %}, accédez à https://github.com/ et suivez les instructions.

Pour sécuriser votre compte {% data variables.product.prodname_dotcom %}, vous devriez utiliser un mot de passe fort et unique. Pour plus d’informations, consultez la page « [Création d’un mot de passe fort](/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password) ».

### 2. Choisir votre produit {% data variables.product.prodname_dotcom %}
Vous pouvez choisir {% data variables.product.prodname_free_user %} ou {% data variables.product.prodname_pro %} pour avoir accès à différentes fonctionnalités pour votre compte personnel. Vous pouvez effectuer une mise à niveau à tout moment si vous n’êtes pas certain du produit souhaité.

Pour plus d’informations sur tous les plans de {% data variables.product.prodname_dotcom %}, consultez les « produits de [{% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/githubs-products) ».

### 3. Vérification de votre adresse e-mail
Pour vous assurer de pouvoir utiliser toutes les fonctionnalités de votre plan {% data variables.product.product_name %}, vérifiez votre adresse e-mail après avoir créé un compte. Pour plus d’informations, consultez « [Vérification de votre adresse e-mail](/github/getting-started-with-github/signing-up-for-github/verifying-your-email-address) ».
{% endif %}

{% ifversion ghes %}
### 1. Accès à votre compte
L’administrateur de votre instance {% data variables.product.product_name %} vous informe sur la façon de vous authentifier et d’accéder à votre compte. Le processus varie en fonction du mode d’authentification configuré pour l’instance.
{% endif %}

{% ifversion ghae %}
### 1. Accès à votre compte
Vous recevrez une notification par e-mail lorsque le propriétaire de votre entreprise pour {% data variables.product.product_name %} aura configuré votre compte, ce qui vous permettra de vous authentifier avec uns authentification unique (SSO) SAML et d’accéder à votre compte.
{% endif %}

{% ifversion fpt or ghes or ghec %}
### {% ifversion fpt or ghec %}4.{% else %}2.{% endif %} Configuration d’une authentification à deux facteurs
Une authentification à deux facteurs, ou 2FA, est une couche supplémentaire de sécurité utilisée lors de la connexion à des sites web ou à des applications. Nous vous recommandons vivement de configurer 2FA pour la sécurité de votre compte. Pour plus d’informations, consultez « [À propos de l’authentification à deux facteurs](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication) ».
{% endif %}
### {% ifversion fpt or ghec %}5.{% elsif ghes %}3.{% else %}2.{% endif %} Affichage de votre graphique de profil et de contribution {% data variables.product.prodname_dotcom %}
Votre profil {% data variables.product.prodname_dotcom %} raconte l’histoire de votre travail au travers des dépôts et gists que vous avez épinglés, des appartenances à des organisations que vous avez choisi de rendre publiques, des contributions que vous avez faites et des projets que vous avez créés. Pour plus d’informations, consultez « [À propos de votre profil](/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile) » et « [Affichage des contributions sur votre profil](/github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile) ».

## Partie 2 : Utilisation d’outils et de processus de {% data variables.product.product_name %}
Pour utiliser au mieux {% data variables.product.product_name %}, vous devez configurer Git. Git est responsable de tout ce qui est lié à {% data variables.product.prodname_dotcom %} qui se produit localement sur votre ordinateur. Pour collaborer efficacement sur {% data variables.product.product_name %}, vous allez écrire dans des problèmes et demandes de tirage en utilisant Markdown adapté à {% data variables.product.prodname_dotcom %}.

### 1. Apprentissage de Git
L’approche collaborative de {% data variables.product.prodname_dotcom %} du développement dépend de la publication de validations à partir de votre dépôt local sur {% data variables.product.product_name %} pour que d’autres personnes puissent afficher, extraire et mettre à jour à l’aide de Git. Pour plus d’informations sur Git, consultez le guide « [Manuel Git](https://guides.github.com/introduction/git-handbook/) ». Pour plus d’informations concernant l’utilisation de Git sur {% data variables.product.product_name %}, consultez « [Flux {% data variables.product.prodname_dotcom %}](/get-started/quickstart/github-flow) ».
### 2. Configuration de Git
Si vous envisagez d’utiliser Git localement sur votre ordinateur, que ce soit via la ligne de commande, un IDE ou un éditeur de texte, vous devez installer et configurer Git. Pour plus d’informations, consultez « [Configurer Git](/get-started/quickstart/set-up-git) ».

Si vous préférez utiliser une interface visuelle, vous pouvez télécharger et utiliser {% data variables.product.prodname_desktop %}. {% data variables.product.prodname_desktop %} étant empaqueté avec Git. Il n’est pas nécessaire d’installer Git séparément. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_desktop %}.](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop) ».

Une fois que vous avez installé Git, vous pouvez vous connecter à des dépôts {% data variables.product.product_name %} à partir de votre ordinateur local, qu’il s’agisse de votre propre dépôt ou d’une duplication d’un autre utilisateur. Lorsque vous vous connectez à un dépôt sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} à partir de Git, vous devez vous authentifier auprès de {% data variables.product.product_name %} en utilisant le protocole HTTPS ou SSH. Pour plus d’informations, consultez « [À propos des dépôts distants](/get-started/getting-started-with-git/about-remote-repositories) ».

### 3. Choix du mode d’interaction avec {% data variables.product.product_name %}
Toute personne disposant de son propre workflow unique pour interagir avec {% data variables.product.prodname_dotcom %}. Les interfaces et méthodes que vous utilisez dépendent de vos préférences et de ce qui répond le mieux à vos besoins.

Pour plus d’informations sur la façon de s’authentifier auprès de {% data variables.product.product_name %} avec chacune de ces méthodes, consultez « [À propos de l’authentification auprès de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github) ».

| **Méthode**  | **Description** | **Cas d’utilisation** |
| ------------- | ------------- | ------------- |
| Accédez à {% data variables.product.prodname_dotcom_the_website %} | Si vous n’avez pas besoin d’utiliser des fichiers localement, {% data variables.product.product_name %} vous permet d’effectuer la plupart des actions liées à Git directement dans le navigateur, de la création et la duplication de dépôts à la modification de fichiers, en passant par l’ouverture de demandes de tirage.| Cette méthode est utile si vous souhaitez une interface visuelle et devez effectuer des modifications rapides et simples ne nécessitant pas de travail localement. |
| {% data variables.product.prodname_desktop %} | {% data variables.product.prodname_desktop %} étend et simplifie votre workflow {% data variables.product.prodname_dotcom_the_website %}, à l’aide d’une interface visuelle au lieu de commandes de texte sur la ligne de commande. Pour plus d’informations sur la prise en main de {% data variables.product.prodname_desktop %}, consultez « [Bien démarrer avec {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/overview/getting-started-with-github-desktop) ». | Cette méthode est optimale si vous devez ou voulez travailler avec des fichiers localement, mais préférez recourir à une interface visuelle pour utiliser Git et interagir avec {% data variables.product.product_name %}. |
| IDE ou editeur de texte  | Vous pouvez définir un éditeur de texte par défaut, comme [Atom](https://atom.io/) ou [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/), pour ouvrir et modifier vos fichiers avec Git, utiliser des extensions et afficher la structure du projet. Pour plus d’informations, consultez « [Association d’éditeurs de texte avec Git](/github/using-git/associating-text-editors-with-git) ». | Cela est pratique si vous travaillez avec des fichiers et projets plus complexes, et disposer de tout au même endroit, car les éditeurs de texte ou les IDE vous permettent souvent d’accéder directement à la ligne de commande dans l’éditeur. |
| Ligne de commande, avec ou sans {% data variables.product.prodname_cli %} | Pour contrôler et personnaliser au plus précis la manière dont vous utilisez Git et interagissez avec {% data variables.product.product_name %}, vous pouvez utiliser la ligne de commande. Pour plus d’informations sur l’utilisation de commandes Git, consultez « [Aide-mémoire Git](/github/getting-started-with-github/quickstart/git-cheatsheet) ».<br/><br/> {% data variables.product.prodname_cli %} est un outil en ligne de commande séparé que vous pouvez installer, qui apporte des demandes de tirage, des problèmes, des {% data variables.product.prodname_actions %} et d’autres fonctionnalités de {% data variables.product.prodname_dotcom %} à votre terminal pour vous permettre d’accomplir tout votre travail au même endroit. Pour plus d’informations, consultez « [{% data variables.product.prodname_cli %}](/github/getting-started-with-github/using-github/github-cli) ». | Cela est très pratique si vous travaillez déjà à partir de la ligne de commande, ce qui vous permet d’éviter de changer de contexte, ou si vous êtes plus à l’aise avec la ligne de commande. |
| {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API | {% data variables.product.prodname_dotcom %} a une API REST et une API GraphQL que vous pouvez utiliser pour interagir avec {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Bien démarrer avec l’API](/github/extending-github/getting-started-with-the-api) ». | L’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} est particulièrement utile si vous voulez automatiser des tâches courantes, sauvegarder vos données ou créer des intégrations qui étendent {% data variables.product.prodname_dotcom %}. |
### 4. Écriture sur {% data variables.product.product_name %}
Pour rendre votre communication claire et organisée dans des problèmes et demandes de tirage, vous pouvez utiliser un Markdown adapté à {% data variables.product.prodname_dotcom %} pour la mise en forme, qui combine une syntaxe facile à lire et à écrire avec certaines fonctionnalités personnalisées. Pour plus d’informations, consultez « [À propos de l’écriture et de la mise en forme sur {% data variables.product.prodname_dotcom %}](/github/writing-on-github/about-writing-and-formatting-on-github) ».

Vous pouvez apprendre à utiliser le Markdown adapté à {% data variables.product.prodname_dotcom %} avec le cours « [Communication à l’aide de Markdown](https://github.com/skills/communicate-using-markdown) » sur {% data variables.product.prodname_learning %}.

### 5. Recherche sur {% data variables.product.product_name %}
Notre recherche intégrée vous permet de trouver ce que vous cherchez parmi les nombreux dépôts, utilisateurs et lignes de code sur {% data variables.product.product_name %}. Vous pouvez rechercher globalement dans tout {% data variables.product.product_name %}, ou limiter votre recherche à un dépôt ou une organisation spécifiques. Pour plus d’informations sur les types de recherches que vous pouvez effectuer sur {% data variables.product.product_name %}, consultez « [À propos de la recherche sur {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github) ».

Notre syntaxe de recherche vous permet de construire des requêtes en utilisant des qualificateurs pour spécifier ce que vous souhaitez rechercher. Pour plus d’informations sur la syntaxe de recherche à utiliser dans la recherche, consultez « [Recherche sur {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/searching-on-github) ».

### 6. Gestion de fichiers sur {% data variables.product.product_name %}
Avec {% data variables.product.product_name %}, vous pouvez créer, modifier, déplacer et supprimer des fichiers dans votre dépôt ou tout dépôt auquel vous avez accès en écriture. Vous pouvez également suivre l’historique des modifications dans un fichier ligne par ligne. Pour plus d’informations, consultez « [Gestion des fichiers sur {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/managing-files-on-github) ».

## Partie 3 : Collaboration sur {% data variables.product.product_name %}
Un nombre quelconque de personnes peuvent collaborer dans des dépôts sur {% data variables.product.product_name %}. Vous pouvez configurer des paramètres, créer des tableaux de projet et gérer vos notifications pour encourager une collaboration efficace.

### 1. Utilisation des dépôts

#### Création d’un dépôt
Un dépôt est comme un dossier pour votre projet. Vous pouvez avoir n’importe quel nombre de dépôts publics et privés dans votre compte personnel. Un dépôt peut contenir des dossiers et fichiers, des images, des vidéos, des feuilles de calcul et des jeux de données, ainsi que l’historique des révisions de tous les fichiers qui s’y trouvent. Pour plus d’informations, consultez « [À propos des dépôts](/github/creating-cloning-and-archiving-repositories/about-repositories) ».

Lorsque vous créez un dépôt, vous devriez l’initialiser avec un fichier README afin d’informer les utilisateurs à propos de votre projet. Pour plus d’informations, consultez « [Création d’un dépôt](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository) ».

#### Clonage d’un dépôt
Vous pouvez cloner un dépôt existant à partir de {% data variables.product.product_name %} sur votre ordinateur local pour faciliter l’ajout ou la suppression de fichiers, la correction de conflits de fusion ou des validations complexes. Le clonage d’un dépôt extrait une copie complète de toutes les données du dépôt dont {% data variables.product.prodname_dotcom %} dispose à ce stade, y compris toutes les versions de chaque fichier et dossier du projet. Pour plus d’informations, consultez « [Clonage d’un dépôt](/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) ».

#### Duplication d’un dépôt
Une duplication est une copie d’un dépôt que vous gérez, où aucune des modifications que vous apportez n’affecte le dépôt d’origine, sauf si vous soumettez une demande de tirage au propriétaire du projet. Le plus souvent, des duplications sont utilisées soit pour proposer des modifications au projet de quelqu’un d’autre, soit pour utiliser le projet de quelqu’un d’autre comme point de départ pour votre propre idée. Pour plus d’informations, consultez « [Utilisation de duplications (forks)](/github/collaborating-with-pull-requests/working-with-forks) ».
### 2. Importation de vos projets
Si vous avez des projets existants que vous souhaitez déplacer vers {% data variables.product.product_name %}, vous pouvez importer des projets à l’aide de l’importateur {% data variables.product.prodname_dotcom %}, de la ligne de commande ou d’outils de migration externe. Pour plus d’informations, consultez « [Importation de code source dans {% data variables.product.prodname_dotcom %}](/github/importing-your-projects-to-github/importing-source-code-to-github) ».

### 3. Gestion des collaborateurs et des autorisations
Vous pouvez collaborer sur votre projet avec d’autres personnes en utilisant les problèmes, demandes de tirage et tableaux de projet de votre dépôt. Vous pouvez inviter d’autres personnes à votre dépôt en tant que collaborateurs à partir de l’onglet **Collaborateurs** dans les paramètres du dépôt. Pour plus d’informations, consultez « [Invitation de collaborateurs à un dépôt personnel](/github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository) ».

Vous êtes le propriétaire de tout dépôt que vous créez dans votre compte personnel et disposez d’un contrôle total du dépôt. Les collaborateurs ont un accès en écriture à votre dépôt, ce qui limite ce qu’ils sont autorisés à faire. Pour plus d’informations, consultez « [Niveaux d’autorisation pour un dépôt de compte personnel](/github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository) ».

### 4. Gestion des paramètres du dépôt
En tant que propriétaire d’un dépôt, vous pouvez configurer plusieurs paramètres, dont la visibilité, les rubriques et l’aperçu sur les réseaux sociaux du dépôt. Pour plus d’informations, consultez « [Gestion des paramètres des dépôts](/github/administering-a-repository/managing-repository-settings) ».

### 5. Configuration de votre projet pour des contributions saines
{% ifversion fpt or ghec %} Pour encourager les collaborateurs dans votre dépôt, vous avez besoin d’une communauté qui encourage ses membres à utiliser, à enrichir et à promouvoir votre projet. Pour plus d’informations, consultez « [Construction de communautés accueillantes](https://opensource.guide/building-community/) » dans les Guides open source.

En ajoutant des fichiers tels que des directives de contribution, un code de conduite et une licence à votre dépôt, vous pouvez créer un environnement dans lequel il est plus facile pour les collaborateurs d’apporter des contributions utiles et significatives. Pour plus d’informations, consultez « [Configuration de votre projet pour des contributions saines](/communities/setting-up-your-project-for-healthy-contributions) ».
{% endif %} {% ifversion ghes or ghae %} En ajoutant des fichiers tels que des directives de contribution, un code de conduite et des ressources de support à votre dépôt, vous pouvez créer un environnement dans lequel il est plus facile pour les collaborateurs d’apporter des contributions utiles et significatives. Pour plus d’informations, consultez « [Configuration de votre projet pour des contributions saines](/communities/setting-up-your-project-for-healthy-contributions) ».
{% endif %}

### 6. Utilisation de problèmes et tableaux de projet GitHub
Vous pouvez utiliser des problèmes GitHub pour organiser votre travail avec des problèmes et des demandes de tirage, et gérer votre workflow avec des tableaux de projet. Pour plus d’informations, consultez « [À propos des problèmes](/issues/tracking-your-work-with-issues/about-issues) » et « [À propos des tableaux de projet](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards) ».

### 7. Gestion des notifications
Les notifications fournissent des mises à jour concernant l’activité sur {% data variables.product.prodname_dotcom %} à laquelle vous vous êtes abonné ou avez participé. Si vous n’êtes plus intéressé par une conversation, vous pouvez vous désabonner, annuler la surveillance ou personnaliser les types de notifications que vous recevrez à l’avenir. Pour plus d’informations, consultez « [À propos des notifications »](/github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications).

### 8. Utilisation de {% data variables.product.prodname_pages %}
Vous pouvez utiliser {% data variables.product.prodname_pages %} pour créer et héberger un site web directement à partir d’un dépôt sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages) ».

{% ifversion discussions %}
### 9. Utilisation de {% data variables.product.prodname_discussions %}
Vous pouvez activer {% data variables.product.prodname_discussions %} pour votre dépôt afin d’aider à construire une communauté autour de votre projet. Des gestionnaires de maintenance, contributeurs et visiteurs peuvent utiliser des discussions pour partager des annonces, poser des questions et y répondre, et participer à des conversations autour d’objectifs. Pour plus d’informations, consultez « [À propos des discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions) ».
{% endif %}
## Partie 4 : Personnalisation et automatisation de votre travail sur {% data variables.product.product_name %}

{% data reusables.getting-started.customizing-and-automating %}

{% ifversion fpt or ghec %}
### 1. Utilisation de {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %} {% endif %}
### {% ifversion fpt or ghec %}2.{% else %}1.{% endif %} Utilisation de l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}

### {% ifversion fpt or ghec %}3.{% else %}2.{% endif %} Génération d’{% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}

### {% ifversion fpt or ghec %}4.{% else %}3.{% endif %} Publication et gestion de {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

## Partie 5 : Génération en toute sécurité sur {% data variables.product.product_name %}
{% data variables.product.product_name %} offre diverses fonctionnalités de sécurité qui permettent de sécuriser le code et les secrets dans les dépôts. Certaines fonctionnalités sont disponibles pour tous les dépôts, tandis que d’autres ne sont disponibles que pour des dépôts publics et des dépôts avec une licence {% data variables.product.prodname_GH_advanced_security %}. Pour une vue d’ensemble de toutes les fonctionnalités de sécurité de {% data variables.product.product_name %}, consultez « [Fonctionnalités de sécurité de {% data variables.product.prodname_dotcom %}](/code-security/getting-started/github-security-features) ».

### 1. Sécurisation de votre dépôt
En tant qu’administrateur de dépôt, vous pouvez sécuriser vos dépôts en configurant leurs paramètres de sécurité. Il s’agit notamment de la gestion de l’accès à votre dépôt, de la définition d’une stratégie de sécurité et de la gestion des dépendances. Pour les dépôts publics et pour les dépôts privés appartenant à des organisations où {% data variables.product.prodname_GH_advanced_security %} est activé, vous pouvez également configurer l’analyse du code et des secrets pour identifier automatiquement les vulnérabilités et vérifier que les jetons et les clés ne sont pas exposés. 

Pour plus d’informations sur les étapes à suivre pour sécuriser vos dépôts, consultez « [Sécurisation de votre dépôt](/code-security/getting-started/securing-your-repository) ».

{% ifversion fpt or ghec %}
### 2. Gestion de vos dépendances
Une génération sécurisée consiste en grande partie à gérer les dépendances de votre projet pour vous assurer que l’ensemble des packages et applications dont vous dépendez sont à jour et sécurisés. Vous pouvez gérer les dépendances de votre dépôt sur {% data variables.product.product_name %} en explorant le graphique de dépendances de votre dépôt, en utilisant Dependabot pour déclencher automatiquement des demandes de tirage afin de tenir vos dépendances à jour, et en recevant des alertes et mises à jour de sécurité de Dependabot pour des dépendances vulnérables. 

Pour plus d’informations, consultez « [Sécurisation de votre chaîne d’approvisionnement logicielle](/code-security/supply-chain-security) ».
{% endif %}

## Partie 6 : Participation à la communauté de {% data variables.product.prodname_dotcom %}

{% data reusables.getting-started.participating-in-community %}

### 1. Contribution à des projets open source
{% data reusables.getting-started.open-source-projects %}

### 2. Interaction avec {% data variables.product.prodname_gcf %}
{% data reusables.support.ask-and-answer-forum %}

### 3. Lecture à propos de {% data variables.product.product_name %} sur {% data variables.product.prodname_docs %}

{% data reusables.docs.you-can-read-docs-for-your-product %}

### 4. Apprentissage avec {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning %}

{% ifversion fpt or ghec %}
### 5. Soutien de la communauté open source
{% data reusables.getting-started.sponsors %}

### 6. Contact de {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

{% ifversion fpt %}
## Pour aller plus loin
- « [Bien démarrer avec {% data variables.product.prodname_team %}](/get-started/onboarding/getting-started-with-github-team) » {% endif %} {% endif %}
