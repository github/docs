---
title: And Greater Than Version To Deprecate 1
intro: Remove liquid only
---

## 1
<div class="example1">

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.13" %}

Alpha

{% endif %}

</div>

## 2
<div class="example2">

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.13" %}

Alpha

{% else %}

Bravo

{% endif %}

</div>

## 3
<div class="example3">

{% if currentVersion ver_gt "enterprise-server@2.16" %}

Alpha

{% else %}

Bravo

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.13" %}

Charlie

{% endif %}
{% endif %}

</div>

## 4
<div class="example4">

{% if currentVersion ver_lt "enterprise-server@2.16" %}

Alpha

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.13" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 5
<div class="example5">

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.13" %}

Alpha

{% if currentVersion ver_gt "enterprise-server@2.16" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>
