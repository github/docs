---
title: ラベルの編集
intro: '書き込みアクセスがあるリポジトリでは、既存のラベルの名前、色、および説明を編集できます。'
redirect_from:
  - /articles/editing-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

### 参考リンク

- [ラベルについて](/articles/about-labels)
- "[ラベルの作成](/articles/creating-a-label)"
- "[ラベルの削除](/articles/deleting-a-label)"
- "[Issue およびプルリクエストにラベルを適用する](/articles/applying-labels-to-issues-and-pull-requests)"
- [Issue およびプルリクエストをラベルでフィルタリングする](/articles/filtering-issues-and-pull-requests-by-labels){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
- [Organization 内のリポジトリのためのデフォルトラベルを管理する](/articles/managing-default-labels-for-repositories-in-your-organization)
{% endif %}
