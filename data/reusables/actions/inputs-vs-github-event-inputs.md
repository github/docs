{% ifversion actions-unified-inputs %}

{% note %}

**Notes**:

* The workflow will also receive the inputs in the `github.event.inputs` context. The information in the `inputs` context and `github.event.inputs` context is identical except that the `inputs` context preserves Boolean values as Booleans instead of converting them to strings. The `choice` type resolves to a string and is a single selectable option.
* The maximum number of top-level properties for `inputs` is 10.
* The maximum payload for `inputs` is 65,535 characters.

{% endnote %}
{% endif %}
