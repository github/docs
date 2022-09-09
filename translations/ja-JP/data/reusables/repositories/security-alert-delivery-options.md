---
ms.openlocfilehash: 86e470a2557996f90def0d7ab84e17e646642e0a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145118061"
---
{% ifversion not ghae %} リポジトリにサポートされている依存関係のマニフェストがあるなら{% ifversion fpt or ghec %} (そしてプライベート リポジトリの場合は依存関係のグラフをセットアップしてあるなら){% endif %}、{% data variables.product.product_name %} がリポジトリ中に脆弱性のある依存関係を検出すると、週次のダイジェスト メールを受け取ることになります。 セキュリティアラートは、Web通知、個別のメール通知、日次のメールダイジェスト、{% data variables.product.product_name %}インターフェース上のアラートとして設定することもできます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。
{% endif %}
