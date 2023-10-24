---
title: Viewing deployment history
shortTitle: Deployment history
intro: View current and previous deployments for your repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
redirect_from:
  - /developers/overview/viewing-deployment-history
  - /actions/deployment/viewing-deployment-history
---
{% ifversion actions-deployment-history-beta %}

{% data reusables.actions.deployment-history-beta-note %}

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

### Viewing your repository's deployment history

In the right-hand sidebar of the home page of your repository, click **Deployments**.

### Viewing an environment's deployment history

To view recent deployments for a specific environment, under **Deployments**, click any currently active or recent environment.

### Viewing commits that triggered deployments

To view the associated commit that triggered the deployment, to the right of the deployment status badge, click the commit message.

{% note %}

**Note:** Deployments from commits originating from a fork outside of the repository will not show links to the source pull request and branch related to each deployment. For more information about forks, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)."

{% endnote %}

### Navigating to deployment URLs

To view the URL for the deployment, to the right of the commit message, click {% octicon "link-external" aria-label="Navigate to deployment URL" %}.

{% note %}

**Note:** If a deployment does not have an associated URL, the {% octicon "link-external" aria-label="Navigate to deployment URL" %} button is not displayed.

{% endnote %}

### Accessing workflow run logs

To navigate to the workflow run logs associated with the deployment, to the right of the commit message, click {% octicon "kebab-horizontal" aria-label="View logs" %}. Then click **View logs**.

{% note %}

**Note:** If a deployment does not have an associated workflow run, the {% octicon "kebab-horizontal" aria-label="View logs" %} button is not displayed.

{% endnote %}

{% else %}

{% data reusables.actions.about-deployment-with-github-actions %}

To view current and past deployments, click **Environments** in the sidebar of the home page of your repository.

The deployments page displays the last active deployment of each environment for your repository. If the deployment includes an environment URL, a **View deployment** button that links to the URL is shown next to the deployment.

The activity log shows the deployment history for your environments. By default, only the most recent deployment for an environment has an `Active` status; all previously active deployments have an `Inactive` status. For more information on automatic inactivation of deployments, see "[AUTOTITLE](/rest/deployments#inactive-deployments)."

You can also use the REST API to get information about deployments. For more information, see "[AUTOTITLE](/rest/repos#deployments)."

{% endif %}
