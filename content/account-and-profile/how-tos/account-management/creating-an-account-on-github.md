---
title: Creating an account on GitHub
shortTitle: Create an account
intro: Create a personal account to get started with {% data variables.product.github %}.
redirect_from:
  - /articles/signing-up-for-a-new-github-account
  - /github/getting-started-with-github/signing-up-for-a-new-github-account
  - /github/getting-started-with-github/signing-up-for-github/signing-up-for-a-new-github-account
  - /get-started/signing-up-for-github/signing-up-for-a-new-github-account
  - /articles/signing-up-for-github
  - /github/getting-started-with-github/signing-up-for-github
  - /get-started/signing-up-for-github
  - /get-started/quickstart/creating-an-account-on-github
  - /get-started/start-your-journey/creating-an-account-on-github
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
category:
  - Set up your account
contentType: how-tos
---

## About your personal account on {% data variables.product.github %}

To get started with {% data variables.product.prodname_dotcom_the_website %}, you need to a personal account and a verified email address.

When creating a free account on {% data variables.product.prodname_dotcom_the_website %}, you can also authenticate with Google or Apple - which are the supported social login providers.
For iOS users, even if you have enabled the setting "Hide My Email addresses" for your Apple account, using social login will result in creating a new {% data variables.product.github %} account.

{% data reusables.accounts.your-personal-account %}

Later, you can explore the different types of accounts that {% data variables.product.github %} offers, and decide if you need a billing plan. For more information, see [AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts) and [AUTOTITLE](/get-started/learning-about-github/githubs-plans).

> [!NOTE]
> The steps in this article don't apply to {% data variables.product.prodname_emus %} and users on {% data variables.product.prodname_ghe_server %}. If your {% data variables.product.github %} account has been created by your company, you can skip this article.{% ifversion ghes %} For information on how to create an account, contact your site administrator.{% endif %}

## Signing up for a new personal account

1. Navigate to [https://github.com/signup](https://github.com/signup?ref_product=github&ref_type=engagement&ref_style=text).
1. Alternatively, click on **Continue with Google** to sign up using social login.
1. Follow the prompts to create your personal account.

During sign up, you'll be asked to verify your email address. Without a verified email address, you won't be able to complete some basic {% data variables.product.github %} tasks, such as creating a repository.

Some enterprises create {% data variables.enterprise.prodname_managed_users %} for their users. You can't sign up for a personal account with an email address that's already verified for a {% data variables.enterprise.prodname_managed_user %}.

{% ifversion fpt or ghec %}If you're having problems verifying your email address, there are some troubleshooting steps you can take. For more information, see [AUTOTITLE](/account-and-profile/how-tos/email-preferences/troubleshooting-email-verification).{% endif %}

## Next steps

We strongly recommend that you configure 2FA for your account. 2FA is an extra layer of security that can help keep your account secure. For more information, see [AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

## Further reading

* [AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)
* [AUTOTITLE](/get-started/learning-about-github/githubs-plans)
