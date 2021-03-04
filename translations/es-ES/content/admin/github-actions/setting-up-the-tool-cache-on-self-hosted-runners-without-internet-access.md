---
title: Configurar el caché de la herramienta en ejecutores auto-hospedados sin acceso a internet
intro: 'Para utilizar las acciones de `actions/setup` que se incluyen en los ejecutores auto-hospedados sin acceso a internet, primero debes poblar el caché de la herramienta del ejecutor para tus flujos de trabajo.'
redirect_from:
  - /enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Acerca de las acciones de configuración incluídas y el caché de la herramienta del ejecutor

{% data reusables.actions.enterprise-no-internet-actions %}

La mayoría de las acciones de autoría de {% data variables.product.prodname_dotcom %} se agrupan automáticamente con {% data variables.product.prodname_ghe_server %}. Sin embargo, los ejecutores auto-hospedados sin acceso a internet requerirán que se les configure un poco antes de que puedan utilizar las acciones de `actions/setup-LANGUAGE` incluídas, tal como `setup-node`.

Las acciones de `actions/setup-LANGUAGE` habitualmente necesitan acceso a internet para descargar los binarios de ambiente requeridos en el caché de la herramienta del ejecutor. Los ejecutores auto-hospedados sin acceso a internet no pueden descargar los binarios, así que debes poblar el caché de la herramienta manualmente en el ejecutor.

Puedes poblar el caché de la herramienta del ejecutor si ejecutas un flujo de trabajo de {% data variables.product.prodname_actions %} en {% data variables.product.prodname_dotcom_the_website %} que cargue un caché de la herramienta del ejecutor hospedada en {% data variables.product.prodname_dotcom %}, la cual puedes transferir y extraer posteriormente en tu ejecutor auto-hospedado sin acceso a internet.

{% note %}

**Nota:** Solo puedes utilizar un caché de la herramienta del ejecutor hospedado en {% data variables.product.prodname_dotcom %} para un ejecutor auto-hospedado que tenga un sistema operativo y arquitectura idénticos. Por ejemplo, si estás utilizando un ejecutor hospedado en {% data variables.product.prodname_dotcom %} con `ubuntu-18.04` para generar un caché de la herramienta, tu ejecutor auto-hospedado también debe ser una máquina con Ubuntu 18.04 de 64 bits. Para obtener más información sobre los ejecutores hospedados en {% data variables.product.prodname_dotcom %}, consulta la sección "<a href="/actions/reference/virtual-environments-for-github-hosted-runners#supported-runners-and-hardware-resources" class="dotcom-only">Ambientes virtuales para los ejecutores hospedados en GitHub</a>".

{% endnote %}

### Prerrequisitos

* Determina qué ambientes de desarrollo necesitarán tus ejecutores auto-hospedados. El siguiente ejemplo demuestra cómo poblar el caché de la herramienta para la acción `setup-node`, utilizando las versiones 10 y 12 de Node.js.
* Accede a un repositorio en {% data variables.product.prodname_dotcom_the_website %} que puedas utilizar para ejecutar un flujo de trabajo.
* Accede al sistema de archivos de tu ejecutor auto-hospedado para poblar la carpeta del caché de la herramienta.

### Poblar el caché de la herramienta para un ejecutor auto-hospedado

1. En {% data variables.product.prodname_dotcom_the_website %}, navega a un repositorio que puedas utilizar para ejecutar un flujo de trabajo de {% data variables.product.prodname_actions %}.
1. Crea un archivo de flujo de trabajo nuevo en la carpeta `.github/workflows` del repositorio, el cual cargue un artefacto que contenga el caché de la herramienta del ejecutor hospedado en {% data variables.product.prodname_dotcom %}.

   El siguiente ejemplo muestra un flujo de trabajo que carga el caché de la herramienta para un ambiente de Ubuntu 18.04 utilizando la acción `setup-node` con las versiones 10 y 12 de Node.js.

   {% raw %}
   ```yaml
   name: Upload Node.js 10 and 12 tool cache
   on: push
   jobs:
     upload_tool_cache:
       runs-on: ubuntu-18.04
       steps:
         - name: Clear any existing tool cache
           run: |
             mv "${{ runner.tool_cache }}" "${{ runner.tool_cache }}.old"
             mkdir -p "${{ runner.tool_cache }}"
         - name: Setup Node 10
           uses: actions/setup-node@v1
           with:
             node-version: 10.x
         - name: Setup Node 12
           uses: actions/setup-node@v1
           with:
             node-version: 12.x
         - name: Archive tool cache
           run: |
             cd "${{ runner.tool_cache }}"
             tar -czf tool_cache.tar.gz *
         - name: Upload tool cache artifact
           uses: actions/upload-artifact@v2
           with:
             path: ${{runner.tool_cache}}/tool_cache.tar.gz
   ```
   {% endraw %}
1. Descarga el artefacto del caché de la herramienta desde la ejecución del flujo de trabajo. Para obtener instrucciones sobre còmo descargar artefactos, consulta la secciòn "[Descargar artefactos de los flujos de trabajo](/actions/managing-workflow-runs/downloading-workflow-artifacts)".
1. Transfiere el artefacto del caché de la herramienta a tu ejecutor auto-hospedado y extráelo al directorio local del caché de la herramienta. El directorio predeterminado del caché de la herramienta es `RUNNER_DIR/_work/_tool`. Si el ejecutor no ha procesado ningún job aún, podrías necesitar crear los directorios `_work/_tool`.

    Después de extraer el artefacto del caché de la herramienta que se cargó en el ejemplo anterior, deberás tener una estructura de directorio en tu ejecutor auto-hospedado que sea similar al siguiente ejemplo:

    ```
    RUNNER_DIR
    ├── ...
    └── _work
        ├── ...
        └── _tool
            └── node
                ├── 10.22.0
                │   └── ...
                └── 12.18.3
                    └── ...
    ```

Tu ejecutor auto-hospedado sin acceso a internet debería ahora poder utilizar la acción `setup-node`. Si experimentas algún problema, asegúrate de que hayas poblado el caché de la herramienta correcta para tus flujos de trabajo. Por ejemplo, si necesitas utilizar la acción `setup-python`, necesitarás poblar el caché de la herramienta con el ambiente de Python que quieras utilizar.
