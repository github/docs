---
title: Dependabot アラートについて
intro: 'リポジトリで脆弱な依存関係{% ifversion GH-advisory-db-supports-malware %}またはマルウェア{% endif %}を使用していることが検出された場合、{% data variables.product.product_name %} から {% data variables.product.prodname_dependabot_alerts %}が送信されます。'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Dependabot alerts
ms.openlocfilehash: 737e5547e3aefd6b5c49780df0c78cdc73292ee4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106742'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

## {% data variables.product.prodname_dependabot_alerts %} について

{% ifversion GH-advisory-db-supports-malware %} {% data reusables.advisory-database.beta-malware-advisories %} {% endif %}

{% data variables.product.prodname_dependabot_alerts %} により、コードが安全でないパッケージに依存していることが通知されます。

セキュリティ上の脆弱性があるパッケージにコードが依存している場合、プロジェクトまたはそれを使用するユーザーにさまざまな問題が発生する可能性があります。 できるだけ早く、セキュリティで保護されたバージョンのパッケージにアップグレードする必要があります。{% ifversion GH-advisory-db-supports-malware %}コードでマルウェアが使用されている場合は、パッケージを安全な代替手段に置き換える必要があります。{% endif %}

{% data reusables.security-advisory.link-browsing-advisory-db %}

## 安全でない依存関係を検出する

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dependabot %} により、安全でない依存関係を検出するためにスキャンが実行され、以下の場合に {% data variables.product.prodname_dependabot_alerts %}が送信されます。

{% ifversion fpt or ghec %}
- {% data variables.product.prodname_advisory_database %} に新しいアドバイザリが追加されたとき。 詳しい情報については、「[{% data variables.product.prodname_advisory_database %} でのセキュリティ アドバイザリの参照](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database)」を参照してください。{% else %}
- 新しいアドバイザリ データが {% data variables.product.prodname_dotcom_the_website %} から 1 時間ごとに {% data variables.location.product_location %} に同期されたとき。 {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %} {% note %}

  **注:** {% data variables.product.company_short %} によってレビューされたアドバイザリのみが、{% data variables.product.prodname_dependabot_alerts %}をトリガーします。

  {% endnote %}
- リポジトリの依存関係グラフが変更された場合。 たとえば、共同作成者がコミットをプッシュして、依存しているパッケージまたはバージョンを変更したとき{% ifversion fpt or ghec %}、またはいずれかの依存関係のコードが変更されたときなどです{% endif %}。 詳細については、「[依存関係グラフの概要](/code-security/supply-chain-security/about-the-dependency-graph)」を参照してください。

{% data reusables.repositories.dependency-review %}

{% data variables.product.product_name %} で安全でない依存関係が検出されるエコシステムの一覧については、「[サポートされているパッケージ エコシステム](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」を参照してください。

{% note %}

**注:** マニフェストとロック ファイルを最新の状態に保つことが重要です。 依存関係グラフに現在の依存関係とバージョンが正確に反映されていない場合は、使用している安全でない依存関係のアラートを見逃す可能性があります。 また、使用しなくなった依存関係のアラートを受け取る場合もあります。

{% endnote %}

##  {% data variables.product.prodname_dependabot_alerts %}の構成について

{% data reusables.repositories.enable-security-alerts %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} は、 _"パブリック"_ リポジトリ内の脆弱な依存関係とマルウェアを検出し、依存関係グラフを表示しますが、既定では {% data variables.product.prodname_dependabot_alerts %}は生成されません。 リポジトリの所有者または管理者アクセス権を持つユーザーは、パブリック リポジトリに対して {% data variables.product.prodname_dependabot_alerts %}を有効にすることができます。 プライベートリポジトリの所有者、または管理アクセス権を持つユーザは、リポジトリの依存関係グラフと {% data variables.product.prodname_dependabot_alerts %} を有効にすることで、{% data variables.product.prodname_dependabot_alerts %} を有効化できます。

ユーザー アカウントまたは組織が所有するすべてのリポジトリの {% data variables.product.prodname_dependabot_alerts %}を有効または無効にすることもできます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %} の構成](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)」を参照してください。

