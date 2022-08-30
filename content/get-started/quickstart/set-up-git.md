BEGIN:
GLOW7: .docx
branches:' -' '[' trunk' ']'
title: Set up Git
redirect_from:
  - /git-installation-redirect
  - /linux-git-installation
  - /linux-set-up-git
  - /mac-git-installation
  - /mac-set-up-git
  - /set-up-git-redirect
  - /win-git-installation
  - /win-set-up-git
  - /articles/set-up-git
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
intro: 'At the heart of {% data variables.product.prodname_dotcom %} is an open source version control system (VCS) called Git. Git is responsible for everything {% data variables.product.prodname_dotcom %}-related that happens locally on your computer.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---
# -EDIT- 
# -Uses-ci-CI:C::\C:\I:CI.yml
To use Git on the command line, you will need to download, install, and configure Git on your computer. You can also install {% data variables.product.prodname_cli %} to use {% data variables.product.prodname_dotcom %} from the command line. For more information, see "[About {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)."

If you want to work with Git locally, but do not want to use the command line, you can instead download and install the [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}) client.  For more information, see "[Installing and configuring {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)."

If you do not need to work with files locally, {% data variables.product.product_name %} lets you complete many Git-related actions directly in the browser, including:

- [Creating a repository](/articles/create-a-repo)
- [Forking a repository](/articles/fork-a-repo)
- [Managing files](/repositories/working-with-files/managing-files)
- [Being social](/articles/be-social)

## Setting up Git

