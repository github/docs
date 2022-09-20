---
title: プロジェクトへの変更のコミットやレビュー
intro: '{% data variables.product.prodname_desktop %}では、ファイルを編集すると、全ての変更が追跡されます。 有意義なコミットを作成するために、変更のまとめ方を決めることができます。'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
  - /desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project
versions:
  fpt: '*'
shortTitle: Commit & review changes
ms.openlocfilehash: ecc12722a7d0eebeedc13878972d138ca894db5a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145117557'
---
## コミットについて

{% data reusables.commits.about-commits %} コラボレーションしているコミットに共作者を追加することもできます。

{% data reusables.desktop.update-email-address %} 詳細については、「[GitHub Desktop 用の Git の設定方法](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop)」を参照してください。

## ブランチの選択と変更の実行

1. [新しいブランチを作成する](/desktop/guides/contributing-to-projects/managing-branches)か、ツール バーの {% octicon "git-branch" aria-label="The branch icon" %} **[Current Branch]\(現在のブランチ\)** をクリックして一覧からブランチを選択し、既存のブランチを選択します。

  ![現在のブランチを切り替えるドロップダウン メニュー](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.make-changes %}

## 差分を表示する方法の選択

レビューのニーズに合わせて、{% data variables.product.prodname_desktop %} に差分を表示する方法を変更できます。

差分の表示方法を変更するには、差分ビューの右上隅にある {% octicon "gear" aria-label="The Gear icon" %} をクリックします。
- 差分全体の表示方法を変更するには、[Diff display]\(差分の表示\) で **[Unified]\(統合\)** または **[Split]\(分割\)** を選択します。 統合ビューでは変更が直線的に表示され、分割ビューでは左側に古い内容が表示されて、右側に新しい内容が表示されます。
- 空白の変更を非表示にして、より実質的な変更に集中できるようにするには、 **[Hide Whitespace Changes]\(空白の変更を非表示にする\)** を選択します。

![差分オプションのメニュー](/assets/images/help/desktop/diff-selection.png)

既定で {% data variables.product.prodname_desktop %} に表示されるものより多くのファイルを表示する必要がある場合は、差分を展開できます。
- 強調表示された変更の上または下の数行を表示するには、行番号の上または下にある矢印をクリックします。
- ファイル全体を表示するには、差分ビューで右クリックし、 **[Expand Whole File]\(ファイル全体を展開\)** をクリックします。

![差分ビューを展開する](/assets/images/help/desktop/expand-diff-view.png)

## コミットに含める変更の選択方法

テキストエディタでファイルに変更を加えて保存していくと、変更は、{% data variables.product.prodname_desktop %}にも反映されます。

* 赤い {% octicon "diff-removed" aria-label="The diff removed icon color-red" %} アイコンは、削除されたファイルを示します。
* 黄色の {% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %} アイコンは、変更されたファイルを示します。
* 緑の {% octicon "diff-added" aria-label="The diff added icon color-green" %} アイコンは、追加されたファイルを示します。
* 一時退避された変更にアクセスするには、 **[Stashed Changes]\(一時退避された変更\)** をクリックします。

  ![[Stash changes] オプション](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}

  ![チェックボックスを選択して、変更されたすべてのファイルをコミットします](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}

  ![コミットするファイルの横のチェックボックスを選択します](/assets/images/help/desktop/commit-some.png)

### 部分的なコミットの作成方法

1 つのファイルに複数の変更があり、それらの変更の一部のみをコミットに含める場合は、部分的なコミットを作成できます。 追加変更やコミットできるように、他の変更はそのまま残ります。 これにより、改行の変更をコードや構文の変更から区別するなど、個別で有意義なコミットの作成が可能になります。

変更した行をコミットから除外するには、変更した行を複数クリックして、青色が消えるようにします。 青色で強調表示されている行は、コミットに含まれます。

  ![ファイルで選択解除された行](/assets/images/help/desktop/partial-commit.png)

