   | Validity    | Status            |     Result                                                                           |
   |-------------|------------|--------------------------------------------------------------------------------|
   | Active secret           | `active` | {% data variables.product.company_short %} checked with this secret's provider and found that the secret is active |
   | Possibly active secret  | `unknown` | {% data variables.product.company_short %} does not support validation checks for this token type yet               |
   | Possibly active secret  | `unknown` | {% data variables.product.company_short %} could not verify this secret                                            |
   | Secret inactive | `inactive` | You should make sure no unauthorized access has already occurred                 |
