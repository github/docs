---
title: Inhabilitar o limitar GitHub Actions para tu organización
intro: 'Los propietarios de organización pueden inhabilitar, habilitar y limitar GitHub Actions para la misma.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Inhabilitar o limitar las acciones
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los permisos de {% data variables.product.prodname_actions %} para tu organización

{% data reusables.actions.disabling-github-actions %}Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta la sección "[Acerca de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)".

Puedes habilitar {% data variables.product.prodname_actions %} para todos los repositorios en tu organización. {% data reusables.actions.enabled-actions-description %}Puedes inhabilitar {% data variables.product.prodname_actions %} para todos los repositorios en tu organización. {% data reusables.actions.disabled-actions-description %}

Como alternativa, puedes habilitar las {% data variables.product.prodname_actions %} para todos los repositorios de tu organización, pero limitar las acciones {% ifversion actions-workflow-policy %}y flujos de trabajo reutilizables{% endif %} que puede ejecutar un flujo de trabajo.

## Administrar los permisos de {% data variables.product.prodname_actions %} para tu organización

Puedes elegir inhabilitar las {% data variables.product.prodname_actions %} para todos los repositorios de tu organización o permitir únicamente aquellos específicos. También puedes limitar el uso de acciones públicas{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} para que las personas utilicen únicamente las acciones {% ifversion actions-workflow-policy %}y los flujos de trabajo reutilizables{% endif %} locales que existan en tu {% ifversion ghec or ghes or ghae %}empresa{% else %}organización{% endif %}.

{% note %}

**Nota:** Tal vez no puedas administrar estas configuraciones si la empresa que administra tu organización tiene una política que lo anule. Para obtener más información, consulta la sección "[Requerir políticas para las {% data variables.product.prodname_actions %} en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)".

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. Debajo de "Políticas", selecciona una opción.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %}
   ![Configurar la política de acciones para esta organización](/assets/images/help/organizations/actions-policy-with-workflows.png)
   {%- else %}
   ![Configurar la política de acciones para esta organización](/assets/images/help/organizations/actions-policy.png)
   {%- endif %}
1. Haz clic en **Save ** (guardar).

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. Debajo de "Políticas", selecciona {% data reusables.actions.policy-label-for-select-actions-workflows %} y agrega tus acciones{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} requeridos a la lista.

   {% ifversion actions-workflow-policy %}
   ![Agrega acciones y flujos de trabajo reutilizables a la lista de elementos permitidos](/assets/images/help/organizations/actions-policy-allow-list-with-workflows.png)
   {%- elsif ghes %}
   ![Agregar acciones a la lista de elementos permitidos](/assets/images/help/organizations/actions-policy-allow-list.png)
   {%- else %}
   ![Agregar acciones a la lista de elementos permitidos](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png)
   {%- endif %}
1. Haz clic en **Save ** (guardar).

{% ifversion fpt or ghec %}
## Configurar las aprobaciones requeridas para los flujos de trabajo desde las bifurcaciones pùblicas

{% data reusables.actions.workflow-run-approve-public-fork %}

Puedes configurar este comportamiento de una organización utilizando los siguientes procedimientos. El modificar este ajuste anula el ajuste de configuraciòn a nivel empresarial.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
{% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

{% ifversion fpt or ghes or ghec %}
## Habilitar flujos de trabajo para las bifurcaciones de repositorios privados

{% data reusables.actions.private-repository-forks-overview %}

{% ifversion ghec or ghae or ghes %}Si se inhabilita una política para una empresa, esta no podrá habilitarse para las organizaciones.{% endif %} Si una política se inhabilita para una organización, no podrá habilitarse en los repositorios. Si una organización habilita una política, esta podrá inhabilitarse para los repositorios individuales.

{% data reusables.actions.private-repository-forks-options %}

### Configurar la política de bifurcaciones privadas para una organización

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
{% data reusables.actions.private-repository-forks-configure %}
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
## Configurar los permisos del `GITHUB_TOKEN` para tu organización

{% data reusables.actions.workflow-permissions-intro %}

Puedes configurar los permisos predeterminados para el `GITHUB_TOKEN` en la configuración de tu organización o tus repositorios. Si seleccionas una opción restrictiva como la predeterminada en los ajustes de tu organización, la misma opción se selecciona en los ajustes para los repositorios dentro de tu organización y la opción permisiva se inhabilita. Si tu organización le pertenece a una cuenta de {% data variables.product.prodname_enterprise %} y se seleccionaron opciones predeterminadas más restrictivas en los ajustes de la empresa, no podrás seleccionar el predeterminado más permisivo en tus ajustes de organización.

{% data reusables.actions.workflow-permissions-modifying %}

### Configuring the default `GITHUB_TOKEN` permissions

{% ifversion allow-actions-to-approve-pr-with-ent-repo  %}
Predeterminadamente, cuando creas una organización nueva, `GITHUB_TOKEN` solo tiene acceso de lectura para el alcance `contents`.
{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. Debajo de "Permisos de flujo de trabajo", elige si quieres que el `GITHUB_TOKEN` tenga acceso de lectura y escritura para todos los alcances o solo acceso de lectura para el alcance `contents`.

   ![Configurar los permisos del GITHUB_TOKEN para esta organización](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. Da clic en **Guardar** para aplicar la configuración.

{% ifversion allow-actions-to-approve-pr %}
### Preventing {% data variables.product.prodname_actions %} from {% ifversion allow-actions-to-approve-pr-with-ent-repo %}creating or {% endif %}approving pull requests

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

Predeterminadamente, cuando creas una organización nueva, no se permite que los flujos de trabajo {% ifversion allow-actions-to-approve-pr-with-ent-repo %}creen o {% endif %}aprueben las solicitudes de cambio.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-general %}
1. Debajo de "Permisos de flujo de trabajo", utiliza el ajuste **Permitir que GitHub Actions {% ifversion allow-actions-to-approve-pr-with-ent-repo %}creen y {% endif %}aprueben las solicitudes de cambios** para configurar si el `GITHUB_TOKEN` puede {% ifversion allow-actions-to-approve-pr-with-ent-repo %}crear y {% endif %}aprobar las solicitudes de cambios.

   ![Configurar el permiso de aprobación de solicitudes de cambio del GITHUB_TOKEN para esta organización](/assets/images/help/settings/actions-workflow-permissions-organization{% ifversion allow-actions-to-approve-pr %}-with-pr-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creation-{% endif %}approval{% endif %}.png)
1. Da clic en **Guardar** para aplicar la configuración.

{% endif %}
{% endif %}
