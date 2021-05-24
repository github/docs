---
title: 支払い請求先メールアドレスを設定する
intro: 'お客様の支払い請求先メールアドレスに、{% data variables.product.product_name %} が領収書およびその他の請求関連の連絡を送ります。'
redirect_from:
  - /articles/setting-your-personal-account-s-billing-email/
  - /articles/can-i-change-what-email-address-received-my-github-receipt/
  - '/articles/how-do-i-change-the-billing-email,setting-your-billing-email/'
  - /articles/setting-your-organization-s-billing-email/
  - /articles/setting-your-billing-email
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-your-billing-email
versions:
  free-pro-team: '*'
topics:
  - Billing
---
### 個人アカウントの支払い請求先メールアドレスを設定する

お客様の個人アカウントのプライマリメールアドレスに、{% data variables.product.product_name %} が領収書およびその他の請求関連の連絡を送ります。

プライマリメールアドレスは、アカウントのメール設定に入力した最初のメールアドレスです。 また、プライマリメールアドレスを支払い請求先メールアドレスとして使えます。

支払い請求先メールアドレスを変更したい場合は「[プライマリメールアドレスを変更する](/articles/changing-your-primary-email-address)」を参照してください。

### Organization の支払い請求先メールアドレスを設定する

お客様の Organization の請求先メールアドレスに、{% data variables.product.product_name %} が領収書およびその他の請求関連の連絡を送ります。

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. [**Billing email**] (支払い請求先メールアドレス) の下に、有効なメールアドレスを入力します。 このメールアドレスは、Organization アカウント専用である必要はありません。 ![支払い請求先メールアドレステキストボックス](/assets/images/help/settings/org-billing-email.png)
5. 変更を確定するには [**Update profile**] をクリックします。 ![[Update profile] ボタン](/assets/images/help/settings/update-profile-button.png)

### Organization の支払い請求先メールアドレスに受信者を追加して管理する

支払い請求レポートを受信する必要のあるユーザが複数いる場合は、支払い請求先メールの受信者としてそのユーザのメールアドレスを追加できます。 この機能を利用できるのは、企業が管理していない Organization だけです。

#### 支払い通知の受信者を追加する

{% data reusables.organizations.navigate-to-org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
1. [Billing management] で、[Email recipients] の右の [**Add**] をクリックします。 ![受信者を追加](/assets/images/help/billing/billing-add-email-recipient.png)
1. 受信者のメールアドレスを入力し、[**Add**] をクリックします。 ![受信者追加のモーダル](/assets/images/help/billing/billing-add-email-recipient-modal.png)

#### 支払い通知の第 1 受信者を変更する

第1受信者として必ずアドレスを 1 つは指定する必要があります。 第 1 受信者に指定したアドレスは、別の第 1 受信者を選定するまで、削除できません。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
1. [Billing management] で、第 1 受信者に設定したいメールアドレスを探します。
1. 見つかったメールアドレスの右にある [Edit] ドロップダウンメニューで、[**Mark as primary**] をクリックします。 ![第 1 受信者としてマーク](/assets/images/help/billing/billing-change-primary-email-recipient.png)

#### 支払い通知の受信者を削除する

{% data reusables.organizations.navigate-to-org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
1. [Email recipients] で、削除したいメールアドレスを探します。
1. そのユーザのエントリで [**Edit**] をクリックします。 ![受信者を編集する](/assets/images/help/billing/billing-edit-email-recipient.png)
1. To the right of the email address, use the "Edit" drop-down menu, and click **Remove**. ![受信者を削除する](/assets/images/help/billing/billing-remove-email-recipient.png)
1. 確認ダイアログを確かめてから、[**Remove**] をクリックします。
