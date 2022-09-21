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
shortTitle: Billing email
ms.openlocfilehash: 35b340a697bafd0c7e3047983496b71048cbe0ac
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145087846'
---
## 個人アカウントの支払い請求先メールアドレスを設定する

お客様の個人アカウントのプライマリメールアドレスに、{% data variables.product.product_name %} が領収書およびその他の請求関連の連絡を送ります。

プライマリメールアドレスは、アカウントのメール設定に入力した最初のメールアドレスです。
また、プライマリメールアドレスを支払い請求先メールアドレスとして使えます。

請求のメールを変更する場合は、「[プライマリ メール アドレスの変更](/articles/changing-your-primary-email-address)」を参照してください。

## Organization の支払い請求先メールアドレスを設定する

お客様の Organization の請求先メールアドレスに、{% data variables.product.product_name %} が領収書およびその他の請求関連の連絡を送ります。 このメールアドレスは、Organization アカウント専用である必要はありません。

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
1. [課金管理] の請求のメール アドレスの右側にある **[編集]** をクリックします。
  ![現在の請求のメール](/assets/images/help/billing/billing-change-email.png)
2. 有効なメール アドレスを入力し、 **[更新]** をクリックします。
  ![請求のメール アドレスの変更モーダル](/assets/images/help/billing/billing-change-email-modal.png)

## Organization の支払い請求先メールアドレスに受信者を追加して管理する

支払い請求レポートを受信する必要のあるユーザが複数いる場合は、支払い請求先メールの受信者としてそのユーザのメールアドレスを追加できます。 この機能を利用できるのは、企業が管理していない Organization だけです。

{% data reusables.dotcom_billing.org-billing-perms %}

### 支払い通知の受信者を追加する

{% data reusables.organizations.billing-settings %}
1. [課金管理] の [電子メールの受信者] の右側にある **[追加]** をクリックします。
  ![受信者の追加](/assets/images/help/billing/billing-add-email-recipient.png)
1. 受信者のメール アドレスを入力し、 **[追加]** をクリックします。
  ![[受信者の追加] モーダル](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### 支払い通知の第 1 受信者を変更する

第1受信者として必ずアドレスを 1 つは指定する必要があります。 第 1 受信者に指定したアドレスは、別の第 1 受信者を選定するまで、削除できません。

{% data reusables.organizations.billing-settings %}
1. [Billing management] で、第 1 受信者に設定したいメールアドレスを探します。
1. そのメール アドレスの右側にある [編集] ドロップダウン メニューで、 **[プライマリとしてマーク]** をクリックします。
  ![プライマリ受信者としてマーク](/assets/images/help/billing/billing-change-primary-email-recipient.png)

### 支払い通知の受信者を削除する

{% data reusables.organizations.billing-settings %}
1. [Email recipients] で、削除したいメールアドレスを探します。
1. リスト内のユーザーのエントリについては、 **[編集]** をクリックします。
  ![受信者を編集する](/assets/images/help/billing/billing-edit-email-recipient.png)
1. そのメール アドレスの右側にある [編集] ドロップダウン メニューで、 **[削除]** をクリックします。
  ![受信者を削除する](/assets/images/help/billing/billing-remove-email-recipient.png)
1. 確認プロンプトを確認し、 **[削除]** をクリックします。

{% ifversion ghec %}
## Enterpriseの支払い請求先メールアドレスを設定する

Enterpriseの支払い請求先メールアドレスには、{% data variables.product.product_name %}から領収書及びその他の支払い関係の連絡が送信されます。 このメールアドレスは、Enterpriseアカウント専用である必要はありません。

オーナーもしくは支払いマネージャーのロールを持つEnterpriseメンバーだけが、Enterpriseの支払い設定へのアクセスや変更を行えます。 詳細については、「[エンタープライズのユーザーを管理する](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. **[請求のメール]** をクリックします。 
2. [電子メール受信者] で、請求のメール アドレスの右側にある **[編集]** をクリックします。
  ![編集ボタンが強調表示された現在の請求メールのスクリーンショット](/assets/images/help/billing/billing-change-email.png)
2. 有効なメール アドレスを入力し、 **[更新]** をクリックします。
  ![サンプルのメール アドレスが入力された請求のメール アドレスの編集モーダル ウィンドウのスクリーンショット](/assets/images/help/billing/billing-change-email-modal.png)

## Enterpriseの支払い請求先メールアドレスに受信者を追加して管理する

支払い請求レポートを受信する必要のあるユーザが複数いる場合は、支払い請求先メールの受信者としてそのユーザのメールアドレスを追加できます。 

オーナーもしくは支払いマネージャーのロールを持つEnterpriseメンバーだけが、Enterpriseの支払い設定へのアクセスや変更を行えます。 詳細については、「[エンタープライズのユーザーを管理する](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)」を参照してください。

### 支払い通知の受信者を追加する

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. **[請求のメール]** をクリックします。 
2. [電子メール受信者] で、請求のメール アドレスの右側にある **[追加]** をクリックします。
   ![追加ボタンが強調表示された現在の請求メールのスクリーンショット](/assets/images/help/billing/billing-add-email-recipient.png)
3. 受信者のメール アドレスを入力し、 **[追加]** をクリックします。
   ![サンプルのメール アドレスが入力されていない請求メール アドレスの追加モーダル ウィンドウのスクリーンショット](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### 支払い通知の受信者を削除する

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. **[請求のメール]** をクリックします。 
2. [Email recipients] で、削除したいメールアドレスを探します。
3. リスト内のユーザーのエントリについては、 **[編集]** をクリックします。
   ![編集ボタンが強調表示された受信者のメールのスクリーンショット](/assets/images/help/billing/billing-edit-email-recipient.png)
4. そのメール アドレスの右側にある [編集] ドロップダウン メニューで、 **[削除]** をクリックします。
   ![削除ボタンが強調表示された受信者のメールのスクリーンショット](/assets/images/help/billing/billing-remove-email-recipient.png)
5. 確認プロンプトを確認し、 **[削除]** をクリックします。
{% endif %}
