{%- ifversion ghes %}
- {% data variables.product.prodname_actions %} debe estar habilitado para {% data variables.product.product_name %}. Un administrador de sitio puede habilitar y configurar {% data variables.product.prodname_actions %} para tu instancia. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)".
{%- endif %}

- Debes tener acceso a la máquina que utilizarás como ejecutor auto-hospedado en tu ambiente.

- {% data reusables.actions.self-hosted-runner-ports-protocols %} Para obtener más información, consulta la sección "[Acerca de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-ae)".
