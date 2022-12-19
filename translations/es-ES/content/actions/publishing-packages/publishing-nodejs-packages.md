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
shortTitle: Node.js packages
ms.openlocfilehash: afa780db8d6c044d57bc2bfdb0a8ca851a32635f
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: '147064102'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## <a name="introduction"></a>Introducción

Esta guía te muestra cómo crear un flujo de trabajo que publique paquetes Node.js en el {% data variables.product.prodname_registry %} y registros npm después de que se aprueben las pruebas de integración continua (CI).

## <a name="prerequisites"></a>Prerrequisitos

Recomendamos que tengas un conocimiento básico de las opciones de configuración de flujo de trabajo y de cómo crear un archivo de flujo de trabajo. Para más información, vea "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)".

Para más información sobre cómo crear un flujo de trabajo de CI para el proyecto de Node.js, vea "[Uso de Node.js con {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions)".

También puede ser útil tener un entendimiento básico de lo siguiente:

- "[Trabajo con el registro npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[Variables de entorno](/actions/reference/environment-variables)"
- "[Secretos cifrados](/actions/reference/encrypted-secrets)"
- "[Autenticación en un flujo de trabajo](/actions/reference/authentication-in-a-workflow)"

## <a name="about-package-configuration"></a>Acerca de la configuración del paquete

 Los campos `name` y `version` del archivo *package.json* crean un identificador único que los registros usan para vincular el paquete a un registro. Puede agregar un resumen para la página de lista de paquetes mediante la inclusión de un campo `description` en el archivo *package.json*. Para más información, vea "[Creación de un archivo package.json](https://docs.npmjs.com/creating-a-package-json-file)" y "[Creación de módulos de Node.js](https://docs.npmjs.com/creating-node-js-modules)" en la documentación de npm.

Cuando existe un archivo *.npmrc* local y tiene un valor `registry` especificado, el comando `npm publish` usa el registro configurado en el archivo *.npmrc*. {% data reusables.actions.setup-node-intro %}

Puede especificar la versión de Node.js instalada en el ejecutor mediante la acción `setup-node`.

Si agrega pasos en el flujo de trabajo para configurar los campos `publishConfig` del archivo *package.json*, no es necesario especificar la URL de registro mediante la acción `setup-node`, pero estará limitado a publicar el paquete en un solo registro. Para más información, vea "[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)" en la documentación de npm.

## <a name="publishing-packages-to-the-npm-registry"></a>Publicar paquetes en el registro npm

Cada vez que crees un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo del ejemplo siguiente se ejecuta cuando se desencadena el evento `release` con el tipo `created`. El flujo de trabajo publica el paquete en el registro npm si se superan las pruebas de CI.

Para realizar operaciones autenticadas frente al registro npm en tu flujo de trabajo, necesitarás almacenar tu token de autenticación npm como un secreto. Por ejemplo, cree un secreto de repositorio denominado `NPM_TOKEN`. Para más información, vea ["Creación y uso de secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

De manera predeterminada, npm usa el campo `name` del archivo *package.json* para determinar el nombre del paquete publicado. Al publicar en un espacio de nombres global, solo necesitas incluir el nombre del paquete. Por ejemplo, publicaría un paquete denominado `npm-hello-world-test` en `https://www.npmjs.com/package/npm-hello-world-test`.

Si va a publicar un paquete que incluye un prefijo de ámbito, incluya el ámbito en el nombre del archivo *package.json*. Por ejemplo, si el prefijo de ámbito de npm es octocat y el nombre del paquete es hello-world, `name` en el archivo *package.json* debe ser `@octocat/hello-world`. Si en el paquete npm se usa un prefijo de ámbito y el paquete es público, tendrá que usar la opción `npm publish --access public`. Esta es una opción que npm requiere para evitar que alguien publique un paquete privado involuntariamente.

En este ejemplo se almacena el secreto `NPM_TOKEN` en la variable de entorno `NODE_AUTH_TOKEN`. Cuando la acción `setup-node` crea un archivo *.npmrc*, hace referencia al token de la variable de entorno `NODE_AUTH_TOKEN`.

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

En el ejemplo anterior, la acción `setup-node` crea un archivo *.npmrc* en el ejecutor con el contenido siguiente:

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

Tenga en cuenta que debe establecer `registry-url` en `https://registry.npmjs.org/` en `setup-node` para configurar correctamente las credenciales.

## <a name="publishing-packages-to--data-variablesproductprodname_registry-"></a>Sube paquetes al {% data variables.product.prodname_registry %}

Cada vez que crees un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo del ejemplo siguiente se ejecuta cada vez que se produce el evento `release` con tipo `created`. El flujo de trabajo publica el paquete en el {% data variables.product.prodname_registry %} si se superan las pruebas de CI.

### <a name="configuring-the-destination-repository"></a>Configurar el repositorio de destino

Si no proporciona la clave `repository` en el archivo *package.json*, {% data variables.product.prodname_registry %} publica un paquete en el repositorio de {% data variables.product.prodname_dotcom %} que especifique en el campo `name` del archivo *package.json*. Por ejemplo, un paquete denominado `@my-org/test` se publica en el repositorio `my-org/test` de {% data variables.product.prodname_dotcom %}.

Pero si no proporciona la clave `repository`, el repositorio en esa clave se utilizará como el registro npm de destino para {% data variables.product.prodname_registry %}. Por ejemplo, la publicación del archivo *package.json* siguiente genera un paquete denominado `my-amazing-package` que se publica en el repositorio `octocat/my-other-repo` de {% data variables.product.prodname_dotcom %}.

```json
{
  "name": "@octocat/my-amazing-package",
  "repository": {
    "type": "git",
    "url": "https://github.com/octocat/my-other-repo.git"
  },
```

### <a name="authenticating-to-the-destination-repository"></a>Autenticarse en el repositorio de destino

Para realizar operaciones autenticadas en el registro {% data variables.product.prodname_registry %} en el flujo de trabajo, puede usar `GITHUB_TOKEN`. {% data reusables.actions.github-token-permissions %}

Si quieres publicar tu paquete en un repositorio diferente, debes utilizar un token de acceso personal (PAT) que tenga permisos de escritura en los paquetes del repositorio destino. Para más información, vea "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)" y "[Secretos cifrados](/actions/reference/encrypted-secrets)".

### <a name="example-workflow"></a>Flujo de trabajo de ejemplo

En este ejemplo se almacena el secreto `GITHUB_TOKEN` en la variable de entorno `NODE_AUTH_TOKEN`. Cuando la acción `setup-node` crea un archivo *.npmrc*, hace referencia al token de la variable de entorno `NODE_AUTH_TOKEN`.

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

La acción `setup-node` crea un archivo *.npmrc* en el ejecutor. Cuando se usa la entrada `scope` en la acción `setup-node`, el archivo *.npmrc* incluye el prefijo de ámbito. De manera predeterminada, la acción `setup-node` establece el ámbito en el archivo *.npmrc* en la cuenta que contiene ese archivo de flujo de trabajo.

```ini
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

## <a name="publishing-packages-using-yarn"></a>Publicar paquetes mediante yarn

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
