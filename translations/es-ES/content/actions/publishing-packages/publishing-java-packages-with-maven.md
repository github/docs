---
title: Publicar paquetes Java con Maven
intro: Puedes usar Maven para publicar paquetes Java en un registro como parte de tu flujo de trabajo de integración continua (CI).
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-maven
  - /actions/guides/publishing-java-packages-with-maven
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
  - Maven
shortTitle: Paquetes de Java con Maven
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

{% data reusables.actions.publishing-java-packages-intro %}

## Prerrequisitos

Te recomendamos que tengas una comprensión básica de los archivos de flujo de trabajo y las opciones de configuración. Para obtener más información, consulta la sección "[Aprende sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Para obtener más información acerca de la creación de un flujo de trabajo de CI para tu proyecto Java con Maven, consulta "[Construir y probar Java con Maven](/actions/language-and-framework-guides/building-and-testing-java-with-maven)".

También puede ser útil tener un entendimiento básico de lo siguiente:

- "[Trabajar con el registro de npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[Variables de ambiente](/actions/reference/environment-variables)"
- "[Secretos cifrados](/actions/reference/encrypted-secrets)"
- "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow)"

## Acerca de la configuración del paquete

Los campos `groupld` y `artifactId` del archivo _pom.xml_ crea un identificador único para tu paquete que los registros usan para vincular tu paquete a un registro.  Para obtener más información, consulta [Guía para cargar artefactos en el repositorio central](http://maven.apache.org/repository/guide-central-repository-upload.html) en la documentación de Apache Maven.

El archivo _pom.xml_ también contiene la configuración de los repositorios de administración de distribución en los que Maven implementará los paquetes. Cada repositorio debe tener un nombre y una URL de implementación. La autenticación para estos repositorios se puede configurar en el archivo _.m2/settings.xml_ del directorio de inicio del usuario que ejecuta Maven.

Puedes usar la acción `setup-java` para configurar el repositorio de implementación, así como la autenticación para ese repositorio. Para obtener más información, consulta [`setup-java`](https://github.com/actions/setup-java).

## Publicar paquetes en el repositorio central de Maven

Cada vez que creas un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo en el ejemplo a continuación se ejecuta cuando el evento `lanzamiento` desencadena con tipo `creado`. El flujo de trabajo publica el paquete en el repositorio central de Maven si se pasan las pruebas de CI. Para obtener más información acerca del evento `release`, consulta "[Eventos que activan flujos de trabajo](/actions/reference/events-that-trigger-workflows#release)".

En este flujo de trabajo, puedes usar la acicón `setup-java`. Esta acción instala la versión dada del JDK en el `PATH`, pero también configura un Maven _settings.xml_ para publicar paquetes. Por defecto, el archivo de configuraciones se configurará para {% data variables.product.prodname_registry %}, pero se puede configurar para que se implemente en otro registro de paquetes, como el repositorio central de Maven. Si ya tienes un repositorio de administración de distribución configurado en _pom.xml_, puedes especificar que `id` durante la acción de invocación `setup-java`.

Por ejemplo, si estás desplegando en el repositorio central de Maven a través del proyecto de alojamiento OSSRH, tu _pom.xml_ podría especificar un repositorio de administración de distribución con el `id` de `ossrh`.

{% raw %}
```xml{:copy}
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>ossrh</id>
      <name>Central Repository OSSRH</name>
      <url>https://oss.sonatype.org/service/local/staging/deploy/maven2/</url>
    </repository>
  </distributionManagement>
</project>
```
{% endraw %}

Con esta configuración, puedes crear un flujo de trabajo que publique tu paquete en el repositorio central de Maven especificando la administración del repositorio `id` para la acción `setup-java`. También deberás proporcionar variables de entorno que contengan el nombre de usuario y la contraseña para autenticarse en el repositorio.

En el paso de implementación, necesitarás establecer las variables de entorno para el nombre de usuario con el que te autenticaste en el repositorio y para el secreto que hayas configurado con la contraseña o el token con que autenticarse.  Para obtener más información, consulta "[Crear y usar secretos cifrados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

```yaml{:copy}
name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Maven Central Repository
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
```

Este flujo de trabajo realiza los siguientes pasos:

1. Verifica una copia del repositorio del proyecto.
1. Configura el JDK de Java y también el archivo _settings. xml_ de Maven para agregarle autenticación al repositorio de `ossrh` utilizando las variables de entorno `MAVEN_USERNAME` y `MAVEN_PASSWORD`.
1. {% data reusables.actions.publish-to-maven-workflow-step %}

   Para obtener más información acerca del uso de secretos en tu flujo de trabajo, consulta "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Sube paquetes al {% data variables.product.prodname_registry %}

Cada vez que creas un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo en el ejemplo a continuación se ejecuta cuando el evento `lanzamiento` desencadena con tipo `creado`. El flujo de trabajo publica el paquete en el {% data variables.product.prodname_registry %} si se superan las pruebas de CI. Para obtener más información acerca del evento `release`, consulta "[Eventos que activan flujos de trabajo](/actions/reference/events-that-trigger-workflows#release)".

En este flujo de trabajo, puedes usar la acicón `setup-java`. Esta acción instala la versión determinada del JDK en el `PATH` y configura un _settings.xml_ de Maven para publicar el paquete en el {% data variables.product.prodname_registry %}. El _settings.sml_ generado define la autenticación para un servidor con una `id` de `github`, utilizando la variable de entorno `GITHUB_ACTOR` como nombre de usuario y la variable de entorno `GITHUB_TOKEN` como contraseña. Se le asigna el valor del secreto especial `GITHUB_TOKEN` a la variable de ambiente `GITHUB_TOKEN`.

{% data reusables.actions.github-token-permissions %}

Para un proyecto basado en Maven, puedes hacer uso de estas configuraciones creando un repositorio de distribución en tu archivo _pom.xml_ con una `id` de `github` que apunta a tu extremo {% data variables.product.prodname_registry %}.

Por ejemplo, si tu organización se llama "octocat", y tu repositorio se llama "hello-world", la configuración de {% data variables.product.prodname_registry %} en _pom.xml_ sería parecida al siguiente ejemplo.

{% raw %}
```xml{:copy}
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>github</id>
      <name>GitHub Packages</name>
      <url>https://maven.pkg.github.com/octocat/hello-world</url>
    </repository>
  </distributionManagement>
</project>
```
{% endraw %}

Con esta configuración, puedes crear un flujo de trabajo que publique tu paquete en {% data variables.product.prodname_registry %} haciendo uso del _settings.xml_ generado automáticamente.

```yaml{:copy}
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
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Este flujo de trabajo realiza los siguientes pasos:

1. Verifica una copia del repositorio del proyecto.
1. Configura el JDK de Java y configura automáticamente el archivo _settings.xml_ de Maven para agregar autenticación para que el repositorio `github` de Maven utilice la variable de entorno `GITHUB_TOKEN`.
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   Para obtener más información acerca del uso de secretos en tu flujo de trabajo, consulta "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Publicar paquetes en el repositorio central de Maven y {% data variables.product.prodname_registry %}

Puedes publicar tus paquetes en el repositorio central de Maven y en el {% data variables.product.prodname_registry %} usando la acción `setup-java` para cada registro.

Asegúrate de que tu archivo _pom.xml_ incluya un repositorio de administración de distribución para tu repositorio de {% data variables.product.prodname_dotcom %} y para tu proveedor de repositorios centrales de Maven. Por ejemplo, si implementas el repositorio central a través del proyecto de alojamiento de OSSRH, es posible que desees especificarlo en un repositorio de administración de distribución con la `id` establecida en `ossrh`, y que desees especificar el {% data variables.product.prodname_registry %} en un repositorio de administración de distribución con la `id` establecida en `github`.

```yaml{:copy}
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
      - name: Set up Java for publishing to Maven Central Repository
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish to the Maven Central Repository
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
      - name: Set up Java for publishing to GitHub Packages
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish to GitHub Packages
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Este flujo de trabajo llama a la acción `setup-java` dos veces.  Cada vez que la acción `setup-java` se ejecuta, sobrescribe el archivo _settings.xml_ de Maven para publicar paquetes.  Para la autenticación en el repositorio, el archivo _settings.xml_ hace referencia a la `id` del repositorio de administración de distribución y al nombre de usuario y contraseña.

Este flujo de trabajo realiza los siguientes pasos:

1. Verifica una copia del repositorio del proyecto.
1. Llama al `setup-java` la primera vez. Esto configura el archivo _settings.xml_ de Maven para el repositorio `ossrh` y establece las opciones de autenticación en las variables de entorno que se definen en el siguiente paso.
1. {% data reusables.actions.publish-to-maven-workflow-step %}
1. Llama al `setup-java` la segunda vez. Esto configura automáticamente el archivo _settings.xml_ de Maven para el {% data variables.product.prodname_registry %}.
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   Para obtener más información acerca del uso de secretos en tu flujo de trabajo, consulta "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
