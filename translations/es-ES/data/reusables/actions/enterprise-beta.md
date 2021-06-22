{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.22" %}
{% note %}

**Nota:** {% data variables.product.prodname_actions %} estuvo disponible para {% data variables.product.prodname_ghe_server %} 2.22 como un beta limitado. El beta terminó. {% data variables.product.prodname_actions %} está ahora disponible habitualmente en {% data variables.product.prodname_ghe_server %} 3.0 o superior. Para obtener más información, consulta la sección de [notas de lanzamiento para {% data variables.product.prodname_ghe_server %} 3.0](/enterprise-server@3.0/admin/release-notes).

<br/>

- Para obtener más información acerca de cómo mejorar a {% data variables.product.prodname_ghe_server %} 3.0 o superior, consulta la sección "[Mejorar a {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server)".
- Para obtener más información acerca de configurar las {% data variables.product.prodname_actions %} después de tu mejora, consulta la [documentación de {% data variables.product.prodname_ghe_server %} 3.0](/enterprise-server@3.0/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server).

{% endnote %}
{% endif %}
