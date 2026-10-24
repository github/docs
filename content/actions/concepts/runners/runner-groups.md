---
title: Runner groups
intro: Use runner groups to control access to runners and organize runners across your organization or enterprise.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /actions/concepts/runners/about-runner-groups
category:
  - Set up runners
contentType: concepts
---

## About runner groups

{% data reusables.actions.about-runner-groups %}

Runner groups help you enforce consistent access policies for runners across your infrastructure.

With runner groups, you can:

* Organize {% data variables.actions.hosted_runners %} and self-hosted runners
* Restrict which organizations and repositories can use specific runners
* Route jobs to a specific runner group in your workflow file
* Set concurrency limits to control costs and capacity

You can also disable standard {% data variables.product.github %}-hosted runners, to require Linux, Windows, and macOS jobs to run through runner groups instead of standard runner labels. For organization-level settings, see [AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization). If you're an enterprise owner, see [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).

## Next steps

{% ifversion fpt or ghec %}To learn how to use runner groups to control access to larger runners, see [AUTOTITLE](/actions/how-tos/manage-runners/larger-runners/control-access).{% endif %}

For information on how to route jobs to runners in a specific group, see [AUTOTITLE](/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job#choosing-runners-in-a-group).
