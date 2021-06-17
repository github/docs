---
title: Eliminar un repositorio
intro: Puedes eliminar cualquier repositorio o bifurcación si eres un propietario de la organización o si tienes permisos de administración para el repositorio o la bifurcación. Eliminar un repositorio bifurcado no elimina el repositorio ascendente.
redirect_from:
  - /delete-a-repo/
  - /deleting-a-repo/
  - /articles/deleting-a-repository
  - /github/administering-a-repository/deleting-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% data reusables.organizations.owners-and-admins-can %} elimina un repositorio de la organización. Si se ha deshabilitado **Permitir que los miembros eliminen o transfieran repositorios para esta organización**, solo los propietarios de la organización pueden eliminar los repositorios de la organización. {% data reusables.organizations.new-repo-permissions-more-info %}

{% if currentVersion == "free-pro-team@latest" %}
{% warning %}

**Advertencia**: Eliminar un repositorio borrará de manera **permanente** los archivos adjuntos de lanzamiento y los permisos de equipo. Esta acción **no** se puede deshacer.

{% endwarning %}
{% endif %}

Recuerde lo siguiente:
- Eliminar un repositorio privado eliminará todas sus bifurcaciones.
- Eliminar un repositorio público no eliminará sus bifurcaciones.

{% if currentVersion == "free-pro-team@latest" %}
Puede restaurar algunos de los repositorios eliminados en un plazo de 90 días. Para obtener más información, consulta "[Restaurar un repositorio eliminado](/articles/restoring-a-deleted-repository)".
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
2. En la Zona de peligro, haz clic en **Eliminar este repositorio**. ![Botón Eliminar repositorio](/assets/images/help/repository/repo-delete.png)
3. **Lee las advertencias**.
4. Para verificar que está eliminando el repositorio correcto, escribe el nombre del repositorio que deseas eliminar. ![Etiqueta de eliminación](/assets/images/help/repository/repo-delete-confirmation.png)
5. Haga clic en **Comprendo las consecuencias. Eliminar este repositorio**.
