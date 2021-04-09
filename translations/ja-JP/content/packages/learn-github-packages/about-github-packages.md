---
title: GitHub Packagesについて
intro: '{% data variables.product.prodname_registry %}はソフトウェアパッケージのホスティングサービスであり、ソフトウェアパッケージを{% if currentVersion == "github-ae@latest" %}特定のユーザや社内に対し{% else %}非公開または公開でホストでき、{% endif %}パッケージをプロジェクト中で依存関係として使えるようになります。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

### {% data variables.product.prodname_registry %} について

{% data variables.product.prodname_registry %}はパッケージホスティングサービスで、{% data variables.product.prodname_dotcom %}と完全に統合されています。 {% data variables.product.prodname_registry %}は、ソースコードとパッケージを一カ所にまとめ、統合された権限管理{% if currentVersion != "github-ae@latest" %}と支払い{% endif %}を提供し、{% data variables.product.product_name %}上でのソフトウェア開発を一元化できるようにします。

{% data variables.product.prodname_registry %}は、{% data variables.product.product_name %} API、{% data variables.product.prodname_actions %}、webhookと統合して、コード、CI、デプロイメントのソリューションを含むエンドツーエンドのDevOpsワークフローを作成できます。

1つのリポジトリで複数のパッケージをホストし、各パッケージのREADMEを見たり、統計をダウンロードしたり、バージョン履歴を見たりすることで、各パッケージに関する詳しい情報を見ることができます。

![Diagram showing packages support for npm, RubyGems, Apache Maven, Gradle, Nuget, and Docker](/assets/images/help/package-registry/packages-overview-diagram.png)

{% if currentVersion == "free-pro-team@latest" %}
{% data variables.product.prodname_actions %}ワークフローを作成する際には、`GITHUB_TOKEN`を使って{% data variables.product.prodname_registry %}にパッケージを公開してインストールでき、個人アクセストークンを保存して管理する必要はありません。 詳しい情報については「[{% data variables.product.prodname_github_container_registry %}について](/packages/guides/about-github-container-registry)」を参照してください。

{% data reusables.package_registry.container-registry-beta %}

{% endif %}

#### パッケージの表示

パッケージの README や、ライセンス、ダウンロード統計、バージョン履歴などのメタデータを {% data variables.product.product_name %} 上で確認できます。 詳しい情報については「[パッケージの表示](/packages/manage-packages/viewing-packages)」を参照してください。

#### パッケージの権限と可視性について

|       | パッケージレジストリ                                                                                                                                                                                                                                                                 |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ホスト場所 | 1 つのリポジトリに複数のパッケージをホストできます。                                                                                                                                                                                                                                                |
| 権限    | {% data reusables.package_registry.public-or-private-packages %} パッケージはリポジトリの権限を継承するので、{% data variables.product.prodname_dotcom %}のロールとTeamを使い、各パッケージをインストールしたり公開したりできる人を制限できます。 リポジトリの読み取り権限を持っている人は、パッケージを依存関係としてプロジェクトにインストールでき、書き込み権限を持っている人は新しいパッケージのバージョンを公開できます。 |
| 可視性   | {% data reusables.package_registry.public-or-private-packages %}

{% if currentVersion == "free-pro-team@latest" %}
### {% data variables.product.prodname_registry %}の支払いについて

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} For more information, see "[About billing for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."

{% data reusables.package_registry.container-registry-beta-billing-note %}
{% endif %}

### サポートされているクライアントとフォーマット

{% data variables.product.prodname_registry %}は、パッケージのバージョンの公開とインストールに、すでにおなじみのネイティブのパッケージツールコマンドを使います。
#### パッケージレジストリのサポート

| 言語         | 説明                            | パッケージフォーマット                           | パッケージクライアント  |
| ---------- | ----------------------------- | ------------------------------------- | ------------ |
| JavaScript | Nodeのパッケージマネージャー              | `package.json`                        | `npm`        |
| Ruby       | RubyGemsパッケージマネージャー           | `Gemfile`                             | `gem`        |
| Java       | Apache Mavenのプロジェクト管理及び包括的ツール | `pom.xml`                             | `mvn`        |
| Java       | Java用のGradleビルド自動化ツール         | `build.gradle` または `build.gradle.kts` | `gradle`     |
| .NET       | .NET用のNuGetパッケージ管理            | `nupkg`                               | `dotnet` CLI |
| なし         | Dockerコンテナ管理プラットフォーム          | `Dockerfile`                          | `Docker`     |

{% if currentVersion ver_gt "enterprise-server@2.22" %}
{% note %}

**注釈:** Subdomain Isolation が無効化されている場合、Docker はサポートされません。

{% endnote %}

Subdomain Isolation の詳しい情報については、「[Subdomain Isolation を有効化する](/enterprise/admin/configuration/enabling-subdomain-isolation)」を参照してください。

{% endif %}

