---
title: Acerca de los modelos de desarrollo colaborativo
intro: El modo en que usas las solicitudes de extracción depende del tipo de modelo de desarrollo que uses en tu proyecto. Puedes utilizar el modelo de bifurcación y extracción o el modelo de repositorio compartido.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/about-collaborative-development-models
  - /articles/types-of-collaborative-development-models
  - /articles/about-collaborative-development-models
  - /github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models
  - /github/collaborating-with-pull-requests/getting-started/about-collaborative-development-models
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Collaborative development
ms.openlocfilehash: 2a054071dc801ac035f3925e81895200c0a7375d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139188'
---
## Modelo de bifurcación y extracción

En el modelo de bifurcación y extracción, cualquiera puede bifurcar un repositorio existente y subir los cambios a su bifurcación personal. No necesitas permiso del repositorio fuente para subir información a una bifurcación que sea propiedad del usuario. El mantenedor del proyecto puede extraer los cambios hacia el repositorio de origen. Cuando abres una solicitud de extracción que proponga cambios desde la bifurcación que es propiedad de tu usuario para ramificar en el repositorio fuente (ascendente), puedes permitir que cualquiera con acceso de escritura en éste haga cambios en dicha solicitud.  Este modelo es muy usado con los proyectos de código abierto, ya que reduce la cantidad de fricción para los colaboradores nuevos y le permite a las persona trabajar de forma independiente sin una coordinación inicial.

{% tip %}

**Sugerencia**: {% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning %}

{% endtip %}

## Modelo de repositorio compartido

En el modelo de repositorio compartido, se le otorga a los colaboradores acceso de escritura a un único repositorio compartido y las ramas de tema se crean cuando es necesario hacer cambios. Las solicitudes de extracción son útiles en este modelo ya que inician la revisión de código y el debate general acerca de un conjunto de cambios antes de que los mismos sean fusionados en la rama de desarrollo principal. Este modelo es más frecuente con las organizaciones y los equipos pequeños que colaboran en proyectos privados.

## Información adicional

- "[Acerca de las solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[Creación de una solicitud de incorporación de cambios desde una bifurcación](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- "[Permitir cambios para una rama de solicitud de incorporación de cambios creada desde una bifurcación](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
