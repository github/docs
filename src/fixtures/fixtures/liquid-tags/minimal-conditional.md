---
front: matter used in tests/unit/liquid-tags/tokens-test.ts
---
- One
{% if product.title == "Awesome Shoes" %}
{{name | capitalize}}
{% endif %}
- Three
