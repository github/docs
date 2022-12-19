---
title: Buscar los lanzamientos de un repositorio
intro: 'Puedes utilizar palabras clave, etiquetas y otros calificadores para buscar lanzamientos particulares en un repositorio.'
permissions: Anyone with read access to a repository can search that repository's releases.
shortTitle: Searching releases
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '>= 3.4'
topics:
  - Repositories
ms.openlocfilehash: a61e49521452befdcddf2724cad837062c7d54a1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110057'
---
## Buscar lanzamientos en un repositorio

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
1. Para buscar las versiones del repositorio, en el campo de búsqueda de la parte superior de la página Versiones, escriba su consulta y presione **Enter** (Entrar).
![Campo de búsqueda de versiones](/assets/images/help/releases/search-releases.png)

## Sintaxis de búsqueda para buscar lanzamientos en un repositorio

Puedes proporcionar texto en tu consulta de búsqueda, el cual se empatará contra el título, cuerpo y etiqueta de los lanzamientos del repositorio. También puedes combinar los siguientes calificadores para apuntar a lanzamientos específicos.

| Calificador:        | Ejemplo
| ------------- | -------------
| `draft:true` | **draft:true** solo coincidirá con las versiones de borrador.
| `draft:false` | **draft:false** solo coincidirá con las versiones publicadas.
| `prerelease:true` | **versión preliminar:true** solo coincidirá con las versiones preliminares.
| `prerelease:false` | **prerelease:false** solo coincidirá con versiones que no sean preliminares.
| <code>tag:<em>TAG</em></code> | **tag:v1** coincide con una versión con la etiqueta v1 y con cualquier versión secundaria o de revisión en v1, tal como v1.0, v1.2, y v1.2.5.
| <code>created:<em>DATE</em></code> | **created:2021** coincidirá con las versiones creadas durante 2021. También puedes proporcionar rangos de fechas. Para más información, vea "[Descripción de la sintaxis de búsqueda](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)".
