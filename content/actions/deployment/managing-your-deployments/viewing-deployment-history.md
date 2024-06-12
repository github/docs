---
title: Viewing deployment history
shortTitle: Deployment history
intro: View current and previous deployments for your repository.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
redirect_from:
  - /developers/overview/viewing-deployment-history
  - /actions/deployment/viewing-deployment-history
---
{% ifversion actions-deployment-history-beta %}

## About deployment history

{% data reusables.actions.about-deployment-with-github-actions %}

On the deployments page of your repository, you can view the following aspects of your deployments.

- Currently active deployments across various environments
- Deployments filtered by environment
- Your repository's full deployment history
- Associated commits that triggered the deployment
- Connected {% data variables.product.prodname_actions %} workflow logs
- The deployment URL (if one exists)
- The source pull request and branch related to each deployment
- Deployment statuses. For more information about deployment statuses, see "[AUTOTITLE](/rest/deployments/deployments#about-deployments)."

By default, the deployments page shows currently active deployments from select environments and a timeline of the latest deployments for all environments.

## Viewing your repository's deployment history

1. In the right-hand sidebar of the home page of your repository, click **Deployments**.
1. Once you are on the "Deployments" page, you can view the following information about your deployment history.
   - **To view recent deployments for a specific environment**, in the "Environments" section of the left sidebar, click an environment.{% ifversion deployment-dashboard-filter %}
   - **To pin an environment to the top of the deployment history list**, repository administrators can click {% octicon "pin" aria-label="Pin environment" %} to the right of the environment. You can pin up to ten environments.{% endif %}
   - **To view the commit that triggered a deployment**, in the deployment history list, click the commit message for the deployment you want to view.
      >[!NOTE]Deployments from commits that originate from a fork outside of the repository will not show links to the source pull request and branch related to each deployment. For more information about forks, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)."
   - **To view the URL for a deployment**, to the right of the commit message in the deployment history list, click {% octicon "link-external" aria-label="Navigate to deployment URL" %}.
   - **To navigate to the workflow run logs associated with a deployment**, to the right of the commit message in the deployment history list, click {% octicon "kebab-horizontal" aria-label="View logs" %}, then click **View logs**.{% ifversion deployment-dashboard-filter %}
1. Optionally, to filter the deployment history list, create a filter.
   1. Click on the **{% octicon "filter" aria-hidden="true"  %} Filter** button.
   1. Click **{% octicon "plus" aria-hidden="true"  %} Add a filter**.
   1. Choose a qualifier you would like to filter the deployment history by.
   1. Depending on the qualifier you chose, fill out information in the "Operator" and "Value" columns.
   1. Optionally, click **{% octicon "plus" aria-hidden="true"  %} Add a filter** to add another filter.
   1. Click **Apply**.{% endif %}

{% else %}

{% data reusables.actions.about-deployment-with-github-actions %}

To view current and past deployments, click **Environments** in the sidebar of the home page of your repository.

The deployments page displays the last active deployment of each environment for your repository. If the deployment includes an environment URL, a **View deployment** button that links to the URL is shown next to the deployment.

The activity log shows the deployment history for your environments. By default, only the most recent deployment for an environment has an `Active` status; all previously active deployments have an `Inactive` status. For more information on automatic inactivation of deployments, see "[AUTOTITLE](/rest/deployments#inactive-deployments)."

You can also use the REST API to get information about deployments. For more information, see "[AUTOTITLE](/rest/repos#deployments)."

{% endif %}
