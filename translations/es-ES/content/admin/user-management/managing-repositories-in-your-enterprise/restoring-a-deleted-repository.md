---
title: Restaurando un repositorio eliminado
intro: Puedes restablecer los repositorios borrados para recuperar su contenido.
permissions: Enterprise owners can restore a deleted repository.
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
  - Privacy
  - Repositories
shortTitle: Restablecer un repositorio borrado
---

## Acerca de la restauración de repositorios

Generalmente, si alguien elimina un repositorio, estará disponible en el disco por 90 días y se puede restablecer mediante el tablero de administración del sitio. Para obtener más información, consulta la sección "[Tablero de administrador de sitio](/admin/configuration/configuring-your-enterprise/site-admin-dashboard)".

A menos de que exista una orden de conservación por razones legales en curso para un usuario u organización, el repositorio se purgará y borrará para siempre después de 90 días.

Si un repositorio fuera parte de una red de bifurcaciones cuando se borró, el repositorio restablecido se desprenderá de la red de bifurcación original.

Puede tardar hasta una hora después de que se elimine un repositorio antes de que ese repositorio esté disponible para la restauración.

Restaurar un repositorio no restaurará los archivos adjuntos de lanzamiento o los permisos de equipo. Las propuestas que se restablezcan no se etiquetarán.

## Restaurando un repositorio eliminado

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. En la sección de {% octicon "repo" aria-label="The repo icon" %} **Repositorios**, haz clic en el enlace {% octicon "trash" aria-label="The trash icon" %} **Repositorios borrados**.
1. Encuentra el repositorios que quieras restablecer en la lista de repositorios borrados y luego, a la derecha del nombre del mismo, haz clic en **Restablecer**.
1. Para confirmar que te gustaría restablecer el repositorio nombrado, haz clic en **Restablecer**.

## Leer más

- "[Colocar una retención legal en un usuario u organización](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)"
