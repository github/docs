---
title: Configuring web commit signing
shortTitle: Configure web commit signing
intro: 'You can enable auto-signing of commits made in the web interface of {% data variables.product.product_name %}.'
versions:
  ghes: '>=3.5'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Identity
  - Security
permissions: 'Site administrators can configure web commit signing for {% data variables.product.product_location %}.'
---

## About web commit signing

If you enable web commit signing, {% data variables.product.product_name %} will automatically use GPG to sign commits users make on the web interface of {% data variables.product.product_location %}. Commits signed by {% data variables.product.product_name %} will have a verified status. 更多信息请参阅“[关于提交签名验证](/authentication/managing-commit-signature-verification/about-commit-signature-verification)”。

You can enable web commit signing, rotate the private key used for web commit signing, and disable web commit signing.

## Enabling web commit signing

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - If you have a no-reply email address defined in the {% data variables.enterprise.management_console %}, use that email address. If not, use any email address, such as `web-flow@my-company.com`. 电子邮件地址不需要有效。
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %}
{% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %}
{% data reusables.enterprise_site_admin_settings.update-commit-signing-service %}
1. 启用 Web 提交签名。

    ```bash{:copy}
    ghe-config app.github.web-commit-signing-enabled true
    ```
1. 应用配置，然后等待配置运行完成。

   ```bash{:copy}
   ghe-config-apply
   ```
1. 通过内置身份验证或外部身份验证在 {% data variables.product.product_location %} 上创建新用户。 更多信息请参阅“[关于企业的身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”。
   - 用户的用户名必须是 `web-flow`。
   - 用户的电子邮件地址必须与您用于 PGP 密钥的地址相同。
{% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %}
{% data reusables.enterprise_site_admin_settings.email-settings %}
1. 在“No-reply email address（无需回复电子邮件地址）”下，键入用于 PGP 密钥的同一电子邮件地址。

   {% note %}

   **注意：** 仅当您为 {% data variables.product.product_location %} 启用了电子邮件时，才会显示“No-reply email address（无需回复电子邮件地址）”字段。 更多信息请参阅“[配置电子邮件通知](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications#configuring-smtp-for-your-enterprise)”。

   {% endnote %}
{% data reusables.enterprise_management_console.save-settings %}

## 轮换用于 Web 提交签名的私钥

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - Use the no-reply email address defined in the {% data variables.enterprise.management_console %}, which should be the same as the email address of the `web-flow` user.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %}
{% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %}
{% data reusables.enterprise_site_admin_settings.update-commit-signing-service %}
{% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %}

## Disabling web commit signing

You can disable web commit signing for {% data variables.product.product_location %}.

1. In the administrative shell, run the following command.

   ```bash{:copy}
   ghe-config app.github.web-commit-signing-enabled false
   ```
1. 应用配置。

   ```bash{:copy}
   ghe-config-apply
   ```
