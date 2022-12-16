---
title: À propos de Git
intro: 'Découvrez le système de gestion de versions Git et la façon dont il fonctionne avec {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
  - Git
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 595fc79c5a656a3d6da8b5589ed384b545a418ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145104586'
---
## À propos de la gestion de versions et de Git

Un système de gestion de versions, ou VCS, suit l’historique des modifications quand des personnes et équipes collaborent sur des projets. Lorsque les développeurs apportent des modifications au projet, toute version antérieure du projet peut être récupérée à tout moment.

Les développeurs peuvent passer en revue l’historique d’un projet pour savoir :

- Quelles modifications ont été apportées ?
- Qui a apporté les modifications ?
- Quand les modifications ont-elles été apportées ?
- Pourquoi les modifications étaient-elles nécessaires ?

Les systèmes VCS donnent à chaque contributeur une vue unifiée et cohérente d’un projet, en exposant le travail déjà en cours. Voir un historique transparent des modifications, qui les a apportées et leur contribution au développement d’un projet aide les membres de l’équipe à rester en phase tout en travaillant indépendamment.

Dans un système de gestion de versions distribué, chaque développeur dispose d’une copie complète du projet et de l’historique du projet. Contrairement aux systèmes de gestion de versions centralisés autrefois populaires, les systèmes VCS distribués n’ont pas besoin d’une connexion constante à un dépôt central. Git est le système de gestion de versions distribué le plus populaire. Git est couramment utilisé pour le développement de logiciels open source et commerciaux, avec des avantages significatifs pour les individus, les équipes et les entreprises.

- Git permet aux développeurs de voir la chronologie entière de leurs modifications, des décisions et de la progression de n’importe quel projet à un seul endroit. À partir du moment où il accède à l’historique d’un projet, le développeur a tout le contexte nécessaire pour le comprendre et commencer à y participer.

- Les développeurs travaillent dans chaque fuseau horaire. Avec un système VCS distribué comme Git, la collaboration peut se produire à tout moment tout en conservant l’intégrité du code source. À l’aide de branches, les développeurs peuvent proposer des modifications en toute sécurité au code de production.

- Les entreprises qui utilisent Git peuvent briser les barrières de communication entre les équipes et les aider à se concentrer sur l’optimisation de leur travail. De plus, Git permet d’aligner des experts dans une entreprise pour collaborer sur des projets majeurs.

## À propos des dépôts

Un dépôt, ou projet Git, englobe la collection entière de fichiers et de dossiers associés à un projet, ainsi que l’historique de révision de chaque fichier. L’historique de fichier apparaît sous forme d’instantanés dans le temps appelés commits. Les commits peuvent être organisés en plusieurs lignes de développement appelées branches. Étant donné que Git est un système VCS distribué, les dépôts sont des unités autonomes et toute personne disposant d’une copie du dépôt peut accéder à l’intégralité du codebase et à son historique. En utilisant la ligne de commande ou d’autres interfaces faciles à utiliser, un dépôt Git permet également d’interagir avec l’historique, de cloner le dépôt, de créer des branches, de commiter, de fusionner, de comparer les modifications entre les versions du code, etc.

Via des plateformes telles que {% data variables.product.product_name %}, Git offre également davantage d’opportunités pour la transparence et la collaboration des projets. Les dépôts publics aident les équipes à collaborer pour créer le meilleur produit final possible.

## Fonctionnement de {% data variables.product.product_name %}

{% data variables.product.product_name %} héberge des dépôts Git et fournit aux développeurs des outils permettant d’envoyer un meilleur code via des fonctionnalités de ligne de commande, des problèmes (discussions à thread), des demandes de tirage (pull request), une révision de code ou l’utilisation d’une collection d’applications gratuites et à acheter dans la {% data variables.product.prodname_marketplace %}. Avec des couches de collaboration comme le flux {% data variables.product.product_name %}, une communauté de 15 millions de développeurs et un écosystème avec des centaines d’intégrations, {% data variables.product.product_name %} modifie le mode de génération des logiciels.

{% data variables.product.product_name %} génère la collaboration directement dans le processus de développement. Le travail est organisé en dépôts où les développeurs peuvent décrire les exigences ou la direction et définir les attentes pour les membres de l’équipe. Ensuite, à l’aide du flux {% data variables.product.product_name %}, les développeurs créent simplement une branche pour travailler sur les mises à jour, commiter les modifications pour les enregistrer, ouvrir une demande de tirage pour proposer et discuter des modifications, et fusionner les demandes de tirage une fois que tout le monde se trouve sur la même longueur d’onde. Pour plus d’informations, consultez « [Flux GitHub](/get-started/quickstart/github-flow) ».

## {% data variables.product.product_name %} et la ligne de commande

### Commandes Git de base

Pour utiliser Git, les développeurs utilisent des commandes spécifiques pour copier, créer, modifier et combiner du code. Ces commandes peuvent être exécutées directement à partir de la ligne de commande ou à l’aide d’une application comme {% data variables.product.prodname_desktop %}. Voici quelques commandes courantes pour l’utilisation de Git :

- `git init` initialise un tout nouveau dépôt Git et commence à suivre un répertoire existant. Elle ajoute un sous-dossier masqué dans le répertoire existant qui héberge la structure de données interne requise pour la gestion de versions.

- `git clone` crée une copie locale d’un projet qui existe déjà à distance. Le clone inclut tous les fichiers, l’historique et les branches du projet.

- `git add` indexe un changement. Git effectue le suivi des modifications apportées au codebase d’un développeur, mais il est nécessaire d’indexer et de prendre un instantané des modifications pour les inclure dans l’historique du projet. Cette commande effectue l’indexation, la première partie de ce processus en deux étapes. Toutes les modifications qui sont indexées feront partie de l’instantané suivant et de l’historique du projet. L’indexation et le commit donnent séparément aux développeurs un contrôle complet sur l’historique de leur projet sans modifier la façon dont ils codent et travaillent.

