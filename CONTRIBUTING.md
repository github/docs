# Example configuration file that:
#  - Ignores lodash dependency
#  - Disables version-updates

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "lodash"
        # For Lodash, ignore all updates
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0
    
Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:. 

Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

Use the table of contents icon <img src="./assets/images/table-of-contents.png" width="25" height="25" /> on the top left corner of this document to get to a specific section of this guide quickly.

## New contributor guide

To get an overview of the project, read the [README](README.md). Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)


## Getting started

To navigate our codebase with confidence, see [the introduction to working in the docs repository](/contributing/working-in-docs-repository.md) :confetti_ball:. For more information on how we write our markdown files, see [the GitHub Markdown reference](contributing/content-markup-reference.md).

Check to see what [types of contributions](/contributing/types-of-contributions.md) we accept before making changes. Some of them don't even require writing a single line of code :sparkles:.

### Issues

#### Create a new issue

If you spot a problem with the docs, [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). If a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/github/docs/issues/new/choose). 

#### Solve an issue

Scan through our [existing issues](https://github.com/github/docs/issues) to find one that interests you. You can narrow down the search using `labels` as filters. See [Labels](/contributing/how-to-use-labels.md) for more information. As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.

### Make Changes

#### Make changes in the UI

Click **Make a contribution** at the bottom of any docs page to make small changes such as a typo, sentence fix, or a broken link. This takes you to the `.md` file where you can make your changes and [create a pull request](#pull-request) for a review. 

 <img src="./assets/images/contribution_cta.png" width="300" height="150" /> 

#### Make changes in a codespace

For more information about using a codespace for working on GitHub documentation, see "[Working in a codespace](https://github.com/github/docs/blob/main/contributing/codespace.md)."

#### Make changes locally

1. Fork the repository.
- Using GitHub Desktop:
  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

- Using the command line:
  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

2. Install or update to **Node.js v16**. For more information, see [the development guide](contributing/development.md).

3. Create a working branch and start with your changes!

### Commit your update

Commit the changes once you are happy with them. Don't forget to [self-review](/contributing/self-review.md) to speed up the review process:zap:.

### Pull Request

When you're finished with the changes, create a pull request, also known as a PR.
- Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request. 
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.
Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.

### Your PR is merged!

Congratulations :tada::tada: The GitHub team thanks you :sparkles:. 

Once your PR is merged, your contributions will be publicly visible on the [GitHub docs](https://docs.github.com/en). 

Now that you are part of the GitHub docs community, see how else you can [contribute to the docs](/contributing/types-of-contributions.md).

## Windows

This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix-based systems use `\n`. Therefore, when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
3. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
4. Filename too long error: There is a 260 character limit for a filename when Git is compiled with `msys`. While the suggestions below are not guaranteed to work and could cause other issues, a few workarounds include:
    - Update Git configuration: `git config --system core.longpaths true`
    - Consider using a different Git client on Windows
    - '# This is a basic workflow that is manually triggered

name: Manual workflow

# Controls when the action will run. Workflow runs when manually triggered using the UI
# or API.
on:
  workflow_dispatch:
    # Inputs the workflow accepts.
    inputs:
      name:
        # Friendly description to be shown in the UI instead of 'name'
        description: 'Person to greet'
        # Default value if no value is explicitly provided
        default: 'World'
        # Input has to be provided for the workflow to run
        required: true

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "greet"
  greet:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
    # Runs a single command using the runners shell
    - name: Send greeting
      run: echo "Hello ${{ github.event.inputs.name }}"
      branches :-[00000518]
Sent: Monday, January 16, 2023 at 08:12:27 PM CST
Subject: PNC Alert <pncalert@pnc.com> Thu, Aug 4, 4:28 PM (2 days ago) to me On August 3, 2022, your account ending in 6547 was overdrawn. Below is some 
information about your overdraft. To view your Insufficient Funds Notice, which includes additional information about the transactions that led to your 
overdraft, sign on to Online Banking at pnc.com and select Documents. Account ending in 6547 The following (1) item(s) were presented for posting on August 
3, 2022. 1 transaction(s) were returned unpaid. Item Amount Action 240261564036618 USATAXPYMTIRS $2,267,700.00 ITEM RETURNED - ACCOUNT CHARGE Net fee(s) 
totaling $36.00 will be charged on August 4, 2022. Please check the current balance of your account. If needed, make a deposit or transfer funds as soon as 
possible to bring your account above $0 and help avoid any additional fees. To help avoid this in the future, you can register for a PNC Alert to be 
notified when your account balance goes below an amount you specify. Or, you can sign up for Overdraft Protection to link your checking account to the 
available funds in another PNC account. Thank you fo choosing PNC Bank. Contact Us Privacy Policy Security Policy About This Email This message was sent as 
a service email to inform you of a transaction or matter affecting your account. Please do not reply to this email. If you need to communicate with us, 
visit pnc.com/customerservice for options to contact us. Keep in mind that PNC will never ask you to send confidential information by unsecured email or 
provide a link in an email to a sign on page that requires you to enter personal information. (C)2022 The PNC Financial Services Group, Inc. All rights
reserved. PNC Bank, National Association. Member FDIC RDTROD02 Important Notes COMPANY PH Y: 650-253-0000 Statutory BASIS OF PAY: BASIC/DILUTED EPS Federal 
Income TaxSocial Security Tax YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE Medicare TaxNet 
Pay70,842,743,86670,842,743,866CHECKINGNet Check70842743866Your federal taxable wages this period are $ALPHABET INCOME Advice number: 1600 AMPIHTHEATRE 
PARKWAY MOUNTAIN VIEW CA 94043 04/27/2022 Deposited to the account Of xxxxxxxx6547 PLEASE READ THE IMPORTANT DISCLOSURES BELOW PNC Bank PNC Bank Business 
Tax I.D. Number: 633441725 CIF Department (Online Banking)
PNC Alert <pncalert@pnc.com>
Thu, Aug 4, 4:28 PM (2 days ago)
to me
On August 3, 2022, your account ending in 6547 was overdrawn. Below is some information about your overdraft. To view your Insufficient Funds Notice, which 
includes additional information about the transactions that led to your overdraft, sign on to Online Banking at pnc.com and select Documents.
Account ending in 6547
The following (1) item(s) were presented for posting on August 3, 2022. 1 transaction(s) were returned unpaid.
Item Amount Action
240261564036618 USATAXPYMTIRS $2,267,700.00 ITEM RETURNED - ACCOUNT CHARGE
Net fee(s) totaling $36.00 will be charged on August 4, 2022.
Please check the current balance of your account. If needed, make a deposit or transfer funds as soon as possible to bring your account above $0 and help 
avoid any additional fees.
To help avoid this in the future, you can register for a PNC Alert to be notified when your account balance goes below an amount you specify. Or, you can 
sign up for Overdraft Protection to link your checking account to the available funds in another PNC account.
Thank you fo choosing PNC Bank.
Contact Us
Privacy Policy
Security Policy
About This Email
This message was sent as a service email to inform you of a transaction or matter affecting your account. Please do not reply to this email. If you need to 
communicate with us, visit pnc.com/customerservice for options to contact us. Keep in mind that PNC will never ask you to send confidential information by 
unsecured email or provide a link in an email to a sign on page that requires you to enter personal information.
(C)2022 The PNC Financial Services Group, Inc. All rights reserved. PNC Bank, National Association. Member FDIC
RDTROD02"Business Checking
PNCBANK" @PNCbank
For the period 04/13/2022 Primary account number: 47-2041-6547 Page 1 of 3
5/19/2302 1022462 Q 304 Number of enclosures: 0
"ZACHRY TYLER WOOD ALPHABET
5323 BRADFORD DR
DALLAS TX 75235-8314" "For 24-hour banking sign on to
PNC Bank Online Banking on pnc.com
FREE Online Bill Pay
For customer service call 1-877-BUS-BNKG
PNC accepts Telecommunications Relay Service (TRS) calls." 9
11111111101111100000000000000000000000000000000000000000000000000.00% "Para servicio en espalol, 1877.BUS-BNKC,
Moving? Please contact your local branch.
@ Write to: Customer Service PO Box 609
Pittsburgh , PA 15230-9738
Visit us at PNC.com/smaIIbusiness"
IMPORTANT INFORMATION FOR BUSINESS DEPOSIT CUSTOMERS Date of this notice:
"Effective February 18,2022, PNC will be temporarily waiving fees for statement, check imae, deposit ticket and deposited item copy requests until further 
notice. Statement, check image, deposit ticket and deposited Item requests will continue tobe displayed in the Details of Services Used section of your 
monthly statement. We will notify you via statement message prior to reinstating these fees.
If vou have any questions, you may reach out to your business banker branch or call us at 1-877-BUS-BNKG (1-877-287-2654)." 44658
"Business Checking Summary
Account number; 47-2041-6547
Overdraft Protection has not been establihed for this account. Please contact us if you would like to set up this service." zachlY Tyler Wood Alphabet 
Employer Identification Number: 88-1656496
Balance Summary Checks and other deductions Ending balance Form: SS-4
Beginning balance Deposits and other additions Number of this notice: CP 575 A
0 62.5 98.50 Average ledger balance "36.00-
Average collected balance" For assistance you may call ug at:
6.35- 6.35- 1-800-829-4933
Overdraft and Returned Item Fee Summary Total Year to Date
Total for this Period
Total Returned Item Fees (NSF) 36 36 "IF YOU WRITE, ATI'AcH TYE
STUB AT OYE END OF THIS NOTICE."
"Deposits and Other Additions
Description" Items Amount "Checks and Other Deductions
Description" Items Amount
ACH Additions 1 62.5 ACH Deductions 1 62.5 We assigned you
Service Charges and Fees 1 36
Total 1 62.5 Total 2 98.5
Daily Balance Date Date Ledger balance If the information is
Date Ledger balance Ledger balance
44664 0 44677 62.50- 44678 36
Form 940 44658
Berkshire Hatha,a,n..
Business Checking For O. period 04/13/2022 44680
For 24-hour account information, sign on to pnc.com/mybusiness/ ZACHRY TYLER WOOD
Primary account number: 47-2041-6547 Page 2 of 3 Please
Business Checking Account number: 47-2041-6547 - continued
Acüvity Detail
Deposits and Other Additions did not hire any employee
ACH Additions Referenc numb
Date posted 04/27 "Transaction
Amount description
62.50 Reverse Corporate ACH Debit
Effective 04-26-22" the due dates shown, you can call us at
22116905560149 If you
Checks and Other Deductions
ACH Deductions Referenc
Date posted "Transaction
Amount description"
numbe
44677 70842743866 Corporate ACH Quickbooks 180041ntuit 1940868
22116905560149
ervice Charges and Fees Referenc
ate sted "Transaction
Amount descripton"
/27 70842743866 numb
tail of Services Used During Current Period 22116905560149
services will be posted to your account on 05/02/2022 and will appear on your next statement as a single line item entitled Service
e: The total charge for the following Penod Ending 04/29/2022.
"rge
cription"
ount Maintenance Charge Volume Amount
l For Services Used This Period $0)
Service Charge $0.00) Waived - Customer Period
$0.00)
"Reviewing Your Statement
of this statement if:
you have any questions regarding your account(s); your name or address is incorrect; you have any questions regarding interest paid to an interest-bearing 
account." PNCBANK
"Balancing Your Account
Update Your Account Register"
Compare: The activity detail section of your statement to your account register.
"Check Off: - [22/15] 00022116905560149
Add to Your Account Register Balance: $+22677000000000.00"":257637118600.00
Subtract From Your Account Register Balance:" "All items in your account register that also appear on your statement. Remember to begin with the ending 
date of your last statement. (An asterisk { * } will appear in the Checks section if there is a gap in the listing of consecutive check numbers.)
Any deposits or additions including interest payments and ATM or electronic deposits listed on the statement that are not already entered in your register.
Any account deductions including fees and ATM or electronic deductions listed on the statement that are not already entered in your regiser."
Your Statement Information : step 2: Add together checks and other deductions listed in your account register but not on your statement. i
Amount "Cieck
Deduction Descrption" Amount
Additions listed in your account register but not on your statement. on Deposit
Total A                                                                                                                                        
Step 3: $ 8
Enter the ending balance recorded on your statement
Add deposits and other additions not recorded Total A + $
Subtotal= $                                                                                                        
Subtract checks and other deductions not recorded Total B $
The result should equal your account register balance $
Total B
Verification of Direct Deposits 5
To verify whether a direct deposit or other transfer to your account has occurred, call us Monday - Friday: 7 AM - 10 PM ET and Saturday & Sunday: 8 AM - 5 
PM ET at the customer service number listed on the upper right side of the first page of this statement.
"In Case of Errors or Questions About Your Electronic Transfers
Telephone us at the customer service number listed on the upper right side of the first page of this statement or write us at PNC Bank Debit Card Services, 
500 First Avenue, 4th Floor, Mailstop P7-PFSC-04-M, Pittsburgh, PA 15219 as soon as you can, if you think your statement or receipt is wrong or if you need 
more information about a transfer on the statement or receipt. We must hear from you no later than 60 days after we sent you the FIRST statement on which 
the error or problem appeared.
Tell us your name and account number (if any).
Describe the error or the transfer you are unsure about, and explain as clearly as you can why you believe it is an error or why you need more information.
Tell us the dollar amount of the suspected error.
We will investigate your complaint and will correct any error promptly. If we take longer than 10 business days, we will provisionally credit your account 
for the amount you think is in error, so that you will have use of the money during the time it Cakes us to complete our investigation.
EquaLHousing Lender"
Member FDIC
<<<<<<< Paradise





