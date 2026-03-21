# {{ pageTitle }}

{{ pageIntro }}

{{ manualContent }}

{% if connectionEdgeSummary %}
## Connection and Edge types

Connection types with only the standard pagination fields (`edges`, `nodes`, `pageInfo`, `totalCount`) and Edge types with only `cursor` and `node` are summarized here. Connection and Edge types with additional fields are documented individually below.

{% for name in connectionEdgeSummary %}`{{ name }}`{% unless forloop.last %}, {% endunless %}{% endfor %}

{% endif %}
{% for item in items %}

## {{ item.name }}

{{ item.description }}

{% if item.isDeprecated %}

> [!WARNING]
> **Deprecation notice:** {{ item.deprecationReason }}
{% endif %}

{% if pageType == 'queries' %}
**Type:** {{ item.type }}

{% if item.args.size > 0 %}

### Arguments for `{{ item.name }}`

{% for arg in item.args %}* `{{ arg.name }}` ({{ arg.type }}): {{ arg.description }}
{% endfor %}
{% endif %}

{% elsif pageType == 'mutations' %}
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

{% elsif pageType == 'objects' %}
{% if item.implements.size > 0 %}
**Implements:** {% for impl in item.implements %}{{ impl.name }}{% unless forloop.last %}, {% endunless %}{% endfor %}

{% endif %}

{% if item.fields.size > 0 %}

### Fields for `{{ item.name }}`

{% for field in item.fields %}* `{{ field.name }}` ({{ field.type }}): {{ field.description }}{% if field.defaultValue %} Default: `{{ field.defaultValue }}`.{% endif %}{% if field.isDeprecated %} **Deprecated:** {{ field.deprecationReason }}{% endif %}{% if field.arguments.size > 0 %}
{% for arg in field.arguments %}  * `{{ arg.name }}` ({{ arg.type.name }}): {{ arg.description }}{% if arg.defaultValue %} Default: `{{ arg.defaultValue }}`.{% endif %}
{% endfor %}{% endif %}
{% endfor %}
{% endif %}

{% elsif pageType == 'interfaces' %}
{% if item.fields.size > 0 %}

### Fields for `{{ item.name }}`

{% for field in item.fields %}* `{{ field.name }}` ({{ field.type }}): {{ field.description }}{% if field.defaultValue %} Default: `{{ field.defaultValue }}`.{% endif %}{% if field.isDeprecated %} **Deprecated:** {{ field.deprecationReason }}{% endif %}{% if field.arguments.size > 0 %}
{% for arg in field.arguments %}  * `{{ arg.name }}` ({{ arg.type.name }}): {{ arg.description }}{% if arg.defaultValue %} Default: `{{ arg.defaultValue }}`.{% endif %}
{% endfor %}{% endif %}
{% endfor %}
{% endif %}

{% elsif pageType == 'enums' %}
{% if item.values.size > 0 %}

### Values for `{{ item.name }}`

{% for value in item.values %}* `{{ value.name }}`: {{ value.description }}
{% endfor %}
{% endif %}

{% elsif pageType == 'unions' %}
{% if item.possibleTypes.size > 0 %}

### Possible types for `{{ item.name }}`

{% for type in item.possibleTypes %}* {{ type.name }}
{% endfor %}
{% endif %}

{% elsif pageType == 'inputObjects' %}
{% if item.inputFields.size > 0 %}

### Input fields for `{{ item.name }}`

{% for field in item.inputFields %}* `{{ field.name }}` ({{ field.type }}): {{ field.description }}{% if field.defaultValue %} Default: `{{ field.defaultValue }}`.{% endif %}{% if field.isDeprecated %} **Deprecated:** {{ field.deprecationReason }}{% endif %}
{% endfor %}
{% endif %}

{% elsif pageType == 'scalars' %}
{%- comment -%}Scalars typically just have name and description{%- endcomment -%}

{% endif %}

{% endfor %}
