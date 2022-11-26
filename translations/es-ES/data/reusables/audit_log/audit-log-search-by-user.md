---
ms.openlocfilehash: 7193be487b701029df5604b7253f683b5675c086
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145113738"
---
### Búsqueda basada en el usuario

El calificador `actor` puede incluir eventos en función de quién haya realizado la acción. Por ejemplo:

  * `actor:octocat` busca todos los eventos realizados por `octocat`.
  * `actor:octocat actor:hubot` busca todos los eventos realizados por `octocat` y `hubot`.
  * `-actor:hubot` excluye todos los eventos realizados por `hubot`.

Ten en cuenta que solo puedes utilizar un nombre de usuario {% data variables.product.product_name %}, no el nombre real de una persona.
