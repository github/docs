{% if enterpriseServerVersions contains currentVersion %}
{% warning %}

**Advertencia:** si se inhabilita el aislamiento de subdominios, recomendamos que también inhabilites {% data variables.product.prodname_pages %} en tu empresa. No habrá forma de aislar el contenido de {% data variables.product.prodname_pages %} que suministre un usuario del resto de los datos de tu empresa. Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_pages %} para tu empresa](/enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise/)".

{% endwarning %}
{% endif %}