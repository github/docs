---
title: Sobre hooks pre-receive
intro: '*Hooks pre-receive* são scripts executados no dispositivo do {% data variables.product.prodname_ghe_server %} que você pode usar para implementar verificações de qualidade.'
redirect_from:
  - /enterprise/admin/developer-workflow/about-pre-receive-hooks
  - /enterprise/admin/policies/about-pre-receive-hooks
  - /admin/policies/about-pre-receive-hooks
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
ms.openlocfilehash: a62d5391f9733c4a79ea8ba5d5f8f0d821d47d5c
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145093928'
---
Quando ocorre um push, cada script é executado em um ambiente isolado e pode executar verificações no conteúdo do push. Os scripts farão o push ser aceito se o status de saída for 0, ou farão o push ser rejeitado se o status de saída for diferente de zero.

## Cenários de uso
Use os hooks pre-receive para cumprir com as regras corporativas, aplicar a conformidade regulamentar e evitar certos erros comuns.

Exemplos de uso dos hooks pre-receive:

- Exigir que as mensagens de commit sigam determinado padrão ou formato, como incluir um número de ticket válido ou ter um tamanho especificado;
- Bloquear um branch ou repositório rejeitando todos os pushes;
- Evitar a inclusão de dados confidenciais no repositório bloqueando palavras-chave, padrões ou tipos de arquivos.
- Evitar que o autor da pull request faça merge em suas próprias alterações.

## Fluxos de trabalho e impacto no desempenho
O impacto para os desenvolvedores e seus fluxos de trabalho pode ser significativo e deve ser considerado atentamente. Hooks pre-receive baseados nas demandas corporativas e implementados com cuidado trarão mais benefícios para a organização como um todo.

Os ganchos de pré-recebimento podem ter efeitos indesejados no desempenho do {% data variables.product.product_location %}, devendo ser implementados e analisados com atenção.
