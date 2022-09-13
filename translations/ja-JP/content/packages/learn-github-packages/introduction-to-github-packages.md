---
title: GitHub Packages の概要
intro: '{% data variables.product.prodname_registry %} はソフトウェア パッケージのホスティング サービスであり、ソフトウェア パッケージをプライベートに{% ifversion ghae %}特定のユーザーに対して、または Enterprise に対して内部的に{% else %}またはパブリックに{% endif %}ホストでき、パッケージをプロジェクト中で依存関係として使えるようになります。'
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
  ghec: '*'
shortTitle: Introduction
ms.openlocfilehash: a141c93378f836eebf5ff33b0ced482409d6e577
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147704948'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## {% data variables.product.prodname_registry %} について

{% data variables.product.prodname_registry %} は、コンテナーやその他の依存関係を含むパッケージをホストおよび管理するためのプラットフォームです。 {% data variables.product.prodname_registry %}は、ソースコードとパッケージを 1 か所にまとめ、統合された権限管理{% ifversion fpt or ghec %}と支払い{% endif %}を提供し、{% data variables.product.product_name %} 上でのソフトウェア開発を一元化できるようにします。

{% data variables.product.prodname_registry %}は、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API、{% data variables.product.prodname_actions %}、webhookと統合して、コード、CI、デプロイメントのソリューションを含むエンドツーエンドのDevOpsワークフローを作成できます。

{% data variables.product.prodname_registry %}は、nmp、RubyGems、Apache Maven、Gradle、Docker、NuGetといった、広く使われているパッケージマネージャーに対する様々なパッケージレジストリを提供しています。 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} の {% data variables.product.prodname_container_registry %} はコンテナーに最適化されており、Docker と OCI イメージをサポートします。{% endif %} {% data variables.product.prodname_registry %} がサポートするさまざまなパッケージ レジストリについての詳しい情報は、「[{% data variables.product.prodname_registry %} レジストリの操作](/packages/working-with-a-github-packages-registry)」をご覧ください。

{% ifversion fpt or ghec %}

![コンテナレジストリ、RubyGems、npm、Apache Maven、NuGet、Gradle のパッケージサポートを示す図](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![Dockerレジストリ、RubyGems、npm、Apache Maven、Gradle、Nuget、Dockerに対するパッケージサポートを示す図](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

{% data variables.product.product_name %}では、ライセンスのようなメタデータやパッケージのREADMEを表示したり、統計をダウンロードしたり、バージョン履歴を見たりできます。 詳しくは、「[パッケージの表示](/packages/manage-packages/viewing-packages)」をご覧ください。

{% ifversion ghes %}

{% data variables.product.product_name %} での {% data variables.product.prodname_registry %} の構成について詳しくは、「[Enterprise 向けの {% data variables.product.prodname_registry %} を使い始める](/admin/packages/getting-started-with-github-packages-for-your-enterprise)」を参照してください。

{% endif %}

### パッケージの権限と可視性の概要

|                    |        |
|--------------------|--------------------|
| アクセス許可        | {% ifversion fpt or ghec %}パッケージの権限は、パッケージがホストされているリポジトリから継承したり、{% data variables.product.prodname_ghcr_and_npm_registry %}内のパッケージの場合は特定のユーザーまたは Organization アカウントに対して定義したりできます。 詳しくは、「[パッケージのアクセス制御と可視性の設定](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)」を参照してください。 {% else %}それぞれのパッケージは、ホストされているリポジトリの権限を継承します。 <br> <br> たとえば、リポジトリの読み取り権限を持つ人であれば、プロジェクトに依存関係としてパッケージをインストールでき、書き込み権限を持つ人であれば、新しいパッケージバージョンを公開できます。{% endif %} |
| 視程         | {% data reusables.package_registry.public-or-private-packages %} |

詳細については、「[{% data variables.product.prodname_registry %} のアクセス許可について](/packages/learn-github-packages/about-permissions-for-github-packages)」を参照してください。

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_registry %} の請求について

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} 詳しくは、「[{% data variables.product.prodname_registry %} の請求について](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)」を参照してください。

