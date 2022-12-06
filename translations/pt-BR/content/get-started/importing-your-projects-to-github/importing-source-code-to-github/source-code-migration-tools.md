---
title: Ferramentas de migração de código-fonte
intro: Você pode usar ferramentas externas para mover seus projetos para o GitHub.
redirect_from:
  - /articles/importing-from-subversion
  - /articles/source-code-migration-tools
  - /github/importing-your-projects-to-github/source-code-migration-tools
  - /github/importing-your-projects-to-github/importing-source-code-to-github/source-code-migration-tools
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Code migration tools
ms.openlocfilehash: 7877d435e7971f669d9d49a70d2d2450371b5159
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882164'
---
{% ifversion fpt or ghec %}

Recomendamos usar o [Importador do GitHub](/articles/about-github-importer) para importar projetos do Subversion, do Mercurial, do TFVC (Controle de Versão do Team Foundation) ou de outro repositório Git. Você também pode usar essas ferramentas externas para converter o projeto em Git.

{% endif %}

## Importar do Subversion

Em um ambiente típico do Subversion, vários projetos são armazenados em um único repositório raiz. No GitHub, cada um desses projetos é associado a um repositório do Git separado para uma conta pessoal ou organização. Sugerimos que você importe cada parte do repositório do Subversion para um repositório separado do GitHub se:

* Os colaboradores precisarem fazer checkout ou commit na parte do projeto separada de outras partes
* Desejar que diferentes partes tenham suas próprias permissões de acesso

Recomendamos estas ferramentas para converter repositórios do Subversion em Git:

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

## Importar do Mercurial

Recomendamos o [hg-fast-export](https://github.com/frej/fast-export) para converter repositórios do Mercurial em Git.

## Importando do TFVC

Recomendamos o [git-tfs](https://github.com/git-tfs/git-tfs) para mover as alterações entre o TFVC e o Git.

Para obter mais informações sobre como migrar do TFVC (um sistema de controle de versão centralizado) para o Git, confira "[Planejar sua migração para o Git](https://docs.microsoft.com/devops/develop/git/centralized-to-git)" no site de documentação da Microsoft.

{% tip %}

**Dica:** depois de converter o projeto com sucesso no Git, você poderá [efetuar push dele para o {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}

{% ifversion fpt or ghec %}

## Leitura adicional

- "[Sobre o Importador do GitHub](/articles/about-github-importer)"
- "[Como importar um repositório com o Importador do GitHub](/articles/importing-a-repository-with-github-importer)"
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
