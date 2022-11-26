---
ms.openlocfilehash: 15dca8ffafe9686d15e08ffb8ecd9e07ceba3942
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147875628"
---
| Opção | Obrigatório | Atualizações de Segurança | Atualizações de versão | Descrição |
|:---|:---:|:---:|:---:|:---|
| [`package-ecosystem`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem)                     | **X** | | X | Gerenciador de pacotes para usar                  |
| [`directory`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#directory)                                     | **X** | | X | Localização de manifestos de pacotes           |
| [`schedule.interval`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduleinterval)                      | **X** | | X | Com que frequência verificar se há atualizações                |
| [`allow`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#allow)                                             | | X | X | Personalizar quais atualizações são permitidas         |
| [`assignees`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#assignees)                                     | | X | X | Responsáveis por definir pull request           |
| [`commit-message`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#commit-message)                           | | X | X | Preferências de mensagem do commit                  |{% ifversion fpt or ghec or ghes > 3.4 %}
| [`enable-beta-ecosystems`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)           | | | X | Habilitar ecossistemas que têm suporte em nível beta |{% endif %}
| [`ignore`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore)                                           | | X | X | Ignorar determinadas dependências ou versões     |
| [`insecure-external-code-execution`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#insecure-external-code-execution) | | | X | Permitir ou negar a execução de código nos arquivos de manifesto |
| [`labels`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#labels)                                           | | X | X | Etiquetas para definir pull requests              |
| [`milestone`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#milestone)                                     | | X | X | Marcos para definir pull requests           |
| [`open-pull-requests-limit`](#open-pull-requests-limit)       | | X | X | Limite de número de pull request para atualizações de versão |
| [`pull-request-branch-name.separator`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#pull-request-branch-nameseparator) | | X | X | Alterar o separador para nomes do branch de pull request |
| [`rebase-strategy`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#rebase-strategy)                         | | X | X | Desativar o rebasamento automático                  |
| [`registries`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#registries)                                   | | | X | Registros privados que {% data variables.product.prodname_dependabot %} pode acessar|
| [`reviewers`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#reviewers)                                     | | X | X | Revisores que irão configurar pull request           |
| [`schedule.day`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduleday)                                | | | X | Dia da semana para verificar se há atualizações              |
| [`schedule.time`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduletime)                              | | | X | Hora do dia para procurar atualizações (hh:mm)      |
| [`schedule.timezone`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#scheduletimezone)                      | | | X | Fuso horário para hora do dia (identificador de zona)    |
| [`target-branch`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#target-branch)                             | | | X  | Branch para criar pull requests contra     |
| [`vendor`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#vendor)                                           | | | X | Atualizar dependências de vendor ou armazenadas em cache        |
| [`versioning-strategy`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#versioning-strategy)                 | | X | X | Como atualizar os requisitos da versão do manifesto |
