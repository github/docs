# {{ page.title }}

{% if page.intro %}
{{ page.intro }}
{% endif %}

{% if manualContent %}
{{ manualContent }}
{% endif %}

{% if isListPage %}
{% comment %}
Render endpoints as categorized bullet lists
{% endcomment %}
{% for item in items %}
{% if item.operations.size > 0 %}
## {{ item.category }}

{% for operation in item.operations %}
* [`{{ operation.verb }} {{ operation.requestPath }}`](/{{ currentLanguage }}/{% if currentVersion != 'free-pro-team@latest' %}{{ currentVersion }}/{% endif %}rest/{{ operation.category }}#{{ operation.slug }})
{% endfor %}

{% endif %}
{% endfor %}
{% endif %}
