---
title: Criar e testar o Java com o Ant
intro: Você pode criar um fluxo de trabalho de integração contínua (CI) no GitHub Actions para criar e testar o seu projeto Java com o Ant.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-ant
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
topics:
  - 'CI'
  - 'Java'
  - 'Ant'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introdução

Este guia mostra como criar um fluxo de trabalho que realiza a integração contínua (CI) para o seu projeto Java usando o sistema de criação do Ant. O fluxo de trabalho que você criar permitirá que você veja quando commits em um pull request gerarão falhas de criação ou de teste em comparação com o seu branch-padrão. Essa abordagem pode ajudar a garantir que seu código seja sempre saudável. Você pode estender seu fluxo de trabalho de CI para enviar artefatos a partir da execução de um fluxo de trabalho.

Os executores hospedados em {% data variables.product.prodname_dotcom %} têm uma cache de ferramentas com com software pré-instalado, que inclui kits de desenvolvimento Java (JDKs) e Ant. Para uma lista de software e as versões pré-instaladas para JDK e Ant, consulte "[Especificações para executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".

### Pré-requisitos

Você deve estar familiarizado com o YAML e a sintaxe do {% data variables.product.prodname_actions %}. Para obter mais informações, consulte:
- "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Aprenda {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

Recomendamos que você tenha um entendimento básico da estrutura do Java e do Ant. Para obter mais informações, consulte o [Manual do Apache Ant](https://ant.apache.org/manual/).

{% data reusables.actions.enterprise-setup-prereq %}

### Introdução com o modelo do fluxo de trabalho do Ant

{% data variables.product.prodname_dotcom %} fornece um modelo de fluxo de trabalho Ant que funcionará para a maioria dos projetos Java baseados no Ant. Para obter mais informações, consulte o [modelo do fluxo de trabalho do Ant](https://github.com/actions/starter-workflows/blob/main/ci/ant.yml).

Para começar rapidamente, você pode escolher o modelo do Ant pré-configurado ao criar um novo fluxo de trabalho. Para obter mais informações, consulte o início rápido "[{% data variables.product.prodname_actions %}](/actions/quickstart)".

Você também pode adicionar este fluxo de trabalho manualmente, criando um novo arquivo no diretório `.github/workflows` do seu repositório.

{% raw %}
```yaml{:copy}
name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Set up JDK 1.8
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Build with Ant
        run: ant -noinput -buildfile build.xml
```
{% endraw %}

Este fluxo de trabalho executa os seguintes passos:

1. O `checkout` faz o download de uma cópia do seu repositório no executor.
2. A etapa `setup-java` configura o Java 1.8 JDK.
3. A etapa "Criar com Ant" executa o alvo-padrão em seu `build.xml` de modo não interativo.

Os modelos-padrão do fluxo de trabalho são excelentes pontos de partida ao criar seu fluxo de trabalho de compilação e teste, e você pode personalizar o modelo para atender às necessidades do seu projeto.

{% data reusables.github-actions.example-github-runner %}

{% data reusables.github-actions.java-jvm-architecture %}

### Criar e testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código.

O fluxo de trabalho inicial executará o alvo-padrão especificado no arquivo _build.xml_.  Seu alvo-padrão será comumente definido para criar classes, executar testes e classes de pacote em seu formato distribuível como, por exemplo, um arquivo JAR.

Se você usa comandos diferentes para criar seu projeto ou se você quer executar um alvo diferente, você poderá especificá-los. Por exemplo, você pode desejar executar o `jar` alvo configurado no arquivo _build-ci.xml_.

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
    with:
      java-version: 1.8
  - name: Run the Ant jar target
    run: ant -noinput -buildfile build-ci.xml jar
```
{% endraw %}

### Empacotar dados do fluxo de trabalho como artefatos

Após a sua criação ter sido criada com sucesso e os seus testes aprovados, é possível que você deseje fazer o upload dos Java resultantes como um artefato de criação. Isso armazenará os pacotes criados como parte da execução do fluxo de trabalho e permitirá que você faça o download desses pacotes. Os artefatos podem ajudá-lo a testar e depurar os pull requests no seu ambiente local antes de serem mesclados. Para obter mais informações, consulte "[Dados recorrentes do fluxo de trabalho que usam artefatos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

De modo geral, o Ant cria arquivos de saída como JARs, EARs ou WARs no diretório `build/jar`. Você pode fazer upload do conteúdo desse diretório usando a ação `upload-artefact`.

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
  - run: ant -noinput -buildfile build.xml
  - uses: actions/upload-artifact@v2
    with:
      name: Package
      path: build/jar
```
{% endraw %}
