---
title: Ferramentas de migração de código-fonte
intro: Você pode usar ferramentas externas para mover seus projetos para o GitHub.
redirect_from:
  - /articles/importing-from-subversion/
  - /articles/source-code-migration-tools
  - /github/importing-your-projects-to-github/source-code-migration-tools
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Ferramentas de migração de código
---

{% ifversion fpt %}

Recomendamos usar o [Importador do GitHub](/articles/about-github-importer) para importar projetos de Subversion, Mercurial, Controle de versão do Team Foundation (TFVC) ou outro repositório Git. Você também pode usar essas ferramentas externas para converter o projeto em Git.

{% endif %}

## Importar do Subversion

Em um ambiente típico do Subversion, vários projetos são armazenados em um único repositório raiz. No GitHub, cada um desses projetos é associado a um repositório do Git separado para uma conta de usuário ou organização. Sugerimos que você importe cada parte do repositório do Subversion para um repositório separado do GitHub se:

* Os colaboradores precisarem fazer checkout ou commit na parte do projeto separada de outras partes
* Desejar que diferentes partes tenham suas próprias permissões de acesso

Recomendamos estas ferramentas para converter repositórios do Subversion em Git:

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

## Importar do Mercurial

Recomendamos o [hg-fast-export](https://github.com/frej/fast-export) para converter repositórios do Mercurial em Git.

## Importando do TFVC

Recomendamos [git-tfs](https://github.com/git-tfs/git-tfs) para transferir alterações entre TFVC e Git.

For more information about moving from TFVC (a centralized version control system) to Git, see "[Plan your Migration to Git](https://docs.microsoft.com/devops/develop/git/centralized-to-git)" from the Microsoft docs site.

{% tip %}

**Dica:** depois de converter com sucesso o projeto em Git, você poderá [fazer push dele para o {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}

{% ifversion fpt %}

## Leia mais

- "[Sobre o Importador do GitHub](/articles/about-github-importer)"
- "[Importar um repositório com o Importador do GitHub](/articles/importing-a-repository-with-github-importer)"
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
