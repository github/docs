---
ms.openlocfilehash: e01273fe15058c00b11d380a3c50d4448cfb92b8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180784"
---
各監査ログ エントリの名前は、`action` オブジェクトまたはカテゴリ修飾子と、その後の操作の種類で構成されます。 たとえば、`repo.create` エントリは `repo` カテゴリに対する `create` 操作を意味します。

各 Audit log エントリには、次のようなイベントに関する適切な情報が表示されます:

- アクションが実行された {% ifversion ghec or ghes or ghae %}エンタープライズまたは{% endif %}Organization
- アクションを実行したユーザー (アクター)
- アクションによって影響を受けたユーザー
- アクションの対象となったリポジトリ
- 実行されたアクションです
- アクションが実行された国
- アクションが発生した日時 {%- ifversion enterprise-audit-log-ip-addresses %}
- 必要に応じて、アクションを実行したユーザー (アクター) の送信元 IP アドレス {%- endif %}
