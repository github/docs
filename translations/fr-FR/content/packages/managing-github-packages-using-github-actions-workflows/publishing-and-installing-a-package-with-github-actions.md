---
title: Publication et installation d’un package avec GitHub Actions
intro: 'Vous pouvez configurer un workflow dans {% data variables.product.prodname_actions %} pour publier ou installer automatiquement un package à partir de {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
  - /packages/guides/using-github-packages-with-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Publish & install with Actions
ms.openlocfilehash: 80516eb55e9ffc8f2de3f92cf24a7d7f230b8407
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193121'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## À propos de {% data variables.product.prodname_registry %} avec {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions) ».

Vous pouvez étendre les fonctionnalités CI et CD de votre dépôt en publiant ou en installant des packages dans le cadre de votre workflow.

{% ifversion packages-registries-v2 %}
### Authentification auprès des registres de packages avec des autorisations granulaires

{% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

### Authentification auprès des registres de packages avec des autorisations limitées au dépôt

{% endif %}

{% ifversion packages-registries-v2 %} Certains registres {% data variables.product.prodname_registry %} prennent uniquement en charge les autorisations limitées au dépôt, ils ne prennent pas en charge les autorisations granulaires. Pour obtenir la liste de ces registres, consultez « [À propos des autorisations pour {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages) ».

Si vous voulez que votre workflow accède à un registre {% data variables.product.prodname_registry %} qui ne prend pas en charge les autorisations granulaires, {% else %}Pour s’authentifier auprès des registres de packages sur {% data variables.product.product_name %},{% endif %} nous recommandons d’utiliser `GITHUB_TOKEN` que {% data variables.product.product_name %} crée automatiquement pour votre dépôt quand vous activez {% data variables.product.prodname_actions %}. Vous devez définir les autorisations de ce jeton d’accès dans le fichier de workflow afin d’octroyer l’accès en lecture pour l’étendue `contents` et l’accès en écriture pour l’étendue `packages`. Pour les duplications, `GITHUB_TOKEN` reçoit un accès en lecture pour le dépôt parent. Pour plus d’informations, consultez « [Authentification avec GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token) ».

Vous pouvez référencer le `GITHUB_TOKEN` de votre fichier de workflow à l’aide du contexte {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %}. Pour plus d’informations, consultez « [Authentification avec GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token) ».

## À propos des autorisations et de l’accès aux packages

{% ifversion packages-registries-v2 %}

### Packages limités aux utilisateurs ou aux organisations

Les registres qui prennent en charge les autorisations granulaires autorisent les utilisateurs à créer et à administrer des packages en tant que ressources autonomes au niveau de l’organisation. Les packages peuvent appartenir à un compte d’organisation ou personnel, et vous pouvez personnaliser l’accès à chacun de vos packages séparément des autorisations de dépôt.

Tous les workflows accédant aux registres qui prennent en charge les autorisations granulaires doivent utiliser `GITHUB_TOKEN` au lieu d’un {% data variables.product.pat_generic %}. Pour plus d’informations sur les meilleures pratiques en matière de sécurité, consultez « [Renforcement de la sécurité pour GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets) ».

### Packages limités aux dépôts

{% endif %}

Lorsque vous activez GitHub Actions, GitHub installe une application GitHub sur votre dépôt. Le secret `GITHUB_TOKEN` est un jeton d’accès d’installation d’application GitHub. Vous pouvez utiliser le jeton d’accès d’installation pour vous authentifier au nom de l’application GitHub installée sur votre dépôt. Les autorisations du jeton sont limitées au dépôt qui contient votre workflow. Pour plus d’informations, consultez « [Autorisations pour le secret GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#about-the-github_token-secret) ».

{% data variables.product.prodname_registry %} vous permet d’envoyer (push) et d’extraire des packages via le secret `GITHUB_TOKEN` disponible pour un workflow {% data variables.product.prodname_actions %}.

{% ifversion packages-registries-v2 %}

## Autorisations et paramètres d’accès par défaut pour les conteneurs, modifiés via des workflows

Lorsque vous créez, installez, modifiez ou supprimez un conteneur via un workflow, certains paramètres d’accès et autorisations par défaut sont utilisés pour garantir l’accès des administrateurs au workflow. Vous pouvez également ajuster ces paramètres d’accès.

Par exemple, par défaut, si un workflow crée un conteneur à l’aide du secret `GITHUB_TOKEN` :
- Le conteneur hérite du modèle de visibilité et d’autorisations du dépôt où le workflow est exécuté.
- Les administrateurs du dépôt où le flux de travail est exécuté deviennent administrateurs du conteneur une fois celui-ci créé.

Voici d’autres exemples montrant comment les autorisations par défaut fonctionnent pour des workflows qui gèrent des packages.

| Tâche de workflow {% data variables.product.prodname_actions %} | Autorisations et accès par défaut |
|----|----|
| Télécharger un conteneur existant | - Si le conteneur est public, tout workflow s’exécutant dans n’importe quel dépôt peut télécharger le conteneur. <br> - Si le conteneur est interne, tout workflow s’exécutant dans n’importe quel dépôt appartenant au compte d’entreprise peut télécharger le conteneur. Pour les organisations appartenant à une entreprise, vous pouvez lire n’importe quel dépôt dans l’entreprise <br> - Si le conteneur est privé, seuls les workflows s’exécutant dans des dépôts qui reçoivent une autorisation de lecture sur ce conteneur peuvent télécharger celui-ci. <br>
| Charger une nouvelle version dans un conteneur existant | - Si le conteneur est privé, interne ou public, seuls les workflows s’exécutant dans des dépôts qui reçoivent l’autorisation d’écriture sur ce conteneur peuvent charger de nouvelles versions dans le conteneur.
| Supprimer un conteneur ou des versions d’un conteneur | - Si le conteneur est privé, interne ou public, seuls les workflows s’exécutant dans des dépôts qui reçoivent l’autorisation de suppression peuvent supprimer des versions existantes du conteneur.

Vous pouvez également ajuster l’accès aux conteneurs d’une manière plus précise, ou ajuster en partie le comportement des autorisations par défaut. Pour plus d’informations, consultez « [Configuration du contrôle d’accès et de la visibilité d’un package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility) ».

{% endif %}

## Publication d’un package à l’aide d’une action

Vous pouvez utiliser {% data variables.product.prodname_actions %} pour publier automatiquement des packages dans le cadre de votre flux d’intégration continue (CI). Cette approche du déploiement continu (CD) vous permet d’automatiser la création de nouvelles versions de package si le code répond à vos normes de qualité. Par exemple, vous pourriez créer un workflow qui exécute des tests de CI chaque fois qu’un développeur envoie du code à une branche particulière. Si les tests réussissent, le workflow peut publier une nouvelle version de package sur {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.actions-configuration %}

L’exemple suivant montre comment utiliser {% data variables.product.prodname_actions %} pour générer votre application {% ifversion not fpt or ghec %}and test{% endif %}, puis créer automatiquement une image Docker et la publier sur {% data variables.product.prodname_registry %}.

Créez un fichier de workflow dans votre dépôt (par exemple `.github/workflows/deploy-image.yml`), puis ajoutez le YAML suivant :

{% ifversion fpt or ghec %} {% data reusables.package_registry.publish-docker-image %}

{% else %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Create and publish a Docker image

on:
  push:
    branches: ['release']

jobs:
  run-npm-build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: webpack artifacts
          path: public/

  run-npm-test:
    runs-on: ubuntu-latest
    needs: run-npm-build
    strategy:
      matrix:
        os: [ubuntu-latest]
        node-version: [12.x, 14.x]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
      - uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: webpack artifacts
          path: public
      - name: npm install, and test
        run: |
          npm install
          npm test
        env:
          CI: true

  build-and-push-image:
    runs-on: ubuntu-latest
    needs: run-npm-test {% ifversion ghes or ghae %}
    permissions: 
      contents: read
      packages: write {% endif %}
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          push: true
          tags: |
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
```
{% endif %}

Les paramètres pertinents sont expliqués dans le tableau suivant. Pour des informations complètes sur chaque élément d’un workflow, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions) ».

<table>
<tr>
<td>
{% raw %} ```yaml
on:
  push:
    branches: ['release']
```
{% endraw %}
</td>
<td>
Configure le workflow <code>Create and publish a Docker image</code> pour qu’il s’exécute chaque fois qu’une modification est envoyée (push) à la branche nommée <code>release</code>.
</td>
</tr>

{% ifversion fpt or ghec %}

<tr>
<td>
{% raw %}
```yaml
env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}
```
{% endraw %}
</td>
<td>
  Définit deux variables d’environnement personnalisées pour le workflow. Celles-ci sont utilisées pour le domaine {% data variables.product.prodname_container_registry %}, et un nom pour l’image Docker que ce workflow génère.
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
jobs:
  build-and-push-image:
    runs-on: ubuntu-latest
```
{% endraw %}
</td>
<td>
  Il existe un seul travail dans ce workflow. Il est configuré pour s’exécuter sur la dernière version disponible d’Ubuntu.
</td>
</tr>

{% else %}

<tr>
<td>

```yaml
run-npm-build:
  runs-on: ubuntu-latest
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: npm install and build webpack
      run: |
        npm install
        npm run build
    - uses: {% data reusables.actions.action-upload-artifact %}
      with:
        name: webpack artifacts
        path: public/
```

</td>
<td>
  Ce travail installe NPM et l’utilise pour générer l’application.
</td>
</tr>

<tr>
<td>

```yaml
run-npm-test:
  runs-on: ubuntu-latest
  needs: run-npm-build
  strategy:
    matrix:
      os: [ubuntu-latest]
      node-version: [12.x, 14.x]
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
    - uses: {% data reusables.actions.action-download-artifact %}
      with:
        name: webpack artifacts
        path: public
    - name: npm install, and test
      run: |
        npm install
        npm test
      env:
        CI: true
```

</td>
<td>
Ce travail utilise <code>npm test</code> pour tester le code. La commande <code>needs: run-npm-build</code> rend ce travail dépendant du travail <code>run-npm-build</code>.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
build-and-push-image:
  runs-on: ubuntu-latest
  needs: run-npm-test
```
{% endraw %}
</td>
<td>
Ce travail publie le package. La commande <code>needs: run-npm-test</code> rend ce travail dépendant du travail <code>run-npm-test</code>.
</td>
</tr>

{% endif %}

<tr>
<td>
{% raw %} ```yaml
permissions: 
  contents: read
  packages: write 
```
{% endraw %}
</td>
<td>
Définit les autorisations accordées au secret <code>GITHUB_TOKEN</code> pour les actions de ce travail.
</td>
</tr> 

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %} ```yaml
- name: Log in to the Container registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: ${{ env.REGISTRY }}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
Crée une étape appelée <code>Log in to the {% data variables.product.prodname_container_registry %}</code>, qui se connecte au Registre à l’aide du compte et du mot de passe qui publieront les packages. Une fois publiés, les packages appartiennent au compte défini ici.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
- name: Extract metadata (tags, labels) for Docker
  id: meta
  uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
  with:
    images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
```
{% endraw %}
</td>
<td>
Cette étape utilise <code><a href="https://github.com/docker/metadata-action#about">docker/metadata-action</a></code> pour extraire des balises et es étiquettes qui seront appliquées à l’image spécifiée. Le « meta » <code>id</code> permet le référencement de la sortie de cette étape à l’étape suivante. La valeur <code>images</code> fournit le nom de base des balises et étiquettes.
</td>
</tr>

{% else %}
<tr>
<td>
{% raw %} ```yaml
- name: Log in to GitHub Docker Registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: {% endraw %}{% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
Crée une étape nommée <code>Log in to GitHub Docker Registry</code>, qui se connecte au Registre à l’aide du compte et du mot de passe qui publieront les packages. Une fois publiés, les packages appartiennent au compte défini ici.
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %} ```yaml
- name: Build and push Docker image
```
{% endraw %}
</td>
<td>
Crée une étape nommée <code>Build and push Docker image</code>. Cette étape s’exécute dans le cadre du travail <code>build-and-push-image</code>.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
```
{% endraw %}
</td>
<td>
Utilise l’action Docker <code>build-push-action</code> pour générer l’image, en fonction du <code>Dockerfile</code> de votre dépôt. Si la build réussit, elle envoie (push) l’image à {% data variables.product.prodname_registry %}.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
with:
```
{% endraw %}
</td>
<td>
Envoie les paramètres requis à l’action <code>build-push-action</code>. Ceux-ci sont définis dans les lignes suivantes.
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %} ```yaml
context: .
```
{% endraw %}
</td>
<td>
Définit le contexte de la build comme l’ensemble de fichiers situé dans le chemin d’accès spécifié. Pour plus d’informations, consultez « <a href="https://github.com/docker/build-push-action#usage">Utilisation</a> ».
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %} ```yaml
push: true
```
{% endraw %}
</td>
<td>
Envoie (push) cette image au Registre s’il est généré avec succès.
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %}
```yaml
tags: ${{ steps.meta.outputs.tags }}
labels: ${{ steps.meta.outputs.labels }}
```
{% endraw %}
</td>
<td>
  Ajoute les balises et étiquettes extraites à l’étape « meta ».
