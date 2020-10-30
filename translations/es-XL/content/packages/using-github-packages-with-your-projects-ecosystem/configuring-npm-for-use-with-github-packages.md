---
title: Configurar npm para usar con Paquetes de GitHub
intro: 'Puedes configurar npm para publicar paquetes en {% data variables.product.prodname_registry %} y para usar los paquetes almacenados en {% data variables.product.prodname_registry %} como dependencias en un proyecto npm.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

**Nota:** Cuando instalas o publicas una imagen de docker, {% data variables.product.prodname_registry %} no es compatible con capas externas, tales como imágenes de Windows.

### Autenticar a {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

#### Autenticando con un token de acceso personal

{% data reusables.package_registry.required-scopes %}

Puedes autenticarte en {% data variables.product.prodname_registry %} con npm al editar tu archivo *~/.npmrc* por usuario para incluir tu token de acceso personal o al iniciar sesión en npm en la línea de comando por medio tu nombre de usuario y token de acceso personal.

Para autenticarte al agregar tu token de acceso personal a tu archivo *~/.npmrc*, edita el archivo *~/.npmrc* para que tu proyecto incluya la siguiente línea, al reemplazar *TOKEN* por tu token de acceso personal.  Crea un nuevo archivo *~/.npmrc* si no existe uno.

{% if currentVersion != "free-pro-team@latest" %}
Para obtener más información acerca de cómo crear un paquete, consulta la [documentación maven.apache.org](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).
{% endif %}

```shell
//npm.pkg.github.com/:_authToken=<em>TOKEN</em>
```

{% if currentVersion != "free-pro-team@latest" %}
Por ejemplo, los proyectos *OctodogApp* y *OctocatApp* publicarán en el mismo repositorio:

```shell
$ npm login --registry=https://npm.pkg.github.com
> Username: <em>USERNAME</em>
> Password: <em>TOKEN</em>
> Email: <em>PUBLIC-EMAIL-ADDRESS</em>
```
{% endif %}

Para autenticarte al iniciar sesión en npm, usa el comando `npm login`, reemplaza *USERNAME* por tu nombre de usuario de {% data variables.product.prodname_dotcom %}, *TOKEN* por tu token de acceso personal y *PUBLIC-EMAIL-ADDRESS* por tu dirección de correo electrónico.

{% if currentVersion != "free-pro-team@latest" %}
Para obtener más información acerca de cómo crear un paquete, consulta la [documentación maven.apache.org](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).
{% endif %}

```shell
"repository" : {
    "type" : "git",
    "url": "ssh://git@github.com/<em>OWNER</em>/<em>REPOSITORY</em>.git",
    "directory": "packages/name"
  },
```

{% if currentVersion != "free-pro-team@latest" %}
Por ejemplo, los proyectos *OctodogApp* y *OctocatApp* publicarán en el mismo repositorio:

```shell
registry=https://npm.pkg.github.com/<em>OWNER</em>
@<em>OWNER</em>:registry=https://npm.pkg.github.com
@<em>OWNER</em>:registry=https://npm.pkg.github.com
```
{% endif %}

#### Autenticando con el `GITHUB_TOKEN`

{% data reusables.package_registry.package-registry-with-github-tokens %}

### Publicar un paquete

De forma predeterminada, {% data variables.product.prodname_registry %} publica un paquete en el repositorio de {% data variables.product.prodname_dotcom %} que especifiques en el campo nombre del archivo *package.json*. Por ejemplo, publicarías un paquete denominado `@my-org/test` al repositorio de {% data variables.product.prodname_dotcom %} `My-org/test`. Puedes agregar un resumen para la página de descripción del paquete al incluir un archivo *README.md* en el directorio de tu paquete. Para obtener más información, consulta "[Trabajar con package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" y "[Cómo crear módulos Node.js](https://docs.npmjs.com/getting-started/creating-node-modules)" en la documentación de npm.

Puedes publicar varios paquetes en el mismo repositorio de {% data variables.product.prodname_dotcom %} al incluir un campo `URL` en el archivo *package.json*. Para obtener más información, consulta "[Publicar varios paquetes en el mismo repositorio](#publishing-multiple-packages-to-the-same-repository)".

Puedes configurar la asignación de alcance de tu proyecto por medio de un archivo *.npmrc* local en el proyecto o mediante la opción `publishConfig` en *package.json*. {% data variables.product.prodname_registry %} solo admite paquetes npm con alcance definido. Los paquetes definidos tienen nombres con el formato de `@owner/name`. Además, siempre comienzan con un símbolo`@`. Es posible que tengas que actualizar el nombre en tu *package.json* para usar el nombre de alcance definido. Por ejemplo, `"name": "@codertocat/hello-world-npm"`.

{% data reusables.package_registry.viewing-packages %}

#### Publicar un paquete por medio de un archivo *.npmrc* local

Puedes usar un archivo *.npmrc* para configurar la asignación del alcance de tu proyecto. En el archivo *.npmrc*, usa la URL y el propietario de la cuenta de {% data variables.product.prodname_registry %} para que {% data variables.product.prodname_registry %} sepa dónde enrutar las solicitudes del paquete. Usar un archivo *.npmrc* impide que otros programadores publiquen accidentalmente el paquete en npmjs.org en lugar de {% data variables.product.prodname_registry %}. {% data reusables.package_registry.lowercase-name-field %}

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
4. Verifica el nombre de tu paquete en el *package.json* de tu proyecto. El campo `name (nombre)` debe contener el alcance y el nombre del paquete. Por ejemplo, si tu paquete se denomina "test" (prueba) y vas a publicar en la organización "My-org" de {% data variables.product.prodname_dotcom %}, el campo `name (nombre)` de tu *package.json* debería ser `@my-org/test`.
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

