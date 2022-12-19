---
title: Como gerenciar os recursos do GitHub Advanced Security na empresa
intro: 'Você pode controlar os recursos do {% data variables.product.prodname_GH_advanced_security %} que protegem e analisam o código em todas as organizações pertencentes à empresa.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_advanced_security %} features for organizations in an enterprise.'
versions:
  feature: secret-scanning-enterprise-level
type: how_to
topics:
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Manage GitHub Advanced Security
ms.openlocfilehash: 0d48863d55805c5386435b7fef52a61a4ba7d43c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107202'
---
## Sobre o gerenciamento dos recursos do {% data variables.product.prodname_advanced_security %}

Você pode usar os recursos do {% data variables.product.prodname_advanced_security %} para reforçar a segurança das organizações na empresa. Para simplificar o gerenciamento do {% data variables.product.prodname_advanced_security %}, você pode habilitar ou desabilitar cada recurso para todos os repositórios existentes e/ou novos dentro das organizações pertencentes à empresa.

{% ifversion ghes or ghec %}Para obter informações de como comprar uma licença do {% data variables.product.prodname_GH_advanced_security %}, confira "[Sobre a cobrança do {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".{% elsif ghae %}Não há cobrança do {% data variables.product.prodname_GH_advanced_security %} em {% data variables.product.prodname_ghe_managed %} durante a versão beta.{% endif %}

Se você não tiver permitido o {% data variables.product.prodname_GH_advanced_security %} para uma organização, essa organização não será afetada pela habilitação de um recurso para todos os repositórios existentes ou para todos os novos repositórios. Para obter mais informações de como não permitir o {% data variables.product.prodname_GH_advanced_security %} para uma organização, confira "[Como impor políticas para o Advanced Security na empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise)".

Ao habilitar um ou mais recursos de segurança e análise nos repositórios existentes, você verá todos os resultados exibidos no {% data variables.product.prodname_dotcom %} em minutos.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

## Como gerenciar os recursos do {% data variables.product.prodname_advanced_security %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. Na barra lateral esquerda, clique em **Segurança e análise de código**. 
1. Opcionalmente, habilite ou desabilite um recurso para todos os repositórios existentes.

   - À direita do recurso, clique em **Desabilitar tudo** ou **Habilitar tudo**. {% ifversion ghes or ghec %}Se o controle do "{% data variables.product.prodname_GH_advanced_security %}" está desabilitado, você não tem estações disponíveis na licença do {% data variables.product.prodname_GH_advanced_security %}.{% endif %}
   
   ![Captura de tela de "Configurar segurança e análise" com os botões "Habilitar tudo" ou "Desabilitar tudo"](/assets/images/enterprise/security/enterprise-security-and-analysis-disable-or-enable-all.png)

   - Para confirmar a alteração, clique em **Habilitar/Desabilitar tudo** ou em **Habilitar/Desabilitar para repositórios qualificados**.
   
     ![Captura de tela do botão para habilitar o recurso em todos os repositórios qualificados na organização](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-secret-scanning.png)

1. Opcionalmente, para habilitar ou desabilitar um recurso automaticamente quando novos repositórios são adicionados, marque a caixa de seleção abaixo do recurso.
   
   ![Captura de tela de uma caixa de seleção para habilitar um recurso para novos repositórios](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-or-disable-feature-checkbox.png){% ifversion secret-scanning-custom-link-on-block %}

1. Opcionalmente, para incluir um link personalizado na mensagem que os membros verão quando tentarem enviar um segredo por push, selecione **Adicionar um link de recurso na CLI e na IU da Web quando um commit for bloqueado**, digite uma URL e clique em **Salvar link**.
  
  {% note %}

  **Observação**: quando um link personalizado for configurado para uma organização, o valor no nível da organização substituirá o conjunto de links personalizados da empresa. Para obter mais informações, confira "[Como proteger os pushes com a verificação de segredos](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)".

  {% endnote %}

   ![Captura de tela mostrando a caixa de seleção e o campo de texto para habilitar um link personalizado](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}

