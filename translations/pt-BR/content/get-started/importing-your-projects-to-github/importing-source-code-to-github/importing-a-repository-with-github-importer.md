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
shortTitle: Use GitHub Importer
ms.openlocfilehash: 09b03d2c2c62cf5812f35a3d5b3379c2d0c8e33e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145911196'
---
{% tip %}

**Dica:** o Importador do GitHub não é adequado para todas as importações. Por exemplo, se o código existente está hospedado em uma rede privada, sua ferramenta não conseguirá acessá-lo. Nesses casos, recomendamos [importá-lo usando a linha de comando](/articles/importing-a-git-repository-using-the-command-line) para repositórios Git ou uma [ferramenta de migração de código-fonte](/articles/source-code-migration-tools) externa para projetos importados de outros sistemas de controle de versão.

{% endtip %}

Se você quiser combinar os commits de seu repositório com as contas pessoais GitHub do autor durante a importação, garanta que cada contribuidor de seu repositório tem uma conta GitHub antes de você começar a importação.

{% data reusables.repositories.repo-size-limit %}

1. No canto superior direito de qualquer página, clique em {% octicon "plus" aria-label="Plus symbol" %} e clique em **Importar repositório**.
![Opção Importar repositório no menu Novo repositório](/assets/images/help/importer/import-repository.png)
2. Embaixo de "Your old repository's clone URL" (URL clone de seu antigo repositório), digite a URL do projeto que quer importar.
![Campo de texto da URL do repositório importado](/assets/images/help/importer/import-url.png)
3. Escolha sua conta pessoal ou uma organização para ser proprietária do repositório e digite um nome para o repositório no GitHub.
![Menu Proprietário do repositório e campo Nome do repositório](/assets/images/help/importer/import-repo-owner-name.png)
4. Especifique se o novo repositório deve ser *público* ou *privado*. Para obter mais informações, confira "[Como configurar a visibilidade do repositório](/articles/setting-repository-visibility)".
![Botões de opção Repositório público ou privado](/assets/images/help/importer/import-public-or-private.png)
5. Revise as informações inseridas e clique em **Iniciar importação**.
![Botão Iniciar importação](/assets/images/help/importer/begin-import-button.png)
6. Se seu projeto antigo exigir credenciais, digite suas informações de login para esse projeto e clique em **Enviar**. Se o SSO do SAML ou 2FA estiverem habilitados para sua conta de usuário no projeto antigo, insira um token de acesso pessoal com permissões de leitura de repositório no campo "Senha" em vez de sua senha.
![Formulário de senha e botão Enviar para projetos protegidos por senha](/assets/images/help/importer/submit-old-credentials-importer.png)
7. Se houver vários projetos hospedados na URL de clone do seu projeto antigo, escolha o projeto que deseja importar e clique em **Enviar**.
![Lista de projetos para importação e botão Enviar](/assets/images/help/importer/choose-project-importer.png)
8. Se o projeto contiver arquivos maiores que 100 MB, escolha se deseja importar os arquivos grandes usando o [Git Large File Storage](/articles/versioning-large-files) e clique em **Continuar**.
![Menu do Git Large File Storage e botão Continuar](/assets/images/help/importer/select-gitlfs-importer.png)

Você receberá um e-mail quando o repositório for totalmente importado.

## Leitura adicional

- "[Como atualizar a atribuição de autor de commit com o Importador do GitHub](/articles/updating-commit-author-attribution-with-github-importer)"
