---
title: Users
redirect_from:
  - /v3/users
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Many of the resources on the users API provide a shortcut for getting information about the currently authenticated user. If a request URL does not include a `{username}` parameter then the response will be for the logged in user (and you must pass [authentication information](/rest/overview/resources-in-the-rest-api#authentication) with your request).{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} Additional private information, such as whether a user has two-factor authentication enabled, is included when authenticated through basic auth or OAuth with the `user` scope.{% endif %}

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## Blocking users

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blocking' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
## Emails

Management of email addresses via the API requires that you authenticate through basic auth, or through OAuth with a correct scope for the endpoint.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'emails' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## Followers

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'followers' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Git SSH keys

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'keys' %}{% include rest_operation %}{% endif %}
{% endfor %}

## GPG keys

The data returned in the `public_key` response field is not a GPG formatted key. When a user uploads a GPG key, it is parsed and the cryptographic public key is extracted and stored. This cryptographic key is what is returned by the APIs on this page. This key is not suitable to be used directly by programs like GPG.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'gpg-keys' %}{% include rest_operation %}{% endif %}
{% endfor %}
