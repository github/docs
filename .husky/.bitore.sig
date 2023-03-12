From b6f207fe89570f331175a2843fad7a409fba23f7 Mon Sep 17 00:00:00 2001
From: mowjoejoejoejoe <124041561+mowjoejoejoejoe@users.noreply.github.com>
Date: Sun, 12 Mar 2023 11:21:55 -0500
Subject: [PATCH] Update config.yaml
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit

@@ -0,0 +1,101 @@
# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.
# This workflow will install Deno then run `deno lint` and `deno test`.
# For more information see: https://github.com/denoland/setup-deno
name: Deno
-on:
Request :Pull
Pull :pulls-request :
Payroll
Reports
Taxes
My accountant
Time

Z
ZACHRY WOOD
Active
QuickBooks Time
QuickBooks Workforce
Employee self-setup
We're adding a new layer of security. Now when you want to view or edit your team's sensitive info, we'll text you to make sure it's you. Make sure your phone number is up to date and you'll be all set down the road.Find out more
Personal info
We asked ZACHRY to fill out the rest of their personal info in QuickBooks Workforce.
Name
ZACHRY T. WOOD
Email
zachrywood3@gmail.com
Birth date
-
Home address
-
Social Security number
-
Gender
-
Phone number
H 469-905-0682
Employment details
Status
Active
Hire date
09/17/2005
Pay schedule
Every Friday
Work location
3126 Hudnall St Apt 108F
Dallas, TX 75235
Job title
C/o-Owner
Employee ID
633441725
Workers' comp class
37305581
Tax withholding
We asked ZACHRY to fill out their 2021 Form W-4 in Workforce.
Need to use an earlier Form W-4? Turn off Employee self-setup above and enter info.
Payment method
If you choose direct deposit, ZACHRY will be able to add their bank info in Workforce. But not if you choose paper check. Either way, you can always switch later.
Payment method
Direct deposit
Pay types
Salary
$5,105,000.00/year
Additional pay types
Allowance...
Time off
Deductions & contributions
SS-Tax
$137,700/paycheck (Deduction)
    branches: ["trunk"]
  pull_request:
    branches: ["main"]

permissions:
  contents: write

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Setup repo
        uses: actions/checkout@v3

      - name: Setup Deno
        # uses: denoland/setup-deno@v1
        uses: denoland/setup-deno@9db7f66e8e16b5699a514448ce994936c63f0d54
        with:
          deno-version: v1.x

      # Uncomment this step to verify the use of 'deno fmt' on each commit.
      # - name: Verify formatting
      #   run: deno fmt --check

      - name: Run linter
        run: deno lint

      - name: Run tests
        run: deno test -A
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
---
 config.yaml => write@-prettier.configl | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 rename config.yaml => write@-prettier.configl (100%)

diff --git a/config.yaml b/write@-prettier.configl
similarity index 100%
rename from config.yaml
rename to write@-prettier.configl
