---
title: Publicar pacotes Java com Gradle
intro: Você pode usar o Gradle para publicar pacotes Java para um registro como parte do seu fluxo de trabalho de integração contínua (CI).
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-gradle
  - /actions/guides/publishing-java-packages-with-gradle
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
  - Gradle
shortTitle: Java packages with Gradle
ms.openlocfilehash: 58bb9f872dbb136624c82ab7ae073d9b670e98e3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410280'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

{% data reusables.actions.publishing-java-packages-intro %}

## Pré-requisitos

Recomendamos que você tenha um entendimento básico dos arquivos de fluxo de trabalho e das opções de configuração. Para obter mais informações, confira "[Aprenda a usar o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Para obter mais informações sobre como criar um fluxo de trabalho de CI para seu projeto Java com o Gradle, confira "[Como criar e testar o Java com o Gradle](/actions/language-and-framework-guides/building-and-testing-java-with-gradle)".

Você também pode achar útil ter um entendimento básico do seguinte:

- "[Como trabalhar com o registro npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[Variáveis de ambiente](/actions/reference/environment-variables)"
- "[Segredos criptografados](/actions/reference/encrypted-secrets)"
- "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow)"

## Sobre a configuração do pacote

Os campos `groupId` e `artifactId` da seção `MavenPublication` do arquivo _build.gradle_ criam um identificador exclusivo para o pacote que os registros usam para vincular seu pacote a um registro.  Isso é semelhante aos campos `groupId` e `artifactId` do arquivo _pom.xml_ do Maven.  Para obter mais informações, confira o "[Plug-in do Maven Publish](https://docs.gradle.org/current/userguide/publishing_maven.html)" na documentação do Gradle.

O arquivo _build.gradle_ também contém a configuração para os repositórios de gerenciamento de distribuição nos quais o Gradle publicará os pacotes. Cada repositório deve ter um nome, uma URL de implementação e e credenciais para autenticação.

## Publicar pacotes no Repositório Central do Maven

Cada vez que você criar uma nova versão, você poderá acionar um fluxo de trabalho para publicar o seu pacote. O fluxo de trabalho no exemplo abaixo é executado quando o evento `release` é disparado com o tipo `created`. O fluxo de trabalho publica o pacote no Repositório Central Maven se o teste de CI for aprovado. Para obter mais informações sobre o evento `release`, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#release)".

Você pode definir um novo repositório do Maven no bloco de publicação do arquivo _build.gradle_ que aponta para o repositório de pacotes.  Por exemplo, se você estiver fazendo a implantação no Maven Central Repository por meio do projeto de hospedagem do OSSRH, o _build.gradle_ poderá especificar um repositório com o nome `"OSSRH"`.

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "OSSRH"
      url = "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
      credentials {
        username = System.getenv("MAVEN_USERNAME")
        password = System.getenv("MAVEN_PASSWORD")
      }
    }
  }
}
```
{% endraw %}

Com essa configuração, você pode criar um fluxo de trabalho que publica seu pacote no Maven Central Repository executando o comando `gradle publish`. Na etapa de implementação, você deverá definir variáveis de ambiente para o nome de usuário e senha ou token usado para fazer a autenticação no repositório do Maven. Para obter mais informações, confira "[Como criar e usar segredos criptografados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Executa a ação [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) com o argumento `publish` para publicação no repositório `OSSRH` do Maven. A variável de ambiente `MAVEN_USERNAME` será definida com o conteúdo do segredo `OSSRH_USERNAME`, e a variável de ambiente `MAVEN_PASSWORD` será definida com o conteúdo do segredo `OSSRH_TOKEN`.

   Para obter mais informações sobre como usar segredos no fluxo de trabalho, confira "[Como criar e usar segredos criptografados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Publicar pacotes em {% data variables.product.prodname_registry %}

Cada vez que você criar uma nova versão, você poderá acionar um fluxo de trabalho para publicar o seu pacote. O fluxo de trabalho no exemplo abaixo é executado quando o evento `release` é disparado com o tipo `created`. O fluxo de trabalho publica o pacote em {% data variables.product.prodname_registry %} se o teste de CI for aprovado. Para obter mais informações sobre o evento `release`, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#release)".

Você pode definir um novo repositório do Maven no bloco de publicação do _build.gradle_ que aponta para o {% data variables.product.prodname_registry %}.  Nessa configuração do repositório, também é possível aproveitar as variáveis de ambiente definidas na execução do fluxo de trabalho de CI.  Use a variável de ambiente `GITHUB_ACTOR` como um nome de usuário e defina a variável de ambiente `GITHUB_TOKEN` com o segredo `GITHUB_TOKEN`.

{% data reusables.actions.github-token-permissions %}

Por exemplo, se o nome da sua organização for "octocat" e o nome do repositório for "hello-world", a configuração do {% data variables.product.prodname_registry %} no _build.gradle_ será semelhante ao exemplo abaixo.

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "GitHubPackages"
      url = "https://maven.pkg.github.com/octocat/hello-world"
      credentials {
        username = System.getenv("GITHUB_ACTOR")
        password = System.getenv("GITHUB_TOKEN")
      }
    }
  }
}
```
{% endraw %}

