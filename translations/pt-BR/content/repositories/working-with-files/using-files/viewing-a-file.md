---
title: Visualizando um arquivo
intro: Você pode visualizar o conteúdo do arquivo sem processamento ou rastrear alterações nas linhas em um arquivo e descobrir como as partes do arquivo evoluíram ao longo do tempo.
redirect_from:
  - /articles/using-git-blame-to-trace-changes-in-a-file
  - /articles/tracing-changes-in-a-file
  - /articles/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/tracking-changes-in-a-file
  - /github/managing-files-in-a-repository/managing-files-on-github/tracking-changes-in-a-file
  - /repositories/working-with-files/using-files/tracking-changes-in-a-file
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View files and track file changes
ms.openlocfilehash: 7d34e776cb1747ee749531e49abf6f0e3d052b3b
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179840'
---
## Visualizando ou copiando o conteúdo do arquivo sem processamento

Com a visualização sem processamento, você pode visualizar ou copiar o conteúdo não processado de um arquivo sem qualquer estilo.

{% data reusables.repositories.navigate-to-repo %}
1. Clique no arquivo que você deseja visualizar.
2. No canto superior direito da exibição de arquivo, clique em **Bruto**.
![Captura de tela do botão Bruto no cabeçalho do arquivo](/assets/images/help/repository/raw-file-button.png)
3. Opcionalmente, para copiar o conteúdo do arquivo bruto, no canto superior direito da exibição de arquivo, clique em **{% octicon "copy" aria-label="The copy icon" %}** .

## Visualizando o histórico de revisão linha por linha para um arquivo

Com a exibição de blame, você pode ver o histórico de revisão linha a linha de um arquivo inteiro ou o histórico de revisão de uma única linha em um arquivo clicando em {% octicon "versions" aria-label="The prior blame icon" %}. Sempre que você clicar em {% octicon "versions" aria-label="The prior blame icon" %}, verá as informações da revisão anterior dessa linha, incluindo quem fez o commit da alteração e quando.

![Exibição blame do Git](/assets/images/help/repository/git_blame.png)

Em um arquivo ou em uma solicitação de pull, use também o menu {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} para ver o blame do Git para uma linha ou um intervalo de linhas selecionado.

![Menu kebab com opção para exibir o recurso blame do Git relacionado a uma determinada linha](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

**Dica:** na linha de comando, use também `git blame` para ver o histórico de revisão de linhas em um arquivo. Para obter mais informações, confira a [documentação do `git blame` do Git](https://git-scm.com/docs/git-blame).

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Clique para abrir o arquivo cujo histórico de linhas você deseja exibir.
3. No canto superior direito da exibição de arquivo, clique em **Blame** para abrir a exibição de blame.
![Botão Blame](/assets/images/help/repository/blame-button.png)
4. Para ver as revisões anteriores de uma linha específica ou um novo blame, clique em {% octicon "versions" aria-label="The prior blame icon" %} até encontrar as alterações em que está interessado em ver.
![Botão Blame anterior](/assets/images/help/repository/prior-blame-button.png)

{% ifversion blame-ignore-revs %}

## Ignorar os commits na exibição de blame

Todas as revisões especificadas no arquivo `.git-blame-ignore-revs`, que precisam estar no diretório raiz do repositório, ficam ocultas na exibição de blame usando a definição de configuração `git blame --ignore-revs-file` do Git. Para obter mais informações, confira [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt) na documentação do Git.

1. No diretório raiz do repositório, crie um arquivo chamado `.git-blame-ignore-revs`.
2. Adicione os hashes de commit que deseja excluir da exibição de blame desse arquivo. Recomendamos que o arquivo seja estruturado da seguinte maneira, incluindo os comentários:

    ```ini
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

3. Faça commit e efetue push das alterações.

Agora, quando você acessar a exibição de blame, as revisões listadas não serão incluídas no blame. Você verá uma faixa **Ignorando revisões em .git-blame-ignore-revs**, indicando que alguns commits podem estar ocultos:

![Captura de tela de uma faixa na exibição de blame vinculada ao arquivo .git-blame-ignore-revs](/assets/images/help/repository/blame-ignore-revs-file.png)

Isso pode ser útil quando alguns commits fazem alterações extensas no código. Use também o arquivo ao executar `git blame` localmente:

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

Você também pode configurar seu git local para que ele sempre ignore as revisões nesse arquivo:

```shell
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

{% endif %}

## Ignorar `.git-blame-ignore-revs` na exibição de blame

Se a exibição de blame de um arquivo mostrar **Ignorar revisões em .git-blame-ignore-revs**, você ainda poderá ignorar `.git-blame-ignore-revs` e ver a exibição de blame normal. Na URL, acrescente um `~` ao SHA e **Ignorar revisões em .git-blame-ignore-revs** irá desaparecer.
