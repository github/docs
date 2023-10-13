When you use expressions in an `if` conditional, you can, optionally, omit the {% raw %}`${{ }}`{% endraw %} expression syntax because {% data variables.product.prodname_actions %} automatically evaluates the `if` conditional as an expression. However, this exception does not apply everywhere.

You must always use the {% raw %}`${{ }}`{% endraw %} expression syntax or escape with `''`, `""`,  or `()` when the expression starts with `!`, since `!` is reserved notation in YAML format. For example:

{% raw %}

```yaml
if: ${{ ! startsWith(github.ref, 'refs/tags/') }}
```

{% endraw %}
