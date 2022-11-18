---
title: Démarrage rapide pour les packages GitHub
intro: 'Publiez sur {% data variables.product.prodname_registry %} avec {% data variables.product.prodname_actions %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
ms.openlocfilehash: 207b91e821037a6eb61ae7bc9b18c98d8b14fdd2
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147877110'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

Dans ce guide, vous allez créer un workflow {% data variables.product.prodname_actions %} pour tester votre code, puis publiez-le sur {% data variables.product.prodname_registry %}.

## Publication de votre package

1. Créez un nouveau référentiel sur {% data variables.product.prodname_dotcom %}, en ajoutant le nœud `.gitignore`. Pour plus d’informations, consultez « [Création d’un dépôt](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository) ».
2. Clonez le référentiel sur votre ordinateur local.
    ```shell
    $ git clone https://{% ifversion ghes or ghae %}<em>YOUR-HOSTNAME</em>{% else %}github.com{% endif %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
    $ cd <em>YOUR-REPOSITORY</em>
    ```
3. Créez un fichier `index.js` et ajoutez une alerte de base pour dire « Bonjour le monde ! »
    {% raw %}
    ```javascript{:copy}
    console.log("Hello, World!");
    ```
    {% endraw %}
4. Initialisez un package npm avec `npm init`. Dans l’Assistant Initialisation du package, entrez votre package avec le nom : _`@YOUR-USERNAME/YOUR-REPOSITORY`_ et définissez le script de test sur `exit 0`. Cela génère un fichier `package.json` contenant des informations sur votre package.
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: <em>@YOUR-USERNAME/YOUR-REPOSITORY</em>
      ...
      test command: <em>exit 0</em>
      ...    
    ```
    {% endraw %}
5. Exécutez `npm install` pour générer le fichier `package-lock.json`, puis validez et envoyez (push) vos modifications à {% data variables.product.prodname_dotcom %}.
    ```shell
    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
6. Créez un répertoire `.github/workflows`. Dans ce répertoire, créez un fichier nommé `release-package.yml`.
7. Copiez le contenu YAML suivant dans le fichier `release-package.yml`{% ifversion ghes or ghae %}, en remplaçant `YOUR-HOSTNAME` par le nom de votre entreprise{% endif %}.
    ```yaml{:copy}
    name: Node.js Package

    on:
      release:
        types: [created]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: {% data reusables.actions.action-checkout %}
          - uses: {% data reusables.actions.action-setup-node %}
            with:
              node-version: 12
          - run: npm ci
          - run: npm test

      publish-gpr:
        needs: build
        runs-on: ubuntu-latest
        permissions:
          packages: write
          contents: read
        steps:
          - uses: {% data reusables.actions.action-checkout %}
          - uses: {% data reusables.actions.action-setup-node %}
            with:
              node-version: 12
              registry-url: {% ifversion ghes or ghae %}https://npm.YOUR-HOSTNAME.com/{% else %}https://npm.pkg.github.com/{% endif %}
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${% raw %}{{secrets.GITHUB_TOKEN}}{% endraw %}
    ```
8. Indiquez à NPM l’étendue et le Registre pour publier des packages à l’aide de l’une des méthodes suivantes :
   - Ajoutez un fichier de configuration NPM pour le référentiel en créant un fichier `.npmrc` dans le répertoire racine avec le contenu : {% raw %}
      ```shell
      <em>@YOUR-USERNAME</em>:registry=https://npm.pkg.github.com
      ```
      {% endraw %}
   - Modifiez le fichier `package.json` et spécifiez la clé `publishConfig` : {% raw %}
      ```shell
      "publishConfig": {
        "@<em>YOUR-USERNAME</em>:registry": "https://npm.pkg.github.com"
      }
      ```
      {% endraw %}
9. Validez et envoyez (push) vos modifications à {% data variables.product.prodname_dotcom %}.
    ```shell
    $ git add .github/workflows/release-package.yml
    # Also add the file you created or edited in the previous step.
    $ git add <em>.npmrc or package.json</em>
    $ git commit -m "workflow to publish package"
    $ git push
    ```
10.  Le workflow que vous avez créé s’exécute chaque fois qu’une nouvelle version est créée dans votre référentiel. Si les tests réussissent, le package est publié sur {% data variables.product.prodname_registry %}.
    
    Pour le tester, accédez à l’onglet **Coder** de votre référentiel et créez une version. Pour plus d’informations, consultez « [Gestion des versions dans un référentiel](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release) ».

## Affichage de votre package publié

Vous pouvez afficher tous les packages que vous avez publiés.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.navigate-to-packages %}

## Utilisation d’un package publié

Maintenant que vous avez publié le package, vous souhaiterez l’utiliser comme dépendance entre vos projets. Pour plus d’informations, consultez « [Utilisation du registre npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package). »

## Étapes suivantes

Le workflow de base que vous venez d’ajouter s’exécute chaque fois qu’une nouvelle version est créée dans votre référentiel. Mais ce n’est que le début de ce que vous pouvez faire avec {% data variables.product.prodname_registry %}. Vous pouvez publier votre package sur plusieurs registres avec un seul workflow, déclencher l’exécution du workflow sur différents événements tels qu’une demande de tirage fusionnée, gérer des conteneurs, etc.

La combinaison de {% data variables.product.prodname_registry %} et de {% data variables.product.prodname_actions %} peut vous aider à automatiser presque tous les aspects de vos processus de développement d’applications. Vous êtes prêt à commencer ? Voici quelques ressources utiles pour effectuer vos étapes suivantes avec {% data variables.product.prodname_registry %} et {% data variables.product.prodname_actions %} :

- « [Découvrir {% data variables.product.prodname_registry %}](/packages/learn-github-packages) » pour obtenir un tutoriel approfondi sur les packages GitHub
- « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) » pour obtenir un tutoriel approfondi sur GitHub Actions
- « [Utilisation d’un registre {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry) » pour découvrir des cas d’utilisation et des exemples spécifiques
