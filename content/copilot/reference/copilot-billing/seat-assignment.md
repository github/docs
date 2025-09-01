---
title: GitHub Copilot seat assignment
shortTitle: Seat assignment
intro: 'Learn how seat assignment for {% data variables.product.prodname_copilot %} works in organizations and enterprises, including billing, user eligibility, and assignment management.'
versions:
  feature: copilot
topics:
  - Copilot
contentType: reference
---

This article explains how seat assignment for {% data variables.product.prodname_copilot_short %} works in organizations and enterprises.

## What is a {% data variables.product.prodname_copilot_short %} seat?

A **{% data variables.product.prodname_copilot_short %} seat** is a license to use {% data variables.product.prodname_copilot_short %}, assigned to a unique user account through a {% data variables.copilot.copilot_business_short %} or a {% data variables.copilot.copilot_enterprise_short %} plan.

Users must be assigned a seat to access {% data variables.product.prodname_copilot_short %} features under an organization or enterprise plan

## Seat assignment management

* **Who assigns seats:** Organization owners. Seats are assigned to specific user accounts. See [AUTOTITLE](/copilot/how-tos/administer/organizations/managing-access-to-github-copilot-in-your-organization/granting-access-to-copilot-for-members-of-your-organization).
* **Where:** Seat assignment can be managed in the {% data variables.product.github %} organization settings or via the REST API.
* **If all assigned seats are removed, the organization's {% data variables.product.prodname_copilot_short %} plan is canceled.**
* **If a user with an active {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plan is assigned a seat in a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan**, their personal plan is automatically canceled, and a prorated refund for any remaining portion of their personal billing cycle is issued. The user will now use {% data variables.product.prodname_copilot_short %} under the organization's policies.
* **If a single user receives a seat from multiple organizations within the same enterprise**, the enterprise is only billed once per billing cycle for that unique user. One organization that assigned {% data variables.product.prodname_copilot_short %} to the user is chosen at random each month to be billed for the seat.
* **If a user is assigned both a  {% data variables.copilot.copilot_business_short %} and a {% data variables.copilot.copilot_enterprise_short %} seat from different organizations within the same enterprise**, only the {% data variables.copilot.copilot_enterprise_short %} seat is billed. The charge is at the {% data variables.copilot.copilot_enterprise_short %} rate from the time the {% data variables.copilot.copilot_enterprise_short %} seat is assigned. The user will have access to the all the features and capabilities available under the {% data variables.copilot.copilot_enterprise_short %} plan.
