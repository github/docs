---
title: Managing security and analysis settings for your organization
intro: 'You can control features that secure and analyze the code in your organization''s projects on {% data variables.product.prodname_dotcom %}.'
permissions: Organization owners can manage security and analysis settings for repositories in the organization.
versions:
  free-pro-team: '*'
---

### About management of security and analysis settings

{% data variables.product.prodname_dotcom %} can help secure the repositories in your organization. You can manage the security and analysis features for all existing or new repositories that members create in your organization.

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.security.security-and-analysis-features-enable-read-only %}
{% endif %}

### Enabling or disabling features for existing repositories

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. Under "Configure security and analysis features", to the right of the feature, click **Disable all** or **Enable all**.
  !["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all.png)
6. Optionally, enable the feature by default for new repositories in your organization.
  !["Enable by default" option for new repositories](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
7. Click **Disable FEATURE** or **Enable FEATURE** to disable or enable the feature for all the repositories in your organization.
  ![Button to disable or enable feature](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)

### Enabling or disabling features for new repositories

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. Under "Configure security and analysis features", to the right of the feature, enable or disable the feature by default for new repositories in your organization.
  ![Checkbox for enabling or disabling a feature for new repositories](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)

### Further reading

{% if currentVersion == "free-pro-team@latest" %}- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"
- "[About secret scanning](/github/administering-a-repository/about-secret-scanning)"
- "[Keeping your dependencies updated automatically](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"
{% endif %}
- "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Managing vulnerabilities in your project's dependencies](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
