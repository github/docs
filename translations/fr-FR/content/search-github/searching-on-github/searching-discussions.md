---
title: Recherche de discussions
intro: 'Vous pouvez rechercher des discussions sur {% data variables.product.product_name %} et affiner les résultats à l’aide de qualificateurs de recherche.'
versions:
  feature: discussions
topics:
  - GitHub search
redirect_from:
  - /github/searching-for-information-on-github/searching-discussions
  - /github/searching-for-information-on-github/searching-on-github/searching-discussions
ms.openlocfilehash: 4a1224d05cd78a0b701e7bc2a9e93a1c5a837bcd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410450'
---
## À propos de la recherche de discussions

Vous pouvez rechercher des discussions de manière globale dans l’ensemble de {% data variables.product.product_name %} ou dans un référentiel ou une organisation spécifique. Pour plus d’informations, consultez « [À propos de la recherche sur {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github) ».

{% data reusables.search.syntax_tips %}

## Rechercher par titre, corps ou commentaires

Avec le qualificateur `in`, vous pouvez restreindre votre recherche de discussions au titre, au corps ou aux commentaires. Vous pouvez également combiner des qualificateurs pour rechercher une combinaison de titre, de corps ou de commentaires. Lorsque vous omettez le qualificateur `in`, {% data variables.product.product_name %} recherche le titre, le corps et les commentaires.

| Qualificateur | Exemple |
| :- | :- |
| `in:title` | [**bienvenue in:title**](https://github.com/search?q=welcome+in%3Atitle&type=Discussions)correspond aux discussions avec « bienvenue » dans le titre. |
| `in:body` | [**intégrer in:title,body**](https://github.com/search?q=onboard+in%3Atitle%2Cbody&type=Discussions) correspond aux discussions avec « intégrer » dans le titre ou le corps. |
| `in:comments` | [**merci in:comments**](https://github.com/search?q=thanks+in%3Acomment&type=Discussions) correspond aux discussions avec « merci » dans les commentaires pour la discussion. |

## Rechercher dans les référentiels d’un utilisateur ou d’une organisation

Pour rechercher des discussions dans l’ensemble des référentiels appartenant à un utilisateur ou à une organisation, vous pouvez utiliser le qualificateur `user` ou `org`. Pour rechercher des discussions contenues dans un référentiel spécifique, vous pouvez utiliser le qualificateur `repo`.

| Qualificateur | Exemple |
| :- | :- |
| <code>user:<em>USERNAME</em></code> | [**commentaires user:octocat**](https://github.com/search?q=user%3Aoctocat+feedback&type=Discussions) correspond aux discussions avec le mot « commentaires » des référentiels détenus par @octocat. |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Discussions&utf8=%E2%9C%93) correspond aux discussions dans les référentiels appartenant à l’organisation GitHub. |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:nodejs/node created:<2021-01-01**](https://github.com/search?q=repo%3Anodejs%2Fnode+created%3A%3C2020-01-01&type=Discussions) correspond aux discussions du @nodejs« projet runtime Node.js créé avant janvier 2021. |

## Filtrer par visibilité de référentiel

Vous pouvez filtrer en fonction de la visibilité du référentiel contenant les discussions, à l’aide du qualificateur `is`. Pour plus d’informations, consultez « [À propos des dépôts](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) ».

| Qualifier  | Example | :- | :- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Discussions) correspond aux discussions dans des dépôts publics.{% endif %}{% ifversion ghec %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Discussions) correspond aux discussions dans référentiels internes.{% endif %} | `is:private` | [**is:private tiramisu**](https://github.com/search?q=is%3Aprivate+tiramisu&type=Discussions) correspond aux discussions qui contiennent le mot « tiramisu » dans des dépôts privés auxquels vous avez accès.

## Rechercher par auteur

Le qualificateur `author` recherche les discussions créées par un certain utilisateur.

| Qualificateur | Exemple |
| :- | :- |
| <code>author:<em>USERNAME</em></code> | [**cool author:octocat**](https://github.com/search?q=cool+author%3Aoctocat&type=Discussions) correspond aux discussions avec le mot « cool » créé par @octocat. |
| | [**bootstrap in:body author:octocat**](https://github.com/search?q=bootstrap+in%3Abody+author%3Aoctocat&type=Discussions) correspond aux discussions créées par @octocat qui contiennent le mot « bootstrap » dans le corps. |

## Rechercher par commentaire

Le qualificateur `commenter` recherche les discussions qui contiennent un commentaire d’un certain utilisateur.

| Qualificateur | Exemple |
| :- | :- |
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:becca org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Abecca+org%3Agithub&type=Discussions) correspond aux discussions dans les référentiels appartenant à GitHub, qui contiennent le mot « github » et ont un commentaire par @becca.

## Rechercher par un utilisateur impliqué dans une discussion

Vous pouvez utiliser le qualificateur `involves` pour rechercher des discussions impliquant un certain utilisateur. Le qualificateur retourne des discussions qui ont été créées par un certain utilisateur, mentionnent l’utilisateur ou contiennent des commentaires de l’utilisateur. Le qualificateur `involves` est un OU logique entre les qualificateurs `author`, `mentions` et `commenter` pour un seul utilisateur.

| Qualificateur | Exemple |
| :- | :- |
| <code>involves:<em>USERNAME</em></code> | **[involves:becca involves:octocat](https://github.com/search?q=involves%3Abecca+involves%3Aoctocat&type=Discussions)** correspond à des discussions où @becca ou @octocat est impliqué.
| | [**NOT beta in:body involves:becca**](https://github.com/search?q=NOT+beta+in%3Abody+involves%3Abecca&type=Discussions) correspond aux discussions qui impliquent@becca et qui ne contiennent pas le mot « bêta » dans le corps.

## Rechercher par nombre de commentaires

Vous pouvez utiliser le qualificateur `comments` avec des qualificateurs supérieurs, inférieurs et des qualificateurs de portée pour rechercher par nombre de commentaires. Pour plus d’informations, consultez « [Présentation de la syntaxe des recherches](/github/searching-for-information-on-github/understanding-the-search-syntax) ».

| Qualificateur | Exemple |
| :- | :- |
| <code>comments:<em>n</em></code> | [**commentaires :&gt;100**](https://github.com/search?q=comments%3A%3E100&type=Discussions) correspond aux discussions avec plus de 100 commentaires.
| | [**commentaires :500..1000**](https://github.com/search?q=comments%3A500..1000&type=Discussions) correspond aux discussions avec entre 500 et 1 000 commentaires.

## Rechercher par date de création ou de dernière mise à jour de la discussion

Vous pouvez filtrer les discussions en fonction des heures de création ou de la dernière mise à jour de la discussion. Pour la création d’une discussion, vous pouvez utiliser le qualificateur `created` ; pour savoir quand une discussion a été mise à jour pour la dernière fois, utilisez le qualificateur `updated`.

Les deux qualificateurs prennent une date comme paramètre. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificateur | Exemple |
| :- | :- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:>2020-11-15**](https://github.com/search?q=created%3A%3E%3D2020-11-15&type=discussions) correspond aux discussions qui ont été créées après le 15 novembre 2020.
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2020-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2020-12-01&type=Discussions) correspond aux discussions avec le mot « bizarre » dans le corps, mises à jour après décembre 2020.

## Pour aller plus loin

- « [Tri des résultats de recherche](/search-github/getting-started-with-searching-on-github/sorting-search-results/) »
