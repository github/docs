---
title: Configurar Apache Maven para usar con paquetes de GitHub
intro: 'Puedes configurar Apache Maven para publicar paquetes para {% data variables.product.prodname_registry %} y utilizar paquetes almacenados en {% data variables.product.prodname_registry %} como dependencias en un proyecto Java.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-apache-maven-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

**Nota:** Cuando instalas o publicas una imagen de docker, {% data variables.product.prodname_registry %} no es compatible con capas externas, tales como imágenes de Windows.

### Autenticarte en {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

#### Autenticarte con un token de acceso personal

{% data reusables.package_registry.required-scopes %}

Puedes autenticar en {% data variables.product.prodname_registry %} con Apache Maven editando tu archivo *~/.m2/settings.xml* para incluir tu token de acceso personal. Crear un nuevo archivo *~/.m2/settings.xml* si no existe uno.

En la etiqueta `servidores`, agrega una etiqueta `servidor` hijo con una `Id`, reemplazando *USERNAME* con tu nombre de usuario {% data variables.product.prodname_dotcom %} y *Token* con tu token de acceso personal.

En la etiqueta `repositorios`, configura un repositorio al mapear el `Id` del repositorio a la `Id` que agregaste en la etiqueta `servidor` que contiene tus credenciales. Reemplaza {% if enterpriseServerVersions contains currentVersion %}*HOSTNAME* con el nombre del host de tu instancia de {% data variables.product.prodname_ghe_server %}, {% endif %}*REPOSITORY* con el nombre del repositorio en el cual te gustaría publicar un paquete, o desde el cual te gustaría instalar un paquete, y *OWNER* con el nombre de la cuenta de usuario o de organización a la cual pertenezca el repositorio. Dado que las letras mayúsculas no son compatibles, debes usar minúsculas para el propietario del repositorio si el nombre de usuario o el nombre de la organización de {% data variables.product.prodname_dotcom %} contiene letras mayúsculas.

Si deseas interactuar con múltiples repositorios, puedes agregar cada repositorio para separar hijos del `repositorio` en la etiqueta `repositorios`, asignando la `Id` de cada una a las credenciales en la etiqueta `servidores`.

{% data reusables.package_registry.apache-maven-snapshot-versions-supported %}

{% if enterpriseServerVersions contains currentVersion %}
Para obtener más información acerca de cómo crear un paquete, consulta la [documentación maven.apache.org](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).
{% endif %}

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
          <releases><enabled>true</enabled></releases>
          <snapshots><enabled>true</enabled></snapshots>
        </repository>
        <repository>
          <id>github</id>
          <name>GitHub OWNER Apache Maven Packages</name>
          <url>https://{% if currentVersion == "free-pro-team@latest" %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
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

{% if enterpriseServerVersions contains currentVersion %}
Por ejemplo, los proyectos *OctodogApp* y *OctocatApp* publicarán en el mismo repositorio:

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
          <releases><enabled>true</enabled></releases>
          <snapshots><enabled>true</enabled></snapshots>
        </repository>
        <repository>
          <id>github</id>
          <name>GitHub OWNER Apache Maven Packages</name>
          <url>https://HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
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

#### Autenticando con el `GITHUB_TOKEN`

{% data reusables.package_registry.package-registry-with-github-tokens %}

### Publicar un paquete

{% data reusables.package_registry.default-name %} Por ejemplo, {% data variables.product.prodname_dotcom %} publicará un paquete denominado `com.example:test` en un repositorio llamado `OWNER/test`.

Si quisieras publicar paquetes múltiples en el mismo repositorio, puedes incluir la URL del mismo en el `<distributionManagement>`elemento del archivo *pom.xml*. {% data variables.product.prodname_dotcom %} coincidirá con el repositorio según ese campo. Dado que el nombre del repositorio también es parte del elemento `distributionManagement`, no hay pasos adicionales para publicar múltiples paquetes en el mismo repositorio.

Para obtener más información acerca de cómo crear un paquete, consulta la [documentación maven.apache.org](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).

1. Edita el elemento `distributionManagement` del archivo *POM.</p>

{% if enterpriseServerVersions contains currentVersion %}*HOSTNAME* con el nombre del host de tu instancia de {% data variables.product.prodname_ghe_server %}, {% endif %}`OWNER` con el nombre de la cuenta de usuario o de organización a la cual pertenezca el repositorio y `REPOSITORY` con el nombre del repositorio que contiene tu proyecto.
  {% if enterpriseServerVersions contains currentVersion %}
  Para obtener más información acerca de cómo crear un paquete, consulta la [documentación maven.apache.org](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).
  {% endif %}
  ```xml
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://{% if currentVersion == "free-pro-team@latest" %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```
  {% if enterpriseServerVersions contains currentVersion %}
  Por ejemplo, los proyectos *OctodogApp* y *OctocatApp* publicarán en el mismo repositorio:
  ```xml
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```
  {% endif %}</li>
2
Publicar el paquete.

   ```shell
   $ mvn deploy
  ```
</ol>

{% data reusables.package_registry.viewing-packages %}

### Instalar un paquete

Para instalar un paquete de Apache Maven desde {% data variables.product.prodname_registry %}, edita el *POM. XML* archivo para incluir el paquete como una dependencia. Si deseas instalar paquetes desde más de un repositorio, agrega una etiqueta `repositorio` para cada uno. Para obtener más información acerca del uso de un archivo *pom.xml* en tu proyecto, consulta "[Introducción al POM](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html)"en la documentación de Apache Maven.

{% data reusables.package_registry.authenticate-step %}
2. Agrega las dependencias del paquete al elemento `dependencias` del archivo *pom.xml* de tu proyecto, reemplazando `com.example:test` con tu paquete.

  ```xml
  <dependencies>
    <dependency>
      <groupId>com.example</groupId>
      <artifactId>test</artifactId>
      <version>1.0.0-SNAPSHOT</version>
    </dependency>
  </dependencies>
  ```
3. Instala el paquete.

  ```shell
  $ mvn install
  ```

### Leer más

- "[Configurar Gradle para usar con {% data variables.product.prodname_registry %}](/packages/guides/configuring-gradle-for-use-with-github-packages)"
- "[Eliminar un paquete](/packages/manage-packages/deleting-a-package/)"
