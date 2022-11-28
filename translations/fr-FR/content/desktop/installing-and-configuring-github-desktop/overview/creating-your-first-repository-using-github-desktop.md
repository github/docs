---
title: Création de votre premier dépôt à l’aide de GitHub Desktop
shortTitle: Creating your first repository
intro: 'Vous pouvez utiliser {% data variables.product.prodname_desktop %} pour créer et gérer un dépôt Git sans utiliser la ligne de commande.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop
  - /desktop/installing-and-configuring-github-desktop/creating-your-first-repository-using-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: bdfaa5770faef23d8176b24753e23d6a3d5159a1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105258'
---
## Introduction
{% data variables.product.prodname_desktop %} étend et simplifie votre workflow {% data variables.product.prodname_dotcom_the_website %}, à l’aide d’une interface visuelle au lieu de commandes de texte sur la ligne de commande. À la fin de ce guide, vous aurez utilisé {% data variables.product.prodname_desktop %} pour créer un dépôt, apporter des changements au dépôt et publier ces changements sur {% data variables.product.product_name %}.

Après avoir installé {% data variables.product.prodname_desktop %} et vous être connecté à {% data variables.product.prodname_dotcom %} ou {% data variables.product.prodname_enterprise %}, vous pouvez créer et cloner un dépôt de tutoriel. Le tutoriel présente les bases de l’utilisation de Git et de {% data variables.product.prodname_dotcom %}, notamment l’installation d’un éditeur de texte, la création d’une branche, l’exécution d’un commit, la poussée vers {% data variables.product.prodname_dotcom_the_website %} ainsi que l’ouverture d’une demande de tirage (pull request). Le tutoriel est disponible si vous n’avez pas encore de dépôt sur {% data variables.product.prodname_desktop %}.

Nous vous recommandons de suivre le tutoriel, mais si vous souhaitez explorer {% data variables.product.prodname_desktop %} en créant un dépôt, ce guide vous accompagnera tout au long de l’utilisation de {% data variables.product.prodname_desktop %} pour tirer parti d’un Git dépôt.

## Partie 1 : Installation de {% data variables.product.prodname_desktop %} et authentification de votre compte
Vous pouvez installer {% data variables.product.prodname_desktop %} sur n’importe quel système d’exploitation pris en charge. Une fois l’application installée, vous devez vous connecter et authentifier votre compte sur {% data variables.product.prodname_dotcom %} ou {% data variables.product.prodname_enterprise %} pour pouvoir créer et cloner un dépôt de tutoriel.

