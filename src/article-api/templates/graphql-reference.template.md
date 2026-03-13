# {{ pageTitle }}

{{ pageIntro }}

{{ manualContent }}

{% for item in items %}

## {{ item.name }}

{{ item.description }}

{% if item.isDeprecated %}

> [!WARNING]
> **Deprecation notice:** {{ item.deprecationReason }}
{% endif %}

{% if pageType == 'queries' %}
**Type:** [{{ item.type }}]({{ item.href }})

{% if item.args.size > 0 %}

### Arguments for `{{ item.name }}`

| Name | Type | Description |
| --- | --- | --- |
{% for arg in item.args %}| `{{ arg.name }}` | [`{{ arg.type }}`]({{ arg.href }}) | {{ arg.description }} |
{% endfor %}
{% endif %}

{% elsif pageType == 'mutations' %}
{% if item.inputFields.size > 0 %}

### Input fields for `{{ item.name }}`

| Name | Type | Description |
| --- | --- | --- |
{% for field in item.inputFields %}| `{{ field.name }}` | [`{{ field.type }}`]({{ field.href }}) | {{ field.description }}{% if field.defaultValue %} Default: `{{ field.defaultValue }}`.{% endif %} |
{% endfor %}
{% endif %}

{% if item.returnFields.size > 0 %}

### Return fields for `{{ item.name }}`

| Name | Type | Description |
| --- | --- | --- |
{% for field in item.returnFields %}| `{{ field.name }}` | [`{{ field.type }}`]({{ field.href }}) | {{ field.description }}{% if field.defaultValue %} Default: `{{ field.defaultValue }}`.{% endif %}{% if field.isDeprecated %} **Deprecated:** {{ field.deprecationReason }}{% endif %} |
{% endfor %}
{% endif %}

{% elsif pageType == 'objects' %}
{% if item.implements.size > 0 %}

### Implements

{% for impl in item.implements %}- [`{{ impl.name }}`]({{ impl.href }})
{% endfor %}
{% endif %}

{% if item.fields.size > 0 %}

### Fields for `{{ item.name }}`

| Name | Type | Description |
| --- | --- | --- |
{% for field in item.fields %}| `{{ field.name }}` | [`{{ field.type }}`]({{ field.href }}) | {{ field.description }}{% if field.defaultValue %} Default: `{{ field.defaultValue }}`.{% endif %}{% if field.isDeprecated %} **Deprecated:** {{ field.deprecationReason }}{% endif %}{% if field.arguments.size > 0 %}<br><br>**Arguments:**<br>{% for arg in field.arguments %}- `{{ arg.name }}` ([`{{ arg.type.name }}`]({{ arg.type.href }})): {{ arg.description }}{% if arg.defaultValue %} Default: `{{ arg.defaultValue }}`.{% endif %}<br>{% endfor %}{% endif %} |
{% endfor %}
{% endif %}

{% elsif pageType == 'interfaces' %}
{% if item.fields.size > 0 %}

### Fields for `{{ item.name }}`

| Name | Type | Description |
| --- | --- | --- |
{% for field in item.fields %}| `{{ field.name }}` | [`{{ field.type }}`]({{ field.href }}) | {{ field.description }}{% if field.defaultValue %} Default: `{{ field.defaultValue }}`.{% endif %}{% if field.isDeprecated %} **Deprecated:** {{ field.deprecationReason }}{% endif %}{% if field.arguments.size > 0 %}<br><br>**Arguments:**<br>{% for arg in field.arguments %}- `{{ arg.name }}` ([`{{ arg.type.name }}`]({{ arg.type.href }})): {{ arg.description }}{% if arg.defaultValue %} Default: `{{ arg.defaultValue }}`.{% endif %}<br>{% endfor %}{% endif %} |
{% endfor %}
{% endif %}

{% elsif pageType == 'enums' %}
{% if item.values.size > 0 %}

### Values for `{{ item.name }}`

{% for value in item.values %}**`{{ value.name }}`**

{{ value.description }}

{% endfor %}
{% endif %}

{% elsif pageType == 'unions' %}
{% if item.possibleTypes.size > 0 %}

### Possible types for `{{ item.name }}`

{% for type in item.possibleTypes %}- [`{{ type.name }}`]({{ type.href }})
{% endfor %}
{% endif %}

{% elsif pageType == 'inputObjects' %}
{% if item.inputFields.size > 0 %}

### Input fields for `{{ item.name }}`

| Name | Type | Description |
| --- | --- | --- |
{% for field in item.inputFields %}| `{{ field.name }}` | [`{{ field.type }}`]({{ field.href }}) | {{ field.description }}{% if field.defaultValue %} Default: `{{ field.defaultValue }}`.{% endif %}{% if field.isDeprecated %} **Deprecated:** {{ field.deprecationReason }}{% endif %} |
{% endfor %}
{% endif %}

{% elsif pageType == 'scalars' %}
{%- comment -%}Scalars typically just have name and description{%- endcomment -%}

{% endif %}

{% endfor %}
