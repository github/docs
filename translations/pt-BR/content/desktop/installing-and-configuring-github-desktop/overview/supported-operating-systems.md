---
title: Sistemas operacionais compatíveis
intro: 'Você pode usar o {% data variables.product.prodname_desktop %} em qualquer sistema operacional compatível.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /desktop/getting-started-with-github-desktop/supported-operating-systems
  - /desktop/installing-and-configuring-github-desktop/supported-operating-systems
versions:
  fpt: '*'
shortTitle: Supported OS
ms.openlocfilehash: 13e148ccf8e254c4e40f9e20ad6c5af083e21d8c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095117'
---
## Sobre sistemas operacionais compatíveis

Os sistemas operacionais a seguir são compatíveis com {% data variables.product.prodname_desktop %}.
- {% data variables.desktop.mac-osx-versions %}
- {% data variables.desktop.windows-versions %}. Você deve ter um sistema operacional de 64 bits para executar o {% data variables.product.prodname_desktop %}.

## Solucionar problemas no macOS
Se você estiver com problemas ao usar o {% data variables.product.prodname_desktop %} no macOS, aqui estão as resoluções para tentar. Para obter mais informações, confira [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

### Erro `The username or passphrase you entered is not correct` após a entrada na sua conta

Este erro pode ocorrer quando {% data variables.product.prodname_desktop %} não consegue acessar suas credenciais armazenadas na keychain.

Para solucionar problemas este erro, siga as etapas a seguir.

1. Abra o aplicativo "Acesso a Keychain".
2. Clique com o botão direito do mouse em **Logon** e clique em **Bloquear "Logon" do Conjunto de Chaves**.
  ![A opção Bloquear "Logon" do Conjunto de Chaves](/assets/images/help/desktop/mac-lock-keychain.png)
3. Clique com o botão direito do mouse em **Logon** e clique em **Desbloquear "Logon" do Conjunto de Chaves**. Siga as instruções na tela para terminar de desbloquear o "login" da Keychain.
  ![A opção Desbloquear "Logon" do Conjunto de Chaves](/assets/images/help/desktop/mac-unlock-keychain.png)
4. Efetue a autenticação novamente da sua conta em {% data variables.product.prodname_dotcom %} ou em {% data variables.product.prodname_enterprise %}.

### Erro `Could not create temporary directory: Permission denied` após a verificação de atualizações

Esse erro pode ser causado por permissões ausentes para o diretório `~/Library/Caches/com.github.GitHubClient.ShipIt`. O {% data variables.product.prodname_desktop %} usa esse diretório para criar e descompactar arquivos temporários como parte da atualização do aplicativo.

Para solucionar problemas este erro, siga as etapas a seguir.

1. Feche o {% data variables.product.prodname_desktop %}.
2. Abra o "Localizador" e procure `~/Library/Caches/`.
3. Clique com o botão direito do mouse em `com.github.GitHubClient.ShipIt` e clique em **Obter Informações**.
4. Clique na seta à esquerda de "Compartilhamento e Permissões".
5. Se o Privilégio à direita da sua conta de usuário não indicar "Leitura e Gravação", clique no texto e clique em **Leitura e Gravação**.
  ![As opções de "Compartilhamento e Permissões"](/assets/images/help/desktop/mac-adjust-permissions.png)
6. Abra {% data variables.product.prodname_desktop %} e verifique se há atualizações.

## Solucionar problemas no Windows
Se você estiver com problemas ao usar o {% data variables.product.prodname_desktop %} no Windows, aqui estão as resoluções para tentar. Para obter mais informações, confira [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

### `The revocation function was unable to check revocation for the certificate.` erro(s)

Este erro pode ocorrer se você estiver usando o {% data variables.product.prodname_desktop %} em uma rede corporativa que impede que o Windows verifique o status de revogação de um certificado.

Para solucionar problemas, entre em contato com o administrador do sistema.

### Erro `git clone failed` ao clonar um repositório configurado com o Redirecionamento de Pasta

O {% data variables.product.prodname_desktop %} não é compatível com repositórios configurados com o redirecionamento da pasta.

### `cygheap base mismatch detected` erro(s)

Este erro pode ocorrer quando o ASLR obrigatório está ativado. A habilitação do ASLR obrigatório afeta a biblioteca central do MSYS2, da qual o {% data variables.product.prodname_desktop %} depende para emular o processo de bifurcação.

Para solucionar esse erro, desabilite o ASLR obrigatório ou permita explicitamente todos os executáveis em `<Git>\usr\bin` que dependem do MSYS2.
