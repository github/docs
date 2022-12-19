---
title: Organization のコミット サインオフ ポリシーの管理
intro: 'Organization が所有するリポジトリへの {% data variables.product.product_name %} の Web インターフェイスでユーザーが行ったすべてのコミットを、自動的にサインオフするように要求できます。'
versions:
  feature: commit-signoffs
permissions: Organization owners can require all commits to repositories owned by the organization be signed off by the commit author.
topics:
  - Organizations
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 3d567d9f592758a2a9998df07556c4f2a04a852c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109436'
---
## コミットのサインオフについて

コミットがリポジトリを管理するルールとライセンスに準拠していることを確認するために、多くの Organization では、開発者がすべてのコミットをサインオフする必要があります。 Organization でコミットのサインオフが必要な場合は、{% data variables.product.product_name %} の Web インターフェイスを介してコミットするユーザーに対して強制コミット サインオフを有効にすることで、コミット プロセスのシームレスな部分をサインオフできます。 Organization の強制コミット サインオフを有効にした後、{% data variables.product.product_name %} の Web インターフェイスを介してその Organization 内のリポジトリに対して行われたすべてのコミットは、コミット作成者によって自動的にサインオフされます。

リポジトリへの管理者アクセス権を持つユーザーは、リポジトリ レベルで強制コミット サインオフを有効にすることもできます。 詳しくは、「[リポジトリのコミット サインオフ ポリシーの管理](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository)」を参照してください。

{% data reusables.repositories.commit-signoffs %}

## Organization の強制コミット サインオフの管理

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}
1. **[共同作成者に Web ベースのコミットのサインオフを要求する]** を選択または選択解除します。
  ![[共同作成者に Web ベースのコミットのサインオフを要求する] のスクリーンショット](/assets/images/help/organizations/require-signoffs.png)
