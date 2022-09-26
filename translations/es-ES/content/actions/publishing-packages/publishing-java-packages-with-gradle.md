---
title: Publicar paquetes Java con Gradle
intro: Puedes usar Gradle para publicar paquetes Java en un registro como parte de tu flujo de trabajo de integración continua (CI).
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-gradle
  - /actions/guides/publishing-java-packages-with-gradle
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Java
  - Gradle
shortTitle: Java packages with Gradle
ms.openlocfilehash: 58bb9f872dbb136624c82ab7ae073d9b670e98e3
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147410287'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

{% data reusables.actions.publishing-java-packages-intro %}

## Prerrequisitos

Te recomendamos que tengas una comprensión básica de los archivos de flujo de trabajo y las opciones de configuración. Para más información, vea "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Para más información sobre cómo crear un flujo de trabajo de CI para el proyecto de Java con Gradle, vea "[Creación y pruebas de Java con Gradle](/actions/language-and-framework-guides/building-and-testing-java-with-gradle)".

También puede ser útil tener un entendimiento básico de lo siguiente:

- "[Trabajo con el registro npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[Variables de entorno](/actions/reference/environment-variables)"
- "[Secretos cifrados](/actions/reference/encrypted-secrets)"
- "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow)"

## Acerca de la configuración del paquete

Los campos `groupId` y `artifactId` de la sección `MavenPublication` del archivo _build.gradle_ crean un identificador único para el paquete que los registros usan para vincularlo a un registro.  Esto es similar a los campos `groupId` y `artifactId` del archivo  _depom.xml_ de Maven.  Para más información, vea "[Complemento de publicación de Maven](https://docs.gradle.org/current/userguide/publishing_maven.html)" en la documentación de Gradle.

El archivo _build.gradle_ también contiene la configuración de los repositorios de administración de distribución en los que Gradle publicará los paquetes. Cada repositorio debe tener un nombre, una URL de implementación y credenciales para la autenticación.

## Publicar paquetes en el repositorio central de Maven

Cada vez que crees un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo del ejemplo siguiente se ejecuta cuando se desencadena el evento `release` con el tipo `created`. El flujo de trabajo publica el paquete en el repositorio central de Maven si se superan las pruebas de CI. Para más información sobre el evento `release`, vea "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows#release)".

Puede definir un nuevo repositorio de Maven en el bloque de publicación del archivo _build.gradle_ que apunte al repositorio del paquete.  Por ejemplo, si va a realizar la implementación en el repositorio central de Maven mediante el proyecto de alojamiento OSSRH, en _build.gradle_ se podría especificar un repositorio con el nombre `"OSSRH"`.

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "OSSRH"
      url = "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
      credentials {
        username = System.getenv("MAVEN_USERNAME")
        password = System.getenv("MAVEN_PASSWORD")
      }
    }
  }
}
```
{% endraw %}

Con esta configuración, puede crear un flujo de trabajo que publique el paquete en el repositorio central de Maven mediante la ejecución del comando `gradle publish`. En el paso de implementación, necesitarás establecer variables de entorno para el nombre de usuario y la contraseña o token que usas para autenticar en el repositorio de Maven. Para más información, vea ["Creación y uso de secretos cifrados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Ejecuta la acción [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) con el argumento `publish` para publicar en el repositorio `OSSRH` de Maven. La variable de entorno `MAVEN_USERNAME` se establecerá con el contenido del secreto `OSSRH_USERNAME` y la variable de entorno `MAVEN_PASSWORD` se establecerá con el contenido del secreto `OSSRH_TOKEN`.

   Para más información sobre el uso de secretos en el flujo de trabajo, vea "[Creación y uso de secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Sube paquetes al {% data variables.product.prodname_registry %}

Cada vez que crees un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo del ejemplo siguiente se ejecuta cuando se desencadena el evento `release` con el tipo `created`. El flujo de trabajo publica el paquete en el {% data variables.product.prodname_registry %} si se superan las pruebas de CI. Para más información sobre el evento `release`, vea "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows#release)".

Puede definir un nuevo repositorio de Maven en el bloque de publicación de _build.gradle_ que apunte a {% data variables.product.prodname_registry %}.  En esa configuración de repositorio, también puedes aprovechar las variables de entorno establecidas en tu ejecución de flujo de trabajo de CI.  Puede usar la variable de entorno `GITHUB_ACTOR` como nombre de usuario y puede establecer la variable de entorno `GITHUB_TOKEN` con el secreto `GITHUB_TOKEN`.

{% data reusables.actions.github-token-permissions %}

Por ejemplo, si el nombre de la organización es "octocat" y el del repositorio es "hello-world", la configuración de {% data variables.product.prodname_registry %} en _build.gradle_ tendría un aspecto similar al del ejemplo siguiente.

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "GitHubPackages"
      url = "https://maven.pkg.github.com/octocat/hello-world"
      credentials {
        username = System.getenv("GITHUB_ACTOR")
        password = System.getenv("GITHUB_TOKEN")
      }
    }
  }
}
```
{% endraw %}

