---
title: Introducción a codespaces de GitHub para el aprendizaje automático
shortTitle: Machine learning
intro: 'Obtén información sobre cómo trabajar en proyectos de aprendizaje automático con {% data variables.product.prodname_github_codespaces %} y sus herramientas de fábrica.'
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: 905d5b14bfba5e47d1fdfdd7f0be75b16750652d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158921'
---
## Introducción

En esta guía se presenta el aprendizaje automático con {% data variables.product.prodname_github_codespaces %}. Crearás un clasificador de imágenes simple, obtendrás información sobre algunas de las herramientas que vienen preinstaladas en {% data variables.product.prodname_github_codespaces %}, configurarás el entorno de desarrollo para NVIDIA CUDA y abrirás el codespace en JupyterLab.

## Creación de un clasificador de imágenes simple

Usaremos un cuaderno de Jupyter Notebook para crear un clasificador de imágenes simple. 

Los cuadernos de Jupyter son conjuntos de celdas que se pueden ejecutar una después de otra. El cuaderno que usaremos incluye una serie de celdas que crean un clasificador de imágenes mediante [PyTorch](https://pytorch.org/). Cada celda es una fase diferente de ese proceso: descarga un conjunto de datos, configura una red neuronal, entrena un modelo y, a continuación, prueba ese modelo.

Ejecutaremos todas las celdas, en secuencia, para realizar todas las fases de creación del clasificador de imágenes. Cuando hacemos esto, Jupyter vuelve a guardar la salida en el cuaderno para que pueda examinar los resultados.

### Crear un codespace

1. Vaya al repositorio de plantillas [github/codespaces-jupyter](https://github.com/github/codespaces-jupyter).
{% data reusables.codespaces.open-template-in-codespace-step %}

Se abre un codespace para esta plantilla en una versión basada en web de {% data variables.product.prodname_vscode %}.

### Apertura del cuaderno clasificador de imágenes 

La imagen de contenedor predeterminada que usan los datos {% data variables.product.prodname_github_codespaces %} incluye un conjunto de bibliotecas de aprendizaje automático preinstaladas en el codespace. Por ejemplo, Numpy, Pandas, SciPy, Matplotlib, seaborn, scikit-learn, Keras, PyTorch, Requests y Plotly. Para obtener más información sobre la imagen predeterminada, consulta "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)" y [el `devcontainers/images` repositorio](https://github.com/devcontainers/images/tree/main/src/universal).

1. En el editor de {% data variables.product.prodname_vscode_shortname %}, cierra las pestañas "Introducción" que se muestran.
1. Apertura del archivo del cuaderno `notebooks/image-classifier.ipynb`.

### Creación de un clasificador de imágenes

El cuaderno clasificador de imágenes contiene todo el código que necesitas para descargar un conjunto de datos, entrenar una red neuronal y evaluar su rendimiento.

1. Haz clic en **Ejecutar todo** para ejecutar todas las celdas del cuaderno.

   ![Captura de pantalla del botón Ejecutar todo](/assets/images/help/codespaces/jupyter-run-all.png)

1. Desplázate hacia abajo para ver la salida de cada celda.

   ![Captura de pantalla del paso 3 en el editor](/assets/images/help/codespaces/jupyter-notebook-step3.png)

## Configuración de NVIDIA CUDA para el codespace

Algunos software requieren que instales NVIDIA CUDA para usar la GPU del codespace. En este caso, puedes crear tu propia configuración personalizada, mediante un archivo `devcontainer.json` y especificar que CUDA debe instalarse. Para obtener más información sobre las configuraciones personalizadas, consulta "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)".

{% note %}

**Nota**: Para obtener detalles completos del script que se ejecuta al agregar la característica `nvidia-cuda`, consulta [el repositorio de características/contenedores de desarrollo](https://github.com/devcontainers/features/tree/main/src/nvidia-cuda).

{% endnote %}

1. En un codespace, abre el archivo `.devcontainer/devcontainer.json` en el editor.
1. Agrega un objeto de nivel `features` superior con el siguiente contenido:

   ```json{:copy}
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   ```

   Para obtener más información sobre el objeto `features`, consulta [Especificación de contenedores de desarrollo](https://containers.dev/implementors/features/#devcontainer-json-properties).

   Si usas el archivo `devcontainer.json` del repositorio clasificador de imágenes que creaste para este tutorial, el archivo `devcontainer.json` tendrá el siguiente aspecto:

   ```json
   {
     "customizations": {
       "vscode": {
         "extensions": [
           "ms-python.python",
           "ms-toolsai.jupyter"
         ]
       }
     },
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   }
   ```

1. Guarde el cambio.
{% data reusables.codespaces.rebuild-command %} Se volverá a generar el contenedor de codespace. Esto tardará varios minutos. Cuando se completa la recompilación, el codespace se vuelve a abrir automáticamente.
1. Publica el cambio en un repositorio para que CUDA se instale en los nuevos codespaces que crees a partir de este repositorio en el futuro. Para obtener más información, consulta "[Creación de un codespace a partir de una plantilla](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-vs-code)".

## Apertura de un codespace en JupyterLab

Puedes abrir el codespace en JupyterLab desde la página "Tus codespaces" en [github.com/codespaces](https://github.com/codespaces) o mediante {% data variables.product.prodname_cli %}. Para obtener más información, consulta "[Apertura de un codespece existente](/codespaces/developing-in-codespaces/opening-an-existing-codespace)".

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}
