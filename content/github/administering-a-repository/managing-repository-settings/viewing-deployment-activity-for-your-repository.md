---
title: Viewing deployment activity for your repository
intro: You can view information about deployments for your entire repository or a specific pull request.
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% note %}

**Note:** The deployments dashboard is currently in beta and subject to change.

{% endnote %}

People with read access to a repository can see an overview of all current deployments and a log of past deployment activity, if the repository's deployment workflow is integrated with {% data variables.product.product_name %} through the Deployments API or an app from [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment). For more information, see "[Deployments](/rest/reference/repos#deployments)."

You can also see deployment information on the "Conversation" tab of a pull request.

### Viewing the deployments dashboard

{% data reusables.repositories.navigate-to-repo %}
2. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}To the right of the list of files, click **Environments**.
![Environments on the right of the repository page](/assets/images/help/repository/environments.png){% else %}Above the list of files, click **Environments**.
![Environments on top of repository page](/assets/images/help/repository/environments-top.png){% endif %}


### Further reading
 - "[About pull requests](/articles/about-pull-requests)"
