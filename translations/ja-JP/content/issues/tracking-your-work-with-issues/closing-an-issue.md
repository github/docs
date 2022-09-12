---
title: 問題の終了
intro: バグを修正したとき、フィードバックに対応したとき、または作業が予定されていないことを示すために、issue をクローズすることができます。
permissions: 'Anyone can close an issue they opened.<br><br>Repository owners, collaborators on repositories owned by a personal account, and people with triage permissions or greater on repositories owned by an organization can close issues opened by others. {% data reusables.enterprise-accounts.emu-permission-repo %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Project management
shortTitle: Close an issue
ms.openlocfilehash: 889775474dc94f10c62e59916e1fa13b263b3474
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060427'
---
{% note %}

**注:** pull request とコミット メッセージ内でキーワードを使って issue を自動的にクローズすることもできます。 詳細については、「[pull request を Issue にリンクする](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword#linking-a-pull-request-to-an-issue-using-a-keyword)」を参照してください。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
1. Issue のリストで、クローズする issue をクリックします。
{%- ifversion issue-close-reasons %}
1. 必要に応じて issue をクローズする理由を変更するには、[Close issue]\(issue のクローズ\) の横にある {% octicon "triangle-down" aria-label="The down triangle octicon" %} を選び、理由をクリックします。
   ![issue をクローズする理由を含むドロップダウン メニューを示すスクリーンショット](/assets/images/help/issues/close-issue-select-reason.png)
2. **[Close issue]\(issue のクローズ\)** をクリックします。
   ![[Close issue]\(issue のクローズ\) ボタンを示すスクリーンショット](/assets/images/help/issues/close-issue-with-reason.png) {%- else %}
1. ページの下部にある **[Close issue]\(issue のクローズ\)** をクリックします。
   ![[Close issue]\(issue のクローズ\) ボタンを示すスクリーンショット](/assets/images/help/issues/close-issue.png) {% endif %}
