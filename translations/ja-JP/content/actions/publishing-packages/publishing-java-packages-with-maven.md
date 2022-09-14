---
title: MavenでのJavaのパッケージの公開
intro: 継続的インテグレーション（CI）ワークフローの一部として、Javaのパッケージをレジストリに公開するためにMavenを利用できます。
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-maven
  - /actions/guides/publishing-java-packages-with-maven
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Java
  - Maven
shortTitle: Java packages with Maven
ms.openlocfilehash: e5a1c9ad670bef2e059f5808fa41e1fcbe5848af
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717918'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

{% data reusables.actions.publishing-java-packages-intro %}

## 前提条件

ワークフローファイルと設定オプションに関する基本的な理解をしておくことをおすすめします。 詳細については、「[{% data variables.product.prodname_actions %} について学ぶ](/actions/learn-github-actions)」を参照してください。

Maven を使用して Java プロジェクトの CI ワークフローを作成する方法の詳細については、「[Maven での Java のビルドとテスト](/actions/language-and-framework-guides/building-and-testing-java-with-maven)」を参照してください。

また、以下の基本的な理解があれば役立ちます。

- "[npm レジストリの操作](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[環境変数](/actions/reference/environment-variables)"
- "[暗号化されたシークレット](/actions/reference/encrypted-secrets)"
- "[ワークフローでの認証](/actions/reference/authentication-in-a-workflow)"

## パッケージの設定について

