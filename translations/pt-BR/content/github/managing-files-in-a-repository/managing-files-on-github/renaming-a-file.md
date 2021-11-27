---
title: Renomear um arquivo
intro: 'Você pode renomear qualquer arquivo dos repositórios diretamente no {% data variables.product.product_name %}. Ao renomear um arquivo, você tem a chance de [movê-lo para outro local](/articles/moving-a-file-to-a-new-location).'
redirect_from:
  - /articles/renaming-a-file
  - /github/managing-files-in-a-repository/renaming-a-file
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% tip %}

**Dicas**:

- Se você tentar renomear um arquivo em um repositório ao qual não tem acesso, bifurcaremos o projeto para sua conta de usuário e ajudaremos você a enviar [uma pull request](/articles/about-pull-requests) para o repositório original depois que fizer o commit da alteração.
- Os nomes de arquivos criados por meio da interface da web podem conter apenas caracteres alfanuméricos e hífens (`-`). Para usar outros caracteres, crie e faça commit dos arquivos localmente, depois faça push deles para o repositório.
- Alguns arquivos, como imagens, exigem que a renomeação seja feita usando a linha de comando. Para obter mais informações, consulte "[Renomear um arquivo usando a linha de comando](/articles/renaming-a-file-using-the-command-line)".

{% endtip %}

1. No repositório, navegue até o arquivo que deseja renomear.
2. No canto superior direito da exibição do arquivo, clique em {% octicon "pencil" aria-label="The edit icon" %} para abrir o editor de arquivos. ![Ícone Edit file (Editar arquivo)](/assets/images/help/repository/edit-file-icon.png)
3. No campo de nome do arquivo, insira o nome de arquivo que deseja atribuir. Você também pode atualizar o conteúdo do arquivo ao mesmo tempo. ![Editar um nome de arquivo](/assets/images/help/repository/changing-file-name.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
