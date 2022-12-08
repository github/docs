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
permissions: People with admin access to a repository can configure prebuilds for the repository.
ms.openlocfilehash: dbb355e150695f27d1d6a7fa51eccc33a0ebde4f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159114'
---
Você pode definir uma configuração de prebuild para a combinação de um branch específico do repositório com um arquivo de configuração de contêiner de desenvolvimento específico.

Todos os branches criados com base em um branch pai habilitado para o prebuild normalmente também obterão prebuilds para a mesma configuração de contêiner de desenvolvimento. Isso ocorre porque as pré-compilações para branches filhos que usam a mesma configuração de contêiner de desenvolvimento que o branch pai é, na maioria das vezes, idêntica, para que os desenvolvedores também possam se beneficiar de tempos de criação de codespace mais rápidos nesses branches. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

Normalmente, quando você configura prebuilds para um branch, eles estarão disponíveis para vários tipos de computador. No entanto, se seu repositório tiver um tamanho superior a 32 GB, as pré-compilações não estarão disponíveis para tipos de máquina 2-core e 4-core, uma vez que o armazenamento previsto é limitado a 32 GB.

## Pré-requisitos 

As pré-compilações são criadas usando o {% data variables.product.prodname_actions %}. Como resultado, {% data variables.product.prodname_actions %} precisa ser habilitado para o repositório para o qual você está configurando pré-compilações. Para obter mais informações, confira "[Como gerenciar as configurações do {% data variables.product.prodname_actions %} de um repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)".

## Configurando as pré-criações

{% data reusables.codespaces.accessing-prebuild-configuration %}
1. Na seção "Configuração de prebuild" da página, clique em **Configurar prebuild**.

   ![O botão "Configurar pré-compilações"](/assets/images/help/codespaces/prebuilds-set-up.png)

1. Escolha o branch para o qual você deseja configurar pré-compilações.

   ![O menu suspenso do branch](/assets/images/help/codespaces/prebuilds-choose-branch.png)

   {% note %} 

   **Observação**: todos os branches criados com base em um branch base habilitado para o prebuild normalmente também obterão prebuilds para a mesma configuração de contêiner de desenvolvimento. Por exemplo, se você habilitar prebuilds para um arquivo de configuração de contêiner de desenvolvimento no branch padrão do repositório, os branches baseados no branch padrão também obterão, na maioria dos casos, prebuilds para a mesma configuração de contêiner de desenvolvimento.

   {% endnote %}

1. Opcionalmente, no menu suspenso **Arquivo de configuração** exibido, escolha o arquivo de configuração `devcontainer.json` que deseja usar para suas pré-compilações. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)".

   ![O menu suspenso do arquivo de configuração](/assets/images/help/codespaces/prebuilds-choose-configfile.png)

1. Escolha como você deseja acionar automaticamente as atualizações da pré-compilação.

   * **Cada push** (a configuração padrão) – com essa configuração, as pré-compilações serão atualizadas em cada push feito para o branch especificado. Isso garantirá que os codespaces gerados a partir de uma pré-compilação sempre contenham a configuração de codespace mais recente, incluindo quaisquer dependências adicionadas ou atualizadas recentemente.
   * **Na alteração de configuração** – com essa configuração, as pré-compilações serão atualizadas sempre que os arquivos de configuração associados para um determinado repositório e branch forem atualizados. Isso garante que as alterações nos arquivos de configuração do contêiner de desenvolvimento para o repositório sejam usadas quando um codespace for gerado a partir de uma pré-compilação. O fluxo de trabalho do {% data variables.product.prodname_actions %} que atualiza as pré-compilações será executado com menos frequência, portanto, essa opção usará menos minutos de {% data variables.product.prodname_actions %}. No entanto, essa opção não garantirá que os codespaces sempre incluam dependências adicionadas ou atualizadas recentemente, portanto, elas podem ter que ser adicionadas ou atualizadas manualmente após a criação de um codespace.
   * **Agendado** – com essa configuração, você pode ter suas pré-compilações atualizadas em uma agenda personalizada definida por você. Isso pode reduzir o consumo de minutos do {% data variables.product.prodname_actions %}, mas com essa opção, podem ser criados codespaces que não usam as alterações de configuração de contêiner de desenvolvimento mais recentes.

   ![As opções de gatilho de pré-inicialização](/assets/images/help/codespaces/prebuilds-triggers.png)

1. Opcionalmente, selecione **Reduzir pré-compilação disponível apenas para regiões específicas** para criar pré-compilações somente em regiões especificadas. Selecione as regiões nas quais você deseja que as pré-compilações estejam disponíveis.

   Por padrão, as pré-compilações são criadas em todas as regiões disponíveis, incorrendo em encargos de armazenamento por pré-compilação.

   ![Opções de seleção de região](/assets/images/help/codespaces/prebuilds-regions.png)

   {% note %}

   **Observações**: 
   * A pré-compilação em cada região incorre em encargos de armazenamento individuais. Por conseguinte, só devem ser permitidas pré-construções para regiões em que se sabe que serão utilizadas. Para obter mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds)".
   * Os desenvolvedores podem definir sua região padrão para {% data variables.product.prodname_github_codespaces %}, que pode permitir que você habilite pré-compilações para menos regiões. Para obter mais informações, confira "[Como configurar a região padrão do {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)".

   {% endnote %}

