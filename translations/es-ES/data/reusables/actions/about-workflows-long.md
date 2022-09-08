---
ms.openlocfilehash: ba9c00a9dfa055c518eb60bca3acc59a3cc89381
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114874"
---
Un flujo de trabajo es un proceso automatizado configurable que ejecutará uno o más jobs. Los flujos de trabajo se definen mediante un archivo de YAML que se verifica en tu repositorio y se ejecutará cuando lo active un evento dentro de este o puede activarse manualmente o en una programación definida.

Los flujos de trabajo se definen en el directorio `.github/workflows` de un repositorio y un repositorio puede tener varios flujos de trabajo, cada uno de los cuales puede realizar un conjunto diferente de tareas. Por ejemplo, puedes tener un flujo de trabajo para crear y probar las solicitudes de cambio, otro para desplegar tu aplicación cada que se cree un lanzamiento y todavía otro más que agregue una etiqueta cada que alguien abra una propuesta nueva.
