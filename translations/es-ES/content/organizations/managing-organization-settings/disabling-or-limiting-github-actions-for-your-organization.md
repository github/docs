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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de los permisos de {% data variables.product.prodname_actions %} para tu organización

{% data reusables.github-actions.disabling-github-actions %}Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta la sección "[Acerca de {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions)".

Puedes habilitar {% data variables.product.prodname_actions %} para todos los repositorios en tu organización. {% data reusables.github-actions.enabled-actions-description %}Puedes inhabilitar {% data variables.product.prodname_actions %} para todos los repositorios en tu organización. {% data reusables.github-actions.disabled-actions-description %}

De manera alterna, puedes habilitar {% data variables.product.prodname_actions %} para todos los repositorios en tu organización, pero limitando las acciones que un flujo de trabajo puede ejecutar. {% data reusables.github-actions.enabled-local-github-actions %}

## Administrar los permisos de {% data variables.product.prodname_actions %} para tu organización

Puedes inhabilitar todos los flujos de trabajo para una organización o configurar una política que configure qué acciones pueden utilizarse en una organización.

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**Nota:** Tal vez no puedas administrar estas configuraciones si la empresa que administra tu organización tiene una política que lo anule. Para obtener más información, consulta la sección "[Requerir políticas para la {% data variables.product.prodname_actions %} en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)".

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Debajo de **Políticas**, selecciona una opción. ![Configurar la política de acciones para esta organización](/assets/images/help/organizations/actions-policy.png)
1. Haz clic en **Save ** (guardar).

## Permitir que se ejecuten acciones específicas

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Debajo de **Políticas**, selecciona **Permitir las acciones seleccionadas** y agrega tus acciones requeridas a la lista.
   {%- ifversion ghes %}
   ![Agregar acciones a la lista de permitidos](/assets/images/help/organizations/actions-policy-allow-list.png)
   {%- else %}
   ![Agregar acciones a la lista de permitidos](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png)
   {%- endif %}
1. Haz clic en **Save ** (guardar).

{% ifversion fpt or ghec %}
## Configurar las aprobaciones requeridas para los flujos de trabajo desde las bifurcaciones pùblicas

{% data reusables.actions.workflow-run-approve-public-fork %}

Puedes configurar este comportamiento de una organización utilizando los siguientes procedimientos. El modificar este ajuste anula el ajuste de configuraciòn a nivel empresarial.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
{% data reusables.github-actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}
{% endif %}

{% ifversion fpt or ghes or ghec %}
## Habilitar flujos de trabajo para las bifurcaciones de repositorios privados

{% data reusables.github-actions.private-repository-forks-overview %}

### Configurar la política de bifurcaciones privadas para una organización

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
## Configurar los permisos del `GITHUB_TOKEN` para tu organización

{% data reusables.github-actions.workflow-permissions-intro %}

Puedes configurar los permisos predeterminados para el `GITHUB_TOKEN` en la configuración de tu organización o tus repositorios. Si eliges la opción restringida como la predeterminada en tu configuración de organización, la misma opción se auto-seleccionará en la configuración de los repositorios dentro de dicha organización y se inhabilitará la opción permisiva. Si tu organización le pertenece a una cuenta {% data variables.product.prodname_enterprise %} y la configuración predeterminada más restringida se seleccionó en la configuración de dicha empresa, no podrás elegir la opción predeterminada permisiva en la configuración de tu organización.

{% data reusables.github-actions.workflow-permissions-modifying %}

### Configurar los permisos predeterminados del `GITHUB_TOKEN`

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Debajo de **Permisos del flujo de trabajo**, elige si quieres que el `GITHUB_TOKEN` tenga permisos de lectura y escritura para todos los alcances o solo acceso de lectura para el alcance `contents`. ![Configurar los permisos del GITHUB_TOKEN para esta organización](/assets/images/help/settings/actions-workflow-permissions-organization.png)
1. Da clic en **Guardar** para aplicar la configuración.
{% endif %}
