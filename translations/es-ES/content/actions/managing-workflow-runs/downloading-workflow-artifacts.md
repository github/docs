---
title: Descargar los artefactos del flujo de trabajo
intro: Puedes descargar artefactos archivados antes de que venzan automáticamente.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Download workflow artifacts
ms.openlocfilehash: 71e00a13769b696b47864d53d702770fb4f2b47a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117186'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Predeterminadamente, {% data variables.product.product_name %} almacena las bitácoras de compilación y artefactos durante 90 días y puedes personalizar este periodo de retención dependiendo del tipo de repositorio. Para más información, vea "[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)".

{% data reusables.repositories.permissions-statement-read %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. En **Artefactos**, haga clic en el artefacto que quiera descargar.
    
    ![Menú desplegable Descargar artefacto](/assets/images/help/repository/artifact-drop-down-updated.png)
    

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

El {% data variables.product.prodname_cli %} descargará cada artefacto en directorios separados con base en el nombre de dicho artefacto. Si se especifica solo un artefacto individual, este se extraerá en el directorio actual.

Para descargar todos los artefactos generados por una ejecución de flujo de trabajo, use el subcomando `run download`. Reemplace `run-id` por el identificador de la ejecución desde la que quiera descargar los artefactos. Si no especifica un valor `run-id`, {% data variables.product.prodname_cli %} devuelve un menú interactivo para que elija una ejecución reciente.

```shell
gh run download <em>run-id</em>
```

Para descargar un artefacto específico de una ejecución, use el subcomando `run download`. Reemplace `run-id` por el identificador de la ejecución desde la que quiera descargar los artefactos. Reemplace `artifact-name` por el nombre del artefacto que quiera descargar.

```shell
gh run download <em>run-id</em> -n <em>artifact-name</em>
```

Puedes especificar más de un artefacto.

```shell
gh run download <em>run-id</em> -n <em>artifact-name-1</em> -n <em>artifact-name-2</em>
```

Para descargar artefactos específicos en todas las ejecuciones de un repositorio, use el subcomando `run download`.

```shell
gh run download -n <em>artifact-name-1</em> -n <em>artifact-name-2</em>
```

{% endcli %}
