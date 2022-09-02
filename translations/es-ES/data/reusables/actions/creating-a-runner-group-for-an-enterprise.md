{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

Enterprises can add their runners to groups for access management. Enterprises can create groups of runners that are accessible to specific organizations in the enterprise account{% ifversion restrict-groups-to-workflows %} or to specific workflows{% endif %}. Los propietarios de organizaciones pueden entonces asignar políticas de acceso adicionales y granulares para los repositorios{% ifversion restrict-groups-to-workflows %} o flujos de trabajo{% endif %} a los grupos de ejecutores empresariales. For information about how to create a runner group with the REST API, see the enterprise endpoints in the [{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runner-groups).

Runners are automatically assigned to the default group when created, and can only be members of one group at a time. Puedes asignar el ejecutor a un grupo específico durante el proceso de registro o puedes moverlo después desde el grupo predeterminado a un grupo personalizado.

Cuando creas un grupo, debes elegir la política que defina qué organizaciones tienen acceso al grupo de ejecutores.

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. Para elegir una política para el acceso organizacional, selecciona el menú desplegable **Acceso organizacional** y haz clic en una política. Puedes configurar un grupo de ejecutores para que sea accesible a una lista de organizaciones específica o a todas las organizaciones en la empresa.{% ifversion ghes %} Predeterminadamente, solo los repositorios privados pueden acceder a los ejecutores en un grupo, pero esto se puede anular.{% endif %}

   {%- ifversion ghec or ghes %}

   ![Agregar opciones de un grupo de ejecutores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
   {%- elsif ghae %}

   ![Agregar opciones de un grupo de ejecutores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options-ae.png)
   {%- endif %}
{% data reusables.actions.runner-group-assign-policy-workflow %}
1. Da clic en **Guardar grupo** para crear el grupo y aplicar la política.

