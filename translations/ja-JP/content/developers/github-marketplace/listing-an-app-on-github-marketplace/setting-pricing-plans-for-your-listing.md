---
title: リストに対する価格プランの設定
intro: 'アプリケーションを{% data variables.product.prodname_marketplace %}上でリストする際に、アプリケーションを無料のサービスとして提供するか、アプリケーションを販売するかを選択できます。 アプリケーションを販売することを計画するなら、様々な機能レベルに対して異なる価格プランを作成できます。'
redirect_from:
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/pricing-payments-and-free-trials/setting-a-github-marketplace-listing-s-pricing-plan
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans
  - /apps/marketplace/pricing-payments-and-free-trials/about-github-marketplace-pricing-plans
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/managing-github-marketplace-listings/changing-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan
  - /marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan
  - /developers/github-marketplace/setting-pricing-plans-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Set listing pricing plans
ms.openlocfilehash: bc8d84a55c9597da051ab11752dd7e412761d5d7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089671'
---
## 価格プランの設定について

{% data variables.product.prodname_marketplace %}では、いくつかの種類の価格プランを提供しています。 詳細については、「[{% data variables.product.prodname_marketplace %} の価格プラン](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps)」を参照してください。

アプリケーションで有料プランを提供するには、アプリケーションがパブリッシャー検証プロセスを済ませたOrganizationの所有であり、かつ特定の条件を満たす必要があります。 詳細については、「[組織のパブリッシャー検証の申請](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)」および「[{% data variables.product.prodname_marketplace %} でのアプリケーションのリストのための要件](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)」を参照してください。

アプリケーションが有料プラン付きで既に公開されており、あなたが検証済みパブリッシャーである場合は、Marketplaceアプリケーション掲載設定の [Edit a pricing plan] ページから新しい有料プランを公開できます。 

![[Publish this plan] ボタン](/assets/images/marketplace/publish-this-plan-button.png)

アプリケーションが有料プラン付きで既に公開されており、あなたが検証済みパブリッシャーでない場合は、検証済みパブリッシャーになるまで新しい有料プランを公開できません。 検証済みパブリッシャーになる方法の詳細については、「[Organization のパブリッシャー検証プロセスを申請する](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)」を参照してください。

## 価格プランの保存について

価格プランは、ドラフトもしくは公開状態で保存できます。 {% data variables.product.prodname_marketplace %}リストを承認のためにサブミットしていないなら、リストが承認されるまでは公開されたプランはドラフトのプランと同じように機能し、{% data variables.product.prodname_marketplace %}上に表示されます。 ドラフトプランを利用すると、新しい価格プランを{% data variables.product.prodname_marketplace %}リストページ上で利用できるようにすることなく作成し、保存できます。 公開リスト上で価格プランを公開すると、顧客はすぐにそれを利用して購入できるようになります。 最大で10の価格プランを公開できます。

顧客への課金に関するガイドラインについては、「[顧客への課金](/developers/github-marketplace/billing-customers)」を参照してください。

## 価格プランの作成

