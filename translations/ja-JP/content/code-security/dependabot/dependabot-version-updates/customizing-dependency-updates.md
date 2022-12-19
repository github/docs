---
title: 依存関係の更新をカスタマイズする
intro: '{% data variables.product.prodname_dependabot %} が依存関係を維持する方法をカスタマイズできます。'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
redirect_from:
  - /github/administering-a-repository/customizing-dependency-updates
  - /code-security/supply-chain-security/customizing-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/customizing-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
  - Vulnerabilities
shortTitle: Customize updates
ms.openlocfilehash: 99a3869313598733493d21f8b15d46db98b1a53c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107742'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## 依存関係の更新のカスタマイズについて

バージョン アップデートを有効にすると、*dependabot.yml* ファイルにその他のオプションを追加することで、{% data variables.product.prodname_dependabot %} を使って依存関係を維持する方法をカスタマイズできます。 たとえば、次のことが可能です。

- バージョン アップデートの pull request をオープンする曜日を指定する (`schedule.day`)
- レビュー担当者、担当者、各パッケージ マネージャーのラベルを設定する (`reviewers`、`assignees`、`labels`)
- 各マニフェスト ファイルの変更に対するバージョン管理戦略を定義する (`versioning-strategy`)
- バージョン アップデートの pull requests オープンする回数を、既定の 5 回から最大の回数に変更する (`open-pull-requests-limit`)
- バージョン アップデートの pull request をオープンして、既定のブランチの代わりに特定のブランチをターゲットにする (`target-branch`)

構成オプションの詳しい情報については、「[dependabot.yml ファイルの構成オプション](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates)」を参照してください。

リポジトリ内の *dependabot.yml* ファイルを更新すると、{% data variables.product.prodname_dependabot %} によって、新しい構成で、すぐにチェックが実行されます。 数分以内に、 **[{% data variables.product.prodname_dependabot %}]** タブに依存関係の更新済みリストが表示されます。リポジトリにある依存関係が多い場合は、時間がかかることがあります。 バージョン更新に関する新しいプルリクエストが表示されることもあります。 詳しい情報については、「[バージョン更新用に設定された依存関係を一覧表示する](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates)」を参照してください。

## 設定変更によるセキュリティアップデートへの影響

*dependabot.yml* ファイルをカスタマイズしていると、セキュリティ アップデートに対して発行された pull request の変更点に気づくかもしれません。 これらのプルリクエストは、{% data variables.product.prodname_dependabot %} スケジュールではなく、常に依存関係のセキュリティアドバイザリによってトリガーされます。 ただし、バージョン アップデートに別のターゲット ブランチを指定していなければ、関連する構成設定は *dependabot.yml* ファイルから継承されます。

例については、[カスタム ラベルの設定](#setting-custom-labels)に関する以下のセクションを参照してください。

## スケジュールを変更する

アップデート スケジュールを `daily` に設定すると、既定の 05:00 (UTC) に {% data variables.product.prodname_dependabot %} で新しいバージョンのチェックが行われます。 `schedule.time` を使うと、アップデートのチェックを別の時刻に指定できます (`hh:mm` 形式)。

次の *dependabot.yml* ファイルの例では、npm 構成を拡張して、{% data variables.product.prodname_dependabot %} で依存関係のバージョン アップデートをチェックするタイミングを指定します。

```yaml
# dependabot.yml file with
# customized schedule for version updates

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    # Check the npm registry for updates at 2am UTC
    schedule:
      interval: "daily"
      time: "02:00"
```

## レビュー担当者とアサインされた人を設定する

デフォルトでは、{% data variables.product.prodname_dependabot %} は、レビュー担当者やアサインされた人なしでプルリクエストを発行します。

`reviewers` と `assignees` を使うと、パッケージ マネージャーに対して発行されたすべての pull request のレビュー担当者と担当者を指定できます。 Team を指定する場合は、その Team (Organization を含む) を @mentioning していたように、Team のフル ネームを使う必要があります。

次の *dependabot.yml* ファイルの例では、npm のバージョン アップデートとセキュリティ アップデートでオープンしたすべての pull request に 2 人のレビュー担当者と 1 人の担当者が存在するように、npm 構成を変更します。

```yaml
# dependabot.yml file with
# reviews and an assignee for all npm pull requests

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with reviewers
    reviewers:
      - "my-org/team-name"
      - "octocat"
    # Raise all npm pull requests with an assignee
    assignees:
      - "user-name"
```

## カスタムラベルを設定する

{% data reusables.dependabot.default-labels %}

`labels` を使うと、既定のラベルを上書きして、パッケージ マネージャーに対して発行されたすべての pull request に代替ラベルを指定できます。 *dependabot.yml* ファイルでは新しいラベルを作成できないため、リポジトリ内に代替ラベルが既に存在している必要があります。

次の *dependabot.yml* ファイルの例では、npm のバージョン アップデートとセキュリティ アップデートでオープンしたすべての pull request にカスタム ラベルが存在するように、npm 構成を変更します。 また、Docker 設定を変更して、カスタムブランチに対するバージョン更新を確認し、そのカスタムブランチに対するカスタムラベルを使用してプルリクエストを発行します。 セキュリティアップデートは常にデフォルトのブランチに対して行われるため、Docker への変更はセキュリティアップデートのプルリクエストには影響しません。

{% note %}

**注:** 新しい `target-branch` には、更新する Dockerfile が含まれている必要があります。含まれていない場合、この変更を行うと、Docker のバージョン アップデートが無効になります。

{% endnote %}

```yaml
# dependabot.yml file with
# customized npm configuration

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with custom labels
    labels:
      - "npm dependencies"
      - "triage-board"

    # Keep Docker dependencies up to date
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise pull requests for Docker version updates
    # against the "develop" branch. The Docker configuration
    # no longer affects security update pull requests.
    target-branch: "develop"
    # Use custom labels on pull requests for Docker version updates
    labels:
      - "Docker dependencies"
      - "triage-board"
```

## その他の例

詳しい情報については、「[dependabot.yml ファイルの設定オプション](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates)」を参照してください。
