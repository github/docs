---
title: Breaking changes
intro: 'Learn about recent and upcoming breaking changes to the {% data variables.product.prodname_dotcom %} GraphQL API.'
redirect_from:
  - /v4/breaking_changes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

### About breaking changes

Breaking changes are any changes that might require action from our integrators. We divide these changes into two categories:

  - **Breaking:** Changes that will break existing queries to the GraphQL API. For example, removing a field would be a breaking change.
  - **Dangerous:** Changes that won't break existing queries but could affect the runtime behavior of clients. Adding an enum value is an example of a dangerous change.

We strive to provide stable APIs for our integrators. When a new feature is still evolving, we release it behind a [schema preview](/graphql/overview/schema-previews).

We'll announce upcoming breaking changes at least three months before making changes to the GraphQL schema, to give integrators time to make the necessary adjustments. Changes go into effect on the first day of a quarter (January 1st, April 1st, July 1st, or October 1st). For example, if we announce a change on January 15th, it will be made on July 1st.

{% for date in graphql.upcomingChangesForCurrentVersion %}
### Changes scheduled for {{ date[0] }}

{% for change in date[1] %}
<ul>
<li><span class="border rounded-1 m-1 p-1 {% if change.criticality == 'breaking' %}border-red bg-red-light{% else %}border-purple bg-purple-light{% endif %}">{% if change.criticality == 'breaking' %}Breaking{% else %}Dangerous{% endif %}</span> A change will be made to <code>{{ change.location }}</code>.

<p><b>Description:</b> {{ change.description }}</p>

<p><b>Reason:</b> {{ change.reason }}</p>
</li>
</ul>

{% endfor %}
{% endfor %}
