---
title: コードから Issue を開く
intro: コードの特定の行または複数の行から、ファイルまたはプルリクエストで Issue を開くことができます。
permissions: 読み取り権限を持つユーザは、Issue が有効なときリポジトリに Issue を作成できます。
redirect_from:
  - /articles/opening-an-issue-from-code
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

コードから Issue を開くと、Issue には選択した行またはコードの範囲を示すスニペットが含まれています。 Issue を開くことができるのは、コードを保存したのと同じリポジトリでだけです。

![コードから開いた Issue で表示されるコードスニペット](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.administrators-can-disable-issues %}

{% data reusables.repositories.navigate-to-repo %}
2. Issue で参照したいコードを探します。
    - ファイルのコードに関する Issue を開くには、そのファイルに移動します。
    - プルリクエストのコードに関する Issue を開くには、そのプルリクエストに移動し、{% octicon "diff" aria-label="The file diff icon" %}[**Files changed**] をクリックします。 次に、コメントに含めたいコードを持っているファイルを探し、[**View**] をクリックします。
{% data reusables.repositories.choose-line-or-range %}
4. コード範囲の左で、
{% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. ドロップダウンメニューで、[**Reference in new issue**] をクリックします。
  ![選択した行から新しいIssueを開くオプションのある三点メニュー](/assets/images/help/repository/open-new-issue-specific-line.png)
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}

### 参考リンク

- "[Issue の作成](/github/managing-your-work-on-github/creating-an-issue)"
- "[ファイルへのパーマリンクを取得する](/github/managing-files-in-a-repository/getting-permanent-links-to-files)"
- [コードスニペットへのパーマリンクを作成する](/github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet)
