---
title: Organization の Codespaces の有効化
shortTitle: Enable Codespaces
intro: Organization 内のどのユーザが {% data variables.product.prodname_codespaces %} を使用できるかを制御できます。
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Permissions
- Administrator
ms.openlocfilehash: bd4518ef6db3887e504b13459abb5c6a682c8659
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145119926"
---
## <a name="about-enabling--data-variablesproductprodname_codespaces--for-your-organization"></a>Organization での {% data variables.product.prodname_codespaces %} の有効化について

Organization のオーナーは、Organization 内のどのユーザが Codespaces を作成および使用できるかを制御できます。

Organization で codespace を使用するには、次のようにする必要があります。

- ユーザーが少なくとも、codespace を使用するリポジトリへの[書き込みアクセス権](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)を持っていることを確認します。 
- [Organization 内のユーザーに対して {% data variables.product.prodname_codespaces %} を有効にします](#enable-codespaces-for-users-in-your-organization)。 選択したユーザーについて、または特定のユーザーに対してのみ、{% data variables.product.prodname_codespaces %} を許可することができます。
- [使用制限を設定します](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)
- 組織で IP アドレスの許可リストが有効になっていないことを確認します。 詳細については、{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} ドキュメントの{% else %}{% endif %}「[Organization に対する許可 IP アドレスを管理する](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)」を参照してください。

既定では、codespace はその作成元のリポジトリにのみアクセスできます。 Organization 内の codespace から、codespace の作成者がアクセスできる他の Organization のリポジトリにアクセスできるようにする場合は、[{% data variables.product.prodname_codespaces %} のアクセスとセキュリティの管理](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)に関するページを参照してください。

## <a name="enable--data-variablesproductprodname_codespaces--for-users-in-your-organization"></a>Organization 内のユーザーに対して {% data variables.product.prodname_codespaces %} を有効にする

{% ifversion fpt %} {% note %}

**注:** 証明済みの教育者または教師の場合、{% data variables.product.prodname_codespaces %} Education 特典を利用するには、{% data variables.product.prodname_classroom %} から {% data variables.product.prodname_codespaces %} を有効にする必要があります。 詳細については、「[GitHub Classroom で GitHub Codespaces を使用する](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#about-the-codespaces-education-benefit-for-verified-teachers)」を参照してください。

{% endnote %} {% endif %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. [User permissions] で、次のいずれかのオプションを選択します。

   * **[選択したユーザー]** : {% data variables.product.prodname_codespaces %} を使用する Organization の特定のメンバーを選択する場合。
   * **[すべてのメンバーに許可する]** : Organization のすべてのメンバーに {% data variables.product.prodname_codespaces %} の使用を許可する場合。
   * **[すべてのメンバーと外部のコラボレーターに許可する]** : Organization のすべてのメンバーと外部のコラボレーターに {% data variables.product.prodname_codespaces %} の使用を許可する場合。

   ![[ユーザーのアクセス許可] のラジオ ボタン](/assets/images/help/codespaces/org-user-permission-settings-outside-collaborators.png)

   {% note %}

   **注:** **[すべてのメンバーと外部のコラボレーターに許可する]** を選択すると、特定のリポジトリに追加されたすべての外部コラボレーターが {% data variables.product.prodname_codespaces %} を作成して使用できます。 Organization は、外部のコラボレーターによるすべての使用に対して課金されます。 外部コラボレーターの管理の詳細については、「[外部のコラボレーターについて](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization#about-outside-collaborators)」を参照してください。

   {% endnote %}

1. **[保存]** をクリックします。

## <a name="disabling--data-variablesproductprodname_codespaces--for-your-organization"></a>Organization の {% data variables.product.prodname_codespaces %} の無効化

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. [ユーザーのアクセス許可] で、 **[無効]** を選択します。

## <a name="setting-a-spending-limit"></a>利用限度の設定

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

アカウントの利用制限の管理と変更については、「[{% data variables.product.prodname_codespaces %} の利用制限の管理](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)」を参照してください。
