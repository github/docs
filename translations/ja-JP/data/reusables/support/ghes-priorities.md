---
ms.openlocfilehash: 801b42faa6e9a1bff269c1e4fcb0a5a2330717a4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145068819"
---
| 優先度 | 説明 | 例 |
| :---: | --- | --- |
| {% data variables.product.support_ticket_priority_urgent %} | {% data variables.product.prodname_ghe_server %}がプロダクション環境で障害を起こしており、その障害が直接的にビジネスの運用に影響している。<br/><br/>_{% data reusables.support.priority-urgent-english-only %}_ | <ul><li>すべてのユーザーについて、中核的なGitあるいはWebアプリケーションの機能に影響するエラーもしくは中断</li><li>ユーザーの大多数についての重大なパフォーマンスの低下</li><li>ストレージがフル、もしくは急速に埋まりつつある</li><li>更新されたライセンスファイルをインストールできない</li><li>セキュリティ インシデント</li><li>既知の回避策がない、インスタンスへの管理アクセスの喪失</li><li>プロダクション環境へのバックアップのリストアの失敗</li></ul> |
| {% data variables.product.support_ticket_priority_high %} | {% data variables.product.prodname_ghe_server %}がプロダクション環境で障害を起こしているが、ビジネスへの影響は限定的 | <ul><li>多くのユーザの生産性を引き下げるパフォーマンスの低下</li><li>High Availability (HA)もしくはクラスタノードの障害による冗長性の低下</li><li>インスタンスのバックアップの失敗</li><li>プロダクション環境へのリストアが成功しないかもしれないテストあるいはステージング環境へのリストアの失敗</li></ul> |
| {% data variables.product.support_ticket_priority_normal %} | {% data variables.product.prodname_ghe_server %}において限定的あるいは中程度の問題が生じているか、インスタンスの運用に関する一般的な懸念もしくは疑問がある。 | <ul><li>テストあるいはステージング環境での問題</li><li>{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API および機能を使用するにあたってのアドバイス、またはご自分のインスタンスからサードパーティを統合するにあたっての構成の質問</li><li>{% data variables.product.company_short %}が提供しているユーザデータ移行のためのツールについての問題</li><li>アップグレード</li><li>バグ報告</li><li>期待どおりに動作していない機能</li><li>一般的なセキュリティに関する疑問</li></ul> |
| {% data variables.product.support_ticket_priority_low %} | {% data variables.product.prodname_ghe_server %}に関して、時間の問題がない、あるいはチームの生産性を阻害していない疑問や提案がある。 | <ul><li>機能のリクエスト</li><li>製品フィードバック</li><li>ヘルスチェックのリクエスト（現時点では{% data variables.product.premium_support_plan %}の顧客のみ利用可能）</li><li>インスタンス上の計画されたメンテナンスの{% data variables.product.company_short %}への通知</li></ul> |
