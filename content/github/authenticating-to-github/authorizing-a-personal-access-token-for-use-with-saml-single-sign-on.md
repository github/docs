---
title: Authorizing a personal access token for use with SAML single sign-on
intro: 'To use a personal access token with an organization that uses SAML single sign-on (SSO), you must first authorize the token.'
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization/
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  free-pro-team: '*'
---

You can authorize an existing personal access token, or [create a new personal access token](/github/authenticating-to-github/creating-a-personal-access-token) and then authorize it.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
3. Next to the token you'd like to authorize, click **Enable SSO** or **Disable SSO**.
   ![SSO token authorize button](/assets/images/help/settings/sso-allowlist-button.png)
4. Find the organization you'd like to authorize the access token for.
4. Click **Authorize**.
   ![Token authorize button](/assets/images/help/settings/token-authorize-button.png)

### Further reading

- "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)"
- "[About authentication with SAML single sign-on](/articles/about-authentication-with-saml-single-sign-on)"
git format-patch [-k] [(-o|--output-directory) <dir> | --stdout]
		   [--no-thread | --thread[=<style>]]
		   [(--attach|--inline)[=<boundary>] | --no-attach]
		   [-s | --signoff]
		   [--signature=<signature> | --no-signature]
		   [--signature-file=<file>]
		   [-n | --numbered | -N | --no-numbered]
		   [--start-number <n>] [--numbered-files]
		   [--in-reply-to=<message id>] [--suffix=.<sfx>]
		   [--ignore-if-in-upstream]
		   [--cover-from-description=<mode>]
		   [--rfc] [--subject-prefix=<subject prefix>]
		   [(--reroll-count|-v) <n>]
		   [--to=<email>] [--cc=<email>]
		   [--[no-]cover-letter] [--quiet]
		   [--[no-]encode-email-headers]
		   [--no-notes | --notes[=<ref>]]
		   [--interdiff=<previous>]
		   [--range-diff=<previous> [--creation-factor=<percent>]]
		   [--filename-max-length=<n>]
		   [--progress]
		   [<common diff options>]
		   [ <since> | <revision range> ]
