---
title: Publicar paquetes Node.js
intro: Puedes publicar paquetes Node.js en un registro como parte de tu flujo de trabajo de integración continua (CI).
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages
  - /actions/language-and-framework-guides/publishing-nodejs-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'Embalaje'
  - 'Publicar'
  - 'Nodo'
  - 'JavaScript'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introducción

Esta guía te muestra cómo crear un flujo de trabajo que publique paquetes Node.js en el {% data variables.product.prodname_registry %} y registros npm después de que se aprueben las pruebas de integración continua (CI). Con un solo flujo de trabajo, puedes publicar paquetes en un solo registro o varios registros.

### Prerrequisitos

Te recomendamos que tengas una comprensión básica de las opciones de configuración de flujo de trabajo y cómo crear un archivo de flujo de trabajo. Para obtener más información, consulta la sección "[Aprende sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Para obtener más información acerca de la creación de un flujo de trabajo de CI para tu proyecto Node.js, consulta "[Usar Node.js con las {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions)".

También puede ser útil tener un entendimiento básico de lo siguiente:

- "[Configurar npm para usar con {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages)"
- "[Variables de ambiente](/actions/reference/environment-variables)"
- "[Secretos cifrados](/actions/reference/encrypted-secrets)"
- "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow)"

### Acerca de la configuración del paquete

 Los campos `Nombre` y `Versión` en el archivo *package.json* crean un identificador único que los registros usan para vincular tu paquete a un registro. Puedes agregar un resumen para la página de descripción del paquete al incluir un campo `Descripción` en el archivo *package.json*. Para obtener más información, consulta "[Crear un archivo package.json](https://docs.npmjs.com/creating-a-package-json-file) y [Crear módulos Node.js](https://docs.npmjs.com/creating-node-js-modules)"en la documentación de npm.

Cuando existe un archivo *.npmrc* local y tiene un valor especificado de `registro`, el comando `npm publish` usa el registro configurado en el archivo *.npmrc*. {% data reusables.github-actions.setup-node-intro %}

Puedes especificar la versión de Node.js instalada en el ejecutor utilizando la acción `setup-node`.

Si agregas pasos en tu flujo de trabajo para configurar los campos `publishConfig` en tu archivo *package.json*, no es necesario que especifiques la Url del registro utilizando la acción `setup-node`, pero se limitará a publicar el paquete en un registro. Para obtener más información, consulta "[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)" en la documentación de npm.

### Publicar paquetes en el registro npm

Cada vez que creas un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo en el ejemplo a continuación se ejecuta cuando el evento `lanzamiento` desencadena con tipo `creado`. El flujo de trabajo publica el paquete en el registro npm si se pasan las pruebas de CI.

Para realizar operaciones autenticadas frente al registro npm en tu flujo de trabajo, necesitarás almacenar tu token de autenticación npm como un secreto. Por ejemplo, crea un repositorio secreto que se llame `NPM_TOKEN`. Para más información, consulta "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

Por defecto, npm usa el campo `Nombre` del archivo *package.json* para determinar el registro npm. Al publicar en un espacio de nombres global, solo necesitas incluir el nombre del paquete. Por ejemplo, publicarías un paquete llamado `npm-hello-world-test` en `https://www.npmjs.com/package/npm-hello-world-test`.

Si estás publicando un paquete que incluye un prefijo de alcance, incluye el ámbito en el nombre de tu archivo *package.json*. Por ejemplo, si el prefijo del ámbito npm es octocat y el nombre del paquete es hello-world, el `nombre` en tu archivo *package.json* debe ser `@octocat/hello-world`. Si su paquete npm usa un prefijo de ámbito y el paquete es público, debes usar la opción `npm publish --access public`. Esta es una opción que npm requiere para evitar que alguien publique un paquete privado involuntariamente.

Este ejemplo almacena el secreto `NPM_TOKEN` en la variable de entorno `NODE_AUTH_TOKEN`. Cuando la acción `setup-node` crea un archivo *.npmrc*, hace referencia al token de la variable de entorno `NODE_AUTH_TOKEN`.

{% raw %}
```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Setup .npmrc file to publish to npm
    - uses: actions/setup-node@v2
      with:
        node-version: '12.x'
        registry-url: 'https://registry.npmjs.org'
    - run: npm install
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
{% endraw %}

En el ejemplo anterior, la acción `setup-node` crea un archivo *.npmrc* en el ejecutor con el siguiente contenido:

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

### Sube paquetes al {% data variables.product.prodname_registry %}

Cada vez que creas un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo en el ejemplo a continuación se ejecuta cada vez que se produce el evento `lanzamiento` con tipo `creado`. El flujo de trabajo publica el paquete en el {% data variables.product.prodname_registry %} si se superan las pruebas de CI.

#### Configurar el repositorio de destino

Si no proporcionas la clave del `repository` en tu archivo *package.json*, entonces el {% data variables.product.prodname_registry %} publicará un paquete en el repositorio de {% data variables.product.prodname_dotcom %} que especifiques en el campo `name` del archivo *package.json*. Por ejemplo, un paquete denominado `@my-org/test` se publicará en el repositorio `my-org/test` de {% data variables.product.prodname_dotcom %}.

Sin embargo, si no proporcionas la clave del `repository`, entonces el repositorio en esa clave se utilizará como el registro de npm de destino para el {% data variables.product.prodname_registry %}. Por ejemplo, el publicar el siguiente *package.json* dará como resultado un paquete denominado `my-amazing-package` que se publicará en el repositorio `octocat/my-other-repo` de {% data variables.product.prodname_dotcom %}.

```json
{
  "name": "@octocat/my-amazing-package",
  "repository": {
    "type": "git",
    "url": "https://github.com/octocat/my-other-repo.git"
  },
```

#### Autenticarse en el repositorio de destino

Para autenticarte en el registro de {% data variables.product.prodname_registry %} en tu flujo de trabajo, puedes utilizar el `GITHUB_TOKEN` desde tu repositorio. Este se crea automáticamente y tiene permisos tanto de _lectura_ como de _escritura_ para los paquetes en el repositorio en donde se ejecuta el flujo de trabajo. Para obtener más información, consulta la sección "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow)".

Si quieres publicar tu paquete en un repositorio diferente, debes utilizar un token de acceso personal (PAT) que tenga permisos de escritura en los paquetes del repositorio destino. Para obtener más información, consulta las secciones "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)" y "[Secretos cifrados](/actions/reference/encrypted-secrets)".

#### Ejemplo de flujo de trabajo

Este ejemplo almacena el secreto `GITHUB_TOKEN` en la variable de entorno `NODE_AUTH_TOKEN`. Cuando la acción `setup-node` crea un archivo *.npmrc*, hace referencia al token de la variable de entorno `NODE_AUTH_TOKEN`.

{% raw %}
```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Setup .npmrc file to publish to GitHub Packages
    - uses: actions/setup-node@v2
      with:
        node-version: '12.x'
        registry-url: 'https://npm.pkg.github.com'
        # Defaults to the user or organization that owns the workflow file
        scope: '@octocat'
    - run: npm install
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

La acción `setup-node` crea un archivo *.npmrc* en el ejecutor. Cuando utilizas la entrada `scope` a la acción `setup-node`, el archivo *.npmrc* incluye el prefijo de alcance. Por defecto, la acción `setup-node` establece el ámbito en el archivo *.npmrc* en la cuenta que contiene ese archivo de flujo de trabajo.

```ini
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

### Publicar paquetes mediante yarn

Si usas el gestor de paquetes Yarn, puedes instalar y publicar paquetes mediante Yarn.

{% raw %}
```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Setup .npmrc file to publish to npm
    - uses: actions/setup-node@v2
      with:
        node-version: '12.x'
        registry-url: 'https://registry.npmjs.org'
        # Defaults to the user or organization that owns the workflow file
        scope: '@octocat'
    - run: yarn
    - run: yarn publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
{% endraw %}

### Publicar paquetes en npm y {% data variables.product.prodname_registry %}

{% note %}

**Nota:** Si necesitas publicar en los registros que tienen diferentes prefijos de ámbito, deberás modificar el archivo *package.json* en el ejecutor para cambiar el prefijo de ámbito. Por ejemplo, si publicas un paquete en el ámbito `@mona` para npm y `@octocat` para {% data variables.product.prodname_registry %}, puedes reemplazar el ámbito `@mona` por `@octocat` en el archivo *package.json* del ejecutor después de publicar en npm y antes de publicar en {% data variables.product.prodname_registry %}.

{% endnote %}

Puedes publicar tus paquetes tanto en el registro npm como en {% data variables.product.prodname_registry %} mediante la acción `setup-node` para cada registro.

Si publicas un paquete en ambos registros, tendrás que asegurarte de que tu prefijo de ámbito en npm coincida con tu nombre de usuario u organización de {% data variables.product.prodname_dotcom %}. Para publicar paquetes en un registro público con un prefijo de ámbito, puedes utilizar el comando `npm publish --access public`. Para obtener más información, consulta [`npm-scope`](https://docs.npmjs.com/misc/scope) y "[Crear y publicar paquetes públicos con ámbitos](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)" en la documentación de npm.

Asegúrate de que tu archivo *package.json* incluya el ámbito de tu repositorio de {% data variables.product.prodname_dotcom %} y el registro de npm. Por ejemplo, si planeas publicar un paquete en el repositorio `octocat/npm-hello-world-test` en {% data variables.product.prodname_dotcom %} y https://www.npmjs. om/package/@octocat/npm-hello-world-test, el nombre en tu archivo *package.json* debería ser `"name": "@octocat/npm-hello-world-test"`.

Para realizar operaciones autenticadas en el registro {% data variables.product.prodname_registry %} de tu flujo de trabajo, puedes utilizar el `GITHUB_TOKEN`. El `GITHUB_TOKEN` existe en tu repositorio por defecto y tiene permisos de lectura y escritura para paquetes en el repositorio donde se ejecuta el flujo de trabajo. Para más información, consulta "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

Cuando utilizas la entrada `scope` a la acción `setup-node`, la acción crea un archivo *.npmrc* que incluye el prefijo de alcance. Por defecto, la acción `setup-node` establece el ámbito en el archivo *.npmrc* al usuario u organización que posee el archivo de flujo de trabajo.

Este flujo de trabajo llama a la acción `setup-node` dos veces. Cada vez que se ejecuta la acción `setup-node`, sobrescribe el archivo *.npmrc*. El archivo *.npmrc* hace referencia al token que te permite realizar operaciones autenticadas frente al registro del paquete desde la variable de entorno `NODE_AUTH_TOKEN`. El flujo de trabajo establece la variable de entorno `NODE_AUTH_TOKEN` cada vez que se ejecuta el comando `npm publish`, primero con un token para publicar en el (`NPM_TOKEN`) de npm y luego con un token para publicar en el {% data variables.product.prodname_registry %} (`GITHUB_TOKEN`).

{% raw %}
```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Setup .npmrc file to publish to npm
    - uses: actions/setup-node@v1
      with:
        node-version: '10.x'
        registry-url: 'https://registry.npmjs.org'
    - run: npm install
    # Publish to npm
    - run: npm publish --access public
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
    # Setup .npmrc file to publish to GitHub Packages
    - uses: actions/setup-node@v1
      with:
        registry-url: 'https://npm.pkg.github.com'
        # Defaults to the user or organization that owns the workflow file
        scope: '@octocat'
    # Publish to GitHub Packages
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
