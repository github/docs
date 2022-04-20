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

{% data reusables.codespaces.prebuilds-beta-note %}

É possível definir uma configuração de pré-criação para um branch específico do repositório.

Qualquer branch criado a partir de um branchde base pré-compilado normalmente também receberá uma pré-compilação durante a criação do codespace. Isso é verdade se o contêiner de desenvolvimento no branch for o mesmo que no branch de base. Isso ocorre porque a maioria da configuração de pré-compilação para branches com a mesma configuração de contêiner de desenvolvimento são idênticos, para que os desenvolvedores possam se beneficiar de horários de criação de codespaces mais rápidos também nesses branches. Para obter mais informações, consulte "[Introdução a contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

Normalmente, ao configurar pré-compilações para um branch, as pré-compilações estarão disponíveis para tipos de máquinas de {% data variables.product.prodname_codespaces %} para esse branch. No entanto, se seu repositório tiver um tamanho superior a 32 GB, as pré-compilações não estarão disponíveis para tipos de máquina 2-core e 4-core, uma vez que o armazenamento previsto é limitado a 32 GB.

{% data reusables.codespaces.prebuilds-not-available %}

## Pré-requisitos

Antes de configurar as pré-compilações para seu projeto, os pontos a seguir devem ser verdadeiros:
* {% data variables.product.prodname_github_codespaces %} deve estar habilitado para sua organização. Para obter mais informações, consulte "[Habilitando {% data variables.product.prodname_codespaces %} para a sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)".
* {% data variables.product.prodname_actions %} deve estar habilitado para o seu repositório. Cada configuração de pré-compilação deve poder acionar um fluxo de trabalho de ações. Para obter mais informações, consulte "[Gerenciar configurações de {% data variables.product.prodname_actions %} para um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)".

## Configurando uma pré-compilação

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Na seção "Código & automação" da barra lateral, clique em **{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %}**.
1. Em "Configuração de pré-compilação", clique em **Configurar pré-compilação**.

   ![O botão "Configurar pré-compilações"](/assets/images/help/codespaces/prebuilds-set-up.png)

1. Escolha o branch para o qual você deseja configurar uma pré-compilação.

   ![Menu suspenso Branch](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %}

   **Observação**: Todos os branches criados a partir de um branch de base pré-habilitado normalmente também obtêm pré-compilações. Por exemplo, se você habilitar pré-compilações para o branch padrão do repositório, os branches baseados no branch padrão também obterão, na maioria dos casos, pré-compilações.

   {% endnote %}

