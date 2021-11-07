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
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

## Sobre a criação do codespace

You can create a codespace on {% data variables.product.prodname_dotcom_the_website %}, in {% data variables.product.prodname_vscode %}, or by using {% data variables.product.prodname_cli %}. {% data reusables.codespaces.codespaces-are-personal %}

Os codespaces são associados a um branch específico de um repositório e o repositório não pode estar vazio. {% data reusables.codespaces.concurrent-codespace-limit %} Para obter mais informações, consulte "[Excluir um codespace](/github/developing-online-with-codespaces/deleting-a-codespace)".


Ao criar um codespace, várias etapas acontecem para criar e conectar você ao seu ambiente de desenvolvimento:

- Etapa 1: A VM e o armazenamento são atribuídos ao seu codespace.
- Etapa 2: O contêiner é criado e seu repositório é clonado.
- Passo 3: Você pode conectar-se ao codespace.
- Etapa 4: O codespace continua com a configuração pós-criação.

Para obter mais informações sobre o que acontece quando você cria um codespace, consulte "[Aprofundamento](/codespaces/getting-started/deep-dive)".

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

## Acesso a {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.availability %}

Quando você tem acesso a {% data variables.product.prodname_codespaces %}, você verá uma aba "Codespace" dentro do menu suspenso ** Código de{% octicon "code" aria-label="The code icon" %} ** ao visualizar um repositório.

Você terá acesso a codespaces nas seguintes condições:

* Você é um integrante de uma organização que habilitou {% data variables.product.prodname_codespaces %} e definiu um limite de gastos.
* Um proprietário da organização concedeu a você acesso a {% data variables.product.prodname_codespaces %}.
* O repositório pertence à organização que habilitou {% data variables.product.prodname_codespaces %}.

{% note %}

**Observação:** As pessoas que já aderiram ao beta com sua conta pessoal do {% data variables.product.prodname_dotcom %} não perderão acesso a {% data variables.product.prodname_codespaces %}. No entanto, {% data variables.product.prodname_codespaces %} para as pessoas, continuará sendo beta.

{% endnote %}

Os proprietários da organização podem permitir que todos os integrantes da organização criem codespaces, limitem a criação de códigos aos integrantes selecionados da organização ou desabilitem a criação de codespace. Para obter mais informações sobre como gerenciar o acesso aos codespaces dentro da sua organização, consulte "[Habilitar codespace para usuários da sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization)".

Antes de {% data variables.product.prodname_codespaces %} pode ser usado em uma organização, um proprietário ou gerente de cobrança deverá ter um limite de gastos. Para obter mais informações, consulte "[Sobre limites de gastos para codespaces](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces#about-spending-limits-for-codespaces)".

Se você deseja criar um codespace para um repositório pertencente à sua conta pessoal ou outro usuário e você tem permissão para criar repositórios em uma organização que habilitou {% data variables.product.prodname_codespaces %}, você poderá criar uma bifurcação de repositórios pertencentes ao usuário na organização e, em seguida, criar um codespace para a bifurcação.

## Criar um codespace

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
2. No nome do repositório, use o menu suspenso "Branch", e selecione o branch para o qual você deseja criar um codespace.

   ![Menu suspenso do branch](/assets/images/help/codespaces/branch-drop-down.png)

3. No nome do repositório, use o menu suspenso **Código de {% octicon "code" aria-label="The code icon" %}** e na aba **Codespaces** de código, clique em {% octicon "plus" aria-label="The plus icon" %} **Novo codespace**.

   ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

   Se você é integrante de uma organização e está criando um codespace em um repositório pertencente a essa organização, você poderá selecionar a opção de um tipo de máquina diferente. Na caixa de diálogo, escolha um tipo de máquina e clique em **Criar codespace**. ![Escolha do tipo da máquina](/assets/images/help/codespaces/choose-custom-machine-type.png)

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To create a new codespace, use the `gh codespace create` subcommand.

```shell
gh codespace create 
```

You are prompted to choose a repository, a branch, and a machine type (if more than one is available).

Alternatively, you can use flags to specify some or all of the options:

```shell
gh codespace create -r <em>owner</em>/<em>repo</em> -b <em>branch</em> -m <em>machine-type</em> 
```

Replace `owner/repo` with the repository identifier. Replace `branch` with the name of the branch, or the full SHA hash of the commit, that you want to be initially checked out in the codespace. If you use the `-r` flag without the `b` flag, the codespace is created from the default branch.

Replace `machine-type` with a valid identifier for an available machine type. Identifiers are strings such as: `basicLinux32gb` and `standardLinux32gb`. The type of machines that are available depends on the repository, your user account, and your location. If you enter an invalid or unavailable machine type, the available types are shown in the error message. If you omit this flag and more than one machine type is available you will be prompted to choose one from a list.

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_create).

{% endcli %}
