---
title: Publicar paquetes Node.js
intro: Puedes publicar paquetes Node.js en un registro como parte de tu flujo de trabajo de integración continua (CI).
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages
  - /actions/language-and-framework-guides/publishing-nodejs-packages
  - /actions/guides/publishing-nodejs-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Node
  - JavaScript
shortTitle: Paquetes de Node.js
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra cómo crear un flujo de trabajo que publique paquetes Node.js en el {% data variables.product.prodname_registry %} y registros npm después de que se aprueben las pruebas de integración continua (CI).

## Prerrequisitos

Te recomendamos que tengas una comprensión básica de las opciones de configuración de flujo de trabajo y cómo crear un archivo de flujo de trabajo. Para obtener más información, consulta la sección "[Aprende sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Para obtener más información acerca de la creación de un flujo de trabajo de CI para tu proyecto Node.js, consulta "[Usar Node.js con las {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions)".

También puede ser útil tener un entendimiento básico de lo siguiente:

- "[Trabajar con el registro de npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[Variables de ambiente](/actions/reference/environment-variables)"
- "[Secretos cifrados](/actions/reference/encrypted-secrets)"
- "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow)"

## Acerca de la configuración del paquete

 Los campos `Nombre` y `Versión` en el archivo *package.json* crean un identificador único que los registros usan para vincular tu paquete a un registro. Puedes agregar un resumen para la página de descripción del paquete al incluir un campo `Descripción` en el archivo *package.json*. Para obtener más información, consulta "[Crear un archivo package.json](https://docs.npmjs.com/creating-a-package-json-file) y [Crear módulos Node.js](https://docs.npmjs.com/creating-node-js-modules)"en la documentación de npm.

Cuando existe un archivo *.npmrc* local y tiene un valor especificado de `registro`, el comando `npm publish` usa el registro configurado en el archivo *.npmrc*. {% data reusables.actions.setup-node-intro %}

Puedes especificar la versión de Node.js instalada en el ejecutor utilizando la acción `setup-node`.

Si agregas pasos en tu flujo de trabajo para configurar los campos `publishConfig` en tu archivo *package.json*, no es necesario que especifiques la Url del registro utilizando la acción `setup-node`, pero se limitará a publicar el paquete en un registro. Para obtener más información, consulta "[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)" en la documentación de npm.

## Publicar paquetes en el registro npm

Cada vez que creas un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo en el ejemplo a continuación se ejecuta cuando el evento `lanzamiento` desencadena con tipo `creado`. El flujo de trabajo publica el paquete en el registro npm si se pasan las pruebas de CI.

Para realizar operaciones autenticadas frente al registro npm en tu flujo de trabajo, necesitarás almacenar tu token de autenticación npm como un secreto. Por ejemplo, crea un repositorio secreto que se llame `NPM_TOKEN`. Para más información, consulta "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

Predeterminadamente, npm utiliza el campo `name` del archivo *package.json* para determinar el nombre de tu paquete publicado. Al publicar en un espacio de nombres global, solo necesitas incluir el nombre del paquete. Por ejemplo, publicarías un paquete llamado `npm-hello-world-test` en `https://www.npmjs.com/package/npm-hello-world-test`.

Si estás publicando un paquete que incluye un prefijo de alcance, incluye el ámbito en el nombre de tu archivo *package.json*. Por ejemplo, si el prefijo del ámbito npm es octocat y el nombre del paquete es hello-world, el `nombre` en tu archivo *package.json* debe ser `@octocat/hello-world`. Si su paquete npm usa un prefijo de ámbito y el paquete es público, debes usar la opción `npm publish --access public`. Esta es una opción que npm requiere para evitar que alguien publique un paquete privado involuntariamente.

Este ejemplo almacena el secreto `NPM_TOKEN` en la variable de entorno `NODE_AUTH_TOKEN`. Cuando la acción `setup-node` crea un archivo *.npmrc*, hace referencia al token de la variable de entorno `NODE_AUTH_TOKEN`.

```yaml{:copy}
name: Publish Package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```

En el ejemplo anterior, la acción `setup-node` crea un archivo *.npmrc* en el ejecutor con el siguiente contenido:

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

Toma en cuenta que necesitas configurar la `registry-url` como `https://registry.npmjs.org/` en `setup-node` para configurar tus credenciales de forma adecuada.

## Sube paquetes al {% data variables.product.prodname_registry %}

Cada vez que creas un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo del siguiente ejemplo se ejecuta cada vez que se produce el evento `release` con tipo `created`. El flujo de trabajo publica el paquete en el {% data variables.product.prodname_registry %} si se superan las pruebas de CI.

### Configurar el repositorio de destino

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

### Autenticarse en el repositorio de destino

Para realizar operaciones autenticadas contra el registro {% data variables.product.prodname_registry %} en tu flujo de trabajo, puedes utilizar el `GITHUB_TOKEN`. {% data reusables.actions.github-token-permissions %}

Si quieres publicar tu paquete en un repositorio diferente, debes utilizar un token de acceso personal (PAT) que tenga permisos de escritura en los paquetes del repositorio destino. Para obtener más información, consulta las secciones "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)" y "[Secretos cifrados](/actions/reference/encrypted-secrets)".

### Ejemplo de flujo de trabajo

Este ejemplo almacena el secreto `GITHUB_TOKEN` en la variable de entorno `NODE_AUTH_TOKEN`. Cuando la acción `setup-node` crea un archivo *.npmrc*, hace referencia al token de la variable de entorno `NODE_AUTH_TOKEN`.

```yaml{:copy}
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to GitHub Packages
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://npm.pkg.github.com'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

La acción `setup-node` crea un archivo *.npmrc* en el ejecutor. Cuando utilizas la entrada `scope` a la acción `setup-node`, el archivo *.npmrc* incluye el prefijo de alcance. Por defecto, la acción `setup-node` establece el ámbito en el archivo *.npmrc* en la cuenta que contiene ese archivo de flujo de trabajo.

```ini
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

## Publicar paquetes mediante yarn

Si usas el gestor de paquetes Yarn, puedes instalar y publicar paquetes mediante Yarn.

```yaml{:copy}
name: Publish Package to npmjs
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      # Setup .npmrc file to publish to npm
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.x'
          registry-url: 'https://registry.npmjs.org'
          # Defaults to the user or organization that owns the workflow file
          scope: '@octocat'
      - run: yarn
      - run: yarn publish
        env:
          NODE_AUTH_TOKEN: {% raw %}${{ secrets.NPM_TOKEN }}{% endraw %}
```
