---
title: ¿Cuáles son las diferencias entre Subversion y Git?
intro: 'Los repositorios de Subversion (SVN) son similares a los repositorios de Git, pero hay diferencias cuando se refiere a la arquitectura de tus proyectos.'
redirect_from:
  - /articles/what-are-the-differences-between-svn-and-git/
  - /articles/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
### Estructura del directorio

Cada *referencia*, o instantánea etiquetada de una confirmación, en un proyecto se organiza dentro de subdirectorios específicos, como `tronco`, `ramas` y `etiquetas`. Por ejemplo, un proyecto SVN con dos características bajo desarrollo debería parecerse a esto:

      sample_project/trunk/README.md
      sample_project/trunk/lib/widget.rb
      sample_project/branches/new_feature/README.md
      sample_project/branches/new_feature/lib/widget.rb
      sample_project/branches/another_new_feature/README.md
      sample_project/branches/another_new_feature/lib/widget.rb

Un flujo de trabajo SVN se parece a esto:

* El directorio `tronco` representa el último lanzamiento estable de un proyecto.
* El trabajo de característica activa se desarrolla dentro de subdirectorios dentro de `ramas`.
* Cuando una característica se termina, el directorio de la característica se fusiona dentro del `tronco` y se elimina.

Los proyectos de Git también se almacenan dentro de un directorio único. Sin embargo, Git oculta los detalles de sus referencias al almacenarlos en un directorio *.git* especial. Por ejemplo, un proyecto Git con dos características bajo desarrollo debería parecerse a esto:

      sample_project/.git
      sample_project/README.md
      sample_project/lib/widget.rb

Un flujo de trabajo Git se parece a esto:

* Un repositorio Git almacena el historial completo de todas sus ramas y etiquetas dentro del directorio de *.git*.
* El último lanzamiento estable es contenido dentro de la rama `master o principal`.
* El trabajo de característica activa se desarrolla en ramas separadas.
* Cuando una característica se termina, la rama de la característica se fusiona dentro de la rama `master o principal` y se elimina.

A diferencia de SVN, con Git la estructura del directorio permanece igual, pero los contenidos de los archivos cambia en base a tu rama.

### Incluir los subproyectos

Un *subproyecto* es un proyecto que se ha desarrollado y administrado en algún lugar fuera del proyecto principal. Normalmente importas un subproyecto para agregar alguna funcionalidad a tu proyecto sin necesidad de mantener el código. Cada vez que el proyecto se actualiza, puedes sincronizarlo con tu proyecto para garantizar que todo esté actualizado.

En SVN, un subproyecto se llama un *SVN externo*. En Git, se llama un *submódulo Git*. A pesar de que conceptualmente son similares, los submódulos Git no se mantienen actualizados de forma automática; debes solicitar explícitamente que se traiga una nueva versión a tu proyecto.

Para obtener más información, consulta la sección "[Submódulos de las Git Tools](https://git-scm.com/book/en/Git-Tools-Submodules)" en la documentación de Git.

### Mantener el historial

SVN está configurado para suponer que el historial de un proyecto nunca cambia. Git te permite modificar cambios y confirmaciones previas utilizando herramientas como [`git rebase`](/articles/about-git-rebase).

{% tip %}

[GitHub admite clientes de Subversion](/articles/support-for-subversion-clients), lo que puede generar algunos resultados inesperados si estás utilizando tanto Git como SVN en el mismo proyecto. Si has manipulado el historial de confirmación de Git, esas mismas confirmaciones siempre permanecerán dentro del historial de SVN. Si accidentalmente confirmaste algunos datos confidenciales, hay un [artículo que te ayudará a eliminarlo del historial de Git](/articles/removing-sensitive-data-from-a-repository).

{% endtip %}

### Leer más

- "[Propiedades de Subversion admitidas por GitHub](/articles/subversion-properties-supported-by-github)"
- ["Branching and Merging" del libro _Git SCM_](https://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging)
- "[Importar código fuente a GitHub](/articles/importing-source-code-to-github)"
- "[Herramientas de migración de código fuente](/articles/source-code-migration-tools)"