1. Escolha as regiões nas quais você deseja configurar uma pré-construção. Os desenvolvedores devem estar localizados em uma região selecionada para poderem criar codespaces a partir de uma pré-compilação. Como alternativa, selecione **Todas as regiões**.

   ![Opções de seleção de região](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **Atenção**:
   * O modelo de pré-compilação para cada região irá incorrer em taxas individuais. Por conseguinte, só devem ser permitidas pré-construções para regiões em que se sabe que serão utilizadas. Para obter mais informações, consulte "[Sobre pré-compilações de {% data variables.product.prodname_codespaces %}](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)".
   * Os desenvolvedores podem definir sua região padrão para {% data variables.product.prodname_codespaces %}, que pode permitir que você habilite pré-compilações para menos regiões. Para obter mais informações, consulte "[Definindo a sua região padrão para {% data variables.product.prodname_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-codespaces)".

   {% endnote %}

1. Escolha como você quer acionar automaticamente as atualizações do modelo de pré-criação.

   * **Cada push** (a configuração padrão) - Com esta configuração, configurações de pré-criação serão atualizadas a cada push feito para o branch determinado. Isto irá garantir que os codespaces gerados a partir de um template de pré-criação sempre contenham as configurações mais recentes de codespace, incluindo as dependências adicionadas recentemente ou atualizadas.
   * **Na alteração da configuração** - Com essa configuração, as configurações de pré-criação serão atualizadas toda vez que os arquivos de configuração associados para um determinado repositório e branch forem atualizados. Isso garante que as alterações nos arquivos de configuração de contêiner de desenvolvimento do repositório sejam usadas quando um codespace for gerado a partir de um modelo de pré-criação. O fluxo de trabalho de ações que atualizar o template de pré-criação será executado menos vezes. Portanto, esta opção usará menos minutos de ações. No entanto, esta opção não garante que os codespaces sempre incluam dependências recentemente adicionadas ou atualizadas. Portanto, elas podem ser adicionadas ou atualizadas manualmente depois que o codespace for criado.
   * **Agendado** - Com esta configuração, você pode atualizar suas configurações de pré-criação em um agendamento personalizado definido por você. Isso pode reduzir o consumo de minutos de ações e reduzir a quantidade de tempo durante o qual as pré-criações não estão disponíveis porque estão sendo atualizadas. No entanto, com esta opção, é possível que se criem codespaces podem que não usam as últimas alterações de configuração de contêiner de desenvolvimento

   ![As opções de acionamento de pré-criação](/assets/images/help/codespaces/prebuilds-triggers.png)

1. Clique em **Criar**.

   A configuração de pré-compilação está listada na página do {% data variables.product.prodname_codespaces %} das configurações do seu repositório. Um fluxo de trabalho de {% data variables.product.prodname_actions %} está enfileirado e é executado para criar modelos de pré-compilação com base no branch que você selecionou nas regiões que você especificou.

   {% note %}

   **Observação**: Por padrão, o fluxo de trabalho de {% data variables.product.prodname_actions %} para uma configuração de pré-compilação só pode acessar recursos no seu próprio repositório. Se o seu projeto usar recursos de fora do repositório, você deverá definir o segredo `CODESPACES_PREBUILD_TOKEN` para permitir o acesso necessário. Para obter mais informações, consulte "[Permitir uma pré-compilação para acessar recursos externos](/codespaces/prebuilding-your-codespaces/managing-prebuilds#allowing-a-prebuild-to-access-external-resources)".

   {% endnote %}

## Configurando o acesso a recursos que não estão no repositório

Por padrão, o fluxo de trabalho de {% data variables.product.prodname_actions %} para uma configuração de pré-compilação só pode acessar o próprio conteúdo do repositório. Se o seu projeto precisa acessar recursos externos para compilar o ambiente de desenvolvimento, você deverá configurar um token de acesso pessoal (PAT) com os escopos de acesso apropriados.

Para obter mais informações, consulte "[Permitir uma pré-compilação para acessar recursos externos](/codespaces/prebuilding-your-codespaces/managing-prebuilds#allowing-a-prebuild-to-access-external-resources)".

## Configurar variáveis de ambiente

Para permitir que o processo de pré-compilação acesse as variáveis de ambiente necessárias para criar seu ambiente de desenvolvimento. Você pode defini-las como segredos de repositório de {% data variables.product.prodname_codespaces %} ou como segredos da organização de {% data variables.product.prodname_codespaces %}. Para obter mais informações, consulte "[Adicionando segredos para um repositório](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces#adding-secrets-for-a-repository)" e "[Adicionando segredos a uma organização](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces#adding-secrets-for-an-organization)".

As pré-compilações não usam nenhum segredo de nível de usuário ao construir seu ambiente, porque elas não são adicionadas até que o codespace seja criado.

Os segredos de {% data variables.product.prodname_codespaces %} que você criar desta forma serão acessíveis por qualquer pessoa que crie um codespace a partir deste repositório. Se você não quiser isso, você pode definir o segredo `CODESPACES_PREBUILD_TOKEN`. O segredo `CODESPACES_PREBUILD_TOKEN` é usado apenas para pré-compilação e seu valor não pode ser acessado nos codespaces dos usuários. Para obter mais informações, consulte "[Permitir uma pré-compilação para acessar recursos externos](/codespaces/prebuilding-your-codespaces/managing-prebuilds#allowing-a-prebuild-to-access-external-resources)".

## Configurando tarefas demoradas a serem incluídas na pré-compilação

Você pode usar os comandos `onCreateCommand` e `updateContentCommand` no seu `devcontainer.json` paraa incluir processos demorados como parte da criação de template de pré-compilação. Para obter mais informações, consulte a documentação do Visual Studio "[referência do devcontainer.json](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)".

`onCreateCommand` é executado apenas uma vez, quando o modelo de pré-compilação é criado, enquanto `updateContentCommand` é executado na criação do modelos e em subsequentes atualizações dos modelos. As compilações incrementais devem ser incluídas em `updateContentCommand` uma vez que representam a fonte do seu projeto e devem ser incluídas para cada atualização de um modelo de pré-compilação.

## Leia mais

- "[Solucionar problemas de pré-compilações](/codespaces/troubleshooting/troubleshooting-prebuilds)"
