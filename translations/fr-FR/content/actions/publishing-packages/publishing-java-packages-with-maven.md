---
title: Publication de packages Java avec Maven
intro: Vous pouvez utiliser Maven pour publier des packages Java dans un registre dans le cadre de votre workflow CI (intégration continue).
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-maven
  - /actions/guides/publishing-java-packages-with-maven
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Java
  - Maven
shortTitle: Java packages with Maven
ms.openlocfilehash: e5a1c9ad670bef2e059f5808fa41e1fcbe5848af
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717916'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

{% data reusables.actions.publishing-java-packages-intro %}

## Prérequis

Il est recommandé d’avoir une compréhension de base des fichiers de workflow et options de configuration. Pour plus d’informations, consultez « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) ».

Pour plus d’informations sur la création d’un workflow CI pour votre projet Java avec Maven, consultez « [Génération et test de code Java avec Maven](/actions/language-and-framework-guides/building-and-testing-java-with-maven) ».

Vous pouvez également trouver utile d’avoir une compréhension de base des éléments suivants :

- « [Utilisation du registre npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry) »
- « [Variables d’environnement](/actions/reference/environment-variables) »
- « [Secrets chiffrés](/actions/reference/encrypted-secrets) »
- « [Authentification dans un workflow](/actions/reference/authentication-in-a-workflow) »

## À propos de la configuration d’un package

