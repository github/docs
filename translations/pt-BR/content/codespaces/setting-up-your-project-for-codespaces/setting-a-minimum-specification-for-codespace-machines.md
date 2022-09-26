---
title: Definindo uma especificação mínima para máquinas de codespaces
shortTitle: Set a minimum machine spec
intro: 'Você pode evitar que tipos de computador com recursos insuficientes sejam usados nos {% data variables.product.prodname_github_codespaces %} do repositório.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 368b7c73d13bb0624c9d838ac2d7bb18a2b050e3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880803'
---
## Visão geral

Cada codespace criado é hospedado em uma máquina virtual separada e você geralmente pode escolher entre diferentes tipos de máquinas virtuais. Cada tipo de computador tem recursos diferentes (CPUs, memória, armazenamento) e, por padrão, o tipo de computador com menos recursos é usado. Para obter mais informações, confira "[Como alterar o tipo de computador para seu codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)".

Se o seu projeto precisar de um nível de capacidade de computação específico, você poderá configurar {% data variables.product.prodname_github_codespaces %} para que apenas os tipos de computador que atenderem a esses requisitos possam ser usados por padrão ou selecionados pelos usuários. Você configura isso em um arquivo `devcontainer.json`.

{% note %}

**Importante:** o acesso a alguns tipos de computadores pode ser restrito no nível da organização. De modo geral, isso é feito para evitar que as pessoas escolham máquinas de maior recursos que são cobradas a uma taxa mais alta. Se seu repositório for afetado por uma política a nível da organização para tipos de máquinas, você deverá certificar-se de que não definiu uma especificação mínima que não deixaria nenhum tipo de máquina disponível para as pessoas escolherem. Para obter mais informações, confira "[Como restringir o acesso aos tipos de computadores](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

{% endnote %}

## Definindo uma especificação mínima de máquina

1. Os {% data variables.product.prodname_github_codespaces %} do repositório são configurados em um arquivo `devcontainer.json`. Se o repositório ainda não contiver um arquivo `devcontainer.json`, adicione-o agora. Confira "[Adicionar uma configuração de contêiner de desenvolvimento ao repositório](/free-pro-team@latest/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)".
1. Edite o arquivo `devcontainer.json`, adicionando uma propriedade `hostRequirements` como esta:

   ```json{:copy}
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb" 
   }
   ```

   Você pode especificar uma ou todas as opções: `cpus`, `memory` e `storage`.
   
   Para verificar as especificações dos tipos de computador do {% data variables.product.prodname_github_codespaces %} que estão disponíveis para o repositório no momento, siga o processo de criação de um codespace até que apareçam as opções de tipos de computador. Para obter mais informações, confira "[Como criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".
   
1. Salve o arquivo e faça commit as alterações no branch necessário do repositório.

   Agora, quando você criar um codespace para esse branch do repositório e acessar as opções de configuração de criação, você só poderá selecionar os tipos de máquina que correspondem ou excedem os recursos que você especificou.

   ![Caixa de diálogo que mostra uma escolha limitada de tipos de máquina](/assets/images/help/codespaces/machine-types-limited-choice.png)

## Leitura adicional

- "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)"
