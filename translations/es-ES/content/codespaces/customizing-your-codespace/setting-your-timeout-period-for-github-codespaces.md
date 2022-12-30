---
title: Configuración del periodo de tiempo de espera para GitHub Codespaces
shortTitle: Set the timeout
intro: 'Puedes configurar el periodo de tiempo de espera predeterminado para {% data variables.product.prodname_github_codespaces %} en tu página de configuración personal.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
ms.openlocfilehash: 6ca559fefddc34eb6de0441d17344ff8054db509
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159931'
---
## Acerca del tiempo de espera de inactividad

Un codespace dejará de ejecutarse después de un periodo de inactividad. De manera predeterminada, este periodo es de 30 minutos, pero puedes especificar un periodo de tiempo de espera predeterminado más largo o más corto en tu configuración personal en {% data variables.product.prodname_dotcom %}. La configuración actualizada se aplicará a los codespaces que crees o a los existentes la próxima vez que los inicies. También puedes especificar un tiempo de espera al usar la {% data variables.product.prodname_cli %} para crear un codespace.

{% warning %}

**Advertencia**: El uso de proceso de codespaces se factura según la duración para la que un codespace permanece activo. Si no usas un codespace pero permanece en ejecución y aún no has agotado el tiempo de espera, se te factura el tiempo total durante el cual el codespace estaba activo, independientemente de si lo estabas usando. Para más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

{% endwarning %}

### Periodos de tiempo de espera para repositorios propiedad de la organización

Las organizaciones pueden establecer una directiva de tiempo de espera de inactividad máxima para los codespaces creados a partir de algunos de tus repositorios o de todos ellos. Si una directiva de organización establece un tiempo de espera máximo que es menor que el tiempo de espera predeterminado que has establecido, se usará el tiempo de espera de la organización en lugar del de la configuración. Esta opción se te notificará después de crear el codespace. Para obtener más información, consulta "[Restricción del periodo de tiempo de espera de inactividad](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)".

{% webui %}

## Configuración del período de tiempo de espera predeterminado

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. En "Tiempo de espera de inactividad predeterminado", escriba la hora que quiera y, después, haga clic en **Guardar**. El tiempo debe ser de entre 5 minutos y 240 minutos (4 horas).
   ![Selección de la hora de inactividad](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## Configuración del período de tiempo de espera para un codespace

{% data reusables.cli.cli-learn-more %}

Para establecer el período de tiempo de espera al crear un codespace, use el argumento `idle-timeout` con el subcomando `codespace create`. Especifique el tiempo en minutos, seguido de `m`. El tiempo debe ser de entre 5 minutos y 240 minutos (4 horas).

```shell
gh codespace create --idle-timeout 90m
```

Si no especificas un periodo de inactividad cuando creas un codespace, entonces se utilizará el predeterminado. Para obtener más información sobre un periodo de inactividad predeterminado, haz clic en la pestaña de "Buscador web" en esta página. Actualmente, no puedes especificar un periodo de inactividad predeterminado a través del {% data variables.product.prodname_cli %}.

{% endcli %}

{% vscode %}

## Configuración de un período de tiempo de espera

Puedes establecer el período de tiempo de espera predeterminado en el explorador web, en {% data variables.product.prodname_dotcom_the_website %}. De manera alternativa, si usas {% data variables.product.prodname_cli %} para crear un codespace, puedes establecer un período de tiempo de espera para ese codespace en particular. Para más información, haz clic en la pestaña correspondiente arriba.

{% endvscode %}
