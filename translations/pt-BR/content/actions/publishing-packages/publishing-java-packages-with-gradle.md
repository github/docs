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
shortTitle: Pacotes do Java com Gradle
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

{% data reusables.actions.publishing-java-packages-intro %}

## Pré-requisitos

Recomendamos que você tenha um entendimento básico dos arquivos de fluxo de trabalho e das opções de configuração. Para obter mais informações, consulte "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Para obter mais informações sobre a criação de um fluxo de trabalho de CI para seu projeto Java com Gradle, consulte "[Criando e testando o Java com Gradle](/actions/language-and-framework-guides/building-and-testing-java-with-gradle)"

Você também pode achar útil ter um entendimento básico do seguinte:

- "[Trabalhando com o registro npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[Variáveis de ambiente](/actions/reference/environment-variables)"
- "[Segredos criptografados](/actions/reference/encrypted-secrets)"
- "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow)"

## Sobre a configuração do pacote

Os campos `groupId` e `artefactId` na seção `MavenPublication` do arquivo _build.gradle_ criam um identificador exclusivo para o seu pacote que os registros usam para vinculá-lo a um registro.  Isto é semelhante aos campos `groupId` e `artifactId` do arquivo Maven _pom.xml_.  Para obter mais informações, consulte o "[Plugin de publicação do Maven](https://docs.gradle.org/current/userguide/publishing_maven.html)" na documentação do Gradle.

O arquivo _build.gradle_ também contém a configuração para os repositórios de gerenciamento de distribuição nos quais o Gradle publicará pacotes. Cada repositório deve ter um nome, uma URL de implementação e e credenciais para autenticação.

## Publicar pacotes no Repositório Central do Maven

Cada vez que você criar uma nova versão, você poderá acionar um fluxo de trabalho para publicar o seu pacote. O fluxo de trabalho no exemplo abaixo é executado quando o evento `versão` é acionado com o tipo `criado`. O fluxo de trabalho publica o pacote no Repositório Central Maven se o teste de CI for aprovado. Para obter mais informações sobre o evento da `versão`, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#release)".

É possível definir um novo repositório do Maven no bloco de publicação do seu arquivo _build.gradle_ que aponta para o repositório de pacotes.  Por exemplo, se você estava fazendo uma implementaão no Central Repositório do Maven por meio do projeto de hospedagem OSSRH, seu _build.gradle_ poderá especificar um repositório com o nome `"OSSRH"`.

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

Com essa configuração, é possível criar um fluxo de trabalho que publica seu pacote no Repositório Central do Maven ao executar o comando `publicação do gradle`. Na etapa de implementação, você deverá definir variáveis de ambiente para o nome de usuário e senha ou token usado para fazer a autenticação no repositório do Maven. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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
1. Executa a ação [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) com o argumento `publicar` para fazer uma publicação no repositório do Maven `OSSRH`. A variável de ambiente `MAVEN_USERNAME` será definida com o conteúdo do seu segredo `OSSRH_USERNAME`, e a variável de ambiente `MAVEN_PASSWORD` será definida com o conteúdo do seu segredo `OSSRH_TOKEN`.

   Para obter mais informações sobre o uso de segredos no seu fluxo de trabalho, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Publicar pacotes em {% data variables.product.prodname_registry %}

Cada vez que você criar uma nova versão, você poderá acionar um fluxo de trabalho para publicar o seu pacote. O fluxo de trabalho no exemplo abaixo é executado quando o evento `versão` é acionado com o tipo `criado`. O fluxo de trabalho publica o pacote em {% data variables.product.prodname_registry %} se o teste de CI for aprovado. Para obter mais informações sobre o evento da `versão`, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#release)".

Você pode definir um novo repositório do Maven no bloco de publicação do _build.gradle_ que aponta para {% data variables.product.prodname_registry %}.  Nessa configuração do repositório, também é possível aproveitar as variáveis de ambiente definidas na execução do fluxo de trabalho de CI.  Você pode usar a variável de ambiente `GITHUB_ACTOR` como um nome de usuário e você pode definir a variável de ambiente `GITHUB_TOKEN` com seu segredo `GITHUB_TOKEN`.

{% data reusables.actions.github-token-permissions %}

Por exemplo, se sua organização é denominado "octocat" e seu repositório é denominado de "hello-world", a configuração do {% data variables.product.prodname_registry %} no _build.gradle_ será parecida ao exemplo abaixo.

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

Com esta configuração, você pode criar um fluxo de trabalho que publica seu pacote em {% data variables.product.prodname_registry %}, executando o comando `gradle publish`.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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
1. Executa a ação [`grades/gradle-build-action`](https://github.com/gradle/gradle-build-action) com o argumento `publicar` para publicar em {% data variables.product.prodname_registry %}. A variável de ambiente `GITHUB_TOKEN` será definida com o conteúdo do segredo `GITHUB_TOKEN`. A chave `permissões` especifica o acesso que o segredo `GITHUB_TOKEN` permitirá.

   Para obter mais informações sobre o uso de segredos no seu fluxo de trabalho, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Publicar imagens no Repositório Central do Maven e em {% data variables.product.prodname_registry %}

Você pode publicar seus pacotes no Repositório Central Maven e em {% data variables.product.prodname_registry %}, configurando cada um no seu arquivo _build.gradle_.

Certifique-se de que seu arquivo _build.gradle_ inclua um repositório para seu repositório {% data variables.product.prodname_dotcom %} e seu provedor do Repositório Central do Maven.

Por exemplo, se fizer a implementação no Repositório Central por meio do projecto de hospedagem OSSRH, é possível que você deseje especificá-lo em um repositório de gerenciamento de distribuição com o `nome` definido como `OSSRH`. Se você fizer a implementação em {% data variables.product.prodname_registry %}, é possível que você deseje especificá-lo em um repositório de gerenciamento de distribuição com o nome `` definido como `GitHubPackages`.

Se sua organização for denominada "octocat" e seu repositório for denominado "hello-world", a configuração em _build.gradle_ será parecida ao exemplo abaixo.

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

Com esta configuração, você pode criar um fluxo de trabalho que publica seu pacote no Repositório Central do Maven e em {% data variables.product.prodname_registry %}, executando o comando `publicação do gradle`.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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
1. Executa a ação [`grades/gradle-build`](https://github.com/gradle/gradle-build-action) com o argumento `publicar` para publicar no repositório do Maven `OSSRH` e em {% data variables.product.prodname_registry %}. A variável de ambiente `MAVEN_USERNAME` será definida com o conteúdo do seu segredo `OSSRH_USERNAME`, e a variável de ambiente `MAVEN_PASSWORD` será definida com o conteúdo do seu segredo `OSSRH_TOKEN`. A variável de ambiente `GITHUB_TOKEN` será definida com o conteúdo do segredo `GITHUB_TOKEN`. A chave `permissões` especifica o acesso que o segredo `GITHUB_TOKEN` permitirá.

   Para obter mais informações sobre o uso de segredos no seu fluxo de trabalho, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
