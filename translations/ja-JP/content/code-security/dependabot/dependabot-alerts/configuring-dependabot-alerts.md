---
title: Dependabotアラートの設定
intro: '依存関係のいずれかで新しい脆弱性が見つかったときに通知してもらえるよう、{% data variables.product.prodname_dependabot_alerts %}を有効化してください。'
shortTitle: Dependabotアラートの設定
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

## 脆弱性のある依存関係に対する{% data variables.product.prodname_dependabot_alerts %}について

{% data reusables.repositories.a-vulnerability-is %}

Dependabotは、新しい脆弱性がGitHub Advisory Databaseに追加された場合、あるいはリポジトリの依存関係グラフが変更されたときに、脆弱性のある依存関係を検出するためにスキャンを行い、Dependabotアラートを送信します。 詳しい情報については「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)」を参照してください。

{% data variables.product.prodname_dependabot_alerts %}は、以下に対して有効化あるいは無効化できます。
* 個人アカウント
* リポジトリ
* Organization

## 個人アカウントの{% data variables.product.prodname_dependabot_alerts %}の管理

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dependabot_alerts %}は、個人アカウントが所有するすべてのリポジトリで有効化あるいは無効化できます。

### 既存のリポジトリに対する{% data variables.product.prodname_dependabot_alerts %}の有効化あるいは無効化

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. "Code security and analysis（コードのセキュリティと分析）"の下、{% data variables.product.prodname_dependabot_alerts %}の右で**Disable all（すべて無効化）**あるいは**Enable all（すべて有効化）**をクリックしてください。 !["すべて有効化"あるいは"すべて無効化"ボタンが強調された"セキュリティと分析の設定"機能のスクリーンショット](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-all.png)
4. あるいは、作成する新しいリポジトリに対してデフォルトで{% data variables.product.prodname_dependabot_alerts %}を有効化してください。 !["新しいプライベートリポジトリでデフォルトで有効"チェックボックスが強調された"Dependabotアラートの有効化"のスクリーンショット](/assets/images/help/dependabot/dependabot-alerts-enable-by-default.png)
5. **Disable {% data variables.product.prodname_dependabot_alerts %}**もしくは**Enable {% data variables.product.prodname_dependabot_alerts %}**をクリックして、所有するすべてのリポジトリで{% data variables.product.prodname_dependabot_alerts %}を無効化あるいは有効化してください。 !["Dependabotアラートの有効化"ボタンが強調された"Dependabotアラートの有効化"のスクリーンショット](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts.png)

既存のリポジトリに対して{% data variables.product.prodname_dependabot_alerts %}を有効化すると、数分の内にGitHub上に結果が表示されます。

### 新しいリポジトリに対する{% data variables.product.prodname_dependabot_alerts %}の有効化あるいは無効化

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. "Code security and analysis（コードのセキュリティと分析）"の下、{% data variables.product.prodname_dependabot_alerts %}の右で、作成する新しいリポジトリに対してデフォルトで{% data variables.product.prodname_dependabot_alerts %}を有効化あるいは無効化してください。 !["すべての新しいプライベートリポジトリで有効化"チェックが強調された"セキュリティと分析の設定"のスクリーンショット](/assets/images/help/dependabot/dependabot-alerts-enable-for-all-new-repositories.png)

{% else %}
リポジトリに対する{% data variables.product.prodname_dependabot_alerts %}は、Enterpriseのオーナーが有効化あるいは無効化できます。 詳しい情報については「[EnterpriseでのDependabotの有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。

{% endif %}

## リポジトリの {% data variables.product.prodname_dependabot_alerts %} を管理する

{% ifversion fpt or ghec %}パブリック、プライベート、インターナルリポジトリに対して{% data variables.product.prodname_dependabot_alerts %}を管理できます。

デフォルトでは、新しい{% data variables.product.prodname_dependabot_alerts %}に関して影響を受けるリポジトリに管理権限を持っている人に通知を行います。 {% data variables.product.product_name %} は、特定のリポジトリに対して特定された脆弱性を公表することはありません。 {% data variables.product.prodname_dependabot_alerts %} を、自分が所有または管理者権限を持っているリポジトリで作業している追加のユーザや Team に表示することもできます。

{% data reusables.security.security-and-analysis-features-enable-read-only %}

### リポジトリに対する{% data variables.product.prodname_dependabot_alerts %}の有効化あるいは無効化

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. "Code security and analysis（コードのセキュリティと分析）"の下、{% data variables.product.prodname_dependabot_alerts %}の右で、**Disable（無効化）**あるいは**Enable（有効化）**をクリックしてください。 ![Dependabotアラートの"無効化"ボタンが強調された"セキュリティと分析の設定"機能のスクリーンショット](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt-private.png)
 {% endif %}{% ifversion ghes or ghae %}

リポジトリに対する{% data variables.product.prodname_dependabot_alerts %}は、Enterpriseオーナーが有効化あるいは無効化できます。 詳しい情報については「[EnterpriseでのDependabotの有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。
{% endif %}

## Organization の {% data variables.product.prodname_dependabot_alerts %} を管理する
{% ifversion fpt or ghec %}{% data variables.product.prodname_dependabot_alerts %}は、Organizationが所有するすべてのリポジトリで有効化あるいは無効化できます。 変更はすべてのリポジトリに影響します。

### 既存のすべてのリポジトリでの{% data variables.product.prodname_dependabot_alerts %}の有効化あるいは無効化

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
2. "Code security and analysis（コードのセキュリティと分析）"の下、{% data variables.product.prodname_dependabot_alerts %}の右で**Disable all（すべて無効化）**あるいは**Enable all（すべて有効化）**をクリックしてください。
   {% ifversion fpt or ghec %}
   ![Dependabotアラートの"すべてで有効化"あるいは"すべてで無効化"ボタンが強調された"セキュリティと分析の設定"機能のスクリーンショット](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt.png)
   {% endif %}
   {% ifversion ghae %}
   ![[Configure security and analysis] 機能の [Enable all] または [Disable all] ボタン](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png)
   {% endif %}
   {% ifversion fpt or ghec %}
3. あるいは、Organizationの新規のプライベートリポジトリに対して {% data variables.product.prodname_dependabot_alerts %} をデフォルトで有効にすることもできます。
   {% ifversion fpt or ghec %}
   ![新しいリポジトリの"デフォルトで有効化"オプションのスクリーンショット](/assets/images/help/dependabot/dependabot-alerts-enable-by-default-organizations.png)
   {% endif %}

   {% endif %}
   {% ifversion fpt or ghec %}
4. **Disable {% data variables.product.prodname_dependabot_alerts %}**もしくは**Enable {% data variables.product.prodname_dependabot_alerts %}**をクリックして、Organizationのすべてのリポジトリで{% data variables.product.prodname_dependabot_alerts %}を無効化あるいは有効化してください。
   {% ifversion fpt or ghec %}
   ![機能の無効化あるいは有効化ボタンが強調された"Dependabotアラートの有効化"モーダルのスクリーンショット](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts-organizations.png)
   {% endif %}{% endif %}{% endif %}{% ifversion ghes or ghae %}
Organizationに対する{% data variables.product.prodname_dependabot_alerts %}は、Enterpriseのオーナーが有効化あるいは無効化できます。 詳しい情報については「[GitHub Enterprise ServerのDependabotについて](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。
{% endif %}
