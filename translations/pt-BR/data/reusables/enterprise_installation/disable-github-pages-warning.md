{% if enterpriseServerVersions contains currentVersion %}
{% warning %}

**Aviso:** Se o isolamento de subdomínio estiver desabilitar, recomendamos também desabilitar {% data variables.product.prodname_pages %} na sua empresa. Não haverá forma de isolar o conteúdo {% data variables.product.prodname_pages %} fornecido pelo usuário dos dados da sua empresa. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_pages %} para a sua empresa](/enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise/)".

{% endwarning %}
{% endif %}