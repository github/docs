---
title: Armazenar suas credenciais do GitHub no Git
redirect_from:
  - /firewalls-and-proxies
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/getting-started-with-git/caching-your-github-credentials-in-git
intro: 'Se você estiver [clonando repositórios do {% data variables.product.product_name %} usando HTTPS](/github/getting-started-with-github/about-remote-repositories), recomendamos você usar o {% data variables.product.prodname_cli %} ou o Git Credential Manager (GCM) para lembrar suas credenciais.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Caching credentials
ms.openlocfilehash: 203eed949beb3c1ada9c4c099cbaf214aac0c4f7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145093815'
---
{% tip %}

**Dica:** se você clonar repositórios do {% data variables.product.product_name %} usando SSH, poderá efetuar a autenticação usando uma chave SSH em vez de usar outras credenciais. Para obter informações sobre como configurar uma conexão SSH, confira "[Como gerar uma chave SSH](/articles/generating-an-ssh-key)".

{% endtip %}

## {% data variables.product.prodname_cli %}

O {% data variables.product.prodname_cli %} armazenará automaticamente suas credenciais do Git para você escolher `HTTPS` como protocolo preferido para operações Git e responder "sim" ao prompt que perguntará se você gostaria de efetuar a autenticação no Git com a suas credenciais do {% data variables.product.product_name %}.

1. [Instale](https://github.com/cli/cli#installation) a {% data variables.product.prodname_cli %} no macOS, no Windows ou no Linux.
2. Na linha de comando, insira `gh auth login` e siga os prompts.
   - Quando solicitado o protocolo preferido para operações Git, selecione `HTTPS`.
   - Quando perguntado se você deseja se autenticar no Git com suas credenciais do {% data variables.product.product_name %}, insira `Y`.

Para obter mais informações sobre como se autenticar com a {% data variables.product.prodname_cli %}, confira [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

## Gerenciador de credenciais do Git

O [GCM](https://github.com/GitCredentialManager/git-credential-manager) (Gerenciador de Credenciais do Git) é outra maneira de armazenar suas credenciais com segurança e conectar-se ao GitHub via HTTPS. Com o GCM, você não precisa [criar nem armazenar manualmente um PAT](/github/authenticating-to-github/creating-a-personal-access-token), pois o GCM gerencia a autenticação em seu nome, incluindo a 2FA (autenticação de dois fatores).

{% mac %}

1. Instale o Git usando o [Homebrew](https://brew.sh/):
  ```shell
  $ brew install git
  ```

2. Instale GCM usando o Homebrew:
  ```shell
  $ brew tap microsoft/git
  $ brew install --cask git-credential-manager-core
  ```
  No MacOS, você não precisa executar a `git config` porque o GCM configura automaticamente o Git para você.

{% data reusables.gcm-core.next-time-you-clone %}

Após a autenticação ser concluída com sucesso, suas credenciais serão armazenadas no keychain do macOS e serão usadas toda vez que você clonar uma URL de HTTPS. O Git não exigirá que você digite suas credenciais na linha de comando novamente, a menos que você altere suas credenciais.

{% endmac %}

{% windows %}

1. Instale o Git para o Windows, que inclui GCM. Para obter mais informações, confira "[Git para versões Windows](https://github.com/git-for-windows/git/releases/latest)" nas respectivas [página de versões](https://github.com/git-for-windows/git/releases/latest).

Recomenda-se instalar sempre a versão mais recente. No mínimo, instale a versão 2.29 ou superior, que é a primeira versão que oferece suporte do OAuth para o GitHub.

{% data reusables.gcm-core.next-time-you-clone %}

Depois de efetuar a autenticação com sucesso, as suas credenciais serão armazenadas no gerenciador de credenciais do Windows e serão usadas toda vez que você clonar uma URL de HTTPS. O Git não exigirá que você digite suas credenciais na linha de comando novamente, a menos que você altere suas credenciais.

<br>

{% warning %}

**Aviso:** as versões mais antigas do Git para Windows vieram com o Administrador de Credenciais do Git para Windows. Este produto antigo não é mais compatível e não pode se conectar ao GitHub via OAuth. Recomendamos que você atualize para [a versão mais recente do Git para Windows](https://github.com/git-for-windows/git/releases/latest).

{% endwarning %}

{% warning %}

**Aviso:** se você armazenou em cache credenciais incorretas ou desatualizadas no Gerenciador de Credencial para Windows, o Git não terá acesso ao {% data variables.product.product_name %}. Para redefinir as suas credenciais armazenadas em cache para que o Git peça para inserir suas credenciais, acesse o Gerenciador de Credenciais no Painel de Controle do Windows em Contas de Usuário > Gerenciador de Credenciais. Procure a entrada de {% data variables.product.product_name %} e exclua-a. 

{% endwarning %}

{% endwindows %}

{% linux %}

Para Linux, instale o Git e o GCM e, em seguida, configure o Git para usar o GCM.

1. Instale o Git a partir do sistema de pacotes da sua distribuição. As instruções vão variar dependendo da versão do Linux que você executar.

2. Install o GCM. Veja as [instruções no repositório do GCM](https://github.com/GitCredentialManager/git-credential-manager#linux-install-instructions), pois elas são diferentes, de acordo com a variante do Linux executada.

3. Configurar o Git para usar o GCM. Há várias lojas de apoio que você pode escolher. Portanto, consulte a documentação de do GCM para concluir a sua configuração. Para obter mais informações, confira "[GCM Linux](https://aka.ms/gcmcore-linuxcredstores)".

{% data reusables.gcm-core.next-time-you-clone %}

Depois de autenticado com sucesso, as suas credenciais serão armazenadas no seu sistema e serão usadas toda vez que você clonar uma URL de HTTPS. O Git não exigirá que você digite suas credenciais na linha de comando novamente, a menos que você altere suas credenciais.

Para obter mais opções para armazenar suas credenciais no Linux, confira [Armazenamento de Credencial](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage) no Pro Git.

{% endlinux %}

<br>

Para obter mais informações ou relatar problemas com o GCM, veja os documentos oficiais do GCM em "[Gerenciador de Credenciais do Git](https://github.com/GitCredentialManager/git-credential-manager)".
