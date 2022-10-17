---
title: GradleでのJavaのビルドとテスト
intro: GitHub Actions中で継続的インテグレーション（CI）ワークフローを作成し、GradleでJavaのプロジェクトのビルドとテストを行うことができます。
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410444'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドは、Gradleビルドシステムを使ってJavaのプロジェクトのための継続的インテグレーション（CI）を実行するワークフローを作成する方法を紹介します。 作成するワークフローによって、プルリクエストに対するコミットがデフォルトブランチに対してビルドあるいはテストの失敗を引き起こしたことを見ることができるようになります。このアプローチは、コードが常に健全であることを保証するための役に立ちます。 CI ワークフローを{% ifversion actions-caching %}キャッシュ ファイルに{% endif %}拡張して、ワークフロー実行による成果物をアップロードできます。

{% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %}{% else %}{% data variables.product.prodname_dotcom %} ホステッド ランナーにはツール キャッシュとプレインストールされたソフトウェアがあり、それには Java Development Kit (JDK) と Gradle が含まれます。 JDK と Gradle に関するソフトウェアとプレインストールされたバージョンの一覧については、「[{% data variables.product.prodname_dotcom %} ホステッド ランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。
{% endif %}

## 前提条件

YAMLと{% data variables.product.prodname_actions %}の構文に馴染んでいる必要があります。 詳細については、次を参照してください。
- [{% data variables.product.prodname_actions %} のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- [{% data variables.product.prodname_actions %} について](/actions/learn-github-actions)

Java及びGradleフレームワークの基本的な理解をしておくことをおすすめします。 詳細については、Gradle のドキュメントの[使用開始](https://docs.gradle.org/current/userguide/getting_started.html)に関するページを参照してください。

{% data reusables.actions.enterprise-setup-prereq %}

## Gradle スターター ワークフローの使用

{% data variables.product.prodname_dotcom %} には、ほとんどの Gradle ベースの Java プロジェクトで動作する Gradle スターター ワークフローが用意されています。 詳細については、「[Gradle スターター ワークフロー](https://github.com/actions/starter-workflows/blob/main/ci/gradle.yml)」を参照してください。

素早く始めるには、新しいワークフローを作成するときに事前構成済みの Gradle スターター ワークフローを選択できます。 詳細については、[{% data variables.product.prodname_actions %} クイックスタート](/actions/quickstart)に関するページを参照してください。

リポジトリの `.github/workflows` ディレクトリに新しいファイルを作成することにより、手作業でこのワークフローを追加することもできます。

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

このワークフローは以下のステップを実行します。

1. `checkout` ステップでは、ランナーにリポジトリのコピーがダウンロードされます。
2. `setup-java` ステップでは、Adoptium で Java 11 JDK が構成されます。
3. "Validate Gradle wrapper" ステップでは、ソース ツリーにある Gradle Wrapper JAR ファイルのチェックサムが検証されます。
4. "Build with Gradle" ステップでは、Gradle 組織が {% data variables.product.prodname_dotcom %} で提供する `gradle/gradle-build-action` アクションを使用してビルドが行われます。 このアクションでは、Gradle の呼び出し、結果の収集、ジョブ間の状態のキャッシュが処理されます。 詳細については、「[`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action)」を参照してください。

既定のスターター ワークフローは、ビルドとテストのワークフローを構築するときに適した出発点であり、プロジェクトの要求に合わせてこのスターター ワークフローをカスタマイズできます。

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## コードのビルドとテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。

スターター ワークフローでは、既定で `build` タスクが実行されます。 デフォルトのGradleの設定では、このコマンドは依存関係をダウンロードし、クラスをビルドし、テストを実行し、たとえばJARファイルのような配布可能なフォーマットにクラスをパッケージします。

プロジェクトのビルドに異なるコマンドを使ったり、異なるタスクを使いたいのであれば、それらを指定できます。 たとえば、_ci.gradle_ ファイルで構成されている `package` タスクを実行できます。

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

## 依存関係のキャッシング

ビルドの依存関係をキャッシュして、ワークフローの実行を高速化できます。 正常に実行されると、`gradle/gradle-build-action` によって Gradle ユーザー ホーム ディレクトリの重要な部分がキャッシュされます。 以降のジョブでは、キャッシュが復元されるので、ビルド スクリプトを再コンパイルする必要がなく、依存関係をリモート パッケージ リポジトリからダウンロードする必要がなくなります。

`gradle/gradle-build-action` アクションを使用しているときは、キャッシュが既定で有効になります。 詳細については、「[`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action#caching)」を参照してください。

{% endif %}

## 成果物としてのワークフローのデータのパッケージ化

ビルドが成功し、テストがパスした後には、結果のJavaのパッケージをビルドの成果物としてアップロードすることになるかもしれません。 そうすれば、ビルドされたパッケージをワークフローの実行の一部として保存することになり、それらをダウンロードできるようになります。 成果物によって、Pull Requestをマージする前にローカルの環境でテスト及びデバッグしやすくなります。 詳細については、「[アーティファクトを使用してワークフロー データを永続化する](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

Gradle では、通常、JAR、EAR、WAR のような出力ファイルが `build/libs` ディレクトリに作成されます。 `upload-artifact` アクションを使用して、そのディレクトリの内容をアップロードできます。

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
