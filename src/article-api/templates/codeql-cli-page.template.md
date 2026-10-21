# {{ page.title }}

{% if page.intro %}
{{ page.intro }}
{% endif %}

{{ content }}

{% if links.size > 0 %}
## Links

{% for link in links %}
* [{{ link.title }}]({{ link.href }})
{% if link.intro %}
  {{ link.intro }}
{% endif %}
{% endfor %}
{% endif %}
