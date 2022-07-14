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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドは、Gradleビルドシステムを使ってJavaのプロジェクトのための継続的インテグレーション（CI）を実行するワークフローを作成する方法を紹介します。 作成するワークフローによって、Pull Requestに対するコミットがデフォルトブランチに対してビルドあるいはテストの失敗を引き起こしたことを見ることができるようになります。このアプローチは、コードが常に健全であることを保証するための役に立ちます。 You can extend your CI workflow to {% ifversion actions-caching %}cache files and{% endif %} upload artifacts from a workflow run.

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %}
{% data variables.product.prodname_dotcom %}ホストランナーは、Java Development Kits（JDKs）及びGradleを含むプリインストールされたソフトウェアを伴うツールキャッシュを持ちます。 JDK および Gradle のソフトウェアとプリインストールされたバージョンのリストについては、「[{% data variables.product.prodname_dotcom %} でホストされているランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。
{% endif %}

## 必要な環境

YAMLと{% data variables.product.prodname_actions %}の構文に馴染んでいる必要があります。 詳しい情報については、以下を参照してください。
- [{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- 「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」

Java及びGradleフレームワークの基本的な理解をしておくことをおすすめします。 詳しい情報については、Gradleのドキュメンテーションの[Getting Started](https://docs.gradle.org/current/userguide/getting_started.html)を参照してください。

{% data reusables.actions.enterprise-setup-prereq %}

## Using the Gradle starter workflow

{% data variables.product.prodname_dotcom %} provides a Gradle starter workflow that will work for most Gradle-based Java projects. For more information, see the [Gradle starter workflow](https://github.com/actions/starter-workflows/blob/main/ci/gradle.yml).

To get started quickly, you can choose the preconfigured Gradle starter workflow when you create a new workflow. 詳しい情報については、「[{% data variables.product.prodname_actions %} のクイックスタート](/actions/quickstart)」を参照してください。

リポジトリの`.github/workflows`に新しいファイルを作成して、手作業でこのワークフローを追加することもできます。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

1. `checkout`ステップは、ランナーにリポジトリのコピーをダウンロードします。
2. `setup-java` ステップは、 Adoptium で Java 11 JDK を設定します。
3. The "Validate Gradle wrapper" step validates the checksums of Gradle Wrapper JAR files present in the source tree.
4. The "Build with Gradle" step does a build using the `gradle/gradle-build-action` action provided by the Gradle organization on {% data variables.product.prodname_dotcom %}. The action takes care of invoking Gradle, collecting results, and caching state between jobs. For more information see [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action).

The default starter workflows are excellent starting points when creating your build and test workflow, and you can customize the starter workflow to suit your project’s needs.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## コードのビルドとテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。

スターターワークフローは、デフォルトで`build`タスクを実行します。 デフォルトのGradleの設定では、このコマンドは依存関係をダウンロードし、クラスをビルドし、テストを実行し、たとえばJARファイルのような配布可能なフォーマットにクラスをパッケージします。

プロジェクトのビルドに異なるコマンドを使ったり、異なるタスクを使いたいのであれば、それらを指定できます。 たとえば、_ci.gradle_ファイル中で設定された`package`タスクを実行したいこともあるでしょう。

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

Your build dependencies can be cached to speed up your workflow runs. After a successful run, the `gradle/gradle-build-action` caches important parts of the Gradle user home directory. In future jobs, the cache will be restored so that build scripts won't need to be recompiled and dependencies won't need to be downloaded from remote package repositories.

Caching is enabled by default when using the `gradle/gradle-build-action` action. For more information, see [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action#caching).

{% endif %}

## 成果物としてのワークフローのデータのパッケージ化

ビルドが成功し、テストがパスした後には、結果のJavaのパッケージをビルドの成果物としてアップロードすることになるかもしれません。 そうすれば、ビルドされたパッケージをワークフローの実行の一部として保存することになり、それらをダウンロードできるようになります。 成果物によって、Pull Requestをマージする前にローカルの環境でテスト及びデバッグしやすくなります。 詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

Gradleは通常、JAR、EAR、WARのような出力ファイルを`build/libs`ディレクトリに作成します。 このディレクトリの内容は`upload-artifact`アクションを使ってアップロードできます。

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
