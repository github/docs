---
title: Whitespace tests
---

## 1
<div class="example1">
{% if page.version ver_gt "2.13" %}
  Alpha
{% endif %}
</div>

## 2
<div class="example2">
{%- if page.version ver_gt "2.13" %}
  Alpha
{% endif %}
</div>

## 3
<div class="example3">
{% if page.version == 'dotcom' or page.version ver_gt "2.13" %}
  Alpha
{%- endif %}
</div>

## 4
<div class="example4">
{%- if page.version == 'dotcom' or page.version ver_gt "2.13" %}
  Alpha
{%- endif %}
</div>

## 5
<div class="example5">
{% if page.version ver_gt "2.13" %}
  Alpha
{% endif %}
</div>

## 6
<div class="example6">
  Alpha
{% if page.version == 'dotcom' or page.version ver_gt "2.13" %}
  Bravo
{% endif %}
  Charlie
</div>

## 7
<div class="example7">
Alpha{% if page.version == 'dotcom' or page.version ver_gt "2.13" %}
Bravo{% endif %}
</div>
