---
title: Primeiros passos com o GitHub Packages para a sua empresa
shortTitle: Getting started with GitHub Packages
intro: 'Você pode começar a usar {% data variables.product.prodname_registry %} em {% data variables.product.product_location %} habilitando o recurso, configurando armazenamento de terceiros, configurando os ecossistemas que você deseja que sejam compatíveis e atualizando seu certificado TLS.'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /admin/packages/enabling-github-packages-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
ms.openlocfilehash: 2389eba768a8b2f865165b43dde0e1b6381c6ae7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '146199959'
---
{% data reusables.package_registry.packages-cluster-support %}

## Passo 1: Verifique se {% data variables.product.prodname_registry %} está disponível para a sua empresa

{% data variables.product.prodname_registry %} está disponível em {% data variables.product.prodname_ghe_server %} 3.0 ou superior. Se você estiver usando uma versão anterior do {% data variables.product.prodname_ghe_server %}, você deverá fazer a atualização para usar {% data variables.product.prodname_registry %}. Para obter mais informações sobre como fazer upgrade da sua instância do {% data variables.product.prodname_ghe_server %}, confira "[Sobre os upgrades para novas versões](/admin/overview/about-upgrades-to-new-releases)".
## Etapa 2: Habilitar o {% data variables.product.prodname_registry %} e configurar o armazenamento externo

{% data variables.product.prodname_registry %} em {% data variables.product.prodname_ghe_server %} usa armazenamento externo de blob para armazenar seus pacotes.

Depois de habilitar {% data variables.product.prodname_registry %} para {% data variables.product.product_location %}, você deverá preparar seu bucket de armazenamento de terceiros. A quantidade de armazenamento necessária depende do seu uso de {% data variables.product.prodname_registry %}, e as diretrizes de configuração podem variar de acordo com o provedor de armazenamento.

Provedores de armazenamento externos compatíveis
- Amazon Web Services (AWS) S3 {% ifversion ghes %}
- Azure Blob Storage {% endif %}
- MinIO

Para habilitar {% data variables.product.prodname_registry %} e configurar o armazenamento de terceiros, consulte:
  - "[Como habilitar os Pacotes do GitHub com a AWS](/admin/packages/enabling-github-packages-with-aws)"{% ifversion ghes %}
  - "[Como habilitar os Pacotes do GitHub com o Armazenamento de Blobs do Azure](/admin/packages/enabling-github-packages-with-azure-blob-storage)"{% endif %}
  - "[Como habilitar os Pacotes do GitHub com o MinIO](/admin/packages/enabling-github-packages-with-minio)"

## Etapa 3: Especificar os ecossistemas de pacotes que serão compatíveis com a sua instância

Escolha quais ecossistemas de pacote você gostaria de habilitar, desabilitar ou definir como somente leitura no seu {% data variables.product.product_location %}. As opções disponíveis são {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker, RubyGems, npm, Apache Maven, Gradle ou NuGet.  Para obter mais informações, confira "[Como configurar o suporte ao ecossistema de pacotes para sua empresa](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise)".

## Etapa 4: Verificar se você tem um certificado TLS para a URL do host do pacote, se necessário

Se o isolamento de subdomínio estiver habilitado para o {% data variables.product.product_location %}, você precisará criar e carregar um certificado TLS que permita a URL do host do pacote para cada ecossistema que deseja usar, como `{% data reusables.package_registry.container-registry-hostname %}`. Verifique se cada URL do host do pacote inclui `https://`.

  Você pode criar o certificado manualmente ou usar _Let's Encrypt_. Se você já usa o _Let's Encrypt_, solicite um novo certificado TLS depois de habilitar o {% data variables.product.prodname_registry %}. Para obter mais informações sobre as URLs do host do pacote, confira "[Como habilitar o isolamento de subdomínio](/enterprise/admin/configuration/enabling-subdomain-isolation)". Para obter mais informações sobre como carregar certificados TLS no {% data variables.product.product_name %}, confira "[Como configurar o TLS](/enterprise/admin/configuration/configuring-tls)".

## Etapa 5: Verificar e renomear nomes reservados

Se você quiser usar o ecossistema do Docker com isolamento de subdomínio desabilitado, primeiro **renomeie** qualquer usuário ou organização chamada `v2` na {% data variables.product.product_location %}, e depois habilite o suporte ao ecossistema do Docker no {% data variables.enterprise.management_console %}. O Docker usa o nome de conta `v2` para gerenciar conflitos de caminho com a API do Docker. Depois que o suporte ao registro do Docker estiver habilitado, você não poderá mais usar esse nome.

Você pode ver uma lista completa de logons reservados para uso interno acessando a página "Logons reservados" no painel do administrador do site. Para obter mais informações, confira "[Palavras-chave reservadas](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#reserved-logins)".
