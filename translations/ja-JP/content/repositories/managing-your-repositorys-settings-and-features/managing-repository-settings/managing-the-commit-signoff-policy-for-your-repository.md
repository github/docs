---
title: リポジトリのコミット サインオフ ポリシーの管理
intro: 'リポジトリに対して行ったコミットを {% data variables.product.product_name %} の Web インターフェイスを使用して自動的にサインオフするようにユーザーに要求できます。'
versions:
  feature: commit-signoffs
permissions: Organization owners and repository administrators can require all commits to a repository to be signed off by the commit author.
topics:
  - Repositories
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 4002f0767497cb2b0db9e43c9783e0c2982c8d33
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410755'
---
## コミットのサインオフについて

コミット サインオフを使用すると、ユーザーは、コミットがリポジトリを管理するルールとライセンスに準拠していることを確認できます。 {% data variables.product.product_location %} の Web インターフェイスを介してコミットするユーザーに対して、個々のリポジトリで強制コミット サインオフを有効にして、コミットでのサインオフをコミット プロセスのシームレスな部分にすることができます。 リポジトリに対して強制コミット サインオフが有効になると、{% data variables.product.product_location %} の Web インターフェイスを介してそのリポジトリに対して行われたすべてのコミットが、コミット作成者によって自動的にサインオフされます。

Organization の所有者は、Organization レベルで強制コミット サインオフを有効にすることもできます。 詳しくは、「[Organization のコミット サインオフ ポリシーの管理](/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization)」をご覧ください。

{% data reusables.repositories.commit-signoffs %}

## リポジトリの強制コミット サインオフを有効または無効にする

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. **[共同作成者に Web ベースのコミットのサインオフを要求する]** を選びます。
  ![[共同作成者に Web ベースのコミットのサインオフを要求する] のスクリーンショット](/assets/images/help/repository/require-signoffs.png)
