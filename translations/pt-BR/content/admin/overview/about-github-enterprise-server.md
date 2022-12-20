---
title: Sobre o GitHub Enterprise Server
intro: '{% data variables.product.product_name %} é uma plataforma de desenvolvimento de software que você pode hospedar em um ambiente privado.'
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 2622e3708cc31b24fe39929da68ba5dc8e864d88
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147875686'
---
## Sobre o {% data variables.product.product_name %}

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} Sua equipe pode usar o {% data variables.product.product_name %} para criar e enviar software usando controle de versão Git, APIs avançadas, ferramentas de produtividade e colaboração e integrações. Os desenvolvedores familiarizados com {% data variables.product.prodname_dotcom_the_website %} podem integrar e contribuir diretamente usando recursos e fluxos de trabalho familiares. {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data reusables.enterprise.github-distributes-ghes %} Para obter mais informações, confira "[Visão geral do sistema](/admin/overview/system-overview)".

Você pode optar por implantar o {% data variables.product.product_name %} no local ou em um ambiente de nuvem com suporte.

## Ambientes com suporte para implantação

Você pode implantar o {% data variables.product.product_name %} em um hipervisor de virtualização no datacenter local ou em um serviço de nuvem pública.

O {% data variables.product.company_short %} dá suporte aos hipervisores de virtualização a seguir para implantação local.

- Microsoft Hyper-V
- OpenStack KVM
- VMware ESXi

{% data variables.product.company_short %} dá suporte aos serviços para implantação em nuvem a seguir.

- AWS (Amazon Web Services)
- GCP (Google Cloud Platform)
- Microsoft Azure

Para obter mais informações, confira "[Como configurar uma instância do {% data variables.product.prodname_ghe_server %}](/admin/installation/setting-up-a-github-enterprise-server-instance)".

## Sobre versões e atualizações

{% data reusables.enterprise.constantly-improving %} Você é responsável por atualizações de sua instância. Para obter mais informações, confira "[Versões do {% data variables.product.product_name %}](/admin/all-releases)".

## Sobre a administração

Você pode configurar e monitorar o {% data variables.product.product_name %} por meio de navegador, acesso administrativo de SSH e APIs REST ou GraphQL. O {% data variables.product.company_short %} descobriu que as pessoas com experiência de administração do Linux são mais bem-sucedidas com a implantação e a manutenção do {% data variables.product.product_name %}.

Você pode fornecer a determinados funcionários acesso administrativo ao {% data variables.product.product_name %}, para que eles possam definir a autenticação externa, configurar a instância para atender às necessidades do desenvolvedor e monitorar a atividade e o desempenho da instância. Para garantir a conformidade com regras de negócios ou restrições regulatórias, os administradores podem configurar políticas que controlam como as pessoas usam o {% data variables.product.product_location %}. Para obter mais informações, consulte os seguintes artigos.

- "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)"
- "[Como configurar sua empresa](/admin/configuration/configuring-your-enterprise)"
- "[Sobre a API do {% data variables.product.prodname_enterprise %}](/admin/overview/about-the-github-enterprise-api)"
- "[Como monitorar o seu dispositivo](/admin/enterprise-management/monitoring-your-appliance)"
- "[Como monitorar a atividade em sua empresa](/admin/monitoring-activity-in-your-enterprise)"
- "[Sobre as políticas empresariais](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)"

## Sobre recursos opcionais

Você pode configurar recursos opcionais para o {% data variables.product.product_name %} que melhoram o ciclo de vida de desenvolvimento de software para sua empresa.

| Recurso | Descrição | Mais informações |
| :- | :- | :- |
| {% data variables.product.prodname_actions %} | Automatizar fluxos de trabalho de CI/CD e desenvolvimento | "[Sobre o {% data variables.product.prodname_actions %} para empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)" |
| {% data variables.product.prodname_github_connect %} | Aproveite o poder do {% data variables.product.prodname_dotcom_the_website %} de maneiras limitadas | "[Sobre o {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)" |
| {% data variables.product.prodname_GH_advanced_security %} | Melhorar a segurança e a qualidade do código | "[Sobre o {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)" |
| {% data variables.product.prodname_registry %} | Hospedar pacotes de software para sua empresa | "[Introdução ao {% data variables.product.prodname_registry %}](/packages/learn-github-packages/introduction-to-github-packages)" |

## Sobre topologias de implantação

Por padrão, o {% data variables.product.product_name %} é executado como uma instância autônoma. Você pode aumentar a confiabilidade e o desempenho do {% data variables.product.product_name %} usando uma topologia diferente para sua implantação.

- Para atenuar o impacto das falhas do sistema ou da rede, você poderá implantar uma instância de réplica passiva. Durante uma interrupção que afeta sua instância primária, você pode fazer failover manualmente para a instância de réplica. Para obter mais informações, confira "[Sobre a configuração de alta disponibilidade](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration)".
- Você pode configurar várias réplicas ativas para melhorar o desempenho de desenvolvedores geograficamente distantes da instância primária. Para obter mais informações, consulte "[Sobre a replicação geográfica](/admin/enterprise-management/configuring-high-availability/about-geo-replication)".
- Algumas empresas com dezenas de milhares de desenvolvedores podem se beneficiar de uma configuração de cluster que é dimensionada horizontalmente em vez de verticalmente. Para obter mais informações, confira "[Sobre o clustering](/admin/enterprise-management/configuring-clustering/about-clustering)".

## Sobre backups e recuperação de desastre

Para proteger contra perda de dados ou interrupções de serviço para seus desenvolvedores, o {% data variables.product.company_short %} recomenda fortemente que você estabeleça um plano para recuperação de desastre. Você pode fazer backup da configuração da instância e dos dados do usuário implantando e configurando um sistema de host Linux ou Unix com o {% data variables.product.prodname_enterprise_backup_utilities %}. Para obter mais informações, confira "[Como configurar backups no seu dispositivo](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

Além disso, você pode configurar uma instância de réplica passiva para a qual fazer failover em caso de falha no sistema ou na rede. Para saber mais, confira "[Sobre topologias de implantação](#about-deployment-topologies)".

## Sobre a documentação

A documentação para administradores e usuários do {% data variables.product.product_name %} está disponível neste site, {% data variables.product.prodname_docs %}. 

- [Documentação do administrador da empresa](/admin)
- [Documentação do usuário](/)

Diferentes versões do {% data variables.product.product_name %} são refletidas separadamente na documentação sobre o {% data variables.product.prodname_docs %}. Para obter mais informações, confira "[Sobre as versões do {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

## Experimentar o {% data variables.product.product_name %}

Você pode se inscrever para uma avaliação gratuita de 45 dias do {% data variables.product.product_name %}. Para obter mais informações, confira "[Como configurar uma avaliação do {% data variables.product.prodname_ghe_server %}](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)".

## Leitura adicional

- "[Introdução ao {% data variables.product.product_name %}](/get-started/onboarding/getting-started-with-github-enterprise-server)"
- "[Sobre o {% data variables.contact.github_support %}](/support/learning-about-github-support/about-github-support)"
- [ {% data variables.product.prodname_roadmap %} ]( {% data variables.product.prodname_roadmap_link %} ) no repositório `github/roadmap`
