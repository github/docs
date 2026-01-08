# {{ page.title }}

{% if page.intro %}
{{ page.intro }}
{% endif %}

{% if manualContent %}
{{ manualContent }}
{% endif %}

{% for webhook in webhooks %}
## {{ webhook.name }}

**Available actions:** {% for actionType in webhook.actionTypes %}{% if forloop.last and forloop.length > 1 %}and {% endif %}`{{ actionType }}`{% unless forloop.last %}{% if forloop.length > 2 %}, {% else %} {% endif %}{% endunless %}{% endfor %}

{% if webhook.data.descriptionHtml %}
{{ webhook.data.descriptionHtml }}
{% endif %}

**Availability:** {% for availability in webhook.data.availability %}{% if forloop.last and forloop.length > 1 %}and {% endif %}`{{ availability }}`{% unless forloop.last %}{% if forloop.length > 2 %}, {% else %} {% endif %}{% endunless %}{% endfor %}

{% endfor %}
