---
title: ステージング環境を使用する
intro: '{% data variables.product.prodname_actions %} を {% data variables.product.prodname_ghe_server %} ステージング インスタンスで使用する方法について学びます。'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Upgrades
redirect_from:
  - /admin/github-actions/using-a-staging-environment
shortTitle: Use staging environment
ms.openlocfilehash: 3d244d25aae5a6e21b4db1cd04352343d6650975
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120454'
---
## {% data variables.product.product_name %} のステージング環境について

{% data variables.product.product_location %} のステージング環境またはテスト環境があると便利な場合があります。これにより、更新または新機能を本番環境に実装する前にテストできます。 詳細については、「[ステージング インスタンスの設定](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)」を参照してください。

## {% data variables.product.prodname_actions %} でステージング環境を使用する

ステージング環境を作る一般的な方法は、運用 {% data variables.product.product_name %} インスタンスのバックアップをステージング環境の新しい仮想環境に復元することです。 ステージング インスタンスを使用し、{% data variables.product.prodname_actions %} 機能をテストする予定の場合、ステージング環境でストレージ構成を確認してください。

{% data variables.product.prodname_ghe_server %} バックアップをステージング インスタンスに復元した後、ステージング インスタンスでの既存の {% data variables.product.prodname_actions %} ワークフロー実行のログや成果物を表示すると、`404` エラーが確認されます。お使いのステージング ストレージの場所にこのデータがないためです。 `404` エラーを回避するには、運用環境からデータをコピーし、ステージング環境で使用できます。

### 記憶域の構成

{% data variables.product.product_name %} インスタンスが含まれるステージング環境を設定し、{% data variables.product.prodname_actions %} を有効にするとき、運用環境とは異なる外部ストレージ構成を {% data variables.product.prodname_actions %} ストレージに使用する必要があります。

{% warning %}

**警告**: ストレージ構成を変更しないと、運用環境に使用するものと同じ外部ストレージでステージング インスタンスの書き込むが行われる可能性があり、その結果、データが失われることがあります。

{% endwarning %}

{% data variables.product.prodname_actions %} のストレージ構成について詳しくは、「[{% data variables.product.prodname_ghe_server %} の {% data variables.product.prodname_actions %} を使用する](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#enabling-github-actions-with-your-storage-provider)」を参照してください。

### 運用環境からステージングにファイルをコピーする

運用環境のミラーリングの精度を上げるために、必要に応じて、{% data variables.product.prodname_actions %} の運用環境ストレージの場所からステージングストレージの場所にファイルをコピーできます。

* Azure ストレージアカウントの場合、[`azcopy`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account) を使用できます。 次に例を示します。

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* Amazon S3 バケットの場合、[`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html) を使用できます。 次に例を示します。

  ```shell
  aws s3 sync s3://<em>SOURCE-BUCKET</em> s3://<em>DESTINATION-BUCKET</em>
  ```
