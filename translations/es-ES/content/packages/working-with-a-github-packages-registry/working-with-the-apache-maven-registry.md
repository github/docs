---
title: Trabajar con el registro de Apache Maven
intro: 'Puedes configurar Apache Maven para publicar paquetes para {% data variables.product.prodname_registry %} y utilizar paquetes almacenados en {% data variables.product.prodname_registry %} como dependencias en un proyecto Java.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-apache-maven-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages
  - /packages/guides/configuring-apache-maven-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Apache Maven registry
ms.openlocfilehash: 0d2fafd69ac870a521fee8c7105b79bf8839d62c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061710'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Autenticar a {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Autenticarte con un token de acceso personal

{% data reusables.package_registry.required-scopes %}

Puedes autenticar en {% data variables.product.prodname_registry %} con Apache Maven editando tu archivo *~/.m2/settings.xml* para incluir tu token de acceso personal. Crea un nuevo archivo *~/.m2/settings.xml* si no existe uno.

En la etiqueta `servers`, agrega una etiqueta secundaria `server` con `id`, reemplazando *USERNAME* por el nombre de usuario de {% data variables.product.prodname_dotcom %} y *TOKEN* por el token de acceso personal.

En la etiqueta `repositories`, configura un repositorio asignando el `id` del repositorio al `id` que has agregado en la etiqueta `server` que contiene las credenciales. Reemplaza {% ifversion ghes or ghae %}*HOSTNAME* por el nombre de host de {% data variables.product.product_location %}, y{% endif %} *OWNER* por el nombre de la cuenta de usuario o de la organización que posee el repositorio. Dado que las letras mayúsculas no son compatibles, debes usar minúsculas para el propietario del repositorio si el nombre de usuario o el nombre de la organización de {% data variables.product.prodname_dotcom %} contiene letras mayúsculas.

Si quieres interactuar con varios repositorios, puedes agregar cada repositorio a un elemento secundario `repository` independiente en la etiqueta `repositories`, asignando el `id` de cada uno a las credenciales de la etiqueta `servers`.

{% data reusables.package_registry.apache-maven-snapshot-versions-supported %}

{% ifversion ghes %} Si en la instancia se ha habilitado el aislamiento de subdominios: {% endif %}

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo1.maven.org/maven2</url>
        </repository>
        <repository>
          <id>github</id>
          <url>https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>USERNAME</username>
      <password>TOKEN</password>
    </server>
  </servers>
</settings>
```

{% ifversion ghes %}Si en la instancia se ha deshabilitado el aislamiento de subdominios:

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo1.maven.org/maven2</url>
        </repository>
        <repository>
          <id>github</id>
          <url>HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>USERNAME</username>
      <password>TOKEN</password>
    </server>
  </servers>
</settings>
```
{% endif %}

## Publicación de un paquete

{% data reusables.package_registry.default-name %} Por ejemplo, {% data variables.product.prodname_dotcom %} publicará un paquete denominado `com.example:test` en un repositorio denominado `OWNER/test`.

Si quieres publicar varios paquetes en el mismo repositorio, puedes incluir la dirección URL del repositorio en el elemento `<distributionManagement>` del archivo *pom.xml*. {% data variables.product.prodname_dotcom %} coincidirá con el repositorio según ese campo. Dado que el nombre del repositorio también forma parte del elemento `distributionManagement`, no hay pasos adicionales para publicar varios paquetes en el mismo repositorio.

Para obtener más información sobre cómo crear un paquete, consulta la [documentación de maven.apache.org](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).

1. Edita el elemento `distributionManagement` del archivo *pom.xml* ubicado en el directorio del paquete, reemplazando {% ifversion ghes or ghae %}*HOSTNAME* por el nombre de host de {% data variables.product.product_location %}, {% endif %}`OWNER` por el nombre de la cuenta de usuario o de la organización que posee el repositorio y `REPOSITORY` por el nombre del repositorio que contiene el proyecto.{% ifversion ghes %}

  Si tu instancia tiene habilitado el aislamiento de subdominio:{% endif %}
  ```xml
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```{% ifversion ghes %}
  If your instance has subdomain isolation disabled:
  ```xml
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```{% endif %}
{% data reusables.package_registry.checksum-maven-plugin %}
1. Publish the package.
   ```shell
   $ mvn deploy
  ```

{% data reusables.package_registry.viewing-packages %}

## Instalación de un paquete

Para instalar un paquete de Apache Maven desde {% data variables.product.prodname_registry %}, edita el archivo *pom.xml* para incluir el paquete como una dependencia. Si quieres instalar paquetes desde más de un repositorio, agrega una etiqueta `repository` para cada uno. Para obtener más información sobre el uso de un archivo *pom.xml* en el proyecto, consulta "[Introducción a POM](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html)" en la documentación de Apache Maven.

{% data reusables.package_registry.authenticate-step %}
2. Agrega las dependencias del paquete al elemento `dependencies` del archivo *pom.xml* del proyecto, reemplazando `com.example:test` por el paquete.

  ```xml
  <dependencies>
    <dependency>
      <groupId>com.example</groupId>
      <artifactId>test</artifactId>
      <version>1.0.0-SNAPSHOT</version>
    </dependency>
  </dependencies>
  ```
{% data reusables.package_registry.checksum-maven-plugin %}
3. Instala el paquete.

  ```shell
  $ mvn install
  ```

## Información adicional

- "[Trabajo con el registro de Gradle](/packages/working-with-a-github-packages-registry/working-with-the-gradle-registry)"
- "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)"
