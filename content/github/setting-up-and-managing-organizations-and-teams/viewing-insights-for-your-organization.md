---
title: Viewing insights for your organization
intro: 'Organization insights provide data about your organization''s activity, contributions, and dependencies.'
product: '{% data reusables.gated-features.org-insights %}'
redirect_from:
  - /articles/viewing-insights-for-your-organization
versions:
  free-pro-team: '*'
---

All members of an organization can view organization insights. For more information, see "[Permission levels for an organization](/articles/permission-levels-for-an-organization)."

You can use organization activity insights to help you better understand how members of your organization are using {% data variables.product.product_name %} to collaborate and work on code. Dependency insights can help you track, report, and act on your organization's open source usage.

### Viewing organization activity insights

{% note %}

**Note:** Organization activity insights are currently in public beta and subject to change.

{% endnote %}

With organization activity insights you can view weekly, monthly, and yearly data visualizations of your entire organization or specific repositories, including issue and pull request activity, top languages used, and cumulative information about where your organization members spend their time.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. Under your organization name, click {% octicon "graph" aria-label="The bar graph icon" %} **Insights**.
  ![Click the organization insights tab](/assets/images/help/organizations/org-nav-insights-tab.png)
4. Optionally, in the upper-right corner of the page, choose to view data for the last **1 week**, **1 month**, or **1 year**.
  ![Choose time period to view org insights](/assets/images/help/organizations/org-insights-time-period.png)
5. Optionally, in the upper-right corner of the page, choose to view data for up to three repositories and click **Apply**.
  ![Choose repositories to view org insights](/assets/images/help/organizations/org-insights-repos.png)

### Viewing organization dependency insights
With dependency insights you can view vulnerabilities, licenses, and other important information for the open source projects your organization depends on.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
3. Under your organization name, click {% octicon "graph" aria-label="The bar graph icon" %} **Insights**.
  ![Insights tab in the main organization navigation bar](/assets/images/help/organizations/org-nav-insights-tab.png)
4. To view dependencies for this organization, click **Dependencies**.
  ![Dependencies tab under the main organization navigation bar](/assets/images/help/organizations/org-insights-dependencies-tab.png)
5. To view dependency insights for all your {% data variables.product.prodname_ghe_cloud %} organizations, click **My organizations**.
  ![My organizations button under dependencies tab](/assets/images/help/organizations/org-insights-dependencies-my-orgs-button.png)
6. You can click the results in the **Open security advisories** and **Licenses** graphs to filter by a vulnerability status, a license, or a combination of the two.
  ![My organizations vulnerabilities and licenses graphs](/assets/images/help/organizations/org-insights-dependencies-graphs.png)
7. You can click on {% octicon "package" aria-label="The package icon" %} **dependents** next to each vulnerability to see which dependents in your organization are using each library.
  ![My organizations vulnerable dependents](/assets/images/help/organizations/org-insights-dependencies-vulnerable-item.png)

  ### Further reading

   - "[About organizations](/github/setting-up-and-managing-organizations-and-teams/about-organizations)"
   - "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"
   - "[Changing the visibility of your organization's dependency insights](/github/setting-up-and-managing-organizations-and-teams/changing-the-visibility-of-your-organizations-dependency-insights)"
   - "[Enforcing a policy on dependency insights in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-a-policy-on-dependency-insights-in-your-enterprise-account)"
