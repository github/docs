---
title: Enterprise 向けの GitHub パッケージを有効化する
intro: '機能の有効化、サードパーティストレージの設定、サポートするエコシステムの設定、TLS 証明書の更新を行い、インスタンスで {% data variables.product.prodname_registry %} を使用開始します。'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

1. ベータに招待されたら、顧客担当の指示に従ってインスタンスで {% data variables.product.prodname_registry %} を有効化します。
1. Enterprise のパッケージ向けにサードパーティストレージを設定します。 詳しい情報については、「[パッケージのサードパーティストレージを設定する](/enterprise/admin/packages/configuring-third-party-storage-for-packages)」を参照してください。
1. Enterprise の各パッケージエコシステムを有効化または無効化します。 詳しい情報については、「[Enterprise 向けのパッケージサポートを設定する](/enterprise/admin/packages/configuring-packages-support-for-your-enterprise)」を参照してください。
1. Docker で {% data variables.product.prodname_registry %} を使用するために必要なインスタンスで Subdomain Isolation が有効になっている場合は、使用する各エコシステムのパッケージホスト URL（`npm.HOSTNAME` など）を許可する TLS 証明書を作成してアップロードします。 各パッケージのホスト URL に `https://` が含まれていることを確認します。

    証明書は手動で作成することも、Let's Encrypt を使用して作成することもできます。 すでに Let's Encrypt を使用している場合は、{% data variables.product.prodname_registry %} を有効にしてから新しい TLS 証明書をリクエストする必要があります。 パッケージホスト URL の詳しい情報については、「[Subdomain Isolation を有効化する](/enterprise/admin/configuration/enabling-subdomain-isolation)」を参照してください。 {% data variables.product.product_name %} への TLS 証明書のアップロード方法について詳しくは、「[TLS を設定する](/enterprise/admin/configuration/configuring-tls)」を参照してください。
