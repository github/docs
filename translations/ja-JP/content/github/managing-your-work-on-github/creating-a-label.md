---
title: ラベルの作成
intro: '書き込みアクセスを持つリポジトリでは、Issue とプルリクエストを整理するためのラベルを作成できます。'
redirect_from:
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests/
  - /articles/creating-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**ヒント:** Issue やプルリクエストの [Labels] ドロップダウンメニューにラベルを作成することもできます。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. 検索フィールドの右にある、[**New label**] をクリックします。
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### 参考リンク

- [ラベルについて](/articles/about-labels)
- "[Issue およびプルリクエストにラベルを適用する](/articles/applying-labels-to-issues-and-pull-requests)"
- "[ラベルの編集](/articles/editing-a-label)"
- "[Filtering issues and pull requests by labels](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
- [Organization 内のリポジトリのためのデフォルトラベルを管理する](/articles/managing-default-labels-for-repositories-in-your-organization)
{% endif %}
