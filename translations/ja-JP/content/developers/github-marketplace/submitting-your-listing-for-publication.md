---
title: 公開のためのリストのサブミット
intro: '{% data variables.product.prodname_dotcom %}コミュニティに利用してもらうためにリストをサブミットできます。'
redirect_from:
  - /marketplace/listing-on-github-marketplace/submitting-your-listing-for-review
  - /developers/github-marketplace/submitting-your-listing-for-review
versions:
  free-pro-team: '*'
---



アプリケーションのリストを完成させると、検証ありもしくは検証なしでのリストの公開をリクエストできる2つのボタンが表示されます。 「検証なしでの公開」のための**リクエスト**ボタンは、リスト中で有料プランを公開している場合、無効化されています。

![未検証及び検証済みリクエストボタン](/assets/images/marketplace/marketplace-request-button.png)

{% data reusables.marketplace.launch-with-free %}

レビューのためにリストをサブミットすると、オンボーディングの専門家が追加情報をもって連絡してきます。

リストの作成とサブミットのプロセスの概要については、「[{% data variables.product.prodname_marketplace %}について](/developers/github-marketplace/about-github-marketplace#publishing-an-app-to-github-marketplace)」を参照してください。

### 検証付きでの公開のための前提条件

リストの検証をリクエストする前に、{% data variables.product.prodname_marketplace %}の支払いフローとwebhookをアプリケーションに統合しなければなりません。 詳しい情報については「[アプリケーションでの{% data variables.product.prodname_marketplace %} APIの利用](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)」を参照してください。

リストの要件を満たしており、{% data variables.product.prodname_marketplace %} APIと統合してあれば、先へ進んでリストをサブミットしてください。 詳しい情報については、「[アプリケーションを載せるための要件](/developers/github-marketplace/requirements-for-listing-an-app)」を参照してください。

{% data reusables.marketplace.app-transfer-to-org-for-verification %} その方法に関する情報としては、以下の「[サブミットの前にアプリケーションをOrganizationに移譲する](#transferring-an-app-to-an-organization-before-you-submit)」を参照してください。

### サブミットの前にアプリケーションをOrganizationに移譲する

ユーザアカウントが所有するアプリケーションを販売することはできません。 検証済みの作者となっているOrganizationか、アプリケーションのリストの検証をリクエストできるOrganizationに、アプリケーションを移譲しなければなりません。 詳細については以下を参照してください。

1. 「[Organizationを最初から作成する](/github/setting-up-and-managing-organizations-and-teams/creating-a-new-organization-from-scratch)」

1. 「[GitHub Appの所有権の移譲](/developers/apps/transferring-ownership-of-a-github-app)」あるいは「[OAuth Appの所有権の移譲](/developers/apps/transferring-ownership-of-an-oauth-app)」
