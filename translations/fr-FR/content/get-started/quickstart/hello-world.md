---
title: Hello World
intro: 'Suivez cet exercice Hello World pour commencer à utiliser {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 71278b720bcbfaabc892c396ab7fb558f5309173
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109526'
---
## Introduction

{% data variables.product.product_name %} est une plateforme d’hébergement de code pour la gestion de versions et la collaboration. Cette plateforme vous permet de travailler avec d’autres personnes sur des projets depuis n’importe où.

Ce tutoriel vous présente les bases de {% data variables.product.product_name %} comme les dépôts, les branches, les commits et les demandes de tirage (pull requests). Vous allez créer votre propre dépôt Hello World et découvrir le workflow de demande de tirage de {% data variables.product.product_name %}, un moyen répandu de créer et réviser du code.

Dans ce guide de démarrage rapide, vous allez :

* Créer et utiliser un dépôt
* Démarrer et gérer une nouvelle branche
* Apporter des modifications à un fichier et les pousser vers {% data variables.product.product_name %} sous forme de commits
* Ouvrir et fusionner une demande de tirage (pull request)

Pour suivre ce tutoriel, vous avez besoin d’un [compte {% data variables.product.product_name %}](http://github.com) et d’un accès Internet. Vous n’avez pas besoin de savoir coder, d’utiliser la ligne de commande ni d’installer Git (le logiciel de gestion de versions sur lequel {% data variables.product.product_name %} s’appuie). Si vous avez une question sur l’une des expressions utilisées dans ce guide, reportez-vous au [glossaire](/get-started/quickstart/github-glossary) pour en savoir plus sur notre terminologie.

## Création d’un dépôt

Un dépôt s’utilise généralement pour organiser un seul projet. Les dépôts peuvent contenir des dossiers et des fichiers, des images, des vidéos, des feuilles de calcul et des jeux de données, tout ce dont votre projet a besoin. Souvent, les dépôts incluent un fichier _LISEZ-MOI_, à savoir un fichier qui contient des informations sur votre projet. Les fichiers _LISEZ-MOI_ sont écrits en langage Markdown en texte brut. Vous pouvez utiliser cet [aide-mémoire](https://www.markdownguide.org/cheat-sheet/) pour bien démarrer avec la syntaxe Markdown. {% data variables.product.product_name %} vous permet d’ajouter un fichier _LISEZ-MOI_ en même temps que vous créez votre dépôt. {% data variables.product.product_name %} propose également d’autres options courantes comme un fichier de licence, mais vous n’avez pas besoin d’en sélectionner pour le moment.

Votre dépôt `hello-world` peut constituer un endroit où vous stockez des idées, des ressources, voire même où vous partagez et discutez avec d’autres personnes.

{% data reusables.repositories.create_new %}
1. Dans la zone **Nom du dépôt**, entrez `hello-world`.
2. Dans la zone **Description**, écrivez une brève description.
3. Sélectionnez **Ajouter un fichier LISEZ-MOI**.
4. Indiquez si votre dépôt sera **public** ou **privé**.
5. Cliquez sur **Créer le dépôt**.

   ![Créer un dépôt Hello World](/assets/images/help/repository/hello-world-repo.png)

## Création d’une branche

La création de branches vous permet d’avoir différentes versions d’un dépôt en même temps.

Par défaut, votre dépôt a une seule branche nommée `main` considérée comme la branche définitive. Vous pouvez créer des branches supplémentaires séparées de `main` dans votre dépôt. Vous pouvez utiliser des branches pour avoir différentes versions d’un projet en même temps. Cela s’avère utile quand vous voulez ajouter de nouvelles fonctionnalités à un projet sans modifier la source principale du code. Le travail effectué sur les différentes branches n’apparaît pas sur la branche main tant que vous ne l’avez pas fusionné, ce que nous allons aborder plus tard dans ce guide. Vous pouvez utiliser des branches pour expérimenter et apporter des modifications avant de les commiter dans `main`.

Quand vous créez une branche en dehors de la branche `main`, vous effectuez une copie, ou un instantané, de cette branche `main` telle qu’elle est à ce moment-là. Si une autre personne apporte des modifications à la branche `main` alors que vous êtes en train de travailler sur votre branche, vous pouvez tirer (pull) ces mises à jour.

Ce schéma montre :

* La branche `main`
* Une nouvelle branche appelée `feature`
* Le parcours de `feature` avant sa fusion dans `main`

![Diagramme de création d’une branche](/assets/images/help/repository/branching.png)

Avez-vous déjà enregistré différentes versions d’un fichier ? Par exemple :

* `story.txt`
* `story-edit.txt`
* `story-edit-reviewed.txt`

Les branches réalisent des objectifs similaires dans les dépôts {% data variables.product.product_name %}.

Ici, chez {% data variables.product.product_name %}, nos développeurs, rédacteurs et concepteurs utilisent des branches pour séparer les correctifs de bogues et le travail sur les fonctionnalités de notre branche `main` (production). Quand une modification est prête, ils fusionnent leur branche dans `main`.

### Créer une branche

1. Cliquez sur l’onglet **Code** de votre dépôt `hello-world`.
2. Cliquez sur la liste déroulante située en haut de la liste des fichiers qui indique **main**.
   ![Menu Branche](/assets/images/help/branch/branch-selection-dropdown.png)
4. Tapez un nom de branche, `readme-edits`, dans la zone de texte.
5. Cliquez sur **Créer une branche : readme-edits à partir de main**.

![Menu Branche](/assets/images/help/repository/new-branch.png)

Maintenant, vous avez deux branches, `main` et `readme-edits`. Pour le moment, elles sont strictement identiques. Par la suite, vous allez ajouter des modifications à la nouvelle branche.

## Apporter et commiter des modifications

Quand vous avez créé une branche à l’étape précédente, {% data variables.product.product_name %} vous a amené à la page de codes de votre nouvelle branche `readme-edits`, qui est une copie de `main`.

Vous pouvez apporter et enregistrer des modifications dans les fichiers de votre dépôt. Sur {% data variables.product.product_name %}, les modifications enregistrées sont appelées commits. Chaque commit est associé à un message de commit qui décrit pourquoi une modification particulière a été apportée. Les messages de commit capturent l’historique de vos modifications afin que d’autres contributeurs puissent comprendre ce que vous avez fait et pourquoi.

1. Sous la branche `readme-edits` que vous avez créée, cliquez sur le fichier _LISEZ-MOI.md_.
2. Cliquez sur {% octicon "pencil" aria-label="The edit icon" %} pour modifier le fichier.
3. Dans l’éditeur, présentez-vous en quelques mots. Essayez d’utiliser différents éléments Markdown.
4. Dans la zone **Commiter les modifications**, écrivez un message de commit qui décrit vos modifications.
5. Cliquez sur **Commiter les changements**.

   ![Exemple de commit](/assets/images/help/repository/first-commit.png)

Ces modifications sont uniquement apportées au fichier LISEZ-MOI de votre branche `readme-edits`. Le contenu de cette branche est donc maintenant différent de celui de `main`.

## Ouverture d’une demande de tirage (pull request)

Maintenant que vous avez des modifications dans une branche distincte de `main`, vous pouvez ouvrir une demande de tirage (pull request).

Les demandes de tirage (pull requests) sont au cœur de la collaboration sur {% data variables.product.product_name %}. Quand vous ouvrez une demande de tirage (pull request), vous proposez vos modifications et demandez à quelqu’un d’examiner et tirer (pull) votre contribution dans le but de les fusionner dans sa branche. Les demandes de tirage présentent les diffs, ou différences, entre le contenu des deux branches. Les modifications, ajouts et suppressions sont affichés dans des couleurs différentes.

Dès que vous effectuez un commit, vous pouvez ouvrir une demande de tirage et démarrer une discussion, avant même que le code ne soit terminé.

À l’aide de la fonctionnalité `@mention` de {% data variables.product.product_name %} dans votre message de demande de tirage, vous pouvez demander à des personnes ou équipes spécifiques de vous donner leur feedback, qu’elles se trouvent juste à côté ou à 10 fuseaux horaires de vous.

Vous pouvez même ouvrir des demandes de tirage dans votre propre dépôt et les fusionner vous-même. C’est un excellent moyen de se familiariser avec le flux {% data variables.product.product_name %} avant de travailler sur des projets de plus grande envergure.

1. Cliquez sur l’onglet **Demandes de tirage** de votre dépôt `hello-world`.
2. Cliquez sur **Nouvelle demande de tirage**.
3. Dans la zone **Exemples de comparaisons**, sélectionnez la branche que vous avez créée, `readme-edits`, pour la comparer à `main` (l’originale).
4. Examinez vos modifications dans les différences figurant dans la page Comparer pour vérifier qu’elles correspondent bien à ce que vous voulez soumettre.

   ![Exemple de différence](/assets/images/help/repository/diffs.png)

5. Cliquez sur **Create pull request** (Créer une demande de tirage).
6. Donnez un titre à votre demande de tirage et décrivez brièvement vos modifications. Vous pouvez inclure des emojis et faire glisser des images et des gifs.
7. Cliquez éventuellement, à droite de votre titre et de votre description, sur {% octicon "gear" aria-label="The Gear icon" %} située en regard de **Réviseurs**, **Destinataires**, **Étiquettes**, **Projets** ou **Jalons** pour ajouter l’une de ces options à votre demande de tirage. Vous n’avez pas besoin d’en ajouter à ce stade, mais ces options vous offrent différentes façons de collaborer en utilisant des demandes de tirage. Pour plus d’informations, consultez « [À propos des demandes de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) ».
7. Cliquez sur **Create pull request** (Créer une demande de tirage).

Vos collaborateurs peuvent maintenant passer en revue vos modifications et faire des suggestions.

## Fusion de votre demande de tirage

Dans cette dernière étape, vous allez fusionner votre branche `readme-edits` dans la branche `main`.  Une fois que vous avez fusionné votre demande de tirage, les modifications apportées à votre branche `readme-edits` sont incorporées dans `main`.

Parfois, une demande de tirage peut introduire dans le code des modifications qui entrent en conflit avec le code existant sur `main`. En cas de conflits, {% data variables.product.product_name %} vous envoie une alerte sur le code en conflit et empêchent toute fusion tant que les conflits ne sont pas résolus. Vous pouvez effectuer un commit qui résout les conflits ou utiliser des commentaires dans la demande de tirage pour discuter des conflits avec les membres de votre équipe.

Dans cette procédure pas à pas, vous ne devez pas avoir de conflits. Vous êtes donc prêt à fusionner votre branche dans la branche main.

1. Cliquez sur **Fusionner la demande de tirage** pour fusionner les modifications dans `main`.
  ![Capture d’écran du bouton Fusionner.](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
2. Cliquez sur **Confirmer la fusion**. Vous allez recevoir un message indiquant que la demande a été correctement fusionnée et fermée.
3. Cliquez sur **Supprimer la branche**. Maintenant que votre demande de tirage est fusionnée et que vos modifications sont dans `main`, vous pouvez supprimer en toute sécurité la branche `readme-edits`. Si vous voulez apporter d’autres modifications à votre projet, vous pouvez toujours créer une branche et répéter ce processus.

## Étapes suivantes

En suivant ce tutoriel, vous avez appris à créer un projet et à effectuer une demande de tirage (pull request) sur {% data variables.product.product_name %}.

Voici les tâches que vous avez accomplies dans ce tutoriel :

* Créer un dépôt open source
* Démarrer et gérer une nouvelle branche
* Modifier un fichier et commiter ces modifications dans {% data variables.product.product_name %}
* Ouvrir et fusionner une demande de tirage

Examinez votre profil {% data variables.product.product_name %} pour voir votre travail reflété sur votre graphe de contribution.

Pour plus d’informations sur les possibilités des branches et des demandes de tirage, consultez « [Flux GitHub](/get-started/quickstart/github-flow) ». Pour plus d’informations pour bien démarrer avec {% data variables.product.product_name %}, consultez les autres guides de [démarrage rapide](/get-started/quickstart).