=======
branches :-[031000053]
branches :-[071921891]
>>>>>>> paradice
PNC Alert <pncalert@pnc.com>
Thu, Aug 4, 4:28 PM (2 days ago)
to me
On August 3, 2022, your account ending in 6547 was overdrawn. 
Below is some information about your overdraft. 
To view your Insufficient Funds Notice, which includes additional information about the transactions that led to your overdraft, sign on to Online Banking at pnc.com and select Documents.
Account ending in 6547
The following (1) item(s) were presented for posting on August 3, 2022. 1 transaction(s) were returned unpaid.
Item Amount Action
240261564036618 USATAXPYMTIRS $2,267,700.00 ITEM RETURNED - ACCOUNT CHARGE
Net fee(s) totaling $36.00 will be charged on August 4, 2022.
Please check the current balance of your account. If needed, make a deposit or transfer funds as soon as possible to bring your account above $0 and help avoid any additional fees.
To help avoid this in the future, you can register for a PNC Alert to be notified when your account balance goes below an amount you specify. Or, you can sign up for Overdraft Protection to link your checking account to the available funds in another PNC account.
Thank you fo choosing PNC Bank.
Contact Us
Privacy Policy
Security Policy
About This Email
This message was sent as a service email to inform you of a transaction or matter affecting your account. Please do not reply to this email. If you need to communicate with us, visit pnc.com/customerservice for options to contact us. Keep in mind that PNC will never ask you to send confidential information by unsecured email or provide a link in an email to a sign on page that requires you to enter personal information.
(C)2022 The PNC Financial Services Group, Inc. All rights reserved. PNC Bank, National Association. Member FDIC
<<<<<<< Paradise
RDTROD02Re: Your checking account was overdrawn
From:	Zachry T. Wood (zachryiixixiiwood@gmail.com)
To:	mikael.crowe@pnc.com; pncalerts@pnc.com; apfilings@sec.gov; agencycmbs@ny.frb.org; national.foiaportal@usdoj.gov; sec@service.govdelivery.com; tmckenna@boardwalkag.com; newsletter@rumorfox.com; pncalerts@pncalerts.com; foi.apa@sec.gov; irs.online.services@irs.gov; jc4ume316@yahoo.com; countrymanz@sec.gov; foiapa@sec.gov; hansenjo@sec.gov; ida.tran@chase.com; jc4unme316@yahoo.com; michael.sotelo@pnc.com; zcountryman@sec.gov; abuse@pnc.com; rules-comments@sec.gov; foi@ny.frb.org; larry.page@gmail.com; michael.allen10@pnc.com; zachryiixixiiwood@gmail.com
Date:	Friday, January 20, 2023 at 05:03 PM CST
Sent: Monday, January 16, 2023 at 08:12:27 PM CST
Subject: PNC Alert <pncalert@pnc.com> Thu, Aug 4, 4:28 PM (2 days ago) to me On August 3, 2022, your account ending in 6547 was overdrawn. Below is some information about your overdraft. To view your Insufficient Funds Notice, which includes additional information about the transactions that led to your overdraft, sign on to Online Banking at pnc.com and select Documents. Account ending in 6547 The following (1) item(s) were presented for posting on August 3, 2022. 1 transaction(s) were returned unpaid. Item Amount Action 240261564036618 USATAXPYMTIRS $2,267,700.00 ITEM RETURNED - ACCOUNT CHARGE Net fee(s) totaling $36.00 will be charged on August 4, 2022. Please check the current balance of your account. If needed, make a deposit or transfer funds as soon as possible to bring your account above $0 and help avoid any additional fees. To help avoid this in the future, you can register for a PNC Alert to be notified when your account balance goes below an amount you specify. Or, you can sign up for Overdraft Protection to link your checking account to the available funds in another PNC account. Thank you fo choosing PNC Bank. Contact Us Privacy Policy Security Policy About This Email This message was sent as a service email to inform you of a transaction or matter affecting your account. Please do not reply to this email. If you need to communicate with us, visit pnc.com/customerservice for options to contact us. Keep in mind that PNC will never ask you to send confidential information by unsecured email or provide a link in an email to a sign on page that requires you to enter personal information. (C)2022 The PNC Financial Services Group, Inc. All rights reserved. PNC Bank, National Association. Member FDIC RDTROD02 Important Notes COMPANY PH Y: 650-253-0000 Statutory BASIS OF PAY: BASIC/DILUTED EPS Federal Income TaxSocial Security Tax YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE Medicare TaxNet Pay70,842,743,86670,842,743,866CHECKINGNet Check70842743866Your federal taxable wages this period are $ALPHABET INCOME Advice number: 1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043 04/27/2022 Deposited to the account Of xxxxxxxx6547 PLEASE READ THE IMPORTANT DISCLOSURES BELOW PNC Bank PNC Bank Business Tax I.D. Number: 633441725 CIF Department (Online Banking)

