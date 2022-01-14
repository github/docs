---
title: Restaurando un repositorio eliminado
intro: Site administrators can restore deleted repositories to recover their contents.
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
  - Privacy
  - Repositories
shortTitle: Restore a deleted repository
---

Generalmente, si alguien elimina un repositorio, estará disponible en el disco por 90 días y se puede restablecer mediante el tablero de administración del sitio. Unless a legal hold is in effect on a user or organization, after 90 days the repository is purged and deleted forever.

## Acerca de la restauración de repositorios

If a repository was part of a fork network when it was deleted, the restored repository will be detached from the original fork network.

Puede tardar hasta una hora después de que se elimine un repositorio antes de que ese repositorio esté disponible para la restauración.

Restaurar un repositorio no restaurará los archivos adjuntos de lanzamiento o los permisos de equipo. Las propuestas que se restablezcan no se etiquetarán.

## Restaurando un repositorio eliminado

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. In the {% octicon "repo" aria-label="The repo icon" %} **Repositories** section, click the {% octicon "trash" aria-label="The trash icon" %} **Deleted repositories** link.
1. Find the repository you want to restore in the deleted repositories list, then to the right of the repository name click **Restore**.
1. To confirm you would like to restore the named repository, click **Restore**.

## Leer más

- "[Colocar una retención legal en un usuario u organización](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)"
