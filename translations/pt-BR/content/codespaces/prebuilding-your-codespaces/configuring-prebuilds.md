---
title: Configurando as pré-criações
shortTitle: Configure prebuilds
intro: Você pode configurar o projeto para predefinir um codespace automaticamente sempre que você efetuar push de uma alteração para o repositório.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: be511c99a876ef7c318a9c55f40c6c1610f0e353
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147548061'
---
Você pode definir uma configuração de prebuild para a combinação de um branch específico do repositório com um arquivo de configuração de contêiner de desenvolvimento específico.

Todos os branches criados com base em um branch pai habilitado para o prebuild normalmente também obterão prebuilds para a mesma configuração de contêiner de desenvolvimento. Isso ocorre porque a pré-compilação para branches filhos que usam a mesma configuração de contêiner de desenvolvimento que o branch pai é, na maioria das vezes, idêntica, para que os desenvolvedores também possam se beneficiar de tempos de criação de codespace mais rápidos nesses branches. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

Normalmente, quando você configura prebuilds para um branch, eles estarão disponíveis para vários tipos de computador. No entanto, se seu repositório tiver um tamanho superior a 32 GB, as pré-compilações não estarão disponíveis para tipos de máquina 2-core e 4-core, uma vez que o armazenamento previsto é limitado a 32 GB.

## Pré-requisitos 

Antes de configurar as pré-compilações para seu projeto, os pontos a seguir devem ser verdadeiros: 
* {% data variables.product.prodname_github_codespaces %} deve estar habilitado para sua organização. Para obter mais informações, confira "[Como habilitar {% data variables.product.prodname_github_codespaces %} para sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)".
* {% data variables.product.prodname_actions %} deve estar habilitado para o seu repositório. Cada configuração de pré-compilação deve poder acionar um fluxo de trabalho de ações. Para obter mais informações, confira "[Como gerenciar as configurações do {% data variables.product.prodname_actions %} de um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)".

## Configurando uma pré-compilação

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Na seção "Código e automação" da barra lateral, clique em **{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %}** .
1. Na seção "Configuração de prebuild" da página, clique em **Configurar prebuild**.

   ![O botão "Configurar pré-compilações"](/assets/images/help/codespaces/prebuilds-set-up.png)

1. Escolha o branch para o qual você deseja configurar uma pré-compilação.

   ![O menu suspenso do branch](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %} 

   **Observação**: todos os branches criados com base em um branch base habilitado para o prebuild normalmente também obterão prebuilds para a mesma configuração de contêiner de desenvolvimento. Por exemplo, se você habilitar prebuilds para um arquivo de configuração de contêiner de desenvolvimento no branch padrão do repositório, os branches baseados no branch padrão também obterão, na maioria dos casos, prebuilds para a mesma configuração de contêiner de desenvolvimento.

   {% endnote %}

1. Opcionalmente, no menu suspenso **Arquivo de configuração** exibido, escolha o arquivo de configuração `devcontainer.json` que deseja usar para essa pré-compilação. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)".

   ![O menu suspenso do arquivo de configuração](/assets/images/help/codespaces/prebuilds-choose-configfile.png)

1. Escolha como você deseja acionar automaticamente as atualizações da pré-compilação.

   * **Cada push** (a configuração padrão) – com essa configuração, as configurações pré-compiladas serão atualizadas em cada push feito para o branch especificado. Isso garantirá que os codespaces gerados a partir de uma pré-compilação sempre contenham a configuração de codespace mais recente, incluindo quaisquer dependências adicionadas ou atualizadas recentemente.
   * **Na alteração de configuração** – com essa configuração, as configurações pré-compiladas serão atualizadas sempre que os arquivos de configuração associados para um determinado repositório e branch forem atualizados. Isso garante que as alterações nos arquivos de configuração do contêiner de desenvolvimento para o repositório sejam usadas quando um codespace for gerado a partir de uma pré-compilação. O fluxo de trabalho de Ações que atualiza a pré-compilação será executado com menos frequência, portanto, essa opção usará menos minutos de ações. No entanto, essa opção não garantirá que os codespaces sempre incluam dependências adicionadas ou atualizadas recentemente, portanto, elas podem ter que ser adicionadas ou atualizadas manualmente após a criação de um codespace.
   * **Agendado** – com essa configuração, você pode ter suas configurações de pré-compilação atualizadas em uma agenda personalizada definida por você. Isso pode reduzir o consumo de minutos do Actions, mas com essa opção, podem ser criados codespaces que não usem as alterações de configuração de contêiner de desenvolvimento mais recentes.

   ![As opções de gatilho de pré-inicialização](/assets/images/help/codespaces/prebuilds-triggers.png)

