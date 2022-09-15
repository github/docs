---
title: シークレット スキャンからのアラートの管理
intro: リポジトリにチェックインしたシークレットのアラートを表示したりクローズしたりすることができます。
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
  - /code-security/secret-security/managing-alerts-from-secret-scanning
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Manage secret alerts
ms.openlocfilehash: 537b3673145dddcb3babbb606c2ac97aab6a9cb8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063555'
---
{% data reusables.secret-scanning.beta %}

## {% data variables.product.prodname_secret_scanning %}アラートの管理

{% ifversion ghec %} {% note %}

**注:** アラートは、{% data variables.product.prodname_secret_scanning_GHAS %}が有効になっているリポジトリに対してのみ作成されます。 無料の {% data variables.product.prodname_secret_scanning_partner%} サービスを使用しているパブリック リポジトリで見つかったシークレットは、アラートを作成せずにパートナーに直接報告されます。

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. 左側のサイドバーの **[シークレット スキャンのアラート]** をクリックします。
   {% ifversion fpt or ghes or ghec %} ![[シークレット スキャンのアラート] タブ](/assets/images/help/repository/sidebar-secrets.png) {% endif %} {% ifversion ghae %} ![[シークレット スキャンのアラート] タブ](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png) {% endif %}
1. [Secret scanning] の下で、表示するアラートをクリックします。
   {% ifversion fpt or ghec %} ![シークレット スキャンからのアラートの一覧](/assets/images/help/repository/secret-scanning-click-alert.png) {% endif %} {% ifversion ghes %} ![シークレット スキャンからのアラートの一覧](/assets/images/help/repository/secret-scanning-click-alert-ghe.png) {% endif %} {% ifversion ghae %} ![シークレット スキャンからのアラートの一覧](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png) {% endif %}
1. 必要に応じて、{% ifversion fpt or ghec %}[次としてクローズする]{% elsif ghes or ghae %}[次のマークを付ける]{% endif %} ドロップダウン メニューを選択し、アラートを解決する理由をクリックします。
   {% ifversion fpt or ghec %} ![シークレット スキャンからアラートを解決するためのドロップダウン メニュー](/assets/images/help/repository/secret-scanning-resolve-alert.png) {% endif %} {% ifversion ghes or ghae %} ![シークレット スキャンからアラートを解決するためのドロップダウン メニュー](/assets/images/help/repository/secret-scanning-resolve-alert-ghe.png) {% endif %}

## 侵害されたシークレットを保護する

シークレットがリポジトリにコミットされたら、シークレットが侵害されたと考える必要があります。 {% data variables.product.prodname_dotcom %} は、侵害されたシークレットに対して次のアクションを行うことをおすすめします。

- 侵害された {% data variables.product.prodname_dotcom %} の個人アクセストークンについては、侵害されたトークンを削除し、新しいトークンを作成し、古いトークンを使っていたサービスを更新してください。 詳細については、[コマンド ライン用の個人アクセス トークンの使用](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)に関するページを参照してください。
- それ以外のすべてのシークレットについては、最初に {% data variables.product.product_name %} にコミットされたシークレットが有効であることを確認してください。 有効な場合は、新しいシークレットを作成し、古いシークレットを使用するサービスをすべて更新して、古いシークレットを削除します。

{% ifversion ghec %} {% note %}

**注:** シークレットが {% data variables.product.prodname_dotcom_the_website %} のパブリック リポジトリで検出され、シークレットもパートナー パターンと一致する場合は、アラートが生成され、可能性のあるシークレットがサービス プロバイダーに報告されます。 パートナー パターンの詳細については、「[パートナー パターンでサポートされるシークレット](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)」を参照してください。

{% endnote %} {% endif %}

{% ifversion fpt or ghes or ghae-issue-4910 or ghec %}
## {% data variables.product.prodname_secret_scanning %}アラートの通知の設定

新しいシークレットが検出されると {% data variables.product.product_name %} によって、通知設定に従ってリポジトリのセキュリティ アラートにアクセスできるすべてのユーザーに通知されます。 あなたがリポジトリを監視している場合、セキュリティ アラートまたはリポジトリ上のすべてのアクティビティの通知を有効にしている場合、またはシークレットを含むコミットの作成者でリポジトリを無視していない場合は、メール通知を受け取ります。

詳細については、「[リポジトリのセキュリティと分析の設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」と[通知の構成](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)に関するページを参照してください。
{% endif %}
