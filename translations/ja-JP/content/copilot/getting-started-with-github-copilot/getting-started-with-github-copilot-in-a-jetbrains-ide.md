---
title: JetBrains IDE で GitHub Copilot の使用を開始する
shortTitle: JetBrains IDE
intro: '{% data variables.product.prodname_copilot %} を JetBrains IDE にインストールし、コメントやコードを記述するときに候補が表示されるようにする方法について説明します。'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: f5b90fb18645b69f86e9e45e08ba47e534678ae4
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192784'
---
{% data reusables.copilot.copilot-cta-button %}

## {% data variables.product.prodname_copilot %} と JetBrains IDE について

{% data reusables.copilot.procedural-intro %}

JetBrains IDE を使用すると、{% data variables.product.prodname_copilot %} からの候補をエディター内で直接表示し、取り入れることができます。 このガイドでは、macOS、Windows、or Linux 用の JetBrains IDE 内で {% data variables.product.prodname_copilot %} を使用する方法を示します。

## 前提条件

{% data reusables.copilot.subscription-prerequisite %}

{% data reusables.copilot.jetbrains-ides %}

## JetBrains IDE での {% data variables.product.prodname_copilot %} 拡張機能のインストール

JetBrains IDE で {% data variables.product.prodname_copilot %} を使用するには、{% data variables.product.prodname_copilot %} 拡張機能をインストールする必要があります。 次の手順では、{% data variables.product.prodname_copilot %} プラグインを IntelliJ IDEA にインストールする手順について説明します。 サポートされている別の IDE にインストールする場合、手順が異なる可能性があります。

1. JetBrains IDE の **[ファイル]** メニュー (Windows の場合) または IDE for Mac の名前 (たとえば、**PyCharm**、**IntelliJ** など) で、 **[設定]** (Windows の場合) または **[環境設定]** (Mac の場合) をクリックします。
2. **[設定] または [環境設定]** ダイアログ ボックスの左側のメニューで、 **[プラグイン]** をクリックします。
3. **[設定] または [環境設定]** ダイアログ ボックスの上部にある **[Marketplace]** をクリックします。 検索バーで、「 **{% data variables.product.prodname_copilot %}** 」を検索し、 **[インストール]** をクリックします。
   ![Marketplace の検索のスクリーンショット](/assets/images/help/copilot/jetbrains-marketplace.png)
1. {% data variables.product.prodname_copilot %} がインストールされたら、 **[IDE を再起動する]** をクリックします。
1. JetBrains IDE が再起動したら、 **[ツール]** メニューをクリックします。 **[{% data variables.product.prodname_copilot %}]** 、 **[{% data variables.product.prodname_dotcom %} にログイン]** の順にクリックします。 
    ![JetBrains の [ツール] メニューのスクリーンショット](/assets/images/help/copilot/jetbrains-tools-menu.png)
1. デバイス コードをコピーしてデバイスの有効化ウィンドウを開くには、[{% data variables.product.prodname_dotcom %} にサインイン] ダイアログ ボックスで、 **[コピーして開く]** をクリックします。
    ![デバイス コードの [コピーして開く] のスクリーンショット](/assets/images/help/copilot/device-code-copy-and-open.png)
1. ブラウザーでデバイスの有効化ウィンドウが開きます。 デバイス コードを貼り付け、 **[続行]** をクリックします。

   - Windows または Linux でコードを貼り付けるには、<kbd>Ctrl</kbd> + <kbd>v</kbd> キーを押します。
   - macOS でコードを貼り付けるには、<kbd>command</kbd> + <kbd>v</kbd> キーを押します。
1. {% data variables.product.prodname_dotcom %} から、{% data variables.product.prodname_copilot %} に必要なアクセス許可が要求されます。 これらのアクセス許可を承認するには、 **[{% data variables.product.prodname_copilot %} プラグインの承認]** をクリックします。
1. アクセス許可が承認されたら、JetBrains IDE によって確認が表示されます。 {% data variables.product.prodname_copilot %} の使用を開始するには、 **[OK]** をクリックします。
   ![JetBrains IDE によるアクセス許可の確認のスクリーンショット](/assets/images/help/copilot/jetbrains-ide-confirmation.png)
   

## 最初の候補を表示する

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} 次のサンプルは Java で記述されていますが、他の言語も同様に動作します。

