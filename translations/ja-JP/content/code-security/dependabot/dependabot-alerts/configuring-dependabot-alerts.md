---
title: Dependabot アラートの構成
intro: '新しい脆弱な依存関係{% ifversion GH-advisory-db-supports-malware %}またはマルウェア{% endif %}がいずれかのリポジトリに見つかった場合に、{% data variables.product.prodname_dependabot_alerts %}が生成されるようにします。'
shortTitle: Configure Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 7844380c395b1ab0c43ba01fa151bf403c6a0349
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146455518'
---
## 脆弱な依存関係{% ifversion GH-advisory-db-supports-malware %}とマルウェア{% endif %}に関する {% data variables.product.prodname_dependabot_alerts %}について

{% data reusables.repositories.a-vulnerability-is %} 

{% data variables.product.prodname_advisory_database %} に新しいアドバイザリが追加されたとき、またはリポジトリの依存関係グラフが変更されたとき、{% data variables.product.prodname_dependabot %} によってコードがスキャンされます。 脆弱な依存関係{% ifversion GH-advisory-db-supports-malware %}またはマルウェア{% endif %}が検出されると、{% data variables.product.prodname_dependabot_alerts %}が生成されます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)」を参照してください。

次の場合、{% data variables.product.prodname_dependabot_alerts %} を有効か無効にできます。
* 個人アカウント
* リポジトリ
* 自分の組織

## 個人アカウントの {% data variables.product.prodname_dependabot_alerts %} の管理

{% ifversion fpt or ghec %}

個人アカウントが所有するすべてのリポジトリの {% data variables.product.prodname_dependabot_alerts %} を有効か無効にできます。

### 既存のリポジトリに対する {% data variables.product.prodname_dependabot_alerts %} の有効化または無効化

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. [Code security and analysis]\(コードのセキュリティと分析\) で、{% data variables.product.prodname_dependabot_alerts %} の右側にある **[すべて無効にする]** か **[すべて有効にする]** をクリックします。
 ![[すべて有効にする] または [すべて無効にする] ボタンが強調された [セキュリティと分析の構成] 機能のスクリーンショット](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-all.png)
4. 必要に応じて、作成する新しいリポジトリに対して {% data variables.product.prodname_dependabot_alerts %} を既定で有効にします。
  ![[Enable by default for new private repositories]\(新しいプライベート リポジトリを既定で有効にする\) チェックボックスが強調されている "Dependabot アラートを有効にする" スクリーンショット](/assets/images/help/dependabot/dependabot-alerts-enable-by-default.png)
5. **[{% data variables.product.prodname_dependabot_alerts %}を無効にする]** か **[{% data variables.product.prodname_dependabot_alerts %}を有効にする]** をクリックすると、所有しているすべてのリポジトリに対して {% data variables.product.prodname_dependabot_alerts %} を無効か有効にすることができます。
  ![[Enable Dependabot alerts]\(Dependabot アラートを有効にする\) ボタンが強調された "Dependabot アラートを有効にする" スクリーンショット](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts.png)

既存のリポジトリに対して {% data variables.product.prodname_dependabot_alerts %} を有効にすると、数分以内に GitHub に結果が表示されるようになります。

### 新規リポジトリに対する {% data variables.product.prodname_dependabot_alerts %} の有効化または無効化

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. [Code security and analysis]\(コードのセキュリティと分析\) で、{% data variables.product.prodname_dependabot_alerts %} の右側にある、作成する新規リポジトリに対する {% data variables.product.prodname_dependabot_alerts %} を既定で有効か無効に設定できます。
  ![[Enable for all new private repositories]\(すべての新しいプライベート リポジトリに対して有効にする\) チェックが強調された [Configure security and analysis]\(セキュリティと分析の構成\) のスクリーンショット](/assets/images/help/dependabot/dependabot-alerts-enable-for-all-new-repositories.png)

