---
ms.openlocfilehash: 52ba84fdbfdaa4150aff2b1e1bba858bf1ab7d41
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145111313"
---
1. Revise el archivo separado por comas (CSV) en `/PATH/REPO-NAME.git/git-import/raw-authors.csv`. Debería contener estas columnas:
    - `ID`: el creador, tal y como se almacena en el repositorio original, seguido de un identificador único
    - `NAME`: el creador, tal y como se almacena en el repositorio original

  Para asignar creadores desde el repositorio original a una dirección de correo electrónico y un nombre, cree un archivo CSV con las columnas `ID,(ignored),GIT_EMAIL,GIT_NAME`, que reemplazan la información del creador por "ID" con "GIT_EMAIL" y "GIT_NAME".

  #### Ejemplo:

   - Id. del creador original: `octocat@111111-2222-3333-4444-55555555555`
   - Nueva dirección de correo electrónico: `octocat@github.com`
   - Nombre nuevo: `The Octocat`

   Para mapear el autor original a un nuevo usuario de Git, el archivo CSV debería incluir la línea:

   `octocat@111111-2222-3333-4444-55555555555, ,octocat@github.com,The Octocat`
