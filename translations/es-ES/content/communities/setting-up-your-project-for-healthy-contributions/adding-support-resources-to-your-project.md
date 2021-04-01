---
title: Agregar recursos de soporte a tu proyecto
intro: Puedes crear un archivo de SOPORTE para permitir que las personas conozcan nueva maneras de obtener ayuda con tu proyecto.
redirect_from:
  - /articles/adding-support-resources-to-your-project
  - /github/building-a-strong-community/adding-support-resources-to-your-project
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - comunidad
---

Para dirigir a las personas hasta recursos de soporte específicos, puedes agregar un archivo de SOPORTE a tu raíz de repositorio, `docs` (documentos), o carpeta `.github`. Cuando alguien crea una propuesta en tu repositorio, verá un enlace en el archivo de SOPORTE de tu proyecto.

![Lineamientos de soporte](/assets/images/help/issues/support_guidelines_in_issue.png)

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

Puedes crear recursos de apoyo predeterminados para tu cuenta de organización o de usuario. Para obtener más información, consulta "[Crear un archivo de salud predeterminado para la comunidad](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

{% tip %}

**Sugerencia:** Para ayudar a las personas a buscar sus lineamientos de soporte, puedes vincular tu archivo de SOPORTE desde otros lugares en tu repositorio, como tu [archivo README](/articles/about-readmes/).

{% endtip %}

### Agregar recursos de soporte a tu proyecto

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. En el campo de nombre del archivo, escribe *SUPPORT.md* (todo en mayúsculas.
4. En la pestaña **Edit new file** (Editar archivo nuevo), agrega la información sobre las personas que pueden obtener soporte para tu proyecto.
5. Para revisar tu archivo de SOPORTE, haz clic en **Preview** (Vista previa).
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
