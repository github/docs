---
title: Références et URL automatiquement liées
intro: 'Les références aux URL, aux problèmes, aux demandes de tirage (pull requests) et aux validations (commits) sont automatiquement raccourcies et converties en liens.'
redirect_from:
  - /articles/autolinked-references-and-urls
  - /github/writing-on-github/autolinked-references-and-urls
  - /github/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Auto linked references
ms.openlocfilehash: 6f6548dbe931a7a6adb809aa4e5616db4358c242
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147419688'
---
## URLs

{% data variables.product.product_name %} crée automatiquement des liens à partir d’URL standard.

`Visit https://github.com`

![URL automatiquement liée restituée](/assets/images/help/writing/url-autolink-rendered.png)

Pour plus d’informations sur la création de liens, consultez « [Syntaxe de base pour l’écriture et la mise en forme ](/articles/basic-writing-and-formatting-syntax/#links) ».

## Problèmes et demandes de tirage

Dans les conversations sur {% data variables.product.product_name %}, les références sur les problèmes et les demandes de tirage (pull requests) sont automatiquement converties en liens raccourcis.

{% note %}

**Remarque :** Les références automatiquement liées ne sont pas créées dans les wikis ou les fichiers d’un dépôt.

{% endnote %}

| Type de référence | Référence brute | Lien court |
| --- | --- | --- |
| URL de problème ou de demande de tirage (pull request) | https://github.com/jlord/sheetsee.js/issues/26 | [#26](https://github.com/jlord/sheetsee.js/issues/26)
| `#` et numéro de problème ou de demande de tirage (pull request) | #26 | [#26](https://github.com/jlord/sheetsee.js/issues/26) |
| `GH-` et numéro de problème ou de demande de tirage (pull request) | GH-26 | [GH-26](https://github.com/jlord/sheetsee.js/issues/26) |
| `Username/Repository#` et numéro de problème ou de demande de tirage (pull request) | jlord/sheetsee.js#26 | [jlord/sheetsee.js#26](https://github.com/jlord/sheetsee.js/issues/26)
| `Organization_name/Repository#` et numéro de problème ou de demande de tirage (pull request) | github/linguist#4039 | [github/linguist#4039](https://github.com/github/linguist/pull/4039)

{% ifversion fpt or ghec %} Si vous référencez un problème, une demande de tirage ou une discussion dans une liste, la référence se déploie pour afficher le titre et l’état à la place. Pour plus d’informations sur les listes de tâches, consultez « [À propos des listes de tâches](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists) ».
{% endif %}

## Étiquettes
Lorsque vous référencez l’URL d’une étiquette dans Markdown, l’étiquette est automatiquement affichée. Seules les étiquettes du même dépôt sont affichées, les URL pointant vers une étiquette à partir d’un autre dépôt sont affichées comme n’importe quelle [URL](/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#urls).

L’URL d’une étiquette est disponible en accédant à la page des étiquettes et en cliquant sur l’une d’entre elles. Par exemple, l’URL de l’étiquette « amélioration » dans notre [dépôt de documentation](https://github.com/github/docs/) public est

```md
https://github.com/github/docs/labels/enhancement
```

## Algorithmes de hachage sécurisés (SHA) de commit

Les références à l’algorithme de hachage sécurisés (SHA) d’un commit sont automatiquement converties en liens raccourcis vers le commit sur {% data variables.product.product_name %}.

| Type de référence | Référence brute | Lien court |
| --- | --- | --- |
| URL de commit | [`https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| SHA | a5c3785ed8d6a35868bc169f07e40e889087fd2e | [a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |
| User@SHA | jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e | [jlord@a5c3785](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e)
| `Username/Repository@SHA` | `jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e` | [`jlord/sheetsee.js@a5c3785`](https://github.com/jlord/sheetsee.js/commit/a5c3785ed8d6a35868bc169f07e40e889087fd2e) |

## Liens automatiques personnalisés vers des ressources externes

{% data reusables.repositories.autolink-references %}

## Pour aller plus loin

- « [Syntaxe de base pour l’écriture et la mise en forme ](/articles/basic-writing-and-formatting-syntax) »
