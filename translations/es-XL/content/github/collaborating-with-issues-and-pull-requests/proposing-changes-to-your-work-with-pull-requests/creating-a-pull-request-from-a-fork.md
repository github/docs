---
title: Crear una solicitud de extracción desde una bifurcación
intro: Puedes crear una solicitud de extracción para proponer cambios que has hecho a una bifurcación de un repositorio ascendente.
redirect_from:
  - /articles/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork
permissions: Anyone with write access to a repository can create a pull request from a user-owned fork.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
También puedes otorgar permiso a los mantenedores del repositorio ascendente para subir confirmaciones de cambios en una bifurcación propiedad del usuario. Si tu solicitud de extracción compara tu rama de tema con una rama del repositorio ascendente como la rama base, entonces tu rama de tema también se llamará rama de comparación de la solicitud de extracción. Para obtener más información acerca de las ramas de solicitud de extracción, incluyendo ejemplos, consulta la sección "[Crear una solicitud de extracción](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository)."

{% data reusables.pull_requests.perms-to-open-pull-request %}

1. Navega al repositorio original de donde creaste tu bifurcación.
{% data reusables.repositories.new-pull-request %}
3. En la página Comparar haz clic en **Comparar entre bifurcaciones**. ![Enlace para comparar entre las bifurcaciones](/assets/images/help/pull_requests/compare-across-forks-link.png)
4. En el menú desplegable de la "rama base", selecciona la rama del repositorio ascendente en donde quieras fusionar los cambios. ![Menús desplegables para elegir la bifurcación y la rama base](/assets/images/help/pull_requests/choose-base-fork-and-branch.png)
5. En el menú desplegable de la "bifurcación principal", selecciona tu bifurcación. Posteriormente, utiliza el menú desplegable de "comparar rama" para seleccionar aquella en la que realizaste los cambios. ![Menús desplegables para elegir la bifurcación del encabezado y la rama de comparación](/assets/images/help/pull_requests/choose-head-fork-compare-branch.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits.png)
{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

### Leer más

- "[Trabajar con bifurcaciones](/articles/working-with-forks)"
- "[Permitir cambios en una rama de solicitud de extracción creada desde una bifurcación](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
