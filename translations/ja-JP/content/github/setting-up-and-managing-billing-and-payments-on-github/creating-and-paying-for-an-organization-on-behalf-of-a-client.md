---
title: クライアントの代理での Organization の作成と支払い
intro: 'クライアントの代理で {{ site.data.variables.product.prodname_dotcom }}Organization を作成し支払いをすることができます。'
redirect_from:
  - /articles/creating-and-paying-for-an-organization-on-behalf-of-a-client
versions:
  free-pro-team: '*'
---

### 要件

始める前に、以下をご確認ください:
- 作成する Organization のコードオーナーになるクライアントの {{ site.data.variables.product.prodname_dotcom }} ユーザ名
- クライアントが Organization で使用したい名前
- 領収書を送信する宛先のメールアドレス
- クライアントが購入したい[製品](/articles/github-s-products)
- クライアントから Organization 用に購入を依頼された[有料シート](/articles/about-per-user-pricing/)数

### ステップ 1: 個人 {{ site.data.variables.product.prodname_dotcom }}アカウントを作成する

自分の個人アカウントを使用して Organization をセットアップします。 また、将来クライアントのプランを更新または変更するにも、このアカウントにサインインする必要があります。

すでに個人 {{ site.data.variables.product.prodname_dotcom }}ユーザアカウントをお持ちの場合は、[ステップ 2](#step-2-create-the-organization) にお進みください。

1. [Join GitHub](https://github.com/join) ページに移動します。
2. [Create your personal account] の下で、ユーザ名、メールアドレス、パスワードを入力し、[**Create an account**] をクリックします。 ![個人アカウントエントリフォームの作成](/assets/images/help/billing/billing_create_your_personal_account_form.png)
3. 個人アカウント用に {{ site.data.variables.product.prodname_free_user }}を選択します。
4. [**Finish sign up**] をクリックします。

### ステップ 2: Organization を作成する

{{ site.data.reusables.user_settings.access_settings }}
{{ site.data.reusables.user_settings.organizations }}
{{ site.data.reusables.organizations.new-organization }}
3. [Choose a plan] の下で、[**Choose {{ site.data.variables.product.prodname_free_team }}**] をクリックします。 次のステップで Organization をアップグレードします。
{{ site.data.reusables.organizations.organization-name }}
5. [Contact email] で、クライアントの連絡先メールアドレスを入力します。 ![[Contact email] フィールド](/assets/images/help/organizations/contact-email-field.png)
{{ site.data.reusables.dotcom_billing.owned_by_business}}
8. Click **Next**.

### ステップ 3: Organization を年次支払いプランへ アップグレードする

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.dotcom_billing.upgrade_org }}
{{ site.data.reusables.dotcom_billing.choose_org_plan }} (次のステップで、Organizationにシートを追加できます。)
6. Organization の支払いを年次で行うには、[Upgrade summary] の下で [**Pay yearly**] を選択します。 ![年次の支払いのラジオボタン](/assets/images/help/billing/choose-annual-billing-org-resellers.png)
{{ site.data.reusables.dotcom_billing.show-plan-details }}
{{ site.data.reusables.dotcom_billing.add-payment-method }}
1. [Pay with] の下に、クレジットカード情報を入力します。 ![クレジットカード情報入力用フォーム](/assets/images/help/billing/settings_billing_upgrade_with_credit_card.png)
1. [**Update credit card**] をクリックします。
{{ site.data.reusables.dotcom_billing.finish_upgrade }}

### ステップ 4: Organization の有料シート数をアップグレードする

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.billing }}
{{ site.data.reusables.dotcom_billing.add-seats }}
{{ site.data.reusables.dotcom_billing.number-of-seats }}
{{ site.data.reusables.dotcom_billing.confirm-add-seats }}

### ステップ 5: クライアントを Organization に招待する

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.people }}
{{ site.data.reusables.organizations.invite_member_from_people_tab }}
5. クライアントの {{ site.data.variables.product.prodname_dotcom }}ユーザ名を入力して、[**Enter**] を押します。 ![クライアントのユーザ名を入力するフィールド](/assets/images/help/organizations/org-invite-modal.png)
6. クライアントに *Owner* ロールを選択し、[**Send invitation**] をクリックします。 ![[Owner] ラジオボタンと [Send invitation] ボタン](/assets/images/help/organizations/add-owner-send-invite-reseller.png)
7. クライアントに Organization への招待メールが届きます。 クライアントが招待を受諾しないと、次のステップに進めません。

### ステップ 6: Organization 所有権をクライアントに移譲する

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.people }}
4. クライアントが Organization のメンバーの中に表示され、*Owner* ロールが割り当てられていることを確認します。
5. ユーザ名の右側にある {% octicon "gear" aria-label="The Settings gear" %} ドロップダウンメニューで、[**Manage**] をクリックします。 ![[Manage] アクセスリンク](/assets/images/help/organizations/member-manage-access.png)
6. 左側で、[**Remove from organization**] をクリックします。 ![Organizationボタンからの削除](/assets/images/help/organizations/remove-from-org-button.png)
7. 選択結果を確認し、[**Remove members**] をクリックします。 ![[Remove members] 確定ボタン](/assets/images/help/organizations/confirm-remove-from-org.png)

### 次のステップ

1. クライアントに連絡し、[Organization の支払いマネージャーとしてあなたを追加](/articles/adding-a-billing-manager-to-your-organization)するよう依頼します。 将来クライアントのプランを更新または変更できるようにするためには、Organization の支払いマネージャーになる必要があります。
2. 今後課金されないように自分の Organization のクレジットカードを Organization から削除したい場合は、{{ site.data.variables.contact.contact_support }} にご連絡ください。
3. クライアントのプランを更新する時期になった場合は、「[クライアントの有料 Organization を更新する](/articles/renewing-your-client-s-paid-organization)」を参照してください。

### 参考リンク

- 「[購入代行業者のための Organization について](/articles/about-organizations-for-procurement-companies)」
- [クライアントの有料Organizationのアップグレードあるいはダウングレード](/articles/upgrading-or-downgrading-your-client-s-paid-organization)
- [クライアントの有料Organizationの更新](/articles/renewing-your-client-s-paid-organization)
