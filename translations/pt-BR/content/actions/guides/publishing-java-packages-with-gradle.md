---
title: Publicar pacotes Java com Gradle
intro: Você pode usar o Gradle para publicar pacotes Java para um registro como parte do seu fluxo de trabalho de integração contínua (CI).
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-gradle
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
topics:
  - 'Empacotando'
  - 'Publicar'
  - 'Java'
  - 'Gradle'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introdução

{% data reusables.github-actions.publishing-java-packages-intro %}

### Pré-requisitos

Recomendamos que você tenha um entendimento básico dos arquivos de fluxo de trabalho e das opções de configuração. Para obter mais informações, consulte "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Para obter mais informações sobre a criação de um fluxo de trabalho de CI para seu projeto Java com Gradle, consulte "[Criando e testando o Java com Gradle](/actions/language-and-framework-guides/building-and-testing-java-with-gradle)"

Você também pode achar útil ter um entendimento básico do seguinte:

- "[Configurar o npm para uso com o {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages)"
- "[Variáveis de ambiente](/actions/reference/environment-variables)"
- "[Segredos criptografados](/actions/reference/encrypted-secrets)"
- "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow)"

### Sobre a configuração do pacote

Os campos `groupId` e `artefactId` na seção `MavenPublication` do arquivo _build.gradle_ criam um identificador exclusivo para o seu pacote que os registros usam para vinculá-lo a um registro.  Isto é semelhante aos campos `groupId` e `artifactId` do arquivo Maven _pom.xml_.  Para obter mais informações, consulte o "[Plugin de publicação do Maven](https://docs.gradle.org/current/userguide/publishing_maven.html)" na documentação do Gradle.

O arquivo _build.gradle_ também contém a configuração para os repositórios de gerenciamento de distribuição nos quais o Gradle publicará pacotes. Cada repositório deve ter um nome, uma URL de implementação e e credenciais para autenticação.

### Publicar pacotes no Repositório Central do Maven

Cada vez que você criar uma nova versão, você poderá acionar um fluxo de trabalho para publicar o seu pacote. O fluxo de trabalho no exemplo abaixo é executado quando o evento `versão` é acionado com o tipo `criado`. O fluxo de trabalho publica o pacote no Repositório Central Maven se o teste de CI for aprovado. Para obter mais informações sobre o evento da `versão`, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#release)".

É possível definir um novo repositório do Maven no bloco de publicação do seu arquivo _build.gradle_ que aponta para o repositório de pacotes.  Por exemplo, se você estava fazendo uma implementaão no Central Repositório do Maven por meio do projeto de hospedagem OSSRH, seu _build.gradle_ poderá especificar um repositório com o nome `"OSSRH"`.

{% raw %}
```groovy{:copy}
publicando {
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

Com essa configuração, é possível criar um fluxo de trabalho que publica seu pacote no Repositório Central do Maven ao executar o comando `publicação do gradle`. Você também deverá fornecer variáveis de ambiente que contenham o nome de usuário e senha para fazer a autenticação no repositório.

Na etapa de implementação, você deverá definir variáveis de ambiente para o nome de usuário e senha ou token usado para fazer a autenticação no repositório do Maven. Para obter mais informações, consulte "[Criando e usando segredos encriptados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".


{% raw %}
```yaml{:copy}
nome: Publicar pacote no Repositório Central do Maven
em:
  versão:
    tipos: [created]
trabalhos:
  publicar:
    runs-on: ubuntu-latest
    etapas:
      - usa: actions/checkout@v2
      - nome: Configurar Java
        usa: actions/setup-java@v1
        com:
          java-version: 1.8
      - nome: Publicar pacote
        executar: gradle publish
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. Executa o comando `publicação do gradle` para fazer a publicação no repositório do Maven `OSSRH`. A variável de ambiente `MAVEN_USERNAME` será definida com o conteúdo do seu segredo `OSSRH_USERNAME`, e a variável de ambiente `MAVEN_PASSWORD` será definida com o conteúdo do seu segredo `OSSRH_TOKEN`.

   Para obter mais informações sobre o uso de segredos no seu fluxo de trabalho, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

### Publicar pacotes em {% data variables.product.prodname_registry %}

