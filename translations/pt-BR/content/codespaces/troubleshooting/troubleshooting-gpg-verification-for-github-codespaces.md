---
title: Como resolver problemas de verificação GPG para o GitHub Codespaces
shortTitle: GPG verification
intro: Este artigo fornece conselhos de solução de problemas para erros relacionados à assinatura de seus commits em codespaces.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: f3a6537d1ee9087803054347689591c2b217e42e
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167107'
---
Se você habilitar a verificação GPG, o {% data variables.product.prodname_github_codespaces %} assina automaticamente os seus commits em codespaces que você cria com base em repositórios selecionados. Para obter mais informações, confira "[Como gerenciar a verificação GPG do {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)".

{% data reusables.codespaces.gpg-in-active-codespaces %}

Se {% data variables.product.prodname_github_codespaces %} não assinar um commit, você poderá ver um erro semelhante ao a seguir.

```Shell
$ git commit -m 'Initial commit'
error: gpg failed to sign the data
fatal: failed to write commit object
```

Você poderá encontrar esse erro se: 

- Tiver desabilitado a verificação GPG e estiver tentando fazer um commit regular e não assinado em um codespace existente.
- Você habilitou a verificação GPG, mas substituiu a configuração do Git necessária para {% data variables.product.prodname_github_codespaces %} assinar seus commits, por exemplo, vinculando {% data variables.product.prodname_github_codespaces %} a um repositório dotfiles que contém arquivos de configuração do Git.

## Erros após desabilitar a verificação GPG

Quando você habilita a verificação GPG, {% data variables.product.prodname_github_codespaces %} assina todos os commits que você faz em codespaces por padrão. Ele faz isso definindo o valor de configuração do Git `commit.gpgsign` como `true`.

Se você tiver desabilitado a verificação GPG e estiver trabalhando em um codespace existente, esse valor ainda será definido como `true`. Isso significa que {% data variables.product.prodname_github_codespaces %} tentará assinar seus commits, mas não será possível fazer isso, pois você desabilitou a configuração de verificação GPG.

Para continuar fazendo commits regulares e não assinados em seu codespace, redefina `commit.gpgsign` para o valor padrão de `false` inserindo o comando a seguir no terminal.

```Shell{:copy}
git config --unset commit.gpgsign
```

Para verificar se o valor foi removido corretamente da configuração, você pode inserir `git config --list`. Você não deve ver um valor para `commit.gpgsign` na lista.

## Erros causados pela configuração conflitante

Para assinar automaticamente seus commits, {% data variables.product.prodname_github_codespaces %} define determinados valores de configuração do Git em seu codespace. Se você substituir os valores definidos por {% data variables.product.prodname_github_codespaces %}, talvez não consiga assinar seus commits. 

Você poderá estar substituindo inadvertidamente esses valores se tiver vinculado {% data variables.product.prodname_github_codespaces %} a um repositório dotfiles que contém arquivos de configuração do Git. Para obter mais informações sobre como usar dotfiles com {% data variables.product.prodname_github_codespaces %}, confira "[Como personalizar {% data variables.product.prodname_github_codespaces %} para sua conta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)".

### Verificar se há uma configuração conflitante

Para assinar seus commits com GPG, {% data variables.product.prodname_github_codespaces %} define automaticamente os valores de configuração do Git a seguir no nível do sistema.

| Definição de configuração | Valor necessário |
| --------------------- | -------------- |
| `user.name` | Precisa corresponder ao nome completo definido em seu perfil do {% data variables.product.prodname_dotcom %} |
| `credential.helper` | Precisa ser definida como `/.codespaces/bin/gitcredential_github.sh` |
| `gpg.program` | Precisa ser definida como `/.codespaces/bin/gh-gpgsign` |

Para verificar se esses valores estão definidos corretamente em um codespace, você pode usar o comando `git config --list --show-origin`. Como {% data variables.product.prodname_github_codespaces %} define essa configuração no nível do sistema, as definições de configuração necessárias devem vir de `/usr/local/etc/gitconfig`.

```Shell
$ git config --list --show-origin
file:/usr/local/etc/gitconfig   credential.helper=/.codespaces/bin/gitcredential_github.sh
file:/usr/local/etc/gitconfig   user.name=Mona Lisa
file:/usr/local/etc/gitconfig   gpg.program=/.codespaces/bin/gh-gpgsign
```

Além dos valores listados acima, você poderá encontrar erros se os dotfiles usados em seus codespaces contiverem qualquer um dos valores a seguir.

- O valor de configuração do Git `user.signingkey`
- O valor de configuração do Git `commit.gpgsign`
- Um `GITHUB_TOKEN` definido manualmente

### Remover a configuração conflitante

Se você quiser manter a verificação GPG automática para o {% data variables.product.prodname_github_codespaces %} habilitado, será necessário remover qualquer configuração conflitante dos dotfiles usados em seus codespaces.

Por exemplo, se o arquivo global `.gitconfig` em seu computador local contiver um valor `gpg.program` e você tiver enviado esse arquivo por push a um repositório dotfiles vinculado a {% data variables.product.prodname_github_codespaces %}, talvez você queira remover `gpg.program` desse arquivo e defini-lo no nível do sistema em seu computador local.

{% note %}

**Observação**: todas as alterações no repositório dotfiles serão aplicadas a novos codespaces, mas não aos codespaces existentes.

{% endnote %}

1. No computador local, abra um terminal.
2. Para remover o valor conflitante de `~/.gitconfig` (Mac/Linux) ou `C:\Users\YOUR-USER\.gitconfig` (Windows), use o comando `git config --global --unset`.

   ```Shell
   $ git config --global --unset gpg.program
   ```
3. Envie por push a alteração para o repositório dotfiles em {% data variables.product.prodname_dotcom %}.
4. Opcionalmente, para manter a configuração local, defina o valor novamente em um arquivo de configuração do Git que você não envia por push para o repositório dotfiles. 

   Por exemplo, você pode usar o sinalizador `--system` para definir a configuração no arquivo no nível do sistema em `PATH/etc/gitconfig`, em que `PATH` é o diretório no qual o Git está instalado em seu sistema.
   
   ```Shell
   $ git config --system gpg.program gpg2
   ```

Como alternativa, se o repositório dotfiles contiver um script de instalação em um arquivo reconhecido, como `install.sh`, você poderá usar a variável de ambiente `$CODESPACES` para adicionar lógica condicional, como a configuração `gpg.program` somente quando você não estiver em um codespace. No exemplo a seguir, `-z "$CODESPACES"` retornará `true` se você não estiver em um codespace.

```Shell{:copy}
if [ -z "$CODESPACES" ]; then
  git config --global gpg.program gpg2
fi
```

## Leitura adicional
- "[Sobre a verificação da assinatura de commit](/authentication/managing-commit-signature-verification/about-commit-signature-verification)"
- [`git config`](https://git-scm.com/docs/git-config) na documentação oficial do Git
