
With metered billing, the cost of a license is calculated by measuring **consumed licenses** and **billable licenses**.

* **Consumed licenses**: The number of licenses currently in use.
* **Billable licenses**: The unique licenses billed in a billing cycle. If a user stops consuming a license within the month, the adjustment is reflected in your next month's bill.

If a user starts consuming a {% ifversion enterprise-licensing-language %}license{% else %}licensed seat{% endif %} in the middle of the billing cycle, you will pay pro rata for the user's license usage that month.

**For example:** The billing cycle begins on the first day of the month, and the account starts with 0 licenses.

* Day 1: The administrator adds 10 licensed users.
* Day 2: The administrator adds 20 licensed users.
* Day 3: The administrator removes 5 licensed users.
* Day 4: No change.

At the end of day 4, there will be:

* 25 consumed licenses `(10 + 20 - 5)`. This is the number of users actively consuming licenses.
* 30 billable licenses `(10 + 20)`. This is the number of distinct users that consumed a license at some point during the month.

Pending invitations to join an organization that belongs to your enterprise on {% data variables.product.github %} do not consume a license.
