---
title: Primeiros passos com o GitHub Actions para o GitHub Enterprise Server
shortTitle: Começar
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
---

{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %}

Este artigo explica como os administradores do site podem configurar {% data variables.product.prodname_ghe_server %} para usar {% data variables.product.prodname_actions %}.

{% data reusables.enterprise.upgrade-ghes-for-actions %}

{% data reusables.actions.ghes-actions-not-enabled-by-default %} Você deberá determinar se a sua instância possui recursos adequados de CPU e memória para lidar com a carga do {% data variables.product.prodname_actions %} sem causar perda de desempenho e possivelmente aumentar esses recursos. Você também precisará decidir qual provedor de armazenamento irá usar para o armazenamento do blob necessário para armazenar os artefatos{% ifversion actions-caching %} e caches{% endif %} gerados pela execução do fluxo de trabalho. Em seguida, você irá habilitar {% data variables.product.prodname_actions %} para a sua empresa, gerenciar permissões de acesso e adicionar executores auto-hospedados para executar fluxos de trabalho.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Revisar os requisitos de hardware

{%- ifversion ghes %}

Os recursos de CPU e memória disponíveis para {% data variables.product.product_location %} determinam o número de trabalhos que podem ser executados simultaneamente sem perda de desempenho. {% data reusables.actions.minimum-hardware %}

O pico de trabalhos simultâneos rodando sem perda de desempenho depende de fatores como duração do trabalho, uso de artefatos, número de repositórios em execução de ações, e quanto outro trabalho sua instância está fazendo não relacionado a ações. Os testes internos no GitHub demonstraram os objetivos de desempenho a seguir para o GitHub Enterprise Server em uma série de configurações de CPU e memória:

{% endif %}


{%- ifversion ghes = 3.2 %}

{% data reusables.actions.hardware-requirements-3.2 %}

A simultaneidade máxima foi medida usando vários repositórios, a duração do trabalho de aproximadamente 10 minutos e o upload de artefato de 10 MB. Você pode ter um desempenho diferente dependendo dos níveis gerais de atividade na sua instância.

{%- endif %}

{%- ifversion ghes = 3.3 %}

{% data reusables.actions.hardware-requirements-3.3 %}

A simultaneidade máxima foi medida usando vários repositórios, a duração do trabalho de aproximadamente 10 minutos e o upload de artefato de 10 MB. Você pode ter um desempenho diferente dependendo dos níveis gerais de atividade na sua instância.

{%- endif %}

{%- ifversion ghes = 3.4 %}

{% data reusables.actions.hardware-requirements-3.4 %}

A simultaneidade máxima foi medida usando vários repositórios, a duração do trabalho de aproximadamente 10 minutos e o upload de artefato de 10 MB. Você pode ter um desempenho diferente dependendo dos níveis gerais de atividade na sua instância.

{%- endif %}

{%- ifversion ghes = 3.5 %}

{% data reusables.actions.hardware-requirements-3.5 %}

{% data variables.product.company_short %} mediu a concorrência máxima usando vários repositórios, a duração do trabalho de aproximadamente 10 minutos e o upload do artefato de 10 MB. Você pode ter um desempenho diferente dependendo dos níveis gerais de atividade na sua instância.

{% note %}

**Observação:** Começando com o {% data variables.product.prodname_ghe_server %} 3.5, o teste interno de {% data variables.product.company_short %} usa CPUs de terceira geração para refletir melhor uma configuração típica do cliente. Essa alteração na CPU representa uma pequena parte das alterações nos objetivos de desempenho nesta versão de {% data variables.product.prodname_ghe_server %}.

{% endnote %}

{%- endif %}

Se você planeja habilitar {% data variables.product.prodname_actions %} para os usuários de uma instância existente, revise os níveis de atividade para usuários e automações na instância e garanta que você tenha fornecido CPU e memória adequadas para seus usuários. Para obter mais informações sobre o monitoramento da capacidade e desempenho de {% data variables.product.prodname_ghe_server %}, consulte "[Monitoramento do seu aplicativo](/admin/enterprise-management/monitoring-your-appliance)".