</td>
</tr>

{% else %}
<tr>
<td>
{% ifversion ghae %} {% raw %} ```yaml
tags: |
docker.YOUR-HOSTNAME.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %} {% else %} {% raw %} ```yaml
tags: |
docker.pkg.github.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %} {% endif %}
</td>
<td>
Étiquette l’image avec le SHA de la validation qui a déclenché le workflow.
</td>
</tr>
{% endif %}

</table>

Ce nouveau workflow s’exécute automatiquement chaque fois que vous envoyez une modification à une branche nommée `release` dans le dépôt. Vous pouvez visualiser la progression sous l’onglet **Actions**.

Quelques minutes après la fin du workflow, le nouveau package sera visible dans votre dépôt. Pour trouver vos packages disponibles, consultez « [Affichage des packages d’un dépôt](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages) ».

## Installation d’un package à l’aide d’une action

Vous pouvez installer des packages dans le cadre de votre flux de CI en utilisant {% data variables.product.prodname_actions %}. Par exemple, vous pourriez configurer un workflow de façon à ce que, chaque fois qu’un développeur envoie (push) du code à une demande de tirage, le workflow résolve les dépendances en téléchargeant et en installant des packages hébergés par {% data variables.product.prodname_registry %}. Ensuite, le workflow peut exécuter des tests de CI qui nécessitent les dépendances.

