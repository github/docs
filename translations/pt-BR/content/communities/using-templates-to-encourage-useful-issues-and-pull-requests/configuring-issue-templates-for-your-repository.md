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
shortTitle: Configurar
---

{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

{% ifversion fpt or ghae or ghes or ghec %}

## Criando modelos de problemas

{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Na seção "Features" (Recursos), em "Issues" (Problemas), clique em **Set up templates** (Configurar modelos). ![Botão Start template setup (Iniciar configuração do modelo)](/assets/images/help/repository/set-up-templates.png)
4. Use o menu suspenso Add template (Adicionar modelo) e clique no tipo de modelo que deseja criar. ![Menu suspenso Add template (Adicionar modelo)](/assets/images/help/repository/add-template-drop-down-menu.png)
5. Para visualizar ou editar o modelo antes de fazer commit dele no repositório, clique em **Preview and edit** (Visualizar e editar). ![Botão Preview and edit (Visualizar e editar)](/assets/images/help/repository/preview-and-edit-button.png)
6. Para editar o modelo, clique em {% octicon "pencil" aria-label="The edit icon" %} e digite nos campos para editar o conteúdo. ![Botão Issue template edit (Edição de modelo de problema)](/assets/images/help/repository/issue-template-edit-button.png)
7. Para definir automaticamente um título de problema padrão, atribua o problema a pessoas com acesso de leitura ao repositório ou aplique etiquetas ao modelo de problema. Informe esses detalhes em "Optional additional information" (Informações adicionais opcionais). Você também pode adicionar esses detalhes no modelo de problema com `title`, `labels` ou `assignees` em um formato de página inicial do YAML. ![Informações adicionais para modelo de problema](/assets/images/help/repository/additional-issue-template-info.png)
8. Quando tiver terminado de editar e visualizar o modelo, clique em **Propose changes** (Propor alterações) no canto superior direito da página. ![Botão Propose changes (Propor alterações)](/assets/images/help/repository/propose-changes-button.png)
9. Insira uma mensagem do commit descrevendo as alterações. ![Campo de mensagem do commit do modelo de problema](/assets/images/help/repository/issue-template-commit-message-field.png)
10. Abaixo dos campos de mensagem do commit, decida se vai fazer commit do seu modelo diretamente no branch padrão ou se vai criar um branch e abrir uma pull request. Para obter mais informações sobre pull requests, consulte "[Sobre pull requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)". ![Commit do modelo de problema com opção para principal ou abrir pull request](/assets/images/help/repository/issue-template-commit-to-master-or-open-pull-request.png)
11. Clique em **Commit changes** (Fazer commit das alterações). Assim que essas alterações passarem por merge no branch padrão, o modelo será disponibilizado para os contribuidores usarem quando abrirem novos problemas no repositório.

{% ifversion fpt or ghec %}

## Criando formulários de problema

{% data reusables.community.issue-forms-beta %}

Com formulários de problemas, é possível criar modelos de problemas com campos personalizáveis de formulário web. É possível incentivar os contribuidores a incluir informações específicas e estruturadas usando formulários de problemas no seu repositório. Os formulários de problemas são escritos em YAML usando o esquema de formulário de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Sintaxe para o esquema de formulário de {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)". {% data reusables.actions.learn-more-about-yaml %}

Para usar um formulário de problema no seu repositório, é necessário criar um novo arquivo e adicioná-lo à pasta `.github/ISSUE_TEMPLATE` no seu repositório.

Aqui está um exemplo de um arquivo de configuração do formulário de problema.

{% data reusables.community.issue-forms-sample %}

Aqui está a versão renderizada do formulário de problema. ![Um formulário de problema renderizado](/assets/images/help/repository/sample-issue-form.png)

1. Escolha um repositório em que você deseja criar um formulário de problema. Você pode usar um repositório existente ao qual você tem acesso de gravação ou criar um novo repositório. Para obter mais informações sobre como criar um repositório, consulte "[Criar um repositório](/articles/creating-a-new-repository)".
2. No repositório, crie um arquivo denominado `.github/ISSUE_TEMPLATE/FORM-NAME.yml`, substituindo `FORM-NAME` pelo nome do formulário do problema. Para obter mais informações sobre como criar novos arquivos no GitHub, consulte "[Criar novos arquivos](/github/managing-files-in-a-repository/creating-new-files)".
3. No texto do novo arquivo, digite o conteúdo do formulário de seu problema. Para obter mais informações, consulte "[Sintaxe para os formulários de problema](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)".
4. Faça o commit do seu arquivo para o branch padrão do seu repositório. Para obter mais informações, consulte "[Criar arquivos](/github/managing-files-in-a-repository/creating-new-files)".

{% endif %}

{% ifversion fpt or ghae or ghes or ghec %}
## Configurando o seletor de modelos

{% data reusables.repositories.issue-template-config %}

Você pode incentivar os contribuidores a usar modelos de problemas definindo `blank_issues_enabled` para `falso`. Se você configurar `blank_issues_enabled` para `verdadeiro`, as pessoas terão a opção de abrir um problema em branco.

{% note %}

**Observação:** Se você usou o fluxo de trabalho de legado para criar manualmente um arquivo `issue_template.md` na pasta `.github` e habilitar problemas em branco no seu arquivo *config.yml*, o modelo em `issue_template.md` será usado quando as pessoas escolherem abrir um problema em branco. Se você desativar problemas em branco, o modelo nunca será usado.

{% endnote %}

Se você preferir receber determinados relatórios fora de {% data variables.product.product_name %}, você pode direcionar pessoas para sites externos com `contact_links`.

Aqui está um exemplo de arquivo *config.yml*.

```yaml{:copy}
blank_issues_enabled: false
contact_links:
  - name: {% data variables.product.prodname_gcf %}
    url: https://github.community/
    about: Pergunte e responda dúvidas aqui.
  - name: {% data variables.product.prodname_dotcom %} Recompensa de bug de segurança
    url: https://bounty.github.com/
    about: Reporte vulnerabilidades de segurança aqui.
```

Seu arquivo de configuração customizará o seletor de modelos quando o arquivo for mesclado ao branch padrão do repositório.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. No campo nome do arquivo, digite `.github/ISSUE_TEMPLATE/config.yml`. ![Configuração do nome do arquivo](/assets/images/help/repository/template-config-file-name.png)
4. No corpo do novo arquivo, digite o conteúdo do seu arquivo de configuração.![Configuração do conteúdo do arquivo](/assets/images/help/repository/template-config-file-content.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
{% endif %}

## Leia mais

- "[Sobre modelos de problema e pull request](/articles/about-issue-and-pull-request-templates)"
- "[Criar manualmente um único modelo de problema para o repositório](/articles/manually-creating-a-single-issue-template-for-your-repository)"
