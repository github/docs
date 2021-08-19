---
title: Sobre a autenticação de dois fatores
intro: '{% data reusables.two_fa.about-2fa %} Com 2FA, você deve efetuar o login com seu nome de usuário e senha e fornecer outra forma de autenticação que você conheça ou tenha acesso.'
redirect_from:
  - /articles/about-two-factor-authentication
  - /github/authenticating-to-github/about-two-factor-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 2FA
---

Por {% data variables.product.product_name %}, a segunda forma de autenticação é um código que é gerado por um aplicativo no dispositivo móvel{% if currentVersion == "free-pro-team@latest" %} ou enviado como mensagem de texto (SMS){% endif %}. Após habilitação da 2FA, o {% data variables.product.product_name %} gera um código de autenticação sempre que alguém tenta entrar na sua conta do {% data variables.product.product_name %}. A única maneira de alguém entrar na sua conta é se ele souber sua senha e tiver acesso ao código de autenticação no seu telefone.

{% data reusables.two_fa.after-2fa-add-security-key %}

Você também pode configurar métodos de recuperação adicionais, caso você o acesso às suas credenciais de autenticação de dois fatores. Para obter mais informações sobre como configurar a 2FA, consulte "[Configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication)" e "[Configurar métodos de recuperação de autenticação de dois fatores](/articles/configuring-two-factor-authentication-recovery-methods)".

É **altamente** recomendável que você habilite a 2FA para a segurança de sua conta, não apenas em {% data variables.product.product_name %}, mas em outros sites e aplicativos compatíveis com a 2FA. Você pode habilitar o 2FA para acessar {% data variables.product.product_name %} e {% data variables.product.prodname_desktop %}.

Para obter mais informações, consulte "[Acessar o {% data variables.product.prodname_dotcom %} usando a autenticação de dois fatores](/articles/accessing-github-using-two-factor-authentication)".

### Códigos de recuperação da autenticação de dois fatores

{% data reusables.two_fa.about-recovery-codes %} Para obter mais informações, consulte "[Recuperar sua conta se você perder as credenciais da 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)."

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**Aviso**: {% data reusables.two_fa.support-may-not-help %} Para obter mais informações, consulte "[Recuperar sua conta se você perder as credenciais da 2FA](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)."

{% endwarning %}

{% endif %}

### Exigir autenticação de dois fatores em sua organização

Os proprietários da organização podem exigir que os integrantes da organização{% if currentVersion == "free-pro-team@latest" %}, gerentes de cobrança{% endif %} e colaboradores externos usem a autenticação de dois fatores para proteger suas contas pessoais. Para obter mais informações, consulte "[Exigir autenticação de dois fatores em sua organização](/articles/requiring-two-factor-authentication-in-your-organization)".

{% data reusables.two_fa.auth_methods_2fa %}
