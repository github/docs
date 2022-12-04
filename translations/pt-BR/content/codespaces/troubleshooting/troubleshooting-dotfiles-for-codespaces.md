---
title: Solução de problemas de dotfiles dos GitHub Codespaces
allowTitleToDifferFromFilename: true
intro: Etapas de solução de problemas comuns de dotfiles.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Dotfiles
ms.openlocfilehash: 699f790e45c71e685ac6b301e8dea1eca2ee6f15
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158682'
---
Se o seu codespace não consegue pegar as configurações de dotfiles, você deverá seguir as etapas de depuração a seguir.

1. Habilite os dotfiles selecionando **Instalar dotfiles automaticamente** nas [Configurações pessoais dos {% data variables.product.prodname_github_codespaces %}](https://github.com/settings/codespaces).

   ![A opção 'Instalar dotfiles automaticamente'](/assets/images/help/codespaces/automatically-install-dotfiles.png)

1. Verifique `/workspaces/.codespaces/.persistedshare/dotfiles` para ver se os dotfiles foram clonados.
   - Se seus dotfiles foram clonados, tente reexecutar manualmente seu script de instalação para verificar se é executável.
   - Se os dotfiles não foram clonados, verifique `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` para ver se houve um problema ao cloná-los.
1. Verifique `/workspaces/.codespaces/.persistedshare/creation.log` para ver se há possíveis problemas. Para obter mais informações, confira [Logs de criação](/codespaces/troubleshooting/codespaces-logs#creation-logs).

Se a configuração dos dotfiles for selecionada corretamente, mas parte da configuração for incompatível com os codespaces, use a variável de ambiente `$CODESPACES` para adicionar uma lógica condicional para configurações específicas do codespace.