PNC Alert <pncalert@pnc.com>
Thu, Aug 4, 4:28 PM (2 days ago)
to me
On August 3, 2022, your account ending in 6547 was overdrawn. Below is some information about your overdraft. To view your Insufficient Funds Notice, which includes additional information about the transactions that led to your overdraft, sign on to Online Banking at pnc.com and select Documents.
Account ending in 6547
The following (1) item(s) were presented for posting on August 3, 2022. 1 transaction(s) were returned unpaid.
Item Amount Action
240261564036618 USATAXPYMTIRS $2,267,700.00 ITEM RETURNED - ACCOUNT CHARGE
Net fee(s) totaling $36.00 will be charged on August 4, 2022.
Please check the current balance of your account. If needed, make a deposit or transfer funds as soon as possible to bring your account above $0 and help avoid any additional fees.
To help avoid this in the future, you can register for a PNC Alert to be notified when your account balance goes below an amount you specify. Or, you can sign up for Overdraft Protection to link your checking account to the available funds in another PNC account.
Thank you fo choosing PNC Bank.
Contact Us
Privacy Policy
Security Policy
About This Email
This message was sent as a service email to inform you of a transaction or matter affecting your account. Please do not reply to this email. If you need to communicate with us, visit pnc.com/customerservice for options to contact us. Keep in mind that PNC will never ask you to send confidential information by unsecured email or provide a link in an email to a sign on page that requires you to enter personal information.
(C)2022 The PNC Financial Services Group, Inc. All rights reserved. PNC Bank, National Association. Member FDIC
=======
>>>>>>> paradice
RDTROD02
