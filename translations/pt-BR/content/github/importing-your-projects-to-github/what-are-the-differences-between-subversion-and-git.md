---
title: Diferenças entre o Subversion e o Git
intro: 'Os repositórios do Subversion (SVN) são semelhantes aos do Git, mas com várias diferenças em relação à arquitetura dos projetos.'
redirect_from:
  - /articles/what-are-the-differences-between-svn-and-git/
  - /articles/what-are-the-differences-between-subversion-and-git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Estrutura do diretório

Cada *referência* ou instantâneo etiquetado de um commit em um projeto é organizado em subdiretórios específicos, como `trunk`, `branches` e `tags`. Por exemplo, um projeto do SVN com dois recursos em desenvolvimento pode ter esta aparência:

      sample_project/trunk/README.md
      sample_project/trunk/lib/widget.rb
      sample_project/branches/new_feature/README.md
      sample_project/branches/new_feature/lib/widget.rb
      sample_project/branches/another_new_feature/README.md
      sample_project/branches/another_new_feature/lib/widget.rb

Um fluxo de trabalho do SVN fica assim:

* O diretório `trunk` representa a versão estável mais recente de um projeto.
* O trabalho de recurso ativo é desenvolvido com subdiretórios em `branches`.
* Quando um recurso é concluído, o diretório dele passa por merge em `trunk` e é removido.

Os projetos do Git também são armazenados em um único diretório. No entanto, o Git obscurece os detalhes das referências armazenando-os em um diretório *.git* especial. Por exemplo, um projeto do Git com dois recursos em desenvolvimento pode ter esta aparência:

      sample_project/.git
      sample_project/README.md
      sample_project/lib/widget.rb

Um fluxo de trabalho do Git fica assim:

* Um repositório do Git armazena o histórico completo de todos os branches e tags dentro do diretório *.git*.
* A última versão estável está contida no branch-padrão.
* O trabalho de recurso ativo é desenvolvido em branches separados.
* Quando um recurso é concluído, o branch de recurso é mesclado no branch-padrão e excluído.

Ao contrário do SVN, a estrutura de diretórios no Git permanece a mesma, mas o conteúdo dos arquivos é alterado de acordo com o branch que você possui.

### Incluir subprojetos

Um *subprojeto* é um projeto desenvolvido e gerenciado em algum lugar fora do projeto principal. Normalmente, você importa um subprojeto para adicionar alguma funcionalidade ao seu projeto sem precisar manter o código por conta própria. Sempre que o subprojeto é atualizado, você pode sincronizá-lo com o projeto para garantir que tudo esteja atualizado.

No SVN, um subprojeto é chamado de *SVN externo*. No Git, ele é chamado de *submódulo do Git*. Embora conceitualmente semelhantes, os submódulos do Git não são mantidos atualizados de forma automática. É preciso solicitar explicitamente que uma nova versão seja trazida para o projeto.

Para obter mais informações, consulte “[Submódulos de ferramentas Git](https://git-scm.com/book/en/Git-Tools-Submodules)" na documentação do Git.

### Preservar o histórico

O SVN está configurado para pressupor que o histórico de um projeto nunca é alterado. O Git permite modificar alterações e commits anteriores usando ferramentas como [`git rebase`](/github/getting-started-with-github/about-git-rebase).

{% tip %}

[O GitHub oferece suporte a clientes do Subversion](/articles/support-for-subversion-clients), o que pode produzir alguns resultados inesperados se você está usando o Git e o SVN no mesmo projeto. Se você tiver manipulado o histórico de commits do Git, esses mesmos commits permanecerão para sempre no histórico do SVN. Caso tenha feito commit acidentalmente em alguns dados confidenciais, temos [um artigo para ajudar você a removê-lo do histórico do Git](/articles/removing-sensitive-data-from-a-repository).

{% endtip %}

### Leia mais

- "[Propriedades do Subversion com suporte no GitHub](/articles/subversion-properties-supported-by-github)"
- ["Fazer branch e merge" no livro _Git SCM_ book](https://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging)
- "[Importar código-fonte para o GitHub](/articles/importing-source-code-to-github)"
- "[Ferramentas de migração do código-fonte](/articles/source-code-migration-tools)"
