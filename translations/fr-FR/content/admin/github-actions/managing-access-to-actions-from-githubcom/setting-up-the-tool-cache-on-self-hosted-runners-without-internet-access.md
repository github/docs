---
title: Configuration du cache d’outils sur les exécuteurs auto-hébergés sans accès à Internet
intro: 'Si vous souhaitez utiliser les actions `actions/setup` incluses sur les exécuteurs autohébergés sans accès à Internet, vous devez d’abord remplir le cache d’outils de l’exécuteur pour vos workflows.'
redirect_from:
  - /enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
  - /admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
versions:
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
  - Networking
  - Storage
shortTitle: Tool cache for offline runners
ms.openlocfilehash: fe1b070880db8353064f1be5a26b0a63a5e92cf5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529295'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des actions de configuration incluses et du cache d’outils d’exécuteur

{% data reusables.actions.enterprise-no-internet-actions %}

La plupart des actions officielles créées par {% data variables.product.prodname_dotcom %} sont automatiquement groupées avec {% data variables.product.product_name %}. Cependant, les exécuteurs auto-hébergés sans accès à Internet ont besoin d’être configurés pour pouvoir utiliser les actions `actions/setup-LANGUAGE` incluses, telles que `setup-node`.

Les actions `actions/setup-LANGUAGE` ont normalement besoin d’un accès à Internet pour télécharger les binaires d’environnement nécessaires dans le cache d’outils d’exécuteur. Les exécuteurs auto-hébergés sans accès à Internet ne pouvant pas télécharger les binaires, vous devez remplir le cache d’outils d’exécuteur manuellement.

Vous pouvez remplir le cache d’outils d’exécuteur en exécutant un workflow {% data variables.product.prodname_actions %} sur {% data variables.product.prodname_dotcom_the_website %} qui charge le cache d’outils d’un exécuteur hébergé par {% data variables.product.prodname_dotcom %} en tant qu’artefact, que vous pouvez alors transférer et extraire sur votre exécuteur auto-hébergé non connecté à Internet.

{% note %}

**Remarque :** Vous pouvez uniquement utiliser le cache d’outils d’un exécuteur hébergé par {% data variables.product.prodname_dotcom %} pour un exécuteur auto-hébergé qui possède un système d’exploitation et une architecture identiques. Par exemple, si vous utilisez un exécuteur hébergé par `ubuntu-22.04` {% data variables.product.prodname_dotcom %} pour générer un cache d’outils, votre exécuteur auto-hébergé doit être un ordinateur Ubuntu 22.04 64 bits. Pour plus d’informations sur les exécuteurs hébergés par {% data variables.product.prodname_dotcom %}, consultez « [À propos des exécuteurs hébergés par {% data variables.product.prodname_dotcom %}](/free-pro-team@latest/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources) ».

{% endnote %}

## Prérequis

* Identifiez les environnements de développement dont auront besoin vos exécuteurs auto-hébergés. L’exemple suivant montre comment remplir un cache d’outils pour l’action `setup-node`, en utilisant Node.js versions 10 et 12.
* Accédez à un dépôt sur {% data variables.product.prodname_dotcom_the_website %} dont vous pouvez vous servir pour exécuter un workflow.
* Accédez au système de fichiers de votre exécuteur auto-hébergé pour remplir le dossier du cache d’outils.

## Remplissage du cache d’outils pour un exécuteur auto-hébergé

1. Sur {% data variables.product.prodname_dotcom_the_website %}, accédez à un dépôt dont vous pouvez vous servir pour exécuter un workflow {% data variables.product.prodname_actions %}.
1. Créez un fichier de workflow dans le dossier `.github/workflows` du dépôt qui charge un artefact contenant le cache d’outils d’un exécuteur hébergé par {% data variables.product.prodname_dotcom %}.

   L’exemple suivant illustre un workflow qui charge le cache d’outils pour un environnement Ubuntu 22.04, en utilisant l’action `setup-node` avec Node.js versions 10 et 12.

   ```yaml
   name: Upload Node.js 10 and 12 tool cache
   on: push
   jobs:
     upload_tool_cache:
       runs-on: ubuntu-22.04
       steps:
         - name: Clear any existing tool cache
           run: |
             mv "{% raw %}${{ runner.tool_cache }}" "${{ runner.tool_cache }}.old"{% endraw %}
             mkdir -p "{% raw %}${{ runner.tool_cache }}{% endraw %}"
         - name: Setup Node 10
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 10.x
         - name: Setup Node 12
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 12.x
         - name: Archive tool cache
           run: |
             cd "{% raw %}${{ runner.tool_cache }}{% endraw %}"
             tar -czf tool_cache.tar.gz *
         - name: Upload tool cache artifact
           uses: {% data reusables.actions.action-upload-artifact %}
           with:
             path: {% raw %}${{runner.tool_cache}}/tool_cache.tar.gz{% endraw %}
   ```
1. Téléchargez l’artefact du cache d’outils à partir de l’exécution du workflow. Pour obtenir des instructions sur le téléchargement d’artefacts, consultez « [Téléchargement d’artefacts de workflow](/actions/managing-workflow-runs/downloading-workflow-artifacts) ».
1. Transférez l’artefact du cache d’outils dans votre exécuteur auto-hébergé et extrayez-le dans le répertoire du cache d’outils local. Le répertoire du cache d’outils par défaut est `RUNNER_DIR/_work/_tool`. Si l’exécuteur n’a pas encore traité de travaux, vous devrez peut-être créer les répertoires `_work/_tool`.

    Après avoir extrait l’artefact du cache d’outils chargé dans l’exemple précédent, vous devez disposer d’une structure de répertoires sur votre exécuteur auto-hébergé similaire à l’exemple suivant :

    ```
    RUNNER_DIR
    ├── ...
    └── _work
        ├── ...
        └── _tool
            └── node
                ├── 10.22.0
                │   └── ...
                └── 12.18.3
                    └── ...
    ```

Votre exécuteur auto-hébergé sans accès à Internet doit maintenant pouvoir utiliser l’action `setup-node`. Si vous rencontrez des problèmes, vérifiez que vous avez rempli le cache d’outils approprié pour vos workflows. Par exemple, si vous devez utiliser l’action `setup-python`, vous devez remplir le cache d’outils associé à l’environnement Python que vous souhaitez utiliser.
