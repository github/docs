---
title: Fazendo a migração para o Registro do Contêiner a partir do Registro Docker
intro: 'As imagens do Docker armazenadas anteriormente no registro do Docker estão sendo automaticamente transferidas para o {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/container-guides-for-github-packages/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/migrating-to-github-container-registry-for-docker-images
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Migrar para registro do contêiner
---

O registro do Docker de {% data variables.product.prodname_dotcom %} foi substituído pelo {% data variables.product.prodname_container_registry %}. Se você tiver armazenado imagens do Docker no registro do Docker, elas serão automaticamente transferidas para {% data variables.product.prodname_container_registry %}. Você não precisa fazer nada. Todos os scripts ou fluxos de trabalho de {% data variables.product.prodname_actions %} que usam o namespace do registro do Docker (`docker.pkg.github. om`) continuarao a trabalhar após a migração para o {% data variables.product.prodname_container_registry %} (`ghcr.io`).

A migração está sendo feita gradualmente, e não de uma só vez. Se suas imagens ainda não foram transferidas, aguarda, pois iremos transferi-las em breve.

## Como você pode dizer se as suas imagens foram transferidas?

Depois que suas imagens do Docker forem transferidas para o {% data variables.product.prodname_container_registry %} você verá as seguintes alterações na página de detalhes de um pacote:

* O ícone agora é o logotipo de {% data variables.product.prodname_container_registry %} anteriormente, era um logotipo do Docker.
* O domínio no URL do pull agora é `ghcr.io`, anteriormente era `docker.pkg.github.com`.

![Página de detalhes de {% data variables.product.prodname_container_registry %}](/assets/images/help/package-registry/container-registry-details-page.png)

## Principais diferenças entre {% data variables.product.prodname_container_registry %} e o registro do Docker

O {% data variables.product.prodname_container_registry %} é otimizado para dar suporte a algumas das necessidades únicas dos contêineres.

Com o {% data variables.product.prodname_container_registry %}, você pode:
- Armazene imagens de contêiner na sua organização e conta pessoal, ou conecte-as a um repositório.
- Escolha se deve herdar permissões de um repositório ou definir permissões granulares, independentemente de um repositório.
- Acessar imagens de contêineres públicos anonimamente.

### Consultas de API para detalhes das imagens Docker

Após a migração, você não poderá mais usar a API do GraphQL para consultar pacotes do `PackageType` "DOCKER". Em vez disso, você pode usar a API REST para consultar pacotes com o `package_type` "contêiner". Para obter mais informações, consulte o artigo da API REST "[Pacotes](/rest/reference/packages)".

## Cobrança

Para obter mais informações sobre a cobrança para o {% data variables.product.prodname_container_registry %}, consulte "[Sobre a cobrança para {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages).
