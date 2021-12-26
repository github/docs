---
title: Creando un archivo predeterminado para la salud de la comunidad
intro: 'Puedes crear archivos predeterminados para la salud de la comunidad, como CONTRIBUTING (Contribuciones) y CODE_OF_CONDUCT (Código de conducta). Default files will be used for any repository owned by the account that does not contain its own file of that type.'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Community
---

### Acerca de los archivos predeterminados del estado de la comunidad

Puedes agregar archivos de salud de comunidad predeterminados a la raíz de un repositorio público que se llame `.github` y que pertenezca a una cuenta de organización{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} o de usuario{% endif %}.

{% data variables.product.product_name %} will use and display default files for any repository owned by the account that does not have its own file of that type in any of the following places:
- la raíz del repositorio
- la carpeta `.github`
- la carpeta `docs`

For example, anyone who creates an issue or pull request in a repository that does not have its own CONTRIBUTING file will see a link to the default CONTRIBUTING file. Si un repositorio tiene algún archivo en su propia carpeta de `.github/ISSUE_TEMPLATE`{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}, incluyendo plantillas de propuestas o un archivo *config.yml*,{% endif %} no se utilizará nigún contenido de la carpeta predeterminada `.github/ISSUE_TEMPLATE`.

Los archivos predeterminados no están incluidos en los clones, paquetes ni descargas de repositorios individuales porque se almacenan únicamente en el repositorio `.github`.

### Tipos de archivos admitidos

Puedes crear versiones predeterminadas en tu cuenta de organización{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} o de usuario{% endif %} para los siguientes archivos de salud de la comunidad:

| Archivo de salud de la comunidad                                                                                                                                                                                      | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| *CODE_OF_CONDUCT.md*                                                                                                                                                                                                | Un archivo CODE_OF_CONDUCT define las normas para participar en una comunidad. Para obtener más información, consulta "[Agregar un código de conducta a tu proyecto](/articles/adding-a-code-of-conduct-to-your-project/)".{% endif %}
| *CONTRIBUTING.md*                                                                                                                                                                                                     | Un archivo CONTRIBUTING comunica cómo pueden contribuir las personas con tu proyecto. Para obtener más información, consulta la sección "[Configurar lineamientos para los colaboradores del repositorio](/articles/setting-guidelines-for-repository-contributors/)".{% if currentVersion == "free-pro-team@latest" %}
| *FUNDING.yml*                                                                                                                                                                                                         | Un archivo FUNDING muestra un botón de patrocinador en tu repositorio para aumentar la visibilidad de las opciones de financiación para tu proyecto de código abierto. Para obtener más información, consulta "[Mostrar un botón de patrocinador en tu repositorio](/articles/displaying-a-sponsor-button-in-your-repository)".{% endif %}
| Plantillas de propuestas y solicitudes de cambio{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} y *config.yml*{% endif %} | Las plantillas de propuestas y solicitudes de extracción personalizan y estandarizan la información que quieres que incluyan los colaboradores cuando abren propuestas y solicitudes de extracción en tu repositorio. Para obtener más información, consulta la sección "[Acerca de las plantillas de propuestas y solicitudes de extración](/articles/about-issue-and-pull-request-templates/)".{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
| *SECURITY.md*                                                                                                                                                                                                         | Un archivo de seguridad proporciona indicaciones para saber cómo reportar la vulnerabilidad de seguridad de tu proyecto. Para obtener más información, consulta "[Aumentar la seguridad para tu repositorio](/code-security/getting-started/adding-a-security-policy-to-your-repository)".{% endif %}
| *SUPPORT.md*                                                                                                                                                                                                          | Un archivo SOPPORT les permite a las personas conocer las formas de obtener ayuda con tu proyecto. Para obtener más información, consulta "[Agregar recursos de soporte a tu proyecto](/articles/adding-support-resources-to-your-project/)."                                                                                                                                                                                                                                                       |

No puedes crear un archivo de licencia predeterminado. Los archivos de licencia se deben agregar a repositorios individuales, de manera que el archivo se incluirá cuando el proyecto se clone, se coloque dentro de un paquete o se descargue.

### Crear un repositorio para archivos predeterminados

{% data reusables.repositories.create_new %}
2. Utiliza el menú desplegable de **Propietario** y selecciona la cuenta de organización{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} o de usuario{% endif %} para la cual quieras crear archivos predeterminados. ![Menú desplegable Propietario](/assets/images/help/repository/create-repository-owner.png)
3. Escribe **.github** como nombre para tu repositorio y escribe una descripción opcional. ![Crear un campo de repositorio](/assets/images/help/repository/default-file-repository-name.png)
4. Asegúrate de que el estado del repositorio se encuentre configurado en **Público** (los repositorios para los archivos predeterminados no pueden ser privados). ![Botones de selección para seleccionar el estado público o privado](/assets/images/help/repository/create-repository-public-private.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. En el repositorio, crea uno de los archivos admitidos de estado de la comunidad. Las plantillas de propuesta{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} y su archivo de configuración{% endif %}deben estar en una carpeta que se llame `.github/ISSUE_TEMPLATE`. Todos los demás archivos admitidos deben estar en la raíz del repositorio. Para obtener más información, consulta "[Crear nuevos archivos](/articles/creating-new-files/)."
