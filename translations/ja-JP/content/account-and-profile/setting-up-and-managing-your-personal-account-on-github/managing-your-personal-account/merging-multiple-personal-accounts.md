---
title: 複数の個人アカウントのマージ
intro: 業務用と個人用に別々のアカウントを持っている場合は、アカウントをマージできます。
redirect_from:
  - /articles/can-i-merge-two-accounts
  - /articles/keeping-work-and-personal-repositories-separate
  - /articles/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/merging-multiple-personal-accounts
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Merge multiple accounts
ms.openlocfilehash: 39198c8fdd0078321774eac4180f84a2b039d25e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147687244'
---
{% tip %}

{% ifversion ghec %}

**ヒント:** {% data variables.product.prodname_emus %} を使うと、エンタープライズは ID プロバイダー (IdP) を介してそのメンバーの一意の個人アカウントをプロビジョニングできます。 詳細については、「[Enterprise Managed Users について](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)」を参照してください。 その他のユース ケースについては、個人用と業務用のリポジトリの両方を 1 つの個人アカウントのみで管理することをお勧めします。

{% else %}

**ヒント:** 個人用と業務用のリポジトリの両方を 1 つの個人アカウントのみで管理することをお勧めします。 

{% endif %}

{% endtip %}

{% warning %}

**警告:** 
- 組織とリポジトリのアクセス許可はアカウント間で移動できません。 削除するアカウントにアクセス許可が与えられている場合、組織の所有者またはリポジトリ管理者は、保持するアカウントを招待する必要があります。
- GitHub 提供の `noreply` メール アドレスで作成されたコミットはアカウント間で転送できません。 削除するアカウントで **[Keep my email address private]** オプションが使用された場合、削除するアカウントで作成されたコミットを、保持するアカウントに転送することはできません。

{% endwarning %}

1. 削除するアカウントから保持するアカウントに[リポジトリを転送](/articles/how-to-transfer-a-repository)します。 Issue、プルリクエスト、ウィキも移譲されます。 リポジトリが、残しておくアカウントに存在することを確認します。
2. 移動されたリポジトリのローカル クローンで[リモート URL を更新](/github/getting-started-with-github/managing-remote-repositories)します。
3. 使用しなくなった[アカウントを削除](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account)します。
4. 新しいアカウントに過去のコミットを属させるには、コミットの作成に使用したメール アドレスを、保持しているアカウントに追加します。 詳細については、「[自分の投稿がプロフィールに表示されないのはなぜですか?](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)」を参照してください。

## 参考資料

- "[{% data variables.product.prodname_dotcom %} アカウントの種類](/articles/types-of-github-accounts)"
