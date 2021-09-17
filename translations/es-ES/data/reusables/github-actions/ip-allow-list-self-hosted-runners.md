{% if currentVersion == "github-ae@latest" %}
Para permitir que tus
{% data variables.actions.hosted_runner %} se comuniquen con {% data variables.product.prodname_dotcom %}, agrega la dirección o rango de direcciones IP de tus {% data variables.actions.hosted_runner %} a la lista de IP permitidas. Para obtener más información, consulta "[Agregar una dirección IP permitida](#adding-an-allowed-ip-address)".
{% else %}
{% warning %}

**Advertencia**: Si utilzas una lista de IP permitidas y también quisieras utilizar {% data variables.product.prodname_actions %}, debes usar los ejecutores auto-hospedados. Para obtener más información, consulta la sección "[Hospedar tus propios ejecutores](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)".

{% endwarning %}
Para permitir que tus ejecutores auto-hospedados se comuniquen con

{% data variables.product.prodname_dotcom %}, agrega la dirección o rango de direcciones IP de tus ejecutores auto-hospedados a la lista de IP permitidas. Para obtener más información, consulta "[Agregar una dirección IP permitida](#adding-an-allowed-ip-address)".
{% endif %}
