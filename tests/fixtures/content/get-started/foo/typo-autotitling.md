---
title: Typo autotitling
intro: If the author typos the word "AUTOTITLE" it will throw
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: how_to
---

## Example

{% ifversion ghes %}

"[Autotitle](/get-started/quickstart/hello-world)."

{% else %}

"[AUTOTITLES](/get-started/quickstart/hello-world)."

{% endif %}
