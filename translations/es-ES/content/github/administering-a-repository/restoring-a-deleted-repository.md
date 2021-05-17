---
title: Restaurando un repositorio eliminado
intro: Puede restaurar algunos de los repositorios eliminados para recuperar su contenido.
redirect_from:
  - /articles/restoring-a-deleted-repository
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

Cualquier usuario puede restaurar repositorios eliminados que le pertenecieron a su propia cuenta de usuario. Los propietarios de la organización pueden restaurar repositorios eliminados que le pertenecieron a la organización.

### Acerca de la restauración de repositorios

Un repositorio eliminado se puede restaurar en un plazo de 90 días, a menos que el repositorio haya sido parte de una red de bifurcaciones que actualmente no está vacía. Una red de bifurcaciones consiste en un repositorio padre, las bifurcaciones del repositorio y las bifurcaciones de las bifurcaciones del repositorio. Si tu repositorio forma parte de una red de bifurcaciones, no se puede restaurar a menos que se elimine cualquier otro repositorio de la red o que se haya separado de la red. Para obtener más información acerca de las bifurcaciones, consulta "[Acerca de las bifurcaciones](/articles/about-forks)".

Si quieres restaurar un repositorio que era parte de una red de bifurcaciones que actualmente no está vacía, te puedes contactar con {% data variables.contact.contact_support %}.

Puede tardar hasta una hora después de que se elimine un repositorio antes de que ese repositorio esté disponible para la restauración.

Restaurar un repositorio no restaurará los archivos adjuntos de lanzamiento o los permisos de equipo. Las propuestas que se restablezcan no se etiquetarán.

### Restaurar un repositorio eliminado que le pertenecía a una cuenta de usuario

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.repo-tab %}
{% data reusables.user_settings.deleted-repos %}
{% data reusables.user_settings.restore-repo %}
{% data reusables.user_settings.restore-confirmation %}

### Restaurar un repositorio eliminado que le pertenecía a una organización

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.deleted-repos %}
{% data reusables.user_settings.restore-repo %}
{% data reusables.user_settings.restore-confirmation %}

### Leer más

- "[Borrar un repositorio](/articles/deleting-a-repository)"
