---
title: Bien démarrer avec GitHub Desktop
intro: 'Découvrez comment configurer, authentifier et configurer {% data variables.product.prodname_desktop %} pour vous permettre de contribuer à des projets directement de votre ordinateur.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
redirect_from:
  - /desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop
shortTitle: Get started
ms.openlocfilehash: ae67886e55d88ca3c6330d3d8f3c76528e765c78
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105254'
---
## Introduction
{% data variables.product.prodname_desktop %} est une application qui vous permet d’interagir avec {% data variables.product.prodname_dotcom %} à l’aide d’une interface GUI au lieu de la ligne de commande ou d’un navigateur web. {% data variables.product.prodname_desktop %} vous encourage, vous et votre équipe, à collaborer en utilisant les bonnes pratiques avec Git et {% data variables.product.prodname_dotcom %}. Vous pouvez utiliser {% data variables.product.prodname_desktop %} pour exécuter la plupart des commandes Git à partir de votre poste de travail en ayant une confirmation visuelle des changements apportés. Vous pouvez effectuer des poussées et des tirages vers les dépôts distants, vous pouvez cloner ces dépôts avec {% data variables.product.prodname_desktop %}, et vous pouvez utiliser des outils collaboratifs pour attribuer des commits et créer des demandes de tirage (pull requests).

Ce guide va vous aider à bien démarrer avec {% data variables.product.prodname_desktop %}. Il vous permettra de configurer l’application, d’authentifier votre compte, de configurer les paramètres de base et de découvrir les principes fondamentaux de la gestion de projets avec {% data variables.product.prodname_desktop %}. Vous pourrez utiliser {% data variables.product.prodname_desktop %} pour collaborer sur des projets et vous connecter à des dépôts distants après avoir suivi ce guide.

Il peut s’avérer utile d’avoir une compréhension de base de Git et de {% data variables.product.prodname_dotcom %} avant de commencer à utiliser {% data variables.product.prodname_desktop %}. Pour plus d'informations, consultez les articles suivants.

