---
title: 设置帐单邮箱
intro: '您帐户的帐单邮箱是 {% data variables.product.product_name %} 发送收据及其他计费相关通信的地方。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-your-billing-email
  - /articles/setting-your-personal-account-s-billing-email/
  - /articles/can-i-change-what-email-address-received-my-github-receipt/
  - '/articles/how-do-i-change-the-billing-email,setting-your-billing-email/'
  - /articles/setting-your-organization-s-billing-email/
  - /articles/setting-your-billing-email
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-your-billing-email
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/setting-your-billing-email
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Organizations
  - User account
---

### 设置个人帐户的帐单邮箱

您个人帐户的主邮箱是 {% data variables.product.product_name %} 发送收据及其他计费相关通信的地方。

您的主电子邮件地址是帐户电子邮件设置中列出的第一个邮箱。 我们还使用您的主电子邮件地址作为帐单邮箱地址。

如果您想要更改帐单邮箱，请参阅“[更改您的主电子邮件地址](/articles/changing-your-primary-email-address)”。

### 设置组织的帐单邮箱

您组织的帐单邮箱是 {% data variables.product.product_name %} 发送收据及其他计费相关通信的地方。 该电子邮件地址不需要是组织帐户唯一的。

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
1. 在“Billing management（帐单管理）”下帐单邮箱地址的右侧，单击 **Edit（编辑）**。 ![当前帐单邮箱](/assets/images/help/billing/billing-change-email.png)
2. 输入一个有效的电子邮件地址，然后点击 **Update（更新）**。 ![更改帐单邮箱地址模式](/assets/images/help/billing/billing-change-email-modal.png)

### 管理组织帐单邮箱的其他收件人

如果您有用户希望接收帐单报告，您可以将他们的电子邮件地址添加为帐单邮箱收件人。 此功能仅适用于非企业管理的组织。

{% data reusables.dotcom_billing.org-billing-perms %}

#### 添加帐单通知的收件人

{% data reusables.organizations.billing-settings %}
1. 在“Billing management（帐单管理）”下，在“Email recipients（电子邮件收件人）”的右侧，单击 **Add（添加）**。 ![添加收件人](/assets/images/help/billing/billing-add-email-recipient.png)
1. 输入收件人的电子邮件地址，然后单击 **Add（添加）**。 ![添加收件人模式](/assets/images/help/billing/billing-add-email-recipient-modal.png)

#### 更改帐单通知的主要收件人

必须始终将一个地址指定为主要收件人。 在选择新的主要收件人之前，无法删除带有此指定地址。

{% data reusables.organizations.billing-settings %}
1. 在“Billing management（帐单管理）”下，找到要设置为主要收件人的电子邮件地址。
1. 在电子邮件地址的右侧，使用“Edit（编辑）”下拉菜单，然后单击 **Mark as primary（标记为主要收件人）**。 ![标记主要收件人](/assets/images/help/billing/billing-change-primary-email-recipient.png)

#### 从帐单通知中删除收件人

{% data reusables.organizations.billing-settings %}
1. 在“Email recipients（电子邮件收件人）”下，找到要删除的电子邮件地址。
1. 针对列表中的用户条目，单击 **Edit（编辑）**。 ![编辑收件人](/assets/images/help/billing/billing-edit-email-recipient.png)
1. 在电子邮件地址的右侧，使用“Edit（编辑）”下拉菜单，然后单击 **Remove（删除）**。 ![删除收件人](/assets/images/help/billing/billing-remove-email-recipient.png)
1. 查看确认提示，然后单击 **Remove（删除）**。
