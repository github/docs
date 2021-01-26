---
title: Eliminar un repositorio
intro: Puedes eliminar cualquier repositorio o bifurcación si eres un propietario de la organización o si tienes permisos de administración para el repositorio o la bifurcación. Eliminar un repositorio bifurcado no elimina el repositorio ascendente.
redirect_from:
  - /delete-a-repo/
  - /deleting-a-repo/
  - /articles/deleting-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.organizations.owners-and-admins-can %} elimina un repositorio de la organización. Si se ha deshabilitado **Permitir que los miembros eliminen o transfieran repositorios para esta organización**, solo los propietarios de la organización pueden eliminar los repositorios de la organización. {% data reusables.organizations.new-repo-permissions-more-info %}

{% if currentVersion != "github-ae@latest" %}El borrar un repositorio público no borrará ninguna bifurcación del mismo.{% endif %}

{% warning %}

**Advertencias**:

- El borrar un repositorio borrará los adjuntos del lanzamiento y los permisos de equpo **permanentemente**. Esta acción **no** se puede deshacer.
- El borrar un repositorio privado {% if currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}o interno{% endif %} borrará todas sus bifurcaciones.

{% endwarning %}

{% if currentVersion == "free-pro-team@latest" %}
Puede restaurar algunos de los repositorios eliminados en un plazo de 90 días. Para obtener más información, consulta "[Restaurar un repositorio eliminado](/articles/restoring-a-deleted-repository)".
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
2. En la Zona de peligro, haz clic en **Eliminar este repositorio**. ![Botón Eliminar repositorio](/assets/images/help/repository/repo-delete.png)
3. **Lee las advertencias**.
4. Para verificar que está eliminando el repositorio correcto, escribe el nombre del repositorio que deseas eliminar. ![Etiqueta de eliminación](/assets/images/help/repository/repo-delete-confirmation.png)
5. Haga clic en **Comprendo las consecuencias. Eliminar este repositorio**.
