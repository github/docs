---
title: Asignar propuestas y solicitudes de extracción a otros usuarios de GitHub
intro: Los asignatarios aclaran quién está trabajando en propuestas y solicitudes de extracción específicas.
redirect_from:
  - /articles/assigning-issues-and-pull-requests-to-other-github-users
  - /github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
Cualquier persona con permisos de escritura en un repositorio puede asignar propuestas y solicitudes de extracción.

Puedes asignar hasta 10 personas a cada propuesta o solicitudes de extracción, incluido tú mismo, {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %} a cualquier persona que haya comentado sobre la propuesta o la solicitud de extracción,{% endif %} o cualquier persona con permisos de escritura en el repositorio, y miembros de la organización con permisos de lectura en el repositorio. Para obtener más información, consulta "[Permisos de acceso en {% data variables.product.prodname_dotcom %}](/articles/access-permissions-on-github)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Selecciona la casilla de verificación junto a los elementos que deseas asignar a alguien. ![Casilla de verificación de metadatos de propuestas](/assets/images/help/issues/issues_assign_checkbox.png)
4. En el margen superior derecho, haz clic en **Assignee** (Asignatario).
5. Para asignar los elementos a un usuario, comienza escribiendo su nombre de usuario, luego haz clic en su nombre cuando aparezca. Puedes seleccionar y asignar hasta 10 asignatarios a una propuesta o solicitud de extracción. ![Desplegable de la asignación de propuestas](/assets/images/help/issues/issues_assigning_dropdown.png)

### Leer más

* "[Filtrar propuestas y solicitudes de extracción por asignatarios](/articles/filtering-issues-and-pull-requests-by-assignees)"
