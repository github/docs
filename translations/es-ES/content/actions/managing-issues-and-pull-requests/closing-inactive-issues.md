---
title: Cerrar las propuestas inactivas
intro: 'Puedes utilizar las {% data variables.product.prodname_actions %} para comentar o cerrar las propuestas que han estado inactivas por algún tiempo.'
redirect_from:
  - /actions/guides/closing-inactive-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 7d0cab4c1ef7ac5fda67a0487b50817adfb5dfd8
ms.sourcegitcommit: fbc89bcee79c2cda1d3d6e99d5571873ca3b2686
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 08/31/2022
ms.locfileid: '147063614'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En este tutorial se muestra cómo usar la [acción `actions/stale`](https://github.com/marketplace/actions/close-stale-issues) para comentar y cerrar incidencias que han estado inactivas durante un determinado período de tiempo. Por ejemplo, puedes comentar si una propúesta ha estado inactiva durante 30 días para pedir a los participantes que tomen alguna acción. Posteriormente, si no hay ningún tipo de actividad en los siguientes 14 días, puedes cerrar la propuesta.

En el tutorial, primero creará un archivo de flujo de trabajo en el que se usa la [acción `actions/stale`](https://github.com/marketplace/actions/close-stale-issues). Después, personalizarás el flujo de trabajo de acuerdo con tus necesidades.

## Crear un flujo de trabajo

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Copia el siguiente contenido de YAML en tu archivo de flujo de trabajo.

    ```yaml{:copy}
    name: Close inactive issues
    on:
      schedule:
        - cron: "30 1 * * *"

    jobs:
      close-issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-stale %}
            with:
              days-before-issue-stale: 30
              days-before-issue-close: 14
              stale-issue-label: "stale"
              stale-issue-message: "This issue is stale because it has been open for 30 days with no activity."
              close-issue-message: "This issue was closed because it has been inactive for 14 days since being marked as stale."
              days-before-pr-stale: -1
              days-before-pr-close: -1
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Personaliza los parámetros en tu archivo de flujo de trabajo:
   - Cambie el valor de `on.schedule` para determinar cuándo quiere que se ejecute este flujo de trabajo. En el ejemplo anterior, el flujo de trabajo se ejecutará diario a la 1:30 UTC. Para obtener más información sobre los flujos de trabajo programados, consulte "[Eventos programados](/actions/reference/events-that-trigger-workflows#scheduled-events)".
   - Cambie el valor de `days-before-issue-stale` por el número de días sin actividad antes de que la acción `actions/stale` etiquete una incidencia. Si quiere que esta acción no etiquete nunca las incidencias, establezca este valor en `-1`.
   - Cambie el valor de `days-before-issue-close` por el número de días sin actividad antes de que la acción `actions/stale` cierre una incidencia. Si quiere que esta acción no cierre nunca las incidencias, establezca este valor en `-1`.
   - Cambie el valor de `stale-issue-label` por la etiqueta que quiere aplicar a las incidencias que han estado inactivas durante el período de tiempo especificado por `days-before-issue-stale`.
   - Cambie el valor de `stale-issue-message` por el comentario que quiere agregar a la incidencias etiquetadas por la acción `actions/stale`.
   - Cambie el valor de `close-issue-message` por el comentario que quiere agregar a la incidencias cerradas por la acción `actions/stale`.
5. {% data reusables.actions.commit-workflow %}

## Resultados esperados

En función del parámetro `schedule` (por ejemplo, todos los días a la 1:30 UTC), el flujo de trabajo encontrará incidencias que han estado inactivas durante el período de tiempo especificado y les agregará el comentario y etiqueta que ha indicado. Adicionalmente, tu flujo de trabajo cerrará cualquier propuesta que se haya etiquetado previamente si no ha habido ningún tipo de actividad adicional en el periodo de tiempo que especificaste.

{% data reusables.actions.schedule-delay %}

Puedes ver el historial de tus ejecuciones de flujo de trabajo para ver que este flujo de trabajo se ejecute regularmente. Para más información, vea "[Visualización del historial de ejecución de flujos de trabajo](/actions/managing-workflow-runs/viewing-workflow-run-history)".

Este flujo de trabajo solo etiquetará o cerrará 30 propuestas a la vez para evitar exceder el límite de tasa. Puede configurarlo con el valor `operations-per-run`. Para más información, vea la [documentación de la acción `actions/stale`](https://github.com/marketplace/actions/close-stale-issues).

## Pasos siguientes

- Para obtener más información sobre otras cosas que puede hacer con la acción `actions/stale` (como cerrar solicitudes de incorporación de cambios inactivas, omitir incidencias con determinadas etiquetas o hitos o solo comprobar las incidencias con determinadas etiquetas), consulte la [documentación de la acción `actions/stale`](https://github.com/marketplace/actions/close-stale-issues).
- [Busque en GitHub](https://github.com/search?q=%22uses%3A+actions%2Fstale%22&type=code) ejemplos de flujos de trabajo mediante esta acción.
