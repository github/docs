{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

{% note %}

**Nota:** El cargar datos de SARIF para mostrarlos como resultados del {% data variables.product.prodname_code_scanning %} eb {% data variables.product.product_name %} es compatible para los repositorios que pertenezcan a organizaciones con la {% data variables.product.prodname_GH_advanced_security %} habilitada{% if currentVersion == "free-pro-team@latest" %}, y para los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %}{% endif %}. Para obtener más información, consulta la sección "[Administrar la configuración de seguridad y análisis para tu repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)".

{% endnote %}

{% endif %}
