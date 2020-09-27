---
title: GitHub Packagesについて
intro: '{{ site.data.variables.product.prodname_registry }}はソフトウェアパッケージのホスティングサービスであり、ソフトウェアパッケージをプライベートもしくはパブリックでホストでき、パッケージをプロジェクト中で依存関係として使えるようになります。'
product: '{{ site.data.reusables.gated-features.packages }}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.package_registry.packages-ghes-release-stage }}

### {{ site.data.variables.product.prodname_registry }} について

{{ site.data.variables.product.prodname_registry }}はパッケージホスティングサービスで、{{ site.data.variables.product.prodname_dotcom }}と完全に統合されています。 {{ site.data.variables.product.prodname_registry }}は、ソースコードとパッケージを一カ所にまとめ、統合された権限管理と支払いを提供し、{{ site.data.variables.product.product_name }}上でのソフトウェア開発を一元化できるようにします。

{{ site.data.variables.product.prodname_registry }}は、{{ site.data.variables.product.product_name }} API、{{ site.data.variables.product.prodname_actions }}、webhookと統合して、コード、CI、デプロイメントのソリューションを含むエンドツーエンドのDevOpsワークフローを作成できます。

1つのリポジトリで複数のパッケージをホストし、各パッケージのREADMEを見たり、統計をダウンロードしたり、バージョン履歴を見たりすることで、各パッケージに関する詳しい情報を見ることができます。

{% if currentVersion == "free-pro-team@latest" %}
{{ site.data.variables.product.prodname_actions }}ワークフローを作成する際には、`GITHUB_TOKEN`を使って{{ site.data.variables.product.prodname_registry }}にパッケージを公開してインストールでき、個人アクセストークンを保存して管理する必要はありません。 詳しい情報については「[{{ site.data.variables.product.prodname_github_container_registry }}について](/packages/getting-started-with-github-container-registry/about-github-container-registry)」を参照してください。

{{ site.data.reusables.package_registry.container-registry-beta }}

{% endif %}

#### パッケージの表示

You can review the package's README, some metadata like licensing, download statistics, version history, and more on {{ site.data.variables.product.product_name }}. 詳しい情報については「[パッケージの表示](/packages/publishing-and-managing-packages/viewing-packages)」を参照してください。

#### About package permissions and visibility
{% if currentVersion == "free-pro-team@latest" %}
|                   | Package registries                                                                                                                                                                                                                                                                   | {{ site.data.variables.product.prodname_github_container_registry }}                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hosting locations | You can host multiple packages in one repository.                                                                                                                                                                                                                                    | You can host multiple container images in one organization or user account.                                                                                                            |
| Permissions       | {{ site.data.reusables.package_registry.public-or-private-packages }} パッケージはリポジトリの権限を継承するので、{{ site.data.variables.product.prodname_dotcom }}のロールとTeamを使い、各パッケージをインストールしたり公開したりできる人を制限できます。 リポジトリの読み取り権限を持っている人は、パッケージを依存関係としてプロジェクトにインストールでき、書き込み権限を持っている人は新しいパッケージのバージョンを公開できます。 | For each container image, you can choose the access level that others have. The permissions for container image access are separate from your organization and repository permissions. |
 Visibility | {{ site.data.reusables.package_registry.public-or-private-packages }} | You can set the visibility of each of your container images. A private container image is only visible to people and teams who are given access within your organization. A public container image is visible to anyone. | Anonymous access | N/A | You can access public container images anonymously.

{% else %}
|                   | Package registries                                                                                                                                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Hosting locations | You can host multiple packages in one repository.                                                                                                                                                                                                                                    |
| Permissions       | {{ site.data.reusables.package_registry.public-or-private-packages }} パッケージはリポジトリの権限を継承するので、{{ site.data.variables.product.prodname_dotcom }}のロールとTeamを使い、各パッケージをインストールしたり公開したりできる人を制限できます。 リポジトリの読み取り権限を持っている人は、パッケージを依存関係としてプロジェクトにインストールでき、書き込み権限を持っている人は新しいパッケージのバージョンを公開できます。 |
| Visibility        | {{ site.data.reusables.package_registry.public-or-private-packages }}                                                                                                                                                                                                                |

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

