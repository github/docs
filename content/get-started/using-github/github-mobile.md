---
title: GitHub Mobile
intro: 'Triage, collaborate, and manage your work on {% data variables.product.product_name %} from your mobile device.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Mobile
redirect_from:
  - /get-started/using-github/github-for-mobile
  - /github/getting-started-with-github/github-for-mobile
  - /github/getting-started-with-github/using-github/github-for-mobile
---

## About {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %}

{% data variables.product.prodname_mobile %} gives you a way to do high-impact work on {% data variables.product.product_name %} quickly and from anywhere. {% data variables.product.prodname_mobile %} is a safe and secure way to access your {% data variables.product.product_name %} data through a trusted, first-party client application.

With {% data variables.product.prodname_mobile %} you can:

- Manage, triage, and clear notifications
- Read, review, and collaborate on issues and pull requests
- Edit files in pull requests
- Search for, browse, and interact with users, repositories, and organizations
- Receive a push notification when someone mentions your username
{% ifversion mobile-code-search %}- Search through code in a specific repository{% endif %}
{% ifversion fpt or ghec %}- Secure your GitHub.com account with two-factor authentication
- Verify your sign in attempts on unrecognized devices{% endif %}
{% ifversion copilot-chat-for-mobile %}- Use {% data variables.product.prodname_copilot_chat %} to ask and receive answers to coding-related questions{% endif %}

The following documentation contains more information about using {% data variables.product.company_short %} features on {% data variables.product.prodname_mobile %}.

- For more information about notifications for {% data variables.product.prodname_mobile %}, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#enabling-push-notifications-with-github-mobile)."
{% ifversion mobile-code-search %}- For more information about using {% data variables.product.prodname_dotcom %} code search on {% data variables.product.prodname_mobile %}, see "[AUTOTITLE](/search-github/github-code-search/using-github-code-search#using-github-code-search-on-github-mobile)."{% endif %}
{% ifversion fpt or ghec %}- For more information on two-factor authentication using {% data variables.product.prodname_mobile %}, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile) and [Authenticating using {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication#verifying-with-github-mobile)." {% endif %}
{% ifversion copilot-chat-for-mobile %}- For more information about using {% data variables.product.prodname_copilot_mobile %}, see "[AUTOTITLE](/copilot/github-copilot-chat/using-github-copilot-chat-in-github-mobile)."{% endif %}

## Installing {% data variables.product.prodname_mobile %}

To install {% data variables.product.prodname_mobile %} for Android or iOS, see [{% data variables.product.prodname_mobile %}](https://github.com/mobile).

## Managing accounts

You can be simultaneously signed into mobile with multiple accounts on {% data variables.product.prodname_dotcom_the_website %} and on {% data variables.product.prodname_ghe_server %}. For more information about our different products, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

{% data reusables.mobile.push-notifications-on-ghes %}

{% data variables.product.prodname_mobile %} may not work with your enterprise if you're required to access your enterprise over VPN.

### Prerequisites

You must install {% data variables.product.prodname_mobile %} 1.4 or later on your device to use {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}.

To use {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}, {% data variables.location.product_location %} must be version 3.0 or greater, and your enterprise owner must enable mobile support for your enterprise. For more information, see {% ifversion ghes %}"[AUTOTITLE](/admin/release-notes)" and {% endif %}"[Managing {% data variables.product.prodname_mobile %} for your enterprise]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-your-enterprise/managing-github-mobile-for-your-enterprise){% ifversion not ghes %}" in the {% data variables.product.prodname_ghe_server %} documentation.{% else %}."{% endif %}

During the beta for {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}, you must be signed in with a personal account on {% data variables.product.prodname_dotcom_the_website %}.

### Adding, switching, or signing out of accounts

You can sign into mobile with any {% data variables.product.company_short %} account, either on {% data variables.product.prodname_dotcom_the_website %} or on {% data variables.product.prodname_ghe_server %}. At the bottom of the app, long-press {% octicon "person" aria-hidden="true" %} **Profile**, then tap {% octicon "plus" aria-hidden="true" %} **Add Enterprise Account**. Follow the prompts to sign in.

After signing in with an account on {% data variables.product.prodname_ghe_server %}, you can switch between any other accounts you're currently logged into within the app. At the bottom of the app, long-press {% octicon "person" aria-hidden="true" %} **Profile**, then tap the account you want to switch to.

If you no longer need to access your account on {% ifversion ghec or ghes%}{% data variables.product.prodname_ghe_server %} from{% endif %} {% data variables.product.prodname_mobile %}, you can sign out of the account. At the bottom of the app, long-press {% octicon "person" aria-hidden="true" %} **Profile**, swipe left on the account to sign out of, then tap **Sign out**.

Alternatively, once logged into one account, access the account switcher to log into other accounts or log out of an existing account by navigating to the {% octicon "person" aria-hidden="true" %} **Profile** tab, then tapping {% octicon "gear" aria-hidden="true" %}, and then tapping **Manage Accounts**.

## Supported languages for {% data variables.product.prodname_mobile %}

{% data variables.product.prodname_mobile %} is available in the following languages.

- English
- Japanese
- Brazilian Portuguese
- Simplified Chinese
- Spanish
- German
- Korean

If you configure the language on your device to a supported language, {% data variables.product.prodname_mobile %} will default to the language. You can change the language for {% data variables.product.prodname_mobile %} in {% data variables.product.prodname_mobile %}'s **Settings** menu.

## Managing Universal Links for {% data variables.product.prodname_mobile %} on iOS

{% data variables.product.prodname_mobile %} automatically enables Universal Links for iOS. When you tap any {% data variables.product.product_name %} link, the destination URL will open in {% data variables.product.prodname_mobile %} instead of Safari. For more information, see [Universal Links](https://developer.apple.com/ios/universal-links/) on the Apple Developer site.

To disable Universal Links, long-press any {% data variables.product.product_name %} link, then tap **Open**. Every time you tap a {% data variables.product.product_name %} link in the future, the destination URL will open in Safari instead of {% data variables.product.prodname_mobile %}.

To re-enable Universal Links, long-press any {% data variables.product.product_name %} link, then tap **Open in {% data variables.product.prodname_dotcom %}**.

## Sharing feedback

You can submit feature requests or other feedback for {% data variables.product.prodname_mobile %} on [{% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/mobile).

## Opting out of beta releases for iOS

If you're testing a beta release of {% data variables.product.prodname_mobile %} for iOS using TestFlight, you can leave the beta at any time.

1. On your iOS device, open the TestFlight app.
1. Under "Apps", tap **{% data variables.product.prodname_dotcom %}**.
1. At the bottom of the page, tap **Stop Testing**.
