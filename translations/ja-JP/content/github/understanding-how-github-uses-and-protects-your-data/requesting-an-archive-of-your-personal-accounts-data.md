---
title: 個人アカウントのデータのアーカイブをリクエストする
redirect_from:
  - /articles/requesting-an-archive-of-your-personal-account-s-data
  - /articles/requesting-an-archive-of-your-personal-accounts-data
intro: '{% data reusables.user_settings.export-data %}'
versions:
  free-pro-team: '*'
topics:
  - policy
  - legal
---

{% data variables.product.product_name %} は、個人アカウントの活動からリポジトリとプロファイルのメタデータを保存します。 個人アカウントのデータは、{% data variables.product.prodname_dotcom_the_website %} での設定または User Migration API によりエクスポートできます。

{% data variables.product.product_name %} が保存するエクスポート用に使用できるデータの詳細については、「[ユーザー移行アーカイブをダウンロードする](/rest/reference/migrations#download-a-user-migration-archive)」と「[{% data variables.product.product_name %} のデータの使用について](/articles/about-github-s-use-of-your-data)」を参照してください。

{% data variables.product.prodname_dotcom_the_website %} での設定により個人データのエクスポートをリクエストする場合、{% data variables.product.product_name %} は個人データを `tar.gz` ファイルにパッケージ化し、ダウンロードリンクを記載したメールをお使いのプライマリ メール アドレスに送信します。

デフォルトでは、ダウンロードリンクは 7 日後に期限切れになります。 ダウンロードリンクが期限切れになる前ならばいつでも、ユーザ設定からリンクを無効にすることができます。 詳細は「[個人アカウントのデータのアーカイブへのアクセスを削除する](/articles/requesting-an-archive-of-your-personal-account-s-data/#deleting-access-to-an-archive-of-your-personal-accounts-data)」を参照してください。

`tar.gz` ファイルを解凍する機能が、お使いのオペレーティングシステムに備わっていない場合は、サードパーティ製のツールを使用して解凍してください。 詳細は Opensource.com で「[tar.gz ファイルを解凍する方法](https://opensource.com/article/17/7/how-unzip-targz-file)」を参照してください。

生成された `tar.gz` ファイルには、データのエクスポートを開始したときに保存されたデータが反映されます。

### 個人アカウントのデータのアーカイブをダウンロードする

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. [Export account data] で、[**Start export**] または [**New export**] をクリックします。 ![強調表示された [Start export] ボタン](/assets/images/help/repository/export-personal-data.png) ![強調表示された [New export] ボタン](/assets/images/help/repository/new-export.png)
4. エクスポートをダウンロードする準備が整ったら、{% data variables.product.product_name %} はお使いのプライマリメールアドレスにダウンロード リンクを送信します。
5. メール内のダウンロードリンクをクリックし、要求されたらパスワードを再入力します。
6. ダウンロードできる `tar.gz` ファイルにリダイレクトされます。

### 個人アカウントのデータのアーカイブへのアクセスを削除する

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. メールに送信されたダウンロードリンクを有効期限が切れる前に無効にするには、[Export account data] で無効にするデータエクスポートのダウンロードを探し、[**Delete**] をクリックします。 ![強調表示された [Delete personal data export package] ボタン](/assets/images/help/repository/delete-export-personal-account-data.png)
