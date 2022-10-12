---
title: Atualizar credenciais da keychain OSX
intro: 'Você precisará atualizar suas credenciais salvas no auxiliar `git-credential-osxkeychain` se alterar seu{% ifversion not ghae %} nome de usuário, senha ou{% endif %} token de acesso pessoal no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/getting-started-with-git/updating-credentials-from-the-macos-keychain
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: macOS Keychain credentials
ms.openlocfilehash: ce2e225bcff1aca0c034e564fe3233e5f9cb68d2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145126726'
---
{% tip %}

**Observação:** a atualização de credenciais por meio do conjunto de chaves do macOS só se aplica aos usuários que configuraram manualmente um PAT usando o auxiliar `osxkeychain` interno do macOS. 

Recomendamos [configurar o SSH](/articles/generating-an-ssh-key) ou atualizar para o [GCM](/get-started/getting-started-with-git/caching-your-github-credentials-in-git) (Gerenciador de Credenciais do Git). O GCM pode gerenciar a autenticação em seu nome (sem PATs manuais), incluindo a 2FA (autenticação de dois fatores).

{% endtip %}

{% data reusables.user-settings.password-authentication-deprecation %}

## Atualizar credenciais pelo Keychain Access

1. Clique no ícone do Spotlight (lente ampliada) no lado direito da barra de menu. Digite `Keychain access` e pressione a tecla ENTER para iniciar o aplicativo.
   ![Barra de pesquisa do Spotlight](/assets/images/help/setup/keychain-access.png)
2. Em Acesso ao Conjunto de Chaves, pesquise **{% data variables.command_line.backticks %}** .
3. Localize a entrada "senha da Internet" para `{% data variables.command_line.backticks %}`.
4. Edite ou exclua a entrada de acordo.

## Excluir credenciais pela linha de comando

Através da linha de comando, você pode usar o auxiliar de credenciais diretamente para apagar a entrada de keychain.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

Se isso for bem-sucedido, nada será impresso. Para testar se ele funciona, tente clonar um repositório privado do {% data variables.product.product_location %}. Se for solicitada uma senha, significa que a entrada da keychain foi excluída.

## Leitura adicional

- "[Como armazenar em cache suas credenciais do {% data variables.product.prodname_dotcom %} no Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
