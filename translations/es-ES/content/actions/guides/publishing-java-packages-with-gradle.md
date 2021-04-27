---
title: Publicar paquetes Java con Gradle
intro: Puedes usar Gradle para publicar paquetes Java en un registro como parte de tu flujo de trabajo de integración continua (CI).
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-gradle
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'Embalaje'
  - 'Publicar'
  - 'Java'
  - 'Gradle'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introducción

{% data reusables.github-actions.publishing-java-packages-intro %}

### Prerrequisitos

Te recomendamos que tengas una comprensión básica de los archivos de flujo de trabajo y las opciones de configuración. Para obtener más información, consulta la sección "[Aprende sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Para obtener más información acerca de la creación de un flujo de trabajo de CI para tu proyecto Java con Gradle, consulta "[Construir y probar Java con Gradle](/actions/language-and-framework-guides/building-and-testing-java-with-gradle)".

También puede ser útil tener un entendimiento básico de lo siguiente:

- "[Configurar npm para usar con {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages)"
- "[Variables de ambiente](/actions/reference/environment-variables)"
- "[Secretos cifrados](/actions/reference/encrypted-secrets)"
- "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow)"

### Acerca de la configuración del paquete

Los campos `groupId` y `artifactId` en la sección `MavenPublication` del archivo _build.gradle_ crean un identificador único para tu paquete que los registros usan para vincular tu paquete a un registro.  Esto es similar a los campos `groupId` y `artifactId` del archivo _pom.xml_ de Maven.  Para obtener más información, consulta "[Maven Publish Plugin](https://docs.gradle.org/current/userguide/publishing_maven.html)" en la documentación de Gradle.

El archivo _build.gradle_ también contiene la configuración de los repositorios de administración de distribución en los que Gradle publicará los paquetes. Cada repositorio debe tener un nombre, una URL de implementación y credenciales para la autenticación.

### Publicar paquetes en el repositorio central de Maven

Cada vez que creas un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo en el ejemplo a continuación se ejecuta cuando el evento `lanzamiento` desencadena con tipo `creado`. El flujo de trabajo publica el paquete en el repositorio central de Maven si se pasan las pruebas de CI. Para obtener más información acerca del evento `release`, consulta "[Eventos que activan flujos de trabajo](/actions/reference/events-that-trigger-workflows#release)".

Puedes definir un nuevo repositorio de Maven en el bloque de publicación de tu archivo _build.gradle_ que apunta al repositorio de tu paquete.  Por ejemplo, si estás desplegando en el repositorio central de Maven a través del proyecto de alojamiento OSSRH, tu _build.gradle_ podría especificar un repositorio con el nombre `"OSSRH"`.

{% raw %}
```groovy{:copy}
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

Con esta configuración, puedes crear un flujo de trabajo que publique tu paquete en el repositorio central de Maven al ejecutar el comando `gradle publish`. También deberás proporcionar variables de entorno que contengan el nombre de usuario y la contraseña para autenticarse en el repositorio.

En el paso de implementación, necesitarás establecer variables de entorno para el nombre de usuario y la contraseña o token que usas para autenticar en el repositorio de Maven. Para obtener más información, consulta "[Crear y usar secretos cifrados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."


{% raw %}
```yaml{:copy}
name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Java
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish package
        run: gradle publish
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. Ejecuta el comando `gradle publish` para publicar en el repositorio Maven `OSSRH`. La variable de entorno `MAVEN_USERNAME` se establecerá con los contenidos de tu `OSSRH_USERNAME` secreto, y la variable de entorno `MAVEN_PASSWORD` se establecerá con los contenidos de tu `OSSRH_TOKEN` secreto.

   Para obtener más información acerca del uso de secretos en tu flujo de trabajo, consulta "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

### Sube paquetes al {% data variables.product.prodname_registry %}

