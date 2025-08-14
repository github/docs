---
title: Larger runners
intro: 'Learn about the types and uses of {% data variables.product.prodname_dotcom %}-hosted {% data variables.actions.hosted_runners %}.'
permissions: '{% data reusables.actions.larger-runner-permissions %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/using-github-hosted-runners/about-larger-runners/about-larger-runners
  - /actions/using-github-hosted-runners/using-larger-runners/about-larger-runners
  - /actions/concepts/runners/about-larger-runners
---

{% ifversion ghes %}
{% data reusables.actions.enterprise-github-hosted-runners %}

To learn about larger runners, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/actions/concepts/runners/about-larger-runners).
{% else %}

## About {% data variables.actions.hosted_runners %}

{% data reusables.actions.about-larger-runners %}

{% data variables.product.prodname_dotcom %} offers {% data variables.actions.hosted_runners %} with macOS, Ubuntu, or Windows operating systems, and different features and sizes are available depending on which operating system you use.

## About Ubuntu and Windows {% data variables.actions.hosted_runners %}

{% data variables.actions.hosted_runner_caps %}s with Ubuntu or Windows operating systems are configured in your organization or enterprise. When you add a {% data variables.actions.hosted_runner %}, you are defining a type of machine from a selection of available hardware specifications and operating system images.

With Ubuntu and Windows {% data variables.actions.hosted_runners %}, you can:
* Assign runners static IP addresses from a specific range, allowing you to use this range to configure a firewall allowlist
* Control access to your resources by assigning runners to runner groups
* Use autoscaling to simplify runner management and control your costs
* Use your runners with Azure private networking

## About macOS {% data variables.actions.hosted_runners %}

{% data variables.actions.hosted_runner_caps %}s with a macOS operating system are not manually added to your organization or enterprise, but are instead used by updating the `runs-on` key of a workflow file to one of the {% data variables.product.company_short %}-defined macOS {% data variables.actions.hosted_runner %} labels.

Since macOS {% data variables.actions.hosted_runners %} are not preconfigured, they have limitations that Ubuntu and Windows {% data variables.actions.hosted_runners %} do not. For more information, see [AUTOTITLE](/actions/reference/larger-runners-reference#limitations-for-macos-larger-runners).

## Billing

> [!NOTE]
> {% data variables.actions.hosted_runner_caps %}s are not eligible for the use of included minutes on private repositories. For both private and public repositories, when {% data variables.actions.hosted_runners %} are in use, they will always be billed at the per-minute rate.

Compared to standard {% data variables.product.github %}-hosted runners, {% data variables.actions.hosted_runners %} are billed differently. {% data reusables.actions.about-larger-runners-billing %} For more information, see [AUTOTITLE](/billing/reference/actions-minute-multipliers).

## Next steps

To start using Windows or Ubuntu {% data variables.actions.hosted_runners %}, see [AUTOTITLE](/actions/how-tos/using-github-hosted-runners/using-larger-runners/managing-larger-runners).

To start using macOS {% data variables.actions.hosted_runners %}, see [AUTOTITLE](/actions/how-tos/using-github-hosted-runners/using-larger-runners/running-jobs-on-larger-runners?platform=mac).

To find reference information about using {% data variables.actions.hosted_runners %}, see [AUTOTITLE](/actions/reference/larger-runners-reference).

{% endif %}