Con esta configuración, puede crear un flujo de trabajo que publique el paquete en {% data variables.product.prodname_registry %} mediante la ejecución del comando `gradle publish`.

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Ejecuta la acción [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) con el argumento `publish` para publicar en {% data variables.product.prodname_registry %}. La variable de entorno `GITHUB_TOKEN` se establecerá con el contenido del secreto `GITHUB_TOKEN`. La clave `permissions` especifica el acceso que permitirá el secreto `GITHUB_TOKEN`.

   Para obtener más información sobre el uso de secretos en el flujo de trabajo, consulta "[Creación y uso de secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Publicar paquetes en el repositorio central de Maven y {% data variables.product.prodname_registry %}

Puede publicar los paquetes en el repositorio central de Maven y {% data variables.product.prodname_registry %} si configura cada uno en el archivo _build.gradle_.

Asegúrese de que en el archivo _build.gradle_ se incluya un repositorio para el repositorio de {% data variables.product.prodname_dotcom %} y para el proveedor de repositorios centrales de Maven.

Por ejemplo, si realiza la implementación en el repositorio central mediante el proyecto de hospedaje OSSRH, es posible que quiera especificarlo en un repositorio de administración de distribución con `name` establecido en `OSSRH`. Si realiza la implementación en {% data variables.product.prodname_registry %}, es posible que quiera especificarlo en un repositorio de administración de distribución con `name` establecido en `GitHubPackages`.

Si el nombre de la organización es "octocat" y el del repositorio es "hello-world", la configuración en _build.gradle_ sería similar a la del siguiente ejemplo.

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

publishing {
  ...

  repositories {
    maven {
      name = "OSSRH"
      url = "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
      credentials {
        username = System.getenv("MAVEN_USERNAME")
        password = System.getenv("MAVEN_PASSWORD")
      }
    }
    maven {
      name = "GitHubPackages"
      url = "https://maven.pkg.github.com/octocat/hello-world"
      credentials {
        username = System.getenv("GITHUB_ACTOR")
        password = System.getenv("GITHUB_TOKEN")
      }
    }
  }
}
```
{% endraw %}

Con esta configuración, puede crear un flujo de trabajo que publique el paquete en el repositorio central de Maven y {% data variables.product.prodname_registry %} mediante la ejecución del comando `gradle publish`.

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env: {% raw %}
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Ejecuta la acción [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) con el argumento `publish` para publicar en el repositorio `OSSRH` de Maven y en {% data variables.product.prodname_registry %}. La variable de entorno `MAVEN_USERNAME` se establecerá con el contenido del secreto `OSSRH_USERNAME` y la variable de entorno `MAVEN_PASSWORD` se establecerá con el contenido del secreto `OSSRH_TOKEN`. La variable de entorno `GITHUB_TOKEN` se establecerá con el contenido del secreto `GITHUB_TOKEN`. La clave `permissions` especifica el acceso que permitirá el secreto `GITHUB_TOKEN`.

   Para obtener más información sobre el uso de secretos en el flujo de trabajo, consulta "[Creación y uso de secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
