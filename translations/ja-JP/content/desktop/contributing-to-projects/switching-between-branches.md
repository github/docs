---
title: ブランチ間の切り替え
intro: リポジトリのどんなブランチに対しても、コミットを表示したり、コミットを行ったりすることができます。
versions:
  free-pro-team: '*'
---

### ブランチ間の切り替え
まだコミットしていない、保存した変更がある場合は、その変更の扱いについて、ブランチを切り替える前に決める必要があります。 現在のブランチに変更をコミットする、現在のブランチに変更を stash する、または変更を新しいブランチに移動することが可能です。 変更を現在のブランチにコミットしたい場合は、ブランチを切り替える前に、「[プロジェクトへの変更をコミットまたはレビューする](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)」の手順に従ってください。

{% tip %}

**Tip**: **Advanced（高度）**な設定で、ブランチの切り替え時のデフォルトの動作を設定できます。 詳しい情報については「[基本的な設定](/desktop/getting-started-with-github-desktop/configuring-basic-settings)」を参照してください。

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
