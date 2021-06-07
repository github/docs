---
title: GitHub Container Registry について
intro: '{% data variables.product.prodname_github_container_registry %} を使用して、{% data variables.product.prodname_dotcom %} の Organization または個人ユーザアカウントにシームレスに Docker コンテナイメージをホストして管理できます。 {% data variables.product.prodname_github_container_registry %} を利用すれば、パッケージを管理できるユーザやパッケージにアクセスできるユーザを、きめ細かく設定できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/about-github-container-registry
  - /packages/managing-container-images-with-github-container-registry
  - /packages/guides/about-github-container-registry
versions:
  free-pro-team: '*'
---
{% note %}

**注釈:** {% data variables.product.prodname_github_container_registry %} は現在パブリックベータであり、変更されることがあります。 ベータ期間中は、ストレージおよび帯域幅の制限はありません。 {% data variables.product.prodname_github_container_registry %} を使用するには、アカウントで機能を有効化する必要があります。 詳しい情報については、「[改善されたコンテナサポートを有効化する](/packages/guides/enabling-improved-container-support)」を参照してください。

{% endnote %}

### {% data variables.product.prodname_github_container_registry %} について

{% data reusables.package_registry.container-registry-feature-highlights %}

パッケージの使用についてのコンテキストを共有するには、{% data variables.product.prodname_dotcom %} でコンテナイメージをリポジトリにリンクできます。 詳しい情報については、「[リポジトリをコンテナイメージに接続する](/packages/guides/connecting-a-repository-to-a-container-image)」を参照してください。

{% data variables.product.prodname_github_container_registry %} には、他のパッケージレジストリと異なるホスト場所、権限、可視性があります。

|       | パッケージレジストリ                                                                                                                                                                                                                                                                 | {% data variables.product.prodname_github_container_registry %}
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| ホスト場所 | 1 つのリポジトリに複数のパッケージをホストできます。                                                                                                                                                                                                                                                | 1 つの Organization またはユーザアカウントに複数のコンテナをホストできます。                                          |
| 権限    | {% data reusables.package_registry.public-or-private-packages %} パッケージはリポジトリの権限を継承するので、{% data variables.product.prodname_dotcom %}のロールとTeamを使い、各パッケージをインストールしたり公開したりできる人を制限できます。 リポジトリの読み取り権限を持っている人は、パッケージを依存関係としてプロジェクトにインストールでき、書き込み権限を持っている人は新しいパッケージのバージョンを公開できます。 | コンテナイメージごとに、他のユーザが持つアクセスレベルを選択できます。 コンテナイメージへのアクセス権限は、Organization およびリポジトリの権限とは別になります。 |
 可視性 | {% data reusables.package_registry.public-or-private-packages %} | それぞれのコンテナイメージに可視性を設定できます。 プライベートコンテナイメージは、Organization 内でアクセス権を付与されたユーザおよび Team のみに表示されます。 パブリックコンテナは誰でも表示できます。 | 匿名アクセス | 該当なし | パブリックコンテナイメージには匿名でアクセスできます。

詳しい情報については、「[{% data variables.product.prodname_github_container_registry %} 用のスコープと権限](#about-scopes-and-permissions-for-github-container-registry)」を参照してください。

### サポートされているフォーマット

現在のところ、{% data variables.product.prodname_container_registry %} では以下のコンテナフォーマットをサポートしています。

* [DDocker イメージマニフェスト V2、スキーマ 2](https://docs.docker.com/registry/spec/manifest-v2-2/)
* [Open Container Initiative (OCI) 仕様](https://github.com/opencontainers/image-spec)

{% data variables.product.prodname_github_container_registry %} は、コンテナを `ghcr.io/OWNER/IMAGE-NAME` にホストします。

| パッケージクライアント | 言語 | パッケージフォーマット  | 説明               |
| ----------- | -- | ------------ | ---------------- |
| docker      | なし | `Dockerfile` | Nodeのパッケージマネージャー |


#### マニフェストリスト/イメージインデックス

{% data variables.product.prodname_github_container_registry %} は、Docker V2、スキーマ 2 および OCI イメージ仕様で定義されている [Docker マニフェストリスト](https://docs.docker.com/registry/spec/manifest-v2-2/#manifest-list)/[OCI イメージインデックス](https://github.com/opencontainers/image-spec/blob/79b036d80240ae530a8de15e1d21c7ab9292c693/image-index.md)フォーマットもサポートしています。

### コンテナイメージの可視性とアクセス権限

コンテナイメージへのアクセス権限がある場合、コンテナイメージをプライべートまたはパブリックに設定できます。 パブリックイメージは匿名でアクセスでき、認証や CLI 経由でサインインすることなくプルできます。

あなたが管理者であれば、Organization レベルおよびリポジトリレベルに設定した権限とは別に、コンテナイメージに対してアクセス権限を付与することもできます。

ユーザアカウントが所有し公開しているコンテナイメージには、任意のユーザにアクセスロールを付与できます。 Organization が所有し公開しているコンテナイメージには、Organization 内の任意の Team にアクセスロールを付与できます。

| 権限ロール | アクセス権の内容                                                                                             |
| ----- | ---------------------------------------------------------------------------------------------------- |
| Read  | パッケージをダウンロードできます。 <br>メタデータの読み取りができます。                                                         |
| Write | このパッケージをアップロードおよびダウンロードできます。 <br>パッケージのメタデータの読み取りおよび書き込みができます。                                 |
| Admin | このパッケージのアップロード、ダウンロード、削除、管理ができます。 <br>パッケージのメタデータの読み取りおよび書き込みができます。 <br>パッケージに権限を付与できます。 |

詳しい情報については、「[コンテナイメージにアクセス制御と可視性を設定する](/packages/guides/configuring-access-control-and-visibility-for-container-images)」を参照してください。

### トークンについて

パッケージをインストールあるいは公開するには、適切なスコープを持つトークンを使い、ユーザアカウントがそのリポジトリに対する適切な権限を持っていなければなりません。

| スコープ              | 説明                                                                                                                                                                                                                                       |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `read:packages`   | {% data variables.product.prodname_github_container_registry %}からのコンテナイメージのダウンロードとインストール                                                                                                                                               |
| `write:packages`  | {% data variables.product.prodname_github_container_registry %}へのコンテナイメージのアップロードと公開                                                                                                                                                    |
| `delete:packages` | {% data variables.product.prodname_github_container_registry %}からの特定バージョンのプライベートまたはパブリックコンテナイメージの削除。 For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)." |

コンテナイメージで利用できるスコープおよび権限については、「[コンテナイメージにアクセス制御と可視性を設定する](/packages/guides/configuring-access-control-and-visibility-for-container-images)」を参照してください。

詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token/)」と「[利用可能なスコープ](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)」を参照してください。

### {% data variables.product.prodname_github_container_registry %}の支払いについて

{% data reusables.package_registry.billing-for-container-registry %}

### サポートへの連絡

{% data variables.product.prodname_github_container_registry %} に関するフィードバックや機能のリクエストがある場合は、[フィードバックフォーム](https://support.github.com/contact/feedback?contact%5Bcategory%5D=packages)でご連絡ください。

[連絡フォーム](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages)を使い、{% data variables.product.prodname_github_container_registry %}について{% data variables.contact.github_support %}に連絡してください。

* ドキュメンテーションに反する何らかの体験をした時.
* 漠然とした、あるいは不明確なエラーを体験した時.
* GDPR 違反、API キー、個人を識別できる情報といったセンシティブなデータを含むパッケージを公開した時。