1. Como alternativa, em **Histórico de modelo**, defina o número de versões de pré-compilação a serem mantidas. Você pode inserir qualquer número entre 1 e 5. O número padrão de versões salvas é 2, o que significa que apenas a última pré-compilação do modelo e a versão anterior são salvas.

   ![A configuração do histórico de pré-compilação](/assets/images/help/codespaces/prebuilds-template-history-setting.png)

   Dependendo das configurações do seu acionador de pré-compilação, esta pode mudar a cada push ou em cada alteração de configuração do contêiner de desenvolvimento. A retenção de versões mais antigas de pré-compilações permite que você crie uma pré-compilação de um commit mais antigo com uma configuração de contêiner de desenvolvimento diferente da pré-compilação atual. Essa configuração permite que você defina o número de versões retidas para um nível apropriado para suas necessidades. 

   Se você definir o número de versões de pré-compilação a serem salvas como 1, {% data variables.product.prodname_github_codespaces %} salvará apenas a versão mais recente da pré-compilação e excluirá a versão mais antiga sempre que o modelo for atualizado. Isso significa que você não obterá um codespace predefinido se voltar para uma configuração de contêiner de desenvolvimento mais antiga.
   
   Há um custo de armazenamento associado a cada versão de pré-compilação que é mantida. Por exemplo, se você estiver gerando pré-compilações em quatro regiões e mantendo duas versões, será cobrado pelo armazenamento de até oito pré-compilações. Para ver mais informações sobre cobrança, confira "[Sobre a cobrança de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

1. Como alternativa, adicione usuários ou equipes a serem notificados quando a execução do fluxo de trabalho de predefinição falhar para essa configuração. Você pode começar a digitar um nome de usuário, um nome de equipe ou um nome completo e depois clicar no nome quando ele aparecer para adicioná-lo à lista. Os usuários ou as equipes que você adicionar receberão um email quando ocorrerem falhas de predefinição, contendo um link para os logs de execução de fluxo de trabalho como ajuda em uma investigação mais aprofundada.

   ![A configuração de notificação de falha de predefinição](/assets/images/help/codespaces/prebuilds-failure-notification-setting.png)

1. Opcionalmente, na parte inferior da página, clique em **Mostrar opções avançadas**.

   ![Captura de tela da página de configuração de pré-compilação, com a opção "Mostrar opções avançadas" realçada](/assets/images/help/codespaces/show-advanced-options.png)

   Na seção "Opções avançadas", se você selecionar **Desabilitar otimização de pré-compilação**, os codespaces serão criados sem uma pré-compilação se o fluxo de trabalho de pré-compilação mais recente falhar ou estiver em execução no momento. Para obter mais informações, confira as "[Etapas de solução de problemas](/codespaces/troubleshooting/troubleshooting-prebuilds#preventing-out-of-date-prebuilds-being-used)".

1. Clique em **Criar**.

   {% data reusables.codespaces.prebuilds-permission-authorization %}

Após criar uma configuração de pré-compilação, ela é listada na página do {% data variables.product.prodname_github_codespaces %} das configurações do seu repositório. Um fluxo de trabalho {% data variables.product.prodname_actions %} é enfileirado e executado para criar pré-compilações nas regiões que você especificou, com base no arquivo de configuração de branch e contêiner de desenvolvimento que você selecionou. 

![Captura de tela da lista de configurações de prebuild](/assets/images/help/codespaces/prebuild-configs-list.png)

Para obter informações sobre como editar e excluir configurações de prebuild, confira "[Gerenciar prebuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds)".

## Configurar variáveis de ambiente

Para permitir que o processo de pré-compilação acesse as variáveis de ambiente necessárias para criar seu ambiente de desenvolvimento. Você pode defini-las como segredos de repositório de {% data variables.product.prodname_codespaces %} ou como segredos da organização de {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Como adicionar segredos a um repositório](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-a-repository)" e "[Como adicionar segredos a uma organização](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces#adding-secrets-for-an-organization)". 

Os segredos que você criar desta forma serão acessíveis por qualquer pessoa que crie um codespace a partir deste repositório. Caso não deseje fazer isso, você pode, como alternativa, definir o segredo `CODESPACES_PREBUILD_TOKEN`. O segredo `CODESPACES_PREBUILD_TOKEN` é usado apenas para pré-builds, e o valor dele não está acessível nos codespaces dos usuários. 

As pré-compilações não podem usar nenhum segredo de nível de usuário ao construir seu ambiente, porque elas não estarão disponíveis até que o codespace seja criado.

## Configurando tarefas demoradas a serem incluídas na pré-compilação

Você pode usar os comandos `onCreateCommand` e `updateContentCommand` em seu `devcontainer.json` para incluir processos demorados como parte da criação da pré-compilação. Para obter mais informações, confira a documentação do {% data variables.product.prodname_vscode %}, "[devcontainer.json reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)".

`onCreateCommand` é executado apenas uma vez, quando a pré-compilação é criada, enquanto `updateContentCommand` é executado na criação do modelo pré-compilado e erm suas atualizações subsequentes. As compilações incrementais devem ser incluídas em `updateContentCommand`, pois representam a origem do seu projeto e precisam ser incluídas para cada atualização de pré-compilação.

## Leitura adicional

- "[Permitir que um prebuild acesse outros repositórios](/codespaces/prebuilding-your-codespaces/allowing-a-prebuild-to-access-other-repositories)"
- "[Solução de problemas de pré-builds](/codespaces/troubleshooting/troubleshooting-prebuilds)"
