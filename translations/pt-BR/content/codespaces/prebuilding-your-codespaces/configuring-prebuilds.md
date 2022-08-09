---
title: Configurando as pré-criações
shortTitle: Configurar pré-criações
intro: Você pode configurar o seu projeto para pré-criar um codespace automaticamente cada vez que você fizer push de uma alteração no repositório.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with admin access to a repository can configure prebuilds for the repository.
---

You can set up a prebuild configuration for the combination of a specific branch of your repository with a specific dev container configuration file.

Any branches created from a prebuild-enabled parent branch will typically also get prebuilds for the same dev container configuration. This is because the prebuild template for child branches that use the same dev container configuration as the parent branch are, for the most part, identical, so developers can benefit from faster codespace creation times on those branches also. Para obter mais informações, consulte "[Introdução a contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

Typically, when you configure prebuilds for a branch, prebuilds will be available for multiple machine types. No entanto, se seu repositório tiver um tamanho superior a 32 GB, as pré-compilações não estarão disponíveis para tipos de máquina 2-core e 4-core, uma vez que o armazenamento previsto é limitado a 32 GB.

## Pré-requisitos

Antes de configurar as pré-compilações para seu projeto, os pontos a seguir devem ser verdadeiros:
* {% data variables.product.prodname_github_codespaces %} deve estar habilitado para sua organização. Para obter mais informações, consulte "[Habilitando {% data variables.product.prodname_github_codespaces %} para a sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)".
* {% data variables.product.prodname_actions %} deve estar habilitado para o seu repositório. Cada configuração de pré-compilação deve poder acionar um fluxo de trabalho de ações. Para obter mais informações, consulte "[Gerenciar configurações de {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)".

## Configurando uma pré-compilação

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Na seção "Código & automação" da barra lateral, clique em **{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %}**.
1. In the "Prebuild configuration" section of the page, click **Set up prebuild**.

   ![O botão "Configurar pré-compilações"](/assets/images/help/codespaces/prebuilds-set-up.png)

1. Escolha o branch para o qual você deseja configurar uma pré-compilação.

   ![The branch drop-down menu](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %}

   **Note**: Any branches created from a prebuild-enabled base branch will typically also get prebuilds for the same dev container configuration. For example, if you enable prebuilds for a dev container configuration file on the default branch of the repository, branches based on the default branch will, in most cases, also get prebuilds for the same dev container configuration.

   {% endnote %}

1. Optionally, in the **Configuration file** drop-down menu that's displayed, choose the `devcontainer.json` configuration file that you want to use for this prebuild template. Para obter mais informações, consulte "[Introdução a contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)."

   ![The configuration file drop-down menu](/assets/images/help/codespaces/prebuilds-choose-configfile.png)

1. Escolha como você quer acionar automaticamente as atualizações do modelo de pré-criação.

   * **Cada push** (a configuração padrão) - Com esta configuração, configurações de pré-criação serão atualizadas a cada push feito para o branch determinado. Isto irá garantir que os codespaces gerados a partir de um template de pré-criação sempre contenham as configurações mais recentes de codespace, incluindo as dependências adicionadas recentemente ou atualizadas.
   * **Na alteração da configuração** - Com essa configuração, as configurações de pré-criação serão atualizadas toda vez que os arquivos de configuração associados para um determinado repositório e branch forem atualizados. Isso garante que as alterações nos arquivos de configuração de contêiner de desenvolvimento do repositório sejam usadas quando um codespace for gerado a partir de um modelo de pré-criação. O fluxo de trabalho de ações que atualizar o template de pré-criação será executado menos vezes. Portanto, esta opção usará menos minutos de ações. No entanto, esta opção não garante que os codespaces sempre incluam dependências recentemente adicionadas ou atualizadas. Portanto, elas podem ser adicionadas ou atualizadas manualmente depois que o codespace for criado.
   * **Agendado** - Com esta configuração, você pode atualizar suas configurações de pré-criação em um agendamento personalizado definido por você. Isso pode reduzir o consumo de minutos de ações. No entanto, com esta opção, é possível criar codespaces que não usam as últimas alterações na configuração do contêiner de desenvolvimento.

   ![As opções de acionamento de pré-criação](/assets/images/help/codespaces/prebuilds-triggers.png)

