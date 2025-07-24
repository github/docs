---
title: GitHub Actions vs GitHub Apps
shortTitle: Actions vs Apps
intro: 'Learn about the key differences between {% data variables.product.prodname_actions %} and {% data variables.product.prodname_github_apps %} to help you decide which is right for your use cases.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - CD
redirect_from:
  - /actions/concepts/overview/github-actions-vs-github-apps
  - /actions/get-started/github-actions-vs-github-apps
---

{% data variables.product.prodname_marketplace %} offers both {% data variables.product.prodname_actions %} and {% data variables.product.prodname_github_apps %}, each of which can be valuable automation and workflow tools. Understanding the differences and the benefits of each option will allow you to select the best fit for your job.

{% data variables.product.prodname_github_apps %}:
* Run persistently and can react to events quickly.
* Work great when persistent data is needed.
* Work best with API requests that aren't time consuming.
* Run on a server or compute infrastructure that you provide.

{% data variables.product.prodname_actions %}:
* Provide automation that can perform continuous integration and continuous deployment.
* Can run directly on runner machines or in Docker containers.
* Can include access to a clone of your repository, enabling deployment and publishing tools, code formatters, and command line tools to access your code.
* Don't require you to deploy code or serve an app.
* Have a simple interface to create and use secrets, which enables actions to interact with third-party services without needing to store the credentials of the person using the action.
