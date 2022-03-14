---
title: Administrar el acceso a los ejecutores auto-hospedados utilizando grupos
intro: Puedes utilizar políticas para limitar el acceso a los ejecutores auto-hospedados que se hayan agregado a una organización o empresa.
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Manage access to runners
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.restrict-runner-workflow-beta %}

## Acerca de los grupos de ejecutores auto-hospedados

{% ifversion fpt %}
{% note %}

**Nota:** Todas las organizaciones tienen un solo grupo de ejecutores auto-hospedados predeterminado. Solo las cuentas empresariales y las organizaciones que pretenezcan a estas pueden crear y administrar grupos de ejecutores auto-hospedados adicionales.

{% endnote %}

Los grupos de ejecutores auto-hospedados se utilizan para controlar el acceso a los ejecutores auto-hospedados. Los administradores de las organizaciones pueden configurar políticas de acceso que controlen qué repositorios en una organización tienen acceso al grupo de ejecutores.
Si utilizas

{% data variables.product.prodname_ghe_cloud %}, puedes crear grupos de ejecutores adicionales; los administradores empresariales pueden configurar políticas de acceso que controlen qué organizaciones dentro de una empresa pueden acceder al grupo de ejecutores y los administradores organizacionales pueden asignar políticas de acceso granulares de repositorio para el grupo de ejecutores empresarial. Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).
{% endif %}

{% ifversion ghec or ghes or ghae %}
Los grupos de ejecutores auto-hospedados se utilizan para controlar el acceso a los ejecutores auto-hospedados a nivel de empresas y organizaciones. Enterprise owners can configure access policies that control which organizations
{% if restrict-groups-to-workflows %}and workflows {% endif %}in an enterprise have access to the runner group. Organization owners can configure access policies that control which repositories{% if restrict-groups-to-workflows %} and workflows{% endif %} in an organization have access to the runner group.

When an enterprise owner grants an organization access to a runner group, organization owners can see the runner group listed in the organization's self-hosted runner settings. The organization owners can then assign additional granular repository{% if restrict-groups-to-workflows %} and workflow{% endif %} access policies to the enterprise runner group.

Cuando se crean nuevos ejecutores, se asignan automáticamente al grupo predeterminado. Los ejecutores solo pueden estar en un grupo a la vez. Puedes mover los ejecutores del grupo predeterminado a otro grupo. Para obtener más información, consulta la sección "[Mover un ejecutor auto-hospedado a un grupo](#moving-a-self-hosted-runner-to-a-group)".

## Crear un grupo de ejecutores auto-hospedados para una organización

Todas las organizaciones tienen un solo grupo predeterminado de ejecutores auto-hospedados. Las organizaciones dentro de una cuenta empresarial pueden crear grupos auto-hospedados adicionales. Los administradores de la organización pueden permitir el acceso de los repositorios individuales a un grupo de ejecutores. Para obtener más información sobre cómo crear un grupo de ejecutores auto-hospedados con la API de REST, consulta la sección "[Grupos de ejecutores auto-hospedados](/rest/reference/actions#self-hosted-runner-groups)".

Los ejecutores auto-hospedados se asignan automáticamente al grupo predeterminado cuando se crean y solo pueden ser mimebros de un grupo a la vez. Puedes mover un ejecutor del grupo predeterminado a cualquier grupo que crees.

When creating a group, you must choose a policy that defines which repositories{% if restrict-groups-to-workflows %} and workflows{% endif %} have access to the runner group.

