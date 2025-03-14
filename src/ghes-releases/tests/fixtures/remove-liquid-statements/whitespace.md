---
title: Whitespace tests
---

## 1
<div class="example1">
{% ifversion ghes > 2.13 %}
  Alpha
{% endif %}
</div>

## 2
<div class="example2">
{%- ifversion ghes > 2.13 %}
  Alpha
{% endif %}
</div>

## 3
<div class="example3">
{% ifversion fpt or ghes > 2.13 %}
  Alpha
{%- endif %}
</div>

## 4
<div class="example4">
{%- ifversion fpt or ghes > 2.13 %}
  Alpha
{%- endif %}
</div>

## 5
<div class="example5">
{% ifversion ghes > 2.13 %}
  Alpha
{% endif %}
</div>

## 6
<div class="example6">
  Alpha
{% ifversion fpt or ghes > 2.13 %}
  Bravo
{% endif %}
  Charlie
</div>

## 7
<div class="example7">
Alpha{% ifversion fpt or ghes > 2.13 %}
Bravo{% endif %}
</div>

## 8
<div class="example8">
Alpha{% ifversion fpt or ghec or ghae or ghes > 2.13 %}
Bravo{% endif %}
</div>

## 9
<div class="example9">
Alpha
{% ifversion fpt or ghec or ghae or ghes > 2.13 %}
Bravo
{% endif %}
</div>

## 10
<div class="example10">
Pre{% ifversion ghes < 2.14 %}
Alpha
{% else %}
Bravo
{% endif %}
</div>

## 11
<div class="example11">
Pre
{% ifversion ghes < 2.14 %}
Alpha
{% else %}
Bravo{% endif %}
</div>