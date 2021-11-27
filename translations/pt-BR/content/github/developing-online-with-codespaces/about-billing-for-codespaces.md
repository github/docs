---
title: Sobre a cobrança para codespaces
intro: 'Quando {% data variables.product.prodname_codespaces %} se torna geralmente disponível, você será cobrado para armazenamento e uso de computação.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
topics:
  - espaços de código
---

{% data reusables.codespaces.release-stage %}

{% data reusables.codespaces.about-billing-for-codespaces %}

Os custos de computação só são incorridos quando um código está ativo. Ao usar um codespace, significa que o código está ativo. Após 30 minutos de inatividade, um codespace é suspenso automaticamente.

O uso de computação é faturado por hora, a uma taxa que depende do tipo da instância do seu codespace. Durante o beta, {% data variables.product.prodname_codespaces %} oferece um tipo de instância único do Linux. Na disponibilidade geral, vamos suportar três tipos de instância do Linux.

| Tipo de Instância (Linux)                | Taxa por hora |
| ---------------------------------------- | ------------- |
| Básico (2 cores, 4GB RAM, 32 GB SSD)     | $ 0,085       |
| Padrão (4 cores, 8 GB de RAM, 32 GB SSD) | $ 0,169       |
| Premium (8 cores, 16 GB RAM, 32 GB SSD)  | $ 0,339       |

O preço computacional pode variar para outros tipos de instância e sistemas operacionais suportados no futuro.

Cada codespace também incorre em custos de armazenamento mensal até você excluir o codespace. Os custos de armazenamento para todos os tipos de instância são $ 0,10/GB por mês.

Compartilharemos mais informações sobre qualquer uso de computação e armazenamento incluído em cada plano em termos de disponibilidade geral.