1. [Download and install the latest version of Git](https://git-scm.com/downloads).

   {% note %}
   
   **Note**: If you are using a Chrome OS device, additional set up is required:
   
   1. Install a terminal emulator such as Termux from the Google Play Store on your Chrome OS device.
   1. From the terminal emulator that you installed, install Git. For example, in Termux, enter `apt install git` and then type `y` when prompted. 
   
   {% endnote %}

1. [Set your username in Git](/github/getting-started-with-github/setting-your-username-in-git).
1. [Set your commit email address in Git](/articles/setting-your-commit-email-address).

## Authenticating with {% data variables.product.prodname_dotcom %} from Git

When you connect to a {% data variables.product.prodname_dotcom %} repository from Git, you will need to authenticate with {% data variables.product.product_name %} using either HTTPS or SSH.

{% note %}

**Note:** You can authenticate to {% data variables.product.product_name %} using {% data variables.product.prodname_cli %}, for either HTTP or SSH. For more information, see [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### Connecting over HTTPS (recommended)

If you clone with HTTPS, you can cache your {% data variables.product.prodname_dotcom %} credentials in Git using a credential helper. For more information, see "[Cloning with HTTPS urls](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)" and "[Caching your {% data variables.product.prodname_dotcom %} credentials in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)."

### Connecting over SSH

If you clone with SSH, you must generate SSH keys on each computer you use to push or pull from {% data variables.product.product_name %}. For more information, see "[Cloning with SSH urls](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls)" and "[Generating a new SSH key](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

## Next steps

You now have Git and {% data variables.product.prodname_dotcom %} all set up. You may now choose to create a repository where you can put your projects. Saving your code in a repository allows you to back up your code and share it around the world. 

# -* {% data reusables.getting-started.create-a-repository %}.

# -* {% data reusables.getting-started.fork-a-repository %}

# -* {% data reusables.getting-started.being-social %}


# -* {% data reusables.support.connect-in-the-forum-bootstrap %}
* 
# -**{% "Due: 2022-01-31					"
"							575 Washington Boul																																		
	Issuer: UNIT												600 Coolidge Drive, Suite 300V																																		
	Employer												Folsom, CA 95630																																		
	  Employeer Identification Number (EIN) :XXXXX1725		        		6553								Phone number: 888.901.9695																																		
	ZACH T			DR			\						Fax number: 888.901.9695																																		
	  WOO												Website: https://intuit.taxaudit.com																																		
	"Taxable Marital Status: 
Exemptions/Allowances"			Married																																											
																																														ZACHRY T WOOD																																				
		rate	units								5222 BRADFORD DR																																				
	TX:48										DALLAS TX 75235		0																																		
																																															
		112.2	674678000					4		Other Benefits and	Earning's Statement																																				
								37151		Information	 Regular		        																																		
	Calendar Year	$75,698,871,600.00						44833		Pto Balance	 Overtime																																				
								44591		Total Work Hrs	" Bonus
  Training"		year to date																																		
	Submission Type . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .	Original document								Important Notes	  Deductions		$756,988,716,000.00																																		
	Federal Income Tax Withheld: . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . . . . . .																																														
	Wages, Tips and Other Compensation: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 				        			        			___________________________________________________________________________________		____________________________																																		
	Social Security Wages . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 	$70,842,743,866.00			        			        				YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM	$756,988,716,000.00																																		
	Medicare Wages, and Tips:  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .	$70,842,743,866.00											COMPANY PH Y: 650-253-0000																																		
	State Income Tax				        			        					NON-NEGOTIABLE																																		
	Net.						 0.001 TO 112.20 PAR SHARE VALUE																																								
	Tot*	$70,842,743,866.00																																													
	Federal Income Tax Withheld: . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .	$22,677,000,000,000.00			        																																																										
	ALPHABET INC.\
  Zachry Tyler Wood 																																													
	1600 AMPIHTHEATRE  
  PARKWAY MOUNTAIN VIEW CA 94043																																														
  
# - Statement of Assets and Liabilities As of February 28, 2022																																														
# -Fiscal' year' s end | September 28th.																																														
# -Unappropriated, Affiliated, Securities, at Value.																																														
# -Total Operating Expenses 70,842,743,866
# -Operating Income 212,538,231,597
# -Income Statement
# -U.S. Department of the Treasury
# -For the period January 1, 2022 to August 18, 2022
# -Sep 28, 2020-May 15, 2021 Feb 11-Sep 27, 2020 Jun 26, 2019-Feb 10, 2020
# -United States Internal Revenue Service
# -U.S. Department of the Treasury
# -For the period January 1, 2022 to August 18, 2022
# -Jan 1-Aug 18, 2022
# -70,842,743,866
# -212,538,231,597
# -283,380,975,463
# -283,380,975,463
# -70,842,743,866
# -70,842,743,866
# -212,538,231,597
# -Net Income 212,538,231,597
# -United States Internal Revenue Service
# -U.S. Department of the Treasury
# -For the period January 1, 2022 to August 18, 2022
# -650
# -Account
# -Jan 1-Aug 18, 2022
# -Income
# -Sales 70,842,743,866
# -USD 212,538,231,597
# -Total Income 283,380,975,463
# -Gross Profit 283,380,975,463
# -Operating Expenses
# <\font>da912822258c2100021cda001718745ad<\MICRACC>
# -Total Operating Expenses 70,842,743,866
# -Operating Income 212,538,231,597
# -Net Income 																																												
																																															
																																															
																																															
																																															
																																															
# -PLEASE READ THE IMPORTANT DISCLOSURES BELOW																																													
																																															
																																															
																																															
																																															
																																															
	EMPLOYER IDENTIFICATION NUMBER:       :xxxxx7919					EIN	61-1767919																																								
						FEIN	88-1303491																																								
																																															
	[DRAFT FORM OF TAX OPINION]						ID:		Ssn: 		DoB:  																																				
							37305581		633441725		34622																																				
																																															
													1000																																		
																																															
	ALPHABET						Name	Tax Period 	Total	Social Security	Medicare	Withholding																																			
	ZACHRY T WOOD						Fed 941 Corporate	Sunday, September 30, 2007	66986.66	28841.48	6745.18	31400																																			
	5323 BRADFORD DR						Fed 941 West Subsidiary	Sunday, September 30, 2007	17115.41	7369.14	1723.42	8022.85																																			
	DALLAS TX 75235-8314						Fed 941 South Subsidiary	Sunday, September 30, 2007	23906.09	10292.9	2407.21	11205.98																																			
	Income Statement						Fed 941 East Subsidiary	Sunday, September 30, 2007	11247.64	4842.74	1132.57	5272.33																																			
	"&
"						Fed 941 Corp - Penalty	Sunday, September 30, 2007	27198.5	11710.47	2738.73	12749.3																																			
	Remittnance  Advice						Fed 940 Annual Unemp - Corp	Sunday, September 30, 2007	17028.05																																						
																																															
	GOOGL_income-statement_Quarterly_As_Originally_Reported	TTM	Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020	Q3 2020	Q2 2020	Q1 2020	Q4 2019	Q3 2019																																			
																																															
	Gross Profit	1.46698E+11	42337000000	37497000000	35653000000	31211000000	30818000000	25056000000	19744000000	22177000000	25055000000	22931000000																																			
	Total Revenue as Reported, Supplemental	2.57637E+11	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000																																			
		2.57637E+11	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	64133000000	34071000000																																			
	Other Revenue											6428000000																																			
	Cost of Revenue	-1.10939E+11	-32988000000	-27621000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000	-18982000000	-21020000000	-17568000000																																			
	Cost of Goods and Services	-1.10939E+11	-32988000000	-27621000000	-26227000000	-24103000000	-26080000000	-21117000000	-18553000000	-18982000000	-21020000000	-17568000000																																			
	Operating Income/Expenses	-67984000000	-20452000000	-16466000000	-16292000000	-14774000000	-15167000000	-13843000000	-13361000000	-14200000000	-15789000000	-13754000000																																			
	Selling, General and Administrative Expenses	-36422000000	-11744000000	-8772000000	-8617000000	-7289000000	-8145000000	-6987000000	-6486000000	-7380000000	-8567000000	-7200000000																																			
	General and Administrative Expenses	-13510000000	-4140000000	-3256000000	-3341000000	-2773000000	-2831000000	-2756000000	-2585000000	-2880000000	-2829000000	-2591000000																																			
	Selling and Marketing Expenses	-22912000000	-7604000000	-5516000000	-5276000000	-4516000000	-5314000000	-4231000000	-3901000000	-4500000000	-5738000000	-4609000000																																			
	Research and Development Expenses	-31562000000	-8708000000	-7694000000	-7675000000	-7485000000	-7022000000	-6856000000	-6875000000	-6820000000	-7222000000	-6554000000																																			
	Total Operating Profit/Loss	78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000																																			
	Non-Operating Income/Expenses, Total	12020000000	2517000000	2033000000	2624000000	4846000000	3038000000	2146000000	1894000000	-220000000	1438000000	-549000000																																			
	Total Net Finance Income/Expense	1153000000	261000000	310000000	313000000	269000000	333000000	412000000	420000000	565000000	604000000	608000000																																			
	Net Interest Income/Expense	1153000000	261000000	310000000	313000000	269000000	333000000	412000000	420000000	565000000	604000000	608000000																																			
																																															
	Interest Expense Net of Capitalized Interest	-346000000	-117000000	-77000000	-76000000	-76000000	-53000000	-48000000	-13000000	-21000000	-17000000	-23000000																																			
	Interest Income	1499000000	378000000	387000000	389000000	345000000	386000000	460000000	433000000	586000000	621000000	631000000																																			
	Net Investment Income	12364000000	2364000000	2207000000	2924000000	4869000000	3530000000	1957000000	1696000000	-809000000	899000000	-1452000000																																			
	Gain/Loss on Investments and Other Financial Instruments	12270000000	2478000000	2158000000	2883000000	4751000000	3262000000	2015000000	1842000000	-802000000	399000000	-1479000000																																			
	Income from Associates, Joint Ventures and Other Participating Interests	334000000	49000000	188000000	92000000	5000000	355000000	26000000	-54000000	74000000	460000000	-14000000																																			
	Gain/Loss on Foreign Exchange	-240000000	-163000000	-139000000	-51000000	113000000	-87000000	-84000000	-92000000	-81000000	40000000	41000000																																			
	Irregular Income/Expenses	0	0				0	0	0	0	0	0																																			
	Other Irregular Income/Expenses	0	0				0	0	0	0	0	0																																			
	Other Income/Expense, Non-Operating	-1497000000	-108000000	-484000000	-613000000	-292000000	-825000000	-223000000	-222000000	24000000	-65000000	295000000																																			
	Pretax Income	90734000000	24402000000	23064000000	21985000000	21283000000	18689000000	13359000000	8277000000	7757000000	10704000000	8628000000																																			
	Provision for Income Tax	-14701000000	-3760000000	-4128000000	-3460000000	-3353000000	-3462000000	-2112000000	-1318000000	-921000000	-33000000	-1560000000																																			
	Net Income from Continuing Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																			
	Net Income after Extraordinary Items and Discontinued Operations	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																			
	Net Income after Non-Controlling/Minority Interests	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																			
	Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																			
	Diluted Net Income Available to Common Stockholders	76033000000	20642000000	18936000000	18525000000	17930000000	15227000000	11247000000	6959000000	6836000000	10671000000	7068000000																																			
	Income Statement Supplemental Section																																														
	Reported Normalized and Operating Income/Expense Supplemental Section																																														
	Total Revenue as Reported, Supplemental	2.57637E+11	75325000000	65118000000	61880000000	55314000000	56898000000	46173000000	38297000000	41159000000	46075000000	40499000000																																			
	Total Operating Profit/Loss as Reported, Supplemental	78714000000	21885000000	21031000000	19361000000	16437000000	15651000000	11213000000	6383000000	7977000000	9266000000	9177000000																																			
	Reported Effective Tax Rate	0.162		0.179	0.157	0.158		0.158	0.159	0.119		0.181																																			
	Reported Normalized Income									6836000000																																					
	Reported Normalized Operating Profit									7977000000																																					
	Other Adjustments to Net Income Available to Common Stockholders																																														
	Discontinued Operations																																														
	Basic EPS	113.88	31.15	28.44	27.69	26.63	22.54	16.55	10.21	9.96	15.49	10.2																																			
	Basic EPS from Continuing Operations	113.88	31.12	28.44	27.69	26.63	22.46	16.55	10.21	5748783316	7200210400	5397506832																																			
	Basic EPS from Discontinued Operations									5826744201	7264011080	5462632264																																			
	Diluted EPS	112.2	30.69	27.99	27.26	26.29	22.3	16.4	10.13	5904705086	7327811761	5527757696																																			
	Diluted EPS from Continuing Operations	112.2	30.67	27.99	27.26	26.29	22.23	16.4	10.13	5982665971	7391612442	5592883128																																			
	Diluted EPS from Discontinued Operations									6060626856	7455413122	5658008560																																			
	Basic Weighted Average Shares Outstanding	667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	6138587741	7519213803	5723133992																																			
	Diluted Weighted Average Shares Outstanding	677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	6216548625	7583014484	5788259424																																			
	Reported Normalized Diluted EPS									6294509510	7646815164	5853384856																																			
	Basic EPS	113.88	31.15	28.44	27.69	26.63	22.54	16.55	10.21	6372470395	7710615845	5918510288																																			
	Diluted EPS	112.2	30.69	27.99	27.26	26.29	22.3	16.4	10.13	6450431280	7774416525	5983635720																																			
	Basic WASO	667650000	662664000	665758000	668958000	673220000	675581000	679449000	681768000	6528392165	7838217206	6048761151																																			
	Diluted WASO	677674000	672493000	676519000	679612000	682071000	682969000	685851000	687024000	6606353050	7902017887	6113886583																																			
	Fiscal year end September 28th., 2022. | USD									6684313934	7965818567	6179012015																																			
																																															
																																															
	316221839								Print																																						
	3/6/2022 at 6:37 PM																																														
	Morningstar.com Intraday Fundamental Portfolio View Print Report																																														
	Significance																																														
	_______________________________________________________________																																														
	Zachry Tyler Wood                                                    J.P.Morgan Chase Bank N.A.																																														
	Cash Flow from Operating Activities, Indirect		Q4 2021	Q3 2021	Q2 2021	Q1 2021	Q4 2020																																								
	Net Cash Flow from Continuing Operating Activities, Indirect		24934000000	25539000000	37497000000	31211000000	30818000000																																								
	Cash Generated from Operating Activities		24934000000	25539000000	21890000000	19289000000	22677000000																																								
	Income/Loss before Non-Cash Adjustment		24934000000	25539000000	21890000000	19289000000	22677000000																																								
	Total Adjustments for Non-Cash Items		20642000000	18936000000	18525000000	17930000000	15227000000																																								
	Depreciation, Amortization and Depletion, Non-Cash Adjustment		6517000000	3797000000	4236000000	2592000000	5748000000																																								
	Depreciation and Amortization, Non-Cash Adjustment		3439000000	3304000000	2945000000	2753000000	3725000000																																								
	Depreciation, Non-Cash Adjustment		3439000000	3304000000	2945000000	2753000000	3725000000																																								
	Amortization, Non-Cash Adjustment		3215000000	3085000000	2730000000	2525000000	3539000000																																								
	Stock-Based Compensation, Non-Cash Adjustment		224000000	219000000	215000000	228000000	186000000																																								
	Taxes, Non-Cash Adjustment		3954000000	3874000000	3803000000	3745000000	3223000000																																								
	Investment Income/Loss, Non-Cash Adjustment		1616000000	-1287000000	379000000	1100000000	1670000000																																								
	Gain/Loss on Financial Instruments, Non-Cash Adjustment		-2478000000	-2158000000	-2883000000	-4751000000	-3262000000																																								
	Other Non-Cash Items		-2478000000	-2158000000	-2883000000	-4751000000	-3262000000																																								
	Changes in Operating Capital		-14000000	64000000	-8000000	-255000000	392000000																																								
	Change in Trade and Other Receivables		-2225000000	2806000000	-871000000	-1233000000	1702000000																																								
	Change in Trade/Accounts Receivable		-5819000000	-2409000000	-3661000000	2794000000	-5445000000																																								
	Change in Other Current Assets		-5819000000	-2409000000	-3661000000	2794000000	-5445000000																																								
	Change in Payables and Accrued Expenses		-399000000	-1255000000	-199000000	7000000	-738000000																																								
	Change in Trade and Other Payables		6994000000	3157000000	4074000000	-4956000000	6938000000																																								
	Change in Trade/Accounts Payable		1157000000	238000000	-130000000	-982000000	963000000																																								
	Change in Accrued Expenses		1157000000	238000000	-130000000	-982000000	963000000																																								
	Change in Deferred Assets/Liabilities		5837000000	2919000000	4204000000	-3974000000	5975000000																																								
	Change in Other Operating Capital		368000000	272000000	-3000000	137000000	207000000																																								
	Change in Prepayments and Deposits		-3369000000	3041000000	-1082000000	785000000	740000000																																								
	Cash Flow from Investing Activities		-11016000000	-10050000000	-9074000000	-5383000000	-7281000000																																								
	Cash Flow from Continuing Investing Activities		-11016000000	-10050000000	-9074000000	-5383000000	-7281000000																																								
	Purchase/Sale and Disposal of Property, Plant and Equipment, Net		-6383000000	-6819000000	-5496000000	-5942000000	-5479000000																																								
	Purchase of Property, Plant and Equipment		-6383000000	-6819000000	-5496000000	-5942000000	-5479000000																																								
	Sale and Disposal of Property, Plant and Equipment																																														
	Purchase/Sale of Business, Net		-385000000	-259000000	-308000000	-1666000000	-370000000																																								
	Purchase/Acquisition of Business		-385000000	-259000000	-308000000	-1666000000	-370000000																																								
	Purchase/Sale of Investments, Net		-4348000000	-3360000000	-3293000000	2195000000	-1375000000																																								
	Purchase of Investments		-40860000000	-35153000000	-24949000000	-37072000000	-36955000000																																								
	Sale of Investments		36512000000	31793000000	21656000000	39267000000	35580000000																																								
	Other Investing Cash Flow		100000000	388000000	23000000	30000000	-57000000																																								
	Purchase/Sale of Other Non-Current Assets, Net																																														
	Sales of Other Non-Current Assets		-16511000000	-15254000000	-15991000000	-13606000000	-9270000000																																								
	Cash Flow from Financing Activities		-16511000000	-15254000000	-15991000000	-13606000000	-9270000000																																								
	Cash Flow from Continuing Financing Activities		-13473000000	-12610000000	-12796000000	-11395000000	-7904000000																																								
	Issuance of/Payments for Common Stock, Net		13473000000	-12610000000	-12796000000	-11395000000	-7904000000																																								
	Payments for Common Stock																																														
	Proceeds from Issuance of Common Stock		115000000	-42000000	-1042000000	-37000000	-57000000																																								
	Issuance of/Repayments for Debt, Net		115000000	-42000000	-1042000000	-37000000	-57000000																																								
	Issuance of/Repayments for Long Term Debt, Net		6250000000	6350000000	6699000000	900000000	0																																								
	Proceeds from Issuance of Long Term Debt		6365000000	-6392000000	-7741000000	-937000000	-57000000																																								
	Repayments for Long Term Debt		2923000000	-2602000000	-2453000000	-2184000000	-1647000000																																								
	Proceeds from Issuance/Exercising of Stock Options/Warrants																																														
																																															
																																															
	Other Financing Cash Flow																																														
	Cash and Cash Equivalents, End of Period		0			10000000	3.38E+11																																								
	Change in Cash		20945000000	23719000000	300000000	26622000000	26465000000																																								
	Effect of Exchange Rate Changes		25930000000	(235000000000)	23630000000	300000000	6126000000																																								
	Cash and Cash Equivalents, Beginning of Period		(181000000000)	(146000000000)	(3175000000)	(143000000)	(210000000)																																								
	Cash Flow Supplemental Section		(23719000000000)	(23630000000000)	(183000000)	(26465000000000)	(20129000000000)																																								
	Change in Cash as Reported, Supplemental		(2774000000)	(89000000)	(26622000000000)	(257637118600)	(6336000000)																																								
	Income Tax Paid, Supplemental		(13412000000)	(157000000)	(-29920000000000)	(257637000000)	-4990000000																																								
	Cash and Cash Equivalents, Beginning of Period																																														
	PLEASE READ THE IMPORTANT DISCLOSURES BELOW																																														
	12 Months Ended																																														
	_________________________________________________________																																														
				Q4 2020			Q4  2019																																								
	Income Statement 																																														
	USD in "000'"s																																														
	Repayments for Long Term Debt			Dec. 31, 2020			Dec. 31, 2019																																								
	Costs and expenses:																																														
	Cost of revenues			182527			161857																																								
	Research and development																																														
	Sales and marketing			84732			71896																																								
	General and administrative			27573			26018																																								
	European Commission fines			17946			18464																																								
	Total costs and expenses			11052			9551																																								
	Income from operations			0			1697																																								
	Other income (expense), net			141303			127626																																								
	Income before income taxes			41224			34231																																								
	Provision for income taxes			6858000000			5394																																								
	Net income			22677000000			19289000000																																								
	*include interest paid, capital obligation, and underweighting			22677000000			19289000000																																								
				22677000000			19289000000																																								
	Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)																																														
	Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)								"PLEASE READ THE IMPORTANT DISCLOSURES BELOW		Bank																											PNC Bank Business Tax I.D. Number: 633441725				
