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
shortTitle: Crear & probar con Java & Gradle
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra cómo crear un flujo de trabajo que realiza la integración continua (CI) para tu proyecto Java usando el sistema de construcción Gradle. El flujo de trabajo que creas te permitirá ver cuándo las confirmaciones de una solicitud de extracción causan la construcción o las fallas de prueba en tu rama por defecto; este enfoque puede ayudar a garantizar que tu código siempre sea correcto. Puedes extender tu flujo de IC a {% ifversion actions-caching %}los archivos de caché y{% endif %} cargar artefactos desde una ejecución de grupo de trabajo.

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %}
Los ejecutores alojados {% data variables.product.prodname_dotcom %} tienen una caché de herramientas con software preinstalado, que incluye kits de desarrollo de Java (JDK) y Gradle. Para encontrar una lista de software y de las versiones pre-instaladas de JDK y de Gradle, consulta la sección "[Especificaciones para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Prerrequisitos

Deberías estar familiarizado con YAML y la sintaxis para las {% data variables.product.prodname_actions %}. Para obtener más información, consulta:
- "[Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Aprende sobre las {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

Te recomendamos que tengas una comprensión básica de Java y del marco de Gradle. Para obtener más información, consulta [Empezar](https://docs.gradle.org/current/userguide/getting_started.html) en la documentación de Gradle.

{% data reusables.actions.enterprise-setup-prereq %}

## Utilizar el flujo de trabajo inicial de Gradle

{% data variables.product.prodname_dotcom %} Proporciona un flujo de trabajo inicial de Gradle que funciona con la mayoría de los proyectos de Java basados en Gradle. Para obtener más información, consulta el [Flujo de trabajo inicial de Gradle](https://github.com/actions/starter-workflows/blob/main/ci/gradle.yml).

Para comenzar rápidamente, puedes elegir el flujo de trabajo inicial de Gradle preconfigurado cuando crees un flujo de trabajo nuevo. Para obtener más información, consulta la "[guía rápida de {% data variables.product.prodname_actions %}](/actions/quickstart)".

También puedes agregar este flujo de trabajo de forma manual al crear un archivo nuevo en el directorio de tu repositorio `.github/workflows`.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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

1. El paso `checkout (comprobación)` descarga una copia de tu repositorio en el ejecutor.
2. El paso `setup-java` configura el JDK de Java 11 por Adoptium.
3. El paso de "Validar el wrapper de Gradle" valida la sumas de verificaciones de los archivos JAR del wrapper de Gradle que estén presentes en el árbol fuente.
4. El paso de "Build with Gradle" crea una compilación utilizando la acción `gradle/gradle-build-action` que proporciona la organización Gadle en {% data variables.product.prodname_dotcom %}. La acción se encarga de invocar a Gradle, recolectar los resultados y almacenar el estado en el caché entre los jobs. Para obtener más información, consulta la sección [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action).

Los flujos de trabajo iniciales predeterminados son un punto de partida excelente para crear tu flujo de trabajo de prueba y de compilación y puedes personalizarlos de acuerdo con las necesidades de tu proyecto.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Construir y probar tu código

Puedes usar los mismos comandos que usas de forma local para construir y probar tu código.

El flujo de trabajo de inicio ejecutará la tarea `build` por defecto. En la configuración de Gradle predeterminada, este comando descargará las dependencias, construirá clases, ejecutará pruebas y empaquetará las clases en su formato distribuible, por ejemplo, un archivo JAR.

Si usas diferentes comandos para construir tu proyecto, o si quieres usar una tarea diferente, puedes especificarlo. Por ejemplo, es posible que desees ejecutar la tarea `package` que está configurada en tu archivo _ci.gradle_.

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

Tus dependencias de compilación se pueden guardar en caché para acelerar tus ejecuciones de flujo de trabajo. Después de una ejecución exitosa, la `gradle/gradle-build-action` guarda en caché las partes importantes del directorio principal del usuario de Gradle. En los jobs futuros, el caché se restablecerá para que los scripts de compilación no necesiten recompilarse y las dependencias no necesiten descargarse desde los repositorios de paquetes remotos.

El almacenamiento en caché se habilita predeterminadamente cuando se utiliza la acción `gradle/gradle-build-action`. Para obtener más información, consulta [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action#caching).

{% endif %}

## Empaquetar datos de flujo de trabajo como artefactos

Una vez que tu compilación haya tenido éxito y tus pruebas hayan pasado, es posible que desees cargar los paquetes Java resultantes como un artefacto de construcción. Esto almacenará los paquetes construidos como parte de la ejecución del flujo de trabajo y te permitirá descargarlos. Los artefactos pueden ayudarte a probar y depurar solicitudes de extracción en tu entorno local antes de que se fusionen. Para obtener más información, consulta "[Conservar datos de flujo de trabajo mediante artefactos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

Por lo general, Gradle creará archivos de salida como JAR, EAR o WAR en el directorio `build/libs`. Puedes cargar los contenidos de ese directorio utilizando la acción `upload-Artifact`.

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
