---
title: ディスカッションをモデレートする
intro: 'You can promote healthy collaboration by marking comments as answers, locking or unlocking discussions, converting issues to discussions, and editing or deleting comments, discussions, and categories that don''t align with your community''s code of conduct.'
permissions: People with triage access to a repository can moderate discussions in the repository. People with triage access to the source repository for organization discussions can moderate discussions in the organization.
versions:
  fpt: '*'
  ghec: '*'
---


## ディスカッションのモデレートについて

{% data reusables.discussions.about-discussions %} If you have triage permissions for a repository, you can help moderate a repository's discussions by marking comments as answers, locking discussions that are not longer useful or are damaging to the community, and converting issues to discussions when an idea is still in the early stages of development. Similarly, if you have triage permission for the source repository for organization discussions, you can moderate discussions for that organization.

## コメントを回答としてマークする

{% data reusables.discussions.marking-a-comment-as-an-answer %}

## ディスカッションをロックする

会話全体が建設的でない場合、またはコミュニティの行動規範または {% data variables.product.prodname_dotcom %} の[コミュニティガイドライン](/free-pro-team@latest/github/site-policy/github-community-guidelines)に違反している場合は、会話をロックするのが適切です。 会話をロックして、コミュニティへのお知らせとして使用するディスカッションへのコメントを防ぐこともできます。 When you lock a conversation, people with write access to the repository, or source repository for organization discussions, will still be able to comment on the discussion.

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
1. ディスカッションのリストで、ロックするディスカッションをクリックします。 ![ディスカッションのロック](/assets/images/help/discussions/unanswered-discussion.png)
1. ディスカッションの右マージンで、[**Lock conversation**] をクリックします。
1. 会話のロックに関する情報を確認し、[**Lock conversation on this discussion**] をクリックします。
1. 会話のロックを解除する準備ができたら、[**Unlock conversation**] をクリックしてから、[**Unlock conversation on this discussion**] をクリックします。

## Issue をディスカッションに変換する

Issue をディスカッションに変換すると、その Issue のコンテンツを使用してディスカッションが自動的に作成されます。 People with write access to a repository, or source repository for organization discussions, can bulk convert issues based on labels. For more information, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions)."

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.repositories.sidebar-issues %}
1. Issue のリストで、変換する Issue をクリックします。
1. Issue の右マージンで [**Convert to discussion**] をクリックします。
1. [**Choose a category**] ドロップダウンメニューを選択し、ディスカッションのカテゴリをクリックします。
1. [**I understand, convert this issue to a discussion**] をクリックします。
