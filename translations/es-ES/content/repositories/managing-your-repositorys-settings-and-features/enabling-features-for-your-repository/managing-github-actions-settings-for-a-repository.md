---
title: Administrar los ajustes de las GitHub Actions de un repositorio
intro: 'Puedes inhabilitar o configurar las {% data variables.product.prodname_actions %} en un repositorio específico.'
redirect_from:
  - /github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-or-limiting-github-actions-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Permissions
  - Pull requests
shortTitle: Administrar los ajustes de las GitHub Actions
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los permisos de {% data variables.product.prodname_actions %} para tu repositorio

{% data reusables.github-actions.disabling-github-actions %}Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta la sección "[Acerca de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)".

Puedes habilitar {% data variables.product.prodname_actions %} para tu repositorio. {% data reusables.github-actions.enabled-actions-description %} Puedes inhabilitar {% data variables.product.prodname_actions %} totalmente para tu repositorio. {% data reusables.github-actions.disabled-actions-description %}

De manera alterna, puedes habilitar {% data variables.product.prodname_actions %} en tu repositorio, pero limitar las acciones que un flujo de trabajo puede ejecutar. {% data reusables.github-actions.enabled-local-github-actions %}

## Administrar los permisos de {% data variables.product.prodname_actions %} para tu repositorio

Puedes inhabilitar todos los flujos de trabajo para un repositorio o configurar una política que configure qué acciones pueden utilzarse en éste.

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**Nota:** Tal vez no pueds administrar estas configuraciones si tu organización tiene una política de anulación o si la administra una cuenta empresarial que tiene dicha configuración. Para obtener más información, consulta la sección "[Inhabilitar o limitar las {% data variables.product.prodname_actions %} para tu organización](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" o "[Reforzar las políticas para las {% data variables.product.prodname_actions %} en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)".

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Debajo de **Permisos de las acciones**, selecciona una opción.

  ![Configurar la política de acciones para esta organización](/assets/images/help/repository/actions-policy.png)

1. Haz clic en **Save ** (guardar).

## Permitir que se ejecuten acciones específicas

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Debajo de **Permisos de las acciones**, selecciona **Permitir acciones seleccionadas** y agrega tus acciones requeridas a la lista.

   {%- ifversion ghes > 3.0 %}
   ![Agregar acciones a la lista de permitidos](/assets/images/help/repository/actions-policy-allow-list.png)
   {%- else %}
   ![Agregar acciones a la lista de permitidos](/assets/images/enterprise/github-ae/repository/actions-policy-allow-list.png)
   {%- endif %}

1. Haz clic en **Save ** (guardar).

{% ifversion fpt or ghec %}
## Configurar las aprobaciones requeridas para los flujos de trabajo desde las bifurcaciones pùblicas

{% data reusables.actions.workflow-run-approve-public-fork %}

Puedes configurar este comportamiento para un repositorio si utilizas el siguiente procedimiento. El modificar este ajuste anula la configuración que se haya hecho a nviel organizacional o empresarial.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

## Habilitar flujos de trabajo para las bifurcaciones de repositorios privados

{% data reusables.github-actions.private-repository-forks-overview %}

If a policy is disabled for an {% ifversion ghec or ghae or ghes %}enterprise or{% endif %} organization, it cannot be enabled for a repository.

{% data reusables.github-actions.private-repository-forks-options %}

### Configurar la política de bifurcaciones privadas para un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## Configurar los permisos del `GITHUB_TOKEN` para tu repositorio

{% data reusables.github-actions.workflow-permissions-intro %}

The default permissions can also be configured in the organization settings. If the more restricted default has been selected in the organization settings, the same option is auto-selected in your repository settings and the permissive option is disabled.

{% data reusables.github-actions.workflow-permissions-modifying %}

### Configuring the default `GITHUB_TOKEN` permissions

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Debajo de **Permisos del flujo de trabajo**, elige si quieres que el `GITHUB_TOKEN` tenga permisos de lectura y escritura para todos los alcances o solo acceso de lectura para el alcance `contents`.

  ![Configurar los permisos del GITHUB_TOKEN para este repositorio](/assets/images/help/settings/actions-workflow-permissions-repository.png)

1. Da clic en **Guardar** para aplicar la configuración.
{% endif %}

{% ifversion ghes > 3.3 or ghae-issue-4757 or ghec %}
## Permitir el acceso a los componentes en un repositorio interno

Members of your enterprise can use internal repositories to work on projects without sharing information publicly. For information, see "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)."

You can configure whether {% if internal-actions%}actions and {% endif %}workflows in an internal repository can be accessed from outside the repository.{% if internal-actions %} For more information, see "[Sharing actions and workflows with your enterprise](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)."{% endif %}

1. En {% data variables.product.prodname_dotcom %}, navega hasta la página principal del repositorio interno.
1. Debajo de tu nombre de repositorio, haz clic en {% octicon "gear" aria-label="The gear icon" %}**Configuración**.
{% data reusables.repositories.settings-sidebar-actions %}
1. Debajo de **Acceso**, elige uno de los ajustes de acceso:

   {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}![Set the access to Actions components](/assets/images/help/settings/actions-access-settings.png){% else %}![Set the access to Actions components](/assets/images/enterprise/3.4/actions-access-settings.png){% endif %}

   * **Sin acceso** - Los flujos de trabajo en otros repositorios no pueden acceder a este.
   * **Con acceso desde los repositorios de la organización 'ORGANIZATION NAME'** - {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Los flujos de trabajo en otros repositorios que sean parte de la organización 'ORGANIZATION NAME' pueden acceder a las acciones y flujos de trabajo de este repositorio. Se permite el acceso solo desde los repositorios internos o privados.{% else %}Los flujos de trabajo en otros repositorios pueden utilizar flujos de trabajo en este si son parte de la misma organización y su visibilidad es privada o interna.{% endif %}
   * **Con acceso desde los repositorios de la empresa 'ENTERPRISE NAME'** - {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Los flujos de trabajo en otros repositorios que son parte de la empresa 'ENTERPRISE NAME' pueden acceder a las acciones y flujos de trabajo de este repositorio. Se permite el acceso únicamente desde los repositorios internos o privados.{% else %}Los flujos de trabajo en otros repositorios pueden utilizar aquellos en este repositorio si son parte de la misma empresa y su visibilidad es privada o interna.{% endif %}
1. Da clic en **Guardar** para aplicar la configuración.
{% endif %}

## Configurar el periodo de retención de los artefactos y bitácoras de las {% data variables.product.prodname_actions %} en tu repositorio

You can configure the retention period for {% data variables.product.prodname_actions %} artifacts and logs in your repository.

{% data reusables.actions.about-artifact-log-retention %}

You can also define a custom retention period for a specific artifact created by a workflow. For more information, see "[Setting the retention period for an artifact](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)."

## Configurar el periodo de retenciòn para un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}
