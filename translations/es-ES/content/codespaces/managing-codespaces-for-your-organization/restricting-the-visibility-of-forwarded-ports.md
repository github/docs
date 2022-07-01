---
title: Restricting the visibility of forwarded ports
shortTitle: Restrict port visibility
intro: You can set constraints on the visibility options users can choose when they forward ports from codespaces in your organization.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage access to port visibility constraints for the repositories in an organization, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## Resumen

Typically, within a codespace you are able to forward ports privately (only to yourself), to members of your organization, or publicly (to anyone with the URL). Para obtener más información, consulta la sección "[Reenviar puertos en tu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

As an organization owner, you may want to configure constraints on the visibility options users can set when forwarding ports. For example, for security reasons, you may want to disallow public port forwarding. Esto se hace definiendo una o más políticas en los ajustes de {% data variables.product.prodname_codespaces %} de tu organización.

### Behavior when you set a port visibility constraint

Si existen codespaces que ya no se conformen con alguna política que hayas definido, estos seguirán operando hasta que se les detenga o hasta que se agote el tiempo. When the user resumes the codespace, it will be subject to the policy constraints.

{% note %}

**Note**: You can't disable private port forwarding, as private port forwarding is required by {% data variables.product.prodname_codespaces %} to continue working as designed, for example to forward SSH on port 22.

{% endnote %}

### Configurar políticas específicas para los repositorios y a lo largo de la organización

Cuando creas una política, eliges si esta aplica a todos los repositorios de tu organización o solo a algunos específicos. Si configuras una política a lo largo de la organización, entonces cualquier política que configures para los repositorios individuales debe de caer dentro de las restricciones que se configuraron a nivel organizacional. Adding policies makes the choice of visibility options more, not less, restrictive.

For example, you could create an organization-wide policy that restricts the visibility options to organization only. You can then set a policy for Repository A that disallows both public and organization visibility, which would result in only private port forwarding being available for this repository. Setting a policy for Repository A that allowed both public and organization would result in only organization visibility, because the organization-wide policy does not allow public visibility.

If you add an organization-wide policy, you should set it to the most lenient visibility option that will be available for any repository in your organization. Entonces podrás agregar las políticas específicas para los repositorios y así restringir aún más la elección.

## Adding a policy to limit the port visibility options

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. Click **Add constraint** and choose **Port visibility**.

   ![Add a constraint for port visibility](/assets/images/help/codespaces/add-constraint-dropdown-ports.png)

1. Haz clic en {% octicon "pencil" aria-label="The edit icon" %} para editar la restricción.

   ![Edit the port visibility constraint](/assets/images/help/codespaces/edit-port-visibility-constraint.png)

1. Clear the selection of the port visibility options (**Org** or **Public**) that you don't want to be available.

   ![Choose the port visibility options](/assets/images/help/codespaces/choose-port-visibility-options.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Si quieres agregar otra restricción a la política, haz clic en **Agregar restricción** y elige otra de ellas. Para obtener más información sobre otras restricciones, consulta las secciones "[Restringir el acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)", "[Restringir el periodo de tiempo de inactividad](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)" y "[Restringir el periodo de detección para los codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".
1. After you've finished adding constraints to your policy, click **Save**.
## Editar una política

You can edit an existing policy. Por ejemplo, puede que quieras agregar o eliminar restricciones hacia o desde una política.

1. Muestra la página de "Políticas del Codespace". Para obtener más información, consulta la sección "[Agregar una política para limitar las opciones de visibilidad de puerto](#adding-a-policy-to-limit-the-port-visibility-options)".
1. Haz clic en el nombre de la política que quieres editar.
1. Haz los cambios requeridos y luego haz clic en **Guardar**.

## Borrar una política

1. Muestra la página de "Políticas del Codespace". Para obtener más información, consulta la sección "[Agregar una política para limitar las opciones de visibilidad de puerto](#adding-a-policy-to-limit-the-port-visibility-options)".
1. Haz clic en el botón de borrar a la derecha de la política que quieras borrar.

   ![El botón de borrar para una política](/assets/images/help/codespaces/policy-delete.png)