1. Optionally, select **Reduce prebuild available to only specific regions** to limit access to your prebuild template, then select which regions you want it to be available in. Os desenvolvedores só podem criar Codespaces a partir de uma pré-compilação se estiverem localizados em uma região que você selecionar. By default, your prebuild template is available to all regions where codespaces is available and storage costs apply for each region.

   ![Opções de seleção de região](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **Atenção**:
   * O modelo de pré-compilação para cada região irá incorrer em taxas individuais. Por conseguinte, só devem ser permitidas pré-construções para regiões em que se sabe que serão utilizadas. Para obter mais informações, consulte "[Sobre pré-compilações de {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)".
   * Os desenvolvedores podem definir sua região padrão para {% data variables.product.prodname_codespaces %}, que pode permitir que você habilite pré-compilações para menos regiões. Para obter mais informações, consulte "[Definindo a sua região padrão para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)".

   {% endnote %}

1. Optionally, set the number of prebuild template versions to be retained. Você pode inserir qualquer número entre 1 e 5. O número padrão das versões salvas é 2, o que significa que apenas a versão de modelo mais recente e a versão anterior são salvas.

   Dependendo das configurações do acionamento da pré-cpmpilação, o modelo pré-compilado pode mudar a cada push ou em cada alteração de configuração do contêiner de dev. A retenção de versões mais antigas de modelos pré-compilados permite criar uma pré-compilação a partir de um commit mais antigo com uma configuração de contêiner de dev diferente do modelo pré-compilado atual. Uma vez que há um custo de armazenamento associado à retenção de versões de modelo pré-compilado, você pode escolher o número de versões a serem retidas com base nas necessidades da sua equipe. Para obter mais informações sobre cobrança, consulte "[Sobre a cobrança para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

   Se você definir o número de versões de modelo pré-compilado como economizar para 1, {% data variables.product.prodname_codespaces %} só salvará a versão mais recente do modelo pré-compilado e excluirá a versão mais antiga cada vez que o modelo for atualizado. Isso significa que você não terá um codespace pré-compilado, se você voltar para uma configuração de contêiner de dev mais antiga.

   ![A configuração do histórico do modelo pré-compilado](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

1. Optionally, add users or teams to notify when the prebuild workflow run fails for this configuration. Você pode começar a digitar um nome de usuário, nome da equipe ou nome completo e, em seguida, clicar no nome uma vez que ele aparece para adicioná-los à lista. Os usuários ou equipes que você adicionar receberão um e-mail quando ocorrem falhas pré-construídos, contendo um link para os registros de execução de fluxo de trabalho para ajudar com uma investigação mais aprofundada.

   ![A configuração de notificação de falha de pré-compilação](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

1. Clique em **Criar**.

   {% data reusables.codespaces.prebuilds-permission-authorization %}

After you create a prebuild configuration it is listed on the {% data variables.product.prodname_codespaces %} page of your repository settings. A {% data variables.product.prodname_actions %} workflow is queued and then run to create prebuild templates in the regions you specified, based on the branch and dev container configuration file you selected.

![Screenshot of the list of prebuild configurations](/assets/images/help/codespaces/prebuild-configs-list.png)

For information about editing and deleting prebuild configurations, see "[Managing prebuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds)."

## Configurar variáveis de ambiente

Para permitir que o processo de pré-compilação acesse as variáveis de ambiente necessárias para criar seu ambiente de desenvolvimento. Você pode defini-las como segredos de repositório de {% data variables.product.prodname_codespaces %} ou como segredos da organização de {% data variables.product.prodname_codespaces %}. Para obter mais informações, consulte "[Adicionando segredos para um repositório](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)" e "[Adicionando segredos a uma organização](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-an-organization)".

Secrets that you create in this way will be accessible by anyone who creates a codespace from this repository. Se você não quiser isso, você pode definir o segredo `CODESPACES_PREBUILD_TOKEN`. O segredo `CODESPACES_PREBUILD_TOKEN` é usado apenas para pré-compilação e seu valor não pode ser acessado nos codespaces dos usuários.

Prebuilds cannot use any user-level secrets while building your environment, because these are not available until after the codespace has been created.

## Configurando tarefas demoradas a serem incluídas na pré-compilação

Você pode usar os comandos `onCreateCommand` e `updateContentCommand` no seu `devcontainer.json` paraa incluir processos demorados como parte da criação de template de pré-compilação. Para obter mais informações, consulte a documentação de {% data variables.product.prodname_vscode %}, "[referência de devcontainer.json](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)".

`onCreateCommand` é executado apenas uma vez, quando o modelo de pré-compilação é criado, enquanto `updateContentCommand` é executado na criação do modelos e em subsequentes atualizações dos modelos. As compilações incrementais devem ser incluídas em `updateContentCommand` uma vez que representam a fonte do seu projeto e devem ser incluídas para cada atualização de um modelo de pré-compilação.

## Leia mais

- "[Allowing a prebuild to access other repositories](/codespaces/prebuilding-your-codespaces/allowing-a-prebuild-to-access-other-repositories)"
- "[Solucionar problemas de pré-compilações](/codespaces/troubleshooting/troubleshooting-prebuilds)"
