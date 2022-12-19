---
title: Configurar a varredura de segredo para o seu dispositivo
shortTitle: Configuring secret scanning
intro: 'Você pode habilitar, configurar e desabilitar {% data variables.product.prodname_secret_scanning %} para {% data variables.product.product_location %}. {% data variables.product.prodname_secret_scanning_caps %} permite aos usuários fazer a varredura de códigos para os segredos que se confirmaram acidentalmente.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /admin/configuration/configuring-secret-scanning-for-your-appliance
  - /admin/advanced-security/configuring-secret-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Secret scanning
  - Security
ms.openlocfilehash: c44d724293b970ff3075deb1befb2f0eae427d5c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066318'
---
{% data reusables.secret-scanning.beta %}

## Sobre a {% data variables.product.prodname_secret_scanning %}

Se alguém verificar um segredo com um padrão conhecido em um repositório, {% data variables.product.prodname_secret_scanning %} irá pegar o segredo conforme o check-in e ajudará você a mitigar o impacto da fuga. Os administradores do repositório são notificados sobre qualquer submissão que contém um segredo e podem visualizar rapidamente todos os segredos detectados na aba Segurança do repositório. Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning)".

## Verificando se a sua licença inclui {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## Pré-requisitos para {% data variables.product.prodname_secret_scanning %}

- O sinalizador de CPU [SSSE3](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf#G3.1106470) (Extensões SIMD de Streaming Suplementar 3) precisa ser habilitado na VM/KVM que executa o {% data variables.product.product_location %}.

- Uma licença do {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (confira "[Sobre a cobrança do {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)"){% endif %}

- A {% data variables.product.prodname_secret_scanning_caps %} habilitada no console de gerenciamento (confira "[Como habilitar o {% data variables.product.prodname_GH_advanced_security %} para sua empresa](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)")

### Verificar suporte para o sinalizador SSSE3 nos seus vCPUs

O conjunto de instruções das SSSE3 é necessário porque o {% data variables.product.prodname_secret_scanning %} alavanca o padrão acelerado de hardware que corresponde para encontrar possíveis credenciais confirmadas com os seus repositórios de {% data variables.product.prodname_dotcom %}. SSSE3 está habilitado para a maioria das CPUs modernas. Você pode verificar se o SSSE3 está habilitado para oa vCPUs disponíveis para sua instância de {% data variables.product.prodname_ghe_server %}.

1. Conecte ao shell administrativo para sua instância de {% data variables.product.prodname_ghe_server %}. Para obter mais informações, confira "[Como acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".
2. Insira o seguinte comando:

   ```shell
   grep -iE '^flags.*ssse3' /proc/cpuinfo >/dev/null | echo $?
   ```

   Se isso retornar o valor `0`, isso significará que o sinalizador SSSE3 está disponível e habilitado. Agora você pode habilitar {% data variables.product.prodname_secret_scanning %} para {% data variables.product.product_location %}. Para obter mais informações, confira "[Como habilitar a {% data variables.product.prodname_secret_scanning %}](#enabling-secret-scanning)" abaixo.

   Se isso não retornar `0`, o SSSE3 não estará habilitado na VM/KVM. Você precisa consultar a documentação do hardware/hipervisor sobre como habilitar o sinalizador ou disponibilizá-lo para VMs convidados.

## Como habilitar a {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "Segurança", clique em **{% data variables.product.prodname_secret_scanning_caps %}** .
![Caixa de seleção usada para habilitar ou desabilitar a {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/enable-secret-scanning-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

## Como desabilitar a {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "Segurança", desmarque **{% data variables.product.prodname_secret_scanning_caps %}** .
![Caixa de seleção usada para habilitar ou desabilitar a {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/secret-scanning-disable.png) {% data reusables.enterprise_management_console.save-settings %}
