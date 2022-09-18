---
title: Construir y probar Java con Gradle
intro: Puedes crear un flujo de trabajo de integración continua (CI) en acciones de GitHub para construir y probar tu proyecto Java con Gradle.
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-gradle
  - /actions/guides/building-and-testing-java-with-gradle
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Gradle
shortTitle: Build & test Java & Gradle
ms.openlocfilehash: 00fa6888a45dda090df51260795717bc994be022
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410447'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra cómo crear un flujo de trabajo que realiza la integración continua (CI) para tu proyecto Java usando el sistema de construcción Gradle. El flujo de trabajo que creas te permitirá ver cuándo las confirmaciones de una solicitud de extracción causan la construcción o las fallas de prueba en tu rama por defecto; este enfoque puede ayudar a garantizar que tu código siempre sea correcto. Puedes extender tu flujo de trabajo de CI para {% ifversion actions-caching %}almacenar en caché los archivos y{% endif %} cargar artefactos desde una ejecución de flujo de trabajo.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} tienen una caché de herramientas con software preinstalado que incluye kits de desarrollo de Java (JDK) y Gradle. Si desea obtener una lista del software y las versiones preinstaladas para JDK y Gradle, consulte "[Especificaciones de ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Requisitos previos

Deberías estar familiarizado con YAML y la sintaxis para las {% data variables.product.prodname_actions %}. Para más información, consulte:
- "[Sintaxis de flujos de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

Te recomendamos que tengas una comprensión básica de Java y del marco de Gradle. Para obtener más información, consulre "[Introducción](https://docs.gradle.org/current/userguide/getting_started.html)" en la documentación de Gradle.

{% data reusables.actions.enterprise-setup-prereq %}

## Utilizar el flujo de trabajo inicial de Gradle

{% data variables.product.prodname_dotcom %} Proporciona un flujo de trabajo inicial de Gradle que funciona con la mayoría de los proyectos de Java basados en Gradle. Para obtener más información, consulte el [flujo de trabajo de inicio de Gradle](https://github.com/actions/starter-workflows/blob/main/ci/gradle.yml).

Para comenzar rápidamente, puedes elegir el flujo de trabajo inicial de Gradle preconfigurado cuando crees un flujo de trabajo nuevo. Para obtener más información, consulte el "[Inicio rápido de {% data variables.product.prodname_actions %}](/actions/quickstart)".

También puede agregar este flujo de trabajo manualmente si crea un archivo en el directorio `.github/workflows` del repositorio.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Build with Gradle
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: build
```

Este flujo de trabajo realiza los siguientes pasos:

1. El paso `checkout` descarga una copia del repositorio en el ejecutor.
2. El paso `setup-java` configura el JDK de Java 11 mediante Adoptium.
3. El paso de "Validar el wrapper de Gradle" valida la sumas de verificaciones de los archivos JAR del wrapper de Gradle que estén presentes en el árbol fuente.
4. El paso "Build with Gradle" realiza una compilación mediante la acción `gradle/gradle-build-action` proporcionada por la organización de Gradle en {% data variables.product.prodname_dotcom %}. La acción se encarga de invocar a Gradle, recolectar los resultados y almacenar el estado en el caché entre los jobs. Para obtener más información, vea [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action).

Los flujos de trabajo iniciales predeterminados son un punto de partida excelente para crear tu flujo de trabajo de prueba y de compilación y puedes personalizarlos de acuerdo con las necesidades de tu proyecto.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Construir y probar tu código

Puedes usar los mismos comandos que usas de forma local para construir y probar tu código.

El flujo de trabajo de inicio ejecutará la tarea `build` de manera predeterminada. En la configuración de Gradle predeterminada, este comando descargará las dependencias, construirá clases, ejecutará pruebas y empaquetará las clases en su formato distribuible, por ejemplo, un archivo JAR.

Si usas diferentes comandos para construir tu proyecto, o si quieres usar una tarea diferente, puedes especificarlo. Por ejemplo, puede que quiera ejecutar la tarea `package` configurada en el archivo _ci.gradle_.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Validate Gradle wrapper
    uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
  - name: Run the Gradle package task
    uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
    with:
      arguments: -b ci.gradle package
```

{% ifversion actions-caching %}

## Almacenar dependencias en caché

Las dependencias de compilación se pueden almacenar en caché para acelerar las ejecuciones de flujo de trabajo. Cuando se ejecuta correctamente, el `gradle/gradle-build-action` almacena en caché las partes importantes del directorio principal del usuario de Gradle. En los jobs futuros, el caché se restablecerá para que los scripts de compilación no necesiten recompilarse y las dependencias no necesiten descargarse desde los repositorios de paquetes remotos.

El almacenamiento en caché está habilitado de manera predeterminada cuando se usa la acción `gradle/gradle-build-action`. Para más información, vea [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action#caching).

{% endif %}

## Empaquetar datos de flujo de trabajo como artefactos

Una vez que tu compilación haya tenido éxito y tus pruebas hayan pasado, es posible que desees cargar los paquetes Java resultantes como un artefacto de construcción. Esto almacenará los paquetes compilados como parte de la ejecución del flujo de trabajo y te permitirá descargarlos. Los artefactos pueden ayudarte a probar y depurar solicitudes de extracción en tu entorno local antes de que se fusionen. Para más información, vea "[Conservación de datos de flujo de trabajo mediante artefactos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

Normalmente, Gradle creará archivos de salida como JAR, EAR o WAR en el directorio `build/libs`. Puede cargar el contenido de ese directorio mediante la acción `upload-artifact`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Validate Gradle wrapper
    uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
  - name: Build with Gradle
    uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
    with:
      arguments: build
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: build/libs
```
