---
title: Deshabilitación y habilitación de un flujo de trabajo
intro: 'Puedes inhabilitar y volver a habilitar un flujo de trabajo utilizando la IU de {% data variables.product.prodname_dotcom %}, la API de REST, o el {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Disable & enable a workflow
ms.openlocfilehash: 1c0ebc0f56ba8c337648670e0f07d8a56e2fc326
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145126277'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Inhabilitar un flujo de trabajo te permite impedir que se active sin tener que borrar el archivo del repositorio. Puedes habilitar el flujo de trabajo de nuevo fácilmente en {% data variables.product.prodname_dotcom %}.

Inhabilitar un flujo de trabajo temporalmente puede ser útil en varios escenarios. Estos son algunos cuantos ejemplos en donde inhabilitar un flujo de trabajo podría ser útil:

- Existe un error en el flujo de trabajo, el cual produce demasiadas solicitudes erróneas, lo cual impacta negativamente los servicios externos.
- Hay un flujo de trabajo que no es crítico y que está consumiendo demasiados minutos en tu cuenta.
- Hay un flujo de trabajo que envía solicitudes a un servicio que está inactivo.
- Hay flujos de trabajo en un repositorio bifurcado que no se necesitan (por ejemplo, flujos de trabajo programados).

{% warning %}

**Advertencia:** {% data reusables.actions.scheduled-workflows-disabled %}

{% endwarning %}

También puedes inhabilitar y habilitar un flujo de trabajo utilizando la API de REST. Para obtener más información, consulte la [API de REST de acciones](/rest/reference/actions#workflows).

## Inhabilitar un flujo de trabajo

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. En la barra lateral, da clic en el flujo de trabajo que quieras inhabilitar.
![flujo de trabajo de selección de acciones](/assets/images/actions-select-workflow.png)
1. Da clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![menú kebab de acciones](/assets/images/help/repository/actions-workflow-menu-kebab.png)
1. Haga clic en **Disable workflow**.
![flujo de trabajo de deshabilitar acciones](/assets/images/help/repository/actions-disable-workflow.png) El flujo de trabajo deshabilitado aparece marcado {% octicon "stop" aria-label="The stop icon" %} para indicar su estado.
![flujo de trabajo deshabilitado de lista de acciones](/assets/images/help/repository/actions-find-disabled-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para deshabilitar un flujo de trabajo, use el subcomando `workflow disable`. Reemplace `workflow` por el nombre, el id. o el nombre de archivo del flujo de trabajo que desea deshabilitar. Por ejemplo, `"Link Checker"`, `1234567` o `"link-check-test.yml"`. Si no especificas un flujo de trabajo, {% data variables.product.prodname_cli %} devolverá un menú interactivo para que elijas un flujo de trabajo.

```shell
gh workflow disable <em>workflow</em>
```

{% endcli %}

## Habilitar un flujo de trabajo

{% webui %}

Puedes volver a habilitar un flujo de trabajo que se había inhabilitado previamente.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. En la barra lateral izquierda, da clic en el flujo de trabajo que quieres habiitar.
![flujo de trabajo deshabilitado de seleccionar acciones](/assets/images/help/repository/actions-select-disabled-workflow.png)
1. Haga clic en **Enable workflow**.
![flujo de trabajo de habilitar acciones](/assets/images/help/repository/actions-enable-workflow.png)

{% endwebui %}

{% cli %}

Para habilitar un flujo de trabajo, use el subcomando `workflow enable`. Reemplace `workflow` por el nombre, el id. o el nombre de archivo del flujo de trabajo que desea habilitar. Por ejemplo, `"Link Checker"`, `1234567` o `"link-check-test.yml"`. Si no especificas un flujo de trabajo, {% data variables.product.prodname_cli %} devolverá un menú interactivo para que elijas un flujo de trabajo.

```shell
gh workflow enable <em>workflow</em>
```

{% endcli %}
