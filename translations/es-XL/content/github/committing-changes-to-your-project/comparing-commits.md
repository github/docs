---
title: Comparar confirmaciones
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Puedes comparar el estado de tu repositorio a través de ramas, etiquetas, confirmaciones de cambios y fechas. Para comparar versiones diferentes de tu repositorio, añade `/compare` a la ruta del mismo.

Demostraremos el poder de Compare (Comparar) al observar la página de comparación para [una bifurcación del repositorio Lingüista](https://github.com/octocat/linguist), que está en [https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master).

Cada vista Compare (Comparar) del repositorio contiene dos menús desplegables: `base` y `compare`.

`base` debería ser considerado como punto de partida de tu comparación, d `compare` es el punto final. Durante una comparación, siempre puedes cambiar tus puntos `base` y `compare` al hacer clic en **Edit** (Editar).

### Comparar ramas

El uso más común de "Compare" es comparar ramas, tal como cuando estás iniciando una solicitud de extracción nueva. Siempre se te llevará a la vista de comparación de ramas cuando inicies una [solicitud de extracción nueva](/articles/creating-a-pull-request).

Para comparar ramas, puedes seleccionar un nombre de rama desde el menú desplegable `compare` en la parte superior de la página.

Aquí hay un ejemplo de una [comparación entre dos ramas](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs).

### Comparar etiquetas

Cuando compares etiquetas de lanzamiento se te mostrarán los cambios que se han realizado a tu repositorio desde el último lanzamiento. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}Para obtener más información, consulta la sección "[Comparar lanzamientos](/github/administering-a-repository/comparing-releases)".{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}Para comparar etiquetas, puedes seleccionar un nombre de etiqueta del menú desplegable `compare` en la parte superior de la página. {% else %}En vez de teclear un nombre de rama, teclea el nombre de tu etiqueta en el menú desplegable de `compare`.{% endif %}

Aquí hay un ejemplo de una [comparación entre dos etiquetas](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3).

### Comparar confirmaciones

También puedes comparar dos confirmaciones arbitrarias en tu repositorio o sus bifurcaciones en {% data variables.product.prodname_dotcom %} en una comparación de diferencias de dos puntos.

Para comparar rápidamente dos confirmaciones en Git Object IDs (OID por sus siglas en inglés) directamente entre sí en una comparación de diferencias de dos puntos en {% data variables.product.prodname_dotcom %}, edita la URL de la página "Comparing changes" (Comparar cambios) en tu repositorio.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

Para obtener más información sobre otras opciones de comparación, consulta "[Comparaciones de diferencia de tres puntos y dos puntos](/articles/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons)".

### Comparar entre bifurcaciones

Puedes comparar tu repositorio base y otro repositorio bifurcado. Esta es la vista que se presenta cuando un usuario realiza una Solicitud de extracción a un proyecto.

Para comparar ramas en repositorios diferentes, antepone los nombres de la rama con los nombres del usuario. Por ejemplo, al especificar `octocat:master` para `base` y `octo-org:master` para `compare`, puedes comparar la rama `master` de los repositorios respectivamte que pertenecen a `octocat` y `octo-org`.

Aquí hay un ejemplo de una [comparación entre dos repositorios](https://github.com/octocat/linguist/compare/master...octo-org:master).

### Comparaciones entre confirmaciones

A modo de atajo, Git usa la notación `^` para referirse a "una confirmación anterior".

Puedes usar esta notación para comparar una sola confirmación o rama con sus predecesores inmediatos. Por ejemplo, `96d29b7^^^^^` indica cinco confirmaciones anteriores a `96d29b7`, porque hay cinco marcas `^`. Si escribes `96d29b7^^^^^` en la rama `base` y `96d29b7` en la rama `compare` se compararán las cinco confirmaciones que se hicieron antes de `96d29b7` con la confirmación `96d29b7`.

Aquí hay un ejemplo de una [comparación usando la notación `^`](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7).

### Leer más

- "[Cambiar la rama base de una solicitud de extracción](/articles/changing-the-base-branch-of-a-pull-request)"
