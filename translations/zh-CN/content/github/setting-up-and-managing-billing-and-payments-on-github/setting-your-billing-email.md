---
title: 设置帐单邮箱
intro: '您帐户的帐单邮箱是 {% data variables.product.product_name %} 发送收据及其他计费相关通信的地方。'
redirect_from:
  - /articles/setting-your-personal-account-s-billing-email/
  - /articles/can-i-change-what-email-address-received-my-github-receipt/
  - '/articles/how-do-i-change-the-billing-email,setting-your-billing-email/'
  - /articles/setting-your-organization-s-billing-email/
  - /articles/setting-your-billing-email
versions:
  free-pro-team: '*'
---

### 设置个人帐户的帐单邮箱

您个人帐户的主邮箱是 {% data variables.product.product_name %} 发送收据及其他计费相关通信的地方。

您的主电子邮件地址是帐户电子邮件设置中列出的第一个邮箱。 我们还使用您的主电子邮件地址作为帐单邮箱地址。

如果您想要更改帐单邮箱，请参阅“[更改您的主电子邮件地址](/articles/changing-your-primary-email-address)”。

### 设置组织的帐单邮箱

您组织的帐单邮箱是 {% data variables.product.product_name %} 发送收据及其他计费相关通信的地方。

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. 在 **Billing email（帐单邮箱）**下，输入有效的电子邮件地址。 该邮箱不需要是组织帐户唯一的邮箱。 ![帐单邮箱文本框](/assets/images/help/settings/org-billing-email.png)
5. 要确认您的更改，请单击 **Update profile（更新个人资料）**。 ![更新个人资料按钮](/assets/images/help/settings/update-profile-button.png)

### Managing additional recipients for your organization's billing email

If you have users that want to receive billing reports, you can add their email addresses as billing email recipients. This feature is only available to organizations that are not managed by an enterprise.

#### Adding a recipient for billing notifications

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
1. Under "Billing management", to the right of "Email recipients", click **Add**. ![Add recipient](/assets/images/help/billing/billing-add-email-recipient.png)
1. Type the email address of the recipient, then click **Add**. ![Add recipient modal](/assets/images/help/billing/billing-add-email-recipient-modal.png)

#### Changing the primary recipient for billing notifications

One address must always be designated as the primary recipient. The address with this designation can't be removed until a new primary recipient is selected.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
1. Under "Billing management", find the email address you want to set as the primary recipient.
1. To the right of the email address, use the "Edit" drop-down menu, and click **Mark as primary**. ![Mark primary recipient](/assets/images/help/billing/billing-change-primary-email-recipient.png)

#### Removing a recipient from billing notifications

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
1. Under "Email recipients", find the email address you want to remove.
1. For the user's entry in the list, click **Edit**. ![Edit recipient](/assets/images/help/billing/billing-edit-email-recipient.png)
1. To the right of the email address, use the "Edit" drop-down menu, and click *Remove**. ![Remove recipient](/assets/images/help/billing/billing-remove-email-recipient.png)
1. Review the confirmation prompt, then click **Remove**.
