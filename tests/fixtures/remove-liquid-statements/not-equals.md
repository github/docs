---
title: Not Equals To Version To Deprecate
intro: Remove liquid only
---

## 1
<div class="example1">

{% if page.version != "2.13" %}

Alpha

{% endif %}

</div>

## 2
<div class="example2">

{% if page.version == 'dotcom' or page.version != "2.13" %}

Alpha

{% endif %}

</div>

## 3
<div class="example3">

{% if page.version == "dotcom" %}

Alpha

{% else %}

Bravo

{% if page.version != "2.13" %}

Charlie

{% endif %}
{% endif %}

</div>

## 4
<div class="example4">

{% if page.version == "dotcom" %}

Alpha

{% if page.version != "2.13" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 5
<div class="example5">

{% if page.version != "2.13" %}

Alpha

{% if page.version == "dotcom" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 6
<div class="example6">

{% if page.version != 'dotcom' and page.version != "2.13" %}

Alpha

{% endif %}

</div>
