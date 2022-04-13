If you configure SAML SSO, members of your organization will continue to log into their personal accounts on {% data variables.product.prodname_dotcom_the_website %}. When a member accesses non-public resources within your organization that uses SAML SSO, {% data variables.product.prodname_dotcom %} redirects the member to your IdP to authenticate. Após a autenticação bem-sucedida, seu IdP redireciona o integrante para {% data variables.product.prodname_dotcom %}, onde poderá acessar os recursos da sua organização.

{% note %}

**Note:** Organization members can perform read operations such as viewing, cloning, and forking on public resources owned by your organization even without a valid SAML session.

{% endnote %}
