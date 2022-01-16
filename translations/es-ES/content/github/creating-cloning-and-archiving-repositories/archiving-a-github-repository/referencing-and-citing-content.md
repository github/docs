---
title: Referenciar y citar contenido
intro: Puedes utilizar herramientas de terceros para citar y referenciar contenido en GitHub.
redirect_from:
  - /articles/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/referencing-and-citing-content
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

### Emitir un identificador persistente para tu repositorio con Zenodo

Para hacer que sea más sencillo referenciar tus repositorios en la literatura académica, puedes crear identificadores persistentes, también conocidos como Identificadores de Objetos Digitales (DOI). Puedes utilizar la herramienta de archivo de datos [Zenodo](https://zenodo.org/about) para archivar un repositorio {% data variables.product.product_name %} y emitir un DOI para el archivo.

{% tip %}

**Tips:**
- Zenodo puede acceder solo a repositorios públicos, así que asegúrate de que el repositorio que quieres archivar sea [público](/articles/making-a-private-repository-public).
- Si quieres archivar un repositorio que le pertenece a una organización, puede que el propietario de la organización deba [aprobar el acceso](/articles/approving-oauth-apps-for-your-organization) para la aplicación Zenodo.
- Asegúrate de incluir una [licencia](/articles/open-source-licensing) en tu repositorio para que los lectores sepan cómo pueden reutilizar tu trabajo.

{% endtip %}

1. Navega hasta [Zenodo](http://zenodo.org/).
2. En la esquina superior izquierda de la pantalla, haz clic en **Log in** (Registrarse). ![Botón Zenodo log in (Registrarse en Zenodo)](/assets/images/help/repository/zenodo_login.png)
3. Haz clic en **Log in with GitHub** (Registrarse con GitHub). ![Registrarse en Zenodo con GitHub](/assets/images/help/repository/zenodo_login_with_github.png)
4. Revisa la información acerca de los permisos de acceso, luego haz clic en **Authorize application** (Autorizar aplicación). ![Autorizar Zenodo](/assets/images/help/repository/zenodo_authorize.png)
5. Navega hasta la [Página de GitHub de Zenodo](https://zenodo.org/account/settings/github/). ![Página de GitHub de Zenodo](/assets/images/help/repository/zenodo_github_page.png)
6. A la derecha del nombre del repositorio que quieras archivar, cambia el botón de **Off** (Apagado) a **On** (Encendido) para habilitarlo para el archivo. ![Habilitar que Zenodo archive en el repositorio](/assets/images/help/repository/zenodo_toggle_on.png)

Zenodo archiva tu repositorio y emite un DOI nuevo cada vez que creas un {% data variables.product.product_name %} [lanzamiento](/articles/about-releases/) nuevo. Sigue los pasos en "[Creating releases](/articles/creating-releases/)" (Crear lanzamientos) para crear uno nuevo.

### Publicitar y citar material de investigación con Figshare

Los académicos pueden utilizar el servicio de gestión de datos [Figshare](http://figshare.com) para publicitar y citar el material de investigación. Para obtener más información, consulta el [Sitio de asistencia de Figshare](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account).
