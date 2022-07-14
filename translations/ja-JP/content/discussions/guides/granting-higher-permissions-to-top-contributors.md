---
title: 上位コントリビューターにより高い権限を付与する
intro: リポジトリ管理者は、コミュニティメンバーをモデレータおよびメンテナに昇格させることができます。
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Grant higher permissions
---


## はじめに

過去 30 日間で最も貢献したコントリビューターは、他のコミュニティメンバーによって回答としてマークされたコメントの数に基づいて、{% data variables.product.prodname_discussions %} ダッシュボードで強調表示されます。 貢献度の高いコントリビューターは、健全なコミュニティを推進し、メンテナに加えて、節度のあるコミュニティスペースに導くことができます。

## Step 1: Audit your {% data variables.product.prodname_discussions %} top contributors

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
1. Compare the list of contributors with their access permissions to the repository or, for organization discussions, to the source repository to see who qualifies to moderate the discussion.

## Step 2: Review permission levels for {% data variables.product.prodname_discussions %}

People with triage permissions for a repository can help moderate a repository's discussions by marking comments as answers, locking discussions that are not longer useful or are damaging to the community, and converting issues to discussions when an idea is still in the early stages of development. Similarly, people with triage permissions for the source repository for organization discussions can moderate the organization's discussions. 詳しい情報については、「[ ディスカッションをモデレートする](/discussions/managing-discussions-for-your-community/moderating-discussions)」を参照してください。

リポジトリの権限レベルおよび {% data variables.product.prodname_discussions %} に関する詳しい情報については、「[Organization のリポジトリの権限レベル](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)」を参照してください。

## ステップ 3: 上位コントリビューターのアクセス権限レベルを変更する

コントリビューターのアクセス権限レベルを変更して、GitHub ディスカッションをモデレートするために必要なより多くのツールにアクセスできるようになります。 個人またはTeam の権限レベルの変更について詳しくは、「[リポジトリへのアクセス権を持つ Team と人を管理する](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)」を参照してください。

## ステップ 4: アクセス権限の昇格をコミュニティメンバーに通知する

コラボレータの権限レベルを変更すると、変更通知がコラボレータに送信されます。
