---
title: Enterprise 向けの GitHub Packages を使い始める
shortTitle: Getting started with GitHub Packages
intro: 'この機能の有効化、サードパーティのストレージの設定、サポートするエコシステムの設定、TLS 証明書の更新を行い、{% data variables.product.product_location %} で {% data variables.product.prodname_registry %} を使用開始します。'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /admin/packages/enabling-github-packages-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
---


{% data reusables.package_registry.packages-cluster-support %}

## ステップ 1: {% data variables.product.prodname_registry %} を有効化して外部ストレージを設定する

{% data variables.product.prodname_ghe_server %} 上の {% data variables.product.prodname_registry %} は、外部の blob ストレージを使用してパッケージを保存します。

{% data variables.product.product_location %} に対して {% data variables.product.prodname_registry %} を有効にした後、サードパーティのストレージバケットを準備する必要があります。 必要なストレージ容量は、{% data variables.product.prodname_registry %} の使用状況によって異なり、セットアップガイドラインはストレージプロバイダによって異なる場合があります。

サポートされている外部ストレージプロバイダ
- Amazon Web Services (AWS) S3 {% ifversion ghes %}
- Azure Blob Storage {% endif %}
- MinIO

{% data variables.product.prodname_registry %} を有効にしてサードパーティのストレージを設定するには、以下を参照してください。
  - 「[AWS で GitHub Packages を有効にする](/admin/packages/enabling-github-packages-with-aws)」{% ifversion ghes %}
  - 「[Azure Blob Storage で GitHub Packages を有効化する](/admin/packages/enabling-github-packages-with-azure-blob-storage)」{% endif %}
  - 「[MinIO で GitHub Packages を有効にする](/admin/packages/enabling-github-packages-with-minio)」

## ステップ 2: インスタンスでサポートするパッケージエコシステムを指定する

{% data variables.product.product_location %} で有効、無効、または読み取り専用に設定するパッケージエコシステムを選択します。 使用可能なオプションは、Docker、RubyGems、npm、Apache Maven、Gradle、または NuGet です。  詳しい情報については、「[Enterprise 向けのパッケージエコシステムサポートを設定する](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise)」を参照してください。

## ステップ 3: パッケージホスト URL に TLS 証明書があることを確認する (必要に応じて)

If subdomain isolation is enabled for {% data variables.product.product_location %}, you will need to create and upload a TLS certificate that allows the package host URL for each ecosystem you want to use, such as `npm.HOSTNAME`. 各パッケージのホスト URL に `https://` が含まれていることを確認します。

  証明書は手動で作成することも、_Let's Encrypt_ を使用することもできます。 _Let's Encrypt_ を既に使用している場合は、{% data variables.product.prodname_registry %} を有効にした後で新しい TLS 証明書をリクエストする必要があります。 パッケージホスト URL の詳しい情報については、「[Subdomain Isolation を有効化する](/enterprise/admin/configuration/enabling-subdomain-isolation)」を参照してください。 {% data variables.product.product_name %} への TLS 証明書のアップロード方法について詳しくは、「[TLS を設定する](/enterprise/admin/configuration/configuring-tls)」を参照してください。
