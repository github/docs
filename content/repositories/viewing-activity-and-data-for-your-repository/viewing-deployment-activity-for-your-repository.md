---
title: Viewing deployment activity for your repository
intro: You can view information about deployments for your entire repository or a specific pull request.
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/viewing-deployment-activity-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View deployment activity
---
{% note %}

**Note:** The deployments dashboard is currently in beta and subject to change.

{% endnote %}

People with read access to a repository can see an overview of all current deployments and a log of past deployment activity, if the repository's deployment workflow is integrated with {% data variables.product.product_name %} through the Deployments API or an app from [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment). For more information, see "[AUTOTITLE](/rest/repos#deployments)."

You can also see deployment information on the "Conversation" tab of a pull request.

## Viewing the deployments dashboard

{% data reusables.repositories.navigate-to-repo %}
1. In the right sidebar, click **Environments**.

   ![Screenshot of the main page of a repository. In the right sidebar, "Environments" is outlined in dark orange.](/assets/images/help/actions/environments.png)

## Further reading

* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
