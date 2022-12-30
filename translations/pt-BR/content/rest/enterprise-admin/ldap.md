---
title: LDAP
intro: 'Você pode usar a API LDAP para atualizar as relações de conta entre um usuário ou equipe {% data variables.product.product_name %} e sua entrada LDAP vinculada ou enfileirar uma nova sincronização.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0948fbf02aea86d01a7034ae6b1836c0f69ca6e2
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147065335'
---
Com os endpoints de mapeamento LDAP, você é capaz de atualizar o Nome Distinto (DN) para o qual um usuário ou uma equipe mapeia. Observe que, em geral, os pontos de extremidade LDAP só serão eficazes se o dispositivo do {% data variables.product.product_name %} tiver a [Sincronização LDAP habilitada](/enterprise/admin/authentication/using-ldap). O ponto de extremidade [Atualizar mapeamento do LDAP para um usuário](#update-ldap-mapping-for-a-user) pode ser usado quando o LDAP está habilitado, mesmo que a Sincronização LDAP esteja desabilitada.
