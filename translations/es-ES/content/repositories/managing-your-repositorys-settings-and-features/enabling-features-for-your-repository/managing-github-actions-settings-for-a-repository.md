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
1. Debajo de **Permisos de las acciones**, selecciona una opción. ![Configurar la política de acciones para esta organización](/assets/images/help/repository/actions-policy.png)
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
2. Haz clic en **Save ** (guardar).

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

### Configurar la política de bifurcaciones privadas para un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## Configurar los permisos del `GITHUB_TOKEN` para tu repositorio

{% data reusables.github-actions.workflow-permissions-intro %}

También pueden configurarse los permisos predeterminados en los ajustes de la organización. Si el predeterminado más restringido se seleccionó en la configuración de la organización, la misma opción se autoselecciona en tu configuración de repositorio y la opción permisiva se inhabilita.

{% data reusables.github-actions.workflow-permissions-modifying %}

### Configuring the default `GITHUB_TOKEN` permissions

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Debajo de **Permisos del flujo de trabajo**, elige si quieres que el `GITHUB_TOKEN` tenga permisos de lectura y escritura para todos los alcances o solo acceso de lectura para el alcance `contents`. ![Configurar los permisos del GITHUB_TOKEN para este repositorio](/assets/images/help/settings/actions-workflow-permissions-repository.png)
1. Da clic en **Guardar** para aplicar la configuración.
{% endif %}

{% ifversion ghes > 3.3 or ghae-issue-4757 or ghec %}
## Permitir el acceso a los componentes en un repositorio interno

Los miembros de tu empresa pueden utilizar repositorios internos para trabajar en proyectos sin compartir información públicamente. Para obtener más información, consulta la sección "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)".

Para configurar si se puede acceder desde un repositorio externo a los flujos de trabajo de un repositorio interno:

1. En {% data variables.product.prodname_dotcom %}, navega hasta la página principal del repositorio interno.
1. Debajo de tu nombre de repositorio, haz clic en {% octicon "gear" aria-label="The gear icon" %}**Configuración**.
{% data reusables.repositories.settings-sidebar-actions %}
1. Debajo de **Acceso**, elige uno de los ajustes de acceso: ![Configurar el acceso a los componentes de las acciones](/assets/images/help/settings/actions-access-settings.png)
   * **No accesible** - Los flujos de trabajo en otros repositorios no pueden utilizar flujos de trabajo en este repositorio.
   * **Accesible desde los repositorios en la '&lt;organization name&gt;' organización ** - Los flujos de trabajo en otros repositorios pueden utilizar los flujos de trabajo en este repositorio si son parte de la misma organización y su visibilidad es privada o interna.
   * **Accesible desde los repositorios en la '&lt;enterprise name&gt;' empresa ** - Los flujos de trabajo en otros repositorios pueden utilizar los flujos de trabajo en este repositorio si son parte de la misma empresa y su visibilidad es privada o interna.
1. Da clic en **Guardar** para aplicar la configuración.
{% endif %}

## Configurar el periodo de retención de los artefactos y bitácoras de las {% data variables.product.prodname_actions %} en tu repositorio

Puedes configurar el periodo de retenciòn para los artefactos de las {% data variables.product.prodname_actions %} y las bitàcoras en tu repositorio.

{% data reusables.actions.about-artifact-log-retention %}

Tambièn puedes definir un periodo de retenciòn personalizado para un artefacto especìfico que haya creado un flujo de trabajo. Para obtener màs informaciòn consulta la secciòn "[Configurar el periodo de retenciòn para un artefacto](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)".

## Configurar el periodo de retenciòn para un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}
