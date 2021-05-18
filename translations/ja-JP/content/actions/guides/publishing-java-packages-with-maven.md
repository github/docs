---
title: MavenでのJavaのパッケージの公開
intro: 継続的インテグレーション（CI）ワークフローの一部として、Javaのパッケージをレジストリに公開するためにMavenを利用できます。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-maven
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Java
  - Maven
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### はじめに

{% data reusables.github-actions.publishing-java-packages-intro %}

### 必要な環境

ワークフローファイルと設定オプションに関する基本的な理解をしておくことをおすすめします。 詳しい情報については、「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」を参照してください。

MavenでのJavaプロジェクトのためのCIワークフローの作成に関する詳しい情報については「[MavenでのJavaのビルドとテスト](/actions/language-and-framework-guides/building-and-testing-java-with-maven)」を参照してください。

また、以下の基本的な理解があれば役立ちます。

- "[Working with the npm registry](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- 「[環境変数](/actions/reference/environment-variables)」
- 「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」
- 「[ワークフローでの認証](/actions/reference/authentication-in-a-workflow)」

### パッケージの設定について

_pom.xml_ファイル中の`groupId`及び`artifactId`フィールドは、レジストリがパッケージをレジストリにリンクするために利用するパッケージのユニークな識別子を作成します。  詳しい情報については、Apache Mavenのドキュメンテーションの[Guide to uploading artifacts to the Central Repository](http://maven.apache.org/repository/guide-central-repository-upload.html)を参照してください。

_pom.xml_ファイルには、Mavenがパッケージをデプロイする配布管理リポジトリの設定も含まれています。 各リポジトリは、名前とデプロイメントURLを持たなければなりません。 これらのリポジトリに対する認証は、Mavenを実行するユーザーのホームディレクトリ内の_.m2/settings.xml_ファイルに設定できます。

`setup-java`アクションを使って、デプロイメントリポジトリを認証と合わせて設定できます。 詳しい情報については[`setup-java`](https://github.com/actions/setup-java)を参照してください。

### Maven Central Repositoryへのパッケージの公開

新しいリリースを作成するたびに、パッケージを公開するワークフローを起動できます。 以下の例でのワークフローは、`created`という種類で`release`イベントが発生したときに実行されます。 このワークフローは、CIテストをパスすればMaven Central Repositoryにパッケージを公開します。 `release`イベントに関する詳しい情報については「[ワークフローを起動するイベント](/actions/reference/events-that-trigger-workflows#release)」を参照してください。

このワークフロー内では、`setup-java`アクションを利用できます。 このアクションは、指定されたバージョンのJDKを`PATH`にインストールしますが、パッケージの公開のためのMavenの_settings.xml_も設定します。 デフォルトでは、設定ファイルは{% data variables.product.prodname_registry %}に対して設定されますが、Maven Central Repositoryなどの他のパッケージレジストリにデプロイするようにも設定できます。 _pom.xml_に設定済みの配布管理リポジトリがすでにあるなら、`setup-java`アクションの呼び出しの際にその`id`を指定できます。

たとえば、OSSRHホスティングプロジェクトを通じてMaven Central Repositoryにデプロイしていたなら、_pom.xml_ は`ossrh`の`id`で配布管理リポジトリを指定できます。

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

この設定で、リポジトリ管理の`id`を`setup-java`アクションに指定してやることで、パッケージをMaven Central Repositoryに公開するワークフローを作成できます。 リポジトリの認証のために、ユーザ名とパスワードを含む環境変数を提供する必要もあります。

デプロイのステップでは、リポジトリに認証してもらうユーザ名と、認証のためのパスワードあるいはトークンで設定したシークレットを環境変数に設定する必要があります。  詳しい情報については、「[暗号化されたシークレットの作成と利用](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。


{% raw %}
```yaml{:copy}
name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Maven Central Repository
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
```
{% endraw %}

このワークフローは以下のステップを実行します。

1. プロジェクトのリポジトリのコピーをチェックアウトします。
1. Java JDKをセットアップし、環境変数の`MAVEN_USERNAME`と`MAVEN_PASSWORD`を使って`ossrh`リポジトリに対する認証を追加するためにMavenの_settings.xml_ファイルも設定します。
1. {% data reusables.github-actions.publish-to-maven-workflow-step %}

   ワークフロー中でのシークレットの利用に関する詳しい情報については「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

### {% data variables.product.prodname_registry %}へのパッケージの公開

新しいリリースを作成するたびに、パッケージを公開するワークフローを起動できます。 以下の例でのワークフローは、`created`という種類で`release`イベントが発生したときに実行されます。 このワークフローは、CIテストをパスすれば{% data variables.product.prodname_registry %}にパッケージを公開します。 `release`イベントに関する詳しい情報については「[ワークフローを起動するイベント](/actions/reference/events-that-trigger-workflows#release)」を参照してください。

このワークフロー内では、`setup-java`アクションを利用できます。 このアクションは、指定されたバージョンのJDKを`PATH`にインストールし、{% data variables.product.prodname_registry %}にパッケージを公開するためにMavenの_settings.xml_もセットアップします。 生成された_settings.xml_は、環境変数の`GITHUB_ACTOR`をユーザ名、`GITHUB_TOKEN`をパスワードとして使い、`github`の`id`でサーバーの認証を定義します。 The `GITHUB_TOKEN` environment variable is assigned the value of the special `GITHUB_TOKEN` secret.

{% data reusables.github-actions.github-token-permissions %}

Mavenベースのプロジェクトでは、{% data variables.product.prodname_registry %}のエンドポイントを指す`github`の`id`で_pom.xml_ファイル中に配布リポジトリを作成することによって、これらの設定を利用できます。

たとえば、Organizationの名前が"octocat"でリポジトリの名前が"hello-world"なら、_pom.xml_中の{% data variables.product.prodname_registry %}の設定は以下の例のようになるでしょう。

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

この設定で、自動的に生成された_settings.xml_を利用して{% data variables.product.prodname_registry %}にパッケージを公開するワークフローを作成できます。

```yaml{:copy}
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions: 
      contents: read
      packages: write {% endif %}
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v2
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
1. Java JDKをセットアップし、自動的にMavenの_settings.xml_ファイルを設定して環境変数の`GITHUB_TOKEN`を使うように`github` Mavenリポジトリの認証を追加します。
1. {% data reusables.github-actions.publish-to-packages-workflow-step %}

   ワークフロー中でのシークレットの利用に関する詳しい情報については「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

### Maven Central Repositoryと{% data variables.product.prodname_registry %}へのパッケージの公開

`setup-java`アクションをそれぞれのレジストリに対して利用すれば、Maven Central Repositoryと{% data variables.product.prodname_registry %}の両方にパッケージを公開できます。

_pom.xml_ファイルに、{% data variables.product.prodname_dotcom %}リポジトリとMaven Central Repositoryプロバイダの双方に対する配布管理リポジトリを確実に含めてください。 たとえば、OSSRHホスティングプロジェクトを通じてCentral Repositoryへデプロイするなら、それを`id`を`ossrh`に設定して配布管理リポジトリ内で指定し、`id`を`github`に設定して配布管理リポジトリ内で{% data variables.product.prodname_registry %}を指定することになるかもしれません。

```yaml{:copy}
name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions: 
      contents: read
      packages: write {% endif %}
    steps:
      - uses: actions/checkout@v2
      - name: Set up Java for publishing to Maven Central Repository
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish to the Maven Central Repository
        run: mvn --batch-mode deploy
        env:{% raw %}
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
      - name: Set up Java for publishing to GitHub Packages
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish to GitHub Packages
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

このワークフローは、`setup-java`アクションを2回呼びます。  実行される度に、`setup-java`アクションはMavenの_settings.xml_をパッケージの公開のために上書きします。  リポジトリの認証については、_settings.xml_ファイルは配布管理リポジトリの`id`、及びユーザ名とパスワードを参照します。

このワークフローは以下のステップを実行します。

1. プロジェクトのリポジトリのコピーをチェックアウトします。
1. 1回目の`setup-java`の呼び出しを行います。 これはMavenの_settings.xml_ファイルを`ossrh`に対して設定し、認証のオプションを次のステップで定義される環境変数に設定します。
1. {% data reusables.github-actions.publish-to-maven-workflow-step %}
1. 2回目の`setup-java`の呼び出しを行います。 Mavenの_settings.xml_ファイルを{% data variables.product.prodname_registry %}に対して自動的に設定します。
1. {% data reusables.github-actions.publish-to-packages-workflow-step %}

   ワークフロー中でのシークレットの利用に関する詳しい情報については「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。
