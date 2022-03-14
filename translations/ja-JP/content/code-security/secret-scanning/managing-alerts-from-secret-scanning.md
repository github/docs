---
title: シークレットスキャンからのアラートを管理する
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
shortTitle: シークレットのアラートの管理
---

{% data reusables.secret-scanning.beta %}

## {% data variables.product.prodname_secret_scanning %}アラートの管理

{% ifversion ghec %}
{% note %}

**Note:** Alerts are created only for repositories with {% data variables.product.prodname_secret_scanning_GHAS %} enabled. Secrets found in public repositories using the free {% data variables.product.prodname_secret_scanning_partner%} service are reported directly to the partner, without creating an alert.

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. 左サイトバーで、[**Secret scanning alerts**] をクリックします。
   {% ifversion fpt or ghes or ghec %}
   ![[Secret scanning alert] タブ](/assets/images/help/repository/sidebar-secrets.png)
   {% endif %}
   {% ifversion ghae %}
   ![[Secret scanning alert] タブ](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png)
   {% endif %}
1. [Secret scanning] の下で、表示するアラートをクリックします。
   {% ifversion fpt or ghec %}
   ![シークレットスキャンからのアラートのリスト](/assets/images/help/repository/secret-scanning-click-alert.png)
   {% endif %}
   {% ifversion ghes %}
   ![シークレットスキャンからのアラートのリスト](/assets/images/help/repository/secret-scanning-click-alert-ghe.png)
   {% endif %}
   {% ifversion ghae %}
   ![シークレットスキャンからのアラートのリスト](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png)
   {% endif %}
1. Optionally, select the {% ifversion fpt or ghec %}"Close as"{% elsif ghes or ghae %}"Mark as"{% endif %} drop-down menu and click a reason for resolving an alert.
   {% ifversion fpt or ghec %}
   ![シークレットスキャンからのアラートを解決するためのドロップダウンメニュー](/assets/images/help/repository/secret-scanning-resolve-alert.png)
   {% endif %}
   {% ifversion ghes or ghae %}
   ![シークレットスキャンからのアラートを解決するためのドロップダウンメニュー](/assets/images/help/repository/secret-scanning-resolve-alert-ghe.png)
   {% endif %}

## 侵害されたシークレットを保護する

シークレットがリポジトリにコミットされたら、シークレットが侵害されたと考える必要があります。 {% data variables.product.prodname_dotcom %} は、侵害されたシークレットに対して次のアクションを行うことをおすすめします。

- 侵害された {% data variables.product.prodname_dotcom %} の個人アクセストークンについては、侵害されたトークンを削除し、新しいトークンを作成し、古いトークンを使っていたサービスを更新してください。 詳しい情報については[コマンドラインのための個人のアクセストークンの作成](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)を参照してください。
- それ以外のすべてのシークレットについては、最初に {% data variables.product.product_name %} にコミットされたシークレットが有効であることを確認してください。 有効である場合は、新しいシークレットを作成し、古いシークレットを使用するサービスを更新してから、古いシークレットを削除します。

{% ifversion ghec %}
{% note %}

**Note:** If a secret is detected in a public repository on {% data variables.product.prodname_dotcom_the_website %} and the secret also matches a partner pattern, an alert is generated and the potential secret is reported to the service provider. For details of partner patterns, see "[Supported secrets for partner patterns](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)."

{% endnote %}
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-issue-4910 or ghec %}
## {% data variables.product.prodname_secret_scanning %}アラートの通知の設定

新しいシークレットが検出されると、{% data variables.product.product_name %}は通知設定に従ってリポジトリのセキュリティアラートにアクセスできるすべてのユーザに通知します。 You will receive alerts if you are watching the repository, have enabled notifications for security alerts or for all the activity on the repository, are the author of the commit that contains the secret and are not ignoring the repository.

詳しい情報については、「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」及び「[通知の設定](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)」を参照してください。
{% endif %}