For more information about permissions and visibility for {{ site.data.variables.product.prodname_github_container_registry }}, see "[Configuring access control and visibility for containers](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)."

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### {{ site.data.variables.product.prodname_registry }}の支払いについて

{{ site.data.reusables.package_registry.packages-billing }} 詳細は「[{{ site.data.variables.product.prodname_registry }} の支払いについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)」を参照してください。


{{ site.data.reusables/package_registry/container-registry-beta-billing-note }}
{% endif %}

### サポートされているクライアントとフォーマット

{{ site.data.variables.product.prodname_registry }}は、パッケージのバージョンの公開とインストールに、すでにおなじみのネイティブのパッケージツールコマンドを使います。

{% if currentVersion == "free-pro-team@latest" %}
#### Support for {{ site.data.variables.product.prodname_github_container_registry }}

The {{ site.data.variables.product.prodname_github_container_registry }} hosts containers at `ghcr.io/OWNER/IMAGE-NAME`.

| パッケージクライアント | 言語 | パッケージフォーマット  | 説明               |
| ----------- | -- | ------------ | ---------------- |
| docker      | なし | `Dockerfile` | Nodeのパッケージマネージャー |

For more information about the container support offered by {{ site.data.variables.product.prodname_github_container_registry }}, see "[About {{ site.data.variables.product.prodname_github_container_registry }}](/packages/getting-started-with-github-container-registry/about-github-container-registry)."
{% endif %}

#### Support for package registries

{% if currentVersion == "free-pro-team@latest" %}
Package registries use `PACKAGE-TYPE.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` as the package host URL, replacing `PACKAGE-TYPE` with the Package namespace. For example, your Gemfile will be hosted at `rubygem.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`.

{% else %}

The package types supported on {{ site.data.variables.product.product_location_enterprise }} may vary since your site administrator can enable or disable support for different package types. For more information, see "[Managing GitHub Packages for your enterprise](/enterprise/admin/packages)."

If {{ site.data.variables.product.product_location_enterprise }} has subdomain isolation enabled, then package registries will use `PACKAGE-TYPE.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME` as the package host URL, replacing `PACKAGE-TYPE` with the Package namespace. For example, your Dockerfile will be hosted at `docker.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`.

