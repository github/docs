---
title: バージョン更新用に設定された依存関係を一覧表示する
intro: '{% data variables.product.prodname_dependabot %} が更新を監視している依存関係を表示できます。'
redirect_from:
  - /github/administering-a-repository/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Dependencies
shortTitle: List configured dependencies
ms.openlocfilehash: 6da514616c7091fb3ac4f874f68b5951ca23412b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109800'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot %} によって監視されている依存関係を表示する

バージョン更新を有効にした後、リポジトリの依存関係グラフの **[{% data variables.product.prodname_dependabot %}]** タブで、設定が正しいかどうかを確認できます。 詳細については、「[{% data variables.product.prodname_dependabot %} バージョンの更新の構成](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)」を参照してください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %} {% data reusables.dependabot.click-dependabot-tab %}
1. 必要に応じて、パッケージ マネージャーで監視されているファイルを表示するには、関連する {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックします。
  ![監視対象の依存関係ファイル](/assets/images/help/dependabot/monitored-dependency-files.png)

依存関係が見つからない場合は、ログファイルでエラーを確認します。 パッケージマネージャーが見つからない場合は、設定ファイルを確認してください。

## Viewing {% data variables.product.prodname_dependabot %} のログファイルを表示する

1. **[{% data variables.product.prodname_dependabot %}]** タブで、 **[最後のチェックは *時間* 前]** をクリックして、{% data variables.product.prodname_dependabot %} で最後のバージョン更新チェック時に生成されたログファイルを表示します。
  ![[ログ ファイルの表示]](/assets/images/help/dependabot/last-checked-link.png)
2. 必要に応じて、バージョン チェックを再実行するには、 **[更新プログラムをチェックする]** をクリックします。
  ![更新プログラムをチェックする](/assets/images/help/dependabot/check-for-updates.png)
