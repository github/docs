---
title: Using labels with AE hosted runners
intro: You can use labels to organize your {% data variables.actions.hosted_runner %}s based on their characteristics.
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

For information on how to use labels to route jobs to specific types of {% data variables.actions.hosted_runner %}s, see "[Using {% data variables.actions.hosted_runner %}s in a workflow](/actions/using-github-hosted-runners/using-ae-hosted-runners-in-a-workflow)."


{% note %}

**Note:** To manage labels for your {% data variables.actions.hosted_runner %}s, you will need to contact {% data variables.product.prodname_dotcom %} support.

{% endnote %}

## Viewing the labels for your {% data variables.actions.hosted_runner %}s
{% data reusables.github-actions.hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.hosted-runner-list %}
{% data reusables.github-actions.hosted-runner-list-group %}
1. Locate the runner you want to check, and click {% octicon "triangle-down" aria-label="The downward triangle" %} to view the label selection menu. Labels already assigned to your runner have a {% octicon "check" aria-label="Check mark" %} next to them.

![Change runner label](/assets/images/help/settings/actions-hosted-runner-list-label.png)