- `git commit` enregistre l’instantané dans l’historique du projet et termine le processus de suivi des modifications. En bref, un commit fonctionne comme la prise d’une photo. Tout ce qui a été indexé avec `git add` fera partie de l’instantané avec `git commit`.

- `git status` affiche l’état des modifications comme non suivies, modifiées ou indexées.

- `git branch` montre les branches en cours de traitement localement.

- `git merge` fusionne les lignes de développement. Cette commande est généralement utilisée pour combiner les modifications apportées sur deux branches distinctes. Par exemple, un développeur fusionne quand il souhaite combiner les modifications d’une branche de fonctionnalité dans la branche principale pour le déploiement.

- `git pull` met à jour la ligne de développement locale avec les mises à jour de son équivalent distant. Les développeurs utilisent cette commande si un collègue a effectué des commits sur une branche d’un dépôt distant et qu’ils souhaitent refléter ces modifications dans leur environnement local.

- `git push` met à jour le dépôt distant avec les commits effectués localement sur une branche.

Pour plus d’informations, consultez le [guide de référence complet des commandes Git](https://git-scm.com/docs).

### Exemple : Contribuer à un dépôt existant

```bash
# download a repository on {% data variables.product.product_name %} to our machine
# Replace `owner/repo` with the owner and name of the repository to clone
git clone https://github.com/owner/repo.git

# change into the `repo` directory
cd repo

# create a new branch to store any new changes
git branch my-branch

# switch to that branch (line of development)
git checkout my-branch

# make changes, for example, edit `file1.md` and `file2.md` using the text editor

# stage the changed files
git add file1.md file2.md

# take a snapshot of the staging area (anything that's been added)
git commit -m "my snapshot"

# push changes to github
git push --set-upstream origin my-branch
```

### Exemple : Démarrer un nouveau dépôt et le publier sur {% data variables.product.product_name %}

Tout d’abord, vous devez créer un dépôt sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Hello World](/get-started/quickstart/hello-world) ». **N’initialisez pas** le dépôt avec un fichier Lisez-moi, .gitignore ou de licence. Ce dépôt vide attend votre code.

```bash
# create a new directory, and initialize it with git-specific functions
git init my-repo

# change into the `my-repo` directory
cd my-repo

# create the first file in the project
touch README.md

# git isn't aware of the file, stage it
git add README.md

# take a snapshot of the staging area
git commit -m "add README to initial commit"

# provide the path for the repository you created on github
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git

# push changes to github
git push --set-upstream origin main
```

### Exemple : Contribuer à une branche existante sur {% data variables.product.product_name %}

Cet exemple suppose que vous avez déjà un projet appelé `repo` sur l’ordinateur et qu’une nouvelle branche a été poussée vers {% data variables.product.product_name %} depuis les dernières modifications locales.

```bash
# change into the `repo` directory
cd repo

# update all remote tracking branches, and the currently checked out branch
git pull

# change into the existing branch called `feature-a`
git checkout feature-a

# make changes, for example, edit `file1.md` using the text editor

# stage the changed file
git add file1.md

# take a snapshot of the staging area
git commit -m "edit file1"

# push changes to github
git push
```

## Modèles de développement collaboratif

Il existe deux façons principales pour les personnes de collaborer sur {% data variables.product.product_name %} :

1. Dépôt partagé
2. Duplication (fork) et tirage (pull)

Avec un dépôt partagé, les individus et les équipes sont explicitement désignés comme contributeurs avec un accès en lecture, en écriture ou administrateur. Cette structure d’autorisation simple, combinée à des fonctionnalités telles que des branches protégées, permet aux équipes de progresser rapidement quand elles adoptent {% data variables.product.product_name %}.

Pour un projet open source ou pour les projets auxquels tout le monde peut contribuer, la gestion des autorisations individuelles peut être difficile, mais un modèle de duplication et tirage permet à toute personne qui peut voir le projet de contribuer. Une duplication est une copie d’un projet sous le compte personnel d’un développeur. Chaque développeur dispose d’un contrôle total de sa duplication et est libre d’implémenter un correctif ou une nouvelle fonctionnalité. Le travail effectué dans les duplications est conservé séparément ou exposé dans le projet d’origine par le biais d’une demande de tirage. Là, les chargés de maintenance peuvent examiner les modifications suggérées avant leur fusion. Pour plus d’informations, consultez « [Contribution aux projets](/get-started/quickstart/contributing-to-projects) ».

## Pour aller plus loin

L’équipe {% data variables.product.product_name %} a créé une bibliothèque de vidéos et de guides éducatifs pour aider les utilisateurs à continuer à développer leurs compétences et à créer de meilleurs logiciels.

- [Projets pour débutants à explorer](https://github.com/showcases/great-for-new-contributors)
- [Guides vidéo {% data variables.product.product_name %}](https://youtube.com/githubguides)

Pour obtenir un aperçu détaillé des pratiques Git, les vidéos ci-dessous montrent comment tirer le meilleur parti de certaines commandes Git.

- [Travail en local](https://www.youtube.com/watch?v=rBbbOouhI-s&index=2&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)
- [`git status`](https://www.youtube.com/watch?v=SxmveNrZb5k&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4&index=3)
- [Commits en deux étapes](https://www.youtube.com/watch?v=Vb0Ghkkc2hk&index=4&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)
- [`git pull` et `git push`](https://www.youtube.com/watch?v=-uQHV9GOA0w&index=5&list=PLg7s6cbtAD17Gw5u8644bgKhgRLiJXdX4)
