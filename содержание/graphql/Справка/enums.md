---
title: Enums
redirect_from:
  - /v4/enum
  - /v4/reference/enum
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

### About enums
Взаимодействие с другими людьми
Взаимодействие с другими людьми
[Enums] ( https://graphql.github.io/graphql-spec/June2018/#sec-Enums ) предоставляют возможные наборы значений для поля. D
Взаимодействие с другими людьми
Например, объект [ `Issue` ] (/ graphql / reference / objects # issue) имеет поле с именем` state` . Состояние - это перечисление (в частности, типа [ `IssueState` ] (/ graphql / reference / enums # IssueState) ), потому что оно может быть` OPEN` или `CLOSED` .

Для получения дополнительной информации см. « [Введение в GraphQL] (/ graphql / guides / Introduction -to-graphql) ».
Взаимодействие с другими людьми
{% for item in graphql.schemaForCurrentVersion.enums %}
  {% include graphql-enum %}
{% endfor %}
