---
title: Migrating from OIDC to SAML
shortTitle: Migrate from OIDC to SAML
intro: 'If you''re using OpenID Connect (OIDC) to authenticate members in your {% data variables.enterprise.prodname_emu_enterprise %}, you can migrate to SAML SSO.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-oidc-to-saml
  - /admin/identity-and-access-management/reconfiguring-iam-for-enterprise-managed-users/migrating-from-oidc-to-saml
---

{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## About migration of an {% data variables.enterprise.prodname_emu_enterprise %} from OIDC to SAML

To migrate from OIDC to SAML, you will first disable OIDC, which will suspend all {% data variables.enterprise.prodname_managed_users %}, remove all SCIM-provisioned external groups, and delete linked identities.

Then, you will configure SAML and SCIM. At this time, users, groups, and identities will be re-provisioned.

If you're new to {% data variables.product.prodname_emus %} and haven't yet configured authentication for your enterprise, you do not need to migrate and can set up SAML single sign-on (SSO) immediately. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users)."

{% warning %}

**Warning:** {% data reusables.enterprise_user_management.migration-teams-warning %}

{% endwarning %}

## Prerequisites

* Your enterprise on {% data variables.location.product_location %} must currently be configured to use OIDC for authentication. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)."
{% data reusables.emus.migration-roles-prereq %}
{% data reusables.emus.migration-schedule-downtime %}

## Migrating your enterprise

{% data reusables.emus.sign-in-as-setup-user %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.emus.use-enterprise-recovery-code %}
{% data reusables.enterprise-accounts.security-tab %}
1. Deselect **Require OIDC single sign-on**.
1. Click **Save**.
1. Configure SAML authentication and SCIM provisioning. For more information, see [Tutorial: Microsoft Entra single sign-on (SSO) integration with GitHub Enterprise Managed User](https://learn.microsoft.com/entra/identity/saas-apps/github-enterprise-managed-user-tutorial) on Microsoft Learn.