{% endif %}

## サポートされているクライアントとフォーマット
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

{% data variables.product.prodname_registry %}は、パッケージのバージョンの公開とインストールに、すでにおなじみのネイティブのパッケージツールコマンドを使います。
### パッケージレジストリのサポート

| Language | 説明 | パッケージの形式 | パッケージクライアント |
| --- | --- | --- | --- |
| JavaScript | Nodeのパッケージマネージャー | `package.json`  | `npm` |
| Ruby |  RubyGemsパッケージマネージャー | `Gemfile` |  `gem` |
| Java | Apache Mavenのプロジェクト管理及び包括的ツール | `pom.xml` |  `mvn` |
| Java | Java用のGradleビルド自動化ツール | `build.gradle` または `build.gradle.kts`  | `gradle`  |
| .NET | .NET用のNuGetパッケージ管理 | `nupkg`  |  `dotnet` CLI |
| 該当なし | Dockerコンテナ管理プラットフォーム | `Dockerfile` | `Docker` |

{% ifversion ghes %} {% note %}

**注:** Docker レジストリを有効にする場合は、サブドメインの分離も有効にすることを強くお勧めします。 詳細については、「[サブドメイン分離の有効化](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation)」を参照してください。

{% endnote %}

{% endif %}

{% data variables.product.prodname_registry %} と使用するようにパッケージ クライアントを構成する方法について詳しくは、「[{% data variables.product.prodname_registry %} レジストリの操作](/packages/working-with-a-github-packages-registry)」をご覧ください。

{% ifversion fpt or ghec %}Docker と {% data variables.product.prodname_container_registry %} について詳しくは、「[コンテナー レジストリの操作](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)」を参照してください。
{% endif %}
## {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

## パッケージを管理する

{% ifversion fpt or ghec %}{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} ユーザー インターフェイスまたは REST API を使用して、パッケージを削除できます。 詳しくは、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」および [{% data variables.product.prodname_registry %} API](/rest/reference/packages) に関するページをご覧ください。

{% data reusables.package_registry.no-graphql-to-delete-packages %} {% endif %}

{% ifversion ghes %} {% data variables.product.product_name %} のユーザー インターフェイスでは、非公開あるいはパブリック パッケージを削除できます。 また、repoスコープのパッケージでは、GraphQLを使用してプライベートパッケージのバージョンを削除できます。
{% endif %}

{% ifversion ghae %} パッケージのバージョンは、{% data variables.product.product_name %} ユーザー インターフェイス内で、または GraphQL API を使って削除できます。
{% endif %}

GraphQL APIを使ってプライベートパッケージに対するクエリや削除を行う場合、{% data variables.product.prodname_registry %}の認証に使うのと同じトークンを使わなければなりません。

詳しくは、{% ifversion ghes or ghae %}「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」および{% endif %}「[GraphQL での呼び出しの作成](/graphql/guides/forming-calls-with-graphql)」をご覧ください。

webhookを設定して、パッケージの公開や更新といったパッケージ関連のイベントにサブスクライブできます。 詳細については、「[`package` webhook イベント](/webhooks/event-payloads/#package)」を参照してください。

## サポートへの問い合わせ

{% ifversion fpt or ghec %} {% data variables.product.prodname_registry %} に対するフィードバックや機能の要求がある場合は、[{% data variables.product.prodname_github_community %} ディスカッション](https://github.com/orgs/community/discussions/categories/actions-and-packages)をお使いください。

次の場合は、[お問い合わせフォーム](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages)を使用して、{% data variables.product.prodname_registry %} について {% data variables.contact.github_support %} にお問い合わせください。

* ドキュメンテーションに反する何らかの体験をした時
* 漠然とした、あるいは不明確なエラーを体験した時
* GDPR違反、APIキー、個人を識別する情報といったセンシティブなデータを含むパッケージを公開した時

{% else %}{% data variables.product.prodname_registry %} のサポートが必要な場合は、サイト管理者にお問い合わせください。

{% endif %}
