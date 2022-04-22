If you configure SAML SSO, members of your organization will continue to log into their personal accounts on {% data variables.product.prodname_dotcom_the_website %}. When a member accesses non-public resources within your organization that uses SAML SSO, {% data variables.product.prodname_dotcom %} redirects the member to your IdP to authenticate. 身份验证成功后，IdP 将该成员重定向回 {% data variables.product.prodname_dotcom %}，然后成员可以访问组织的资源。

{% note %}

**Note:** Organization members can perform read operations such as viewing, cloning, and forking on public resources owned by your organization even without a valid SAML session.

{% endnote %}
