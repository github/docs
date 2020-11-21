---
title: GitHub Packagesについて
intro: '{% data variables.product.prodname_registry %}はソフトウェアパッケージのホスティングサービスであり、ソフトウェアパッケージをプライベートもしくはパブリックでホストでき、パッケージをプロジェクト中で依存関係として使えるようになります。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### {% data variables.product.prodname_registry %} について

{% data variables.product.prodname_registry %}はパッケージホスティングサービスで、{% data variables.product.prodname_dotcom %}と完全に統合されています。 {% data variables.product.prodname_registry %}は、ソースコードとパッケージを一カ所にまとめ、統合された権限管理と支払いを提供し、{% data variables.product.product_name %}上でのソフトウェア開発を一元化できるようにします。

{% data variables.product.prodname_registry %}は、{% data variables.product.product_name %} API、{% data variables.product.prodname_actions %}、webhookと統合して、コード、CI、デプロイメントのソリューションを含むエンドツーエンドのDevOpsワークフローを作成できます。

1つのリポジトリで複数のパッケージをホストし、各パッケージのREADMEを見たり、統計をダウンロードしたり、バージョン履歴を見たりすることで、各パッケージに関する詳しい情報を見ることができます。

{% if currentVersion == "free-pro-team@latest" %}
{% data variables.product.prodname_actions %}ワークフローを作成する際には、`GITHUB_TOKEN`を使って{% data variables.product.prodname_registry %}にパッケージを公開してインストールでき、個人アクセストークンを保存して管理する必要はありません。 詳しい情報については「[{% data variables.product.prodname_github_container_registry %}について](/packages/getting-started-with-github-container-registry/about-github-container-registry)」を参照してください。

{% data reusables.package_registry.container-registry-beta %}

![Diagram showing Node, RubyGems, Apache Maven, Gradle, Nuget, and the container registry with their hosting urls](/assets/images/help/package-registry/packages-overview-diagram.png)

{% endif %}

#### パッケージの表示

パッケージの README や、ライセンス、ダウンロード統計、バージョン履歴などのメタデータを {% data variables.product.product_name %} 上で確認できます。 詳しい情報については「[パッケージの表示](/packages/publishing-and-managing-packages/viewing-packages)」を参照してください。

#### パッケージの権限と可視性について
{% if currentVersion == "free-pro-team@latest" %}
|       | パッケージレジストリ                                                                                                                                                                                                                                                                 | {% data variables.product.prodname_github_container_registry %}
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| ホスト場所 | 1 つのリポジトリに複数のパッケージをホストできます。                                                                                                                                                                                                                                                | 1 つの Organization またはユーザアカウントに複数のコンテナをホストできます。                                          |
| 権限    | {% data reusables.package_registry.public-or-private-packages %} パッケージはリポジトリの権限を継承するので、{% data variables.product.prodname_dotcom %}のロールとTeamを使い、各パッケージをインストールしたり公開したりできる人を制限できます。 リポジトリの読み取り権限を持っている人は、パッケージを依存関係としてプロジェクトにインストールでき、書き込み権限を持っている人は新しいパッケージのバージョンを公開できます。 | コンテナイメージごとに、他のユーザが持つアクセスレベルを選択できます。 コンテナイメージへのアクセス権限は、Organization およびリポジトリの権限とは別になります。 |
 可視性 | {% data reusables.package_registry.public-or-private-packages %} | それぞれのコンテナイメージに可視性を設定できます。 プライベートコンテナイメージは、Organization 内でアクセス権を付与されたユーザおよび Team のみに表示されます。 パブリックコンテナは誰でも表示できます。 | 匿名アクセス | 該当なし | パブリックコンテナイメージには匿名でアクセスできます。

{% else %}
|       | パッケージレジストリ                                                                                                                                                                                                                                                                 |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ホスト場所 | 1 つのリポジトリに複数のパッケージをホストできます。                                                                                                                                                                                                                                                |
| 権限    | {% data reusables.package_registry.public-or-private-packages %} パッケージはリポジトリの権限を継承するので、{% data variables.product.prodname_dotcom %}のロールとTeamを使い、各パッケージをインストールしたり公開したりできる人を制限できます。 リポジトリの読み取り権限を持っている人は、パッケージを依存関係としてプロジェクトにインストールでき、書き込み権限を持っている人は新しいパッケージのバージョンを公開できます。 |
| 可視性   | {% data reusables.package_registry.public-or-private-packages %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% data variables.product.prodname_github_container_registry %} のアクセス権限や可視性に関する詳しい情報については、「[コンテナイメージにアクセス制御と可視性を設定する](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)」を参照してください。

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### {% data variables.product.prodname_registry %}の支払いについて

{% data reusables.package_registry.packages-billing %} 詳細は「[{% data variables.product.prodname_registry %} の支払いについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)」を参照してください。

{% data reusables.package_registry.container-registry-beta-billing-note %}
{% endif %}

### サポートされているクライアントとフォーマット

{% data variables.product.prodname_registry %}は、パッケージのバージョンの公開とインストールに、すでにおなじみのネイティブのパッケージツールコマンドを使います。

