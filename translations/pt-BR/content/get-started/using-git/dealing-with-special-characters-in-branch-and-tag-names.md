---
title: Lidando com caracteres especiais nos nomes do branch e tags
intro: 'O Git é muito permissivo sobre quais caracteres são permitidos nos nomes de branches e tags. Ao usar o Git em uma linha de comando, talvez seja necessário que você escape ou cite caracteres especiais.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Special characters in names
ms.openlocfilehash: e03b6ba963cef465f775620d353f14f0f5d92d36
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145094793'
---
## Sobre os nomes dos branches e tags

A maioria dos repositórios usa nomes de branches simples, como `main` ou `update-icons`. Em geral, os nomes de tags também seguem um formato básico, como um número de versão como `v1.2.3`. Os nomes de branches e de tags também podem usar o separador de caminho (`/`) para estrutura, por exemplo, `area/item` ou `level-1/level-2/level-3`. Além de algumas exceções, como não iniciar ou terminar um nome com uma barra ou ter barras consecutivas no nome, o Git tem poucas restrições sobre os caracteres que podem ser usados em nomes de branches e de tags. Para obter mais informações, confira "[git-check-ref-format](https://git-scm.com/docs/git-check-ref-format)" na documentação do Git.

## Por que você precisa escapar de caracteres especiais

Ao usar uma CLI, você pode passar por situações em que um branch ou tag contém caracteres especiais com um significado especial para o ambiente do seu shell. Para usar estes caracteres com segurança em um comando Git, eles devem ser citados ou escapados. Caso contrário, o comando poderá ter efeitos indesejados.

Por exemplo, o caractere `$` é usado por muitos shells para se referir a uma variável. A maioria dos shells interpreta um nome de branch válido como `hello-$USER`, como equivalente à palavra "olá", seguida de um hífen, seguido do valor atual da variável `USER`, em vez da cadeia de caracteres literal `hello-$USER`. Se um nome de branch incluir o caractere `$`, o shell precisará ser impedido de expandi-lo como uma referência variável. Da mesma forma, se um nome de branch contiver um ponto e vírgula (`;`), a maioria dos shells o interpretará como um separador de comando, ou seja, ele precisará ser colocado entre aspas ou ter escape.

## Como escapar dos caracteres especiais em nomes de branches e tags

A maioria dos nomes de branches e de tags com caracteres especiais pode ser tratada pela inclusão do nome em aspas simples, por exemplo, `'hello-$USER'`.

* No shell do [Bash](https://www.gnu.org/software/bash/), a colocação de uma cadeia de caracteres entre aspas simples preserva o valor literal dos caracteres nas aspas simples.
* O [Zsh](https://www.zsh.org/) se comporta de maneira semelhante ao Bash. No entanto, esse comportamento pode ser configurado com a opção `RC_QUOTES`.
* O [PowerShell](https://microsoft.com/powershell) também trata os caracteres literalmente quando estão entre aspas simples.

Para esses shells, a exceção principal é quando o nome do branch ou tag em si contém aspas simples. Neste caso, você deve consultar a documentação oficial para seu shell:

* [Documentação do Bash](https://www.gnu.org/software/bash/manual/)
* [Documentação do Zsh](https://zsh.sourceforge.io/Doc/)
* [Documentação do Fish](https://fishshell.com/docs/current/)
* [Documentação do PowerShell](https://docs.microsoft.com/en-gb/powershell/)

## Nomeando branches e tags

Se possível, crie nomes de branches e tags que não contenham caracteres especiais, pois seria necessário escapar deles. Um conjunto padrão seguro de caracteres para usar para nomes de branches e tags é:

* O alfabeto inglês (`a` a `z` e `A` a `Z`)
* Números (`0` a `9`)
* Um conjunto limitado de caracteres de pontuação:
  * ponto final (`.`)
  * hífen (`-`)
  * sublinhado (`_`)
  * barra '/' (`/`)

Para evitar confusão, você deve iniciar os nomes dos branches com uma letra.
