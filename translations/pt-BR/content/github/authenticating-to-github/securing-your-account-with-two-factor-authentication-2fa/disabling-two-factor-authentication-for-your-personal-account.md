---
title: Desabilitar autenticação de dois fatores da sua conta pessoal
intro: 'Se você desabilitar a autenticação de dois fatores da sua conta pessoal, poderá perder o acesso às organizações a que pertence.'
redirect_from:
  - /articles/disabling-two-factor-authentication-for-your-personal-account
  - /github/authenticating-to-github/disabling-two-factor-authentication-for-your-personal-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2FA
---

É altamente recomendável usar a autenticação de dois fatores para proteger sua conta. Caso você precise desabilitar a 2FA, torne a habilitá-la o mais rápido possível.

{% warning %}

**Aviso:** Se você é integrante{% if currentVersion == "free-pro-team@latest" %}, gerente de cobrança,{% endif %} ou colaborador externo em um repositório público de uma organização que exige autenticação de dois fatores e você desativa a 2FA, você será automaticamente removido da organização e perderá o acesso aos repositórios. Para recuperar o acesso à organização, torne a habilitar a autenticação de dois fatores e entre em contato com um proprietário da organização.

{% endwarning %}

Caso a sua organização requeira autenticação de dois fatores e você seja integrante, proprietário ou colaborador externo em um repositório público da organização, primeiro saia dela para poder desabilitar a autenticação de dois fatores.

Para remover a si mesmo da organização:
 - Como integrante ou proprietário da organização, consulte "[Como remover a si mesmo de uma organização](/articles/removing-yourself-from-an-organization/)."
 - Como colaborador externo, peça ao administrador de repositório ou proprietário da organização para remover você dos repositórios dela. Para obter mais informações, consulte "[Exibir funções na organização](/articles/viewing-people-s-roles-in-an-organization)" e "[Remover colaborador externo do repositório de uma organização](/articles/removing-an-outside-collaborator-from-an-organization-repository/)".

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security %}
3. Clique **Desabilitar**. ![Botão Disable two-factor authentication (Desabilitar autenticação de dois fatores)](/assets/images/help/2fa/disable-two-factor-authentication.png)

### Leia mais

- [Sobre a autenticação de dois fatores](/articles/about-two-factor-authentication)"
- "[Configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication)"
- "[Configurar métodos de recuperação de autenticação de dois fatores](/articles/configuring-two-factor-authentication-recovery-methods)"