Les champs `groupId` et `artifactId` dans le fichier _pom.xml_ créent un identificateur unique pour votre package que les registres utilisent pour lier votre package à un registre.  Pour plus d’informations, consultez [Guide de chargement d’artefacts sur le dépôt central](http://maven.apache.org/repository/guide-central-repository-upload.html) dans la documentation Apache Maven.

Le fichier _pom.xml_ contient également la configuration des dépôts de gestion de distribution sur lesquels Maven va déployer des packages. Chaque dépôt doit avoir un nom et une URL de déploiement. L’authentification pour ces dépôts peut être configurée dans le fichier _.m2/settings.xml_ dans le répertoire de base de l’utilisateur exécutant Maven.

Vous pouvez utiliser l’action `setup-java` pour configurer le dépôt de déploiement ainsi que l’authentification pour ce dépôt. Pour plus d’informations, consultez [`setup-java`](https://github.com/actions/setup-java).

## Publication de packages sur le dépôt central Maven

Chaque fois que vous créez une version, vous pouvez déclencher un workflow pour publier votre package. Le workflow de l’exemple ci-dessous s’exécute lorsque l’événement `release` se déclenche avec le type `created`. Le workflow publie le package sur le dépôt central Maven si les tests CI réussissent. Pour plus d’informations sur l’événement `release`, consultez « [Événements qui déclenchent des workflows](/actions/reference/events-that-trigger-workflows#release) ».

Dans ce workflow, vous pouvez utiliser l’action `setup-java`. Cette action installe la version donnée du JDK dans `PATH`, mais elle configure également un fichier Maven _settings.xml_ pour la publication de packages. Par défaut, le fichier de paramètres est configuré pour {% data variables.product.prodname_registry %}, mais il peut être configuré pour le déploiement sur un autre registre de packages, tel que le dépôt central Maven. Si vous avez déjà un dépôt de gestion de distribution configuré dans _pom.xml_, vous pouvez spécifier cet `id` pendant l’appel de l’action `setup-java`.

Par exemple, si vous déployiez sur le dépôt central Maven via le projet d’hébergement OSSRH, votre _pom.xml_ peut spécifier un dépôt de gestion de distribution avec l’`id` `ossrh`.

{% raw %}
```xml{:copy}
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>ossrh</id>
      <name>Central Repository OSSRH</name>
      <url>https://oss.sonatype.org/service/local/staging/deploy/maven2/</url>
    </repository>
  </distributionManagement>
</project>
```
{% endraw %}

Avec cette configuration, vous pouvez créer un workflow qui publie votre package sur le dépôt central Maven en spécifiant l’`id` de gestion de dépôt sur l’action `setup-java`. Vous devez également fournir des variables d’environnement qui contiennent le nom d’utilisateur et le mot de passe pour vous authentifier auprès du dépôt.

À l’étape de déploiement, vous devez définir les variables d’environnement sur le nom d’utilisateur avec lequel vous vous authentifiez auprès du dépôt et sur un secret que vous avez configuré avec le mot de passe ou le jeton pour vous authentifier.  Pour plus d’informations, consultez « [Création et utilisation de secrets chiffrés](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».

```yaml{:copy}
name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Maven Central Repository
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
```

Ce workflow effectue les étapes suivantes :

1. Extrait une copie du dépôt du projet.
1. Configure le JDK Java et configure également le fichier Maven _settings.xml_ pour ajouter l’authentification pour le dépôt `ossrh` à l’aide des variables d’environnement `MAVEN_USERNAME` et `MAVEN_PASSWORD`.
1. {% data reusables.actions.publish-to-maven-workflow-step %}

   Pour plus d’informations sur l’utilisation de secrets dans votre workflow, consultez « [Création et utilisation de secrets chiffrés](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».

## Publication de packages sur {% data variables.product.prodname_registry %}

Chaque fois que vous créez une version, vous pouvez déclencher un workflow pour publier votre package. Le workflow de l’exemple ci-dessous s’exécute lorsque l’événement `release` se déclenche avec le type `created`. Le workflow publie le package sur {% data variables.product.prodname_registry %} si les tests CI réussissent. Pour plus d’informations sur l’événement `release`, consultez « [Événements qui déclenchent des workflows](/actions/reference/events-that-trigger-workflows#release) ».

Dans ce workflow, vous pouvez utiliser l’action `setup-java`. Cette action installe la version donnée du JDK dans `PATH`et configure également un fichier Maven _settings.xml_ pour la publication du package sur {% data variables.product.prodname_registry %}. Le fichier _settings.xml_ généré définit l’authentification pour un serveur avec l’`id` `github`, en utilisant la variable d’environnement `GITHUB_ACTOR` comme nom d’utilisateur et la variable d’environnement `GITHUB_TOKEN` comme mot de passe. La variable d’environnement `GITHUB_TOKEN` se voit affecter la valeur du secret spécial `GITHUB_TOKEN`.

{% data reusables.actions.github-token-permissions %}

Pour un projet Maven, vous pouvez utiliser ces paramètres en créant un dépôt de distribution dans votre fichier _pom.xml_ avec l’`id` `github` qui pointe vers votre point de terminaison {% data variables.product.prodname_registry %}.

Par exemple, si votre organisation est nommée « octocat » et que votre dépôt est nommé « hello-world », la configuration {% data variables.product.prodname_registry %} dans _pom.xml_ ressemblerait à l’exemple ci-dessous.

{% raw %}
```xml{:copy}
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>github</id>
      <name>GitHub Packages</name>
      <url>https://maven.pkg.github.com/octocat/hello-world</url>
    </repository>
  </distributionManagement>
</project>
```
{% endraw %}

Avec cette configuration, vous pouvez créer un workflow qui publie votre package sur {% data variables.product.prodname_registry %} en utilisant le fichier _settings.xml_ généré automatiquement.

```yaml{:copy}
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Ce workflow effectue les étapes suivantes :

1. Extrait une copie du dépôt du projet.
1. Configure le JDK Java et configure aussi automatiquement le fichier Maven _settings.xml_ pour ajouter l’authentification pour le dépôt Maven `github` afin d’utiliser la variable d’environnement `GITHUB_TOKEN`.
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   Pour plus d’informations sur l’utilisation de secrets dans votre workflow, consultez « [Création et utilisation de secrets chiffrés](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».

## Publication de packages sur le dépôt central Maven et {% data variables.product.prodname_registry %}

Vous pouvez publier vos packages sur le dépôt central Maven et {% data variables.product.prodname_registry %} à l’aide de l’action `setup-java` pour chaque registre.

Vérifiez que votre fichier _pom.xml_ inclut un dépôt de gestion de distribution pour le dépôt {% data variables.product.prodname_dotcom %} et le fournisseur du dépôt central Maven. Par exemple, si vous effectuez un déploiement sur le dépôt central via le projet d’hébergement OSSRH, vous pouvez le spécifier dans un dépôt de gestion de distribution avec l’`id` défini sur `ossrh`, et vous pouvez spécifier {% data variables.product.prodname_registry %} dans un dépôt de gestion de distribution avec l’`id` défini sur `github`.

```yaml{:copy}
name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java for publishing to Maven Central Repository
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish to the Maven Central Repository
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
      - name: Set up Java for publishing to GitHub Packages
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish to GitHub Packages
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Ce workflow appelle l’action `setup-java` deux fois.  Chaque fois que l’action `setup-java` s’exécute, elle remplace le fichier Maven _settings.xml_ pour la publication de packages.  Pour l’authentification auprès du dépôt, le fichier _settings.xml_ fait référence au dépôt de gestion de distribution `id` ainsi qu’aux nom d’utilisateur et mot de passe.

Ce workflow effectue les étapes suivantes :

1. Extrait une copie du dépôt du projet.
1. Appelle `setup-java` la première fois. Cela configure le fichier Maven _settings.xml_ pour le dépôt `ossrh` et définit les options d’authentification sur les variables d’environnement définies à l’étape suivante.
1. {% data reusables.actions.publish-to-maven-workflow-step %}
1. Appelle `setup-java` la deuxième fois. Cela configure automatiquement le fichier Maven _settings.xml_ Maven pour {% data variables.product.prodname_registry %}.
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   Pour plus d’informations sur l’utilisation de secrets dans votre workflow, consultez « [Création et utilisation de secrets chiffrés](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».
