---
title: ディスカッションについて
intro: 'ディスカッションでは、質問、質問への回答、情報の共有、発表、{% data variables.product.product_name %} 上のプロジェクトについて会話を実施したり参加したりすることができます。'
versions:
  fpt: '*'
  ghec: '*'
---


## {% data variables.product.prodname_discussions %}について

With {% data variables.product.prodname_discussions %}, the community for your project can create and participate in conversations within the project's repository or organization. ディスカッションにより、プロジェクトのメンテナ、コントリビューター、訪問者は、サードパーティのツールを使用せずに、一か所に集合し、次のような目標を集めて達成できます。

- お知らせや情報を共有し、フィードバックを収集し、計画を立案して、意思決定を行う
- 質問し、質問についてディスカッションを行い、回答し、ディスカッションに回答済みのマークを付ける
- Create polls to gauge community opinion
- 訪問者とコントリビューターが目標、開発、管理、ワークフローについて話し合うための居心地の良い雰囲気を育む

![リポジトリの [Discussions] タブ](/assets/images/help/discussions/hero.png)

You might use repository discussions to discuss topics that are specific to the repository. If your project spans multiple repositories, you might use organization discussions to discuss topics that aren't specific to a single repository in your organization.

Issue やプルリクエストをクローズするように、ディスカッションをクローズする必要はありません。

If a repository administrator or project maintainer enables {% data variables.product.prodname_discussions %} for a repository, anyone who visits the repository can create and participate in discussions for the repository. If an organization owner enables {% data variables.product.prodname_discussions %} for an organization, anyone who can view the source repository can create an organization discussion.

リポジトリ管理者とプロジェクトメンテナは、リポジトリ内のディスカッションとディスカッションカテゴリを管理し、ディスカッションを固定してディスカッションの可視性を高めることができます。 モデレータとコラボレータは、コメントを回答としてマークしたり、ディスカッションをロックしたり、Issue をディスカッションに変換したりすることができます。 Similarly, for organization discussions, the role of a user in the source repository determines how a user can interact with organization discussions. 詳しい情報については「[Organizationのリポジトリロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」を参照してください。

For more information about management of discussions, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions)."

## About polls

You can create polls in the polls category to gauge interest in new ideas and project direction. Anyone with read access to your repository can create polls, vote in polls, and view their results. Logged out users can view the results of polls in public repositories.

Polls require a question and at least two options. You can add a maximum of eight options and the options can contain a maximum of 128 characters.

Voters cannot change their vote. Editing a poll will reset any votes that have already been cast.

For more information on creating polls, see "[Creating a poll](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion#creating-a-poll)."

## About discussion organization

You can organize discussions with categories and labels.

{% data reusables.discussions.you-can-categorize-discussions %} {% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.repository-category-limit %}

質問/回答形式のディスカッションの場合、ディスカッション内の個々のコメントをディスカッションの回答としてマークできます。 {% data reusables.discussions.github-recognizes-members %}

{% data reusables.discussions.about-announcement-format %}

For more information, see "[Managing categories for discussions](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)."

{% data reusables.discussions.you-can-label-discussions %}

## Best practices for {% data variables.product.prodname_discussions %}

コミュニティのメンバーまたはメンテナとして、コミュニティに影響を与える質問をしたり、情報について話し合ったりするためのディスカッションを開始します。 詳しい情報については、「[ディスカッションを使用したメンテナとのコラボレーション](/discussions/collaborating-with-your-community-using-discussions/collaborating-with-maintainers-using-discussions)」を参照してください。

ディスカッションに参加して、質問をしたり、回答したり、フィードバックを提供したり、プロジェクトのコミュニティに参加したりすることができます。 詳しい情報については、「[ディスカッションをピン止めする](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion)」を参照してください。

コミュニティのメンバー間の重要、有用、または模範的な会話を含むディスカッションにスポットライトを当てることができます。 For more information, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)."

{% data reusables.discussions.you-can-convert-an-issue %} For more information, see "[Moderating discussions](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)."

## フィードバックを送る

{% data variables.product.prodname_discussions %} に関するフィードバックを {% data variables.product.company_short %} と共有できます。 会話に参加するには、[`github/feedback`](https://github.com/github/feedback/discussions?discussions_q=category%3A%22Discussions+Feedback%22) を参照してください。

## 参考リンク

- 「[{% data variables.product.prodname_dotcom %} での書き方と書式設定について](/github/writing-on-github/about-writing-and-formatting-on-github)」
- 「[ディスカッションを検索する](/search-github/searching-on-github/searching-discussions)」
- 「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications)」
- [コメントと会話の管理](/communities/moderating-comments-and-conversations)
- 「[{% data variables.product.prodname_dotcom %} での安全性を維持する](/communities/maintaining-your-safety-on-github)」
