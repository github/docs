---
title: ¿Cuáles son las diferencias entre Subversion y Git?
intro: 'Los repositorios de Subversion (SVN) son similares a los repositorios de Git, pero hay diferencias cuando se refiere a la arquitectura de tus proyectos.'
redirect_from:
  - /articles/what-are-the-differences-between-svn-and-git
  - /articles/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/what-are-the-differences-between-subversion-and-git
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Subversion & Git differences
ms.openlocfilehash: cbe328bf3d2fbf3a603f6eef1559715ad48ca7fe
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '145135733'
---
## Estructura de directorios

Cada *referencia*, o instantánea etiquetada de una confirmación, en un proyecto está organizada en subdirectorios específicos, como `trunk`, `branches` y `tags`. Por ejemplo, un proyecto SVN con dos características bajo desarrollo debería parecerse a esto:

      sample_project/trunk/README.md
      sample_project/trunk/lib/widget.rb
      sample_project/branches/new_feature/README.md
      sample_project/branches/new_feature/lib/widget.rb
      sample_project/branches/another_new_feature/README.md
      sample_project/branches/another_new_feature/lib/widget.rb

Un flujo de trabajo SVN se parece a esto:

* El directorio `trunk` representa la versión estable más reciente de un proyecto.
* El trabajo de características activas se desarrolla dentro de subdirectorios en `branches`.
* Una vez finalizada una característica, el directorio de características se combina y `trunk` se elimina.

Los proyectos de Git también se almacenan dentro de un directorio único. Pero Git oculta los detalles de sus referencias almacenándolos en un directorio *.git* especial. Por ejemplo, un proyecto Git con dos características bajo desarrollo debería parecerse a esto:

      sample_project/.git
      sample_project/README.md
      sample_project/lib/widget.rb

Un flujo de trabajo Git se parece a esto:

* Un repositorio Git almacena el historial completo de todas sus ramas y etiquetas en el directorio *.git*.
* El último lanzamiento estables se contiene dentro de la rama predeterminada.
* El trabajo de característica activa se desarrolla en ramas separadas.
* Cuando una característica finaliza, la rama de característica se fusiona en la rama predeterminada y se borra.

A diferencia de SVN, con Git la estructura del directorio permanece igual, pero los contenidos de los archivos cambia en base a tu rama.

## Incluir los subproyectos

Un *subproyecto* es un proyecto que se desarrolla y administra fuera de tu proyecto principal. Normalmente importas un subproyecto para agregar alguna funcionalidad a tu proyecto sin necesidad de mantener el código. Cada vez que el proyecto se actualiza, puedes sincronizarlo con tu proyecto para garantizar que todo esté actualizado.

En SVN, un subproyecto se denomina *SVN externo*. En Git, se denomina *submódulo de Git*. A pesar de que conceptualmente son similares, los submódulos Git no se mantienen actualizados de forma automática; debes solicitar explícitamente que se traiga una nueva versión a tu proyecto.

Para obtener más información, vea "[Submódulos de herramientas de Git](https://git-scm.com/book/en/Git-Tools-Submodules)" en la documentación de Git.

## Mantener el historial

SVN está configurado para suponer que el historial de un proyecto nunca cambia. Git permite modificar confirmaciones y cambios anteriores mediante herramientas como [`git rebase`](/github/getting-started-with-github/about-git-rebase).

{% tip %}

[GitHub admite clientes de Subversion](/articles/support-for-subversion-clients), lo que puede producir algunos resultados inesperados si usa Git y SVN en el mismo proyecto. Si has manipulado el historial de confirmación de Git, esas mismas confirmaciones siempre permanecerán dentro del historial de SVN. Si ha confirmado accidentalmente algunos datos confidenciales, tenemos [un artículo que le ayudará a quitarlos del historial de Git](/articles/removing-sensitive-data-from-a-repository).

{% endtip %}

## Información adicional

- "[Propiedades de Subversion admitidas por GitHub](/articles/subversion-properties-supported-by-github)"
- ["Creación de ramas y combinación" del libro _Git SCM_](https://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging)
- "[Importación de código fuente a GitHub](/articles/importing-source-code-to-github)"
- "[Herramientas de migración de código fuente](/articles/source-code-migration-tools)"
