---
title: Adding a workflow status badge
intro: Vous pouvez afficher un badge d’état dans votre dépôt pour indiquer l’état de vos workflows.
redirect_from:
  - /actions/managing-workflow-runs/adding-a-workflow-status-badge
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Add a status badge
ms.openlocfilehash: d2b0703e9ca4dcdc0a02cb81144e321a38cffde0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880628'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**Remarque** : les badges de workflow dans un dépôt privé ne sont pas accessibles en externe. Vous ne pouvez donc pas les incorporer ni les lier à partir d’un site externe.

{% endnote %}

{% data reusables.repositories.actions-workflow-status-badge-intro %}


Pour ajouter un badge d’état de workflow à votre fichier `README.md`, recherchez d’abord l’URL du badge d’état que vous souhaitez afficher. Vous pouvez ensuite utiliser Markdown pour afficher le badge en tant qu’image dans votre fichier `README.md`. Pour plus d’informations sur le balisage d’image dans Markdown, consultez « [Syntaxe de base pour l’écriture et la mise en forme](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images) ».

## Utilisation du nom de fichier de workflow

Vous pouvez générer l’URL d’un badge d’état de workflow à l’aide du nom du fichier de workflow :

```
{% ifversion fpt or ghec %}https://github.com{% else %}<HOSTNAME>{% endif %}/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg
```

Pour afficher le badge d’état du workflow dans votre fichier `README.md`, utilisez le balisage Markdown afin d’incorporer des images. Pour plus d’informations sur le balisage d’image dans Markdown, consultez « [Syntaxe de base pour l’écriture et la mise en forme](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images) ».

Ajoutez par exemple la balise Markdown suivante à votre fichier `README.md` pour ajouter un badge d’état pour un workflow avec le chemin de fichier `.github/workflows/main.yml`. Le `OWNER` du dépôt est l’organisation `github` et le nom du `REPOSITORY` est `docs`.

```markdown
![example workflow](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
```

## Utilisation du paramètre `branch`

Pour afficher l’état d’exécution du workflow pour une branche spécifique, ajoutez `?branch=<BRANCH_NAME>` à la fin de l’URL du badge d’état.

Ajoutez par exemple la balise Markdown suivante à votre fichier `README.md` pour afficher un badge d’état pour une branche nommée `feature-1`.

```markdown
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
```

## Utilisation du paramètre `event`

Pour afficher l’état des exécutions de workflow déclenchées par l’événement `push`, ajoutez `?event=push` à la fin de l’URL du badge d’état.

Ajoutez par exemple le balisage Markdown suivant à votre fichier `README.md` pour afficher un badge avec l’état des exécutions de workflow déclenchées par l’événement `push`, qui affiche l’état de la build pour l’état actuel de cette branche.

```markdown
![example event parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=push)
```
