# {{ title }}

{% if intro %}
{{ intro }}
{% endif %}

{% for section in sections %}
{% if section.title %}
## {{ section.title }}
{% endif %}

{% for group in section.groups %}
{% if group.title %}
### {{ group.title }}
{% endif %}

{% for link in group.links %}
* [{{ link.title }}]({{ link.href }})
{% if link.intro %}
  {{ link.intro }}
{% endif %}
{% endfor %}

{% endfor %}
{% endfor %}