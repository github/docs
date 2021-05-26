---
title: Criar um repositório
intro: Você pode criar um repositório na sua conta pessoal ou em qualquer organização onde tenha permissões suficientes.
redirect_from:
  - /creating-a-repo/
  - /articles/creating-a-repository-in-an-organization/
  - /articles/creating-a-new-organization-repository/
  - /articles/creating-a-new-repository
  - /articles/creating-an-internal-repository
  - /github/setting-up-and-managing-your-enterprise-account/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-new-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% tip %}

**Dica:** os proprietários podem restringir as permissões de criação de repositório em uma organização. Para obter mais informações, consulte "[Restringir a criação de repositórios na organização](/articles/restricting-repository-creation-in-your-organization)".

{% endtip %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Dica**: Você também pode criar um repositório usando o {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`criar repositório gh`](https://cli.github.com/manual/gh_repo_create)" na documentação do {% data variables.product.prodname_cli %}.

{% endtip %}
{% endif %}

{% data reusables.repositories.create_new %}
2. Se desejar, para criar um repositório com a estrutura de diretório e arquivos de um repositório existente, use o menu suspenso **Choose a template** (Escolher um modelo) e selecione um repositório de modelo. Você verá repositórios de modelo que pertencem a você e às organizações das quais você é integrante ou que usou antes. Para obter mais informações, consulte "[Criar um repositório a partir de um modelo](/articles/creating-a-repository-from-a-template)". ![Template drop-down menu](/assets/images/help/repository/template-drop-down.png){% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
3. Opcionalmente, se você escolheu usar um modelo para incluir a estrutura do diretório e arquivos de todos os branches no modelo, e não apenas o branch-padrão, selecione **Incluir todos os branches**. ![Include all branches checkbox](/assets/images/help/repository/include-all-branches.png){% endif %}
3. No menu suspenso Proprietário, selecione a conta na qual deseja criar o repositório.![Menu suspenso Owner (Proprietário)](/assets/images/help/repository/create-repository-owner.png)
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
6. Se você não estiver usando um modelo, haverá um número de itens opcionais com os quais você pode preencher previamente o seu repositório. Se for importar um repositório existente para o {% data variables.product.product_name %}, não escolha qualquer uma destas opções, pois isso poderá criar um conflito de merge. É possível adicionar ou criar arquivos usando a interface de usuário ou optar por adicionar novos arquivos posteriormente usando a linha de comando. Para obter mais informações, consulte "[Importar um repositório Git usando a linha de comando](/articles/importing-a-git-repository-using-the-command-line/)", "[Adicionar um arquivo a um repositório usando a linha de comando](/articles/adding-a-file-to-a-repository-using-the-command-line)" e "[Solucionar conflitos de merge](/articles/addressing-merge-conflicts/)."
    - Você pode criar um README, que é um documento que descreve seu projeto. Para obter mais informações, consulte "[Sobre arquivos README](/articles/about-readmes/)".
    - Você pode criar um arquivo *.gitignore*, que é um conjunto de regras com instruções para ignorar. Para obter mais informações, consulte "[Ignorar arquivos](/github/getting-started-with-github/ignoring-files)."{% if currentVersion == "free-pro-team@latest" %}
    - Você pode optar por adicionar uma licença de software para seu projeto. Para obter mais informações, consulte "[Licenciar um repositório](/articles/licensing-a-repository)".{% endif %}
{% data reusables.repositories.select-marketplace-apps %}
{% data reusables.repositories.create-repo %}
{% if currentVersion == "free-pro-team@latest" %}
9. Na parte inferior da página Configuração rápida resultante, em "Import code from an old repository" (Importar código de um repositório antigo), você pode optar por importar um projeto para o novo repositório. Para isso, clique em **Import code** (Importar código).
{% endif %}

### Leia mais

- "[Gerenciar acessos aos repositórios da organização](/articles/managing-access-to-your-organization-s-repositories)"
- [Guias de código aberto](https://opensource.guide/){% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
