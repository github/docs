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
ms.openlocfilehash: 2389eba768a8b2f865165b43dde0e1b6381c6ae7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '146199963'
---
{% data reusables.package_registry.packages-cluster-support %}

## ステップ 1: 企業で {% data variables.product.prodname_registry %} が利用できるか確認する

{% data variables.product.prodname_registry %} は {% data variables.product.prodname_ghe_server %} 3.0 以降で利用できます。 以前のバージョンの {% data variables.product.prodname_ghe_server %} を使用している場合は、{% data variables.product.prodname_registry %} を使用するようにアップグレードする必要があります。 {% data variables.product.prodname_ghe_server %} インスタンスのアップグレードの詳細については、「[新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases)」を参照してください。
## ステップ 2: {% data variables.product.prodname_registry %} を有効化して外部ストレージを設定する

{% data variables.product.prodname_ghe_server %} 上の {% data variables.product.prodname_registry %} は、外部の blob ストレージを使用してパッケージを保存します。

{% data variables.product.product_location %} に対して {% data variables.product.prodname_registry %} を有効にした後、サードパーティのストレージバケットを準備する必要があります。 必要なストレージ容量は、{% data variables.product.prodname_registry %} の使用状況によって異なり、セットアップガイドラインはストレージプロバイダによって異なる場合があります。

サポートされている外部ストレージプロバイダ
- アマゾン ウェブ サービス (AWS) S3 {% ifversion ghes %}
- Azure Blob Storage {% endif %}
- MinIO

{% data variables.product.prodname_registry %} を有効にしてサードパーティのストレージを設定するには、以下を参照してください。
  - "[AWS で GitHub パッケージを有効にする](/admin/packages/enabling-github-packages-with-aws)"{% ifversion ghes %}
  - "[Azure Blob Storage で GitHub Packages を有効化する](/admin/packages/enabling-github-packages-with-azure-blob-storage)"{% endif %}
  - "[MinIO で GitHub Packages を有効にする](/admin/packages/enabling-github-packages-with-minio)"

## ステップ 3: インスタンスでサポートするパッケージエコシステムを指定する

{% data variables.product.product_location %} で有効、無効、または読み取り専用に設定するパッケージエコシステムを選択します。 使用可能なオプションは、{% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}、{% endif %}Docker、RubyGems、npm、Apache Maven、Gradle、または NuGet です。  詳細については、「[エンタープライズ向けのパッケージ エコシステム サポートの構成](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise)」を参照してください。

## ステップ 4: パッケージホスト URL に TLS 証明書があることを確認する (必要に応じて)

{% data variables.product.product_location %} でサブドメイン分離が有効になっている場合、`{% data reusables.package_registry.container-registry-hostname %}` など、使用するエコシステムごとにパッケージ ホスト URL を許可する TLS 証明書を作成し、アップロードする必要があります。 各パッケージ ホスト URL に `https://` が含まれていることを確認します。

  手動で証明書を作成するか、_Let's Encrypt_ を使用できます。 既に _Let's Encrypt_ を使用している場合は、{% data variables.product.prodname_registry %} を有効にしてから新しい TLS 証明書をリクエストする必要があります。 パッケージ ホスト URL の詳細については、「[サブドメイン分離の有効化](/enterprise/admin/configuration/enabling-subdomain-isolation)」を参照してください。 TLS 証明書を {% data variables.product.product_name %} にアップロードする方法については、[TLS の構成](/enterprise/admin/configuration/configuring-tls)に関するページを参照してください。

## 手順 5: 予約名を確認して名前を変更する

サブドメイン分離が無効になっている Docker エコシステムを使う場合は、{% data variables.enterprise.management_console %} で Docker エコシステムのサポートを有効にする前に、まず {% data variables.product.product_location %} という名前 **のユーザーまたは Organization の名前を変更する** 必要があります`v2`。 Docker では、`v2` アカウント名を使って Docker API とのパスの競合を管理します。この名前は、Docker レジストリのサポートが有効になると使えなくなります。

サイト管理者ダッシュボードの [予約済みログイン] ページに移動すると、内部使用のために予約されたログインの完全な一覧を確認できます。 詳細については、「[予約済みログイン](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#reserved-logins)」を参照してください。
