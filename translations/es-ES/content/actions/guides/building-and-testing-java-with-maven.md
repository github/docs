---
title: Construir y probar Java con Maven
intro: Puedes crear un flujo de trabajo de integración continua (CI) en acciones de GitHub para construir y probar tu proyecto Java con Maven.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-maven
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Introducción

Esta guía te muestra cómo crear un flujo de trabajo que realiza la integración continua (CI) para tu proyecto Java utilizando la herramienta de gestión de proyectos de software Maven. El flujo de trabajo que creas te permitirá ver cuándo las confirmaciones de una solicitud de extracción causan la construcción o las fallas de prueba en tu rama por defecto; este enfoque puede ayudar a garantizar que tu código siempre sea correcto. Puedes extender tu flujo de trabajo de CI para almacenar en caché los archivos y cargar artefactos desde una ejecución de flujo de trabajo.

Los ejecutores alojados en {% data variables.product.prodname_dotcom %} tienen una caché de herramientas con un software preinstalado, que incluye kits de desarrollo de Java (JDK) y Maven. Para encontrar una lista de software y de las versiones pre-instaladas de JDK y de Maven, consulta la sección "[Especificaciones para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".

### Prerrequisitos

Deberías estar familiarizado con YAML y la sintaxis para las {% data variables.product.prodname_actions %}. Para obtener más información, consulta:
- "[Sintaxis de flujo de trabajo para las {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Aprende sobre las {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

Te recomendamos que tengas una comprensión básica de Java y del marco de Maven. Para obtener más información, consulta el [Guía de introducción a Maven](http://maven.apache.org/guides/getting-started/index.html) en la documentación de Maven.

{% data reusables.actions.enterprise-setup-prereq %}

### Comenzar con una plantilla de flujo de trabajo de Maven

{% data variables.product.prodname_dotcom %} proporciona una plantilla de flujo de trabajo de Maven que funcionará para la mayoría de los proyectos Java basados en Maven. Para obtener más información, consulta la sección [Plantilla de flujo de trabajo de Maven](https://github.com/actions/starter-workflows/blob/main/ci/maven.yml).

Para comenzar rápidamente, puedes elegir la plantilla Maven preconfigurada cuando creas un nuevo flujo de trabajo. Para obtener más información, consulta la "[guía rápida de {% data variables.product.prodname_actions %}](/actions/quickstart)".

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
      - name: Build with Maven
        run: mvn --batch-mode --update-snapshots verify
```
{% endraw %}

Este flujo de trabajo realiza los siguientes pasos:

1. El paso `checkout (comprobación)` descarga una copia de tu repositorio en el ejecutor.
2. El paso `setup-java` configura el JDK de Java 1.8.
3. El paso "Build with Maven" (Construir con Maven) ejecuta el `paquete` destino de Maven en modo no interactivo para garantizar que tu código se compile, se superen las pruebas y se pueda crear un paquete.

Las plantillas de flujo de trabajo predeterminadas son excelentes puntos de inicio cuando creas tu flujo de trabajo de construcción y prueba, y puedes personalizar la plantilla para adaptarla a las necesidades de tu proyecto.

{% data reusables.github-actions.example-github-runner %}

{% data reusables.github-actions.java-jvm-architecture %}

### Construir y probar tu código

Puedes usar los mismos comandos que usas de forma local para construir y probar tu código.

El flujo de trabajo de inicio ejecutará el `paquete` destino por defecto. En la configuración predeterminada de Maven, este comando descargará dependencias, construirá clases, ejecutar pruebas y las clases de paquetes en su formato distribuible, por ejemplo, un archivo JAR.

Si usas diferentes comandos para compilar tu proyecto, o si quieres usar un destino diferente, puedes especificarlos. Por ejemplo, es posible que desees ejecutar el objetivo `verify (verificar)` que está configurado en un archivo _pom-ci.xml_.

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
    with:
      java-version: 1.8
  - name: Run the Maven verify phase
    run: mvn --batch-mode --update-snapshots verify
```
{% endraw %}

### Almacenar dependencias en caché

Cuando utilizas ejecutores hospedados en {% data variables.product.prodname_dotcom %}, puedes guardar tus dependencias en el caché para acelerar tus ejecuciones de flujo de trabajo. Después de una ejecución exitosa, tu repositorio Maven local se almacenará en la infraestructura de acciones de GitHub. En las ejecuciones de flujo de trabajo futuras, el caché se restaurará para que las dependencias no necesiten descargarse desde los repositorios remotos de Maven. Para obtener más información, consulta "<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">Almacenar en caché las dependencias para agilizar los flujos de trabajo</a>" y la acción [`cache`](https://github.com/marketplace/actions/cache).

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - name: Set up JDK 1.8
    uses: actions/setup-java@v1
    with:
      java-version: 1.8
  - name: Cache Maven packages
    uses: actions/cache@v2
    with:
      path: ~/.m2
      key: ${{ runner.os }}-m2-${{ hashFiles('**/pom.xml') }}
      restore-keys: ${{ runner.os }}-m2
  - name: Build with Maven
    run: mvn --batch-mode --update-snapshots verify
```
{% endraw %}

Este flujo de trabajo guardará los contenidos de tu repositorio local de Maven, ubicado en el directorio `.m2` del directorio de inicio del ejecutor. La clave de caché será el contenido con hash de _pom.xml_, por lo que los cambios en _pom.xml_ invalidará el caché.

### Empaquetar datos de flujo de trabajo como artefactos

Una vez que tu compilación haya tenido éxito y tus pruebas hayan pasado, es posible que desees cargar los paquetes Java resultantes como un artefacto de construcción. Esto almacenará los paquetes construidos como parte de la ejecución del flujo de trabajo y te permitirá descargarlos. Los artefactos pueden ayudarte a probar y depurar solicitudes de extracción en tu entorno local antes de que se fusionen. Para obtener más información, consulta "[Conservar datos de flujo de trabajo mediante artefactos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)."

Por lo general, Maven creará archivos de salida como tarros, orejas o guerras en el `Objetivo` Directorio. Para cargarlos como artefactos, puedes copiarlos en un nuevo directorio que contenga artefactos para cargar. Por ejemplo, puedes crear un directorio llamado `staging` (preparación). Luego puedes cargar los contenidos de ese directorio usando la acción `upload-artifact (cargar artefacto)`.

{% raw %}
```yaml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-java@v1
  - run: mvn --batch-mode --update-snapshots verify
  - run: mkdir staging && cp target/*.jar staging
  - uses: actions/upload-artifact@v2
    with:
      name: Package
      path: staging
```
{% endraw %}
