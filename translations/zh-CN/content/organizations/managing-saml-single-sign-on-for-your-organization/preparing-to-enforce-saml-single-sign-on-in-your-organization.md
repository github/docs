---
title: 准备在组织中实施 SAML 单点登录
intro: 在组织中实施 SAML 单点登录之前，应验证组织的成员资格，并配置到身份提供程序的连接设置。
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/preparing-to-enforce-saml-single-sign-on-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-enforce-saml-single-sign-on-in-your-organization
versions:
  fpt: '*'
topics:
  - Organizations
  - Teams
shortTitle: 准备执行 SAML SSO
---

{% data reusables.saml.when-you-enforce %} Before enforcing SAML SSO in your organization, you should review organization membership, enable SAML SSO, and review organization members' SAML access. For more information, see the following.

| Task                                                                                        | 更多信息                      |
|:------------------------------------------------------------------------------------------- |:------------------------- |
| Add or remove members from your organization                                                | <ul><li>"[Inviting users to join your organization](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"</li><li>"[Removing a member from your organization](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)"</li></ul> |
| Connect your IdP to your organization by enabling SAML SSO                                  | <ul><li>"[Connecting your identity provider to your organization](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)"</li><li>"[Enabling and testing SAML single sign-on for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)"</li></ul> |
| Ensure that your organization members have signed in and linked their accounts with the IdP | <ul><li>"[Viewing and managing a member's SAML access to your organization](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"</li></ul> |

After you finish these tasks, you can enforce SAML SSO for your organization. 更多信息请参阅“[对组织实施 SAML 单点登录](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)”。

{% data reusables.saml.outside-collaborators-exemption %}
