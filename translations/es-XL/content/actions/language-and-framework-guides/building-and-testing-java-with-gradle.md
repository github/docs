---
title: Construir y probar Java con Gradle
intro: Puedes crear un flujo de trabajo de integración continua (CI) en acciones de GitHub para construir y probar tu proyecto Java con Gradle.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introducción

Esta guía te muestra cómo crear un flujo de trabajo que realiza la integración continua (CI) para tu proyecto Java usando el sistema de construcción Gradle. El flujo de trabajo que creas te permitirá ver cuándo las confirmaciones de una solicitud de extracción causan la construcción o las fallas de prueba en tu rama por defecto; este enfoque puede ayudar a garantizar que tu código siempre sea correcto. Puedes extender tu flujo de trabajo de CI para almacenar en caché los archivos y cargar artefactos desde una ejecución de flujo de trabajo.

Los ejecutores alojados {% data variables.product.prodname_dotcom %} tienen una caché de herramientas con software preinstalado, que incluye kits de desarrollo de Java (JDK) y Gradle. Para obtener una lista de software y las versiones preinstaladas para JDK y Gradle, consulta "[Software instalado en ejecutores alojados {% data variables.product.prodname_dotcom %} ](/actions/automating-your-workflow-with-github-actions/software-installed-on-github-hosted-runners)".

### Prerrequisitos

Deberías estar familiarizado con YAML y la sintaxis para las {% data variables.product.prodname_actions %}. Para obtener más información, consulta:
- "[Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Configurar un flujo de trabajo](/actions/automating-your-workflow-with-github-actions/configuring-a-workflow)"

Te recomendamos que tengas una comprensión básica de Java y del marco de Gradle. Para obtener más información, consulta [Empezar](https://docs.gradle.org/current/userguide/getting_started.html) en la documentación de Gradle.

{% data reusables.actions.enterprise-setup-prereq %}

### Comenzar con una plantilla de flujo de trabajo de Gradle

{% data variables.product.prodname_dotcom %} proporciona una plantilla de flujo de trabajo de Gradle que funcionará para la mayoría de los proyectos Java basados en Gradle. Para obtener más información, consulta la [Plantilla de flujo de trabajo de Gradle](https://github.com/actions/starter-workflows/blob/master/ci/gradle.yml).

Para comenzar rápidamente, puedes elegir la plantilla de Gradle preconfigurada cuando creas un nuevo flujo de trabajo. Para obtener más información, consulta "[Comenzar con plantillas de flujo de trabajo preconfiguradas](/actions/automating-your-workflow-with-github-actions/starting-with-preconfigured-workflow-templates)."

También puedes agregar este flujo de trabajo de forma manual al crear un archivo nuevo en el directorio de tu repositorio `.github/workflows`.

{% raw %}
```yaml
name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Set up JDK 1.8
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Build with Gradle
        run: ./gradlew build
```
{% endraw %}

Este flujo de trabajo realiza los siguientes pasos:

1. El paso `checkout (comprobación)` descarga una copia de tu repositorio en el ejecutor.
2. El paso `setup-java` configura el JDK de Java 1.8.
3. El paso "Build with Gradle" (construir con Gradle) ejecuta el script contenedor `gradlew` para asegurar que tu código se cree, las pruebas pasen y se pueda crear un paquete.

Las plantillas de flujo de trabajo predeterminadas son excelentes puntos de inicio cuando creas tu flujo de trabajo de construcción y prueba, y puedes personalizar la plantilla para adaptarla a las necesidades de tu proyecto.

{% data reusables.github-actions.example-github-runner %}

{% data reusables.github-actions.java-jvm-architecture %}

### Construir y probar tu código

Puedes usar los mismos comandos que usas de forma local para construir y probar tu código.

El flujo de trabajo de inicio ejecutará la tarea `build` por defecto. En la configuración de Gradle predeterminada, este comando descargará las dependencias, construirá clases, ejecutará pruebas y empaquetará las clases en su formato distribuible, por ejemplo, un archivo JAR.

Si usas diferentes comandos para construir tu proyecto, o si quieres usar una tarea diferente, puedes especificarlo. Por ejemplo, es posible que desees ejecutar la tarea `package` que está configurada en tu archivo _ci.gradle_.

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
    with:
      java-version: 1.8
  - name: Run the Gradle package task
    run: ./gradlew -b ci.gradle package
```
{% endraw %}

### Almacenar dependencias en caché

Puedes almacenar en caché tus dependencias para acelerar tus ejecuciones de flujo de trabajo. Después de una ejecución exitosa, tu caché de paquete de Gradle local se almacenará en la infraestructura de acciones de GitHub. En las ejecuciones de flujo de trabajo futuras, la caché se restaurará para que las dependencias no necesiten ser descargadas desde los repositorios de paquetes remotos. Para obtener más información, consulta "[Almacenar en caché las dependencias para agilizar los flujos de trabajo](/actions/automating-your-workflow-with-github-actions/caching-dependencies-to-speed-up-workflows)" y la acción [`cache`](https://github.com/marketplace/actions/cache).

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - name: Set up JDK 1.8
    uses: actions/setup-java@v1
    with:
      java-version: 1.8
  - name: Cache Gradle packages
    uses: actions/cache@v2
    with:
      path: ~/.gradle/caches
      key: ${{ runner.os }}-gradle-${{ hashFiles('**/*.gradle') }}
      restore-keys: ${{ runner.os }}-gradle
  - name: Build with Gradle
    run: ./gradlew build
```
{% endraw %}

Este flujo de trabajo guardará los contenidos de tu caché de paquete Gradle local, que se encuentra en el directorio `.gradle/caches` del directorio de inicio del ejecutor. La clave de caché será el contenido con hash de los archivos de construcción de Gradle, por lo que los cambios en ellos invalidarán la memoria caché.

### Empaquetar datos de flujo de trabajo como artefactos

Una vez que tu compilación haya tenido éxito y tus pruebas hayan pasado, es posible que desees cargar los paquetes Java resultantes como un artefacto de construcción. Esto almacenará los paquetes construidos como parte de la ejecución del flujo de trabajo y te permitirá descargarlos. Los artefactos pueden ayudarte a probar y depurar solicitudes de extracción en tu entorno local antes de que se fusionen. Para obtener más información, consulta "[Conservar datos de flujo de trabajo mediante artefactos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

Por lo general, Gradle creará archivos de salida como JAR, EAR o WAR en el directorio `build/libs`. Puedes cargar los contenidos de ese directorio utilizando la acción `upload-Artifact`.

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
  - run: ./gradlew build
  - uses: actions/upload-artifact@v2
    with:
      name: Package
      path: build/libs
```
{% endraw %}
