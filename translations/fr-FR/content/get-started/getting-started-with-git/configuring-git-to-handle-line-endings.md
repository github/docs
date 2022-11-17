---
title: Configuration de Git pour traiter les fins de ligne
intro: 'Pour éviter les problèmes dans vos différences, vous pouvez configurer Git pour gérer correctement les fins de ligne.'
redirect_from:
  - /dealing-with-lineendings
  - /line-endings
  - /articles/dealing-with-line-endings
  - /articles/configuring-git-to-handle-line-endings
  - /github/using-git/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/getting-started-with-git/configuring-git-to-handle-line-endings
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Handle line endings
ms.openlocfilehash: 4aa89f244e45da6905d6d5348c84faf8d5e6418c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884204'
---
## À propos des fins de ligne
Chaque fois que vous appuyez sur <kbd>retour</kbd> sur votre clavier, vous insérez un caractère invisible appelé fin de ligne. Les fins de ligne sont traitées différemment selon le système d'exploitation.

Quand vous collaborez sur des projets avec Git et {% data variables.product.product_name %}, Git peut produire des résultats inattendus si, par exemple, vous travaillez sur une machine Windows et que votre collaborateur a effectué un changement sur macOS.

Vous pouvez configurer Git pour traiter automatiquement les fins de ligne afin de pouvoir collaborer efficacement avec des personnes qui utilisent des systèmes d’exploitation différents.

## Paramètres généraux des fins de ligne

La commande `git config core.autocrlf` est utilisée pour changer la façon dont Git traite les fins de ligne. Elle prend un seul argument.

{% mac %}

Sur macOS, vous passez simplement `input` dans la configuration. Par exemple :

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for macOS
```

{% endmac %}

{% windows %}

Sur Windows, vous passez simplement `true` dans la configuration. Par exemple :

```shell
$ git config --global core.autocrlf true
# Configure Git to ensure line endings in files you checkout are correct for Windows.
# For compatibility, line endings are converted to Unix style when you commit files.
```

{% endwindows %}

{% linux %}

Sur Linux, vous passez simplement `input` dans la configuration. Par exemple :

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for Linux
```

{% endlinux %}

## Paramètres par dépôt

Vous pouvez aussi configurer un fichier *.gitattributes* pour gérer la façon dont Git lit les fins de ligne dans un dépôt spécifique. Quand vous commitez ce fichier dans un dépôt, il remplace le paramètre `core.autocrlf` pour tous les contributeurs du dépôt. Cela garantit un comportement cohérent pour tous les utilisateurs, quels que soient leurs paramètres et leur environnement Git.

Le fichier *.gitattributes* doit être créé à la racine du dépôt et commité comme n’importe quel autre fichier.

Un fichier *.gitattributes* ressemble à un tableau avec deux colonnes :

* À gauche, le nom de fichier que Git doit mettre en correspondance.
* À droite, la configuration de fin de ligne que Git doit utiliser pour ces fichiers.

### Exemple

Voici un exemple de fichier *.gitattributes*. Vous pouvez l’utiliser comme modèle pour vos dépôts :

```
# Set the default behavior, in case people don't have core.autocrlf set.
* text=auto

# Explicitly declare text files you want to always be normalized and converted
# to native line endings on checkout.
*.c text
*.h text

# Declare files that will always have CRLF line endings on checkout.
*.sln text eol=crlf

# Denote all files that are truly binary and should not be modified.
*.png binary
*.jpg binary
```

Notez que les fichiers sont mis en correspondance (`*.c`, `*.sln`, `*.png`) séparés par un espace, puis reçoivent un paramètre (`text`, `text eol=crlf`, `binary`). Voyons quelques-uns des paramètres possibles.

- `text=auto` : Git traite les fichiers avec la méthode qui lui paraît la plus appropriée. C’est une bonne option par défaut.

- `text eol=crlf` : Git convertit toujours les fins de ligne en `CRLF` au moment du basculement sur une branche. Vous devez l’utiliser pour les fichiers qui doivent conserver les fins `CRLF`, même sur OSX ou Linux.

- `text eol=lf` : Git convertit toujours les fins de ligne en `LF` au moment du basculement sur une branche. Vous devez l’utiliser pour les fichiers qui doivent conserver les fins LF, même sur Windows.

- `binary` : Git comprend que les fichiers spécifiés ne sont pas du texte et qu’il ne doit pas essayer de les changer. Le paramètre `binary` est également un alias de `-text -diff`.

## Actualisation d’un dépôt après changement des fins de ligne

Quand vous définissez l’option `core.autocrlf` ou commitez un fichier *.gitattributes*, vous pouvez noter que Git signale des changements sur des fichiers que vous n’avez pas modifiés. Git a changé les fins de ligne pour qu’elles correspondent à votre nouvelle configuration.

Pour que toutes les fins de ligne dans votre dépôt correspondent à votre nouvelle configuration, sauvegardez vos fichiers avec Git, supprimez tous les fichiers de votre dépôt (sauf le répertoire `.git`), puis restaurez tous les fichiers en même temps.

1. Enregistrez vos fichiers actuels dans Git pour ne pas perdre votre travail.
  ```shell
  $ git add . -u
  $ git commit -m "Saving files before refreshing line endings"
  ```
2. Ajoutez tous vos fichiers changés et normalisez les fins de ligne.
  ```shell
  $ git add --renormalize .
  ```
3. Affichez les fichiers réécrits et normalisés.
  ```shell
  $ git status
  ```
4. Commitez les changements dans votre dépôt.
  ```shell
  $ git commit -m "Normalize all the line endings"
  ```

## Pour aller plus loin

- [Personnalisation de Git - Attributs Git](https://git-scm.com/book/en/Customizing-Git-Git-Attributes) dans la documentation Pro Git
- [git-config](https://git-scm.com/docs/git-config) dans les pages man pour Git
- [Bien démarrer - Première configuration de Git](https://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup) dans la documentation Pro Git
- [Mind the End of Your Line](http://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/) de [Tim Clem](https://github.com/tclem)
