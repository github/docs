---
title: ディスカッションを使用してメンテナとコラボレーションする
shortTitle: メンテナとコラボレーションする
intro: 'ディスカッションでプロジェクトのメンテナと連絡を取り合うことにより、{% data variables.product.product_name %} でプロジェクトの目標、計画、健全性、およびコミュニティに貢献できます。'
permissions: 'People with read access to a repository can start and participate in discussions and polls in the repository. People with read access to the source repository for organization discussions can start and participate in discussions and polls in the organization. {% data reusables.enterprise-accounts.emu-permission-interact %}'
versions:
  fpt: '*'
  ghec: '*'
---


## About collaboration with maintainers using {% data variables.product.prodname_discussions %}

{% data reusables.discussions.about-discussions %} プロジェクトを使用または貢献する場合は、ディスカッションを開始して提案を行い、計画、質問、アイデア、フィードバックについてメンテナやコミュニティメンバーと交流することができます。 詳しい情報については「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」を参照してください。

{% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.about-announcement-format %}

Repository administrators and project maintainers can delete a discussion in that repository. Similarly, administrators and maintainers of the source repository for an organization's discussions can delete a discussion in that organization. For more information, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion)."

{% data reusables.discussions.github-recognizes-members %} これらのメンバーは、プロジェクトのディスカッションに最も役立つコントリビューターのリストに表示されます。 プロジェクトが成長するにつれて、コミュニティのアクティブなメンバーにより高いアクセス許可を付与できます。 詳しい情報については、「[上位貢献者により高いアクセス許可を付与する](/discussions/guides/granting-higher-permissions-to-top-contributors) 」を参照してください。

![プロジェクトのディスカッションに最も役立つ貢献者](/assets/images/help/discussions/most-helpful.png)

ディスカッションへの参加に関する詳しい情報については、「[ディスカッションに参加する](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion)」を参照してください。

## 必要な環境

To collaborate with maintainers in repository discussions, a repository administrator or project maintainer must enable {% data variables.product.prodname_discussions %} for the repository. For more information, see "[Enabling or disabling {% data variables.product.prodname_discussions %} for a repository](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)."

To collaborate with maintainers in organization discussions, {% data variables.product.prodname_discussions %} must be enabled for the organization. For more information, see "[Enabling or disabling {% data variables.product.prodname_discussions %} for an organization](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)."

## ディスカッションを開始する

{% data reusables.discussions.starting-a-discussion %}

## Starting a poll

{% data reusables.discussions.starting-a-poll %}

## ディスカッションのリストをフィルタする

You can search for discussions and filter the list of discussions in a repository or organization. 詳しい情報については、「[ ディスカッションを検索する](/search-github/searching-on-github/searching-discussions)」を参照してください。

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
1. [**Search all discussions**] フィールドに、検索クエリを入力します。 必要に応じて、検索フィールドの右側にあるボタンをクリックして、結果をさらにフィルタします。 ![ディスカッションをフィルタするための検索バーとボタン](/assets/images/help/discussions/search-and-filter-controls.png)
1. ディスカッションのリストで、表示するディスカッションをクリックします。 ![ディスカッション検索結果](/assets/images/help/discussions/search-result.png)

## Issue をディスカッションに変換する

{% data reusables.discussions.you-can-convert-an-issue %} For more information, see "[Moderating discussions](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)."

## 参考リンク

- 「[{% data variables.product.prodname_dotcom %} での書き方と書式設定について](/github/writing-on-github/about-writing-and-formatting-on-github)」
- 「[{% data variables.product.prodname_dotcom %} での安全性を維持する](/communities/maintaining-your-safety-on-github)」
