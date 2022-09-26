---
title: Autenticação no GitHub
shortTitle: Authentication
intro: 'Você pode acessar com segurança os recursos da sua conta em {% data variables.product.prodname_desktop %} através da autenticação no {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/authenticating-to-github-using-the-browser
  - /desktop/getting-started-with-github-desktop/authenticating-to-github
  - /desktop/installing-and-configuring-github-desktop/authenticating-to-github
versions:
  fpt: '*'
ms.openlocfilehash: e88d59a03d876b23d8eb72aae7324db64981096f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095137'
---
## Sobre autenticação

Para manter sua conta segura, você deve autenticar antes de usar o {% data variables.product.prodname_desktop %} para acessar os recursos no {% data variables.product.prodname_dotcom %}.

Antes de autenticar, {% data reusables.desktop.get-an-account %}

{% mac %}

## Autenticando uma conta no {% data variables.product.prodname_dotcom %}

{% data reusables.desktop.mac-select-desktop-menu %} {% data reusables.desktop.mac-select-accounts %}
3. À direita de "{% data variables.product.prodname_dotcom_the_website %}", clique em **Entrar**.
  ![O botão Entrar do GitHub](/assets/images/help/desktop/mac-sign-in-github.png) {% data reusables.desktop.sign-in-browser %}


{% data reusables.desktop.authenticate-in-browser %} {% data reusables.desktop.2fa-in-browser %}
7. Depois que o {% data variables.product.prodname_dotcom %} autenticar sua conta, siga as instruções para retornar a {% data variables.product.prodname_desktop %}.

## Autenticando uma conta no {% data variables.product.prodname_ghe_server %}


{% data reusables.desktop.mac-select-desktop-menu %} {% data reusables.desktop.mac-select-accounts %} {% data reusables.desktop.choose-product-authenticate %}
4. Para adicionar uma conta no {% data variables.product.product_location_enterprise %}, digite a URL da sua instância em "Endereço da empresa" e clique em **Continuar**.
  ![Botão Entrar do GitHub Enterprise](/assets/images/help/desktop/mac-sign-in-button-enterprise.png) {% data reusables.desktop.sign-in-browser %}
1. Para autenticar na conta do {% data variables.product.product_location_enterprise %}, digite as credenciais da sua conta e clique em **Entrar**.
  ![O botão Entrar do {% data variables.product.prodname_ghe_server %} no navegador](/assets/images/help/desktop/enterprise-sign-in-button-browser.png)

  Como alternativa, se você já estava logado no{% data variables.product.product_location_enterprise %}, siga as instruções para retornar ao {% data variables.product.prodname_desktop %} para finalizar a autenticação. 

{% endmac %}

{% windows %}

## Autenticando uma conta no {% data variables.product.prodname_dotcom %}

{% data reusables.desktop.windows-choose-options %} {% data reusables.desktop.windows-select-accounts %}
3. À direita de "GitHub.com", clique em **Entrar**.
  ![O botão Entrar do GitHub](/assets/images/help/desktop/windows-sign-in-github.png) {% data reusables.desktop.sign-in-browser %}

  {% data reusables.user-settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.authenticate-in-browser %} {% data reusables.desktop.2fa-in-browser %}
7. Depois que o {% data variables.product.prodname_dotcom %} autenticar sua conta, siga as instruções para retornar a {% data variables.product.prodname_desktop %}.

## Autenticando uma conta no {% data variables.product.prodname_enterprise %}


{% data reusables.desktop.windows-choose-options %} {% data reusables.desktop.windows-select-accounts %} {% data reusables.desktop.choose-product-authenticate %}
4. Para adicionar uma conta do {% data variables.product.prodname_enterprise %}, digite suas credenciais em "Endereço da empresa" e clique em **Continuar**.
  ![Botão Entrar do GitHub Enterprise](/assets/images/help/desktop/windows-sign-in-button-enterprise.png) {% data reusables.desktop.retrieve-2fa %}

{% endwindows %}

## Solucionando problemas de autenticação

Se o {% data variables.product.prodname_desktop %} encontrar um erro de autenticação, você pode usar mensagens de erro para solucionar problemas.

Se você encontrar um erro de autenticação, primeiro tente sair e entrar novamente em sua conta no {% data variables.product.prodname_desktop %}.

