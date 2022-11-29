---
title: プライベートリポジトリ用のデータ利用設定を管理する
intro: '{% data variables.product.product_name %} で、関連するツール、人、プロジェクト、情報につなげるには、プライベートリポジトリ用のデータを設定します。'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Manage data use for private repo
ms.openlocfilehash: 36ddc4449726b67863e7d4e045dd1582b12f2c27
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526671'
---
## プライベートリポジトリ用のデータ利用について


セキュリティおよび分析機能でのプライベート リポジトリのデータの使用を制御できます。 

- 依存関係グラフを有効にして、リポジトリで読み取り専用データを分析できるようにします。 
- 依存関係グラフを無効にして、リポジトリで読み取り専用データを分析できないようにします。 

プライベートリポジトリのデータ利用を設定すると、依存グラフにアクセスできます。依存グラフでは、リポジトリの依存関係を追跡し、{% data variables.product.product_name %} が脆弱性のある依存関係を検出したときに {% data variables.product.prodname_dependabot_alerts %} を受け取ることができます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)」を参照してください。


{% note %}

**注:** 依存関係グラフを無効にすると、{% data variables.product.prodname_dependabot_alerts %} と {% data variables.product.prodname_dependabot_security_updates %} も無効になります。 詳細については、「[依存関係グラフの概要](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)」を参照してください。 

{% endnote %}

## セキュリティおよび分析機能でのデータの使用を有効または無効にする

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. [コードのセキュリティと分析] で、機能の右にある **[無効]** または **[有効]** をクリックします。{% ifversion fpt %} ![[セキュリティと分析の構成] 機能の [有効] または [無効] ボタン](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png) {% elsif ghec %} ![[セキュリティと分析の構成] 機能の [有効] または [無効] ボタン](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% endif %}

## 参考資料

- [{% data variables.product.prodname_dotcom %} によるユーザーのデータの利用について](/articles/about-github-s-use-of-your-data)
- 「[{% data variables.product.prodname_dependabot_alerts %} の表示と更新](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)」
- 「[リポジトリのセキュリティと分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」
