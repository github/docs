---
title: About AE hosted runners
intro: '{% data variables.product.prodname_ghe_managed %} offers customizable and security hardened hosted virtual machines to run {% data variables.product.prodname_actions %} workflows. You can select the hardware, bring your own machine image, and enable an IP address for networking with your {% data variables.actions.hosted_runner %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  github-ae: '*'
---




{% data reusables.actions.ae-beta %}

### {% data variables.actions.hosted_runner %} について

An {% data variables.actions.hosted_runner %} is a virtual machine hosted by {% data variables.product.prodname_dotcom %} with the {% data variables.product.prodname_actions %} runner service installed.

{% data variables.product.prodname_ghe_managed %} lets you create and customize {% data variables.actions.hosted_runner %}s using Ubuntu or Windows images; you can select the size of machine you want and configure security hardened networking for them. {% data variables.actions.hosted_runner %}s are fully managed and auto-scaled by {% data variables.product.prodname_dotcom %}.

Each workflow job is executed in a fresh instance of the {% data variables.actions.hosted_runner %}, and you can run workflows directly on the virtual machine or in a Docker container. All steps in the job execute in the same instance, allowing the actions in that job to share information using the {% data variables.actions.hosted_runner %}'s filesystem.

{% note %}
{% data variables.actions.hosted_runner %}s are the only runners available for {% data variables.product.prodname_ghe_managed %}, and self-hosted runners are not available.
{% endnote %}

