---
title: Sobre os avisos de segurança global
intro: 'O banco de dados de segurança global reside no {% data variables.product.prodname_advisory_database %}, que contém CVEs e avisos de segurança originados em {% data variables.product.company_short %} que afetam o mundo do código aberto. Você pode contribuir para melhorar os avisos globais.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Security advisories
  - Alerts
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: d28de180b9fee592dcba89d03ca537d4ffd2d9eb
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148113949'
---
## Sobre os avisos de segurança global

{% ifversion fpt or ghec %} Há dois tipos de avisos: avisos de segurança global e avisos de segurança do repositório. Para obter mais informações sobre os avisos de segurança do repositório, confira "[Sobre os avisos de segurança do repositório](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)".{% endif %}

Os avisos de segurança global são agrupados em duas categorias: avisos revisados por {% data variables.product.company_short %} e avisos não revisados.
- Os avisos examinados pelo {% data variables.product.company_short %} são vulnerabilidades de segurança{% ifversion GH-advisory-db-supports-malware %} ou malwares{% endif %} que foram mapeados para pacotes nos ecossistemas que contam com nosso suporte.
- As consultorias não revisadas são vulnerabilidades de segurança que publicamos automaticamente no {% data variables.product.prodname_advisory_database %}, diretamente do feed de Dados de Vulnerabilidade Nacional. 

Para obter mais informações sobre o {% data variables.product.prodname_advisory_database %}, confira "[Sobre o {% data variables.product.prodname_advisory_database %}](/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database)".

{% data reusables.security-advisory.global-advisories %}

Cada aviso de repositório é revisado pela equipe de curadoria do {% data variables.product.prodname_security %} para consideração como um aviso global. Publicamos avisos de segurança para qualquer um dos ecossistemas compatíveis com o grafo de dependência no {% data variables.product.prodname_advisory_database %} em [github.com/advisories](https://github.com/advisories).

Você pode acessar qualquer aviso no {% data variables.product.prodname_advisory_database %}. Para obter mais informações, confira "[Procurar avisos de segurança no Banco de Dados de Avisos do GitHub](/code-security/security-advisories/global-security-advisories/browsing-security-advisories-in-the-github-advisory-database)".

Você pode sugerir melhorias para qualquer consultoria em {% data variables.product.prodname_advisory_database %}. Para obter mais informações, confira "[Como editar avisos de segurança no {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)".
