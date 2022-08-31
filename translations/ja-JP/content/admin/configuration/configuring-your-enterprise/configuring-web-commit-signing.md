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

If you enable web commit signing, {% data variables.product.product_name %} will automatically use GPG to sign commits users make on the web interface of {% data variables.product.product_location %}. Commits signed by {% data variables.product.product_name %} will have a verified status. 詳細については、「[コミット署名の検証について](/authentication/managing-commit-signature-verification/about-commit-signature-verification)」を参照してください。

You can enable web commit signing, rotate the private key used for web commit signing, and disable web commit signing.

## Enabling web commit signing

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - If you have a no-reply email address defined in the {% data variables.enterprise.management_console %}, use that email address. If not, use any email address, such as `web-flow@my-company.com`. The email address does not need to be valid.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %}
{% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %}
{% data reusables.enterprise_site_admin_settings.update-commit-signing-service %}
1. Enable web commit signing.

    ```bash{:copy}
    ghe-config app.github.web-commit-signing-enabled true
    ```
1. Apply the configuration, then wait for the configuration run to complete.

   ```bash{:copy}
   ghe-config-apply
   ```
1. Create a new user on {% data variables.product.product_location %} via built-in authentication or external authentication. 詳しい情報については「[Enterpriseでの認証について](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)」を参照してください。
   - The user's username must be `web-flow`.
   - The user's email address must be the same address you used for the PGP key.
{% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %}
{% data reusables.enterprise_site_admin_settings.email-settings %}
1. Under "No-reply email address", type the same email address you used for the PGP key.

   {% note %}

   **Note:** The "No-reply email address" field will only be displayed if you've enabled email for {% data variables.product.product_location %}. 詳しい情報については、「[通知のためのメールを設定する](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications#configuring-smtp-for-your-enterprise)」を参照してください。

   {% endnote %}
{% data reusables.enterprise_management_console.save-settings %}

## Rotating the private key used for web commit signing

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
1. 設定を適用します。

   ```bash{:copy}
   ghe-config-apply
   ```
