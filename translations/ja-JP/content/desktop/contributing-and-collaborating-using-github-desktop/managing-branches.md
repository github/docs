---
title: ブランチを管理する
intro: リポジトリのデフォルトブランチからブランチを作成して、変更を安全に試すことができます。
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
  - /desktop/contributing-to-projects/managing-branches
versions:
  free-pro-team: '*'
---

### ブランチの管理について
ブランチを使用して、プロジェクトの変更を安全に試すことができます。 ブランチは、開発作業をリポジトリ内の他のブランチから分離します。 たとえば、ブランチを使用して新しい機能を開発したり、バグを修正したりすることができます。

ブランチは常に既存のものから作成します。 通常、リポジトリのデフォルトブランチからブランチを作成します。 その後、他の人がリポジトリに加えた変更とは別に、新しいブランチで作業できます。

作業が完了したら、プルリクエストを作成して、現在のブランチの変更を別のブランチにマージできます。 詳しい情報については、「[Issue またはプルリクエストを作成する](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)」および「[プルリクエストについて](/articles/about-pull-requests)」を参照してください。

リポジトリへの読み取りアクセスがある場合は、常に {% data variables.product.prodname_desktop %} でブランチを作成できますが、リポジトリへの書き込みアクセスがある場合のみ、ブランチを {% data variables.product.prodname_dotcom %} にプッシュできます。

{% data reusables.desktop.protected-branches %}

### ブランチの作成

{% tip %}

**参考:** 最初に作成する新しいブランチは、デフォルトのブランチに基づいています。 複数のブランチがある場合、現在チェックアウトされているブランチまたはデフォルトのブランチに基づいて、新しいブランチを選択できます。

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![現在のブランチを切り替えるドロップダウンメニュー](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
{% data reusables.desktop.create-new-branch %}
  ![ブランチメニュー内の [New Branch] オプション](/assets/images/help/desktop/new-branch-button-mac.png)
{% data reusables.desktop.name-branch %}
  ![新しいブランチの名前を作成するフィールド](/assets/images/help/desktop/create-branch-name-mac.png)
{% data reusables.desktop.select-base-branch %}
  ![ベースブランチのオプション](/assets/images/help/desktop/create-branch-choose-branch-mac.png)
{% data reusables.desktop.confirm-new-branch-button %}
  ![Create Branchボタン](/assets/images/help/desktop/create-branch-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![現在のブランチを切り替えるドロップダウンメニュー](/assets/images/help/desktop/click-branch-in-drop-down-win.png)
{% data reusables.desktop.create-new-branch %}
  ![ブランチメニュー内の [New Branch] オプション](/assets/images/help/desktop/new-branch-button-win.png)
{% data reusables.desktop.name-branch %}
  ![新しいブランチの名前を作成するフィールド](/assets/images/help/desktop/create-branch-name-win.png)
{% data reusables.desktop.select-base-branch %}
  ![ベースブランチのオプション](/assets/images/help/desktop/create-branch-choose-branch-win.png)
{% data reusables.desktop.confirm-new-branch-button %}
  ![Create branchボタン](/assets/images/help/desktop/create-branch-button-win.png)

{% endwindows %}

### ブランチを公開する

{% data variables.product.product_name %} にブランチを作成する場合は、ブランチを公開して、{% data variables.product.prodname_dotcom %} でのコラボレーションに使用できるようにする必要があります。

1. アプリの上部で、{% octicon "git-branch" aria-label="The branch icon" %} [**Current Branch**] をクリックし、公開するブランチをクリックします。 ![公開するブランチを選択するドロップダウンメニュー](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
2. [**Publish branch**] をクリックします。 ![[Publish branch] ボタン](/assets/images/help/desktop/publish-branch-button.png)

### ブランチ間の切り替え
リポジトリのどんなブランチに対しても、コミットを表示したり、コミットを行ったりすることができます。 まだコミットしていない、保存した変更がある場合は、その変更の扱いについて、ブランチを切り替える前に決める必要があります。 現在のブランチに変更をコミットする、現在のブランチに変更を stash する、または変更を新しいブランチに移動することが可能です。 変更を現在のブランチにコミットしたい場合は、ブランチを切り替える前に、「[プロジェクトへの変更をコミットまたはレビューする](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)」の手順に従ってください。

{% tip %}

**Tip**: **Advanced（高度）**な設定で、ブランチの切り替え時のデフォルトの動作を設定できます。 詳しい情報については、「[基本的な設定](/desktop/getting-started-with-github-desktop/configuring-basic-settings)」を参照してください。

{% endtip %}

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![リポジトリ内ブランチのリスト](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. 保存していて、まだコミットしていない変更がある場合は、[**Leave my changes**] または [**Bring my changes**] を選択してから、[**Switch Branch**] をクリックしてください。 ![[Switch branch] と変更オプション](/assets/images/help/desktop/stash-changes-options.png)

### stash した変更を取得する
他のブランチで stash した変更にアクセスするには、変更を stash したブランチに切り替えます。

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![リポジトリ内ブランチのリスト](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. 左サイドバーで [**Stashed Changes**] をクリックします。 ![[Stash changes] オプション](/assets/images/help/desktop/stashed-changes.png)
4. stash した変更を削除するには、[**Discard**] をクリックします。stash した変更を利用するには、[**Restore**] をクリックします。 ![stash した変更の [Discard] または [Restore]](/assets/images/help/desktop/discard-restore-stash-buttons.png)

### ブランチの削除

現時点でブランチがオープンなプルリクエストに関連付けられている場合は、ブランチを削除できません。 ブランチの削除を取り消すことはできません。

{% mac %}

{% data reusables.desktop.select-branch-to-delete %}
  ![削除するブランチを選択するドロップダウンメニュー](/assets/images/help/desktop/select-branch-to-delete.png)
{% data reusables.desktop.delete-branch-mac %}
  ![ブランチメニュー内の [Delete...] オプション](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %}
  ![削除するブランチを選択するドロップダウンメニュー](/assets/images/help/desktop/select-branch-to-delete.png)
{% data reusables.desktop.delete-branch-win %}
  ![ブランチメニュー内の [Delete...] オプション](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

### 参考リンク

- 「[{% data variables.product.prodname_desktop %}からのリポジトリのクローン方法](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)」
- {% data variables.product.prodname_dotcom %} 用語集中の[ブランチ](/articles/github-glossary/#branch)
- [ブランチについて](/articles/about-branches)
- Gitのドキュメンテーション中の[ブランチの要約](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
