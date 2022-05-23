---
title: 配置 Web 提交签名
shortTitle: 配置 Web 提交签名
intro: '您可以启用自动签名在 {% data variables.product.product_name %} Web 界面中进行的提交。'
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

## 关于 Web 提交签名

如果启用 Web 提交签名，{% data variables.product.product_name %} 将自动使用 GPG 对用户在 {% data variables.product.product_location %} Web 界面上的提交进行签名。 由 {% data variables.product.product_name %} 签名的提交将具有已验证状态。 更多信息请参阅“[关于提交签名验证](/authentication/managing-commit-signature-verification/about-commit-signature-verification)”。

您可以启用 Web 提交签名、轮换用于 Web 提交签名的私钥以及禁用 Web 提交签名。

## 启用 Web 提交签名

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - 如果您在 {% data variables.enterprise.management_console %} 中定义了无回复电子邮件地址，请使用该电子邮件地址。 如果没有，可使用任何电子邮件地址，例如 `web-flow@my-company.com`。 电子邮件地址不需要有效。
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
   - 使用 {% data variables.enterprise.management_console %} 中定义的无回复电子邮件地址，该地址应与 `web-flow` 用户的电子邮件地址相同。
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %}
{% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %}
{% data reusables.enterprise_site_admin_settings.update-commit-signing-service %}
{% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %}

## 禁用 Web 提交签名

您可以对 {% data variables.product.product_location %} 禁用 web 提交签名。

1. 在管理 shell 中，运行以下命令。

   ```bash{:copy}
   ghe-config app.github.web-commit-signing-enabled false
   ```
1. 应用配置。

   ```bash{:copy}
   ghe-config-apply
   ```
