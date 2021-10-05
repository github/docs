---
title: GitHub Packagesの紹介
intro: '{% data variables.product.prodname_registry %}はソフトウェアパッケージのホスティングサービスであり、ソフトウェアパッケージを{% ifversion ghae %}特定のユーザや社内に対し{% else %}非公開または公開でホストでき、{% endif %}パッケージをプロジェクト中で依存関係として使えるようになります。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
  - /packages/learn-github-packages/about-github-packages
  - /packages/learn-github-packages/core-concepts-for-github-packages
  - /packages/guides/about-github-container-registry
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: はじめに
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

## {% data variables.product.prodname_registry %} について

{% data variables.product.prodname_registry %}はパッケージホスティングサービスで、{% data variables.product.prodname_dotcom %}と完全に統合されています。 {% data variables.product.prodname_registry %}は、ソースコードとパッケージを一カ所にまとめ、統合された権限管理{% ifversion not ghae %}と支払い{% endif %}を提供し、{% data variables.product.product_name %}上でのソフトウェア開発を一元化できるようにします。

{% data variables.product.prodname_registry %}は、{% data variables.product.product_name %} API、{% data variables.product.prodname_actions %}、webhookと統合して、コード、CI、デプロイメントのソリューションを含むエンドツーエンドのDevOpsワークフローを作成できます。

{% data variables.product.prodname_registry %}は、nmp、RubyGems、Apache Maven、Gradle、Docker、NuGetといった、広く使われているパッケージマネージャーに対する様々なパッケージレジストリを提供しています。 {% ifversion fpt %}{% data variables.product.prodname_dotcom %}の{% data variables.product.prodname_container_registry %}はコンテナに特化しており、DockerとOCIイメージをサポートします。{% endif %} {% data variables.product.prodname_registry %}がサポートする様々なパッケージレジストリに関する詳しい情報については「[{% data variables.product.prodname_registry %}レジストリの利用](/packages/working-with-a-github-packages-registry)」を参照してください。

{% ifversion fpt %}

