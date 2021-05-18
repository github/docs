---
title: Primeiros passos com o GitHub Actions para o GitHub Enterprise Server
shortTitle: Indrodução ao GitHub Actions
intro: 'Saiba mais sobre como habilitar e configurar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %} pela primeira vez.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
versions:
  enterprise-server: '>=2.22'
type: how_to
topics:
  - Actions
  - Enterprise
---

{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}

Este artigo explica como os administradores do site podem configurar {% data variables.product.prodname_ghe_server %} para usar {% data variables.product.prodname_actions %}. Ele abrange os requisitos de hardware e software, apresenta as opções de armazenamento e descreve as políticas de gestão de segurança.

{% endif %}

### Revise as considerações de hardware

{% if currentVersion == "enterprise-server@2.22" or currentVersion == "enterprise-server@3.0" %}

{% note %}

**Observação**: {% if currentVersion == "enterprise-server@2.22" %}{% data variables.product.prodname_actions %} estava disponível para {% data variables.product.prodname_ghe_server %} 2.22 como beta limitada. {% endif %}Se você estiver fazendo a atualização de uma instância de {% data variables.product.prodname_ghe_server %} existente para 3.0 ou posterior e desejar configurar {% data variables.product.prodname_actions %}, observe que os requisitos mínimos de hardware aumentaram. Para obter mais informações, consulte "[Atualizar o {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server#about-minimum-requirements-for-github-enterprise-server-30-and-later)".

{% endnote %}

{% endif %}

Os recursos da CPU e memória disponíveis para {% data variables.product.product_location %} determinam o rendimento máximo do trabalho para {% data variables.product.prodname_actions %}.

O teste interno em {% data variables.product.company_short %} demonstrou o rendimento máximo a seguir para instâncias de {% data variables.product.prodname_ghe_server %} com um intervalo de configurações da CPU e memória. Você pode ver diferentes tipos de transferência, dependendo dos níveis gerais de atividade na sua instância.

| vCPUs | Memória | Rendimento máximo do trabalho  |
|:----- |:------- |:------------------------------ |
| 4     | 32 GB   | Demonstração ou testes rápidos |
| 8     | 64 GB   | 25 trabalhos                   |
| 16    | 160 GB  | 35 trabalhos                   |
| 32    | 256 GB  | 100 trabalhos                  |

Se você{% if currentVersion == "enterprise-server@2.22" %}habilitou o plano beta de{% else %}plano para habilitar{% endif %} {% data variables.product.prodname_actions %} para os usuários de uma instância existente, revise os níveis de atividade para usuários e automações na instância e garantir que você tenha fornecido CPU e memória adequadas para seus usuários. Para obter mais informações sobre o monitoramento da capacidade e desempenho de {% data variables.product.prodname_ghe_server %}, consulte "[Monitoramento do seu aplicativo](/admin/enterprise-management/monitoring-your-appliance)".

Para obter mais informações sobre os requisitos mínimos de hardware para {% data variables.product.product_location %}, consulte as considerações sobre hardware para a plataforma da sua instância.

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Google Cloud Platform](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations)
- [XenServer](/admin/installation/installing-github-enterprise-server-on-xenserver#hardware-considerations)

{% data reusables.enterprise_installation.about-adjusting-resources %}

### Requisitos de armazenamento externo

Para habilitar o {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %}, você deve ter acesso ao armazenamento externo do blob.

O {% data variables.product.prodname_actions %} usa armazenamento do blob para armazenar artefatos gerados pelas execuções do fluxo de trabalho, como registros de fluxo de trabalho e artefatos de criação enviados pelo usuário. A quantidade de armazenamento necessária depende do seu uso de {% data variables.product.prodname_actions %}. Somente uma única configuração de armazenamento externo é compatível, e você não pode usar vários provedores de armazenamento ao mesmo tempo.

{% data variables.product.prodname_actions %} é compatível com estes provedores de armazenamento:

* Armazenamento do Azure Blob
* Amazon S3
* MinIO Gateway compatível com S3 para NAS

{% note %}

**Observação:** Estes são os únicos provedores de armazenamento com os quais {% data variables.product.company_short %} é compatível e podem fornecer ajuda. Outros provedores de armazenamento compatíveis com a API do S3 provavelmente não funcionarão devido a diferenças em relação à API do S3. [Entre em contato conosco](https://support.github.com/contact) para pedir suporte para provedores de armazenamento adicionais.

{% endnote %}

{% if currentVersion == "enterprise-server@2.22" %}

#### Permissões do Amazon S3

{% data reusables.actions.enterprise-s3-permission %}

### Habilitar {% data variables.product.prodname_actions %}

O suporte de {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %} 2.22 estava disponível como uma versão beta limitada. Para configurar {% data variables.product.prodname_actions %} para sua instância, atualize para {% data variables.product.prodname_ghe_server %} 3.0 ou posterior. Para obter mais informações, consulte as observações da versão de [{% data variables.product.prodname_ghe_server %} 3.0](/enterprise-server@3.0/admin/release-notes) e "[Atualizar {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server)".

### Leia mais

- "Considerações de hardware" para sua plataforma em "[Configurando uma instância do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/installation/setting-up-a-github-enterprise-server-instance)"

{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" %}

### Habilitar {% data variables.product.prodname_actions %} com o seu provedor de armazenamento

Siga um dos procedimentos abaixo para habilitar {% data variables.product.prodname_actions %} com o seu provedor de armazenamento escolhido:

* [Habilitar o o GitHub Actions com armazenamento do Azure Blob](/admin/github-actions/enabling-github-actions-with-azure-blob-storage)
* [Habilitar o GitHub Actions com armazenamento do Amazon S3](/admin/github-actions/enabling-github-actions-with-amazon-s3-storage)
* [Habilitar o GitHub Actions com MinIO Gateway para armazenamento NAS](/admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage)

### Gerenciar as permissões de acesso para {% data variables.product.prodname_actions %} na sua empres

Você pode usar políticas para gerenciar o acesso a {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Aplicando as políticas do GitHub Actions para sua empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

### Adicionar executores auto-hospedados

{% data reusables.actions.enterprise-github-hosted-runners %}

Para executar fluxos de trabalho de {% data variables.product.prodname_actions %}, você deve adicionar executores auto-hospedados. Você pode adicionar executores auto-hospedados nos níveis da empresa, organização ou repositório. Para obter mais informações, consulte "[Adicionando executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

### Gerenciar quais ações podem ser usadas na sua empresa

Você pode controlar quais ações os usuários têm permissão para usar na sua empresa. Isso inclui a configuração de {% data variables.product.prodname_github_connect %} para acesso automático às ações de {% data variables.product.prodname_dotcom_the_website %}, ou a sincronização manual das ações de {% data variables.product.prodname_dotcom_the_website %}.

Para obter mais informações, consulte "[Sobre o uso de ações na sua empresa](/admin/github-actions/about-using-actions-in-your-enterprise)".

### Fortalecimento geral de segurança para {% data variables.product.prodname_actions %}

Se você quiser saber mais sobre as práticas de segurança para {% data variables.product.prodname_actions %}, consulte "[Fortalecimento da segurança para {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions)".

{% endif %}
