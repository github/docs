---
title: Configuring private networking for GitHub-hosted runners in your organization
shortTitle: Configuring private networking
intro: 'Learn how to use {% data variables.product.company_short %}-hosted runners with an Azure private network in your organization.'
versions:
  fpt: '*'
type: how_to
permissions: '{% data reusables.actions.azure-vnet-organization-permissions %}'
topics:
  - Actions
  - Action development
  - Azure Virtual Network
  - Administrator
  - Developer
  - CI
  - CD
  - Organizations
---

## About Azure private networking for {% data variables.product.company_short %}-hosted runners

{% data reusables.actions.azure-vnet-configuring-overview %}

## Configuring your Azure resources

{% data reusables.actions.azure-vnet-configure-azure-resources-procedures %}

## Creating a network configuration for your organization in {% data variables.product.company_short %}

{% data reusables.actions.azure-vnet-creating-network-configuration-procedures %}

## Deleting a subnet

{% data reusables.actions.azure-vnet-deleting-a-subnet %}
