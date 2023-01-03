---
title: Guía de inciio rápido para GitHub Packages
intro: 'Publica en el {% data variables.product.prodname_registry %} con {% data variables.product.prodname_actions %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
ms.openlocfilehash: 887c4ee6c5e6b3e2c391c2d5754cfcb2787e4b86
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181263'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

En esta guía, crearás un flujo de trabajo de {% data variables.product.prodname_actions %} para probar tu código y luego lo publicarás en el {% data variables.product.prodname_registry %}.

## Publicar tu paquete

1. Cree un nuevo repositorio en {% data variables.product.prodname_dotcom %} y agregue el archivo `.gitignore` para Node. Para más información, vea "[Creación de un repositorio](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)".
2. Clone el repositorio en la máquina local.
    ```shell
    $ git clone https://{% ifversion ghes or ghae %}YOUR-HOSTNAME{% else %}github.com{% endif %}/YOUR-USERNAME/YOUR-REPOSITORY.git
    $ cd YOUR-REPOSITORY
    ```
3. Cree un archivo `index.js` y agregue una alerta básica que diga "Hello, world!".
    {% raw %}
    ```javascript{:copy}
    console.log("Hello, World!");
    ```
    {% endraw %}
4. Inicialice un paquete de npm con `npm init`. En el asistente para la inicialización de paquetes, escriba el paquete con el nombre : _`@YOUR-USERNAME/YOUR-REPOSITORY`_ y establezca el script de prueba en `exit 0`. Esto generará un archivo `package.json` con información sobre el paquete.
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: @YOUR-USERNAME/YOUR-REPOSITORY
      ...
      test command: exit 0
      ...    
    ```
    {% endraw %}
5. Ejecute `npm install` para generar el archivo `package-lock.json` y, después, confirme e inserte los cambios en {% data variables.product.prodname_dotcom %}.
    ```shell
    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
6. Cree un directorio `.github/workflows`. En este directorio, cree un archivo denominado `release-package.yml`.
7. Copia el siguiente contenido YAML en el archivo `release-package.yml`{% ifversion ghes or ghae %}, reemplazando `YOUR-HOSTNAME` por el nombre de tu empresa{% endif %}.
    ```yaml{:copy}
    name: Node.js Package

    on:
      release:
        types: [created]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: {% data reusables.actions.action-checkout %}
          - uses: {% data reusables.actions.action-setup-node %}
            with:
              node-version: 16
          - run: npm ci
          - run: npm test

      publish-gpr:
        needs: build
        runs-on: ubuntu-latest
        permissions:
          packages: write
          contents: read
        steps:
          - uses: {% data reusables.actions.action-checkout %}
          - uses: {% data reusables.actions.action-setup-node %}
            with:
              node-version: 16
              registry-url: {% ifversion ghes or ghae %}https://npm.YOUR-HOSTNAME.com/{% else %}https://npm.pkg.github.com/{% endif %}
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${% raw %}{{secrets.GITHUB_TOKEN}}{% endraw %}
    ```
8. Dile a NPM en qué alcance y registro publicar paquetes para utilizar uno de los siguientes métodos:
   - Agregue un archivo de configuración de NPM para el repositorio mediante la creación de un archivo `.npmrc` en el directorio raíz con el contenido: {% raw %}
      ```shell
      @YOUR-USERNAME:registry=https://npm.pkg.github.com
      ```
      {% endraw %}
   - Edite el archivo `package.json` y especifique la clave `publishConfig`: {% raw %}
      ```shell
      "publishConfig": {
        "@<em>YOUR-USERNAME</em>:registry": "https://npm.pkg.github.com"
      }
      ```
      {% endraw %}
9. Confirma y sube tus cambios a {% data variables.product.prodname_dotcom %}.
    ```shell
    $ git add .github/workflows/release-package.yml
    # Also add the file you created or edited in the previous step.
    $ git add .npmrc or package.json
    $ git commit -m "workflow to publish package"
    $ git push
    ```
10.  El flujo de trabajo que creaste se ejecutará cuando sea que se cree un lanzamiento nuevo en tu repositorio. Si las pruebas pasan, entonces el paquete se publicará en {% data variables.product.prodname_registry %}.
    
    Para probar esto, vaya a la pestaña **Code** (Código) del repositorio y cree una nueva versión. Para más información, vea "[Administración de las versiones en un repositorio](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)".

## Visualizar tu paquete publicado

Puedes ver todos los paquetes que has publicado.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.package_registry.packages-from-code-tab %} {% data reusables.package_registry.navigate-to-packages %}

## Instalar un paquete publicado

Ahora que publicaste el paquete, querrás utilizarlo como una dependencia en tus proyectos. Para obtener más información, vea "[Trabajo con el registro npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)".

## Pasos siguientes

El flujo básico que acabas de agregar se ejecuta en cualquier momento que se cree un lanzamiento nuevo en tu repositorio. Pero esto es solo el inicio de lo que puedes hacer con el {% data variables.product.prodname_registry %}. Puedes publicar tu paquete en varios registros con un solo flujo de trabajo, activar el flujo de trabajo para que se ejecute en eventos diferentes tales como una solicitud de cambios fusionada, administrar contenedores, y más.

El combinar el {% data variables.product.prodname_registry %} y las {% data variables.product.prodname_actions %} puede ayudarte a automatizar casi cualquier aspecto de tu proceso de desarrollo de aplicaciones. ¿Ya está listo para comenzar? Aquí hay algunos recursos útiles para llevar a cabo los siguientes pasos con el {% data variables.product.prodname_registry %} y las {% data variables.product.prodname_actions %}:

- Consulte "[Más información sobre {% data variables.product.prodname_registry %}](/packages/learn-github-packages)" para obtener un tutorial detallado sobre los paquetes de GitHub.
- Consulte "[Más información sobre {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" para obtener un tutorial en profundidad sobre Acciones de GitHub.
- Consulte "[Trabajo con un registro de {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry)" para obtener casos de uso y ejemplos específicos.
