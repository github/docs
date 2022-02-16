{% ifversion ghes > 3.2 or ghae-issue-4815 %}
{% note %}

**Note:** When a workflow uses an action by referencing the repository where the action is stored, {% data variables.product.prodname_actions %} will try to find the repository on your {% data variables.product.prodname_ghe_server %} instance first before falling back to {% data variables.product.prodname_dotcom_the_website %}. Si un usuario ya creó una organización y repositorio en tu empresa, el cual empate con un nombre de organización y repositorio en {% data variables.product.prodname_dotcom %}, el repositorio de tu empresa se utilizará en vez del de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Jubilación automática de designadores de espacio para las acciones a las cuales se accede en {% data variables.product.prodname_dotcom_the_website%}](#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)".

{% endnote %}
{% endif %}

{% ifversion ghes < 3.3 %}
{% note %}

**Note:** When a workflow uses an action by referencing the repository where the action is stored, {% data variables.product.prodname_actions %} will try to find the repository on your {% data variables.product.prodname_ghe_server %} instance first before falling back to {% data variables.product.prodname_dotcom_the_website %}. Si un usuario crea una organización y repositorio en tu empresa, los cuales empaten con un nombre de organzación y repositorio en {% data variables.product.prodname_dotcom %}, el repositorio de tu empresa se utilizará en vez del repositorio de {% data variables.product.prodname_dotcom %}. Un usuario malintencionado podría sacar provecho de este comportamiento para ejecutar código como parte de un flujo de trabajo.

{% endnote %}
{% endif %}