L’installation de packages hébergés par {% data variables.product.prodname_registry %} via {% data variables.product.prodname_actions %} nécessite une configuration minimale ou une authentification supplémentaire lorsque vous utilisez le secret `GITHUB_TOKEN`.{% ifversion fpt or ghec %} Le transfert de données est également gratuit quand une action installe un package. Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% ifversion packages-registries-v2 %}
## Mise à niveau d’un workflow qui accède à un registre avec un {% data variables.product.pat_generic %}

{% data variables.product.prodname_registry %} prend en charge `GITHUB_TOKEN` pour faciliter et sécuriser l’authentification dans vos workflows. Si vous utilisez un registre qui prend en charge les autorisations granulaires et que votre workflow utilise un {% data variables.product.pat_generic %} pour s’authentifier auprès d’un registre, nous vous recommandons vivement de mettre à jour votre workflow pour utiliser `GITHUB_TOKEN`.

Pour plus d’informations sur le secret `GITHUB_TOKEN`, consultez « [Authentification dans un workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow) ».

L’utilisation de `GITHUB_TOKEN` au lieu d’un {% data variables.product.pat_v1 %} avec l’étendue `repo` renforce la sécurité de votre dépôt, car vous n’avez pas besoin d’utiliser un {% data variables.product.pat_generic %} longue durée qui offre un accès inutile au dépôt où votre workflow est exécuté. Pour plus d’informations sur les meilleures pratiques en matière de sécurité, consultez « [Renforcement de la sécurité pour GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets) ».

