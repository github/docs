---
title: Saltarse las ejecuciones de código
intro: Puedes omitir las ejecuciones de flujo de trabajo que desencadenan los eventos `push` y `pull_request` al incluir un comando en tu mensaje de confirmación.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Skip workflow runs
ms.openlocfilehash: 32808741dc6de5aacd79f51c9ba098324a3ee57c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199974'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% note %}

**Nota**: Si se omite un flujo de trabajo debido a un [filtrado de ruta](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [filtrado de rama](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) o mensaje de confirmación (consulta a continuación), las comprobaciones asociadas a ese flujo de trabajo permanecerán en estado "Pendiente". Se bloqueará la fusión mediante combinación de una solicitud de incorporación de cambios que requiera esas comprobaciones para realizarse correctamente.

{% endnote %}

Los flujos de trabajo que, de lo contrario, se desencadenarían mediante `on: push` o `on: pull_request`, no se desencadenarán si agrega cualquiera de las cadenas siguientes al mensaje de confirmación en una inserción o la confirmación HEAD de una solicitud de incorporación de cambios:

* `[skip ci]`
* `[ci skip]`
* `[no ci]`
* `[skip actions]`
* `[actions skip]`

Como alternativa, puedes finalizar el mensaje de confirmación con dos líneas vacías seguidas de una de las dos opciones siguientes:
- `skip-checks:true`
- `skip-checks: true`

No podrás fusionar la solicitud de cambios si tu repositorio se cofiguró para requerir que las verificaciones específicas pasen primero. Para permitir que la solicitud de cambios se fusione, puedes subir una confirmación nueva a la solicitud de cambios sin la instrucción de salto en el mensaje de confirmación.

{% note %}

**Nota:** Omitir las instrucciones solo se aplica a los eventos `push` y `pull_request`. Por ejemplo, agregar `[skip ci]` a un mensaje de confirmación no impedirá que se ejecute un flujo de trabajo que ha desencadenado `on: pull_request_target`.

{% endnote %}

Las instrucciones de omisión solo aplican a las ejecuciones de flujo de trabajo que pudieran activarse mediante la confirmación que contiene dichas instrucciones. También puedes inhabilitar un flujo de trabajo para que no se ejecute. Para más información, vea "[Deshabilitación y habilitación de un flujo de trabajo](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)".
