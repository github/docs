---
title: About networking for hosted compute products in your organization
shortTitle: About private networking
intro: 'You can manage private networking for {% data variables.product.company_short %}-hosted products using network configurations in your organization.'
permissions: '{% data reusables.actions.azure-vnet-organization-permissions %}'
versions:
  feature: actions-private-networking-azure-vnet
type: how_to
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

## About network configurations

{% data reusables.actions.about-network-configurations %}

## About Azure private networking for {% data variables.product.prodname_dotcom %}-hosted runners

{% data reusables.actions.azure-vnet-network-configuration-intro %}

{% ifversion ghec %}

{% data reusables.actions.azure-vnet-enterprise-policy %}

{% endif %}

For more information about how using an Azure VNET with {% data variables.product.company_short %}-hosted runners works, see "[AUTOTITLE](/organizations/managing-organization-settings/about-azure-private-networking-for-github-hosted-runners-in-your-organization)."

{% data reusables.actions.azure-vnet-next-steps-links %}
