---
title: Configurar tu periodo de inactividad para los Codespaces
intro: 'Puedes configurar tu periodo de inactividad predeterminado para los {% data variables.product.prodname_codespaces %} en tu página de ajustes personales.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
shortTitle: Configurar el tiempo de inactividad
---

Un codespace dejará de ejecutarse después de un periodo de inactividad. Puedes especificar la longitud de este periodo. El ajuste actualizado se aplicará a cualquier codespace recién creado.

Some organizations may have a maximum idle timeout policy. If an organization policy sets a maximum timeout which is less than the default timeout you have set, the organization's timeout will be used instead of your setting, and you will be notified of this after the codespace is created. For more information, see "[Restricting the idle timeout period](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)."

{% warning %}

**Advertencia**: Los Coespaces se facturan por minuto. Si no estás utilizando un codespace activamente, pero este no ha llegado a su tiempo de inactividad, se te cobrará por el tiempo durante el cual este se ejecute de todos modos. Para obtener más información, consulta la sección "[Acerca de la facturación para los Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)".

{% endwarning %}

{% webui %}

## Configurar tu tiempo de inactividad predeterminado

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Debajo de "Tiempo de inactividad predeterminado", ingresa el tiempo que quieras y luego haz clic en **Guardar**. El tiempo debe ser de entre 5 minutos y 240 minutos (4 horas). ![Seleccionar tu tiempo de inactividad](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## Configurar tu periodo de inactividad

{% data reusables.cli.cli-learn-more %}

Para configurar el periodo de inactividad cuando creas un codespace, utiliza el argumento `idle-timeout` con el subcomando `codespace create`. Especifica el tiempo en minutos, seguido de `m`. El tiempo debe ser de entre 5 minutos y 240 minutos (4 horas).

```shell
gh codespace create --idle-timeout 90m
```

Si no especificas un periodo de inactividad cuando creas un codespace, entonces se utilizará el predeterminado. Para obtener más información sobre un periodo de inactividad predeterminado, haz clic en la pestaña de "Buscador web" en esta página. Actualmente, no puedes especificar un periodo de inactividad predeterminado a través del {% data variables.product.prodname_cli %}.

{% endcli %}
