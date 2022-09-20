---
ms.openlocfilehash: b7f16729209b711d9ea95d059f5868ae867fa040
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147419882"
---
1. **[Account or organization]\(アカウントまたは組織\)** ドロップダウン メニューを選択し、サポート チケットに関連するアカウントの名前をクリックします。
![[Account or organization]\(アカウントまたは組織\) ドロップダウン メニューのスクリーンショット。](/assets/images/help/support/account-field.png)
1. **[From]\(差出人\)** ドロップダウン メニューを選択して、{% data variables.contact.github_support %} の連絡先にしたいメール アドレスをクリックします。
![[From]\(差出人\) ドロップダウン メニューのスクリーンショット。](/assets/images/help/support/from-field.png)
{%- ifversion ghec or ghes %}
1. **[Product]\(製品\)** ドロップダウン メニューを選択し、{% ifversion ghes %} **[GitHub Enterprise Server (self-hosted)]\(GitHub Enterprise Server (セルフホステッド)\)** {% else %} **[GitHub Enterprise Cloud]** {% endif %} をクリックします。
{% ifversion ghec %}![[Product]\(製品\) ドロップダウン メニューのスクリーンショット。](/assets/images/help/support/product-field-ghec.png){% else %}![[Product]\(製品\) ドロップダウン メニューのスクリーンショット。](/assets/images/help/support/product-field.png){% endif %} {%- endif %} {%- ifversion ghes %}
1. メッセージが表示されたら、 **[Server installation]\(サーバーのインストール\)** ドロップダウン メニューを選択し、サポート チケットに関連するインストールをクリックします。 インストールが表示されない場合は、 **[Other]\(その他\)** をクリックします。
![[Server installation]\(サーバーのインストール\) ドロップダウン メニューのスクリーンショット](/assets/images/help/support/installation-field.png) {%- endif %} {%- ifversion ghes %}
1. **[Release series]\(リリース シリーズ\)** ドロップダウン メニューを選択し、{% data variables.product.product_location_enterprise %} を実行するリリースをクリックします。
![[Release series]\(リリース シリーズ\) ドロップダウン メニューのスクリーンショット](/assets/images/help/support/release-field.png) {%- endif %} {%- ifversion ghes or ghec %}
1. **[Priority]\(優先度\)** ドロップダウン メニューを選択し、適切な緊急度をクリックします。 詳細については、「[チケットの優先度について](/support/learning-about-github-support/about-ticket-priority)」を参照してください。
  ![[Priority]\(優先度\) ドロップダウン メニューのスクリーンショット。](/assets/images/help/support/priority-field.png)
{%- endif %} {%- ifversion ghes %}
    - {% ifversion fpt or ghec %}クリティカルなシステム障害{% else %}致命的なシステム障害、クリティカルなシステムの操作に影響する停止、セキュリティ インシデント、ライセンスの期限切れ{% endif %}を報告するには、 **{% data variables.product.support_ticket_priority_urgent %}** を選択してください。
    - {% ifversion fpt or ghec %}自分のアカウントからの機密データの削除 (コミット、issue、pull request、添付ファイルのアップロード) や組織の復元{% else %}システム パフォーマンスの問題{% endif %}など、ビジネスの運営に影響を与える問題を報告したり、クリティカルなバグを報告したりするには、 **{% data variables.product.support_ticket_priority_high %}** を選択してください。
    - {% ifversion fpt or ghec %}アカウントの回復やスパムのフラグ解除を要求したり、ユーザー ログインの問題を報告したり{% else %}構成の変更やサードパーティとの統合などの技術的な要求を行ったり{% endif %}、クリティカルではないバグを報告したりするには、 **{% data variables.product.support_ticket_priority_normal %}** を選択してください。
    - 一般的な質問をしたり、新機能、購入、トレーニング、正常性チェックに関する要求を送信したりするには、 **{% data variables.product.support_ticket_priority_low %}** を選択してください。
{%- endif %} {%- ifversion ghes or ghec %}
1. 必要に応じて、アカウントに {% data variables.contact.premium_support %} が含まれており、チケットが {% ifversion ghes %}urgent または high{% elsif ghec %}high{% endif %} の優先度である場合は、英語でのコールバックを要求できます。 **[Request a callback from GitHub Support]\(GitHub サポートからのコールバックを要求する\)** を選択し、国番号のドロップダウン メニューを選択して自分の国を選択し、電話番号を入力します。
!["コールバックの要求" チェックボックス、[Country code]\(国番号\) ドロップダウン メニュー、[Phone number]\(電話番号\) テキスト ボックスのスクリーンショット。](/assets/images/help/support/request-callback.png)
{%- endif %}
1. [Subject] には、サブミットしようとしている問題がわかりやすい題名を入力してください。
![[Subject]\(件名\) テキスト ボックスのスクリーンショット。](/assets/images/help/support/subject-field.png)
1. [How can we help] には、Support チームが問題のトラブルシューティングをするうえで役立つと考えられる追加情報をすべて入力してください。 マークダウンを使用してメッセージを書式設定できます。
  ![[How can we help]\(どのようなご用件ですか\) テキスト領域のスクリーンショット。](/assets/images/help/support/how-can-we-help-field.png)
   有益な情報の例としては、以下のようなものがあります:
    - 問題を再現する手順
    - 問題を発見したときの特殊な状況 (たとえば、最初に発生したときや特定のイベントの後に発生したとき、発生頻度、問題のビジネスへの影響、緊急性の示唆など)
    - エラー メッセージ {% indented_data_reference reusables.repositories.anyone-can-view-anonymized-url spaces=3 %} の正確な表現

{%- ifversion ghes %}
1. 必要に応じて、診断ファイルやその他のファイルを、ドラッグ アンド ドロップ、アップロード、またはクリップボードからの貼り付けで添付します。
{%- endif %}
1. **[Send request]\(要求を送信する\)** をクリックします。
![[Send request]\(要求を送信する\) ボタンのスクリーンショット。](/assets/images/help/support/send-request-button.png)
