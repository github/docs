---
title: Comparar confirmaciones
intro: 'Puedes comparar el estado de tu repositorio a través de las ramas, etiquetas, confirmaciones, bifurcaciones y fechas.'
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 2ebf1a3cc83463e97d9a4d60401277bb844135b1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145137100'
---
Para comparar diferentes versiones del repositorio, anexa `/compare` a la ruta de acceso del repositorio.

Mostraremos la eficacia de Comparar examinando la página de comparación para una [bifurcación del repositorio lingüista](https://github.com/octocat/linguist), que se encuentra en [https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master).

La vista Comparar de cada repositorio contiene dos menús desplegables: `base` y `compare`.

`base` debe considerarse el punto inicial de la comparación y `compare`, el punto final. Durante una comparación, siempre puedes cambiar los puntos `base` y `compare` haciendo clic en **Editar**.

## Comparar ramas

El uso más común de "Compare" es comparar ramas, tal como cuando estás iniciando una solicitud de extracción nueva. Al iniciar [una nueva solicitud de incorporación de cambios](/articles/creating-a-pull-request), siempre se te dirigirá a la vista de comparación de ramas.

Para comparar ramas, puedes seleccionar un nombre de rama desde el menú desplegable `compare` en la parte superior de la página.

A continuación se muestra un ejemplo de una [comparación entre dos ramas](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs).

## Comparar etiquetas

Cuando compares etiquetas de lanzamiento se te mostrarán los cambios que se han realizado a tu repositorio desde el último lanzamiento. Para más información, consulta "[Comparación de versiones](/github/administering-a-repository/comparing-releases)".

Para comparar etiquetas, puedes seleccionar un nombre de etiqueta desde el menú desplegable `compare` en la parte superior de la página.

A continuación se muestra un ejemplo de una [comparación entre dos etiquetas](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3).

## Comparar confirmaciones

También puedes comparar dos confirmaciones arbitrarias en tu repositorio o sus bifurcaciones en {% data variables.product.prodname_dotcom %} en una comparación de diferencias de dos puntos.

Para comparar rápidamente dos confirmaciones en Git Object IDs (OID por sus siglas en inglés) directamente entre sí en una comparación de diferencias de dos puntos en {% data variables.product.prodname_dotcom %}, edita la URL de la página "Comparing changes" (Comparar cambios) en tu repositorio.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

Para obtener más información sobre otras opciones de comparación, consulta "[Comparaciones de diferencias de tres puntos y dos puntos](/articles/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons)".

## Comparar entre bifurcaciones

Puedes comparar tu repositorio base y otro repositorio bifurcado. Esta es la vista que se presenta cuando un usuario realiza una Solicitud de extracción a un proyecto.

Para comparar ramas en repositorios diferentes, antepone los nombres de la rama con los nombres del usuario. Por ejemplo, especificando `octocat:main` para `base` y `octo-org:main` para `compare`, puedes comparar la rama `main` de los repositorios propiedad de `octocat` y `octo-org`, respectivamente.

A continuación se muestra un ejemplo de una [comparación entre dos repositorios](https://github.com/github/linguist/compare/master...octocat:master).

## Comparaciones entre confirmaciones

A modo de atajo, Git usa la notación `^` para referirse a "una confirmación anterior".

Puedes usar esta notación para comparar una sola confirmación o rama con sus predecesores inmediatos. Por ejemplo, `96d29b7^^^^^` indica cinco confirmaciones anteriores a `96d29b7`, porque hay cinco marcas `^`. Al escribir `96d29b7^^^^^` en la rama `base` y `96d29b7` en la rama `compare`, se comparan las cinco confirmaciones realizadas antes de `96d29b7` con la confirmación `96d29b7`.

A continuación se muestra un ejemplo de una [comparación mediante la notación `^`](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7).

## Información adicional

- "[Cambio de la rama base de una solicitud de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)"
