---
title: GitHub Supportについて
intro: GitHub の使用中に発生した問題のトラブルシューティングについては、GitHub サポートにお問い合わせください。
shortTitle: About GitHub Support
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/overview/about-github-enterprise-support
  - /articles/about-github-support
  - /github/working-with-github-support/about-github-support
  - /articles/github-enterprise-cloud-support
  - /github/working-with-github-support/github-enterprise-cloud-support
  - /articles/business-plan-support
  - /articles/github-business-cloud-support
  - /admin/enterprise-support/about-support-for-advanced-security
  - /enterprise-server/admin/enterprise-support/about-support-for-advanced-security
topics:
  - Support
ms.openlocfilehash: aa2b407b96cc7ee2ecc20fee9782e3084b3627db
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192914'
---
## {% data variables.contact.github_support %}について

{% data variables.product.prodname_dotcom %} ユーザーが利用できるサポート オプションは、ユーザーの個人アカウント、ユーザーが所属する組織または企業、およびユーザーが管理する {% data variables.product.prodname_ghe_server %} インスタンスで使用される製品によって異なります。 各製品には既定のサポート レベルが含まれ、{% data variables.product.prodname_enterprise %} を使用するアカウントでは {% data variables.contact.premium_support %} を購入できます。

{% ifversion fpt %} 所属する組織で {% data variables.product.prodname_enterprise %} が使用されている場合は、{% data variables.product.prodname_docs %} の右上隅にあるドロップダウン メニューを使用して、製品に適したバージョンの記事を参照できます。 詳細については、「[GitHub Docs のバージョンについて](/get-started/learning-about-github/about-versions-of-github-docs)」を参照してください。
{% endif %}

{% ifversion not ghae %}

