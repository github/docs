---
title: プロジェクトボードの作成
intro: プロジェクトボードは、特定機能の働きの追跡と優先度付け、総合的なロードマップ、さらにはリリースチェックリストなど、ニーズを満たすカスタマイズワークフローを作成するために使用できます。
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/creating-a-project-board
  - /articles/creating-a-project/
  - /articles/creating-a-project-board
  - /github/managing-your-work-on-github/creating-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %}詳細は「[リポジトリをプロジェクトボードにリンクする](/articles/linking-a-repository-to-a-project-board)」を参照してください。

プロジェクトボードの作成が完了すると、そこへ Issue、プルリクエスト、およびノートを追加できます。 詳細は「[プロジェクトボードに Issue およびプルリクエストを追加する](/articles/adding-issues-and-pull-requests-to-a-project-board)」および「[プロジェクトボードにノートを追加する](/articles/adding-notes-to-a-project-board)」を参照してください。

また、プロジェクトボードが Issue やプルリクエストのステータスと同期を保てるよう、ワークフローの自動化を設定することもできます。 詳しい情報については「[プロジェクトボードの自動化について](/articles/about-automation-for-project-boards)」を参照してください。

{% data reusables.project-management.project-board-import-with-api %}

### ユーザが所有するプロジェクトボードの作成

{% data reusables.profile.access_profile %}
2. プロフィールページの一番上のメインナビゲーションにある{% octicon "project" aria-label="The project board icon" %}[**Projects**] をクリックします。 ![プロジェクトタブ](/assets/images/help/projects/user-projects-tab.png)
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.choose-visibility %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

### Organization 全体のプロジェクトボードの作成

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.choose-visibility %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

### リポジトリのプロジェクトボードの作成

{% data reusables.repositories.navigate-to-repo %}
2. リポジトリ名の下にある {% octicon "project" aria-label="The project board icon" %}[**Projects**] をクリックします。 ![プロジェクトタブ](/assets/images/help/projects/repo-tabs-projects.png)
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

### 参考リンク

- "[プロジェクトボードについて](/articles/about-project-boards)"
- [プロジェクトボードの自動化を設定する](/articles/editing-a-project-board){% if currentVersion == "free-pro-team@latest" %}
- [プロジェクトボードのコピー](/articles/copying-a-project-board)
{% endif %}
- "[プロジェクトボードをクローズする](/articles/closing-a-project-board)"
- [プロジェクトボードの自動化について](/articles/about-automation-for-project-boards)
