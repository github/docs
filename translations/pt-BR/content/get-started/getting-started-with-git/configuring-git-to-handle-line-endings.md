---
title: Configurar o Git para uso com delimitadores de linha
intro: 'Para evitar problemas com diffs, é possível configurar o Git para operar adequadamente com delimitadores de linhas.'
redirect_from:
  - /dealing-with-lineendings
  - /line-endings
  - /articles/dealing-with-line-endings
  - /articles/configuring-git-to-handle-line-endings
  - /github/using-git/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/configuring-git-to-handle-line-endings
  - /github/getting-started-with-github/getting-started-with-git/configuring-git-to-handle-line-endings
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Handle line endings
ms.openlocfilehash: 4aa89f244e45da6905d6d5348c84faf8d5e6418c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884202'
---
## Sobre os delimitadores de linha
Toda vez que você pressiona <kbd>return</kbd> no seu teclado, você insere um caractere invisível denominado delimitadores de linha. Os diferentes sistemas operacionais gerenciam os delimitadores de formas diferentes.

Ao colaborar em projetos com Git e {% data variables.product.product_name %}, o Git pode produzir resultados inesperados se, por exemplo, você estiver trabalhando em uma máquina que use o Windows e o seu colaborador dizer uma mudança no macOS.

Você pode configurar o Git para gerenciar os delimitadores automaticamente para que você possa colaborar efetivamente com pessoas que usam diferentes sistemas operacionais.

## Configurações globais para delimitadores de linhas

O comando `git config core.autocrlf` é usado para alterar a forma como o Git lida com delimitadores de linha. É um argumento único.

{% mac %}

No macOS, basta passar `input` para a configuração. Por exemplo:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for macOS
```

{% endmac %}

{% windows %}

No Windows, basta passar `true` para a configuração. Por exemplo:

```shell
$ git config --global core.autocrlf true
# Configure Git to ensure line endings in files you checkout are correct for Windows.
# For compatibility, line endings are converted to Unix style when you commit files.
```

{% endwindows %}

{% linux %}

No Linux, basta passar `input` para a configuração. Por exemplo:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for Linux
```

{% endlinux %}

## Configurações por repositórios

Opcionalmente, você pode configurar um arquivo *.gitattributes* para gerenciar como o Git lê delimitadores de linha em um repositório específico. Quando você faz commit desse arquivo em um repositório, ele substitui a configuração `core.autocrlf` para todos os colaboradores do repositório. Isso garante um comportamento consistente para todos os usuários, independentemente das configurações e do ambiente Git.

O arquivo *.gitattributes* deve ser criado na raiz do repositório e deve ser feito o commit como qualquer outro arquivo.

Um arquivo *.gitattributes* se parece com uma tabela com duas colunas:

* À esquerda está o nome do arquivo para o Git fazer a correspondência.
* À direita está a configuração do delimitador de linha que o Git deve usar para esses arquivos.

### Exemplo

Veja um arquivo *.gitattributes* de exemplo. Você pode usá-lo como um modelo para os seus repositórios:

```
# Set the default behavior, in case people don't have core.autocrlf set.
* text=auto

# Explicitly declare text files you want to always be normalized and converted
# to native line endings on checkout.
*.c text
*.h text

# Declare files that will always have CRLF line endings on checkout.
*.sln text eol=crlf

# Denote all files that are truly binary and should not be modified.
*.png binary
*.jpg binary
```

Você observará que os arquivos são combinados – `*.c`, `*.sln`, `*.png` –, separados por um espaço e, em seguida, obtém uma configuração – `text`, `text eol=crlf`, `binary`. Iremos analisar algumas possíveis configurações abaixo.

- `text=auto` O Git vai manipular os arquivos da forma que achar melhor. Essa é uma boa opção padrão.

- `text eol=crlf` O Git sempre converterá delimitadores de linha em `CRLF` no check-out. Você deve usar isso para arquivos que devem manter finais `CRLF`, mesmo no OSX ou Linux.

- `text eol=lf` O Git sempre converterá delimitadores de linha em `LF` no check-out. Você deve usar isso para arquivos que devem manter os delimitadores LF, mesmo no Windows.

- `binary` O Git entenderá que os arquivos especificados não são texto e não deverá tentar alterá-los. A configuração `binary` também é um alias para `-text -diff`.

## Atualizar um repositório após alterar delimitadores de linha

Ao definir a opção `core.autocrlf` ou fazer commit de um arquivo *.gitattributes*, você poderá descobrir que o Git relata alterações nos arquivos que você não modificou. O Git mudou os delimitadores para corresponder à sua nova configuração.

Para garantir que todos os delimitadores de linha no repositório correspondam à sua nova configuração, faça backup de seus arquivos com o Git, exclua todos os arquivos no repositório (exceto os do diretório `.git`) e, em seguida, restaure os arquivos de uma só vez.

1. Salva seus arquivos atuais no Git, assim seu trabalho não será perdido.
  ```shell
  $ git add . -u
  $ git commit -m "Saving files before refreshing line endings"
  ```
2. Adiciona todos os seus arquivos alterados novamente e normaliza os delimitadores de linha.
  ```shell
  $ git add --renormalize .
  ```
3. Mostra os arquivos regravados e normalizados.
  ```shell
  $ git status
  ```
4. Faz commit das alterações em seu repositório.
  ```shell
  $ git commit -m "Normalize all the line endings"
  ```

## Leitura adicional

- [Personalizando o Git – Atributos Git](https://git-scm.com/book/en/Customizing-Git-Git-Attributes) no livro Pro Git
- [git-config](https://git-scm.com/docs/git-config) nas páginas de manual do Git
- [Introdução – Configuração do Git pela primeira vez](https://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup) no livro Pro Git
- [Mind the End of Your Line](http://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/) de [Tim Clem](https://github.com/tclem)
