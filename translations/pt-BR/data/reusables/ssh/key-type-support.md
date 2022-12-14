---
ms.openlocfilehash: efa96c86f8e6393265a4052e0ce6d650a21805b4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107338"
---
{% ifversion fpt or ghec %} {% note %}

**Observação:** o {% data variables.product.company_short %} aprimorou a segurança removendo tipos de chaves mais antigos e não seguros em 15 de março de 2022.

Desde essa data, não há mais suporte para as chaves DSA (`ssh-dss`). Não é possível adicionar novas chaves DSA à conta pessoal em {% data variables.location.product_location %}.

As chaves RSA (`ssh-rsa`) com um `valid_after` antes de 2 de novembro de 2021 podem continuar usando qualquer algoritmo de assinatura. As chaves RSA geradas após essa data precisam usar um algoritmo de assinatura SHA-2. Talvez alguns clientes mais antigos precisem ser atualizados para usar as assinaturas SHA-2.

{% endnote %}

{% elsif ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

**Observação**: por padrão, com {% data variables.product.product_name %} 3.6 e versões posteriores, a partir da data de corte de meia-noite UTC, em 1º de agosto de 2022, as conexões SSH que atenderem às **duas** condições a seguir falharão.

<br/>

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

{% data variables.product.product_name %} 3.6 e versões posteriores também não dão suporte a conexões SSH que usam criptografias DSA, HMAC-SHA-1 ou CBC. As chaves SSH RSA carregadas antes da data de corte podem continuar sendo autenticadas usando a função de hash SHA-1, desde que a chave permaneça válida. Para obter mais informações sobre como encontrar a versão de {% data variables.product.product_name %} que você usa, confira "[Sobre versões de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)."

O administrador do site pode ajustar a data de corte para conexões que usam RSA-SHA-1 e pode bloquear todas as conexões que usam RSA-SHA-1. Para obter mais informações, entre em contato com o administrador do site ou confira "[Como configurar conexões SSH com sua instância](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)".

{% endnote %}

{% endif %}
