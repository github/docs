---
title: Autorizar o uso de uma chave SSH para uso com logon único SAML
intro: 'Para usar uma chave SSH com uma organização que usa logon único SAML (SSO), primeiramente, você deve autorizar a chave.'
redirect_from:
  - /articles/authorizing-an-ssh-key-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: Chave SSH com SAML
---

Você pode autorizar uma chave SSH existente ou criar uma e autorizá-la. For more information about creating a new SSH key, see "[Generating a new SSH key and adding it to the ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% note %}

**Observação:** se a autorização da sua chave SSH foi revogada por uma organização, você não poderá reautorizar a mesma chave. Será preciso criar outra chave SSH e autorizá-la. For more information about creating a new SSH key, see "[Generating a new SSH key and adding it to the ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
3. Ao lado da chave SSH que deseja autorizar, clique em **Enable SSO** (Habilitar SSO) ou **Disable SSO** (Desabilitar SSO). ![Botão de autorização do token SSO](/assets/images/help/settings/ssh-sso-button.png)
4. Encontre a organização para a qual deseja autorizar a chave SSH.
5. Clique em **Autorizar**. ![Botão de autorização do token](/assets/images/help/settings/ssh-sso-authorize.png)

## Leia mais

- "[Verificar se há chaves SSH existentes](/articles/checking-for-existing-ssh-keys)"
- "[Sobre a autenticação com logon único SAML](/articles/about-authentication-with-saml-single-sign-on)"
