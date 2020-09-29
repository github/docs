---
title: Acessar sua organização se o provedor de identidade não estiver disponível
intro: 'Os administradores da organização podem entrar no {% data variables.product.product_name %} mesmo se o provedor de identidade deles estiver indisponível, ignorando o logon único e usando os respectivos códigos de recuperação.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/accessing-your-organization-if-your-identity-provider-is-unavailable
versions:
  free-pro-team: '*'
---

Os administradores da organização podem usar [um de seus códigos de recuperação baixados ou salvos](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes) para ignorar o logon único. Você pode ter salvado eles em um gerenciador de senhas, como [LastPass](https://lastpass.com/), [1Password](https://1password.com/) ou [Keeper](https://keepersecurity.com/).

{% note %}

**Observação:** você pode usar os códigos de recuperação apenas uma vez e deve usá-los em ordem consecutiva. Os códigos de recuperação concedem acesso por 24 horas.

{% endnote %}

1. Na parte inferior da caixa de diálogo de logon único, clique em **Use a recovery code** (Usar um código de recuperação) para ignorar o logon único. ![Link para inserir código de recuperação](/assets/images/help/saml/saml_use_recovery_code.png)
2. No campo "Recovery Code" (Código de Recuperação), digite seu código de recuperação. ![Campo para inserir código de recuperação](/assets/images/help/saml/saml_recovery_code_entry.png)
3. Clique em **Verificar**. ![Botão para verificar código de recuperação](/assets/images/help/saml/saml_verify_recovery_codes.png)

Depois de ter usado um código de recuperação, certifique-se de anotar que ele não é mais válido. Você não poderá reutilizar o código de recuperação.

### Leia mais

- "[Sobre gerenciamento de identidade e acesso com o SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
