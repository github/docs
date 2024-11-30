---
title: And Greater Than Version To Deprecate 1
intro: Remove liquid only
---

## 1
<div class="example1">

{% ifversion not fpt and ghes > 2.13 %}

Alpha

{% endif %}

</div>

## 2
<div class="example2">

{% ifversion not fpt and ghes > 2.13 %}

Alpha

{% else %}

Bravo

{% endif %}

</div>

## 3
<div class="example3">

{% ifversion ghes > 2.16 %}

Alpha

{% else %}

Bravo

{% ifversion not fpt and ghes > 2.13 %}

Charlie

{% endif %}
{% endif %}

</div>

## 4
<div class="example4">

{% ifversion ghes < 2.16 %}

Alpha

{% ifversion not fpt and ghes > 2.13 %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 5
<div class="example5">

{% ifversion not fpt and ghes > 2.13 %}

Alpha

{% ifversion ghes > 2.16 %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>
