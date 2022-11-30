---
title: プロジェクトボードの表示設定の変更
intro: 'Organization のオーナーまたはプロジェクトボードの管理者は、プロジェクトボードを{% ifversion ghae %}内部{% else %}パブリック{% endif %}またはプライベートにすることができます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/changing-project-board-visibility
  - /articles/changing-project-board-visibility
  - /github/managing-your-work-on-github/changing-project-board-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
shortTitle: 可視性の変更
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.project-board-visibility %}

{% tip %}

**参考:** プロジェクトボードを{% ifversion ghae %}内部{% else %}パブリックにすると{% endif %}、Organization のメンバーにはデフォルトで読み取りアクセスが付与されます。 特定の Organization メンバーに書き込み権限や管理者権限を与えるには、参加している Team にプロジェクトボードへのアクセス権限を与えるか、プロジェクトボードにコラボレータとして追加してください。 詳しい情報については、「[Organization のプロジェクトボードの権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% endtip %}

1. {% ifversion ghae %}インターナル{% else %}パブリック{% endif %}もしくはプライベートにしたいプロジェクトボードにアクセスしてください。
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.choose-visibility %}
1. [**Save**] をクリックします。
