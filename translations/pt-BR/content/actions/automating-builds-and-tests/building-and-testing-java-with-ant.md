---
title: Criar e testar o Java com o Ant
intro: Você pode criar um fluxo de trabalho de integração contínua (CI) no GitHub Actions para criar e testar o seu projeto Java com o Ant.
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-ant
  - /actions/guides/building-and-testing-java-with-ant
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Ant
shortTitle: Build & test Java & Ant
ms.openlocfilehash: d1e73fdce7bf23bf1b86ec3eb4d0f8acd9b6d292
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145083707'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia mostra como criar um fluxo de trabalho que realiza a integração contínua (CI) para o seu projeto Java usando o sistema de criação do Ant. O fluxo de trabalho que você criar permitirá que você veja quando commits em um pull request gerarão falhas de criação ou de teste em comparação com o seu branch-padrão. Essa abordagem pode ajudar a garantir que seu código seja sempre saudável. Você pode estender seu fluxo de trabalho de CI para enviar artefatos a partir da execução de um fluxo de trabalho.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} Os executores hospedados no {% data variables.product.prodname_dotcom %} têm um cache de ferramentas com programas de software pré-instalado, que incluem os JDKs (Java Development Kits) e o Ant. Para ver a lista de programas de software e as versões pré-instaladas do JDK e do Ant, confira "[Especificações dos executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Pré-requisitos

Você deve estar familiarizado com o YAML e a sintaxe do {% data variables.product.prodname_actions %}. Para obter mais informações, consulte:
- "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Aprenda a usar o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

Recomendamos que você tenha um entendimento básico da estrutura do Java e do Ant. Para obter mais informações, confira o [Manual do Apache Ant](https://ant.apache.org/manual/).

{% data reusables.actions.enterprise-setup-prereq %}

## Usando o fluxo de trabalho inicial do Ant

{% data variables.product.prodname_dotcom %} fornece um fluxo de trabalho inicial do Ant que funcionará para a maioria dos projetos Java baseados no Ant. Para obter mais informações, confira o [fluxo de trabalho inicial do Ant](https://github.com/actions/starter-workflows/blob/main/ci/ant.yml).

Para iniciar rapidamente, você pode escolher o fluxo de trabalho inicial pré-configurado ao criar um novo fluxo de trabalho. Para obter mais informações, confira o "[guia de início rápido do "{% data variables.product.prodname_actions %}](/actions/quickstart)".

Adicione também esse fluxo de trabalho manualmente criando um arquivo no diretório `.github/workflows` do repositório.

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
      - name: Build with Ant
        run: ant -noinput -buildfile build.xml
```

Este fluxo de trabalho realiza as etapas a seguir:

1. A etapa `checkout` baixa uma cópia do repositório no executor.
2. A etapa `setup-java` configura o JDK do Java 11 do Adoptium.
3. A etapa "Build com o Ant" executa o destino padrão no `build.xml` no modo não interativo.

Os fluxos de trabalho inicial padrão são excelentes pontos de partida ao criar seu fluxo de trabalho de criação e teste, e você pode personalizar o fluxo de trabalho inicial para atender às necessidades do seu projeto.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Criar e testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código.

O fluxo de trabalho inicial executará o destino padrão especificado no arquivo  _debuild.xml_.  Seu alvo-padrão será comumente definido para criar classes, executar testes e classes de pacote em seu formato distribuível como, por exemplo, um arquivo JAR.

Se você usa comandos diferentes para criar seu projeto ou se você quer executar um alvo diferente, você poderá especificá-los. Por exemplo, o ideal é executar o destino `jar` configurado no arquivo `_build-ci.xml_`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Run the Ant jar target
    run: ant -noinput -buildfile build-ci.xml jar
```

## Empacotar dados do fluxo de trabalho como artefatos

Após a sua criação ter sido criada com sucesso e os seus testes aprovados, é possível que você deseje fazer o upload dos Java resultantes como um artefato de criação. Isso armazenará os pacotes criados como parte da execução do fluxo de trabalho e permitirá que você faça o download desses pacotes. Os artefatos podem ajudá-lo a testar e depurar os pull requests no seu ambiente local antes de serem mesclados. Para obter mais informações, confira "[Como persistir dados de fluxo de trabalho usando artefatos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

Em geral, o Ant criará arquivos de saída como JARs, EARs ou WARs no diretório `build/jar`. Você pode carregar o conteúdo desse diretório usando a ação `upload-artifact`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  
  - run: ant -noinput -buildfile build.xml
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: build/jar
```
