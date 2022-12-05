---
title: Organization での GitHub Codespaces の有効化
shortTitle: 'Enable {% data variables.product.prodname_codespaces %}'
intro: '組織内のどのユーザーが組織の負担で {% data variables.product.prodname_github_codespaces %} を使用できるかを制御できます。'
permissions: 'To alter an organization''s billing settings, you must be an organization owner.'
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
  - /codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Billing
  - Administrator
ms.openlocfilehash: 992d744e04ae00db4d760b59a9d08d1700846998
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158902'
---
## Organization での {% data variables.product.prodname_github_codespaces %} の有効化について

組織の所有者は、組織内のどのユーザーが組織の負担で codespace を作成および使用できるかを制御できます。 価格について詳しくは、「[{% data variables.product.prodname_github_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)」をご覧ください。

リポジトリに変更をプッシュできるか、リポジトリをフォークできる人だけがそのリポジトリの codespace を作成できます。 組織によって所有されるリポジトリの codespace をユーザーが作成できるようにするには、次の手順を実行する必要があります。

- ユーザーが少なくとも、codespace を使用するリポジトリへの書き込みアクセス権を持っていることを確認します。 詳細については、「[リポジトリへのアクセス権を持つ Team と人を管理する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)」を参照してください。
- 組織で IP アドレスの許可リストが有効になっていないことを確認します。 詳細については、{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} ドキュメントの{% else %}{% endif %}「[Organization に対する許可 IP アドレスを管理する](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)」を参照してください。

組織に課金される codespace をユーザーが作成できるようにするには、次の手順を実行する必要があります。

- [使用制限を設定します](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- [組織に課金される codespace を作成できるユーザーを選ぶ](#choose-who-can-create-codespaces-that-are-billed-to-your-organization)

{% ifversion fpt %} {% note %}

**注:** 証明済みの教育者または教師の場合、{% data variables.product.prodname_github_codespaces %} Education 特典を利用するには、{% data variables.product.prodname_classroom %} から {% data variables.product.prodname_codespaces %} を有効にする必要があります。 詳細については、「[{% data variables.product.prodname_github_codespaces %} を {% data variables.product.prodname_classroom %} で使う](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)」を参照してください。

{% endnote %} {% endif %}

既定では、codespace はその作成元のリポジトリにのみアクセスできます。 組織内の codespace から、codespace の作成者がアクセスできる他の組織のリポジトリにアクセスできるようにする場合は、「[Organization の codespace に対するリポジトリ アクセスを管理する](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)」を参照してください。

## 組織に課金される codespace を作成できるユーザーを選ぶ

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. [課金] をクリックし、以下のオプションの 1 つを選びます。

   * **無効** - 組織は codespace の使用に対して課金されません。 組織のリポジトリ用に作成された {% data variables.product.prodname_codespaces %} では、作成した個々のユーザーに対して課金されます。
   * **選択したメンバー** - 選択したメンバーによって組織のリポジトリに対して作成された {% data variables.product.prodname_codespaces %} では、組織に対して課金されます。
   * **すべてのメンバー** - 組織のメンバーによって組織のリポジトリに対して作成された {% data variables.product.prodname_codespaces %} では、組織に対して課金されます。
   * **すべてのメンバーと外部コラボレーター** - 組織のメンバーと外部コラボレーターによって組織のリポジトリに対して作成された {% data variables.product.prodname_codespaces %} では、組織に対して課金されます。

   ![[課金] のラジオ ボタン](/assets/images/help/codespaces/codespaces-org-billing-settings.png)

   {% note %}

   **注:** **[すべてのメンバーと外部のコラボレーターに許可する]** を選ぶと、特定のリポジトリに追加されたすべての外部コラボレーターがこれらのリポジトリの {% data variables.product.prodname_codespaces %} を作成して使用でき、組織はこの使用に対して課金されます。 外部コラボレーターの管理の詳細については、「[外部のコラボレーターについて](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)」を参照してください。

   {% endnote %}

1. **[保存]** をクリックします。
1. **[選択したメンバー]** を選んだ場合は、選ぶユーザーの名前を入力するための入力ボックスが表示されます。

   ![ユーザーを選ぶための入力ボックス](/assets/images/help/codespaces/codespaces-org-billing-add-users.png)

## Organization の {% data variables.product.prodname_codespaces %} の無効化

組織に課金できる codespace の作成と使用を防ぐことができます。

{% data reusables.codespaces.codespaces-disabling-org-billing %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. [課金] で、 **[無効]** を選びます。

## 利用限度の設定

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

アカウントの利用制限の管理と変更については、「[{% data variables.product.prodname_codespaces %} の利用制限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)」を参照してください。