#### Publicar un paquete por medio de `publishConfig` en el archivo *package.json*

Puedes usar el elemento `publishConfig` en el archivo *package.json* para especificar el registro en el que deseas que se publique el paquete. Para obtener más información, consulta "[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)" en la documentación de npm.

1. Edita el archivo *package.json* de tu paquete e incluye una entrada de `publishConfig`.
  {% if currentVersion != "free-pro-team@latest" %}
  Para obtener más información acerca de cómo crear un paquete, consulta la [documentación maven.apache.org](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).
  {% endif %}
  ```shell
    "publishConfig": {
      "registry":"https://npm.pkg.github.com/"
    },
  ```
  {% if currentVersion != "free-pro-team@latest" %}
  Por ejemplo, los proyectos *OctodogApp* y *OctocatApp* publicarán en el mismo repositorio:
   ```shell
    "publishConfig": {
      "registry":"https://<em>HOSTNAME</em>/_registry/npm/"
    },
  ```
  {% endif %}
{% data reusables.package_registry.verify_repository_field %}
{% data reusables.package_registry.publish_package %}

### Publicar varios paquetes en el mismo repositorio

Para publicar varios paquetes en el mismo repositorio, puedes incluir la URL del repositorio de {% data variables.product.prodname_dotcom %} en el campo `repository (repositorio)` del archivo *package.json* para cada paquete.

Para asegurarte de que la URL del repositorio sea correcta, reemplaza REPOSITORY por el nombre del repositorio que contiene el paquete que deseas publicar y OWNER por el nombre de la cuenta de usuario o de organización en {% data variables.product.prodname_dotcom %} que posee el repositorio.

{% data variables.product.prodname_registry %} coincidirá con el repositorio en base a la URL, en lugar de basarse en el nombre del paquete. Si almacenas el archivo *package.json* fuera del directorio raíz de tu repositorio, puedes usar el campo `directory (directorio)` para especificar la ubicación donde {% data variables.product.prodname_registry %} puede encontrar los archivos *package.json*.

```shell
"repository" : {
    "type" : "git",
    "url": "ssh://git@{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>.git",
    "directory": "packages/name"
  },
```

### Instalar un paquete

Puedes instalar paquetes desde {% data variables.product.prodname_registry %} al agregar los paquetes como dependencias en el archivo *package.json* para tu proyecto. Para obtener más información sobre el uso de un *package.json* en tu proyecto, consulta "[Trabajar con package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" en la documentación de npm.

Por defecto, puedes agregar paquetes de una organización. Para obtener más información, consulta [Instalar paquetes de otras organizaciones](#installing-packages-from-other-organizations)

También debes agregar el archivo *.npmrc* a tu proyecto por lo que todas las solicitudes de instalación de paquetes pasarán por {% data variables.product.prodname_registry %}. Cuando enrutas todas las solicitudes de paquete a través de {% data variables.product.prodname_registry %}, puedes usar paquetes con alcance definido y sin alcance definido de *npmjs.com*. Para obtener más información, consulta "[npm-scope](https://docs.npmjs.com/misc/scope)" en la documentación de npm.

{% data reusables.package_registry.authenticate-step %}
{% data reusables.package_registry.create-npmrc-owner-step %}
{% data reusables.package_registry.add-npmrc-to-repo-step %}
4. Configura *package.json* en tu proyecto para usar el paquete que estás instalando. Para agregar las dependencias de tu paquete al archivo *package.json* para {% data variables.product.prodname_registry %}, especifica el nombre del paquete de alcance completo, como `@my-org/server`. Para paquetes de *npmjs.com*, especifica el nombre completo, como `@babel/core` o `@lodash`. Por ejemplo, el archivo *package.json* a continuación utiliza el paquete `@octo-org/octo-app` como una dependencia.

  ```
  {
    "name": "@my-org/server",
    "version": "1.0.0",
    "description": "Server app that uses the @octo-org/octo-app package",
    "main": "index.js",
    "author": "",
    "license": "MIT",
    "dependencies": {
      "@octo-org/octo-app": "1.0.0"
    }
  }
  ```
5. Instala el paquete.

  ```shell
  $ npm install
  ```

#### Instalar paquetes de otras organizaciones

Por defecto, solo puedes usar paquetes de {% data variables.product.prodname_registry %} de una organización. Por defecto, solo puedes usar paquetes de {% data variables.product.prodname_registry %} de una organización. {% data reusables.package_registry.lowercase-name-field %}

{% if currentVersion != "free-pro-team@latest" %}
Para obtener más información acerca de cómo crear un paquete, consulta la [documentación maven.apache.org](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).
{% endif %}

```shell
registry=https://{% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}<em>OWNER</em>
@<em>OWNER</em>:registry={% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}
@<em>OWNER</em>:registry={% if currentVersion == "free-pro-team@latest" %}npm.pkg.github.com{% else %}npm.<em>HOSTNAME</em>/{% endif %}
```

{% if currentVersion != "free-pro-team@latest" %}
Por ejemplo, los proyectos *OctodogApp* y *OctocatApp* publicarán en el mismo repositorio:

```shell
registry=https://<em>HOSTNAME</em>/_registry/npm/<em>OWNER</em>
@<em>OWNER</em>:registry=<em>HOSTNAME</em>/_registry/npm/
@<em>OWNER</em>:registry=<em>HOSTNAME</em>/_registry/npm/
```
{% endif %}


### Leer más

- "[Eliminar un paquete](/packages/publishing-and-managing-packages/deleting-a-package/)"
