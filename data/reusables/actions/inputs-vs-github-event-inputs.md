{% ifversion actions-unified-inputs %}

{% note %}

**Note**: The workflow will also receive the inputs in the `github.event.inputs` context. The information in the `inputs` context and `github.event.inputs` context is identical except that the `inputs` context preserves Boolean values as Booleans instead of converting them to strings.

{% endnote %}
{% endif %}
