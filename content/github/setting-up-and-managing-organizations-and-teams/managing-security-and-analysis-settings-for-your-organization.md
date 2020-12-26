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
{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Displaying the security and analysis settings

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}

The page that's displayed allows you to enable or disable security and analysis features for the repositories in your organization.

### Enabling or disabling a feature for all existing repositories

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. Under "Configure security and analysis features", to the right of the feature, click **Disable all** or **Enable all**.
  !["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all.png)
1. Optionally, enable the feature by default for new repositories in your organization.
  !["Enable by default" option for new repositories](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png)
1. Click **Disable FEATURE** or **Enable FEATURE** to disable or enable the feature for all the repositories in your organization.
  ![Button to disable or enable feature](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png)

### Enabling or disabling a feature for all new repositories when they are added

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. Under "Configure security and analysis features", to the right of the feature, enable or disable the feature by default for new repositories in your organization.
  ![Checkbox for enabling or disabling a feature for new repositories](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png)

### Allowing Dependabot to access private repositories

{% data variables.product.prodname_dependabot %} can check for outdated dependency references in a project and automatically generate a pull request to update them. To do this, {% data variables.product.prodname_dependabot %} must have access to the targeted dependency files. By default, {% data variables.product.prodname_dependabot %} can't update dependencies that are located in private repositories. However, if a dependency is in a private {% data variables.product.prodname_dotcom %} repository within the same organization as the project that uses that dependency, you can allow {% data variables.product.prodname_dependabot %} to update the version successfully by giving it access to the host repository. For more information, including details of limitations to private dependency support, see "[About Dependabot version updates](/github/administering-a-repository/about-dependabot-version-updates)."

1. Go to the security and analysis settings for your organization. For more information, see "[Displaying the security and analysis settings](#displaying-the-security-and-analysis-settings)."
1. In the "{% data variables.product.prodname_dependabot %} repository access" section, click the settings button **{% octicon "gear" aria-label="The Gear icon" %}**. 
   ![Repository access setting button](/assets/images/help/organizations/repository-access-cog-button.png)
   A list is displayed showing all of the private repositories in your organization.
   ![The Repositories list](/assets/images/help/organizations/repositories-dialog.png)
1. Select the repositories that {% data variables.product.prodname_dependabot %} can access.
1. Click **Select repositories**.


### Further reading

{% if currentVersion == "free-pro-team@latest" %}- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"
- "[About secret scanning](/github/administering-a-repository/about-secret-scanning)"
- "[Keeping your dependencies updated automatically](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"
{% endif %}
- "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Managing vulnerabilities in your project's dependencies](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