If {{ site.data.variables.product.product_location_enterprise }} has subdomain isolation disabled, then package registries will use `HOSTNAME/_registry/PACKAGE-TYPE/OWNER/REPOSITORY/IMAGE-NAME` as the package host URL. For example, your Gemfile will be hosted at `HOSTNAME/_registry/rubygems/OWNER/REPOSITORY/IMAGE-NAME`, replacing *HOSTNAME* with the host name of your {{ site.data.variables.product.prodname_ghe_server }} instance. |{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
| 言語         | 説明                            | パッケージフォーマット                           | パッケージクライアント  | Package namespace                                     |
| ---------- | ----------------------------- | ------------------------------------- | ------------ | ----------------------------------------------------- |
| JavaScript | Nodeのパッケージマネージャー              | `package.json`                        | `npm`        | `npm.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | RubyGemsパッケージマネージャー           | `Gemfile`                             | `gem`        | `rubygems.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Apache Mavenのプロジェクト管理及び包括的ツール | `pom.xml`                             | `mvn`        | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`          |
| Java       | Java用のGradleビルド自動化ツール         | `build.gradle` または `build.gradle.kts` | `gradle`     | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`          |
| .NET       | .NET用のNuGetパッケージ管理            | `nupkg`                               | `dotnet` CLI | nuget.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`    |

{% else %}

With subdomain isolation enabled on {{ site.data.variables.product.product_location_enterprise }}:

| 言語         | 説明                            | パッケージフォーマット                           | パッケージクライアント  | Package namespace                               |
| ---------- | ----------------------------- | ------------------------------------- | ------------ | ----------------------------------------------- |
| JavaScript | Nodeのパッケージマネージャー              | `package.json`                        | `npm`        | `npm.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | RubyGemsパッケージマネージャー           | `Gemfile`                             | `gem`        | `rubygems.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Apache Mavenのプロジェクト管理及び包括的ツール | `pom.xml`                             | `mvn`        | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Java用のGradleビルド自動化ツール         | `build.gradle` または `build.gradle.kts` | `gradle`     | `maven.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | .NET用のNuGetパッケージ管理            | `nupkg`                               | `dotnet` CLI | `nuget.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`    |
| なし         | Dockerコンテナ管理プラットフォーム          | `Dockerfile`                          | `Docker`     | `docker.HOSTNAME/OWNER/REPOSITORY/IMAGE-NAME`   |

With subdomain isolation disabled on {{ site.data.variables.product.product_location_enterprise }}:

| 言語         | 説明                            | パッケージフォーマット                           | パッケージクライアント  | Package namespace                                         |
| ---------- | ----------------------------- | ------------------------------------- | ------------ | --------------------------------------------------------- |
| JavaScript | Nodeのパッケージマネージャー              | `package.json`                        | `npm`        | `HOSTNAME/_registry/npm/OWNER/REPOSITORY/IMAGE-NAME`      |
| Ruby       | RubyGemsパッケージマネージャー           | `Gemfile`                             | `gem`        | `HOSTNAME/_registry/rubygems/OWNER/REPOSITORY/IMAGE-NAME` |
| Java       | Apache Mavenのプロジェクト管理及び包括的ツール | `pom.xml`                             | `mvn`        | `HOSTNAME/_registry/maven/OWNER/REPOSITORY/IMAGE-NAME`    |
| Java       | Java用のGradleビルド自動化ツール         | `build.gradle` または `build.gradle.kts` | `gradle`     | `HOSTNAME/_registry/maven/OWNER/REPOSITORY/IMAGE-NAME`    |
| .NET       | .NET用のNuGetパッケージ管理            | `nupkg`                               | `dotnet` CLI | `HOSTNAME/_registry/nuget/OWNER/REPOSITORY/IMAGE-NAME`    |

{% note %}

**Note:** Docker is not supported when subdomain isolation is disabled.

{% endnote %}

For more information about subdomain isolation, see "[Enabling subdomain isolation](/enterprise/admin/configuration/enabling-subdomain-isolation)."

{% endif %}

{{ site.data.variables.product.prodname_registry }}との利用のためのパッケージクライアントの設定に関する詳しい情報については「[プロジェクトのエコシステムとの{{ site.data.variables.product.prodname_registry }}の利用](/packages/using-github-packages-with-your-projects-ecosystem)」を参照してください。

### {{ site.data.variables.product.prodname_registry }} への認証を行う

{{ site.data.reusables.package_registry.authenticate-packages }}

{% if currentVersion == "free-pro-team@latest" %}
### トークンについて

| スコープ              | 説明                                                                                                                                                                                                                                                                                                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `read:packages`   | Download and install container images from {{ site.data.variables.product.prodname_github_container_registry }}                                                                                                                                                                                     |
| `write:packages`  | Upload and publish container images to {{ site.data.variables.product.prodname_github_container_registry }}                                                                                                                                                                                         |
| `delete:packages` | Delete specified versions of private or public container images from {{ site.data.variables.product.prodname_github_container_registry }}. For more information, see "[Deleting a container image](/packages/managing-container-images-with-github-container-registry/deleting-a-container-image)." |

To learn about available scopes and permissions for container images, see "[About {{ site.data.variables.product.prodname_github_container_registry }}](/packages/getting-started-with-github-container-registry/about-github-container-registry)" or "[Configuring access control and visibility for container images](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)."

詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token/)」と「[利用可能なスコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)」を参照してください。

