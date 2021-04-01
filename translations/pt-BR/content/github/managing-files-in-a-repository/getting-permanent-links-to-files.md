---
title: Links permanentes em arquivos
intro: 'Ao visualizar um arquivo em {% data variables.product.product_location %}, é possível pressionar a tecla "y" para atualizar a URL para um permalink com a versão exata do arquivo visualizado.'
redirect_from:
  - /articles/getting-a-permanent-link-to-a-file/
  - /articles/how-do-i-get-a-permanent-link-from-file-view-to-permanent-blob-url/
  - /articles/getting-permanent-links-to-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

{% tip %}

**Dica**: Pressione "?" em qualquer página de {% data variables.product.product_name %} para visualizar todos os atalhos de teclado disponíveis.

{% endtip %}

### As visualizações de arquivos mostram a versão mais recente de um branch

Ao visualizar um arquivo em {% data variables.product.product_location %}, normalmente você vê a versão do head atual de um branch.  Por exemplo:

* [https://github.com/github/hubot/blob/**master**/README.md](https://github.com/github/codeql/blob/main/README.md)

refere-se ao repositório `hubot` do GitHub e apresenta a versão atual do branch `master` do arquivo `README.md`.

A versão de um arquivo no head de um branch pode ser modificada assim que novos commits são feitos. Desta forma, caso você copie a URL normal, os conteúdos dos arquivos podem não ser os mesmos quando outra pessoa olhá-los posteriormente.

### Pressione <kbd>y</kbd> para gerar um permalink para um arquivo em um commit específico

Para um link permanente em uma versão específica de um arquivo que você vê, em vez de usar o nome do branch na URL (por exemplo: a parte `master` no exemplo acima), coloque o ID do commit.  Isso vinculará permanentemente a versão exata do arquivo naquele commit.  Por exemplo:

* [https://github.com/github/hubot/blob/**ed25584f5ac2520a6c28547ffd0961c7abd7ea49**/README.md](https://github.com/github/codeql/blob/b212af08a6cffbb434f3c8a2795a579e092792fd/README.md)

substitui `master` com um ID específico do commit e o conteúdo do arquivo não será modificado.

É incoveniente procurar o commit SHA manualmente, mas é possível digitar o atalho <kbd>y</kbd> para atualizar automaticamente a URL à versão do permalink.  Em seguida, você pode copiar a URL sabendo que qualquer pessoa com quem você compartilhá-la verá exatamente o que você vê.

{% tip %}

**Dica**: é possível colocar qualquer identificador em um commit da URL, inclusive nomes de branches, commits SHAS específicos ou mesmo tags!

{% endtip %}

### Criar um link permanente em um trecho de código

É possível criar um link permanente em uma linha específica ou conjunto de linhas de código de uma determinada versão de arquivo ou pull request. Para obter mais informações, consulte "[Criar um link permanente em um trecho de código](/articles/creating-a-permanent-link-to-a-code-snippet/)".

### Leia mais

- "[Arquivar um repositório GitHub ](/articles/archiving-a-github-repository)"
