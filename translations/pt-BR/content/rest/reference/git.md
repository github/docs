---
title: Banco de dados do Git
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

A API do banco de dados do Git dá acesso para ler e gravar objetos do Git sem processamento no seu banco de dados do Git no {% data variables.product.product_name %} e para listar e atualizar suas referências (cabeçalhos de branch e etiquetas). Para obter mais informações sobre como usar a API do banco de dados do Git, consulte "[Começar com a API de dados do Git](/rest/guides/getting-started-with-the-git-database-api)".

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Blobs

Um blob (objeto binário grande) do Git é o tipo de objeto usado para armazenar o conteúdo de cada arquivo em um repositório. O hash SHA-1 do arquivo é calculado e armazenado no objeto do blob. Estes pontos de extremidade permitem ler e escrever [objetos do blob](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects) em seu banco de dados d Git em {% data variables.product.product_name %}. Os blobs aproveitam [esses tipos de mídia personalizados](#custom-media-types). Você pode ler mais sobre o uso de tipos de mídia na API [aqui](/rest/overview/media-types).

### Tipos de mídia personalizados para os blobs

Estes são os tipos de mídia compatíveis com blobs.

    application/json
    application/vnd.github.VERSION.raw

Para obter mais informações, consulte "[Tipos de mídia](/rest/overview/media-types)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blobs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Commits

Um commit do Git é um instantâneo da hierarquia ([árvore do Git](/v3/git/trees)) e o conteúdo dos arquivos ([Blob do Git](/v3/git/blobs)) em um repositório do Git. Estes pontos de extremidade permitem ler e escrever [objetos de commit](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects) no seu banco de dados do Git em {% data variables.product.product_name %}.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'commits' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Referências

Uma referência do Git (`git ref`) é apenas um arquivo que contém um hash SHA-1 do commit do Git. Ao referir-se a um commit do Git, você pode usar a referência do Git, que é um nome fácil de lembrar, em vez do hash. A referência do Git pode ser reescrita para apontar para um novo commit. Um branch é apenas uma referência do Git que armazena o novo hash de commit do Git. Estes pontos de extremidade permitem ler e escrever [referências](https://git-scm.com/book/en/v1/Git-Internals-Git-References) para o seu banco de dados do Git em {% data variables.product.product_name %}.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'refs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Tags

Uma tag do Git é semelhante a uma [Referência do Git](/v3/git/refs), mas o commit do Git para o qual ela aponta nunca muda. As tags do Git são úteis quando você deseja apontar para versões específicas. Esses pontos de extremidade permitem ler e escrever [tags dos objetos](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags) em seu banco de dados Git em {% data variables.product.product_name %}. A API de tags do Git é compatível apenas com [objetos de tags anotadas](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags), não tags leves.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'tags' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Árvores

Um objeto da árvore do Git cria a hierarquia entre arquivos em um repositório do Git. Você pode usar o objeto da árvore do Git para criar a relação entre diretórios e os arquivos que eles contêm. Estes pontos de extremidade permitem que você leia e escreva [objetos de árvore](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Tree-Objects) em seu banco de dados do Git em {% data variables.product.product_name %}.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'trees' %}{% include rest_operation %}{% endif %}
{% endfor %}
