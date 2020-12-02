---
title: Automação Git com tokens OAuth
redirect_from:
  - /articles/git-over-https-using-oauth-token/
  - /articles/git-over-http-using-oauth-token/
  - /articles/git-automation-with-oauth-tokens
intro: 'Você pode usar tokens OAuth para interagir com {% data variables.product.product_name %} por meio de scripts automatizados.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Etapa 1: Obtenha um token OAuth

Crie um token de acesso pessoal na página de configurações do seu aplicativo. Para mais informação, consulte "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)."

{% tip %}

{% if currentVersion == "free-pro-team@latest" %}
**Dicas:**
- Você deve verificar seu endereço de e-mail antes de criar um token de acesso pessoal. Para obter mais informações, consulte "[Verificar o endereço de e-mail](/articles/verifying-your-email-address)".
- {% data reusables.user_settings.review_oauth_tokens_tip %}
{% else %}
**Dica:** {% data reusables.user_settings.review_oauth_tokens_tip %}
{% endif %}

{% endtip %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

### Etapa 2: Clone um repositório

{% data reusables.command_line.providing-token-as-password %}

Para evitar esses alertas, você pode usar o cache de senhas do Git. Para obter informações, consulte "[Armazenar suas credenciais no GitHub no Git](/github/using-git/caching-your-github-credentials-in-git)".

{% warning %}

**Aviso**: os tokens possuem accesso de leitura e gravação e devem ser tratados como senhas. Se você informar seu token na URL clone ao clonar ou adicionar um remote, o Git irá gravá-lo em seu arquivo _.git/config_ como texto simples, o que representa um risco de segurança.

{% endwarning %}

### Leia mais

- "[Autorizando aplicativos OAuth](/developers/apps/authorizing-oauth-apps)"