|  | {% data variables.product.prodname_gcf %} | Standard サポート | Premium Support |
|----|---------------|-------|---------------|
| {% data variables.product.prodname_free_user %} | {% octicon "check" aria-label="Check" %}  |  |  |  
| {% data variables.product.prodname_pro %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |  
| {% data variables.product.prodname_team %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |
| {% data variables.product.prodname_ghe_cloud %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | 購入可能 |
| {% data variables.product.prodname_ghe_server %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | 購入可能 |

{% endif %}

{% ifversion ghes %}

以下の質問について、{% data variables.contact.contact_enterprise_portal %} を通じて {% data variables.contact.enterprise_support %} に連絡できます。
 - {% data variables.product.product_name %} のインストールと使用
 - 調査対象となっているエラーの原因の特定および検証
 - {% data variables.product.prodname_advanced_security %} のインストールと使用

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.support.premium-support-features %}

詳細については、「[GitHub プレミアム サポートについて](/support/about-github-support/about-github-premium-support)」を参照してください。

{% endif %}

{% ifversion fpt or ghec or ghae %}

{% data variables.contact.github_support %} に問い合わせる前に、{%- ifversion fpt or ghec %} [{% data variables.product.prodname_dotcom %} Status](https://githubstatus.com/) {%- elsif ghae %} [{% data variables.product.product_name %} Status](https://ghestatus.com/) {%- endif %}で {% data variables.product.product_name %} のサービスに影響を与えるインシデントが現在あるかどうかを確認してください。 詳細については、「[GitHub の状態について](#about-github-status)」を参照してください。

{% endif %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %}

アカウント、セキュリティ、不正使用の問題の報告、または有料アカウントのサポートを受けるには、{% data variables.contact.contact_support_portal %}にアクセスしてください。 詳細については、「[サポート チケットの作成](/support/contacting-github-support/creating-a-support-ticket)」を参照してください。
{% endif %}

{% ifversion fpt %} 有料の製品を使用している場合、または有料製品を使用する組織のメンバーである場合は、{% data variables.contact.github_support %} に英語で問い合わせてください。
{% else %}{% data variables.product.product_name %} を使用している場合は、英語と日本語のサポートにアクセスできます。
{% endif %}

{% ifversion fpt or ghec or ghes %} {% data reusables.support.support-ticket-translation-option %} {% endif %}

{% ifversion ghes or ghec %}

{% data variables.contact.github_support %}に問い合わせるには、{% data variables.contact.contact_support_portal %}にアクセスしてください。 詳細については、「[サポート チケットの作成](/support/contacting-github-support/creating-a-support-ticket)」を参照してください。

{% elsif ghae %}

{% data variables.contact.ae_azure_portal %}を通じて {% data variables.contact.enterprise_support %}に問い合わせをし、問題を書面で報告できます。 詳細については、「[サポート チケットの作成](/support/contacting-github-support/creating-a-support-ticket)」を参照してください。

{% endif %}

{% ifversion not ghae %} GitHub サポートからの電子メール通信は、常に `github.com` または `githubsupport.com` のアドレスから送信されます。
{% endif %}

## サポートのスコープ

{% data reusables.support.scope-of-support %}

{% ifversion ghec or fpt or ghae %}
## GitHub の状態について

{% data variables.product.prodname_dotcom %} の [Status ページ]({% ifversion fpt or ghec %}https://githubstatus.com{% elsif ghae %}https://ghestatus.com{% endif %})では、現在 {% data variables.product.product_name %} サービスに影響を与えているインシデントを確認し、過去のインシデントに関する情報を参照できます。

また、{% data variables.product.product_name %} に影響を与えるインシデントが発生するたびに、メール、テキスト メッセージ、Webhook を通じてアラートを受け取れるよう、それらをサブスクライブすることもできます。

{% endif %}

{% ifversion ghec or ghes %}
## サポート資格について

エンタープライズ所有者と課金マネージャーには、エンタープライズ アカウントに関連付けられたサポート チケットを作成し、表示し、それらにコメントできるサポート資格が自動的に付与されます。

エンタープライズ所有者は、エンタープライズ アカウントによって所有されている組織のメンバーにサポート資格を追加して、それらのメンバーがサポート チケットの作成、表示、コメントを行えるようにすることもできます。 詳細については、「[Managing support entitlements for your enterprise (エンタープライズのサポート エンタイトルメントの管理)](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)」を参照してください。

{% endif %}

{% ifversion fpt or ghec %}
## プライベートリポジトリへの一時アクセスを {% data variables.contact.github_support %} に許可する

サポートリクエストへの対応のために{% data variables.contact.github_support %}がプライベートリポジトリにアクセスしなければならない場合、リポジトリのオーナーは一時的なアクセスの許可もしくは拒否のリンクを含むメールを受け取ります。 オーナーは 20 日以内にリクエストを受け入れるか拒否してください。それを過ぎるとリクエストは有効期限切れになります。 オーナーがリクエストを受け入れると、{% data variables.contact.github_support %} はリポジトリに 5 日間アクセスできるようになります。 この期間中、必要な特権を持つ {% data variables.contact.github_support %} スタッフは、一度に最大 2 時間リポジトリのロックを解除でき、作業が早く完了した場合はリポジトリを再ロックします。 すべての {% data variables.contact.github_support %} スタッフ アクセスによって監査ログ イベントが生成され、リポジトリの可視性は常に影響を受けません。

{% data variables.contact.github_support %} は、明示的な合意をいただかない限り、プライベートリポジトリには決してアクセスしません。 詳しくは、[サービス使用条件](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access)に関するページをご覧ください。
{% endif %}

{% ifversion ghec or ghes %}
## GitHub 販売チームと GitHub トレーニング

価格、ライセンス、更新、見積もり、支払い、およびその他の関連するご質問については、{% data variables.contact.contact_enterprise_sales %} にお問い合わせいただくか、[+1 (877) 448-4820](tel:+1-877-448-4820) にお電話してください。

カスタマイズされたトレーニングを含むトレーニングの選択肢に関する詳しい情報については[{% data variables.product.company_short %}のトレーニング サイト](https://services.github.com/)を参照してください。

{% note %}

**注:** トレーニングは {% data variables.product.premium_plus_support_plan %} に含まれています。 詳細については、「[GitHub プレミアム サポートについて](/support/about-github-support/about-github-premium-support)」を参照してください。

{% endnote %}

{% endif %}

{% ifversion ghes or ghec %}
## 営業時間

### 英語でのサポート

緊急ではない標準的な問題の場合、英語でのサポートは週末とアメリカの休日をのぞく週 5 日 24 時間提供しています。 返信までの標準的な時間は 24 時間です。

{% ifversion ghes %} 緊急の問題については、米国の祝日を含む、24 時間年中無休で対応しています。
{% endif %}

### 日本語でのサポート

緊急以外の標準的な問題については、日本語でのサポートを月曜日から金曜日、日本時間午前 9:00 から午後 5:00 まで提供します。これは日本の国民の祝日を除きます。 

{% ifversion ghes %} 緊急の問題については、アメリカの祝日を含め 24 時間 365 日、英語で対応します。
{% endif %}

{% data variables.contact.enterprise_support %} におけるアメリカおよび日本の祝日の完全なリストは「[休日のスケジュール](#holiday-schedules)」を参照してください。

## 休日のスケジュール

緊急の問題については、アメリカ合衆国及び日本の祝日を含め24時間365日、英語で対応します。

### アメリカ合衆国の祝日

{% data variables.contact.enterprise_support %}は以下をアメリカ合衆国の祝日としますが、緊急の問い合わせに対してはグローバルのサポート チームが英語で対応します。

{% data reusables.enterprise_enterprise_support.support-holiday-availability %}

### 日本の祝日

{% data variables.contact.enterprise_support %} は、12 月 28 日から 1 月 3 日までと、「[国民の祝日について-内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html)」に記載されている祝日は、日本語サポートを提供していません。

{% data reusables.enterprise_enterprise_support.installing-releases %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

## サポートチケットの解決とクローズ

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

{% endif %}

## 参考資料

{%- ifversion ghes %}
- [{% data variables.product.prodname_ghe_server %} ライセンス アグリーメント](https://enterprise.github.com/license)のサポートに関するセクション 10 {%- endif %}
- 「[サポート チケットの作成](/support/contacting-github-support/creating-a-support-ticket)」 {%- ifversion not ghae %}
- 「[サポート チケットの表示と更新](/support/contacting-github-support/viewing-and-updating-support-tickets)」 {%- endif %}
