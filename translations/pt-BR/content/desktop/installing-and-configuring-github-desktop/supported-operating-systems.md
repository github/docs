---
title: Sistemas operacionais compatíveis
intro: 'Você pode usar o {% data variables.product.prodname_desktop %} em qualquer sistema operacional compatível.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /desktop/getting-started-with-github-desktop/supported-operating-systems
versions:
  free-pro-team: '*'
---

### Sobre sistemas operacionais compatíveis

Os sistemas operacionais a seguir são compatíveis com {% data variables.product.prodname_desktop %}.
- {% data variables.desktop.mac-osx-versions %}
- {% data variables.desktop.windows-versions %}. Você deve ter um sistema operacional de 64 bits para executar o {% data variables.product.prodname_desktop %}.

### Solucionar problemas no macOS
Se você estiver com problemas ao usar o {% data variables.product.prodname_desktop %} no macOS, aqui estão as resoluções para tentar. Para obter mais informações, consulte [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

#### O erro `O nome de usuário ou frase secreta que você inseriu não está correto` foi exibido após entrar na sua conta

Este erro pode ocorrer quando {% data variables.product.prodname_desktop %} não consegue acessar suas credenciais armazenadas na keychain.

Para solucionar problemas este erro, siga as etapas a seguir.

1. Abra o aplicativo "Acesso a Keychain".
2. Clique com o botão direito no **login** e, em seguida, clique em **Bloquear "login" da Keychain**. ![A opção "Bloquear Keychain "login"](/assets/images/help/desktop/mac-lock-keychain.png)
3. Clique com o botão direito no **login** e, em seguida, clique em **Desbloquear "login" da Keychain**. Siga as instruções na tela para terminar de desbloquear o "login" da Keychain. ![A opção "Desbloquear loing da "Keychain"](/assets/images/help/desktop/mac-unlock-keychain.png)
4. Efetue a autenticação novamente da sua conta em {% data variables.product.prodname_dotcom %} ou em {% data variables.product.prodname_enterprise %}.

#### Foi exibido o erro `Não foi possível criar o diretório temporário: permissão negada` após a verificação de atualizações

Este erro pode ser causado por falta de permissões para o diretório `~/Library/Caches/com.github.GitHubClient.ShipIt`. O {% data variables.product.prodname_desktop %} usa esse diretório para criar e descompactar arquivos temporários como parte da atualização do aplicativo.

Para solucionar problemas este erro, siga as etapas a seguir.

1. Feche o {% data variables.product.prodname_desktop %}.
2. Abra o "Localizador" e acesse `~/Library/Caches/`.
3. Clique com o botão direito em `com.github.GitHubClient.ShipIt` e, em seguida, clique em **Obter informações**.
4. Clique na seta à esquerda de "Compartilhar & Permissões".
5. Se o Privilégio à direita da sua conta de usuário não informar "Leitura & Gravação", clique no texto e, em seguida, clique em **Leitura & Gravação**. ![Opções de "Compartilhar & Permissões"](/assets/images/help/desktop/mac-adjust-permissions.png)
6. Abra {% data variables.product.prodname_desktop %} e verifique se há atualizações.

### Solucionar problemas no Windows
Se você estiver com problemas ao usar o {% data variables.product.prodname_desktop %} no Windows, aqui estão as resoluções para tentar. Para obter mais informações, consulte [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

#### Erro `A função de revogação não conseguiu verificar a revogação para o certificado`.

Este erro pode ocorrer se você estiver usando o {% data variables.product.prodname_desktop %} em uma rede corporativa que impede que o Windows verifique o status de revogação de um certificado.

Para solucionar problemas, entre em contato com o administrador do sistema.

#### Erro `git clone failed` erro ao clonar um repositório configurado com redirecionamento de pastas

O {% data variables.product.prodname_desktop %} não é compatível com repositórios configurados com o redirecionamento da pasta.

#### Erro de `cygheap base mismatch detected`

Este erro pode ocorrer quando o ASLR obrigatório está ativado. A habilitação do ASLR obrigatório afeta a biblioteca central do MSYS2, da qual o {% data variables.product.prodname_desktop %} depende para emular o processo de bifurcação.

Para solucionar problemas este erro, desabilite o Mandatory ASLR ou permita explicitamente todos os executáveis sob `<Git>\usr\bin` que dependem do MSYS2.
