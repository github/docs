---
title: Updating a user's SAML NameID
shortTitle: Update SAML NameID
intro: 'When an account''s `NameID` changes on your identity provider (IdP) and the person can no longer {% ifversion ghes or ghae %}sign into {% data variables.product.product_location %}{% elsif ghec %}authenticate to access your enterprise''s resources{% endif %}, you must {% ifversion ghec %}either contact {% data variables.product.company_short %} Support or revoke the person''s linked identity{% elsif ghes %}update the `NameID` mapping on {% data variables.product.product_location %}{% elsif ghae %}contact {% data variables.product.company_short %} Support{% endif %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## About updates to users' SAML `NameID`

In some situations, you may need to update values associated with a person's account on your SAML IdP. If that identifier is also the `NameID` that you use for authentication on {% data variables.product.product_name %}, you must update the `NameID` mapping on your instance so the person can continue to authenticate successfully. For more information, see "[Username considerations for external authentication](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)."

## Atualizando `NameID` do SAML de um usuário

Enterprise owners can update a user's SAML `NameID` on a {% data variables.product.product_name %} instance.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Selecione **SAML**. ![Barra lateral "Todos os usuários" nas configurações de administrador do site](/assets/images/enterprise/site-admin-settings/all-users.png)
3. Na lista de usuários, clique no nome de usuário para o qual você gostaria de atualizar o mapeamento de `NameID`. ![Nome de usuário na lista de contas do usuário da instância](/assets/images/enterprise/site-admin-settings/all-users-click-username.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
5. À direita de "Atualizar o NameID do SAML", clique em **Editar**. ![Botão "Editar" em "autenticação do SAML" e à direita "Atualizar o NameID do SAML"](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. No campo "NameID", digite o novo `NameID` para o usuário. ![Campo "NameID" na caixa de diálogo modal com NameID digitado](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Clique **Atualizar o NameID**. ![Botão "Atualizar o NameID" com o valor do NameID atualizado dentro do modal](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)
