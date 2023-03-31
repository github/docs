---
title: Viewing deployment history
shortTitle: View deployment history
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


You can deliver deployments through {% data variables.product.prodname_actions %} and environments or with the REST API and third party apps. For more information about using environments to deploy with {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment)." For more information about deployments with the REST API, see "[AUTOTITLE](/rest/repos#deployments)."

To view current and past deployments, click **Environments** in the sidebar of the home page of your repository.

The deployments page displays the last active deployment of each environment for your repository. If the deployment includes an environment URL, a **View deployment** button that links to the URL is shown next to the deployment.

The activity log shows the deployment history for your environments. By default, only the most recent deployment for an environment has an `Active` status; all previously active deployments have an `Inactive` status. For more information on automatic inactivation of deployments, see "[AUTOTITLE](/rest/deployments#inactive-deployments)."

You can also use the REST API to get information about deployments. For more information, see "[AUTOTITLE](/rest/repos#deployments)."
