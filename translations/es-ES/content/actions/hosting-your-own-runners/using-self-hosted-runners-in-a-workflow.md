---
title: Uso de ejecutores autohospedados en un flujo de trabajo
intro: 'Para usar los ejecutores autoalojados en un flujo de trabajo, puedes usar etiquetas para especificar el tipo de ejecutores para un trabajo.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Use runners in a workflow
ms.openlocfilehash: 5c0ff57f5b3eda79e3fcf8b09706ed19f981b8ae
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573421'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Para obtener información sobre cómo crear etiquetas personalizadas y predeterminadas, consulte "[Uso de etiquetas con ejecutores autohospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)".

## Uso de ejecutores autohospedados en un flujo de trabajo

Las etiquetas te permiten enviar jobs de flujo de trabajo a tipos específicos de ejecutores auto-hospedados, de acuerdo con sus características compartidas. Por ejemplo, si tu job requiere una componente de hardware o paquete de software específico, puedes asignar una etiqueta personalizada a un ejecutor y después configurar tu job para que solo se ejecute en los ejecutores con esta etiqueta.

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

Para obtener más información, consulte "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)".

## Utilizar etiquetas predeterminadas para enrutar jobs

Un ejecutor auto-hospedado recibe ciertas etiquetas automáticamente cuando se agrega a {% data variables.product.prodname_actions %}. Estas se utilizan para indicar su sistema operativo y plataforma de hardware:

* `self-hosted`: etiqueta predeterminada que se aplica a todos los ejecutores autohospedados.
* `linux`, `windows` o `macOS`: se aplica según el sistema operativo.
* `x64`, `ARM` o `ARM64`: se aplica en función de la arquitectura de hardware.

Puedes utilizar el YAML de tu flujo de trabajo para mandar jobs a las diferentes combinaciones de estas etiquetas. En este ejemplo, un ejecutor auto-hospedado que empate con las tres etiquetas será elegible para ejecutar el job:

```yaml
runs-on: [self-hosted, linux, ARM64]
```

- `self-hosted`: ejecutar este trabajo en un ejecutor autohospedado.
- `linux`: usar solo un ejecutor basado en Linux.
- `ARM64`: usar solo un ejecutor basado en hardware ARM64.

Las etiquetas predeterminadas son fijas y no se pueden cambiar ni eliminar. Considera utilizar etiquetas personalizadas si necesitas más control sobre el enrutamiento de los jobs.

## Utilizar etiquetas personalizadas para enrutar jobs

Puedes crear etiquetas personalizadas y asignarlas a tus ejecutores auto-hospedados en cualquier momento. Las etiquetas personalizadas te permiten enviar jobs a tipos particulares de ejecutores auto-hospedados, basándose en cómo se etiquetan. 

Por ejemplo, si tiene un trabajo que requiere un tipo específico de hardware de gráficos, puede crear una etiqueta personalizada llamada `gpu` y asignarla a los ejecutores que tengan instalado este hardware. Un ejecutor auto-hospedado que empate con las etiquetas asignadas será entonces elegible para ejecutar el job. 

Este ejemplo muestra un job que combina etiquetas predeterminadas y personalizadas:

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

- `self-hosted`: ejecutar este trabajo en un ejecutor autohospedado.
- `linux`: usar solo un ejecutor basado en Linux.
- `x64`: usar solo un ejecutor basado en hardware x64.
- `gpu`: esta etiqueta personalizada se asignó manualmente a los ejecutores autohospedados con hardware de GPU instalado. 

Estas etiquetas operan de manera acumulativa, así que un ejecutor auto-hospedado deberá tener las cuatro etiquetas para ser elegible para procesar el trabajo.

## Precedencia de enrutamiento para los ejecutores auto-hospedados

Cuando se enruta un trabajo hacia un ejecutor autohospedado, {% data variables.product.prodname_dotcom %} busca un ejecutor que coincida con las etiquetas `runs-on` del trabajo:

{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
- Si {% data variables.product.prodname_dotcom %} encuentra un ejecutor inactivo en línea que coincida con las etiquetas `runs-on` del trabajo, este se asignará y enviará al ejecutor.
  - Si ele ejecutor no recoge el job asignado en 60 segundos, este volverá a ponerse en cola para que el ejecutor nuevo pueda aceptarlo.
- Si {% data variables.product.prodname_dotcom %} no encuentra ningún ejecutor en línea inactivo que coincida con las etiquetas `runs-on` del trabajo, este permanecerá en cola hasta que haya un ejecutor en línea.
- Si el job permanece en cola por más de 24 horas, este fallará.
{% elsif ghes = 3.3 %}
- {% data variables.product.prodname_dotcom %} primero busca un ejecutor a nivel de repositorio y luego a nivel organizacional, posteriormente, lo hace a nivel empresarial.
- Si {% data variables.product.prodname_dotcom %} encuentra un ejecutor inactivo en línea en un nivel determinado que coincida con las etiquetas `runs-on` del trabajo, este se asignará y enviará al ejecutor.
  - Si el ejecutor no toma el job asignado dentro de 60 segundos, dicho job se pondrá en cola en todos los niveles y esperará que un ejecutor de cualquier nivel que empate se ponga en línea y lo tome.
- Si {% data variables.product.prodname_dotcom %} no encuentra un ejecutor inactivo y en línea en cualquier nivel, el job se pondrá en cola para todos los niveles y esperará que un ejecutor de cualquier nivel que empate se muestre en línea y lo tome.
- Si el job permanece en cola por más de 24 horas, este fallará.
{% else %}
1. {% data variables.product.prodname_dotcom %} primero busca un ejecutor a nivel de repositorio y luego a nivel organizacional, posteriormente, lo hace a nivel empresarial.
2. El job se envía entonces a el ejecutor que coincida primero y que se encuentre en línea e inactivo.
   - Si los ejecutores en línea coincidentes están ocupados, el job se pondrá en cola con la cantidad máxima de ejecutores coincidentes en línea.
   - Si todos los ejecutores coincidentes están desconectados, el job se pondrá en cola a nivel de la cantidad máxima de ejecutores coincidentes desconectados.
   - Si no hay ejecutores coincidentes en ningún nivel, el job fallará.
   - Si el job permanece en cola por más de 24 horas, este fallará.
{% endif %}