{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.settings-sidebar-actions-runner-groups %}
1. En la sección de "Grupos de ejecutores", haz clic en **Grupo de ejecutores nuevo**.
1. Enter a name for your runner group.
 {% data reusables.actions.runner-group-assign-policy-repo %}

   {% warning %}

   **Advertencia**: {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{% data reusables.actions.runner-group-assign-policy-workflow %}{%- if restrict-groups-to-workflows %} Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.{% endif %}
{% data reusables.actions.self-hosted-runner-create-group %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.actions.settings-sidebar-actions-runners %}
1. Debajo de {% ifversion ghes > 3.1 or ghae %}"Ejecutores"{% elsif ghes < 3.2 %}"Ejecutores auto-hospedados"{% endif %}, haz clic en **Agregar nuevo** y luego en **Grupo nuevo**.

    ![Agregar un grupo de ejecutores](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Ingresa un nombre para tu grupo de ejecutores y asigna una política para el acceso al repositorio.

   You can configure a runner group to be accessible to a specific list of repositories, or to all repositories in the organization.{% ifversion ghec or ghes %} By default, only private repositories can access runners in a runner group, but you can override this. Esta configuración no puede anularse si se configura un grupo ejecutor de la organización que haya compartido una empresa.{% endif %}

   {%- ifversion ghes %}
   {% warning %}

   **Warning**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
   {%- endif %}

   ![Agregar opciones de un grupo de ejecutores](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Da clic en **Guardar grupo** para crear el grupo y aplicar la política.
{% endif %}

## Crear un grupo de ejecutores auto-hospedados para una empresa

Las empresas pueden agregar sus ejecutores auto-hospedados a grupos para su administración de accesos. Enterprises can create groups of self-hosted runners that are accessible to specific organizations in the enterprise account{% if restrict-groups-to-workflows %} or to specific workflows{% endif %}. Organization owners can then assign additional granular repository{% if restrict-groups-to-workflows %} or workflow{% endif %} access policies to the enterprise runner groups. Para obtener más información sobre cómo crear un grupo de ejecutores auto-hospedados con la API de REST, consulta las terminales empresariales en la [API de REST de {% data variables.product.prodname_actions %}](/rest/reference/actions#self-hosted-runner-groups).

Los ejecutores auto-hospedados se asignan automáticamente al grupo predeterminado cuando se crean y solo pueden ser mimebros de un grupo a la vez. Puedes asignar el ejecutor a un grupo específico durante el proceso de registro o puedes moverlo después desde el grupo predeterminado a un grupo personalizado.

Cuando creas un grupo, debes elegir la política que defina qué organizaciones tienen acceso al grupo de ejecutores.

{% data reusables.actions.self-hosted-runner-groups-add-to-enterprise-first-steps %}
1. To choose a policy for organization access, select the **Organization access** drop-down, and click a policy. You can configure a runner group to be accessible to a specific list of organizations, or all organizations in the enterprise.{% ifversion ghes %} By default, only private repositories can access runners in a runner group, but you can override this.{% endif %}

   {%- ifversion ghec or ghes %}
   {% warning %}

   **Warning**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
   {%- endif %}
   {%- ifversion ghec or ghes %}

   ![Agregar opciones de un grupo de ejecutores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)
   {%- elsif ghae %}

   ![Agregar opciones de un grupo de ejecutores](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options-ae.png)
   {%- endif %}
{% data reusables.actions.runner-group-assign-policy-workflow %}
1. Da clic en **Guardar grupo** para crear el grupo y aplicar la política.

{% endif %}

## Cambiar la política de acceso de un grupo de ejecutores auto-hospedados

For runner groups in an enterprise, you can change what organizations in the enterprise can access a runner group{% if restrict-groups-to-workflows %} or restrict what workflows a runner group can run{% endif %}. For runner groups in an organization, you can change what repositories in the organization can access a runner group{% if restrict-groups-to-workflows %} or restrict what workflows a runner group can run{% endif %}.

### Changing what organizations or repositories can access a runner group

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. For runner groups in an enterprise, under **Organization access**, modify what organizations can access the runner group. For runner groups in an organization, under **Repository access**, modify what repositories can access the runner group.

   {%- ifversion fpt or ghec or ghes %}
   {% warning %}

   **Warning**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
   {%- endif %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-configure-runner-group-access %}
{% endif %}

{% if restrict-groups-to-workflows %}
### Changing what workflows can access a runner group
You can configure a self-hosted runner group to run either selected workflows or all workflows. For example, you might use this setting to protect secrets that are stored on self-hosted runners or to standardize deployment workflows by restricting a runner group to run only a specific reusable workflow. This setting cannot be overridden if you are configuring an organization's runner group that was shared by an enterprise.
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Under **Workflow access**, select the dropdown menu and click **Selected workflows**.
1. Da clic en {% octicon "gear" aria-label="the gear icon" %}.
1. Enter a comma separated list of the workflows that can access the runner group. Use the full path, including the repository name and owner. Pin the workflow to a branch, tag, or full SHA. For example: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`.

   Only jobs directly defined within the selected workflows will have access to the runner group.

   Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.

1. Haz clic en **Save ** (guardar).

{% endif %}

## Changing the name of a runner group

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Change the runner group name.

{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.self-hosted-runner-configure-runner-group %}
1. Change the runner group name.
{% endif %}

{% ifversion ghec or ghes or ghae %}
## Agregar ejecutores auto-hospedados a un grupo automáticamente

Puedes utilizar el script de configuración para agregar automáticamente un ejecutor auto-hospedado nuevo a un grupo. Por ejemplo, este comando registra un ejecutor auto-hospedado nuevo y utiliza el parámetro `--runnergroup` para agregarlo a un grupo llamado `rg-runnergroup`.

```sh
./config.sh --url $org_or_enterprise_url --token $token --runnergroup rg-runnergroup
```

El comando fallará si el grupo de ejecutores no existe:

```
Could not find any self-hosted runner group named "rg-runnergroup".
```

## Mover un ejecutor auto-hospedado a un grupo

Si no especificas un grupo de ejecutores durante el proceso de registro, tus ejecutores auto-hospedados nuevos se asignarán automáticamente al grupo predeterminado y después se moverán a otro grupo.

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %}
{% ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. En la lista de "Ejecutores", haz clic en aquél que quieras configurar.
2. Select the **Runner group** drop-down.
3. En "Mover el ejecutor al grupo", elige un grupo destino para el ejecutor.
{% elsif ghae or ghes < 3.4 %}
1. En la sección de {% ifversion ghes > 3.1 or ghae %}"Grupos de ejecutores"{% elsif ghes < 3.2 %}"Ejecutores auto-hospedados"{% endif %} de la página de ajustes, ubica al grupo actual del ejecutor que quieres mover y expande la lista de sus miembros. ![Ver los miembros de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-members.png)
2. Selecciona la casilla junto al ejecutor auto-hospedado y da clic en **Mover a grupo** para ver los destinos disponibles. ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. Para mover el ejecutor, da clic en el grupo de destino. ![Mover a un miembro de un grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png)
{% endif %}

## Eliminar un grupo de ejecutores auto-hospedados

Los ejecutores auto-hospedados se devuelven automáticamente al grupo predeterminado cuando su grupo se elimina.

{% ifversion ghes > 3.1 or ghae or ghec %}
{% data reusables.actions.self-hosted-runner-groups-navigate-to-repo-org-enterprise %}
1. En la lista de grupos, a la derecha del grupo que quieras borrar, haz clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
2. Para eliminar el grupo, da clic en **Eliminar grupo**.
3. Revisa el mensaje de confirmación y da clic en **Eliminar este grupo de ejecutores**.
{% elsif ghes < 3.2 %}
1. En la sección de "Ejecutores auto-hospedados" de la página de ajustes, ubica el grupo que quieras borrar y haz clic en el botón {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Ver la configuración del grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-kebab.png)

1. Para eliminar el grupo, da clic en **Eliminar grupo**. ![Ver la configuración del grupo de ejecutores](/assets/images/help/settings/actions-org-runner-group-remove.png)

1. Revisa el mensaje de confirmación y da clic en **Eliminar este grupo de ejecutores**.
{% endif %}
{% endif %}
