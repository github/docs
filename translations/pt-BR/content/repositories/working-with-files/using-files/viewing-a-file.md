---
title: Viewing a file
intro: You can view raw file content or trace changes to lines in a file and discover how parts of the file evolved over time.
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
---

## Viewing or copying the raw file content

With the raw view, you can view or copy the raw content of a file without any styling.

{% data reusables.repositories.navigate-to-repo %}
1. Click the file that you want to view.
2. In the upper-right corner of the file view, click **Raw**. ![Screenshot of the Raw button in the file header](/assets/images/help/repository/raw-file-button.png)
3. Optionally, to copy the raw file content, in the upper-right corner of the file view, click **{% octicon "copy" aria-label="The copy icon" %}**.

## Viewing the line-by-line revision history for a file

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
