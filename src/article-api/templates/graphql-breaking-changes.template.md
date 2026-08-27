# {{ pageTitle }}

{{ pageIntro }}

{{ manualContent }}

{% for change in breakingChangesByDate %}

## {{ change.heading }}

{% for item in change.items %}

- {% if item.criticality == 'breaking' %}**Breaking**{% else %}**Dangerous**{% endif %} A change will be made to `{{ item.location }}`.

  **Description:** {{ item.description }}

  **Reason:** {{ item.reason }}

{% endfor %}

{% endfor %}
