Automate :# +Direct Deposit / Automatic Payment Information Form
A fast and convenient way to manage your everyday financial transactions – and it’s free!
Benefits To You
• Convenient – Your money is deposited automatically for you, even when you are ill, on vacation or too busy to get to the bank. Your check is
deposited electronically into your Wells Fargo account.
• Fast – You have immediate access to your money on the day of deposit.
• Safe – Never worry about checks getting lost, delayed or stolen.
• Automatic saving – Watch your savings grow when you have at least part of your pay directed to savings.
• Automatic Payment – You can also use the routing number (RTN) and account number to set up automatic payment for your recurring bills from
your checking account. Prepaid cards are not eligible for Automatic Payments. See Terms and Conditions of your card for more information.
Three Easy Steps to Set up Direct Deposit or Automatic Payments
Routing
Number
Account
Number
Check
Number
SAMPLE CHECK
PAY TO THE ORDER OF
MEMO
DOLLARS
DATE
0101
$
© 2017 Wells Fargo Bank, N.A. All rights reserved. Member FDIC. CNS3519 FOL (Rev 02 - 02/17)
A123456789A 0123456789C 0101
Step 2. Contact Your Employer or Payor
Use the table below to find the correct contact to learn if your payor offers direct deposit services and to provide your account information.
Your payor may need you to complete a form or provide a voided check to process your request.
For Direct Deposit and Automatic Payment
through Checking
Use information found on your checks
Call 1-877-838-2778 (1-800-829-4833 TTY), or visit a Wells Fargo Bank Branch near you.
• Salary/Wages
• Pension
• Dividend/Investment Income
Contact your employer or other payor directly with the information on this form.
Step 3. Monitor Your Account
For direct deposit, it can take one to two months for a payor to process your request and to begin receiving electronic deposits.
Questions? Wells Fargo Phone Bank is available 24/7 at 1-800-TO-WELLS (1-800-869-3557)
Visit a Wells Fargo Bank Branch near you
or
for New Enrollments only, you can also visit
www.godirect.org,
or call Go Direct at 1-800-333-1795
• Social Security (SSA)
• Supplemental Security Income (SSI)
• Railroad Retirement
• Civil Service Retirement
(Office of Personal Management)
• Veterans Compensation and Pension
Contact the agency directly. Or call Go Direct at 1-800-333-1795
to get the telephone numbers of many federal agencies. • Other Federal Agency Benefits
Call 1-800-772-1213 (1-800-325-0778 TTY)
Call 1-877-772-5772 (1-312-751-4701 TTY)
Call 1-888-767-6738 (1-800-878-5707 TTY)
Step 1. Gather Account Information
You must provide your information about the account where the money will be deposited or withdrawn.
Note: You can also find your Account Number
on your statement or on the account documents
provided at account opening.
If the account information to the left is not completed, use the following information:
For Direct Deposit
into Prepaid Card or Savings
For your prepaid card or
savings account number, check your
bank statement or account documents
provided at account opening.
Contact Wells Fargo Phone BankSM
at 1-800-TO-WELLS
(1-800-869-3557) for the correct
Routing Number (RTN).
Please note, Wells Fargo cannot
provide your account number
over the phone.
Existing Enrollment
(To change the bank currently
receiving deposits electronically)
New Enrollment
(To change your paper checks
to electronic deposits)
Customer Name
__________________________________
Routing Number (RTN) (9 digits)
{{OC:ADO:Account RTN CHK}}
___ ___ ___ ___ ___ ___ ___ ___ ___
Account Number
(maximum 13 digits – include leading zeros
– do not include check number):
{{OC:ADO:Account RTN CHK}}
___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___
Type of Account (Check one):
c Checking/Prepaid Card c Savings See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.177.0/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 16, 14, 12
ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

# Install the GitHub CLI see:
# https://github.com/microsoft/vscode-dev-containers/blob/3d59f9fe37edb68f78874620f33dac5a62ef2b93/script-library/docs/github.md
COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
AUTOMATE :
