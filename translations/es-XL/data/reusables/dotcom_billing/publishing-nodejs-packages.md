---
title: Publicar paquetes Node.js
intro: Puedes publicar paquetes Node.js en un registro como parte de tu flujo de trabajo de integración continua (CI).
product: '{% data reusables.gated-features.actions %}'
productVersions:
  dotcom: '*'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages
---

### Introducción

Esta guía te muestra cómo crear un flujo de trabajo que publique paquetes Node.js en el {% data variables.product.prodname_registry %} y registros npm después de que se aprueben las pruebas de integración continua (CI). Con un solo flujo de trabajo, puedes publicar paquetes en un solo registro o varios registros.

### Prerrequisitos

Recomendamos que tengas un conocimiento básico de las opciones de configuración de flujo de trabajo y de cómo crear un archivo de flujo de trabajo. Para obtener más información, consulta "[Configurar un flujo de trabajo](/actions/automating-your-workflow-with-github-actions/configuring-a-workflow)."

Para obtener más información acerca de la creación de un flujo de trabajo de CI para tu proyecto Node.js, consulta "[Usar Node.js con las {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions)."

También puede ser útil tener un entendimiento básico de lo siguiente:

- "[Conceptos básicos para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)"
- "[Configurar npm para usar con {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages)"
- "[Usar variables de entorno](/actions/automating-your-workflow-with-github-actions/using-environment-variables)"
- "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)"
- "[Autenticar con el GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)"

### Acerca de la configuración del paquete

 Los campos `Nombre` y `Versión` en el archivo *package.json* crean un identificador único que los registros usan para vincular tu paquete a un registro. Puedes agregar un resumen para la página de descripción del paquete al incluir un campo `Descripción` en el archivo *package.json*. Para obtener más información, consulta "[Crear un archivo package.json](https://docs.npmjs.com/creating-a-package-json-file) y [Crear módulos Node.js](https://docs.npmjs.com/creating-node-js-modules)"en la documentación de npm.

Cuando existe un archivo *.npmrc* local y tiene un valor especificado de `registro`, el comando `npm publish` usa el registro configurado en el archivo *.npmrc*. {% data reusables.github-actions.setup-node-intro %}

Puedes especificar la versión de Node.js instalada en el ejecutor utilizando la acción `setup-node`.

Si agregas pasos en tu flujo de trabajo para configurar los campos `publishConfig` en tu archivo *package.json*, no es necesario que especifiques la URL del registro utilizando la acción `setup-node`, pero estarás limitado a publicar el paquete en un solo registro. Para obtener más información, consulta "[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)" en la documentación de npm.

### Publicar paquetes en el registro npm

Cada vez que creas un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo en el ejemplo a continuación se ejecuta cuando el evento `lanzamiento` desencadena con tipo `creado`. El flujo de trabajo publica el paquete en el registro npm si se pasan las pruebas de CI.

Para realizar operaciones autenticadas frente al registro npm en tu flujo de trabajo, necesitarás almacenar tu token de autenticación npm como un secreto en los parámetros de tu repositorio. Por ejemplo, crea un secreto llamado `NPM_TOKEN`. Para obtener más información, consulta "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

Por defecto, npm usa el campo `Nombre` del archivo *package.json* para determinar el registro npm. Al publicar en un espacio de nombres global, solo necesitas incluir el nombre del paquete. Por ejemplo, publicarías un paquete llamado `npm-hello-world-test` en `https://www.npmjs.com/package/npm-hello-world-test`.

Si estás publicando un paquete que incluye un prefijo de alcance, incluye el ámbito en el nombre de tu archivo *package.json*. Por ejemplo, si el prefijo del ámbito npm es octocat y el nombre del paquete es hello-world, el `nombre` en tu archivo *package.json* debe ser `@octocat/hello-world`. Si su paquete npm usa un prefijo de ámbito y el paquete es público, debes usar la opción `npm publish --access public`. Esta es una opción que npm requiere para evitar que alguien publique un paquete privado involuntariamente.

Este ejemplo almacena el secreto `NPM_TOKEN` en la variable de entorno `NODE_AUTH_TOKEN`. Cuando la acción `setup-node` crea un archivo *.npmrc*, hace referencia al token de la variable de entorno `NODE_AUTH_TOKEN`.

{% raw %}
```yaml
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Configura el archivo .npmrc para publicar en npm
    - uses: actions/setup-node@v1
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

```
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

### Sube paquetes al {% data variables.product.prodname_registry %}

