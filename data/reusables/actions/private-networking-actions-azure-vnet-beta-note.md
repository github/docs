{% note %}

**Notes:**

- Using {% data variables.product.company_short %}-hosted runners with an Azure VNET is in beta and subject to change.
- Only 4-64 CPU Ubuntu and Windows runners are supported with Azure VNET. For more information on these runner types, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/about-larger-runners#about-ubuntu-and-windows-larger-runners)."
- Supported regions include `East US`, `East US 2`, and `West US 2`. To request support for a region that is not in this list, fill out the [region request form](https://github.co/vnet-region-form).
- {% data reusables.actions.static-ip-limitation-vnet %} You must use dynamic IP addresses, which is the default configuration for larger runners. For more information about networking for larger runners, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/about-larger-runners#networking-for-larger-runners)."

{% endnote %}
