
Ao usar os eventos `push` e `pull_request`, é possível configurar um fluxo de trabalho para ser executado com base em quais caminhos de arquivo são alterados. Os filtros de caminho não são avaliados em pushes de tags.

Use filtro `caminhos` quando você quiser incluir padrões de caminho dos arquivos ou quando quiser que ambos incluam e excluam padrões de caminhos dos arquivos. Use o filtro `paths-ignore` quando você deseja excluir apenas padrões de caminho do arquivo. Você não pode usar os dois filtros `caminhos` e `paths-ignore` para o mesmo evento em um fluxo de trabalho.

Se você definir as `branches`/`branches-ignore` e `caminhos`, o fluxo de trabalho só será executado quando ambos os filtros forem satisfeitos.

As palavras-chave `paths` e `paths-ignore` aceitam padrões do glob que usam os caracteres curinga `*` e `**` para coincidir com mais de um nome de caminho. Para obter mais informações, consulte a "[Folha de consulta de filtro padrão](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)".

#### Exemplo: Incluindo caminhos

Se pelo menos um caminho corresponder a um padrão no filtro `paths`, o fluxo de trabalho será executado. Por exemplo, o fluxo de trabalho a seguir seria executado sempre que você fizer push de um arquivo JavaScript (`.js`).

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**Observação:** Se um fluxo de trabalho for ignorado devido à [filtragem do caminho](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), a [filtragem do caminho](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) ou [mensagem de commit](/actions/managing-workflow-runs/skipping-workflow-runs) as verificações associadas a esse fluxo de trabalho permanecerão em um estado "Pendente". Um pull request que requer que essas verificações sejam bem sucedidas será bloqueado do merge. Para obter mais informações, consulte "[Manuseio ignorado, mas exigiu verificações](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks#handling-skipped-but-required-checks)".

{% endnote %}

#### Exemplo: Excluindo caminhos

Quando todos os caminhos de nome correspondem a padrões em `paths-ignore`, o fluxo de trabalho não será executado. Se qualquer nome de caminho não corresponder a padrões em `paths-ignore`, mesmo que alguns nomes de caminhos correspondam aos padrões, o fluxo de trabalho será executado.

Um fluxo de trabalho com o seguinte filtro de caminho só será executado em eventos `push` que tiverem pelo menos um arquivo fora do diretório `docs` na raiz do repositório.

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### Exemplo: Incluindo e excluindo caminhos

Você não pode usar `caminhos` e `paths-ignore` para filtrar o mesmo evento em um único fluxo de trabalho. Se você deseja incluir e excluir padrões de caminho para um único evento, use o filtro `caminhos` junto com o caractere `!` para indicar quais caminhos devem ser excluídos.

Se você definir um caminho com o caractere `!`, você deverá definir pelo menos um caminho sem o caractere `!`. Se você deseja apenas excluir caminhos, use `paths-ignore`.

A ordem de definição dos padrões é importante:

- Um padrão negativo (precedido por `!`) depois de uma correspondência positiva excluirá o caminho.
- Um padrão positivo correspondente após uma correspondência negativa incluirá o caminho novamente.

Este exemplo é executado sempre que o evento `push` inclui um arquivo no diretório `sub-project` ou seus subdiretórios, a menos que o arquivo esteja no diretório `sub-project/docs`. Por exemplo, um push que alterou `sub-project/index.js` ou `sub-project/src/index.js` acionará uma execução de fluxo de trabalho, mas um push que altere somente`sub-project/docs/readme.md` não acionará.

```yaml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

#### Comparações Git diff

{% note %}

**Observação:** Se você fizer push de mais de 1.000 commits, ou se {% data variables.product.prodname_dotcom %} não gerar o diff devido a um tempo limite, o fluxo de trabalho sempre será executado.

{% endnote %}

O filtro determina se um fluxo de trabalho deve ser executado avaliando os arquivos alterados e comparando-os à lista de `paths-ignore` ou `paths`. Se não houver arquivos alterados, o fluxo de trabalho não será executado.

O {% data variables.product.prodname_dotcom %} gera a lista de arquivos alterados usando diffs de dois pontos para pushes e diffs de três pontos para pull requests:
- **Pull requests:** diffs de três pontos são uma comparação entre a versão mais recente do branch de tópico e o commit onde o branch de tópico foi sincronizado pela última vez com o branch de base.
- **Pushes para branches existentes:** um diff de dois pontos compara os SHAs head e base, um com o outro.
- **Pushes para novos branches:** um diff de dois pontos compara o principal do ancestral do commit mais extenso que foi feito push.

Os diffs limitam-se a 300 arquivos. Se houver arquivos alterados que não correspondam aos primeiros 300 arquivos retornados pelo filtro, o fluxo de trabalho não será executado. Talvez seja necessário criar filtros mais específicos para que o fluxo de trabalho seja executado automaticamente.

Para obter mais informações, consulte "[Sobre comparação de branches em pull requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)".
