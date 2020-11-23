---
title: プロジェクトへの変更のコミットやレビュー
intro: '{% data variables.product.prodname_desktop %}では、ファイルを編集すると、全ての変更が追跡されます。 有意義なコミットを作成するために、変更のまとめ方を決めることができます。'
redirect_from:
  - /desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project
versions:
  free-pro-team: '*'
---

### コミットについて

{% data reusables.commits.about-commits %} コラボレーションしているコミットに共作者を追加することもできます。

{% data reusables.desktop.update-email-address %} 詳しい情報については、「[GitHub Desktop 用の Git を設定する](/desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop)」を参照してください。

### 1. ブランチの選択と変更の実行

1. [新しいブランチを作成](/desktop/guides/contributing-to-projects/managing-branches)するか、クリックして既存のブランチを選択します

{% octicon "git-branch" aria-label="The branch icon" %} ツールバーの**現在のブランチ**とリストからブランチを選択します。
  ![現在のブランチを切り替えるドロップダウンメニュー](/assets/images/help/desktop/click-branch-in-drop-down.png)
{% data reusables.desktop.make-changes %}

### 2. コミットに含める変更の選択方法

テキストエディタでファイルに変更を加えて保存していくと、変更は、{% data variables.product.prodname_desktop %}にも反映されます。

* 赤い{% octicon "diff-removed" aria-label="The diff removed icon color-red" %}アイコンは、削除されたファイルを表します。
* 黄色の{% octicon "diff-modified" aria-label="The diff modified icon color-yellow" %}アイコンは変更されたファイルを表します。
* 緑の{% octicon "diff-added" aria-label="The diff added icon color-green" %}アイコンは、追加されたファイルを表します。
* stash した変更にアクセスするには、[**Stashed Changes**] をクリックします。 ![[Stash changes] オプション](/assets/images/help/desktop/stashed-changes.png)
* {% data reusables.desktop.commit-all-desc %}
![チェックボックスを選択して、変更されたすべてのファイルをコミットします](/assets/images/help/desktop/commit-all.png)
* {% data reusables.desktop.commit-some-desc %}
![コミットするファイルの横のチェックボックスを選択します](/assets/images/help/desktop/commit-some.png)

#### 部分的なコミットの作成方法

If one file contains multiple changes, but you only want some of those changes to be included in a commit, you can create a partial commit. 追加変更やコミットできるように、他の変更はそのまま残ります。 これにより、改行の変更をコードや構文の変更から区別するなど、個別で有意義なコミットの作成が可能になります。

{% note %}

**Note:** Split diff displays are currently in beta and subject to change.

{% endnote %}

1. To choose how your changes are displayed, in the top-right corner of the changed file, use {% octicon "gear" aria-label="The Gear icon" %} to select **Unified** or **Split**. ![Gear icon with unified and split diffs](/assets/images/help/desktop/gear-diff-select.png)
2. To exclude changed lines from your commit, click one or more changed lines so the blue disappears. The lines that are still highlighted in blue will be included in the commit. ![ファイルで選択解除された行](/assets/images/help/desktop/partial-commit.png)

### 3. 変更の廃棄
If you have uncommitted changes that you don't want to keep, you can discard the changes. This will remove the changes from the files on your computer. You can discard all uncommitted changes in one or more files, or you can discard specific lines you added.

Discarded changes are saved in a dated file in the Trash. You can recover discarded changes until the Trash is emptied.

#### Discarding changes in one or more files

{% data reusables.desktop.select-discard-files %}
{% data reusables.desktop.click-discard-files %}
  ![コンテキストメニュー内の [Discard Changes] オプション](/assets/images/help/desktop/discard-changes-mac.png)
{% data reusables.desktop.confirm-discard-files %}
  ![確定ダイアログ内の [Discard Changes] ボタン](/assets/images/help/desktop/discard-changes-confirm-mac.png)

#### Discarding changes in one or more lines
You can discard one or more changed lines that are uncommitted.

{% note %}

**Note:** Discarding single lines is disabled in a group of changes that adds and removes lines.

{% endnote %}

To discard one added line, in the list of changed lines, right click on the line you want to discard and select **Discard added line**.

  ![Discard single line in the confirmation dialog](/assets/images/help/desktop/discard-single-line.png)

To discard a group of changed lines, right click the vertical bar to the right of the line numbers for the lines you want to discard, then select **Discard added lines**.

  ![Discard a group of added lines in the confirmation dialog](/assets/images/help/desktop/discard-multiple-lines.png)


### 4. コミットメッセージの入力と変更のプッシュ

コミットに含めたい変更を決めたら、コミットメッセージを入力して変更をプッシュします。 コミットで共同作業した場合、コミットに 1 人以上の作者を追加できます。

{% note %}

**注釈**: {% data reusables.desktop.tags-push-with-commits %} 詳しい情報については、「[タグを管理する](/desktop/contributing-to-projects/managing-tags)」を参照してください。

{% endnote %}

{% data reusables.desktop.commit-message %}
  ![Commit messageフィールド](/assets/images/help/desktop/commit-message.png)
2. オプションとして、コミットに別の作者を追加するには、共作者を追加するアイコンをクリックし、追加するユーザ名を入力します。 ![コミットメッセージに共作者を追加](/assets/images/help/desktop/add-co-author-commit.png)
{% data reusables.desktop.commit-button %}
  ![[Commit] ボタン](/assets/images/help/desktop/commit-button.png)
4. コミットしようとしているブランチが保護されている場合、Desktopは警告します。
    - 変更を移動するには、**switch branches（ブランチを切り替え）**をクリックしてください。
    - 保護されたブランチに変更をコミットするには、**Commit to _BRANCH_（ブランチにコミット）**をクリックしてください。

  保護されたブランチに関する詳しい情報については「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches)」を参照してください。 ![保護されたブランチの警告](/assets/images/help/desktop/protected-branch-warning.png)
{% data reusables.desktop.push-origin %}
