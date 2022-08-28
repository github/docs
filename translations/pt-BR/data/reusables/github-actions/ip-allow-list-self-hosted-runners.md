{% if currentVersion == "github-ae@latest" %}
To allow your
{% data variables.actions.hosted_runner %}s to communicate with {% data variables.product.prodname_dotcom %}, add the IP address or IP address range of your {% data variables.actions.hosted_runner %}s to the IP allow list. Para obter mais informações, consulte "[Adding an allowed IP address](#adding-an-allowed-ip-address)."
{% else %}
{% warning %}

**Aviso**: Se você usar uma lista de permitir IP e também gostaria de usar {% data variables.product.prodname_actions %}, você deve usar executores auto-hospedados. Para obter mais informações, consulte "[Hosting your own runners](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)."

{% endwarning %}
To allow your self-hosted runners to communicate with

{% data variables.product.prodname_dotcom %}, add the IP address or IP address range of your self-hosted runners to the IP allow list. Para obter mais informações, consulte "[Adding an allowed IP address](#adding-an-allowed-ip-address)."
{% endif %}
