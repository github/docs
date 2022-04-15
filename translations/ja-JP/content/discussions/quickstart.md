---
title: GitHub Discussions のクイックスタート
intro: 'Enable {% data variables.product.prodname_discussions %} on an existing repository or organization and start conversations with your community.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
shortTitle: クイックスタート
---


## はじめに

{% data variables.product.prodname_discussions %} は、オープンソースプロジェクトに関するコミュニティ向けの共同コミュニケーションフォーラムです。 Discussions are for conversations that need to be transparent and accessible but do not need to be tracked on a project board and are not related to code, unlike {% data variables.product.prodname_github_issues %}. Discussions により、公開フォーラムで流動的でオープンな会話ができるようになります。

Discussions では、より協力的な会話ができるように、情報に接続して検索するためのより一元的なエリアを提供しています。

## リポジトリの {% data variables.product.prodname_discussions %} を有効化する

Repository owners and people with write access can enable {% data variables.product.prodname_discussions %} for a community on their public and private repositories.

When you first enable {% data variables.product.prodname_discussions %}, you will be invited to configure a welcome post.

{% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下で{% octicon "gear" aria-label="The gear icon" %} **Settings（設定）**をクリックしてください。 ![公開設定ボタン](/assets/images/help/discussions/public-repo-settings.png)
1. [Features] で、[**Set up discussions**] をクリックします。 ![Set up a discussion button under "Features" for enabling or disabling GitHub Discussions for a repository](/assets/images/help/discussions/setup-discussions-button.png)
1. [Start a new discussion] で、テンプレートを編集してコミュニティに設定するリソースと方向性を合わせます。
1. **Start discussion（ディスカッションの開始）**をクリックしてください。 !["ディスカッションの開始" ボタン](/assets/images/help/discussions/new-discussion-start-discussion-button.png)

## Enabling {% data variables.product.prodname_discussions %} on your organization

Organization owners can enable {% data variables.product.prodname_discussions %} for their organization.

{% data reusables.discussions.about-organization-discussions %}

{% data reusables.discussions.enabling-or-disabling-github-discussions-for-your-organization %}

## ディスカッションへのコントリビューションを歓迎する

You can welcome your community and introduce a new way to communicate in a repository or organization by creating a welcome post and pinning the post to your {% data variables.product.prodname_discussions %} page. ディスカッションをピン留めしてロックすると、投稿がお知らせであることを周知するのに役立ちます。 お知らせを使用すると、ユーザをより多くのリソースにリンクし、コミュニティでディスカッションをオープンするためのガイダンスを提供できます。 For more information about pinning a discussion, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)."


## コントリビューター向けのコミュニティガイドラインを設定する

For repository discussions, you can set contributing guidelines to encourage collaborators to have meaningful, useful conversations that are relevant to the repository. リポジトリの README を更新して、コラボレータが Issue やディスカッションをオープンするタイミングを伝えることもできます。 プロジェクトのガイドラインの提供方法の詳細については、「[プロジェクトに行動規範を追加する](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)」および 「[健全なコントリビューションのためのプロジェクトの設定](/communities/setting-up-your-project-for-healthy-contributions)」を参照してください。

For organization discussions, you share information about how to engage with your organization by creating an organization profile README. For more information, see "[Customizing your organization's profile](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)."

## 新しいディスカッションを作成する

Any authenticated user who can view the repository can create a discussion in that repository. Similarly, since organization discussions are based on a source repository, any authenticated user who can view the source repository can create a discussion in that organization.

{% data reusables.discussions.starting-a-discussion %}

## Creating a new poll

Any authenticated user who can view a repository can create a poll. Similarly, since organization discussions are based on a source repository, any authenticated user who can view the source repository can create a poll in that organization.

{% data reusables.discussions.starting-a-poll %}

## Organizing discussions

Repository owners and people with write access to the repository can create new categories to keep discussions organized. Similarly, since organization discussions are based on a source repository, repository owners and people with write access to the source repository can create new categories for organization discussions.

参加しているコラボレータが新しいディスカッションを作成する場合、ディスカッションを最も関連性の高い既存のカテゴリにグループ化できます。 ディスカッションは、作成後に再分類することもできます。 For more information, see "[Managing categories for discussions](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)."

{% data reusables.discussions.you-can-label-discussions %}

## 健全な会話を促進する

People with write permissions for the repository, or for the source repository for organization discussions, can help surface important conversations by pinning discussions, deleting discussions that are no longer useful or are damaging to the community, and transferring discussions to more relevant repositories owned by the organization. For more information, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions)."

People with triage permissions for the repository, or for the source repository for organization discussions, can help moderate a project's discussions by marking comments as answers, locking discussions that are no longer useful or are damaging to the community, and converting issues to discussions when an idea is still in the early stages of development. 詳しい情報については、「[ ディスカッションをモデレートする](/discussions/managing-discussions-for-your-community/moderating-discussions)」を参照してください。

## 次のステップ

作業を確認してアイデアをコンセプトから現実に移すための明確な道筋ができたら、Issue を作成して進捗状況の追跡を開始できます。 ディスカッションから Issue を作成する際の詳しい情報については、「[ ディスカッションをモデレートする](/discussions/managing-discussions-for-your-community/moderating-discussions)」を参照してください。
