---
title: Creación de un archivo predeterminado de mantenimiento de la comunidad
intro: 'Puedes crear archivos predeterminados para la salud de la comunidad, como CONTRIBUTING (Contribuciones) y CODE_OF_CONDUCT (Código de conducta). Los archivos predeterminados se utilizarán para cualquier repositorio que pertenezca a la cuenta que no contiene su propio archivo de este tipo.'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Community health file
ms.openlocfilehash: 762af2fcbbc16e0bfc671df2409fede9ea6e2c67
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117634'
---
## Acerca de los archivos predeterminados del estado de la comunidad

Puede agregar archivos de mantenimiento de la comunidad predeterminados a un repositorio público denominado `.github`, en la raíz del repositorio o en las carpetas `docs` o `.github`.

{% data variables.product.product_name %} utilizará y mostrará los archivos predeterminados para cualquier repositorio que pertenezca a la cuenta que no tenga su propio archivo de ese tipo en cualquiera de los siguientes lugares:
- la raíz del repositorio
- La carpeta `.github`
- La carpeta `docs`

Por ejemplo, cualquiera que crea una propuesta o solicitud de cambios en un repositorio que no tenga su propio archivo de "CONTRIBUTING" verá un enlace en el archivo "CONTRIBUTING" predeterminado. Si un repositorio tiene archivos en una carpeta `.github/ISSUE_TEMPLATE` propia{% ifversion fpt or ghes or ghec %}, incluidas las plantillas de incidencia o un archivo *config.yml*,{% endif %} no se usará el contenido de la carpeta `.github/ISSUE_TEMPLATE` predeterminada.

Los archivos predeterminados no están incluidos en los clones, paquetes ni descargas de repositorios individuales porque solo se almacenan en el repositorio `.github`.

## Tipos de archivo admitidos

Puedes crear valores predeterminados en tu cuenta de la organización{% ifversion fpt or ghes or ghec %} o personal{% endif %} para los siguientes archivos de estado de la comunidad:

Archivo de estado de la comunidad | Descripción --- | ---{% ifversion fpt or ghec %} *CODE_OF_CONDUCT.md* | Un archivo CODE_OF_CONDUCT define los estándares de participación en una comunidad. Para más información, vea "[Adición de un código de conducta al proyecto](/articles/adding-a-code-of-conduct-to-your-project/)".{% endif %} *CONTRIBUTING.md* | Un archivo CONTRIBUTING comunica cómo deben contribuir al proyecto los usuarios. Para más información, vea "[Establecimiento de instrucciones para colaboradores del repositorio](/articles/setting-guidelines-for-repository-contributors/)".{% ifversion fpt or ghec %} *FUNDING.yml* | Un archivo FUNDING muestra un botón de patrocinador en el repositorio para aumentar la visibilidad de las opciones de financiación para el proyecto de código abierto. Para más información, vea "[Representación de un botón de patrocinador en el repositorio](/articles/displaying-a-sponsor-button-in-your-repository)".{% endif %} Plantillas de incidencia y solicitud de incorporación de cambios{% ifversion fpt or ghes or ghec %} y *config.yml*{% endif %} | Las plantillas de incidencia y solicitud de incorporación de cambios personalizan y estandarizan la información que quiere que los colaboradores incluyan cuando abren incidencias y solicitudes de incorporación de cambios en el repositorio. Para más información, vea "[Acerca de las plantillas de incidencia y solicitud de incorporación de cambios](/articles/about-issue-and-pull-request-templates/)".{% ifversion fpt or ghes or ghec %} *SECURITY.md* | Un archivo SECURITY proporciona instrucciones sobre cómo notificar una vulnerabilidad de seguridad en el proyecto. Para más información, vea "[Adición de una directiva de seguridad al repositorio](/code-security/getting-started/adding-a-security-policy-to-your-repository)".{% endif %} *SUPPORT.md* | Un archivo SUPPORT permite a los usuarios conocer las formas de obtener ayuda con el proyecto. Para más información, vea "[Adición de recursos de soporte técnico al proyecto](/articles/adding-support-resources-to-your-project/)".

No puedes crear un archivo de licencia predeterminado. Los archivos de licencia se deben agregar a repositorios individuales, de manera que el archivo se incluirá cuando el proyecto se clone, se coloque dentro de un paquete o se descargue.

## Crear un repositorio para archivos predeterminados

{% data reusables.repositories.create_new %}
2. Usa el menú desplegable **Propietario** y selecciona la cuenta de la organización{% ifversion fpt or ghes or ghec %} o personal{% endif %} para la que quieras crear archivos predeterminados.
  ![Menú desplegable Propietario](/assets/images/help/repository/create-repository-owner.png)
3. Escriba **.github** como nombre del repositorio y una descripción opcional.
  ![Campo para crear un repositorio](/assets/images/help/repository/default-file-repository-name.png)
4. Asegúrese de que el estado del repositorio se establece en **Público** (los repositorios para los archivos predeterminados no pueden ser privados).
  ![Botones de opción para seleccionar el estado público o privado](/assets/images/help/repository/create-repository-public-private.png) {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}
7. En el repositorio, crea uno de los archivos admitidos de estado de la comunidad. Las plantillas de incidencia{% ifversion fpt or ghes or ghec %} y su archivo de configuración{% endif %} deben estar en una carpeta denominada `.github/ISSUE_TEMPLATE`. Todos los demás archivos admitidos pueden estar en la raíz del repositorio, la carpeta `.github` o la carpeta `docs`. Para más información, vea "[Creación de archivos](/articles/creating-new-files/)".