To add {% data variables.actions.hosted_runner %}s to your organization or enterprise, see ["Adding {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/adding-ae-hosted-runners)."

### Pool assignments for {% data variables.actions.hosted_runner %}s

Your {% data variables.actions.hosted_runner %}s are allocated to the same pool as your {% data variables.product.prodname_ghe_managed %} instance. No other customers have access to this pool, and as a result, {% data variables.actions.hosted_runner %}s are not shared with any other customers.

### Managing your {% data variables.actions.hosted_runner %}s

During the {% data variables.actions.hosted_runner %} beta, you can manage your {% data variables.actions.hosted_runner %}s by contacting {% data variables.product.prodname_dotcom %} support. For example, {% data variables.product.prodname_dotcom %} support can assist you with adding a new {% data variables.actions.hosted_runner %}, assigning labels, or moving a {% data variables.actions.hosted_runner %} to a different group.

### 支払い

{% data variables.product.prodname_actions %} is currently in beta for {% data variables.product.prodname_ghe_managed %}. During this beta period, {% data variables.actions.hosted_runner %}s are not billed, and can be used for free.

Once the beta ends, billed usage will include the full uptime of active instances in your AE hosted runner sets. これは以下のものが含まれます。
- Job time - minutes spent running Actions job.
- Management - minutes spent re-imaging machines and any idle time created as a result of desired auto-scale behavior.

Pricing will scale linearly with cores. For example, 4 cores will be twice the price of 2 cores. Windows VMs will be priced higher than Linux VMs.

### Hardware specifications

{% data variables.actions.hosted_runner %}s are available on a range of virtual machines hosted in Microsoft Azure. Depending on regional availability, you can choose from `Standard_Das_v4`, `Standard_DS_v2`, `Standard_Fs_v2 series`. Certain regions also include GPU runners based on `Standard_NCs_v3`.

For more information about these Azure machine resources, see "[Sizes for virtual machines in Azure](https://docs.microsoft.com/en-gb/azure/virtual-machines/sizes)" in the Microsoft Azure documentation.

To determine which runner executed a job, you can review the workflow logs. 詳しい情報については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。

### Software specifications

You can use {% data variables.actions.hosted_runner %}s with standard operating system images, or you can add images that you've created.

#### Default operating system images

These images only include the standard operating system tools:

- Ubuntu 18.04 LTS (Canonical)
- Ubuntu 16.04 LTS (Canonical)
- Windows Server 2019 (Microsoft)
- Windows Server 2016 (Microsoft)

#### Custom operating system images

You can create your own OS images in Azure and have them added to {% data variables.product.prodname_ghe_managed %} as {% data variables.actions.hosted_runner %}s. For more information, see "[Adding an {% data variables.actions.hosted_runner %} with a custom image"](/actions/using-github-hosted-runners/adding-ae-hosted-runners#adding-an-ae-hosted-runner-with-a-custom-image).

### Network specifications

You can optionally enable a fixed static public IP address for your {% data variables.actions.hosted_runner %}s. If enabled, all {% data variables.actions.hosted_runner %}s in your instance will share a range of 2 to 4 IP addresses, and will communicate using ports on those addresses.

If you don't enable static public IP addresses, then your {% data variables.actions.hosted_runner %}s will subsequently have the same IP address ranges as the Azure datacenters. Inbound ICMP packets are blocked, so `ping` or `traceroute` commands are not expected to work.

To get a list of IP address ranges that {% data variables.product.prodname_actions %} uses for {% data variables.actions.hosted_runner %}s, you can use the {% data variables.product.prodname_dotcom %} REST API . 詳しい情報については「[GitHubメタ情報の取得](/rest/reference/meta#get-github-meta-information)」エンドポイントのレスポンス中の`actions`キーを参照してください。 内部リソースへの未認可のアクセスを防ぐために許可リストが必要な場合には、このIPアドレスのリストを利用できます。

このAPIが返す{% data variables.product.prodname_actions %}のIPアドレスのリストは、週に1回更新されます。

### Administrative privileges for {% data variables.actions.hosted_runner %}s

The Linux virtual machines run using passwordless `sudo`. 現在のユーザが持っているよりも高い権限が求められるコマンドやインストールツールを実行する必要がある場合は、パスワードを入力する必要なく、`sudo`を使うことができます。 詳しい情報については、「[Sudo Manual](https://www.sudo.ws/man/1.8.27/sudo.man.html)」を参照してください。

Windowsの仮想マシンは、ユーザアカウント制御（UAC）が無効化されて管理者として動作するように設定されています。 詳しい情報については、Windowsのドキュメンテーションの「[ユーザー アカウント制御のしくみ](https://docs.microsoft.com/ja-jp/windows/security/identity-protection/user-account-control/how-user-account-control-works)」を参照してください。

### ファイルシステム

{% data variables.product.prodname_dotcom %}は、仮想マシン上の特定のディレクトリでアクションとシェルコマンドを実行します。 仮想マシン上のファイルパスは静的なものではありません。 `home`、`workspace`、`workflow` ディレクトリのファイルパスを構築するには、{% data variables.product.prodname_dotcom %}が提供している環境変数を使用してください。

| ディレクトリ                | 環境変数                | 説明                                                                                                                                |
| --------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `home`                | `HOME`              | ユーザ関連のデータが含まれます。 たとえば、このディレクトリにはログイン試行からの認証情報を含めることができます。                                                                         |
| `workspace`           | `GITHUB_WORKSPACE`  | アクションとシェルコマンドはこのディレクトリで実行されます。 このディレクトリの内容は、アクションによって変更することができ、後続のアクションでアクセスできます。                                                 |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | ワークフローをトリガーしたwebhookイベントの`POST`ペイロード。 {% data variables.product.prodname_dotcom %}は、アクションを実行するたびにアクション間でファイルの内容を隔離するためにこれを書き換えます。 |

各ワークフローに対して{% data variables.product.prodname_dotcom %}が作成する環境変数のリストについては、「[環境変数の利用](/github/automating-your-workflow-with-github-actions/using-environment-variables)」を参照してください。

#### Dockerコンテナのファイルシステム

Dockerコンテナで実行されるアクションには、 `/github`パスの下に静的なディレクトリがあります。 ただし、Dockerコンテナ内のファイルパスを構築するには、デフォルトの環境変数を使用することを強くお勧めします。

{% data variables.product.prodname_dotcom %}は、`/github`パス接頭辞を予約し、アクションのために3つのディレクトリを作成します。

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`
