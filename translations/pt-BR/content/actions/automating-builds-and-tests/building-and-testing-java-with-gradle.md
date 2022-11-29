---
title: Criar e testar o Java com o Gradle
intro: Você pode criar um fluxo de trabalho de integração contínua (CI) no GitHub Actions para criar e testar o seu projeto Java com o Gradle.
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-gradle
  - /actions/guides/building-and-testing-java-with-gradle
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Gradle
shortTitle: Build & test Java & Gradle
ms.openlocfilehash: 00fa6888a45dda090df51260795717bc994be022
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410440'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introdução

Este guia mostra como criar um fluxo de trabalho que realiza a integração contínua (CI) para o seu projeto Java usando o sistema de criação do Gradle. O fluxo de trabalho que você criar permitirá que você veja quando commits em um pull request gerarão falhas de criação ou de teste em comparação com o seu branch-padrão. Essa abordagem pode ajudar a garantir que seu código seja sempre saudável. Você pode estender seu fluxo de trabalho de CI para {% ifversion actions-caching %}arquivos de cache e{% endif %} carregar artefatos de uma execução de fluxo de trabalho.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} Os executores hospedados no {% data variables.product.prodname_dotcom %} têm um cache de ferramentas com programas de software pré-instalados, que inclui os JDKs (Java Development Kits) e o Gradle. Para ver a lista de programas de software e as versões pré-instaladas do JDK e do Gradle, confira "[Especificações dos executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Pré-requisitos

Você deve estar familiarizado com o YAML e a sintaxe do {% data variables.product.prodname_actions %}. Para obter mais informações, consulte:
- "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Aprenda a usar o {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

Recomendamos que você tenha um entendimento básico da estrutura do Java e do Gradle. Para obter mais informações, confira [Introdução](https://docs.gradle.org/current/userguide/getting_started.html) na documentação do Gradle.

{% data reusables.actions.enterprise-setup-prereq %}

## Usando o fluxo de trabalho inicial do Gradle

{% data variables.product.prodname_dotcom %} fornece um fluxo de trabalho inicial do Gradle que funcionará para a maioria dos projetos Java baseados no Gradle. Para obter mais informações, confira o [fluxo de trabalho inicial do Gradle](https://github.com/actions/starter-workflows/blob/main/ci/gradle.yml).

Para começar rapidamente, você pode escolher o fluxo de trabalho inicial pré-configurado do Gradle ao criar um novo fluxo de trabalho. Para obter mais informações, confira o "[guia de início rápido do "{% data variables.product.prodname_actions %}](/actions/quickstart)".

Adicione também esse fluxo de trabalho manualmente criando um arquivo no diretório `.github/workflows` do repositório.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Build with Gradle
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: build
```

Este fluxo de trabalho realiza as etapas a seguir:

1. A etapa `checkout` baixa uma cópia do repositório no executor.
2. A etapa `setup-java` configura o JDK do Java 11 do Adoptium.
3. A etapa "Validar o invólucro do Gradle" valida as somas de verificação dos arquivos JAR do Gradle Wrapper presentes na árvore de origem.
4. A etapa "Build com o Gradle" faz um build usando a ação `gradle/gradle-build-action` fornecida pela organização Gradle no {% data variables.product.prodname_dotcom %}. A acção tem a preocupação de invocar o Gradle, de recolher resultados e de manter o estado de cache entre os trabalho. Para obter mais informações, consulte [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action).

Os fluxos de trabalho inicial padrão são excelentes pontos de partida ao criar seu fluxo de trabalho de criação e teste, e você pode personalizar o fluxo de trabalho inicial para atender às necessidades do seu projeto.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Criar e testar seu código

Você pode usar os mesmos comandos usados localmente para criar e testar seu código.

O fluxo de trabalho inicial executará a tarefa `build` por padrão. Na configuração-padrão do Gradle, este comando irá baixar dependências, criar classes, executar testes e classes de pacotes em seu formato distribuível, como, por exemplo, um arquivo JAR.

Se você usa comandos diferentes para criar seu projeto ou se você desejar usar uma atividade diferente, você poderá especificá-los. Por exemplo, o ideal é executar a tarefa `package` configurada no arquivo _ci.gradle_.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Validate Gradle wrapper
    uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
  - name: Run the Gradle package task
    uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
    with:
      arguments: -b ci.gradle package
```

{% ifversion actions-caching %}

## Memorizar dependências

Suas dependências de build podem ser armazenadas em cache para acelerar as execuções do fluxo de trabalho. Após uma execução bem-sucedida, o `gradle/gradle-build-action` armazena em cache partes importantes do diretório base do usuário do Gradle. Em trabalhos futuros, o cache será restaurado para que os scripts de compilação não precisem ser recalculados e as dependências não precisem ser baixadas a partir de repositórios remotos de pacotes.

O cache é habilitado por padrão quando a ação `gradle/gradle-build-action` é usada. Para obter mais informações, confira [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action#caching).

{% endif %}

## Empacotar dados do fluxo de trabalho como artefatos

Após a sua criação ter sido criada com sucesso e os seus testes aprovados, é possível que você deseje fazer o upload dos Java resultantes como um artefato de criação. Isso armazenará os pacotes criados como parte da execução do fluxo de trabalho e permitirá que você faça o download desses pacotes. Os artefatos podem ajudá-lo a testar e depurar os pull requests no seu ambiente local antes de serem mesclados. Para obter mais informações, confira "[Como persistir dados de fluxo de trabalho usando artefatos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

Em geral, o Gradle criará arquivos de saída como JARs, EARs ou WARs no diretório `build/libs`. Você pode carregar o conteúdo desse diretório usando a ação `upload-artifact`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Validate Gradle wrapper
    uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
  - name: Build with Gradle
    uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
    with:
      arguments: build
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: build/libs
```
