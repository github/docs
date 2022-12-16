---
title: Habilitar isolamento de subdomínio
intro: 'É possível configurar o isolamento de subdomínio para separar com segurança o conteúdo enviado pelo usuário de outras partes do seu appliance do {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/installation/about-subdomain-isolation
  - /enterprise/admin/installation/enabling-subdomain-isolation
  - /enterprise/admin/configuration/enabling-subdomain-isolation
  - /admin/configuration/enabling-subdomain-isolation
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Security
shortTitle: Enable subdomain isolation
ms.openlocfilehash: 6ce23de3646d3ca3f4523ec7716907f8b5430564
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193094'
---
## Sobre isolamento de subdomínio

O isolamento de subdomínios reduz os problemas de script entre sites e outras vulnerabilidades relacionadas. Para obter mais informações, confira "[Cross-site scripting](http://en.wikipedia.org/wiki/Cross-site_scripting)" na Wikipédia. É altamente recomendado que você habilite o isolamento de subdomínio em {% data variables.location.product_location %}.

Quando o isolamento do subdomínio está ativado, o {% data variables.product.prodname_ghe_server %} substitui vários caminhos pelos subdomínios. Depois que você habilitar o isolamento de subdomínio, as tentativas de acessar os caminhos anteriores para um conteúdo fornecido pelo usuário, como `http(s)://HOSTNAME/raw/`, podem retornar erros `404`.

{% data reusables.enterprise_site_admin_settings.3-7-new-subdomains %}

| Caminho sem isolamento de subdomínio  | Caminho com isolamento de subdomínio   |
| --- | --- |
| `http(s)://HOSTNAME/` | `http(s)://docker.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/npm/` | `https://npm.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/rubygems/` | `https://rubygems.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/maven/` | `https://maven.HOSTNAME/` |
| `http(s)://HOSTNAME/_registry/nuget/` | `https://nuget.HOSTNAME/` |
| `http(s)://HOSTNAME/assets/` | `http(s)://assets.HOSTNAME/` |
| `http(s)://HOSTNAME/avatars/` | `http(s)://avatars.HOSTNAME/` |
| `http(s)://HOSTNAME/codeload/` | `http(s)://codeload.HOSTNAME/` |
| `http(s)://HOSTNAME/gist/` | `http(s)://gist.HOSTNAME/` |
| `http(s)://HOSTNAME/media/` | `http(s)://media.HOSTNAME/` |
{%- ifversion viewscreen-and-notebooks %} | `http(s)://HOSTNAME/notebooks/` | `http(s)://notebooks.HOSTNAME/` | {%- endif %} | `http(s)://HOSTNAME/pages/` | `http(s)://pages.HOSTNAME/` | | `http(s)://HOSTNAME/raw/` | `http(s)://raw.HOSTNAME/` | {%- ifversion ghes < 3.7 %} | `http(s)://HOSTNAME/render/` | `http(s)://render.HOSTNAME/` | {%- endif %} | `http(s)://HOSTNAME/reply/` | `http(s)://reply.HOSTNAME/` | | `http(s)://HOSTNAME/uploads/` | `http(s)://uploads.HOSTNAME/` | {%- ifversion viewscreen-and-notebooks %} | `http(s)://HOSTNAME/viewscreen/` | `http(s)://viewscreen.HOSTNAME/` | {%- endif %} {%- ifversion ghes > 3.4 %} | Sem suporte | `https://containers.HOSTNAME/` | {%- endif %}

## Pré-requisitos

{% data reusables.enterprise_installation.disable-github-pages-warning %}

Antes de habilitar o isolamento de subdomínio, você deve definir as configurações de rede do novo domínio.

- Em vez de um endereço IP, especifique um nome de domínio válido como nome de host. Para obter mais informações, confira "[Como configurar um nome do host](/enterprise/admin/guides/installation/configuring-a-hostname)".

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

- Configure um registro curinga do Sistema de Nomes de Domínio (DNS) ou registros DNS individuais para os subdomínios listados acima. Recomendamos criar um registro A para `*.HOSTNAME` que aponte para o endereço IP do servidor, de modo que você não precise criar vários registros para cada subdomínio.
- Obtenha um certificado TLS curinga para `*.HOSTNAME` com um SAN (nome alternativo da entidade) para `HOSTNAME` e o domínio curinga `*.HOSTNAME`. Por exemplo, se o nome do host for `github.octoinc.com`, obtenha um certificado com o valor de Nome Comum definido como `*.github.octoinc.com` e um valor SAN definido como `github.octoinc.com` e `*.github.octoinc.com`.
- Habilite o TLS no appliance. Para obter mais informações, confira "[Como configurar o TLS](/enterprise/admin/guides/installation/configuring-tls/)".

## Habilitar isolamento de subdomínio

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. Selecione **Isolamento de subdomínio (recomendado)** .
  ![Caixa de seleção usada para habilitar o isolamento de subdomínio](/assets/images/enterprise/management-console/subdomain-isolation.png) {% data reusables.enterprise_management_console.save-settings %}
