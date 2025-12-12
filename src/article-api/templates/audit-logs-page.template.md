# {{ page.title }}

{{ page.intro }}

{{ manualContent }}

## Audit log events

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

**Fields:** {% if event.fields %}{% for field in event.fields %}`{{ field }}`{% unless forloop.last %}, {% endunless %}{% endfor %}{% else %}No fields available{% endif %}

{% if event.docs_reference_links and event.docs_reference_links != 'N/A' %}
**Reference:** {{ event.docs_reference_links }}
{% endif %}

{% endfor %}
{% endfor %}