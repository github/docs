When you use expressions in an `if` conditional, you may omit the {% raw %}`${{ }}`{% endraw %} expression syntax because {% data variables.product.prodname_actions %} automatically evaluates the `if` conditional as an expression. However, this rule does not apply everywhere.

You must use the {% raw %}`${{ }}`{% endraw %} expression syntax or escape with `''`, `""`,  or `()` when the expression starts with `!`, since `!` is reserved notation in YAML format.

Using the {% raw %}`${{ }}`{% endraw %} expression syntax turns the contents into a string, and strings are truthy. For example, `if: true && {% raw %}${{ false }}{% endraw %}` will evaluate to `true`.
