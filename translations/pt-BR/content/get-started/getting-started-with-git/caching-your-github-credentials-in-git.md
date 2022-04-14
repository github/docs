---
title: Armazenar suas credenciais do GitHub no Git
redirect_from:
  - /firewalls-and-proxies
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/getting-started-with-git/caching-your-github-credentials-in-git
intro: 'Se você estiver [clonando repositórios de {% data variables.product.product_name %} que usam HTTPS](/github/getting-started-with-github/about-remote-repositories), recomendamos que você use {% data variables.product.prodname_cli %} ou Git Credential Manager (GCM) para lembrar suas credenciais.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Armazenando credenciais
---

{% tip %}

Dica de **:** Se você clonar {% data variables.product.product_name %} repositórios usando SSH, você pode efetuar a autenticação usando uma chave SSH em vez de usar outras credenciais. Para obter informações sobre como configurar uma conexão SSH, consulte "[Gerar uma chave SSH](/articles/generating-an-ssh-key)".

{% endtip %}

## {% data variables.product.prodname_cli %}

{% data variables.product.prodname_cli %} armazenará automaticamente suas credenciais do Git para você escolher `HTTPS` como protocolo preferido para operações do Git e responder "sim" à instrução que pergunta se você gostaria de efetuar a autenticação no Git com a suas credenciais de {% data variables.product.product_name %}.

1. [Instale](https://github.com/cli/cli#installation) {% data variables.product.prodname_cli %} no macOS, Windows ou Linux.
2. Na linha de comando, digite `gh auth login` e, em seguida, siga as instruções.
   - Quando for solicitado o protocolo preferido para operações do Git, selecione `HTTPS`.
   - Quando for perguntado se você gostaria de efetuar a autenticação no Git com as suas credenciais de {% data variables.product.product_name %}, insira `Y`.

Para mais informações sobre a autenticação com {% data variables.product.prodname_cli %}, consulte [`login gh`](https://cli.github.com/manual/gh_auth_login).

## Gerenciador de credenciais do Git

[O Gerenciador de Credencial do Git](https://github.com/GitCredentialManager/git-credential-manager) (GCM) é outra maneira de armazenar suas credenciais de forma segura e conectar-se ao GitHub por HTTPS. Com o GCM, você não precisa manualmente [criar e armazenar um PAT](/github/authenticating-to-github/creating-a-personal-access-token), como o GCM gerencia a autenticação no seu nome, incluindo a 2FA (autenticação de dois fatores).

{% mac %}

1. Instale o Git usando [Homebrew](https://brew.sh/):
  ```shell
  $ brew install git
  ```

2. Instale GCM usando o Homebrew:
  ```shell
  $ brew tap microsoft/git
  $ brew install --cask git-credential-manager-core
  ```
  Para MacOS, você não precisa executar a `git config` porque o GCM automaticamente configura o Git para você.

{% data reusables.gcm-core.next-time-you-clone %}

Após a autenticação ser concluída com sucesso, suas credenciais serão armazenadas no keychain do macOS e serão usadas toda vez que você clonar uma URL de HTTPS. O Git não exigirá que você digite suas credenciais na linha de comando novamente, a menos que você altere suas credenciais.

{% endmac %}

{% windows %}

1. Instale o Git para o Windows, que inclui GCM. Para obter mais informações, consulte "[Git para versões do Windows](https://github.com/git-for-windows/git/releases/latest)" a partir da sua [página de versões](https://github.com/git-for-windows/git/releases/latest).

Recomenda-se instalar sempre a versão mais recente. No mínimo, instale a versão 2.29 ou superior, que é a primeira versão que oferece suporte do OAuth para o GitHub.

{% data reusables.gcm-core.next-time-you-clone %}

Depois de efetuar a autenticação com sucesso, as suas credenciais serão armazenadas no gerenciador de credenciais do Windows e serão usadas toda vez que você clonar uma URL de HTTPS. O Git não exigirá que você digite suas credenciais na linha de comando novamente, a menos que você altere suas credenciais.

<br>

{% warning %}

**Aviso:** As versões mais antigas do Git para Windows vieram com o Administrador de Credenciais do Git para Windows. Este produto antigo não é mais compatível e não pode se conectar ao GitHub via OAuth. Recomendamos que você faça atualização para [a versão mais recente do Git para Windows](https://github.com/git-for-windows/git/releases/latest).

{% endwarning %}

{% warning %}

**Aviso:** Se você fez cache de credenciais incorretas ou desatualizadas no Gerenciador de Credencial para Windows, o Git não terá acesso a {% data variables.product.product_name %}. Para redefinir as suas credenciais de cache para que o Git peça para inserir suas credenciais, acesse o Gerenciador de credenciais no Painel de Controle do Windows em Contas de Usuário > Gerenciador de Credenciais. Procure a entrada de {% data variables.product.product_name %} e exclua-a.

{% endwarning %}

{% endwindows %}

{% linux %}

Para Linux, instale o Git e o GCM e, em seguida, configure o Git para usar o GCM.

1. Instale o Git a partir do sistema de pacotes da sua distribuição. As instruções vão variar dependendo da versão do Linux que você executar.

2. Install o GCM. Consulte as [instruções no repositório do GCM ](https://github.com/GitCredentialManager/git-credential-manager#linux-install-instructions), já que elas variarão dependendo da versão do Linux que você executar.

3. Configurar o Git para usar o GCM. Há várias lojas de apoio que você pode escolher. Portanto, consulte a documentação de do GCM para concluir a sua configuração. Para obter mais informações, consulte "[GCM Linux](https://aka.ms/gcmcore-linuxcredstores)".

{% data reusables.gcm-core.next-time-you-clone %}

Depois de autenticado com sucesso, as suas credenciais serão armazenadas no seu sistema e serão usadas toda vez que você clonar uma URL de HTTPS. O Git não exigirá que você digite suas credenciais na linha de comando novamente, a menos que você altere suas credenciais.

Para obter mais opções para armazenar suas credenciais no Linux, consulte [Armazenamento de Credencial](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage) no Pro Git.

{% endlinux %}

<br>

Para obter mais informações ou relatar problemas com o GCM, consulte a documentação oficial do GCM no "[Gerenciado de Credenciais do Git](https://github.com/GitCredentialManager/git-credential-manager)
