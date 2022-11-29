---
title: Construir y probar Java con Maven
intro: Puedes crear un flujo de trabajo de integración continua (CI) en acciones de GitHub para construir y probar tu proyecto Java con Maven.
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-maven
  - /actions/guides/building-and-testing-java-with-maven
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Maven
shortTitle: Build & test Java with Maven
ms.openlocfilehash: 59d8961a7fdd1d8b84a05b8762bb09be3d2ab01c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179811'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra cómo crear un flujo de trabajo que realiza la integración continua (CI) para tu proyecto Java utilizando la herramienta de gestión de proyectos de software Maven. El flujo de trabajo que creas te permitirá ver cuándo las confirmaciones de una solicitud de extracción causan la construcción o las fallas de prueba en tu rama por defecto; este enfoque puede ayudar a garantizar que tu código siempre sea correcto. Puedes extender tu flujo de trabajo de CI para {% ifversion actions-caching %}almacenar en caché los archivos y{% endif %} cargar artefactos desde una ejecución de flujo de trabajo.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} tienen una caché de herramientas con software preinstalado, que incluye kits de desarrollo de Java (JDK) y Maven. A fin de obtener una lista de software y las versiones preinstaladas para JDK y Maven, vea "[Especificaciones de ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software)".
{% endif %}

## Requisitos previos

Deberías estar familiarizado con YAML y la sintaxis para las {% data variables.product.prodname_actions %}. Para más información, consulte:
- "[Sintaxis de flujos de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)"
- "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)"

Te recomendamos que tengas una comprensión básica de Java y del marco de Maven. Para más información, vea la [Guía de introducción a Maven](http://maven.apache.org/guides/getting-started/index.html) en la documentación de Maven.

{% data reusables.actions.enterprise-setup-prereq %}

## Utilizar el flujo de trabajo inicial de Maven

{% data variables.product.prodname_dotcom %} proporciona un flujo de trabajo inicial de Maven que funcionará para la mayoría de los proyectos Java basados en Maven. Para más información, vea el [flujo de trabajo de inicio de Maven](https://github.com/actions/starter-workflows/blob/main/ci/maven.yml).

Para iniciar rápidamente, puedes elegir el flujo de trabajo inicial de Maven preconfigurado cuando crees un flujo de trabajo nuevo. Para más información, vea el "[Inicio rápido de {% data variables.product.prodname_actions %}](/actions/quickstart)".

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
      - name: Build with Maven
        run: mvn --batch-mode --update-snapshots package
```

Este flujo de trabajo realiza los siguientes pasos:

1. El paso `checkout` descarga una copia del repositorio en el ejecutor.
2. El paso `setup-java` configura el JDK de Java 11 mediante Adoptium.
3. El paso "Compilar con Maven" ejecuta el destino `package` de Maven en modo no interactivo para garantizar que el código se compile, se superen las pruebas y se pueda crear un paquete.

Los flujos de trabajo iniciales predeterminados son un punto de partida excelente para crear tu flujo de trabajo de prueba y de compilación y puedes personalizarlos de acuerdo con las necesidades de tu proyecto.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## Construir y probar tu código

Puedes usar los mismos comandos que usas de forma local para construir y probar tu código.

El flujo de trabajo de inicio ejecutará el destino `package` de forma predeterminada. En la configuración predeterminada de Maven, este comando descargará dependencias, construirá clases, ejecutar pruebas y las clases de paquetes en su formato distribuible, por ejemplo, un archivo JAR.

Si usas diferentes comandos para compilar tu proyecto, o si quieres usar un destino diferente, puedes especificarlos. Por ejemplo, es posible que quiera ejecutar el destino `verify` configurado en un archivo _pom-ci.xml_.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Run the Maven verify phase
    run: mvn --batch-mode --update-snapshots verify
```

{% ifversion actions-caching %}

## Almacenar dependencias en caché

Puedes almacenar en caché tus dependencias para acelerar tus ejecuciones de flujo de trabajo. Después de una ejecución correcta, el repositorio de Maven local se almacenará en una memoria caché. En las ejecuciones de flujo de trabajo futuras, el caché se restaurará para que las dependencias no necesiten descargarse desde los repositorios remotos de Maven. Puede almacenar en caché las dependencias simplemente mediante la [acción `setup-java`](https://github.com/marketplace/actions/setup-java-jdk), o bien puede usar la [acción `cache`](https://github.com/actions/cache) para la configuración personalizada y más avanzada.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Set up JDK 11
    uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
      cache: maven
  - name: Build with Maven
    run: mvn --batch-mode --update-snapshots verify
```

Este flujo de trabajo guardará los contenidos del repositorio local de Maven, ubicado en el directorio `.m2` del directorio principal del ejecutor. La clave de caché será el contenido con hash de _pom.xml_, por lo que los cambios en _pom.xml_ invalidarán la caché.

{% endif %}

## Empaquetar datos de flujo de trabajo como artefactos

Una vez que tu compilación haya tenido éxito y tus pruebas hayan pasado, es posible que desees cargar los paquetes Java resultantes como un artefacto de construcción. Esto almacenará los paquetes compilados como parte de la ejecución del flujo de trabajo y te permitirá descargarlos. Los artefactos pueden ayudarte a probar y depurar solicitudes de extracción en tu entorno local antes de que se fusionen. Para más información, vea "[Conservación de datos de flujo de trabajo mediante artefactos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

Maven normalmente creará archivos de salida como JAR, EAR o WAR en el directorio `target`. Para cargarlos como artefactos, puedes copiarlos en un nuevo directorio que contenga artefactos para cargar. Por ejemplo, puede crear un directorio denominado `staging`. Después, puede cargar el contenido de ese directorio mediante la acción `upload-artifact`.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - run: mvn --batch-mode --update-snapshots verify
  - run: mkdir staging && cp target/*.jar staging
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: staging
```
