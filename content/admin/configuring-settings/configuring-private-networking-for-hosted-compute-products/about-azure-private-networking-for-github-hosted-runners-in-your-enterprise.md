---
title: About Azure private networking for GitHub-hosted runners in your enterprise
shortTitle: About Azure private networking
intro: 'You can create a private network configuration for your enterprise to use {% data variables.product.company_short %}-hosted runners in your Azure Virtual Network(s) (VNET).'
versions:
  ghec: '*'
type: overview
topics:
  - Actions
  - Action development
  - Azure Virtual Network
  - Administrator
  - Developer
  - CI
  - CD
  - Enterprise
permissions: 'Enterprise owners can create private network configurations at the enterprise level to use {% data variables.product.company_short %}-hosted runners with an Azure VNET.'
redirect_from:
  - /actions/using-github-hosted-runners/connecting-to-a-private-network/about-using-github-hosted-runners-in-your-azure-virtual-network
  - /admin/configuration/configuring-private-networking-for-hosted-compute-products/about-using-github-hosted-runners-in-your-azure-virtual-network
  - /admin/configuration/configuring-private-networking-for-hosted-compute-products/about-azure-private-networking-for-github-hosted-runners-in-your-enterprise
---

## About Azure private networking for {% data variables.product.company_short %}-hosted runners

{% data reusables.actions.azure-vnet-network-configuration-intro %}

{% data reusables.actions.azure-vnet-intro-capabilities %}

## About using larger runners with Azure VNET

{% data reusables.actions.azure-vnet-about-larger-runners %}

## About network communication

{% data reusables.actions.azure-vnet-network-communication %}

## About supported regions

{% data reusables.actions.azure-vnet-supported-regions %}

## About the {% data variables.product.prodname_actions %} service permissions

{% data reusables.actions.azure-vnet-actions-service-permissions %}

## Using your VNET's network policies

{% data reusables.actions.azure-vnet-networking-policies %}

## Managing network configuration policies for organizations in your enterprise

You can give organization owners in your enterprise the ability to set up and maintain organization-level network configurations for {% data variables.product.company_short %}-hosted runners.

For more information, see "[AUTOTITLE](/admin/configuration/configuring-private-networking-for-hosted-compute-products/configuring-private-networking-for-github-hosted-runners-in-your-enterprise#enabling-creation-of-network-configurations-for-organizations)."

## Using {% data variables.product.company_short %}-hosted runners with an Azure VNET

{% data reusables.actions.azure-vnet-next-steps-links %}
