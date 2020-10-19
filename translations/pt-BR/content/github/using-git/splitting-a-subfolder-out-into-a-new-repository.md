---
title: Dividir uma subpasta em um novo repositório
redirect_from:
  - /articles/splitting-a-subpath-out-into-a-new-repository/
  - /articles/splitting-a-subfolder-out-into-a-new-repository
intro: Você pode transformar uma pasta em um repositório do Git repository em um novo repositório.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Se você criar um clone do repositório, não perderá nenhuma alteração ou histórico do Git quando dividir uma pasta e criar um repositório separado.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Altere o diretório de trabalho atual para o local em que deseja criar o novo repositório.
3. Clone o repositório que contém a subpasta.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY-NAME</em>
  ```
4. Altere o diretório de trabalho atual para o repositório clonado.
  ```shell
  $ cd <em>REPOSITORY-NAME</em>
  ```
5. Para descartar a subpasta do restante dos arquivos no repositório, execute [`git filter-branch`](https://git-scm.com/docs/git-filter-branch) fornecendo estas informações:
    - `FOLDER-NAME`: a pasta no projeto da qual deseja criar um repositório separado.

    {% windows %}

      {% tip %}

      **Dica:** os usuários do Windows devem usar `/` para delimitar as pastas.

      {% endtip %}

    {% endwindows %}
    - `BRANCH-NAME`: O branch-padrão para seu projeto atual, por exemplo, `main` ou `gh-pages`.
    ```shell
    $ git filter-branch --prune-empty --subdirectory-filter <em>FOLDER-NAME  BRANCH-NAME </em>
    # Filtra o branch especificado no diretório e remove os commits vazios
    > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
    > Ref 'refs/heads/<em>BRANCH-NAME</em>' was rewritten
    ```
  Agora, o repositório deve conter apenas os arquivos presentes na sua subpasta.

6. [Crie um repositório](/articles/creating-a-new-repository/) no {% data variables.product.product_name %}.
7. No topo da página Quick Setup (Configuração rápida) do novo repositório do {% data variables.product.product_name %}, clique em {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar a URL do repositório remote. ![Campo Copy remote repository URL (Copiar URL do repositório remote)](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

  {% tip %}

  **Dica:** para obter informações sobre a diferença entre URLs HTTPS e SSH, consulte "[Qual URL remote devo usar?](/articles/which-remote-url-should-i-use)"

  {% endtip %}

8. Verifique o nome remoto do repositório. Por exemplo, `origin` ou `upstream` são duas escolhas comuns.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY-NAME</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY-NAME</em>.git (push)
  ```

9. Configure uma nova URL remota para o novo repositório usando o nome e a URL do repositório remote copiados na etapa 7.
  ```shell
  git remote set-url origin https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git
  ```
10. Verifique se a URL remota mudou com o nome do novo repositório.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/NEW-REPOSITORY-NAME</em>.git (push)
  ```
11. Faça push das alterações para o novo repositório no {% data variables.product.product_name %}.
  ```shell
  git push -u origin <em>BRANCH-NAME</em>
  ```
