#!/usr/bin/env bash
#-------------------------------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
#-------------------------------------------------------------------------------------------------------------
#
# Docs: https://github.com/microsoft/vscode-dev-containers/blob/master/script-library/docs/github.md
#
# Syntax: ./github-debian.sh [version]

CLI_VERSION=${1:-"latest"}

set -e

if [ "$(id -u)" -ne 0 ]; then
    echo -e 'Script must be run as root. Use sudo, su, or add "USER root" to your Dockerfile before running this script.'
    exit 1
fi

export DEBIAN_FRONTEND=noninteractive

# Install curl, apt-transport-https or gpg if missing
if ! dpkg -s curl ca-certificates > /dev/null 2>&1; then
    if [ ! -d "/var/lib/apt/lists" ] || [ "$(ls /var/lib/apt/lists/ | wc -l)" = "0" ]; then
        apt-get update
    fi
    apt-get -y install --no-install-recommends curl ca-certificates
fi

# Get latest release number if latest is specified
if [ "${CLI_VERSION}" = "latest" ] ||  [ "${CLI_VERSION}" = "current" ] ||  [ "${CLI_VERSION}" = "lts" ]; then
    LATEST_RELEASE=$(curl -sSL -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/cli/cli/releases?per_page=1&page=1")
    CLI_VERSION=$(echo ${LATEST_RELEASE} | grep -oE 'tag_name":\s*"v[^"]+' | sed -n '/tag_name":\s*"v/s///p')
fi

# Install the GitHub CLI
echo "Downloading github CLI..."
curl -OsSL https://github.com/cli/cli/releases/download/v${CLI_VERSION}/gh_${CLI_VERSION}_linux_amd64.deb
echo "Installing github CLI..."
apt-get install ./gh_${CLI_VERSION}_linux_amd64.deb
echo "Removing github CLI deb file after installation..."
rm -rf ./gh_${CLI_VERSION}_linux_amd64.deb
Echo :"Done!" :100%_Finished.''
'complete'.''
'Return: 'Run '' '"''
**Business Checking 


<!--td {border: 1px solid #cccccc;}br {mso-data-><!--td {border: 1px solid #cccccc;}br {mso-data-placement:same-cell;}-->
Conversation opened. 1 unread message.

Skip to content
Using Gmail with screen readers
11 of many
Your account was overdrawn.
Inbox
PNC Alert <pncalert@pnc.com>

Thu, Aug 4, 4:28 PM (2 days ago)

to me

On August 3, 2022, your account ending in 6547 was overdrawn. Below is some information about your overdraft. To view your Insufficient Funds Notice, which includes additional information about the transactions that led to your overdraft, sign on to Online Banking at pnc.com and select Documents.

Account ending in 6547

The following (1) item(s) were presented for posting on August 3, 2022. 1 transaction(s) were returned unpaid.

Item


Amount


Action

240261564036618 USATAXPYMTIRS


$2,267,700.00


ITEM RETURNED - ACCOUNT CHARGE


Net fee(s) totaling $36.00 will be charged on August 4, 2022.


Please check the current balance of your account. If needed, make a deposit or transfer funds as soon as possible to bring your account above $0 and help avoid any additional fees.


To help avoid this in the future, you can register for a PNC Alert to be notified when your account balance goes below an amount you specify. Or, you can sign up for Overdraft Protection to link your checking account to the available funds in another PNC account.


Thank you for choosing PNC Bank.

Contact Us


Privacy Policy


Security Policy

About This Email

This message was sent as a service email to inform you of a transaction or matter affecting your account. Please do not reply to this email. If you need to communicate with us, visit pnc.com/customerservice for options to contact us. Keep in mind that PNC will never ask you to send confidential information by unsecured email or provide a link in an email to a sign on page that requires you to enter personal information.

(C)2022 The PNC Financial Services Group, Inc. All rights reserved. PNC Bank, National Association. Member FDIC

RDTROD02



Meet
New meeting
Join a meeting
Hangouts
Page 1 of 8 




2021/09/292880Paid Period09-28-2019 - 09 28-2021Pay Date01-29-2022896551Amount$70,432,743,866totalAlphabet Inc.$134,839Income StatementZachry Tyler WoodUS$ in millionsDec 31, 2019Dec 31, 2018Dec 31, 2017Dec 31, 2016Dec 31, 2015Ann. Rev. Date161,857136,819110,85590,27274,989Revenues-71,896-59,549-45,583-35,138-28,164Cost of revenues89,96177,27065,27255,13446,825Gross profit-26,018-21,419-16,625-13,948-12,282Research and development-18,464-16,333-12,893-10,485-9,047Sales and marketing-9,551-8,126-6,872-6,985-6,136General and administrative-1,697-5,071-2,736â€”â€”European Commission fines34,23126,32126,14623,71619,360Income from operations2,4271,8781,3121,220999Interest income-100-114-109-124-104Interest expense103-80-121-475-422Foreign currency exchange gain1491,190-110-53â€”Gain (loss) on debt securities2,6495,46073-20â€”Gain (loss) on equity securities,-326â€”â€”â€”â€”Performance fees390-120-156-202â€”Gain(loss)10237815888-182Other5,3948,5921,047434291Other income (expense), net39,62534,91327,19324,15019,651Income before income taxes-3,269-2,880-2,302-1,922-1,621Provision for income taxes36,355-32,66925,61122,19818,030Net incomeAdjustment Payment to Class C36,35532,66925,61122,19818,030Net. Ann. Rev.Based on: 10-K (filing date: 2020-02-04), 10-K (filing date: 2019-02-05), 10-K (filing date: 2018-02-06), 10-K (filing date: 2017-02-03), 10-K (filing date: 2016-02-11).1

Earnings Statement

ALPHABET

Period Beginning:

1600 AMPITHEATRE PARKWAYDR

Period Ending:

MOUNTAIN VIEW, C.A., 94043Pay Date:Taxable Marital Status: 
Exemptions/AllowancesMarried

ZACHRY T.

5323Federal:DALLASTX:

NO State Income Tax

rateunitsyear to date

Other Benefits and

EPS112674,678,00075698871600Information

Pto Balance

Total Work Hrs

Gross Pay75698871600

Important Notes

COMPANY PH Y: 650-253-0000

Statutory

BASIS OF PAY: BASIC/DILUTED EPS

Federal Income TaxSocial Security Tax

YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE

Medicare TaxNet Pay70,842,743,86670,842,743,866CHECKINGNet Check70842743866Your federal taxable wages this period are $ALPHABET INCOME

Advice number:

1600 AMPIHTHEATRE PARKWAY MOUNTAIN VIEW CA 94043Pay date:_Deposited to the account Of

xxxxxxxx6547

PLEASE READ THE IMPORTANT DISCLOSURES BELOW																																	
																																	
FEDERAL RESERVE MASTER SUPPLIER ACCOUNT					31000053-052101023																								COD				
					633-44-1725																				Zachryiixixiiiwood@gmail.com				47-2041-6547		111000614		31000053
PNC Bank																													PNC Bank Business Tax I.D. Number: 633441725				
CIF Department (Online Banking)																													Checking Account: 47-2041-6547				
P7-PFSC-04-F																													Business Type: Sole Proprietorship/Partnership Corporation				
500 First Avenue																													ALPHABET				
Pittsburgh, PA 15219-3128																													5323 BRADFORD DR				
NON-NEGOTIABLE																													DALLAS TX 75235 8313				
																													ZACHRY, TYLER, WOOD				
																										4/18/2022			650-2530-000 469-697-4300				
														SIGNATURE															Time Zone: Eastern Central Mountain Pacific				
Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value

NON-NEGOTIABLE

Based on facts as set forth in.6550The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above.EMPLOYER IDENTIFICATION NUMBER: 61-17679196551ALPHABETZACHRY T WOOD5323 BRADFORD DRDALLAS TX 75235-8314ORIGINAL REPORTIncome, Rents, & RoyaltyINCOME STATEMENT61-176791988-1303491GOOGL_income-statement_Quarterly_As_Originally_ReportedTTMQ4 2021Q3 2021Q2 2021Q1 2021Q4 2020Q3 2020Q2 2020Gross Profit14669800000042337000000374970000003565300000031211000000308180000002505600000019744000000Total Revenue as Reported, Supplemental2576370000007532500000065118000000618800000005531400000056898000000461730000003829700000025763700000075325000000651180000006188000000055314000000568980000004617300000038297000000Other RevenueCost of Revenue-110939000000-32988000000-27621000000-26227000000-24103000000-26080000000-21117000000-18553000000Cost of Goods and Services-110939000000-32988000000-27621000000-26227000000-24103000000-26080000000-21117000000-18553000000Operating Income/Expenses-67984000000-20452000000-16466000000-16292000000-14774000000-15167000000-13843000000-13361000000Selling, General and Administrative Expenses-36422000000-11744000000-8772000000-8617000000-7289000000-8145000000-6987000000-6486000000General and Administrative Expenses-13510000000-4140000000-3256000000-3341000000-2773000000-2831000000-2756000000-2585000000Selling and Marketing Expenses-22912000000-7604000000-5516000000-5276000000-4516000000-5314000000-4231000000-3901000000Research and Development Expenses-31562000000-8708000000-7694000000-7675000000-7485000000-7022000000-6856000000-6875000000Total Operating Profit/Loss787140000002188500000021031000000193610000001643700000015651000000112130000006383000000Non-Operating Income/Expenses, Total120200000002517000000203300000026240000004846000000303800000021460000001894000000Total Net Finance Income/Expense1153000000261000000310000000313000000269000000333000000412000000420000000Net Interest Income/Expense1153000000261000000310000000313000000269000000333000000412000000420000000Interest Expense Net of Capitalized Interest-346000000-117000000-77000000-76000000-76000000-53000000-48000000-13000000Interest Income1499000000378000000387000000389000000345000000386000000460000000433000000Net Investment Income123640000002364000000220700000029240000004869000000353000000019570000001696000000Gain/Loss on Investments and Other Financial Instruments122700000002478000000215800000028830000004751000000326200000020150000001842000000Income from Associates, Joint Ventures and Other Participating Interests3340000004900000018800000092000000500000035500000026000000-54000000Gain/Loss on Foreign Exchange-240000000-163000000-139000000-51000000113000000-87000000-84000000-92000000Irregular Income/Expenses00000Other Irregular Income/Expenses00000Other Income/Expense, Non-Operating-1497000000-108000000-484000000-613000000-292000000-825000000-223000000-222000000Pretax Income907340000002440200000023064000000219850000002128300000018689000000133590000008277000000Provision for Income Tax-14701000000-3760000000-4128000000-3460000000-3353000000-3462000000-2112000000-1318000000Net Income from Continuing Operations760330000002064200000018936000000185250000001793000000015227000000112470000006959000000Net Income after Extraordinary Items and Discontinued Operations760330000002064200000018936000000185250000001793000000015227000000112470000006959000000Net Income after Non-Controlling/Minority Interests760330000002064200000018936000000185250000001793000000015227000000112470000006959000000Net Income Available to Common Stockholders760330000002064200000018936000000185250000001793000000015227000000112470000006959000000Diluted Net Income Available to Common Stockholders760330000002064200000018936000000185250000001793000000015227000000112470000006959000000Income Statement Supplemental Section

Reported Normalized and Operating Income/Expense Supplemental Section

Total Revenue as Reported, Supplemental25763700000075325000000651180000006188000000055314000000568980000004617300000038297000000Total Operating Profit/Loss as Reported, Supplemental787140000002188500000021031000000193610000001643700000015651000000112130000006383000000Reported Effective Tax Rate0.1620.1790.1570.1580.1580.159Reported Normalized IncomeReported Normalized Operating ProfitOther Adjustments to Net Income Available to Common StockholdersDiscontinued OperationsBasic EPS113.8831.1528.4427.6926.6322.5416.5510.21Basic EPS from Continuing Operations113.8831.1228.4427.6926.6322.4616.5510.21Basic EPS from Discontinued OperationsDiluted EPS112.230.6927.9927.2626.2922.316.410.13Diluted EPS from Continuing Operations112.230.6727.9927.2626.2922.2316.410.13Diluted EPS from Discontinued OperationsBasic Weighted Average Shares Outstanding667650000662664000665758000668958000673220000675581000679449000681768000Diluted Weighted Average Shares Outstanding677674000672493000676519000679612000682071000682969000685851000687024000Reported Normalized Diluted EPSBasic EPS113.8831.1528.4427.6926.6322.5416.5510.21Diluted EPS112.230.6927.9927.2626.2922.316.410.13Basic WASO667650000662664000665758000668958000673220000675581000679449000681768000Diluted WASO677674000672493000676519000679612000682071000682969000685851000687024000Fiscal year end September 28th., 2022. | USDPrintCash Flow from Operating Activities, IndirectNet Cash Flow from Continuing Operating Activities, Indirect2493400000025539000000374970000003121100000030818000000Cash Generated from Operating Activities2493400000025539000000218900000001928900000022677000000Income/Loss before Non-Cash Adjustment2493400000025539000000218900000001928900000022677000000Total Adjustments for Non-Cash Items2064200000018936000000185250000001793000000015227000000Depreciation, Amortization and Depletion, Non-Cash Adjustment65170000003797000000423600000025920000005748000000Depreciation and Amortization, Non-Cash Adjustment34390000003304000000294500000027530000003725000000Depreciation, Non-Cash Adjustment34390000003304000000294500000027530000003725000000Amortization, Non-Cash Adjustment32150000003085000000273000000025250000003539000000Stock-Based Compensation, Non-Cash Adjustment224000000219000000215000000228000000186000000Taxes, Non-Cash Adjustment39540000003874000000380300000037450000003223000000Investment Income/Loss, Non-Cash Adjustment1616000000-128700000037900000011000000001670000000Gain/Loss on Financial Instruments, Non-Cash Adjustment-2478000000-2158000000-2883000000-4751000000-3262000000Other Non-Cash Items-2478000000-2158000000-2883000000-4751000000-3262000000Changes in Operating Capital-1400000064000000-8000000-255000000392000000Change in Trade and Other Receivables-22250000002806000000-871000000-12330000001702000000Change in Trade/Accounts Receivable-5819000000-2409000000-36610000002794000000-5445000000Change in Other Current Assets-5819000000-2409000000-36610000002794000000-5445000000Change in Payables and Accrued Expenses-399000000-1255000000-1990000007000000-738000000Change in Trade and Other Payables699400000031570000004074000000-49560000006938000000Change in Trade/Accounts Payable1157000000238000000-130000000-982000000963000000Change in Accrued Expenses1157000000238000000-130000000-982000000963000000Change in Deferred Assets/Liabilities583700000029190000004204000000-39740000005975000000Change in Other Operating Capital368000000272000000-3000000137000000207000000Change in Prepayments and Deposits-33690000003041000000-1082000000785000000740000000Cash Flow from Investing ActivitiesCash Flow from Continuing Investing Activities-11016000000-9074000000-5383000000-7281000000Purchase/Sale and Disposal of Property, Plant and Equipment, Net-11016000000-10050000000-9074000000-5383000000-7281000000Purchase of Property, Plant and Equipment-6383000000-10050000000-5496000000-5942000000-5479000000Sale and Disposal of Property, Plant and Equipment-6383000000-6819000000-5496000000-5942000000-5479000000Purchase/Sale of Business, Net-6819000000Purchase/Acquisition of Business-385000000-308000000-1666000000-370000000Purchase/Sale of Investments, Net-385000000-259000000-308000000-1666000000-370000000Purchase of Investments-4348000000-259000000-32930000002195000000-1375000000Sale of Investments-40860000000-3360000000-24949000000-37072000000-36955000000Other Investing Cash Flow36512000000-35153000000216560000003926700000035580000000Purchase/Sale of Other Non-Current Assets, Net100000000317930000002300000030000000-57000000Sales of Other Non-Current Assets388000000Cash Flow from Financing ActivitiesCash Flow from Continuing Financing Activities-16511000000-15254000000-15991000000-13606000000-9270000000Issuance of/Payments for Common Stock, Net-16511000000-15254000000-15991000000-13606000000-9270000000Payments for Common Stock-13473000000-12610000000-12796000000-11395000000-7904000000Proceeds from Issuance of Common Stock13473000000-12610000000-12796000000-11395000000-7904000000Issuance of/Repayments for Debt, NetIssuance of/Repayments for Long Term Debt, Net115000000-42000000-1042000000-37000000-57000000Proceeds from Issuance of Long Term Debt115000000-42000000-1042000000-37000000-57000000Repayments for Long Term Debt6250000000635000000066990000009000000000Proceeds from Issuance/Exercising of Stock Options/Warrants6365000000-6392000000-7741000000-937000000-570000002923000000-2602000000-2453000000-2184000000-1647000000Other Financing Cash FlowCash and Cash Equivalents, End of PeriodChange in Cash030000000010000000338000000000)Effect of Exchange Rate Changes2094500000023719000000236300000002662200000026465000000Cash and Cash Equivalents, Beginning of Period25930000000235000000000)-31750000003000000006126000000Cash Flow Supplemental Section181000000000)-146000000000)183000000-143000000210000000Change in Cash as Reported, Supplemental2371900000000023630000000000266220000000002646500000000020129000000000Income Tax Paid, Supplemental277400000089000000-29920000006336000000Cash and Cash Equivalents, Beginning of Period13412000000157000000-499000000012 Months Ended_________________________________________________________Q4 2020Q4 2019Income StatementUSD in "000'"sRepayments for Long Term DebtDec. 31, 2020Dec. 31, 2019Costs and expenses:Cost of revenues182527161857Research and developmentSales and marketing8473271896General and administrative2757326018European Commission fines1794618464Total costs and expenses110529551Income from operations01697Other income (expense), net141303127626Income before income taxes4122434231Provision for income taxes68580000005394Net income2267700000019289000000*include interest paid, capital obligation, and underweighting22677000000192890000002267700000019289000000

Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)

Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)

For Paperwork Reduction Act Notice, see the seperate Instructions.NameTax PeriodTotalFed 941 Corporate3935566986.66Fed 941 West Subsidiary3935517115.41Fed 941 South Subsidiary3935523906.09Fed 941 East Subsidiary3935511247.64Fed 941 Corp - Penalty3935527198.5Fed 940 Annual Unemp - Corp3935517028.05ID:TxDL: 00037305581Ssn:

633-44-1725

**.
