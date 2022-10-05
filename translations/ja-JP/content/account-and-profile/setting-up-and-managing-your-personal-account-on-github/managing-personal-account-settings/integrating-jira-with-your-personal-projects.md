---
title: JIRA を個人プロジェクトに統合する
intro: Jira Cloud を個人アカウントに統合すると、コミットと pull request をスキャンして、メンションされている Jira の issue に関連するメタデータとハイパーリンクを作成できます。
redirect_from:
  - /articles/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira with projects
ms.openlocfilehash: bc88d865cd9c1c88caf5498eab330b6f11cd2ec0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164887'
---
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
1. **[新しいアプリケーションの登録]** をクリックします。
2. **[アプリケーション名]** に「Jira」と入力します。
3. **[ホームページの URL]** に、Jira のインスタンスへの完全な URL を入力します。
4. **[承認コールバック URL]** に、Jira のインスタンスへの完全な URL を入力します。
5. **[Register application](アプリケーションを登録する)** をクリックします。
![[アプリケーションを登録する] ボタン](/assets/images/help/oauth/register-application-button.png)
8. **[開発者アプリケーション]** の [クライアント ID] と [クライアント シークレット] の値をメモします。
![クライアント ID とクライアント シークレット](/assets/images/help/oauth/client-id-and-secret.png) {% data reusables.user-settings.jira_help_docs %}

## 参考資料

- ["Organization のプロジェクト ボードに Jira を統合する"](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Jira Cloud を GitHub に接続する</a> (Atlassian のドキュメント)
