---
title: Agregar una licencia a un repositorio
intro: Puedes incluir una licencia de código abierto en tu repositorio para que simplifique la contribución de otras personas.
redirect_from:
  - /articles/adding-a-license-to-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Si incluyes una licencia detectable en tu repositorio, las personas que visiten tu repositorio la verán en la parte superior de la página del repositorio. Para leer el archivo de licencia completa, haz clic en el nombre de la licencia.

![Un encabezado de repositorio con una licencia MIT](/assets/images/help/repository/repo-license-indicator.png)

Las licencias de código abierto permiten que otras personas usen, cambien y distribuyan el proyecto en tu repositorio. Para más información sobre las licencias de repositorios, consulta "[Licenciar un repositorio](/articles/licensing-a-repository)".

### Incluir una licencia de código abierto en tu repositorio

<!--Dotcom version uses the license tool-->
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. En el campo del nombre del archivo, escribe *LICENSE* o *LICENSE.md* (todo en mayúscula).
4. A la derecha del campo del nombre del archivo, haz clic en **Elegir una plantilla de licencia**. ![Elige un botón para la plantilla de licencia](/assets/images/help/repository/license-tool.png)
5. En el lateral izquierdo de la página, en "Agregar una licencia a tu proyecto", revisa las licencias disponibles, luego selecciona una licencia de la lista. ![Lista de licencias disponibles](/assets/images/help/repository/license-tool-picker.png)
6. Haz clic en **Review and submit** (Revisar y enviar). ![Botón Review and submit (Revisar y enviar)](/assets/images/help/repository/license-review-tool.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.choose-commit-email %}
10. Haz clic en **Commit new file** (Confirmar archivo nuevo). ![Confirmar licencia a la rama](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

<!--GHE version just adds a file named LICENSE or LICENSE.md-->
{% if currentVersion != "free-pro-team@latest" %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. En el campo del nombre del archivo, escribe *LICENSE* o *LICENSE.md* (todo en mayúscula).
4. En la pestaña **Edit new file** (Editar archivo nuevo), pega el texto completo de la licencia que deseas usar.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
7. Debajo de los campos del mensaje de confirmación, decide si deseas agregar tu confirmación a la rama actual o a una rama nueva. Si tu rama actual es `main`, deberás elegir crear una nueva rama para tu confirmación y luego crear una solicitud de extracción. Para obtener más información, consulta la sección"[Crear una solicitud de extracción](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)". ![Confirmar opciones de rama](/assets/images/help/repository/choose-commit-branch.png)
8. Haz clic en **Commit new file** (Confirmar archivo nuevo). ![Confirmar licencia a la rama](/assets/images/help/repository/license-submit-tool.png)

{% endif %}

### Leer más

- "[Configurar pautas para los colaboradores de repositorios](/articles/setting-guidelines-for-repository-contributors)"
