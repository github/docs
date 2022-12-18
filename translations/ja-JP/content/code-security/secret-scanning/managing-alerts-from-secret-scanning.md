---
title: シークレット スキャンからのアラートの管理
intro: リポジトリにチェックインしたシークレットのアラートを表示したりクローズしたりすることができます。
permissions: People with admin access to a repository can view and dismiss alerts.
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
ms.openlocfilehash: f7c92b975d5bf8646b25d817564bff32ffc94e1c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158670'
---
{% data reusables.secret-scanning.beta %}

## {% data variables.product.prodname_secret_scanning %}アラートの管理

{% ifversion ghec %} {% note %}

**注:** アラートは、{% data variables.product.prodname_secret_scanning_GHAS %}が有効になっているリポジトリに対してのみ作成されます。 無料の {% data variables.product.prodname_secret_scanning_partner%} サービスを使用しているパブリック リポジトリで見つかったシークレットは、アラートを作成せずにパートナーに直接報告されます。

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. 左側のサイドバーの **[シークレット スキャンのアラート]** をクリックします。
   {% ifversion ghes or ghec %} ![[シークレット スキャンのアラート] タブ](/assets/images/help/repository/sidebar-secrets.png) {% endif %} {% ifversion ghae %} ![[シークレット スキャンのアラート] タブ](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png) {% endif %}
1. [Secret scanning] の下で、表示するアラートをクリックします。
   {% ifversion ghec %} ![シークレット スキャンからのアラートの一覧](/assets/images/help/repository/secret-scanning-click-alert.png) {% endif %} {% ifversion ghes %} ![シークレット スキャンからのアラートの一覧](/assets/images/help/repository/secret-scanning-click-alert-ghe.png) {% endif %} {% ifversion ghae %} ![シークレット スキャンからのアラートの一覧](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png) {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. アラートを無視するには、[アラートの無視] ドロップダウン メニューを選び、アラートを解決する理由をクリックします。

   ![シークレット スキャンからアラートを無視するドロップダウン メニューのスクリーンショット](/assets/images/help/repository/secret-scanning-dismiss-alert.png){% else %}
1. アラートを無視するには、[次のマークを付ける] ドロップダウン メニューを選び、アラートを解決する理由をクリックします。 
  
   ![シークレット スキャンからアラートを解決するドロップダウン メニューのスクリーンショット](/assets/images/enterprise/3.2/repository/secret-scanning-resolve-alert-ghe.png)

   {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. 必要に応じて、無視のコメントを追加します。 無視のコメントはアラート タイムラインに追加され、監査と報告の間に正当な理由として使用できます。 アラート タイムラインで、すべての無視されたアラートと無視コメントの履歴を確認できます。 また、{% data variables.product.prodname_secret_scanning_caps %} API を使って、コメントを取得または設定することもできます。 コメントは `resolution_comment` フィールドに含まれています。 詳細については、REST API ドキュメントの「[{% data variables.product.prodname_secret_scanning_caps %}](/rest/secret-scanning#update-a-secret-scanning-alert)」を参照してください。

  ![[アラートの無視] ドロップダウンでアラートを無視する方法と、無視コメントを追加するオプションを示すスクリーンショット](/assets/images/help/repository/secret-scanning-dismissal-comment.png)

1. **[アラートを無視]** をクリックします。
{% endif %}

## 侵害されたシークレットを保護する

シークレットがリポジトリにコミットされたら、シークレットが侵害されたと考える必要があります。 {% data variables.product.prodname_dotcom %} は、侵害されたシークレットに対して次のアクションを行うことをおすすめします。

- 侵害された {% data variables.product.prodname_dotcom %} {% data variables.product.pat_generic %} については、侵害されたトークンを削除し、新しいトークンを作成し、古いトークンを使っていたサービスを更新してください。 詳細については、「[コマンド ラインの {% data variables.product.pat_generic %} の作成](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)」を参照してください。
{%- ifversion token-audit-log %}
  - {% ifversion ghec %}組織が企業アカウント所有の場合、企業のリソースで侵害されたトークンで行われた行動を特定{% else %}特定{% endif %}します。 詳細については、「[アクセス トークンによって実行された監査ログ イベントの特定](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)」を参照してください。
{%- endif %}
- それ以外のすべてのシークレットについては、最初に {% data variables.product.product_name %} にコミットされたシークレットが有効であることを確認してください。 有効な場合は、新しいシークレットを作成し、古いシークレットを使用するサービスをすべて更新して、古いシークレットを削除します。

{% ifversion ghec %} {% note %}

**注:** シークレットが {% data variables.product.prodname_dotcom_the_website %} のパブリック リポジトリで検出され、シークレットもパートナー パターンと一致する場合は、アラートが生成され、可能性のあるシークレットがサービス プロバイダーに報告されます。 パートナー パターンの詳細については、「[パートナー パターンでサポートされるシークレット](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)」を参照してください。

{% endnote %} {% endif %}

## {% data variables.product.prodname_secret_scanning %}アラートの通知の設定

新しいシークレットが検出されると {% data variables.product.product_name %} によって、通知設定に従ってリポジトリのセキュリティ アラートにアクセスできるすべてのユーザーに通知されます。 あなたがリポジトリを監視している場合、セキュリティ アラートまたはリポジトリ上のすべてのアクティビティの通知を有効にしている場合、またはシークレットを含むコミットの作成者でリポジトリを無視していない場合は、メール通知を受け取ります。

詳細については、「[リポジトリのセキュリティと分析の設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」と[通知の構成](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)に関するページを参照してください。
