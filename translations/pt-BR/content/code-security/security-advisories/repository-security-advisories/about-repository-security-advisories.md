---
title: Sobre os avisos de segurança do repositório
intro: 'Você pode usar avisos de segurança do repositório para discutir de maneira privada, corrigir e publicar informações sobre vulnerabilidades de segurança em seu repositório.'
shortTitle: About repository security advisories
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-github-security-advisories
  - /code-security/security-advisories/about-github-security-advisories
  - /code-security/repository-security-advisories/about-github-security-advisories-for-repositories
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Security advisories
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: 562969ec29feda0901b79f8b6e2cb9cdb390ea56
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158818'
---
{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Sobre os avisos de segurança do repositório

{% data reusables.security-advisory.disclosing-vulnerabilities %} Para obter mais informações, confira "[Sobre a divulgação coordenada de vulnerabilidades de segurança](/code-security/security-advisories/guidance-on-reporting-and-writing/about-coordinated-disclosure-of-security-vulnerabilities)".

{% data reusables.security-advisory.security-advisory-overview %}

Com os avisos de segurança do repositório, você pode:

1. Criar um aviso de segurança rascunho e usar o rascunho para discutir em particular o impacto da vulnerabilidade no seu projeto. Para obter mais informações, confira "[Como criar um aviso de segurança do repositório](/code-security/repository-security-advisories/creating-a-repository-security-advisory)".
2. Colaborar de modo particular com a correção da vulnerabilidade em uma bifurcação privada temporária.
3. Publique a consultoria de segurança para alertar a sua comunidade sobre a vulnerabilidade depois que um patch for lançado. Para obter mais informações, confira "[Como publicar um aviso de segurança do repositório](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)".

{% data reusables.repositories.security-advisories-republishing %}

Você pode dar crédito a indivíduos que contribuíram para um aviso de segurança. Para obter mais informações, confira "[Como editar uma consultoria de segurança do repositório](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories)".

{% data reusables.repositories.security-guidelines %}

Se você criou uma consultoria de segurança no seu repositório, o consultório de segurança permanecerá no seu repositório. Publicamos avisos de segurança para qualquer um dos ecossistemas compatíveis com o grafo de dependência no {% data variables.product.prodname_advisory_database %} em [github.com/advisories](https://github.com/advisories). Qualquer um pode enviar uma alteração para um consultor publicado em {% data variables.product.prodname_advisory_database %}. Para obter mais informações, confira "[Como editar avisos de segurança no {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)".

Se uma consultoria de segurança for especificamente para o npm, nós também publicamos a consultoria nas consultorias de segurança do npm. Para obter mais informações, confira [npmjs.com/advisories](https://www.npmjs.com/advisories).

{% data reusables.repositories.github-security-lab %}

## Números de identificação CVE

{% data variables.product.prodname_security_advisories %} baseia-se na base da lista de Vulnerabilidades e Exposições Comuns (CVE). O formulário de consultoria de segurança em {% data variables.product.prodname_dotcom %} é um formulário padronizado que corresponde ao formato de descrição CVE. 

{% data variables.product.prodname_dotcom %} é uma Autoridade de Numeração CVE (CNA) e está autorizada a atribuir números de identificação CVE. Para obter mais informações, confira "[Sobre o CVE](https://www.cve.org/About/Overview)" e "[Autoridades de Numeração do CVE](https://www.cve.org/ProgramOrganization/CNAs)" no site do CVE.

Ao criar um aviso de segurança para um repositório público no {% data variables.product.prodname_dotcom %}, você tem a opção de fornecer um número de identificação CVE existente para a vulnerabilidade de segurança. {% data reusables.repositories.request-security-advisory-cve-id %}

Uma que você publicou a consultoria de segurança e o {% data variables.product.prodname_dotcom %} atribuiu um número de identificação CVE para a vulnerabilidade, o {% data variables.product.prodname_dotcom %} irá publicar o CVE no banco de dados do MITRE.
Para obter mais informações, confira "[Como publicar um aviso de segurança do repositório](/code-security/repository-security-advisories/publishing-a-repository-security-advisory)".

## {% data variables.product.prodname_dependabot_alerts %} para consultorias de segurança publicadas

{% data reusables.repositories.github-reviews-security-advisories %}
