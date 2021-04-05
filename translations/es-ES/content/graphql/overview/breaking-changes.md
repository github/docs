---
title: Cambios sustanciales
intro: 'Aprende sobre los cambios sustanciales recientes y venideros a la API de GraphQL de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /v4/breaking_changes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

### Acerca de los cambios sustanciales

Los cambios sustanciales son aquellos que pudieran necesitar que nuestros integradores realicen alguna acción al respecto. Dividimos estos cambios en dos categorías:

  - **Sustanciales:** Cambios que modificarán consultas existentes a la API de GraphQL. Por ejemplo, eliminar un campo sería un cambio sustancial.
  - **Peligrosos:** Cambios que no modificaran las consultas existentes, pero podrían afectar el comportamiento del tiempo de ejecución de los clientes. Agregar un valor de enumerador es un ejemplo de un cambio peligroso.

Nos esforzamos por proporcionar API estables para nuestros integradores. Cuando alguna característica nueva está evolucionando aún, la lanzamos detrás de una [vista previa del modelo](/graphql/overview/schema-previews).

Anunciaremos los cambios sustanciales por venir por lo menos tres meses antes de aplicarlos al modelo de GraphQL, para proporcionar a los integradores tiempo para realizar los ajustes necesarios. Los cambios toman efecto en el primer día de un trimestre (1 de enero, 1 de abril, 1 de julio, o 1 de octubre). Por ejemplo, si anunciamos un cambio en el 15 de enero, se aplicará en el 1 de julio.

{% for date in graphql.upcomingChangesForCurrentVersion %}
### Cambios programados para {{ date[0] }}

{% for change in date[1] %}
<ul>
<li><span class="border rounded-1 m-1 p-1 {% if change.criticality == 'breaking' %}border-red bg-red-light{% else %}border-purple bg-purple-light{% endif %}">{% if change.criticality == 'breaking' %}Sustancial{% else %}Peligroso{% endif %}</span>Se hará un cambio a <code>{{ change.location }}</code>.

<p><b>Descripción:</b> {{ change.description }}</p>

<p><b>Razón:</b>{{ change.reason }}</p>
</li>
</ul>

{% endfor %}
{% endfor %}
