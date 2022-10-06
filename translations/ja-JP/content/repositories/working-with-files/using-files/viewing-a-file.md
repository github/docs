---
title: ファイルの表示
intro: 生ファイルの内容を表示するか、ファイルの行に対する変更を追跡し、時間の経過とともにファイルの各部分がどのように変化したかを確認できます。
redirect_from:
  - /articles/using-git-blame-to-trace-changes-in-a-file
  - /articles/tracing-changes-in-a-file
  - /articles/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/managing-files-on-github/tracking-changes-in-a-file
  - /repositories/working-with-files/using-files/tracking-changes-in-a-file
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View files and track file changes
ms.openlocfilehash: bc27fc67cfd18eb20f8c612b81f4d6dd5da20913
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '146680990'
---
## 生ファイルの内容を表示またはコピーする

生のビューを使用すると、スタイルを設定せずにファイルの生のコンテンツを表示またはコピーできます。

{% data reusables.repositories.navigate-to-repo %}
1. 表示するファイルをクリックします。
2. ファイル ビューの右上隅にある **[未加工]** をクリックします。
![ファイル ヘッダーの [未加工] ボタンのスクリーンショット](/assets/images/help/repository/raw-file-button.png)
3. 必要に応じて、生ファイルの内容をコピーするには、ファイル ビューの右上隅にある **{% octicon "copy" aria-label="The copy icon" %}** をクリックします。

## ファイルの行ごとのリビジョン履歴の表示

[変更履歴] ビューでは、{% octicon "versions" aria-label="The prior blame icon" %} をクリックすることで、ファイル全体の行ごとのリビジョン履歴やファイル内の 1 つの行のリビジョン履歴を表示することができます。 {% octicon "versions" aria-label="The prior blame icon" %} をクリックするたびに、変更をコミットした者と時間を含む、その行の過去のリビジョン情報が表示されます。

![Git blame ビュー](/assets/images/help/repository/git_blame.png)

ファイルや pull request では、{% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} メニューを使って、選択した行または行の範囲の Git blame を表示することもできます。

![選択した行の Git blame を表示するオプションのあるケバブメニュー](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

**ヒント:** コマンド ラインでは、`git blame` を使用してファイル内の行のリビジョン履歴を表示することもできます。 詳細については、[Git`git blame` のドキュメント](https://git-scm.com/docs/git-blame)を参照してください。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. クリックして、表示したい行の履歴のファイルを開きます。
3. ファイル ビューの右上隅で **[変更履歴]** をクリックして [変更履歴] ビューを開きます。
![[変更履歴]](/assets/images/help/repository/blame-button.png) ボタン
4. 特定の行の過去のリビジョンを表示、または変更履歴の変更を行うには、見てみたい変更が見つかるまで {% octicon "versions" aria-label="The prior blame icon" %} をクリックします。
![さらに前の状態に遡るボタン](/assets/images/help/repository/prior-blame-button.png)

{% ifversion blame-ignore-revs %}

## [変更履歴] ビューのコミットを無視する

リポジトリのルート ディレクトリ内に存在しなければならない、`.git-blame-ignore-revs` ファイルで指定されたリビジョンはすべて、Git `git blame --ignore-revs-file` の構成設定を使用して、[変更履歴] ビューに表示されなくなります。 詳細については、Git ドキュメントにある「[`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt)」を参照してください。

1. リポジトリのルート ディレクトリに `.git-blame-ignore-revs` という名前のフォルダーを作成します。
2. [変更履歴] ビューから除外するコミット ハッシュをそのファイルに追加します。 コメントを含め、次のようにファイルを構成することをお勧めします。

    ```ini
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

3. 変更をコミットしてプッシュします。

ここで、[変更履歴] ビューにアクセスしても、一覧表示されたリビジョンは変更履歴に含まれません。 **[.git-blame-ignore-revs でのリビジョンの無視]** バナーが表示され、一部のコミットが非表示になっている可能性があることが示されます。

![.git-blame-ignore-revs ファイルにリンクしている [変更履歴] ビューのバナーのスクリーンショット](/assets/images/help/repository/blame-ignore-revs-file.png)

これは、いくつかのコミットがコードに広範な変更を加える場合に役立ちます。 このファイルは、ローカルで `git blame` を実行する場合にも使用できます。

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

ローカル Git を構成して、そのファイルのリビジョンを常に無視することもできます。

```shell
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

{% endif %}
