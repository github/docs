{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

En el caso de los grupos de ejecutores en una empresa, puedes cambiar qué organizaciones dentro de ella pueden acceder a un grupo de ejecutores{% ifversion restrict-groups-to-workflows %} o restringir qué flujos de trabajo puede ejecutar un grupo de ejecutores{% endif %}. En el caso de los grupos de ejecutores en una organización, puedes cambiar qué repositorios en ella pueden acceder a un grupo de ejecutores{% ifversion restrict-groups-to-workflows %} o restringir qué flujos de trabajo puede ejecutar un grupo de ejecutores{% endif %}.

### Cambiar qué organizaciones o repositorios pueden acceder a un grupo de ejecutores

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. En el caso de los grupos de ejecutores en una empresa, debajo de **Acceso organizacional**, modifica qué organizaciones pueden acceder al grupo de ejecutores. En el caso de los grupos de ejecutores en una organización, debajo de **Acceso al repositorio**, modifica aquellos a los que puede acceder este grupo.

{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.configure-runner-group-access %}
{% endif %}

{% ifversion restrict-groups-to-workflows %}
### Cambiar los flujos de trabajo a los cuales puede acceder un grupo de ejecutores
You can configure a runner group to run either selected workflows or all workflows. For example, you might use this setting to protect secrets that are stored on runners or to standardize deployment workflows by restricting a runner group to run only a specific reusable workflow. Este ajuste no se puede anular si estás configurando un grupo de ejecutores de una organización que haya compartido una empresa.
{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Debajo de **Acceso al flujo de trabajo**, selecciona el menú desplegable y haz clic en **Flujos de trabajo selectos**.
1. Da clic en {% octicon "gear" aria-label="the gear icon" %}.
1. Ingresa una lista separada por comas de los flujos de trabajo que pueden acceder al grupo de ejecutores. Utiliza la ruta completa, incluyendo el nombre y propietario del repositorio. Fija el flujo de trabajo a una rama, etiqueta o SHA completo. Por ejemplo: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`.

   Solo los jobs que se definan directamente dentro de los flujos de trabajo seleccionados tendrán acceso al grupo de ejecutores.

   Los grupos de ejecutores que pertenecen a la organización no pueden acceder a los flujos de trabajo de otra organización de la empresa; en vez de esto, debes crear un grupo de ejecutores que pertenezca a la empresa.

1. Haz clic en **Save ** (guardar).

{% endif %}