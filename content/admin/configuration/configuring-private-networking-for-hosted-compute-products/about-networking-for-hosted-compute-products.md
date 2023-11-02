---
title: About networking for hosted compute products
shortTitle: About hosted compute networking
intro: 'You can manage private networking for {% data variables.product.company_short %}-hosted products using network configurations.'
versions:
  feature: actions-private-networking-azure-vnet
type: overview
topics:
  - Actions
  - Developer
---

## About network configurations

Network configurations provide an overarching construct to manage private networking settings for {% data variables.product.company_short %}-hosted compute products including {% data variables.product.company_short %}-hosted runners.

By customizing network configurations for hosted compute products, you can securely access private resources, control outbound network access, and monitor network traffic. This allows you to control and manage network security for your development and CI/CD managed infrastructure within a single place.

## Using {% data variables.product.prodname_dotcom %}-hosted runners with an Azure private network

{% data reusables.actions.private-networking-actions-azure-vnet-beta-note %}

{% data reusables.actions.azure-vnet-injected-runners-intro %}

For more information about how Azure private networking with {% data variables.product.company_short %}-hosted runners works, see "[AUTOTITLE](/admin/configuration/configuring-private-networking-for-hosted-compute-products/about-using-github-hosted-runners-in-your-azure-virtual-network)."

{% data reusables.actions.actions-azure-vnet-resources-config-link %} For more information, see "[AUTOTITLE](/admin/configuration/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners)."
