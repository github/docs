---
title: Autorisation des applications GitHub
intro: 'Vous pouvez autoriser une {% data variables.product.prodname_github_app %} à permettre à une application de récupérer des informations sur votre compte {% data variables.product.prodname_dotcom %} et, dans certains cas, d’apporter des modifications sur {% data variables.product.prodname_dotcom %} en votre nom.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps
ms.openlocfilehash: 050f437f411919c4be488e61c032a8543a301e02
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104122'
---
Les applications tierces qui doivent vérifier votre identité {% data variables.product.prodname_dotcom %} ou interagir avec les données sur {% data variables.product.prodname_dotcom %} pour votre compte peuvent vous demander d’autoriser l’{% data variables.product.prodname_github_app %} pour cela. 

Quand vous autorisez l’{% data variables.product.prodname_github_app %}, veillez à ce qu’il s’agisse d’une application de confiance, à vérifier par qui elle a été développée et à passer en revue les types d’informations auxquels elle veut accéder.

Dans le cadre de l’autorisation, vous êtes invité à accorder à l’{% data variables.product.prodname_github_app %} les autorisations suivantes :
* **Vérifier votre identité {% data variables.product.prodname_dotcom %}**<br/>
  Quand elle est autorisée, l’{% data variables.product.prodname_github_app %} peut récupérer par programmation votre profil GitHub public ainsi que certains détails privés (tels que votre adresse e-mail) selon le niveau d’accès demandé.
* **Connaître les ressources auxquelles vous pouvez accéder**<br/>
  Quand elle est autorisée, l’{% data variables.product.prodname_github_app %} peut lire par programmation les ressources {% data variables.product.prodname_dotcom %} _privées_ auxquelles vous pouvez accéder (par exemple, des dépôts {% data variables.product.prodname_dotcom %}) et _où_ une installation de l’{% data variables.product.prodname_github_app %} est également présente. L’application peut utiliser ceci, par exemple, pour pouvoir vous montrer une liste de dépôts appropriée.
* **Agir en votre nom**<br/>
  L’application peut avoir besoin d’effectuer des tâches sur {% data variables.product.prodname_dotcom %} en votre nom, par exemple créer un problème ou commenter une demande de tirage (pull request). Cette capacité à agir en votre nom est limitée aux ressources {% data variables.product.prodname_dotcom %} auxquelles l’{% data variables.product.prodname_github_app %} _et_ vous-même avez accès. Toutefois, dans certains cas, l’application n’apportera jamais de modifications en votre nom.
  
## Dans quelles situations une {% data variables.product.prodname_github_app %} agit-elle en votre nom ?

Les situations dans lesquelles une {% data variables.product.prodname_github_app %} agit en votre nom varient selon l’objectif de l’{% data variables.product.prodname_github_app %} et le contexte dans lequel elle est utilisée. 

Par exemple, un environnement de développement intégré (IDE) peut utiliser une {% data variables.product.prodname_github_app %} pour interagir en votre nom afin de pousser (push) des modifications que vous avez créées avec l’IDE sur des dépôts sur {% data variables.product.prodname_dotcom %}.  L’{% data variables.product.prodname_github_app %} effectue cette opération à l’aide d’une [requête d’utilisateur à serveur](/get-started/quickstart/github-glossary#user-to-server-request).

Quand une {% data variables.product.prodname_github_app %} agit en votre nom de cette façon, l’action est identifiée sur GitHub à l’aide d’une icône spéciale avec un petit avatar de l’{% data variables.product.prodname_github_app %} superposé à votre propre avatar, comme illustré ci-dessous.

![Problème créé par une requête d’« utilisateur à serveur » à partir d’une {% data variables.product.prodname_github_app %}](/assets/images/help/apps/github-apps-new-issue.png)

## Dans quelle mesure une {% data variables.product.prodname_github_app %} peut-elle savoir à quelles ressources vous pouvez accéder et agir en votre nom ?

La mesure dans laquelle une {% data variables.product.prodname_github_app %} peut savoir à quelles ressources vous pouvez accéder et agir en votre nom quand vous l’avez autorisée est limitée par :

* Les organisations ou dépôts sur lesquels l’application est installée 
* Les autorisations demandées par l’application
* Votre accès aux ressources {% data variables.product.prodname_dotcom %}

Utilisons un exemple pour expliquer cela.

Alice, utilisatrice de {% data variables.product.prodname_dotcom %}, se connecte à une application web tierce, ExampleApp, avec son identité {% data variables.product.prodname_dotcom %}. Pendant ce processus, Alice autorise ExampleApp à effectuer des actions en son nom.

Toutefois, l’activité qu’ExampleApp est en mesure d’effectuer au nom d’Alice sur {% data variables.product.prodname_dotcom %} est limitée par : les dépôts sur lesquels ExampleApp est installée, les autorisations demandées par ExampleApp et l’accès d’Alice aux ressources {% data variables.product.prodname_dotcom %}. 

Ainsi, pour qu’ExampleApp puisse créer un problème au nom d’Alice dans un dépôt appelé Dépôt A, toutes les conditions suivantes doivent être remplies :

* L’{% data variables.product.prodname_github_app %} d’ExampleApp demande l’accès en écriture aux problèmes.
* Un utilisateur disposant d’un accès administrateur au Dépôt A doit avoir installé l’{% data variables.product.prodname_github_app %} d’ExampleApp sur le Dépôt A.
* Alice doit avoir l’autorisation de lecture sur le Dépôt A. Pour obtenir des informations sur les autorisations nécessaires pour effectuer différentes activités, consultez « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».
