---
title: クライアントの代理での Organization の作成と支払い
intro: 'クライアントの代理で {% data variables.product.prodname_dotcom %}Organization を作成し支払いをすることができます。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /articles/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/creating-and-paying-for-an-organization-on-behalf-of-a-client
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - User account
  - Organizations
  - Upgrades
shortTitle: On behalf of a client
ms.openlocfilehash: 6c0cdaa09d3e2bf476b6314c38d369ec89840aad
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145087780'
---
## 要件

始める前に、以下をご確認ください:
- 作成する Organization のコードオーナーになるクライアントの {% data variables.product.prodname_dotcom %} ユーザ名
- クライアントが Organization で使用したい名前
- 領収書を送信する宛先のメールアドレス
- クライアントが購入する[製品](/articles/github-s-products)
- クライアントがユーザーに対して組織のために購入することを希望する[有料シート](/articles/about-per-user-pricing/)の数

## ステップ 1: 個人 {% data variables.product.prodname_dotcom %}アカウントを作成する

自分の個人アカウントを使用して Organization をセットアップします。 また、将来クライアントのプランを更新または変更するにも、このアカウントにサインインする必要があります。

{% data variables.product.prodname_dotcom %} 上に個人アカウントが既にある場合は、[手順 2](#step-2-create-the-organization) に進んでください。

1. [[GitHub に参加]](https://github.com/join) ページに移動します。
2. [個人アカウントの作成] で、ユーザー名、メール アドレス、パスワードを入力し、 **[アカウントの作成]** をクリックします。
![個人用アカウントの入力フォームを作成する](/assets/images/help/billing/billing_create_your_personal_account_form.png)
3. 個人アカウント用に {% data variables.product.prodname_free_user %}を選択します。
4. **[サインアップの完了]** をクリックします。

## ステップ 2: Organization を作成する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
3. [プランの選択] で、 **[{% data variables.product.prodname_free_team %} を選択]** をクリックします。 次のステップで Organization をアップグレードします。
{% data reusables.organizations.organization-name %}
5. [Contact email] で、クライアントの連絡先メールアドレスを入力します。
  ![連絡先の電子メール フィールド](/assets/images/help/organizations/contact-email-field.png) {% data reusables.dotcom_billing.owned_by_business %}
8. **[次へ]** をクリックします。

## ステップ 3: Organization を年次支払いプランへ アップグレードする


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.upgrade_org %} {% data reusables.dotcom_billing.choose_org_plan %} (次のステップで組織にさらにシートを追加できます。)
6. [アップグレードの概要] で、 **[年払い]** を選択して組織の支払いを毎年行います。
![年次請求のラジオ ボタン](/assets/images/help/billing/choose-annual-billing-org-resellers.png) {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.finish_upgrade %}

## ステップ 4: Organization の有料シート数をアップグレードする

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

## ステップ 5: クライアントを Organization に招待する

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %}
5. クライアントの {% data variables.product.prodname_dotcom %} ユーザー名を入力して、**Enter** を押します。
![クライアントのユーザー名を入力するフィールド](/assets/images/help/organizations/org-invite-modal.png)
6. クライアントの *所有者* ロールを選択し、 **[招待の送信]** をクリックします。
![[所有者] ラジオ ボタンと [招待の送信] ボタン](/assets/images/help/organizations/add-owner-send-invite-reseller.png)
7. クライアントに Organization への招待メールが届きます。 クライアントが招待を受諾しないと、次のステップに進めません。

## ステップ 6: Organization 所有権をクライアントに移譲する

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. クライアントが組織のメンバーの中に表示され、*所有者* ロールが割り当てられていることを確認します。
5. ユーザー名の右側にある {% octicon "gear" aria-label="The Settings gear" %} ドロップダウン メニューで、 **[管理]** をクリックします。
  ![[管理] アクセス リンク](/assets/images/help/organizations/member-manage-access.png)
6. 左側の **[組織から削除]** をクリックします。
  ![[組織から削除] ボタン](/assets/images/help/organizations/remove-from-org-button.png)
7. 選択内容を確認し、 **[メンバーの削除]** をクリックします。
  ![[メンバーの削除] 確認ボタン](/assets/images/help/organizations/confirm-remove-from-org.png)

## 次の手順

1. クライアントに連絡し、[支払いマネージャーとして自分を組織に追加](/articles/adding-a-billing-manager-to-your-organization)するように依頼します。 将来クライアントのプランを更新または変更できるようにするためには、Organization の支払いマネージャーになる必要があります。
2. 今後課金されないように自分の Organization のクレジットカードを Organization から削除したい場合は、{% data variables.contact.contact_support %} にご連絡ください。
3. クライアントの有料サブスクリプションを更新する場合は、「[クライアントの有料組織の更新](/articles/renewing-your-client-s-paid-organization)」を参照してください。

## 参考資料

- 「[購入代行業者のための組織について](/articles/about-organizations-for-procurement-companies)」
- 「[クライアントの有料組織のアップグレードまたはダウングレード](/articles/upgrading-or-downgrading-your-client-s-paid-organization)」
- 「[クライアントの有料組織の更新](/articles/renewing-your-client-s-paid-organization)」
