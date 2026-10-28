---
title: GitHub Copilot seat assignment
shortTitle: Seat assignment
intro: 'Learn how seat assignment for {% data variables.product.prodname_copilot %} works in organizations and enterprises, including billing, user eligibility, and assignment management.'
versions:
  feature: copilot
category:
  - Learn about Copilot
contentType: reference
---

This article explains how seat assignment for {% data variables.product.prodname_copilot_short %} works in organizations and enterprises.

## What is a {% data variables.product.prodname_copilot_short %} seat?

A **{% data variables.product.prodname_copilot_short %} seat** is a license to use {% data variables.product.prodname_copilot_short %}, assigned to a unique user account.

Every user needs an assigned seat under an organization or enterprise plan, even when access has no incremental charge through {% data variables.product.prodname_ghe_cloud %}.

## Seat assignment management

With {% data variables.product.prodname_copilot_short %} access, enterprise owners assign seats to individual members, enterprise teams, or entire organizations. This applies both through {% data variables.product.prodname_ghe_cloud %} and as {% data variables.copilot.copilot_standalone_short %}. For a large rollout, assign seats to an enterprise team or organization to give all its members seats at once.

With {% data variables.copilot.copilot_business_short %}, enterprise owners can assign seats directly to individual users or enterprise teams.

With {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %}, enterprise owners can enable {% data variables.product.prodname_copilot_short %} for organizations. Organization owners then assign seats to their members.

Enabling {% data variables.product.prodname_copilot_short %} for an enterprise does not assign individual seats. For enterprise assignment procedures, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access).

{% data reusables.copilot.copilot-one-account %}

## Organization assignment and billing rules

The rules below apply to {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} licenses assigned through organizations.

Organization owners assign seats to specific user accounts in organization settings or via the REST API. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access).

* **If all assigned seats are removed, the organization's {% data variables.product.prodname_copilot_short %} plan is canceled.**
* **If a single user receives a seat from multiple organizations within the same enterprise**, the enterprise is only billed once per billing cycle for that unique user. One organization that assigned {% data variables.product.prodname_copilot_short %} to the user is chosen at random each month to be billed for the seat.
* **If a user is assigned both a  {% data variables.copilot.copilot_business_short %} and a {% data variables.copilot.copilot_enterprise_short %} seat from different organizations within the same enterprise**, only the {% data variables.copilot.copilot_enterprise_short %} seat is billed. The charge is at the {% data variables.copilot.copilot_enterprise_short %} rate from the time the {% data variables.copilot.copilot_enterprise_short %} seat is assigned. The user will have access to the all the features and capabilities available under the {% data variables.copilot.copilot_enterprise_short %} plan.
* **If a user receives a seat automatically because they were added to a team with {% data variables.product.prodname_copilot_short %} access** (for example, via SCIM or team synchronization), the `copilot.cfb_seat_added` audit log event attributes the action to whoever originally granted {% data variables.product.prodname_copilot_short %} access to that team, not the account that added the new team member. The membership change itself is attributed correctly to the actual actor on the corresponding `team.add_member` or `org.add_member` event. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs).
