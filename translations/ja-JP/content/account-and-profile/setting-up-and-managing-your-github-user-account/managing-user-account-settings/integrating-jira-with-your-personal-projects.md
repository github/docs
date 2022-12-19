---
title: JIRA を個人プロジェクトに統合する
intro: You can integrate Jira Cloud with your personal account to scan commits and pull requests, creating relevant metadata and hyperlinks in any mentioned Jira issues.
redirect_from:
- /articles/integrating-jira-with-your-personal-projects
- /github/setting-up-and-managing-your-github-user-account/integrating-jira-with-your-personal-projects
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/integrating-jira-with-your-personal-projects
versions:
  ghes: '*'
  ghae: '*'
shortTitle: Integrate Jira with projects
ms.openlocfilehash: a9106d979aa0f219bd20fc5b27042dfe8e81fc8c
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088895"
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

## <a name="further-reading"></a>参考資料

- ["Organization のプロジェクト ボードに Jira を統合する"](/articles/integrating-jira-with-your-organization-project-board)
- <a href="https://confluence.atlassian.com/adminjiracloud/connect-jira-cloud-to-github-814188429.html" data-proofer-ignore>Jira Cloud を GitHub に接続する</a> (Atlassian のドキュメント)
