---
title: Como exportar informações de associação da empresa
intro: Você pode exportar informações sobre todos os membros da empresa.
versions:
  feature: enterprise-member-csv
topics:
  - Enterprise
shortTitle: Export membership information
permissions: Enterprise owners can export membership information for an enterprise.
ms.openlocfilehash: ba7519aae1b38cd629a46baeacd5edc9d138efdc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106418'
---
{% note %}

**Observação:** a exportação de informações de associação de uma empresa está em versão beta e sujeita a alterações no momento.

{% endnote %}

Para executar uma auditoria de pessoas com acesso aos recursos da empresa, você pode baixar um relatório CSV de informações de associação da empresa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. À direita de "Membros", clique em **{% octicon "download" aria-label="The download icon" %} Relatório CSV**.

   - Se a empresa tiver menos de mil membros, o relatório será baixado imediatamente.
   - Se a empresa tiver mil ou mais membros, você receberá rapidamente um email com um link para baixar o relatório.
   ![Captura de tela do botão "Relatório CSV"](/assets/images/help/business-accounts/csv-report-button.png)
