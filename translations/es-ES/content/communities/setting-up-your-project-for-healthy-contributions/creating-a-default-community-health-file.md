---
title: Creando un archivo predeterminado para la salud de la comunidad
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
shortTitle: Archivo de salud de la comunidad
---

## Acerca de los archivos predeterminados del estado de la comunidad

Puedes agregar archivos de salud comunitaria predeterminados a un repositorio público llamado `.github` en la raíz del repositorio o en las carpetas de `docs` o de `.github` .

{% data variables.product.product_name %} utilizará y mostrará los archivos predeterminados para cualquier repositorio que pertenezca a la cuenta que no tenga su propio archivo de ese tipo en cualquiera de los siguientes lugares:
- la raíz del repositorio
- la carpeta `.github`
- la carpeta `docs`

Por ejemplo, cualquiera que crea una propuesta o solicitud de cambios en un repositorio que no tenga su propio archivo de "CONTRIBUTING" verá un enlace en el archivo "CONTRIBUTING" predeterminado. Si un repositorio tiene cualquier archivo en su propia carpeta {% ifversion fpt or ghes or ghec %} de `.github/ISSUE_TEMPLATE`, incluyendo las plantillas de reporte de problemas o un archivo{% endif %}de *config.yml*, no se utilizará ninguno de los contenidos de la carpeta `.github/ISSUE_TEMPLATE`.

Los archivos predeterminados no están incluidos en los clones, paquetes ni descargas de repositorios individuales porque se almacenan únicamente en el repositorio `.github`.

## Tipos de archivos admitidos

Puedes crear recursos predeterminados en tu cuenta de organización{% ifversion fpt or ghes or ghec %} o personal{% endif %} para los siguientes archivos de salud comunitaria:

| Archivo de salud de la comunidad                                                                                            | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion fpt or ghec %}
| *CODE_OF_CONDUCT.md*                                                                                                      | Un archivo CODE_OF_CONDUCT define las normas para participar en una comunidad. Para obtener más información, consulta "[Agregar un código de conducta a tu proyecto](/articles/adding-a-code-of-conduct-to-your-project/)".{% endif %}
| *CONTRIBUTING.md*                                                                                                           | Un archivo CONTRIBUTING comunica cómo pueden contribuir las personas con tu proyecto. Para obtener más información, consulta "[Establecer pautas para los colaboradores del repositorio](/articles/setting-guidelines-for-repository-contributors/)".{% ifversion fpt or ghec %}
| *FUNDING.yml*                                                                                                               | Un archivo FUNDING muestra un botón de patrocinador en tu repositorio para aumentar la visibilidad de las opciones de financiación para tu proyecto de código abierto. Para obtener más información, consulta "[Mostrar un botón de patrocinador en tu repositorio](/articles/displaying-a-sponsor-button-in-your-repository)".{% endif %}
| Plantillas de reporte de problemas y solicitudes de extracción{% ifversion fpt or ghes or ghec %} y *config.yml*{% endif %} | Las plantillas de propuestas y solicitudes de extracción personalizan y estandarizan la información que quieres que incluyan los colaboradores cuando abren propuestas y solicitudes de extracción en tu repositorio. Para obtener más información, consulta "[Acerca de las plantillas de propuestas y de solicitudes de extracción](/articles/about-issue-and-pull-request-templates/)".{% ifversion fpt or ghes or ghec %}
| *SECURITY.md*                                                                                                               | Un archivo de seguridad proporciona indicaciones para saber cómo reportar la vulnerabilidad de seguridad de tu proyecto. Para obtener más información, consulta "[Aumentar la seguridad para tu repositorio](/code-security/getting-started/adding-a-security-policy-to-your-repository)".{% endif %}
| *SUPPORT.md*                                                                                                                | Un archivo SOPPORT les permite a las personas conocer las formas de obtener ayuda con tu proyecto. Para obtener más información, consulta "[Agregar recursos de soporte a tu proyecto](/articles/adding-support-resources-to-your-project/)."                                                                                                                                                                                 |

No puedes crear un archivo de licencia predeterminado. Los archivos de licencia se deben agregar a repositorios individuales, de manera que el archivo se incluirá cuando el proyecto se clone, se coloque dentro de un paquete o se descargue.

## Crear un repositorio para archivos predeterminados

{% data reusables.repositories.create_new %}
2. Utiliza el menú desplegable de **Propietario** y selecciona a la cuenta de organización{% ifversion fpt or ghes or ghec %} o personal{% endif %} para la cual quieras crear archivos predeterminados. ![Menú desplegable Propietario](/assets/images/help/repository/create-repository-owner.png)
3. Escribe **.github** como nombre para tu repositorio y escribe una descripción opcional. ![Crear un campo de repositorio](/assets/images/help/repository/default-file-repository-name.png)
4. Asegúrate de que el estado del repositorio se encuentre configurado en **Público** (los repositorios para los archivos predeterminados no pueden ser privados). ![Botones de selección para seleccionar el estado público o privado](/assets/images/help/repository/create-repository-public-private.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. En el repositorio, crea uno de los archivos admitidos de estado de la comunidad. Las plantillas de reporte de problemas{% ifversion fpt or ghes or ghec %} y su archivo de configuración{% endif %} deben estar en una carpeta llamada `.github/ISSUE_TEMPLATE`. El resto de los archivos compatibles podrían estar en la raíz del repositorio, en la carpeta de `.github` o en la de `docs`. Para obtener más información, consulta "[Crear nuevos archivos](/articles/creating-new-files/)."
