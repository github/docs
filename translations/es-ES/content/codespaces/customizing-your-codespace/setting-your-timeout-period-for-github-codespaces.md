---
title: Configuración del periodo de tiempo de espera para GitHub Codespaces
shortTitle: Set the timeout
intro: 'Puedes configurar el periodo de tiempo de espera predeterminado para {% data variables.product.prodname_codespaces %} en tu página de configuración personal.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
ms.openlocfilehash: 5b904e8b2f5cecbecbc93da096ab31126ed82727
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147111658'
---
Un codespace dejará de ejecutarse después de un periodo de inactividad. Puedes especificar la longitud de este periodo. El ajuste actualizado se aplicará a cualquier codespace recién creado.

Algunas organizaciones pueden tener una directiva de tiempo de espera de inactividad máxima. Si una directiva de organización establece un tiempo de espera máximo que es menor que el tiempo de espera predeterminado que has establecido, se usará el tiempo de espera de la organización en lugar de la configuración y se te informará de esto después de crear el codespace. Para obtener más información, consulta "[Restricción del periodo de tiempo de espera de inactividad](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)".

{% warning %}

**Advertencia**: Los codespaces se facturan por minuto. Si no estás utilizando un codespace activamente, pero este no ha llegado a su tiempo de inactividad, se te cobrará por el tiempo durante el cual este se ejecute de todos modos. Para más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

{% endwarning %}

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
