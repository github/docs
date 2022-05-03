---
title: Importar um repositório usando o Importador do GitHub
intro: 'Caso tenha um projeto hospedado em outro sistema de controle de versão, é possível importá-lo automaticamente para o GitHub usando a ferramenta Importador do GitHub.'
redirect_from:
  - /articles/importing-from-other-version-control-systems-to-github
  - /articles/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-a-repository-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Use Importador do GitHub
---

{% tip %}

**Dica:** o Importador do GitHub não é indicado para todas as importações. Por exemplo, se o código existente está hospedado em uma rede privada, sua ferramenta não conseguirá acessá-lo. Nesses casos, recomendamos [importar usando a linha de comando](/articles/importing-a-git-repository-using-the-command-line) para repositórios Git ou uma [ferramenta de migração de código-fonte](/articles/source-code-migration-tools) externa para projetos importados por outros sistemas de controle de versões.

{% endtip %}

Se você quiser combinar os commits de seu repositório com as contas pessoais GitHub do autor durante a importação, garanta que cada contribuidor de seu repositório tem uma conta do GitHub antes de você começar a importação.

{% data reusables.repositories.repo-size-limit %}

1. No canto superior direito de qualquer página, clique em {% octicon "plus" aria-label="Plus symbol" %} e depois clique em **Import repository** (Importar repositório). ![Opção Import repository (Importar repositório) no menu New repository (Repositório novo)](/assets/images/help/importer/import-repository.png)
2. Embaixo de "Your old repository's clone URL" (URL clone de seu antigo repositório), digite a URL do projeto que quer importar. ![Campo de texto para URL de repositório importado](/assets/images/help/importer/import-url.png)
3. Escolha sua conta pessoal ou uma organização para ser proprietária do repositório e digite um nome para o repositório no GitHub. ![Menu Repository owner (Proprietário do repositório) e campo repository name (nome do repositório)](/assets/images/help/importer/import-repo-owner-name.png)
4. Especifique se o novo repositório deve ser *público* ou *privado*. Para obter mais informações, consulte "[Configurar visibilidade do repositório](/articles/setting-repository-visibility)". ![Botões de rádio Public or private repository (Repositório público ou privado)](/assets/images/help/importer/import-public-or-private.png)
5. Revise a informação que digitou e clique em **Begin import** (Iniciar importação). ![Botão Begin import (Iniciar importação)](/assets/images/help/importer/begin-import-button.png)
6. Caso seu projeto antigo esteja protegido por uma senha, digite sua informação de login para aquele projeto e clique em **Submit** (Enviar). ![Formulário de senha e botão Submit (Enviar) para projetos protegidos por senha](/assets/images/help/importer/submit-old-credentials-importer.png)
7. Se houver vários projetos hospedados na URL clone de seu projeto antigo, selecione o projeto que você quer importar e clique em **Submit** (Enviar). ![Lista de projetos para importar e botão Submit (Enviar)](/assets/images/help/importer/choose-project-importer.png)
8. Se seu projeto contiver arquivos maiores que 100 MB, selecione se quer importar os arquivos maiores usando o [Git Large File Storage](/articles/versioning-large-files) e clique em **Continue** (Continuar). ![Menu do Git Large File Storage e botão Continue (Continuar)](/assets/images/help/importer/select-gitlfs-importer.png)

Você receberá um e-mail quando o repositório for totalmente importado.

## Leia mais

- "[Atualizar a atribuição do autor do commit com o Importador do GitHub](/articles/updating-commit-author-attribution-with-github-importer)"