{% data reusables.copilot.create-java-file %}
1. Java ファイルで、「`class Test`」と入力してクラスを作成します。
   {% data variables.product.prodname_copilot %} によって、次に示すように、クラス本文の候補が灰色のテキストで自動的に表示されます。 実際に表示される候補はこのとおりではない場合があります。
   ![Java クラス本文の候補のスクリーンショット](/assets/images/help/copilot/java-class-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %}
1. 関数本文の候補を表示するように {% data variables.product.prodname_copilot %} に要求するには、`main` 関数の角かっこの下に次の行を入力します。 実際に表示される候補はこのとおりではない場合があります。
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}

   ![Java 関数本文の候補のスクリーンショット](/assets/images/help/copilot/java-function-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %}

{% data variables.product.prodname_copilot %} は、コードのコンテキストとスタイルの一致を試みます。 提案されたコードはいつでも編集できます。

## 代替候補の表示

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-java-file %}
1. 候補を表示するように {% data variables.product.prodname_copilot %} に要求するには、Java ファイルに次の行を入力します。
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %} {% data reusables.copilot.see-alternative-suggestions %}

   | OS | 次の候補を表示 | 前の候補を表示 |
   | :- | :- | :- |
   | macOS | <kbd>Option</kbd>+<kbd>]</kbd> | <kbd>Option</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
   | Linux | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
{% data reusables.copilot.accept-or-reject-suggestion %}

## 新しいタブに複数の候補を表示する

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-java-file %}
1. 候補を表示するように {% data variables.product.prodname_copilot %} に要求するには、Java ファイルに次の行を入力します。
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
1. 複数の追加候補を表示した新しいタブが開きます。
    - macOS では、<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd>キーを押して **[GitHub Copilot を開く]** をクリックするか、<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> キーを押して新しいタブをすぐに開きます。
    - Windows または Linux では、<kbd>Ctrl</kbd>+<kbd>Enter</kbd> キーを押して、 **[GitHub Copilot を開く]** をクリックします。
  ![Copilot を開くためのダイアログのスクリーンショット](/assets/images/help/copilot/open-copilot-tab-jetbrains.png)
1. 候補を受け入れるには、候補の上にある **[ソリューションの受入]** をクリックします。 すべての候補を拒否するには、タブを閉じます。

## コメントからコード候補を生成する

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-java-file %}
1. Java ファイル内の関数の実装を提案するように {% data variables.product.prodname_copilot %} に要求するには、次の行を入力します。
    ```java{:copy}
    // find all images without alternate text
    // and give them a red border
    void process () {
    ```
  ![Java 関数本文の候補のスクリーンショット](/assets/images/help/copilot/comment-suggestion-jetbrains.png)

## {% data variables.product.prodname_copilot %} の有効化と無効化

すべての言語、または個々の言語の {% data variables.product.prodname_copilot %} を有効または無効にすることができます。 JetBrains IDE ウィンドウの下部パネルにある {% data variables.product.prodname_copilot %} 状態アイコンは、{% data variables.product.prodname_copilot %} が有効であるか、または無効であるかを示します。 有効の場合、アイコンが強調表示されます。 無効の場合、アイコンは淡色表示されます。

1. {% data variables.product.prodname_copilot %} を有効または無効にするには、JetBrains ウィンドウの下部パネルにある状態アイコンをクリックします。
   ![IntelliJ IDEA の状態アイコンのスクリーンショット](/assets/images/help/copilot/status-icon-jetbrains.png)
2. {% data variables.product.prodname_copilot %} を無効にする場合、グローバルに無効にするか、または現在編集しているファイルの言語に対して無効にするかを確認されます。

   - {% data variables.product.prodname_copilot %} からの候補をグローバルに無効にするには、 **[入力候補を無効にする]** をクリックします。
   - 指定した言語に対して {% data variables.product.prodname_copilot %} からの候補を無効にするには、 **["_言語_" の入力候補を無効にする]** をクリックします。
   ![{% data variables.product.prodname_copilot %} をグローバルに、または現在の言語に対して無効にするためのオプションのスクリーンショット](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)


## 参考資料

- [{% data variables.product.prodname_copilot %} Web サイト](https://copilot.github.com/)
- [{% data variables.product.prodname_copilot %} について](/copilot/overview-of-github-copilot/about-github-copilot#about-the-license-for-the-github-copilot-plugin-in-jetbrains-ides)
