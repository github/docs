---
title: Creando un archivo predeterminado para la salud de la comunidad
intro: 'Puedes crear archivos predeterminados para la salud de la comunidad, como CONTRIBUTING (Contribuciones) y CODE_OF_CONDUCT (Código de conducta). Los archivos predeterminados se utilizarán para cualquier repositorio público propiedad de la cuenta que no contenga su propio archivo de ese tipo.'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
### Acerca de los archivos predeterminados del estado de la comunidad

Puedes añadir archivos de salud predeterminados para la comunidad en la raíz del repositorio público llamada `gihub` que sea propiedad de una organización {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} o cuenta de usuario{% endif %}.

{% data variables.product.product_name %} utilizará y mostrará los archivos predeterminados para cualquier repositorio público que sea propiedad de la cuenta que no tiene su propio archivo de ese tipo en ninguno de los siguientes lugares:
- la raíz del repositorio
- la carpeta `.github`
- la carpeta `docs`

Por ejemplo, una persona que cree una propuesta o solicitud de extracción en un repositorio público que no tenga su propio archivo CONTRIBUTING verá un enlace al archivo CONTRIBUTING predeterminado. Si un repositorio tiene cualquier archivo en su propia carpeta {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} de `.github/ISSUE_TEMPLATE`, incluyendo las plantillas de reporte de problemas o un archivo{% endif %}de *config.yml*, no se utilizará ninguno de los contenidos de la carpeta `.github/ISSUE_TEMPLATE`.

Los archivos predeterminados no están incluidos en los clones, paquetes ni descargas de repositorios individuales porque se almacenan únicamente en el repositorio `.github`.

### Tipos de archivos admitidos

Puedes crear versiones predeterminadas en tu organización{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} o cuenta de usuario{% endif %} para los siguientes archivos de salud de la comunidad:

| Archivo de salud de la comunidad                                                                                                                        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| *CODE_OF_CONDUCT.md*                                                                                                                                  | Un archivo CODE_OF_CONDUCT define las normas para participar en una comunidad. Para obtener más información, consulta "[Agregar un código de conducta a tu proyecto](/articles/adding-a-code-of-conduct-to-your-project/)".{% endif %}
| *CONTRIBUTING.md*                                                                                                                                       | Un archivo CONTRIBUTING comunica cómo pueden contribuir las personas con tu proyecto. Para obtener más información, consulta "[Establecer pautas para los colaboradores del repositorio](/articles/setting-guidelines-for-repository-contributors/)".{% if currentVersion == "free-pro-team@latest" %}
| *FUNDING.yml*                                                                                                                                           | Un archivo FUNDING muestra un botón de patrocinador en tu repositorio para aumentar la visibilidad de las opciones de financiación para tu proyecto de código abierto. Para obtener más información, consulta "[Mostrar un botón de patrocinador en tu repositorio](/articles/displaying-a-sponsor-button-in-your-repository)".{% endif %}
| Plantillas de reporte de problemas y solicitudes de extracción{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} y *config.yml*{% endif %} | Las plantillas de propuestas y solicitudes de extracción personalizan y estandarizan la información que quieres que incluyan los colaboradores cuando abren propuestas y solicitudes de extracción en tu repositorio. Para obtener más información, consulta "[Acerca de las plantillas de propuestas y de solicitudes de extracción](/articles/about-issue-and-pull-request-templates/)".{% if currentVersion == "free-pro-team@latest" %}
| *SECURITY.md*                                                                                                                                           | Un archivo SECURITY da indicaciones para informar responsablemente acerca de una vulnerabilidad de seguridad en tu proyecto. Para obtener más información, consulta "[Aumentar la seguridad para tu repositorio](/articles/adding-a-security-policy-to-your-repository)".{% endif %}
| *SUPPORT.md*                                                                                                                                            | Un archivo SOPPORT les permite a las personas conocer las formas de obtener ayuda con tu proyecto. Para obtener más información, consulta "[Agregar recursos de soporte a tu proyecto](/articles/adding-support-resources-to-your-project/)."                                                                                                                                                                               |

No puedes crear un archivo de licencia predeterminado. Los archivos de licencia se deben agregar a repositorios individuales, de manera que el archivo se incluirá cuando el proyecto se clone, se coloque dentro de un paquete o se descargue.

### Crear un repositorio para archivos predeterminados

{% data reusables.repositories.create_new %}
2. Utiliza el menú desplegable en **Propietario**, y selecciona la organización{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} o cuenta de usuario{% endif %} para la cual quieres crear los archivos predeterminados. ![Menú desplegable Propietario](/assets/images/help/repository/create-repository-owner.png)
3. Escribe **.github** como nombre para tu repositorio y escribe una descripción opcional. ![Crear un campo de repositorio](/assets/images/help/repository/default-file-repository-name.png)
4. Elige hacer que el repositorio sea público. ![Botones de selección para seleccionar el estado público o privado](/assets/images/help/repository/create-repository-public-private.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. En el repositorio, crea uno de los archivos admitidos de estado de la comunidad. Las plantillas de reporte de problemas{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} y su archivo de configuración{% endif %} deben estar en una carpeta llamada `.github/ISSUE_TEMPLATE`. Todos los demás archivos admitidos deben estar en la raíz del repositorio. Para obtener más información, consulta "[Crear nuevos archivos](/articles/creating-new-files/)."