{% data variables.product.prodname_marketplace %} リストの価格プランを作成するには、[{% data variables.product.prodname_marketplace %} リスト ページ](https://github.com/marketplace/manage)の左のサイドバーで **[プランと価格]** をクリックしてください。 詳細については、「[ドラフトの {% data variables.product.prodname_marketplace %} リストの作成](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/)」を参照してください。

**[新規ドラフト プラン]** をクリックすると、価格プランをカスタマイズできるフォームが表示されます。 価格プランを作成するには、以下のフィールドを設定しなければなりません。

- **プラン名** - 価格プランの名前は {% data variables.product.prodname_marketplace %} アプリケーションのランディング ページに表示されます。 価格名はカスタマイズして、プランのリソース、そのプランを利用する企業の規模、あるいはその他好きなことにあわせることができます。

- **価格モデル** - 価格モデルには、無料、定額、ユニット単位の 3 種類があります。 すべてのプランで、Marketplace APIからの新規の購入とキャンセルの処理が必要になります。 加えて、有料プランでは以下が必要です。

  - 月単位及び年単位でのサブスクリプションの価格を米ドルで設定しなければなりません。
  - アプリケーションはプランの変更イベントを処理しなければなりません。
  - 有料プランを持つリストを公開するには、検証をリクエストしなければなりません。
  - {% data reusables.marketplace.marketplace-pricing-free-trials %}

  詳細については、「[{% data variables.product.prodname_marketplace %} アプリの価格プラン](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps)」および「[アプリでの {% data variables.product.prodname_marketplace %} API の使用](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)」を参照してください。

- **利用対象** - {% data variables.product.prodname_marketplace %} の価格プランで利用できます。**個人アカウントと組織アカウント**、**個人アカウントのみ**、または **組織アカウントにのみ** 適用できます。 たとえば、価格プランがユニット単位であり、複数のシートを提供する場合、個人アカウントから組織内のユーザーにシートを割り当てる方法はないので、 **[組織アカウントのみ]** を選択します。

- **簡単な説明** - 価格プランの詳細に関する簡単な概要を書いてください。 この説明には、そのプランが意図している顧客の種類や、プランに含まれるリソースなどが含まれることがあります。

- **箇条書き** - 最大で 4 項目の箇条書きをして、価格プランに関する詳細を含めることができます。 この箇条書きでは、アプリケーションのユースケースを含めたり、プランに含まれるリソースや機能に関するさらなる詳細をリストしたりすることができます。

{% data reusables.marketplace.free-plan-note %}

## {% data variables.product.prodname_marketplace %}リストの価格プランの変更

{% data variables.product.prodname_marketplace %}のリストのための価格プランが必要なくなったり、プランの詳細を調整する必要が生じた場合、そのプランを削除できます。

![価格プランを削除するボタン](/assets/images/marketplace/marketplace_remove_this_plan.png)

{% data variables.product.prodname_marketplace %}にリスト済みのアプリケーションの価格プランを公開すると、そのプランは変更できなくなります。 その代わりに、その価格プランを削除して、新しいプランを作成しなければなりません。 削除された価格プランを購入済みの顧客は、オプトアウトして新しい価格プランに移行するまでは、そのプランを使い続けます。 価格プランの詳細については、「[{% data variables.product.prodname_marketplace %} の価格プラン](/marketplace/selling-your-app/github-marketplace-pricing-plans/)」を参照してください。

価格プランを削除すると、ユーザはそのプランを使ってアプリケーションを購入することはできなくなります。 削除されたプランの既存ユーザは、プランのサブスクリプションをキャンセルするまではそのプランに留まり続けます。

{% note %}

**注:** {% data variables.product.product_name %} は、削除された価格プランからユーザーを削除することはできません。 削除された価格プランから新しい価格プランへ、アップグレードもしくはダウングレードするようユーザに促すキャンペーンを実行できます。

{% endnote %}

価格プランを取り下げることなくGitHub Marketplaceの無料トライアルを無効化することはできますが、そうすると将来的にそのプランの無料トライアルを開始できなくなります。 価格プランに対する無料トライアルを無効にすることにした場合、サインアップ済みのユーザは無料トライアルを最後まで利用できます。

価格プランを終了した後には、削除した価格プランと同じ名前で新しい価格プランを作成できます。 たとえば、「Pro」価格プランがあるものの、定額料金を変更する必要がある場合、その「Pro」価格プランを削除し、更新された価格で新しい「Pro」価格プランを作成できます。 ユーザは、すぐに新しい価格プランで購入できるようになります。

あなたが検証済みパブリッシャーでない場合は、アプリケーションの価格プランを変更できません。 検証済みパブリッシャーになる方法の詳細については、「[Organization のパブリッシャー検証プロセスを申請する](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)」を参照してください。
