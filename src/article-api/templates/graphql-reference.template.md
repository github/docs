# {{ pageTitle }}

{{ pageIntro }}

{{ manualContent }}

{% for item in items %}

## {{ item.name }} - {{ item.kindLabel }}

{{ item.description }}

{% if item.isDeprecated %}

> [!WARNING]
> **Deprecation notice:** {{ item.deprecationReason }}
{% endif %}

{% if item.kind == 'queries' %}
**Type:** {{ item.type }}

{% if item.args.size > 0 %}

### Arguments for `{{ item.name }}`

{% for arg in item.args %}* `{{ arg.name }}` ({{ arg.type }}): {{ arg.description }}
{% endfor %}
{% endif %}

{% elsif item.kind == 'mutations' %}
{% if item.inputFields.size > 0 %}

### Input fields for `{{ item.name }}`

{% for field in item.inputFields %}* `{{ field.name }}` ({{ field.type }}): {{ field.description }}{% if field.defaultValue %} Default: `{{ field.defaultValue }}`.{% endif %}
{% endfor %}
{% endif %}

{% if item.returnFields.size > 0 %}

### Return fields for `{{ item.name }}`

{% for field in item.returnFields %}* `{{ field.name }}` ({{ field.type }}): {{ field.description }}{% if field.defaultValue %} Default: `{{ field.defaultValue }}`.{% endif %}{% if field.isDeprecated %} **Deprecated:** {{ field.deprecationReason }}{% endif %}
{% endfor %}
{% endif %}

{% elsif item.kind == 'objects' %}
{% if item.implements.size > 0 %}
**Implements:** {% for impl in item.implements %}{{ impl.name }}{% unless forloop.last %}, {% endunless %}{% endfor %}

{% endif %}

{% if item.fields.size > 0 %}

### Fields for `{{ item.name }}`

{% for field in item.fields %}* `{{ field.name }}` ({{ field.type }}): {{ field.description }}{% if field.defaultValue %} Default: `{{ field.defaultValue }}`.{% endif %}{% if field.isDeprecated %} **Deprecated:** {{ field.deprecationReason }}{% endif %}{% if field.hasPaginationOnly %} _(Pagination: `after`, `before`, `first`, `last`)_{% elsif field.arguments.size > 0 %}
{% for arg in field.arguments %}  * `{{ arg.name }}` ({{ arg.type.name }}): {{ arg.description }}{% if arg.defaultValue %} Default: `{{ arg.defaultValue }}`.{% endif %}
{% endfor %}{% endif %}
{% endfor %}
{% endif %}

{% elsif item.kind == 'interfaces' %}
{% if item.fields.size > 0 %}

### Fields for `{{ item.name }}`

{% for field in item.fields %}* `{{ field.name }}` ({{ field.type }}): {{ field.description }}{% if field.defaultValue %} Default: `{{ field.defaultValue }}`.{% endif %}{% if field.isDeprecated %} **Deprecated:** {{ field.deprecationReason }}{% endif %}{% if field.hasPaginationOnly %} _(Pagination: `after`, `before`, `first`, `last`)_{% elsif field.arguments.size > 0 %}
{% for arg in field.arguments %}  * `{{ arg.name }}` ({{ arg.type.name }}): {{ arg.description }}{% if arg.defaultValue %} Default: `{{ arg.defaultValue }}`.{% endif %}
{% endfor %}{% endif %}
{% endfor %}
{% endif %}

{% if item.implementedBy.size > 0 %}

### Implemented by

{% for impl in item.implementedBy %}* {{ impl.name }}
{% endfor %}
{% endif %}

{% elsif item.kind == 'enums' %}
{% if item.values.size > 0 %}

### Values for `{{ item.name }}`

{% for value in item.values %}* `{{ value.name }}`: {{ value.description }}
{% endfor %}
{% endif %}

{% elsif item.kind == 'unions' %}
{% if item.possibleTypes.size > 0 %}

### Possible types for `{{ item.name }}`

{% for type in item.possibleTypes %}* {{ type.name }}
{% endfor %}
{% endif %}

{% elsif item.kind == 'inputObjects' %}
{% if item.inputFields.size > 0 %}

### Input fields for `{{ item.name }}`

{% for field in item.inputFields %}* `{{ field.name }}` ({{ field.type }}): {{ field.description }}{% if field.defaultValue %} Default: `{{ field.defaultValue }}`.{% endif %}{% if field.isDeprecated %} **Deprecated:** {{ field.deprecationReason }}{% endif %}
{% endfor %}
{% endif %}

{% elsif item.kind == 'scalars' %}
{%- comment -%}Scalars typically just have name and description{%- endcomment -%}

{% endif %}

{% endfor %}
