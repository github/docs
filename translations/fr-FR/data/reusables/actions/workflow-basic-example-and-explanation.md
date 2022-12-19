---
ms.openlocfilehash: 53dbd22ad351ec7a1abc92107b366ecd8c71a3a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147064537"
---
## Créer un exemple de workflow

{% data variables.product.prodname_actions %} utilise la syntaxe YAML pour définir le workflow.  Chaque workflow est stocké en tant que fichier YAML distinct dans votre référentiel de code, dans un répertoire appelé `.github/workflows`.

Vous pouvez créer un exemple de workflow dans votre dépôt qui déclenche automatiquement une série de commandes chaque fois que du code est poussé (push). Dans ce workflow, {% data variables.product.prodname_actions %} extrait le code envoyé, installe le framework de test [bats](https://www.npmjs.com/package/bats) et exécute une commande de base pour générer la version de bats : `bats -v`.

1. Dans votre dépôt, créez le répertoire `.github/workflows/` pour stocker vos fichiers de workflow.
1. Dans le répertoire `.github/workflows/`, créez un nouveau fichier appelé `learn-github-actions.yml` et ajoutez le code suivant.

   ```yaml
   name: learn-github-actions
   on: [push]
   jobs:
     check-bats-version:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: '14'
         - run: npm install -g bats
         - run: bats -v
   ```
1. Validez ces modifications et poussez-les vers votre dépôt {% data variables.product.prodname_dotcom %}.

Votre nouveau fichier de workflow {% data variables.product.prodname_actions %} est maintenant installé dans votre dépôt et s’exécute automatiquement chaque fois que quelqu’un pousse (push) une modification vers le dépôt. Pour afficher les détails sur l’historique d’exécution d’un workflow, consultez « [Affichage de l’activité pour une exécution de workflow](#viewing-the-activity-for-a-workflow-run) ».

## Présentation du fichier de workflow

Pour vous aider à comprendre comment la syntaxe YAML est utilisée pour créer un fichier de workflow, cette section explique chaque ligne de l’exemple d’introduction :

<table>
<tr>
<td>

  ```yaml
  name: learn-github-actions
  ```
</td>
<td>
  <em>Facultatif</em> - Nom du workflow tel qu’il apparaît sous l’onglet Actions du dépôt {% data variables.product.prodname_dotcom %}.
</td>
</tr>
<tr>
<td>

  ```yaml
  on: [push]
  ```
</td>
<td>
Spécifie le déclencheur de ce workflow. Cet exemple utilise l’événement <code>push</code>, de sorte qu’une exécution de workflow est déclenchée chaque fois que quelqu’un pousse (push) une modification vers le référentiel ou fusionne une demande de tirage (pull request).  Elle est déclenchée par un push vers chaque branche. Pour obtenir des exemples de syntaxe qui s’exécutent uniquement sur des push vers des branches, des chemins ou des étiquettes spécifiques, consultez <a href="/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">« Syntaxe de workflow pour {% data variables.product.prodname_actions %} ».</a>
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
Regroupe tous les travaux qui s’exécutent dans le workflow <code>learn-github-actions</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
Définit un travail nommé <code>check-bats-version</code>. Les clés enfants définissent les propriétés du travail.
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
Configure le travail à exécuter sur la dernière version d’un exécuteur Ubuntu Linux. Cela signifie que le travail s’exécutera sur une nouvelle machine virtuelle hébergée par GitHub. Pour obtenir des exemples de syntaxe utilisant d’autres exécuteurs, consultez <a href="/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">« Syntaxe de workflow pour {% data variables.product.prodname_actions %} ».</a>
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
Regroupe toutes les étapes qui s’exécutent dans le travail <code>check-bats-version</code>. Chaque élément imbriqué sous cette section est une action ou un script d’interpréteur de commandes distinct.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-checkout %}
  ```
</td>
<td>
Le mot clé <code>uses</code> spécifie que cette étape exécute la version <code>v3</code> de l’action <code>actions/checkout</code>. Il s’agit d’une action qui extrait votre dépôt sur l’exécuteur, ce qui vous permet d’exécuter des scripts ou d’autres actions sur votre code (telles que des outils de génération et de test). Vous devez utiliser l’action d’extraction chaque fois que votre workflow s’exécutera sur le code du dépôt.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
  ```
</td>
<td>
Cette étape utilise l’action <code>{% data reusables.actions.action-setup-node %}</code> pour installer la version spécifiée de Node.js (cet exemple utilise v14). Cela place les deux commandes <code>node</code> et <code>npm</code> dans votre <code>PATH</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: npm install -g bats
  ```
</td>
<td>
Le mot clé <code>run</code> indique au travail d’exécuter une commande sur l’exécuteur. Dans ce cas, vous utilisez <code>npm</code> pour installer le package de test logiciel <code>bats</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: bats -v
  ```
</td>
<td>
Enfin, vous allez exécuter la commande <code>bats</code> avec un paramètre qui génère la version logicielle.
</td>
</tr>
</table>

### Visualisation du fichier de workflow

Dans ce diagramme, vous pouvez voir le fichier de workflow que vous venez de créer et comment les composants {% data variables.product.prodname_actions %} sont organisés dans une hiérarchie. Chaque étape exécute une action ou un script d’interpréteur de commandes unique. Les étapes 1 et 2 exécutent des actions, tandis que les étapes 3 et 4 exécutent des scripts d’interpréteur de commandes. Pour trouver d’autres actions prédéfinies pour vos workflows, consultez « [Recherche et personnalisation d’actions](/actions/learn-github-actions/finding-and-customizing-actions) ».

![Vue d’ensemble du workflow](/assets/images/help/images/overview-actions-event.png)

## Affichage de l’activité pour une exécution de workflow

Lorsque votre workflow est déclenché, une _exécution de workflow_ est créée et exécute le workflow. Une fois l’exécution de votre workflow démarrée, vous pouvez voir un graphe de visualisation de la progression de l’exécution, ainsi que l’activité de chaque étape sur {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
1. Sous le nom de votre dépôt, cliquez sur **Actions**.

   ![Accéder au dépôt](/assets/images/help/images/learn-github-actions-repository.png)
1. Dans la barre latérale gauche, cliquez sur le workflow que vous souhaitez afficher.

   ![Capture d’écran des résultats du workflow](/assets/images/help/images/learn-github-actions-workflow.png)
1. Sous « Exécutions de workflow », cliquez sur le nom de l’exécution que vous souhaitez afficher.

   ![Capture d’écran des exécutions de workflow](/assets/images/help/images/learn-github-actions-run.png)
1. Sous **Travaux** ou dans le graphe de visualisation, cliquez sur le travail que vous souhaitez afficher.

   ![Sélectionner un travail](/assets/images/help/images/overview-actions-result-navigate.png)
1. Affichez les résultats de chaque étape.

   ![Capture d’écran des détails d’exécution de workflow](/assets/images/help/images/overview-actions-result-updated-2.png)
