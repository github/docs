---
ms.openlocfilehash: 4edd3d2abea48d816827ab4eede21805ce06d8e0
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879448"
---
2. En el mismo directorio que el archivo `package.json`, crea o edita un archivo `.npmrc` para incluir una línea que especifique la URL de {% data variables.product.prodname_registry %} y el propietario de la cuenta. Reemplaza `OWNER` con el nombre de la cuenta de usuario o de organización a la que pertenece el repositorio que contiene el proyecto.

{% ifversion fpt or ghec %}
  ```shell
  @<em>OWNER</em>:registry=https://npm.pkg.github.com
  ```
{% else %} Si se habilita el aislamiento de subdominios:
  ```shell
  @<em>OWNER</em>:registry=https://npm.<em>HOSTNAME</em>
  ```
  Si se inhabilita el aislamiento de subdominios:
  ```shell
  @<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm
  ```
{% endif %}
