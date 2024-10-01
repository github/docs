{% warning %}

**Warning**: If you use an IP allow list and would also like to use {% data variables.product.prodname_actions %}, you must use self-hosted runners{% ifversion actions-hosted-runners %} or {% data variables.product.prodname_dotcom %}-hosted larger runners with static IP address ranges{% endif %}. When using [Azure private networking](/admin/configuration/configuring-private-networking-for-hosted-compute-products/about-azure-private-networking-for-github-hosted-runners-in-your-enterprise), IPs from your Azure subnet must be used. To reduce the number of required IPs, we recommend creating a load balancer to provide a single IP range for the GitHub allow list. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)" {% ifversion actions-hosted-runners %} or "[AUTOTITLE](/actions/using-github-hosted-runners/using-larger-runners/about-larger-runners)"{% endif %}.

{% endwarning %}

To allow your self-hosted {% ifversion actions-hosted-runners %}or larger hosted{% endif %} runners to communicate with {% data variables.product.prodname_dotcom %}, add the IP address or IP address range of your runners to the IP allow list that you have configured for your enterprise.
