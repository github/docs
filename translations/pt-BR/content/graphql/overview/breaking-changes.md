---
title: Alterações significativas
intro: 'Saiba mais sobre as alterações significativas recentes e futuras na API GraphQL {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v4/breaking_changes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre alterações significativas

Alterações significativas são quaisquer mudanças que possam exigir ação dos nossos integrantes. Dividimos essas alterações em duas categorias:

  - **Significativas:** As alterações que irão modificar as consultas existentes na API do GraphQL. Por exemplo, a eliminação de um campo seria uma mudança decisiva.
  - **Perigoso:** Alterações que não modificam as consultas existentes, mas podem afetar o comportamento de tempo de execução dos clientes. Adicionar um valor de enumerador é um exemplo de uma alteração perigosa.

Nós nos esforçamos para fornecer APIs estáveis para os nossos integrantes. Quando um novo recurso ainda está evoluindo, o lançamos atrás de uma [pré-visualização de esquema](/graphql/overview/schema-previews).

Vamos anunciar as próximas mudanças significativas em andamento pelo menos três meses antes de fazer alterações no esquema do GraphQL para dar tempo aos integradores de fazer os ajustes necessários. As alterações entram em vigor no primeiro dia do trimestre (1 de janeiro, 1 de abril, 1 de julho ou 1 de outubro). Por exemplo, se anunciarmos uma mudança no dia 15 de Janeiro, ela entrará em vigor no dia 1 de julho.

{% for date in graphql.upcomingChangesForCurrentVersion %}
### Alterações agendadas para {{ date[0] }}

{% for change in date[1] %}
<ul>
<li><span class="border rounded-1 m-1 p-1 {% if change.criticality == 'breaking' %}border-red bg-red-light{% else %}border-purple bg-purple-light{% endif %}">{% if change.criticality == 'breaking' %}Substancial{% else %}Perigoso{% endif %}</span>Será feita uma mudança em <code>{{ change.location }}</code>.

<p><b>Descrição:</b> {{ change.description }}</p>

<p><b>Motivo:</b> {{ change.reason }}</p>
</li>
</ul>

{% endfor %}
{% endfor %}
