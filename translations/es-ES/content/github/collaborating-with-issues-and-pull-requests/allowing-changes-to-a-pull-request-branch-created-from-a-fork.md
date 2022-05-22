---
title: Permitir cambios para una rama de solicitud de extracción creada desde una bifurcación
intro: 'Para tener una mejor colaboración, puedes permitir confirmaciones de cambios en ramas que hayas creado a partir de bifurcaciones de las cuales sea dueño tu usuario.'
redirect_from:
  - /articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork
permissions: People with push access to the upstream repository of a fork owned by a user account can commit to the forked branches.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Solo los autores de las solicitudes de extracción pueden otorgar permisos a los mantenedores del repositorio ascendente, o a aquellos con acceso de escritura en dicho repositorio, para realizar confirmaciones de cambios en sus solicitudes de extracción para comparar ramas en una bifurcación propiedad de un usuario. Para conocer más sobre los repositorios ascendentes, consulta "[Acerca de las bifurcaciones](/articles/about-forks)".

Los autores de las solicitudes de extracción pueden otorgar estos permisos antes o después de crear dicha solicitud inicial. desde una bifurcación propiedad de un usuario. Para obtener más información, consulta la sección "[Crear una solicitud de extracción desde una bifurcación](/articles/creating-a-pull-request-from-a-fork)."

Puedes establecer permisos de confirmación al crear por primera vez una solicitud de extracción desde una bifurcación. Para obtener más información, consulta la sección "[Crear una solicitud de extracción desde una bifurcación](/articles/creating-a-pull-request-from-a-fork)." Además, puedes modificar una solicitud de extracción existente para permitir que los mantenedores de un repositorio realicen confirmaciones a tu rama.

### Habilitar permisos del mantenedor del repositorio en solicitudes de extracción existentes

1. En {% data variables.product.product_name %}, desplázate hasta la página principal del repositorio ascendente de tu solicitud de extracción.
2. En el nombre del repositorio ascendente, haz clic en {% octicon "git-pull-request" aria-label="The pull request icon" %} **Pull requests** (Solicitudes de extracción). ![Selección de la pestaña de propuestas y solicitudes de extracción](/assets/images/help/repository/repo-tabs-pull-requests.png)
3. En la lista de solicitudes de extracción, desplázate hasta la solicitud de extracción en la que deseas realizar las confirmaciones.
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-sidebar-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits-sidebar-checkbox.png)

### Leer más

- "[Confirmar cambios en una rama de la solicitud de extracción creada desde una bifurcación](/articles/committing-changes-to-a-pull-request-branch-created-from-a-fork)"
