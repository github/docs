---
title: Configuring web commit signing
shortTitle: Configure web commit signing
intro: 'You can enable auto-signing of commits made in the web interface of {% data variables.product.product_name %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Identity
  - Security
permissions: 'Site administrators can configure web commit signing for {% data variables.location.product_location %}.'
redirect_from:
  - /admin/configuration/configuring-your-enterprise/configuring-web-commit-signing
  - /admin/configuration/configuring-user-applications-for-your-enterprise/configuring-web-commit-signing
---

## About web commit signing

If you enable web commit signing, {% data variables.product.product_name %} will automatically use GPG to sign commits users make on the web interface of {% data variables.location.product_location %}. Commits signed by {% data variables.product.product_name %} will have a verified status. For more information, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)."

You can enable web commit signing, rotate the private key used for web commit signing, and disable web commit signing.

## Enabling web commit signing

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   * Use `web-flow` as the username. If `web-flow` is unavailable or unusable, use any new unique username. Use this username throughout the following steps in this article.
   * If you have a no-reply email address defined in the {% data variables.enterprise.management_console %}, use that email address. If not, use any email address, such as `web-flow@my-company.com`. The email address does not need to be valid.
   {% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %}
{% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %}
{% data reusables.enterprise_site_admin_settings.update-commit-signing-service %}
1. Enable web commit signing.

    ```bash copy
    ghe-config app.github.web-commit-signing-enabled true
    ```

1. Create a new user on {% data variables.location.product_location %} via built-in authentication or external authentication. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)."
   * The user's username must be the same username you used when creating the PGP key in step 1 above, for example, `web-flow`.
   * The user's email address must be the same address you used when creating the PGP key.
{% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %}
{% data reusables.enterprise_site_admin_settings.email-settings %}
1. Under "No-reply email address", type the same email address you used when creating the PGP key.

   {% note %}

   **Note:** The "No-reply email address" field will only be displayed if you've enabled email for {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications#configuring-smtp-for-your-enterprise)."

   {% endnote %}
{% data reusables.enterprise_management_console.save-settings %}

## Rotating the private key used for web commit signing

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   * Use the web commit signing user's username, for example, `web-flow`.
   * Use the no-reply email address defined in the {% data variables.enterprise.management_console %}, which should be the same as the email address of the web commit signing user, for example, `web-flow`.
   {% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %}
{% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %}
{% data reusables.enterprise_site_admin_settings.update-commit-signing-service %}
{% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %}

## Disabling web commit signing

You can disable web commit signing for {% data variables.location.product_location %}.

1. In the administrative shell, run the following command.

   ```bash copy
   ghe-config app.github.web-commit-signing-enabled false
   ```

1. Apply the configuration.

   ```bash copy
   ghe-config-apply
   ```
