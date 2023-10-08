---
title: Including data about GitHub Actions in Server Statistics
shortTitle: Include data about Actions
intro: 'You can help us improve {% data variables.product.prodname_actions %} by allowing {% data variables.product.prodname_server_statistics %} to collect data about {% data variables.product.prodname_actions %}.'
versions:
  ghes: '3.8'
permissions: 'Enterprise owners can include data about {% data variables.product.prodname_actions %} in {% data variables.product.prodname_server_statistics %}.'
topics:
  - Enterprise
---

{% note %}

**Note:** Including {% data variables.product.prodname_actions %} data in {% data variables.product.prodname_server_statistics %} is in public beta and subject to change.

{% endnote %}

## Data collected

If you enable the collection of data about {% data variables.product.prodname_actions %}, the following data will be collected for {% data variables.location.product_location %}.

- The top 20 actions used per month, by organization
- Number of checks run, by organization
- Number of jobs per hour, day, week, and month, by organization
- Maximum concurrency of running jobs, by organization and operating system
- Workflows per operating system, by organization
- Job run length, by organization
- Number of job runners, by type (no names or IP addresses are collected)
- Job distribution over types of runners

## Enabling the collection of data about {% data variables.product.prodname_actions %}

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Enter the following command.

   ```shell copy
   ghe-config app.github.enable-actions-usage-stats true
   ```

{% data reusables.enterprise.apply-configuration %}
