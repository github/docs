---
title: Viewing deployment history
intro: View current and previous deployments for your repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: View deployment history
---


You can deliver deployments through {% ifversion fpt or ghes > 3.0 %}{% data variables.product.prodname_actions %} and environments or with {% endif %}the REST API and third party apps. {% ifversion fpt or ghes > 3.0 %}For more information about {% data variables.product.prodname_actions %}, see "[{% data variables.product.prodname_actions %}](/actions)." {% endif %}For more information about deployments with the REST API, see "[Repositories](/rest/reference/repos#deployments)."

To view current and past deployments, click **Environments** on the home page of your repository.
{% ifversion ghae or ghes < 3.0 %}
![Environments](/assets/images/enterprise/2.22/environments-sidebar.png){% else %}
![Environments](/assets/images/environments-sidebar.png){% endif %}

The deployments page displays the last active deployment of each environment for your repository. If the deployment includes an environment URL, a "View deployment" button that links to the URL is shown next to the deployment.

The activity log shows the deployment history for your environments. By default, only the most recent deployment for an environment has an `Active` status; all previously active deployments have an `Inactive` status. For more information on automatic inactivation of deployments, see "[Inactive deployments](/rest/reference/repos#inactive-deployments)."

You can also use the REST API to get information about deployments. For more information, see "[Repositories](/rest/reference/repos#deployments)."
