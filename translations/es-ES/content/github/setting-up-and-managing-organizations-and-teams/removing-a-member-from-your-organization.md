---
title: Eliminar a un miembro de tu organización
intro: 'Si miembros de tu organización ya no necesitan acceso a ningún repositorio que le pertenece a la organización, puedes eliminarlos de la organización.'
redirect_from:
  - /articles/removing-a-member-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Solo los propietarios de la organización pueden eliminar usuarios de una organización.

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**Advertencia:** Cuando eliminas a algún miembro de una organización:
- La cuenta de licencias pagadas no baja de categoría automáticamente. Para pagar por menos licencias después de eliminar usuarios de tu organización, sigue los pasos de la sección "[Bajar el cupo límite de plazas pagadas en tu organización](/articles/downgrading-your-organization-s-paid-seats)".
- Los miembros eliminados perderán el acceso a las bifurcaciones privadas de los repositorios privados de tu organización, pero aún podrían tener copias locales de estas. Sin embargo, no pueden sincronizar las copias locales con tus repositorios de la organización. Se pueden restaurar las bifurcaciones privadas del usuario si se lo reinstala [como miembro de la organización](/articles/reinstating-a-former-member-of-your-organization) dentro de los tres meses posteriores a haber sido eliminado de la organización. En última instancia, tú eres el responsable de asegurar que las personas que perdieron acceso a un repositorio borren cualquier información confidencial o propiedad intelectual.
- Cualquier invitación a una organización que envíe un miembro eliminado, y que no se haya aceptado, se cancelará y no se podrá acceder a ella.

{% endwarning %}

{% else %}

{% warning %}

**Advertencia:** Cuando eliminas a algún miembro de una organización:
 - Los miembros eliminados perderán el acceso a las bifurcaciones privadas de los repositorios privados de tu organización, pero aún podrían tener copias locales de estas. Sin embargo, no pueden sincronizar las copias locales con tus repositorios de la organización. Se pueden restaurar las bifurcaciones privadas del usuario si se lo reinstala [como miembro de la organización](/articles/reinstating-a-former-member-of-your-organization) dentro de los tres meses posteriores a haber sido eliminado de la organización. En última instancia, tú eres el responsable de asegurar que las personas que perdieron acceso a un repositorio borren cualquier información confidencial o propiedad intelectual.
 - Cualquier invitación a una organización que envíe el usuario eliminado y que no se haya aceptado se cancelará y no se podrá acceder a ella.

{% endwarning %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

Para ayudar con la transición de la persona que estás eliminando de tu organización y ayudar a asegurar que elimine la información confidencial o propiedad intelectual, recomendamos compartir una lista de verificación para salir de tu organización. Para ver un ejemplo, consulta "[Buenas prácticas para salir de tu empresa](/articles/best-practices-for-leaving-your-company/)".

{% endif %}

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

### Revocar la membresía del usuario

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Selecciona el miembro o los miembros que quieres eliminar de la organización. ![Lista de miembros con dos miembros seleccionados](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Arriba de la lista de miembros, utiliza el menú desplegable y haz clic en **Remove from organization** (Eliminar de la organización). ![Menú desplegable con la opción para eliminar miembros](/assets/images/help/teams/user-bulk-management-options.png)
6. Revisa el miembro o los miembros que se eliminarán de la organización, luego haz clic en **Remove members** (Eliminar miembros). ![Lista de miembros que se eliminarán y botón Remove members (Eliminar miembros)](/assets/images/help/teams/confirm-remove-members-bulk.png)

### Further reading

- "[Eliminar de un equipo a miembros de la organización](/articles/removing-organization-members-from-a-team)"