Cada vez que creas un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo en el ejemplo a continuación se ejecuta cuando el evento `lanzamiento` desencadena con tipo `creado`. El flujo de trabajo publica el paquete en el {% data variables.product.prodname_registry %} si se superan las pruebas de CI. Para obtener más información acerca del evento `release`, consulta "[Eventos que activan flujos de trabajo](/actions/reference/events-that-trigger-workflows#release)".

Puedes definir un nuevo repositorio de Maven en el bloque de publicación de tu _build.gradle_ que apunte a {% data variables.product.prodname_registry %}.  En esa configuración de repositorio, también puedes aprovechar las variables de entorno establecidas en tu ejecución de flujo de trabajo de CI.  Puedes usar la variable de entorno `GITHUB_ACTOR` como nombre de usuario y puedes establecer la variable de entorno `GITHUB_TOKEN` con tu `GITHUB_TOKEN` secreto.

El `GITHUB_TOKEN` existe en tu repositorio por defecto y tiene permisos de lectura y escritura para paquetes en el repositorio donde se ejecuta el flujo de trabajo. Para obtener más información, consulta "[Autenticar con el GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

Por ejemplo, si tu organización se llama "octocat" y tu repositorio se llama "hello-world", entonces la configuración {% data variables.product.prodname_registry %} en _build.gradle_ tendría un aspecto similar al ejemplo a continuación.

{% raw %}
```groovy{:copy}
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

Con esta configuración, puedes crear un flujo de trabajo que publique tu paquete en el repositorio central de Maven al ejecutar el comando `gradle publish`.

{% raw %}
```yaml{:copy}
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish package
        run: gradle publish
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. Ejecuta el comando `gradle publish` comando para publicar en {% data variables.product.prodname_registry %}. La variable de entorno `GITHUB_TOKEN` se establecerá con el contenido del `GITHUB_TOKEN` secreto.

   Para obtener más información acerca del uso de secretos en tu flujo de trabajo, consulta "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

### Publicar paquetes en el repositorio central de Maven y {% data variables.product.prodname_registry %}

Puedes publicar tus paquetes en el repositorio central de Maven y {% data variables.product.prodname_registry %} al configurar cada uno de ellos en tu archivo _build.gradle_.

Asegúrate de que tu archivo _build.gradle_ incluya un repositorio para tu repositorio {% data variables.product.prodname_dotcom %} y para tu proveedor de repositorios centrales de Maven.

Por ejemplo, si implementas el repositorio central a través del proyecto de alojamiento OSSRH, es posible que desees especificarlo en un repositorio de administración de distribución con el `name` establecido en `OSSRH`. Si implementas para {% data variables.product.prodname_registry %}, es posible que desees especificarlo en un repositorio de administración de distribución con el `name` establecido en `GitHubPackages`.

Si tu organización se llama "octocat" y tu repositorio se llama "hello-world", entonces la configuración {% data variables.product.prodname_registry %} en _build.gradle_ tendría un aspecto similar al ejemplo a continuación.

{% raw %}
```groovy{:copy}
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

Con esta configuración, puedes crear un flujo de trabajo que publique tu paquete en el repositorio central de Maven y {% data variables.product.prodname_registry %} al ejecutar el comando `gradle publish`.

{% raw %}
```yaml{:copy}
name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Java
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish to the Maven Central Repository
        run: gradle publish
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. Ejecuta el comando `gradle publish` para publicar en el repositorio Maven `OSSRH` y {% data variables.product.prodname_registry %}. La variable de entorno `MAVEN_USERNAME` se establecerá con los contenidos de tu `OSSRH_USERNAME` secreto, y la variable de entorno `MAVEN_PASSWORD` se establecerá con los contenidos de tu `OSSRH_TOKEN` secreto. La variable de entorno `GITHUB_TOKEN` se establecerá con el contenido del `GITHUB_TOKEN` secreto.

   Para obtener más información acerca del uso de secretos en tu flujo de trabajo, consulta "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
