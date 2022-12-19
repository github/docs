---
ms.openlocfilehash: 4edd3d2abea48d816827ab4eede21805ce06d8e0
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879219"
---
2. Erstelle oder bearbeite eine `.npmrc`-Datei in demselben Verzeichnis wie deine `package.json`-Datei, um eine Zeile einzuschließen, die die {% data variables.product.prodname_registry %}-URL und den Kontobesitzer angibt. Ersetze `OWNER` durch den Namen des Benutzer- oder Organisationskontos, das das Repository besitzt, in dem sich dein Projekt befindet.

{% ifversion fpt or ghec %}
  ```shell
  @<em>OWNER</em>:registry=https://npm.pkg.github.com
  ```
{% else %} Wenn die Unterdomänenisolation aktiviert ist:
  ```shell
  @<em>OWNER</em>:registry=https://npm.<em>HOSTNAME</em>
  ```
  Wenn die Unterdomänenisolation deaktiviert ist:
  ```shell
  @<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm
  ```
{% endif %}