Com essa configuração, você pode criar um fluxo de trabalho que publica seu pacote no {% data variables.product.prodname_registry %} executando o comando `gradle publish`.

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Executa a ação [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) com o argumento `publish` para publicação no {% data variables.product.prodname_registry %}. A variável de ambiente `GITHUB_TOKEN` será definida com o conteúdo do segredo `GITHUB_TOKEN`. A chave `permissions` especifica o acesso que o segredo `GITHUB_TOKEN` permitirá.

   Para obter mais informações sobre como usar segredos no fluxo de trabalho, confira "[Como criar e usar segredos criptografados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Publicar imagens no Repositório Central do Maven e em {% data variables.product.prodname_registry %}

Você pode publicar seus pacotes no Maven Central Repository e no {% data variables.product.prodname_registry %} configurando cada um no arquivo _build.gradle_.

Verifique se o arquivo _build.gradle_ inclui um repositório para o seu repositório do {% data variables.product.prodname_dotcom %} e o provedor do Maven Central Repository.

Por exemplo, se você fizer a implantação no Central Repository por meio do projeto de hospedagem do OSSRH, o ideal será especificá-lo em um repositório de gerenciamento de distribuição com o `name` definido como `OSSRH`. Se você implantá-lo no {% data variables.product.prodname_registry %}, o ideal será especificá-lo em um repositório de gerenciamento de distribuição com o `name` definido como `GitHubPackages`.

Se o nome da sua organização for "octocat" e o nome do seu repositório for "hello-world", a configuração contida em _build.gradle_ será semelhante ao exemplo abaixo.

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "OSSRH"
      url = "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
      credentials {
        username = System.getenv("MAVEN_USERNAME")
        password = System.getenv("MAVEN_PASSWORD")
      }
    }
    maven {
      name = "GitHubPackages"
      url = "https://maven.pkg.github.com/octocat/hello-world"
      credentials {
        username = System.getenv("GITHUB_ACTOR")
        password = System.getenv("GITHUB_TOKEN")
      }
    }
  }
}
```
{% endraw %}

Com essa configuração, você pode criar um fluxo de trabalho que publica seu pacote no Maven Central Repository e no {% data variables.product.prodname_registry %} executando o comando `gradle publish`.

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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
      - name: Set up Java
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env: {% raw %}
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Executa a ação [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) com o argumento `publish` para publicação no repositório `OSSRH` do Maven e no {% data variables.product.prodname_registry %}. A variável de ambiente `MAVEN_USERNAME` será definida com o conteúdo do segredo `OSSRH_USERNAME`, e a variável de ambiente `MAVEN_PASSWORD` será definida com o conteúdo do segredo `OSSRH_TOKEN`. A variável de ambiente `GITHUB_TOKEN` será definida com o conteúdo do segredo `GITHUB_TOKEN`. A chave `permissions` especifica o acesso que o segredo `GITHUB_TOKEN` permitirá.

   Para obter mais informações sobre como usar segredos no fluxo de trabalho, confira "[Como criar e usar segredos criptografados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
