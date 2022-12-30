---
ms.openlocfilehash: ae3a6c6743e497213f23230a4f78d98a1ab9a110
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192930"
---
ユーザーが {% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} で次のいずれかのアクティビティを実行した場合、そのユーザーはアクティブと見なされます。

- {% data variables.location.product_location %} にサインインする
- リポジトリを作成する
- リポジトリにプッシュする
- リポジトリに追加される
- リポジトリの表示を変更する
- Issueもしくはプルリクエストの作成
- イシューまたは pull request にコメントする
- イシューまたは pull request をクローズまたは再オープンする
- イシューまたは pull request にラベルを適用する、またはラベルを削除する
- イシューまたは pull request の割り当てまたは割り当て解除を行う
- pull request のレビューを要求する、またはレビュー要求を削除する
- pull request レビューのコメントを作成または編集する
- pull request のコメントを無視する 
- pull request を同期する
- コミットにコメントする
- リリースを公開する
- wiki にプッシュする
- リポジトリを Watch する
- リポジトリの Star 付け
- リポジトリの削除
- {% data variables.product.pat_generic %} または SSH キーを使用してリソースにアクセスする
- 組織に参加する

{% ifversion ghes %} ユーザーはそのアカウントが LDAP によって更新されている場合もアクティブと見なされます。
{% endif %}
