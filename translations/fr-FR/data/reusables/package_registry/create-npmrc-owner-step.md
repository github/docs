---
ms.openlocfilehash: 4edd3d2abea48d816827ab4eede21805ce06d8e0
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877204"
---
2. Dans le même répertoire que votre fichier `package.json`, créez ou modifiez un fichier `.npmrc` pour inclure une ligne spécifiant l’URL et le propriétaire du compte {% data variables.product.prodname_registry %}. Remplacez `OWNER` par le nom du compte d’utilisateur ou d’organisation propriétaire du dépôt contenant votre projet.

{% ifversion fpt or ghec %}
  ```shell
  @<em>OWNER</em>:registry=https://npm.pkg.github.com
  ```
{% else %} Si l’isolation de sous-domaine est activée :
  ```shell
  @<em>OWNER</em>:registry=https://npm.<em>HOSTNAME</em>
  ```
  Si l’isolation de sous-domaine est désactivée :
  ```shell
  @<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm
  ```
{% endif %}
