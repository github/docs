---
title: Construir y probar Java con Ant
intro: Puedes crear un flujo de trabajo de integración continua (CI) en Acciones de GitHub para construir y probar tu proyecto Java con Ant.
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-ant
  - /actions/guides/building-and-testing-java-with-ant
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Ant
shortTitle: Build & test Java & Ant
ms.openlocfilehash: d1e73fdce7bf23bf1b86ec3eb4d0f8acd9b6d292
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091897'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra cómo crear un flujo de trabajo que realiza integración continua (CI) para tu proyecto de Java por medio del sistema de construcción Ant. El flujo de trabajo que creas te permitirá ver cuándo las confirmaciones de una solicitud de extracción causan la construcción o las fallas de prueba en tu rama por defecto; este enfoque puede ayudar a garantizar que tu código siempre sea correcto. Puedes ampliar tu flujo de trabajo de CI para cargar artefactos desde una ejecución de flujo de trabajo.

Los ejecutores alojados en {% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} tienen una memoria caché de herramientas con software preinstalado, que incluye kits de desarrollo de Java (JDK) y Ant. A fin de obtener una lista de software y las versiones preinstaladas para JDK y Ant, vea "[Especificaciones de ejecutores alojados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Requisitos previos

Deberías estar familiarizado con YAML y la sintaxis para las {% data variables.product.prodname_actions %}. Para más información, consulte:
- "[Sintaxis de flujos de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

Recomendamos que tengas un conocimiento básico de Java y de la estructura de Ant. Para obtener más información, vea el [Manual de Apache Ant](https://ant.apache.org/manual/).

{% data reusables.actions.enterprise-setup-prereq %}

## Utilizar el flujo de trabajo inicial de Ant

{% data variables.product.prodname_dotcom %} proporciona un flujo de trabajo inicial de Ant que funcionará para la mayoría de los proyectos de Java basados en Ant. Para obtener más información, vea el [flujo de trabajo de inicio de Ant](https://github.com/actions/starter-workflows/blob/main/ci/ant.yml).

Para comenzar rápidamente, puedes elegir el flujo de trabajo inicial de Ant preconfigurado cuando crees un nuevo flujo de trabajo. Para obtener más información, vea el "[Inicio rápido de {% data variables.product.prodname_actions %}](/actions/quickstart)".

También puede agregar este flujo de trabajo manualmente si crea un archivo en el directorio `.github/workflows` del repositorio.

```yaml{:copy}
name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up JDK 11
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Build with Ant
        run: ant -noinput -buildfile build.xml
```

Este flujo de trabajo realiza los siguientes pasos:

1. El paso `checkout` descarga una copia del repositorio en el ejecutor.
2. El paso `setup-java` configura el JDK de Java 11 mediante Adoptium.
3. El paso "Compilar con Ant" ejecuta el destino predeterminado en `build.xml` en el modo no interactivo.

Los flujos de trabajo iniciales predeterminados son un punto de partida excelente para crear tu flujo de trabajo de prueba y de compilación y puedes personalizarlos de acuerdo con las necesidades de tu proyecto.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Construir y probar tu código

Puedes usar los mismos comandos que usas de forma local para construir y probar tu código.

El flujo de trabajo de inicio ejecutará el destino predeterminado especificado en el archivo _build.xml_.  Normalmente, tu objetivo predeterminado se configurará para crear clases, ejecutar pruebas y empaquetar clases en su formato distribuible, por ejemplo, un archivo JAR.

Si usas diferentes comandos para construir tu proyecto, o si deseas ejecutar un objetivo diferente, puedes especificarlos. Por ejemplo, puede que quiera ejecutar el destino `jar` configurado en el archivo `_build-ci.xml_`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Run the Ant jar target
    run: ant -noinput -buildfile build-ci.xml jar
```

## Empaquetar datos de flujo de trabajo como artefactos

Una vez que tu compilación haya tenido éxito y tus pruebas hayan pasado, es posible que desees cargar los paquetes Java resultantes como un artefacto de construcción. Esto almacenará los paquetes compilados como parte de la ejecución del flujo de trabajo y te permitirá descargarlos. Los artefactos pueden ayudarte a probar y depurar solicitudes de extracción en tu entorno local antes de que se fusionen. Para más información, vea "[Conservación de datos de flujo de trabajo mediante artefactos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

Ant normalmente creará archivos de salida como JAR, EAR o WAR en el directorio `build/jar`. Puede cargar el contenido de ese directorio mediante la acción `upload-artifact`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  
  - run: ant -noinput -buildfile build.xml
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: build/jar
```
