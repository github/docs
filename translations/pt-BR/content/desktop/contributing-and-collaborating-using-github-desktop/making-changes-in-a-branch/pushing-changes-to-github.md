---
title: Fazer push de alterações no GitHub
shortTitle: Fazer push de alterações
intro: 'À medida que você faz commit das alterações no seu projeto localmente, você pode fazer push dessas alterações no {% data variables.product.prodname_dotcom %} para que outras pessoas possam acessá-las a partir do repositório remoto.'
permissions: People with write permissions can push changes to a repository.
redirect_from:
  - /desktop/contributing-to-projects/pushing-changes-to-github
  - /desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github
versions:
  free-pro-team: '*'
---
### Sobre o envio de alterações para {% data variables.product.prodname_dotcom %}

Quando você faz push das alterações, você envia as alterações confirmadas em seu repositório local para o repositório remoto no {% data variables.product.prodname_dotcom %}. Se você alterar seu projeto localmente e desejar que outras pessoas tenham acesso às alterações, você deve fazer push das alterações para {% data variables.product.prodname_dotcom %}.

Antes de fazer push das alterações, você deve atualizar seu branch local para incluir quaisquer commits adicionados ao repositório remoto. Se alguém fez commits no controle remoto que não estão em seu branch local, {% data variables.product.prodname_desktop %} solicitará que você bosque os novos commits antes de fazer push de suas alterações para evitar conflitos de merge. Para obter mais informações, consulte "[Sincronizando seu branch](/desktop/contributing-to-projects/syncing-your-branch)".

{% data reusables.desktop.protected-branches %}

### Fazendo push das alterações para {% data variables.product.prodname_dotcom %}

{% note %}

**Observação:** {% data variables.product.prodname_desktop %} rejeitará um push se exceder certos limites.

- Um push contém um arquivo grande sobre {% data variables.large_files.max_github_size %}.
- Um push está acima de {% data variables.large_files.max_file_size %} em termos de tamanho total.

Se você configurar o {% data variables.large_files.product_name_long %} para rastrear seus arquivos grandes, poderá fazer push de arquivos grandes que normalmente seriam rejeitados. Para obter mais informações, consulte "[Sobre o {% data variables.large_files.product_name_long %} e o {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)".

{% endnote %}

{% data reusables.desktop.push-origin %}
2. Se {% data variables.product.prodname_desktop %} solicitar que você busque novos commits do controle remoto, clique em **Fetch**. ![O botão Fetch](/assets/images/help/desktop/fetch-newer-commits.png)
3. Opcionalmente, clique em **Criar Pull Request** para abrir um pull request e fazer uma colaboração nas suas alterações. Para obter mais informações, consulte "[Criando um problema ou um pull request](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)" ![O botão Criar Pull Request](/assets/images/help/desktop/create-pull-request.png)

### Leia mais
- "[Push](/github/getting-started-with-github/github-glossary/#push)" no glossário {% data variables.product.prodname_dotcom %}
- "[Fazendo commit e revisando as alterações no seu projeto](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)"
