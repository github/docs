{% ifversion ghes > 3.2 or ghae-issue-4815 %}
{% note %}

**Nota:** Con {% data variables.product.prodname_github_connect %} habilitado, las {% data variables.product.prodname_actions %} intentarán encontrar el repositorio en tu instancia de {% data variables.product.prodname_ghe_server %} antes de revertirse a {% data variables.product.prodname_dotcom_the_website%}. If a user has already created an organization and repository in your enterprise that matches an organization and repository name on {% data variables.product.prodname_dotcom %}, the repository on your enterprise will be used in place of the {% data variables.product.prodname_dotcom %} repository. For more information, see "[Automatic retirement of namespaces for actions accessed on {% data variables.product.prodname_dotcom_the_website%}](#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)."

{% endnote %}
{% endif %}

{% ifversion ghes < 3.3 %}
{% note %}

**Nota:** Con {% data variables.product.prodname_github_connect %} habilitado, las {% data variables.product.prodname_actions %} intentarán encontrar el repositorio en tu instancia de {% data variables.product.prodname_ghe_server %} antes de revertirse a {% data variables.product.prodname_dotcom_the_website%}. Si un usuario crea una organización y repositorio en tu empresa, los cuales empaten con un nombre de organzación y repositorio en {% data variables.product.prodname_dotcom %}, el repositorio de tu empresa se utilizará en vez del repositorio de {% data variables.product.prodname_dotcom %}. Un usuario malintencionado podría sacar provecho de este comportamiento para ejecutar código como parte de un flujo de trabajo.

{% endnote %}
{% endif %}
