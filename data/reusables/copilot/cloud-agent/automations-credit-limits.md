You can set the following optional limits, in {% data variables.product.prodname_ai_credits_short %}. Leave a limit empty if you don't want to set it.

* **Per run**: Stops a run as soon as it reaches the limit. The minimum is 30 {% data variables.product.prodname_ai_credits_short %}.
* **Daily**: Prevents new runs from starting once the limit is reached. Resets every day at 00:00 UTC.
* **Weekly**: Prevents new runs from starting once the limit is reached. Resets every Monday at 00:00 UTC.
* **Monthly**: Prevents new runs from starting once the limit is reached. Resets on the first day of each month at 00:00 UTC.

The daily, weekly, and monthly limits don't stop a run that is already in progress. To cap the cost of each individual run, set a per-run limit.
