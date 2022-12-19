---
title: オープンソースコントリビューターに対するスポンサー
intro: あなたが頼りにしているオープンソースプロジェクトを設計、作成、維持する開発者または Organization に対して、毎月定期的に支払いをすることができます。
redirect_from:
  - /articles/sponsoring-a-developer
  - /articles/sponsoring-an-open-source-contributor
  - /github/supporting-the-open-source-community-with-github-sponsors/sponsoring-a-developer
  - /github/supporting-the-open-source-community-with-github-sponsors/sponsoring-an-open-source-contributor
versions:
  fpt: '*'
  ghec: '*'
permissions: Anyone can sponsor accounts on behalf of their own personal account. Organization owners and billing managers can sponsor accounts on behalf of their organization.
type: how_to
topics:
  - Open Source
  - Sponsors payments
shortTitle: Sponsor a contributor
ms.openlocfilehash: d006324c270d29b9ce87189751e75722da13a6ea
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147710292'
---
{% data reusables.sponsors.org-sponsors-release-phase %}

## スポンサーシップについて

{% data reusables.sponsors.sponsorship-details %}

個人アカウントの代わりにアカウントをスポンサーし、個人的に利益を得るプロジェクトに投資することができます。 Organization に代わってアカウントをスポンサーできますが、それには多くの理由があります。
- Organization の作業が依存する特定のライブラリを維持する
- Organization として依存しているエコシステム (ブロックチェーンなど) に投資する
- オープンソースを大切にする Organization としてブランド認知度を確立する
- Organization が提供する製品を補完するライブラリを構築しているオープンソース開発者に感謝する

{% data variables.product.product_name %} でアカウントをスポンサーするときは、クレジットカードを使用できます。 Organization が請求書による支払いを希望する場合は、「[請求書による {% data variables.product.prodname_sponsors %} への支払い](/sponsors/sponsoring-open-source-contributors/paying-for-github-sponsors-via-invoice)」を参照してください。

{% data reusables.sponsors.no-fees %} 詳細については、「[{% data variables.product.prodname_sponsors %} の支払いついて](/articles/about-billing-for-github-sponsors)」を参照してください。

クレジットカードを使用してアカウントをスポンサーすると、その変更は直ちに有効になります。 {% data reusables.sponsors.prorated-sponsorship %}

特定の限定的な税情報は、スポンサー アカウントと共有される場合があります。 詳細については、「[税情報](#tax-information)」を参照してください。

{% data reusables.sponsors.manage-updates-for-orgs %}

スポンサーシップを一般公開するかどうかを選択できます。 1 回限りのスポンサーシップは 1 か月間表示されます。 

スポンサードアカウントがあなたのスポンサー層を廃止した場合、あなたが別の層を選択するか、プランをキャンセルするまで、あなたはその層にそのままとどまります。 詳細については、「[スポンサーシップをアップグレードする](/articles/upgrading-a-sponsorship)」と「[スポンサーシップをダウングレードする](/articles/downgrading-a-sponsorship)」を参照してください。

スポンサーしたいアカウントが {% data variables.product.prodname_sponsors %} にプロフィールを持っていない場合は、アカウント参加を推奨できます。 詳しい情報については、「[個人アカウントに {% data variables.product.prodname_sponsors %} を設定する](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)」および「[組織の {% data variables.product.prodname_sponsors %} を設定する](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)」を参照してください。

{% data reusables.sponsors.sponsorships-not-tax-deductible %}

{% note %}

**注:** {% data variables.product.prodname_dotcom %} は、開発者の発言について責任を負いません。また、{% data variables.product.prodname_dotcom %} はスポンサー付きオープン ソース プロジェクトについて何の保証もしません。 請求の責任は、資金を受ける開発者のみにあります。 スポンサーシップを提供する前に、信頼できる人かどうか確認してください。 詳細については、「[{% data variables.product.prodname_sponsors %} に関する追加条項](/free-pro-team@latest/github/site-policy/github-sponsors-additional-terms)」を参照してください。

{% endnote %}

## 税情報

スポンサーになったユーザーは、スポンサー プログラムの開始以降、アカウントへのスポンサーシップ支払いに関する以下の限定的な情報が、自分の支援している各アカウントの所有者に開示される可能性があることを認めたことになります。

- トランザクション日時
- 支払額
- 支払いが行われた国、州、および都道府県
- 支払いを行ったのが企業か個人か

これらの情報は、スポンサーシップ支払いによって生じる税の支払いと報告を行うために必要です。

## アカウントをスポンサーする

アカウントをスポンサーするには、認証済みメールアドレスが必要です。 詳細については、「[メール アドレスの確認](/github/getting-started-with-github/verifying-your-email-address)」を参照してください。

1. {% data variables.product.product_name %} で、スポンサーするユーザーまたは Organization のプロフィールに移動します。
1. アカウントのスポンサーシップダッシュボードに移動します。
   - 開発者のスポンサーになるには、開発者の名前の下にある **[スポンサー]** をクリックします。
     ![[スポンサー] ボタン](/assets/images/help/profile/sponsor-button.png)
   - Organization のスポンサーになる場合は、Organization 名の右の **[スポンサー]** をクリックします。
     ![[スポンサー] ボタン](/assets/images/help/sponsors/sponsor-org-button.png)
1. 必要に応じて、Organization の代理としてアカウントのスポンサーになるには、ページの右側の **[スポンサー代理]** ドロップダウン メニューを使用して、Organization をクリックします。
  ![スポンサー代理となるアカウントを選択するドロップダウン メニュー](/assets/images/help/sponsors/sponsor-as-drop-down-menu.png) {% data reusables.sponsors.select-a-tier %} {% data reusables.sponsors.pay-prorated-amount %} {% data reusables.sponsors.select-sponsorship-billing %} ![[支払方法の編集] ボタン](/assets/images/help/sponsors/edit-sponsorship-payment-button.png) {% data reusables.sponsors.who-can-see-your-sponsorship %} ![スポンサーシップを表示できるユーザーを選択するラジオ ボタン](/assets/images/help/sponsors/who-can-see-sponsorship.png) {% data reusables.sponsors.choose-updates %} {% data reusables.sponsors.sponsor-account %}
