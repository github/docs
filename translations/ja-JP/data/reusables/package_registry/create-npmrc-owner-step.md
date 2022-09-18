---
ms.openlocfilehash: 4edd3d2abea48d816827ab4eede21805ce06d8e0
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879216"
---
2. `package.json` ファイルと同じディレクトリで、`.npmrc` ファイルを作成するか編集し、{% data variables.product.prodname_registry %} URL とアカウント所有者を指定する行を含めます。 `OWNER` を、プロジェクトを含むリポジトリを所有しているユーザーもしくは組織アカウント名で置換します。

{% ifversion fpt or ghec %}
  ```shell
  @<em>OWNER</em>:registry=https://npm.pkg.github.com
  ```
{% else %} サブドメイン分離が有効な場合:
  ```shell
  @<em>OWNER</em>:registry=https://npm.<em>HOSTNAME</em>
  ```
  Subdomain Isolationが無効な場合:
  ```shell
  @<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm
  ```
{% endif %}
