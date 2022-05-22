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
shortTitle: Ver arquivos e acompanhar as alterações de arquivos
---

## Visualizando ou copiando o conteúdo do arquivo sem processamento

Com a visualização sem processamento, você pode visualizar ou copiar o conteúdo não processado de um arquivo sem qualquer estilo.

{% data reusables.repositories.navigate-to-repo %}
1. Clique no arquivo que você deseja visualizar.
2. No canto superior direito da visualização de arquivo, clique em **Sem processamento**. ![Captura de tela do botão sem processamento no cabeçalho do arquivo](/assets/images/help/repository/raw-file-button.png)
3. Opcionalmente, para copiar o conteúdo do arquivo não processado no canto superior direito da visualização do arquivo, clique em **{% octicon "copy" aria-label="The copy icon" %}**.

## Visualizando o histórico de revisão linha por linha para um arquivo

Com a exibição blame, você pode ver o histórico de revisão linha por linha de um arquivo inteiro ou exibir o histórico de revisão de uma única linha dentro de um arquivo clicando em {% octicon "versions" aria-label="The prior blame icon" %}. Toda vez que você clicar em {% octicon "versions" aria-label="The prior blame icon" %}, verá as informações anteriores de revisão relativas a essa linha, inclusive quem realizou a alteração e quando.

![Exibição blame do Git](/assets/images/help/repository/git_blame.png)

Em um arquivo ou uma pull request, também é possível usar o menu {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} para exibir o recurso blame do Git relacionado a uma determinada linha ou um intervalo de linhas.

![Menu kebab com opção para exibir o recurso blame do Git relacionado a uma determinada linha](/assets/images/help/repository/view-git-blame-specific-line.png)

{% tip %}

**Dica:** na linha de comando, você também pode usar `git blame` para exibir o histórico de revisão das linhas dentro de um arquivo. Para obter mais informações, consulte [Documentação sobre `git blame` no Git](https://git-scm.com/docs/git-blame).

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Clique para abrir o arquivo cujo histórico de linhas você deseja exibir.
3. No canto superior direito da exibição do arquivo, clique em **Blame** para abrir a exibição blame. ![Botão Blame (Blame)](/assets/images/help/repository/blame-button.png)
4. Para ver revisões anteriores de uma linha específica ou tornar a usar o recurso blame, clique em {% octicon "versions" aria-label="The prior blame icon" %} até encontrar as alterações que você deseja exibir. ![Botão Prior blame (Blame anterior)](/assets/images/help/repository/prior-blame-button.png)

{% if blame-ignore-revs %}

## Ignore commits in the blame view
{% note %}

**Note:** Ignoring commits in the blame view is currently in public beta and subject to change.

{% endnote %}

All revisions specified in the `.git-blame-ignore-revs` file, which must be in the root directory of your repository, are hidden from the blame view using Git's `git blame --ignore-revs-file` configuration setting. For more information, see [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt) in the Git documentation.

1. In the root directory of your repository, create a file named `.git-blame-ignore-revs`.
2. Add the commit hashes you want to exclude from the blame view to that file. We recommend the file to be structured as follows, including comments:

    ```ini
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

3. Commit and push the changes.

Now when you visit the blame view, the listed revisions will not be included in the blame. You'll see an **Ignoring revisions in .git-blame-ignore-revs** banner indicating that some commits may be hidden:

![Screenshot of a banner on the blame view linking to the .git-blame-ignore-revs file](/assets/images/help/repository/blame-ignore-revs-file.png)

This can be useful when a few commits make extensive changes to your code. You can use the file when running `git blame` locally as well:

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

{% endif %}
