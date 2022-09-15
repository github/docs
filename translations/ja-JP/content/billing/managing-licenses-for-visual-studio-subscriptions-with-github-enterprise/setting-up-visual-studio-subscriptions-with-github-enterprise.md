---
title: Visual Studio subscriptions with GitHub Enterpriseのセットアップ
intro: 'Teamの{% data variables.product.prodname_vs %}プランは、{% data variables.product.prodname_enterprise %}へのアクセスも提供できます。'
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Set up
ms.openlocfilehash: 644a106a749a8c8324b6a3e83dcaa72c8ad878b1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717958'
---
## {% data variables.product.prodname_vss_ghe %}のセットアップについて

{% data reusables.enterprise-accounts.vss-ghe-description %} 詳細については、「[{% data variables.product.prodname_vss_ghe %} について](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise)」を参照してください。

このガイドは、Teamが{% data variables.product.prodname_vs %}のサブスクライバーにライセンスを与え、{% data variables.product.prodname_enterprise %}を使い始める方法を紹介します。

ビデオの方がよい場合は、Microsoft Visual Studio の YouTube チャンネルの「[Setting up your {% data variables.product.prodname_enterprise %} licenses with {% data variables.product.prodname_vs %} subscriptions](https://www.youtube.com/watch?v=P_zBgp_BE_I)」を見ることができます。

## {% data variables.product.prodname_vss_ghe %}のロール

{% data variables.product.prodname_vss_ghe %}をセットアップする前に、この組み合わせ提供に対するロールを理解することが重要です。

| ロール | サービス | 説明 | 詳細情報 |
| :- | :- | :- | :- |
| **サブスクリプション管理者** | {% data variables.product.prodname_vs %}プラン | {% data variables.product.prodname_vs %}プランのライセンスを割り当てる人 | Microsoft Docs の「[管理者責任の概要](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities)」 |
| **サブスクライバー** | {% data variables.product.prodname_vs %}プラン | {% data variables.product.prodname_vs %}プランのライセンスを利用する人 | Microsoft Docs の [Visual Studio サブスクリプションのドキュメント](https://docs.microsoft.com/en-us/visualstudio/subscriptions/) |
| **Enterprise owner** | {% data variables.product.prodname_dotcom %} | {% data variables.product.product_location %} のエンタープライズの管理者である個人用アカウントを持つ人 | "[Enterprise におけるロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)" |
| **組織の所有者** | {% data variables.product.prodname_dotcom %} | {% data variables.product.product_location %} 上のチームのエンタープライズ内の組織の所有者である個人用アカウントを持つ人 | 「[組織のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)」 |
| **エンタープライズ メンバー** | {% data variables.product.prodname_dotcom %} | {% data variables.product.product_location %} 上のエンタープライズのメンバーである個人用アカウントを持つ人 | "[Enterprise におけるロール](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-members)"  |

## 前提条件

- Teamの{% data variables.product.prodname_vs %}プランに{% data variables.product.prodname_enterprise %}が含まれていなければなりません。 詳細については、{% data variables.product.prodname_vs %} Web サイトの「[{% data variables.product.prodname_vs %} サブスクリプションと特典](https://visualstudio.microsoft.com/subscriptions/)」と、Microsoft Docs の「[管理者責任の概要](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities)」を参照してください。
 
 - Teamは{% data variables.product.product_location %}上にEnterpriseを持っていなければなりません。 TeamがEnterpriseを持っているか分からない場合は、{% data variables.product.prodname_dotcom %}管理者に連絡してください。 Teamの誰が{% data variables.product.prodname_dotcom %}に責任を負っているかがはっきりしない場合は、{% data variables.contact.contact_enterprise_sales %}にお問い合わせください。 詳細については、「[Enterprise アカウントについて](/admin/overview/about-enterprise-accounts)」を参照してください。

## {% data variables.product.prodname_vss_ghe %} の設定

{% data variables.product.prodname_vss_ghe %}をセットアップするには、Teamのメンバーが以下のタスクを完了しなければなりません。

すべてのロールを持っていることから、1人でこれらのタスクを完了することもできる場合もありますが、複数人でタスクを協働してやらなければならないかもしれません。 詳細については、「[{% data variables.product.prodname_vss_ghe %} のロール](#roles-for-visual-studio-subscriptions-with-github-enterprise)」を参照してください。

1. Enterpriseオーナーは、{% data variables.product.product_location %}上のEnterpriseに少なくとも1つのOrganizationを作成しなければなりません。 詳細については、「[Adding organizations to your enterprise](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)」 (Enterprise への Organization の追加) を参照してください。

1. プランの管理者は{% data variables.product.prodname_vs %}のライセンスを{% data variables.product.prodname_vss_admin_portal_with_url %}内のサブスクライバーに割り当てなければなりません。 詳細については、Microsoft Docsの「[{% data variables.product.prodname_vs %} サブスクリプション管理者ポータルの概要](https://docs.microsoft.com/en-us/visualstudio/subscriptions/using-admin-portal)」と、「[{% data variables.product.prodname_vs %} サブスクリプション管理者ポータルで {% data variables.product.prodname_vs %} ライセンスを割り当てる](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-license)」を参照してください。

1. あるいはプランの管理者が{% data variables.product.prodname_enterprise %}をプランに追加する前に{% data variables.product.prodname_vs %}のサブスクライバーにライセンスを割り当てている場合、プランの管理者はサブスクライバーを{% data variables.product.prodname_vs %}管理ポータルで組み合わせ提供に移動させることができます。 詳細については、Microsoft Docs の「[{% data variables.product.prodname_enterprise %} を使用して {% data variables.product.prodname_vs %} サブスクリプションを管理する](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-github#moving-to-visual-studio-with-github-enterprise)」を参照してください。

1. プランの管理者がメール通知を無効化していないなら、サブスクライバーは2つの確認メールを受信します。 詳細については、Microsoft Docs の「[{% data variables.product.prodname_enterprise %} を使用した {% data variables.product.prodname_vs %} サブスクリプション](https://docs.microsoft.com/en-us/visualstudio/subscriptions/access-github#what-is-the-visual-studio-subscription-with-github-enterprise-setup-process)」を参照してください。

1. Organizationオーナーは、サブスクライバーをステップ1の{% data variables.product.product_location %}のOrganizationに招待しなければなりません。 サブスクライバーは、{% data variables.product.prodname_dotcom_the_website %} の既存の個人アカウントで招待を受け入れるか、新しいアカウントを作成できます。 Organizationに参加すると、サブスクライバーはEnterpriseのメンバーになります。 詳細については、「[組織に参加するようユーザーを招待する](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)」を参照してください。

   {% tip %}

   **ヒント**:

   - 必須ではありませんが、Organizationのオーナーはサブスクライバーのユーザプライマリ名（UPN）で使われているのと同じメールアドレスに招待を送ることをおすすめします。 {% data variables.product.product_location %}上のメールアドレスがサブスクライバーのUPNと一致すれば、他のEnterpriseがサブスクライバーのライセンスを要求しないようにできます。
   - サブスクライバーが {% data variables.product.product_location %} 上の既存の個人用アカウントで組織への招待を受諾した場合は、サブスクライバーが {% data variables.product.prodname_vs %} で使うメール アドレスを {% data variables.product.product_location %} 上の個人用アカウントに追加することをお勧めします。 詳細については、「[{% data variables.product.prodname_dotcom %} アカウントへのメール アドレスの追加](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)」を参照してください。
   - Organizationのオーナーが大量のサブスクライバーを招待しなければならないのであれば、スクリプトでこのプロセスを加速できるかもしれません。 詳細については、`github/platform-samples` リポジトリの[サンプル PowerShell スクリプト](https://github.com/github/platform-samples/blob/master/api/powershell/invite_members_to_org.ps1)を参照してください。

    {% endtip %}

Teamのサブスクライバーのための{% data variables.product.prodname_vss_ghe %}がセットアップできた後、Enterpriseのオーナーは{% data variables.product.product_location %}上のライセンス情報をレビューできます。 詳細については、「[エンタープライズ アカウントのプランおよび利用状況を表示する](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)」を参照してください。

## 参考資料

- 「[{% data variables.product.prodname_ghe_cloud %} の概要](/get-started/onboarding/getting-started-with-github-enterprise-cloud)」