{% data variables.product.prodname_registry %}でパッケージクライアントを使用するための設定に関する詳しい情報については、「[{% data variables.product.prodname_registry %}のパッケージクライアントガイド](/packages/guides/package-client-guides-for-github-packages)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}
Dockerおよび
{% data variables.product.prodname_github_container_registry %}に関する詳しい情報については、「[{% data variables.product.prodname_registry %}のコンテナガイド](/packages/guides/container-guides-for-github-packages)」を参照してください。
{% endif %}
### {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

### パッケージの管理

パッケージをインストールあるいは公開するには、適切なスコープを持つトークンを使い、ユーザアカウントがそのリポジトリに対する適切な権限を持っていなければなりません。

例:
-  リポジトリからパッケージをダウンロードしてインストールするには、トークンは`read:packages`スコープを持っていなければならず、ユーザアカウントはそのリポジトリの読み取り権限を持っていなければなりません。
- {% if currentVersion == "free-pro-team@latest" or if currentVersion ver_gt "enterprise-server@3.0" %}{% data variables.product.product_name %}上のパッケージを削除するには、トークンが少なくとも`delete:packages`と`read:packages`のスコープを持っている必要があります。 repoのスコープがあるパッケージでは、`repo`スコープも必要です。{% if currentVersion ver_lt "enterprise-server@3.1" %}{% data variables.product.product_name %}上の、プライベートパッケージの特定バージョンを削除するには、トークンが`delete:packages`と`repo`スコープを持っている必要があります。 パブリックなパッケージは削除できません。{% elsif currentVersion == "github-ae@latest" %}{% data variables.product.product_name %}上の特定のバージョンを削除するには、`delete:packages`および`repo`スコープを持っている必要があります。{% endif %}詳しい情報については、 「{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[パッケージを削除する](/packages/learn-github-packages/deleting-a-package){% endif %}」を参照してください。

| スコープ                                                                                                                                                                                                                                                                                                                                                                                                                      | 説明                                                                   | リポジトリの権限   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------- |
| `read:packages`                                                                                                                                                                                                                                                                                                                                                                                                           | {% data variables.product.prodname_registry %}からのパッケージのダウンロードとインストール | 読み取り       |
| `write:packages`                                                                                                                                                                                                                                                                                                                                                                                                          | {% data variables.product.prodname_registry %}へのパッケージのアップロードと公開      | 書き込み       |
| `delete:packages`                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                      |            |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}{% data variables.product.prodname_registry %}からパッケージを削除する {% elsif currentVersion ver_lt "enterprise-server@3.1" %}{% data variables.product.prodname_registry %}からプライベートパッケージの特定バージョンを削除する{% elsif currentVersion == "github-ae@latest" %}{% data variables.product.prodname_registry %}から特定バージョンを削除する{% endif %} |                                                                      |            |
| 管理                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                      |            |
| `repo`                                                                                                                                                                                                                                                                                                                                                                                                                    | パッケージのアップロードと削除 (`write:packages`または`delete:packages`と併せて)           | 書き込みまたは管理者 |

{% data variables.product.prodname_actions %}ワークフローを作成する際には、`GITHUB_TOKEN`を使って{% data variables.product.prodname_registry %}にパッケージを公開してインストールでき、個人アクセストークンを保存して管理する必要はありません。

詳しい情報については、以下を参照してください。
- ドキュメンテーションに反する何らかの体験をした時
- [個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token/)
- GDPR違反、APIキー、個人を識別する情報といったセンシティブなデータを含むパッケージを公開した時

### パッケージの管理

{% if currentVersion == "free-pro-team@latest" %}
{% data variables.product.product_name %}ユーザインターフェイスか、
REST APIを使用してパッケージを削除できます。 詳しい情報については、「[{% data variables.product.prodname_registry %} API](/rest/reference/packages)」を参照してください。
{% endif %}

{% if currentVersion ver_gt "enterprise-server@3.0" %}
{% data variables.product.product_name %}ユーザインターフェイスで
プライベートおよびパブリックパッケージを削除できます。 また、repoスコープのパッケージでは、GraphQLを使用してプライベートパッケージのバージョンを削除できます。
{% endif %}

{% if currentVersion ver_lt "enterprise-server@3.1" %}
{% data variables.product.product_name %}ユーザインターフェイス
またはGraphQL APIを使用して、プライベートパッケージのバージョンを削除できます。
{% endif %}

{% if currentVersion == "github-ae@latest" %}
{% data variables.product.product_name %}ユーザインターフェイス
またはGraphQL APIを使用して、プライベートパッケージのバージョンを削除できます。
{% endif %}

GraphQL APIを使ってプライベートパッケージに対するクエリや削除を行う場合、{% data variables.product.prodname_registry %}の認証に使うのと同じトークンを使わなければなりません。 詳しい情報については、 「{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[パッケージを削除する](/packages/learn-github-packages/deleting-a-package){% endif %}」および「"[GraphQLでの呼び出しの作成](/graphql/guides/forming-calls-with-graphql)」を参照してください。

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
