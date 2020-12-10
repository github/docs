---
title: Managing your GitHub Enterprise license
intro: 'You can view, manage, and update your {% data variables.product.prodname_enterprise %} license.'
redirect_from:
  - /enterprise/admin/installation/managing-your-github-enterprise-license
  - /enterprise/admin/categories/licenses/
  - /enterprise/admin/articles/license-files/
  - /enterprise/admin/installation/about-license-files/
  - /enterprise/admin/articles/downloading-your-license/
  - /enterprise/admin/installation/downloading-your-license/
  - /enterprise/admin/articles/upgrading-your-license/
  - /enterprise/admin/installation/updating-your-license/
  - /enterprise/admin/installation/managing-your-github-enterprise-server-license
  - /enterprise/admin/overview/managing-your-github-enterprise-license
versions:
  enterprise-server: '*'
---

### About {% data variables.product.prodname_enterprise %} licenses

When you purchase or renew {% data variables.product.prodname_enterprise %}, you receive a license file to validate your application. A license file has an expiration date and controls the number of user licenses you can add to {% data variables.product.prodname_enterprise %}. After you download and install {% data variables.product.prodname_enterprise %}, uploading the license file unlocks the application for you to use.

You can allocate the user licenses included in your {% data variables.product.prodname_enterprise %} license to users in {% data variables.product.product_location_enterprise %} and a {% data variables.product.prodname_ghe_cloud %} enterprise account. When you add a user to either environment, they will consume a license. If a user has accounts in both environments, to consume only one license, their primary {% data variables.product.prodname_enterprise %} email address must be the same as their verified {% data variables.product.prodname_ghe_cloud %} email address. You can sync license count and usage between the environments.

If your {% data variables.product.prodname_ghe_server %} license expires, you won't be able to access {% data variables.product.product_location_enterprise %} via a web browser or Git. If needed, you will be able to use command-line utilities to back up all your data. For more information, see "[Configuring backups on your appliance](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance)." If you have any questions about renewing your license, contact {% data variables.contact.contact_enterprise_sales %}.

### Uploading a new license to {% data variables.product.prodname_ghe_server %}  

After you purchase a new license or upgrade an existing license from {% data variables.contact.contact_enterprise_sales %}, you must download your new license file, then upload the file to {% data variables.product.prodname_ghe_server %} to unlock your new user licenses.

If you'd like to renew or add user licenses to {% data variables.product.prodname_enterprise %}, contact {% data variables.contact.contact_enterprise_sales %}. Your new license file will be available for download immediately after you complete your order.

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. In the left sidebar, click **Enterprise licensing**.
  !["Enterprise licensing" tab in the enterprise account settings sidebar](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. Under "Enterprise Server Instances", click {% octicon "download" aria-label="The download icon" %} to download your license file.
  ![Download GitHub Enterprise Server license](/assets/images/help/business-accounts/download-ghes-license.png)
5. Log into your {% data variables.product.prodname_ghe_server %} instance as a site administrator.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
12. Under "Quick links", click **Update license**.
  ![Update license link](/assets/images/enterprise/business-accounts/update-license-link.png)
13. To select your license, click **License file**, or drag your license file onto **License file**.
  ![Upload license file](/assets/images/enterprise/management-console/upload-license.png)
14. Click **Upload**.
  ![Begin upgrade](/assets/images/enterprise/management-console/begin-upload.png)

### Viewing license usage

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. In the left sidebar, click **Enterprise licensing**.
  !["Enterprise licensing" tab in the enterprise account settings sidebar](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. Review your current {% data variables.product.prodname_enterprise %} license, as well as consumed and available user licenses.

### Automatically syncing user license usage with {% data variables.product.prodname_ghe_cloud %}

You can use {% data variables.product.prodname_github_connect %} to automatically sync user license count and usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}. For more information, see "[Enabling automatic user license sync between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{currentVersion}}/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud)."

### Manually syncing user license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}

You can download a JSON file from {% data variables.product.prodname_ghe_server %} and upload the file to {% data variables.product.prodname_ghe_cloud %} to manually sync user license usage between the two deployments.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
5. Under "Quick links", to download a file containing your current license usage on {% data variables.product.prodname_ghe_server %}, click **Export license usage**.
  ![Export license usage link](/assets/images/enterprise/business-accounts/export-license-usage-link.png)
{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
8. In the left sidebar, click **Enterprise licensing**.
  !["Enterprise licensing" tab in the enterprise account settings sidebar](/assets/images/help/enterprises/enterprise-licensing-tab.png)
{% data reusables.enterprise-accounts.license-tab %}
10. Under "Enterprise Server Instances", click **Add server usage**.
  ![Upload GitHub Enterprise Servers usage link](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. Upload the JSON file you downloaded from {% data variables.product.prodname_ghe_server %}.
  ![Drag and drop or select a file to upload](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
