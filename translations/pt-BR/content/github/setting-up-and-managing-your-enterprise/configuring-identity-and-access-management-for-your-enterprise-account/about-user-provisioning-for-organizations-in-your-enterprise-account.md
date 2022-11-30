---
title: Sobre o provisionamento de usuários para organizações na sua conta corporativa
intro: Você pode gerenciar a associação das organizações em uma conta corporativa diretamente de um provedor de identidade (IdP).
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
topics:
  - Enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account
---
{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

{% data reusables.saml.about-user-provisioning-enterprise-account %}

{% data reusables.scim.enterprise-account-scim %} Opcionalmente, você também pode habilitar o provisionamento de SAML e, separadamente, o desprovisionamento.

Se você configurar o SCIM para o aplicativo de {% data variables.product.product_name %} no seu IdP, cada vez que fizer alterações na associação do grupo no seu IdP, este fará uma chamada SCIM para {% data variables.product.prodname_dotcom %} para atualizar a associação da organização. Se você ativar o provisionamento de SAML, toda vez que um integrante da empresa acessar um recurso protegido pela configuração de SAML da conta corporativa, essa declaração de SAML irá acionar o provisionamento.

Para cada chamada de SCIM ou declaração de SAML, {% data variables.product.product_name %} irá verificar os grupos de IdP aos quais o usuário pertence e executar as operações a seguir:

- Se o usuário for integrante de um grupo de IdP que corresponde a uma organização pertencente à conta corporativa e o usuário não for, atualmente, um membro dessa organização, adicione o usuário à organização (declaração de SAML) ou envie um convite por e-mail para participar da organização (chamada de SCIM).
- Cancele quaisquer convites existentes para o usuário juntar-se a uma organização que pertencem à conta corporativa.

Para cada chamada de SCIM e, no caso de habilitar o desprovisionamento de SAML, em cada declaração de SAML, o {% data variables.product.product_name %} também executará a operação a seguir:

- Se o usuário não for membro de um grupo de IdP que corresponde a uma organização pertencente à sua conta corporativa, e o usuário for, atualmente, um integrante dessa organização, remova o usuário da organização.

Se desprovisionamento remover o último proprietário de uma organização, a organização ficará sem proprietário. Os proprietários das empresas podem assumir a propriedade de organizações sem proprietários. Para obter mais informações, consulte "[Gerenciar organizações sem proprietários na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/managing-unowned-organizations-in-your-enterprise-account)".

Para habilitar o provisionamento de usuários para sua conta corporativa usando o Okta, consulte "[Configurar o logon único SAML e SCIM para a sua conta corporativa usando o Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)".
