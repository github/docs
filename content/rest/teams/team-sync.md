---
title: Team synchronization
intro: 'The Team synchronization API allows you to manage connections between {% data variables.product.product_name %} teams and external identity provider (IdP) groups.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

## About the Team synchronization API

To use this API, the authenticated user must be a team maintainer or an owner of the organization associated with the team. The token you use to authenticate will also need to be authorized for use with your IdP (SSO) provider. For more information, see "[Authorizing a personal access token for use with a SAML single sign-on organization](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)."

You can manage GitHub team members through your IdP with team synchronization. Team synchronization must be enabled to use the Team Synchronization API. For more information, see "[Synchronizing teams between your identity provider and GitHub](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)."

{% note %}

**Note:** The Team Synchronization API cannot be used with {% data variables.product.prodname_emus %}. To learn more about managing an {% data variables.product.prodname_emu_org %}, see "[External groups API](/enterprise-cloud@latest/rest/reference/teams#external-groups)".

{% endnote %}
