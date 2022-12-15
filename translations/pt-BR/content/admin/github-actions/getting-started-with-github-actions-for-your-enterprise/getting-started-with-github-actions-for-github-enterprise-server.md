---
title: Primeiros passos com o GitHub Actions para o GitHub Enterprise Server
shortTitle: Get started
intro: 'Saiba mais sobre como habilitar e configurar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %} pela primeira vez.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: a48e562898eb4c82b9027ee56ed52b71e7c5ebc7
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192958'
---
{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre o {% data variables.product.prodname_actions %} no {% data variables.product.prodname_ghe_server %}

Este artigo explica como os administradores do site podem configurar {% data variables.product.prodname_ghe_server %} para usar {% data variables.product.prodname_actions %}.

{% data reusables.actions.ghes-actions-not-enabled-by-default %} Você deberá determinar se a sua instância possui recursos adequados de CPU e memória para lidar com a carga do {% data variables.product.prodname_actions %} sem causar perda de desempenho e possivelmente aumentar esses recursos. Você também deverá decidir qual provedor de armazenamento usará para o armazenamento de blobs necessário para armazenar os artefatos{% ifversion actions-caching %} e caches{% endif %} gerados pelas execuções de fluxo de trabalho. Em seguida, você irá habilitar {% data variables.product.prodname_actions %} para a sua empresa, gerenciar permissões de acesso e adicionar executores auto-hospedados para executar fluxos de trabalho.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Revisar os requisitos de hardware

{%- ifversion ghes < 3.6 %}

Os recursos de CPU e de memória disponíveis para {% data variables.location.product_location %} determinam o número de trabalhos que podem ser executados simultaneamente sem perda de desempenho. {% data reusables.actions.minimum-hardware %}

O pico de trabalhos simultâneos rodando sem perda de desempenho depende de fatores como duração do trabalho, uso de artefatos, número de repositórios em execução de ações, e quanto outro trabalho sua instância está fazendo não relacionado a ações. Os testes internos no GitHub demonstraram os objetivos de desempenho a seguir para o GitHub Enterprise Server em uma série de configurações de CPU e memória:

{% endif %}

{%- ifversion ghes > 3.5 %}

Os recursos de CPU e de memória disponíveis para {% data variables.location.product_location %} determinam o número de executores que podem ser configurados sem perda de desempenho. {% data reusables.actions.minimum-hardware %}

A quantidade máxima de executores conectados sem perda de desempenho depende de fatores como duração do trabalho, uso de artefatos, número de repositórios executando ações e quantos outros trabalhos sua instância está realizando não relacionados a ações. Os testes internos no GitHub demonstraram os objetivos de desempenho a seguir para o GitHub Enterprise Server em uma série de configurações de CPU e memória:

{% endif %}

{%- ifversion ghes = 3.3 %}

{% data reusables.actions.hardware-requirements-3.3 %}

A simultaneidade máxima foi medida usando vários repositórios, a duração do trabalho de aproximadamente dez minutos e o upload de artefato de 10 MB. Você pode ter um desempenho diferente dependendo dos níveis gerais de atividade na sua instância.

{%- endif %}

{%- ifversion ghes = 3.4 %}

{% data reusables.actions.hardware-requirements-3.4 %}

A simultaneidade máxima foi medida usando vários repositórios, a duração do trabalho de aproximadamente dez minutos e o upload de artefato de 10 MB. Você pode ter um desempenho diferente dependendo dos níveis gerais de atividade na sua instância.

{%- endif %}

{%- ifversion ghes = 3.5 %}

{% data reusables.actions.hardware-requirements-3.5 %}

Simultaneidade máxima medida pelo {% data variables.product.company_short %} usando vários repositórios, a duração do trabalho de aproximadamente 10 minutos e uploads de artefato de 10 MB. Você pode ter um desempenho diferente dependendo dos níveis gerais de atividade na sua instância.

{% note %}

**Observação:** a partir do {% data variables.product.prodname_ghe_server %} 3.5, os testes internos da {% data variables.product.company_short %} usam CPUs de terceira geração para refletir melhor uma configuração típica do cliente. Essa alteração na CPU representa uma pequena parte das alterações nas metas de desempenho nesta versão do {% data variables.product.prodname_ghe_server %}.

{% endnote %}

{%- endif %}

{%- ifversion ghes > 3.5 %}


| vCPUs | Memória | Máximo de clientes conectados |
| :---| :--- | :--- |
| 8   | 64 GB  | 740 executores |
| 32  | 160 GB | 2700 executores |
| 96  | 384 GB | 7000 executores |
| 128 | 512 GB | 7000 executores |

{% data variables.product.company_short %} mediu o máximo de executores conectados usando vários repositórios, duração do trabalho de aproximadamente 10 minutos e uploads de artefatos de 10 MB. Você pode ter um desempenho diferente dependendo dos níveis gerais de atividade na sua instância.

{% note %}

**Observações:**

- Começando com o {% data variables.product.prodname_ghe_server %} 3.6, o {% data variables.product.company_short %} documenta executores conectados em oposição a trabalhos simultâneos. Os executores conectados representam o maior número de executores que você pode conectar e esperar utilizar. Também deve ser observado que conectar mais executores que o esperado pode afetar negativamente o desempenho.

- Começando com o {% data variables.product.prodname_ghe_server %} 3.5, os testes internos da {% data variables.product.company_short %} usam CPUs de terceira geração para refletir melhor uma configuração típica do cliente. Essa alteração na CPU representa uma pequena parte das alterações nas metas de desempenho nesta versão do {% data variables.product.prodname_ghe_server %}.
{% endnote %} {%- endif %}

Se você planeja habilitar {% data variables.product.prodname_actions %} para os usuários de uma instância existente, revise os níveis de atividade para usuários e automações na instância e garanta que você tenha fornecido CPU e memória adequadas para seus usuários. Para obter mais informações sobre como monitorar a capacidade e o desempenho do {% data variables.product.prodname_ghe_server %}, confira "[Como monitorar seu dispositivo](/admin/enterprise-management/monitoring-your-appliance)".

Para obter mais informações sobre os requisitos mínimos de hardware de {% data variables.location.product_location %}, confira as considerações sobre hardware da plataforma da instância.

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Google Cloud Platform](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations)

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% ifversion ghes > 3.4 %}

