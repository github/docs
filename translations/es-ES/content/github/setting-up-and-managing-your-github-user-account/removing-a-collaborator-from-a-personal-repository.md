---
title: Eliminar un colaborador de un repositorio personal
intro: 'Cuando eliminas un colaborador de tu proyecto, pierde el acceso de lectura o escritura a tu repositorio. Si el repositorio es privado, y la persona creó una bifurcación, esa bifurcación también se elimina.'
redirect_from:
  - /articles/how-do-i-remove-a-collaborator/
  - /articles/what-happens-when-i-remove-a-collaborator-from-my-private-repository/
  - /articles/removing-a-collaborator-from-a-private-repository/
  - /articles/deleting-a-private-fork-of-a-private-user-repository/
  - /articles/how-do-i-delete-a-fork-of-my-private-repository/
  - /articles/removing-a-collaborator-from-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Accounts
  - Repositories
---

### Eliminar bifurcaciones de repositorios privados

Aunque se borren las bifurcaciones de los repositorios privados cuando se elimina un colaborador, la persona seguirá teniendo todos los clones locales de tu repositorio.

### Eliminar los permisos de colaborador de una persona que contribuye con un repositorio

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-manage-access %}
4. A la derecha del colaborador que quieres eliminar, da clic en
{% octicon "trashcan" aria-label="The trashcan icon" %}.
  ![Botón para eliminar un colaborador](/assets/images/help/repository/collaborator-remove.png)
{% else %}
3. En la barra lateral izquierda, haz clic en **Collaborators & teams** (Colaboradores y equipos). ![Pestaña Collaborators (Colaboradores)](/assets/images/help/repository/repo-settings-collaborators.png)
4. Al lado del colaborador que deseas eliminar, haz clic en el icono **X**. ![Enlace Remove (Eliminar)](/assets/images/help/organizations/Collaborator-Remove.png)
{% endif %}

### Leer más

- "[Eliminar de un equipo a miembros de la organización](/articles/removing-organization-members-from-a-team)"
- "[Eliminar a un colaborador externo desde el repositorio de una organización](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