1. Accédez à la page de destination de votre package.
1. Dans la barre latérale de gauche, cliquez sur **Accès à Actions**.
  ![Option « Accès à Actions » dans le menu de gauche](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
1. Pour vous assurer que votre package de conteneur a accès à votre workflow, vous devez ajouter le dépôt dans lequel le workflow est stocké à votre conteneur. Cliquez sur **Ajouter un dépôt** et recherchez le dépôt que vous souhaitez ajouter.
   ![Bouton « Ajouter un dépôt »](/assets/images/help/package-registry/add-repository-button.png) {% note %}

  **Remarque :** L’ajout d’un dépôt à votre conteneur via l’option de menu **Accès à Actions** est différent de la connexion de votre conteneur à un dépôt. Pour plus d’informations, consultez « [Garantie de l’accès du workflow à votre package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package) » et « [Connexion d’un dépôt à un package](/packages/learn-github-packages/connecting-a-repository-to-a-package) ».

  {% endnote %}
1. Si vous le souhaités, dans le menu déroulant « Rôle », sélectionnez le niveau d’accès par défaut à votre image conteneur que vous aimeriez accorder au dépôt.
  ![Niveaux d’accès d’autorisation à donner aux dépôts](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
1. Ouvrez votre fichier de workflow. Sur la ligne où vous vous connectez au registre, remplacez votre {% data variables.product.pat_generic %} par {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}.

Par exemple, ce workflow publie une image Docker dans le {% data variables.product.prodname_container_registry %} et utilise {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} pour l’authentification.

```yaml{:copy}
name: Demo Push

on:   
  push:
    # Publish `master` as Docker `latest` image.
    branches:
      - master
      - seed

    # Publish `v1.2.3` tags as releases.
    tags:
      - v*

  # Run tests for any PRs.
  pull_request:

env:
  IMAGE_NAME: ghtoken_product_demo

jobs:
  # Push image to GitHub Packages.
  # See also https://docs.docker.com/docker-hub/builds/
  push:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Build image
        run: docker build . --file Dockerfile --tag $IMAGE_NAME --label "runnumber=${GITHUB_RUN_ID}"

      - name: Log in to registry
        # This is where you will update the {% data variables.product.pat_generic %} to GITHUB_TOKEN
        run: echo "{% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Push image
        run: |
          IMAGE_ID=ghcr.io/{% raw %}${{ github.repository_owner }}{% endraw %}/$IMAGE_NAME

          # Change all uppercase to lowercase
          IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')
          # Strip git ref prefix from version
          VERSION=$(echo "{% raw %}${{ github.ref }}{% endraw %}" | sed -e 's,.*/\(.*\),\1,')
          # Strip "v" prefix from tag name
          [[ "{% raw %}${{ github.ref }}{% endraw %}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
          # Use Docker `latest` tag convention
          [ "$VERSION" == "master" ] && VERSION=latest
          echo IMAGE_ID=$IMAGE_ID
          echo VERSION=$VERSION
          docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
          docker push $IMAGE_ID:$VERSION
```

{% endif %}
