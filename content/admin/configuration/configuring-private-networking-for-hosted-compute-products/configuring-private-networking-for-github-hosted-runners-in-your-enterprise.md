---
title: Configuring private networking for GitHub-hosted runners in your enterprise
shortTitle: Configuring private networking
intro: 'Learn how to use {% data variables.product.company_short %}-hosted runners with an Azure private network.'
versions:
  ghec: '*'
type: how_to
permissions: 'Enterprise owners can configure private networking for GitHub-hosted runners at the enterprise level.'
topics:
  - Actions
  - Action development
  - Azure Virtual Network
  - Administrator
  - Developer
  - CI
  - CD
  - Enterprise
redirect_from:
  - /actions/using-github-hosted-runners/connecting-to-a-private-network/configuring-an-azure-virtual-network-for-your-enterprise
  - /actions/using-github-hosted-runners/connecting-to-a-private-network/configuring-azure-resources-for-private-networking-with-github-hosted-runners
  - /admin/configuration/configuring-private-networking-for-hosted-compute-products/configuring-azure-resources-for-private-networking-with-github-hosted-runners
  - /admin/configuration/configuring-private-networking-for-hosted-compute-products/creating-a-network-configuration-with-an-azure-private-network
  - /actions/using-github-hosted-runners/connecting-to-a-private-network/configuring-your-github-settings-for-use-with-azure-virtual-network
  - /admin/configuration/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners
---

## About Azure private networking for {% data variables.product.company_short %}-hosted runners

{% data reusables.actions.azure-vnet-configuring-overview %}

## Configuring your Azure resources

{% data reusables.actions.azure-vnet-configure-azure-resources-procedures %}

## Creating a network configuration for your enterprise in {% data variables.product.company_short %}

{% data reusables.actions.azure-vnet-creating-network-configuration-procedures %}

## Deleting a subnet

{% data reusables.actions.azure-vnet-deleting-a-subnet %}
