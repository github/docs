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
ms.openlocfilehash: 623b50a9423d855f807e2b480882f1e5eb2c479f
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113854'
---
## Visão geral

Cada codespace criado é hospedado em uma máquina virtual separada e você geralmente pode escolher entre diferentes tipos de máquinas virtuais. Cada tipo de computador tem recursos diferentes (núcleos de processador, memória, armazenamento) e, por padrão, o tipo de computador com menos recursos é usado. Para obter mais informações, confira "[Como alterar o tipo de computador para seu codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)".

Se o seu projeto precisar de um nível de capacidade de computação específico, você poderá configurar {% data variables.product.prodname_github_codespaces %} para que apenas os tipos de computador que atenderem a esses requisitos possam ser usados por padrão ou selecionados pelos usuários. Você configura isso em um arquivo `devcontainer.json`.

{% note %}

**Importante:** o acesso a alguns tipos de computadores pode ser restrito no nível da organização. De modo geral, isso é feito para evitar que as pessoas escolham máquinas de maior recursos que são cobradas a uma taxa mais alta. Se seu repositório for afetado por uma política a nível da organização para tipos de máquinas, você deverá certificar-se de que não definiu uma especificação mínima que não deixaria nenhum tipo de máquina disponível para as pessoas escolherem. Para obter mais informações, confira "[Como restringir o acesso aos tipos de computadores](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

{% endnote %}

## Definindo uma especificação mínima de máquina

{% data reusables.codespaces.edit-devcontainer-json %}
1. Edite o arquivo `devcontainer.json`, adicionando a propriedade `hostRequirements` no nível superior do arquivo, dentro do objeto JSON delimitador. Por exemplo:

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
