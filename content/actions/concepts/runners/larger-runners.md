---
title: Larger runners
intro: Organize and govern your workflows with {% data variables.product.prodname_dotcom %}-hosted larger runners using runner groups, concurrency policies, and granular access controls.
permissions: '{% data reusables.actions.larger-runner-permissions %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/using-github-hosted-runners/about-larger-runners/about-larger-runners
  - /actions/using-github-hosted-runners/using-larger-runners/about-larger-runners
  - /actions/concepts/runners/about-larger-runners
category:
  - Set up runners
contentType: concepts
---

{% ifversion ghes %}
{% data reusables.actions.enterprise-github-hosted-runners %}

To learn about larger runners, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/actions/concepts/runners/about-larger-runners).
{% else %}

## About {% data variables.actions.hosted_runners %}

{% data reusables.actions.about-larger-runners %}

## What you can do with larger runners

All {% data variables.actions.hosted_runners %} support the following capabilities:

* **Runner groups**: Organize runners and control which repositories can use them
* **Autoscaling**: Scale runners up or down based on workload demand
* **Concurrency controls**: Limit how many jobs can run at the same time

The following capabilities are available only on Linux and Windows runners:

* **Static IP addresses**: Assign static IP addresses from a specific range to runners, allowing you to configure firewall allowlists.
* **Custom images**: Use custom runner images to pre-install dependencies and reduce setup time.
* **Azure private networking**: Connect your runners to Azure private networks.


{% ifversion default-setup-larger-runners %}

## About {% data variables.actions.hosted_runners %} for {% data variables.product.prodname_code_scanning %} default setup

Consider configuring {% data variables.actions.hosted_runners %} for {% data variables.product.prodname_code_scanning %} default setup if:

* Your scans with standard {% data variables.product.prodname_dotcom %}-hosted runners are taking too long.
* Your scans with standard {% data variables.product.prodname_dotcom %}-hosted runners are returning memory or disk errors.
* You want to customize aspects of your {% data variables.product.prodname_code_scanning %} runner, such as the runner size, runner image, and job concurrency, without using self-hosted runners.

For more information on configuring {% data variables.actions.hosted_runners %} for {% data variables.product.prodname_code_scanning %} default setup, see [AUTOTITLE](/code-security/how-tos/scan-code-for-vulnerabilities/manage-your-configuration/configuring-larger-runners-for-default-setup).

{% endif %}

## Billing

> [!NOTE]
> {% data variables.actions.hosted_runner_caps %}s are not eligible for the use of included minutes on private repositories. For both private and public repositories, when {% data variables.actions.hosted_runners %} are in use, they will always be billed at the per-minute rate.

Compared to standard {% data variables.product.github %}-hosted runners, {% data variables.actions.hosted_runners %} are billed differently. {% data reusables.actions.about-larger-runners-billing %} For more information, see [AUTOTITLE](/billing/reference/actions-minute-multipliers).

## Next steps

To start using larger runners, see [AUTOTITLE](/actions/how-tos/using-github-hosted-runners/using-larger-runners/managing-larger-runners).

To find reference information about using {% data variables.actions.hosted_runners %}, see [AUTOTITLE](/actions/reference/larger-runners-reference).

{% endif %}

