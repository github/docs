---
ms.openlocfilehash: 3cc118cb9748ada5efb83aad6c0fe3b86c76d9bb
ms.sourcegitcommit: 738c16f6fc6d56d939a80c832497c8bfa28d10c7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/05/2022
ms.locfileid: "148134901"
---
{% ifversion fpt or ghec %}既定では、次のようにして通知を受け取ります。{% endif %}{% ifversion ghes or ghae %}既定では、エンタープライズ所有者がインスタンスで通知用にメールを構成している場合、{% data variables.product.prodname_dependabot_alerts %} を次のように受け取ります。{% endif %}

- インボックス (Web 通知として)。 Web 通知は、{% data variables.product.prodname_dependabot %} がリポジトリで有効にされていて、新しいマニフェスト ファイルがリポジトリにコミットされたときに、重要度が重大または高の新しい脆弱性が見つかった場合に送信されます ( **[{% data variables.product.prodname_dotcom %} 上]** オプション)。
- メール。{% data variables.product.prodname_dependabot %} がリポジトリで有効にされていて、新しいマニフェスト ファイルがリポジトリにコミットされたときに、重要度が重大または高の新しい脆弱性が見つかると、メールが送信されます ( **[Email]** オプション)。{% ifversion ghes < 3.8 or ghae < 3.8 %}
- ユーザー インターフェイス。セキュリティで保護されていない依存関係がある場合、リポジトリのファイル ビューとコード ビューに警告が表示されます ( **[UI アラート]** オプション)。{% endif %}
- コマンド ライン。セキュリティで保護されていない依存関係を使用してリポジトリにプッシュすると、警告がコールバックとして表示されます ( **[CLI]** オプション)。
{% ifversion not ghae %}
- {% data variables.product.prodname_mobile %}では、Web通知として表示されます。 詳しくは、「[{% data variables.product.prodname_mobile %} でプッシュ通知を有効にする](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)」を参照してください。{% endif %}

{% note %}

**注:** メールと Web{% ifversion not ghae %}/{% data variables.product.prodname_mobile %}{% endif %} の通知は次のとおりです。

- {% data variables.product.prodname_dependabot %} がリポジトリで有効にされているとき、または新しいマニフェスト ファイルがリポジトリにコミットされたときは、_リポジトリごと_。

- 新しい脆弱性が検出されたときは、_Organization ごと_。

{% endnote %}

{% ifversion update-notification-settings-22 %} {% data variables.product.prodname_dependabot_alerts %}に関する通知を受け取る方法をカスタマイズできます。 たとえば、 **[週単位のメール ダイジェスト]** オプションを使用すると、最大 10 個のリポジトリについてアラートを要約した週単位のダイジェスト メールを受け取ることができます。
{% else %} {% data variables.product.prodname_dependabot_alerts %}に関する通知を受け取る方法をカスタマイズできます。 たとえば、 **[脆弱性の要約をメールで送る]** と **[週単位のセキュリティ メール ダイジェスト]** オプションを使用すると、最大 10 個のリポジトリについてアラートを要約した週単位のダイジェスト メールを受け取ることができます。{% endif %}
