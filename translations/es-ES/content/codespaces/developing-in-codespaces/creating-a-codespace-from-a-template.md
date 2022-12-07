---
title: Creación de un codespace a partir de una plantilla
intro: 'Si vas a iniciar un nuevo proyecto, puedes crear un codespace a partir de una plantilla en blanco o elegir una plantilla especialmente diseñada para el tipo de trabajo que deseas realizar.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace from a template
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9e7ee0d110e962fa755f5f57cc70bc3cab341808
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188316'
---
## Acerca de las plantillas para {% data variables.product.prodname_github_codespaces %}

Si vas a iniciar un nuevo proyecto, puedes crear un codespace a partir de una plantilla para empezar con el trabajo de desarrollo rápidamente. Podrás trabajar en el proyecto en un entorno de desarrollo basado en la nube, guardar los archivos en la nube y publicar el trabajo en un nuevo repositorio remoto que puedes compartir con otros usuarios o clonar en la máquina local.

{% note %}

**Nota**: Los codespaces creados a partir de una plantilla, no a partir de un repositorio, siempre se facturan a tu cuenta personal. Para más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".

{% endnote %}

Puedes empezar con una plantilla en blanco, elegir entre las plantillas que mantiene {% data variables.product.company_short %} para tecnologías populares como React o Jupyter Notebook, o iniciar un codespace desde cualquier repositorio de plantilla en {% data variables.product.prodname_dotcom %}. Con una plantilla en blanco, empezarás con un directorio vacío, con acceso a los recursos de proceso basados en la nube y a las herramientas, lenguajes y entornos en tiempo de ejecución que vienen preinstalados con la imagen de codespace predeterminada. Con otras plantillas, obtendrás archivos de inicio para la tecnología con la que estás trabajando y, normalmente, algunos archivos adicionales, como un archivo Léame, un archivo `.gitignore` y archivos de configuración de contenedor de desarrollo que contienen algunas opciones de configuración de entorno personalizadas. Para obtener más información sobre los contenedores de desarrollo y la imagen predeterminada, consulta "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

Por ejemplo, si creas un codespace a partir de la plantilla de React de {% data variables.product.company_short %}, llegarás a un área de trabajo que contiene archivos de plantilla para una aplicación sencilla, como `index.js`, `app.js` y `package.json`. Poco después de que se abra el codespace, se iniciará automáticamente un servidor de desarrollo y podrás ver la aplicación en ejecución en una pestaña sencilla del explorador en el cliente web de {% data variables.product.prodname_vscode_shortname %}.

![Captura de pantalla de la plantilla de React que se ejecuta en un codespace](/assets/images/help/codespaces/react-template.png)

Los archivos y la configuración incluidos en las plantillas se definen en repositorios de plantilla. El repositorio de plantilla se clona en el codespace al crear el codespace. Después, se corta el vínculo y el codespace no se vincula a un repositorio remoto hasta que publicas en uno. 

{% tip %}

**Sugerencia:** Para ayudar a los usuarios a empezar a trabajar con el marco, la biblioteca u otro proyecto, puedes configurar un repositorio de plantilla para utilizarlo con {% data variables.product.prodname_github_codespaces %}. Para obtener más información, consulta "[Configuración de un repositorio de plantilla para {% data variables.product.prodname_github_codespaces %}](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces)".

{% endtip %}

## Creación de un codespace a partir de una plantilla de {% data variables.product.company_short %}

Las plantillas que mantiene {% data variables.product.company_short %}, incluida la plantilla en blanco, están disponibles en la página "Tus codespaces".

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. Opcionalmente, para ver el repositorio de plantilla que contiene los archivos de una plantilla, haz clic en el nombre de la plantilla.

   ![Captura de pantalla de la sección "Explorar plantillas de inicio rápido", con la opción "React" resaltada](/assets/images/help/codespaces/react-template-name.png)

1. En la plantilla que deseas iniciar, haz clic en **Usar esta plantilla**.
   
   ![Captura de pantalla de las plantillas de inicio rápido, con el botón "Usar esta plantilla" resaltado en la plantilla React](/assets/images/help/codespaces/react-template-button.png)

{% data reusables.codespaces.template-codespaces-default-editor %}

## Creación de un codespace a partir de un repositorio de plantilla

Puedes crear un codespace a partir de cualquier repositorio de plantilla y, a continuación, publicar tu trabajo en un nuevo repositorio cuando estés a punto. Para obtener más información sobre los repositorios de plantilla, consulta "[Crear un repositorio desde una plantilla](/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#about-repository-templates)".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.codespaces.open-template-in-codespace-step %}

   {% note %}

   **Nota:** Si eres el responsable del mantenimiento del repositorio de plantilla y deseas confirmar los cambios en el propio repositorio de plantilla, debes crear un codespace a partir de la lista desplegable **{% octicon "code" aria-label="The code icon" %} Código**. Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)".

   {% endnote %}

{% data reusables.codespaces.template-codespaces-default-editor %}

## Publicación en un repositorio en {% data variables.product.product_name %}

{% data reusables.codespaces.about-publishing-templates %}

### Publicación desde {% data variables.product.prodname_vscode_shortname %} 

{% data reusables.codespaces.publishing-template-codespaces %}

Cuando se publica un codespace, tienes acceso a una mayor variedad de opciones para personalizar tu experiencia de {% data variables.product.prodname_github_codespaces %}. Por ejemplo, se puede:

- Cambiar el tipo de máquina del codespace para asegurarse de que se usan los recursos adecuados para el trabajo que se está realizando (consulta "[Cambiar el tipo de máquina de tu codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)").
- Permitir que {% data variables.product.prodname_dotcom %} use automáticamente GPG para firmar las confirmaciones que se realizan en el codespace (consulta "[Administración de la comprobación de GPG para {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)").
- Compartir secretos cifrados con el codespace (consulta "[Administrar secretos cifrados para tus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)").

### Publicación desde {% data variables.product.prodname_dotcom_the_website %} 

Puedes publicar un codespace no publicado desde la página "Tus codespaces" en {% data variables.product.prodname_dotcom_the_website %}. Esto resulta útil si deseas publicar un codespace que no tienes abierto actualmente en el explorador. Si lo haces, el trabajo se conservará en un repositorio, pero no habrá un vínculo entre el codespace existente y el nuevo repositorio. Sin embargo, puedes ir al nuevo repositorio y crear un codespace desde allí, y este codespace estará conectado al repositorio.

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. Junto al codespace no publicado, haz clic en los puntos suspensivos ( **...** ) y selecciona **Publicar en un nuevo repositorio**.

   ![Captura de pantalla del botón "Publicar en un nuevo repositorio"](/assets/images/help/codespaces/publish-to-new-repository.png)
1. Elige un nombre para el nuevo repositorio, establécelo como **Público** o **Privado** y haz clic en **Crear repositorio**.

   ![Captura de pantalla del menú desplegable "Publicar en un nuevo repositorio"](/assets/images/help/codespaces/template-new-repository-settings.png)
1. Opcionalmente, para ver el nuevo repositorio, haz clic en **Ver repositorio**.

## Información adicional

- "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)"
- "[Ciclo de vida de un codespace](/codespaces/getting-started/the-codespace-lifecycle)"
- "[Utilizar el control de código fuente en tu codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)"
