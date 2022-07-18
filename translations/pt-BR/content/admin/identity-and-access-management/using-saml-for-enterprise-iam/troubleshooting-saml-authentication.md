---
title: Autenticação SAML
shortTitle: Solucionar problemas do SAML SSO
intro: 'Se você usar o logon único SAML (SSO) e as pessoas não conseguirem efetuar a autenticação para acessar {% data variables.product.product_location %}, você poderá solucionar o problema.'
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
---

{% ifversion ghes %}
## Sobre problemas com autenticação do SAML

Mensagens de erro de registro de {% data variables.product.product_name %} para autenticação do SAML falhada no registro de autenticação em _/var/log/github/auth.log_. Você pode revisar as respostas neste arquivo de log, e você também pode configurar mais logs detalhados.

Para obter mais informações sobre requisitos de resposta do SAML, consulte "[Referência de configuração do SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-response-requirements)".

## Configurando a depuração do SAML

Você pode configurar {% data variables.product.product_name %} para escrever registros de depuração detalhados em _/var/log/github/auth.log_ para cada tentativa de autenticação do SAML. É possível que você possa solucionar problemas com tentativas de autenticação com esta saída extra.

{% warning %}

**Avisos**:

- Habilite apenas a depuração do SAML temporariamente e desabilite a depuração imediatamente após terminar a solução de problemas. Se você deixar a depuração habilitada, o tamanho do seu registro poderá aumentar muito mais rápido do que o normal, o que pode impactar negativamente o desempenho de {% data variables.product.product_name %}.
- Teste novas configurações de autenticação para {% data variables.product.product_location %} em um ambiente de teste antes de aplicar as configurações no seu ambiente de produção. Para obter mais informações, consulte "[Configurar instância de preparo](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)".

{% endwarning %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. Em "Depuração do SAML", selecione o menu suspenso e clique em **Habilitado**.

   ![Captura de tela da lista suspensa para habilitar a depuração do SAML](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-enabled.png)

1. Tentar efetuar o login no {% data variables.product.product_location %} por meio do IdP do seu SAML.

1. Revise a saída de depuração em _/var/log/github/auth.log_ em {% data variables.product.product_location %}.

1. Quando você estiver solucionando problemas, selecione o menu suspenso e clique em **Desabilitado**.

   ![Captura de tela da lista suspensa para desaabilitar a depuração do SAML](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-disabled.png)

## Decodificando respostas em _auth.log_

Alguma saída em _auth.log_ pode ser codificada em Base64. Você pode acessar o shell administrativo e usar o utilitário `base64` em {% data variables.product.product_location %} para decodificar essas respostas. Para obter mais informações, consulte "[Acessar o shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".

```shell
$ base64 --decode <em>ENCODED OUTPUT</em>
```

## Erro: "Outro usuário já possui a conta"

Quando um usuário efetua o login em {% data variables.product.product_location %} pela primeira vez com autenticação do SAML, {% data variables.product.product_name %} cria uma conta de usuário na instância e mapeia o `NameID` do SAML com a conta.

Quando o usuário inicia a sessão novamente, {% data variables.product.prodname_ghe_server %} compara o mapeamento do `NameID` da conta com a resposta do IdP. Se o `NameID` na resposta do IdP não corresponder mais ao `NameID` que {% data variables.product.product_name %} espera para o usuário. ocorrerá uma falha no login. O usuário receberá a seguinte mensagem.

> Outro usuário já possui a conta. Solicite ao administrador que verifique o registro de autenticação.

De modo geral, a mensagem indica que o nome de usuário ou endereço de email da pessoa foi alterado no IdP. Certifique-se de que o mapeamento do `NameID` para a conta do usuário no {% data variables.product.prodname_ghe_server %} corresponde ao `NameID` do usuário no seu IdP. Para obter mais informações, consulte "[Atualizando `NameID`](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid) do SAML de um usuário."

## Se a resposta SAML não estiver assinada ou se a assinatura não corresponder ao conteúdo, o log de autenticação mostrará a seguinte mensagem de erro:

Se o `Destinatário` não coincidir com o URL do ACS para {% data variables.product.product_location %}, uma das seguintes duas mensagens de erro aparecerá no registro de autenticação quando um usuário tentar efetuar a autenticação.

```
Recipient na resposta SAML não pode ficar em branco.
```

```
Recipient na resposta SAML não era válido.
```

Certifique-se de definir o valor para `Destinatário` no seu IdP para o URL doACS completo para {% data variables.product.product_location %}. Por exemplo, `https://ghe.corp.example.com/saml/consume`.

## Erro: "Resposta do SAML não foi assinada ou foi modificada"

Se seu IdP não assinar a resposta do SAML ou a assinatura não corresponder ao conteúdo, será exibida a seguinte mensagem de erro no registro de autenticação.

```
Resposta SAML não assinada ou modificada.
```

Certifique-se de que você configurou as declarações assinadas para o aplicativo de {% data variables.product.product_name %} no seu IdP.

## Erro: "Audiência é inválida" ou "Nenhuma declaração encontrada"

Se a resposta do IdP tiver um valor ausente ou incorreto para `Audiência`, a seguinte mensagem de erro aparecerá no registro de autenticação.

```
Audience inválido. O atributo Audience não corresponde a url_sua_instância
```

Certifique-se de que você definiu o valor para `Audiência` no seu IdP para `EntityId` para {% data variables.product.product_location %}, que é o URL completo da sua instância. Por exemplo, `https://ghe.corp.example.com`.
{% endif %}

{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% ifversion ghec %}
{% data reusables.saml.authentication-loop %}
{% endif %}
