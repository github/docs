---
title: ワークフローでのセルフホストランナーの利用
intro: ワークフローでセルフホストランナーを使うには、ラベルを使ってジョブのためのランナーの種類を指定できます。
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: tutorial
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

カスタム及びデフォルトラベルの作成に関する情報については「[セルフホストランナーでのラベルの利用](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)」を参照してください。

### ワークフローでのセルフホストランナーの利用

ラベルを使うと、セルフホストランナーの共有される特徴に基づき、ワークフローのジョブを特定の種類のセルフホストランナーに送れます。 たとえば、ジョブが特定のハードウェアコンポーネントやソフトウェアパッケージを必要とするなら、カスタムラベルをランナーに割り当て、そのラベルを持つランナー上でのみ実行されるようジョブを設定できます。

{% data reusables.github-actions.self-hosted-runner-labels-runs-on %}

詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)」を参照してください。

### デフォルトラベルを使ったジョブの転送

セルフホストランナーは、{% data variables.product.prodname_actions %}に追加されたときに特定のラベルを自動的に受信します。 それらは、ランナーのオペレーティングシステムとハードウェアプラットフォームを示すために使われます。

* `self-hosted`: セルフホストランナーに適用されるデフォルトのラベル。
* `linux`、`windows`、`macOS`: オペレーティングシステムに基づいて適用されます。
* `x64`, `ARM`, or `ARM64`: Applied depending on hardware architecture.

ワークフローのYAMLを使って、これらのラベルの組み合わせに対してジョブを送信できます。 この例では、3つのラベルすべてにマッチするセルフホストランナーが、ジョブを実行する資格を持つことになります。

```yaml
runs-on: [self-hosted, linux, ARM64]
```

- `self-hosted` - このジョブをセルフホストランナー上で実行します。
- `linux` - Linuxベースのランナーだけを使います。
- `ARM64` - ARM64ハードウェアベースのランナーだけを使います。

デフォルトラベルは固定されており、変更や削除はできません。 ジョブの転送をもっと制御する必要がある場合は、カスタムラベルの利用を検討してください。

### カスタムラベルを使ったジョブの転送

カスタムラベルを作成し、セルフホストランナーに割り当てることがいつでもできます。 カスタムラベルを使えば、付けられたラベルに基づいて特定の種類のセルフホストランナーにジョブを送信できるようになります。

たとえば、特定の種類のグラフィックハードウェアを必要とするジョブがあるなら、`gpu`というカスタムラベルを作成し、そのハードウェアがインストールされているランナーに割り当てることができます。 割り当てられたすべてのラベルにマッチするセルフホストランナーが、そのジョブを実行できるようになります。

以下の例は、デフォルトとカスタムのラベルを組み合わせたジョブです。

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

- `self-hosted` - このジョブをセルフホストランナー上で実行します。
- `linux` - Linuxベースのランナーだけを使います。
- `x64` - x64ハードウェアベースのランナーだけを使います。
- `gpu` - このカスタムラベルは、GPUハードウェアがインストールされているセルフホストランナーに手動で割り当てられました。

これらのラベルは累積的に働くので、このジョブを処理できるセルフホストランナーは、4つすべてのラベルがマッチしていなければなりません。

### セルフホストランナーのルーティングの優先順位

ジョブをセルフホストランナーにルーティングする際に、{% data variables.product.prodname_dotcom %}はジョブの`runs-on`ラベルにマッチするランナーを探します。

1. {% data variables.product.prodname_dotcom %}ま、まずリポジトリレベルで、続いてOrganizationのレベルで{% if currentVersion ver_gt "enterprise-server@2.21" %}、そしてEnterpriseのレベルで{% endif %}ランナーを探します。
2. ジョブは最初にマッチした、オンラインでアイドル状態のランナーに送信されます。
   - マッチしたすべてのランナーがビジーだった場合、ジョブはマッチしたオンラインのランナーが最も多いレベルでキューイングされます。
   - マッチしたランナーがすべてオフラインだった場合、ジョブはマッチしたオフラインのランナーが最も多いレベルでキューイングされます。
   - マッチするランナーがどのレベルにもなかった場合、そのジョブは失敗します。
   - 24時間以上にわたってキューに残っていたジョブは失敗します。