{% data variables.product.prodname_dependabot_alerts %}に関連するアクションのアクセス要件については、「[組織のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)」を参照してください。

{% data variables.product.product_name %} で依存関係グラフの生成がすぐに始まり、安全でない依存関係が特定されるとすぐにアラートが生成されます。 グラフは通常数分以内に入力されますが、多くの依存関係を持つリポジトリの場合は時間がかかる場合があります。 詳細については、「[プライベート リポジトリ用のデータ利用設定の管理](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)」を参照してください。
{% endif %}

{% data variables.product.product_name %} で脆弱な依存関係{% ifversion GH-advisory-db-supports-malware %}またはマルウェア{% endif %}が特定されると、{% data variables.product.prodname_dependabot %} アラートが生成され、{% ifversion fpt or ghec or ghes %}リポジトリの [セキュリティ] タブと{% endif %}リポジトリの依存関係グラフにそれが表示されます。 アラートには、{% ifversion fpt or ghec or ghes %}プロジェクト内の影響を受けるファイルへのリンクと、{% endif %}固定バージョンに関する情報が含まれます。 {% data variables.product.product_name %} は、影響を受けるリポジトリの保守担当者に、通知設定に従って新しいアラートについて通知します。 詳しい情報については、「[{% data variables.product.prodname_dependabot_alerts %} の構成](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)」を参照してください。

{% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dependabot_security_updates %}が有効になっているリポジトリの場合、アラートには、脆弱性を解決する最小バージョンにマニフェストまたはロック ファイルを更新するための pull request へのリンクも含まれる場合があります。 詳細については、「[{% data variables.product.prodname_dependabot_security_updates %}について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」を参照してください。
{% endif %}

{% warning %}

**注**: {% data variables.product.product_name %} のセキュリティ機能は、すべての脆弱性{% ifversion GH-advisory-db-supports-malware %}とマルウェア{% endif %}を捕捉するものではありません。 {% data variables.product.prodname_advisory_database %} は頻繁に更新されており、最新の情報を使用したアラートが生成されます。 ただし、すべてを捕捉することや、一定の期間内に確実に既知の脆弱性について通知することはできません。 これらの機能は、人間が各依存関係をレビューして、潜在的な脆弱性やその他のイシューを確認する作業の代わりになるものではありません。必要に応じて、セキュリティ サービスに相談したり、依存関係の詳しいレビューを実施したりすることをお勧めします。

{% endwarning %}

## {% data variables.product.prodname_dependabot_alerts %}へのアクセス

{% ifversion fpt or ghec %}リポジトリの [セキュリティ] タブ、または{% endif %}リポジトリの依存関係グラフにおいて、特定のプロジェクトに影響するすべてのアラートを見ることができます。 詳しくは、「[{% data variables.product.prodname_dependabot_alerts %} の表示と更新](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)」を参照してください。

デフォルトでは、新しい{% data variables.product.prodname_dependabot_alerts %}に関して影響を受けるリポジトリに管理権限を持っている人に通知を行います。 {% ifversion fpt or ghec %}{% data variables.product.product_name %} は、いかなるリポジトリについても、安全でない依存関係を公開することはありません。 {% data variables.product.prodname_dependabot_alerts %} を、自分が所有または管理者権限を持っているリポジトリで作業している追加のユーザや Team に表示することもできます。 詳細については、「[リポジトリのセキュリティと分析の設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)」を参照してください。
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-enable %} {% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} 詳しい情報については、「[{% data variables.product.prodname_dependabot_alerts %} の通知を構成する](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)」を参照してください。

{% data variables.product.prodname_advisory_database %} 内の特定のアドバイザリに対応するすべての {% data variables.product.prodname_dependabot_alerts %}を見ることもできます。 {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghec or ghes %}
## 参考資料

- 「[{% data variables.product.prodname_dependabot_security_updates %}について](/github/managing-security-vulnerabilities/about-dependabot-security-updates)」
- 「[{% data variables.product.prodname_dependabot_alerts %}の表示と更新](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)」{% endif %} {% ifversion fpt or ghec %}- 「[{% data variables.product.prodname_dotcom %} でのプライバシー](/get-started/privacy-on-github)」{% endif %}
