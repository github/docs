---
title: ディスカッションを使用してメンテナとコラボレーションする
shortTitle: Collaborating with maintainers
intro: 'ディスカッションでプロジェクトのメンテナと連絡を取り合うことにより、{% data variables.product.product_name %} でプロジェクトの目標、計画、健全性、およびコミュニティに貢献できます。'
permissions: 'People with read access to a repository can start and participate in discussions and polls in the repository. People with read access to the source repository for organization discussions can start and participate in discussions and polls in the organization. {% data reusables.enterprise-accounts.emu-permission-interact %}'
versions:
  feature: discussions
ms.openlocfilehash: f090088d55e946e67c1f0b5d790deca9fd794a90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410252'
---
## {% data variables.product.prodname_discussions %} を使用したメンテナとのコラボレーションについて

{% data reusables.discussions.about-discussions %} プロジェクトを使用または貢献する場合は、ディスカッションを開始して提案を行い、計画、質問、アイデア、フィードバックについてメンテナやコミュニティメンバーと交流することができます。 詳細については、「[ディスカッションについて](/discussions/collaborating-with-your-community-using-discussions/about-discussions)」を参照してください。

{% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.about-announcement-format %} 

リポジトリ管理者とプロジェクトのメンテナは、そのリポジトリ内のディスカッションを削除できます。 同様に、Organization のディスカッションのソース リポジトリの管理者とメンテナは、その Organization 内のディスカッションを削除できます。 詳しくは、「[ディスカッションの管理](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion)」を参照してください。

{% data reusables.discussions.github-recognizes-members %} これらのメンバーは、プロジェクトのディスカッションに最も役立つコントリビューターのリストに表示されます。 プロジェクトが成長するにつれて、コミュニティのアクティブなメンバーにより高いアクセス許可を付与できます。 詳細については、「[上位貢献者により高いアクセス許可を付与する](/discussions/guides/granting-higher-permissions-to-top-contributors)」を参照してください

![プロジェクトのディスカッションに最も役立つ貢献者](/assets/images/help/discussions/most-helpful.png)

ディスカッションへの参加の詳細については、「[ディスカッションに参加する](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion)」を参照してください。

## 前提条件

リポジトリ ディスカッションでメンテナとコラボレーションするには、リポジトリ管理者またはプロジェクトのメンテナがリポジトリの {% data variables.product.prodname_discussions %} を有効にする必要があります。 詳細については、「[リポジトリの {% data variables.product.prodname_discussions %} を有効化または無効化する](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)」を参照してください。

Organization のディスカッションでメンテナと共同作業するには、Organization に対して {% data variables.product.prodname_discussions %} を有効にする必要があります。 詳細については、「[Organization の {% data variables.product.prodname_discussions %} を有効化または無効化する](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)」を参照してください。

## ディスカッションを開始する

{% data reusables.discussions.starting-a-discussion %}

## ポーリングを開始する

{% data reusables.discussions.starting-a-poll %}

## ディスカッションのリストをフィルタする

ディスカッションを検索し、リポジトリまたは Organization 内のディスカッションのリストをフィルタできます。 詳細については、「[ディスカッションを検索する](/search-github/searching-on-github/searching-discussions)」を参照してください。

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %}
1. **[すべてのディスカッションを検索]** フィールドに、検索クエリを入力します。 必要に応じて、検索フィールドの右側にあるボタンをクリックして、結果をさらにフィルタします。
  ![ディスカッションをフィルタするための検索バーとボタン](/assets/images/help/discussions/search-and-filter-controls.png)
1. ディスカッションのリストで、表示するディスカッションをクリックします。
  ![ディスカッション検索結果](/assets/images/help/discussions/search-result.png)

## Issue をディスカッションに変換する

{% data reusables.discussions.you-can-convert-an-issue %} 詳細については、「[ディスカッションをモデレートする](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)」を参照してください。

## 参考資料

- 「[{% data variables.product.prodname_dotcom %} 上での執筆とフォーマットについて](/github/writing-on-github/about-writing-and-formatting-on-github)」{%- ifversion fpt or ghec %}
- 「[{% data variables.product.prodname_dotcom %} での安全性を維持する](/communities/maintaining-your-safety-on-github)」{%- endif %}
