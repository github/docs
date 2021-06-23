---
title: Sobre o Importador do GitHub
intro: 'Se você tiver o código-fonte no Subversion, Mercurial, Controle de versões do Team Foundation (TFVC) ou outro repositório Git, você poderá movê-lo para o GitHub usando o Importador do GitHub.'
redirect_from:
  - /articles/about-github-importer
  - /github/importing-your-projects-to-github/about-github-importer
versions:
  free-pro-team: '*'
---

O Importador do GitHub é uma ferramenta que importa rapidamente repositórios do código-fonte, incluindo commits e histórico de revisão, para o GitHub.

![Importar um gif do repositório](/assets/images/help/importer/github-importer.gif)

Durante uma importação, dependendo do sistema de controle de versão do qual você está fazendo a importação, é possível autenticar com seu repositório remoto, atualizar a atribuição do autor do commit e importar repositórios com arquivos grandes (ou remover arquivos grandes se não desejar usar o Armazenamento de arquivos grandes do Git).

| Ação de importação                                                                                               | Subversion | Mercurial | TFVC  |  Git  |
|:---------------------------------------------------------------------------------------------------------------- |:----------:|:---------:|:-----:|:-----:|
| Autenticar com repositório remoto                                                                                |   **X**    |   **X**   | **X** | **X** |
| [Atualizar atribuição do autor do commit](/articles/updating-commit-author-attribution-with-github-importer)     |   **X**    |   **X**   | **X** |       |
| Mover arquivos grandes para o [Armazenamento de arquivos grandes do Git](/articles/about-git-large-file-storage) |   **X**    |   **X**   | **X** |       |
| Remover arquivos grandes do repositório                                                                          |   **X**    |   **X**   | **X** |       |

### Leia mais

- "[Importar um repositório com o Importador do GitHub](/articles/importing-a-repository-with-github-importer)"
- "[Atualizar a atribuição do autor do commit com o Importador do GitHub](/articles/updating-commit-author-attribution-with-github-importer)"
- "[Importar um repositório Git usando a linha de comando](/articles/importing-a-git-repository-using-the-command-line)"
- "[Ferramentas de migração do código-fonte](/articles/source-code-migration-tools)"
