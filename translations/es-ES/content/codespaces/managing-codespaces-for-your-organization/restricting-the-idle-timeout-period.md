---
title: Restricting the idle timeout period
shortTitle: Restrict timeout periods
intro: You can set a maximum timeout period for any codespaces owned by your organization.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage timeout constraints for an organization''s codespaces, you must be an owner of the organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
---

## Resumen

By default, codespaces time out after 30 minutes of inactivity. When a codespace times out it is stopped and will no longer incur charges for compute usage.

The personal settings of a {% data variables.product.prodname_dotcom %} user allow them to define their own timeout period for codespaces they create. This may be longer than the default 30-minute period. For more information, see "[Setting your timeout period for {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)."

As an organization owner, you may want to configure constraints on the maximum idle timeout period for codespaces created for repositories owned by your organization. This can help you to limit costs associated with codespaces that are left to timeout after long periods of inactivity. You can set a maximum timeout for the codespaces for all repositories owned by your organization, or for the codespaces of specific repositories.

{% note %}

**Note**: Maximum idle timeout constraints only apply to codespaces that are owned by your organization.

{% endnote %}

For more information about pricing for {% data variables.product.prodname_github_codespaces %} compute usage, see "[About billing for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)."

### Behavior when you set a maximum idle timeout constraint

If someone sets the default idle timeout to 90 minutes in their personal settings and they then start a codespace for a repository with a maximum idle timeout constraint of 60 minutes, the codespace will time out after 60 minutes of inactivity. When codespace creation completes, a message explaining this will be displayed:

> Idle timeout for this codespace is set to 60 minutes in compliance with your organization’s policy.

### Configurar políticas específicas para los repositorios y a lo largo de la organización

When you create a policy, you choose whether it applies to all repositories in your organization, or only to specified repositories. If you create an organization-wide policy with a timeout constraint, then the timeout constraints in any policies that are targeted at specific repositories must fall within the restriction configured for the entire organization. The shortest timeout period - in an organization-wide policy, a policy targeted at specified repositories, or in someone's personal settings - is applied.

If you add an organization-wide policy with a timeout constraint, you should set the timeout to the longest acceptable period. You can then add separate policies that set the maximum timeout to a shorter period for specific repositories in your organization.

## Adding a policy to set a maximum idle timeout period

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.codespaces.codespaces-org-policies %}
1. Click **Add constraint** and choose **Maximum idle timeout**.

   ![Add a constraint for idle timeout](/assets/images/help/codespaces/add-constraint-dropdown-timeout.png)

1. Haz clic en {% octicon "pencil" aria-label="The edit icon" %} para editar la restricción.

   ![Edit the timeout constraint](/assets/images/help/codespaces/edit-timeout-constraint.png)

1. Enter the maximum number of minutes codespaces can remain inactive before they time out, then click **Save**.

   ![Set the maximum timeout in minutes](/assets/images/help/codespaces/maximum-minutes-timeout.png)

{% data reusables.codespaces.codespaces-policy-targets %}
1. Si quieres agregar otra restricción a la política, haz clic en **Agregar restricción** y elige otra de ellas. Para obtener información sobre otras restricciones, consulta las secciones "[Restringir el acceso a los tipos de máquina](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)", "[Restringir la visibilidad de los puertos reenviados](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)" y "[Restringir el periodo de retención para los codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".
1. After you've finished adding constraints to your policy, click **Save**.

The policy will be applied to all new codespaces that are created, and to existing codespaces the next time they are started.

## Editar una política

You can edit an existing policy. Por ejemplo, puede que quieras agregar o eliminar restricciones hacia o desde una política.

1. Muestra la página de "Políticas del Codespace". For more information, see "[Adding a policy to set a maximum idle timeout period](#adding-a-policy-to-set-a-maximum-idle-timeout-period)."
1. Haz clic en el nombre de la política que quieres editar.
1. Haz los cambios requeridos y luego haz clic en **Guardar**.

## Borrar una política

1. Muestra la página de "Políticas del Codespace". For more information, see "[Adding a policy to set a maximum idle timeout period](#adding-a-policy-to-set-a-maximum-idle-timeout-period)."
1. Haz clic en el botón de borrar a la derecha de la política que quieras borrar.

   ![El botón de borrar para una política](/assets/images/help/codespaces/policy-delete.png)
