---
title: Testando alterações de configuração de contêiner de desenvolvimento em um branch pré-compilado habilitado
shortTitle: Test dev container changes
allowTitleToDifferFromFilename: true
intro: 'Ao alterar a configuração do contêiner de desenvolvimento para um branch que está habilitado para pré-compilações, você deverá testar suas alterações em um codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with write permissions to a repository can create or edit the dev container configuration for a branch.
ms.openlocfilehash: 29b44d0fb0b3bb3211f0c204cc7e99e39ab89b79
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159297'
---
Quaisquer alterações feitas na configuração do contêiner de desenvolvimento para uma ramificação habilitada para pré-compilação resultarão em uma atualização da configuração do codespace e da pré-compilação associada. Por isso, é importante testar tais alterações em um codespace de um branch de teste antes de fazer o commit de suas alterações em um branch do repositório que é ativamente usado. Isso garantirá que você não estará introduzindo alterações para a sua equipe.

Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

## Testando alterações para a configuração do contêiner de desenvolvimento

1. Crie um código a partir do branch pré-compilado cujo contêiner de desenvolvimento você deseja alterar. Para obter mais informações, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)".
1. No codespaec, confira um branch de teste. Para obter mais informações, confira "[Como usar o controle do código-fonte no seu codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#creating-or-switching-branches)".
1. Faça as alterações necessárias na configuração do contêiner de desenvolvimento.
1. Aplique as alterações recompilando o container. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)".
1. Depois de tudo parecer bom, recomendamos também criar um novo codespace a partir de seu branch de teste para garantir que tudo está funcionando. Você pode então fazer commit de suas alterações no branch padrão do repositório ou em um branch de recurso ativo, acionando uma atualização da pré-compilação para esse branch.

   {% note %}
   
   **Observação**: a criação desse codespace levará mais tempo do que o normal porque ele não será criado com base em um pré-build.
   
   {% endnote %}
