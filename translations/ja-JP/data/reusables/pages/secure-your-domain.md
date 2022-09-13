---
ms.openlocfilehash: c32095fa49627698da6e8bb888409fec2cda2d4b
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879199"
---
{% data variables.product.prodname_pages %} サイトが無効になっているが、カスタム ドメインが設定されている場合、ドメインの乗っ取りのリスクがあります。 サイトが無効な間に、DNS プロバイダでカスタムドメインを設定していると、サブドメインのいずれかで誰かにサイトをホストされてしまう恐れがあります。

カスタム ドメインを確認すると、他の GitHub ユーザーが自分のリポジトリでそのドメインを使用できなくなります。 ドメインが確認されておらず、{% data variables.product.prodname_pages %} サイトが無効になっている場合は、DNS プロバイダーで DNS レコードを直ちに更新または削除する必要があります。
