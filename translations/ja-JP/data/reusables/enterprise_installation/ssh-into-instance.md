---
ms.openlocfilehash: 56d00170560f72e7e4fad39972422cf301b377be
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879023"
---
1. {% data variables.product.product_location %} に SSH でアクセスします。 インスタンスが複数のノードで構成されている場合は (高可用性や geo レプリケーションが構成されている場合など)、プライマリ ノードに SSH 接続します。 クラスターを使用する場合は、任意のノードに SSH 接続できます。 SSH 接続について詳しくは、「[管理シェル (SSH) にアクセスする](/admin/configuration/accessing-the-administrative-shell-ssh)」をご覧ください。

   ```shell
   $ ssh -p 122 admin@<em>HOSTNAME</em>
   ```
