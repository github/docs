---
title: Armazenar suas credenciais do GitHub no Git
redirect_from:
  - /firewalls-and-proxies/
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
intro: 'Se você estiver [clonando repositórios de {% data variables.product.product_name %} usando HTTPS](/github/using-git/which-remote-url-should-i-use), você poderá usar um auxiliar de credenciais para pedir ao Git que lembre suas credenciais.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Se você clonar repositórios do {% data variables.product.product_name %} usando SSH, você irá efetuar a autenticação usando uma chave SSH em vez de usar outras credenciais. Para obter informações sobre como configurar uma conexão SSH, consulte "[Gerar uma chave SSH](/articles/generating-an-ssh-key)".

{% mac %}

{% tip %}

**Dicas:**

- Você precisa de um Git **1.7.10** ou mais recente para usar o auxiliar de credenciais osxkeychain.
- Se você instalou o Git usando o [Homebrew](http://brew.sh/), o `osxkeychain helper` já estará instalado.
- Se você estiver executando o Mac OS X 10.7 e superior e instalou o Git por meio das ferramentas de linha de comando Xcode da Apple, o `osxkeychain helper` será incluído automaticamente na instalação do seu Git.

{% endtip %}

Instale o Git e o `osxkeychain helper` e diga ao Git para usá-lo.

1. Descubra se o Git e o `osxkeychain helper` já estão instalados:
  ```shell
  $ git credential-osxkeychain
  # Test for the cred helper
  > Usage: git credential-osxkeychain &lt;get|store|erase>
  ```
2. Se o `osxkeychain helper` não estiver instalado e você estiver executando o OS X versão 10.9 ou superior, seu computador solicitará que você o baixe como parte das ferramentas de linha de comando Xcode:
  ```shell
  $ git credential-osxkeychain
  > xcode-select: note: no developer tools were found at '/Applications/Xcode.app',
  > requesting install. Escolha uma opção na caixa de diálogo para baixar as ferramentas de desenvolvedor de linha de comando.
  ```

 Outra opção é instalar o Git e o `osxkeychain helper` usando o [Homebrew](http://brew.sh/):
  ```shell
  $ brew install git
  ```

4. Diga ao Git para usar o `osxkeychain helper` com a configuração global `credential.helper`:
  ```shell
  $ git config --global credential.helper osxkeychain
  # Set git to use the osxkeychain credential helper
  ```

Na próxima vez que você clonar uma URL de HTTPS que exigir autenticação, o Git solicitará seu nome de usuário e senha. {% data reusables.user_settings.password-authentication-deprecation %}

Após a autenticação ser concluída com sucesso, suas credenciais serão armazenadas no keychain do macOS e serão usadas toda vez que você clonar uma URL de HTTPS. Você não será obrigado a inserir suas credenciais no Git novamente a menos que você altere suas credenciais.

{% endmac %}

{% windows %}

{% tip %}

**Dica:** é necessário o Git **1.7.10** ou mais recente para usar o auxiliar de credenciais.

{% endtip %}

Você também pode instalar um Git shell nativo, como [Git para Windows](https://git-for-windows.github.io/). Com ele, suas credenciais serão armazenadas se você executar o seguinte comando:

```shell
$ git config --global credential.helper wincred
```

{% endwindows %}

{% linux %}

{% tip %}

**Dica:** é necessário o Git **1.7.10** ou mais recente para usar o auxiliar de credenciais.

{% endtip %}

Ative o auxiliar de credenciais para que o Git salve a senha na memória por algum tempo. Por padrão, o Git armazenará sua senha no cache por 15 minutos.

1. No Terminal, insira o seguinte:
  ```shell
  $ git config --global credential.helper cache
  # Set git to use the credential memory cache
  ```
2. Para alterar o tempo limite padrão do cache da senha, insira o seguinte:
  ```shell
  $ git config --global credential.helper 'cache --timeout=3600'
  # Set the cache to timeout after 1 hour (setting is in seconds)
  ```

{% endlinux %}

### Leia mais

- "[Atualizar credenciais do keychain do OSX](/articles/updating-credentials-from-the-osx-keychain/)"
- "[Criando um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)"
