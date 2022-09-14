---
title: スポンサーとスポンサーシップを表示する
intro: スポンサーとスポンサーシップについて、詳細情報と分析を表示し、エクスポートすることができます。
redirect_from:
  - /articles/viewing-your-sponsors-and-sponsorships
  - /github/supporting-the-open-source-community-with-github-sponsors/viewing-your-sponsors-and-sponsorships
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Analytics
shortTitle: View sponsors & sponsorships
ms.openlocfilehash: 33c45171d28b77c302a04f734342b05beb04be1e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145140195'
---
## スポンサーとスポンサーシップについて

現在と過去のスポンサーシップについての分析、スポンサーから受領した支払い、キャンセルなどのイベント、スポンサーシップのスポンサー層の変更を表示できます。 新しいスポンサーシップ、スポンサーシップの変更、スポンサーシップのキャンセルといったアクティビティも確認できます。 アクティビティのリストは、日付でフィルタリングできます。 表示しているアカウントのスポンサーシップデータを CSV または JSON 形式でエクスポートすることもできます。

## トランザクション メタデータについて

スポンサーシップがどこから来ているのかを追跡するには、{% data variables.product.prodname_sponsors %} プロファイルまたはチェックアウト ページのメタデータでカスタム URL を使用できます。 メタデータは、トランザクション エクスポートのメタデータ列に含まれます。 トランザクション データのエクスポートの詳細については、「[スポンサーシップデータをエクスポートする](#exporting-your-sponsorship-data)」を参照してください。

メタデータは、`key=value` 形式を使用する必要があり、これらの URL の末尾に追加することができます。

- スポンサー付きアカウント プロファイル: `https://github.com/sponsors/{account}`
- スポンサーシップのチェックアウト: `https://github.com/sponsors/{account}/sponsorships`

潜在的なスポンサーがスポンサーになるアカウントを切り替え、毎月または 1 回限りの支払いを選択し、別のレベルを選択すると、メタデータが URL に保持されます。

### 構文の要件

メタデータは次の要件を満たしている必要があります。これは、渡される他の URL パラメーターには適用されません。

- キーには、`metadata_` のプレフィックスを付け、`metadata_campaign` のようにする必要があります。 トランザクションのエクスポートでは、`metadata_` プレフィックスはキーから削除されます。
- キーと値には、英数字、ダッシュ、またはアンダースコアのみを含める必要があります。 使用できない文字がキーまたは値のいずれかで渡されると、404 エラーが表示されます。
- スペースは使用できません。
- 要求ごとに最大 **10** 個のキーと値のペアが受け入れられます。 それを超えて渡された場合、最初の 10 個のみが保存されます。
- キーごとに最大 **25** 文字まで使用できます。 それを超えて渡された場合、最初の 25 字のみが保存されます。
- 値ごとに最大 **100** 文字まで使用できます。 それを超えて渡された場合、最初の 100 字のみが保存されます。

たとえば、ご自分のブログが発信元であるスポンサーシップを追跡するには、`https://github.com/sponsors/{account}?metadata_campaign=myblog` を使用できます。 `metadata_campaign` がキーであり、`myblog` は値です。 トランザクション エクスポートのメタデータ列に、キーが `campaign` のように表示されます。

## スポンサーとスポンサーシップを表示する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
1. 必要に応じて、スポンサーをレベル別にフィルター処理するには、 **[フィルター]** ドロップダウン メニューを使用し、 **[アクティブなレベル]** または **[廃止されたレベル]** をクリックして、レベルを選択します。
  ![レベル別のフィルター処理を行うドロップダウンメニュー](/assets/images/help/sponsors/filter-drop-down.png)

## 最近のスポンサーシップアクティビティを表示する

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.your-sponsors-tab %}

## スポンサーシップデータをエクスポートする

スポンサーシップのトランザクションは 月単位でエクスポートできます。 {% data variables.product.company_short %} で、選択した月のスポンサーすべてのトランザクションデータがメールでエクスポートされます。 エクスポートが完了したら、別の月のデータをエクスポートできます。 スポンサードアカウントごとに、1 時間に 10 セットまでのデータをエクスポートできます。

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.your-sponsors-tab %}
1. 右上の {% octicon "download" aria-label="The download icon" %} **[エクスポート]** をクリックします。
  ![[エクスポート] ボタン](/assets/images/help/sponsors/export-all.png)
1. エクスポートするデータの期間と形式を選択し、 **[エクスポートの開始]** をクリックします。
  ![データエクスポートのオプション](/assets/images/help/sponsors/export-your-sponsors.png)
