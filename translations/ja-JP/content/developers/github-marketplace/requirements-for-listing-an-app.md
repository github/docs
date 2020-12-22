---
title: アプリケーションのリストのための要件
intro: 'Apps on {% data variables.product.prodname_marketplace %} must meet the requirements outlined on this page before the listing can be published.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/listing-apps-on-github-marketplace/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started-with-github-marketplace-listings/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/requirements-for-listing-an-app-on-github-marketplace/
  - /apps/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/
  - /marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace
versions:
  free-pro-team: '*'
---

<!--UI-LINK: Displayed as a link on the https://github.com/marketplace/new page.-->

The requirements for listing an app on {% data variables.product.prodname_marketplace %} vary according to whether you want to offer a free or a paid app.

### Requirements for all {% data variables.product.prodname_marketplace %} listings

All listings on {% data variables.product.prodname_marketplace %} should be for tools that provide value to the {% data variables.product.product_name %} community. When you submit your listing for publication, you must read and accept the terms of the "[{% data variables.product.prodname_marketplace %} Developer Agreement](/articles/github-marketplace-developer-agreement/)."

#### User experience requirements for all apps

All listings should meet the following requirements, regardless of whether they are for a free or paid app.

- Listings must not actively persuade users away from {% data variables.product.product_name %}.
- Listings must include valid contact information for the publisher.
- Listings must have a relevant description of the application.
- Listings must specify a pricing plan.
- アプリケーションは顧客に価値を提供し、認証以外の方法でプラットフォームと統合されていなければなりません
- アプリケーションケーションは{% data variables.product.prodname_marketplace %}で公開されなければならず、ベータや招待のみでの利用であってはなりません。
- Apps must have webhook events set up to notify the publisher of any plan changes or cancellations using the {% data variables.product.prodname_marketplace %} API. For more information, see "[Using the {% data variables.product.prodname_marketplace %} API in your app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)."

For more information on providing a good customer experience, see "[Customer experience best practices for apps](/developers/github-marketplace/customer-experience-best-practices-for-apps)."

#### Brand and listing requirements for all apps

- Apps that use GitHub logos must follow the {% data variables.product.company_short %} guidelines. For more information, see "[{% data variables.product.company_short %} Logos and Usage](https://github.com/logos)."
- アプリケーションは、「[{% data variables.product.prodname_marketplace %}リストの説明の作成](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)」にある推奨事項を満たすロゴ、機能カード、スクリーンショット画像を持っていなければなりません。
- リストには、十分に書かれた文法上の誤りがない説明が含まれていなければなりません。 リストの作成のガイダンスとしては、「[{% data variables.product.prodname_marketplace %}リストの説明の作成](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)」を参照してください。

To protect your customers, we recommend that you also follow security best practices. For more information, see "[Security best practices for apps](/developers/github-marketplace/security-best-practices-for-apps)."

### Considerations for free apps

{% data reusables.marketplace.free-apps-encouraged %}

### Requirements for paid apps

In addition to the requirements for all apps above, each app that you offer as a paid service on {% data variables.product.prodname_marketplace %} must also meet the following requirements:

- {% data variables.product.prodname_github_app %}は、最低でも100個のインストールが必要です。
- {% data variables.product.prodname_oauth_app %}は最低200ユーザが必要です。
- All paid apps must handle {% data variables.product.prodname_marketplace %} purchase events for new purchases, upgrades, downgrades, cancellations, and free trials. For more information, see "[Billing requirements for paid apps](#billing-requirements-for-paid-apps)" below.
- Publishing organizations must have a verified domain and must enable two-factor authentication. For more information, see "[Requiring two-factor authentication in your organization](/github/setting-up-and-managing-organizations-and-teams/requiring-two-factor-authentication-in-your-organization.")

When you are ready to publish the app on {% data variables.product.prodname_marketplace %} you must request verification for the listing.

{% note %}

The verification process is open to organizations. {% data reusables.marketplace.app-transfer-to-org-for-verification %} For information on how to do this, see: "[Submitting your listing for publication](/developers/github-marketplace/submitting-your-listing-for-publication#transferring-an-app-to-an-organization-before-you-submit)."

{% endnote %}

### Billing requirements for paid apps

Your app does not need to handle payments but does need to use {% data variables.product.prodname_marketplace %} purchase events to manage new purchases, upgrades, downgrades, cancellations, and free trials. For information about how integrate these events into your app, see "[Using the {% data variables.product.prodname_marketplace %} API in your app](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)."

Using GitHub's billing API allows customers to purchase an app without leaving GitHub and to pay for the service with the payment method already attached to their {% data variables.product.product_name %} account.

- アプリケーションは、有料のサブスクリプションの購入について、月次及び年次の支払いをサポートしなければなりません。
- リストは、無料及び有料プランの任意の組み合わせを提供できます。 無料プランはオプションですが、推奨されます。 詳しい情報については「[{% data variables.product.prodname_marketplace %}リストの価格プランの設定](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)」を参照してください。
