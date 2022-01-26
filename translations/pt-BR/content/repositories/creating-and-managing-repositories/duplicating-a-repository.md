---
title: Duplicar um repositório
intro: 'Para manter um espelho de um repositório sem a bifurcação, é possível executar um comando especial de clone e, em seguida, fazer push do espelho para o novo repositório.'
redirect_from:
  - /articles/duplicating-a-repo
  - /articles/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

{% ifversion fpt or ghec %}

{% note %}

**Observação:** Se você tem um projeto hospedado em outro sistema de controle de versão, você poderá importar automaticamente seu projeto para {% data variables.product.prodname_dotcom %} usando a ferramenta Importador de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Sobre o importador de {% data variables.product.prodname_dotcom %}](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)."

{% endnote %}

{% endif %}

Antes de fazer push do repositório original para sua nova cópia ou _espelho_ do repositório, você deverá [criar o novo repositório](/articles/creating-a-new-repository) em {% data variables.product.product_location %}. Nesses exemplos, `exampleuser/new-repository` ou `exampleuser/mirrored` são os espelhos.

## Espelhar um repositório

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crie um clone bare do repositório.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. Faça espelhamento/push no novo repositório.
  ```shell
  $ cd <em>old-repository</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
4. Remova o repositório local temporário que você criou anteriormente.
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>
  ```

## Espelhar um repositório que contém objetos do {% data variables.large_files.product_name_long %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crie um clone bare do repositório. Substitua o exemplo de nome de usuário pelo nome da pessoa ou da organização a quem pertence o repositório e substitua o exemplo de nome de repositório pelo nome do repositório que você deseja duplicar.
  ```shell
  $ git clone --bare https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>old-repository</em>.git
  ```
3. Navegue até o repositório que você acabou de clonar.
  ```shell
  $ cd <em>old-repository</em>
  ```
4. Extraia os objetos do {% data variables.large_files.product_name_long %} do repositório.
  ```shell
  $ git lfs fetch --all
  ```
5. Faça espelhamento/push no novo repositório.
  ```shell
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>new-repository</em>.git
  ```
6. Faça push nos objetos do {% data variables.large_files.product_name_long %} do repositório no seu espelho.
  ```shell
  $ git lfs push --all https://github.com/<em>exampleuser/new-repository.git</em>
  ```
7. Remova o repositório local temporário que você criou anteriormente.
  ```shell
  $ cd ..
  $ rm -rf <em>old-repository</em>
  ```

## Espelhar um repositório em outro local

Se você deseja espelhar um repositório em outro local e ainda obter atualizações do original, é possível clonar um espelho e fazer push das alterações periodicamente.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Crie um clone bare espelhado do repositório.
  ```shell
  $ git clone --mirror https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>repository-to-mirror</em>.git
  ```
3. Defina o local de push no espelho.
  ```shell
  $ cd <em>repository-to-mirror</em>
  $ git remote set-url --push origin https://{% data variables.command_line.codeblock %}/<em>exampleuser</em>/<em>mirrored</em>
  ```
Assim como um clone bare, um clone espelhado inclui todos os branches remotes e tags, mas todas as referências locais serão substituídas todas as vezes que você fizer fetch, assim ele sempre será o mesmo do repositório original. O push no espelho é simplificado pela configuração da URL para pushes.

4. Para atualizar o espelho, obtenha atualizações e faça push.
  ```shell
  $ git fetch -p origin
  $ git push --mirror
  ```
{% ifversion fpt or ghec %}
## Leia mais

* "[Enviando por push as alterações para o GitHub](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github#pushing-changes-to-github)"
* "[Sobre o armazenamento de arquivos grandes do Git e do GitHub Desktop](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop)"
* "[Sobre o Importador do GitHub](/get-started/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer)"

{% endif %}
