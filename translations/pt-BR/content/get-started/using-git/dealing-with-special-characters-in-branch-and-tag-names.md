---
title: Lidando com caracteres especiais nos nomes do branch e tags
intro: 'O Git é muito permissivo sobre quais caracteres são permitidos nos nomes de branches e tags. Ao usar o Git em uma linha de comando, talvez seja necessário que você escape ou cite caracteres especiais.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Caracteres especiais em nomes
---

## Sobre os nomes dos branches e tags

A maioria dos repositórios usa nomes de branch simples, como `main` ou `update-icons`. Os nomes das etiquetas também geralmente seguem um formato básico, como um número de versão como `v1.2.3`. Ambos os nomes de branches e tags também podem usar o separador de caminho (`/`) para estrutura como, por exemplo, `area/item` ou `level-1/level-2/level-3`. Além de algumas exceções &mdash; como não iniciar ou terminar um nome com uma barra, ou ter barras consecutivas no nome &mdash; O Git tem muito poucas restrições sobre quais caracteres podem ser usados em nomes de branches e tags. Para obter mais informações, consulte "[git-check-ref-formato](https://git-scm.com/docs/git-check-ref-format)" na documentação do Git.

## Por que você precisa escapar de caracteres especiais

Ao usar uma CLI, você pode passar por situações em que um branch ou tag contém caracteres especiais com um significado especial para o ambiente do seu shell. Para usar estes caracteres com segurança em um comando Git, eles devem ser citados ou escapados. Caso contrário, o comando poderá ter efeitos indesejados.

Por exemplo, o caractere `$` é usado por muitos shells para referir-se a uma variável. A maioria dos shells interpretaria o nome de um branch válido como `hello-$USER` como um equivalente à palavra "hello", seguido por um hífen, seguido pelo valor atual do `USUÁRIO` variável, em vez da string literal `hello-$USER`. Se o nome de um branch incluir o caractere `$`, o shell deverá ser impedido de expandi-lo como uma referência variável. Da mesma forma, se um nome de branch contiver um ponto e vírgula (`;`), a maioria dos shells o interpretam como um separador de comando. Portanto, ele precisa ser citado ou escapado.

## Como escapar dos caracteres especiais em nomes de branches e tags

A maioria dos nomes de branches e tags com caracteres especiais podem ser administrados, incluindo o nome em aspas simples, por exemplo `'hello-$USER'`.

* No shell [Bash](https://www.gnu.org/software/bash/), que contém uma série de caracteres em aspas simples, preserva o valor literal dos caracteres dentro das aspas simples.
* [Zsh](https://www.zsh.org/) comporta-se de forma parecida ao Bash. No entanto este comportamento pode ser configurado usando a opção `RC_QUOTES`.
* [PowerShell](https://microsoft.com/powershell) também trata caracteres literalmente quando dentro de aspas simples.

Para esses shells, a exceção principal é quando o nome do branch ou tag em si contém aspas simples. Neste caso, você deve consultar a documentação oficial para seu shell:

* [Documentação do Bash](https://www.gnu.org/software/bash/manual/)
* [Documentação do Zsh](https://zsh.sourceforge.io/Doc/)
* [Documentação do Fish](https://fishshell.com/docs/current/)
* [Documentação do PowerShell](https://docs.microsoft.com/en-gb/powershell/)

## Nomeando branches e tags

Se possível, crie nomes de branches e tags que não contenham caracteres especiais, pois seria necessário escapar deles. Um conjunto padrão seguro de caracteres para usar para nomes de branches e tags é:

* O alfabeto inglês ( `a` a `z` e `A` a `Z`)
* Números (`0` a `9`)
* Um conjunto limitado de caracteres de pontuação:
  * ponto (`.`)
  * hífen (`-`)
  * sublinhado (`_`)
  * barra (`/`)

Para evitar confusão, você deve iniciar os nomes dos branches com uma letra.
