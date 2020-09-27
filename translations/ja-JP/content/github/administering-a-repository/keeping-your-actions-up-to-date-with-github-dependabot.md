---
title: GitHub Dependabot でアクションを最新に保つ
intro: '{{ site.data.variables.product.prodname_dependabot }} を使用して、使用するアクションを最新バージョンに更新しておくことができます。'
versions:
  free-pro-team: '*'
---

{{ site.data.reusables.dependabot.beta-note }}

### {{ site.data.variables.product.prodname_dependabot_version_updates }} のアクションについて

多くの場合、アクションはバグ修正と新機能で更新され、自動プロセスの信頼性、速度、安全性が向上しています。 {{ site.data.variables.product.prodname_actions }} に対して {{ site.data.variables.product.prodname_dependabot_version_updates }} を有効にすると、{{ site.data.variables.product.prodname_dependabot }} は、リポジトリの *workflow.yml* ファイル内のアクションへのリファレンスが最新の状態に保たれるようにします。 {{ site.data.variables.product.prodname_dependabot_short }} は、ファイル内のアクションごとに、アクションのリファレンス（通常、アクションに関連付けられているバージョン番号またはコミット ID）を最新バージョンと照合します。 より新しいバージョンのアクションが使用可能な場合、{{ site.data.variables.product.prodname_dependabot_short }} は、ワークフローファイル内のリファレンスを最新バージョンに更新するプルリクエストを送信します。 {{ site.data.variables.product.prodname_dependabot_version_updates }} の詳細については、「[{{ site.data.variables.product.prodname_dependabot_version_updates }} について](/github/administering-a-repository/about-github-dependabot-version-updates)」を参照してください。 {{ site.data.variables.product.prodname_actions }} のワークフローの設定について詳しくは、「[ワークフローを設定する](/actions/configuring-and-managing-workflows/configuring-a-workflow)」を参照してください。

### {{ site.data.variables.product.prodname_dependabot_version_updates }} のアクションを有効化する

{{ site.data.reusables.dependabot.create-dependabot-yml }} 他のエコシステムまたはパッケージマネージャーですでに {{ site.data.variables.product.prodname_dependabot_version_updates }} を有効化している場合は、既存の *dependabot.yml* ファイルを開くだけです。
1. 監視する `package-ecosystem` として `"github-actions"` を指定します。
1. `directory` を `"/"` に設定し、`.github/workflows` でワークフローファイルを確認します。
1. `schedule.interval` を設定して、新しいバージョンをチェックする頻度を指定します。
{{ site.data.reusables.dependabot.check-in-dependabot-yml }} 既存のファイルを編集した場合は、変更を保存します。

フォークで {{ site.data.variables.product.prodname_dependabot_version_updates }} を有効化することもできます。 詳しい情報については、「[バージョン更新の有効化と無効化](/github/administering-a-repository/enabling-and-disabling-version-updates#enabling-version-updates-on-forks)」を参照してください。

#### {{ site.data.variables.product.prodname_actions }} の *dependabot.yml* ファイルの例

次の *dependabot.yml* ファイルの例は、{{ site.data.variables.product.prodname_actions }} のバージョン更新を設定しています。 `.github/workflows` でワークフローファイルを確認するには、`directory` を `"/"` に設定する必要があります。 `schedule.interval` は `"daily"` に設定します。 このファイルがチェックインまたは更新されると、{{ site.data.variables.product.prodname_dependabot }} はアクションの新しいバージョンをチェックします。 {{ site.data.variables.product.prodname_dependabot_short }} は、検出した古いアクションに対してバージョン更新のプルリクエストを生成します。 初期バージョンの更新後、{{ site.data.variables.product.prodname_dependabot_short }} は1日1回、古いバージョンのアクションを引き続きチェックします。

```yaml
# GitHub Actions の更新スケジュールを設定する

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # GitHub Actions の更新を毎週確認する
      interval: "daily"
```

### {{ site.data.variables.product.prodname_dependabot_version_updates }} のアクションを設定する

アクションの {{ site.data.variables.product.prodname_dependabot_version_updates }} を有効化する場合は、`package-ecosystem`、`directory`、および `schedule.interval` の値を指定する必要があります。 バージョン更新をさらにカスタマイズするための設定オプションのプロパティは他にもたくさんあります。 詳しい情報については、「[依存関係の更新の設定オプション](/github/administering-a-repository/configuration-options-for-dependency-updates) 」を参照してください。

### 参考リンク

- 「[GitHub Actions について](/actions/getting-started-with-github-actions/about-github-actions)」
