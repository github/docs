---
ms.openlocfilehash: dfbf31bbfeea726bcd0c1852d881aefc8f149c0e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160284"
---
検索バーにフィルターを `key:value` ペアとして入力すると、{% data variables.product.prodname_dependabot_alerts %} を並べ替えたりフィルター処理したりすることができます。 

| オプション | 説明 | 例 | 
|:---|:---|:---|
| `ecosystem` | 選んだエコシステムのアラートを表示します | `ecosystem:npm` を使用して npm の {% data variables.product.prodname_dependabot_alerts %} を表示します |{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
| `has` | 選んだフィルター条件を満たすアラートを表示します | `has:patch` を使用してパッチを持つアドバイザリに関するアラートを表示します。{% ifversion dependabot-alerts-vulnerable-calls %}</br>`has:vulnerable-calls` を使用して、脆弱な関数の呼び出しに関するアラートを表示します{% endif %} |{% endif %}
| `is` | 状態に基づいてアラートを表示します | `is:open` を使用して、開いているアラートを表示します |
| `manifest` | 選んだマニフェストのアラートを表示します | `manifest:webwolf/pom.xml` を使用して、Webwolf アプリケーションの pom.xml ファイルにアラートを表示します |
| `package` | 選んだパッケージのアラートを表示します | `package:django` を使用して、django のアラートを表示します |
| `resolution` | 選んだ解決状態のアラートを表示します | `resolution:no-bandwidth` を使用して、リソースまたは修正時間が足りなかったために以前にパークされたアラートを表示します |
| `repo` |  関連するリポジトリに基づいてアラートを表示します</br>このフィルターは、セキュリティの概要でのみ使用できる点にご注意ください。 詳しくは、「[セキュリティの概要](/code-security/security-overview/about-the-security-overview)」をご覧ください。 | `repo:octocat-repo` を使用して、呼び出された `octocat-repo` リポジトリにアラートを表示します。 |{%- ifversion dependabot-alerts-development-label %}
| `scope` | 関連する依存関係のスコープに基づいてアラートを表示します | `scope:development` を使用して、開発中にのみ使用される依存関係のアラートを表示します |{% endif %}
| `severity` | 重大度のレベルに基づいてアラートを表示します | `severity:high` を使用して、重大度が高いアラートを表示します |{%- ifversion dependabot-most-important-sort-option %}
| `sort` | 選んだ並べ替え順序に従ってアラートを表示します | アラートの既定の並べ替えオプションは `sort:most-important` であり、重要度でアラートが優先度付けされます</br>`sort:newest` を使用して、{% data variables.product.prodname_dependabot %} によって報告された最新のアラートを表示します |{% endif %}
