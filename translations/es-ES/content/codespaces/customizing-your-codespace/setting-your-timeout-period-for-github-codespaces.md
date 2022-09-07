---
title: Setting your timeout period for GitHub Codespaces
shortTitle: Configurar el tiempo de inactividad
intro: 'Puedes configurar tu periodo de inactividad predeterminado para los {% data variables.product.prodname_codespaces %} en tu página de ajustes personales.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
---

Un codespace dejará de ejecutarse después de un periodo de inactividad. Puedes especificar la longitud de este periodo. El ajuste actualizado se aplicará a cualquier codespace recién creado.

Algunas organizaciones podrían tener una política de tiempo de inactividad máximo. Si una política de organización configura un tiempo de inactividad máximo, el cual sea menos que el predeterminado que ya hayas configurado, el tiempo de espera de la organización se utilizará en vez de tu ajuste y se te notificará de esto después de que se haya creado el codespace. Para obtener más información, consulta la sección "[Restringir el periodo de tiempo de inactividad](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)".

{% warning %}

**Advertencia**: Los Coespaces se facturan por minuto. Si no estás utilizando un codespace activamente, pero este no ha llegado a su tiempo de inactividad, se te cobrará por el tiempo durante el cual este se ejecute de todos modos. Para obtener más información, consulta la sección "[Acerca de la facturación para el {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

{% endwarning %}

{% webui %}

## Configurar tu periodo predeterminado de tiempo de inactividad

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Debajo de "Tiempo de inactividad predeterminado", ingresa el tiempo que quieras y luego haz clic en **Guardar**. El tiempo debe ser de entre 5 minutos y 240 minutos (4 horas). ![Seleccionar tu tiempo de inactividad](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## Configurar el periodo de tiempo de inactividad para un codespace

{% data reusables.cli.cli-learn-more %}

Para configurar el periodo de inactividad cuando creas un codespace, utiliza el argumento `idle-timeout` con el subcomando `codespace create`. Especifica el tiempo en minutos, seguido de `m`. El tiempo debe ser de entre 5 minutos y 240 minutos (4 horas).

```shell
gh codespace create --idle-timeout 90m
```

Si no especificas un periodo de inactividad cuando creas un codespace, entonces se utilizará el predeterminado. Para obtener más información sobre un periodo de inactividad predeterminado, haz clic en la pestaña de "Buscador web" en esta página. Actualmente, no puedes especificar un periodo de inactividad predeterminado a través del {% data variables.product.prodname_cli %}.

{% endcli %}

{% vscode %}

## Configurar un periodo de tiempo de inactividad

Puedes configurar tu periodo predeterminado de tiempo de inactividad en tu buscador web, en {% data variables.product.prodname_dotcom_the_website %}. Como alternativa, si utilizas el {% data variables.product.prodname_cli %} para crear un codespace, puedes configurar un periodo de tiempo de inactividad para ese codespace en particular. Para obtener más información, haz clic en la pestaña adecuada arriba.

{% endvscode %}