## 変更の廃棄
保持する必要がない未コミットの変更がある場合は、変更を破棄できます。 これにより、コンピュータ上のファイルから変更が削除されます。 複数のファイル内の未コミットの変更をすべて破棄することも、追加した特定の行を破棄することもできます。

破棄した変更は、ゴミ箱内の日付つきのファイルに保存されます。 ゴミ箱を空にするまでは、破棄した変更を復元できます。

### 複数のファイルの変更を破棄する

{% data reusables.desktop.select-discard-files %} {% data reusables.desktop.click-discard-files %}

  ![コンテキスト メニューの [Discard Changes]\(変更の破棄\) オプション](/assets/images/help/desktop/discard-changes-mac.png) {% data reusables.desktop.confirm-discard-files %}

  ![確定ダイアログ内の [Discard Changes] ボタン](/assets/images/help/desktop/discard-changes-confirm-mac.png)

### 複数の行の変更を破棄する
未コミットの変更した複数の行を破棄できます。

{% note %}

**注:** 複数の行を追加および削除する変更グループでは、単一行の破棄は無効になっています。

{% endnote %}

追加した単一行を破棄するには、変更した行のリストで、破棄する行を右クリックして、 **[Discard added line]\(追加した 1 行の破棄\)** を選択します。

  ![確認ダイアログ内の [Discard single line]](/assets/images/help/desktop/discard-single-line.png)

変更した行のグループを破棄するには、破棄する行の行番号の右側にある垂直のバーを右クリックして、 **[Discard added lines]\(追加した複数行の破棄\)** を選択します。

  ![確認ダイアログ内の [Discard a group of added lines]](/assets/images/help/desktop/discard-multiple-lines.png)


## コミットメッセージの入力と変更のプッシュ

コミットに含めたい変更を決めたら、コミットメッセージを入力して変更をプッシュします。 コミットで共同作業した場合、コミットに 1 人以上の作者を追加できます。

{% note %}

**注**: {% data reusables.desktop.tags-push-with-commits %}詳細については、「[タグを管理する](/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/managing-tags)」を参照してください。

{% endnote %}

{% data reusables.desktop.commit-message %}

  ![Commit messageフィールド](/assets/images/help/desktop/commit-message.png)
1. オプションとして、コミットに別の作者を追加するには、共作者を追加するアイコンをクリックし、追加するユーザ名を入力します。

  ![コミット メッセージに共同作成者を追加する](/assets/images/help/desktop/add-co-author-commit.png) {% data reusables.desktop.commit-button %}

  ![[コミット] ボタン](/assets/images/help/desktop/commit-button.png)
4. コミットしようとしているブランチが保護されている場合、Desktopは警告します。
    - 変更を移動するには、 **[switch branches]\(ブランチの切り替え\)** をクリックします。
    - 保護されたブランチに変更をコミットするには、 **[Commit to _BRANCH_]\(<ブランチ名> にコミット\)** をクリックします。

  保護されたブランチの詳細については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches)」を参照してください。

  ![保護されたブランチの警告](/assets/images/help/desktop/protected-branch-warning.png) {% data reusables.desktop.push-origin %}

6. 操作しているブランチに基づいた pull request がある場合は、{% data variables.product.prodname_desktop %} には、その pull request に対して実行されたチェックのステータスが表示されます。 詳しくは、[GitHub Desktop でのチェックの表示と再実行](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop)に関するページをご覧ください。

 ![ブランチ名の横のチェック表示](/assets/images/help/desktop/checks-dialog.png)

 現在のブランチに対して pull request が作成されていない場合は、作成するオプションが {% data variables.product.prodname_desktop %} から提供されます。 詳細については、「[issue もしくは pull request の作成](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request)」を参照してください。

 ![pull request の作成](/assets/images/help/desktop/mac-create-pull-request.png)
