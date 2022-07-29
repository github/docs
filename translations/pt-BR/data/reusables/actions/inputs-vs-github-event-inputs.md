{% ifversion actions-unified-inputs %}

{% note %}

**Observação**: O fluxo de trabalho também receberá as entradas no contexto `github.event.inputs`. A informação no contexto `entradas` e `github.event.inputs` é idêntica, exceto que o contexto `entrada` preserva valores booleanos como booleanos em vez de convertê-los em strings.

{% endnote %}
{% endif %}
