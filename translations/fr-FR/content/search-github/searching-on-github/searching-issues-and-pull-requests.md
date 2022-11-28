---
title: Recherche de problèmes et de demandes de tirage
intro: 'Vous pouvez rechercher des problèmes et des demandes de tirage (pull request) sur {% data variables.product.product_name %} et restreindre les résultats en utilisant ces qualificateurs de recherche dans n’importe quelle combinaison.'
redirect_from:
  - /articles/searching-issues
  - /articles/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Search issues & PRs
ms.openlocfilehash: 8565d2d31c66291114da8ab4a95312a568d39ae3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106460'
---
Vous pouvez rechercher des problèmes et des demandes de tirage (pull requests) de manière globale dans {% data variables.product.product_name %}, ou rechercher des problèmes et des demandes de tirage au sein d’une organisation particulière. Pour plus d’informations, consultez « [À propos de la recherche sur {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github) ».

{% tip %}

**Conseils :** {% ifversion ghes or ghae %}
  - Cet article contient des exemples de recherches sur le site web {% data variables.product.prodname_dotcom %}.com, mais vous pouvez utiliser les mêmes filtres de recherche sur {% data variables.location.product_location %}.{% endif %}
  - Pour obtenir la liste des syntaxes de recherche que vous pouvez ajouter à n’importe quel qualificateur de recherche afin d’améliorer vos résultats, consultez « [Présentation de la syntaxe de recherche](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax) ».
  - Utilisez des guillemets autour des termes de recherche composés de plusieurs mots. Par exemple, pour rechercher les problèmes qui ont l’étiquette « In progress », vous devez rechercher `label:"in progress"`. La recherche ne respecte pas la casse.
  - {% data reusables.search.search_issues_and_pull_requests_shortcut %}

  {% endtip %}

## Rechercher uniquement les problèmes ou les demandes de tirage

Par défaut, la recherche dans {% data variables.product.product_name %} retourne à la fois les problèmes et les demandes de tirage (pull requests). Toutefois, vous pouvez restreindre les résultats de la recherche aux problèmes ou aux demandes de tirage à l’aide du qualificateur `type` ou `is`.

| Qualificateur  | Exemple
| ------------- | -------------
| `type:pr` | [**cat type:pr**](https://github.com/search?q=cat+type%3Apr&type=Issues) permet de rechercher les demandes de tirage comportant le mot « cat ».
| `type:issue` | [**github commenter:defunkt type:issue**](https://github.com/search?q=github+commenter%3Adefunkt+type%3Aissue&type=Issues) permet de rechercher les problèmes qui contiennent le mot « github » et qui ont fait l’objet d’un commentaire par @defunkt.
| `is:pr` | [**event is:pr**](https://github.com/search?utf8=%E2%9C%93&q=event+is%3Apr&type=) permet de rechercher les demandes de tirage comportant le mot « event ».
| `is:issue` | [**is:issue label:bug is:closed**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+label%3Abug+is%3Aclosed&type=) permet de rechercher les problèmes fermés comportant l’étiquette « bug ».

## Rechercher en fonction du titre, du corps ou des commentaires

Avec le qualificateur `in`, vous pouvez restreindre votre recherche au titre, au corps, aux commentaires ou à une combinaison de ces éléments. Quand vous omettez ce qualificateur, la recherche porte à la fois sur le titre, le corps et les commentaires.

| Qualificateur     | Exemple
| ------------- | -------------
| `in:title` | [**warning in:title**](https://github.com/search?q=warning+in%3Atitle&type=Issues) permet de rechercher les problèmes dont le titre comporte « warning ».
| `in:body` | [**error in:title,body**](https://github.com/search?q=error+in%3Atitle%2Cbody&type=Issues) permet de rechercher les problèmes dont le titre ou le corps comporte le terme « error ».
| `in:comments` | [**shipit in:comments**](https://github.com/search?q=shipit+in%3Acomment&type=Issues) permet de rechercher les problèmes où « shipit » est mentionné dans les commentaires.

## Rechercher dans les dépôts d’un utilisateur ou d’une organisation

Pour rechercher des problèmes et des demandes de tirage dans tous les dépôts appartenant à un utilisateur ou une organisation spécifique, vous pouvez utiliser le qualificateur `user` ou `org`. Pour rechercher des problèmes et des demandes de tirage dans un dépôt spécifique, vous pouvez utiliser le qualificateur `repo`.

{% data reusables.pull_requests.large-search-workaround %}

| Qualificateur        | Exemple
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt ubuntu**](https://github.com/search?q=user%3Adefunkt+ubuntu&type=Issues) permet de rechercher les problèmes comportant le mot « ubuntu » dans les dépôts appartenant à @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Issues&utf8=%E2%9C%93) permet de rechercher des problèmes dans les dépôts appartenant à l’organisation GitHub.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway created:<2012-03-01**](https://github.com/search?q=repo%3Amozilla%2Fshumway+created%3A%3C2012-03-01&type=Issues) permet de rechercher les tickets du projet shumway de @mozilla créés avant mars 2012.

## Rechercher en fonction de l’état ouvert ou fermé

Vous pouvez filtrer les tickets et les demandes de tirage en fonction de leur état, ouvert ou fermé, à l’aide du qualificateur `state` ou `is`.

| Qualificateur        | Exemple
| ------------- | -------------
| `state:open` | [**libraries state:open mentions:vmg**](https://github.com/search?utf8=%E2%9C%93&q=libraries+state%3Aopen+mentions%3Avmg&type=Issues) permet de rechercher les problèmes ouverts qui mentionnent @vmg avec le mot « libraries ».
| `state:closed` | [**design state:closed in:body**](https://github.com/search?utf8=%E2%9C%93&q=design+state%3Aclosed+in%3Abody&type=Issues) permet de rechercher les problèmes fermés dont le corps comprend le mot « design ».
| `is:open` | [**performance is:open is:issue**](https://github.com/search?q=performance+is%3Aopen+is%3Aissue&type=Issues) permet de rechercher les problèmes ouverts comportant le mot « performance ».
| `is:closed` | [**android is:closed**](https://github.com/search?utf8=%E2%9C%93&q=android+is%3Aclosed&type=) permet de rechercher les tickets fermés et les demandes de tirage comportant le mot « android ».

{% ifversion issue-close-reasons %}
## Rechercher par la raison pour laquelle un problème a été fermé

Vous pouvez filtrer les problèmes en fonction de la raison donnée lorsque le problème a été fermé, à l’aide du qualificateur `reason`.

| Qualificateur        | Exemple
| ------------- | -------------
| `reason:completed` | [**libraries is:closed reason:completed**](https://github.com/search?q=libraries+is%3Aclosed+reason%3Acompleted&type=Issues) permet de rechercher les problèmes comportant le mot « libraries », qui ont été fermés avec l’état « closed ».
| `reason:"not planned"` | [**libraries is:closed reason:"not planned"**](https://github.com/search?q=libraries+is%3Aclosed+reason%3A%22not+planned%22&type=Issues) correspond aux problèmes liés au mot « bibliothèques » fermées avec l’état « non planifié ».
 
{% endif %}

## Filtrer en fonction de la visibilité du dépôt

Vous pouvez effectuer un filtrage en fonction de la visibilité du dépôt contenant les problèmes et les demandes de tirage à l’aide du qualificateur `is`. Pour plus d’informations, consultez « [À propos des dépôts](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility) ».

| Qualificateur | Exemple | ------------- | ------------- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Issues) permet de rechercher les problèmes et les demandes de tirage dans les dépôts publics.{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Issues) permet de rechercher les problèmes et les demandes de tirage dans les dépôts internes.{% endif %} | `is:private` | [**is:private cupcake**](https://github.com/search?q=is%3Aprivate+cupcake&type=Issues) permet de rechercher les tickets et les demandes de tirage qui contiennent le mot « cupcake » dans les dépôts privés auxquels vous avez accès.

## Rechercher en fonction de l’auteur

Le qualificateur `author` permet de rechercher les problèmes et les demandes de tirage créés par un utilisateur ou un compte d’intégration spécifique.

| Qualificateur     | Exemple
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**cool author:gjtorikian**](https://github.com/search?q=cool+author%3Agjtorikian&type=Issues) permet de rechercher les tickets et les demandes de tirage comportant le mot « cool », et qui ont été créés par @gjtorikian.
| | [**bootstrap in:body author:mdo**](https://github.com/search?q=bootstrap+in%3Abody+author%3Amdo&type=Issues) permet de rechercher les problèmes écrits par @mdo et dont le corps contient le mot « bootstrap ».
| <code>author:app/<em>USERNAME</em></code> | [**author:app/robot**](https://github.com/search?q=author%3Aapp%2Frobot&type=Issues) permet de rechercher les problèmes créés par le compte d’intégration nommé « robot ».

## Rechercher en fonction de la personne responsable

Le qualificateur `assignee` permet de rechercher les problèmes et les demandes de tirage affectés à un certain utilisateur. Vous ne pouvez pas rechercher de problèmes et de demandes de tirage en fonction d’une personne responsable _sans la spécifier_. Toutefois, vous pouvez rechercher les [problèmes et les demandes de tirage qui ne sont associés à aucune personne responsable](#search-by-missing-metadata).

| Qualificateur     | Exemple
| ------------- | -------------
| <code>assignee:<em>USERNAME</em></code> | [**assignee:vmg repo:libgit2/libgit2**](https://github.com/search?utf8=%E2%9C%93&q=assignee%3Avmg+repo%3Alibgit2%2Flibgit2&type=Issues) permet de rechercher les problèmes et les demandes de tirage dans le projet libgit2 de libgit2, qui sont affectés à @vmg.

## Rechercher en fonction de la mention

Le qualificateur `mentions` permet de détecter les problèmes qui mentionnent un utilisateur spécifique. Pour plus d’informations, consultez « [Mention de personnes et d’équipes](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) ».

| Qualificateur     | Exemple
| ------------- | -------------
| <code>mentions:<em>USERNAME</em></code> | [ **`resque mentions:defunkt`**](https://github.com/search?q=resque+mentions%3Adefunkt&type=Issues) permet de rechercher les problèmes comportant le mot « resque », qui mentionnent @defunkt.

## Rechercher en fonction de la mention d’une équipe

Dans le cadre des organisations et des équipes auxquelles vous appartenez, vous pouvez utiliser le qualificateur `team` afin de rechercher les problèmes ou les demandes de tirage qui comportent @mention pour une équipe spécifique. Remplacez ces exemples de noms par le nom de votre organisation et celui de votre équipe pour effectuer une recherche.

| Qualificateur        | Exemple
| ------------- | -------------
| <code>team:<em>ORGNAME/TEAMNAME</em></code> | **`team:jekyll/owners`** permet de rechercher les problèmes où l’équipe `@jekyll/owners` est mentionnée.
| | **team:myorg/ops is:open is:pr** permet de rechercher les demandes de tirage ouvertes où l’équipe `@myorg/ops` est mentionnée.

## Rechercher en fonction de l’auteur du commentaire

Le qualificateur `commenter` permet de trouver les problèmes qui contiennent le commentaire d’un utilisateur spécifique.

| Qualificateur        | Exemple
| ------------- | -------------
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:defunkt org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Adefunkt+org%3Agithub&type=Issues) permet de rechercher les problèmes dans les dépôts appartenant à GitHub, qui contiennent le mot « github » et qui comportent un commentaire émis par @defunkt.

## Rechercher en fonction d’un utilisateur impliqué dans un problème ou une demande de tirage

Vous pouvez utiliser le qualificateur `involves` pour rechercher les problèmes qui impliquent d’une manière ou d’une autre un utilisateur spécifique. Le qualificateur `involves` est un OU logique entre les qualificateurs `author`, `assignee`, `mentions` et `commenter` pour un seul utilisateur. En d’autres termes, ce qualificateur permet de rechercher les problèmes et les demandes de tirage qui ont été créés par un utilisateur spécifique, qui lui sont affectés, qui le mentionnent ou qui ont fait l’objet de commentaires de la part de cet utilisateur.

| Qualificateur        | Exemple
| ------------- | -------------
| <code>involves:<em>USERNAME</em></code> | **[involves:defunkt involves:jlord](https://github.com/search?q=involves%3Adefunkt+involves%3Ajlord&type=Issues)** permet de rechercher les problèmes dans lesquels @defunkt ou @jlord sont impliqués.
| | [**NOT bootstrap in:body involves:mdo**](https://github.com/search?q=NOT+bootstrap+in%3Abody+involves%3Amdo&type=Issues) permet de rechercher les problèmes qui impliquent @mdo, et dont le corps ne contient pas le mot « bootstrap ».

## Rechercher les problèmes et les demandes de tirage liés
Vous pouvez restreindre les résultats pour inclure uniquement les problèmes liés à une demande de tirage par une référence de fermeture, ou les demandes de tirage liées à un problème que la demande de tirage peut fermer.

| Qualificateur | Exemple |
| ------------- | ------------- |
| `linked:pr` | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+linked%3Apr) permet de rechercher les problèmes ouverts dans le dépôt `desktop/desktop`, qui sont liés à une demande de tirage par une référence de fermeture. |
| `linked:issue` | [**repo:desktop/desktop is:closed linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aclosed+linked%3Aissue) permet de rechercher les demandes de tirage fermées dans le dépôt `desktop/desktop`, qui étaient liées à un problème que la demande de tirage a pu fermer. |
| `-linked:pr` | [**repo:desktop/desktop is:open -linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Apr) permet de rechercher les problèmes ouverts dans le dépôt `desktop/desktop`, qui ne sont pas liés à une demande de tirage par une référence de fermeture. |
| `-linked:issue` | [**repo:desktop/desktop is:open -linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Aissue) permet de rechercher les demandes de tirage ouvertes dans le dépôt `desktop/desktop`, qui ne sont pas liées à un problème que la demande de tirage peut fermer. |

## Rechercher en fonction d’une étiquette

Vous pouvez restreindre les résultats en fonction des étiquettes, à l’aide du qualificateur `label`. Dans la mesure où les problèmes peuvent avoir plusieurs étiquettes, vous pouvez lister un qualificateur distinct pour chaque problème.

| Qualificateur        | Exemple
| ------------- | -------------
| <code>label:<em>LABEL</em></code> | [**label:"help wanted" language:ruby**](https://github.com/search?utf8=%E2%9C%93&q=label%3A%22help+wanted%22+language%3Aruby&type=Issues) permet de rechercher les problèmes ayant l’étiquette « help wanted » dans les dépôts Ruby.
|  | [**broken in:body -label:bug label:priority**](https://github.com/search?q=broken+in%3Abody+-label%3Abug+label%3Apriority&type=Issues) permet de rechercher les problèmes dont le corps comporte le mot « broken », qui n’ont pas l’étiquette « bug », mais qui *ont* l’étiquette « priority ».
| | [**label:bug label:resolved**](https://github.com/search?l=&q=label%3Abug+label%3Aresolved&type=Issues) permet de rechercher les problèmes ayant les étiquettes « bug » et « resolved ».
| | [**label:bug,resolved**](https://github.com/search?q=label%3Abug%2Cresolved&type=Issues) permet de rechercher les problèmes ayant l’étiquette « bug » ou l’étiquette « resolved ».

## Rechercher en fonction du jalon

Le qualificateur `milestone` détecte les problèmes ou les demandes de tirage qui font partie d’un [jalon](/articles/about-milestones) dans un dépôt.

| Qualificateur        | Exemple
| ------------- | -------------
| <code>milestone:<em>MILESTONE</em></code> | [**milestone:"overhaul"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22overhaul%22&type=Issues) permet de rechercher les problèmes qui se trouvent dans un jalon nommé « overhaul ».
| | [**milestone:"bug fix"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22bug+fix%22&type=Issues) permet de rechercher les problèmes qui se trouvent dans un jalon nommé « bug fix ».

## Rechercher en fonction du tableau de projet

Vous pouvez utiliser le qualificateur `project` pour rechercher les problèmes associés à un [tableau de projet](/articles/about-project-boards/) spécifique dans un dépôt ou une organisation. Vous devez rechercher les tableaux de projet en fonction du numéro de tableau de projet. Vous trouverez le numéro de tableau de projet à la fin de l’URL d’un tableau de projet.

| Qualificateur        | Exemple
| ------------- | -------------
| <code>project:<em>PROJECT_BOARD</em></code> | **project:github/57** permet de rechercher les problèmes appartenant à GitHub et associés au tableau de bord de projet 57 de l’organisation.
| <code>project:<em>REPOSITORY/PROJECT_BOARD</em></code> | **project:github/linguist/1** permet de rechercher les problèmes associés au tableau de projet 1 dans le dépôt linguist de @github.

## Rechercher en fonction de l’état de commit

Vous pouvez filtrer les demandes de tirage en fonction de l’état des commits. Cela est particulièrement utile si vous utilisez l’[API d’état](/rest/reference/commits#commit-statuses) ou un service CI.

| Qualificateur        | Exemple
| ------------- | -------------
| `status:pending` | [**language:go status:pending**](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago+status%3Apending) permet de rechercher les demandes de tirage ouvertes dans les dépôts Go à l’état d’attente.
| `status:success` | [**is:open status:success finally in:body**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+status%3Asuccess+finally+in%3Abody&type=Issues) permet de rechercher les demandes de tirage ouvertes dont le corps contient le mot « finally », et qui sont à l’état de réussite.
| `status:failure` | [**created:2015-05-01..2015-05-30 status:failure**](https://github.com/search?utf8=%E2%9C%93&q=created%3A2015-05-01..2015-05-30+status%3Afailure&type=Issues) permet de rechercher les demandes de tirage ouvertes en mai 2015, et qui sont à l’état d’échec.

## Rechercher en fonction du SHA de commit

Si vous connaissez le code de hachage SHA spécifique à un commit, vous pouvez l’utiliser pour rechercher les demandes de tirage qui le contiennent. La syntaxe du code de hachage SHA doit comporter au moins sept caractères.

| Qualificateur        | Exemple
| ------------- | -------------
| <code><em>SHA</em></code> | [**e1109ab**](https://github.com/search?q=e1109ab&type=Issues) permet de rechercher les demandes de tirage comportant un SHA de commit qui commence par `e1109ab`.
| | [**0eff326d6213c is:merged**](https://github.com/search?q=0eff326d+is%3Amerged&type=Issues) permet de rechercher les demandes de tirage fusionnées comportant un SHA de commit qui commence par `0eff326d6213c`.

## Rechercher en fonction du nom de branche

Vous pouvez filtrer les demandes de tirage en fonction de la branche dont elles proviennent (la branche « head »), ou de la branche dans laquelle elles sont fusionnées (la branche « base »).

| Qualificateur        | Exemple
| ------------- | -------------
| <code>head:<em>HEAD_BRANCH</em></code> | [**head:change is:closed is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=head%3Achange+is%3Aclosed+is%3Aunmerged) permet de rechercher les demandes de tirage ouvertes à partir des noms de branches commençant par le mot « change », et qui sont fermées.
| <code>base:<em>BASE_BRANCH</em></code> | [**base:gh-pages**](https://github.com/search?utf8=%E2%9C%93&q=base%3Agh-pages) permet de rechercher les demandes de tirage fusionnées dans la branche `gh-pages`.

## Rechercher en fonction du langage

Avec le qualificateur `language`, vous pouvez rechercher des problèmes et des demandes de tirage au sein des dépôts écrits dans un langage spécifique.

| Qualificateur        | Exemple
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**language:ruby state:open**](https://github.com/search?q=language%3Aruby+state%3Aopen&type=Issues) permet de rechercher les problèmes ouverts dans les dépôts Ruby.

## Rechercher en fonction du nombre de commentaires

Vous pouvez utiliser le qualificateur `comments` avec les [qualificateurs de supériorité, d’infériorité et de plage](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax) pour effectuer une recherche en fonction du nombre de commentaires.

| Qualificateur        | Exemple
| ------------- | -------------
| <code>comments:<em>n</em></code> | [**state:closed comments:&gt;100**](https://github.com/search?q=state%3Aclosed+comments%3A%3E100&type=Issues) permet de rechercher les problèmes fermés ayant suscité plus de 100 commentaires.
| | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Issues) permet de rechercher les problèmes ayant suscité entre 500 et 1 000 commentaires.

## Rechercher en fonction du nombre d’interactions

Vous pouvez filtrer les problèmes et les demandes de tirage en fonction du nombre d’interactions suscitées en utilisant le qualificateur `interactions` ainsi que les [qualificateurs de supériorité, d’infériorité et de plage](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax). Le nombre d’interactions correspond au nombre de réactions et de commentaires suscités par un problème ou une demande de tirage.

| Qualificateur        | Exemple
| ------------- | -------------
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000**](https://github.com/search?q=interactions%3A%3E2000) permet de rechercher les demandes de tirage ou les problèmes ayant suscité plus de 2 000 interactions.
| | [**interactions:500..1000**](https://github.com/search?q=interactions%3A500..1000) permet de rechercher les demandes de tirage ou les problèmes ayant suscité entre 500 et 1 000 interactions.

## Rechercher en fonction du nombre de réactions

Vous pouvez filtrer les problèmes et les demandes de tirage en fonction du nombre de réactions suscitées en utilisant le qualificateur `reactions` ainsi que les [qualificateurs de supériorité, d’infériorité et de plage](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Qualificateur        | Exemple
| ------------- | -------------
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E1000&type=Issues) permet de rechercher les problèmes ayant suscité plus de 1 000 réactions.
| | [**reactions:500..1000**](https://github.com/search?q=reactions%3A500..1000) permet de rechercher les problèmes ayant suscité entre 500 et 1 000 réactions.

## Rechercher des brouillons de demandes de tirage
Vous pouvez effectuer un filtrage en fonction des brouillons de demandes de tirage. Pour plus d’informations, consultez « [À propos des demandes de tirage (pull requests)](/articles/about-pull-requests#draft-pull-requests) ».

| Qualificateur        | Exemple
| ------------- | -------------
| `draft:true` | [**draft:true**](https://github.com/search?q=draft%3Atrue) permet de rechercher les brouillons de demandes de tirage.
| `draft:false` | [**draft:false**](https://github.com/search?q=draft%3Afalse) permet de rechercher les demandes de tirage prêtes pour une revue.

## Rechercher en fonction de l’état de revue et du réviseur d’une demande de tirage

Vous pouvez filtrer les demandes de tirage en fonction de leur [état de revue](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) (_aucun_, _obligatoire_, _approuvé_ ou _changements demandés_), en fonction du réviseur et en fonction du réviseur demandé.

| Qualificateur        | Exemple
| ------------- | -------------
| `review:none` | [**type:pr review:none**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Anone&type=Issues) permet de rechercher les demandes de tirage qui n’ont pas été revues.
| `review:required` | [**type:pr review:required**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Arequired&type=Issues) permet de rechercher les demandes de tirage qui nécessitent une revue avant de pouvoir être fusionnées.
| `review:approved` | [**type:pr review:approved**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Aapproved&type=Issues) permet de rechercher les demandes de tirage approuvées par un réviseur.
| `review:changes_requested` | [**type:pr review:changes_requested**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Achanges_requested&type=Issues) permet de rechercher les demandes de tirage dans lesquelles un réviseur a demandé des changements.
| <code>reviewed-by:<em>USERNAME</em></code> | [**type:pr reviewed-by:gjtorikian**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+reviewed-by%3Agjtorikian&type=Issues) permet de rechercher les demandes de tirage revues par une personne en particulier.
| <code>review-requested:<em>USERNAME</em></code> | [**type:pr review-requested:benbalter**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review-requested%3Abenbalter&type=Issues) permet de rechercher les demandes de tirage où une personne spécifique est demandée pour la revue. Les réviseurs demandés ne sont plus listés dans les résultats de la recherche une fois qu’ils ont effectué la revue d’une demande de tirage. Si la personne demandée fait partie d’une équipe sollicitée pour la revue, les demandes de revue de cette équipe apparaissent également dans les résultats de la recherche.
| <code>user-review-requested:@me</code> | [**type:pr user-review-requested:@me** ](https://github.com/search?q=is%3Apr+user-review-requested%3A%40me+) permet de rechercher les demandes de tirage dont vous êtes directement invité à effectuer la revue.
| <code>team-review-requested:<em>TEAMNAME</em></code> | [**type:pr team-review-requested:github/docs**](https://github.com/search?q=type%3Apr+team-review-requested%3Agithub%2Fdocs&type=pullrequests) permet de rechercher les demandes de tirage ayant des demandes de revue de la part de l’équipe `github/docs`. Les réviseurs demandés ne sont plus listés dans les résultats de la recherche une fois qu’ils ont effectué la revue d’une demande de tirage.

## Rechercher en fonction de la date/heure de création ou de dernière mise à jour d’un problème ou d’une demande de tirage

Vous pouvez filtrer les problèmes en fonction de leur date/heure de création ou de dernière mise à jour. Pour la création d’un problème, vous pouvez utiliser le qualificateur `created`. Pour savoir quand un problème a été mis à jour pour la dernière fois, vous devez utiliser le qualificateur `updated`.

Les deux acceptent une date en tant que paramètre. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificateur        | Exemple
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**language:c# created:<2011-01-01 state:open**](https://github.com/search?q=language%3Ac%23+created%3A%3C2011-01-01+state%3Aopen&type=Issues) permet de rechercher les problèmes ouverts, créés avant 2011, dans les dépôts écrits en C#.
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2013-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2013-02-01&type=Issues) permet de rechercher les problèmes dont le corps comporte le mot « weird », et qui ont été mis à jour après février 2013.

## Rechercher en fonction de la date/heure de fermeture d’un problème ou d’une demande de tirage

Vous pouvez filtrer les problèmes et les demandes de tirage en fonction du moment où ils ont été fermés, à l’aide du qualificateur `closed`.

Ce qualificateur accepte une date en tant que paramètre. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificateur        | Exemple
| ------------- | -------------
| <code>closed:<em>YYYY-MM-DD</em></code> | [**language:swift closed:>2014-06-11**](https://github.com/search?q=language%3Aswift+closed%3A%3E2014-06-11&type=Issues) permet de rechercher les problèmes et les demandes de tirage en Swift, qui ont été fermés après le 11 juin 2014.
| | [**data in:body closed:<2012-10-01**](https://github.com/search?utf8=%E2%9C%93&q=data+in%3Abody+closed%3A%3C2012-10-01+&type=Issues) permet de rechercher les problèmes et les demandes de tirage dont le corps comprend le mot « data », et qui ont été fermés avant octobre 2012.

## Rechercher en fonction du moment où une demande de tirage a été fusionnée

Vous pouvez filtrer les demandes de tirage en fonction du moment où elles ont été fusionnées, à l’aide du qualificateur `merged`.

Ce qualificateur accepte une date en tant que paramètre. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificateur        | Exemple
| ------------- | -------------
| <code>merged:<em>YYYY-MM-DD</em></code> | [ **`language:javascript merged:<2011-01-01`**](https://github.com/search?q=language%3Ajavascript+merged%3A%3C2011-01-01+&type=Issues) permet de rechercher les demandes de tirage dans les dépôts JavaScript, qui ont été fusionnées avant 2011.
| | [**fast in:title language:ruby merged:>=2014-05-01**](https://github.com/search?q=fast+in%3Atitle+language%3Aruby+merged%3A%3E%3D2014-05-01+&type=Issues) permet de rechercher les demandes de tirage en Ruby comportant le mot « fast » dans le titre, et qui ont été fusionnées après mai 2014.

## Rechercher en fonction de l’état fusionné ou non fusionné d’une demande de tirage

Vous pouvez filtrer les demandes de tirage selon qu’elles sont fusionnées ou non, à l’aide du qualificateur `is`.

| Qualificateur        | Exemple
| ------------- | -------------
| `is:merged` | [**bug is:pr is:merged**](https://github.com/search?utf8=%E2%9C%93&q=bugfix+is%3Apr+is%3Amerged&type=) permet de rechercher les demandes de tirage fusionnées comportant le mot « bug ».
| `is:unmerged` | [**error is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=error+is%3Aunmerged&type=) permet de rechercher les demandes de tirage comportant le mot « error », et qui sont ouvertes ou fermées sans avoir été fusionnées.

## Rechercher en fonction de l’état archivé ou non archivé d’un dépôt

Le qualificateur `archived` filtre vos résultats selon qu’un problème ou une demande de tirage se trouve dans un dépôt archivé.

| Qualificateur     | Exemple
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?q=archived%3Atrue+GNOME&type=) permet de rechercher les problèmes et les demandes de tirage qui contiennent le mot « GNOME » dans les dépôts archivés auxquels vous avez accès.
| `archived:false` | [**archived:false GNOME**](https://github.com/search?q=archived%3Afalse+GNOME&type=) permet de rechercher les problèmes et les demandes de tirage qui contiennent le mot « GNOME » dans les dépôts non archivés auxquels vous avez accès.

## Rechercher en fonction de l’état verrouillé ou non verrouillé d’une conversation

Vous pouvez rechercher un problème ou une demande de tirage ayant une conversation verrouillée à l’aide du qualificateur `is`. Pour plus d’informations, consultez « [Verrouillage des conversations](/communities/moderating-comments-and-conversations/locking-conversations) ».

| Qualificateur        | Exemple
| ------------- | -------------
| `is:locked` | [**code of conduct is:locked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Alocked+is%3Aissue+archived%3Afalse) permet de rechercher les problèmes ou les demandes de tirage qui comportent les mots « code of conduct » et qui ont une conversation verrouillée dans un dépôt qui n’est pas archivé.
| `is:unlocked` | [**code of conduct is:unlocked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Aunlocked+archived%3Afalse) permet de rechercher les problèmes ou les demandes de tirage qui comportent les mots « code of conduct » et qui ont une conversation déverrouillée dans un dépôt qui n’est pas archivé.

## Rechercher en fonction de l’absence de métadonnées

Vous pouvez restreindre la recherche aux problèmes et aux demandes de tirage pour lesquels il manque certaines métadonnées, à l’aide du qualificateur `no`. Ces métadonnées incluent les éléments suivants :

* Étiquettes
* Étapes majeures
* Personnes responsables
* Projets

| Qualificateur        | Exemple
| ------------- | -------------
| `no:label` | [**priority no:label**](https://github.com/search?q=priority+no%3Alabel&type=Issues) permet de rechercher les problèmes et les demandes de tirage comportant le mot « priority », et qui n’ont pas d’étiquettes.
| `no:milestone` | [**sprint no:milestone type:issue**](https://github.com/search?q=sprint+no%3Amilestone+type%3Aissue&type=Issues) permet de rechercher les problèmes non associés à un jalon contenant le mot « sprint ».
| `no:assignee` | [**important no:assignee language:java type:issue**](https://github.com/search?q=important+no%3Aassignee+language%3Ajava+type%3Aissue&type=Issues) permet de rechercher les problèmes non associés à une personne responsable, qui contiennent le mot « important » et qui se trouvent dans les dépôts Java.
| `no:project` | [**build no:project**](https://github.com/search?utf8=%E2%9C%93&q=build+no%3Aproject&type=Issues) permet de rechercher les problèmes non associés à un tableau de bord de projet, et qui contiennent le mot « build ».

## Pour aller plus loin

- « [Tri des résultats de recherche](/search-github/getting-started-with-searching-on-github/sorting-search-results/) »
