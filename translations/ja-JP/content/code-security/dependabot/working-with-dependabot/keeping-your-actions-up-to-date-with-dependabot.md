---
title: Dependabot でアクションを最新に保つ
intro: '{% data variables.product.prodname_dependabot %} を使用して、使用するアクションを最新バージョンに更新しておくことができます。'
redirect_from:
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-github-dependabot
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/keeping-your-actions-up-to-date-with-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Actions
shortTitle: Auto-update actions
ms.openlocfilehash: 804660684230d8a0fb716b69644aab851a4c247b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107726'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## {% data variables.product.prodname_dependabot_version_updates %} のアクションについて

多くの場合、アクションはバグ修正と新機能で更新され、自動プロセスの信頼性、速度、安全性が向上しています。 {% data variables.product.prodname_actions %} に対して {% data variables.product.prodname_dependabot_version_updates %} を有効にすると、{% data variables.product.prodname_dependabot %} では、リポジトリの *workflow.yml* ファイル内のアクションへのリファレンスが最新の状態に保たれるようにします。 {% data variables.product.prodname_dependabot %} では、ファイル内のアクションごとに、アクションのリファレンス (通常、アクションに関連付けられているバージョン番号またはコミット ID) が最新バージョンと参照されます。 より新しいバージョンのアクションが使用可能な場合、{% data variables.product.prodname_dependabot %} によって、ワークフロー ファイル内のリファレンスを最新バージョンに更新する pull request が送信されます。 {% data variables.product.prodname_dependabot_version_updates %} について詳しくは、「[{% data variables.product.prodname_dependabot_version_updates %} について](/github/administering-a-repository/about-dependabot-version-updates)」を参照してください。 {% data variables.product.prodname_actions %} のワークフロー構成について詳しくは、「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」を参照してください。
  
{% data reusables.actions.workflow-runs-dependabot-note %}

## {% data variables.product.prodname_dependabot_version_updates %} のアクションを有効化する

自分のアクションと、依存するライブラリとパッケージを維持するように {% data variables.product.prodname_dependabot_version_updates %} を構成できます。 

1. 他のエコシステムまたはパッケージ マネージャーで既に {% data variables.product.prodname_dependabot_version_updates %} を有効にしている場合は、既存の *dependabot.yml* ファイルを開くだけです。 それ以外の場合、リポジトリの `.github` ディレクトリに *dependabot.yml* 構成ファイルを作成します。 詳しくは、「[Dependabot のバージョン アップデートの設定](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)」をご覧ください。
1. `"github-actions"` を `package-ecosystem` として指定して監視します。
1. `directory` を `"/"` に設定して、`.github/workflows` でワークフロー ファイルを確認します。
1. `schedule.interval` を設定して、新しいバージョンを確認する頻度を指定します。
{% data reusables.dependabot.check-in-dependabot-yml %} 既存のファイルを編集した場合は、変更を保存します。

フォークで {% data variables.product.prodname_dependabot_version_updates %} を有効化することもできます。 詳細については、「[{% data variables.product.prodname_dependabot %} バージョンの更新の構成](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-version-updates-on-forks)」を参照してください。

### {% data variables.product.prodname_actions %} の *dependabot.yml* ファイルの例

次の *dependabot.yml* ファイルの例では、{% data variables.product.prodname_actions %} のバージョン更新を設定しています。 `.github/workflows` でワークフロー ファイルを確認するために、`directory` は `"/"` に設定する必要があります。 `schedule.interval` に `"weekly"` が設定されています。 このファイルがチェックインまたは更新されると、{% data variables.product.prodname_dependabot %} はアクションの新しいバージョンをチェックします。 {% data variables.product.prodname_dependabot %} では、検出した期限切れのアクションに対してバージョン更新の pull request が生成されます。 初期バージョンの更新後、{% data variables.product.prodname_dependabot %} では 1 週間に 1 回、期限切れのバージョンのアクションを引き続き確認します。

```yaml
# Set update schedule for GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every week
      interval: "weekly"
```

## {% data variables.product.prodname_dependabot_version_updates %} のアクションを設定する

アクションに対して {% data variables.product.prodname_dependabot_version_updates %} を有効にする場合は、`package-ecosystem`、`directory`、`schedule.interval` の値を指定する必要があります。 バージョン更新をさらにカスタマイズするための設定オプションのプロパティは他にもたくさんあります。 詳細については、「[dependabot.yml ファイルの構成オプション](/github/administering-a-repository/configuration-options-for-dependency-updates)」を参照してください。

## 参考資料

- 「[GitHub Actions について](/actions/getting-started-with-github-actions/about-github-actions)」
