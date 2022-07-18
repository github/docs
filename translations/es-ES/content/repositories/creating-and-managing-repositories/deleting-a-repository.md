---
title: Eliminar un repositorio
intro: Puedes eliminar cualquier repositorio o bifurcación si eres un propietario de la organización o si tienes permisos de administración para el repositorio o la bifurcación. Eliminar un repositorio bifurcado no elimina el repositorio ascendente.
redirect_from:
  - /delete-a-repo
  - /deleting-a-repo
  - /articles/deleting-a-repository
  - /github/administering-a-repository/deleting-a-repository
  - /github/administering-a-repository/managing-repository-settings/deleting-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

{% data reusables.organizations.owners-and-admins-can %} elimina un repositorio de la organización. Si se ha deshabilitado **Permitir que los miembros eliminen o transfieran repositorios para esta organización**, solo los propietarios de la organización pueden eliminar los repositorios de la organización. {% data reusables.organizations.new-repo-permissions-more-info %}

{% ifversion not ghae %}El borrar un repositorio público no borrará ninguna bifurcación del mismo.{% endif %}

{% warning %}

**Advertencias**:

- El borrar un repositorio borrará los adjuntos del lanzamiento y los permisos de equpo **permanentemente**. Esta acción **no** se puede deshacer.
- El borrar un repositorio privado{% ifversion ghes or ghec or ghae %} o interno{% endif %} borrará también todas sus bifurcaciones.

{% endwarning %}

Algunos repositorios borrados pueden restablecerse dentro de los primeros 90 días después de haberse borrado. {% ifversion ghes or ghae %}Tu administrador de sitio podría ser capaz de restablecer un repositorio borrado para ti. Para obtener más información, consulta "[Restaurar un repositorio eliminado](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)". {% else %}Para obtener más información, consulta la sección"[Restaurar un repositorio eliminado](/articles/restoring-a-deleted-repository)".{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
2. En la Zona de peligro, haz clic en **Eliminar este repositorio**. ![Botón Eliminar repositorio](/assets/images/help/repository/repo-delete.png)
3. **Lee las advertencias**.
4. Para verificar que está eliminando el repositorio correcto, escribe el nombre del repositorio que deseas eliminar. ![Etiqueta de eliminación](/assets/images/help/repository/repo-delete-confirmation.png)
5. Haga clic en **Comprendo las consecuencias. Eliminar este repositorio**.
