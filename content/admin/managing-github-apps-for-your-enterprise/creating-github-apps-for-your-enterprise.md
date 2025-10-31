---
title: Creating GitHub Apps for your enterprise
intro: Learn how to create a {% data variables.product.prodname_github_app %} for your enterprise.
versions:
  feature: enterprise-apps-public-beta
type: how_to
topics:
  - Enterprise
permissions: Enterprise owners.
shortTitle: Create a GitHub App
redirect_from:
  - /admin/managing-your-enterprise-account/creating-github-apps-for-your-enterprise
contentType: other
---

{% data reusables.enterprise-onboarding.create-enterprise-apps %}

## Step 4: Installing your {% data variables.product.prodname_github_app %} (if required)

If your {% data variables.product.prodname_github_app %} requires installation (not just authorization), organization owners can use the install link to install the app on their organization. See [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party).

{% ifversion enterprise-installed-apps %}

If you need to install the same app in many organizations, you can automate this with an API. See [AUTOTITLE](/admin/managing-github-apps-for-your-enterprise/automate-installations).

If your app uses enterprise permissions, you can install it on your enterprise. To find the installation link, go to the app's settings page in your enterprise account. See [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-on-your-enterprise).

{% endif %}
