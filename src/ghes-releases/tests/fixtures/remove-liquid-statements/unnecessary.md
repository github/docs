---
title: Remove unnecessary conditionals including nested
intro: Remove liquid only
---

## 1
<div class="example1">

{% ifversion fpt or ghes or ghae or ghec %}
Alpha
{% endif %}

</div>

## 2
<div class="example2">

{% ifversion fpt or ghes or ghae or ghec %}
Alpha
  {% ifversion fpt or ghec %}
  Bravo
  {% endif %}
{% endif %}

</div>

## 3
<div class="example3">

{% ifversion fpt or ghes or ghae or ghec %}
Alpha
  {% ifversion fpt or ghec %}
  Bravo
  {% else %}
  Delta
  {% endif %}
{% endif %}

</div>

## 4
<div class="example4">

{% ifversion fpt or ghes or ghae or ghec %}
Alpha
  {% ifversion fpt or ghec %}
  Bravo
    {% ifversion ghae %}
    Charlie
    {% endif %}
  {% endif %}
{% endif %}

</div>

## 5
<div class="example5">

{% ifversion fpt or ghes or ghae or ghec %}
Alpha
  {% ifversion fpt or ghec %}
  Bravo
    {% ifversion ghae %}
    Charlie
    {% endif %}
  {% else %}
  Delta
  {% endif %}
{% endif %}

</div>

