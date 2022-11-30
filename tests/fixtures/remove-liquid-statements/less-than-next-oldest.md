---
title: Less Than Version To Deprecate
intro: Remove liquid and content
---

## 1
<div class="example1">

Alpha

{% if currentVersion ver_lt "enterprise-server@2.14" %}

Bravo

{% endif %}

</div>

## 2
<div class="example2">

Alpha

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_lt "enterprise-server@2.14" %}

Bravo

{% endif %}

</div>

## 3
<div class="example3">

{% if currentVersion == "free-pro-team@latest" %}

Alpha

{% else %}

Bravo

{% if currentVersion ver_lt "enterprise-server@2.14" %}

Charlie

{% endif %}
{% endif %}

</div>

## 4

<div class="example4">

{% if currentVersion == "free-pro-team@latest" %}

Alpha

{% if currentVersion ver_lt "enterprise-server@2.14" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 5
<div class="example5">

{% if currentVersion ver_lt "enterprise-server@2.14" %}

Alpha

{% if currentVersion == "free-pro-team@latest" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 6
<div class="example6">

{% if currentVersion ver_lt "enterprise-server@2.16" %}

Alpha

{% else %}

Charlie

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.14" %}

Bravo

{% endif %}

{% endif %}

</div>

## 7
<div class="example7">

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.14" %}

Alpha

{% if currentVersion ver_lt "enterprise-server@2.14" %}

Bravo

{% else %}

Charlie

{% endif %}

{% endif %}

</div>

## 8
<div class="example8">

{% if currentVersion ver_lt "enterprise-server@2.14" %}

Alpha

{% else %}

Bravo

{% if currentVersion ver_gt "enterprise-server@2.16" %}

Charlie

{% else %}

Delta

{% endif %}

Echo

{% endif %}

</div>
