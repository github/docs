---
title: プロジェクトボードの表示設定の変更
intro: 'Organization のオーナーまたはプロジェクトボードの管理者は、プロジェクトボードを{% if currentVersion == "github-ae@latest" %}内部{% else %}パブリック{% endif %}またはプライベートにすることができます。'
redirect_from:
  - /articles/changing-project-board-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% data reusables.project-management.project-board-visibility %}

{% tip %}

**参考:** プロジェクトボードを{% if currentVersion == "github-ae@latest" %}内部{% else %}パブリックにすると{% endif %}、Organization のメンバーにはデフォルトで読み取りアクセスが付与されます。 特定の Organization メンバーに書き込み権限や管理者権限を与えるには、参加している Team にプロジェクトボードへのアクセス権限を与えるか、プロジェクトボードにコラボレータとして追加してください。 詳しい情報については、「[Organization のプロジェクトボードの権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% endtip %}

1. {% if currentVersion == "github-ae@latest" %}

{% else %}パブリック{% endif %}またはプライベートにするプロジェクトボードに移動します。
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.choose-visibility %}
1. [**Save**] をクリックします。