Cada vez que você criar uma nova versão, você poderá acionar um fluxo de trabalho para publicar o seu pacote. O fluxo de trabalho no exemplo abaixo é executado quando o evento `versão` é acionado com o tipo `criado`. O fluxo de trabalho publica o pacote em {% data variables.product.prodname_registry %} se o teste de CI for aprovado. Para obter mais informações sobre o evento da `versão`, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#release)".

Você pode definir um novo repositório do Maven no bloco de publicação do _build.gradle_ que aponta para {% data variables.product.prodname_registry %}.  Nessa configuração do repositório, também é possível aproveitar as variáveis de ambiente definidas na execução do fluxo de trabalho de CI.  Você pode usar a variável de ambiente `GITHUB_ACTOR` como um nome de usuário e você pode definir a variável de ambiente `GITHUB_TOKEN` com seu segredo `GITHUB_TOKEN`.

O `GITHUB_TOKEN` existe no repositório por padrão e tem permissões de leitura e gravação para pacotes no repositório em que o fluxo de trabalho é executado. Para obter mais informações, consulte "[Autenticação com o GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

Por exemplo, se sua organização é denominado "octocat" e seu repositório é denominado de "hello-world", a configuração do {% data variables.product.prodname_registry %} no _build.gradle_ será parecida ao exemplo abaixo.

{% raw %}
```groovy{:copy}
publicando {
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

Com essa configuração, é possível criar um fluxo de trabalho que publica seu pacote no Repositório Central do Maven ao executar o comando `publicação do gradle`.

{% raw %}
```yaml{:copy}
nome: Publicar pacote nos pacotes do GitHub
em:
  versão:
    tipos: [created]
trabalhos:
  publicar:
    runs-on: ubuntu-latest
    etapas:
      - usa: actions/checkout@v2
      - usa: actions/setup-java@v1
        com:
          java-version: 1.8
      - nome: Publicar pacote
        executar: publicação do gradle
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. Executa o comando `publicação do gradle` para publicar no {% data variables.product.prodname_registry %}. A variável de ambiente `GITHUB_TOKEN` será definida com o conteúdo do segredo `GITHUB_TOKEN`.

   Para obter mais informações sobre o uso de segredos no seu fluxo de trabalho, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

### Publicar imagens no Repositório Central do Maven e em {% data variables.product.prodname_registry %}

Você pode publicar seus pacotes no Repositório Central Maven e em {% data variables.product.prodname_registry %}, configurando cada um no seu arquivo _build.gradle_.

Certifique-se de que seu arquivo _build.gradle_ inclua um repositório para seu repositório {% data variables.product.prodname_dotcom %} e seu provedor do Repositório Central do Maven.

Por exemplo, se fizer a implementação no Repositório Central por meio do projecto de hospedagem OSSRH, é possível que você deseje especificá-lo em um repositório de gerenciamento de distribuição com o `nome` definido como `OSSRH`. Se você fizer a implementação em {% data variables.product.prodname_registry %}, é possível que você deseje especificá-lo em um repositório de gerenciamento de distribuição com o nome `` definido como `GitHubPackages`.

Se sua organização for denominada "octocat" e seu repositório for denominado "hello-world", a configuração de {% data variables.product.prodname_registry %} em _build.gradle_ será parecida ao exemplo abaixo.

{% raw %}
```groovy{:copy}
publicando {
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

{% raw %}
```yaml{:copy}
nome: Publicar pacote no Repositório Central do Maven e nos Pacotes do GitHub
em:
  versão:
    tipos: [created]
trabalhos:
  publicar:
    runs-on: ubuntu-latest
    etapas:
      - usa: actions/checkout@v2
      - nome: Configura o Java
        usa: actions/setup-java@v1
        com:
          java-version: 1.8
      - nome: Publica no Repositório Central do Maven
        executa: publicação do gradle
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. Executa o comando `publicação do gradle` para publicar no repositório do Maven `OSSRH` e em {% data variables.product.prodname_registry %}. A variável de ambiente `MAVEN_USERNAME` será definida com o conteúdo do seu segredo `OSSRH_USERNAME`, e a variável de ambiente `MAVEN_PASSWORD` será definida com o conteúdo do seu segredo `OSSRH_TOKEN`. A variável de ambiente `GITHUB_TOKEN` será definida com o conteúdo do segredo `GITHUB_TOKEN`.

   Para obter mais informações sobre o uso de segredos no seu fluxo de trabalho, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
