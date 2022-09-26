---
title: Criar um repositório
intro: Você pode criar um repositório na sua conta pessoal ou em qualquer organização onde tenha permissões suficientes.
redirect_from:
  - /creating-a-repo
  - /articles/creating-a-repository-in-an-organization
  - /articles/creating-a-new-organization-repository
  - /articles/creating-a-new-repository
  - /articles/creating-an-internal-repository
  - /github/setting-up-and-managing-your-enterprise-account/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-new-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: c399ac1a0881fe593087dada707296b226a5d9d8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127097'
---
{% tip %}

**Dica:** os proprietários podem restringir as permissões de criação de repositórios em uma organização. Para obter mais informações, confira "[Como restringir a criação de repositório na sua organização](/articles/restricting-repository-creation-in-your-organization)".

{% endtip %}

{% tip %}

**Dica**: crie também um repositório usando a {% data variables.product.prodname_cli %}. Para obter mais informações, confira "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" na documentação da {% data variables.product.prodname_cli %}.

{% endtip %}

{% data reusables.repositories.create_new %}
2. Opcionalmente, para criar um repositório com a estrutura de diretório e os arquivos de um repositório existente, use o menu suspenso **Escolher um modelo** e selecione um repositório de modelo. Você verá repositórios de modelo que pertencem a você e às organizações das quais você é integrante ou que usou antes. Para obter mais informações, confira "[Como criar um repositório com base em um modelo](/articles/creating-a-repository-from-a-template)".
  ![Menu suspenso de modelo](/assets/images/help/repository/template-drop-down.png)
3. Opcionalmente, se você escolheu usar um modelo para incluir a estrutura do diretório e os arquivos de todos os branches no modelo, não apenas o branch padrão, selecione **Incluir todos os branches**.
    ![Incluir todas as caixa de seleção de branches](/assets/images/help/repository/include-all-branches.png)
3. No menu suspenso Proprietário, selecione a conta na qual deseja criar o repositório.
   ![Menu suspenso Proprietário](/assets/images/help/repository/create-repository-owner.png) {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
6. Se você não estiver usando um modelo, haverá um número de itens opcionais com os quais você pode preencher previamente o seu repositório. Se for importar um repositório existente para o {% data variables.product.product_name %}, não escolha qualquer uma destas opções, pois isso poderá criar um conflito de merge. É possível adicionar ou criar arquivos usando a interface de usuário ou optar por adicionar novos arquivos posteriormente usando a linha de comando. Para obter mais informações, confira "[Como importar um repositório Git usando a linha de comando](/articles/importing-a-git-repository-using-the-command-line/)", "[Como adicionar um arquivo a um repositório](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)" e "[Como resolver conflitos de mesclagem](/articles/addressing-merge-conflicts/)".
    - Você pode criar um README, que é um documento que descreve seu projeto. Para obter mais informações, confira "[Sobre os arquivos LEIAME](/articles/about-readmes/)".
    - Você pode criar um arquivo *.gitignore*, que é um conjunto de regras a serem ignoradas. Para obter mais informações, confira "[Como ignorar arquivos](/github/getting-started-with-github/ignoring-files)".{% ifversion fpt or ghec %}
    - Você pode optar por adicionar uma licença de software para seu projeto. Para obter mais informações, confira "[Licenciamento de um repositório](/articles/licensing-a-repository)".{% endif %} {% data reusables.repositories.select-marketplace-apps %} {% data reusables.repositories.create-repo %} {% ifversion fpt or ghec %}
9. Na parte inferior da página Configuração rápida resultante, em "Import code from an old repository" (Importar código de um repositório antigo), você pode optar por importar um projeto para o novo repositório. Para fazer isso, clique em **Importar código**.
{% endif %}

## Leitura adicional

- "[Como gerenciar o acesso aos repositórios da sua organização](/articles/managing-access-to-your-organization-s-repositories)"
- [Guias de Código Aberto](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
