---
title: Organization のプロジェクトボードに JIRA を統合する
intro: Jira Cloud を Organization のアカウントに統合すると、コミットとプルリクエストをスキャンし、メンションされている JIRA の Issue で、関連するメタデータとハイパーリンクを作成できます。
redirect_from:
  - /articles/integrating-jira-with-your-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/integrating-jira-with-your-organization-project-board
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira
ms.openlocfilehash: 0b773dc865373ab006f7c596b50ac81af5d6636a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125733'
---
{% ifversion ghes > 3.4 or ghae-issue-5658 %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 左側のサイドバーで、 **[{% octicon "code" aria-label="The code icon" %} 開発者向け設定]** を選択し、 **[OAuth アプリ]** をクリックします。
  ![左サイドバーの [OAuth アプリケーション] タブ](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. **[新しい OAuth アプリ]** をクリックします。
{% else %} {% data reusables.user-settings.access_settings %}
1. 左側のサイドバーの **[Organization の設定]** で、自分の Organization の名前をクリックします。
![サイドバーの Organization 名](/assets/images/help/settings/organization-settings-from-sidebar.png)
1. 左側のサイドバーの **[開発者向け設定]** で、 **[OAuth アプリケーション]** をクリックします。
  ![左サイドバーの [OAuth アプリケーション] タブ](/assets/images/help/organizations/org-oauth-applications-ghe.png)
1. **[新しいアプリケーションの登録]** をクリックします。
{% endif %}
1. **[アプリケーション名]** に「Jira」と入力します。
2. **[ホームページの URL]** に、Jira のインスタンスへの完全な URL を入力します。
3. **[承認コールバック URL]** に、Jira のインスタンスへの完全な URL を入力します。
4. **[Register application](アプリケーションを登録する)** をクリックします。
![[アプリケーションを登録する] ボタン](/assets/images/help/oauth/register-application-button.png)
9. **[Organization が所有するアプリケーション]** の [クライアント ID] と [クライアント シークレット] の値をメモします。
![クライアント ID とクライアント シークレット](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## 参考資料

- [Jira を個人プロジェクトに統合する](/articles/integrating-jira-with-your-personal-projects)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Jira Cloud を GitHub に接続する</a> (Atlassian のドキュメント)