Para alguns erros, {% data variables.product.prodname_desktop %} enviará a você uma mensagem de erro. Se você não receber a mensagem, ou caso queira encontrar mais informações sobre qualquer erro, visualize os arquivos de log de {% data variables.product.prodname_desktop %} usando as seguintes etapas.

{% mac %}

1. Use o menu suspenso **Ajuda** e clique em **Mostrar Logs no Localizador**.
  ![Botão Mostrar Logs no Localizador](/assets/images/help/desktop/mac-show-logs.png)
2. Selecione o arquivo de log a partir da data em que você encontrou o erro de autenticação.

{% endmac %}

{% windows %}

1. Use o menu suspenso **Ajuda** e clique em **Mostrar Logs no Explorer**.
  ![Botão Mostrar Logs no Explorer](/assets/images/help/desktop/windows-show-logs.png)
2. Selecione o arquivo de log a partir da data em que você encontrou o erro de autenticação.

{% endwindows %}

Revise abaixo as informações de solução de problemas para a mensagem de erro que você encontrar.

### Credenciais inválidas

```shell
Error: Bad credentials
```

Este erro significa que há um problema com suas credenciais da conta armazenada.

Para solucionar problemas, saia da sua conta no {% data variables.product.prodname_desktop %} e entre novamente.

### Token vazio

```shell
info: [ui] [AppStore.withAuthenticatingUser] account found for repository: node - <username> (empty token)
```

Este erro significa que {% data variables.product.prodname_desktop %} não foi possível encontrar o token de acesso que ele criou no keychain do sistema.

Para solucionar problemas, saia da sua conta no {% data variables.product.prodname_desktop %} e entre novamente.

### Repositório não encontrado

```shell
fatal: repository 'https://github.com/<user>/<repo>.git' not found

(The error was parsed as 8: The repository does not seem to exist anymore. You may not have access, or it may have been deleted or renamed.)
```

Este erro significa que você não tem permissão para acessar o repositório que está tentando clonar.

Para solucionar problemas, entre em contato com a pessoa da sua organização que administra as permissões.

### Não foi possível ler a partir do repositório remoto

```shell
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights and the repository exists.
```

Este erro significa que você não tem uma chave SSH válida configurada.

Para solução de problemas, confira "[Como gerar uma nova chave SSH e adicioná-la ao agente SSH](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

### Falha ao clonar

```shell
fatal: clone of 'git@github.com:<user>/<repo>' into submodule path '<path>' failed
Failed to clone 'src/github.com/<user>/<repo>'. Retry scheduled
Cloning into '<path>'...
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
Please make sure you have the correct access rights
and the repository exists.
```

Este erro significa que, ou o repositório que você está tentando clonar tem submódulos aos quais você não tem acesso, ou você não tem uma chave SSH válida configurada.

Se você não tem acesso aos submódulos, resolva problemas entrando em contato com a pessoa que administra permissões para o repositório.

Se você não tiver uma chave SSH válida configurada, confira "[Como gerar uma nova chave SSH e adicioná-la ao agente SSH](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

{% windows %}

### Não foi possível ler a resposta do AskPass

```shell
error: unable to read askpass response from '/Users/<path>/GitHub Desktop.app/Contents/Resources/app/static/ask-pass-trampoline.sh'
fatal: could not read Username for 'https://github.com': terminal prompts disabled
```

Este erro pode ser causado por vários eventos.

Se as entradas `Command Processor` do Registro forem modificadas, o {% data variables.product.prodname_desktop %} responderá com o erro `Authentication failed`. Para verificar se estas entradas de registro foram modificadas, siga estas etapas.

1. Abra o Editor do Registro (`regedit.exe`) e procure os locais a seguir.
  `HKEY_CURRENT_USER\Software\Microsoft\Command Processor\`
  `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor\`
2. Verifique se há um valor `Autorun` em um desses locais.
3. Se houver um valor `Autorun`, exclua-o.

Se o seu nome de usuário do Windows tiver caracteres Unicode estendidos, isso pode causar um erro de resposta do AskPass. Para solucionar problemas, crie uma nova conta de usuário do Windows e migre seus arquivos para essa conta. Para obter mais informações, confira "[Criar uma conta de usuário no Windows](https://support.microsoft.com/en-us/help/13951/windows-create-user-account)" na documentação da Microsoft.

{% endwindows %}

## Leitura adicional
- "[Sobre a autenticação no GitHub](/github/authenticating-to-github/about-authentication-to-github)"
