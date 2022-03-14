---
title: 支払い請求先メールアドレスを設定する
intro: 'お客様の支払い請求先メールアドレスに、{% data variables.product.product_name %} が領収書およびその他の請求関連の連絡を送ります。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-your-billing-email
  - /articles/setting-your-personal-account-s-billing-email
  - /articles/can-i-change-what-email-address-received-my-github-receipt
  - '/articles/how-do-i-change-the-billing-email,setting-your-billing-email'
  - /articles/setting-your-organization-s-billing-email
  - /articles/setting-your-billing-email
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/setting-your-billing-email
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - User account
shortTitle: 支払いメール
---

## 個人アカウントの支払い請求先メールアドレスを設定する

お客様の個人アカウントのプライマリメールアドレスに、{% data variables.product.product_name %} が領収書およびその他の請求関連の連絡を送ります。

プライマリメールアドレスは、アカウントのメール設定に入力した最初のメールアドレスです。 また、プライマリメールアドレスを支払い請求先メールアドレスとして使えます。

支払い請求先メールアドレスを変更したい場合は「[プライマリメールアドレスを変更する](/articles/changing-your-primary-email-address)」を参照してください。

## Organization の支払い請求先メールアドレスを設定する

お客様の Organization の請求先メールアドレスに、{% data variables.product.product_name %} が領収書およびその他の請求関連の連絡を送ります。 このメールアドレスは、Organization アカウント専用である必要はありません。

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
1. [Billing management] で、支払メールアドレスの右の[**Edit**]をクリックします。 ![現在の支払メール](/assets/images/help/billing/billing-change-email.png)
2. 有効なメールアドレスを入力し、[**Update**]をクリックします。 ![支払メールアドレスの変更モーダル](/assets/images/help/billing/billing-change-email-modal.png)

## Organization の支払い請求先メールアドレスに受信者を追加して管理する

支払い請求レポートを受信する必要のあるユーザが複数いる場合は、支払い請求先メールの受信者としてそのユーザのメールアドレスを追加できます。 この機能を利用できるのは、企業が管理していない Organization だけです。

{% data reusables.dotcom_billing.org-billing-perms %}

### 支払い通知の受信者を追加する

{% data reusables.organizations.billing-settings %}
1. [Billing management] で、[Email recipients] の右の [**Add**] をクリックします。 ![受信者を追加](/assets/images/help/billing/billing-add-email-recipient.png)
1. 受信者のメールアドレスを入力し、[**Add**] をクリックします。 ![受信者追加のモーダル](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### 支払い通知の第 1 受信者を変更する

第1受信者として必ずアドレスを 1 つは指定する必要があります。 第 1 受信者に指定したアドレスは、別の第 1 受信者を選定するまで、削除できません。

{% data reusables.organizations.billing-settings %}
1. [Billing management] で、第 1 受信者に設定したいメールアドレスを探します。
1. 見つかったメールアドレスの右にある [Edit] ドロップダウンメニューで、[**Mark as primary**] をクリックします。 ![第 1 受信者としてマーク](/assets/images/help/billing/billing-change-primary-email-recipient.png)

### 支払い通知の受信者を削除する

{% data reusables.organizations.billing-settings %}
1. [Email recipients] で、削除したいメールアドレスを探します。
1. そのユーザのエントリで [**Edit**] をクリックします。 ![受信者を編集する](/assets/images/help/billing/billing-edit-email-recipient.png)
1. メールアドレスの右の[Edit]ドロップダウンメニューを使い、[**Remove**]をクリックします。 ![受信者を削除する](/assets/images/help/billing/billing-remove-email-recipient.png)
1. 確認ダイアログを確かめてから、[**Remove**] をクリックします。

{% ifversion ghec %}
## Setting your enterprise's billing email

Your enterprise's billing email is where {% data variables.product.product_name %} sends receipts and other billing-related communication. The email address does not need to be unique to the enterprise account.

Only enterprise members with the owner or billing manager role can access or change billing settings for your enterprise. For more information, see "[Managing users in your enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Click **Billing emails**.
2. Under "Email recipients", to the right of the billing email address, click **Edit**. ![Screenshot of the current billing email with the edit button emphasized](/assets/images/help/billing/billing-change-email.png)
2. 有効なメールアドレスを入力し、[**Update**]をクリックします。 ![Screenshot of the edit billing email address modal window with a sample email address entered](/assets/images/help/billing/billing-change-email-modal.png)

## Managing additional recipients for your enterprise's billing email

支払い請求レポートを受信する必要のあるユーザが複数いる場合は、支払い請求先メールの受信者としてそのユーザのメールアドレスを追加できます。

Only enterprise members with the owner or billing manager role can access or change billing settings for your enterprise. For more information, see "[Managing users in your enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)."

### 支払い通知の受信者を追加する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Click **Billing emails**.
2. Under "Email recipients", to the right of the billing email address, click **Add**. ![Screenshot of the current billing email with the add button emphasized](/assets/images/help/billing/billing-add-email-recipient.png)
3. 受信者のメールアドレスを入力し、[**Add**] をクリックします。 ![Screenshot of the add billing email address modal window without a sample email address entered](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### 支払い通知の受信者を削除する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Click **Billing emails**.
2. [Email recipients] で、削除したいメールアドレスを探します。
3. そのユーザのエントリで [**Edit**] をクリックします。 ![Screenshot of the recipient's email with the edit button emphasized](/assets/images/help/billing/billing-edit-email-recipient.png)
4. メールアドレスの右の[Edit]ドロップダウンメニューを使い、[**Remove**]をクリックします。 ![Screenshot of the recipient's email with the remove button emphasized](/assets/images/help/billing/billing-remove-email-recipient.png)
5. 確認ダイアログを確かめてから、[**Remove**] をクリックします。
{% endif %}
