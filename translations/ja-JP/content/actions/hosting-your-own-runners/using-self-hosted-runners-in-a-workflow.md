---
title: ワークフローでのセルフホストランナーの利用
intro: ワークフローでセルフホストランナーを使うには、ラベルを使ってジョブのためのランナーの種類を指定できます。
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Use runners in a workflow
ms.openlocfilehash: 5c0ff57f5b3eda79e3fcf8b09706ed19f981b8ae
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573418'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

カスタム ラベルと既定のラベルの作成については、「[セルフホスト ランナーとのラベルの利用](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)」を参照してください。

## ワークフローでのセルフホストランナーの利用

ラベルを使うと、セルフホストランナーの共有される特徴に基づき、ワークフローのジョブを特定の種類のセルフホストランナーに送れます。 たとえば、ジョブが特定のハードウェアコンポーネントやソフトウェアパッケージを必要とするなら、カスタムラベルをランナーに割り当て、そのラベルを持つランナー上でのみ実行されるようジョブを設定できます。

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)に関するページを参照してください。

## デフォルトラベルを使ったジョブの転送

セルフホストランナーは、{% data variables.product.prodname_actions %}に追加されたときに特定のラベルを自動的に受信します。 それらは、ランナーのオペレーティングシステムとハードウェアプラットフォームを示すために使われます。

* `self-hosted`: すべてのセルフホステッド ランナーに適用される既定のラベル。
* `linux`、`windows`、または `macOS`: オペレーティング システムに応じて適用されます。
* `x64`、`ARM`、または `ARM64`: ハードウェア アーキテクチャに応じて適用されます。

ワークフローのYAMLを使って、これらのラベルの組み合わせに対してジョブを送信できます。 この例では、3つのラベルすべてにマッチするセルフホストランナーが、ジョブを実行する資格を持つことになります。

```yaml
runs-on: [self-hosted, linux, ARM64]
```

- `self-hosted` - セルフホステッド ランナー上でこのジョブを実行します。
- `linux` - Linux ベースのランナーのみを使います。
- `ARM64` - ARM64 ハードウェア ベースのランナーのみを使います。

デフォルトラベルは固定されており、変更や削除はできません。 ジョブの転送をもっと制御する必要がある場合は、カスタムラベルの利用を検討してください。

## カスタムラベルを使ったジョブの転送

カスタムラベルを作成し、セルフホストランナーに割り当てることがいつでもできます。 カスタムラベルを使えば、付けられたラベルに基づいて特定の種類のセルフホストランナーにジョブを送信できるようになります。 

たとえば、特定の種類のグラフィック ハードウェアを必要とするジョブがある場合、`gpu` というカスタム ラベルを作成し、そのハードウェアが組み込まれているランナーに割り当てることができます。 割り当てられたすべてのラベルにマッチするセルフホストランナーが、そのジョブを実行できるようになります。 

以下の例は、デフォルトとカスタムのラベルを組み合わせたジョブです。

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

- `self-hosted` - セルフホステッド ランナー上でこのジョブを実行します。
- `linux` - Linux ベースのランナーのみを使います。
- `x64` - x64 ハードウェア ベースのランナーのみを使います。
- `gpu`- このカスタム ラベルは、GPU ハードウェアが組み込まれたセルフホステッド ランナーに手動で割り当てられました。 

これらのラベルは累積的に働くので、このジョブを処理できるセルフホスト ランナーには、4 つすべてのラベルがなくてはなりません。

## セルフホストランナーのルーティングの優先順位

ジョブをセルフホステッド ランナーにルーティングする際に、{% data variables.product.prodname_dotcom %} はジョブの `runs-on` ラベルと一致するランナーを探します。

{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
- {% data variables.product.prodname_dotcom %} がジョブの `runs-on` ラベルと一致するオンラインでアイドルのランナーを見つけると、ジョブがそのランナーに割り当てられ、送信されます。
  - 割り当てられたジョブをランナーが 60 秒以内に取得しない場合、新しいランナーが受け入れることができるように、ジョブはキューに再格納されます。
- {% data variables.product.prodname_dotcom %} がジョブの `runs-on` ラベルと一致するオンラインでアイドルのランナーを見つけられない場合、ランナーがオンラインになるまで、ジョブはキューに格納されたままになります。
- 24時間以上にわたってキューに残っていたジョブは失敗します。
{% elsif ghes = 3.3 %}
- {% data variables.product.prodname_dotcom %} は、まずリポジトリ レベル、次に組織レベル、次にエンタープライズ レベルでランナーを検索します。
- {% data variables.product.prodname_dotcom %} が特定のレベルでジョブの `runs-on` ラベルと一致するオンラインでアイドルのランナーを見つけると、ジョブがそのランナーに割り当てられ、送信されます。
  - 割り当てられたジョブをランナーが 60 秒以内に取得しない場合、ジョブはすべてのレベルでキューに格納され、任意のレベルから一致するランナーがオンラインになり、ジョブを取得するまで待機します。
- {% data variables.product.prodname_dotcom %} がどのレベルでもオンラインでアイドルのランナーを見つけられない場合、ジョブはすべてのレベルでキューに格納され、いずれかのレベルの一致するランナーがオンラインになり、ジョブを取得するまで待機します。
- 24時間以上にわたってキューに残っていたジョブは失敗します。
{% else %}
1. {% data variables.product.prodname_dotcom %} は、まずリポジトリ レベル、次に組織レベル、次にエンタープライズ レベルでランナーを検索します。
2. ジョブは最初にマッチした、オンラインでアイドル状態のランナーに送信されます。
   - マッチしたすべてのランナーがビジーだった場合、ジョブはマッチしたオンラインのランナーが最も多いレベルでキューイングされます。
   - マッチしたランナーがすべてオフラインだった場合、ジョブはマッチしたオフラインのランナーが最も多いレベルでキューイングされます。
   - マッチするランナーがどのレベルにもなかった場合、そのジョブは失敗します。
   - 24時間以上にわたってキューに残っていたジョブは失敗します。
{% endif %}
