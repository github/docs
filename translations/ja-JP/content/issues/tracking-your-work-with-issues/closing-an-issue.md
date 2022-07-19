---
title: Issueのクローズ
intro: バグが修正されたり、フィードバックが実行されたり、作業が計画されていないことを示したりするために、Issueをクローズできます。
permissions: 'Anyone can close an issue they opened.<br><br>Repository owners, collaborators on repositories owned by a personal account, and people with triage permissions or greater on repositories owned by an organization can close issues opened by others. {% data reusables.enterprise-accounts.emu-permission-repo %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Project management
shortTitle: Close an issue（Issueのクローズ）
---

{% note %}

**ノート:** Pull Requestやコミットメッセージ中のキーワードで、自動的にIssueをクローズすることもできます。 詳しい情報については「[プルリクエストのIssueへのリンク](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword#linking-a-pull-request-to-an-issue-using-a-keyword)」を参照してください。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
1. Issueのリストで、クローズしたいIssueをクリックしてください。
{%- ifversion issue-close-reasons %}
1. あるいは、Issueのクローズの理由を変更したい場合は、"Close issue（Issueのクローズ）"の隣にある{% octicon "triangle-down" aria-label="The down triangle octicon" %}を選択し、理由をクリックしてください。 ![Issueをクローズする理由を含むドロップダウンメニューが表示されているスクリーンショット](/assets/images/help/issues/close-issue-select-reason.png)
2. **Close issue（Issueをクローズ）**をクリックしてください。 !["close issue"ボタンが表示されているスクリーンショット](/assets/images/help/issues/close-issue-with-reason.png)
{%- else %}
1. ページの下部で、**Close issue（Issueをクローズ）**をクリックしてください。 !["close issue"ボタンが表示されているスクリーンショット](/assets/images/help/issues/close-issue.png)
{% endif %}
