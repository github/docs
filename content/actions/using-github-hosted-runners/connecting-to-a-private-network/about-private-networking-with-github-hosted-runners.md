---
title: About private networking with GitHub-hosted runners
shortTitle: About private networking
intro: '{% data reusables.actions.private-networking-intro %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Actions
  - Developer
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## About {% data variables.product.prodname_dotcom %}-hosted runners networking

{% data reusables.actions.about-private-networking-github-hosted-runners %}

 There are a few different approaches you could take to configure this access, each with different advantages and disadvantages.

## Using an API Gateway with OIDC

{% data reusables.actions.private-networking-oidc-intro %} For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/connecting-to-a-private-network/using-an-api-gateway-with-oidc)."

## Using WireGuard to create a network overlay

{% data reusables.actions.private-networking-wireguard-intro %} For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/connecting-to-a-private-network/using-wireguard-to-create-a-network-overlay)."

{% ifversion actions-private-networking-azure-vnet %}

## Using an Azure Virtual Network (VNET)

{% data reusables.actions.private-networking-actions-azure-vnet-beta-note %}

{% data reusables.actions.azure-vnet-injected-runners-intro %} For more information, see "[AUTOTITLE](/admin/configuration/configuring-private-networking-for-hosted-compute-products/about-using-github-hosted-runners-in-your-azure-virtual-network)."

{% endif %}
