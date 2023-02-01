This table shows the behavior of alerts for each way a user can bypass a push protection block.

| Bypass reason         | Alert  behavior                                              |
|-----------------------|------------------------------------------------------|
| It's used in tests    | {% data variables.product.prodname_dotcom %} creates a closed alert, resolved as "used in tests"  |
| It's a false positive | {% data variables.product.prodname_dotcom %} creates a closed alert, resolved as "false positive" |
| I'll fix it later     | {% data variables.product.prodname_dotcom %} creates an open alert                                |
