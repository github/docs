---
title: Autenticar com o GitHub
shortTitle: Autenticação
intro: 'Você pode acessar com segurança os recursos da sua conta em {% data variables.product.prodname_desktop %} através da autenticação no {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/authenticating-to-github-using-the-browser
  - /desktop/getting-started-with-github-desktop/authenticating-to-github
  - /desktop/installing-and-configuring-github-desktop/authenticating-to-github
versions:
  free-pro-team: '*'
---

### Sobre a autenticação

Para manter sua conta segura, você deve autenticar antes de usar o {% data variables.product.prodname_desktop %} para acessar os recursos no {% data variables.product.prodname_dotcom %}.

Antes de autenticar, {% data reusables.desktop.get-an-account %}

{% mac %}

### Autenticando uma conta no {% data variables.product.prodname_dotcom %}

{% data reusables.desktop.mac-select-desktop-menu %}
{% data reusables.desktop.mac-select-accounts %}
3. À direita de "{% data variables.product.prodname_dotcom_the_website %}," clique **Iniciar sessão**. ![Botão Sign In (Entrar) do GitHub](/assets/images/help/desktop/mac-sign-in-github.png)
4. No painel "Entrar", clique em **Entrar usando seu navegador**. {% data variables.product.prodname_desktop %} abrirá seu navegador padrão. ![Link Sign in using your browser (Entrar via navegador)](/assets/images/help/desktop/sign-in-browser.png)

  {% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.authenticate-in-browser %}
{% data reusables.desktop.2fa-in-browser %}
7. Depois que o {% data variables.product.prodname_dotcom %} autenticar sua conta, siga as instruções para retornar a {% data variables.product.prodname_desktop %}.

### Autenticando uma conta no {% data variables.product.prodname_enterprise %}

{% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.mac-select-desktop-menu %}
{% data reusables.desktop.mac-select-accounts %}
{% data reusables.desktop.choose-product-authenticate %}
4. Para adicionar uma conta no {% data variables.product.prodname_enterprise %}, digite suas credenciais em "Endereço de servidor corporativo" e clique em **Continuar**. ![Botão Sign In (Entrar) do GitHub Enterprise](/assets/images/help/desktop/mac-sign-in-button-enterprise.png)
{% data reusables.desktop.retrieve-2fa %}

{% endmac %}

{% windows %}

### Autenticando uma conta no {% data variables.product.prodname_dotcom %}

{% data reusables.desktop.windows-choose-options %}
{% data reusables.desktop.windows-select-accounts %}
3. À direita do "GitHub.com", clique **Iniciar sessão**. ![Botão Sign In (Entrar) do GitHub](/assets/images/help/desktop/windows-sign-in-github.png)
4. No painel Sign in (Entrar), clique em **Sign in using your browser** (Entrar via navegador). ![Link Sign in using your browser (Entrar via navegador)](/assets/images/help/desktop/sign-in-browser.png)

  {% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.authenticate-in-browser %}
{% data reusables.desktop.2fa-in-browser %}
7. Depois que o {% data variables.product.prodname_dotcom %} autenticar sua conta, siga as instruções para retornar a {% data variables.product.prodname_desktop %}.

### Autenticando uma conta no {% data variables.product.prodname_enterprise %}


{% data reusables.user_settings.password-authentication-deprecation-desktop %}

{% data reusables.desktop.windows-choose-options %}
{% data reusables.desktop.windows-select-accounts %}
{% data reusables.desktop.choose-product-authenticate %}
4. Para adicionar uma conta no {% data variables.product.prodname_enterprise %}, digite suas credenciais em "Endereço de servidor corporativo" e clique em **Continuar**. ![Botão Sign In (Entrar) do GitHub Enterprise](/assets/images/help/desktop/windows-sign-in-button-enterprise.png)
{% data reusables.desktop.retrieve-2fa %}

{% endwindows %}

### Solução de problemas de autenticação

Se o {% data variables.product.prodname_desktop %} encontrar um erro de autenticação, você pode usar mensagens de erro para solucionar problemas.

Se você encontrar um erro de autenticação, primeiro tente sair e entrar novamente em sua conta no {% data variables.product.prodname_desktop %}.

Para alguns erros, {% data variables.product.prodname_desktop %} enviará a você uma mensagem de erro. Se você não receber a mensagem, ou caso queira encontrar mais informações sobre qualquer erro, visualize os arquivos de log de {% data variables.product.prodname_desktop %} usando as seguintes etapas.

{% mac %}