1. Opcionalmente, selecione **Reduzir pré-compilação disponível apenas para regiões específicas** para limitar o acesso à sua pré-compilação e selecione em quais regiões você deseja que ela esteja disponível. Os desenvolvedores só poderão criar codespaces usando uma predefinição se estiverem localizados em uma região selecionada. Por padrão, sua pré-compilação está disponível para todas as regiões onde os codespaces estão disponíveis e os custos de armazenamento se aplicam a cada região.

   ![Opções de seleção de região](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **Observações**: 
   * A pré-compilação para cada região incorrerá em cobranças individuais. Por conseguinte, só devem ser permitidas pré-construções para regiões em que se sabe que serão utilizadas. Para obter mais informações, confira "[Sobre as predefinições dos {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds)".
   * Os desenvolvedores podem definir sua região padrão para {% data variables.product.prodname_codespaces %}, que pode permitir que você habilite pré-compilações para menos regiões. Para obter mais informações, confira "[Como configurar a região padrão do {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)".

   {% endnote %}

1. Opcionalmente, defina o número de versões de pré-compilação a serem retidas. Você pode inserir qualquer número entre 1 e 5. O número padrão de versões salvas é 2, o que significa que apenas a última versão do modelo e a versão anterior são salvas.

   Dependendo das configurações do seu acionador de pré-compilação, esta pode mudar a cada push ou em cada alteração de configuração do contêiner de desenvolvimento. A retenção de versões mais antigas de pré-compilações permite que você crie uma pré-compilação de um commit mais antigo com uma configuração de contêiner de desenvolvimento diferente da pré-compilação atual. Como há um custo de armazenamento associado à retenção de versões de pré-compilação, você pode escolher o número de versões a serem retidas com base nas necessidades de sua equipe. Para ver mais informações sobre cobrança, confira "[Sobre a cobrança de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

   Se você definir o número de versões de pré-compilação a serem salvas como 1, {% data variables.product.prodname_codespaces %} salvará apenas a versão mais recente da pré-compilação e excluirá a versão mais antiga sempre que o modelo for atualizado. Isso significa que você não obterá um codespace predefinido se voltar para uma configuração de contêiner de desenvolvimento mais antiga.

   ![A configuração do histórico de pré-compilação](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

1. Como alternativa, adicione usuários ou equipes a serem notificados quando a execução do fluxo de trabalho de predefinição falhar para essa configuração. Você pode começar a digitar um nome de usuário, um nome de equipe ou um nome completo e depois clicar no nome quando ele aparecer para adicioná-lo à lista. Os usuários ou as equipes que você adicionar receberão um email quando ocorrerem falhas de predefinição, contendo um link para os logs de execução de fluxo de trabalho como ajuda em uma investigação mais aprofundada.

   ![A configuração de notificação de falha de predefinição](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

1. Clique em **Criar**.

   {% data reusables.codespaces.prebuilds-permission-authorization %}

Após criar uma configuração de prebuild, ela é listada na página do {% data variables.product.prodname_codespaces %} das configurações do seu repositório. Um fluxo de trabalho {% data variables.product.prodname_actions %} é enfileirado e executado para criar pré-compilações nas regiões que você especificou, com base no arquivo de configuração de branch e contêiner de desenvolvimento que você selecionou. 

![Captura de tela da lista de configurações de prebuild](/assets/images/help/codespaces/prebuild-configs-list.png)

Para obter informações sobre como editar e excluir configurações de prebuild, confira "[Gerenciar prebuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds)".

## Configurar variáveis de ambiente

Para permitir que o processo de pré-compilação acesse as variáveis de ambiente necessárias para criar seu ambiente de desenvolvimento. Você pode defini-las como segredos de repositório de {% data variables.product.prodname_codespaces %} ou como segredos da organização de {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Como adicionar segredos a um repositório](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)" e "[Como adicionar segredos a uma organização](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-an-organization)". 

Os segredos que você criar desta forma serão acessíveis por qualquer pessoa que crie um codespace a partir deste repositório. Caso não deseje fazer isso, você pode, como alternativa, definir o segredo `CODESPACES_PREBUILD_TOKEN`. O segredo `CODESPACES_PREBUILD_TOKEN` é usado apenas para pré-builds, e o valor dele não está acessível nos codespaces dos usuários. 

As pré-compilações não podem usar nenhum segredo de nível de usuário ao construir seu ambiente, porque elas não estarão disponíveis até que o codespace seja criado.

## Configurando tarefas demoradas a serem incluídas na pré-compilação

Você pode usar os comandos `onCreateCommand` e `updateContentCommand` em seu `devcontainer.json` para incluir processos demorados como parte da criação da pré-compilação. Para obter mais informações, confira a documentação do {% data variables.product.prodname_vscode %}, "[devcontainer.json reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)".

`onCreateCommand` é executado apenas uma vez, quando a pré-compilação é criada, enquanto `updateContentCommand` é executado na criação do modelo e erm suas atualizações subsequentes. As compilações incrementais devem ser incluídas em `updateContentCommand`, pois representam a origem do seu projeto e precisam ser incluídas para cada atualização de pré-compilação.

## Leitura adicional

- "[Permitir que um prebuild acesse outros repositórios](/codespaces/prebuilding-your-codespaces/allowing-a-prebuild-to-access-other-repositories)"
- "[Solução de problemas de pré-builds](/codespaces/troubleshooting/troubleshooting-prebuilds)"
