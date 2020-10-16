{% if currentVersion ver_gt "enterprise-server@2.21" %}

{% note %}

**Observação:** O administrador do site deve habilitar {% data variables.product.prodname_code_scanning %} para {% data variables.product.product_location_enterprise %} antes de usar este recurso. Se você desejar usar o {% data variables.product.prodname_actions %} para fazer a varredura do seu código, o administrador do site também deverá habilitar o {% data variables.product.prodname_actions %} e configurar a infraestrutura necessária. Para obter mais informações, consulte "[Configurar o {% data variables.product.prodname_code_scanning %} para seu aplicativo ](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance)".

{% endnote %}

{% endif %}
