---
title: Notas de versão geradas automaticamente
intro: Você pode gerar automaticamente notas de versão para as suas versões do GitHub
permissions: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '>= 3.4'
topics:
  - Repositories
shortTitle: Automated release notes
communityRedirect:
  name: Provide GitHub Feedback
  href: 'https://github.com/orgs/community/discussions/categories/general'
ms.openlocfilehash: aee951e6f57492240b5baf8870578409945aefdc
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185191'
---
## Sobre notas de versão geradas automaticamente

As otas de versão geradas automaticamente fornecem uma alternativa automatizada para escrever notas de versão manualmente para as suas versões de {% data variables.product.prodname_dotcom %}. Com as notas de versões geradas automaticamente, você pode gerar rapidamente uma visão geral do conteúdo de uma versão. As notas sobre a versão geradas automaticamente incluem uma lista de solicitações de pull mescladas, uma lista de colaboradores da versão e um link para um changelog completo.

Você também pode personalizar suas notas de versão automatizadas, usando etiquetas para criar categorias personalizadas e organizar pull requests que você deseja incluir e excluir certas etiquetas e usuários para que não apareçam na saída.

## Criando notas de versão geradas automaticamente para uma nova versão

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. Clique em **Criar rascunho de uma nova versão**.
   ![Botão Rascunho de versões](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt or ghec %} Clique em **Escolher uma tag** e digite{% else %}Digite{% endif %} um número de versão para a versão. Como alternativa, selecione um tag existente.
  {% ifversion fpt or ghec %} ![Inserir uma tag](/assets/images/help/releases/releases-tag-create.png)
5. Se estiver criando uma marca, clique em **Criar marca**.
![Confirme se deseja criar uma marca](/assets/images/help/releases/releases-tag-create-confirm.png) {% else %} ![Versões marcadas com versão](/assets/images/enterprise/releases/releases-tag-version.png) {% endif %}
6. Se você criou uma nova tag, use o menu suspenso para selecionar o branch que contém o projeto que você deseja liberar.
  {% ifversion fpt or ghec %}![Escolher um branch](/assets/images/help/releases/releases-choose-branch.png) {% else %}![Versões marcadas com branch](/assets/images/enterprise/releases/releases-tag-branch.png) {% endif %} {%- data reusables.releases.previous-release-tag %}
7. No canto superior direito da caixa de texto da descrição, clique em {% ifversion previous-release-tag %}**Gerar notas sobre a versão**{% else %}**Gerar automaticamente as notas sobre a versão**{% endif %}.{% ifversion previous-release-tag %} ![Gerar as notas sobre a versão](/assets/images/help/releases/generate-release-notes.png){% else %} ![Gerar automaticamente as notas sobre a versão](/assets/images/enterprise/3.5/releases/auto-generate-release-notes.png){% endif %}
8. Selecione as notas geradas para garantir que elas incluem todas (e apenas) as informações que você deseja incluir.
9. Opcionalmente, para incluir arquivos binários, como programas compilados em sua versão, arraste e solte ou selecione arquivos manualmente na caixa de binários.
   ![Como fornecer um DMG com a versão](/assets/images/help/releases/releases_adding_binary.gif)
10. Para notificar os usuários de que a versão não está pronta para produção e pode ser instável, selecione **Este é um pré-lançamento**.
   ![Caixa de seleção usada para marcar uma versão como pré-lançamento](/assets/images/help/releases/prerelease_checkbox.png) {%- ifversion fpt or ghec %}
11. Opcionalmente, selecione **Criar uma discussão para esta versão**, escolha o menu suspenso **Categoria** e clique em uma categoria para ver a discussão da versão.
  ![Caixa de seleção usada para criar uma discussão sobre versão e menu suspenso usado para escolher uma categoria](/assets/images/help/releases/create-release-discussion.png) {%- endif %}
12. Se estiver pronto para tornar sua versão pública, clique em **Publicar versão**. Para trabalhar na versão posteriormente, clique em **Salvar rascunho**.
   ![Botões Publicar versão e Criar rascunho de versão](/assets/images/help/releases/release_buttons.png)


## Configurar notas de versões geradas automaticamente

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. No campo de nome do arquivo, digite `.github/release.yml` para criar o arquivo `release.yml` no diretório `.github`.
  ![Criar arquivo](/assets/images/help/releases/release-yml.png)
4. No arquivo, usando as opções de configuração abaixo, especifique no YAML as etiquetas de pull request e autores que você deseja excluir desta versão. Você também pode criar novas categorias e listar as etiquetas de pull request para que sejam incluídas cada uma delas.

### Opções de configuração

| Parâmetro | Descrição |
| :- | :- |
| `changelog.exclude.labels` | Uma lista de etiquetas que excluem um pull request de aparecer nas notas de versão. |
| `changelog.exclude.authors` | Uma lista de usuários ou servidores de login com os quais os pull requests devem ser excluídos das notas de versão. |
| `changelog.categories[*].title` | **Necessário.** O título de uma categoria de alterações nas notas sobre a versão. |
| `changelog.categories[*].labels`| **Necessário.** Rótulos que qualificam uma solicitação de pull para essa categoria. Use `*` como um catch-all para as solicitações de pull que não correspondem a nenhuma das categorias anteriores. |
| `changelog.categories[*].exclude.labels` | Uma lista de etiquetas que excluem um pull request de aparecer nesta categoria. |
| `changelog.categories[*].exclude.authors` | Uma lista gerenciamento de login de sessão de usuários ou bot, cujos pull requests devem ser excluídos desta categoria. |

### Configurações de exemplo

Uma configuração para um repositório que rotula versões semver

{% raw %}
```yaml{:copy}
# .github/release.yml

changelog:
  exclude:
    labels:
      - ignore-for-release
    authors:
      - octocat
  categories:
    - title: Breaking Changes 🛠
      labels:
        - Semver-Major
        - breaking-change
    - title: Exciting New Features 🎉
      labels:
        - Semver-Minor
        - enhancement
    - title: Other Changes
      labels:
        - "*"
```
{% endraw %}

Uma configuração para um repositório que não marca solicitações de pull, mas na qual convém separar solicitações de pull {% data variables.product.prodname_dependabot %} automatizadas em notas de versão (`labels: '*'` é necessário para exibir uma categoria abrangente)

{% raw %}
```yaml{:copy}
# .github/release.yml

changelog:
  categories:
    - title: 🏕 Features
      labels:
        - '*'
      exclude:
        labels:
          - dependencies
    - title: 👒 Dependencies
      labels:
        - dependencies
```
{% endraw %}

## Leitura adicional

- "[Como gerenciar rótulos](/issues/using-labels-and-milestones-to-track-work/managing-labels)" 
