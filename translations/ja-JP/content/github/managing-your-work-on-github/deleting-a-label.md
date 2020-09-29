---
title: ラベルの削除
intro: 書き込みアクセスのあるリポジトリでは、Issue やプルリクエストを分類するために必要のないラベルを削除できます。
redirect_from:
  - /articles/deleting-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

ラベルを削除すると、適用されていたあらゆる Issue やプルリクエストからラベルが消し去られます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.delete-label %}

### 参考リンク

- "[Issue およびプルリクエストにラベルを適用する](/articles/applying-labels-to-issues-and-pull-requests)"
- [Issue およびプルリクエストをラベルでフィルタリングする](/articles/filtering-issues-and-pull-requests-by-labels){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
- [Organization 内のリポジトリのためのデフォルトラベルを管理する](/articles/managing-default-labels-for-repositories-in-your-organization)
{% endif %}
