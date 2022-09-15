---
title: JetBrains IDE での GitHub Copilot の構成
intro: 'JetBrains IDE で {% data variables.product.prodname_copilot %} を有効化、構成、無効化できます。'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
versions:
  feature: copilot
shortTitle: JetBrains
ms.openlocfilehash: 845f9306f519391f165dd00d3eefebed67bd409a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080287'
---
## JetBrains IDE の {% data variables.product.prodname_copilot %} について

Jetbrains IDE を使う場合、{% data variables.product.prodname_copilot %} は、入力時にコードをオートコンプリートできます。 インストール後、{% data variables.product.prodname_copilot %} を有効または無効にしたり、IDE または {% data variables.product.prodname_dotcom_the_website %} で詳細設定を構成したりできます。

## 前提条件

JetBrains IDE で {% data variables.product.prodname_copilot %} を構成するには、{% data variables.product.prodname_copilot %} プラグインをインストールする必要があります。 詳しくは、「[JetBrains IDE での {% data variables.product.prodname_copilot %} の概要](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide)」を参照してください。

## {% data variables.product.prodname_copilot %} のキーボード ショートカット

{% data variables.product.prodname_copilot %} を使う場合、JetBrains IDE のインライン候補には既定のキーボード ショートカットを使用できます。 また、特定のコマンドごとに、ショートカットを任意のキーボード ショートカットに再バインドすることもできます。 JetBrains IDE でキーボード ショートカットを再バインドする方法の詳細については、JetBrains のドキュメントを参照してください。 たとえば、[IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap) のドキュメントなどがあります。

{% mac %}

| アクション | ショートカット |
|:---|:---|
|インライン候補を受け入れる|<kbd>タブ</kbd>|
|インライン候補を無視する|<kbd>Esc</kbd>|
|次のインライン候補を表示する|<kbd>Option (⌥) または Alt</kbd>+<kbd>]</kbd>|
|前のインライン候補を表示する|<kbd>Option (⌥) または Alt</kbd>+<kbd>[</kbd>|
|インライン候補をトリガーする|<kbd>Option (⌥)</kbd>+<kbd>\</kbd>|
|{% data variables.product.prodname_copilot %} を開く (別のペインに追加の候補)|<kbd>Option (⌥) または Alt</kbd>+<kbd>Return</kbd> |

{% endmac %}

{% windows %}

| アクション | ショートカット |
|:---|:---|
|インライン候補を受け入れる|<kbd>タブ</kbd>|
|インライン候補を無視する|<kbd>Esc</kbd>|
|次のインライン候補を表示する|<kbd>Alt</kbd>+<kbd>]</kbd>|
|前のインライン候補を表示する|<kbd>Alt</kbd>+<kbd>[</kbd>|
|インライン候補をトリガーする|<kbd>Alt</kbd>+<kbd>\</kbd>|
|{% data variables.product.prodname_copilot %} を開く (別のペインに追加の候補)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

{% endwindows %}

{% linux %}

| アクション | ショートカット |
|:---|:---|
|インライン候補を受け入れる|<kbd>タブ</kbd>|
|インライン候補を無視する|<kbd>Esc</kbd>|
|次のインライン候補を表示する|<kbd>Alt</kbd>+<kbd>]</kbd>|
|前のインライン候補を表示する|<kbd>Alt</kbd>+<kbd>[</kbd>|
|インライン候補をトリガーする|<kbd>Alt</kbd>+<kbd>\</kbd>|
|{% data variables.product.prodname_copilot %} を開く (別のペインに追加の候補)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

{% endlinux %}

## {% data variables.product.prodname_copilot %} の有効化または無効化

JetBrains IDE 内で{% data variables.product.prodname_copilot %} を有効または無効にすることができます。 JetBrains ウィンドウの下部パネルにある {% data variables.product.prodname_copilot %} 状態アイコンは、{% data variables.product.prodname_copilot %} が有効であるか、または無効であるかを示します。 有効の場合、アイコンが強調表示されます。 無効の場合、アイコンは淡色表示されます。

1. {% data variables.product.prodname_copilot %} を有効または無効にするには、JetBrains ウィンドウの下部パネルにある状態アイコンをクリックします。
   ![JetBrains の状態アイコン](/assets/images/help/copilot/status-icon-jetbrains.png)
2. {% data variables.product.prodname_copilot %} を無効にする場合、グローバルに無効にするか、または現在編集しているファイルの言語に対して無効にするかを確認されます。 グローバルに無効にするには、 **[Disable Completions]\(入力候補を無効にする\)** をクリックします。 または、言語固有のボタンをクリックして、指定された言語の {% data variables.product.prodname_copilot %} を無効にします。
   ![{% data variables.product.prodname_copilot %} をグローバルに、または現在の言語に対して無効にする](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

## {% data variables.product.prodname_copilot %} の高度な構成を設定する

JetBrains IDE では、コードの入力候補の表示方法や、{% data variables.product.prodname_copilot %}で有効にする言語、無効にする言語など、{% data variables.product.prodname_copilot %} の詳細設定を管理できます。

1. JetBrains IDE で、 **[File]\(ファイル\)** メニューをクリックし、 **[Settings]\(設定\)** をクリックします。
1. **[Languages & Frameworks]\(言語とフレームワーク\)** で、 **[{% data variables.product.prodname_copilot %}]** をクリックします。
1. 自分の好みに合わせて設定を編集します。
   - コード候補の動作と外観、および更新を自動的に確認するかどうかを調整するには、対応するチェックボックスを選択または選択解除してください。
   - 自動更新を受信するように選んだ場合、安定版の更新プログラム (ただし頻度は低い) か、または夜間版の更新プログラム (安定性が低い場合がある) を受け取るかを選択できます。 **[Update channel]\(更新プログラム チャネル\)** ドロップダウンをクリックして、安定版の更新を受け取る場合は **[Stable]\(安定版\)** を、夜間版の更新を受け取る場合は **[Nightly]\(夜間版\)** を選びます。
   - [Disabled languages]\(無効になっている言語\) にあるチェックボックスで、{% data variables.product.prodname_copilot %} を無効にする言語の選択と解除を行います。

{% data reusables.copilot.dotcom-settings %}
