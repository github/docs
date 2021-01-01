---
title: Ferramentas de migração de código-fonte
intro: Você pode usar ferramentas externas para mover seus projetos para o GitHub.
redirect_from:
  - /articles/importing-from-subversion/
  - /articles/source-code-migration-tools
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" %}

Recomendamos o uso do [Importador do GitHub](/articles/about-github-importer) para importar projetos do Subversion, Mercurial, Team Foundation Server ou outro repositório do Git. Você também pode usar essas ferramentas externas para converter o projeto em Git.

{% endif %}

### Importar do Subversion

Em um ambiente típico do Subversion, vários projetos são armazenados em um único repositório raiz. No GitHub, cada um desses projetos é associado a um repositório do Git separado para uma conta de usuário ou organização. Sugerimos que você importe cada parte do repositório do Subversion para um repositório separado do GitHub se:

* Os colaboradores precisarem fazer checkout ou commit na parte do projeto separada de outras partes
* Desejar que diferentes partes tenham suas próprias permissões de acesso

Recomendamos estas ferramentas para converter repositórios do Subversion em Git:

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

### Importar do Mercurial

Recomendamos o [hg-fast-export](https://github.com/frej/fast-export) para converter repositórios do Mercurial em Git.

### Importar do Team Foundation Server

Recomendamos estas ferramentas para mover alterações entre oTeam Foundation Server e o Git:

- [git-tfs](https://github.com/git-tfs/git-tfs)
- [Git-TF](https://gittf.codeplex.com/)

{% tip %}

**Dica:** depois de converter com sucesso o projeto em Git, você poderá [fazer push dele para o {% data variables.product.prodname_dotcom %}](/articles/pushing-commits-to-a-remote-repository/).

{% endtip %}

{% if currentVersion == "free-pro-team@latest" %}

### Leia mais

- "[Sobre o Importador do GitHub](/articles/about-github-importer)"
- "[Importar um repositório com o Importador do GitHub](/articles/importing-a-repository-with-github-importer)"
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
