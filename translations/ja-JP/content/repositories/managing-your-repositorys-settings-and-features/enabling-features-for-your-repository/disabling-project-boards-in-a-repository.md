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
ms.openlocfilehash: 0407d6df39ae664474aa3fb5c99dc7998df1b951
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422661'
---
{% data variables.projects.projects_v1_boards %} を無効にすると、タイムラインや[監査ログ](/articles/reviewing-your-security-log/)に {% data variables.projects.projects_v1_board %} の情報が表示されなくなります。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. [機能] で、 **[プロジェクト]** チェックボックスをオフにします。
  ![[プロジェクト] チェックボックスをオフ](/assets/images/help/projects/disable-projects-checkbox.png)

{% data variables.projects.projects_v1_boards %} を無効にした後は、既存の {% data variables.projects.projects_v1_boards %} に以前の URL でアクセスできなくなります。 {% data reusables.organizations.disable_project_board_results %}
