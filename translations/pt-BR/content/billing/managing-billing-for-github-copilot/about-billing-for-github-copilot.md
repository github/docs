---
title: Sobre a cobrança para o GitHub Copilot
intro: 'Se você deseja usar o {% data variables.product.prodname_copilot %}, é necessário ter uma assinatura do {% data variables.product.prodname_copilot_for_individuals %} em sua conta pessoal ou uma estação atribuída por uma organização em {% data variables.product.prodname_ghe_cloud %} com uma assinatura para o {% data variables.product.prodname_copilot_for_business %}.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Billing for GitHub Copilot
ms.openlocfilehash: f82f284ac2bdb8a4bc56587ff17826ae7ca96585
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193153'
---
## Sobre a cobrança do {% data variables.product.prodname_copilot %}

Se você deseja usar o {% data variables.product.prodname_copilot %}, é necessário ter uma assinatura para a sua conta pessoal do {% data variables.product.prodname_dotcom %} ou se você é um membro de uma organização do {% data variables.product.prodname_ghe_cloud %} com uma assinatura do {% data variables.product.prodname_copilot_business_short %}, você precisará ter recebido a atribuição de uma estação por um administrador da organização. Para obter mais informações sobre o {% data variables.product.prodname_copilot %}, confira "[Sobre {% data variables.product.prodname_copilot %}](/en/copilot/overview-of-github-copilot/about-github-copilot)." 

Para obter mais informações sobre como gerenciar o {% data variables.product.prodname_copilot %} por meio do {% data variables.product.prodname_ghe_cloud %}, confira "[Como impor políticas para o {% data variables.product.prodname_copilot %} em sua empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise){% ifversion ghec %}.{% endif %}"{% ifversion fpt %} na documentação do {% data variables.product.prodname_ghe_cloud %}.{% endif %}

Antes de iniciar uma assinatura paga para uma conta pessoal, você pode configurar uma avaliação única de 60 dias para avaliar o {% data variables.product.prodname_copilot %}. Para iniciar uma avaliação, você precisará escolher um ciclo de cobrança mensal ou anual e fornecer uma forma de pagamento. Se você não cancelar a avaliação antes do final dos 60 dias, a avaliação será convertida automaticamente em uma assinatura paga. Você pode cancelar sua avaliação {% data variables.product.prodname_copilot %} a qualquer momento durante os 60 dias sem incorrer em cobranças. Se você cancelar antes do final da avaliação, continuará tendo acesso a {% data variables.product.prodname_copilot %} até que o período de avaliação de 60 dias seja encerrado. Para obter mais informações, confira "[Como gerenciar sua assinatura do {% data variables.product.prodname_copilot_for_individuals %}](/en/billing/managing-billing-for-github-copilot/managing-your-github-copilot-for-individuals-subscription)".

## Preços do {% data variables.product.prodname_copilot_for_individuals %}


A assinatura do {% data variables.product.prodname_copilot %} está disponível em um ciclo mensal ou anual. Se você escolher um ciclo de cobrança mensal, receberá uma cobrança de US$ 10 por mês. Se você escolher um ciclo de cobrança anual, receberá uma cobrança de US$ 100 por ano. Você pode modificar o ciclo de cobrança a qualquer momento e a modificação será refletida no início do próximo ciclo de cobrança.

Se você tiver uma assinatura ativa do {% data variables.product.prodname_copilot %} e receber uma estação como parte de uma assinatura do {% data variables.product.prodname_copilot_for_business %} no {% data variables.product.prodname_ghe_cloud %}, sua assinatura pessoal do {% data variables.product.prodname_copilot %} será cancelada automaticamente. Você receberá um reembolso proporcional para qualquer parte restante do ciclo de cobrança atual da sua assinatura pessoal. Em seguida, você poderá continuar usando o {% data variables.product.prodname_copilot %} de acordo com as políticas definidas no nível da empresa ou da organização.

Uma assinatura gratuita do {% data variables.product.prodname_copilot %} está disponível para alunos, professores e mantenedores verificados de repositórios populares de código aberto no {% data variables.product.company_short %}. Se você atender aos critérios como um mantenedor de código aberto, receberá uma notificação automática quando visitar a página de assinatura {% data variables.product.prodname_copilot %}. Como estudante, se você receber os dados {% data variables.product.prodname_student_pack %}, também receberá uma assinatura gratuita ao visitar a página de assinatura {% data variables.product.prodname_copilot %}. Para obter mais informações sobre o {% data variables.product.prodname_student_pack %}, confira "[Candidatar-se para o {% data variables.product.prodname_global_campus %} como aluno](/free-pro-team@latest/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student)".

{% ifversion ghec %}
## Preços do {% data variables.product.prodname_copilot_for_business %}

A assinatura do {% data variables.product.prodname_copilot_for_business %} está disponível em um ciclo mensal e é cobrada a US$ 19 por usuário por mês. A cobrança para o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_ghe_cloud %} é processado ao final de cada ciclo de cobrança. 

Os usuários cobrados são calculados com base no número de estações do {% data variables.product.prodname_copilot %} atribuídas no início de um ciclo de cobrança ou atribuídas durante o ciclo de cobrança. Qualquer estação atribuída em parte durante o ciclo de cobrança será proporcional com base no número de dias restantes no ciclo. Qualquer atribuição de estação removida durante um ciclo de cobrança entrará em vigor a partir do início do próximo ciclo.

A atribuição de estações para o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_ghe_cloud %} é gerenciada por administradores de organizações que receberam acesso a {% data variables.product.prodname_copilot %} no nível empresarial. Se você for membro de várias organizações na mesma empresa, poderá receber designação de {% data variables.product.prodname_copilot %} estações em mais de uma organização, mas sua empresa só será cobrada uma vez. Para obter mais informações, confira "[Como definir configurações do {% data variables.product.prodname_copilot %} em sua organização](/enterprise-cloud@latest/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)".

As configurações de política e a visão geral de uso do {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_ghe_cloud %} estão disponíveis no nível empresarial. Para obter mais informações, confira "[Como impor políticas para o {% data variables.product.prodname_copilot %} em sua empresa](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)" e "[Como exibir seu uso do {% data variables.product.prodname_copilot %}](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/viewing-your-github-copilot-usage)".

{% endif %}
