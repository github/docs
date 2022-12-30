---
title: Realización de una recompilación completa de un contenedor
intro: 'Si hay poco espacio en disco o quieres asegurarte de que la configuración del contenedor de desarrollo funcionará en los nuevos codespaces, puedes realizar una recompilación completa de un contenedor.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Full rebuilds
ms.openlocfilehash: f844d5f92073adf01c3b1a1100e6fe1912b2d7ad
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180850'
---
## Acerca de la recompilación de un contenedor

Cuando trabajas en un codespace, el entorno de desarrollo es un contenedor Docker que se ejecuta en una máquina virtual. Si realizas cambios en la configuración del contenedor de desarrollo desde un codespace y deseas aplicar esos cambios al codespace actual, debes recompilar el contenedor.

De forma predeterminada, al recompilar un contenedor, {% data variables.product.prodname_github_codespaces %} acelerará el proceso de compilación mediante la reutilización de imágenes almacenadas en caché de compilaciones anteriores del contenedor. Normalmente, esta es la forma más rápida de implementar cambios en la configuración del contenedor de desarrollo, por los siguientes motivos.
- {% data variables.product.prodname_github_codespaces %} puede reutilizar imágenes de la memoria caché en lugar de volver a extraerlas de los registros de contenedor.
- Es posible que las partes de la configuración del contenedor de desarrollo que definen cómo se compila el contenedor, como las características del contenedor de desarrollo y las instrucciones de Dockerfile, ya se hayan implementado en capas de imagen de la memoria caché, por lo que no tendrás que esperar a que estos procesos se vuelvan a ejecutar. (Sin embargo, los comandos de la configuración que se ejecutan después de compilar el contenedor, como `onCreateCommand`, se ejecutarán de nuevo).

En ocasiones, puede que desees realizar una recompilación completa del contenedor. Con una recompilación completa, {% data variables.product.prodname_github_codespaces %} limpia todos los contenedores, las imágenes y los volúmenes de Docker de la memoria caché y, a continuación, recompila el contenedor con las imágenes recién extraídas. Toda la configuración definida en la configuración se volverá a ejecutar, generando nuevas capas de imagen. Es posible que desees realizar una recompilación completa después de muchas iteraciones de recompilación del contenedor con imágenes almacenadas en caché, en situaciones como las siguientes.

- Quieres asegurarte de que la configuración definida en la configuración no depende de las imágenes almacenadas en caché y que se ejecutará según sea necesario cuando alguien cree un codespace basado en la configuración. Por ejemplo, es posible que se haya quitado una dependencia de la imagen base desde que se extrajo por última vez en el codespace.
- Quieres liberar el espacio en disco usado por la memoria caché, por ejemplo, si tienes poco espacio en disco o quieres minimizar los cargos de almacenamiento. La memoria caché de imágenes puede consumir una cantidad significativa de espacio en disco si has cambiado la imagen base varias veces, si has realizado un gran número de cambios iterativos en la configuración o si ejecutas varios contenedores con Docker Compose.

## Realización de una compilación completa

Puedes realizar una recompilación completa en {% data variables.product.prodname_vscode %}.

{% data reusables.codespaces.command-pallette %}
1. Comienza a escribir "Recompilar" y selecciona **Codespaces: Recompilación completa del contenedor**.

   ![Captura de pantalla del comando Recompilación completa del contenedor en la paleta de comandos](/assets/images/help/codespaces/codespaces-rebuild-full.png)

## Conservación de datos durante una recompilación completa

Los archivos y las carpetas contenidos en el directorio `/workspaces` del codespace siempre se conservan durante una recompilación. No es necesario cambiar ni agregar ninguna configuración para conservar el contenido de este directorio durante una recompilación completa.

Si necesitas conservar archivos fuera del directorio `/workspaces` durante una recompilación completa, puedes crear, en la ubicación deseada del contenedor, un vínculo simbólico (symlink) en el directorio persistente. Por ejemplo, en el directorio `/workspaces/.devcontainer`, puede crear un directorio `config` que se conservará en una recompilación. Después, puede vincular de forma simbólica el directorio `config` y su contenido como `postCreateCommand` en el archivo `devcontainer.json`.

```json  
{
    "image": "mcr.microsoft.com/vscode/devcontainers/base:alpine",
    "postCreateCommand": ".devcontainer/postCreate.sh"
}
```

En el archivo de ejemplo `postCreate.sh` siguiente, el contenido del directorio `config` se vincula simbólicamente al directorio principal.

```bash
#!/bin/bash
ln -sf $PWD/.devcontainer/config $HOME/config && set +x
```

## Información adicional
- [Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)
