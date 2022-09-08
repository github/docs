---
title: Crear un repositorio solo para propuestas
intro: '{% data variables.product.product_name %} no otorga permisos de acceso solo para propuestas, pero puedes cumplir con este requisito usando un segundo repositorio que contenga solo las propuestas.'
redirect_from:
  - /articles/issues-only-access-permissions
  - /articles/is-there-issues-only-access-to-organization-repositories
  - /articles/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Issues-only repository
ms.openlocfilehash: 76450c6d3bddd02ab3e389b35e6ce67d01ffd771
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136909'
---
1. Crea un repositorio **privado** para hospedar el código fuente del proyecto.
2. Crea un segundo repositorio con los permisos que deseas alojar para el usuario a cargo del seguimiento de la propuesta.
3. Agrega un archivo README al repositorio de propuestas que explique el propósito de este repositorio y establezca un enlace con la sección de las propuestas.
4. Indica a tus colaboradores o equipos que den acceso a los repositorios que desees.

Los usuarios con acceso de escritura a ambos pueden referenciar y cerrar las propuestas a través de los repositorios, pero los usuarios que no tengan los permisos requeridos verán referencias que contienen información mínima.

Por ejemplo, si subiste una confirmación a la rama predeterminada del repositorio privado con un mensaje que dice `Fixes organization/public-repo#12`, la propuesta se cerrará, pero solo los usuarios con los permisos adecuados verán la referencia entre los repositorios que indica la confirmación que determinó que se cerrara la propuesta. Sin los permisos sigue apareciendo una referencia, pero se omiten los detalles.
