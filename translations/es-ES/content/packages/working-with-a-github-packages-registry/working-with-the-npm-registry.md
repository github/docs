---
title: Trabajar con el registro de npm
intro: 'Puedes configurar npm para publicar paquetes en {% data variables.product.prodname_registry %} y para usar los paquetes almacenados en {% data variables.product.prodname_registry %} como dependencias en un proyecto npm.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages
  - /packages/guides/configuring-npm-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: npm registry
ms.openlocfilehash: 11b1ab58cd57c6cecdeb2366b83696166cdc6245
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193133'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

{% ifversion packages-npm-v2 %} {% else %}
## Límites para las versiónes de npm publicadas

Si estableces más de 1,000 versiones de paquetes de npm en el {% data variables.product.prodname_registry %}, podrías notar que ocurren problemas de rendimiento y de tiempos excedidos durante el uso.

En el futuro, para mejorar el rendimiento del servicio, no podrás publicar más de 1,000 versiones de un paquete en {% data variables.product.prodname_dotcom %}. Cualquier versión que se publique antes de llegar a este límite aún será legible.

Si llegas a este límite, considera borrar las versiones del paquete o contacta a soporte para recibir ayuda. Cuando se aplique este límite, actualizaremos nuestra documentación con una forma de dar soluciones para él. Para obtener más información, consulta "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)" o "[Contacto con el soporte técnico](/packages/learn-github-packages/about-github-packages#contacting-support)".
{% endif %}

## Autenticar a {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-npm-v2 %} {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

También puedes optar por conceder permisos de acceso a paquetes de forma independiente para {% data variables.product.prodname_codespaces %} y {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Garantizar el acceso de Codespaces al paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package) y [Garantizar el acceso al flujo de trabajo para tu paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)".
{% endif %}

### Autenticación con un {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Puedes autenticar en {% data variables.product.prodname_registry %} con npm si editas el archivo *~/.npmrc* por usuario para incluir tu {% data variables.product.pat_v1 %}, o bien iniciando sesión en npm en la línea de comandos con tu nombre de usuario y {% data variables.product.pat_generic %}.

Para autenticarse mediante {% data variables.product.pat_v1 %} en el archivo *~/.npmrc*, edita el archivo *~/.npmrc* del proyecto para incluir la siguiente línea y reemplaza {% ifversion ghes or ghae %}*HOSTNAME* por el nombre de host de {% data variables.location.product_location %} y {% endif %}*TOKEN* por tu {% data variables.product.pat_generic %}. Cree un archivo *~/.npmrc* si no existe uno.

{% ifversion ghes %} Si en la instancia se ha habilitado el aislamiento de subdominios: {% endif %}

```shell
//{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}/:_authToken=TOKEN
```

{% ifversion ghes %} Si en la instancia se deshabilitado el aislamiento de subdominios:

```shell
//HOSTNAME/_registry/npm/:_authToken=TOKEN
```
{% endif %}

Para autenticarse mediante el inicio de sesión en npm, usa el comando `npm login` y reemplaza *USERNAME* por tu nombre de usuario de {% data variables.product.prodname_dotcom %}, *TOKEN* por tu {% data variables.product.pat_v1 %} y *PUBLIC-EMAIL-ADDRESS* por tu dirección de correo electrónico.

Si {% data variables.product.prodname_registry %} no es el registro de paquetes predeterminado para usar npm y quiere utilizar el comando `npm audit`, le recomendamos que use la marca `--scope` con el propietario del paquete cuando se autentique en {% data variables.product.prodname_registry %}.

{% ifversion ghes %} Si en la instancia se ha habilitado el aislamiento de subdominios: {% endif %}