![コンテナレジストリ、RubyGems、npm、Apache Maven、NuGet、Gradle のパッケージサポートを示す図](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![Dockerレジストリ、RubyGems、npm、Apache Maven、Gradle、Nuget、Dockerに対するパッケージサポートを示す図](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

{% data variables.product.product_name %}では、ライセンスのようなメタデータやパッケージのREADMEを表示したり、統計をダウンロードしたり、バージョン履歴を見たりできます。 詳しい情報については「[パッケージの表示](/packages/manage-packages/viewing-packages)」を参照してください。

### パッケージの権限と可視性の概要

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 権限                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                  |
| {% ifversion fpt %}パッケージの権限は、パッケージがホストされているリポジトリから継承したり、{% data variables.product.prodname_container_registry %}中のパッケージであれば特定のユーザあるいはOrganizationアカウントに対して定義したりできます。 詳しい情報については「[パッケージのアクセス制御と可視性の設定](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)」を参照してください。 {% else %}それぞれのパッケージは、ホストされているリポジトリの権限を継承します。 <br> <br> たとえば、リポジトリの読み取り権限を持つ人であれば、プロジェクトに依存関係としてパッケージをインストールでき、書き込み権限を持つ人であれば、新しいパッケージバージョンを公開できます。{% endif %} |                                                                  |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                  |
| 可視性                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | {% data reusables.package_registry.public-or-private-packages %}

詳しい情報については「[{% data variables.product.prodname_registry %}の権限について](/packages/learn-github-packages/about-permissions-for-github-packages)」を参照してください。

{% ifversion fpt %}
## {% data variables.product.prodname_registry %}の支払いについて

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} 詳しい情報については「[{% data variables.product.prodname_registry %}の支払いについて](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)」を参照してください。

{% endif %}

## サポートされているクライアントとフォーマット
<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported clients or formats. -->

{% data variables.product.prodname_registry %}は、パッケージのバージョンの公開とインストールに、すでにおなじみのネイティブのパッケージツールコマンドを使います。
### パッケージレジストリのサポート

| 言語         | 説明                            | パッケージフォーマット                           | パッケージクライアント  |
| ---------- | ----------------------------- | ------------------------------------- | ------------ |
| JavaScript | Nodeのパッケージマネージャー              | `package.json`                        | `npm`        |
| Ruby       | RubyGemsパッケージマネージャー           | `Gemfile`                             | `gem`        |
| Java       | Apache Mavenのプロジェクト管理及び包括的ツール | `pom.xml`                             | `mvn`        |
| Java       | Java用のGradleビルド自動化ツール         | `build.gradle` または `build.gradle.kts` | `gradle`     |
| .NET       | .NET用のNuGetパッケージ管理            | `nupkg`                               | `dotnet` CLI |
| なし         | Dockerコンテナ管理プラットフォーム          | `Dockerfile`                          | `Docker`     |

{% ifversion ghes > 2.22 %}
{% note %}

**注釈:** Subdomain Isolation が無効化されている場合、Docker はサポートされません。

{% endnote %}

Subdomain Isolation の詳しい情報については、「[Subdomain Isolation を有効化する](/enterprise/admin/configuration/enabling-subdomain-isolation)」を参照してください。

{% endif %}

{% data variables.product.prodname_registry %}と使うためのパッケージクライアントの設定に関する詳しい情報については「[{% data variables.product.prodname_registry %}レジストリの利用](/packages/working-with-a-github-packages-registry)」を参照してください。

{% ifversion fpt %}
Dockerと{% data variables.product.prodname_container_registry %}に関する詳しい情報については「[コンテナレジストリの利用](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)」を参照してください。
{% endif %}
## {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

## パッケージの管理

{% ifversion fpt %}
パッケージの削除は、{% data variables.product.product_name %}のユーザインターフェースから、もしくはREST APIを使って行えます。 詳しい情報については、「[{% data variables.product.prodname_registry %} API](/rest/reference/packages)」を参照してください。
{% endif %}

{% ifversion ghes > 3.0 %}
{% data variables.product.product_name %}のユーザインターフェースでは、プライベートあるいはパブリックパッケージを削除できます。 また、repoスコープのパッケージでは、GraphQLを使用してプライベートパッケージのバージョンを削除できます。
{% endif %}

{% ifversion ghes < 3.1 %}
プライベートパッケージのバージョンは、{% data variables.product.product_name %}上で、またはGraphQL APIを使って削除できます。
{% endif %}

{% ifversion ghae %}
パッケージのバージョンは、{% data variables.product.product_name %}上で、またはGraphQL APIを使って削除できます。
{% endif %}

GraphQL APIを使ってプライベートパッケージに対するクエリや削除を行う場合、{% data variables.product.prodname_registry %}の認証に使うのと同じトークンを使わなければなりません。 詳しい情報については、 「{% ifversion fpt or ghes > 3.0 %}[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[パッケージを削除する](/packages/learn-github-packages/deleting-a-package){% endif %}」および「"[GraphQLでの呼び出しの作成](/graphql/guides/forming-calls-with-graphql)」を参照してください。

webhookを設定して、パッケージの公開や更新といったパッケージ関連のイベントにサブスクライブできます。 詳しい情報については、「[`package` webhookイベント](/webhooks/event-payloads/#package)」を参照してください。

## サポートへの連絡

{% ifversion fpt %}
{% data variables.product.prodname_registry %}についてのフィードバックあるいは機能リクエストがある場合は、[{% data variables.product.prodname_registry %}のフィードバックフォーム](https://support.github.com/contact/feedback?contact%5Bcategory%5D=github-packages)を利用してください。

[連絡フォーム](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages)を使い、{% data variables.product.prodname_registry %}について{% data variables.contact.github_support %}に連絡してください。

* ドキュメンテーションに反する何らかの体験をした時
* 漠然とした、あるいは不明確なエラーを体験した時
* GDPR違反、APIキー、個人を識別する情報といったセンシティブなデータを含むパッケージを公開した時

{% else %}
{% data variables.product.prodname_registry %}のサポートが必要な場合は、サイト管理者に連絡してください。

{% endif %}
