---
title: AntでのJavaのビルドとテスト
intro: GitHub Actions中で継続的インテグレーション（CI）ワークフローを作成し、AntでJavaのプロジェクトのビルドとテストを行うことができます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088735'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドは、Antビルドシステムを使ってJavaのプロジェクトのための継続的インテグレーション（CI）を実行するワークフローを作成する方法を紹介します。 作成するワークフローによって、プルリクエストに対するコミットがデフォルトブランチに対してビルドあるいはテストの失敗を引き起こしたことを見ることができるようになります。このアプローチは、コードが常に健全であることを保証するための役に立ちます。 CIワークフローを拡張して、ワークフローの実行による成果物をアップロードするようにもできます。

{% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %}{% else %}{% data variables.product.prodname_dotcom %} ホスト型ランナーにはツール キャッシュとプレインストールされたソフトウェアがあり、それには Java Development Kit (JDK) と Ant が含まれます。 JDK と Ant に関するソフトウェアとプレインストールされたバージョンの一覧については、「[{% data variables.product.prodname_dotcom %} ホスト型ランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。
{% endif %}

## 前提条件

YAMLと{% data variables.product.prodname_actions %}の構文に馴染んでいる必要があります。 詳細については、次を参照してください。
- [{% data variables.product.prodname_actions %} のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- "[{% data variables.product.prodname_actions %} について](/actions/learn-github-actions)"

Java及びAntフレームワークの基本的な理解をしておくことをおすすめします。 詳細については、[Apache Ant マニュアル](https://ant.apache.org/manual/)を参照してください。

{% data reusables.actions.enterprise-setup-prereq %}

## Ant スターター ワークフローの使用

{% data variables.product.prodname_dotcom %} からはほとんどの Ant ベース Java プロジェクトで機能する Ant スターター ワークフローが提供されます。 詳細については、「[Ant スターター ワークフロー](https://github.com/actions/starter-workflows/blob/main/ci/ant.yml)」を参照してください。

素早く始めるには、新しいワークフローを作成するときに事前構成済みの Ant スターター ワークフローを選択できます。 詳細については、[{% data variables.product.prodname_actions %} クイックスタート](/actions/quickstart)に関するページを参照してください。

リポジトリの `.github/workflows` ディレクトリに新しいファイルを作成することにより、手作業でこのワークフローを追加することもできます。

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

このワークフローは以下のステップを実行します。

1. `checkout` ステップでは、ランナーにリポジトリのコピーがダウンロードされます。
2. `setup-java` ステップでは、Adoptium で Java 11 JDK が構成されます。
3. "Build with Ant" ステップは、`build.xml` 中のデフォルトターゲットを非インタラクティブ モードで実行します。

既定のスターター ワークフローは、ビルドとテストのワークフローを構築するときに適した出発点であり、プロジェクトの要求に合わせてこのスターター ワークフローをカスタマイズできます。

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## コードのビルドとテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。

このスターター ワークフローは、_build.xml_ ファイルで指定されたデフォルトのターゲットを実行します。  デフォルトのターゲットは、一般的にクラスをビルドし、テストを実行し、たとえばJARファイルのような配布可能なフォーマットにクラスをパッケージするように設定されるでしょう。

プロジェクトのビルドに異なるコマンドを使ったり、異なるターゲットを実行したいのであれば、それらを指定できます。 たとえば、`_build-ci.xml_` ファイルで構成されている `jar` ターゲットを実行できます。

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

## 成果物としてのワークフローのデータのパッケージ化

ビルドが成功し、テストがパスした後には、結果のJavaのパッケージをビルドの成果物としてアップロードすることになるかもしれません。 そうすれば、ビルドされたパッケージをワークフローの実行の一部として保存することになり、それらをダウンロードできるようになります。 成果物によって、Pull Requestをマージする前にローカルの環境でテスト及びデバッグしやすくなります。 詳細については、「[アーティファクトを使用してワークフロー データを永続化する](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

Ant では、通常、JAR、EAR、WAR のような出力ファイルが `build/jar` ディレクトリに作成されます。 `upload-artifact` アクションを使用してそのディレクトリの内容をアップロードできます。

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
