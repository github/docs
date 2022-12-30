---
title: MavenでのJavaのビルドとテスト
intro: GitHub Actions中で継続的インテグレーション（CI）ワークフローを作成し、MavenでJavaのプロジェクトのビルドとテストを行うことができます。
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
shortTitle: Build & test Java with Maven
ms.openlocfilehash: 59d8961a7fdd1d8b84a05b8762bb09be3d2ab01c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179808'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドは、ソフトウェアプロジェクト管理ツールのMavenを使ってJavaのプロジェクトのための継続的インテグレーション（CI）を実行するワークフローを作成する方法を紹介します。 作成するワークフローによって、プルリクエストに対するコミットがデフォルトブランチに対してビルドあるいはテストの失敗を引き起こしたことを見ることができるようになります。このアプローチは、コードが常に健全であることを保証するための役に立ちます。 CI ワークフローを{% ifversion actions-caching %}キャッシュ ファイルに{% endif %}拡張して、ワークフロー実行による成果物をアップロードできます。

{% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %}{% else %}{% data variables.product.prodname_dotcom %} ホステッド ランナーにはツール キャッシュとプレインストールされたソフトウェアがあり、それには Java Development Kit (JDK) と Maven が含まれます。 JDK と Maven に関するソフトウェアとプレインストールされたバージョンの一覧については、「[{% data variables.product.prodname_dotcom %} ホステッド ランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。
{% endif %}

## 前提条件

YAMLと{% data variables.product.prodname_actions %}の構文に馴染んでいる必要があります。 詳細については、次を参照してください。
- [{% data variables.product.prodname_actions %} のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- [{% data variables.product.prodname_actions %} について](/actions/learn-github-actions)

Java及びMavenフレームワークの基本的な理解をしておくことをおすすめします。 詳細については、Maven ドキュメントの [Maven 使用開始ガイド](http://maven.apache.org/guides/getting-started/index.html)に関するページを参照してください。

{% data reusables.actions.enterprise-setup-prereq %}

## Maven スターター ワークフローの使用

{% data variables.product.prodname_dotcom %} には、ほとんどの Maven ベースの Java プロジェクトで動作する Maven スターター ワークフローが用意されています。 詳細については、「[Maven スターター ワークフロー](https://github.com/actions/starter-workflows/blob/main/ci/maven.yml)」を参照してください。

素早く始めるには、新しいワークフローを作成するときに事前構成済みの Maven スターター ワークフローを選択できます。 詳細については、[{% data variables.product.prodname_actions %} クイックスタート](/actions/quickstart)に関するページを参照してください。

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
      - name: Build with Maven
        run: mvn --batch-mode --update-snapshots package
```

このワークフローは以下のステップを実行します。

1. `checkout` ステップでは、ランナーにリポジトリのコピーがダウンロードされます。
2. `setup-java` ステップでは、Adoptium で Java 11 JDK が構成されます。
3. "Build with Maven" ステップでは、Maven `package` ターゲットが非インタラクティブ モードで実行されて、コードをビルド、テストに合格し、パッケージを作成できるようになります。

既定のスターター ワークフローは、ビルドとテストのワークフローを構築するときに適した出発点であり、プロジェクトの要求に合わせてこのスターター ワークフローをカスタマイズできます。

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## コードのビルドとテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。

スターター ワークフローでは、既定で `package` ターゲットが実行されます。 デフォルトのMavenの設定では、このコマンドは依存関係をダウンロードし、クラスをビルドし、テストを実行し、たとえばJARファイルのような配布可能なフォーマットにクラスをパッケージします。

プロジェクトのビルドに異なるコマンドを使ったり、異なるターゲットを使いたいのであれば、それらを指定できます。 たとえば、_pom-ci.xml_ ファイルで構成されている `verify` ターゲットを実行できます。

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

{% ifversion actions-caching %}

## 依存関係のキャッシング

ワークフローの実行速度を上げるために、依存関係をキャッシュすることもできます。 実行に成功すると、ローカルの Maven リポジトリはキャッシュに格納されます。 その後のワークフローの実行では、キャッシュがリストアされ、依存関係をリモートのMavenリポジトリからダウンロードする必要がなくなります。 [`setup-java` アクション](https://github.com/marketplace/actions/setup-java-jdk)を使用するだけで依存関係をキャッシュすることも、カスタム構成や高度な構成に対して [`cache` アクション](https://github.com/actions/cache)を使用することもできます。

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

このワークフローでは、ランナーのホーム ディレクトリの `.m2` ディレクトリにあるローカル Maven リポジトリの内容が保存されます。 キャッシュ キーは _pom.xml_ ハッシュされた内容であるため、_pom.xml_ を変更するとキャッシュは無効になります。

{% endif %}

## 成果物としてのワークフローのデータのパッケージ化

ビルドが成功し、テストがパスした後には、結果のJavaのパッケージをビルドの成果物としてアップロードすることになるかもしれません。 そうすれば、ビルドされたパッケージをワークフローの実行の一部として保存することになり、それらをダウンロードできるようになります。 成果物によって、Pull Requestをマージする前にローカルの環境でテスト及びデバッグしやすくなります。 詳細については、「[アーティファクトを使用してワークフロー データを永続化する](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

Maven では、通常、JAR、EAR、WAR のような出力ファイルが `target` ディレクトリに作成されます。 それらを成果物としてアップロードするために、アップロードする成果物を含む新しいディレクトリにそれらをコピーできます。 たとえば、`staging` というディレクトリを作成できます。 その後、`upload-artifact` アクションを使用して、そのディレクトリの内容をアップロードできます。

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
