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
shortTitle: Java packages with Maven
ms.openlocfilehash: e5a1c9ad670bef2e059f5808fa41e1fcbe5848af
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717921'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

{% data reusables.actions.publishing-java-packages-intro %}

## Prerrequisitos

Te recomendamos que tengas una comprensión básica de los archivos de flujo de trabajo y las opciones de configuración. Para más información, vea "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Para obtener más información sobre cómo crear un flujo de trabajo de CI para el proyecto de Java con Maven, consulta "[Creación y pruebas de Java con Maven](/actions/language-and-framework-guides/building-and-testing-java-with-maven)".

También puede ser útil tener un entendimiento básico de lo siguiente:

- "[Trabajo con el registro npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[Variables de entorno](/actions/reference/environment-variables)"
- "[Secretos cifrados](/actions/reference/encrypted-secrets)"
- "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow)"

## Acerca de la configuración del paquete

Los campos `groupId` y `artifactId` del archivo _pom.xml_ crean un identificador único para el paquete que los registros usan para vincular el paquete a un registro.  Para obtener más información, consulta [Guía para cargar artefactos en el repositorio central](http://maven.apache.org/repository/guide-central-repository-upload.html) en la documentación de Apache Maven.

El archivo _pom.xml_ también contiene la configuración de los repositorios de administración de distribución en los que Maven implementará los paquetes. Cada repositorio debe tener un nombre y una URL de implementación. La autenticación para estos repositorios se puede configurar en el archivo _.m2/settings.xml_ del directorio de inicio del usuario que ejecuta Maven.

Puedes usar la acción `setup-java` para configurar el repositorio de implementación, así como la autenticación para ese repositorio. Para más información, vea [`setup-java`](https://github.com/actions/setup-java).

## Publicar paquetes en el repositorio central de Maven

Cada vez que crees un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo del ejemplo siguiente se ejecuta cuando se desencadena el evento `release` con el tipo `created`. El flujo de trabajo publica el paquete en el repositorio central de Maven si se superan las pruebas de CI. Para obtener más información sobre el evento `release`, consulta "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows#release)".

En este flujo de trabajo, puedes usar la acción `setup-java`. Esta acción instala la versión especificada del JDK en `PATH`, pero también configura un archivo _settings.xml_ de Maven para publicar los paquetes. Por defecto, el archivo de configuraciones se configurará para {% data variables.product.prodname_registry %}, pero se puede configurar para que se implemente en otro registro de paquetes, como el repositorio central de Maven. Si ya tienes un repositorio de administración de distribución configurado en _pom.xml_, puedes especificar ese `id` durante la invocación de la acción `setup-java`.

Por ejemplo, si vas a realizar la implementación en el repositorio central de Maven mediante el proyecto de hospedaje OSSRH, en _pom.xml_ se podría especificar un repositorio de administración de distribución con el `id` de `ossrh`.

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

Con esta configuración, puedes crear un flujo de trabajo que publique el paquete en el repositorio central de Maven especificando la administración de repositorio `id` en la acción `setup-java`. También deberás proporcionar variables de entorno que contengan el nombre de usuario y la contraseña para autenticarse en el repositorio.

En el paso de implementación, necesitarás establecer las variables de entorno para el nombre de usuario con el que te autenticaste en el repositorio y para el secreto que hayas configurado con la contraseña o el token con que autenticarse.  Para más información, vea ["Creación y uso de secretos cifrados](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

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

1. Revisa una copia del repositorio del proyecto.
1. Configura el JDK de Java y también configura el archivo _settings.xml_ de Maven para agregar la autenticación para el repositorio `ossrh` mediante las variables de entorno `MAVEN_USERNAME` y `MAVEN_PASSWORD`.
1. {% data reusables.actions.publish-to-maven-workflow-step %}

   Para obtener más información sobre el uso de secretos en el flujo de trabajo, consulta "[Creación y uso de secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Sube paquetes al {% data variables.product.prodname_registry %}

Cada vez que crees un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo del ejemplo siguiente se ejecuta cuando se desencadena el evento `release` con el tipo `created`. El flujo de trabajo publica el paquete en el {% data variables.product.prodname_registry %} si se superan las pruebas de CI. Para obtener más información sobre el evento `release`, consulta "[Eventos que desencadenan flujos de trabajo](/actions/reference/events-that-trigger-workflows#release)".

En este flujo de trabajo, puedes usar la acción `setup-java`. Esta acción instala la versión especificada del JDK en el `PATH` y configura un archivo _settings.xml_ de Maven para publicar el paquete en el {% data variables.product.prodname_registry %}. El archivo _settings.xml_ generado define la autenticación de un servidor con un `id` de `github`, utilizando la variable de entorno `GITHUB_ACTOR` como nombre de usuario y la variable de entorno `GITHUB_TOKEN` como contraseña. A la variable de entorno `GITHUB_TOKEN` se le asigna el valor del secreto `GITHUB_TOKEN` especial.

{% data reusables.actions.github-token-permissions %}

Para un proyecto basado en Maven, puedes usar esta configuración mediante la creación de un repositorio de distribución en el archivo _pom.xml_ con un `id` de `github` que apunta al punto de conexión de {% data variables.product.prodname_registry %}.

Por ejemplo, si el nombre de la organización es "octocat" y el del repositorio es "hello-world", la configuración de {% data variables.product.prodname_registry %} en _pom.xml_ tendría un aspecto similar al del ejemplo siguiente.

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

Con esta configuración, puedes crear un flujo de trabajo que publique tu paquete en {% data variables.product.prodname_registry %} haciendo uso del archivo _settings.xml_ generado automáticamente.

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

1. Revisa una copia del repositorio del proyecto.
1. Configura el JDK de Java y también configura automáticamente el archivo _settings.xml_ de Maven para agregar la autenticación para el repositorio `github` de Maven mediante para que use la variable de entorno `GITHUB_TOKEN`.
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   Para obtener más información sobre el uso de secretos en el flujo de trabajo, consulta "[Creación y uso de secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

## Publicar paquetes en el repositorio central de Maven y {% data variables.product.prodname_registry %}

Puedes publicar tus paquetes en el repositorio central de Maven y en el {% data variables.product.prodname_registry %} usando la acción `setup-java` para cada registro.

Asegúrate de que tu archivo _pom.xml_ incluya un repositorio de administración de distribución para tu repositorio de {% data variables.product.prodname_dotcom %} y para tu proveedor de repositorios centrales de Maven. Por ejemplo, si implementas el repositorio central a través del proyecto de hospedaje de OSSRH, es posible que quieras especificarlo en un repositorio de administración de distribución con `id` establecido en `ossrh`, y que quieras especificar el {% data variables.product.prodname_registry %} en un repositorio de administración de distribución con `id` establecido en `github`.

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

Este flujo de trabajo llama a la acción `setup-java` dos veces.  Cada vez que se ejecuta la acción `setup-java`, sobrescribe el archivo _settings.xml_ de Maven para publicar los paquetes.  Para la autenticación en el repositorio, el archivo _settings.xml_ hace referencia al repositorio de administración de distribución `id` y al nombre de usuario y la contraseña.

Este flujo de trabajo realiza los siguientes pasos:

1. Revisa una copia del repositorio del proyecto.
1. Llama a `setup-java` por primera vez. Esto configura el archivo _settings.xml_ de Maven para el repositorio `ossrh` y establece las opciones de autenticación en variables de entorno definidas en el paso siguiente.
1. {% data reusables.actions.publish-to-maven-workflow-step %}
1. Llama a `setup-java` por segunda vez. Esto configura automáticamente el archivo _settings.xml_ de Maven para el {% data variables.product.prodname_registry %}.
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   Para obtener más información sobre el uso de secretos en el flujo de trabajo, consulta "[Creación y uso de secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
