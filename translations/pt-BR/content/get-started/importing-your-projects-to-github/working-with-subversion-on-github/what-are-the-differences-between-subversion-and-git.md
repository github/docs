---
title: Diferenças entre o Subversion e o Git
intro: 'Os repositórios do Subversion (SVN) são semelhantes aos do Git, mas com várias diferenças em relação à arquitetura dos projetos.'
redirect_from:
  - /articles/what-are-the-differences-between-svn-and-git
  - /articles/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/what-are-the-differences-between-subversion-and-git
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Subversion & Git differences
ms.openlocfilehash: cbe328bf3d2fbf3a603f6eef1559715ad48ca7fe
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126701'
---
## Estrutura do diretório

Cada *referência*, ou instantâneo rotulado de um commit, em um projeto é organizado em subdiretórios específicos, como `trunk`, `branches` e `tags`. Por exemplo, um projeto do SVN com dois recursos em desenvolvimento pode ter esta aparência:

      sample_project/trunk/README.md
      sample_project/trunk/lib/widget.rb
      sample_project/branches/new_feature/README.md
      sample_project/branches/new_feature/lib/widget.rb
      sample_project/branches/another_new_feature/README.md
      sample_project/branches/another_new_feature/lib/widget.rb

Um fluxo de trabalho do SVN fica assim:

* O diretório `trunk` representa a última versão estável de um projeto.
* O trabalho de recursos ativos é desenvolvido em subdiretórios em `branches`.
* Quando um recurso é concluído, o diretório de recursos é mesclado em `trunk` e removido.

Os projetos do Git também são armazenados em um único diretório. No entanto, o Git oculta os detalhes das referências armazenando-as em um diretório *.git* especial. Por exemplo, um projeto do Git com dois recursos em desenvolvimento pode ter esta aparência:

      sample_project/.git
      sample_project/README.md
      sample_project/lib/widget.rb

Um fluxo de trabalho do Git fica assim:

* Um repositório Git armazena todo o histórico de todos os branches e de todas as tags no diretório *.git*.
* A última versão estável está contida no branch-padrão.
* O trabalho de recurso ativo é desenvolvido em branches separados.
* Quando um recurso é concluído, o branch de recurso é mesclado no branch-padrão e excluído.

Ao contrário do SVN, a estrutura de diretórios no Git permanece a mesma, mas o conteúdo dos arquivos é alterado de acordo com o branch que você possui.

## Incluir subprojetos

Um *subprojeto* é um projeto que é desenvolvido e gerenciado em algum lugar fora do projeto principal. Normalmente, você importa um subprojeto para adicionar alguma funcionalidade ao seu projeto sem precisar manter o código por conta própria. Sempre que o subprojeto é atualizado, você pode sincronizá-lo com o projeto para garantir que tudo esteja atualizado.

No SVN, um subprojeto é chamado de *externo SVN*. No Git, ele é chamado de *submódulo Git*. Embora conceitualmente semelhantes, os submódulos do Git não são mantidos atualizados de forma automática. É preciso solicitar explicitamente que uma nova versão seja trazida para o projeto.

Para obter mais informações, confira "[Submódulos de Ferramentas do Git](https://git-scm.com/book/en/Git-Tools-Submodules)" na documentação do Git.

## Preservar o histórico

O SVN está configurado para pressupor que o histórico de um projeto nunca é alterado. O Git permite que você modifique os commits e as alterações anteriores usando ferramentas como o [`git rebase`](/github/getting-started-with-github/about-git-rebase).

{% tip %}

[O GitHub dá suporte aos clientes do Subversion](/articles/support-for-subversion-clients), o que poderá produzir alguns resultados inesperados se você estiver usando o Git e o SVN no mesmo projeto. Se você tiver manipulado o histórico de commits do Git, esses mesmos commits permanecerão para sempre no histórico do SVN. Se você acidentalmente fez commit de dados confidenciais, temos [um artigo que ajudará você a removê-los do histórico do Git](/articles/removing-sensitive-data-from-a-repository).

{% endtip %}

## Leitura adicional

- "[Propriedades do Subversion compatíveis com o GitHub](/articles/subversion-properties-supported-by-github)"
- ["Ramificação e mesclagem" do livro _Git SCM_](https://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging)
- "[Como importar o código-fonte para o GitHub](/articles/importing-source-code-to-github)"
- "[Ferramentas de migração de código-fonte](/articles/source-code-migration-tools)"
