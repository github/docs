# {{ page.title }}

{% if page.intro %}
{{ page.intro }}
{% endif %}

{% if manualContent %}
{{ manualContent }}
{% endif %}

{% if commonParams.size > 0 %}
## Common payload parameters

Most webhook events include these standard parameters:

| Name | Type | Description |
|------|------|-------------|
{% for param in commonParams %}| `{{ param.name }}` | `{{ param.type }}` | {% if param.isRequired %}**Required.** {% endif %}{{ param.description }} |
{% endfor %}

Events below list only their additional parameters beyond these common ones.

{% endif %}
{% for webhook in webhooks %}
## {{ webhook.name }}

{% if webhook.summary %}
{{ webhook.summary }}

{% endif %}
{% if webhook.availability.size > 0 %}
### Availability

{% for avail in webhook.availability %}- `{{ avail }}`
{% endfor %}

{% endif %}
### Webhook payload object

{% if webhook.actionTypes.size > 1 %}
**Action type:** {% for actionType in webhook.actionTypes %}`{{ actionType }}`{% unless forloop.last %}, {% endunless %}{% endfor %}

{% endif %}
{% if webhook.description %}
{{ webhook.description }}

{% endif %}
{% if webhook.bodyParameters.size > 0 %}
#### Webhook payload object parameters

| Name | Type | Description |
|------|------|-------------|
{% for param in webhook.bodyParameters %}| `{{ param.name }}` | `{{ param.type }}` | {% if param.isRequired %}**Required.** {% endif %}{{ param.description }} |
{% endfor %}

{% endif %}
{% endfor %}
