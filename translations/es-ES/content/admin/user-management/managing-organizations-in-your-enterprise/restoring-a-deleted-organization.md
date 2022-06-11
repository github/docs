---
title: Restoring a deleted organization
intro: 'You can partially restore an organization that was previously deleted on {% data variables.product.product_location %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Restore organization
permissions: 'Site administers can restore an organization on {% data variables.product.product_name %}.'
---

## About organization restoration

You can use the site admin dashboard to restore an organization that was previously deleted on {% data variables.product.product_location %}, as long as the audit log Elasticsearch indices contain the data for the `org.delete` event.

Immediately after you restore an organization, the organization will not be exactly the same as it was prior to the deletion. You'll have to manually restore any repositories that were owned by the organization. Para obtener más información, consulta "[Restaurar un repositorio eliminado](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)".

You can also use the audit log to help you manually re-add teams and organization members. For more information, see "[Restoring members and teams](#restoring-members-and-teams)."

## Restoring an organization

{% data reusables.enterprise_site_admin_settings.access-settings %}
1. Under "Search users, organizations, enterprises, teams, repositories, gists, and applications", search for the organization.

  ![Screenshot of the search field and Search button](/assets/images/enterprise/stafftools/search-field.png)

1. Under "Deleted accounts", to the right of the organization you want to restore, select the {% octicon "kebab-horizontal" aria-label="The edit icon" %} dropdown menu, then click **Recreate**.

   ![Screenshot of the dropdown menu for a deleted organization](/assets/images/enterprise/stafftools/recreate-organization.png)

## Restoring members and teams

You can use the audit log to find a list of the previous members and teams of the organization, then recreate them manually. For more information about using the audit log, see "[Auditing users across your enterprise](/admin/user-management/managing-users-in-your-enterprise/auditing-users-across-your-enterprise)."

En todas las frases de búsqueda siguientes, reemplaza a ORGANIZATION con el nombre de la organizacióny a TEAM con el del equipo.

### Restablecer a los miembros organizacionales

1. Para encontrar a todos los usuarios que se agregaron a y eliminaron de la organización busca la bitácora de auditoría para `action:org.add_member org:ORGANIZATION` y `action:org.remove_member org:ORGANIZATION`.
1. Agrega manualmente a la organización a cada usuario que aún deba ser miembro. Para obtener más información, consulta la sección "[Agregar personas a tu organización](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)".

### Restablecer a los equipos

1. Para encontrar cada nombre de equipo, busca la bitácora de auditoría para `action:team.create org:ORGANIZATION`.
1. Recrea al equipo manualmente. Para obtener más información, consulta la sección "[Crear un equipo](/organizations/organizing-members-into-teams/creating-a-team)".
1. Para encontrar a los miembros que se han agregado a cada equipo, busca `action:team.add_member team:"ORGANIZATION/TEAM"`.
1. Vuelve a agregar a los miembros del equipo manualmente. Para obtener más información, consulta la sección "[Agregar miembros organizacionales a un equipo](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)".
1. Para encontrar los repositorios a los cuales el equipo obtuvo acceso, busca `action:team.add_repository team:"ORGANIZATION/TEAM"`.
1. Para encontrar el nivel de acceso al cual el equipo obtuvo acceso para cada repositorio, busca `action:team.update_repository_permission team:"ORGANIZATION/TEAM"`.
1. Otorga acceso al equipo manualmente otra vez. Para obtener más información, consulta la sección "[Administrar el acceso de un equipo a un repositorio organizacional](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".
