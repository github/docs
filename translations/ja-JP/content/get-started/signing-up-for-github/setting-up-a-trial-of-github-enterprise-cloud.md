---
title: GitHub Enterprise Cloud のトライアルを設定する
intro: '{% data variables.product.prodname_ghe_cloud %} を無料で試すことができます。'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Cloud trial
ms.openlocfilehash: a50aebc43ba5d674af132786ffb75e5fb3029aeb
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183989'
---
{% data reusables.enterprise.ghec-cta-button %}


## {% data variables.product.prodname_ghe_cloud %} について

{% data variables.product.prodname_ghe_cloud %} は、{% data variables.product.prodname_dotcom_the_website %} で共同作業を行う大企業またはチーム向けのプランです。 {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.organizations.about-organizations %} アカウントの詳細については、「[{% data variables.product.prodname_dotcom %} アカウントの種類](/get-started/learning-about-github/types-of-github-accounts)」を参照してください。

限られた機能を含む {% data variables.product.prodname_free_team %} を使用して、組織を無料で使用できます。 SAML シングル サインオン (SSO)、{% data variables.product.prodname_pages %} のアクセス制御、含まれる {% data variables.product.prodname_actions %} 分などの追加機能が必要な場合は、{% data variables.product.prodname_ghe_cloud %} にアップグレードできます。 {% data variables.product.prodname_ghe_cloud %} で使用できる機能の詳細な一覧については、[価格](https://github.com/pricing)に関するページを参照してください。

{% data variables.product.prodname_ghe_cloud %} の試用版を設定して、新規または既存の組織アカウントでこれらの追加機能を評価できます。

{% data variables.product.prodname_ghe_server %} のトライアルも利用できます。 詳細については、「[{% data variables.product.prodname_ghe_server %} の試用版を設定する](/articles/setting-up-a-trial-of-github-enterprise-server)」を参照してください。

{% data reusables.products.which-product-to-use %}

## {% data variables.product.prodname_ghe_cloud %} の試用版について

{% data variables.product.prodname_ghe_cloud %} を評価するための 30 日間の試用版を設定できます。 支払方法が必要な {% data variables.product.prodname_marketplace %} アプリを Organization に追加しない限り、トライアル期間中に支払方法を指定する必要はありません。 詳細については、「[{% data variables.product.prodname_marketplace %} の請求について](/enterprise-cloud@latest/articles/about-billing-for-github-marketplace/)」を参照してください。

トライアルには50シートが含まれています。 {% data variables.product.prodname_ghe_cloud %} を評価するためにより多くのシートが必要な場合は、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。 トライアルの終了時に、別のシート数を選択できます。

{% data reusables.saml.saml-accounts %}

詳細については、{% ifversion not ghec %}{% data variables.product.prodname_ghe_cloud %} ドキュメントの{% else %}「[SAML シングル サインオンによる ID とアクセスの管理について](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)」を参照してください。{% endif %}

{% data variables.product.prodname_emus %} は、{% data variables.product.prodname_ghe_cloud %} の無料試用版の一部ではありません。 {% data variables.product.prodname_emus %} に関心がある場合は、[{% data variables.product.prodname_dotcom %} の営業チーム](https://enterprise.github.com/contact)にお問い合わせください。

## {% data variables.product.prodname_ghe_cloud %} のトライアルを設定する

{% data variables.product.prodname_ghe_cloud %} を試す前に、個人アカウントにサインインする必要があります。 {% data variables.product.prodname_dotcom_the_website %} の個人アカウントをまだ持っていない場合、作成する必要があります。 詳細については、「[新しい {% data variables.product.prodname_dotcom %} アカウントにサインアップする](/free-pro-team@latest/articles/signing-up-for-a-new-github-account)」を参照してください。

1. [エンタープライズの {% data variables.product.prodname_dotcom %}](https://github.com/enterprise) に移動します。
1. **[無料試用版を開始する]** をクリックします。
   ![[無料試用版を開始する] ボタン](/assets/images/help/organizations/start-a-free-trial-button.png)
1. **[Enterprise Cloud]** をクリックします。
   ![[Enterprise Cloud] ボタン](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. プロンプトに従って試用版を構成します。

## {% data variables.product.prodname_ghe_cloud %} に触れる

試用版の設定後、Organization の [概要] タブで提案されているタスクに従い、{% data variables.product.prodname_ghe_cloud %} をいろいろ試すことができます。 以前にタスクを閉じていた場合、ページの上部にある **[提案されたタスクを始める]** をクリックしてそのタスクにもう一度アクセスできます。

![[提案されたタスクを始める] ボタン](/assets/images/help/organizations/suggested-tasks-button.png)

{% data reusables.docs.you-can-read-docs-for-your-product %}

{% data reusables.enterprise.best-practices %}

{% data reusables.products.product-roadmap %}

## トライアルを終了する

{% data variables.product.prodname_enterprise %} は、試用期間中いつでも購入できます。 {% data variables.product.prodname_enterprise %} を購入すると試用期間が終了し、50 シートの上限が削除され、支払いが開始されます。

{% data variables.product.prodname_enterprise %} を購入しない場合、試用版は 30 日間の期間が終了するまで継続します。 試用版を早期に終了することはできません。 試用版が終了すると、組織はダウングレードされます。 試用版に既存の組織を使用した場合、試用版の前に使用していた製品に組織がダウングレードされます。 試用版用に新しい組織を作成した場合、組織は {% data variables.product.prodname_free_team %} にダウングレードされます。 

組織は、プライベート リポジトリに対する {% data variables.product.prodname_pages %} といった高度な機能など、新しいプランに含まれていない機能にアクセスできなくなります。 アップグレードする予定がない場合は、高度な機能へのアクセスを失わないように、試用期間の終了前にリポジトリを公開してください。 詳細については、「[リポジトリの可視性を設定する](/articles/setting-repository-visibility)」を参照してください。

ダウングレードすると、試用期間中に構成された SAML 設定も無効になります。 その後 {% data variables.product.prodname_enterprise %} を購入すると、組織内のユーザーが認証できるように SAML 設定が再度有効になります。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %}
5. [{% data variables.product.prodname_ghe_cloud %} 無料試用版] で、 **[エンタープライズの購入]** または **[チームにダウングレード]** をクリックします。
  ![[エンタープライズの購入] ボタンと [チームにダウングレード] ボタン](/assets/images/help/organizations/finish-trial-buttons.png)
6. プロンプトに従って支払い方法を入力し、 **[送信]** をクリックします。