{% endif %}

### パッケージの管理

パッケージをインストールあるいは公開するには、適切なスコープを持つトークンを使い、ユーザアカウントがそのリポジトリに対する適切な権限を持っていなければなりません。

例:
-  リポジトリからパッケージをダウンロードしてインストールするには、トークンは`read:packages`スコープを持っていなければならず、ユーザアカウントはそのリポジトリの読み取り権限を持っていなければなりません。 リポジトリがプライベートの場合は、トークンは`repo`スコープも持っていなければなりません。
- {{ site.data.variables.product.product_name }}上の特定バージョンのプライベートパッケージを削除するには、トークンは`delete:packages`及び`repo`スコープを持っていなければなりません。 パブリックなパッケージは削除できません。 詳しい情報については「[パッケージの削除](/packages/publishing-and-managing-packages/deleting-a-package)」を参照してください。

| スコープ              | 説明                                                                                               | リポジトリの権限         |
| ----------------- | ------------------------------------------------------------------------------------------------ | ---------------- |
| `read:packages`   | {{ site.data.variables.product.prodname_registry }}からのパッケージのダウンロードとインストール                        | 読み取り             |
| `write:packages`  | {{ site.data.variables.product.prodname_registry }}へのパッケージのアップロードと公開                             | 書き込み             |
| `delete:packages` | {{ site.data.variables.product.prodname_registry }}からの特定バージョンのプライベートパッケージの削除                     | 管理               |
| `repo`            | プライベートリポジトリ内の特定パッケージのインストール、アップロード、削除（`read:packages`、`write:packages`あるいは`delete:packages`と併せて） | 読み取り、書き込み、あるいは管理 |

{{ site.data.variables.product.prodname_actions }}ワークフローを作成する際には、`GITHUB_TOKEN`を使って{{ site.data.variables.product.prodname_registry }}にパッケージを公開してインストールでき、個人アクセストークンを保存して管理する必要はありません。

詳しい情報については、以下を参照してください。
- ドキュメンテーションに反する何らかの体験をした時
- [個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token/)
- GDPR違反、APIキー、個人を識別する情報といったセンシティブなデータを含むパッケージを公開した時

### パッケージの管理

{{ site.data.variables.product.product_name }}上で、あるいはGraphQL APIを使ってプライベートパッケージのバージョンを削除できます。 GraphQL APIを使ってプライベートパッケージに対するクエリや削除を行う場合、{{ site.data.variables.product.prodname_registry }}の認証に使うのと同じトークンを使わなければなりません。 詳しい情報については、「[パッケージの削除](/packages/publishing-and-managing-packages/deleting-a-package)」と「[GraphQLでの呼び出しの作成](/v4/guides/forming-calls/)」を参照してください。

webhookを設定して、パッケージの公開や更新といったパッケージ関連のイベントにサブスクライブできます。 詳しい情報については、「[`package` webhookイベント](/webhooks/event-payloads/#package)」を参照してください。

### サポートへの連絡

{% if currentVersion == "free-pro-team@latest" %}
{{ site.data.variables.product.prodname_registry }}についてのフィードバックあるいは機能リクエストがある場合は、[{{ site.data.variables.product.prodname_registry }}のフィードバックフォーム](https://support.github.com/contact/feedback?contact%5Bcategory%5D=github-packages)を利用してください。

[連絡フォーム](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages)を使い、{{ site.data.variables.product.prodname_registry }}について{{ site.data.variables.contact.github_support }}に連絡してください。

* ドキュメンテーションに反する何らかの体験をした時
* 漠然とした、あるいは不明確なエラーを体験した時
* GDPR違反、APIキー、個人を識別する情報といったセンシティブなデータを含むパッケージを公開した時

{% else %}
If you need support for {{ site.data.variables.product.prodname_registry }}, please contact your site administrators.

{% endif %}
