---
title: Criar e estar o Java com o Maven
intro: Você pode criar um fluxo de trabalho de integração contínua (CI) no GitHub Actions para criar e testar o seu projeto Java com o Maven.
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-maven
  - /actions/guides/building-and-testing-java-with-maven
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Maven
shortTitle: Criar & testar o Java com o Maven
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia mostra como criar um fluxo de trabalho que realiza a integração contínua (CI) para o seu projeto Java usando a ferramenta de gerenciamento de projeto do software Maven. O fluxo de trabalho que você criar permitirá que você veja quando commits em um pull request gerarão falhas de criação ou de teste em comparação com o seu branch-padrão. Essa abordagem pode ajudar a garantir que seu código seja sempre saudável. Você pode estender seu fluxo de trabalho de CI para memorizar arquivos e fazer o upload de artefatos a partir da execução de um fluxo de trabalho.

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %}
Os executores hospedados em {% data variables.product.prodname_dotcom %} têm uma cache de ferramentas com um software pré-instalado, que inclui kits de desenvolvimento Java (JDKs) e Maven. Para uma lista de software e as versões pré-instaladas para JDK e Maven, consulte "[Especificações para executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Pré-requisitos

Você deve estar familiarizado com o YAML e a sintaxe do {% data variables.product.prodname_actions %}. Para obter mais informações, consulte:
- "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

Recomendamos que você tenha um entendimento básico da estrutura do Java e do Maven. Para obter mais informações, consulte "[Guia de introdução ao Maven](http://maven.apache.org/guides/getting-started/index.html)" na documentação do Maven.

{% data reusables.actions.enterprise-setup-prereq %}

## Usando o fluxo de trabalho inicial do Maven

{% data variables.product.prodname_dotcom %} fornece um fluxo de trabalho inicial do Maven que funcionará para a maioria dos projetos Java baseados no Maven. Para obter mais informações, consulte o [Fluxo de trabalho inicial do Maven](https://github.com/actions/starter-workflows/blob/main/ci/maven.yml).

Para começar rapidamente, você pode escolher o fluxo de trabalho inicial pré-configurado do Maven ao criar um novo fluxo de trabalho. Para obter mais informações, consulte o início rápido "[{% data variables.product.prodname_actions %}](/actions/quickstart)".

Você também pode adicionar este fluxo de trabalho manualmente, criando um novo arquivo no diretório `.github/workflows` do seu repositório.

```yaml{:copy}
name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up JDK 11
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Build with Maven
        run: mvn --batch-mode --update-snapshots package
```

Este fluxo de trabalho executa os seguintes passos:

1. O `checkout` faz o download de uma cópia do seu repositório no executor.
2. A etapa `setup-java` configura o Java 11 JDK pelo Adoptium.
3. A etapa "Construir com Maven" executa o `pacote`-alvo Maven alvo de modo não interativo para garantir que seu código de seja criado, o seu teste seja aprovado e que seja possível criar um pacote.

Os fluxos de trabalho inicial padrão são excelentes pontos de partida ao criar seu fluxo de trabalho de criação e teste, e você pode personalizar o fluxo de trabalho inicial para atender às necessidades do seu projeto.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Criar e testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código.

O fluxo de trabalho inicial executará o `pacote`-alvo por padrão. Na configuração-padrão do Maven, este comando fará o download das dependências, criará classes, executará testes e classes de pacotes em seu formato distribuível, como, por exemplo, um arquivo JAR.

Se você usa comandos diferentes para criar seu projeto ou se desejar usar um alvo diferente, você poderá especificá-los. Por exemplo, você pode desejar executar o alvo de `verificar`, configurado em um arquivo _pom-ci.xml_.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Run the Maven verify phase
    run: mvn --batch-mode --update-snapshots verify
```

## Memorizar dependências

Ao usar executores hospedados em {% data variables.product.prodname_dotcom %}, você poderá armazenar em cache suas dependências para acelerar as execuções do seu fluxo de trabalho. Após a conclusão bem-sucedida, o seu repositório local do Maven será armazenado na infraestrutura do GitHub Actions. Para os fluxos de trabalho futuros, a cache será restaurada para que as dependências não precisem ser baixadas dos repositórios remotos do Maven. Você pode armazenar dependências simplesmente usando a ação [`setup-java`](https://github.com/marketplace/actions/setup-java-jdk) ou pode usar a ação [`cache` ](https://github.com/actions/cache) para uma configuração mais avançada e personalizada.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Set up JDK 11
    uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
      cache: maven
  - name: Build with Maven
    run: mvn --batch-mode --update-snapshots verify
```

Este fluxo de trabalho salvará o conteúdo do repositório local do Maven, localizado no diretório `.m2` do diretório inicial do executor. A chave da cache será o conteúdo em hash do _pom.xml_. Portanto, as alterações em _pom.xml_ invalidarão a cache.

## Empacotar dados do fluxo de trabalho como artefatos

Após a sua criação ter sido criada com sucesso e os seus testes aprovados, é possível que você deseje fazer o upload dos Java resultantes como um artefato de criação. Isso armazenará os pacotes criados como parte da execução do fluxo de trabalho e permitirá que você faça o download desses pacotes. Os artefatos podem ajudá-lo a testar e depurar os pull requests no seu ambiente local antes de serem mesclados. Para obter mais informações, consulte "[Dados recorrentes do fluxo de trabalho que usam artefatos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

De modo geral, o Maven criará arquivos de saída como JARs, EARs ou WARs no diretório `alvo`. Para fazer o upload como artefatos, você pode copiá-los em um novo diretório que contém artefatos a serem subidos. Por exemplo, você pode criar um diretório denominado `treinamento`. Em seguida, você pode fazer o upload do conteúdo desse diretório usando a ação `upload-artifact`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - run: mvn --batch-mode --update-snapshots verify
  - run: mkdir staging && cp target/*.jar staging
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: staging
```
