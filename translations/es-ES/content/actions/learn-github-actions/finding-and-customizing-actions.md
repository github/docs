---
title: Encontrar y personalizar las acciones
shortTitle: Finding and customizing actions
intro: 'Las acciones son los componentes básicos que hacen funcionar a tu flujo de trabajo. Un flujo de trabajo puede contener acciones que cree la comunidad, o puedes crear tus propias acciones directamente dentro del repositorio de tu aplicación. Esta guía te mostrará cómo descubrir, utilizar y personalizar las acciones.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
  - /actions/getting-started-with-github-actions/using-actions-from-github-marketplace
  - /actions/getting-started-with-github-actions/using-community-workflows-and-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Fundamentals
ms.openlocfilehash: cb2b8bb24e044bd559b0823ec7b0e4be7be1becb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063798'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Información general

Las acciones que utilizas en tu flujo de trabajo pueden definirse en:

- El mismo repositorio que tu archivo de flujo de trabajo{% ifversion internal-actions %}
- Un repositorio interno con la mismo cuenta empresarial que se configuró para permitir el acceso a los flujos de trabajo{% endif %}
- Cualquier repositorio público
- Una imagen del contenedor Docker publicada en Docker Hub

{% data variables.product.prodname_marketplace %} es una ubicación central para que busque acciones creadas por la comunidad de {% data variables.product.prodname_dotcom %}.{% ifversion fpt or ghec %} [En la página {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/actions/) puede filtrar las acciones por categoría. {% endif %}

{% data reusables.actions.enterprise-marketplace-actions %}

{% ifversion fpt or ghec %}

## Buscar las acciones de Marketplace en el editor de flujo de trabajo

Puedes buscar acciones manualmente o por coincidencia exacta directamente en el editor de flujo de datos de tu repositorio. Desde la barra lateral, puedes buscar una acción específica, ver las acciones destacadas, y buscar manualmente las categorías destacadas. También puedes ver la cantidad de estrellas que una acción ha recibido desde la comunidad {% data variables.product.prodname_dotcom %}.

1. En tu repositorio, navega hasta el archivo de flujo de trabajo que deseas editar.
1. En la esquina superior derecha de la vista del archivo, haga clic en {% octicon "pencil" aria-label="The edit icon" %} para abrir el editor de flujos de trabajo.
   ![Botón para editar un archivo de flujo de trabajo](/assets/images/help/repository/actions-edit-workflow-file.png)
1. A la derecha del editor, utiliza la barra lateral de {% data variables.product.prodname_marketplace %} para buscar las acciones. Las acciones con la insignia de {% octicon "verified" aria-label="The verified badge" %} indican que {% data variables.product.prodname_dotcom %} verificó que el creador de la acción es una organización asociada.
   ![Barra lateral del flujo de trabajo de Marketplace](/assets/images/help/repository/actions-marketplace-sidebar.png)

## Agregar una acción a tu flujo de trabajo

Puedes agregar una acción a tu flujo de trabajo si la referencias en tu archivo de flujo de trabajo. 

Puedes ver las acciones referenciadas en tus flujos de trabajo de {% data variables.product.prodname_actions %} como dependencias en la gráfica de dependencias del repositorio que contiene tus flujos de trabajo. Para más información, vea "[Acerca del gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6269 %}

{% note %}

**Nota:** Para mejorar la seguridad, en {% data variables.product.prodname_actions %} los redireccionamientos de acciones están en desuso. Esto significa que, cuando cambie el propietario o el nombre del repositorio de una acción, cualquier flujo de trabajo que la utilizara con el nombre anterior, fallará.

{% endnote %}

{% endif %}

### Agregar una acción desde {% data variables.product.prodname_marketplace %}

Las páginas de listado de acciones incluyen la versión de la acción y la sintaxis de flujo de trabajo que se requiere para utilizar dicha acción. Para mantener estable a tu flujo de trabajo, aún cuando se hagan actualizaciones en una acción, puedes referenciar la versión de la acción a utilizar si especificas el número de etiqueta de Git o de Docker en tu archivo de flujo de trabajo.

1. Navega hasta la acción que deseas usar en tu flujo de trabajo.
1. En "Instalación", haga clic en {% octicon "clippy" aria-label="The edit icon" %} para copiar la sintaxis del flujo de trabajo.
   ![Ver descripción de la acción](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. Pega la sintaxis como un nuevo paso en tu flujo de trabajo. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)".
1. Si la accion requiere que proprociones información de entrada, configúrala en tu flujo de trabajo. Para obtener información sobre las entradas que puede necesitar una acción, vea "[Uso de entradas y salidas con una acción](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action)".

{% data reusables.dependabot.version-updates-for-actions %}

{% endif %}

### Agregar una acción desde el mismo repositorio

Si una acción se define en el mismo repositorio donde el archivo de flujo de trabajo usa la acción, puede hacer referencia a la acción con la sintaxis `{owner}/{repo}@{ref}` o `./path/to/dir` en el archivo de flujo de trabajo.

Ejemplo de estructura de archivo de repositorio:

```
|-- hello-world (repository)
|   |__ .github
|       └── workflows
|           └── my-first-workflow.yml
|       └── actions
|           |__ hello-world-action
|               └── action.yml
```

Ejemplo de archivo de flujo de trabajo:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # This step checks out a copy of your repository.
      - uses: {% data reusables.actions.action-checkout %}
      # This step references the directory that contains the action.
      - uses: ./.github/actions/hello-world-action
```

El archivo `action.yml` se usa a fin de proporcionar metadatos para la acción. Obtenga información sobre el contenido de este archivo en "[Sintaxis de metadatos para Acciones de GitHub](/actions/creating-actions/metadata-syntax-for-github-actions)".

### Agregar una acción desde un repositorio diferente

Si se define una acción en un repositorio diferente al del archivo de flujo de trabajo, puede hacer referencia a la acción con la sintaxis `{owner}/{repo}@{ref}` en el archivo de flujo de trabajo.

La acción debe almacenarse en un repositorio público{% ifversion internal-actions %} o interno que se configure para permitir el acceso a los flujos de trabajo. Para más información, vea "[Uso compartido de acciones y flujos de trabajo con la empresa](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise)".{% else %}.{% endif %}

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: {% data reusables.actions.action-setup-node %}
```

### Hacer referencia a un contenedor en Docker Hub

Si se define una acción en una imagen de contenedor Docker publicada en Docker Hub, debe hacer referencia a la acción con la sintaxis `docker://{image}:{tag}` en el archivo de flujo de trabajo. Para proteger tu código y tus datos, te recomendamos que verifiques la integridad de la imagen del contenedor Docker de Docker Hub antes de usarla en tu flujo de trabajo.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

Para obtener algunos ejemplos de acciones de Docker, vea el [flujo de trabajo Docker-image.yml](https://github.com/actions/starter-workflows/blob/main/ci/docker-image.yml) y "[Creación de una acción de contenedor de Docker](/articles/creating-a-docker-container-action)".


## Utilizar la administración de lanzamientos para tus acciones personalizadas

Los creadores de una acción comunitaria tienen la opción de utilizar etiquetas, ramas, o valores de SHA para administrar los lanzamientos de la acción. Similar a cualquier dependencia, debes indicar la versión de la acción que te gustaría utilizar basándote en tu comodidad con aceptar automáticamente las actualizaciones para dicha acción.

Designarás la versión de la acción en tu archivo de flujo de trabajo. Revisa la documentación de la acción para encontrar información de su enfoque sobre la administración de lanzamientos, y para ver qué etiqueta, rama, o valor de SHA debes utilizar.

{% note %}

**Nota:** Se recomienda utilizar un valor SHA al usar acciones de terceros. Para más información, vea [Fortalecimiento de la seguridad para Acciones de GitHub](/actions/learn-github-actions/security-hardening-for-github-actions#using-third-party-actions).

{% endnote %}

### Usar etiquetas

Las etiquetas son útiles para que te permitan decidir cuándo cambiar entre versiones mayores y menores, pero son más efímeras y el mantenedor puede moverlas o borrarlas. Este ejemplo se muestra cómo seleccionar una acción etiquetada como `v1.0.1`:

```yaml
steps:
  - uses: actions/javascript-action@v1.0.1
```

### Utilizar SHAs

Si necesitas utilizar un versionamiento más confiable, debes utilizar el valor de SHA asociado con la versión de la acción. Los SHA son inmutables y, por lo tanto, más confiables que las etiquetas o las ramas. Sin embargo, este acercamiento significa que no recibirás actualizaciones para una acción automáticamente, incluyendo las correcciones de errores y actualizaciones de seguridad. Debes utilizar un valor SHA completo de la confirmación y no un valor abreviado. Este ejemplo apunta al SHA de una acción:

```yaml
steps:
  - uses: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

### Utilizar ramas

El especificar una rama destino para la acción significa que ésta siempre ejecutará la versión que se encuentre actualmente en dicha rama. Este acercamiento puede crear problemas si una actualización a la rama incluye cambios importantes. Este ejemplo tiene como destino una rama denominada `@main`:

```yaml
steps:
  - uses: actions/javascript-action@main
```

Para más información, vea "[Uso de la administración de versiones para acciones](/actions/creating-actions/about-actions#using-release-management-for-actions)".

## Utilizar entradas y salidas con una acción

Una acción a menudo acepta o requiere entradas y genera salidas que puedes utilizar. Por ejemplo, una acción podría requerir que especifiques una ruta a un archivo, el nombre de una etiqueta, u otros datos que utilizará como parte del procesamiento de la misma.

Para ver las entradas y salidas de una acción, compruebe `action.yml` o `action.yaml` en el directorio raíz del repositorio.

En este ejemplo `action.yml`, la palabra clave `inputs` define una entrada necesaria denominada `file-path` e incluye un valor predeterminado que se usará si no se especifica ninguno. La palabra clave `outputs` define una salida denominada `results-file`, que indica dónde buscar los resultados.

```yaml
name: "Example"
description: "Receives file and generates output"
inputs:
  file-path: # id of input
    description: "Path to test script"
    required: true
    default: "test-file.js"
outputs:
  results-file: # id of output
    description: "Path to results file"
```

{% ifversion ghae %}

## Utilizar las acciones que se incluyen en {% data variables.product.prodname_ghe_managed %}

De forma predeterminada, puede usar la mayoría de los acciones creadas por {% data variables.product.prodname_dotcom %} en {% data variables.product.prodname_ghe_managed %}. Para más información, vea "[Uso de acciones en {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/using-actions-in-github-ae)".
{% endif %}

## Pasos siguientes

Para más información sobre {% data variables.product.prodname_actions %}, vea "[Características esenciales de {% data variables.product.prodname_actions %}](/actions/learn-github-actions/essential-features-of-github-actions)".
