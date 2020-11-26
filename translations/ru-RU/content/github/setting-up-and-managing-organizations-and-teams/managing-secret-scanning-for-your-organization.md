---
title: Managing secret scanning for your organization
intro: 'You can control which repositories in your organization {% data variables.product.product_name %} will scan for secrets.'
permissions: 'Organization owners can manage {% data variables.product.prodname_secret_scanning %} for repositories in the organization.'
versions:
  free-pro-team: '*'
---
 
{% data reusables.secret-scanning.beta %}

### About management of {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_secret_scanning_caps %} can help you mitigate the impact of leaked secrets in your organization's repositories. For more information, see "[About {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)."

You can manage how {% data variables.product.prodname_dotcom %} scans for secrets in existing repositories in your organization. You can also enable or disable {% data variables.product.prodname_secret_scanning %} by default for any new repositories that members create in your organization.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% note %}

**Note**: {% data variables.product.prodname_secret_scanning_caps %} is enabled by default for public repositories in your organization and can't be disabled. For more information, see "[About secret scanning for public repositories](/github/administering-a-repository/about-secret-scanning#about-secret-scanning-for-public-repositories)."

{% endnote %}

### Enabling or disabling {% data variables.product.prodname_secret_scanning %} for existing private repositories

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. To the right of "Secret scanning", click **Disable all** or **Enable all**. !["Enable all" or "Disable all" button for secret scanning](/assets/images/help/organizations/security-and-analysis-disable-or-enable-secret-scanning.png)
6. Optionally, enable {% data variables.product.prodname_secret_scanning %} by default for new private repositories in your organization. !["Enable by default" option for new repositories](/assets/images/help/organizations/security-and-analysis-secret-scanning-enable-by-default.png)
7. Click **Disable secret scanning** or **Enable secret scanning** to disable or enable the feature for all the repositories in your organization. ![Button to disable or enable {% data variables.product.prodname_secret_scanning %} ](/assets/images/help/organizations/security-and-analysis-enable-secret-scanning.png)

### Enabling or disabling {% data variables.product.prodname_secret_scanning %} for new private repositories

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. To the right of "Secret scanning", enable or disable the feature by default for new private repositories in your organization. ![Checkbox for enabling or disabling a feature for new repositoris](/assets/images/help/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox.png)
