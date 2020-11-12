---
title: パッケージを公開する
intro: '{% data variables.product.prodname_registry %}にパッケージを公開し、そのパッケージを他者がダウンロードして再利用できるようにすることができます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/publishing-a-package
permissions: リポジトリの書き込み権限を持つ人は、そのリポジトリにパッケージを公開できます。
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### 公開されたパッケージについて

パッケージページ上のインストール及び利用方法の説明といった、説明やその他の詳細を提供することによって、パッケージを理解して利用しやすくできます。 {% data variables.product.product_name %} は各バージョンについて、公開日、ダウンロードのアクティビティ、最近のバージョンなどのメタデータを提供します。 パッケージページの例としては、[@Codertocat/hello-world-npm](https://github.com/Codertocat/hello-world-npm/packages/10696?version=1.0.1)を参照してください。

{% data reusables.package_registry.public-or-private-packages %} リポジトリには複数のパッケージを含めることができます。 混乱を避けるため、READMEと説明で各パッケージに関する情報を明確に提供してください。

{% data reusables.package_registry.package-immutability %}

{% if currentVersion == "free-pro-team@latest" %}
新しいバージョンのパッケージでセキュリティの脆弱性が解決される場合は、リポジトリでセキュリティアドバイザリを公開する必要があります。
{% data variables.product.prodname_dotcom %} reviews each published security advisory and may use it to send {% data variables.product.prodname_dependabot_alerts %} to affected repositories. 詳しい情報については、「[GitHub セキュリティアドバイザリについて](/github/managing-security-vulnerabilities/about-github-security-advisories)」 を参照してください。
{% endif %}

### パッケージを公開する

以下の同じ一般的なガイドラインに従って、{% if currentVersion == "free-pro-team@latest" %}サポートされているいずれかのパッケージのクライアント{% else %}インスタンスで有効化しているパッケージのタイプ{% endif %}を使い、{% data variables.product.prodname_registry %} にパッケージを公開できます。

1. 実行したいタスクに対して適切なスコープを持つ既存のアクセストークンを作成もしくは利用してください。 詳しい情報については「[{% data variables.product.prodname_registry %}について](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)」を参照してください。
2. 使用するパッケージクライアントについての指示に従って、アクセストークンを使って{% data variables.product.prodname_registry %}の認証をしてください。
3. 使用するパッケージクライアントに関する指示に従って、パッケージを公開してください。

使用するパッケージクライアントに特有の指示については、「[プロジェクトのエコシステムでの{% data variables.product.prodname_registry %}の利用](/packages/using-github-packages-with-your-projects-ecosystem)」を参照してください。

パッケージを公開した後は、{% data variables.product.prodname_dotcom %}上でそのパッケージを見ることができます。 詳しい情報については「[パッケージの表示](/packages/publishing-and-managing-packages/viewing-packages)」を参照してください。
