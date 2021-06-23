{% if currentVersion == "github-ae@latest" %}
To allow your
{% data variables.actions.hosted_runner %}s to communicate with {% data variables.product.prodname_dotcom %}, add the IP address or IP address range of your {% data variables.actions.hosted_runner %}s to the IP allow list. For more information, see "[Adding an allowed IP address](#adding-an-allowed-ip-address)."
{% else %}
{% warning %}

**Warning**: If you use an IP allow list and would also like to use {% data variables.product.prodname_actions %}, you must use self-hosted runners. For more information, see "[Hosting your own runners](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)."

{% endwarning %}
To allow your self-hosted runners to communicate with

{% data variables.product.prodname_dotcom %}, add the IP address or IP address range of your self-hosted runners to the IP allow list. For more information, see "[Adding an allowed IP address](#adding-an-allowed-ip-address)."
{% endif %}
