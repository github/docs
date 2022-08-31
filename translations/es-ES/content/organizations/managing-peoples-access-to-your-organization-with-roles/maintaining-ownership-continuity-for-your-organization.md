---
title: Mantener la continuidad de propiedad para tu organización
intro: Las organizaciones pueden tener más de un propietario para evitar las intermitencias de propiedad.
redirect_from:
  - /articles/changing-a-person-s-role-to-owner
  - /articles/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/managing-ownership-continuity-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization
permissions: Organization owners can promote any member of an organization to an organization owner.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Mantener la continuidad de la propiedad
---

## Acerca de mantener la continuidad de propiedad para tu organización

{% data reusables.organizations.org-ownership-recommendation %}

Los propietarios de una organización tienen acceso administrativo completo a la misma. {% data reusables.organizations.new-org-permissions-more-info %}

{% note %}

**Nota**: Como propietario de la organización, puedes cambiar el rol de otros miembros de la organización para que sean propietarios. No puedes cambiar tu propio rol.

{% endnote %}

{% ifversion enterprise-owner-join-org %}
Si tu organización le pertenece a una cuenta empresarial, cualquier propietario de empresa podrá hacerse propietario de esta. Para obtener más información, consulta la sección "[Administrar tu rol en una organización que le pertenezca a tu empresa](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)".
{% endif %}

## Designar un propietario de organización

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. Selecciona la persona o las personas que quisieras promover a propietario. ![Lista de miembros con dos miembros seleccionados](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Arriba de la lista de miembros, usa el menú desplegable y haz clic en **Change role...** (Cambiar rol). ![Menú desplegable con la opción para eliminar miembros](/assets/images/help/teams/user-bulk-management-options.png)
6. Selecciona un nuevo rol para la persona o las personas, luego haz clic en **Change role** (Cambiar rol). ![Botones de opción con roles de propietario y miembros y botón Change role (Cambiar rol)](/assets/images/help/teams/select-and-confirm-new-role-bulk.png)
