---
title: リストの取引の表示
intro: '{% data variables.product.prodname_marketplace %}の取引ページでは、{% data variables.product.prodname_marketplace %}リストのすべての取引をダウンロードしたり表示したりできます。 過去の日（24時間）、週、月、または{% data variables.product.prodname_github_app %}が掲載された期間全体に対する取引を見ることができます。'
redirect_from:
  - /marketplace/github-marketplace-transactions
  - /developers/github-marketplace/viewing-transactions-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: View listing transactions
ms.openlocfilehash: f0e02ca4038131752d4a5fab54de1f1f539289c2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089743'
---
{% note %}

**注:** データの集計には時間がかかるので、表示される日付には若干の遅れが生じます。 期間を選択すると、ページの上部にそのメトリクスの正確な日付が表示されます。

{% endnote %}


サブスクリプションのアクティビティを追跡するために、取引のデータを表示したりダウンロードしたりできます。 **[CSV にエクスポート]** ボタンをクリックして、`.csv` ファイルをダウンロードします。 取引ページ内で表示したり検索したりする期間を選択することもできます。

## 取引のデータフィールド

* **date:** トランザクションの日付 (`yyyy-mm-dd` 形式)。
* **app_name:** アプリ名。
* **user_login:** サブスクリプションを持つユーザーのログイン。
* **user_id:** サブスクリプションを持つユーザーの ID。
* **user_type:** GitHub アカウントの種類。`User` または `Organization`。
* **country:** 3 文字の国番号。
* **amount_in_cents:** トランザクションの金額 (セント単位)。 値がプランの額を下回っている場合は、ユーザがアップグレードをして新しいプランが日割りになっています。 値がゼロになっている場合は、ユーザがプランをキャンセルしたことを示します。
* **renewal_frequency:** サブスクリプションの更新頻度。`Monthly` または `Yearly`。
* **marketplace_listing_plan_id:** サブスクリプション プランの `id`。
* **region:** 請求先住所に存在するリージョンの名前。
* **postal_code:** 請求先住所に存在する郵便番号の値。

![Marketplace の分析情報](/assets/images/marketplace/marketplace_transactions.png)

## {% data variables.product.prodname_marketplace %}の取引へのアクセス

{% data variables.product.prodname_marketplace %}の取引にアクセスするには以下のようにしてください。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.marketplace_apps %}
4. 取引を表示する{% data variables.product.prodname_github_app %}を選択します
{% data reusables.user-settings.edit_marketplace_listing %}
6. **[トランザクション]** タブをクリックします。
7. 取引ページの右上にあるPeriod（期間）ドロップダウンをクリックして、異なる期間を選択することもできます。
![Marketplace の期間](/assets/images/marketplace/marketplace_insights_time_period.png)
