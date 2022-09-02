{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

All organizations have a single default runner group. Organizations within an enterprise account can create additional groups. Los administradores de la organización pueden permitir el acceso de los repositorios individuales a un grupo de ejecutores. For information about how to create a runner group with the REST API, see "[Self-hosted runner groups](/rest/reference/actions#self-hosted-runner-groups)."

Runners are automatically assigned to the default group when created, and can only be members of one group at a time. Puedes mover un ejecutor del grupo predeterminado a cualquier grupo que crees.

Cuando creas un grupo, debes elegir la política que define qué reositorios{% ifversion restrict-groups-to-workflows %} y flujos de trabajo{% endif %} tienen acceso al grupo ejecutor.

{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. En la sección de "Grupos de ejecutores", haz clic en **Grupo de ejecutores nuevo**.
1. Ingresa un nombre para tu grupo ejecutor.
 {% data reusables.actions.runner-group-assign-policy-repo %}
{% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %}Los grupos ejecutores que pertenecen a las organizaciones no pueden acceder a los flujos de trabajo de una organización diferente en la empresa. En vez de esto, debes crear un grupo de ejecutores que pertenezca a la empresa.{% endif %}
{% data reusables.actions.create-runner-group %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. Debajo de {% ifversion ghes or ghae %}"Ejecutores"{% endif %}, haz clic en **Agregar nuevo** y luego en **Grupo nuevo**.

    ![Agregar un grupo de ejecutores](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Ingresa un nombre para tu grupo de ejecutores y asigna una política para el acceso al repositorio.

   Puedes configurar un grupo de ejecutores para que una lista de repositorios específica o todos los repositorios de la organización puedan acceder a él.{% ifversion ghec or ghes %} Predeterminadamente solo los repositorios privados pueden acceder a los ejecutores de un grupo de ejecutores, pero esto se puede omitir. Esta configuración no puede anularse si se configura un grupo ejecutor de la organización que haya compartido una empresa.{% endif %}

   ![Agregar opciones de un grupo de ejecutores](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Da clic en **Guardar grupo** para crear el grupo y aplicar la política.
{% endif %}