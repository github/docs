---
title: Automatically generated release notes
intro: You can automatically generate release notes for your GitHub releases
permissions: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.
versions:
  fpt: '*'
topics:
  - Repositories
shortTitle: Automated release notes
---

{% note %}

**Observação:** {% data reusables.repositories.auto-gen-release-public-beta %}

{% endnote %}

## About automatically generated release notes

Automatically generated release notes provide an automated alternative to manually writing release notes for your {% data variables.product.prodname_dotcom %} releases. With automatically generated release notes, you can quickly generate an overview of the contents of a release. You can also customize your automated release notes, using labels to create custom categories to organize pull requests you want to include, and exclude certain labels and users from appearing in the output.

## Creating automatically generated release notes for a new release

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Clique em **Draft a new release** (Rascunhar uma nova versão). ![Botão Releases draft (Rascunho de versões)](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt %}Click **Choose a tag** and type{% else %}Type{% endif %} a version number for your release. Alternatively, select an existing tag.
  {% ifversion fpt %}
  ![Enter a tag](/assets/images/help/releases/releases-tag-create.png)
5. If you are creating a new tag, click **Create new tag**. ![Confirm you want to create a new tag](/assets/images/help/releases/releases-tag-create-confirm.png)
  {% else %}
  ![Versão com tag das versões](/assets/images/enterprise/releases/releases-tag-version.png)
{% endif %}
6. If you have created a new tag, use the drop-down menu to select the branch that contains the project you want to release.
  {% ifversion fpt %}![Choose a branch](/assets/images/help/releases/releases-choose-branch.png)
  {% else %}![Branch com tag das versões](/assets/images/enterprise/releases/releases-tag-branch.png)
  {% endif %}
7. To the top right of the description text box, click **Auto-generate release notes**. ![Auto-generate release notes](/assets/images/help/releases/auto-generate-release-notes.png)
8. Check the generated notes to ensure they include all (and only) the information you want to include.
9. Opcionalmente, para incluir arquivos binários, como programas compilados em sua versão, arraste e solte ou selecione arquivos manualmente na caixa de binários. ![Fornecer um DMG com a versão](/assets/images/help/releases/releases_adding_binary.gif)
10. Para notificar os usuários que a versão não está pronta para produção e pode ser instável, selecione **This is a pre-release** (Esta é uma versão prévia). ![Caixa de seleção para marcar uma versão como pré-versão](/assets/images/help/releases/prerelease_checkbox.png)
{%- ifversion fpt %}
11. Opcionalmente, selecione **Criar uma discussão para esta versão** e, em seguida, selecione a **Categoria** no menu suspenso e clique em uma categoria para a discussão da versão. ![Caixa de seleção para criar uma discussão de versão e menu suspenso para escolher uma categoria](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
12. Se estiver pronto para tornar pública a sua versão, clique em **Publish release** (Publicar versão). Para trabalhar na versão posteriormente, clique em **Save draft** (Salvar rascunho). ![Botões Publish release (Publicar versão) e Draft release (Rascunhar versão)](/assets/images/help/releases/release_buttons.png)


## Creating a template for automatically generated release notes

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. In the file name field, type `.github/release.yml` to create the `release.yml` file in the `.github` directory. ![Create new file](/assets/images/help/releases/release-yml.png)
4. In the file, specify the pull request labels and authors you want to exclude from this release. You can also create new categories and list the pull request labels to be included in each of them. Para obter mais informações, consulte "[Gerenciar etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)".

## Exemplo de configuração

{% raw %}
**release.yml**
```yaml{:copy}
# release.yml

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

## Release template syntax

| Parameter                | Descrição                                                                                                                                                                        | Obrigatório                                                                  | Valor                                                                     |
|:------------------------ |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---------------------------------------------------------------------------- |:------------------------------------------------------------------------- |
| `registro de alterações` | Defines the contents within it as the custom template for your release notes.                                                                                                    | Obrigatório.                                                                 | No value accepted.                                                        |
| `exclusão`               | Creates a category of pull requests to be excluded from the release. Can be set at the top-level of the changelog to apply to all categories or applied on a per-category basis. | Opcional                                                                     | No value accepted.                                                        |
| `authors`                | Specifies authors to be excluded from the release.                                                                                                                               | Optional for `exclude` category.                                             | Accepts usernames and bots as values.                                     |
| `categorias`             | Defines the nested contents as custom categories to be included in the template.                                                                                                 | Opcional                                                                     | No value accepted.                                                        |
| `title`                  | Creates an individual category.                                                                                                                                                  | Required if `categories` parameter exists.                                   | Takes the category name as its value.                                     |
| `etiquetas`              | Specifies labels to be used by the enclosing category.                                                                                                                           | Required if `categories` parameter exists, optional for `exclude` parameter. | Accepts any labels, whether currently existing or planned for the future. |
| `"*"`                    | Catchall for any pull request not included within a category *above*. If used, it must be added at the end of the file.                                                          | Opcional                                                                     | No value accepted.                                                        |