Para obter mais informações sobre os requisitos mínimos de hardware para {% data variables.product.product_location %}, consulte as considerações sobre hardware para a plataforma da sua instância.

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Google Cloud Platform](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations){% ifversion ghes < 3.3 %}
- [XenServer](/admin/installation/installing-github-enterprise-server-on-xenserver#hardware-considerations){% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% ifversion ghes > 3.4 %}

Opcionalmente, você pode limitar o consumo de recursos em {% data variables.product.product_location %}, configurando um limite de taxa para {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Configurar limites de taxa](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-rate-limits-for-github-actions)".

{% endif %}

## Requisitos de armazenamento externo

Para habilitar o {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %}, você deve ter acesso ao armazenamento externo do blob.

{% data variables.product.prodname_actions %} usa armazenamento do blob para armazenar dados gerados pela execução de fluxo de trabalho, tais como logs de fluxo de trabalho{% ifversion actions-caching %}, caches,{% endif %} e artefatos de compilação enviados pelo usuário. A quantidade de armazenamento necessária depende do seu uso de {% data variables.product.prodname_actions %}. Somente uma única configuração de armazenamento externo é compatível, e você não pode usar vários provedores de armazenamento ao mesmo tempo.

{% data variables.product.prodname_actions %} é compatível com estes provedores de armazenamento:

* Armazenamento do Azure Blob
* Amazon S3
* MinIO Gateway compatível com S3 para NAS

{% note %}

**Observação:** Estes são os únicos provedores de armazenamento com os quais {% data variables.product.company_short %} é compatível e podem fornecer ajuda. Outros provedores de armazenamento compatíveis com a API do S3 provavelmente não funcionarão devido a diferenças em relação à API do S3. [Entre em contato conosco](https://support.github.com/contact) para pedir suporte para provedores de armazenamento adicionais.

{% endnote %}

{% data reusables.actions.minio-gateways-removal %}

Antes de habilitar o {% data variables.product.prodname_actions %}, você pode testar a sua configuração de armazenamento a partir do shell administrativo com o utilitário `ghe-actions-precheck`. Para obter mais informações, consulte "[Utilitários de linha de comando](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-actions-check)" e "[Acessando o shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".

## Considerações de rede

{% data reusables.actions.proxy-considerations %} Para obter mais informações sobre o uso de um proxy com {% data variables.product.prodname_ghe_server %}, consulte "[Configurando um servidor de proxy web de saída](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server)".

{% ifversion ghes %}

## Habilitar {% data variables.product.prodname_actions %} com o seu provedor de armazenamento

Siga um dos procedimentos abaixo para habilitar {% data variables.product.prodname_actions %} com o seu provedor de armazenamento escolhido:

* [Habilitar o o GitHub Actions com armazenamento do Azure Blob](/admin/github-actions/enabling-github-actions-with-azure-blob-storage)
* [Habilitar o GitHub Actions com armazenamento do Amazon S3](/admin/github-actions/enabling-github-actions-with-amazon-s3-storage)
* [Habilitar o GitHub Actions com MinIO Gateway para armazenamento NAS](/admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage)

## Gerenciar as permissões de acesso para {% data variables.product.prodname_actions %} na sua empres

Você pode usar políticas para gerenciar o acesso a {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Aplicando as políticas do GitHub Actions para sua empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Adicionar executores auto-hospedados

{% data reusables.actions.enterprise-github-hosted-runners %}

Para executar fluxos de trabalho de {% data variables.product.prodname_actions %}, você deve adicionar executores auto-hospedados. Você pode adicionar executores auto-hospedados nos níveis da empresa, organização ou repositório. Para obter mais informações, consulte "[Adicionando executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

## Gerenciar quais ações podem ser usadas na sua empresa

Você pode controlar quais ações os usuários têm permissão para usar na sua empresa. Isso inclui a configuração de {% data variables.product.prodname_github_connect %} para acesso automático às ações de {% data variables.product.prodname_dotcom_the_website %}, ou a sincronização manual das ações de {% data variables.product.prodname_dotcom_the_website %}.

Para obter mais informações, consulte "[Sobre o uso de ações na sua empresa](/admin/github-actions/about-using-actions-in-your-enterprise)".

{% data reusables.actions.general-security-hardening %}

{% endif %}

## Nomes reservados

Ao habilitar {% data variables.product.prodname_actions %} para a sua empresa, serão criadas duas organizações: `github` e `actions`. Se sua empresa já usa o nome da organização `github`, `github-org` (ou `github-github-org` se `github-org` também estiver em uso) será usado. Se sua empresa já usa o nome da organização `actions`, `github-actions` (ou `github-actions-org` se `github-actions` também estiver em uso) será usado. Uma vez que as ações são habilitadas, você não poderá usar mais esses nomes.
