---
title: Conceitos principais do GitHub Container Registry
intro: 'Abaixo está uma lista de termos comuns de {% data variables.product.prodname_github_container_registry %} que usamos em todos os nossos sites e documentação.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

### {% data variables.product.prodname_github_container_registry %}

O {% data variables.product.prodname_github_container_registry %} é um registro para contêineres com suporte para imagens do Docker. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_github_container_registry %}](/packages/getting-started-with-github-container-registry/about-github-container-registry)."

### Package

Um pacote é um software auto-contido e reutilizável que inclui código e metadados que um desenvolvedor agrupa em um local comum para que os outros possam usar. Os metadados de um pacote podem incluir o número da versão, o nome e as dependências do código. Os pacotes simplificam a utilização e distribuição de soluções para problemas comuns, como a necessidade de estruturas para o desenvolvimento ou o teste de um projeto, linters para melhorar a qualidade do código ou ferramentas de aprendizado de máquina padrão do setor para energizar sua aplicação. Há pacotes em muitos ecossistemas. Por exemplo, você pode empacotar Node.js e código Java ou imagens de contêiner.

### Contêiner

Um contêiner é uma unidade de software projetada para implantar, de forma confiável, o software de forma padronizada em qualquer plataforma. Um contêiner opera como um ambiente virtual ou instância isolada que pode executar vários pacotes de software e componentes no mesmo kernel do seu sistema operacional. Os contêineres usam menos recursos do que as máquinas virtuais, porque não precisam incluir seu próprio hardware virtual para ser executado. Os contêineres são criados usando um arquivo de imagem de contêiner, como um arquivo Docker e um cliente do contêiner ou um programa de tempo de execução.

### Imagem do contêiner

Uma imagem de contêiner é um tipo de arquivo de pacote que especifica os requisitos de software para executar um aplicativo a partir de um container. Uma imagem de contêiner normalmente inclui código do aplicativo, bibliotecas e instruções de tempo de execução. Para garantir que os mesmos detalhes de imagem são usados onde uma imagem é implantada e executada, uma imagem de contêiner é versionada automaticamente e não pode ser alterada, uma vez que é construída em um container.

### Contêiner Docker

Um contêiner do Docker é um tipo de contêiner de código aberto construído na plataforma do Docker. O formato de imagem original do Docker tornou-se a Especificação de Imagem de OCI (Iniciativa de Contêiner Aberto). Para obter mais informações, consulte a "[Documentação do Docker](https://docs.docker.com/get-started/overview/)".
