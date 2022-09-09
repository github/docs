---
title: Configurando modelos de problemas em seu repositório
intro: Você pode personalizar os modelos disponíveis para os contribuidores usarem quando abrirem novos problemas no seu repositório.
redirect_from:
  - /github/building-a-strong-community/creating-issue-templates-for-your-repository
  - /articles/configuring-issue-templates-for-your-repository
  - /github/building-a-strong-community/configuring-issue-templates-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Configure
ms.openlocfilehash: d415d95f8aeab1b053663437b6dbf6dd637e3039
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147431989'
---
{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## Criando modelos de problemas

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Na seção "Recursos", em "Problemas", clique em **Configurar modelos**.
![Botão Iniciar configuração do modelo](/assets/images/help/repository/set-up-templates.png)
4. Use o menu suspenso Add template (Adicionar modelo) e clique no tipo de modelo que deseja criar.
![Menu suspenso Adicionar modelo](/assets/images/help/repository/add-template-drop-down-menu.png)
5. Para visualizar ou editar o modelo antes de fazer commit dele no repositório, clique em **Visualizar e editar**.
![Botão Visualizar e editar](/assets/images/help/repository/preview-and-edit-button.png)
6. Para editar o modelo, clique em {% octicon "pencil" aria-label="The edit icon" %} e digite os campos para editar o conteúdo deles.
![Botão Edição de modelo de problema](/assets/images/help/repository/issue-template-edit-button.png)
7. Para definir automaticamente um título de problema padrão, atribua o problema a pessoas com acesso de leitura ao repositório ou aplique etiquetas ao modelo de problema. Informe esses detalhes em "Optional additional information" (Informações adicionais opcionais). Adicione também esses detalhes no modelo de problema com `title`, `labels` ou `assignees` em um formato de frontmatter YAML.
![Informações adicionais para o modelo de problema](/assets/images/help/repository/additional-issue-template-info.png)
8. Quando terminar de editar e visualizar o modelo, clique em **Propor alterações** no canto superior direito da página.
![Botão Propor alterações](/assets/images/help/repository/propose-changes-button.png)
9. Insira uma mensagem do commit descrevendo as alterações.
![Campo de mensagem de commit do modelo de problema](/assets/images/help/repository/issue-template-commit-message-field.png)
10. Abaixo dos campos de mensagem do commit, decida se vai fazer commit do seu modelo diretamente no branch padrão ou se vai criar um branch e abrir uma pull request. Para obter mais informações sobre solicitações de pull, confira "[Sobre as solicitações de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".
![Commit do modelo de problema com a opção Principal ou Abrir solicitação de pull](/assets/images/help/repository/issue-template-commit-to-master-or-open-pull-request.png)
11. Clique em **Fazer commit das alterações**. Assim que essas alterações passarem por merge no branch padrão, o modelo será disponibilizado para os contribuidores usarem quando abrirem novos problemas no repositório.

{% ifversion fpt or ghec %}

## Criando formulários de problema

{% data reusables.community.issue-forms-beta %}

Com formulários de problemas, é possível criar modelos de problemas com campos personalizáveis de formulário web. É possível incentivar os contribuidores a incluir informações específicas e estruturadas usando formulários de problemas no seu repositório. Os formulários de problemas são escritos em YAML usando o esquema de formulário de {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Sintaxe do esquema de formulário do {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)". {% data reusables.actions.learn-more-about-yaml %}

Para usar um formulário de problema no seu repositório, você precisa criar um arquivo e adicioná-lo à pasta `.github/ISSUE_TEMPLATE` no seu repositório.

Aqui está um exemplo de um arquivo de configuração do formulário de problema.

{% data reusables.community.issue-forms-sample %}

Aqui está a versão renderizada do formulário de problema.
  ![Um formulário de problema renderizado](/assets/images/help/repository/sample-issue-form.png)

1. Escolha um repositório em que você deseja criar um formulário de problema. Você pode usar um repositório existente ao qual você tem acesso de gravação ou criar um novo repositório. Para obter mais informações sobre como criar um repositório, confira "[Como criar um repositório](/articles/creating-a-new-repository)".
2. No repositório, crie um arquivo chamado `.github/ISSUE_TEMPLATE/FORM-NAME.yml`, substituindo `FORM-NAME` pelo nome do formulário de problema. Para obter mais informações sobre como criar arquivos no GitHub, confira "[Como criar arquivos](/github/managing-files-in-a-repository/creating-new-files)".
3. No texto do novo arquivo, digite o conteúdo do formulário de seu problema. Para obter mais informações, confira "[Sintaxe de formulários de problemas](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)".
4. Faça o commit do seu arquivo para o branch padrão do seu repositório. Para obter mais informações, confira "[Como criar arquivos](/github/managing-files-in-a-repository/creating-new-files)".

{% endif %}

## Configurando o seletor de modelos

{% data reusables.repositories.issue-template-config %}

Você pode incentivar os colaboradores a usar modelos de problema definindo `blank_issues_enabled` como `false`. Se você definir `blank_issues_enabled` como `true`, as pessoas terão a opção de abrir um problema em branco.

{% note %}

**Observação:** se você usou o fluxo de trabalho herdado para criar manualmente um arquivo `issue_template.md` na pasta `.github` e habilitar problemas em branco no arquivo *config.yml*, o modelo em `issue_template.md` será usado quando as pessoas optarem por abrir um problema em branco. Se você desativar problemas em branco, o modelo nunca será usado.

{% endnote %}

Se preferir receber determinados relatórios fora do {% data variables.product.product_name %}, você poderá direcionar as pessoas para sites externos com `contact_links`.

Este é um exemplo de arquivo *config.yml*.

```yaml{:copy}
blank_issues_enabled: false
contact_links:
  - name: {% data variables.product.prodname_gcf %}
    url: https://github.com/orgs/community/discussions
    about: Please ask and answer questions here.
  - name: {% data variables.product.prodname_dotcom %} Security Bug Bounty
    url: https://bounty.github.com/
    about: Please report security vulnerabilities here.
```

Seu arquivo de configuração customizará o seletor de modelos quando o arquivo for mesclado ao branch padrão do repositório.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. No campo de nome do arquivo, digite `.github/ISSUE_TEMPLATE/config.yml`.
  ![Nome do arquivo de configuração](/assets/images/help/repository/template-config-file-name.png)
4. No corpo do novo arquivo, digite o conteúdo do seu arquivo de configuração.
  ![Conteúdo do arquivo de configuração](/assets/images/help/repository/template-config-file-content.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Leitura adicional

- "[Sobre modelos de problemas e solicitação de pull](/articles/about-issue-and-pull-request-templates)"
- "[Como criar manualmente um modelo de problema individual para seu repositório](/articles/manually-creating-a-single-issue-template-for-your-repository)"
