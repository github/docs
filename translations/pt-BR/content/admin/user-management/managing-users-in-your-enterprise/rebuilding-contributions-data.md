---
title: Recriar dados de contribuições
intro: Talvez você precise recriar os dados das contribuições para vincular os commits existentes a uma conta de usuário.
redirect_from:
  - /enterprise/admin/articles/rebuilding-contributions-data
  - /enterprise/admin/user-management/rebuilding-contributions-data
  - /admin/user-management/rebuilding-contributions-data
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Repositories
  - User account
shortTitle: Rebuild contributions
ms.openlocfilehash: 66a4aff597be725eb06dd4c8743ee2ad8691c7e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145094853'
---
Sempre que é enviado para o {% data variables.product.prodname_enterprise %}, o commit é vinculado a uma conta de usuário caso ambos estejam associados ao mesmo endereço de e-mail. No entanto, os commits existentes *não* são vinculados retroativamente quando um usuário registra um novo endereço de email ou cria uma conta.

1. Acesse a página de perfil do usuário.
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. No lado esquerdo da página, clique em **Administrador**. ![Guia Administrador](/assets/images/enterprise/site-admin-settings/admin-tab.png)
4. Em **Dados de contribuições**, clique em **Recompilar**.
![Botão Recompilar](/assets/images/enterprise/site-admin-settings/rebuild-button.png)

{% data variables.product.prodname_enterprise %} will now start background jobs to re-link commits with that user's account.
  ![Trabalhos recompilados na fila](/assets/images/enterprise/site-admin-settings/rebuild-jobs.png)
