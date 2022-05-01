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
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los permisos de {% data variables.product.prodname_actions %} para tu repositorio

{% data reusables.actions.disabling-github-actions %}Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta la sección "[Acerca de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)".

Puedes habilitar {% data variables.product.prodname_actions %} para tu repositorio. {% data reusables.actions.enabled-actions-description %} Puedes inhabilitar {% data variables.product.prodname_actions %} totalmente para tu repositorio. {% data reusables.actions.disabled-actions-description %}

Como alternativa, puedes habilitar las {% data variables.product.prodname_actions %} en tu repositorio pero limitar las acciones {% if actions-workflow-policy %}y flujos de trabajo reutilizables{% endif %} que puede ejecutar un flujo de trabajo.

## Administrar los permisos de {% data variables.product.prodname_actions %} para tu repositorio

Puedes inhabilitar las {% data variables.product.prodname_actions %} para un repositorio o ajustar una política que configure qué acciones{% if actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} pueden utilizarse ene l repositorio.

{% note %}

**Nota:** Tal vez no pueds administrar estas configuraciones si tu organización tiene una política de anulación o si la administra una cuenta empresarial que tiene dicha configuración. Para obtener más información, consulta la sección "[Inhabilitar o limitar las {% data variables.product.prodname_actions %} para tu organización](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)" o "[Reforzar las políticas para las {% data variables.product.prodname_actions %} en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)".

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Selecciona una opción debajo de "Permisos de las acciones".

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% if actions-workflow-policy %}
   ![Configurar una política de acciones para este repositorio](/assets/images/help/repository/actions-policy-with-workflows.png)
   {%- else %}
   ![Configurar una política de acciones para este repositorio](/assets/images/help/repository/actions-policy.png)
   {%- endif %}
1. Haz clic en **Save ** (guardar).

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Debajo de "Permissos de acciones", selecciona {% data reusables.actions.policy-label-for-select-actions-workflows %} y agrega tus acciones requeridas a la lista.

   {% if actions-workflow-policy%}
   ![Agrega acciones y flujos de trabajo reutilizables a la lista de elementos permitidos](/assets/images/help/repository/actions-policy-allow-list-with-workflows.png)
   {%- elsif ghes %}
   ![Agregar acciones a la lista de elementos permitidos](/assets/images/help/repository/actions-policy-allow-list.png)
   {%- else %}
   ![Agregar acciones a la lista de elementos permitidos](/assets/images/enterprise/github-ae/repository/actions-policy-allow-list.png)
   {%- endif %}
1. Haz clic en **Save ** (guardar).

{% ifversion fpt or ghec %}
## Configurar las aprobaciones requeridas para los flujos de trabajo desde las bifurcaciones pùblicas

{% data reusables.actions.workflow-run-approve-public-fork %}

