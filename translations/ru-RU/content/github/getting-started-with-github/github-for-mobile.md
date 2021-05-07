---
title: GitHub for mobile
intro: 'Triage, collaborate, and manage your work on {% data variables.product.product_name %} from your mobile device.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - Mobile
---

{% data reusables.mobile.ghes-release-phase %}

### About {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %}

{% data variables.product.prodname_mobile %} gives you a way to do high-impact work on {% data variables.product.product_name %} quickly and from anywhere. {% data variables.product.prodname_mobile %} is a safe and secure way to access your {% data variables.product.product_name %} data through a trusted, first-party client application.

With {% data variables.product.prodname_mobile %} you can:
- Manage, triage, and clear notifications
- Read, review, and collaborate on issues and pull requests
- Search for, browse, and interact with users, repositories, and organizations
- Receive a push notification when someone mentions your username

For more information about notifications for {% data variables.product.prodname_mobile %}, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-for-mobile)."

### Installing {% data variables.product.prodname_mobile %}

To install {% data variables.product.prodname_mobile %} for Android or iOS, see [{% data variables.product.prodname_mobile %}](https://github.com/mobile).

### Managing accounts

You can be simultaneously signed into mobile with one user account on {% data variables.product.prodname_dotcom_the_website %} and one user account on {% data variables.product.prodname_ghe_server %}.

{% data reusables.mobile.push-notifications-on-ghes %}

{% data variables.product.prodname_mobile %} may not work with your enterprise if you're required to access your enterprise over VPN.

#### Требования

You must install {% data variables.product.prodname_mobile %} 1.4 or later on your device to use {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}.

To use {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}, {% data variables.product.product_location %} must be version 3.0 or greater, and your enterprise owner must enable mobile support for your enterprise. For more information, see "[Release notes](/enterprise-server/admin/release-notes)" and "[Managing {% data variables.product.prodname_mobile %} for your enterprise](/admin/configuration/managing-github-for-mobile-for-your-enterprise)."

During the beta for {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}, you must be signed in with a user account on {% data variables.product.prodname_dotcom_the_website %}.

#### Adding, switching, or signing out of accounts

You can sign into mobile with a user account on {% data variables.product.product_location %}. At the bottom of the app, long-press {% octicon "person" aria-label="The person icon" %} **Profile**, then tap {% octicon "plus" aria-label="The plus icon" %} **Add Enterprise Account**. Follow the prompts to sign in.

After you sign into mobile with a user account on {% data variables.product.product_location %}, you can switch between the account and your account on  {% data variables.product.prodname_dotcom_the_website %}.  At the bottom of the app, long-press {% octicon "person" aria-label="The person icon" %} **Profile**, then tap the account you want to switch to.

If you no longer need to access data for your user account on {% data variables.product.product_location %} from {% data variables.product.prodname_mobile %}, you can sign out of the account. At the bottom of the app, long-press {% octicon "person" aria-label="The person icon" %} **Profile**, swipe left on the account to sign out of, then tap **Sign out**.

### Supported languages for {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} is available in the following languages.

- Английский
- Японский
- Brazilian Portuguese
- Simplified Chinese
- Испанский

If you configure the language on your device to a supported language, {% data variables.product.prodname_mobile %} will default to the language. You can change the language for {% data variables.product.prodname_mobile %} in {% data variables.product.prodname_mobile %}'s **Settings** menu.

### Managing Universal Links for {% data variables.product.prodname_mobile %} on iOS

{% data variables.product.prodname_mobile %} automatically enables Universal Links for iOS. When you tap any {% data variables.product.product_name %} link, the destination URL will open in {% data variables.product.prodname_mobile %} instead of Safari. For more information, see [Universal Links](https://developer.apple.com/ios/universal-links/) on the Apple Developer site.

To disable Universal Links, long-press any {% data variables.product.product_name %} link, then tap **Open**. Every time you tap a {% data variables.product.product_name %} link in the future, the destination URL will open in Safari instead of {% data variables.product.prodname_mobile %}.

To re-enable Universal Links, long-press any {% data variables.product.product_name %} link, then tap **Open in {% data variables.product.prodname_dotcom %}**.

### Sharing feedback

If you find a bug in {% data variables.product.prodname_mobile %}, you can email us at <a href="mailto:mobilefeedback@github.com">mobilefeedback@github.com</a>.

You can submit feature requests or other feedback for {% data variables.product.prodname_mobile %} [on GitHub Discussions](https://github.com/github/feedback/discussions?discussions_q=category%3A%22Mobile+Feedback%22).

### Opting out of beta releases for iOS

If you're testing a beta release of {% data variables.product.prodname_mobile %} for iOS using TestFlight, you can leave the beta at any time.

1. On your iOS device, open the TestFlight app.
2. Under "Apps", tap **{% data variables.product.prodname_dotcom %}**.
3. At the bottom of the page, tap **Stop Testing**.
