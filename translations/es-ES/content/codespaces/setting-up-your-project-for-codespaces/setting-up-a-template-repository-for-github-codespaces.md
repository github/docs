---
title: Configuración de un repositorio de plantilla para GitHub Codespaces
shortTitle: Set up a template repo
intro: 'Puedes ayudar a los usuarios a empezar a trabajar en un proyecto configurando un repositorio de plantilla para utilizarlo con {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 155aa9bf839301439d2746b4b6f0f0575d2e60ff
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159915'
---
## Introducción

Al configurar un repositorio de plantilla, puedes ayudar a los usuarios a empezar a trabajar con el marco, la biblioteca u otro proyecto en {% data variables.product.prodname_github_codespaces %}. Los usuarios podrán empezar a trabajar con los archivos de plantilla inmediatamente en un entorno de desarrollo basado en la nube, sin tener que preocuparse por clonar el repositorio ni por instalar herramientas u otras dependencias. Con cierto grado de configuración, podrás configurar usuarios en un codespace con archivos importantes que ya están abiertos para su edición y con una aplicación que ya se ejecuta en una pestaña del explorador de vista previa en el editor web de {% data variables.product.prodname_vscode_shortname %}.

Cualquier persona con acceso de lectura al repositorio de plantilla puede crear un codespace desde la página del repositorio en {% data variables.product.product_name %}. Puedes convertir cualquier repositorio existente en una plantilla y no tienes que cambiar ninguna opción de configuración para permitir a los usuarios crear un codespace desde el repositorio de plantilla. Para obtener más información sobre cómo convertir un repositorio en una plantilla, consulta "[Crear un repositorio desde una plantilla](/repositories/creating-and-managing-repositories/creating-a-template-repository)".

Puedes proporcionar un vínculo con el formato `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` para llevar a los usuarios directamente a una página "Crea un codespace nuevo" de la plantilla.

![Captura de pantalla de la página "Crea un codespace nuevo"](/assets/images/help/codespaces/create-a-new-codespace-page.png)

Por ejemplo, podrías proporcionar este vínculo en un tutorial para empezar a trabajar con el marco. En el vínculo, reemplaza `OWNER/TEMPLATE-REPO` por el nombre del repositorio de plantilla. Por ejemplo, `monalisa/octo-template`.

Cuando alguien cree un codespace a partir de tu plantilla, el contenido del repositorio de plantilla se clonará en su codespace. Cuando el usuario esté a punto, podrá publicar su trabajo en un nuevo repositorio en {% data variables.product.product_name %} que pertenezca a su cuenta personal. Los cargos de uso del codespace se facturarán al usuario que lo creó. Para obtener más información, consulta "[Creación de un codespace a partir de una plantilla](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)".

## Descripción de la plantilla

Si no tienes uno, crea un archivo Léame para el repositorio de plantilla en el que se describa el propósito de la plantilla y cómo empezar a trabajar con ella. Para más información, vea "[Acerca de los archivos Léame](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)".

Se muestra una breve descripción de la plantilla en la página "Crea un codespace nuevo", a la que los usuarios llegan cuando siguen el vínculo `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO`. Esta descripción procede del campo **Descripción** que puedes establecer al crear un repositorio. Para editar esta descripción en cualquier momento, ve a la página del repositorio y haz clic en el icono **{% octicon "gear" aria-label="The Settings gear" %}** situado junto a la sección **Acerca de**, en la parte derecha de la página.

![Captura de pantalla de la sección "Acerca de" en una página del repositorio](/assets/images/help/repository/repository-settings-icon.png)

## Adición de archivos de inicio

Los repositorios de plantilla suelen contener archivos de inicio con código reutilizable para que los usuarios puedan empezar a trabajar rápidamente con una biblioteca, un marco u otra tecnología.

Para obtener instrucciones sobre los tipos de archivos que se deben incluir, puedes consultar los archivos de inicio incluidos en las plantillas oficiales de {% data variables.product.company_short %} para {% data variables.product.prodname_github_codespaces %}, como se indica a continuación.

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. Para ver el repositorio de plantilla que contiene los archivos de la plantilla, haz clic en el nombre de la plantilla.

   ![Captura de pantalla de la sección "Explorar plantillas de inicio rápido", con la opción "React" resaltada](/assets/images/help/codespaces/react-template-name.png)

## Configuración de la imagen de contenedor

Puedes agregar archivos de configuración de contenedor de desarrollo al repositorio de plantilla a fin de personalizar el entorno de desarrollo para los usuarios que usan la plantilla con {% data variables.product.prodname_github_codespaces %}. Puedes elegir entre una lista de opciones de configuración predefinidas en {% data variables.product.prodname_vscode %} o puedes crear una configuración personalizada escribiendo tu propio archivo `devcontainer.json`. Si no agregas archivos de configuración, se usará la imagen de contenedor predeterminada. Para obtener más información, consulta "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)" y "[Adición de una configuración de contenedor de desarrollo al repositorio](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)".

{% note %}

**Nota:** {% data reusables.codespaces.configuration-choice-templates %}

{% endnote %}

Debes configurar el contenedor de desarrollo con las herramientas y la personalización necesarias para ofrecer a los usuarios la mejor experiencia con la plantilla. Por ejemplo, en el archivo `devcontainer.json`: 
- Puedes usar la propiedad `openFiles` para definir una lista de archivos que se abrirán automáticamente en el cliente web de {% data variables.product.prodname_vscode_shortname %} cuando se cree un codespace a partir de tu plantilla.
- Si la plantilla contiene archivos para una aplicación web, puedes hacer que la aplicación se ejecute automáticamente en el codespace del usuario. Para ello, usa la propiedad `postAttachCommand` para ejecutar un script que inicie la aplicación en un servidor local tan pronto como el cliente web de {% data variables.product.prodname_vscode_shortname %} se conecte al codespace y establece la propiedad `onAutoForward` de un puerto en `openPreview` para mostrar la aplicación que se ejecuta en ese puerto en un explorador simple insertado en el cliente web de {% data variables.product.prodname_vscode_shortname %}.

Las siguientes opciones de configuración para una plantilla de React abrirán el archivo `app.js` en el editor del usuario, ejecutarán `npm start` (definido en un archivo `package.json`) para iniciar un servidor local y reenviarán el puerto `3000` a una pestaña del explorador de vista previa en el codespace.

```JSON
{
    "postAttachCommand": {
      "server": "npm start",
    },

    "portsAttributes": {
      "3000": {
        "label": "Application",
        "onAutoForward": "openPreview"
      }
    },

    "customizations": {
      "codespaces": {
        "openFiles": ["src/App.js"]
      }
    }
}
```
Para obtener más información, consulta "[Apertura automática de archivos en los codespaces de un repositorio](/codespaces/setting-up-your-project-for-codespaces/automatically-opening-files-in-the-codespaces-for-a-repository)" y la [especificación de contenedores de desarrollo](https://containers.dev/implementors/json_reference/#general-properties) en containers.dev.
