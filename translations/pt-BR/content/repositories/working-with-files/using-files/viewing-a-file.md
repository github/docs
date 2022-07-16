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

{% ifversion blame-ignore-revs %}

## Ignorar commits na exibição do último responsável

Todas as revisões especificadas no arquivo `.git-blame-ignore-revs`, que deve estar no diretório raiz do repositório, estão ocultas da exibição de último responsável, que usa a configuração `git blame --ignore-revs-file`. Para obter mais informações, consulte [`git blame --ignore-revs-file`](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt) na documentação do Git.

1. No diretório raiz do seu repositório, crie um arquivo denominado `.git-blame-ignore-revs`.
2. Adicione as hashes de commit que você deseja excluir da visualização de último responsável para esse arquivo. Recomendamos que o arquivo seja estruturado da seguinte forma, incluindo comentários:

    ```ini
    # .git-blame-ignore-revs
    # Removed semi-colons from the entire codebase
    a8940f7fbddf7fad9d7d50014d4e8d46baf30592
    # Converted all JavaScript to TypeScript
    69d029cec8337c616552756310748c4a507bd75a
    ```

3. Faça o commit e faça push das alterações.

Agora, quando você visitar a visualização do último responsável, as revisões listadas não serão incluídas na visualização do último responsável. Você verá um banner **Ignoring revisions in .git-blame-ignore-revs** indicando que alguns commits podem ser ocultados:

![Captura de tela de um banner na visualização dos últimos responsáveis vinculada ao arquivo .git-blame-ignore-revs](/assets/images/help/repository/blame-ignore-revs-file.png)

Isso pode ser útil quando alguns commits fizerem amplas alterações no seu código. Você pode usar o arquivo ao executar `git blame` localmente:

```shell
git blame --ignore-revs-file .git-blame-ignore-revs
```

You can also configure your local git so it always ignores the revs in that file:

```shell
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

{% endif %}