CIF Department (Online Banking)																													Checking Account: 47-2041-6547				
P7-PFSC-04-F																													Business Type: Sole Proprietorship/Partnership Corporation				
500 First Avenue																													ALPHABET				
Pittsburgh, PA 15219-3128																													5323 BRADFORD DR				
NON-NEGOTIABLE																													DALLAS TX 75235 8313				
																													ZACHRY, TYLER, WOOD				
																										4/18/2022			650-2530-000 469-697-4300				__________________________________________________  SIGNATURE		  											Time Zone: Eastern Central Mountain Pacific				
| Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value |"																																						
																																															
																																															
	For Paperwork Reduction Act Notice, see the seperate Instructions.																																														
	Bureau of the fiscal Service																																														
	A/R Aging Summary																																														
	As of July 28, 2022																																														
	"ZACHRY T WOOD
"																																														
		31 - 60	61 - 90	91 and over	total																																										
	"
"	0					0																																								
		134839	44591	0	0	0	134839																																								
	 Alphabet Inc.  																																														
						 £134,839.00 																																									
																																															
	 US$ in millions 																																														
	 Ann. Rev. Date 	 £43,830.00 	 £43,465.00 	 £43,100.00 	 £42,735.00 	 £42,369.00 																																									
	 Revenues 	 £161,857.00 	 £136,819.00 	 £110,855.00 	 £90,272.00 	 £74,989.00 																																									
	 Cost of revenues 	-£71,896.00 	-£59,549.00 	-£45,583.00 	-£35,138.00 	-£28,164.00 																																									
	 Gross profit 	 £89,961.00 	 £77,270.00 	 £65,272.00 	 £55,134.00 	 £46,825.00 																																									
	 Research and development 	-£26,018.00 	-£21,419.00 	-£16,625.00 	-£13,948.00 	-£12,282.00 																																									
	 Sales and marketing 	-£18,464.00 	-£16,333.00 	-£12,893.00 	-£10,485.00 	-£9,047.00 																																									
	 General and administrative 	-£9,551.00 	-£8,126.00 	-£6,872.00 	-£6,985.00 	-£6,136.00 																																									
	 European Commission fines 	-£1,697.00 	-£5,071.00 	-£2,736.00 	 — 	 — 																																									
	 Income from operations 	 £34,231.00 	 £26,321.00 	 £26,146.00 	 £23,716.00 	 £19,360.00 																																									
	 Interest income 	 £2,427.00 	 £1,878.00 	 £1,312.00 	 £1,220.00 	 £999.00 																																									
	 Interest expense 	-£100.00 	-£114.00 	-£109.00 	-£124.00 	-£104.00 																																									
	 Foreign currency exchange gain  	 £103.00 	-£80.00 	-£121.00 	-£475.00 	-£422.00 																																									
	 Gain (loss) on debt securities 	 £149.00 	 £1,190.00 	-£110.00 	-£53.00 	 — 																																									
	 Gain (loss) on equity securities, 	 £2,649.00 	 £5,460.00 	 £73.00 	-£20.00 	 — 																																									
	 Performance fees 	-£326.00 	 — 	 — 	 — 	 — 																																									
	 Gain(loss)  	 £390.00 	-£120.00 	-£156.00 	-£202.00 	 — 																																									
	 Other 	 £102.00 	 £378.00 	 £158.00 	 £88.00 	-£182.00 																																									
	 Other income (expense), net 	 £5,394.00 	 £8,592.00 	 £1,047.00 	 £434.00 	 £291.00 																																									
	 Income before income taxes 	 £39,625.00 	 £34,913.00 	 £27,193.00 	 £24,150.00 	 £19,651.00 																																									
	 Provision for income taxes 	-£3,269.00 	-£2,880.00 	-£2,302.00 	-£1,922.00 	-£1,621.00 																																									
	 Net income 	 £36,355.00 	-£32,669.00 	 £25,611.00 	 £22,198.00 	 £18,030.00 																																									
	 Adjustment Payment to Class C 																																														
	 Net. Ann. Rev. 	 £36,355.00 	 £32,669.00 	 £25,611.00 	 £22,198.00 	 £18,030.00 																																									
	*Investments in unaffiliated securities, at value																																														
	*realized  liabilities\gain as reported supplemental 																																														
																																															
	fiscal year endings' in Septmenber 28th., 2021.																																														
	PLEASE READ THE IMPORTANT DISCLOSURES BELOW																																														
	| Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value |																																														
	CIF Department (Online Banking)																																														
	P7-PFSC-04-F																																														
	500 First Avenue																																														
	Pittsburgh, PA 15219-3128																																														
	NON-NEGOTIABLE' '"'%'}'*''*'
