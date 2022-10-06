---
ms.openlocfilehash: 4edd3d2abea48d816827ab4eede21805ce06d8e0
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147876198"
---
2. No mesmo diretório do arquivo `package.json`, crie ou edite um arquivo `.npmrc` para incluir uma linha especificando a URL do {% data variables.product.prodname_registry %} e o proprietário da conta. Substitua `OWNER` pelo nome da conta de usuário ou de organização que é o proprietário do repositório que contém seu projeto.

{% ifversion fpt or ghec %}
  ```shell
  @<em>OWNER</em>:registry=https://npm.pkg.github.com
  ```
{% else %} Se o isolamento de subdomínio estiver habilitado:
  ```shell
  @<em>OWNER</em>:registry=https://npm.<em>HOSTNAME</em>
  ```
  Se o isolamento de subdomínio estiver desabilitado:
  ```shell
  @<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm
  ```
{% endif %}
