Next, configure how your members will authenticate.

**If you're using Entra ID** as your IdP, you can choose between OpenID Connect (OIDC) and Security Assertion Markup Language (SAML).
* We recommend OIDC, which includes support for Conditional Access Policies (CAP).
* If you require multiple enterprises provisioned from one tenant, you can use SAML or OIDC for the first enterprise, but must use SAML for each additional enterprise.

**If you're using another IdP**, like Okta or PingFederate, you must use SAML to authenticate your members.

To get started, read the guide for your chosen authentication method.

* [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)
* [AUTOTITLE](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)