Opcionalmente, você pode limitar o consumo de recursos em {% data variables.location.product_location %} ao configurar um limite de taxa para o {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Configuração de limites de taxas](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-rate-limits-for-github-actions)".

{% endif %}

## Requisitos de armazenamento externo

Para habilitar o {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %}, você deve ter acesso ao armazenamento externo do blob.

{% data reusables.actions.enterprise-storage-contents %} A quantidade de armazenamento necessária depende do uso que você faz do {% data variables.product.prodname_actions %}. Somente uma única configuração de armazenamento externo é compatível, e você não pode usar vários provedores de armazenamento ao mesmo tempo.

Todos os outros dados do {% data variables.product.prodname_actions %}, como os arquivos de fluxo de trabalho na estrutura de arquivos de um repositório, são armazenados no volume de armazenamento de dados para {% data variables.location.product_location %}.

{% data variables.product.prodname_actions %} é compatível com estes provedores de armazenamento:

* Armazenamento de Blobs do Azure
* Amazon S3 {%- ifversion actions-ghes-gcp-storage %}
* Google Cloud Storage {%- endif %}
* Cluster MinIO compatível com S3

{% note %}

**Observação:** esses são os únicos provedores de armazenamento aos quais o {% data variables.product.company_short %} dá suporte e pode fornecer assistência.

{% data reusables.actions.enterprise-s3-tech-partners %}

{% endnote %}

## Considerações de rede

{% data reusables.actions.proxy-considerations %} Para obter mais informações sobre como usar um proxy com o {% data variables.product.prodname_ghe_server %}, confira "[Como configurar um servidor proxy Web de saída](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server)".

{% ifversion ghes %}

## Habilitar {% data variables.product.prodname_actions %} com o seu provedor de armazenamento

Siga um dos procedimentos abaixo para habilitar {% data variables.product.prodname_actions %} com o seu provedor de armazenamento escolhido:

* [Como habilitar o GitHub Actions com o Armazenamento de Blobs do Azure](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-azure-blob-storage)
* [Como habilitar o GitHub Actions com o armazenamento do Amazon S3](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-amazon-s3-storage) {%- ifversion actions-ghes-gcp-storage %}
* [Como habilitar o GitHub Actions com o Google Cloud Storage](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-google-cloud-storage) {%- endif %}
* [Habilitar o GitHub Actions com armazenamento do MinIO](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-minio-storage)

## Gerenciar as permissões de acesso para {% data variables.product.prodname_actions %} na sua empres

Você pode usar políticas para gerenciar o acesso a {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Como impor políticas do GitHub Actions na sua empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Adicionar executores auto-hospedados

{% data reusables.actions.enterprise-github-hosted-runners %}

Para executar fluxos de trabalho de {% data variables.product.prodname_actions %}, você deve adicionar executores auto-hospedados. Você pode adicionar executores auto-hospedados nos níveis da empresa, organização ou repositório. Para obter mais informações, confira "[Como adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

## Gerenciar quais ações podem ser usadas na sua empresa

Você pode controlar quais ações os usuários têm permissão para usar na sua empresa. Isso inclui a configuração de {% data variables.product.prodname_github_connect %} para acesso automático às ações de {% data variables.product.prodname_dotcom_the_website %}, ou a sincronização manual das ações de {% data variables.product.prodname_dotcom_the_website %}.

Para obter mais informações, confira "[Sobre como usar ações na sua empresa](/admin/github-actions/about-using-actions-in-your-enterprise)".

{% data reusables.actions.general-security-hardening %}

{% endif %}

## Nomes reservados

Quando você habilita o {% data variables.product.prodname_actions %} para sua empresa, duas organizações são criadas: `github` e `actions`. Se a sua empresa já usar o nome da organização `github`, `github-org` (ou `github-github-org` se `github-org` também estiver em uso) será usado. Se a sua empresa já usar o nome da organização `actions`, `github-actions` (ou `github-actions-org` se `github-actions` também estiver em uso) será usado. Uma vez que as ações são habilitadas, você não poderá usar mais esses nomes.
