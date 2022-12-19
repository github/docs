---
title: Crear flujos de trabajo iniciales para tu organización
shortTitle: Creating starter workflows
intro: Aprende cómo puedes crear flujos de trabajo iniciales para ayudar a las personas de tu equipo a agregar flujos de trabajo con mayor facilidad.
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
  - /actions/learn-github-actions/creating-workflow-templates
  - /actions/learn-github-actions/creating-starter-workflows-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
ms.openlocfilehash: cbaecefc90f3593b8883c7ccad5256b4addf972c
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884193'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Información general

{% data reusables.actions.workflow-organization-templates %}

{% data reusables.actions.starter-workflow-categories %}

## Crear un flujo de trabajo inicial

Los usuarios con acceso de escritura al repositorio `.github` de la organización pueden crear flujos de trabajo iniciales. Estos pueden utilizarse entonces por los miembros de las organizaciones que tienen permiso para crear flujos de trabajo.

{% ifversion fpt %} Los flujos de trabajo iniciales creados por los usuarios solo se pueden usar para crear flujos de trabajo en repositorios públicos. Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} también pueden utilizar flujos de trabajo iniciales para crear flujos de trabajo en repositorios privados. Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/learn-github-actions/creating-starter-workflows-for-your-organization).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %} {% note %}

**Nota:** Para evitar la duplicación entre los flujos de trabajo iniciales, puedes llamar flujos de trabajo reutilizables desde dentro de un flujo de trabajo. Esto puede ayudar a que tus flujos de trabajo se mantengan más fácilmente. Para obtener más información, consulta "[Reutilización de flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".

{% endnote %} {% endif %}

Este procedimiento demuestra cómo crear un flujo de trabajo inicial y archivo de metadatos. El archivo de metadatos describe cómo se presentarán los flujos de trabajo inicial a los usuarios cuando estén creando uno nuevo.

1. Si aún no existe, crea un nuevo repositorio público denominado `.github` en la organización.
2. Cree un directorio llamado `workflow-templates`.
3. Crea el nuevo archivo de flujo de trabajo dentro del directorio `workflow-templates`.

   Si necesitas hacer referencia a la rama predeterminada de un repositorio, puedes usar el marcador de posición `$default-branch`. Cuando un flujo de trabajo se crea, el marcador de posición se reemplazará automáticamente con el nombre de la rama predeterminada del repositorio.

   Por ejemplo, este archivo denominado `octo-organization-ci.yml` muestra un flujo de trabajo básico.

   ```yaml
   name: Octo Organization CI

   on:
     push:
       branches: [ $default-branch ]
     pull_request:
       branches: [ $default-branch ]

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
         - uses: {% data reusables.actions.action-checkout %}

         - name: Run a one-line script
           run: echo Hello from Octo Organization
   ```
4. Crea un archivo de metadatos dentro del directorio `workflow-templates`. El archivo de metadatos debe tener el mismo nombre que el archivo de flujo de trabajo, pero en lugar de la extensión `.yml`, se le tiene que anexar `.properties.json`. Por ejemplo, un archivo denominado `octo-organization-ci.properties.json` contiene los metadatos del archivo de flujo de trabajo denominado `octo-organization-ci.yml`.
   ```yaml
   {
       "name": "Octo Organization Workflow",
       "description": "Octo Organization CI starter workflow.",
       "iconName": "example-icon",
       "categories": [
           "Go"
       ],
       "filePatterns": [
           "package.json$",
           "^Dockerfile",
           ".*\\.md$"
       ]
   }
   ```
   * `name` - **Obligatorio.** El nombre del flujo de trabajo. Esta se muestra en la lista de flujos de trabajo disponibles.
   * `description` - **Obligatorio.** La descripción del flujo de trabajo. Esta se muestra en la lista de flujos de trabajo disponibles.
   * `iconName` - **Opcional.** Especifica un icono para el flujo de trabajo que se muestra en la lista de flujos de trabajo. `iconName` debe ser el nombre de un archivo SVG, sin la extensión de nombre de archivo, almacenado en el directorio `workflow-templates`. Por ejemplo, se hace referencia a un archivo SVG denominado `example-icon.svg` como `example-icon`.
   * `categories` - **Opcional.** Define la categoría de idioma del flujo de trabajo. Cuando un usuario ve los flujos iniciales disponibles de un repositorio, aquellos que coincidan con el lenguaje identificado del proyecto se mostrarán más destacadamente. Para obtener información sobre las categorías de idioma disponibles, consulta https://github.com/github/linguist/blob/master/lib/linguist/languages.yml.
   * `filePatterns` - **Opcional.** Permite usar el flujo de trabajo si el repositorio del usuario tiene un archivo en su directorio raíz que coincide con una expresión regular definida.

Para agregar otro flujo de trabajo inicial, agrega los archivos al mismo directorio `workflow-templates`. Por ejemplo:

![Archivos de flujo de trabajo](/assets/images/help/images/workflow-template-files.png)

## Pasos siguientes

Para continuar el aprendizaje sobre {% data variables.product.prodname_actions %}, consulta "[Uso de flujos de trabajo iniciales](/actions/using-workflows/using-starter-workflows)".
