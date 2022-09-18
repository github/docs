---
title: Criar modelos de pull request no repositório
intro: 'Quando você adicionar um modelo de pull request ao repositório, os contribuidores do projeto verão automaticamente o conteúdo do modelo no texto da pull request.'
redirect_from:
  - /articles/creating-a-pull-request-template-for-your-repository
  - /github/building-a-strong-community/creating-a-pull-request-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create a PR template
ms.openlocfilehash: 2a85c88944f1d46209429846bba1e7a3c930968e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145084086'
---
Para obter mais informações, confira "[Sobre os modelos de solicitações de pull e de problemas](/articles/about-issue-and-pull-request-templates)".

Crie um subdiretório *PULL_REQUEST_TEMPLATE/* em uma das pastas compatíveis para conter vários modelos de solicitações de pull e use o parâmetro de consulta `template` para especificar o modelo que preencherá o corpo da solicitação de pull. Para obter mais informações, confira "[Como usar parâmetros de consulta para criar uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request)".

{% ifversion fpt or ghes or ghec %}

Você pode criar modelos de solicitações de pull padrão para sua conta de organização{% ifversion fpt or ghes or ghec %} ou pessoal {% endif %}. Para obter mais informações, confira "[Como criar um arquivo padrão de integridade da comunidade](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% endif %}

## Adicionar um modelo de pull request

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. No campo nome do arquivo:
    -  Para tornar o modelo de solicitação de pull visível no diretório raiz do repositório, dê ao modelo de solicitação de pull o nome `pull_request_template.md`.
  ![Novo nome do modelo de solicitação de pull no diretório raiz](/assets/images/help/repository/pr-template-file-name.png)
    - Para tornar o modelo de solicitação de pull visível no diretório `docs` do repositório, dê ao modelo de solicitação de pull o nome `docs/pull_request_template.md`.
  ![Novo modelo de solicitação de pull no diretório docs](/assets/images/help/repository/pr-template-file-name-docs.png)
    - Para armazenar o arquivo em um diretório oculto, dê ao modelo de solicitação de pull o nome `.github/pull_request_template.md`.
  ![Novo modelo de solicitação de pull no diretório oculto](/assets/images/help/repository/pr-template-hidden-directory.png)
    - Para criar vários modelos de solicitações de pull e usar o parâmetro de consulta `template` para especificar um modelo para preencher o corpo da solicitação de pull, digite *.github/PULL_REQUEST_TEMPLATE/* e o nome do modelo de solicitação de pull. Por exemplo, `.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`. Você também pode armazenar vários modelos de solicitações de pull em um subdiretório `PULL_REQUEST_TEMPLATE` na raiz ou nos diretórios `docs/`. Para obter mais informações, confira "[Sobre a automação para problemas e solicitações de pull com parâmetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)".
  ![Vários novos modelos de solicitações de pull no diretório oculto](/assets/images/help/repository/pr-template-multiple-hidden-directory.png)
4. No texto do novo arquivo, adicione seu modelo de pull request. Pode conter:
    - Uma [referência a um problema relacionado](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests) no repositório.
    - Uma descrição das alterações propostas na pull request.
    - [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) da pessoa ou da equipe responsável pela revisão das alterações propostas.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} Os modelos estão disponíveis para os colaboradores quando eles forem mesclados no branch padrão do repositório.
{% data reusables.files.propose_new_file %}

## Leitura adicional

- "[Sobre modelos de problemas e solicitação de pull](/articles/about-issue-and-pull-request-templates)"
- "[Sobre a automação para problemas e solicitações de pull com parâmetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Como criar uma solicitação de pull](/articles/creating-a-pull-request)"
