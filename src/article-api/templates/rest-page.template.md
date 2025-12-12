# {{ page.title }}

{{ page.intro }}

{{ manualContent }}

{% for operation in restOperations %}
## {{ operation.title }}

```
{{ operation.verb | upcase }} {{ operation.requestPath }}
```

{{ operation.description }}

{% if operation.hasParameters %}
### Parameters

{% if operation.showHeaders %}
#### Headers

{% if operation.needsContentTypeHeader %}
- **`content-type`** (string, required)
  Setting to `application/json` is required.

{% endif %}
- **`accept`** (string)
  Setting to `application/vnd.github+json` is recommended.

{% endif %}

{% if operation.parameters.size > 0 %}
#### Path and query parameters

{% for param in operation.parameters %}
{% rest_parameter param %}
{% endfor %}

{% endif %}

{% if operation.bodyParameters.size > 0 %}
#### Body parameters

{% for param in operation.bodyParameters %}
{% rest_body_parameter param %}
{% endfor %}

{% endif %}
{% endif %}

{% if operation.statusCodes.size > 0 %}
### HTTP response status codes

{% for statusCode in operation.statusCodes %}
- **{{ statusCode.httpStatusCode }}**{% if statusCode.description %} - {{ statusCode.description }}{% elsif statusCode.httpStatusMessage %} - {{ statusCode.httpStatusMessage }}{% endif %}

{% endfor %}
{% endif %}

{% if operation.codeExamples.size > 0 %}
### Code examples

{% for example in operation.codeExamples %}
{% if example.request.description %}
#### {{ example.request.description }}

{% endif %}
**Request:**

```curl
curl -L \
  -X {{ operation.verb | upcase }} \
  {{ example.request.url }} \
{%- if example.request.acceptHeader %}
  -H "Accept: {{ example.request.acceptHeader }}" \
{%- endif %}
  -H "Authorization: Bearer <YOUR-TOKEN>"{% if apiVersion %} \
  -H "X-GitHub-Api-Version: {{ apiVersion }}"{% endif -%}
{%- if example.request.bodyParameters %} \
  -d '{{ example.request.bodyParameters }}'{% endif %}
```

**Response schema:**

{% if example.response.schema %}
```json
Status: {{ example.response.statusCode }}

{{ example.response.schema }}
```
{% else %}
```
Status: {{ example.response.statusCode }}
```
{% endif %}

{% endfor %}
{% endif %}

{% endfor %}
