---
title: Verificar endereço de e-mail
intro: 'A verificação do endereço de e-mail principal garante segurança reforçada, permite que a equipe do {% data variables.product.prodname_dotcom %} auxilie melhor caso você esqueça sua senha e fornece acesso a mais recursos no {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/troubleshooting-email-verification/
  - /articles/setting-up-email-verification/
  - /articles/verifying-your-email-address
versions:
  free-pro-team: '*'
topics:
  - contas
---

### Sobre a verificação de e-mail

Você pode verificar seu endereço de e-mail depois de se inscrever em uma nova conta ou ao adicionar um novo endereço de e-mail. Se um endereço de e-mail não puder ser entregue ou retornar, ele será considerado como não verificado.

Se você não verificar seu endereço de e-mail, não poderá:
  - Criar ou bifurcar repositórios
  - Criar problemas ou pull requests
  - Fazer comentários em problema, pull request ou commits
  - Autorizar aplicativos do {% data variables.product.prodname_oauth_app %}
  - Gerar tokens de acesso pessoais
  - Receber notificações de e-mail
  - Marcar repositórios com estrela
  - Criar ou atualizar quadros de projeto, inclusive adicionando cartões
  - Criar ou atualizar gists
  - Criar ou usar o {% data variables.product.prodname_actions %}
  - Patrocine desenvolvedores com {% data variables.product.prodname_sponsors %}

{% warning %}

**Avisos**:

- {% data reusables.user_settings.no-verification-disposable-emails %}
- {% data reusables.user_settings.verify-org-approved-email-domain %}

{% endwarning %}

### Verificar endereço de e-mail

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
1. Sob o seu endereço de e-mail, clique em **Reenviar e-mail de verificação**. ![Reenviar link do e-mail de verificação](/assets/images/help/settings/email-verify-button.png)
4. O {% data variables.product.prodname_dotcom %} enviará a você um e-mail com um link. Clicando nesse link, você será redirecionado para o painel do {% data variables.product.prodname_dotcom %} e verá um banner de confirmação. ![Banner confirmando que seu e-mail foi verificado](/assets/images/help/settings/email-verification-confirmation-banner.png)

### Resolver problemas na verificação de e-mail

#### Não é possível enviar verificação de e-mail

{% data reusables.user_settings.no-verification-disposable-emails %}

#### Página de erro depois de clicar no link de verificação

O link de verificação expira após 24 horas. Se você não verificar seu e-mail dentro de 24 horas, poderá solicitar outro link de verificação de e-mail. Para obter mais informações, consulte "[Verificar o endereço de e-mail](/articles/verifying-your-email-address)".

Se você clicar no link incluído no e-mail de confirmação dentro de 24 horas e for direcionado para uma página de erro, confira se entrou na conta correta do {% data variables.product.prodname_dotcom %}.

1. {% data variables.product.signout_link %} da sua conta pessoal do {% data variables.product.prodname_dotcom %}.
2. Saia e reinicie o navegador.
3. {% data variables.product.signin_link %} para sua conta pessoal do {% data variables.product.prodname_dotcom %}.
4. Clique no link de verificação no e-mail que enviamos para você.

### Leia mais

- "[Alterar endereço de e-mail principal](/articles/changing-your-primary-email-address)"