{% if currentVersion == "free-pro-team@latest" %}
#### {% data variables.product.prodname_github_container_registry %} のサポート

{% data variables.product.prodname_github_container_registry %} は、コンテナを `ghcr.io/OWNER/IMAGE-NAME` にホストします。

| パッケージクライアント | 言語 | パッケージフォーマット  | 説明               |
| ----------- | -- | ------------ | ---------------- |
| docker      | なし | `Dockerfile` | Nodeのパッケージマネージャー |
{% data variables.product.prodname_github_container_registry %} が提供するコンテナのサポートに関する詳しい情報については、

「[About {% data variables.product.prodname_github_container_registry %} について](/packages/getting-started-with-github-container-registry/about-github-container-registry)」を参照してください。
{% endif %}

#### パッケージレジストリのサポート

{% if currentVersion == "free-pro-team@latest" %}
パッケージレジストリは、`PACKAGE-TYPE.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` をパッケージのホスト URL として使用します。`PACKAGE-TYPE` は、パッケージの名前空間に置き換えます。 たとえば、Gemfile は `rubygems.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` にホストされます。

{% else %}

サイト管理者がさまざまなパッケージのタイプを有効化、無効化できるため、{% data variables.product.product_location %} でサポートされているパッケージのタイプはさまざまです。 詳しい情報については、「[Enterprise 向けの GitHub Packages を管理する](/enterprise/admin/packages)」を参照してください。

{% data variables.product.product_location %} が Subdomain Isolation を有効化している場合、パッケージレジストリは `PACKAGE-TYPE.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME` をパッケージのホスト URL として使用します。`PACKAGE-TYPE` は、パッケージの名前空間に置き換えます。 たとえば、Dockerfile は `docker.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME` にホストされます。

