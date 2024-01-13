{% ifversion ghae %}
To allow your self-hosted runners to communicate with {% data variables.product.prodname_dotcom %}, add the IP address or IP address range of your self-hosted runners to the IP allow list. For more information, see "[Adding an allowed IP address](#adding-an-allowed-ip-address)."
{% else %}
{% warning %}

**Warning**: If you use an IP allow list and would also like to use {% data variables.product.prodname_actions %}, you must use self-hosted runners{% ifversion actions-hosted-runners %} or {% data variables.product.prodname_dotcom %}-hosted larger runners with static IP address ranges{% endif %}. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)" {% ifversion actions-hosted-runners %} or "[AUTOTITLE](/actions/using-github-hosted-runners/using-larger-runners)"{% endif %}.

{% endwarning %}

To allow your self-hosted {% ifversion actions-hosted-runners %}or larger hosted{% endif %} runners to communicate with {% data variables.product.prodname_dotcom %}, add the IP address or IP address range of your runners to the IP allow list that you have configured for your enterprise.
{% endif %}
