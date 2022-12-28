---
title: GitHub プランをダウングレードする
intro: '{% data variables.location.product_location %} のいずれの種類のアカウントでも、いつでもサブスクリプションをダウングレードできます。'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-your-github-subscription
  - /articles/downgrading-your-personal-account-s-billing-plan
  - /articles/how-do-i-cancel-my-account
  - /articles/downgrading-a-user-account-to-free
  - /articles/removing-paid-seats-from-your-organization
  - /articles/downgrading-your-organization-s-paid-seats
  - /articles/downgrading-your-organization-s-billing-plan
  - /articles/downgrading-an-organization-with-per-seat-pricing-to-free
  - /articles/downgrading-an-organization-with-per-repository-pricing-to-free
  - /articles/downgrading-your-organization-to-free
  - /articles/downgrading-your-organization-from-the-business-plan-to-the-team-plan
  - /articles/downgrading-your-organization-from-github-business-cloud-to-the-team-plan
  - /articles/downgrading-your-github-billing-plan
  - /articles/downgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/downgrading-your-github-subscription
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Downgrades
  - Organizations
  - Repositories
  - User account
shortTitle: Downgrade subscription
ms.openlocfilehash: e302fb715fc2937c7ed056b813b073a66a7cc1fa
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163785'
---
## {% data variables.product.product_name %}プランのダウングレード

個人アカウントまたは Organization のサブスクリプションをダウングレードした場合、価格とアカウント機能の変更は次の請求日から反映されます。 有料の個人アカウントまたは Organization サブスクリプションを変更しても、他の有料 {% data variables.product.prodname_dotcom %} 機能のサブスクリプションや支払いには影響しません。 詳細については、「[How does upgrading or downgrading affect the billing process? (アップグレードまたはダウングレードは課金プロセスにどのように影響しますか?)](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)」を参照してください。

## 個人アカウントのサブスクリプションをダウングレードする

個人アカウントを {% data variables.product.prodname_pro %} から {% data variables.product.prodname_free_user %} にダウンロードする場合、そのアカウントは、非公開リポジトリの高度なコード レビュー ツールへのアクセスを失います。 {% data reusables.gated-features.more-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.billing_plans %}
1. [現在のプラン] の **[編集]** ドロップダウンを使用して、 **[無料にダウングレード]** をクリックします。
  ![[無料にダウングレード] ボタン](/assets/images/help/billing/downgrade-to-free.png)
5. 次回の請求日に、ご自分の個人アカウントでアクセスできなくなる機能に関する情報を読み、 **[わかりました。ダウングレードを続けます]** をクリックします。
  ![[ダウングレードを続ける] ボタン](/assets/images/help/billing/continue-with-downgrade.png)

プライベートリポジトリに {% data variables.product.prodname_pages %} サイトを公開し、カスタムドメインを追加した場合、ドメイン乗っ取りのリスクを回避するため、{% data variables.product.prodname_pro %} から {% data variables.product.prodname_free_user %} にダウングレードする前に DNS レコードを削除または更新します。 詳細については、「[{% data variables.product.prodname_pages %} サイトのカスタム ドメインを管理する](/articles/managing-a-custom-domain-for-your-github-pages-site)」を参照してください。

## Organizationのプランをダウングレードする

{% data reusables.dotcom_billing.org-billing-perms %}

Organizationを{% data variables.product.prodname_team %}から{% data variables.product.prodname_free_team %}にダウングレードした場合、そのアカウントはチームの高度なコラボレーションおよび管理ツールにはアクセスできなくなります。

Organizationを{% data variables.product.prodname_ghe_cloud %}から{% data variables.product.prodname_team %}または{% data variables.product.prodname_free_team %}にダウングレードした場合、そのアカウントは高度なセキュリティ、コンプライアンス、およびデプロイメントコントロールにアクセスできなくなります。 {% data reusables.gated-features.more-info %}



{% note %}

**注:** 
  - 組織がエンタープライズ アカウントによって所有されている場合、課金を組織レベルで管理することはできません。 ダウングレードするには、まずエンタープライズ アカウントから組織を削除する必要があります。 詳しくは、「[エンタープライズから組織を削除する](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)」を参照してください。
  - 現在 {% data variables.product.prodname_ghe_cloud %} の試用版を使っていて、試用版の終了前に {% data variables.product.prodname_enterprise %} を購入されない場合は、ご自分の組織は自動的に {% data variables.product.prodname_free_team %} または {% data variables.product.prodname_team %} にダウングレードされます。 詳細については、「[{% data variables.product.prodname_ghe_cloud %} の試用版を設定する](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial)」を参照してください。

{% endnote %}

{% data reusables.organizations.billing-settings %}
1. [現在のプラン] の下で、 **[編集]** ドロップダウンから必要なダウングレード オプションをクリックします。
  ![[ダウングレード] ボタン](/assets/images/help/billing/downgrade-option-button.png) {% data reusables.dotcom_billing.confirm_cancel_org_plan %}

## 従来のリポジトリ単位の支払いを使用しているOrganizationのプランをダウングレードする

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.dotcom_billing.switch-legacy-billing %} 詳しくは、「[Organization をリポジトリごとからユーザーごとに切り替える](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#switching-your-organization-from-per-repository-to-per-user-pricing)」をご覧ください。

{% data reusables.organizations.billing-settings %}
5. [サブスクリプション] の [編集] ドロップダウンから **[プランの編集]** をクリックします。
    ![[プランの編集] ドロップダウン](/assets/images/help/billing/edit-plan-dropdown.png)
1. [請求/プラン] で、変更するプランの横にある **[ダウングレード]** をクリックします。
    ![ダウングレード ボタン](/assets/images/help/billing/downgrade-plan-option-button.png)
1. アカウントをダウングレードする理由を入力し、 **[プランのダウングレード]** をクリックします。
    ![ダウングレードの理由を入力するテキストボックスと [Downgrade] ボタン](/assets/images/help/billing/downgrade-plan-button.png)

## Organization から有料シートを削除する

Organization が使用する有料シート数を減らすには、Organization からメンバーを削除するか、メンバーを外部コラボレーターに変更してアクセス権をパブリックリポジトリに限定する方法があります。 詳細については、次を参照してください。
- 「[Organization からメンバーを削除する](/articles/removing-a-member-from-your-organization)」
- 「[Organization メンバーを外部コラボレーターに変換する](/articles/converting-an-organization-member-to-an-outside-collaborator)」
- [Organization のリポジトリへの個人のアクセスを管理する](/articles/managing-an-individual-s-access-to-an-organization-repository)

{% data reusables.organizations.billing-settings %}
1. [現在のプラン] の **[編集]** ドロップダウンを使用して、 **[シートの削除]** をクリックします。
  ![[シートの削除] ドロップダウン](/assets/images/help/billing/remove-seats-dropdown.png)
1. [Remove seats] の下でダウングレードするシート数を選択します。
  ![[シートの削除] オプション](/assets/images/help/billing/remove-seats-amount.png)
1. 次回請求日に新しい支払いに関する情報を確認し、 **[シートの削除]** をクリックします。
  ![[シートの削除] ボタン](/assets/images/help/billing/remove-seats-button.png)

## 参考資料

- 「[{% data variables.product.prodname_dotcom %} の製品](/articles/github-s-products)
- 「[アップグレードやダウングレードは支払い処理にどのように影響しますか?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)」
- "[{% data variables.product.prodname_dotcom %} の支払いについて](/articles/about-billing-on-github)"
- "[ユーザーごとの価格付けについて](/articles/about-per-user-pricing)"
