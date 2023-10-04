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

By default, {% data variables.product.prodname_dotcom %}-hosted runners have access to the public internet. However, you may also want these runners to access resources on your private network, such as a package registry, a secret manager, or other on-premise services.

{% data variables.product.prodname_dotcom %}-hosted runners are shared across all {% data variables.product.prodname_dotcom %} customers, so you will need a way of connecting your private network to just your runners while they are running your workflows. There are a few different approaches you could take to configure this access, each with different advantages and disadvantages.

## Using an API Gateway with OIDC

{% data reusables.actions.private-networking-oidc-intro %} For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/connecting-to-a-private-network/using-an-api-gateway-with-oidc)."

## Using WireGuard to create a network overlay

{% data reusables.actions.private-networking-wireguard-intro %} For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/connecting-to-a-private-network/using-wireguard-to-create-a-network-overlay)."

{% ifversion actions-private-networking-azure-vnet %}

## Using an Azure Virtual Network (VNET)

{% note %}

**Notes:**

- {% data reusables.actions.github-hosted-larger-runners-azure-vnet-beta %}
- Only larger runners are supported with Azure VNET. For more information about larger runners, see "[AUTOTITLE](/enterprise-cloud@latest/actions/using-github-hosted-runners/about-larger-runners)."

{% endnote %}

{% data reusables.actions.azure-vnet-injected-runners-intro %} For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/connecting-to-a-private-network/about-using-github-hosted-runners-in-your-azure-virtual-network)."

{% endif %}
