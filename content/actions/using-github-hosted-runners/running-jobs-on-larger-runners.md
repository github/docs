---
title: Running jobs on larger runners
shortTitle: Run jobs on larger runners
intro: 'You can speed up your workflows by configuring them to run on {% data variables.actions.hosted_runner %}s.'
permissions: '{% data reusables.actions.larger-runner-permissions %}'
versions:
  feature: actions-hosted-runners
---

## Running jobs on your runner

Once your runner type has been defined, you can update your workflow YAML files to send jobs to your newly created runner instances for processing. You can use runner groups or labels to define where your jobs run.

{% note %}

**Note:** When you add a {% data variables.actions.hosted_runner %}, it is automatically assigned default labels that correspond to the runner name and its operating system. You cannot add custom labels to {% data variables.actions.hosted_runner %}s, but you can use the default labels or the runner's group to send jobs to specific types of runners.

{% endnote %}

Only owner or administrator accounts can see the runner settings. Non-administrative users can contact the organization owner to find out which runners are enabled. Your organization owner can create new runners and runner groups, as well as configure permissions to specify which repositories can access a runner group. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/managing-larger-runners#allowing-repositories-to-access-a-runner-group)."

## Using groups to control where jobs are run

{% data reusables.actions.jobs.example-runs-on-groups %}

## Using labels to control where jobs are run

In this example, a runner group is populated with Ubuntu 16-core runners, which have also been assigned the label `ubuntu-20.04-16core`. The `runs-on` key sends the job to any available runner with a matching label:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on:
      labels: ubuntu-20.04-16core
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

## Using labels and groups to control where jobs are run

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}

## Troubleshooting {% data variables.actions.hosted_runner %}s

If you notice the jobs that target your {% data variables.actions.hosted_runner %}s are delayed or not running, there are several factors that may be causing this.

- **Concurrency settings**: You may have reached your maximum concurrency limit. If you would like to enable more jobs to run in parallel, you can update your autoscaling settings to a larger number. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/managing-larger-runners#configuring-autoscaling-for-larger-runners)."
- **Repository permissions**: Ensure you have the appropriate repository permissions enabled for your {% data variables.actions.hosted_runner %}s. By default, enterprise runners are not available at the repository level and must be manually enabled by an organization owner. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/managing-larger-runners#allowing-repositories-to-access-larger-runners)."
- **Billing information**: You must have a valid credit card on file in order to use {% data variables.actions.hosted_runner %}s. After adding a credit card to your account, it can take up to 10 minutes to enable the use of your {% data variables.actions.hosted_runner %}s. For more information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)."
- **Spending limit**: Your {% data variables.product.prodname_actions %} spending limit must be set to a value greater than zero. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)."
- **Fair use policy**: {% data variables.product.company_short %} has a fair use policy that begins to throttle jobs based on several factors, such as how many jobs you are running or how many jobs are running across the entirety of {% data variables.product.prodname_actions %}.
