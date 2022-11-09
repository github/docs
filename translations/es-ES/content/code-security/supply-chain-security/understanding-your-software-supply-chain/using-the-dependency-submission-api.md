---
title: Uso de Dependency submission API
intro: 'Puedes usar Dependency submission API para enviar dependencias para proyectos, como las dependencias resueltas cuando se crea o compila un proyecto.'
shortTitle: Dependency submission API
topics:
  - API
  - Dependency graph
  - Dependencies
  - REST
versions:
  feature: dependency-submission-api
ms.openlocfilehash: f81967a46763d299afd14727cd884a36cb0b3d9c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880818'
---
{% data reusables.dependency-submission.dependency-submission-api-beta %}

## Acerca de Dependency submission API

{% data reusables.dependency-submission.about-dependency-submission %}

Las dependencias se envían a Dependency submission API en forma de instantánea. Una instantánea es un conjunto de dependencias asociadas a un SHA de confirmación y otros metadatos, que refleja el estado actual del repositorio para una confirmación. Para más información sobre Dependency submission API, consulta la [documentación de Dependency submission REST API](/rest/dependency-graph/dependency-submission).

## Envío de dependencias en tiempo de compilación

Puedes usar Dependency submission API en un flujo de trabajo de {% data variables.product.prodname_actions %} para enviar dependencias para tu proyecto cuando se compila. 

### Uso de acciones hechas previamente

La manera más sencilla de usar Dependency submission API es agregar una acción hecha previamente al repositorio que recopilará y convertirá la lista de dependencias al formato de instantánea requerido y enviará la lista a la API. Las acciones que completan estos pasos para varios ecosistemas están disponibles en {% data variables.product.prodname_marketplace %} y se crearán más acciones durante el transcurso de la versión beta y más adelante. Encuentra vínculos a las acciones que actualmente están disponibles en la tabla que se muestra a continuación:

Ecosistema | Acción |
--- | --- |
Go | [Envío de dependencias de Go](https://github.com/actions/go-dependency-submission)

Por ejemplo, el flujo de trabajo de [Envío de dependencias de Go](https://github.com/actions/go-dependency-submission) siguiente calcula las dependencias de un destino de compilación de Go (un archivo de Go con una función `main`) y envía la lista a Dependency Submission API. 

```yaml

name: Go Dependency Submission
on:
  push:
    branches:
      - main
      
# The API requires write permission on the repository to submit dependencies
permissions:
  contents: write

# Envionment variables to configure Go and Go modules. Customize as necessary
env:
  GOPROXY: '' # A Go Proxy server to be used
  GOPRIVATE: '' # A list of modules are considered private and not requested from GOPROXY
jobs:
  go-action-detection:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}
        
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: ">=1.18.0"
          
      - name: Run snapshot action
        uses: @actions/go-dependency-submission@v1
        with:
            # Required: Define the repo path to the go.mod file used by the
            # build target
            go-mod-path: go-example/go.mod
            #
            # Optional. Define the repo path of a build target,
            # a file with a `main()` function.
            # If undefined, this action will collect all dependencies
            # used by all build targets for the module. This may
            # include Go dependencies used by tests and tooling.
            go-build-target: go-example/cmd/octocat.go

```
### Creación de una acción propia

De manera alternativa, puedes escribir tu propia acción para enviar dependencias para el proyecto en tiempo de compilación. El flujo de trabajo debe:

  1. Generar una lista de dependencias para el proyecto.
  2. Traducir la lista de dependencias al formato de instantánea que Dependency submission API acepta. Para más información sobre el formato, consulta los parámetros de cuerpo para la operación "Crear una instantánea de repositorio" de la API en la [documentación de Dependency submission REST API](/rest/dependency-graph/dependency-submission).
  3. Enviar la lista de dependencias con formato a Dependency submission API.

{% data variables.product.product_name %} mantiene el [kit de herramientas de envío de dependencias](https://github.com/github/dependency-submission-toolkit), una biblioteca de TypeScript que te ayuda a crear tu propia acción de Acciones de GitHub para enviar dependencias a Dependency submission API. Para más información sobre cómo escribir una acción, consulta "[Creación de acciones](/actions/creating-actions)".