{% data variables.product.product_location %} が Subdomain Isolation を無効化している場合、パッケージレジストリは `HOSTNAME/_registry/PACKAGE-TYPE/OWNER/REPOSITORY/IMAGE-NAME` をパッケージのホスト URL として使用します。 たとえば、Gemfile は `HOSTNAME/_registry/rubygems/OWNER/REPOSITORY/IMAGE-NAME` にホストされます。*HOSTNAME* は、{% data variables.product.prodname_ghe_server %} インスタンスのホスト名に置き換えます。 |{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
| 言語         | 説明                            | パッケージフォーマット                           | パッケージクライアント  | パッケージ名前空間                                             |
| ---------- | ----------------------------- | ------------------------------------- | ------------ | ----------------------------------------------------- |
| JavaScript | Nodeのパッケージマネージャー              | `package.json`                        | `npm`        | `npm.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | RubyGemsパッケージマネージャー           | `Gemfile`                             | `gem`        | `rubygems.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Apache Mavenのプロジェクト管理及び包括的ツール | `pom.xml`                             | `mvn`        | `maven.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Java用のGradleビルド自動化ツール         | `build.gradle` または `build.gradle.kts` | `gradle`     | `maven.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | .NET用のNuGetパッケージ管理            | `nupkg`                               | `dotnet` CLI | `nuget.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`    |

{% else %}

{% data variables.product.product_location %} で Subdomain Isolation を有効化している場合

| 言語         | 説明                            | パッケージフォーマット                           | パッケージクライアント  | パッケージ名前空間                                       |
| ---------- | ----------------------------- | ------------------------------------- | ------------ | ----------------------------------------------- |
| JavaScript | Nodeのパッケージマネージャー              | `package.json`                        | `npm`        | `npm.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | RubyGemsパッケージマネージャー           | `Gemfile`                             | `gem`        | `rubygems.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Apache Mavenのプロジェクト管理及び包括的ツール | `pom.xml`                             | `mvn`        | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Java用のGradleビルド自動化ツール         | `build.gradle` または `build.gradle.kts` | `gradle`     | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | .NET用のNuGetパッケージ管理            | `nupkg`                               | `dotnet` CLI | `nuget.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| なし         | Dockerコンテナ管理プラットフォーム          | `Dockerfile`                          | `Docker`     | `docker.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`   |

{% data variables.product.product_location %} で Subdomain Isolation を無効化している場合

| 言語         | 説明                            | パッケージフォーマット                           | パッケージクライアント  | パッケージ名前空間                                                 |
| ---------- | ----------------------------- | ------------------------------------- | ------------ | --------------------------------------------------------- |
| JavaScript | Nodeのパッケージマネージャー              | `package.json`                        | `npm`        | `HOSTNAME/_registry/npm/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | RubyGemsパッケージマネージャー           | `Gemfile`                             | `gem`        | `HOSTNAME/_registry/rubygems/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Apache Mavenのプロジェクト管理及び包括的ツール | `pom.xml`                             | `mvn`        | `HOSTNAME/_registry/maven/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Java用のGradleビルド自動化ツール         | `build.gradle` または `build.gradle.kts` | `gradle`     | `HOSTNAME/_registry/maven/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | .NET用のNuGetパッケージ管理            | `nupkg`                               | `dotnet` CLI | `HOSTNAME/_registry/nuget/OWNER/REPOSITORY/IMAGE-NAME`    |

{% note %}

**注釈:** Subdomain Isolation が無効化されている場合、Docker はサポートされません。

{% endnote %}

Subdomain Isolation の詳しい情報については、「[Subdomain Isolation を有効化する](/enterprise/admin/configuration/enabling-subdomain-isolation)」を参照してください。

{% endif %}

{% data variables.product.prodname_registry %}との利用のためのパッケージクライアントの設定に関する詳しい情報については「[プロジェクトのエコシステムとの{% data variables.product.prodname_registry %}の利用](/packages/using-github-packages-with-your-projects-ecosystem)」を参照してください。

### {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

{% if currentVersion == "free-pro-team@latest" %}
### トークンについて

| スコープ              | 説明                                                                                                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `read:packages`   | {% data variables.product.prodname_github_container_registry %}からのコンテナイメージのダウンロードとインストール                                                                                                                                           |
| `write:packages`  | {% data variables.product.prodname_github_container_registry %}へのコンテナイメージのアップロードと公開                                                                                                                                                |
| `delete:packages` | {% data variables.product.prodname_github_container_registry %}からの特定バージョンのプライベートまたはパブリックコンテナイメージの削除。 詳細は「[コンテナイメージを削除する](/packages/managing-container-images-with-github-container-registry/deleting-a-container-image)」を参照してください。 |

コンテナイメージで利用できるスコープおよび権限については、「[{% data variables.product.prodname_github_container_registry %} について](/packages/getting-started-with-github-container-registry/about-github-container-registry)」または「[コンテナイメージにアクセス制御と可視性を設定する](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)」を参照してください。

詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token/)」と「[利用可能なスコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)」を参照してください。

{% endif %}

### パッケージの管理

パッケージをインストールあるいは公開するには、適切なスコープを持つトークンを使い、ユーザアカウントがそのリポジトリに対する適切な権限を持っていなければなりません。

例:
-  リポジトリからパッケージをダウンロードしてインストールするには、トークンは`read:packages`スコープを持っていなければならず、ユーザアカウントはそのリポジトリの読み取り権限を持っていなければなりません。
- {% data variables.product.product_name %}上の特定バージョンのプライベートパッケージを削除するには、トークンは`delete:packages`及び`repo`スコープを持っていなければなりません。 パブリックなパッケージは削除できません。 詳しい情報については「[パッケージの削除](/packages/publishing-and-managing-packages/deleting-a-package)」を参照してください。

| スコープ              | 説明                                                                             | リポジトリの権限        |
| ----------------- | ------------------------------------------------------------------------------ | --------------- |
| `read:packages`   | {% data variables.product.prodname_registry %}からのパッケージのダウンロードとインストール           | 読み取り            |
| `write:packages`  | {% data variables.product.prodname_registry %}へのパッケージのアップロードと公開                | 書き込み            |
| `delete:packages` | {% data variables.product.prodname_registry %}からの特定バージョンのプライベートパッケージの削除        | 管理              |
| `repo`            | Upload and delete packages (along with `write:packages`, or `delete:packages`) | write, or admin |

{% data variables.product.prodname_actions %}ワークフローを作成する際には、`GITHUB_TOKEN`を使って{% data variables.product.prodname_registry %}にパッケージを公開してインストールでき、個人アクセストークンを保存して管理する必要はありません。

詳しい情報については、以下を参照してください。
- ドキュメンテーションに反する何らかの体験をした時
- [個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token/)
- GDPR違反、APIキー、個人を識別する情報といったセンシティブなデータを含むパッケージを公開した時

### パッケージの管理

You can delete a version of a private package on {% data variables.product.product_name %} or using the GraphQL API. GraphQL APIを使ってプライベートパッケージに対するクエリや削除を行う場合、{% data variables.product.prodname_registry %}の認証に使うのと同じトークンを使わなければなりません。 詳しい情報については、「[パッケージの削除](/packages/publishing-and-managing-packages/deleting-a-package)」と「[GraphQLでの呼び出しの作成](/v4/guides/forming-calls/)」を参照してください。

webhookを設定して、パッケージの公開や更新といったパッケージ関連のイベントにサブスクライブできます。 詳しい情報については、「[`package` webhookイベント](/webhooks/event-payloads/#package)」を参照してください。

### サポートへの連絡

{% if currentVersion == "free-pro-team@latest" %}
{% data variables.product.prodname_registry %} についてのフィードバックあるいは機能リクエストがある場合は、
[{% data variables.product.prodname_registry %} のフィードバックフォーム](https://support.github.com/contact/feedback?contact%5Bcategory%5D=github-packages)を利用してください。

[連絡フォーム](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages)を使い、{% data variables.product.prodname_registry %}について{% data variables.contact.github_support %}に連絡してください。

* ドキュメンテーションに反する何らかの体験をした時
* 漠然とした、あるいは不明確なエラーを体験した時
* GDPR違反、APIキー、個人を識別する情報といったセンシティブなデータを含むパッケージを公開した時

{% else %}
{% data variables.product.prodname_registry %} についてサポートが必要な場合は、
サイト管理者に連絡してください。

{% endif %}
