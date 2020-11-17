---
title: MavenでのJavaのビルドとテスト
intro: GitHub Actions中で継続的インテグレーション（CI）ワークフローを作成し、MavenでJavaのプロジェクトのビルドとテストを行うことができます。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-maven
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### はじめに

このガイドは、ソフトウェアプロジェクト管理ツールのMavenを使ってJavaのプロジェクトのための継続的インテグレーション（CI）を実行するワークフローを作成する方法を紹介します。 作成するワークフローによって、プルリクエストに対するコミットがデフォルトブランチに対してビルドあるいはテストの失敗を引き起こしたことを見ることができるようになります。このアプローチは、コードが常に健全であることを保証するための役に立ちます。 CIワークフローを拡張して、ファイルをキャッシュし、ワークフローの実行による成果物をアップロードするようにもできます。

{% data variables.product.prodname_dotcom %}ホストランナーは、Java Development Kits（JDKs）及びMavenを含むプリインストールされたソフトウェアを伴うツールキャッシュを持ちます。 JDK および Maven のソフトウェアとプリインストールされたバージョンのリストについては、「[{% data variables.product.prodname_dotcom %} でホストされているランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。

### 必要な環境

YAMLと{% data variables.product.prodname_actions %}の構文に馴染んでいる必要があります。 詳しい情報については、以下を参照してください。
- [{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- 「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」

Java及びMavenフレームワークの基本的な理解をしておくことをおすすめします。 詳しい情報については、Mavenのドキュメンテーションの[Maven Getting Started Guide](http://maven.apache.org/guides/getting-started/index.html)を参照してください。

{% data reusables.actions.enterprise-setup-prereq %}

### Mavenワークフローテンプレートで始める

{% data variables.product.prodname_dotcom %}は、ほとんどのMavenベースのJavaプロジェクトで使えるMavenワークフローテンプレートを提供しています。 詳しい情報については、[Maven ワークフローテンプレート](https://github.com/actions/starter-workflows/blob/main/ci/maven.yml)を参照してください。

素早く始めるには、新しいワークフローを作成する際に事前設定されたMavenテンプレートを選択できます。 詳しい情報については、「[{% data variables.product.prodname_actions %} のクイックスタート](/actions/quickstart)」を参照してください。

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
      - name: Build with Maven
        run: mvn -B package --file pom.xml
```
{% endraw %}

このワークフローは以下のステップを実行します。

1. `checkout`ステップは、ランナーにリポジトリのコピーをダウンロードします。
2. `setup-java`ステップは、Java 1.8 JDKを設定します。
3. "Build with Maven"ステップは、Mavenの`package`ターゲットを非インタラクティブモードで実行し、コードがビルドされ、テストをパスし、パッケージが作成できることを保証します。

デフォルトのワークフローテンプレートは、ビルドとテストのワークフローを構築する際の素晴らしい出発点であり、プロジェクトの要求に合わせてこのテンプレートをカスタマイズできます。

{% data reusables.github-actions.example-github-runner %}

{% data reusables.github-actions.java-jvm-architecture %}

### コードのビルドとテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。

スターターワークフローは、デフォルトで`package`タスクを実行します。 デフォルトのMavenの設定では、このコマンドは依存関係をダウンロードし、クラスをビルドし、テストを実行し、たとえばJARファイルのような配布可能なフォーマットにクラスをパッケージします。

プロジェクトのビルドに異なるコマンドを使ったり、異なるターゲットを使いたいのであれば、それらを指定できます。 たとえば、_pom-ci.xml_ファイル中で設定された`verify`ターゲットを実行したいこともあるでしょう。

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
    with:
      java-version: 1.8
  - name: Run the Maven verify phase
    run: mvn -B verify --file pom-ci.xml
```
{% endraw %}

### 依存関係のキャッシング

ワークフローの実行速度を上げるために、依存関係をキャッシュすることもできます。 実行に成功した後、ローカルのMavenリポジトリがGitHub Actionsのインフラストラクチャ上に保存されます。 その後のワークフローの実行では、キャッシュがリストアされ、依存関係をリモートのMavenリポジトリからダウンロードする必要がなくなります。 詳しい情報については「[ワークフローを高速化するための依存関係のキャッシング](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)」及び[`cache`アクション](https://github.com/marketplace/actions/cache)を参照してください。

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - name: Set up JDK 1.8
    uses: actions/setup-java@v1
    with:
      java-version: 1.8
  - name: Cache Maven packages
    uses: actions/cache@v2
    with:
      path: ~/.m2
      key: ${{ runner.os }}-m2-${{ hashFiles('**/pom.xml') }}
      restore-keys: ${{ runner.os }}-m2
  - name: Build with Maven
    run: mvn -B package --file pom.xml
```
{% endraw %}

このワークフローは、ランナーのホームディレクトリ内の`.m2`ディレクトリにあるローカルのMavenリポジトリの内容を保存します。 キャッシュのキーは_pom.xml_の内容をハッシュしたものになるので、_pom.xml_が変更されればキャッシュは無効になります。

### 成果物としてのワークフローのデータのパッケージ化

ビルドが成功し、テストがパスした後には、結果のJavaのパッケージをビルドの成果物としてアップロードすることになるかもしれません。 そうすれば、ビルドされたパッケージをワークフローの実行の一部として保存することになり、それらをダウンロードできるようになります。 成果物によって、プルリクエストをマージする前にローカルの環境でテスト及びデバッグしやすくなります。 詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

Mavenは通常、JAR、EAR、WARのような出力ファイルを`target`ディレクトリに作成します。 それらを成果物としてアップロードするために、アップロードする成果物を含む新しいディレクトリにそれらをコピーできます。 たとえば、`staging`というディレクトリを作成できます。 として、そのディレクトリの内容を`upload-artifact`アクションを使ってアップロードできます。

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
  - run: mvn -B package --file pom.xml
  - run: mkdir staging && cp target/*.jar staging
  - uses: actions/upload-artifact@v2
    with:
      name: Package
      path: staging
```
{% endraw %}
