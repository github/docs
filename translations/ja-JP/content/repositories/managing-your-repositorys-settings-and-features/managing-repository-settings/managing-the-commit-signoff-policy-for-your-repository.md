---
title: リポジトリのコミット サインオフ ポリシーの管理
intro: 'リポジトリに対して行ったコミットを {% data variables.product.product_name %} の Web インターフェイスを使用して自動的にサインオフするようにユーザーに要求できます。'
versions:
  feature: commit-signoffs
permissions: Organization owners and repository administrators can require all commits to a repository to be signed off by the commit author.
topics:
  - Repositories
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 078e80ed9f2b916c2c82b522eaad709fae5dc46c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107694'
---
## コミットのサインオフについて

コミット サインオフを使用すると、ユーザーは、コミットがリポジトリを管理するルールとライセンスに準拠していることを確認できます。 {% data variables.location.product_location %} の Web インターフェイスを介してコミットするユーザーに対して、個々のリポジトリで強制コミット サインオフを有効にして、コミットでのサインオフをコミット プロセスのシームレスな部分にすることができます。 リポジトリに対して強制コミット サインオフが有効になると、{% data variables.location.product_location %} の Web インターフェイスを介してそのリポジトリに対して行われたすべてのコミットが、コミット作成者によって自動的にサインオフされます。

Organization の所有者は、Organization レベルで強制コミット サインオフを有効にすることもできます。 詳しくは、「[Organization のコミット サインオフ ポリシーの管理](/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization)」をご覧ください。

{% data reusables.repositories.commit-signoffs %}

## リポジトリの強制コミット サインオフを有効または無効にする

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. **[共同作成者に Web ベースのコミットのサインオフを要求する]** を選びます。
  ![[共同作成者に Web ベースのコミットのサインオフを要求する] のスクリーンショット](/assets/images/help/repository/require-signoffs.png)
