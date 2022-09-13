---
title: Publicar pacotes Java com Maven
intro: Você pode usar o Maven para publicar pacotes Java para um registro como parte do seu fluxo de trabalho de integração contínua (CI).
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717914'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

{% data reusables.actions.publishing-java-packages-intro %}

## Pré-requisitos

Recomendamos que você tenha um entendimento básico dos arquivos de fluxo de trabalho e das opções de configuração. Para obter mais informações, confira "[Aprenda a usar o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Para obter mais informações sobre como criar um fluxo de trabalho de CI para seu projeto Java com o Maven, confira "[Como criar e testar o Java com o Maven](/actions/language-and-framework-guides/building-and-testing-java-with-maven)".

Você também pode achar útil ter um entendimento básico do seguinte:

- "[Como trabalhar com o registro npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[Variáveis de ambiente](/actions/reference/environment-variables)"
- "[Segredos criptografados](/actions/reference/encrypted-secrets)"
- "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow)"

## Sobre a configuração do pacote

Os campos `groupId` e `artifactId` do arquivo _pom.xml_ criam um identificador exclusivo para o pacote que os registros usam para vincular seu pacote a um registro.  Para obter mais informações, confira [Guia para upload de artefatos no Central Repository](http://maven.apache.org/repository/guide-central-repository-upload.html) na documentação do Apache Maven.

O arquivo _pom.xml_ também contém a configuração dos repositórios de gerenciamento de distribuição nos quais o Maven implantará os pacotes. Cada repositório deve ter um nome e uma URL de implementação. A autenticação para esses repositórios pode ser configurada no arquivo _.m2/settings.xml_ no diretório inicial do usuário que executa o Maven.

Use a ação `setup-java` para configurar o repositório de implantação, bem como a autenticação para esse repositório. Para obter mais informações, confira [`setup-java`](https://github.com/actions/setup-java).

## Publicar pacotes no Repositório Central do Maven

Cada vez que você criar uma nova versão, você poderá acionar um fluxo de trabalho para publicar o seu pacote. O fluxo de trabalho no exemplo abaixo é executado quando o evento `release` é disparado com o tipo `created`. O fluxo de trabalho publica o pacote no Repositório Central Maven se o teste de CI for aprovado. Para obter mais informações sobre o evento `release`, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#release)".

Neste fluxo de trabalho, você pode usar a ação `setup-java`. Essa ação instala a versão fornecida do JDK no `PATH`, mas também configura um _settings.xml_ do Maven para pacotes de publicação. Por padrão, o arquivo de configurações será definido como {% data variables.product.prodname_registry %}. No entanto, ele pode ser configurado para implementar outro registro de pacote, como, por exemplo, o Repositório Central do Maven. Se você já tiver um repositório de gerenciamento de distribuição configurado no _pom.xml_, especifique essa `id` durante a invocação da ação `setup-java`.

Por exemplo, se você estiver fazendo a implantação no Maven Central Repository por meio do projeto de hospedagem do OSSRH, o _pom.xml_ poderá especificar um repositório de gerenciamento de distribuição com a `id` igual a `ossrh`.

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

Com essa configuração, você pode criar um fluxo de trabalho que publica seu pacote no Maven Central Repository especificando o gerenciamento do repositório `id` para a ação `setup-java`. Você também deverá fornecer variáveis de ambiente que contenham o nome de usuário e senha para fazer a autenticação no repositório.

Na etapa de implementação, você deverá definir as variáveis de ambiente para o nome de usuário com o qual deseja fazer a autenticação no repositório e para um segredo que você configurou com a senha ou token para autenticação.  Para obter mais informações, confira "[Como criar e usar segredos criptografados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

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

Este fluxo de trabalho realiza as etapas a seguir:

1. Verifica uma cópia do repositório do projeto.
1. Configura o JDK do Java e o arquivo _settings.xml_ do Maven para adicionar a autenticação ao repositório `ossrh` usando as variáveis de ambiente `MAVEN_USERNAME` e `MAVEN_PASSWORD`.
1. {% data reusables.actions.publish-to-maven-workflow-step %}

   Para obter mais informações sobre como usar segredos no fluxo de trabalho, confira "[Como criar e usar segredos criptografados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Publicar pacotes em {% data variables.product.prodname_registry %}

Cada vez que você criar uma nova versão, você poderá acionar um fluxo de trabalho para publicar o seu pacote. O fluxo de trabalho no exemplo abaixo é executado quando o evento `release` é disparado com o tipo `created`. O fluxo de trabalho publica o pacote em {% data variables.product.prodname_registry %} se o teste de CI for aprovado. Para obter mais informações sobre o evento `release`, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#release)".

Neste fluxo de trabalho, você pode usar a ação `setup-java`. Essa ação instala a versão fornecida do JDK no `PATH` e configura um _settings.xml_ do Maven para publicar o pacote no {% data variables.product.prodname_registry %}. O _settings.xml_ gerado define a autenticação de um servidor com a `id` `github`, usando a variável de ambiente `GITHUB_ACTOR` como o nome de usuário e a variável de ambiente `GITHUB_TOKEN` como a senha. A variável de ambiente `GITHUB_TOKEN` recebe o valor do segredo especial `GITHUB_TOKEN`.

{% data reusables.actions.github-token-permissions %}

Para um projeto baseado no Maven, você pode usar essas configurações criando um repositório de distribuição no arquivo _pom.xml_ com uma `id` igual a `github` que aponta para o ponto de extremidade do {% data variables.product.prodname_registry %}.

Por exemplo, se o nome da sua organização for "octocat" e o nome do repositório for "hello-world", a configuração do {% data variables.product.prodname_registry %} no _pom.xml_ será semelhante ao exemplo abaixo.

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

Com essa configuração, você pode criar um fluxo de trabalho que publica seu pacote no {% data variables.product.prodname_registry %} usando o _settings.xml_ gerado automaticamente.

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

Este fluxo de trabalho realiza as etapas a seguir:

1. Verifica uma cópia do repositório do projeto.
1. Configura o JDK do Java e configura automaticamente o arquivo _settings.xml_ do Maven para adicionar autenticação ao repositório `github` do Maven a fim de usar a variável de ambiente `GITHUB_TOKEN`.
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   Para obter mais informações sobre como usar segredos no fluxo de trabalho, confira "[Como criar e usar segredos criptografados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Publicar imagens no Repositório Central do Maven e em {% data variables.product.prodname_registry %}

Você pode publicar seus pacotes no Maven Central Repository e no {% data variables.product.prodname_registry %} usando a ação `setup-java` para cada registro.

Verifique se o arquivo _pom.xml_ inclui um repositório de gerenciamento de distribuição para seu repositório do {% data variables.product.prodname_dotcom %} e o provedor do Maven Central Repository. Por exemplo, se você fizer a implantação no Central Repository por meio do projeto de hospedagem do OSSRH, o ideal será especificá-lo em um repositório de gerenciamento de distribuição com a `id` definida como `ossrh` e especificar o {% data variables.product.prodname_registry %} em um repositório de gerenciamento de distribuição com a `id` definida com `github`.

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

Esse fluxo de trabalho chama a ação `setup-java` duas vezes.  Sempre que a ação `setup-java` for executada, ela substituirá o arquivo _settings.xml_ do Maven para publicação de pacotes.  Para autenticação no repositório, o arquivo _settings.xml_ referencia o repositório de gerenciamento de distribuição `id`, bem como o nome de usuário e a senha.

Este fluxo de trabalho realiza as etapas a seguir:

1. Verifica uma cópia do repositório do projeto.
1. Chama `setup-java` pela primeira vez. Isso configura o arquivo  _settings.xml_ do Maven para o repositório `ossrh` e define as opções de autenticação para variáveis de ambiente definidas na próxima etapa.
1. {% data reusables.actions.publish-to-maven-workflow-step %}
1. Chama `setup-java` pela segunda vez. Isso configura automaticamente o arquivo _settings.xml_ do Maven para o {% data variables.product.prodname_registry %}.
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   Para obter mais informações sobre como usar segredos no fluxo de trabalho, confira "[Como criar e usar segredos criptografados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
