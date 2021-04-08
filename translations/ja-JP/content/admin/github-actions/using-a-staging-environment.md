---
title: ステージング環境を使用する
intro: '{% data variables.product.prodname_actions %} を {% data variables.product.prodname_ghe_server %} ステージング環境で使用する方法について説明します。'
versions:
  enterprise-server: '>=3.0'
topics:
  - enterprise
---

{% data variables.product.product_location %} のステージング環境またはテスト環境があると便利な場合があります。これにより、更新または新機能を本番環境に実装する前にテストできます。

ステージング環境を作成する一般的な方法は、本番インスタンスのバックアップを使用して、それをステージング環境に復元することです。

{% data variables.product.prodname_actions %} が有効になっている {% data variables.product.prodname_ghe_server %} ステージング環境をセットアップする場合、{% data variables.product.prodname_actions %} ストレージには本番環境が使用するものとは異なる外部ストレージ設定を使用する必要があります。 それ以外の場合、ステージング環境は本番環境と同じ外部ストレージに書き込まれます。

既存の {% data variables.product.prodname_actions %} ワークフロー実行からログまたはアーティファクトを表示しようとすると、ステージング環境で `404` エラーが発生することが予想されます。これは、そのデータがステージングストレージの場所から消失するためです。

{% data variables.product.prodname_actions %} がステージング環境で機能する必要はありませんが、必要に応じて、ファイルを本番ストレージの場所からステージングストレージの場所にコピーできます。

* Azure ストレージアカウントの場合、[`azcopy`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account) を使用できます。 例:

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* Amazon S3 バケットの場合、[`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html) を使用できます。 例:

  ```shell
  aws s3 sync s3://<em>SOURCE-BUCKET</em> s3://<em>DESTINATION-BUCKET</em>
  ```
