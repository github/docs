---
title: And Greater Than Version To Deprecate 1
intro: Remove liquid only
---

## 1
<div class="example1">

{% if page.version != 'dotcom' and page.version ver_gt "2.13" %}

Alpha

{% endif %}

</div>

## 2
<div class="example2">

{% if page.version != 'dotcom' and page.version ver_gt "2.13" %}

Alpha

{% else %}

Bravo

{% endif %}

</div>

## 3
<div class="example3">

{% if page.version ver_gt "2.16" %}

Alpha

{% else %}

Bravo

{% if page.version != 'dotcom' and page.version ver_gt "2.13" %}

Charlie

{% endif %}
{% endif %}

</div>

## 4
<div class="example4">

{% if page.version ver_lt "2.16" %}

Alpha

{% if page.version != 'dotcom' and page.version ver_gt "2.13" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 5
<div class="example5">

{% if page.version != 'dotcom' and page.version ver_gt "2.13" %}

Alpha

{% if page.version ver_gt "2.16" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>
