---
title: Secret scanningからのアラートを管理する
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

**ノート:** アラートは、{% data variables.product.prodname_secret_scanning_GHAS %}が有効化されたリポジトリでのみ生成されます。 無料の{% data variables.product.prodname_secret_scanning_partner%}サービスを使ってパブリックリポジトリで見つかったシークレットは、アラートを生成することなくパートナーに直接報告されます。

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
1. あるいは{% ifversion fpt or ghec %}"Close as"{% elsif ghes or ghae %}"Mark as"{% endif %}ドロップダウンメニューを選択し、アラートを解決する理由をクリックしてください。
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

**ノート:** シークレットが{% data variables.product.prodname_dotcom_the_website %}上のパブリックリポジトリで検出され、そのシークレットがパートナーパターンにもマッチした場合、アラートが生成され、シークレットかもしれないものがサービスプロバイダに報告されます。 パートナーパターンに関する詳細については「[パートナーパターンでサポートされているシークレット](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)」を参照してください。

{% endnote %}
{% endif %}

{% ifversion fpt or ghes or ghae-issue-4910 or ghec %}
## {% data variables.product.prodname_secret_scanning %}アラートの通知の設定

新しいシークレットが検出されると、{% data variables.product.product_name %}は通知設定に従ってリポジトリのセキュリティアラートにアクセスできるすべてのユーザに通知します。 あなたがリポジトリをWatchしていて、セキュリティアラートもしくはリポジトリのすべてのアクティビティに対する通知を有効化しているか、検出されたシークレットを含むコミットの作者でそのリポジトリを無視していなければ、あなたはメール通知を受け取ることになります。

詳しい情報については、「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」及び「[通知の設定](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)」を参照してください。
{% endif %}
