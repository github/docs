---
title: プロジェクトボードの表示設定の変更
intro: 'As an organization owner or project board admin, you can make a project board {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} or private.'
redirect_from:
  - /articles/changing-project-board-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.project-management.project-board-visibility %}

{% tip %}

**Tip:** When you make your project board {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %}, organization members are given read access by default. 特定の Organization メンバーに書き込み権限や管理者権限を与えるには、参加している Team にプロジェクトボードへのアクセス権限を与えるか、プロジェクトボードにコラボレータとして追加してください。 詳しい情報については、「[Organization のプロジェクトボードの権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% endtip %}

1. Navigate to the project board you want to make

{% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} or private.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.choose-visibility %}
1. [**Save**] をクリックします。