Pour plus d’informations sur l’installation et l’authentification, consultez « [Configuration de {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-up-github-desktop) ».

## Partie 2 : Création d’un dépôt
Si vous n’avez aucun dépôt associé à {% data variables.product.prodname_desktop %}, la vue « Commençons ! » s’affiche. À partir de cette vue, vous pouvez créer et cloner un dépôt de tutoriel, cloner un dépôt existant provenant d’Internet, créer un dépôt ou ajouter un dépôt existant depuis votre disque dur.
  ![Écran Commençons !](/assets/images/help/desktop/lets-get-started.png)

### Création et clonage d’un dépôt de tutoriel
Nous vous recommandons de créer et de cloner un dépôt de tutoriel en tant que premier projet pour vous entraîner à utiliser {% data variables.product.prodname_desktop %}.

1. Cliquez sur **Créer un dépôt de tutoriel et le cloner**.
  ![Bouton de création et de clonage d’un dépôt de tutoriel](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. Suivez les invites du tutoriel pour installer un éditeur de texte, créer une branche, modifier un fichier, effectuer un commit, publier sur {% data variables.product.prodname_dotcom %} et ouvrir une demande de tirage.

### Création d’un dépôt
Si vous ne souhaitez pas créer et cloner un dépôt de tutoriel, vous pouvez créer un dépôt.

1. Cliquez sur **Créer un dépôt sur le disque dur**. ![Créer un dépôt](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. Remplissez les champs, puis sélectionnez les options correspondant à vos préférences.
  ![Options de création d’un dépôt](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - « Nom » définit le nom de votre dépôt à la fois localement et sur {% data variables.product.product_name %}.
   - « Description » est un champ facultatif qui vous permet de fournir plus d’informations sur la finalité de votre dépôt.
   - « Chemin local » définit l’emplacement du dépôt sur votre ordinateur. Par défaut, {% data variables.product.prodname_desktop %} crée un dossier _GitHub_ dans votre dossier _Documents_ pour stocker vos dépôts, mais vous pouvez choisir n’importe quel emplacement sur votre ordinateur. Votre nouveau dépôt sera un dossier situé à l’emplacement choisi. Par exemple, si vous nommez votre dépôt `Tutorial`, un dossier nommé _Tutorial_ est créé dans le dossier que vous avez sélectionné pour votre chemin local. {% data variables.product.prodname_desktop %} se souviendra de l’emplacement choisi la prochaine fois que vous créerez ou clonerez un dépôt.
   - **Initialiser ce dépôt avec un fichier README** permet de créer un commit initial avec un fichier _README.md_. Les fichiers README aident les utilisateurs à comprendre la finalité de votre projet. Nous vous recommandons donc de cocher cette option et de fournir des informations pertinentes. Quand une personne visite votre dépôt sur {% data variables.product.product_name %}, le fichier README est la première chose qu’elle voit en découvrant votre projet. Pour plus d’informations, consultez « [À propos des fichiers README](/articles/about-readmes) ».
   - Le menu déroulant **À ignorer par Git** vous permet d’ajouter un fichier personnalisé pour ignorer au sein de votre dépôt local des fichiers spécifiques que vous ne souhaitez pas stocker dans la gestion de versions. Si vous comptez utiliser un langage ou un framework spécifique, vous pouvez sélectionner une option dans la liste disponible. Si vous êtes débutant, n’hésitez pas à ignorer cette sélection. Pour plus d’informations, consultez « [Fichiers à ignorer](/github/getting-started-with-github/ignoring-files) ».
   - Le menu déroulant **Licence** vous permet d’ajouter une licence open source à un fichier _LICENSE_ dans votre dépôt. Vous n’avez pas à vous soucier de l’ajout d’une licence dans l’immédiat. Pour plus d’informations sur les licences open source disponibles et sur la façon de les ajouter à votre dépôt, consultez « [Gestion des licences d’un dépôt](/articles/licensing-a-repository) ».
3. Cliquez sur **Créer un dépôt**.

## Partie 3 : Exploration de {% data variables.product.prodname_desktop %}
Dans le menu Fichier en haut de l’écran, vous pouvez accéder aux paramètres et aux actions disponibles dans {% data variables.product.prodname_desktop %}. La plupart des actions ont également des raccourcis clavier pour vous aider à travailler plus efficacement. Pour obtenir la liste complète des raccourcis clavier, consultez « [Raccourcis clavier](/desktop/getting-started-with-github-desktop/keyboard-shortcuts) ».

### Barre de menus {% data variables.product.prodname_desktop %}
En haut de l’application {% data variables.product.prodname_desktop %}, vous voyez une barre qui affiche l’état actuel de votre dépôt.
  - **Dépôt actuel** affiche le nom du dépôt que vous utilisez. Vous pouvez cliquer sur **Dépôt actuel** pour passer à un autre dépôt dans {% data variables.product.prodname_desktop %}.
  - **Branche actuelle** affiche le nom de la branche que vous utilisez. Vous pouvez cliquer sur **Branche actuelle** pour voir toutes les branches de votre dépôt, passer à une autre branche ou créer une branche. Une fois que vous avez créé des demandes de tirage dans votre dépôt, vous pouvez également les voir en cliquant sur **Branche actuelle**.
  - **Publier le dépôt** s’affiche, car vous n’avez pas encore publié votre dépôt sur {% data variables.product.product_name %}. Vous le ferez plus tard à l’étape suivante. Cette section de la barre change en fonction de l’état de votre branche et de votre dépôt actuels. Différentes actions contextuelles sont disponibles pour vous permettre d’échanger des données entre vos dépôts locaux et distants.

  ![Explorer GitHub Desktop](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

### Changements et historique
Dans la barre latérale gauche, vous trouverez les vues **Changements** et **Historique**.
  ![Onglets Changements et Historique](/assets/images/help/desktop/changes-and-history.png)

  - La vue **Changements** montre les changements que vous avez apportés aux fichiers de votre branche actuelle, mais que vous n’avez pas commités dans votre dépôt local. Vers le bas, vous trouverez une zone contenant les zones de texte « Récapitulatif » et « Description » ainsi qu’un bouton **Commiter dans BRANCHE**. C’est là que vous commitez les nouveaux changements. Le bouton **Commiter dans BRANCHE** est dynamique. Il permet d’afficher la branche dans laquelle vous commitez vos changements.
  ![Zone de commit](/assets/images/help/desktop/getting-started-guide/commit-area.png)

  - La vue **Historique** affiche les commits précédents dans la branche actuelle de votre dépôt. Vous devez voir un « Commit initial » créé par {% data variables.product.prodname_desktop %} quand vous avez créé votre dépôt. À droite du commit, selon les options que vous avez sélectionnées au moment de la création de votre dépôt, vous pouvez voir les fichiers _.gitattributes_, _.gitignore_, _LICENSE_ ou _README_. Vous pouvez cliquer sur chaque fichier pour voir les différences qui lui correspondent, c’est-à-dire les changements apportés au fichier dans le commit. L’affichage des différences montre uniquement les parties du fichier qui ont changé, et non l’intégralité du contenu de ce fichier.
  ![Vue Historique](/assets/images/help/desktop/getting-started-guide/history-view.png)

## Partie 4 : Publication de votre dépôt sur {% data variables.product.product_name %}
Quand vous créez un dépôt, il existe uniquement sur votre ordinateur. Vous êtes le seul à pouvoir y accéder. Vous pouvez publier votre dépôt sur {% data variables.product.product_name %} pour le garder synchronisé sur plusieurs ordinateurs, et permettre à d’autres personnes d’y accéder. Pour publier votre dépôt, poussez vos changements locaux vers {% data variables.product.product_name %}.

1. Cliquez sur **Publier le dépôt** dans la barre de menus.
    ![Publier le dépôt](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
    - {% data variables.product.prodname_desktop %} remplit automatiquement les champs « Nom » et « Description » avec les informations que vous avez entrées au moment de la création du dépôt.
    - **Garder ce code privé** vous permet de contrôler la visibilité de votre projet. Si vous laissez cette case non cochée, les autres utilisateurs de {% data variables.product.product_name %} pourront voir votre code. Si vous sélectionnez cette option, votre code ne sera pas accessible publiquement.
    - Le menu déroulant **Organisation**, s’il est présent, vous permet de publier votre dépôt au sein d’une organisation spécifique à laquelle vous appartenez sur {% data variables.product.product_name %}.

    ![Étapes de publication du dépôt](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
  2. Cliquez sur le bouton **Publier le dépôt**.
  3. Vous pouvez accéder au dépôt sur {% data variables.product.prodname_dotcom_the_website %} à partir de {% data variables.product.prodname_desktop %}. Dans le menu Fichier, cliquez sur **Dépôt**, puis sur **Voir sur GitHub**. Cela vous amène directement au dépôt dans votre navigateur par défaut.

## Partie 5 : Apport, commit et poussée de changements
Une fois que vous avez créé et publié votre dépôt, vous êtes prêt à apporter des changements à votre projet et à créer votre premier commit pour votre dépôt.

1. Pour lancer votre éditeur externe à partir de {% data variables.product.prodname_desktop %}, cliquez sur **Dépôt**, puis sur **Ouvrir dans <em>ÉDITEUR</em>** . Pour plus d’informations, consultez « [Configuration d’un éditeur par défaut](/desktop/getting-started-with-github-desktop/configuring-a-default-editor) ».
  ![Ouvrir dans l’éditeur](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. Apportez quelques changements au fichier _README.md_ que vous avez créé. Vous pouvez ajouter des informations qui décrivent votre projet, par exemple sa finalité et son utilité. Une fois que vous êtes satisfait de vos changements, enregistrez-les dans votre éditeur de texte.
3. Dans {% data variables.product.prodname_desktop %}, accédez à la vue **Changements**. Dans la liste de fichiers, vous devez voir votre fichier _README.md_. La coche située à gauche du fichier _README.md_ indique que les changements que vous avez apportés à ce fichier feront partie du commit que vous effectuez. Plus tard, vous pourrez changer plusieurs fichiers tout en commitant uniquement les changements apportés à certains d’entre eux. Si vous cliquez sur la coche en regard d’un fichier, ce dernier n’est pas inclus dans le commit.
  ![Visualisation des changements](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. Au bas de la liste **Changements**, entrez un message de commit. À droite de votre photo de profil, tapez une brève description du commit. Dans la mesure où nous changeons le fichier _README.md_, « Ajout d’informations sur la finalité du projet » peut être un bon récapitulatif de commit. Sous le récapitulatif, vous voyez un champ de texte « Description » dans lequel vous pouvez taper une description plus longue des changements apportés au commit. Cela vous permet ainsi de revoir l’historique d’un projet et de comprendre pourquoi des changements ont été apportés. Dans la mesure où vous effectuez une mise à jour de base d’un fichier _README.md_, vous pouvez ignorer la description.
  ![Message de commit](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. Cliquez sur **Commiter dans NOM DE LA BRANCHE**. Le bouton de commit montre votre branche actuelle pour que vous soyez sûr de commiter dans la branche souhaitée.
  ![Commiter dans la branche](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. Pour pousser vos changements vers le dépôt distant sur {% data variables.product.product_name %}, cliquez sur **Pousser vers origin**.
  ![Pousser vers origin](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
  - Le bouton **Pousser vers origin** est le même que celui sur lequel vous avez cliqué pour publier votre dépôt sur {% data variables.product.product_name %}. Ce bouton change de manière contextuelle en fonction de l’étape où vous vous trouvez dans le workflow Git. Il doit désormais indiquer `Push origin` avec un `1` à côté, ce qui indique l’existence d’un commit qui n’a pas été poussé vers {% data variables.product.product_name %}.
  - Le terme « origin » dans **Pousser vers origin** signifie que vous poussez les changements vers un dépôt distant appelé `origin`. Dans le cas présent, il s’agit du dépôt de votre projet sur {% data variables.product.prodname_dotcom_the_website %}. Tant que vous n’avez pas poussé de nouveaux commits vers {% data variables.product.product_name %}, il existe des différences entre le dépôt du projet sur votre ordinateur et le dépôt du projet sur {% data variables.product.prodname_dotcom_the_website %}. Cela vous permet de travailler localement et de pousser vos changements vers {% data variables.product.prodname_dotcom_the_website %} uniquement quand vous êtes prêt.
7. Dans la fenêtre à droite de la vue **Changements**, vous voyez s’afficher des suggestions d’actions à effectuer ensuite. Pour ouvrir le dépôt sur {% data variables.product.product_name %} dans votre navigateur, cliquez sur **Voir sur {% data variables.product.product_name %}** .
  ![Actions disponibles](/assets/images/help/desktop/available-actions.png)
8. Dans votre navigateur, cliquez sur **2 commits**. Vous voyez une liste des commits de ce dépôt sur {% data variables.product.product_name %}. Le premier commit doit être celui que vous venez d’effectuer dans {% data variables.product.prodname_desktop %}.
  ![Cliquez sur deux commits](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

## Conclusion
Vous avez à présent créé un dépôt, publié ce dépôt sur {% data variables.product.product_name %}, effectué un commit et poussé vos changements vers {% data variables.product.product_name %}. Vous pouvez suivre ce même workflow quand vous contribuez à d’autres projets que vous créez, ou auxquels vous collaborez.

## Pour aller plus loin
- « [Bien démarrer avec Git](/github/getting-started-with-github/getting-started-with-git) »
- « [Découverte de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github) »
- « [Bien démarrer avec {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github) »
