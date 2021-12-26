---
title: Crear un repositorio nuevo
intro: Puedes crear un repositorio nuevo en tu cuenta personal o la cuenta de cualquier organización en la que tengas los permisos suficientes.
redirect_from:
  - /creating-a-repo/
  - /articles/creating-a-repository-in-an-organization/
  - /articles/creating-a-new-organization-repository/
  - /articles/creating-a-new-repository
  - /articles/creating-an-internal-repository
  - /github/setting-up-and-managing-your-enterprise-account/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-new-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% tip %}

**Sugerencia:** Los propietarios pueden restringir los permisos de creación de repositorios en una organización. Para obtener más información, consulta "[Restringir la creación de repositorios en tu organización](/articles/restricting-repository-creation-in-your-organization)".

{% endtip %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also create a repository using the {% data variables.product.prodname_cli %}. For more information, see "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" in the {% data variables.product.product_location %} documentation.

{% endtip %}
{% endif %}

{% data reusables.repositories.create_new %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
2. Otra opción para crear un repositorio con la estructura del directorio y los archivos de un repositorio existente es usar el menú desplegable **Elegir una plantilla** y seleccionar un repositorio de plantillas. Verás repositorios de plantillas que te pertenecen a ti y a las organizaciones de las que eres miembro o bien repositorios de plantillas que has usado anteriormente. Para obtener más información, consulta "[Crear un repositorio a partir de una plantilla](/articles/creating-a-repository-from-a-template)". ![Template drop-down menu](/assets/images/help/repository/template-drop-down.png){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
3. De manera opcional, si decides utilizar una plantilla, para incluir la estructura del directorio y los archivos de todas las ramas en la misma y no solo la rama predeterminada, selecciona **Incluir todas las ramas**. ![Include all branches checkbox](/assets/images/help/repository/include-all-branches.png){% endif %}{% endif %}
3. En el menú desplegable de Propietario, selecciona la cuenta en la cual quieres crear el repositorio. ![Menú desplegable Propietario](/assets/images/help/repository/create-repository-owner.png)
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
6. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}Si no estás usando una plantilla, {% else %}hay{% endif %} una serie de elementos opcionales con los que puedes completar tu repositorio en forma previa. Si estás importando un repositorio existente a {% data variables.product.product_name %}, no elijas ninguna de estas opciones, ya que producirás un conflicto de fusión. Puedes {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.15" %}agregar o crear archivos nuevos usando la interfaz de usuario o {% endif %}elegir agregar archivos nuevos usando luego la línea de comando. Para obtener más información, consulta "[Importar un repositorio Git usando la línea de comando](/articles/importing-a-git-repository-using-the-command-line/)," "[Agregar un archivo a un repositorio usando la línea de comando](/articles/adding-a-file-to-a-repository-using-the-command-line)," y "[Resolver conflictos de fusión](/articles/addressing-merge-conflicts/)".
    - Puedes crear un README, que es un documento que describe tu proyecto. Para obtener más información, consulta "[Acerca de los README](/articles/about-readmes/)".
    - Puedes crear un archivo *.gitignore*, que es un conjunto de reglas de ignorar. Para obtener más información, consulta "[Ignorar archivos](/articles/ignoring-files)".{% if currentVersion == "free-pro-team@latest" %}
    - Puedes elegir agregar una licencia de software a tu proyecto. Para más información, consulta "[Licenciando un repositorio](/articles/licensing-a-repository)."{% endif %}
{% data reusables.repositories.select-marketplace-apps %}
{% data reusables.repositories.create-repo %}
{% if currentVersion == "free-pro-team@latest" %}
9. En la parte inferior de la página de Configuración rápida resultante, en "Importar el código del repositorio anterior", puedes elegir importar un proyecto en tu nuevo repositorio. Para hacerlo, haz clic en **Importar código**.
{% endif %}

### Leer más

- [Administrar el acceso a los repositorios de tu organización](/articles/managing-access-to-your-organization-s-repositories)"
- [Guías de código abierto](https://opensource.guide/){% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.16" %}
- "[Initializar un repositorio vacío con un README](/articles/initializing-an-empty-repository-with-a-readme)"{% endif %}
