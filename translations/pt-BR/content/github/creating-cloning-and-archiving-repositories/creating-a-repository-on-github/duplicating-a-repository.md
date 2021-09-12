---
title: Duplicar um repositório
intro: 'Para duplicar um repositório sem bifurcá-lo, você pode executar um comando especial de clone e depois fazer espelhamento/push no novo repositório.'
redirect_from:
  - /articles/duplicating-a-repo/
  - /articles/duplicating-a-repository
  - /github/creating-cloning-and-archiving-repositories/duplicating-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Para poder duplicar um repositório e fazer push (ou seja, _espelhamento_) na nova cópia do repositório, é preciso [criar o novo repositório](/articles/creating-a-new-repository) no {% data variables.product.product_location %}. Nesses exemplos, `exampleuser/new-repository` ou `exampleuser/mirrored` são os espelhos.

### Espelhar um repositório

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

### Espelhar um repositório que contém objetos do {% data variables.large_files.product_name_long %}

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

### Espelhar um repositório em outro local

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

Assim como um clone bare, um clone espelhado inclui todos os branches remotes e tags, mas todas as referências locais serão substituídas todas as vezes que você fizer fetch, assim ele sempre será o mesmo do repositório original. O push no espelho é simplificado pela configuração da URL para pushes. Para atualizar o espelho, obtenha atualizações e faça push.

```shell
$ git fetch -p origin
$ git push --mirror
```