```shell
$ npm login --scope=@OWNER --registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

{% ifversion ghes %} Si en la instancia se deshabilitado el aislamiento de subdominios:

```shell
$ npm login --scope=@OWNER --registry=https://HOSTNAME/_registry/npm/
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```
{% endif %}

## Publicación de un paquete

{% note %}

**Nota:** Los nombres y ámbitos de los paquetes solo deben usar letras minúsculas.

{% endnote %}

{% ifversion packages-npm-v2 %} El registro {% data variables.product.prodname_registry %} almacena paquetes npm dentro de tu organización o cuenta personal, y te permite asociar un paquete a un repositorio. Puedes elegir si quieres heredar permisos desde un repositorio o si quieres configurar permisos granulares independientemente de un repositorio.

{% data reusables.package_registry.publishing-user-scoped-packages %} {% endif %}

De forma predeterminada, {% data variables.product.prodname_registry %} publica un paquete en el repositorio de {% data variables.product.prodname_dotcom %} que especifique en el campo de nombre del archivo *package.json*. Por ejemplo, podría publicar un paquete denominado `@my-org/test` en el repositorio `my-org/test` de {% data variables.product.prodname_dotcom %}. Si ejecutas [npm v8.5.3](https://github.com/npm/cli/releases/tag/v8.5.3) o una versión posterior, puedes agregar un resumen para la página de descripción del paquete si incluyes un archivo *README.md* en el directorio del paquete. Para más información, vea "[Trabajo con package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" y "[Procedimiento para crear módulos de Node.js](https://docs.npmjs.com/getting-started/creating-node-modules)" en la documentación de npm.

Puede publicar varios paquetes en el mismo repositorio de {% data variables.product.prodname_dotcom %} si incluye un campo `URL` en el archivo *package.json*. Para más información, vea "[Publicación de varios paquetes en el mismo repositorio](#publishing-multiple-packages-to-the-same-repository)".

Puede configurar la asignación de ámbito del proyecto si usa un archivo *.npmrc* local en el proyecto o la opción `publishConfig` en *package.json*. {% data variables.product.prodname_registry %} solo admite paquetes npm con alcance definido. Los paquetes con ámbito tienen nombres con el formato `@owner/name`. Siempre comienzan con un símbolo `@`. Es posible que tenga que actualizar el nombre en *package.json* para usar el nombre con ámbito. Por ejemplo, `"name": "@codertocat/hello-world-npm"`.

{% data reusables.package_registry.viewing-packages %}

### Publicación de un paquete mediante un archivo *.npmrc* local

Puede usar un archivo *.npmrc* para configurar la asignación de ámbito del proyecto. En el archivo *.npmrc*, use la URL y el propietario de la cuenta de {% data variables.product.prodname_registry %} para que {% data variables.product.prodname_registry %} sepa a dónde dirigir las solicitudes de paquete. El uso de un archivo *.npmrc* evitar que otros desarrolladores publiquen accidentalmente el paquete en npmjs.org en lugar de {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.authenticate-step %} {% data reusables.package_registry.create-npmrc-owner-step %} {% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Compruebe el nombre del paquete en el archivo *package.json* del proyecto. El campo `name` debe contener el ámbito y el nombre del paquete. Por ejemplo, si el paquete se denomina "test" y va a realizar la publicación en la organización de {% data variables.product.prodname_dotcom %} "My-org", el campo `name` del archivo *package.json* debe ser `@my-org/test`.
{% data reusables.package_registry.verify_repository_field %} {% data reusables.package_registry.publish_package %}

### Publicación de un paquete mediante `publishConfig` en el archivo *package.json*

Puede usar el elemento `publishConfig` en el archivo *package.json* para especificar el registro donde quiere publicar el paquete. Para más información, vea "[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)" en la documentación de npm.

1. Edite el archivo *package.json* del paquete e incluya una entrada `publishConfig`.
  {% ifversion ghes %} Si en la instancia se ha habilitado el aislamiento de subdominios: {% endif %}
  ```shell
  "publishConfig": {
    "registry": "https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}"
  },
  ```
  {% ifversion ghes %} Si en la instancia se deshabilitado el aislamiento de subdominios:
   ```shell
   "publishConfig": {
     "registry": "https://HOSTNAME/_registry/npm/"
   },
  ```
  {% endif %} {% data reusables.package_registry.verify_repository_field %} {% data reusables.package_registry.publish_package %}

## Publicar múltiples paquetes en el mismo repositorio

Si quiere publicar varios paquetes en el mismo repositorio, puede incluir la URL del repositorio {% data variables.product.prodname_dotcom %} en el campo `repository` del archivo *package.json* de cada paquete.

Para asegurarte de que la URL del repositorio sea correcta, reemplaza REPOSITORY por el nombre del repositorio que contiene el paquete que deseas publicar y OWNER por el nombre de la cuenta de usuario o de organización en {% data variables.product.prodname_dotcom %} que posee el repositorio.

{% data variables.product.prodname_registry %} coincidirá con el repositorio en base a la URL, en lugar de basarse en el nombre del paquete.

```shell
"repository":"https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY",
```

## Instalación de un paquete

Puede instalar paquetes desde {% data variables.product.prodname_registry %} si los agrega como dependencias en el archivo *package.json* del proyecto. Para más información sobre el uso de *package.json* en el proyecto, vea "[Trabajo con package.json](https://docs.npmjs.com/getting-started/using-a-package.json)" en la documentación de npm.

Por defecto, puedes agregar paquetes de una organización. Para más información, vea "[Instalación de paquetes de otras organizaciones](#installing-packages-from-other-organizations)".

También tendrá que agregar el archivo *.npmrc* al proyecto para que todas las solicitudes de instalación de paquete se {% ifversion ghae %}enruten a{% else %}pasen por{% endif %} {% data variables.product.prodname_registry %}. {% ifversion fpt or ghes or ghec %}Al enrutar todas las solicitudes de paquete por medio de {% data variables.product.prodname_registry %}, puede usar paquetes con ámbito y sin ámbito de *npmjs.org*. Para más información, vea "[npm-scope](https://docs.npmjs.com/misc/scope)" en la documentación de npm.{% endif %}

{% ifversion ghae %} De manera predeterminada, solo puede usar paquetes de npm hospedados en la empresa y no los que están fuera del ámbito. Para más información sobre el ámbito de los paquetes, vea "[npm-scope](https://docs.npmjs.com/misc/scope)" en la documentación de npm. Si es necesario, la compatibilidad con {% data variables.product.prodname_dotcom %} puede habilitar un proxy ascendente a npmjs.org. Una vez que se habilite, si no se encuentra un paquete solicitado en la empresa, {% data variables.product.prodname_registry %} realiza una solicitud de proxy a npmjs.org.  
{% endif %}

{% data reusables.package_registry.authenticate-step %} {% data reusables.package_registry.create-npmrc-owner-step %} {% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Configure *package.json* en el proyecto para usar el paquete que se va a instalar. Para agregar las dependencias de paquete al archivo *package.json* para {% data variables.product.prodname_registry %}, especifique el nombre del paquete de ámbito completo, por ejemplo, `@my-org/server`. Para los paquetes de *npmjs.com*, especifique el nombre completo, como `@babel/core` o `@lodash`. Reemplaza `<organization_name>/<package_name>` con la dependencia del paquete.

  ```json
  {
    "name": "@my-org/server",
    "version": "1.0.0",
    "description": "Server app that uses the <organization_name>/<package_name> package",
    "main": "index.js",
    "author": "",
    "license": "MIT",
    "dependencies": {
      "<organization_name>/<package_name>": "1.0.0"
    }
  }
  ```
5. Instala el paquete.

  ```shell
  $ npm install
  ```

### Instalar paquetes de otras organizaciones

Por defecto, solo puedes usar paquetes de {% data variables.product.prodname_registry %} de una organización. Si quieres enrutar las solicitudes de paquete a varias organizaciones y usuarios, puedes agregar líneas adicionales al archivo *.npmrc* y reemplazar {% ifversion ghes or ghae %}*HOSTNAME* por el nombre de host de {% data variables.location.product_location %} y {% endif %}*OWNER* por el nombre de la cuenta de usuario u organización que posee el repositorio que contiene el proyecto.

{% ifversion ghes %} Si en la instancia se ha habilitado el aislamiento de subdominios: {% endif %}

```shell
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
```

{% ifversion ghes %} Si en la instancia se deshabilitado el aislamiento de subdominios:

```shell
@OWNER:registry=https://HOSTNAME/_registry/npm
@OWNER:registry=https://HOSTNAME/_registry/npm
```
{% endif %}

{% ifversion ghes %}
## Utilizar el registro oficial de NPM

{% data variables.product.prodname_registry %} permite acceder al registro oficial de NPM en `registry.npmjs.com`, si el administrador de {% data variables.product.prodname_ghe_server %} ha habilitado esta característica. Para más información, vea [Conexión al registro oficial de NPM](/admin/packages/configuring-packages-support-for-your-enterprise#connecting-to-the-official-npm-registry).
{% endif %}