- « [Utilisation de Git](/github/getting-started-with-github/using-git) »
- « [Découverte de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github) »
- « [Bien démarrer avec {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github) »

{% data variables.product.prodname_desktop %} est un projet open source. Vous pouvez voir la feuille de route, contribuer au projet, ou ouvrir un problème pour faire part de vos commentaires ou demander des fonctionnalités. Pour plus d’informations, consultez le dépôt [`desktop/desktop`](https://github.com/desktop/desktop).

## Partie 1 : Installation et authentification
Vous pouvez installer {% data variables.product.prodname_desktop %} sur n’importe quel système d’exploitation pris en charge. Pour plus d’informations, consultez « [Systèmes d’exploitation pris en charge](/desktop/getting-started-with-github-desktop/supported-operating-systems) ».

Pour installer {% data variables.product.prodname_desktop %}, accédez à la page de téléchargement de [{% data variables.product.prodname_desktop %}](https://desktop.github.com/). Pour plus d’informations, consultez « [Installation de {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/installing-github-desktop) ».

Une fois que vous avez installé {% data variables.product.prodname_desktop %}, vous pouvez authentifier l’application avec votre compte sur {% data variables.product.prodname_dotcom %} ou {% data variables.product.prodname_enterprise %}. L’authentification vous permet de vous connecter à des dépôts distants sur {% data variables.product.prodname_dotcom %} ou {% data variables.product.prodname_enterprise %}.

{% mac %}

1. Pour pouvoir vous authentifier auprès de {% data variables.product.prodname_dotcom %} ou {% data variables.product.prodname_enterprise %}, vous avez besoin d’un compte. Pour plus d’informations sur la création d’un compte, consultez « [Inscription pour l’obtention d’un nouveau compte {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-a-new-github-account) », ou contactez l’administrateur de site {% data variables.product.prodname_enterprise %}.

2. Dans le menu déroulant {% data variables.product.prodname_desktop %}, cliquez sur **Préférences**. Dans la fenêtre des préférences, cliquez sur **Comptes**, puis suivez les étapes pour vous connecter. Pour plus d’informations sur l’authentification, consultez « [Authentification auprès de {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github) ».
  ![Bouton de connexion pour GitHub](/assets/images/help/desktop/mac-sign-in-github.png)

{% endmac %}

{% windows %}

1. Pour pouvoir vous authentifier auprès de {% data variables.product.prodname_dotcom %} ou {% data variables.product.prodname_enterprise %}, vous avez besoin d’un compte. Pour plus d’informations sur la création d’un compte, consultez « [Inscription pour l’obtention d’un nouveau compte {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-a-new-github-account) », ou contactez l’administrateur de site {% data variables.product.prodname_enterprise %}.

2. Dans le menu déroulant Fichier, cliquez sur **Options**. Dans la fenêtre des options, cliquez sur **Comptes**, puis suivez les étapes pour vous connecter. Pour plus d’informations sur l’authentification, consultez « [Authentification auprès de {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github) ».
  ![Bouton de connexion pour GitHub](/assets/images/help/desktop/windows-sign-in-github.png)

{% endwindows %}

## Partie 2 : Configuration et personnalisation de {% data variables.product.prodname_desktop %}
Une fois que vous avez installé {% data variables.product.prodname_desktop %}, vous pouvez configurer et personnaliser l’application pour l’adapter au mieux à vos besoins.

{% mac %}

Vous pouvez connecter ou supprimer des comptes sur {% data variables.product.prodname_dotcom %} ou {% data variables.product.prodname_enterprise %}, choisir un éditeur de texte ou un interpréteur de commandes par défaut, modifier votre configuration de Git, changer l’apparence de {% data variables.product.prodname_desktop %}, personnaliser les boîtes de dialogue système et définir les préférences de confidentialité dans la fenêtre Préférences de {% data variables.product.prodname_desktop %}. Pour plus d’informations, consultez « [Configuration des paramètres de base](/desktop/getting-started-with-github-desktop/configuring-basic-settings) ».

  ![Paramètres de base de la fenêtre Préférences](/assets/images/help/desktop/mac-appearance-tab-themes.png)

{% endmac %}

{% windows %}

Vous pouvez connecter ou supprimer des comptes sur {% data variables.product.prodname_dotcom %} ou {% data variables.product.prodname_enterprise %}, choisir un éditeur de texte ou un interpréteur de commandes par défaut, modifier votre configuration de Git, changer l’apparence de {% data variables.product.prodname_desktop %}, personnaliser les boîtes de dialogue système et définir les préférences de confidentialité dans la fenêtre Options de {% data variables.product.prodname_desktop %}. Pour plus d’informations, consultez « [Configuration des paramètres de base](/desktop/getting-started-with-github-desktop/configuring-basic-settings) ».

  ![Paramètres de base de la fenêtre Options](/assets/images/help/desktop/windows-appearance-tab-themes.png)

{% endwindows %}

## Partie 3 : Contribution à des projets avec {% data variables.product.prodname_desktop %}
Après avoir installé, authentifié et configuré l’application, vous êtes prêt à utiliser {% data variables.product.prodname_desktop %}. Vous pouvez créer, ajouter ou cloner des dépôts, et utiliser {% data variables.product.prodname_desktop %} pour gérer les contributions à vos dépôts.

### Création, ajout et clonage de dépôts
Vous pouvez créer un dépôt en sélectionnant le menu Fichier et en cliquant sur **Nouveau dépôt**. Pour plus d’informations, consultez « [Création de votre premier dépôt à l’aide de {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop) ».

Vous pouvez ajouter un dépôt à partir de votre ordinateur local en sélectionnant le menu Fichier et en cliquant sur **Ajouter un dépôt local**. Pour plus d’informations, consultez « [Ajout d’un dépôt de votre ordinateur local à {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/adding-a-repository-from-your-local-computer-to-github-desktop) ».

Vous pouvez cloner un dépôt à partir de {% data variables.product.prodname_dotcom %} en sélectionnant le menu Fichier et en cliquant sur **Cloner le dépôt**. Pour plus d’informations, consultez « [Clonage et duplication de dépôts à partir de {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop) ».

{% mac %}

  ![Options du menu Fichier pour la création, l’ajout et le clonage de dépôts](/assets/images/help/desktop/mac-file-menu.png)

{% endmac %}

{% windows %}

  ![Options du menu Fichier pour la création, l’ajout et le clonage de dépôts](/assets/images/help/desktop/windows-file-menu.png)

{% endwindows %}

### Apport de changements dans une branche
Vous pouvez utiliser {% data variables.product.prodname_desktop %} pour créer une branche d’un projet. Les branches isolent votre travail de développement des autres branches du dépôt, ce qui vous permet d’expérimenter les changements de manière sécurisée. Pour plus d’informations, consultez « [Gestion des branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches) ».

  ![Bouton Nouvelle branche](/assets/images/help/desktop/new-branch-button-mac.png)

Une fois que vous avez apporté des changements à une branche, vous pouvez les passer en revue dans {% data variables.product.prodname_desktop %}, puis effectuer un commit pour assurer le suivi de ces changements. Pour plus d’informations, consultez « [Commit et revue des changements apportés à votre projet](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project) ».

  ![Visualisation et exécution de commits](/assets/images/help/desktop/commit-button.png)

Si vous souhaitez accéder à vos changements à distance ou les partager avec d’autres personnes, vous pouvez pousser vos commits vers {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Poussée de changements vers {% data variables.product.prodname_dotcom %}](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github) ».

### Collaboration avec {% data variables.product.prodname_desktop %}
Vous pouvez utiliser {% data variables.product.prodname_desktop %} pour créer des problèmes ou des demandes de tirage afin de collaborer sur certains projets avec d’autres personnes. Les problèmes vous permettent d’effectuer le suivi des idées et de discuter des changements possibles à apporter aux projets. Les demandes de tirage vous permettent de partager les changements proposés avec d’autres utilisateurs, de recevoir des commentaires et de fusionner les changements dans un projet. Pour plus d’informations, consultez « [Création d’un problème ou d’une demande de tirage](/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request) ».

Vous pouvez voir vos propres demandes de tirage ou celles de vos collaborateurs dans {% data variables.product.prodname_desktop %}. La visualisation d’une demande de tirage dans {% data variables.product.prodname_desktop %} vous permet de voir les changements proposés et d’en apporter d’autres en ouvrant les fichiers et dépôts du projet dans votre éditeur de texte par défaut. Pour plus d’informations, consultez « [Visualisation d’une demande de tirage dans {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/viewing-a-pull-request-in-github-desktop) ».

### Maintien de la synchronisation de votre dépôt local
Quand vous apportez des changements à vos dépôts locaux ou quand d’autres personnes apportent des changements aux dépôts distants, vous devez synchroniser votre copie locale du projet avec le dépôt distant. {% data variables.product.prodname_desktop %} peut maintenir votre copie locale d’un projet synchronisée avec la version distante en poussant et en tirant les commits. Pour plus d’informations, consultez « [Synchronisation de votre branche](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch) ».

## Pour aller plus loin
- « [Installation et authentification de {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/installing-and-authenticating-to-github-desktop) »
- « [Contribution et collaboration à l’aide de {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop) »
