---
title: 'リポジトリで {% data variables.projects.projects_v1_boards %} を無効にする'
intro: 'ユーザーやチームが異なる方法で作業を管理している場合、リポジトリの管理者はリポジトリの {% data variables.projects.projects_v1_boards %} をオフにできます。'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-a-repository
  - /articles/disabling-project-boards-in-a-repository
  - /github/managing-your-work-on-github/disabling-project-boards-in-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-project-boards-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 'Disable {% data variables.projects.projects_v1_boards %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 8c550cd9ebc767327298e39dc0b3a6a11368dc3f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109524'
---
{% data variables.projects.projects_v1_boards %} を無効にすると、タイムラインや[監査ログ](/articles/reviewing-your-security-log/)に {% data variables.projects.projects_v1_board %} の情報が表示されなくなります。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. [機能] で、 **[プロジェクト]** チェックボックスをオフにします。
  ![[プロジェクト] チェックボックスをオフ](/assets/images/help/projects/disable-projects-checkbox.png)

{% data variables.projects.projects_v1_boards %} を無効にした後は、既存の {% data variables.projects.projects_v1_boards %} に以前の URL でアクセスできなくなります。 {% data reusables.organizations.disable_project_board_results %}
