---
title: Adding an email address to your GitHub account
intro: '{% data variables.product.product_name %} allows you to add as many email addresses to your account as you like. If you set an email address in your local Git configuration, you will need to add it to your account settings in order to connect your commits to your account. For more information about your email address and commits, see "[Setting your commit email address](/articles/setting-your-commit-email-address/)."'
redirect_from:
  - /articles/adding-an-email-address-to-your-github-account
  - /github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Add an email address
---
{% ifversion fpt %}

{% note %}

**Notes**: 
  - {% data reusables.user_settings.no-verification-disposable-emails %}
  -  If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you cannot make changes to your email address on {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endnote %}

{% endif %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.add_and_verify_email %}
{% data reusables.user_settings.select_primary_email %}

## Further reading

- "[Managing email preferences](/articles/managing-email-preferences/)"
