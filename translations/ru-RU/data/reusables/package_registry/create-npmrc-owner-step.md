---
ms.openlocfilehash: aed38f3bac029ba576c409188e4c4bc8499a52d0
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: "148008942"
---
2. В том же каталоге, где находится файл `package.json`, создайте или измените файл `.npmrc`, чтобы включить в него строку с указанием URL-адреса {% data variables.product.prodname_registry %} и владельца учетной записи. Замените `OWNER` именем учетной записи организации пользователя, которая владеет репозиторием, содержащим ваш проект.

{% ifversion fpt or ghec %}
  ```shell
  @OWNER:registry=https://npm.pkg.github.com
  ```
{% else %} Если изоляция поддомена включена:
  ```shell
  @OWNER:registry=https://npm.HOSTNAME
  ```
  Если изоляция поддомена отключена:
  ```shell
  @OWNER:registry=https://HOSTNAME/_registry/npm
  ```
{% endif %}