1. Use o menu suspenso **Help** (Ajuda) e clique em **Show Logs in Finder** (Mostrar Logs no Finder). ![O botão Mostrar Logs no Finder](/assets/images/help/desktop/mac-show-logs.png)
2. Selecione o arquivo de log a partir da data em que você encontrou o erro de autenticação.

{% endmac %}

{% windows %}

1. Use o menu suspenso **Help** (Ajuda) e clique em **Show Logs in Explorer** (Mostrar Logs no Explorer). ![O botão Mostrar Logs no Explorer](/assets/images/help/desktop/windows-show-logs.png)
2. Selecione o arquivo de log a partir da data em que você encontrou o erro de autenticação.

{% endwindows %}

Revise abaixo as informações de solução de problemas para a mensagem de erro que você encontrar.

#### Credenciais inválidas

```shell
Erro: credenciais inválidas
```

Este erro significa que há um problema com suas credenciais da conta armazenada.

Para solucionar problemas, saia da sua conta no {% data variables.product.prodname_desktop %} e entre novamente.

#### Token vazio

```shell
info: [ui] [AppStore.withAuthenticatingUser] conta encontrada para o repositório: node - <username> (token vazio)
```

Este erro significa que {% data variables.product.prodname_desktop %} não foi possível encontrar o token de acesso que ele criou no keychain do sistema.

Para solucionar problemas, saia da sua conta no {% data variables.product.prodname_desktop %} e entre novamente.

#### Repositório não encontrado

```shell
fatal: repositório 'https://github.com/<user>/<repo>.git' não encontrado

(O erro foi analisado como 8: O repositório parece não existir mais. Talvez você não tenha acesso, ou ele pode ter sido excluído ou renomeado.)
```

Este erro significa que você não tem permissão para acessar o repositório que está tentando clonar.

Para solucionar problemas, entre em contato com a pessoa da sua organização que administra as permissões.

#### Não foi possível ler a partir do repositório remoto

```shell
git@github.com: Permissão negada (publickey).
fatal: Não foi possível ler a partir do repositório remoto.

Por favor, verifique se você tem os direitos de acesso corretos e se o repositório existe.
```

Este erro significa que você não tem uma chave SSH válida configurada.

Para solucionar problemas, consulte "[Gerando uma nova chave SSH e adicionando-a ao agente SSH](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

#### Falha ao clonar

```shell
fatal: o clone do 'git@github.com:<user>/<repo>' no caminho do submódulo '<path>' falhou
Falha ao clonar 'src/github.com/<user>/<repo>'. Nova tentativa agendada
Clonando em '<path>'...
git@github.com: Permissão negada (publickey).
fatal: Não foi possível ler a partir do repositório remoto.
Por favor, verifique se você tem os direitos de acesso corretos e se o repositório existe.
```

Este erro significa que, ou o repositório que você está tentando clonar tem submódulos aos quais você não tem acesso, ou você não tem uma chave SSH válida configurada.

Se você não tem acesso aos submódulos, resolva problemas entrando em contato com a pessoa que administra permissões para o repositório.

Se você não tem uma chave SSH válida configurada, consulte "[Gerando uma nova chave SSH e adicionando-a ao agente SSH](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

{% windows %}

#### Não foi possível ler a resposta do AskPass

```shell
erro: incapaz de ler a resposta de askpass a partir de '/Users/<path>/GitHub Desktop.app/Contents/Resources/static/ask-pass-trampoline.sh'
fatal: não pôde ler o nome de usuário para 'https://github.com': terminal prompts desativado
```

Este erro pode ser causado por vários eventos.

Se as entradas de registro do `Processador de Comando` forem modificadas, {% data variables.product.prodname_desktop %} responderá com um erro de` falha de Autenticação`. Para verificar se estas entradas de registro foram modificadas, siga estas etapas.

1. Abra o Editor de Registro (`regedit.exe`) e navegue para os seguintes locais. `` HKEY_CURRENT_USER\Software\Microsoft\Command Processor\` ``HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Command Processor\`
2. Verifique se há um valor de `Autorun` em algum local.
3. Se houver um valor `Autorun`, exclua-o.

Se o seu nome de usuário do Windows tiver caracteres Unicode estendidos, isso pode causar um erro de resposta do AskPass. Para solucionar problemas, crie uma nova conta de usuário do Windows e migre seus arquivos para essa conta. Para obter mais informações, consulte "[Criar uma conta de usuário no Windows](https://support.microsoft.com/en-us/help/13951/windows-create-user-account)" na documentação da Microsoft.

{% endwindows %}

### Leia mais
- "[Sobre a autenticação no GitHub](/github/authenticating-to-github/about-authentication-to-github)"
