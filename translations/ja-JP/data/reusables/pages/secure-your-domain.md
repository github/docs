---
ms.openlocfilehash: c32095fa49627698da6e8bb888409fec2cda2d4b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145121541"
---
{% data variables.product.prodname_pages %} サイトが無効になっているが、カスタム ドメインが設定されている場合、ドメインの乗っ取りのリスクがあります。 サイトが無効な間に、DNS プロバイダでカスタムドメインを設定していると、サブドメインのいずれかで誰かにサイトをホストされてしまう恐れがあります。

カスタム ドメインを確認すると、他の GitHub ユーザーが自分のリポジトリでそのドメインを使用できなくなります。 ドメインが確認されておらず、{% data variables.product.prodname_pages %} サイトが無効になっている場合は、DNS プロバイダーで DNS レコードを直ちに更新または削除する必要があります。
