---
title: Aplicar logon único de SAML para sua organização
intro: Organization owners and admins can enforce SAML SSO so that all organization members must authenticate via an identity provider (IdP).
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enforcing-saml-single-sign-on-for-your-organization
versions:
  fpt: '*'
topics:
  - Organizations
  - Teams
shortTitle: Aplicar logon único SAML
---

## About enforcement of SAML SSO for your organization

When you enable SAML SSO, {% data variables.product.prodname_dotcom %} will prompt members who visit the organization's resources on {% data variables.product.prodname_dotcom_the_website %} to authenticate on your IdP, which links the member's user account to an identity on the IdP. Members can still access the organization's resources before authentication with your IdP.

![Banner with prompt to authenticate via SAML SSO to access organization](/assets/images/help/saml/sso-has-been-enabled.png)

You can also enforce SAML SSO for your organization. {% data reusables.saml.when-you-enforce %} Enforcement removes any members and administrators who have not authenticated via your IdP from the organization. {% data variables.product.company_short %} sends an email notification to each removed user.

Você poderá restaurar integrantes da organização depois que eles tiverem concluído o logon único com êxito. Removed users' access privileges and settings are saved for three months and can be restored during this time frame. Para obter mais informações, consulte "[Restabelecer ex-integrantes da organização](/articles/reinstating-a-former-member-of-your-organization)".

Bots and service accounts that do not have external identities set up in your organization's IdP will also be removed when you enforce SAML SSO. For more information about bots and service accounts, see "[Managing bots and service accounts with SAML single sign-on](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on)."

If your organization is owned by an enterprise account, requiring SAML for the enterprise account will override your organization-level SAML configuration and enforce SAML SSO for every organization in the enterprise. For more information, see "[Enforcing SAML single sign-on for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

{% tip %}

**Dica:** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

## Enforcing SAML SSO for your organization

1. Enable and test SAML SSO for your organization, then authenticate with your IdP at least once. Para obter mais informações, consulte "[Habilitar e testar logon único de SAML para sua organização](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)".
1. Prepare to enforce SAML SSO for your organization. Para obter mais informações, consulte "[Preparar para aplicar logon único de SAML na organização](/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization)".
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Under "SAML single sign-on", select **Require SAML SSO authentication for all members of the _ORGANIZATION_ organization**. !["Require SAML SSO authentication" checkbox](/assets/images/help/saml/require-saml-sso-authentication.png)
1. If any organization members have not authenticated via your IdP, {% data variables.product.company_short %} displays the members. If you enforce SAML SSO, {% data variables.product.company_short %} will remove the members from the organization. Review the warning and click **Remove members and require SAML single sign-on**. !["Confirm SAML SSO enforcement" dialog with list of members to remove from organization](/assets/images/help/saml/confirm-saml-sso-enforcement.png)
1. Under "Single sign-on recovery codes", review your recovery codes. Store the recovery codes in a safe location like a password manager.

## Leia mais

- "[Visualizar e gerenciar acesso de SAML de um integrante à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"
