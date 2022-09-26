---
ms.openlocfilehash: 86e470a2557996f90def0d7ab84e17e646642e0a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145118061"
---
{% ifversion not ghae %} リポジトリにサポートされている依存関係のマニフェストがあるなら{% ifversion fpt or ghec %} (そしてプライベート リポジトリの場合は依存関係のグラフをセットアップしてあるなら){% endif %}、{% data variables.product.product_name %} がリポジトリ中に脆弱性のある依存関係を検出すると、週次のダイジェスト メールを受け取ることになります。 セキュリティアラートは、Web通知、個別のメール通知、日次のメールダイジェスト、{% data variables.product.product_name %}インターフェース上のアラートとして設定することもできます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。
{% endif %}
