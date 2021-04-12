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
  ![現在のブランチを切り替えるドロップダウンメニュー](/assets/images/help/desktop/select-branch-from-dropdown.png)
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

1 つのファイルに複数の変更があり、それらの変更の一部のみをコミットに含める場合は、部分的なコミットを作成できます。 追加変更やコミットできるように、他の変更はそのまま残ります。 これにより、改行の変更をコードや構文の変更から区別するなど、個別で有意義なコミットの作成が可能になります。

{% note %}

**注釈:** split diff 表示は現在ベータで、変更される可能性があります。

{% endnote %}

1. 変更の表示方法を選択するには、変更したファイルの右上隅で、{% octicon "gear" aria-label="The Gear icon" %} を使用して [**Unified**] または [**Split**] を選択します。 ![統合および split diff のギアアイコン](/assets/images/help/desktop/gear-diff-select.png)
2. 変更した行をコミットから除外するには、変更した行を複数クリックして、青色が消えるようにします。 青色で強調表示されている行は、コミットに含まれます。 ![ファイルで選択解除された行](/assets/images/help/desktop/partial-commit.png)

### 3. 変更の廃棄
保持する必要がない未コミットの変更がある場合は、変更を破棄できます。 これにより、コンピュータ上のファイルから変更が削除されます。 複数のファイル内の未コミットの変更をすべて破棄することも、追加した特定の行を破棄することもできます。

破棄した変更は、ゴミ箱内の日付つきのファイルに保存されます。 ゴミ箱を空にするまでは、破棄した変更を復元できます。

#### 複数のファイルの変更を破棄する

{% data reusables.desktop.select-discard-files %}
{% data reusables.desktop.click-discard-files %}
  ![コンテキストメニュー内の [Discard Changes] オプション](/assets/images/help/desktop/discard-changes-mac.png)
{% data reusables.desktop.confirm-discard-files %}
  ![確定ダイアログ内の [Discard Changes] ボタン](/assets/images/help/desktop/discard-changes-confirm-mac.png)

#### 複数の行の変更を破棄する
未コミットの変更した複数の行を破棄できます。

{% note %}

**注釈:** 行を追加および削除する変更グループでは、単一行の破棄は無効になっています。

{% endnote %}

追加した単一行を破棄するには、変更した行のリストで、破棄する行を右クリックし、[**Discard added line**] を選択します。

  ![確認ダイアログ内の [Discard single line]](/assets/images/help/desktop/discard-single-line.png)

変更した行のグループを破棄するには、破棄する行の行番号の右側にある垂直バーを右クリックして、[**Discard added lines**] を選択します。

  ![確認ダイアログ内の [Discard a group of added lines]](/assets/images/help/desktop/discard-multiple-lines.png)


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
