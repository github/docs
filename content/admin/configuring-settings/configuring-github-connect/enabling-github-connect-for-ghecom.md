---
title: Enabling GitHub Connect for GHE.com
shortTitle: Enable for GHE.com
intro: 'Enable {% data variables.product.prodname_github_connect %} to share data between {% data variables.enterprise.data_residency_site %} and {% data variables.location.product_location %}.'
versions:
  feature: ghecom-github-connect
redirect_from:
   - /early-access/admin/preview-of-data-residency-for-github-enterprise/configuring-github-connect-during-the-preview-of-data-residency
   - /early-access/admin/private-ga-of-data-residency-for-github-enterprise-cloud/configuring-github-connect-during-the-private-ga-of-data-residency
   - /early-access/admin/data-residency-for-github-enterprise-cloud/configuring-github-connect-for-data-residency
---

You can access additional features and workflows on {% data variables.location.product_location %} by enabling {% data variables.product.prodname_github_connect %}. See [AUTOTITLE](/admin/configuration/configuring-github-connect/about-github-connect).

{% data reusables.github-connect.what-is-available-ghecom %}

## What happens when {% data variables.product.prodname_github_connect %} is enabled?

{% data reusables.github-connect.what-happens-when-enabled %}

## Prerequisites

* **Administrative access:** You need administrative access to both an enterprise account on {% data variables.enterprise.data_residency_site %} and a {% data variables.product.prodname_ghe_server %} instance.
* **Version requirement:** Your {% data variables.product.prodname_ghe_server %} instance must run {% data variables.product.prodname_ghe_server %} 3.12 or later.
* **Proxy configuration:** If using a proxy server, allow connectivity to the following {% data variables.enterprise.data_residency_site %} hostnames (replace SUBDOMAIN with your enterprise's subdomain).

   * `{% data variables.enterprise.data_residency_domain %}`
   * `{% data variables.enterprise.data_residency_api %}`
   * `uploads.{% data variables.enterprise.data_residency_domain %}`

   See [AUTOTITLE](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server).

## Step 1: Enable connection to {% data variables.enterprise.data_residency_site %}

By default, {% data variables.product.prodname_github_connect %} connects {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_dotcom_the_website %}. You must enable your instance to connect to your enterprise's subdomain of {% data variables.enterprise.data_residency_site %}.

To enable the connection, someone with administrative SSH access to {% data variables.location.product_location_enterprise %} must complete the following tasks.

{% data reusables.enterprise_installation.ssh-into-instance %}
1. To enable your instance to connect to {% data variables.enterprise.data_residency_site %} for {% data variables.product.prodname_github_connect %}, run the following command. Replace SUBDOMAIN with the subdomain for your enterprise on {% data variables.enterprise.data_residency_site %}, for example `octocorp`.

   ```shell copy
   ghe-config app.github.github-connect-ghe-com-enabled true
   ghe-config app.github.github-connect-ghe-com-subdomain "SUBDOMAIN"
   ```

1. To apply the configuration, run the following command.

   >[!NOTE] During a configuration run, services on {% data variables.location.product_location_enterprise %} may restart, which can cause brief downtime for users.

    ```shell copy
    ghe-config-apply
    ```

After the run completes, you can configure {% data variables.product.prodname_github_connect %}.

## Step 2: Enable {% data variables.product.prodname_github_connect %}

To enable {% data variables.product.prodname_github_connect %}, you must be an enterprise owner on both {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.

People with a user account in both environments can connect the accounts from {% data variables.location.product_location_enterprise %}.

1. Sign in to {% data variables.location.product_location %} and {% data variables.enterprise.data_residency_site %}.
{% data reusables.github-connect.enable-github-connect %}
1. Choose which individual features of {% data variables.product.prodname_github_connect %} you want to enable. See [AUTOTITLE](/admin/configuring-settings/configuring-github-connect/about-github-connect#github-connect-features).

## Reenabling connections to {% data variables.product.prodname_dotcom_the_website %}

If you need to reenable {% data variables.product.prodname_github_connect %} for {% data variables.product.prodname_dotcom_the_website %}, you must reconfigure your settings.

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Run the following command.

   ```shell copy
   ghe-config app.github.github-connect-ghe-com-enabled false
   ```

1. To apply the configuration, run the following command.

   >[!NOTE] During a configuration run, services on {% data variables.location.product_location_enterprise %} may restart, which can cause brief downtime for users.

    ```shell copy
    ghe-config-apply
    ```

1. Enable {% data variables.product.prodname_github_connect %} on {% data variables.product.prodname_dotcom_the_website %}. See [AUTOTITLE](/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom).
