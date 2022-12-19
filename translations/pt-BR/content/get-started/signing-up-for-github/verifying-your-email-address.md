---
title: Verificar endereço de e-mail
intro: 'A verificação do endereço de e-mail principal garante segurança reforçada, permite que a equipe do {% data variables.product.prodname_dotcom %} auxilie melhor caso você esqueça sua senha e fornece acesso a mais recursos no {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/troubleshooting-email-verification
  - /articles/setting-up-email-verification
  - /articles/verifying-your-email-address
  - /github/getting-started-with-github/verifying-your-email-address
  - /github/getting-started-with-github/signing-up-for-github/verifying-your-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Verify your email address
ms.openlocfilehash: 75c455907ab0cc89f1ba8b30d6fa1d37f2d9798f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145101343'
---
## Sobre a verificação de e-mail

Você pode verificar seu endereço de e-mail depois de se inscrever em uma nova conta ou ao adicionar um novo endereço de e-mail. Se um endereço de e-mail não puder ser entregue ou retornar, ele será considerado como não verificado.

Se você não verificar seu endereço de e-mail, não poderá:
  - Criar ou bifurcar repositórios
  - Criar problemas ou pull requests
  - Fazer comentários sobre problemas, pull request ou commits
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

- {% data reusables.user-settings.no-verification-disposable-emails %}
- {% data reusables.user-settings.verify-org-approved-email-domain %}

{% endwarning %}

## Verificar endereço de e-mail

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %}
1. No seu endereço de email, clique em **Reenviar email de verificação**.
  ![Link Reenviar email de verificação](/assets/images/help/settings/email-verify-button.png)
4. O {% data variables.product.prodname_dotcom %} enviará a você um e-mail com um link. Clicando nesse link, você será redirecionado para o painel do {% data variables.product.prodname_dotcom %} e verá um banner de confirmação.
  ![Faixa confirmando que o seu email foi verificado](/assets/images/help/settings/email-verification-confirmation-banner.png)

## Resolver problemas na verificação de e-mail

### Não é possível enviar verificação de e-mail

{% data reusables.user-settings.no-verification-disposable-emails %}

### Página de erro depois de clicar no link de verificação

O link de verificação expira após 24 horas. Se você não verificar seu e-mail dentro de 24 horas, poderá solicitar outro link de verificação de e-mail. Para obter mais informações, confira "[Como confirmar seu endereço de email](/articles/verifying-your-email-address)".

Se você clicar no link no e-mail de confirmação dentro de 24 horas e você for direcionado a uma página de erro, você deve garantir que está conectado à conta correta em {% data variables.product.product_location %}.

1. {% data variables.product.signout_link %} da sua conta pessoal em {% data variables.product.product_location %}.
2. Saia e reinicie o navegador.
3. {% data variables.product.signin_link %} para a sua conta pessoal em {% data variables.product.product_location %}.
4. Clique no link de verificação no e-mail que enviamos para você.

## Leitura adicional

- "[Como alterar seu endereço de email principal](/articles/changing-your-primary-email-address)"
