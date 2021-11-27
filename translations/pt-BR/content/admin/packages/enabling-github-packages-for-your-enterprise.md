---
title: Habilitar o GitHub Packages para a sua empresa
intro: 'Você pode começar a usar o {% data variables.product.prodname_registry %} na sua instância habilitando o recurso, configurando armazenamento de terceiros, configurando os ecossistemas que você deseja apoiar e atualizando seu certificado de TLS.'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

1. Após ter sido convidado para participar do beta, para habilitar {% data variables.product.prodname_registry %} para a sua instância, siga as instruções do representante da sua conta.
1. Configurar armazenamento de terceiros para pacotes da sua empresa. Para obter mais informações, consulte "[Configurar armazenamento de terceiros para pacotes](/enterprise/admin/packages/configuring-third-party-storage-for-packages)".
1. Habilitar ou desabilitar cada pacote de ecossistema para sua empresa. Para obter mais informações, consulte "[Configurar pacotes de suporte para a sua empresa](/enterprise/admin/packages/configuring-packages-support-for-your-enterprise)".
1. Se o isolamento de subdomínio estiver habilitado para a sua instância, o que é necessário para usar o {% data variables.product.prodname_registry %} com o Docker, crie e faça o upload de um certificado TLS que permite a URL de host de pacote para cada ecossistema que você deseja usar, como, por exemplo, `npm.HOSTNAME`. Certifique-se de que o host de cada pacote contém `https://`.

    Você pode criar o certificado manualmente ou usando o Let's Encrypt. Se você já usa o Let's Encrypt, você deverá solicitar um novo certificado TLS depois de habilitar {% data variables.product.prodname_registry %}. Para obter mais informações sobre as URLs de host do pacote, consulte "[Habilitar o isolamento de subdomínio](/enterprise/admin/configuration/enabling-subdomain-isolation)". Para obter mais informações sobre o upload de certificados TLS para {% data variables.product.product_name %}, consulte "[Configurar TLS](/enterprise/admin/configuration/configuring-tls)".