Cada vez que creas un lanzamiento nuevo, puedes desencadenar un flujo de trabajo para publicar tu paquete. El flujo de trabajo en el ejemplo a continuación se ejecuta cada vez que se produce el evento `lanzamiento` con tipo `creado`. El flujo de trabajo publica el paquete en el {% data variables.product.prodname_registry %} si se pasan las pruebas de CI.

Por defecto, {% data variables.product.prodname_registry %} publica un paquete en el repositorio {% data variables.product.prodname_dotcom %} que especifiques en el campo `Nombre` del archivo *package.json*. Por ejemplo, publicarías un paquete denominado `@my-org/test` al repositorio de {% data variables.product.prodname_dotcom %} `My-org/test`. Para obtener más información, consulta [`npm-Scope`](https://docs.npmjs.com/misc/scope) en la documentación de npm.

Para realizar operaciones autenticadas contra el registro {% data variables.product.prodname_registry %} en tu flujo de trabajo, puedes utilizar el `GITHUB_TOKEN`. El `GITHUB_TOKEN` existe en tu repositorio por defecto y tiene permisos de lectura y escritura para paquetes en el repositorio donde se ejecuta el flujo de trabajo. Para obtener más información, consulta "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

Este ejemplo almacena el secreto `GITHUB_TOKEN` en la variable de entorno `NODE_AUTH_TOKEN`. Cuando la acción `setup-node` crea un archivo *.npmrc*, hace referencia al token de la variable de entorno `NODE_AUTH_TOKEN`.

{% raw %}
```yaml
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Configura el archivo .npmrc file para publicar GitHub Packages
    - uses: actions/setup-node@v1
      with:
        node-version: '12.x'
        registry-url: 'https://npm.pkg.github.com'
        scope: '@octocat' # Predeterminado al usuario u organización que posee el archivo de flujo de trabajo
    - run: npm install
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

La acción `setup-node` crea un archivo *.npmrc* en el ejecutor. Cuando utilizas la entrada `scope` a la acción `setup-node`, el archivo *.npmrc* incluye el prefijo de alcance. Por defecto, la acción `setup-node` establece el ámbito en el archivo *.npmrc* en la cuenta que contiene ese archivo de flujo de trabajo.

```
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

### Publicar paquetes mediante yarn

Si usas el gestor de paquetes Yarn, puedes instalar y publicar paquetes mediante Yarn.

{% raw %}
```yaml
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Configura el archivo .npmrc para publicar en npm
    - uses: actions/setup-node@v1
      with:
        node-version: '12.x'
        registry-url: 'https://registry.npmjs.org'
        scope: '@octocat' # Predeterminado al usuario u organización que posee el archivo de flujo de trabajo
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

Para realizar operaciones autenticadas contra el registro {% data variables.product.prodname_registry %} en tu flujo de trabajo, puedes utilizar el `GITHUB_TOKEN`. El `GITHUB_TOKEN` existe en tu repositorio por defecto y tiene permisos de lectura y escritura para paquetes en el repositorio donde se ejecuta el flujo de trabajo. Para obtener más información, consulta "[Crear y usar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

Cuando utilizas la entrada `scope` a la acción `setup-node`, la acción crea un archivo *.npmrc* que incluye el prefijo de alcance. Por defecto, la acción `setup-node` establece el ámbito en el archivo *.npmrc* al usuario u organización que posee el archivo de flujo de trabajo.

Este flujo de trabajo llama a la acción `setup-node` dos veces. Cada vez que se ejecuta la acción `setup-node`, sobrescribe el archivo *.npmrc*. El archivo *.npmrc* hace referencia al token que te permite realizar operaciones autenticadas frente al registro del paquete desde la variable de entorno `NODE_AUTH_TOKEN`. El flujo de trabajo establece la variable de entorno `NODE_AUTH_TOKEN` cada vez que se ejecuta el comando `npm publish`, primero con un token para publicar en npm (`NPM_TOKEN`) y luego con un token para publicar en el {% data variables.product.prodname_registry %} (`GITHUB_TOKEN`).

{% raw %}
```yaml
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Configura el archivo .npmrc para publicar en npm
    - uses: actions/setup-node@v1
      with:
        node-version: '10.x'
        registry-url: 'https://registry.npmjs.org'
    - run: npm install
    # Publica en npm
    - run: npm publish --access public
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
    # Configura el archivo .npmrc para publicar en GitHub Packages
    - uses: actions/setup-node@v1
      with:
        registry-url: 'https://npm.pkg.github.com'
        scope: '@octocat' # Defaults to the user or organization that owns the workflow file
    # Publica en GitHub Packages
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
