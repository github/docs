---
title: About user provisioning for organizations in your enterprise account
intro: You can manage organization membership in an enterprise account directly from an identity provider (IdP).
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
---

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

{% data reusables.saml.about-user-provisioning-enterprise-account %}

{% data reusables.scim.enterprise-account-scim %} Opcionalmente, você também pode habilitar o provisionamento de SAML e, separadamente, o desprovisionamento.

If you configure SCIM for the {% data variables.product.product_name %} application in your IdP, each time you make changes to group membership in your IdP, your IdP will make a SCIM call to {% data variables.product.prodname_dotcom %} to update the corresponding organization's membership. Se você ativar o provisionamento de SAML, toda vez que um integrante da empresa acessar um recurso protegido pela configuração de SAML da conta corporativa, essa declaração de SAML irá acionar o provisionamento.

Para cada chamada de SCIM ou declaração de SAML, {% data variables.product.product_name %} irá verificar os grupos de IdP aos quais o usuário pertence e executar as operações a seguir:

- Se o usuário for integrante de um grupo de IdP que corresponde a uma organização pertencente à conta corporativa e o usuário não for, atualmente, um membro dessa organização, adicione o usuário à organização (declaração de SAML) ou envie um convite por e-mail para participar da organização (chamada de SCIM).
- Cancele quaisquer convites existentes para o usuário juntar-se a uma organização que pertencem à conta corporativa.

Para cada chamada de SCIM e, no caso de habilitar o desprovisionamento de SAML, em cada declaração de SAML, o {% data variables.product.product_name %} também executará a operação a seguir:

- Se o usuário não for membro de um grupo de IdP que corresponde a uma organização pertencente à sua conta corporativa, e o usuário for, atualmente, um integrante dessa organização, remova o usuário da organização.

Se desprovisionamento remover o último proprietário de uma organização, a organização ficará sem proprietário. Os proprietários das empresas podem assumir a propriedade de organizações sem proprietários. Para obter mais informações, consulte "[Gerenciar organizações sem proprietários na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/managing-unowned-organizations-in-your-enterprise-account)".

Para habilitar o provisionamento de usuários para sua conta corporativa usando o Okta, consulte "[Configurar o logon único SAML e SCIM para a sua conta corporativa usando o Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)".