_pom.xml_ ファイル内の `groupId` および `artifactId` フィールドは、パッケージをレジストリにリンクするためにレジストリが使用するパッケージの一意の識別子を作成します。  詳細については、Apache Maven ドキュメントの「[Guide to uploading artifacts to the Central Repository](http://maven.apache.org/repository/guide-central-repository-upload.html)」(セントラル リポジトリに成果物をアップロードするためのガイド) を参照してください。

_pom.xml_ ファイルには、Maven がパッケージをデプロイするディストリビューション管理リポジトリの構成も含まれています。 各リポジトリは、名前とデプロイメントURLを持たなければなりません。 これらのリポジトリの認証は、Maven を実行しているユーザーのホーム ディレクトリにある _.m2/settings.xml_ ファイルで構成できます。

この `setup-java` アクションを使用して、デプロイ リポジトリと、そのリポジトリの認証を構成できます。 詳細については、「[`setup-java`](https://github.com/actions/setup-java)」を参照してください。

## Maven Central Repositoryへのパッケージの公開

新しいリリースを作成するたびに、パッケージを公開するワークフローを起動できます。 次の例のワークフローでは、`release` イベントが `created` 型でトリガーされたときに実行されます。 このワークフローは、CIテストをパスすればMaven Central Repositoryにパッケージを公開します。 `release` イベントの詳細については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#release)」を参照してください。

このワークフローでは、`setup-java` アクションを使用できます。 このアクションにより、特定のバージョンの JDK が `PATH` にインストールされますが、パッケージを発行するための Maven _settings.xml_ も構成されます。 デフォルトでは、設定ファイルは{% data variables.product.prodname_registry %}に対して設定されますが、Maven Central Repositoryなどの他のパッケージレジストリにデプロイするようにも設定できます。 _pom.xml_ で既にディストリビューション管理リポジトリが構成されている場合は、`setup-java` アクションの呼び出し時にその `id` を指定できます。

たとえば、OSSRH ホスティング プロジェクトを使用して Maven セントラル リポジトリにデプロイする場合、_pom.xml_ は `ossrh` の `id` を持つディストリビューション管理リポジトリを指定できます。

{% raw %}
```xml{:copy}
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>ossrh</id>
      <name>Central Repository OSSRH</name>
      <url>https://oss.sonatype.org/service/local/staging/deploy/maven2/</url>
    </repository>
  </distributionManagement>
</project>
```
{% endraw %}

この構成では、リポジトリ管理 `id` を `setup-java` アクションに指定することで、Maven セントラル リポジトリにパッケージを発行するワークフローを作成できます。 リポジトリの認証のために、ユーザ名とパスワードを含む環境変数を提供する必要もあります。

デプロイのステップでは、リポジトリに認証してもらうユーザ名と、認証のためのパスワードあるいはトークンで設定したシークレットを環境変数に設定する必要があります。  詳細については、[暗号化されたシークレットの作成と使用](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)に関するページを参照してください。

```yaml{:copy}
name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Maven Central Repository
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
```

このワークフローは以下のステップを実行します。

1. プロジェクトのリポジトリのコピーをチェックアウトします。
1. Java JDK を設定し、Maven _settings.xml_ ファイルも構成して、`MAVEN_USERNAME` および `MAVEN_PASSWORD` 環境変数を使用して `ossrh` リポジトリの認証を追加します。
1. {% data reusables.actions.publish-to-maven-workflow-step %}

   ワークフローでシークレットを使用する方法の詳細については、[暗号化されたシークレットの作成と使用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)に関するページを参照してください。

## {% data variables.product.prodname_registry %}へのパッケージの公開

新しいリリースを作成するたびに、パッケージを公開するワークフローを起動できます。 次の例のワークフローでは、`release` イベントが `created` 型でトリガーされたときに実行されます。 このワークフローは、CIテストをパスすれば{% data variables.product.prodname_registry %}にパッケージを公開します。 `release` イベントの詳細については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#release)」を参照してください。

このワークフローでは、`setup-java` アクションを使用できます。 このアクションにより、特定のバージョンの JDK が `PATH` にインストールされ、パッケージを {% data variables.product.prodname_registry %} に発行するための Maven _settings.xml_ も設定されます。 生成された _settings.xml_ では、`GITHUB_ACTOR` 環境変数をユーザー名として、`GITHUB_TOKEN` 環境変数をパスワードとして使用し、`github` の `id` を使用してサーバーの認証を定義します。 `GITHUB_TOKEN` 環境変数には、特別な `GITHUB_TOKEN` シークレットの値が割り当てられます。

{% data reusables.actions.github-token-permissions %}

Maven ベースのプロジェクトの場合は、`github` の `id` を使用して {% data variables.product.prodname_registry %} エンドポイントを指すディストリビューション リポジトリを _pom.xml_ ファイルに作成することで、これらの設定を利用できます。

たとえば、組織の名前が "octocat" で、リポジトリの名前が "hello-world" の場合、_pom.xml_ の {% data variables.product.prodname_registry %} 構成は次の例のようになります。

{% raw %}
```xml{:copy}
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>github</id>
      <name>GitHub Packages</name>
      <url>https://maven.pkg.github.com/octocat/hello-world</url>
    </repository>
  </distributionManagement>
</project>
```
{% endraw %}

この構成では、自動的に生成された _settings.xml_ を使用して、パッケージを {% data variables.product.prodname_registry %} に発行するワークフローを作成できます。

```yaml{:copy}
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

このワークフローは以下のステップを実行します。

1. プロジェクトのリポジトリのコピーをチェックアウトします。
1. Java JDK を設定し、`github` Maven リポジトリで `GITHUB_TOKEN` 環境変数を使用するための認証を追加するように Maven _settings.xml_ ファイルも自動的に構成します。
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   ワークフローでシークレットを使用する方法の詳細については、[暗号化されたシークレットの作成と使用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)に関するページを参照してください。

## Maven Central Repositoryと{% data variables.product.prodname_registry %}へのパッケージの公開

各レジストリの `setup-java` アクションを使用して、Maven セントラル リポジトリと {% data variables.product.prodname_registry %} の両方にパッケージを発行できます。

_pom.xml_ ファイルに、{% data variables.product.prodname_dotcom %} リポジトリと Maven セントラル リポジトリ プロバイダーの両方のディストリビューション管理リポジトリが含まれている必要があります。 たとえば、OSSRH ホスティング プロジェクトを使用してセントラル リポジトリにデプロイする場合は、`id` を `ossrh` に設定してディストリビューション管理リポジトリで指定し、`id` を `github` に設定してディストリビューション管理リポジトリで {% data variables.product.prodname_registry %} を指定できます。

```yaml{:copy}
name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java for publishing to Maven Central Repository
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish to the Maven Central Repository
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
      - name: Set up Java for publishing to GitHub Packages
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish to GitHub Packages
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

このワークフローでは、`setup-java` アクションを 2 回呼び出します。  `setup-java` アクションが実行されるたびに、パッケージを発行するための Maven _settings.xml_ ファイルが上書きされます。  リポジトリに対する認証の場合、_settings.xml_ ファイルはディストリビューション管理リポジトリ `id` とユーザー名とパスワードを参照します。

このワークフローは以下のステップを実行します。

1. プロジェクトのリポジトリのコピーをチェックアウトします。
1. 初回の `setup-java` の呼び出しを行います。 これにより、`ossrh` リポジトリの Maven _settings.xml_ ファイルが構成され、次の手順で定義されている環境変数に認証オプションが設定されます。
1. {% data reusables.actions.publish-to-maven-workflow-step %}
1. 2 回目の `setup-java` の呼び出しを行います。 これにより、{% data variables.product.prodname_registry %} の Maven _settings.xml_ ファイルが自動的に構成されます。
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   ワークフローでシークレットを使用する方法の詳細については、[暗号化されたシークレットの作成と使用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)に関するページを参照してください。
