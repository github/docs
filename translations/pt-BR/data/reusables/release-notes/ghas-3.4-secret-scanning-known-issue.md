---
ms.openlocfilehash: 0ef0e7666a800328e3344636b954096fe0280d8b
ms.sourcegitcommit: b0323777cfe4324a09552d0ea268d1afacc3da37
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/17/2022
ms.locfileid: "147580718"
---
{% ifversion ghes > 3.1 or ghes < 3.5 %}

Em alguns casos, os clientes do GitHub Advanced Security que fizerem upgrade para o GitHub Enterprise Server 3.5 ou posterior poderão perceber que os alertas da verificação secreta estarão ausentes na interface do usuário da Web e na API REST. Para garantir que os alertas permaneçam visíveis, não ignore a versão 3.4 ao atualizar de uma versão anterior para a versão 3.5 ou posterior. Uma correção para a versão 3.5 e posterior estará disponível em uma próxima versão de patch.

Para planejar uma atualização até a versão 3.4, confira o [Assistente de atualização](https://support.github.com/enterprise/server-upgrade). [Atualizado em: 08-16/2022]

{% elsif ghes > 3.4 or ghes < 3.7 %}

Em alguns casos, os clientes do GitHub Advanced Security que fizerem upgrade para o GitHub Enterprise Server {{ currentVersion }} poderão perceber que os alertas de verificação de segredo estarão ausentes na interface do usuário da Web e na API REST. Para garantir que os alertas permaneçam visíveis, não ignore a versão 3.4 ao atualizar para a versão mais recente. Para planejar uma atualização até a versão 3.4, confira o [Assistente de atualização](https://support.github.com/enterprise/server-upgrade).

- Para exibir os alertas ausentes para todos os repositórios pertencentes a uma organização, os proprietários da organização podem navegar até as configurações de **Segurança e análise de código** da organização e clicar em **Habilitar todos** para verificação de segredo. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-existing-repositories)".
- Para exibir os alertas ausentes de um repositório individual, as pessoas com acesso de administrador ao repositório podem desabilitar e habilitar a verificação secreta do repositório. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise do seu repositório](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)".

Uma correção estará disponível em uma próxima versão de patch. [Atualizado em: 08-16/2022]

{% endif %}
