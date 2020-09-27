---
title: Less Than Version To Deprecate
intro: Remove liquid and content
---

## 1
<div class="example1">

Alpha

{% if page.version ver_lt "2.14" %}

Bravo

{% endif %}

</div>

## 2
<div class="example2">

Alpha

{% if page.version == 'dotcom' or page.version ver_lt "2.14" %}

Bravo

{% endif %}

</div>

## 3
<div class="example3">

{% if page.version == "dotcom" %}

Alpha

{% else %}

Bravo

{% if page.version ver_lt "2.14" %}

Charlie

{% endif %}
{% endif %}

</div>

## 4

<div class="example4">

{% if page.version == "dotcom" %}

Alpha

{% if page.version ver_lt "2.14" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 5
<div class="example5">

{% if page.version ver_lt "2.14" %}

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

{% if page.version ver_lt "2.16" %}

Alpha

{% else %}

Charlie

{% if page.version != "dotcom" and page.version ver_lt "2.14" %}

Bravo

{% endif %}

{% endif %}

</div>

## 7
<div class="example7">

{% if page.version != "dotcom" and page.version ver_lt "2.14" %}

Alpha

{% if page.version ver_lt "2.14" %}

Bravo

{% else %}

Charlie

{% endif %}

{% endif %}

</div>

## 8
<div class="example8">

{% if page.version ver_lt "2.14" %}

Alpha

{% else %}

Bravo

{% if page.version ver_gt "2.16" %}

Charlie

{% else %}

Delta

{% endif %}

Echo

{% endif %}

</div>
