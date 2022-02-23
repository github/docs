---
title: Codespaces
intro: 'A API de {% data variables.product.prodname_codespaces %} permite que você gerencie seus codespaces usando a API REST.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% data reusables.codespaces.codespaces-api-beta-note %}

A API de {% data variables.product.prodname_codespaces %} permite que você gerencie {% data variables.product.prodname_codespaces %} usando a API REST. Esta API está disponível para usuários autenticados e aplicativos OAuth, mas não para aplicativos GitHub. Para obter mais informações, consulte "[{% data variables.product.prodname_codespaces %}](/codespaces)".

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Máquinas
A API de Máquinas permite que um usuário determine quais tipos de máquina estão disponíveis para criar um codespace, seja em um determinado repositório ou como um usuário autenticado. Para obter mais informações, consulte "[Sobre tipos de máquinas](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types)".

Você também pode usar essas informações alterando a máquina de um codespace existente, atualizando a propriedade `máquina`. A atualização da máquina ocorrerá na próxima vez que o codespace for reiniciado. Para obter mais informações, consulte "["Mudar o tipo de máquina para seu codespace](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace)."
{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'machines' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Segredos
A API de Segredos permite que um usuário crie, liste e exclua segredos (como tokens de acesso para serviços de nuvem), além de atribuir segredos para repositórios aos quais o usuário tem acesso. Estes segredos são disponibilizados para o codespace em tempo de execução. Para obter mais informações, consulte "[Gerenciar segredos criptografados para seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)".
{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'secrets' %}{% include rest_operation %}{% endif %}
{% endfor %}
