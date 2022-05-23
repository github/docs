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
  ghes: '>3.2'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
  - Vulnerabilities
shortTitle: 更新のカスタマイズ
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## 依存関係の更新のカスタマイズについて

バージョン更新を有効にしてから、*dependabot.yml* ファイルにさらにオプションを追加することで、{% data variables.product.prodname_dependabot %} が依存関係を維持する方法をカスタマイズできます。 たとえば、次のような方法を使用します。

- `schedule.day`: バージョン更新のプルリクエストをオープンする曜日を指定する
- `reviewers`、 `assignees`、`labels`: 各パッケージマネージャーのレビュー担当者、アサインされた人、およびラベルを設定する
- `versioning-strategy`: 各マニフェストファイルへの変更に対するバージョン管理戦略を定義する
- `open-pull-requests-limit`: バージョン更新のオープンプルリクエストの最大数をデフォルトの 5 件から変更する
- `target-branch`: デフォルトブランチではなく、特定のブランチを対象とするバージョン更新のプルリクエストを開く

設定オプションに関する詳しい情報については「[dependabot.ymlファイルの設定オプション](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates)」を参照してください。

リポジトリ内の *dependabot.yml* ファイルを更新すると、{% data variables.product.prodname_dependabot %} は新しい設定で即座にチェックを実行します。 数分以内に、[**{% data variables.product.prodname_dependabot %}**] タブに更新された依存関係のリストが表示されます。リポジトリに多くの依存関係がある場合、表示までにさらに時間がかかることがあります。 バージョン更新に関する新しいプルリクエストが表示されることもあります。 詳しい情報については、「[バージョン更新用に設定された依存関係を一覧表示する](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates) 」を参照してください。

## 設定変更によるセキュリティアップデートへの影響

*dependabot.yml* ファイルをカスタマイズすると、セキュリティアップデートのために発行されたプルリクエストにいくつかの変更が見られる場合があります。 これらのプルリクエストは、{% data variables.product.prodname_dependabot %} スケジュールではなく、常に依存関係のセキュリティアドバイザリによってトリガーされます。 ただし、バージョンの更新に別のターゲットブランチを指定しない限り、これらは *dependabot.yml* ファイルから関連する設定を継承します。

例については、後述の「[カスタムラベルを設定する](#setting-custom-labels)」を参照してください。

## スケジュールを変更する

更新スケジュールを `daily` で設定すると、デフォルトで {% data variables.product.prodname_dependabot %} は 5:00 (UTC) に新しいバージョンをチェックします。 `schedule.time` を使用して、更新をチェックする別の時刻を指定します（形式: `hh:mm`）。

次の *dependabot.yml* ファイルの例では、npm 設定を拡張して、{% data variables.product.prodname_dependabot %} がいつ依存関係のバージョン更新をチェックするかを指定しています。

```yaml
# バージョン更新のスケジュールが
# カスタマイズされている dependabot.yml ファイル

version: 2
updates:
  # npm の依存関係を最新に保つ
  - package-ecosystem: "npm"
    directory: "/"
    # npm レジストリの更新を午前 2 時 (UTC) にチェックする
    schedule:
      interval: "daily"
      time: "02:00"
```

## レビュー担当者とアサインされた人を設定する

デフォルトでは、{% data variables.product.prodname_dependabot %} は、レビュー担当者やアサインされた人なしでプルリクエストを発行します。

`reviewers` および `assignees` を使用して、パッケージマネージャーに対して発行されたすべてのプルリクエストの特定のレビュー担当者とアサインされた人を指定できます。 Team を指定するときは、Team（Organizationを含む）を@メンションしている場合と同じように、完全な Team 名を使用する必要があります。

次の *dependabot.yml* ファイルの例では、npm の設定を変更して、npm のバージョンおよびセキュリティアップデートでオープンになったすべてのプルリクエストに 2 人のレビュー担当者と 1 人のアサインされた人がいるようにします。

```yaml
# すべての npm プルリクエストのレビューと
# アサインされた人を含む dependabot.yml ファイル

version: 2
updates:
  # npm の依存関係を最新に保つ
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # レビュー担当者ですべての npm プルリクエストを発行する
    reviewers:
      - "my-org/team-name"
      - "octocat"
    # アサインされた人ですべてのnpmプルリクエストを発行する
    assignees:
      - "user-name"
```

## カスタムラベルを設定する

{% data reusables.dependabot.default-labels %}

`labels` を使用してデフォルトのラベルを上書きし、パッケージマネージャーに対して発行されたすべてのプルリクエストに代替のラベルを指定します。 *dependabot.yml* ファイル内で新しいラベルを作成することはできないため、代替ラベルはリポジトリ内に既存である必要があります。

次の *dependabot.yml* ファイルの例では、npm の設定を変更して、npm のバージョンおよびセキュリティアップデートでオープンになったすべてのプルリクエストにカスタムラベルが含まれるようにします。 また、Docker 設定を変更して、カスタムブランチに対するバージョン更新を確認し、そのカスタムブランチに対するカスタムラベルを使用してプルリクエストを発行します。 セキュリティアップデートは常にデフォルトのブランチに対して行われるため、Docker への変更はセキュリティアップデートのプルリクエストには影響しません。

{% note %}

**注釈:** 新しい `target-branch` には、更新する Dockerfile が含まれていなければなりません。含まれていない場合、この変更により Docker のバージョン更新が無効になります。

{% endnote %}

```yaml
# カスタマイズされた npm 設定を含む
# dependabot.yml ファイル

version: 2
updates:
  # npm の依存関係を最新に保つ
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # カスタムラベルですべての npm プルリクエストを発行する
      - "npm dependencies"
      - "triage-board"

    # Docker の依存関係を最新に保つ
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "daily"
    # 「develop」ブランチに対して Docker バージョン更新の
    # プルリクエストを発行する。 セキュリティアップデートのプルリクエストに
    # 影響しなくなった Docker 設定
    target-branch: "develop"
    # Docker バージョン更新のプルリクエストでカスタムラベルを使用する
    labels:
      - "Docker dependencies"
      - "triage-board"
```

## その他の例

その他の例については「[dependabot.ymlファイルの設定オプション](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates)」を参照してください。
