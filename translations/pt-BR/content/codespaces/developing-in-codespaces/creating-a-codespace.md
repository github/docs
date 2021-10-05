---
title: Criar um codespace
intro: Você pode criar um codespace para uma branch em um repositório para fazer o desenvolvimento on-line.
product: '{% data reusables.gated-features.codespaces %}'
permissions: '{% data reusables.codespaces.availability %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
  - /github/developing-online-with-codespaces/creating-a-codespace
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

## Sobre a criação do codespace

Você pode criar um codespace em {% data variables.product.prodname_dotcom_the_website %} ou em {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.codespaces-are-personal %}

Os codespaces são associados a um branch específico de um repositório e o repositório não pode estar vazio. {% data reusables.codespaces.concurrent-codespace-limit %} Para obter mais informações, consulte "[Excluir um codespace](/github/developing-online-with-codespaces/deleting-a-codespace)".


When you create a codespace, a number of steps happen to create and connect you to your development environment:

- Step 1: VM and storage are assigned to your codespace.
- Step 2: Container is created and your repository is cloned.
- Step 3: You can connect to the codespace.
- Step 4: Codespace continues with post-creation setup.

For more information on what happens when you create a codespace, see "[Deep Dive](/codespaces/getting-started/deep-dive)."

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

## Access to {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.availability %}

When you have access to {% data variables.product.prodname_codespaces %}, you'll see a "Codespaces" tab within the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu when you view a repository.

You'll have access to codespaces under the following conditions:

* You are a member of an organization that has enabled {% data variables.product.prodname_codespaces %} and set a spending limit.
* An organization owner has granted you access to {% data variables.product.prodname_codespaces %}.
* The repository is owned by the organization that has enabled {% data variables.product.prodname_codespaces %}.

{% note %}

**Note:** Individuals who have already joined the beta with their personal {% data variables.product.prodname_dotcom %} account will not lose access to {% data variables.product.prodname_codespaces %}, however {% data variables.product.prodname_codespaces %} for individuals will continue to remain in beta.

{% endnote %}

Organization owners can allow all members of the organization to create codespaces, limit codespace creation to selected organization members, or disable codespace creation. For more information about managing access to codespaces within your organization, see "[Enable Codespaces for users in your organization](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization)."

Before {% data variables.product.prodname_codespaces %} can be used in an organization, an owner or billing manager must have set a spending limit. For more information, see "[About spending limits for Codespaces](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces#about-spending-limits-for-codespaces)."

If you would like to create a codespace for a repository owned by your personal account or another user, and you have permission to create repositories in an organization that has enabled {% data variables.product.prodname_codespaces %}, you can fork user-owned repositories to that organization and then create a codespace for the fork.

## Criar um codespace

{% data reusables.repositories.navigate-to-repo %}
2. No nome do repositório, use o menu suspenso "Branch", e selecione o branch para o qual você deseja criar um codespace.

  ![Menu suspenso do branch](/assets/images/help/codespaces/branch-drop-down.png)

3. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**.

  ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

   If you are a member of an organization and are creating a codespace on a repository owned by that organization, you can select the option of a different machine type. From the dialog, choose a machine type and then click **Create codespace**. ![Machine type choice](/assets/images/help/codespaces/choose-custom-machine-type.png)
