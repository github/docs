---
title: Notas de versão geradas automaticamente
intro: Você pode gerar automaticamente notas de versão para as suas versões do GitHub
permissions: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: issue-4974
topics:
  - Repositories
shortTitle: Notas de versão automatizadas
communityRedirect:
  name: Provide GitHub Feedback
  href: 'https://github.com/github/feedback/discussions/categories/general-feedback'
---

## Sobre notas de versão geradas automaticamente

As otas de versão geradas automaticamente fornecem uma alternativa automatizada para escrever notas de versão manualmente para as suas versões de {% data variables.product.prodname_dotcom %}. Com as notas de versões geradas automaticamente, você pode gerar rapidamente uma visão geral do conteúdo de uma versão. As observações de versão geradas automaticamente incluem uma lista de pull requests, uma lista de contribuidores para a versão e um link para o registro de alterações completo.

Você também pode personalizar suas notas de versão automatizadas, usando etiquetas para criar categorias personalizadas e organizar pull requests que você deseja incluir e excluir certas etiquetas e usuários para que não apareçam na saída.

## Criando notas de versão geradas automaticamente para uma nova versão

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Clique em **Draft a new release** (Rascunhar uma nova versão). ![Botão Releases draft (Rascunho de versões)](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt or ghec %}Clique em **Escolher uma etiqueta** e digite{% else %}Digite{% endif %} um número de versão para a sua versão. Como alternativa, selecione um tag existente.
  {% ifversion fpt or ghec %}
  ![Insira uma tag](/assets/images/help/releases/releases-tag-create.png)
5. Se você estiver criando uma nova tag, clique em **Criar nova tag**. ![Confirme que você deseja criar uma nova tag](/assets/images/help/releases/releases-tag-create-confirm.png)
  {% else %}
  ![Versão com tag das versões](/assets/images/enterprise/releases/releases-tag-version.png)
{% endif %}
6. Se você criou uma nova tag, use o menu suspenso para selecionar o branch que contém o projeto que você deseja liberar.
  {% ifversion fpt or ghec %}![Escolha um branch](/assets/images/help/releases/releases-choose-branch.png)
  {% else %}![Branch com tag das versões](/assets/images/enterprise/releases/releases-tag-branch.png)
  {% endif %}
{%- data reusables.releases.previous-release-tag %}
7. No canto superior direito da caixa de texto da descrição, clique em {% ifversion previous-release-tag %}**Gerar observações de versão**{% else %}**Gerar observações da versão automaticamente**{% endif %}.{% ifversion previous-release-tag %} ![Generate release notes](/assets/images/help/releases/generate-release-notes.png){% else %}
![Auto-generate release notes](/assets/images/enterprise/3.5/releases/auto-generate-release-notes.png){% endif %}
8. Selecione as notas geradas para garantir que elas incluem todas (e apenas) as informações que você deseja incluir.
9. Opcionalmente, para incluir arquivos binários, como programas compilados em sua versão, arraste e solte ou selecione arquivos manualmente na caixa de binários. ![Fornecer um DMG com a versão](/assets/images/help/releases/releases_adding_binary.gif)
10. Para notificar os usuários que a versão não está pronta para produção e pode ser instável, selecione **This is a pre-release** (Esta é uma versão prévia). ![Caixa de seleção para marcar uma versão como pré-versão](/assets/images/help/releases/prerelease_checkbox.png)
{%- ifversion fpt or ghec %}
11. Opcionalmente, selecione **Criar uma discussão para esta versão** e, em seguida, selecione a **Categoria** no menu suspenso e clique em uma categoria para a discussão da versão. ![Caixa de seleção para criar uma discussão de versão e menu suspenso para escolher uma categoria](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
12. Se estiver pronto para tornar pública a sua versão, clique em **Publish release** (Publicar versão). Para trabalhar na versão posteriormente, clique em **Save draft** (Salvar rascunho). ![Botões Publish release (Publicar versão) e Draft release (Rascunhar versão)](/assets/images/help/releases/release_buttons.png)


## Configurar notas de versões geradas automaticamente

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. No campo de nome de arquivo, digite `.github/release.yml` para criar o arquivo `release.yml` no diretório `.github`. ![Criar novo arquivo](/assets/images/help/releases/release-yml.png)
4. No arquivo, usando as opções de configuração abaixo, especifique no YAML as etiquetas de pull request e autores que você deseja excluir desta versão. Você também pode criar novas categorias e listar as etiquetas de pull request para que sejam incluídas cada uma delas.

### Opções de configuração

| Parâmetro                                 | Descrição                                                                                                                                                                           |
|:----------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `changelog.exclude.labels`                | Uma lista de etiquetas que excluem um pull request de aparecer nas notas de versão.                                                                                                 |
| `changelog.exclude.authors`               | Uma lista de usuários ou servidores de login com os quais os pull requests devem ser excluídos das notas de versão.                                                                 |
| `changelog.categories[*].title`           | **Obrigatório.** O título de uma categoria de alterações nas notas de versão.                                                                                                       |
| `changelog.categories[*].labels`          | **Obrigatório.** Etiquetas que qualificam um pull request para esta categoria. Use `*` como um coringa para pull requests que não correspondem a nenhuma das categorias anteriores. |
| `changelog.categories[*].exclude.labels`  | Uma lista de etiquetas que excluem um pull request de aparecer nesta categoria.                                                                                                     |
| `changelog.categories[*].exclude.authors` | Uma lista gerenciamento de login de sessão de usuários ou bot, cujos pull requests devem ser excluídos desta categoria.                                                             |

### Exemplo de configuração

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

## Leia mais

- "[Gerenciando etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)" 
