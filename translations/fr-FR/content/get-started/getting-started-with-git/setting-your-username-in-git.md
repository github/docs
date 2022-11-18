---
title: Définition de votre nom d’utilisateur dans Git
intro: 'Git utilise un nom d’utilisateur pour associer les validations à une identité. Le nom d’utilisateur Git n’est pas le même que votre nom d’utilisateur {% data variables.product.product_name %}.'
redirect_from:
  - /articles/setting-your-username-in-git
  - /github/using-git/setting-your-username-in-git
  - /github/getting-started-with-github/setting-your-username-in-git
  - /github/getting-started-with-github/getting-started-with-git/setting-your-username-in-git
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Set your username
ms.openlocfilehash: c713f21fdf91269764dd97f15770e7996bf9f4f0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128985'
---
## À propos des noms d’utilisateur Git
Vous pouvez changer le nom associé à vos commits Git avec la commande `git config`. Le nouveau nom que vous définissez est visible dans tous les commits suivants que vous poussez sur {% data variables.product.product_name %} à partir de la ligne de commande. Pour que votre vrai nom reste privé, vous pouvez utiliser n’importe quel texte comme nom d’utilisateur Git.

Le changement du nom associé à vos commits Git en utilisant `git config` affecte uniquement les futurs commits et ne change pas le nom utilisé pour les commits passés.

## Définition de votre nom d’utilisateur Git pour *tous* les dépôts sur votre ordinateur

{% data reusables.command_line.open_the_multi_os_terminal %}

2. {% data reusables.user-settings.set_your_git_username %}
   ```shell
   $ git config --global user.name "<em>Mona Lisa</em>"
   ```

3. {% data reusables.user-settings.confirm_git_username_correct %}
   ```shell
   $ git config --global user.name
   > Mona Lisa
   ```

## Définition de votre nom d’utilisateur Git pour un seul dépôt

{% data reusables.command_line.open_the_multi_os_terminal %}

2. Remplacez le répertoire de travail actuel par le dépôt local où vous voulez configurer le nom associé à vos commits Git.

3. {% data reusables.user-settings.set_your_git_username %}
   ```shell
   $ git config user.name "<em>Mona Lisa</em>"
   ```

3. {% data reusables.user-settings.confirm_git_username_correct %}
   ```shell
   $ git config user.name
   > Mona Lisa
   ```

## Pour aller plus loin

- « [Définition de votre adresse e-mail de commit](/articles/setting-your-commit-email-address) »
- [« Configuration Git » dans la documentation _Pro Git_](https://git-scm.com/book/en/Customizing-Git-Git-Configuration)