Puedes configurar este comportamiento para un repositorio si utilizas el siguiente procedimiento. El modificar este ajuste anula la configuración que se haya hecho a nviel organizacional o empresarial.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
{% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

## Habilitar flujos de trabajo para las bifurcaciones de repositorios privados

{% data reusables.actions.private-repository-forks-overview %}

Si se inhabilita una política para una {% ifversion ghec or ghae or ghes %}empresa u{% endif %} organización, esta no puede habilitarse para un repositorio.

{% data reusables.actions.private-repository-forks-options %}

### Configurar la política de bifurcaciones privadas para un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
{% data reusables.actions.private-repository-forks-configure %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## Configurar los permisos del `GITHUB_TOKEN` para tu repositorio

{% data reusables.actions.workflow-permissions-intro %}

Los permisos predeterminados también pueden configurarse en los ajustes de la organización. Si el predeterminado más restringido se seleccionó en la configuración de la organización, la misma opción se autoselecciona en tu configuración de repositorio y la opción permisiva se inhabilita.

{% data reusables.actions.workflow-permissions-modifying %}

### Configuring the default `GITHUB_TOKEN` permissions

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Debajo de **Permisos del flujo de trabajo**, elige si quieres que el `GITHUB_TOKEN` tenga permisos de lectura y escritura para todos los alcances o solo acceso de lectura para el alcance `contents`.

  ![Configurar los permisos del GITHUB_TOKEN para este repositorio](/assets/images/help/settings/actions-workflow-permissions-repository.png)

1. Da clic en **Guardar** para aplicar la configuración.
{% endif %}

{% ifversion ghes > 3.3 or ghae-issue-4757 or ghec %}
## Permitir el acceso a los componentes en un repositorio interno

Los miembros de tu empresa pueden utilizar repositorios internos para trabajar en proyectos sin compartir información públicamente. Para obtener más información, consulta la sección "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)".

Puedes utilizar los siguientes pasos para configurar si se puede acceder a {% if internal-actions%}las acciones y {% endif %}los flujos de trabajo en un repositorio interno desde fuera de este.{% if internal-actions %} Para obtener más información, consulta la sección "[Compartir acciones y flujos de trabajo con tu empresa](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)". Como alternativa, puedes utilizar la API de REST para configurar u obtener detalles del nivel de acceso. Para obtener más información, consulta las secciones "[Obtener el nivel de acceso para los flujos de trabajo fuera del repositorio](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#get-the-level-of-access-for-workflows-outside-of-the-repository)" y "[Configurar el nivel de acceso para los flujos de trabajo fuera del repositorio](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#set-the-level-of-access-for-workflows-outside-of-the-repository)".{% endif %}

1. En {% data variables.product.prodname_dotcom %}, navega hasta la página principal del repositorio interno.
1. Debajo de tu nombre de repositorio, haz clic en {% octicon "gear" aria-label="The gear icon" %}**Configuración**.
{% data reusables.repositories.settings-sidebar-actions-general %}
1. Debajo de **Acceso**, elige uno de los ajustes de acceso:

   {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}![Set the access to Actions components](/assets/images/help/settings/actions-access-settings.png){% else %}![Set the access to Actions components](/assets/images/enterprise/3.4/actions-access-settings.png){% endif %}

   * **Sin acceso** - Los flujos de trabajo en otros repositorios no pueden acceder a este.
   * **Con acceso desde los repositorios de la organización 'ORGANIZATION NAME'** - {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Los flujos de trabajo en otros repositorios que sean parte de la organización 'ORGANIZATION NAME' pueden acceder a las acciones y flujos de trabajo de este repositorio. Se permite el acceso solo desde los repositorios internos o privados.{% else %}Los flujos de trabajo en otros repositorios pueden utilizar flujos de trabajo en este si son parte de la misma organización y su visibilidad es privada o interna.{% endif %}
   * **Con acceso desde los repositorios de la empresa 'ENTERPRISE NAME'** - {% ifversion ghes > 3.4 or ghae-issue-6090 or ghec %}Los flujos de trabajo en otros repositorios que son parte de la empresa 'ENTERPRISE NAME' pueden acceder a las acciones y flujos de trabajo de este repositorio. Se permite el acceso únicamente desde los repositorios internos o privados.{% else %}Los flujos de trabajo en otros repositorios pueden utilizar aquellos en este repositorio si son parte de la misma empresa y su visibilidad es privada o interna.{% endif %}
1. Da clic en **Guardar** para aplicar la configuración.
{% endif %}

## Configurar el periodo de retención de los artefactos y bitácoras de las {% data variables.product.prodname_actions %} en tu repositorio

Puedes configurar el periodo de retenciòn para los artefactos de las {% data variables.product.prodname_actions %} y las bitàcoras en tu repositorio.

{% data reusables.actions.about-artifact-log-retention %}

Tambièn puedes definir un periodo de retenciòn personalizado para un artefacto especìfico que haya creado un flujo de trabajo. Para obtener màs informaciòn consulta la secciòn "[Configurar el periodo de retenciòn para un artefacto](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact)".

## Configurar el periodo de retenciòn para un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-general %}
{% data reusables.actions.change-retention-period-for-artifacts-logs  %}
