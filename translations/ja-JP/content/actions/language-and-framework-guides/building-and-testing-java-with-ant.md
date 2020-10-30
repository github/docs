---
title: AntでのJavaのビルドとテスト
intro: GitHub Actions中で継続的インテグレーション（CI）ワークフローを作成し、AntでJavaのプロジェクトのビルドとテストを行うことができます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### はじめに

このガイドは、Antビルドシステムを使ってJavaのプロジェクトのための継続的インテグレーション（CI）を実行するワークフローを作成する方法を紹介します。 作成するワークフローによって、プルリクエストに対するコミットがデフォルトブランチに対してビルドあるいはテストの失敗を引き起こしたことを見ることができるようになります。このアプローチは、コードが常に健全であることを保証するための役に立ちます。 CIワークフローを拡張して、ワークフローの実行による成果物をアップロードするようにもできます。

{% data variables.product.prodname_dotcom %}ホストランナーは、Java Development Kits（JDKs）及びAntを含むプリインストールされたソフトウェアを伴うツールキャッシュを持ちます。 ソフトウェア及びプリインストールされたバージョンのJDK及びAntのリストについては、「[{% data variables.product.prodname_dotcom %}ホストランナー上にインストールされているソフトウェア](/actions/automating-your-workflow-with-github-actions/software-installed-on-github-hosted-runners)」を参照してください。

### 必要な環境

YAMLと{% data variables.product.prodname_actions %}の構文に馴染んでいる必要があります。 詳しい情報については、以下を参照してください。
- [{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- [ワークフローの設定](/actions/automating-your-workflow-with-github-actions/configuring-a-workflow)

Java及びAntフレームワークの基本的な理解をしておくことをおすすめします。 詳しい情報については[Apache Ant Manual](https://ant.apache.org/manual/)を参照してください。

{% data reusables.actions.enterprise-setup-prereq %}

### Antワークフローテンプレートで始める

{% data variables.product.prodname_dotcom %}は、ほとんどのAntベースのJavaプロジェクトで使えるAntワークフローテンプレートを提供しています。 詳しい情報については[Antワークフローテンプレート](https://github.com/actions/starter-workflows/blob/master/ci/ant.yml)を参照してください。

素早く始めるには、新しいワークフローを作成する際に事前設定されたAntテンプレートを選択できます。 詳しい情報については「[事前設定されたワークフローテンプレートで始める](/actions/automating-your-workflow-with-github-actions/starting-with-preconfigured-workflow-templates)」を参照してください。

リポジトリの`.github/workflows`に新しいファイルを作成して、手作業でこのワークフローを追加することもできます。

{% raw %}
```yaml
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

このワークフローは以下のステップを実行します。

1. `checkout`ステップは、ランナーにリポジトリのコピーをダウンロードします。
2. `setup-java`ステップは、Java 1.8 JDKを設定します。
3. "Build with Ant"ステップは、`build.xml`中のデフォルトターゲットを非インタラクティブモードで実行します。

デフォルトのワークフローテンプレートは、ビルドとテストのワークフローを構築する際の素晴らしい出発点であり、プロジェクトの要求に合わせてこのテンプレートをカスタマイズできます。

{% data reusables.github-actions.example-github-runner %}

{% data reusables.github-actions.java-jvm-architecture %}

### コードのビルドとテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。

このスターターワークフローは、_build.xml_ファイルで指定されたデフォルトのターゲットを実行します。  デフォルトのターゲットは、一般的にクラスをビルドし、テストを実行し、たとえばJARファイルのような配布可能なフォーマットにクラスをパッケージするように設定されるでしょう。

プロジェクトのビルドに異なるコマンドを使ったり、異なるターゲットを実行したいのであれば、それらを指定できます。 たとえば、_build-ci.xml_ファイル中で設定された`jar`ターゲットを実行したいこともあるでしょう。

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
    with:
      java-version: 1.8
  - name: Run the Ant jar target
    run: ant -noinput -buildfile build-ci.xml jar
```
{% endraw %}

### 成果物としてのワークフローのデータのパッケージ化

ビルドが成功し、テストがパスした後には、結果のJavaのパッケージをビルドの成果物としてアップロードすることになるかもしれません。 そうすれば、ビルドされたパッケージをワークフローの実行の一部として保存することになり、それらをダウンロードできるようになります。 成果物によって、プルリクエストをマージする前にローカルの環境でテスト及びデバッグしやすくなります。 詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

Antは通常、JAR、EAR、WARのような出力ファイルを`build/jar`ディレクトリに作成します。 このディレクトリの内容は`upload-artifact`アクションを使ってアップロードできます。

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
