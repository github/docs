---
title: Configurar el caché de la herramienta en ejecutores auto-hospedados sin acceso a internet
intro: 'Para utilizar las acciones de `actions/setup` que se incluyen en los ejecutores autohospedados sin acceso a Internet, primero debes rellenar la caché de la herramienta del ejecutor con tus flujos de trabajo.'
redirect_from:
  - /enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
  - /admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
versions:
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
  - Networking
  - Storage
shortTitle: Tool cache for offline runners
ms.openlocfilehash: fe1b070880db8353064f1be5a26b0a63a5e92cf5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529300'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca de las acciones de configuración incluídas y el caché de la herramienta del ejecutor

{% data reusables.actions.enterprise-no-internet-actions %}

La mayoría de las acciones de creación de {% data variables.product.prodname_dotcom %} se agrupan automáticamente con {% data variables.product.product_name %}. Pero los ejecutores autohospedados sin acceso a Internet necesitan alguna configuración para poder usar las acciones `actions/setup-LANGUAGE` incluidas, como `setup-node`.

Las acciones `actions/setup-LANGUAGE` habitualmente necesitan acceso a Internet para descargar los binarios de entorno necesarios en la caché de herramientas del ejecutor. Los ejecutores auto-hospedados sin acceso a internet no pueden descargar los binarios, así que debes poblar el caché de la herramienta manualmente en el ejecutor.

Puedes poblar el caché de la herramienta del ejecutor si ejecutas un flujo de trabajo de {% data variables.product.prodname_actions %} en {% data variables.product.prodname_dotcom_the_website %} que cargue un caché de la herramienta del ejecutor hospedada en {% data variables.product.prodname_dotcom %}, la cual puedes transferir y extraer posteriormente en tu ejecutor auto-hospedado sin acceso a internet.

{% note %}

**Nota:** Solo puede utilizar un caché de herramientas del ejecutor hospedado en {% data variables.product.prodname_dotcom %} para un ejecutor autohospedado que tenga un sistema operativo y una arquitectura idénticos. Por ejemplo, si usa un ejecutor hospedado en {% data variables.product.prodname_dotcom %} con `ubuntu-22.04` para generar una caché de herramientas, el ejecutor autohospedado también debe ser una máquina con Ubuntu 22.04 de 64 bits. Para obtener más información sobre los ejecutores hospedados en {% data variables.product.prodname_dotcom %}, consulta "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/free-pro-team@latest/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)".

{% endnote %}

## Requisitos previos

* Determina qué ambientes de desarrollo necesitarán tus ejecutores auto-hospedados. En el ejemplo siguiente se muestra cómo rellenar la caché de herramientas para la acción `setup-node`, mediante las versiones 10 y 12 de Node.js.
* Accede a un repositorio en {% data variables.product.prodname_dotcom_the_website %} que puedas utilizar para ejecutar un flujo de trabajo.
* Accede al sistema de archivos de tu ejecutor auto-hospedado para poblar la carpeta del caché de la herramienta.

## Poblar el caché de la herramienta para un ejecutor auto-hospedado

1. En {% data variables.product.prodname_dotcom_the_website %}, navega a un repositorio que puedas utilizar para ejecutar un flujo de trabajo de {% data variables.product.prodname_actions %}.
1. Cree un archivo de flujo de trabajo en la carpeta `.github/workflows` del repositorio que cargue un artefacto que contenga la caché de herramientas del ejecutor hospedado en {% data variables.product.prodname_dotcom %}.

   En el ejemplo siguiente se muestra un flujo de trabajo que carga la caché de herramientas para un entorno de Ubuntu 22.04 mediante la acción `setup-node` con las versiones 10 y 12 de Node.js.

   ```yaml
   name: Upload Node.js 10 and 12 tool cache
   on: push
   jobs:
     upload_tool_cache:
       runs-on: ubuntu-22.04
       steps:
         - name: Clear any existing tool cache
           run: |
             mv "{% raw %}${{ runner.tool_cache }}" "${{ runner.tool_cache }}.old"{% endraw %}
             mkdir -p "{% raw %}${{ runner.tool_cache }}{% endraw %}"
         - name: Setup Node 10
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 10.x
         - name: Setup Node 12
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 12.x
         - name: Archive tool cache
           run: |
             cd "{% raw %}${{ runner.tool_cache }}{% endraw %}"
             tar -czf tool_cache.tar.gz *
         - name: Upload tool cache artifact
           uses: {% data reusables.actions.action-upload-artifact %}
           with:
             path: {% raw %}${{runner.tool_cache}}/tool_cache.tar.gz{% endraw %}
   ```
1. Descarga el artefacto del caché de la herramienta desde la ejecución del flujo de trabajo. Para obtener instrucciones sobre cómo descargar artefactos, vea "[Descarga de artefactos de flujo de trabajo](/actions/managing-workflow-runs/downloading-workflow-artifacts)".
1. Transfiere el artefacto del caché de la herramienta a tu ejecutor auto-hospedado y extráelo al directorio local del caché de la herramienta. El directorio de caché de herramientas predeterminado es `RUNNER_DIR/_work/_tool`. Si el ejecutor todavía no ha procesado ningún trabajo, es posible que tenga que crear los directorios `_work/_tool`.

    Después de extraer el artefacto del caché de la herramienta que se cargó en el ejemplo anterior, deberás tener una estructura de directorio en tu ejecutor auto-hospedado que sea similar al siguiente ejemplo:

    ```
    RUNNER_DIR
    ├── ...
    └── _work
        ├── ...
        └── _tool
            └── node
                ├── 10.22.0
                │   └── ...
                └── 12.18.3
                    └── ...
    ```

Ahora el ejecutor autohospedado sin acceso a Internet debería poder usar la acción `setup-node`. Si experimentas algún problema, asegúrate de que hayas poblado el caché de la herramienta correcta para tus flujos de trabajo. Por ejemplo, si tiene que usar la acción `setup-python`, necesitará rellenar la caché de herramientas con el entorno de Python que quiera utilizar.