{% else %}リポジトリの {% data variables.product.prodname_dependabot_alerts %} は、エンタープライズ所有者が有効か無効にできます。 詳細については、「[エンタープライズでの Dependabot の有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。

{% endif %}

## リポジトリの {% data variables.product.prodname_dependabot_alerts %} の管理

{% ifversion fpt or ghec %}パブリック、プライベート、または内部リポジトリの {% data variables.product.prodname_dependabot_alerts %} を管理できます。

デフォルトでは、新しい{% data variables.product.prodname_dependabot_alerts %}に関して影響を受けるリポジトリに管理権限を持っている人に通知を行います。 {% data variables.product.product_name %} は、どのようなリポジトリについても、安全でない依存関係を公表することはありません。 {% data variables.product.prodname_dependabot_alerts %} を、自分が所有または管理者権限を持っているリポジトリで作業している追加のユーザや Team に表示することもできます。

{% data reusables.security.security-and-analysis-features-enable-read-only %}

### リポジトリに対する {% data variables.product.prodname_dependabot_alerts %} の有効化および無効化

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. [コードのセキュリティと分析] で、{% data variables.product.prodname_dependabot_alerts %}の右側にある **[有効にする]** をクリックしてアラートを有効にするか、 **[無効にする]** をクリックしてアラートを無効にします。 
  ![[コードのセキュリティと分析] セクションと、{% data variables.product.prodname_dependabot_security_updates %}を有効にするボタンのスクリーンショット](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png) {% endif %}{% ifversion ghes or ghae %}

リポジトリの {% data variables.product.prodname_dependabot_alerts %} は、エンタープライズ所有者が有効か無効にできます。 詳細については、「[エンタープライズでの Dependabot の有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。
{% endif %}

## 組織の {% data variables.product.prodname_dependabot_alerts %} の管理
{% ifversion fpt or ghec %}組織が所有するすべてのリポジトリに対して {% data variables.product.prodname_dependabot_alerts %} を有効か無効にできます。 変更はすべてのリポジトリに影響します。

### 既存のすべてのリポジトリに対する {% data variables.product.prodname_dependabot_alerts %} の有効化または無効化

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
2. [Code security and analysis]\(コードのセキュリティと分析\) で、{% data variables.product.prodname_dependabot_alerts %} の右側にある **[すべて無効にする]** か **[すべて有効にする]** をクリックします。 
   {% ifversion fpt or ghec %} ![Dependabot アラートで [すべて有効にする] または [すべて無効にする] ボタンが強調された [セキュリティと分析の構成] 機能のスクリーンショット](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt.png) {% endif %} {% ifversion ghae %} ![[セキュリティと分析の構成] 機能の [すべて有効にする] または [すべて無効にする] ボタン](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png) {% endif %} {% ifversion fpt or ghec %}
3. 必要に応じて、組織内の新しいリポジトリに対して {% data variables.product.prodname_dependabot_alerts %} を既定で有効にします。
   {% ifversion fpt or ghec %} ![新しいリポジトリの [既定で有効にする] オプションのスクリーンショット](/assets/images/help/dependabot/dependabot-alerts-enable-by-default-organizations.png) {% endif %}
   
   {% endif %} {% ifversion fpt or ghec %}
4. **[{% data variables.product.prodname_dependabot_alerts %}を無効にする]** か **[{% data variables.product.prodname_dependabot_alerts %}を有効にする]** をクリックすると、組織内のすべてのリポジトリに対して {% data variables.product.prodname_dependabot_alerts %} を無効か有効にすることができます。
   {% ifversion fpt or ghec %} ![無効または有効にする機能のボタンが強調された [Enable Dependabot alerts]\(Dependabot アラートを有効にする\) モーダルのスクリーンショット](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts-organizations.png) {% endif %}{% endif %}{% endif %}{% ifversion ghes or ghae %} 組織の {% data variables.product.prodname_dependabot_alerts %} は、エンタープライズ所有者が有効か無効にできます。 詳細については、「[GitHub Enterprise サーバーの Dependabot について](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。
   {% endif %}
