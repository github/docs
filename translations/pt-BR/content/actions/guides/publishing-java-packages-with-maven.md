---
title: Publicar pacotes Java com Maven
intro: Você pode usar o Maven para publicar pacotes Java para um registro como parte do seu fluxo de trabalho de integração contínua (CI).
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-maven
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'Empacotando'
  - 'Publicar'
  - 'Java'
  - 'Maven'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introdução

{% data reusables.github-actions.publishing-java-packages-intro %}

### Pré-requisitos

Recomendamos que você tenha um entendimento básico dos arquivos de fluxo de trabalho e das opções de configuração. Para obter mais informações, consulte "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Para obter mais informações sobre a criação de um fluxo de trabalho de CI para seu projeto Java com Maven, consulte "[Criando e testando o Java com Maven](/actions/language-and-framework-guides/building-and-testing-java-with-maven)"

Você também pode achar útil ter um entendimento básico do seguinte:

- "[Configurar o npm para uso com o {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages)"
- "[Variáveis de ambiente](/actions/reference/environment-variables)"
- "[Segredos criptografados](/actions/reference/encrypted-secrets)"
- "[Autenticação em um fluxo de trabalho](/actions/reference/authentication-in-a-workflow)"

### Sobre a configuração do pacote

Os campos `groupId` e `artefactId` no arquivo _x-id="4">pom.xml_ criam a um identificador exclusivo para o seu pacote que os registros usam para vincular o seu pacote a um registro.  Para obter mais informações, consulte [Guia para fazer o upload de artefatos no Repositório Central](http://maven.apache.org/repository/guide-central-repository-upload.html) na documentação do Apache Maven.

O arquivo _pom.xml_ também contém a configuração para os repositórios de gerenciamento de distribuição nos quais o Maven implementará pacotes. Cada repositório deve ter um nome e uma URL de implementação. A autenticação para estes repositórios pode ser configurada no arquivo _.m2/settings.xml_ no diretório inicial do usuário que está executando o Maven.

É possível usar a ação de `setup-java` para configurar o repositório de imeplementação, bem como a autenticação para esse repositório. Para obter mais informações, consulte [`setup-java`](https://github.com/actions/setup-java).

### Publicar pacotes no Repositório Central do Maven

Cada vez que você criar uma nova versão, você poderá acionar um fluxo de trabalho para publicar o seu pacote. O fluxo de trabalho no exemplo abaixo é executado quando o evento `versão` é acionado com o tipo `criado`. O fluxo de trabalho publica o pacote no Repositório Central Maven se o teste de CI for aprovado. Para obter mais informações sobre o evento da `versão`, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#release)".

Neste fluxo de trabalho, você pode usar a ação `setup-java`. Esta ação instala uma determinada versão do JDK no `PATH`, mas também define _settings.xml_ do Maven para publicação de pacotes. Por padrão, o arquivo de configurações será definido como {% data variables.product.prodname_registry %}. No entanto, ele pode ser configurado para implementar outro registro de pacote, como, por exemplo, o Repositório Central do Maven. Se você já tem um repositório de gerenciamento de distribuição configurado em _pom.xml_, você poderá especificar esse `id` durante a chamada da ação `setup-java`.

Por exemplo, se você estava implantando no Repositório Central do Maven por meio do projeto de hospedagem OSSRH, seu _pom.xml_ poderia especificar um repositório de gerenciamento de distribuição com o `id` de `ossrh`.

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

Com esta configuração, é possível criar um fluxo de trabalho que publique seu pacote no Repositório Central do Maven especificando o `id` do gerenciamento do repositório para a ação `setup-java`. Você também deverá fornecer variáveis de ambiente que contenham o nome de usuário e senha para fazer a autenticação no repositório.

Na etapa de implementação, você deverá definir as variáveis de ambiente para o nome de usuário com o qual deseja fazer a autenticação no repositório e para um segredo que você configurou com a senha ou token para autenticação.  Para obter mais informações, consulte "[Criando e usando segredos encriptados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".


{% raw %}
```yaml{:copy}
name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Maven Central Repository
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
```
{% endraw %}

Este fluxo de trabalho executa os seguintes passos:

1. Verifica uma cópia do repositório do projeto.
1. Configura o Java JDK e o arquivo _settings.xml_ do Maven para adicionar autenticação ao repositório `ossrh` usando as variáveis de ambiente `MAVEN_USERNAME` e `MAVEN_PASSWORD`.
1. {% data reusables.github-actions.publish-to-maven-workflow-step %}

   Para obter mais informações sobre o uso de segredos no seu fluxo de trabalho, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

### Publicar pacotes em {% data variables.product.prodname_registry %}

Cada vez que você criar uma nova versão, você poderá acionar um fluxo de trabalho para publicar o seu pacote. O fluxo de trabalho no exemplo abaixo é executado quando o evento `versão` é acionado com o tipo `criado`. O fluxo de trabalho publica o pacote em {% data variables.product.prodname_registry %} se o teste de CI for aprovado. Para obter mais informações sobre o evento da `versão`, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#release)".

Neste fluxo de trabalho, você pode usar a ação `setup-java`. Esta ação instala a versão determinada do JDK no `PATH`, e também configura _settings.xml_ do Maven para a publicação {% data variables.product.prodname_registry %}. O _settings.xml_ gerado define a autenticação para um servidor com um `id` do `github`, usando a variável de ambiente `GITHUB_ACTOR` como o nome de usuário e a variável de ambiente `GITHUB_TOKEN` como a senha.

O `GITHUB_TOKEN` existe no repositório por padrão e tem permissões de leitura e gravação para pacotes no repositório em que o fluxo de trabalho é executado. Para obter mais informações, consulte "[Autenticação com o GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

Para um projeto baseado no Maven, você pode usar essas configurações ao criar um repositório de distribuição no seu arquivo _pom.xml_ com um `id` do `github` que aponta para seu ponto final {% data variables.product.prodname_registry %}.

Por exemplo, se sua organização é denominada "octocat" e seu repositório é denominado "hello-world", a configuração do {% data variables.product.prodname_registry %} no _pom.xml_ será parecida ao exemplo abaixo.

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

Com esta configuração, você pode criar um fluxo de trabalho que publica seu pacote em {% data variables.product.prodname_registry %}, fazendo uso do _settings.xml_ gerado automaticamente.

{% raw %}
```yaml{:copy}
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

Este fluxo de trabalho executa os seguintes passos:

1. Verifica uma cópia do repositório do projeto.
1. Configura o Java JDK e também configura automaticamente o arquivo _settings.xml_ do Maven para adicionar autenticação para o repositório do `github` do Maven para usar a variável de ambiente `GITHUB_TOKEN`.
1. {% data reusables.github-actions.publish-to-packages-workflow-step %}

   Para obter mais informações sobre o uso de segredos no seu fluxo de trabalho, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

### Publicar imagens no Repositório Central do Maven e em {% data variables.product.prodname_registry %}

Você pode publicar seus pacotes no Repositório Central Maven e em {% data variables.product.prodname_registry %}, usando a ação de `setup-java` para cada registro.

Certifique-se de que seu arquivo _pom.xml_ inclui um repositório de gerenciamento de distribuição tanto para seu repositório {% data variables.product.prodname_dotcom %} como para o seu provedor de Repositório Central do Maven. Por exemplo, se você fizer a implementação em um Repositório Central por meio do projeto de hospedagem OSSRH, é possível que você deseje especificá-la em um repositório de gerenciamento de distribuição com o `id` definido como `ossrh`. Além disso, você pode desejar especificar {% data variables.product.prodname_registry %} em um repositório de gerenciamento de distribuição com o `id` definido como `github`.

{% raw %}
```yaml{:copy}
name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Java for publishing to Maven Central Repository
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish to the Maven Central Repository
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
      - name: Set up Java for publishing to GitHub Packages
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Publish to GitHub Packages
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

Este fluxo de trabalho chama a ação `setup-java` duas vezes.  Cada vez que a ação `setup-java` é executada, ela sobrescreve o arquivo _settings.xml_ do Maven para a publicação de pacotes.  Para autenticação no repositório, o arquivo _settings.xml_ faz referência ao `ID`do repositório de gerenciamento de distribuição e ao nome de usuário e senha.

Este fluxo de trabalho executa os seguintes passos:

1. Verifica uma cópia do repositório do projeto.
1. Chama `setup-java` pela primeira vez. Isso configura o arquivo _settings.xml_ do Maven para o repositório `ossrh` e define as opções de autenticação para variáveis de ambiente definidas na próxima etapa.
1. {% data reusables.github-actions.publish-to-maven-workflow-step %}
1. Chama `setup-java` pela segunda vez. Isso configura automaticamente o arquivo _settings.xml_ do Maven para {% data variables.product.prodname_registry %}.
1. {% data reusables.github-actions.publish-to-packages-workflow-step %}

   Para obter mais informações sobre o uso de segredos no seu fluxo de trabalho, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
