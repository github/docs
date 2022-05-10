---
title: インドのお客様の1回払い
intro: インド準備銀行の定期的な支払い規制の影響を受けたインドのお客様は、GitHubのプランとサービスに1回払いができるようになりました。
redirect_from:
  - /early-access/billing/india-rbi-regulation
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Billing
  - Sponsors
  - Policy
shortTitle: インドの1回払い
---


## インド準備銀行の定期的な支払い規制について

インド準備銀行（RBI）の新たな支払い規制が最近施行されました。 この規制は定期的なオンライン取引に追加の要件を設定し、インドにおける{% data variables.product.company_short %}のお客様の一部が定期的な支払いをできなくなりました。 {% data variables.product.product_name %}上の定期的な取引にインドで発行された支払い方法を使っているお客様は、支払いが銀行あるいはカード発行者によって拒否されることがあります。 詳しい情報については[RBIのプレスリリース](https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=51353)を参照してください。

この規制は、以下を含むすべての定期的な取引に適用されます。
- {% data variables.product.prodname_dotcom %}プラン（Pro、Team、Enterprise）
- {% data variables.product.prodname_marketplace %}の購入
- {% data variables.product.prodname_sponsors %}の取引
- Git Large File Storageの購入
- {% data variables.product.prodname_actions %}、{% data variables.product.prodname_registry %}、{% data variables.product.prodname_codespaces %}の消費

混乱を最小限に抑えるため、影響を受けたお客様の定期的な取引は、2021 年10月29日に一時停止されました。 RBIの規制によって影響を受けたお客様については、有料の機能やサービスは引き続きご利用いただけます。

## {% data variables.product.company_short %}の1回払いについて

支払いゲートウェイプロバイダーと協力して新しい要件を満たそうとしていますが、インドで影響を受けたお客様のために一時的な1回払いのオプションを提供しています。 2022年2月15日から、新しいRBI規制の影響を受けたインドの{% data variables.product.company_short %}のお客様は、通常の支払いサイクルの周期で1回払いができます。

### 月ごとの支払いのお客様

月ごとの支払いプランのお客様は、通常の支払いサイクルの更新の日に1回払いができます。 たとえば、通常各月の7日に支払いをしている場合、毎月7日以降にアカウントから1回払いができるようになります。 最初の1回払いには2021年10月以降の利用分も含まれます。

現在月ごとに支払いをしており、年間の支払いに切り替えたい場合は、1回払いの頻度を下げることができます。 詳しい情報については「[支払いサイクルの期間の変更](/en/billing/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle)」を参照してください。

### 年間払いのお客様

年間で支払いをしており、更新日が2021年10月1日から2022年2月14日の間なら、年間プランに対する1回払いを2月15日から行えるようになります。 この最初の支払いには、以前の支払いサイクルが終了してからのプランに対する日割り計算されたコストが含まれます。

支払いサイクルが2月15日以降に更新される場合は、定期的な支払いを受けられるよう試みます。 支払いが拒否された場合は、アカウントの支払いページを通じて1回払いができます。

その間、影響されたお客様の定期的な支払いを復活させるよう、支払いパートナーと積極的に協力します。 詳しい情報や質問については、[GitHub Support](https://support.github.com/contact)にお問い合わせいただけます。

### {% data variables.product.prodname_sponsors %}への影響

この間、既存のスポンサーシップは維持され、メンテナは期待どおりに支払いをうけられます。 資金講座から発生したスポンサーシップの支払いは、生じた他の料金と同時に収集されます。

## GitHubプランへの1回払いの実行

{% note %}

**ノート**: 影響を受けたお客様には、支払期日に支払い設定へのリンクを含むメール通知が届きます。 支払いがなされていない場合は、さらに2痛のリマインダーメールが7日後及び14日後に送信されます。 14日後からは、支払いが行われるまで有料の機能やサービスはロックされます。

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.billing_plans %}
3. ページの上部で**Pay now（すぐに支払う）**をクリックしてください。 ![すぐに1回払いのボタン](/assets/images/help/billing/pay-now-button.png)
4. 請求と支払い情報を確認してください。 編集する必要がある場合は、関連するセクションの隣にある**Edit（編集）**をクリックしてください。 必要ない場合は、**Submit payment（支払いの送信）**をクリックしてください。 ![1回払いの概要](/assets/images/help/billing/payment-summary.png)
5. あるいは、**Edit（編集）**をクリックした場合には、必要な変更を行ってから**Submit payment（支払いの送信）**をクリックしてください。 ![1回払いの編集の概要](/assets/images/help/billing/payment-summary-edit.png)
6. 現在の支払いサイクルに対する支払いが正常に完了すると、"Billing & plans（支払いとプラン）"ページの**Pay now（すぐに支払う）**ボタンは、次の支払期日になるまで無効化されます。 ![無効化されたすぐに1回払いのボタン](/assets/images/help/billing/pay-now-button-disabled.png)
  
