如果配置 SAML SSO， 组织的成员将继续登录到他们在 {% data variables.product.prodname_dotcom_the_website %} 上的个人帐户。 当成员访问组织内使用 SAML SSO 的非公共资源时，{% data variables.product.prodname_dotcom %} 会将该成员重定向到 IdP 进行身份验证。 身份验证成功后，IdP 将该成员重定向回 {% data variables.product.prodname_dotcom %}，然后成员可以访问组织的资源。

{% note %}

**注意**：即使没有有效的 SAML 会话，组织成员也可以对组织拥有的公共资源执行读取操作，例如查看、克隆和复刻。

{% endnote %}
