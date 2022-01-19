---
title: 准备在组织中实施 SAML 单点登录
intro: 在组织中实施 SAML 单点登录之前，应验证组织的成员资格，并配置到身份提供程序的连接设置。
redirect_from:
  - /articles/preparing-to-enforce-saml-single-sign-on-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-enforce-saml-single-sign-on-in-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 准备执行 SAML SSO
---

{% data reusables.saml.when-you-enforce %} 在组织中执行 SAML SSO 之前，您应该审核组织成员资格，启用 SAML SSO，并审核组织成员的 SAML 访问权限。 更多信息请参阅以下文章。

| 任务                       | 更多信息                      |
|:------------------------ |:------------------------- |
| 在组织中添加或删除成员              | <ul><li>"[I邀请用户加入您的组织](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"</li><li>"[从组织中删除成员](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)"</li></ul> |
| 启用 SAML SSO 以将 IdP 连接到组织 | <ul><li>"[将身份提供商连接到组织](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)"</li><li>"[对组织启用和测试 SAML 单点登录](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)"</li></ul> |
| 确保组织成员已登录并且将其帐户与 IdP 链接。 | <ul><li>"[查看和管理成员对组织的 SAML 访问](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"</li></ul> |

完成这些任务后，便可为您的组织执行 SAML SSO。 更多信息请参阅“[对组织实施 SAML 单点登录](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)”。

{% data reusables.saml.outside-collaborators-exemption %}
