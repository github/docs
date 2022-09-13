---
title: Referenciar y citar contenido
intro: Puedes utilizar herramientas de terceros para citar y referenciar contenido en GitHub.
redirect_from:
  - /articles/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/referencing-and-citing-content
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Reference & cite content
ms.openlocfilehash: e0bb3dabe5e9ebc8a4dff80797087c8adadfb710
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145137046'
---
## Emitir un identificador persistente para tu repositorio con Zenodo

Para hacer que sea más sencillo referenciar tus repositorios en la literatura académica, puedes crear identificadores persistentes, también conocidos como Identificadores de Objetos Digitales (DOI). Puedes utilizar la herramienta de archivado de datos [Zenodo](https://zenodo.org/about) para archivar un repositorio en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} y emitir un DOI para el archivo.

{% tip %}

**Sugerencias:**
- Zenodo solo puede acceder a repositorios públicos, por lo que asegúrate de que el repositorio que quieres archivar sea [público](/articles/making-a-private-repository-public).
- Si quieres archivar un repositorio que pertenece a una organización, es posible que el propietario de la organización tenga que [aprobar el acceso](/articles/approving-oauth-apps-for-your-organization) para la aplicación Zenodo.
- Asegúrate de incluir una [licencia](/articles/open-source-licensing) en el repositorio para que los lectores sepan cómo pueden reutilizar el trabajo.

{% endtip %}

1. Desplázate hasta [Zenodo](http://zenodo.org/).
2. En la esquina superior izquierda de la pantalla, haz clic en **Registrar**. ![Botón Registrarse en Zenodo](/assets/images/help/repository/zenodo_login.png)
3. Haz clic en **Registrarse con GitHub**. ![Registrarse en Zenodo con GitHub](/assets/images/help/repository/zenodo_login_with_github.png)
4. Revisa la información acerca de los permisos de acceso y luego haz clic en **Autorizar aplicación**. ![Autorizar Zenodo](/assets/images/help/repository/zenodo_authorize.png)
5. Desplázate hasta la [página de GitHub de Zenodo](https://zenodo.org/account/settings/github/). ![Página de GitHub de Zenodo](/assets/images/help/repository/zenodo_github_page.png)
6. A la derecha del nombre del repositorio que quieres archivar, cambia el botón de **Desactivado** a **Activado** para habilitarlo para el archivado. ![Habilitar que Zenodo archive en el repositorio](/assets/images/help/repository/zenodo_toggle_on.png)

Zenodo archiva el repositorio y emite un nuevo DOI cada vez que creas una nueva [versión](/articles/about-releases/) de {% data variables.product.product_name %}. Sigue los pasos que se describen en "[Creación de versiones](/articles/creating-releases/)" para crear una nueva.

## Publicitar y citar material de investigación con Figshare

Los académicos pueden usar el servicio de administración de datos [Figshare](http://figshare.com) para publicitar y citar material de investigación. Para obtener más información, consulta el [sitio de soporte técnico de Figshare](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account).
