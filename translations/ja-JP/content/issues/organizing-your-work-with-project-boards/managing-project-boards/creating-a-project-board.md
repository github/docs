---
title: '{% data variables.product.prodname_project_v1 %} の作成'
intro: '{% data variables.projects.projects_v1_boards_caps %} は、特定機能の作業の追跡と優先度付け、総合的なロードマップ、さらにはリリース チェックリストなど、ニーズを満たすカスタマイズ ワークフローを作成するために使用できます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/creating-a-project-board
  - /articles/creating-a-project
  - /articles/creating-a-project-board
  - /github/managing-your-work-on-github/creating-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Issues
  - Projects
  - Project management
type: how_to
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e4f47a007c18b07142040a0a18ad7f45b73d5273
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109793'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %} 詳しい情報については、「[{% data variables.product.prodname_project_v1 %} へのリポジトリのリンク](/articles/linking-a-repository-to-a-project-board)」を参照してください。

{% data variables.projects.projects_v1_board %} を作成したら、issue、pull request、ノートを追加できます。 詳しい情報については、「[{% data variables.product.prodname_project_v1 %} への issue と pull request の追加](/articles/adding-issues-and-pull-requests-to-a-project-board)」および「[{% data variables.product.prodname_project_v1 %} へのノートの追加](/articles/adding-notes-to-a-project-board)」を参照してください。

{% data variables.projects.projects_v1_board %} を issue や pull request の状態と常に同期させるようにワークフローの自動化を構成することもできます。 詳しい情報については、「[{% data variables.product.prodname_projects_v1 %} の自動化について](/articles/about-automation-for-project-boards)」を参照してください。

{% data reusables.project-management.project-board-import-with-api %}

## ユーザー所有の {% data variables.projects.projects_v1_board %} の作成

{% data reusables.projects.classic-project-creation %}

{% data reusables.profile.access_profile %}
2. プロファイル ページの上部のメイン ナビゲーションにある {% octicon "project" aria-label="The project board icon" %} **[プロジェクト]** をクリックします。
![[プロジェクト] タブ](/assets/images/help/projects/user-projects-tab.png){% ifversion projects-v2 %}
1. **[Project (classic)]** をクリックします{% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## Organization 全体の {% data variables.projects.projects_v1_board %} の作成

{% data reusables.projects.classic-project-creation %}

{% ifversion classic-project-visibility-permissions %} {% note %}

**注:** {% data reusables.projects.owners-can-limit-visibility-permissions %}

{% endnote %} {% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. **[Project (classic)]** をクリックします{% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.choose-visibility %} {% data reusables.project-management.linked-repositories %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## リポジトリの {% data variables.projects.projects_v1_board %} の作成

{% data reusables.projects.classic-project-creation %}

{% data reusables.repositories.navigate-to-repo %}
2. リポジトリ名の下にある {% octicon "project" aria-label="The project board icon" %} **[プロジェクト]** をクリックします。
![[プロジェクト] タブ](/assets/images/help/projects/repo-tabs-projects.png){% ifversion projects-v2 %}
1. **[Project (classic)]** をクリックします{% endif %} {% data reusables.project-management.click-new-project %} {% data reusables.project-management.create-project-name-description %} {% data reusables.project-management.choose-template %} {% data reusables.project-management.create-project-button %} {% data reusables.project-management.add-column-new-project %} {% data reusables.project-management.name-project-board-column %} {% data reusables.project-management.select-column-preset %} {% data reusables.project-management.select-automation-options-new-column %} {% data reusables.project-management.click-create-column %} {% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

## 参考資料

- 「[プロジェクトボードについて](/articles/about-project-boards)」
- 「[プロジェクトボードの編集](/articles/editing-a-project-board)」{% ifversion fpt or ghec %}
- 「[プロジェクトボードをコピーする](/articles/copying-a-project-board)」{% endif %}
- 「[プロジェクト ボードを閉じる](/articles/closing-a-project-board)」
- 「[プロジェクトボードの自動化について](/articles/about-automation-for-project-boards)」
