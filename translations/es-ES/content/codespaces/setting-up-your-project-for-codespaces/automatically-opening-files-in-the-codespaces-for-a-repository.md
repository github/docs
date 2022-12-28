---
title: Apertura automática de archivos en los codespaces de un repositorio
shortTitle: Automatically opening files
intro: 'Puedes establecer archivos concretos para que se abran automáticamente cada vez que alguien crea un codespace para el repositorio y abre dicho codespace en el cliente web de {% data variables.product.prodname_vscode %}.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: a57b76eda4bfc47071f3cfeade8f50afde9e01e6
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114109'
---
## Información general

Si hay un archivo concreto que resulta útil para que los usuarios vean cuándo crean un codespace para el repositorio, puedes establecer que este archivo se abra automáticamente en el cliente web de {% data variables.product.prodname_vscode_shortname %}. Esto se configura en el archivo de configuración del contenedor de desarrollo para el repositorio. 

El archivo, o los archivos, que especificas solo se abren la primera vez que se abre un codespace en el cliente web. Si la persona cierra los archivos especificados, esos archivos no se vuelven a abrir automáticamente la próxima vez que la persona abra o reinicie el codespace.

{% note %}

**Nota**: Esta automatización solo se aplica al cliente web de {% data variables.product.prodname_vscode_shortname %}, no a la aplicación de escritorio de {% data variables.product.prodname_vscode_shortname %} u otros editores compatibles.

{% endnote %}

## Establecimiento de los archivos que se abrirán automáticamente

{% data reusables.codespaces.edit-devcontainer-json %}
1. Edita el archivo `devcontainer.json`, agregando una propiedad `customizations.codespaces.openFiles`. La propiedad `customizations` reside en el nivel superior del archivo, dentro del objeto JSON envolvente. Por ejemplo:

   ```json{:copy}
   "customizations": {
     "codespaces": {
       "openFiles": [
         "README.md",
         "scripts/tsconfig.json",
         "docs/main/CODING_STANDARDS.md"
       ]
     }
   }
   ```

   El valor de la propiedad `openFiles` es una matriz de uno o varios archivos del repositorio. Las rutas de acceso son relativas a la raíz del repositorio (no se admiten rutas de acceso absolutas). Los archivos se abren en el cliente web en el orden especificado, con el primer archivo de la matriz mostrado en el editor.
   
1. Guarda el archivo y confirma tus cambios a la rama requerida del repositorio.

## Información adicional

- "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)"
