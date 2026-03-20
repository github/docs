# {{ page.title }}

{{ page.intro }}

{{ manualContent }}

## Audit log events

{% if baseFields.size > 0 %}
### Common fields

The following fields are included in most audit log events: {% for field in baseFields %}`{{ field }}`{% unless forloop.last %}, {% endunless %}{% endfor %}

Each event below lists only its additional fields beyond these common fields.

{% endif %}
{% for categoryEntry in categorizedEvents %}
{% assign categoryName = categoryEntry[0] %}
{% assign events = categoryEntry[1] %}
### {{ categoryName }}

{% if categoryNotes[categoryName] %}
{{ categoryNotes[categoryName] }}

{% endif %}
{% for event in events %}
#### `{{ event.action }}`

{{ event.description }}

{% if event.fields.size > 0 %}**Additional fields:** {% for field in event.fields %}`{{ field }}`{% unless forloop.last %}, {% endunless %}{% endfor %}{% endif %}

{% if event.docs_reference_links and event.docs_reference_links != 'N/A' %}
**Reference:** {{ event.docs_reference_links }}
{% endif %}

{% endfor %}
{% endfor %}