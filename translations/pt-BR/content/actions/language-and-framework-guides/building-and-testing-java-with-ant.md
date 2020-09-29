---
title: Criar e estar o Java com o Ant
intro: Você pode criar um fluxo de trabalho de integração contínua (CI) no GitHub Actions para criar e testar o seu projeto Java com o Ant.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introdução

Este guia mostra como criar um fluxo de trabalho que realiza a integração contínua (CI) para o seu projeto Java usando o sistema de criação do Ant. O fluxo de trabalho que você criar permitirá que você veja quando commits em um pull request gerarão falhas de criação ou de teste em comparação com o seu branch-padrão. Essa abordagem pode ajudar a garantir que seu código seja sempre saudável. Você pode estender seu fluxo de trabalho de CI para enviar artefatos a partir da execução de um fluxo de trabalho.

Os executores hospedados em {% data variables.product.prodname_dotcom %} têm uma cache de ferramentas com com software pré-instalado, que inclui kits de desenvolvimento Java (JDKs) e Ant. Para obter uma lista do software e das versões pré-instaladas para JDK e Ant, consulte "[Software instalado em executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/automating-your-workflow-with-github-actions/software-installed-on-github-hosted-runners)".

### Pré-requisitos

Você deve estar familiarizado com o YAML e a sintaxe do {% data variables.product.prodname_actions %}. Para obter mais informações, consulte:
- "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Configurando um fluxo de trabalho](/actions/automating-your-workflow-with-github-actions/configuring-a-workflow)"

Recomendamos que você tenha um entendimento básico da estrutura do Java e do Ant. Para obter mais informações, consulte o [Manual do Apache Ant](https://ant.apache.org/manual/).

{% data reusables.actions.enterprise-setup-prereq %}

### Introdução com o modelo do fluxo de trabalho do Ant

{% data variables.product.prodname_dotcom %} fornece um modelo de fluxo de trabalho Ant que funcionará para a maioria dos projetos Java baseados no Ant. Para obter mais informações, consulte o [modelo do fluxo de trabalho do Ant](https://github.com/actions/starter-workflows/blob/master/ci/ant.yml).

Para começar rapidamente, você pode escolher o modelo do Ant pré-configurado ao criar um novo fluxo de trabalho. Para obter mais informações, consulte "[Iniciando com modelos de fluxo de trabalho pré-configurados](/actions/automating-your-workflow-with-github-actions/starting-with-preconfigured-workflow-templates)".

Você também pode adicionar este fluxo de trabalho manualmente, criando um novo arquivo no diretório `.github/workflows` do seu repositório.

{% raw %}
```yaml
nome: Java CI

em: [push]

trabalho:
  build:
    runs-on: ubuntu-latest

    etapa:
      - usa: actions/checkout@v2
      - nome: Configure JDK 1.
        uso: actionp-java@v1
        com:
          java-version: 1.
      - nome: Construir com Ant
        executar: ant -noinput -buildfile build.xml
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
```yaml
etapas:
  - usa: actions/checkout@v2
  - usa: actions/setup-java@v1
    com:
      java-version: 1.8
  - nome: Executa o alvo do Ant jar
    executa: ant -noinput -buildfile build-ci.xml jar
```
{% endraw %}

### Empacotar dados do fluxo de trabalho como artefatos

Após a sua criação ter sido criada com sucesso e os seus testes aprovados, é possível que você deseje fazer o upload dos Java resultantes como um artefato de criação. Isso armazenará os pacotes criados como parte da execução do fluxo de trabalho e permitirá que você faça o download desses pacotes. Os artefatos podem ajudá-lo a testar e depurar os pull requests no seu ambiente local antes de serem mesclados. Para obter mais informações, consulte "[Dados recorrentes do fluxo de trabalho que usam artefatos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

De modo geral, o Ant cria arquivos de saída como JARs, EARs ou WARs no diretório `build/jar`. Você pode fazer upload do conteúdo desse diretório usando a ação `upload-artefact`.

{% raw %}
```yaml
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
