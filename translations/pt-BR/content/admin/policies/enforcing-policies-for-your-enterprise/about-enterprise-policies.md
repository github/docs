---
title: Sobre políticas corporativas
intro: 'Com as políticas corporativas, você pode gerenciar as políticas para todas as organizações pertencentes à sua empresa.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Policies
---

Para ajudar você a aplicar as regras de negócios e a conformidade regulatória, as políticas fornecem um único ponto de gestão para todas as organizações pertencentes a uma conta corporativa.

{% data reusables.enterprise.about-policies %}

Por exemplo, com a política de "Permissões básicas", você pode permitir que os proprietários da organização configurem a política de "Permissões básicas" para sua organização, ou você pode exigir um nível específico de permissões de base, como "Leitura" para todas as organizações dentro da empresa.

Por padrão, nenhuma política corporativa é aplicada. Para identificar as políticas que devem ser aplicadas para atender aos requisitos únicos do seu negócio, Recomendamos analisar todas as políticas disponíveis na conta corporativa, começando com as políticas de gerenciamento do repositório. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)".

Enquanto estiver configurando políticas coroprativas, para ajudar você a entender o impacto de alterar cada política, você pode ver as configurações atuais das organizações pertencentes à sua empresa.

{% ifversion ghes %}
Outra maneira de aplicar as normas na sua empresa é usar hooks pre-receive, que são scripts executados em {% data variables.product.product_location %} para implementar verificações de qualidade. Para obter mais informações, consulte "[Forçando política com hooks pre-receive](/admin/policies/enforcing-policy-with-pre-receive-hooks)".
{% endif %}

## Leia mais

- "[Sobre contas corporativas](/admin/overview/about-enterprise-accounts)"
