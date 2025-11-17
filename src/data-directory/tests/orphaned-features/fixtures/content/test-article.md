---
title: Test article for orphaned features testing
versions:
  feature: used-in-content
---

This is a test article that uses the `used-in-content` feature.

{% ifversion used-in-content %}
This content is only shown when the used-in-content feature is enabled.
{% endif %}

Some regular content that's always available.

## Test section

{% ifversion used-in-content %}
Another conditional section using the feature.
{% else %}
Fallback content when feature is not available.
{% endif %}