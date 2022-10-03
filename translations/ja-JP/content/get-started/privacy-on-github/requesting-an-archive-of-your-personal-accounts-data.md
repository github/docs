---
title: 個人アカウントのデータのアーカイブをリクエストする
redirect_from:
  - /articles/requesting-an-archive-of-your-personal-account-s-data
  - /articles/requesting-an-archive-of-your-personal-accounts-data
  - /github/understanding-how-github-uses-and-protects-your-data/requesting-an-archive-of-your-personal-accounts-data
intro: '{% data reusables.user-settings.export-data %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Request account archive
ms.openlocfilehash: f296796810978f6d884fabc699c01fbc3eabf5eb
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147878959'
---
{% data variables.product.product_name %} は、個人アカウントの活動からリポジトリとプロファイルのメタデータを保存します。 個人アカウントのデータは、{% data variables.product.prodname_dotcom_the_website %} での設定または User Migration API によりエクスポートできます。

エクスポート用に利用できるデータ {% data variables.product.product_name %} ストアの詳細については、「[ユーザー移行アーカイブのダウンロード](/rest/reference/migrations#download-a-user-migration-archive)」および「[{% data variables.product.product_name %} でのデータの使用について](/articles/about-github-s-use-of-your-data)」を参照してください。

{% data variables.product.prodname_dotcom_the_website %} での設定を使用して個人データのエクスポートを要求する場合は、{% data variables.product.product_name %} によって、`tar.gz` ファイル内の個人データがパッケージ化され、ダウンロード リンクを記載したメールがプライマリ メール アドレス宛てに送信されます。

デフォルトでは、ダウンロードリンクは 7 日後に期限切れになります。 ダウンロードリンクが期限切れになる前ならばいつでも、ユーザ設定からリンクを無効にすることができます。 詳細については、「[個人アカウントのデータのアーカイブへのアクセスを削除する](/articles/requesting-an-archive-of-your-personal-account-s-data/#deleting-access-to-an-archive-of-your-personal-accounts-data)」を参照してください。

お使いのオペレーティング システムに `tar.gz` ファイルを解凍する機能が用意されていない場合は、サードパーティ製のツールを使用して抽出してください。 詳細については、Opensource.com で、「[How to unzip a tar.gz file](https://opensource.com/article/17/7/how-unzip-targz-file)」 (tar.gz ファイルの解凍方法) を参照してください。

生成された `tar.gz` ファイルには、データのエクスポートを開始したときに保存されたデータが反映されます。

## 個人アカウントのデータのアーカイブをダウンロードする

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. [アカウント データのエクスポート] で、 **[エクスポートの開始]** または **[新しいエクスポート]** をクリックします。
![強調表示されている [個人データのエクスポートの開始] ボタン](/assets/images/help/repository/export-personal-data.png)
![強調表示されている [新しい個人データのエクスポート] ボタン](/assets/images/help/repository/new-export.png)
4. エクスポートをダウンロードする準備が整ったら、{% data variables.product.product_name %} はお使いのプライマリメールアドレスにダウンロード リンクを送信します。
5. メール内のダウンロードリンクをクリックし、要求されたらパスワードを再入力します。
6. ダウンロード可能な `tar.gz` ファイルにリダイレクトされます。

## 個人アカウントのデータのアーカイブへのアクセスを削除する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. メールで届いたダウンロード リンクを有効期限が切れる前に無効にするには、[アカウント データのエクスポート] で、無効にするデータ エクスポートのダウンロードを見つけて、 **[削除]** をクリックします。
![強調表示されている [個人データのエクスポート パッケージの削除] ボタン](/assets/images/help/repository/delete-export-personal-account-data.png)
