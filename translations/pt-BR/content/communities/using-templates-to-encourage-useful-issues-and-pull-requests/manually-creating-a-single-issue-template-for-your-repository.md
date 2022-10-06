---
title: Criar manualmente um modelo único de problema no repositório
intro: 'Ao adicionar um modelo de problema criado manualmente no repositório, os colaboradores de projetos verão automaticamente o conteúdo do modelo no texto do problema.'
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository
  - /articles/manually-creating-a-single-issue-template-for-your-repository
  - /github/building-a-strong-community/manually-creating-a-single-issue-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create an issue template
ms.openlocfilehash: 0d10da9cc3be128744a7b0465c016d1c6346b6f3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145084084'
---
{% data reusables.repositories.legacy-issue-template-tip %}

Crie um subdiretório *ISSUE_TEMPLATE/* em uma das pastas com suporte para conter vários modelos de problemas e use o parâmetro de consulta `template` para especificar o modelo que preencherá o corpo do problema. Para obter mais informações, confira "[Sobre a automação para problemas e solicitações de pull com parâmetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)".

Você pode adicionar o YAML frontmatter a cada modelo de problema para preencher previamente o título do problema, adicionar rótulos e responsáveis ​​automaticamente e atribuir ao modelo um nome e uma descrição que serão mostrados no seletor de modelos que as pessoas veem ao criar um novo problema em seu repositório .

Aqui está um exemplo de YAML front matter.

```yaml
---
name: Tracking issue
about: Use this template for tracking new features.
title: "[DATE]: [FEATURE NAME]"
labels: tracking issue, needs triage
assignees: octocat
---
```
{% note %}

**Observação:** se um valor de front matter incluir um caractere reservado pelo YAML, como `:`, você precisará colocar todo o valor entre aspas. Por exemplo, `":bug: Bug"` ou `":new: triage needed, :bug: bug"`.

{% endnote %}

{% ifversion fpt or ghec %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## Adicionar um modelo de problema

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. No campo nome do arquivo:
    -  Para tornar o modelo de problema visível no diretório raiz do repositório, digite o nome do *issue_template*. Por exemplo, `issue_template.md`.
  ![Novo nome de modelo de problema no diretório raiz](/assets/images/help/repository/issue-template-file-name.png)
    - Para tornar o modelo de problema visível no diretório `docs` do repositório, digite *docs/* seguido do nome do *issue_template*. Por exemplo, `docs/issue_template.md`, ![Novo modelo de problema no diretório docs](/assets/images/help/repository/issue-template-file-name-docs.png)
    - Para armazenar seu arquivo em um diretório oculto, digite *.github/* seguido do nome do *issue_template*. Por exemplo, `.github/issue_template.md`.
  ![Novo modelo de problema no diretório oculto](/assets/images/help/repository/issue-template-hidden-directory.png)
    - Para criar vários modelos de problemas e usar o parâmetro de consulta `template` para especificar um modelo para preencher o corpo do problema, digite *.github/ISSUE_TEMPLATE/* e o nome do modelo de problema. Por exemplo, `.github/ISSUE_TEMPLATE/issue_template.md`. Você também pode armazenar vários modelos de problemas em um subdiretório `ISSUE_TEMPLATE` na raiz ou nos diretórios `docs/`. Para obter mais informações, confira "[Sobre a automação para problemas e solicitações de pull com parâmetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)".
  ![Vários novos modelos de problemas no diretório oculto](/assets/images/help/repository/issue-template-multiple-hidden-directory.png)
4. No texto do novo arquivo, adicione seu modelo de problema. Pode conter:
    - YAML frontmatter
    - Comportamento esperado e comportamento real
    - Etapas para reproduzir o problema
    - Especificações como versão do projeto, sistema operacional ou hardware {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} Os modelos estão disponíveis para os colaboradores quando eles são mesclados no branch padrão do repositório.
{% data reusables.files.propose_new_file %}

## Leitura adicional

- "[Sobre modelos de problemas e solicitação de pull](/articles/about-issue-and-pull-request-templates)"
- "[Como configurar modelos de problemas no seu repositório](/articles/configuring-issue-templates-for-your-repository)"
- "[Sobre a automação para problemas e solicitações de pull com parâmetros de consulta](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Como criar um problema](/articles/creating-an-issue)"
