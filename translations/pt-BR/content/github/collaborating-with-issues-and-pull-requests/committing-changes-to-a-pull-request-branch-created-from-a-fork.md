---
title: Fazer commit de alterações em um branch de pull request criado a partir de bifurcação
intro: Você pode fazer commit de alterações no branch de uma pull request que foi criada de uma bifurcação no seu repositório com permissão do criador da pull request.
redirect_from:
  - /articles/committing-changes-to-a-pull-request-branch-created-from-a-fork
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Só é possível fazer commits em branches da pull request que:
- esteja aberta em um repositório em que você tem acesso push e que foi criada de uma bifurcação desse repositório
- estão em uma bifurcação de propriedade do usuário
- tiver permissão concedida pelo criador da pull request
- não tenha [restrições de branch](/articles/about-branch-restrictions) que impedirá você de fazer commit

Somente o usuário que criou a pull request pode dar a você permissão para fazer push de commits na bifurcação de propriedade do usuário. Para obter mais informações, consulte "[Permitir alterações no branch de uma pull request criada de uma bifurcação](/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork)".

{% note %}

**Observação:** também é possível fazer commits no branch de uma pull request de uma bifurcação do seu repositório por meio do {% data variables.product.product_location %} criando sua própria cópia (ou bifurcação) da bifurcação do seu repositório e fazendo commit de alterações no mesmo branch head em que as alterações da pull request original foram criadas. Para obter diretrizes gerais, consulte "[Criar uma pull request de uma bifurcação](/articles/creating-a-pull-request-from-a-fork)".

{% endnote %}

1. Em

{% data variables.product.product_name %}, acesse a página principal da bifurcação (ou cópia do seu repositório) onde o branch do pull request foi criado.
{% data reusables.repositories.copy-clone-url %}
{% data reusables.command_line.open_the_multi_os_terminal %}
 {% tip %}

 **Dica:** se preferir clonar a bifurcação usando o {% data variables.product.prodname_desktop %}, consulte "[Clonar um repositório no {% data variables.product.prodname_desktop %}](/articles/cloning-a-repository/#cloning-a-repository-to-github-desktop)".

 {% endtip %}
4. Altere o diretório de trabalho atual para o local em que deseja baixar o diretório clonado.
  ```shell
  $ cd open-source-projects
  ```
5. Digite `git clone` e cole a URL copiada na Etapa 3.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  ```
6. Pressione **Enter**. Seu clone local estará criado.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>
  > Cloning into `FORK-OF-THE-REPOSITORY`...
  > remote: Contando objetos: 10, concluído.
  > remote: Compactando objetos: 100% (8/8), concluído.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```
 {% tip %}

 **Dica:** a mensagem de erro "fatal: destination path 'REPOSITORY-NAME' already exists and is not an empty directory" significa que seu diretório de trabalho atual já contém um repositório com o mesmo nome. Para resolver o erro, você deve clonar a bifurcação em outro diretório.

 {% endtip %}
7. Navegue para o seu novo repositório clonado.
  ```shell
  $ cd <em>FORK-OF-THE-REPOSITORY</em>
  ```
7. Alterne branches para o branch de comparação da pull request onde as alterações originais foram feitas. Se você navegar até a pull request original, visualizará o branch de comparação no topo da pull request. ![compare-branch-example](/assets/images/help/pull_requests/compare-branch-example.png) Neste exemplo, o branch de comparação é `test-branch`:
  ```shell
  $ git checkout <em>test-branch</em>
  ```

 {% tip %}

 **Dica:** para obter mais informações sobre branches de pull request, incluindo exemplos, consulte "[Criar uma pull request](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository)".

 {% endtip %}
8. Nesse ponto, você pode fazer qualquer coisa que desejar com este branch. É possível fazer push de novos commits para ele, executar alguns testes locais ou fazer merge de outros branches no branch. Faça modificações conforme desejado.
9. Depois de fazer commit de suas alterações no branch head da pull request, você pode fazer push de suas alterações até a pull request original diretamente. Neste exemplo, o branch head é `test-branch`:
  ```shell
  $ git push origin <em>test-branch</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>FORK-OF-THE-REPOSITORY</em>.git
  > 12da2e9..250e946  <em>test-branch</em> -> <em>test-branch</em>
  ```

Seus novos commits serão refletidos na pull request original do {% data variables.product.product_location %}.

### Leia mais

- "[Sobre bifurcações](/articles/about-forks)"
