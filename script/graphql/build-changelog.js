#!/usr/bin/env node
import { diff, ChangeType } from '@graphql-inspector/core'
import { loadSchema } from '@graphql-tools/load'
import fs from 'fs'
import renderContent from '../../lib/render-content/index.js'

/**
 * Tag `changelogEntry` with `date: YYYY-mm-dd`, then prepend it to the JSON
 * structure written to `targetPath`. (`changelogEntry` and that file are modified in place.)
 * @param {object} changelogEntry
 * @param {string} targetPath
 * @return {void}
 */
export function prependDatedEntry(changelogEntry, targetPath) {
  // Build a `yyyy-mm-dd`-formatted date string
  // and tag the changelog entry with it
  const todayString = new Date().toISOString().slice(0, 10)
  changelogEntry.date = todayString

  const previousChangelogString = fs.readFileSync(targetPath)
  const previousChangelog = JSON.parse(previousChangelogString)
  // add a new entry to the changelog data
  previousChangelog.unshift(changelogEntry)
  // rewrite the updated changelog
  fs.writeFileSync(targetPath, JSON.stringify(previousChangelog, null, 2))
}

/**
 * Compare `oldSchemaString` to `newSchemaString`, and if there are any
 * changes that warrant a changelog entry, return a changelog entry.
 * Based on the parsed `previews`, identify changes that are under a preview.
 * Otherwise, return null.
 * @param {string} [oldSchemaString]
 * @param {string} [newSchemaString]
 * @param {Array<object>} [previews]
 * @param {Array<object>} [oldUpcomingChanges]
 * @param {Array<object>} [newUpcomingChanges]
 * @return {object?}
 */
export async function createChangelogEntry(
  oldSchemaString,
  newSchemaString,
  previews,
  oldUpcomingChanges,
  newUpcomingChanges
) {
  // Create schema objects out of the strings
  const oldSchema = await loadSchema(oldSchemaString, {})
  const newSchema = await loadSchema(newSchemaString, {})

  // Generate changes between the two schemas
  const changes = await diff(oldSchema, newSchema)
  const changesToReport = []
  changes.forEach(function (change) {
    if (CHANGES_TO_REPORT.includes(change.type)) {
      changesToReport.push(change)
    } else if (CHANGES_TO_IGNORE.includes(change.type)) {
      // Do nothing
    } else {
      throw new Error(
        'This change type should be added to CHANGES_TO_REPORT or CHANGES_TO_IGNORE: ' + change.type
      )
    }
  })

  const { schemaChangesToReport, previewChangesToReport } = segmentPreviewChanges(
    changesToReport,
    previews
  )

  const addedUpcomingChanges = newUpcomingChanges.filter(function (change) {
    // Manually check each of `newUpcomingChanges` for an equivalent entry
    // in `oldUpcomingChanges`.
    return !oldUpcomingChanges.find(function (oldChange) {
      return (
        oldChange.location === change.location &&
        oldChange.date === change.date &&
        oldChange.description === change.description
      )
    })
  })

  // If there were any changes, create a changelog entry
  if (
    schemaChangesToReport.length > 0 ||
    previewChangesToReport.length > 0 ||
    addedUpcomingChanges.length > 0
  ) {
    const changelogEntry = {
      schemaChanges: [],
      previewChanges: [],
      upcomingChanges: [],
    }

    const cleanedSchemaChanges = cleanMessagesFromChanges(schemaChangesToReport)
    const renderedScheamChanges = await Promise.all(
      cleanedSchemaChanges.map(async (change) => {
        return await renderContent(change)
      })
    )
    const schemaChange = {
      title: 'The GraphQL schema includes these changes:',
      // Replace single quotes which wrap field/argument/type names with backticks
      changes: renderedScheamChanges,
    }
    changelogEntry.schemaChanges.push(schemaChange)

    for (const previewTitle in previewChangesToReport) {
      const previewChanges = previewChangesToReport[previewTitle]
      const cleanedPreviewChanges = cleanMessagesFromChanges(previewChanges.changes)
      const renderedPreviewChanges = await Promise.all(
        cleanedPreviewChanges.map(async (change) => {
          return renderContent(change)
        })
      )
      const cleanTitle = cleanPreviewTitle(previewTitle)
      const entryTitle =
        'The [' +
        cleanTitle +
        '](/graphql/overview/schema-previews#' +
        previewAnchor(cleanTitle) +
        ') includes these changes:'
      changelogEntry.previewChanges.push({
        title: entryTitle,
        changes: renderedPreviewChanges,
      })
    }

    if (addedUpcomingChanges.length > 0) {
      const cleanedUpcomingChanges = addedUpcomingChanges.map((change) => {
        const location = change.location
        const description = change.description
        const date = change.date.split('T')[0]
        return 'On member `' + location + '`:' + description + ' **Effective ' + date + '**.'
      })
      const renderedUpcomingChanges = await Promise.all(
        cleanedUpcomingChanges.map(async (change) => {
          return await renderContent(change)
        })
      )
      changelogEntry.upcomingChanges.push({
        title: 'The following changes will be made to the schema:',
        changes: renderedUpcomingChanges,
      })
    }

    return changelogEntry
  } else {
    return null
  }
}

/**
 * Prepare the preview title from github/github source for the docs.
 * @param {string} title
 * @return {string}
 */
export function cleanPreviewTitle(title) {
  if (title === 'UpdateRefsPreview') {
    title = 'Update refs preview'
  } else if (title === 'MergeInfoPreview') {
    title = 'Merge info preview'
  } else if (!title.endsWith('preview')) {
    title = title + ' preview'
  }
  return title
}

/**
 * Turn the given title into an HTML-ready anchor.
 * (ported from graphql-docs/lib/graphql_docs/update_internal_developer/change_log.rb#L281)
 * @param {string} [previewTitle]
 * @return {string}
 */
export function previewAnchor(previewTitle) {
  return previewTitle
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]/g, '')
}

/**
 * Turn changes from graphql-inspector into messages for the HTML changelog.
 * @param {Array<object>} changes
 * @return {Array<string>}
 */
export function cleanMessagesFromChanges(changes) {
  return changes.map(function (change) {
    // replace single quotes around graphql names with backticks,
    // to match previous behavior from graphql-schema-comparator
    return change.message.replace(/'([a-zA-Z. :!]+)'/g, '`$1`')
  })
}

/**
 * Split `changesToReport` into two parts,
 * one for changes in the main schema,
 * and another for changes that are under preview.
 * (Ported from /graphql-docs/lib/graphql_docs/update_internal_developer/change_log.rb#L230)
 * @param {Array<object>} changesToReport
 * @param {object} previews
 * @return {object}
 */
export function segmentPreviewChanges(changesToReport, previews) {
  // Build a map of `{ path => previewTitle` }
  // for easier lookup of change to preview
  const pathToPreview = {}
  previews.forEach(function (preview) {
    preview.toggled_on.forEach(function (path) {
      pathToPreview[path] = preview.title
    })
  })
  const schemaChanges = []
  const changesByPreview = {}

  changesToReport.forEach(function (change) {
    // For each change, see if its path _or_ one of its ancestors
    // is covered by a preview. If it is, mark this change as belonging to a preview
    const pathParts = change.path.split('.')
    let testPath = null
    let previewTitle = null
    let previewChanges = null
    while (pathParts.length > 0 && !previewTitle) {
      testPath = pathParts.join('.')
      previewTitle = pathToPreview[testPath]
      // If that path didn't find a match, then we'll
      // check the next ancestor.
      pathParts.pop()
    }
    if (previewTitle) {
      previewChanges =
        changesByPreview[previewTitle] ||
        (changesByPreview[previewTitle] = {
          title: previewTitle,
          changes: [],
        })
      previewChanges.changes.push(change)
    } else {
      schemaChanges.push(change)
    }
  })
  return { schemaChangesToReport: schemaChanges, previewChangesToReport: changesByPreview }
}

// We only want to report changes to schema structure.
// Deprecations are covered by "upcoming changes."
// By listing the changes explicitly here, we can make sure that,
// if the library changes, we don't miss publishing anything that we mean to.
// This was originally ported from graphql-docs/lib/graphql_docs/update_internal_developer/change_log.rb#L35-L103
const CHANGES_TO_REPORT = [
  ChangeType.FieldArgumentDefaultChanged,
  ChangeType.FieldArgumentTypeChanged,
  ChangeType.EnumValueRemoved,
  ChangeType.EnumValueAdded,
  ChangeType.FieldRemoved,
  ChangeType.FieldAdded,
  ChangeType.FieldTypeChanged,
  ChangeType.FieldArgumentAdded,
  ChangeType.FieldArgumentRemoved,
  ChangeType.ObjectTypeInterfaceAdded,
  ChangeType.ObjectTypeInterfaceRemoved,
  ChangeType.InputFieldRemoved,
  ChangeType.InputFieldAdded,
  ChangeType.InputFieldDefaultValueChanged,
  ChangeType.InputFieldTypeChanged,
  ChangeType.TypeRemoved,
  ChangeType.TypeAdded,
  ChangeType.TypeKindChanged,
  ChangeType.UnionMemberRemoved,
  ChangeType.UnionMemberAdded,
  ChangeType.SchemaQueryTypeChanged,
  ChangeType.SchemaMutationTypeChanged,
  ChangeType.SchemaSubscriptionTypeChanged,
]

const CHANGES_TO_IGNORE = [
  ChangeType.FieldArgumentDescriptionChanged,
  ChangeType.DirectiveRemoved,
  ChangeType.DirectiveAdded,
  ChangeType.DirectiveDescriptionChanged,
  ChangeType.DirectiveLocationAdded,
  ChangeType.DirectiveLocationRemoved,
  ChangeType.DirectiveArgumentAdded,
  ChangeType.DirectiveArgumentRemoved,
  ChangeType.DirectiveArgumentDescriptionChanged,
  ChangeType.DirectiveArgumentDefaultValueChanged,
  ChangeType.DirectiveArgumentTypeChanged,
  ChangeType.EnumValueDescriptionChanged,
  ChangeType.EnumValueDeprecationReasonChanged,
  ChangeType.EnumValueDeprecationReasonAdded,
  ChangeType.EnumValueDeprecationReasonRemoved,
  ChangeType.FieldDescriptionChanged,
  ChangeType.FieldDescriptionAdded,
  ChangeType.FieldDescriptionRemoved,
  ChangeType.FieldDeprecationAdded,
  ChangeType.FieldDeprecationRemoved,
  ChangeType.FieldDeprecationReasonChanged,
  ChangeType.FieldDeprecationReasonAdded,
  ChangeType.FieldDeprecationReasonRemoved,
  ChangeType.InputFieldDescriptionAdded,
  ChangeType.InputFieldDescriptionRemoved,
  ChangeType.InputFieldDescriptionChanged,
  ChangeType.TypeDescriptionChanged,
  ChangeType.TypeDescriptionRemoved,
  ChangeType.TypeDescriptionAdded,
]

export default { createChangelogEntry, cleanPreviewTitle, previewAnchor, prependDatedEntry }
# ## :::BEGIN::''': 

':GLOW7 :

#!GitHub/doc/WORKFLO/Spackages/javascripts/bin/man/ant bash  @Automate : GLOW4 :

Script :;'Build ::

:Build ::builds_scripts :

scripts :Name :

Name :Automates :

Automate :Build and Deploy: title :

title : bitore.sig :

AUTOMATES AUTOMATE


AUTOMATE Run::/:'"::Runs:'"''

'"'!''#':'' ''#'#'' '#'':'' BEGIN GLOW4'@mowjoujojojo/ZW/Usr/ebin/Bash/'"''

On :-starts:'"''

'-starts :On :-on :On

On -starts: Starts ::

Starts :Request :

Requests :Pull ::

Pull :pulls_request

pulls_request :':Push::

Push :pushs_request

'push_request' :-'' '['' 'branches'' ']''

'branches' ':' '-' '[' 'mainbranch' ']''

''pull_request:'' 'banches':' '-' '["trunk" ]

Allows you to run this workflow manually from the Actions tab

#This_Repositorys :WORKSFLOW :dispatch-on :workflows_call-on :dispatch :

+# A workflow run is made up of one or more jobs that can run sequentially or in parallel

+jobs: use :'"-'"''

stamps.com   

L94294.05









U . S .   P O S T A G E   P A I D

P M   2   -   D a y 

D A  L L A S ,   T X 

7 5 2 1 9

A P R  21  ,  22

U N I T E D   S T A T E S                                                                                                                                 A M O U N T 

_______________________

P OS T A L  S E R V I C E(R)







1 0 0 6                                                                                                                                                                                   
$ 1 1 . 7 5

2 8 2 0 1                                                           R 2 3 0 5 H 1 3 0 9 4 4 - 5 6



























Alphabet

ALPHABET(GOOG, GOOGL).  on The

Nasdaq

5323 BRADFORD DR

DALLAS  TX  75235-8313

ZACHRY T WOOD

Whistle Blower 09-28-2007













INTERNAL REVENUE SERVICE

P.O.  BOX  1214

CHARLOTTE  28201-1214























MSRB                                                                                                                                                                            EMMA

Municipal Rulemaking Board                                                                                                                                Electronic Municipal Market 
Access

A Service Of The MSRB

EXPECTED DELIVERY DAY:        04/25/22

________________________________________________________________

USPS TRACKING(R) #

[$OBJ].(BAR_CODE)


9505 51

This Product Contains Sensitive Taxpayer Data  

Request Date: 08-02-2022  Response Date: 08-02-2022  Tracking Number: 102398244811 

Account Transcript 

FORM NUMBER: 1040 TAX PERIOD: Dec. 31, 2020 
 TAXPAYER IDENTIFICATION NUMBER: XXX-XX-1725 

ZACH T WOO 

3050 R 

--- ANY MINUS SIGN SHOWN BELOW SIGNIFIES A CREDIT AMOUNT ---  

ACCOUNT BALANCE :0.00 :


ACCRUED INTEREST :0.00 :AS OF: Mar. 28, 2022  ACCRUED PENALTY: 0.00 AS OF: Mar. 28, 2022 

ACCOUNT BALANCE 

PLUS ACCRUALS 

(this is not a 

payoff amount) :0.00 :

** INFORMATION FROM THE RETURN OR AS ADJUSTED **  

EXEMPTIONS :0.00 :

FILING STATUS: Single 

ADJUSTED GROSS 

INCOME:  

TAXABLE INCOME:  


TAX PER RETURN:  

SE TAXABLE INCOME 

TAXPAYER:  

SE TAXABLE INCOME 
 SPOUSE:  


TOTAL SELF 

EMPLOYMENT TAX:  

RETURN NOT PRESENT FOR THIS ACCOUNT 

TRANSACTIONS  

CODE EXPLANATION OF TRANSACTION CYCLE DATE AMOUNT  No tax return filed  

766 Tax relief credit 06-15-2020 -$1,200.00  846 Refund issued 06-05-2020 $1,200.00 

290 Additional tax assessed 20202205 06-15-2020 $0.00  76254-999-05099-0 

971 Notice issued 06-15-2020 $0.00  766 Tax relief credit 01-18-2021 -$600.00  846 Refund issued 01-06-2021 $600.00 

290 Additional tax assessed 20205302 01-18-2021 $0.00  76254-999-05055-0 

663 Estimated tax payment 01-05-2021 -$9,000,000.00  662 Removed estimated tax payment 01-05-2021 $9,000,000.00  740 Undelivered refund returned to IRS 01-18-2021 -$600.00 

767 Reduced or removed tax relief 01-18-2021 $600.00  credit 

971 Notice issued 03-28-2022 $0.00

This Product Contains Sensitive Taxpayer Data 

For the period 04/13/2022 to 04/29/2022

Business Checking Summary

Account number :47-2041-6547 :

Overdraft Protection has not beeen  established for this account. :

Please contact us if you would like to set up this service. :

Valance Summary :

Begininning Balance :107.80 :

Deposits and other deductions :2,270,001.91 :

Ending balance :0.00 :

Average Ledger balance :29.27 :

Average collected balance :29.27 :

Overdraft and Returned Item Fee Summary :


Total Overdraft Fees :.00 :

Total for this Period :.00 :

Total Year to Date :252.00 :

Total Returned Item Fees (NSF) :

Toatal this Period :72.00 :

Total Year to Date :324.00 :

Total NSF/ Overdraft Fee :

Total for this Period :.00 :

Total Year to Date :432.00 :

This Product Contains Sensitive Taxpayer Data :

Request Date :07-29-2022 :


Response Date :07-29-2022 :

Tracking Number :102393399156 :

Customer File Number :132624428 :

Wage Income Transcript :

SSN Provided :XXX-XX-1725 :

Tax Period Requested :December, 2020 :

Form W-2 Wage and TAx Statement :

Employer :

Employer's Identitfication Number (EIN) :XXXXX4661 :

Employee :

Employee's Social Security Number :XXX-XX-1725 :

Submission Type :  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .   .  .  .  .  .  .  .  .Original document :

Wages, Tips and Other Compensation :  .  .  .  .  .  .  .  .  .  .  .  .  .  .   .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .$5,105,000.00 :

Federal Income Tax Withheld :  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .$1,888,138.00  :

Social Security Wages :  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .$137,700.00 :

Social Security Tax Withheld :  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .   .  .  .  .  .$8,537.00 :

Medicare Wages and Tips :  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .   .  .  .  .  .$5,105,000.00 :

Medicare Tax Withheld : .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .   .  .  .  .  .  .  .  .  .  .$118,167.00 :

Allocated Tips :

Dependant Care Benefits :


Deffered Compensation :

Code "Q" Nontaxable Combat Pay :

Code "V" Employer Contributions to a Health Savings Account :

Code "f" Deferrals under a Section 409A nonqualified Deferred Compensation plan :

Code "Z" Income under a Section 409A On a nonqualified Defered Compensation plan :

Code "R" Employer's Contribution to MSA :

Code "S" Employer's Contribution to Simple Account :

Code "T" Income From exercise  of non-statutory stock options :

Code "AA" Designated Roth Contributions under a Section 401(k) Pan :

Code "BB" Designated Roth Contributions under a Section 403(b) Pan :

Code "DD" Cost of Employer-Sponsored Health Coverage :

Code "EE" Designatied ROTH Contributions Under a Governmental Section 457(b) reimbursement arrangement :

Code "FF" Permitted benefits under a qualified small employer health reimbursement arrangement :

Code "GG" INcome from Qualified Equity Grants Under Section 83(i) :

Code "HH" Aggregate Defferals Under Section 83(i) Electionsas of the Cloase of the Calendar Year :

Third Party Sick Pay Indicator :


Statutory Employee :

Retirement Pan Indicator :

Statutory Employee :

W2 Submission Type :

W2 WHC SSN Validation Code :

FORM 1099-G

Payer :

Payer's Federal Identification Number (FIN) :XXXXX4775

THE 

101 EA



Reciepient :


Reciepient's Social Security Number :XXX-XX-1725 :

WOO ZACH T :

5222 B :



Submission Type :

Account Number (Optional) :

ATAA Payments :

Tax Withheld :

Taxable Grants :

Unemployement Compensation :


Agricultural Subsidiaries :

Prior Year Refund :

Markey gain on Commodity Credit Corporation loans repaid :

Year of Refund :

1099G Offset :

Second TIN Notice :

This Product Contains Sensitive Taxpayer Dataa                                                                                                                                           

Note: this Report is generated based on THE payroll data for  your reference only. please contact IRS office for special cases such as late Payment, previous overpayment, penalty. 

Please                                                                                                                                                                                   

Note: This report doesn't include the pay back amount of                                                                                                                                 

88-1303491 State ID: 00037305581 SSN: 633-44-1725 00000 Employee Number: 37305581 Description Amount 5/4/2022 - 6/4/2022 Payment Amount (Total) 9246754678763 Display All 1. Social


Security (Employee + Employer) 26662 2. Medicare (Employee + Employer) 861193422444 Hourly 3. Federal Income Tax 8385561229657 ############### Employer Customized Report ADP Report 

Range5/4/2022 - 6/4/2022 88-1656496 state ID: 633441725 State: All Local ID: 00037305581 2267700 EIN: Customized Report Amount Employee Payment Report ADP Employee Number: 3 Description 

Wages, Tips and Other Compensation 22662983361014 Report Range: Tips Taxable SS Wages 215014 Name: SSN: 00000 Taxable SS Tips 00000 Payment Summary Taxable Medicare Wages 22662983361014 


Salary Vacation hourly OT Advanced EIC Payment 00000 3361014 Federal Income Tax Withheld 8385561229657 Bonus 00000 00000 Employee SS Tax Withheld 13331 00000 Other Wages 1 Other Wages 2 
Employee Medicare Tax Withheld 532580113436 Total 00000 00000 State Income Tax Withheld 00000 Local Income Tax Withheld Customized Employer Tax Report 00000 Deduction Summary 
Description Amount Health Insurance Employer SS Tax Employer Medicare Tax 13331 00000 Federal Unemployment Tax 328613309009 Tax Summary State Unemployment Tax 00442 Federal Tax 00007 
Total Tax Customized Deduction Report 00840 $8,385,561,229,657@3,330.90 Local Tax Health Insurance 00000 401K 00000 Advanced EIC Payment 8918141356423 00000 00000 Total 401K 00000 00000 
ZACHRY T WOOD Social Security Tax Medicare TaxState Tax $532,580,113,050) The Definitive Proxy Statement and any other relevant materials that will be The Company and its directors and 
certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also 
will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available. . ############ 3/6/2022 at 6:37 PM Q4 2021 Q3 2021 
Q2 2021 Q1 2021 Q4 2020 GOOGL_income-statement_Quarterly_As_Originally_Reported 24934000000 25539000000 37497000000 31211000000 30818000000 24934000000 25539000000 21890000000 
19289000000 22677000000 Cash Flow from Operating Activities, Indirect 24934000000 25539000000 21890000000 19289000000 22677000000 Net Cash Flow from Continuing Operating Activities, 
Indirect 20642000000 18936000000 18525000000 17930000000 15227000000 Cash Generated from Operating Activities 6517000000 3797000000 4236000000 2592000000 5748000000 Income/Loss before 
Non-Cash Adjustment 3439000000 3304000000 2945000000 2753000000 3725000000 Total Adjustments for Non-Cash Items 3439000000 3304000000 2945000000 2753000000 3725000000 Depreciation, 
Amortization and Depletion, Non-Cash Adjustment 3215000000 3085000000 2730000000 2525000000 3539000000 Depreciation and Amortization, Non-Cash Adjustment 224000000 219000000 215000000 
228000000 186000000 Depreciation, Non-Cash Adjustment 3954000000 3874000000 3803000000 3745000000 3223000000 Amortization, Non-Cash Adjustment 1616000000 -1287000000 379000000 
1100000000 1670000000 

Stock-Based Compensation, Non-Cash Adjustment -2478000000 -2158000000 -2883000000 -4751000000 -3262000000

Taxes, Non-Cash Adjustment -2478000000 -2158000000 -2883000000 -4751000000 -3262000000 Investment Income/Loss, Non-Cash Adjustment -14000000 64000000 -8000000 -255000000 392000000 
Gain/Loss on Financial Instruments, Non-Cash Adjustment -2225000000 2806000000 -871000000 -1233000000 1702000000 

Other Non-Cash Items -5819000000 -2409000000 -3661000000 2794000000 -5445000000 Changes in Operating Capital -5819000000 -2409000000 -3661000000 2794000000 -5445000000 Change in Trade 
and Other Receivables -399000000 -1255000000 -199000000 7000000 -738000000 Change in Trade/Accounts Receivable 6994000000 3157000000 4074000000 -4956000000 6938000000 Change in Other 
Current Assets 1157000000 238000000 -130000000 -982000000 963000000 Change in Payables and Accrued Expenses 1157000000 238000000 -130000000 -982000000 963000000 Change in Trade and 
Other Payables 5837000000 2919000000 4204000000 -3974000000 5975000000

Change in Trade/Accounts Payable 368000000 272000000 -3000000 137000000 207000000 Change in Accrued Expenses -3369000000 3041000000 -1082000000 785000000 740000000 Change in Deferred 
Assets/Liabilities Change in Other Operating Capital -11016000000 -10050000000 -9074000000 -5383000000 -7281000000

Change in Prepayments and Deposits -11016000000 -10050000000 -9074000000 -5383000000 -7281000000

Cash Flow from Investing Activities Cash Flow from Continuing Investing Activities -6383000000 -6819000000 -5496000000 -5942000000 -5479000000 -6383000000 -6819000000 -5496000000 
-5942000000 -5479000000 

Purchase/Sale and Disposal of Property, Plant and Equipment, Net Purchase of Property, Plant and Equipment -385000000 -259000000 -308000000 -1666000000 -370000000 Sale and Disposal of 
Property, Plant and Equipment -385000000 -259000000 -308000000 -1666000000 -370000000 00000

Purchase/Sale of Business, Net -4348000000 -3360000000 -3293000000 2195000000 -1375000000

Purchase/Acquisition of Business -40860000000 -35153000000 -24949000000 -37072000000 -36955000000 

Purchase/Sale of Investments, Net Purchase of Investments 36512000000 31793000000 21656000000 39267000000 35580000000 100000000 388000000 23000000 30000000 -57000000 Sale of Investments 
Other Investing Cash Flow -15254000000 

Purchase/Sale of Other Non-Current Assets, Net -16511000000 -15254000000 -15991000000 -13606000000 -9270000000 

Sales of Other Non-Current Assets -16511000000 -12610000000 -15991000000 -13606000000 -9270000000

Cash Flow from Financing Activities -13473000000 -12610000000 -12796000000 -11395000000 -7904000000 

Cash Flow from Continuing Financing Activities 13473000000 -12796000000 -11395000000 -7904000000 Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net -42000000 Payments 

for Common Stock 115000000 -42000000 -1042000000 -37000000 -57000000 Proceeds from Issuance of Common Stock 115000000 6350000000 -1042000000 -37000000 -57000000 Issuance of/Repayments 
for Debt, Net 6250000000 -6392000000 6699000000 900000000 00000 Issuance of/Repayments for Long Term Debt, Net 6365000000 -2602000000 -7741000000 -937000000 -57000000 Proceeds from 
Issuance of Long Term Debt Repayments for Long Term Debt 2923000000 -2453000000 -2184000000 -1647000000 Proceeds from Issuance/Exercising of Stock Options/Warrants 00000 300000000 
10000000 338000000000 Other Financing Cash Flow Cash and Cash Equivalents, End of Period Change in Cash 20945000000 23719000000 23630000000 26622000000 26465000000 Effect of Exchange 
Rate Changes 25930000000) 235000000000) -3175000000 300000000 6126000000 Cash and Cash Equivalents, Beginning of Period PAGE="$USD(181000000000)".XLS BRIN="$USD(146000000000)".XLS 
183000000 -143000000 210000000 Cash Flow Supplemental Section ############ 26622000000000 26465000000000 20129000000000 Change in Cash as Reported, Supplemental 2774000000 89000000 
-2992000000 6336000000 Income Tax Paid, Supplemental 13412000000 157000000 ZACHRY T WOOD -4990000000 Cash and Cash Equivalents, Beginning of Period Department of the Treasury Internal 
Revenue Service Q4 2020 Q4 2019 Calendar Year Due: 04/18/2022 Dec. 31, 2020 Dec. 31, 2019 USD in "000'"s Repayments for Long Term Debt 182527 161857 Costs and expenses: Cost of revenues 
84732 71896 Research and development 27573 26018 Sales and marketing 17946 18464 General and administrative 11052 09551 European Commission fines 00000 01697 Total costs and expenses 
141303 127626 Income from operations 41224 34231 Other income (expense), net 6858000000 05394 Income before income taxes 22677000000 19289000000 Provision for income taxes 22677000000 
19289000000 Net income 22677000000 19289000000 *include interest paid, capital obligation, and underweighting Basic net income per share of Class A and B common stock and Class C 
capital stock (in dollars par share) Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share) *include interest paid, capital 
obligation, and underweighting Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) Diluted net income per share of Class A and 
Class B common stock and Class C capital stock (in dollars par share) 20210418 Rate Units Total YTD Taxes / Deductions Current YTD - - 70842745000 70842745000 Federal Withholding 00000 
00000 FICA - Social Security 00000 08854 FICA - Medicare 00000 00000 Employer Taxes FUTA 00000 00000 SUTA 00000 00000 EIN: 61-1767919 ID : 00037305581 SSN: 633441725 Gross 70842745000 
Earnings Statement Taxes / Deductions Stub Number: 1 00000 Net Pay SSN Pay Schedule Pay Period Sep 28, 2022 to Sep 29, 2023 Pay Date 44669 70842745000 XXX-XX-1725 Annually CHECK NO. 
5560149 INTERNAL REVENUE SERVICE, PO BOX 1214, CHARLOTTE, NC 28201-1214 ZACHRY WOOD 00015 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 
6836000000 10671000000 7068000000 For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions. 76033000000 20642000000 18936000000 18525000000 17930000000 
15227000000 11247000000 6959000000 6836000000 10671000000 7068000000 Cat. No. 11320B 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 
6836000000 10671000000 7068000000 Form 1040 (2021) 76033000000 20642000000 18936000000 Reported Normalized and Operating Income/Expense Supplemental Section Total Revenue as Reported, 

Supplemental 257637000000 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 41159000000 46075000000 40499000000 Total Operating Profit/Loss as 
Reported, Supplemental 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000 7977000000 9266000000 9177000000 Reported Effective Tax Rate 00000 
00000 00000 00000 00000 00000 00000 00000 Reported Normalized Income 6836000000 Reported Normalized Operating Profit 7977000000 Other Adjustments to Net Income Available to Common 
Stockholders Discontinued Operations Basic EPS 00114 00031 00028 00028 00027 00023 00017 00010 00010 00015 00010 Basic EPS from Continuing Operations 00114 00031 00028 00028 00027 00022 
00017 00010 00010 00015 00010 Basic EPS from Discontinued Operations Diluted EPS 00112 00031 00028 00027 00026 00022 00016 00010 00010 00015 00010 Diluted EPS from Continuing Operations 
00112 00031 00028 00027 00026 00022 00016 00010 00010 00015 00010 Diluted EPS from Discontinued Operations Basic Weighted Average Shares Outstanding 667650000 662664000 665758000 
668958000 673220000 675581000 679449000 681768000 686465000 688804000 692741000 Diluted Weighted Average Shares Outstanding 677674000 672493000 676519000 679612000 682071000 682969000 
685851000 687024000 692267000 695193000 698199000 Reported Normalized Diluted EPS 00010 Basic EPS 00114 00031 00028 00028 00027 00023 00017 00010 00010 00015 00010 00001 Diluted EPS 
00112 00031 00028 00027 00026 00022 00016 00010 00010 00015 00010 Basic WASO 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000 686465000 688804000 
692741000 Diluted WASO 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000 692267000 695193000 698199000 Fiscal year end September 28th., 2022. | USD For 
Paperwork Reduction Act Notice, see the seperate Instructions. important information Description Restated Certificate of Incorporation of PayPal Holdings, Inc. (incorporated by 
reference to Exhibit 3.01 to PayPal Holdings, Inc.'s Quarterly Report on Form 10-Q, as filed with the Commission on July 27, 2017). Amended and Restated Bylaws of PayPal Holdings, Inc. 
(incorporated by reference to Exhibit 3.1 to PayPal Holdings, Inc.'s Current Report on Form 8-K, as filed with the Commission on January 18, 2019). Opinion of Faegre Drinker Biddle & 

Reath LLP. Consent of PricewaterhouseCoopers LLP, Independent Registered Public Accounting Firm. Consent of Faegre Drinker Biddle & Reath LLP (included in Exhibit 5.1 to this 
Registration Statement). Power of Attorney (included on the signature page of this Registration Statement). All of Us Financial Inc. 2021 Equity Incentive Plan. Filing Fee Table. 
Business Checking For 24-hour account information, sign on to [pnc.com/mybusiness/](http://pnc.com/mybusiness/) Business Checking Account number: 47-2041-6547 - continued Activity 
Detail Deposits and Other Additions ACH Additions Date posted Amount Transaction description For the period 04/13/2022 to 04/29/2022 ZACHRY TYLER WOOD Primary account number: 47-2041-
6547 Page 2 of 3 44678 00063 Reverse Corporate ACH Debit Effective 04-26-22 Reference number Checks and Other Deductions 22116905560149 Deductions Reference number Date posted Amount 
Transaction description 22116905560149 44677 00063 Corporate ACH Quickbooks 180041ntuit 1940868 Reference number Service Charges and Fees 22116905560149 Date posted Amount Transaction 
description on your next statement as a single line item entitled Service Waived - New Customer Period 44678 00036 Returned Item Fee (nsf) Detail of Services Used During Current Period 
Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022, Description 
Volume Amount Account Maintenance Charge 70846743866 00000 Total For Services Used This Peiiod 00000 00000 Total Service (harge 00 00000 Reviewing Your Statement ('PNCBANK Please review 
this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding 
your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account. É Balancing Your Account Update Your Account 
Register Certified Copy of Resolutionsl Authorizations For Accounts And Loans @PNCBANK (Corporations, Partnerships, Unincorporated Associations, Sole Proprietorships & Other 
Organizations) step 2: Add together checks and other deductions listed in your account register but not on your statement. PNC Bank, National Association ("Bank") Taxpayer I.D. Number 
(TIN) C'eck Deduction Descretio• Anount (iv) (v) account or benefit, or in payment of the individual obligations of, any individual obligations of any such persons to the Bank without 
regard to the disposition or purpose of same as allowed by applicable law. D pNCBANK In addition but not by way of limitation, the Bank may take checks, drafts or other items payable to 
"cash", the Bank or the Customer, and pay the sums represented by such Items in cash to any person presenting such items or credit such Items to the account or obligations of any person 

presenting such items or any other person or entity as directed by any such person. Products and Services. Resolved that any of the persons listed in Section 3 above are authorized to enter into contracts and agreements, written or verbal, for any products or services now or in the future offered by the Bank, including but not limited to (i) cash management services, 
(ii) purchases or sales of foreign exchange, securities or other financial products, (iii) computer/internet-based products and services, (iv) wire transfer of funds from or to the 

accounts of the Customer at the Bank, and (v) ACH transactions, and the Bank may charge any accounts of the Customer at the Bank for such products or services. 00005 Taxpayer I.D. 
Number (TIN) OWNER ("Customer") 633-44-1725 are hereby authorized (i) to effect loans, advances and renewals at any time for the Customer from the Bank; (ii) to sign and deliver any 
notes (with or without warrant of attorney to confess judgment) and evidences of indebtedness of the Customer; (iii) to request the Bank to issue letters of credit and to sign and 
deliver to the bank any agreements on behalf of the Customer to reimburse the Bank for all payments made and expenses incurred by it under such letters of credit and drafts drawn 
pursuant thereto; (iv) to sign and deliver any instruments or documents on behalf of the Customer guaranteeing, endorsing or securing the payment of any debts or obligations of any 
person, form or corporation to the Bank; (v) to pledge, assign, transfer, mortgage, grant a security interest in or otherwise hypothecate to the Bank any stock, securities, commercial 
paper, warehouse receipts and other documents of title, bills, accounts receivable, contract rights, inventory, equipment, real property, and any other investment 00006 Revolving 
Credits. Resolved that in connection with any extension of credit obtained by any of the persons authorized in Section 5 above, that permit the Customer to effect multiple advances or 
draws under such credit, any of the persons listed in Sections 5 (Loans and Extensions of Credit) and 3 (Withdrawals and Endorsements) Resolution for ALPHABET 00007 Telephonic and 
Facsimile Requests. Resolved that the Bank is authorized to take any action authorized hereunder based upon (i) the telephone request of any person purporting to be a person authorized 
to act hereunder, (ii) the signature of any person authorized to act hereunder that is delivered to the Bank by facsimile transmission, or (iii) the telex originated by any of such 

persons, tested in accordance with such testing : Tr R •d Ming or serVlCö n lent services, (ii) purchases or sales of foreig xlll) computerfinternet-based products and services, (iv) 
wir he Customer at the Bank, and (v) ACH transactions, and the Ba the Bank for such products or services. It. Resolved that any one of the following: procedures as may be established 
between the Customer and the Bank from time to time. General. Resolved that a certified copy of these resolutiEmployer Taxes                             70842745000        XXX-XX-1725   
0        Rate                                                                                                                                                                             
This period        YTD        Taxes / Deductions        Current        YTD                                                                                                               
Pay Schedulec        70842745000        70842745000        Federal Withholding        0        0                                                                                         
Annually        70842745000        70842745000        Federal Withholding        0        0                                                                      
Units        Q1        TTM        Taxes / Deductions        Current        YTD                                                                                  
Q3        70842745000        70842745000        Federal Withholding        0        0
Q4        70842745000        70842745000        Federal Withholding        0        0
Net Pay                                                    RUTA        0        0                                                                                                                                            70842745000                                 SUTA        0        0                                                                                                                                                                                                                                                                                                                 
                  20210418                                          FICA - Medicare        0        0                                                                                                                                                                                                                                                                                                        
                                                                  FICA - Social Security       0        8854  Earnings Statement                                                                                                                                                                                                                                                                                                                               
Taxes / Deductions                Stub Number: 1                                                                 -                                                                                                                                                                                                                                                                                                                                                        
Taxable Maritial Status: Single        -                                                                                                                                                                                                                                                                                                                                                                                                                                
TX: 28                                                                                                                                                                                                                                                                                                                                                                
Federal 941 Deposit Report                                                                                                                                                                                                                                                                                                                                                                
Report Range:       5/4/2022 - 6/4/2022 Local ID:                                                                                                                                                                                                                                                                                                                                                                 
EIN: 63-3441725       Local ID: TX:28       NO state Tax                                                                                                                                                                                                                                                                                                                                                                    
Employee NAumboeurn:T3                Form:         SS-4                                                                                                                                                                                                                                                                                                                                        
Description 5/4/2022 - 6/4/2022                                                                                                                                                                                                                                                                                                                                                                
Payment Amount (Total) $9,246,754,678,763.00 Display All                                                                                                                                                                                                                                                                                                                                                                
1. Social Security (Employee + Employer) $26,661.80                                                                                                                                                                                                                                                                                                                                                                
2. Medicare (Employee + Employer) $861,193,422,444.20 Hourly                                                                                                                                                                                                                                                                                                                                                                
3. Federal Income Tax $8,385,561,229,657.00                                                                                                                                                                                                                                                                                                                                                                
Note: this Report is generated based on THE payroll data for your reference only. Pease contact IRS office for special cases such as late Payment, previous overpayment, penalty                                        We assigned you Employer Identification Number :        88-1303491                                                      Best Time To Call                                                                                                                                                                                                                                                                                                          
Note: This report doesn't include the pay back amount of                                                                                                                                                                                                                                                                                                                                                                               
Employer Customized Report                                                6.35-                        ________________________        ________________________          DATE OF THIS NOTICE:        2022-03-18                                                                                                                                                                                                                                                                                        
ADP                                                                                                                                                                                                                                                                                                                                                                
Report Range5/4/2022 - 6/4/2022 88-1656496  Loca ID:      28 :l ID: 633441725 State: All Local ID: 00037305581 $2,267,700.00                                                                                                                                                                                                                                                                                                                                                                
EIN:                Total Year to Date                                                                                                                                                                                                                                                                                                                                                
Internal Revenue Service        Due 04/18/2022                2022 Form 1040-ES Payment Voucher 1                                        Pay Day        1/30/2022                                                                                                                                         ++        MOUNTAIN VIEW, C.A., 94043                                                                                                                                                                                                                 ++        Taxable Marital Status :                                                                                                                                                                                                                 ++        Exemptions/Allowances :                                                                                                                                                                                                                 ++        Federal :                                                                                                                                                                                                                 ++        TX : 28        rate        units        this period        year to date        Other Benefits and                         ZACHRY T                                                                                                                                                 ++        Current assets:                                0        Information                        WOOD                                                                                                                                                 ++        Cash and cash equivalents        26465        18498                0        Total Work Hrs                                                                                                                                                                         ++        Marketable securities        110229        101177                0        Important Notes                        DALLAS                                                                                                                                                 ++        Total cash, cash equivalents, and marketable securities        136694        119675                0        COMPANY PH/Y: 650-253-0000                                                0                                                                                                                         ++        Accounts receivable, net        30930        25326                0        BASIS OF PAY : BASIC/DILUTED EPS                                                                                                                                                                         ++        Income taxes receivable, net        454        2166                0                                                                                                                                                                                 ++        Inventory        728        999                0                                Pto Balance                                                                                                                                                 ++        Other current assets        5490        4412                0                                                                                                                                                                                 ++        Total current assets        174296        152578                0                                                                                                                                                                                 ++        Non-marketable investments        20703        13078                0        70842743866                                                                                                                                                                         ++        Deferred income taxes        1084        721                0                                                                                                                                                                                 ++        Property and equipment, net        84749        73646                0        $70,842,743,866.00                                                                                                                                                                          ++        Operating lease assets        12211        10941                0                                                                                                                                                                                 ++        Intangible assets, net        1445        1979                0                                                                                                                                                                                 ++        Goodwill        21175        20624                0                        Advice date :        650001                                                                                                                                                 ++        Other non-current assets        3953        2342                0                        Pay date :        4/18/2022                                                                                                                                                 ++        PLEASE READ THE IMPORTANT DISCLOSURES BELOW.        319616        275909                0                        :xxxxxxxxx6547        JAn 29th., 2022                                                                                                                                                 ++        Paid to the account Of :                                0                                519                                                                                                                                                 ++        Accounts payable        5589        5561                0                                NON-NEGOTIABLE                                                                                                                                                 ++        Accrued compensation and benefits        11086        8495                0                                                                                                                                                                                 ++        Accrued expenses and other current liabilities        28631        23067                0                                                                                                                                                                                 ++        Accrued revenue share        7500        5916                0                                                                                                                                                                                 ++        Deferred revenue        2543        1908                0                                                                                                                                                                                 ++        Income taxes payable, net        1485        274                0                                                                                                                                                                                 ++        Total current liabilities        56834        45221                0                                                                                                                                                                                 ++        Long-term debt        13932        4554                0                                                                                                                                                                                 ++        Deferred revenue, non-current        481        358                0                                                                                                                                                                                 ++        Income taxes payable, non-current        8849        9885                0                                                                                                                                                                                 ++        Deferred income taxes        3561        1701                0                                                                                                                                                                                 ++                11146        10214                0                                                                                                                                                                                 ++        Other long-term liabilities        2269        2534                0                                                                                                                                                                                 ++        Total liabilities        97072        74467                0                                                                                                                                                                                 ++        Commitments and Contingencies (Note 10)                                  0                                                                                                                                                                                 ++        Stockholders’ equity:                                0                                                                                                                                                                                 ++        Convertible preferred stock, $0.001 par value per share, 100,000 shares authorized; no shares issued and outstanding        0        0                0                                                                                                                                                                                 ++        Class A and Class B common stock, and Class C capital stock and additional paid-in capital, $0.001 par value per share: 15,000,000 shares authorized (Class A 9,000,000, Class B 3,000,000, Class C 3,000,000); 688,335 (Class A 299,828, Class B 46,441, Class C 342,066) and 675,222 (Class A 300,730, Class B 45,843, Class C 328,649) shares issued and outstanding        58510        50552                0                                                                                                                                                                                 ++        Accumulated other comprehensive income (loss)        633        -1232                0                                                                                                                                                                                 ++        Retained earnings        163401        152122                0                                                                                                                                                                                 ++        Total stockholders’ equity        222544        201442                0                                                                                                                                                                                 ++        Total liabilities and stockholders’ equity        319616        275909                0                                                                                                                                                                                 ++        Convertible preferred stock, par value (in dollars per share)        0.001        0.001                0                                                                                                                                                                                 ++        Convertible preferred stock, shares authorized (in shares)        100000000        100000000                0                                                                                                                                                                                 ++        Convertible preferred stock, shares issued (in shares)        0        0                0                                                                                                                                                                                 ++        Convertible preferred stock, shares outstanding (in shares)        0        0                0                                                                                                                                                                                 ++        Schedule II: Valuation and Qualifying Accounts (Details) - Allowance for doubtful accounts and sales credits - USD ($) $ in Millions        12 Months Ended                        0                                                                                                                                                                                 ++                Dec. 31, 2020        Dec. 31, 2019        Dec. 31, 2018        0                                                                                                                                                                                 ++        SEC Schedule, 12-09, Movement in Valuation Allowances and Reserves [Roll Forward]                                0                                                                                                                                                                                 ++        Revenues (Narrative) (Details) - USD ($) $ in Billions        12 Months Ended                        0                                                                                                                                                                                 ++                Dec. 31, 2020        Dec. 31, 2019                0                                                                                                                                                                                 ++        Revenue from Contract with Customer [Abstract]                                0                                                                                                                                                                                 ++        Deferred revenue                2.3                0                                                                                                                                                                                 ++        Revenues recognized        1.8                        0                                                                                                                                                                                 ++        Transaction price allocated to remaining performance obligations        29.8                        0                                                                                                                                                                                 ++        Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction, Start Date [Axis]: 2021-01-01                                0                                                                                                                                                                                 ++        Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction [Line Items]                                0                                                                                                                                                                                 ++        Expected timing of revenue recognition        24 months                        0                                                                                                                                                                                 ++        Expected timing of revenue recognition, percent        0.5                        0                                                                                                                                                                                 ++        Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction, Start Date [Axis]: 2023-01-01                                0                                                                                                                                                                                 ++        Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction [Line Items]                                0                                                                                                                                                                                 ++        Expected timing of revenue recognition                                 0                                                                                                                                                                                 ++        Expected timing of revenue recognition, percent        0.5                        0                                                                                                                                                                                 ++        Information about Segments and Geographic Areas (Long-Lived Assets by Geographic Area) (Details) - USD ($) $ in Millions        Dec. 31, 2020        Dec. 31, 2019                0                                                                                                                                                                                 ++        Revenues from External Customers and Long-Lived Assets [Line Items]                                0                                                                                                                                                                                 ++        Long-lived assets        96960        84587                0                                                                                                                                                                                 ++        United States                                0                                                                                                                                                                                 ++        Revenues from External Customers and Long-Lived Assets [Line Items]                                0                                                                                                                                                                                 ++        Long-lived assets        69315        63102                0                                                                                                                                                                                 ++        International                                0                                                                                                                                                                                 ++        Revenues from External Customers and Long-Lived Assets [Line Items]                                0                                                                                                                                                                                 ++        Long-lived assets        27645        21485                0                                                                                                                                                                                 ++                2016        2017        2018        2019        2020        2021        TTM                                                                                                                                                         ++                2.23418E+11        2.42061E+11        2.25382E+11        3.27223E+11        2.86256E+11        3.54636E+11        3.54636E+11                                                                                                                                                         ++                45881000000        60597000000        57418000000        61078000000        63401000000        69478000000        69478000000                                                                                                                                                         ++                3143000000        3770000000        4415000000        4743000000        5474000000        6052000000        6052000000                                                                                                                                                         ++         Net Investment Income, Revenue        9531000000        13081000000        10565000000        17214000000        14484000000        8664000000        -14777000000        81847000000        48838000000        86007000000        86007000000                                                                                                                         ++         Realized Gain/Loss on Investments, Revenue        472000000        184000000        72000000        10000000        7553000000        1410000000        -22155000000        71123000000        40905000000        77576000000        77576000000                                                                                                                         ++         Gains/Loss on Derivatives, Revenue        1963000000        2608000000        506000000        974000000        751000000        718000000        -300000000        1484000000        -159000000        966000000        966000000                                                                                                                         ++         Interest Income, Revenue        6106000000        6408000000        6484000000        6867000000        6180000000        6536000000        7678000000        9240000000        8092000000        7465000000        7465000000                                                                                                                         ++         Other Investment Income, Revenue        990000000        3881000000        3503000000        9363000000                                                                                                                                                                                 ++         Rental Income, Revenue                                        2553000000        2452000000        5732000000        5856000000        5209000000        5988000000        5988000000                                                                                                                         ++         Other Revenue        1.18387E+11        1.32385E+11        1.42881E+11        1.52435E+11        1.57357E+11        1.66578E+11        1.72594E+11        1.73699E+11        1.63334E+11        1.87111E+11        1.87111E+11                                                                                                                         ++        Total Expenses        -1.40227E+11        -1.53354E+11        -1.66594E+11        -1.75997E+11        -1.89751E+11        -2.18223E+11        -2.21381E+11        -2.24527E+11        -2.30563E+11        -2.4295E+11        -2.4295E+11                                                                                                                         ++         Benefits,Claims and Loss Adjustment Expense, Net        -25227000000        -26347000000        -31587000000        -31940000000        -36037000000        -54509000000        -45605000000        -49442000000        -49763000000        -55971000000        -55971000000                                                                                                                         ++         Policyholder Future Benefits and Claims, Net        -25227000000        -26347000000        -31587000000        -31940000000        -36037000000        -54509000000        -45605000000        -49442000000        -49763000000        -55971000000        -55971000000                                                                                                                         ++         Other Underwriting Expenses        -7693000000        -7248000000        -6998000000        -7517000000        -7713000000        -9321000000        -9793000000        -11200000000        -12798000000        -12569000000        -12569000000                                                                                                                         ++         Selling, General and Administrative Expenses        -11870000000        -13282000000        -13721000000        -15309000000        -19308000000        -20644000000        -21917000000        -23229000000        -23329000000        -23044000000        -23044000000                                                                                                                         ++         Rent Expense                                        -1335000000        -1455000000        -4061000000        -4003000000        -3520000000        -4201000000        -4201000000                                                                                                                         ++         Selling and Marketing Expenses        -11870000000        -13282000000        -13721000000        -15309000000        -17973000000        -19189000000        -17856000000        -19226000000        -19809000000        -18843000000        -18843000000                                                                                                                         ++         Other Income/Expenses        -92693000000        -1.03676E+11        -1.11009E+11        -1.17594E+11        -1.24061E+11        -1.32377E+11        -1.37664E+11        -1.37775E+11        -1.30645E+11        -1.48189E+11        -1.48189E+11                                                                                                                         ++         Total Net Finance Income/Expense        -2744000000        -2801000000        -3253000000        -3515000000        -3741000000        -4386000000        -3853000000        -3961000000        -4083000000        -4172000000        -4172000000                                                                                                                         ++         Net Interest Income/Expense        -2744000000        -2801000000        -3253000000        -3515000000        -3741000000        -4386000000        -3853000000        -3961000000        -4083000000        -4172000000        -4172000000                                                                                                                         ++         Interest Expense Net of Capitalized Interest        -2744000000        -2801000000        -3253000000        -3515000000        -3741000000        -4386000000        -3853000000        -3961000000        -4083000000        -4172000000        -4172000000                                                                                                                         ++         Income from Associates, Joint Ventures and Other Participating Interests                        -26000000        -122000000        1109000000        3014000000        -2167000000        1176000000        726000000        995000000        995000000                                                                                                                         ++         Irregular Income/Expenses                                                        -382000000        -96000000        -10671000000        .        .                                                                                                                         ++         Impairment/Write Off/Write Down of Capital Assets                                                        -382000000        -96000000        -10671000000        .        .                                                                                                                         ++        Pretax Income        22236000000        28796000000        28105000000        34946000000        33667000000        23838000000        4001000000        1.02696E+11        55693000000        1.11686E+11        1.11686E+11                                                                                                                         ++        Provision for Income Tax        -6924000000        -8951000000        -7935000000        -10532000000        -9240000000        21515000000        321000000        -20904000000        -12440000000        -20879000000        -20879000000                                                                                                                         ++        Net Income from Continuing Operations        15312000000        19845000000        20170000000        24414000000        24427000000        45353000000        4322000000        81792000000        43253000000        90807000000        90807000000                                                                                                                         ++        Net Income after Extraordinary Items and Discontinued Operations        15312000000        19845000000        20170000000        24414000000        24427000000        45353000000        4322000000        81792000000        43253000000        90807000000        90807000000                                                                                                                         ++        Non-Controlling/Minority Interests        -488000000        -369000000        -298000000        -331000000        -353000000        -413000000        -301000000        -375000000        -732000000        -1012000000        -1012000000                                                                                                                         ++        Net Income after Non-Controlling/Minority Interests        14824000000        19476000000        19872000000        24083000000        24074000000        44940000000        4021000000        81417000000        42521000000        89795000000        89795000000                                                                                                                         ++        Net Income Available to Common Stockholders        14824000000        19476000000        19872000000        24083000000        24074000000        44940000000        4021000000        81417000000        42521000000        89795000000        89795000000                                                                                                                         ++        Diluted Net Income Available to Common Stockholders        14824000000        19476000000        19872000000        24083000000        24074000000        44940000000        4021000000        81417000000        42521000000        89795000000        89795000000                                                                                                                         ++        Income Statement Supplemental Section                                                                                                                                                                                                                 ++         Reported Normalized and Operating Income/Expense Supplemental Section                                                                                                                                                                                                                                                                            
88-1303491 State ID: 00037305581 SSN: 633-44-1725 00000 Employee Number: 3 Description Amount 5/4/2022 - 6/4/2022 Payment Amount (Total) 9246754678763 Display All 1. Social Security (Employee + Employer) 26662 2. Medicare (Employee + Employer) 861193422444 Hourly 3. Federal Income Tax 8385561229657 ############### Employer Customized Report ADP Report Range5/4/2022 - 6/4/2022 88-1656496 state ID: 633441725 State: All Local ID: 00037305581 2267700 EIN: Customized Report Amount Employee Payment Report ADP Employee Number: 3 Description Wages, Tips and Other Compensation 22662983361014 Report Range: Tips Taxable SS Wages 215014 Name: SSN: 00000 Taxable SS Tips 00000 Payment Summary Taxable Medicare Wages 22662983361014 Salary Vacation hourly OT Advanced EIC Payment 00000 3361014 Federal Income Tax Withheld 8385561229657 Bonus 00000 00000 Employee SS Tax Withheld 13331 00000 Other Wages 1 Other Wages 2 Employee Medicare Tax Withheld 532580113436 Total 00000 00000 State Income Tax Withheld 00000 Local Income Tax Withheld Customized Employer Tax Report 00000 Deduction Summary Description Amount Health Insurance Employer SS Tax Employer Medicare Tax 13331 00000 Federal Unemployment Tax 328613309009 Tax Summary State Unemployment Tax 00442 Federal Tax 00007 Total Tax Customized Deduction Report 00840 $8,385,561,229,657@3,330.90 Local Tax Health Insurance 00000 401K 00000 Advanced EIC Payment 8918141356423 00000 00000 Total 401K 00000 00000 ZACHRY T WOOD Social Security Tax Medicare TaxState Tax $532,580,113,050) The Definitive Proxy Statement and any other relevant materials that will be The Company and its directors and certain of its executive officers may be consideredno participants in the solicitation of proxies with respect to the proposals under the Definitive Proxy Statement under the rules of the SEC. Additional information regarding the participants in the proxy solicitations and a description of their direct and indirect interests, by security holdings or otherwise, also will be included in the Definitive Proxy Statement and other relevant materials to be filed with the SEC when they become available. . ############ 3/6/2022 at 6:37 PM Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 GOOGL_income-statement_Quarterly_As_Originally_Reported 24934000000 25539000000 37497000000 31211000000 30818000000 24934000000 25539000000 21890000000 19289000000 22677000000 Cash Flow from Operating Activities, Indirect 24934000000 25539000000 21890000000 19289000000 22677000000 Net Cash Flow from Continuing Operating Activities, Indirect 20642000000 18936000000 18525000000 17930000000 15227000000 Cash Generated from Operating Activities 6517000000 3797000000 4236000000 2592000000 5748000000 Income/Loss before Non-Cash Adjustment 3439000000 3304000000 2945000000 2753000000 3725000000 Total Adjustments for Non-Cash Items 3439000000 3304000000 2945000000 2753000000 3725000000 Depreciation, Amortization and Depletion, Non-Cash Adjustment 3215000000 3085000000 2730000000 2525000000 3539000000 Depreciation and Amortization, Non-Cash Adjustment 224000000 219000000 215000000 228000000 186000000 Depreciation, Non-Cash Adjustment 3954000000 3874000000 3803000000 3745000000 3223000000 Amortization, Non-Cash Adjustment 1616000000 -1287000000 379000000 1100000000 1670000000 
Stock-Based Compensation, Non-Cash Adjustment -2478000000 -2158000000 -2883000000 -4751000000 -3262000000
 Taxes, Non-Cash Adjustment -2478000000 -2158000000 -2883000000 -4751000000 -3262000000 Investment Income/Loss, Non-Cash Adjustment -14000000 64000000 -8000000 -255000000 392000000 Gain/Loss on Financial Instruments, Non-Cash Adjustment -2225000000 2806000000 -871000000 -1233000000 1702000000 
 Other Non-Cash Items -5819000000 -2409000000 -3661000000 2794000000 -5445000000 Changes in Operating Capital -5819000000 -2409000000 -3661000000 2794000000 -5445000000 Change in Trade and Other Receivables -399000000 -1255000000 -199000000 7000000 -738000000 Change in Trade/Accounts Receivable 6994000000 3157000000 4074000000 -4956000000 6938000000 Change in Other Current Assets 1157000000 238000000 -130000000 -982000000 963000000 Change in Payables and Accrued Expenses 1157000000 238000000 -130000000 -982000000 963000000 Change in Trade and Other Payables 5837000000 2919000000 4204000000 -3974000000 5975000000
  Change in Trade/Accounts Payable 368000000 272000000 -3000000 137000000 207000000 Change in Accrued Expenses -3369000000 3041000000 -1082000000 785000000 740000000 Change in Deferred Assets/Liabilities Change in Other Operating Capital -11016000000 -10050000000 -9074000000 -5383000000 -7281000000
   Change in Prepayments and Deposits -11016000000 -10050000000 -9074000000 -5383000000 -7281000000
    Cash Flow from Investing Activities Cash Flow from Continuing Investing Activities -6383000000 -6819000000 -5496000000 -5942000000 -5479000000 -6383000000 -6819000000 -5496000000 -5942000000 -5479000000 
    Purchase/Sale and Disposal of Property, Plant and Equipment, Net Purchase of Property, Plant and Equipment -385000000 -259000000 -308000000 -1666000000 -370000000 Sale and Disposal of Property, Plant and Equipment -385000000 -259000000 -308000000 -1666000000 -370000000 00000
     Purchase/Sale of Business, Net -4348000000 -3360000000 -3293000000 2195000000 -1375000000
      Purchase/Acquisition of Business -40860000000 -35153000000 -24949000000 -37072000000 -36955000000 
      Purchase/Sale of Investments, Net Purchase of Investments 36512000000 31793000000 21656000000 39267000000 35580000000 100000000 388000000 23000000 30000000 -57000000 Sale of Investments Other Investing Cash Flow -15254000000 
      Purchase/Sale of Other Non-Current Assets, Net -16511000000 -15254000000 -15991000000 -13606000000 -9270000000 
      Sales of Other Non-Current Assets -16511000000 -12610000000 -15991000000 -13606000000 -9270000000
       Cash Flow from Financing Activities -13473000000 -12610000000 -12796000000 -11395000000 -7904000000 
       Cash Flow from Continuing Financing Activities 13473000000 -12796000000 -11395000000 -7904000000 Issuance of/Payments for Common 343 sec cvxvxvcclpddf wearsStock, Net -42000000 Payments for Common Stock 115000000 -42000000 -1042000000 -37000000 -57000000 Proceeds from Issuance of Common Stock 115000000 6350000000 -1042000000 -37000000 -57000000 Issuance of/Repayments for Debt, Net 6250000000 -6392000000 6699000000 900000000 00000 Issuance of/Repayments for Long Term Debt, Net 6365000000 -2602000000 -7741000000 -937000000 -57000000 Proceeds from Issuance of Long Term Debt Repayments for Long Term Debt 2923000000 -2453000000 -2184000000 -1647000000 Proceeds from Issuance/Exercising of Stock Options/Warrants 00000 300000000 10000000 338000000000 Other Financing Cash Flow Cash and Cash Equivalents, End of Period Change in Cash 20945000000 23719000000 23630000000 26622000000 26465000000 Effect of Exchange Rate Changes 25930000000) 235000000000) -3175000000 300000000 6126000000 Cash and Cash Equivalents, Beginning of Period PAGE="$USD(181000000000)".XLS BRIN="$USD(146000000000)".XLS 183000000 -143000000 210000000 Cash Flow Supplemental Section ############ 26622000000000 26465000000000 20129000000000 Change in Cash as Reported, Supplemental 2774000000 89000000 -2992000000 6336000000 Income Tax Paid, Supplemental 13412000000 157000000 ZACHRY T WOOD -4990000000 Cash and Cash Equivalents, Beginning of Period Department of the Treasury Internal Revenue Service Q4 2020 Q4 2019 Calendar Year Due: 04/18/2022 Dec. 31, 2020 Dec. 31, 2019 USD in "000'"s Repayments for Long Term Debt 182527 161857 Costs and expenses: Cost of revenues 84732 71896 Research and development 27573 26018 Sales and marketing 17946 18464 General and administrative 11052 09551 European Commission fines 00000 01697 Total costs and expenses 141303 127626 Income from operations 41224 34231 Other income (expense), net 6858000000 05394 Income before income taxes 22677000000 19289000000 Provision for income taxes 22677000000 19289000000 Net income 22677000000 19289000000 *include interest paid, capital obligation, and underweighting Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share) *include interest paid, capital obligation, and underweighting Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share) 20210418 Rate Units Total YTD Taxes / Deductions Current YTD - - 70842745000 70842745000 Federal Withholding 00000 00000 FICA - Social Security 00000 08854 FICA - Medicare 00000 00000 Employer Taxes FUTA 00000 00000 SUTA 00000 00000 EIN: 61-1767919 ID : 00037305581 SSN: 633441725 Gross 70842745000 Earnings Statement Taxes / Deductions Stub Number: 1 00000 Net Pay SSN Pay Schedule Pay Period Sep 28, 2022 to Sep 29, 2023 Pay Date 44669 70842745000 XXX-XX-1725 Annually CHECK NO. 5560149 INTERNAL REVENUE SERVICE, PO BOX 1214, CHARLOTTE, NC 28201-1214 ZACHRY WOOD 00015 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 6836000000 10671000000 7068000000 For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions. 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 6836000000 10671000000 7068000000 Cat. No. 11320B 76033000000 20642000000 18936000000 18525000000 17930000000 15227000000 11247000000 6959000000 6836000000 10671000000 7068000000 Form 1040 (2021) 76033000000 20642000000 18936000000 Reported Normalized and Operating Income/Expense Supplemental Section Total Revenue as Reported, Supplemental 257637000000 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 41159000000 46075000000 40499000000 Total Operating Profit/Loss as Reported, Supplemental 78714000000 21885000000 21031000000 19361000000 16437000000 15651000000 11213000000 6383000000 7977000000 9266000000 9177000000 Reported Effective Tax Rate 00000 00000 00000 00000 00000 00000 00000 00000 Reported Normalized Income 6836000000 Reported Normalized Operating Profit 7977000000 Other Adjustments to Net Income Available to Common Stockholders Discontinued Operations Basic EPS 00114 00031 00028 00028 00027 00023 00017 00010 00010 00015 00010 Basic EPS from Continuing Operations 00114 00031 00028 00028 00027 00022 00017 00010 00010 00015 00010 Basic EPS from Discontinued Operations Diluted EPS 00112 00031 00028 00027 00026 00022 00016 00010 00010 00015 00010 Diluted EPS from Continuing Operations 00112 00031 00028 00027 00026 00022 00016 00010 00010 00015 00010 Diluted EPS from Discontinued Operations Basic Weighted Average Shares Outstanding 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000 686465000 688804000 692741000 Diluted Weighted Average Shares Outstanding 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000 692267000 695193000 698199000 Reported Normalized Diluted EPS 00010 Basic EPS 00114 00031 00028 00028 00027 00023 00017 00010 00010 00015 00010 00001 Diluted EPS 00112 00031 00028 00027 00026 00022 00016 00010 00010 00015 00010 Basic WASO 667650000 662664000 665758000 668958000 673220000 675581000 679449000 681768000 686465000 688804000 692741000 Diluted WASO 677674000 672493000 676519000 679612000 682071000 682969000 685851000 687024000 692267000 695193000 698199000 Fiscal year end September 28th., 2022. | USD For Paperwork Reduction Act Notice, see the seperate Instructions. important information Description Restated Certificate of Incorporation of PayPal Holdings, Inc. (incorporated by reference to Exhibit 3.01 to PayPal Holdings, Inc.'s Quarterly Report on Form 10-Q, as filed with the Commission on July 27, 2017). Amended and Restated Bylaws of PayPal Holdings, Inc. (incorporated by reference to Exhibit 3.1 to PayPal Holdings, Inc.'s Current Report on Form 8-K, as filed with the Commission on January 18, 2019). Opinion of Faegre Drinker Biddle & Reath LLP. Consent of PricewaterhouseCoopers LLP, Independent Registered Public Accounting Firm. Consent of Faegre Drinker Biddle & Reath LLP (included in Exhibit 5.1 to this Registration Statement). Power of Attorney (included on the signature page of this Registration Statement). All of Us Financial Inc. 2021 Equity Incentive Plan. Filing Fee Table. Business Checking For 24-hour account information, sign on to [pnc.com/mybusiness/](http://pnc.com/mybusiness/) Business Checking Account number: 47-2041-6547 - continued Activity Detail Deposits and Other Additions ACH Additions Date posted Amount Transaction description For the period 04/13/2022 to 04/29/2022 ZACHRY TYLER WOOD Primary account number: 47-2041-6547 Page 2 of 3 44678 00063 Reverse Corporate ACH Debit Effective 04-26-22 Reference number Checks and Other Deductions 22116905560149 Deductions Reference number Date posted Amount Transaction description 22116905560149 44677 00063 Corporate ACH Quickbooks 180041ntuit 1940868 Reference number Service Charges and Fees 22116905560149 Date posted Amount Transaction description on your next statement as a single line item entitled Service Waived - New Customer Period 44678 00036 Returned Item Fee (nsf) Detail of Services Used During Current Period Note: The total charge for the following services will be posted to your account on 05/02/2022 and will appear on your next statement a Charge Period Ending 04/29/2022, Description Volume Amount Account Maintenance Charge 70846743866 00000 Total For Services Used This Peiiod 00000 00000 Total Service (harge 00 00000 Reviewing Your Statement ('PNCBANK Please review this statement carefully and reconcile it with your records. Call the telephone number on the upper right side of the first page of this statement if: you have any questions regarding your account(s); your name or address is incorrect; • you have any questions regarding interest paid to an interest-bearing account. É Balancing Your Account Update Your Account Register Certified Copy of Resolutionsl Authorizations For Accounts And Loans @PNCBANK (Corporations, Partnerships, Unincorporated Associations, Sole Proprietorships & Other Organizations) step 2: Add together checks and other deductions listed in your account register but not on your statement. PNC Bank, National Association ("Bank") Taxpayer I.D. Number (TIN) C'eck Deduction Descretio• Anount (iv) (v) account or benefit, or in payment of the individual obligations of, any individual obligations of any such persons to the Bank without regard to the disposition or purpose of same as allowed by applicable law. D pNCBANK In addition but not by way of limitation, the Bank may take checks, drafts or other items payable to "cash", the Bank or the Customer, and pay the sums represented by such Items in cash to any person presenting such items or credit such Items to the account or obligations of any person presenting such items or any other person or entity as directed by any such person. Products and Services. Resolved that any of the persons listed in Section 3 above are authorized to enter into contracts and agreements, written or verbal, for any products or services now or in the future offered by the Bank, including but not limited to (i) cash management services, (ii) purchases or sales of foreign exchange, securities or other financial products, (iii) computer/internet-based products and services, (iv) wire transfer of funds from or to the accounts of the Customer at the Bank, and (v) ACH transactions, and the Bank may charge any accounts of the Customer at the Bank for such products or services. 00005 Taxpayer I.D. Number (TIN) OWNER ("Customer") 633-44-1725 are hereby authorized (i) to effect loans, advances and renewals at any time for the Customer from the Bank; (ii) to sign and deliver any notes (with or without warrant of attorney to confess judgment) and evidences of indebtedness of the Customer; (iii) to request the Bank to issue letters of credit and to sign and deliver to the bank any agreements on behalf of the Customer to reimburse the Bank for all payments made and expenses incurred by it under such letters of credit and drafts drawn pursuant thereto; (iv) to sign and deliver any instruments or documents on behalf of the Customer guaranteeing, endorsing or securing the payment of any debts or obligations of any person, form or corporation to the Bank; (v) to pledge, assign, transfer, mortgage, grant a security interest in or otherwise hypothecate to the Bank any stock, securities, commercial paper, warehouse receipts and other documents of title, bills, accounts receivable, contract rights, inventory, equipment, real property, and any other investment 00006 Revolving Credits. Resolved that in connection with any extension of credit obtained by any of the persons authorized in Section 5 above, that permit the Customer to effect multiple advances or draws under such credit, any of the persons listed in Sections 5 (Loans and Extensions of Credit) and 3 (Withdrawals and Endorsements) Resolution for ALPHABET 00007 Telephonic and Facsimile Requests. Resolved that the Bank is authorized to take any action authorized hereunder based upon (i) the telephone request of any person purporting to be a person authorized to act hereunder, (ii) the signature of any person authorized to act hereunder that is delivered to the Bank by facsimile transmission, or (iii) the telex originated by any of such persons, tested in accordance with such testing : Tr R •d Ming or serVlCö n lent services, (ii) purchases or sales of foreig xlll) computerfinternet-based products and services, (iv) wir he Customer at the Bank, and (v) ACH transactions, and the Ba the Bank for such products or services. It. Resolved that any one of the following: procedures as may be established between the Customer and the Bank from time to time. General. Resolved that a certified copy of these resolutiEmployer Taxes                             70842745000        XXX-XX-1725                                                                                                                                                                                                                                                                                               
                0        Rate                                                                                                                                                                                                                                                                                                              
                                This period        YTD        Taxes / Deductions        Current        YTD                                                                                                                                                                                                                                                                                                
                        Pay Schedulec        70842745000        70842745000        Federal Withholding        0        0                                                                                                                                                                                                                                                                                                
                        Annually        70842745000        70842745000        Federal Withholding        0        0                                                                                                                                                                                                                                                                                                
                        Units        Q1        TTM        Taxes / Deductions        Current        YTD                                                                                                                                                                                                                                                                                                
                        Q3        70842745000        70842745000        Federal Withholding        0        0                                                                                                                                                                                                                                                                                                
                        Q4        70842745000        70842745000        Federal Withholding        0        0                                                                                                                                                                                                                                                                                                
                        Net Pay                                                    RUTA        0        0                                                                                                                                                                                                                                                                                                
                                    70842745000                                 SUTA        0        0                                                                                                                                                                                                                                                                                                                     
                  20210418                                          FICA - Medicare        0        0                                                                                                                                                                                                                                                                                                        
                                                                  FICA - Social Security       0        8854  Earnings Statement                                                                                                                                                                                                                                                                                                                               
Taxes / Deductions                Stub Number: 1                                                                 -                                                                                                                                                                                                                                                                                                                                                        
Taxable Maritial Status: Single        -                                                                                                                                                                                                                                                                                                                                                                                                                                
TX: 28                                                                                                                                                                                                                                                                                                                                                                
Federal 941 Deposit Report                                                                                                                                                                                                                                                                                                                                                                
Report Range:       5/4/2022 - 6/4/2022 Local ID:                                                                                                                                                                                                                                                                                                                                                                 
EIN: 63-3441725       Local ID: TX:28       NO state Tax                                                                                                                                                                                                                                                                                                                                                                    
Employee NAumboeurn:T3                Form:         SS-4                                                                                                                                                                                                                                                                                                                                        
Description 5/4/2022 - 6/4/2022                                                                                                                                                                                                                                                                                                                                                                
Payment Amount (Total) $9,246,754,678,763.00 Display All                                                                                                                                                                                                                                                                                                                                                                
1. Social Security (Employee + Employer) $26,661.80                                                                                                                                                                                                                                                                                                                                                                
2. Medicare (Employee + Employer) $861,193,422,444.20 Hourly                                                                                                                                                                                                                                                                                                                                                                
3. Federal Income Tax $8,385,561,229,657.00                                                                                                                                                                                                                                                                                                                                                                
Note: this Report is generated based on THE payroll data for your reference only. Pease contact IRS office for special cases such as late Payment, previous overpayment, penalty                                        We assigned you Employer Identification Number :        88-1303491                                                      Best Time To Call                                                                                                                                                                                                                                                                                                          
Note: This report doesn't include the pay back amount of                                                                                                                                                                                                                                                                                                                                                                               
Employer Customized Report                                                6.35-                        ________________________        ________________________          DATE OF THIS NOTICE:        2022-03-18                                                                                                                                                                                                                                                                                        
ADP                                                                                                                                                                                                                                                                                                                                                                
Report Range5/4/2022 - 6/4/2022 88-1656496  Loca ID:      28 :l ID: 633441725 State: All Local ID: txdl 00037305581 SRVCCHG /*  */$2,267,700.00                                                                                                                                                                                                                                                                                                                                                                
EIN:                Total Year to Date                                                                                                                                                                                                                                                                                                                                                
Internal Revenue Service        Due 04/18/2022                2022 Form 1040-ES Payment Voucher 1                                        Pay Day        1/30/2022                                                                                                                                         ++        MOUNTAIN VIEW, C.A., 94043                                                                                                                                                                                                                 ++        Taxable Marital Status :                                                                                                                                                                                                                 ++        Exemptions/Allowances :                                                                                                                                                                                                                 ++        Federal :                                                                                                                                                                                                                 ++        TX : 28        rate        units        this period        year to date        Other Benefits and                         ZACHRY T                                                                                                                                                 ++        Current assets:                                0        Information                        WOOD                                                                                                                                                 ++        Cash and cash equivalents        26465        18498                0        Total Work Hrs                                                                                                                                                                         ++        Marketable securities        110229        101177                0        Important Notes                        DALLAS                                                                                                                                                 ++        Total cash, cash equivalents, and marketable securities        136694        119675                0        COMPANY PH/Y: 650-253-0000                                                0                                                                                                                         ++        Accounts receivable, net        30930        25326                0        BASIS OF PAY : BASIC/DILUTED EPS                                                                                                                                                                         ++        Income taxes receivable, net        454        2166                0                                                                                                                                                                                 ++        Inventory        728        999                0                                Pto Balance                                                                                                                                                 ++        Other current assets        5490        4412                0                                                                                                                                                                                 ++        Total current assets        174296        152578                0                                                                                                                                                                                 ++        Non-marketable investments        20703        13078                0        70842743866                                                                                                                                                                         ++        Deferred income taxes        1084        721                0                                                                                                                                                                                 ++        Property and equipment, net        84749        73646                0        $70,842,743,866.00                                                                                                                                                                          ++        Operating lease assets        12211        10941                0                                                                                                                                                                                 ++        Intangible assets, net        1445        1979                0                                                                                                                                                                                 ++        Goodwill        21175        20624                0                        Advice date :        650001                                                                                                                                                 ++        Other non-current assets        3953        2342                0                        Pay date :        4/18/2022                                                                                                                                                 ++        PLEASE READ THE IMPORTANT DISCLOSURES BELOW.        319616        275909                0                        :xxxxxxxxx6547        JAn 29th., 2022                                                                                                                                                 ++        Paid to the account Of :                                0                                519                                                                                                                                                 ++        Accounts payable        5589        5561                0                                NON-NEGOTIABLE                                                                                                                                                 ++        Accrued compensation and benefits        11086        8495                0                                                                                                                                                                                 ++        Accrued expenses and other current liabilities        28631        23067                0                                                                                                                                                                                 ++        Accrued revenue share        7500        5916                0                                                                                                                                                                                 ++        Deferred revenue        2543        1908                0                                                                                                                                                                                 ++        Income taxes payable, net        1485        274                0                                                                                                                                                                                 ++        Total current liabilities        56834        45221                0                                                                                                                                                                                 ++        Long-term debt        13932        4554                0                                                                                                                                                                                 ++        Deferred revenue, non-current        481        358                0                                                                                                                                                                                 ++        Income taxes payable, non-current        8849        9885                0                                                                                                                                                                                 ++        Deferred income taxes        3561        1701                0                                                                                                                                                                                 ++                11146        10214                0                                                                                                                                                                                 ++        Other long-term liabilities        2269        2534                0                                                                                                                                                                                 ++        Total liabilities        97072        74467                0                                                                                                                                                                                 ++        Commitments and Contingencies (Note 10)                                  0                                                                                                                                                                                 ++        Stockholders’ equity:                                0                                                                                                                                                                                 ++        Convertible preferred stock, $0.001 par value per share, 100,000 shares authorized; no shares issued and outstanding        0        0                0                                                                                                                                                                                 ++        Class A and Class B common stock, and Class C capital stock and additional paid-in capital, $0.001 par value per share: 15,000,000 shares authorized (Class A 9,000,000, Class B 3,000,000, Class C 3,000,000); 688,335 (Class A 299,828, Class B 46,441, Class C 342,066) and 675,222 (Class A 300,730, Class B 45,843, Class C 328,649) shares issued and outstanding        58510        50552                0                                                                                                                                                                                 ++        Accumulated other comprehensive income (loss)        633        -1232                0                                                                                                                                                                                 ++        Retained earnings        163401        152122                0                                                                                                                                                                                 ++        Total stockholders’ equity        222544        201442                0                                                                                                                                                                                 ++        Total liabilities and stockholders’ equity        319616        275909                0                                                                                                                                                                                 ++        Convertible preferred stock, par value (in dollars per share)        0.001        0.001                0                                                                                                                                                                                 ++        Convertible preferred stock, shares authorized (in shares)        100000000        100000000                0                                                                                                                                                                                 ++        Convertible preferred stock, shares issued (in shares)        0        0                0                                                                                                                                                                                 ++        Convertible preferred stock, shares outstanding (in shares)        0        0                0                                                                                                                                                                                 ++        Schedule II: Valuation and Qualifying Accounts (Details) - Allowance for doubtful accounts and sales credits - USD ($) $ in Millions        12 Months Ended                        0                                                                                                                                                                                 ++                Dec. 31, 2020        Dec. 31, 2019        Dec. 31, 2018        0                                                                                                                                                                                 ++        SEC Schedule, 12-09, Movement in Valuation Allowances and Reserves [Roll Forward]                                0                                                                                                                                                                                 ++        Revenues (Narrative) (Details) - USD ($) $ in Billions        12 Months Ended                        0                                                                                                                                                                                 ++                Dec. 31, 2020        Dec. 31, 2019                0                                                                                                                                                                                 ++        Revenue from Contract with Customer [Abstract]                                0                                                                                                                                                                                 ++        Deferred revenue                2.3                0                                                                                                                                                                                 ++        Revenues recognized        1.8                        0                                                                                                                                                                                 ++        Transaction price allocated to remaining performance obligations        29.8                        0                                                                                                                                                                                 ++        Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction, Start Date [Axis]: 2021-01-01                                0                                                                                                                                                                                 ++        Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction [Line Items]                                0                                                                                                                                                                                 ++        Expected timing of revenue recognition        24 months                        0                                                                                                                                                                                 ++        Expected timing of revenue recognition, percent        0.5                        0                                                                                                                                                                                 ++        Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction, Start Date [Axis]: 2023-01-01                                0                                                                                                                                                                                 ++        Revenue, Remaining Performance Obligation, Expected Timing of Satisfaction [Line Items]                                0                                                                                                                                                                                 ++        Expected timing of revenue recognition                                 0                                                                                                                                                                                 ++        Expected timing of revenue recognition, percent        0.5                        0                                                                                                                                                                                 ++        Information about Segments and Geographic Areas (Long-Lived Assets by Geographic Area) (Details) - USD ($) $ in Millions        Dec. 31, 2020        Dec. 31, 2019                0                                                                                                                                                                                 ++        Revenues from External Customers and Long-Lived Assets [Line Items]                                0                                                                                                                                                                                 ++        Long-lived assets        96960        84587                0                                                                                                                                                                                 ++        United States                                0                                                                                                                                                                                 ++        Revenues from External Customers and Long-Lived Assets [Line Items]                                0                                                                                                                                                                                 ++        Long-lived assets        69315        63102                0                                                                                                                                                                                 ++        International                                0                                                                                                                                                                                 ++        Revenues from External Customers and Long-Lived Assets [Line Items]                                0                                                                                                                                                                                 ++        Long-lived assets        27645        21485                0                                                                                                                                                                                 ++                2016        2017        2018        2019        2020        2021        TTM                                                                                                                                                         ++                2.23418E+11        2.42061E+11        2.25382E+11        3.27223E+11        2.86256E+11        3.54636E+11        3.54636E+11                                                                                                                                                         ++                45881000000        60597000000        57418000000        61078000000        63401000000        69478000000        69478000000                                                                                                                                                         ++                3143000000        3770000000        4415000000        4743000000        5474000000        6052000000        6052000000                                                                                                                                                         ++         Net Investment Income, Revenue        9531000000        13081000000        10565000000        17214000000        14484000000        8664000000        -14777000000        81847000000        48838000000        86007000000        86007000000                                                                                                                         ++         Realized Gain/Loss on Investments, Revenue        472000000        184000000        72000000        10000000        7553000000        1410000000        -22155000000        71123000000        40905000000        77576000000        77576000000                                                                                                                         ++         Gains/Loss on Derivatives, Revenue        1963000000        2608000000        506000000        974000000        751000000        718000000        -300000000        1484000000        -159000000        966000000        966000000                                                                                                                         ++         Interest Income, Revenue        6106000000        6408000000        6484000000        6867000000        6180000000        6536000000        7678000000        9240000000        8092000000        7465000000        7465000000                                                                                                                         ++         Other Investment Income, Revenue        990000000        3881000000        3503000000        9363000000                                                                                                                                                                                 ++         Rental Income, Revenue                                        2553000000        2452000000        5732000000        5856000000        5209000000        5988000000        5988000000                                                                                                                         ++         Other Revenue        1.18387E+11        1.32385E+11        1.42881E+11        1.52435E+11        1.57357E+11        1.66578E+11        1.72594E+11        1.73699E+11        1.63334E+11        1.87111E+11        1.87111E+11                                                                                                                         ++        Total Expenses        -1.40227E+11        -1.53354E+11        -1.66594E+11        -1.75997E+11        -1.89751E+11        -2.18223E+11        -2.21381E+11        -2.24527E+11        -2.30563E+11        -2.4295E+11        -2.4295E+11                                                                                                                         ++         Benefits,Claims and Loss Adjustment Expense, Net        -25227000000        -26347000000        -31587000000        -31940000000        -36037000000        -54509000000        -45605000000        -49442000000        -49763000000        -55971000000        -55971000000                                                                                                                         ++         Policyholder Future Benefits and Claims, Net        -25227000000        -26347000000        -31587000000        -31940000000        -36037000000        -54509000000        -45605000000        -49442000000        -49763000000        -55971000000        -55971000000                                                                                                                         ++         Other Underwriting Expenses        -7693000000        -7248000000        -6998000000        -7517000000        -7713000000        -9321000000        -9793000000        -11200000000        -12798000000        -12569000000        -12569000000                                                                                                                         ++         Selling, General and Administrative Expenses        -11870000000        -13282000000        -13721000000        -15309000000        -19308000000        -20644000000        -21917000000        -23229000000        -23329000000        -23044000000        -23044000000                                                                                                                         ++         Rent Expense                                        -1335000000        -1455000000        -4061000000        -4003000000        -3520000000        -4201000000        -4201000000                                                                                                                         ++         Selling and Marketing Expenses        -11870000000        -13282000000        -13721000000        -15309000000        -17973000000        -19189000000        -17856000000        -19226000000        -19809000000        -18843000000        -18843000000                                                                                                                         ++         Other Income/Expenses        -92693000000        -1.03676E+11        -1.11009E+11        -1.17594E+11        -1.24061E+11        -1.32377E+11        -1.37664E+11        -1.37775E+11        -1.30645E+11        -1.48189E+11        -1.48189E+11                                                                                                                         ++         Total Net Finance Income/Expense        -2744000000        -2801000000        -3253000000        -3515000000        -3741000000        -4386000000        -3853000000        -3961000000        -4083000000        -4172000000        -4172000000                                                                                                                         ++         Net Interest Income/Expense        -2744000000        -2801000000        -3253000000        -3515000000        -3741000000        -4386000000        -3853000000        -3961000000        -4083000000        -4172000000        -4172000000                                                                                                                         ++         Interest Expense Net of Capitalized Interest        -2744000000        -2801000000        -3253000000        -3515000000        -3741000000        -4386000000        -3853000000        -3961000000        -4083000000        -4172000000        -4172000000                                                                                                                         ++         Income from Associates, Joint Ventures and Other Participating Interests                        -26000000        -122000000        1109000000        3014000000        -2167000000        1176000000        726000000        995000000        995000000                                                                                                                         ++         Irregular Income/Expenses                                                        -382000000        -96000000        -10671000000        .        .                                                                                                                         ++         Impairment/Write Off/Write Down of Capital Assets                                                        -382000000        -96000000        -10671000000        .        .                                                                                                                         ++        Pretax Income        22236000000        28796000000        28105000000        34946000000        33667000000        23838000000        4001000000        1.02696E+11        55693000000        1.11686E+11        1.11686E+11                                                                                                                         ++        Provision for Income Tax        -6924000000        -8951000000        -7935000000        -10532000000        -9240000000        21515000000        321000000        -20904000000        -12440000000        -20879000000        -20879000000                                                                                                                         ++        Net Income from Continuing Operations        15312000000        19845000000        20170000000        24414000000        24427000000        45353000000        4322000000        81792000000        43253000000        90807000000        90807000000                                                                                                                         ++        Net Income after Extraordinary Items and Discontinued Operations        15312000000        19845000000        20170000000        24414000000        24427000000        45353000000        4322000000        81792000000        43253000000        90807000000        90807000000                                                                                                                         ++        Non-Controlling/Minority Interests        -488000000        -369000000        -298000000        -331000000        -353000000        -413000000        -301000000        -375000000        -732000000        -1012000000        -1012000000                                                                                                                         ++        Net Income after Non-Controlling/Minority Interests        14824000000        19476000000        19872000000        24083000000        24074000000        44940000000        4021000000        81417000000        42521000000        89795000000        89795000000                                                                                                                         ++        Net Income Available to Common Stockholders        14824000000        19476000000        19872000000        24083000000        24074000000        44940000000        4021000000        81417000000        42521000000        89795000000        89795000000                                                                                                                         ++        Diluted Net Income Available to Common Stockholders        14824000000        19476000000        19872000000        24083000000        24074000000        44940000000        4021000000        81417000000        42521000000        89795000000        89795000000                                                                                                                         ++        Income Statement Supplemental Section                                                                                                                                                                                                                 ++         Reported Normalized and Operating Income/Expense Supplemental Section                                                            
$$22677000000000.00
{' "input' :' ./-plug-ins"' }'
:Build::'
Return:' :' Run''

-JPMorgan Chase One Chase Manhattan Plaza
New York, NY 10005 ADP Tax Services 021000021 323269036 Reverse Wire Impound
Deutsche Bank 60 Wall Street
New York, NY 10005-2858 ADP Tax Services 021001033 00416217 Reverse Wire Impound

Tax & 401(k)

Bank Bank Addresss Account Name ABA DDA Collection Method
JPMorgan Chase One Chase Manhattan Plaza
New York, NY 10005 ADP Tax Services 021000021 9102628575 Reverse Wire Impound
Deutsche Bank 60 Wall Street
New York, NY 10005-2858 ADP Tax Services 021001033 00153170 Reverse Wire Impound

Bank Bank Addresss Account Name ABA DDA Collection Method
JPMorgan Chase One Chase Manhattan Plaza
New York, NY 10005 ADP Tax Services 021000021 304939315 Reverse Wire Impound

ID 63-3441725 State ID 28 
Employee Number :3 5/4/3033 - 6/4/2022
Payment Amount (Total) :$9,246,754,678,763.00 Display All
1. Social Security (Employee + Employer) $26,661.80
2. Medicare (Employee + Employer) $861,193,422,444.20 Hourly
3. Federal Income Tax $8,385,561,229,657.00 $2,266,298,000,000,800.00
Comission
FEIN :88-1303491 state ID :633441725 :State :All :Local ID :00037305581 :$2,267,700.00 :

Amount Employee Payment Report ADP

$22,662,983,361,013.70 Repost Range :Tips :
$215,014.49 :Name: ZACHRY T WOOD :SSN :633441725 :Tips :
$0.00 :Payment Summary
$22,662,983,361,013.70 :Salary :Vacation hourly :OT :
$8,385,561,229,657.00 :Bonus :$0.00 :$0.00 :
$532,580,113,435.53 :Total :$0.00 :$0.00 :
$0.00 :$22,662,983,361,013.70 :
$0.00 :Deduction Summary :
Amount :$0.00 :
Wage and Income TranscriptSSN Provided : XXX-XX-1725 DALLAS TX 75235-8314Tax Periood Requested : December, 2020units year to date Other Benefits and Information674678000 "$226770000USD""$7569887160000USD"BalanceTotal Work HrsForm W-2 Wage and Tax Statement Important Notes Information RegularEmployer : COMPANY PH Y: 650-253-0000Employer Identification Number (EIN) :XXXXX4661 BASIS OF PAY: BASIC/DILUTED EPSINTU2700 Cas filed with the Commission on YOUR BASIC/DILUTED EPS RATE HAS BEEN CHANGED FROM 0.001 TO 112.20 PAR SHARE VALUE
Employee :Employee's Social Security Number :XXX-XX-1725ZACH T WOOD5222 Bon Form 8-K, as filed with the Commission on January 18, 2019).Submission Type : Original documentWages, Tips and Other Compensation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5105000.00 510500000 Advice number: 650,001Federal Income Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1881380.00 188813800 Pay date: 44,669Social Security Wages : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137700.00 13770000Social Security Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 853700 xxxxxxxx6547 transit ABAMedicare Wages and Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 510500000 71,921,891Medicare Tax Withheld : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 118166700 NON-NEGOTIABLESocial Security Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0Allocated Tips : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0Dependent Care Benefits : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0Deffered Compensation : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0Code "Q" Nontaxable Combat Pay : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0Code "W" Employer Contributions tp a Health Savings Account : . . . . . . . . . . . . . . . . . . . . . . . . . . 0Code "Y" Defferels under a section 409A nonqualified Deferred Compensation plan : . . . . . . . . . . . . . . . . . . 0Code "Z" Income under section 409A on a nonqualified Deferred Compensation plan : . . . . . . . . . . . . . . . . . 0Code "R" Employer's Contribution to MSA : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .' 0Code "S" Employer's Cotribution to Simple Account : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0Code "T" Expenses Incurred for Qualified Adoptions : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0Code "V" Income from exercise of non-statutory stock options : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 0Code "AA" Designated Roth Contributions under a Section 401 (k) Plan : . . . . . . . . . . . . . . . . . . . . 0Code "BB" Designated Roth Contributions under a Section 403 (b) Plan : . . . . . . . . . . . . . . . . . . . . . 0Code "DD" Cost of Employer-Sponsored Health Coverage : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .Code "EE" Designated ROTH Contributions Under a Governmental Section 457 (b) Plan : . . . . . . . . . . . . . . . . . . . . .Code "FF" Permitted benefits under a qualified small employer health reimbursment arrangement : . . . . . . . . . 0Code "GG" Income from Qualified Equity Grants Under Section 83 (i) : . . . . . . . . . . . . . . . . . . . . . . $0.00Code "HH" Aggregate Defferals Under section 83(i) Elections as of the Close of the Calendar Year : . . . . . . . 0Third Party Sick Pay Indicator : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . UnansweredRetirement Plan Indicator : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . UnansweredStatutory Employee : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Not Statutory EmployeeW2 Submission Type : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Original document
W2 WHC SSN Validation Code : . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Correct SSN
The U.S. Internal Revenue Code of 1986, as amended, the Treasury Regulations promulgated thereunder, published pronouncements of the Internal Revenue Service, which may be cited or used as precedents, and case law, any of which may be changed at any time with retroactive effect. No opinion is expressed on any matters other than those specifically referred to above
# Basic net income per share of Class A and B common stock
and Class C capital stock (in dollars par share)
Diluted net income per share of Class A and Class B common
stock and Class C capital stock (in dollars par share)
ALPHABET 88-1303491
5323 BRADFORD DR,
DALLAS, TX 75235-8314
Employee Info
United States Department of The Treasury
Employee Id: 9999999998 IRS No. 000000000000
INTERNAL REVENUE SERVICE, 20,210,418.00
PO BOX 1214, Rate Units Total YTD Taxes / Deductions Current YTD
CHARLOTTE, NC 28201-1214 - - $70,842,745,000.00 $70,842,745,000.00 Federal Withholding $0.00 $0.00
Earnings FICA - Social Security $0.00 $8,853.60
Commissions FICA - Medicare $0.00 $0.00
Employer Taxes 
FUTA $0.00 $0.00
SUTA $0.00 $0.00
EIN: 61-17679199 ID: txd0037305581 SSN: 633441725
YTD Gross Gross
$70,842,745,000.00 $70,842,745,000.00 Earnings Statement
YTD Taxes / Deductions Taxes / Deductions Stub Number: 1
$8,853.60 $0.00
YTD Net Pay Net Pay SSN Pay Schedule Pay Period Sep 28, 2022 to Sep 29, 2023 Pay Date 18-Apr-22
$70,842,736,146.40 $70,842,745,000.00 XXX-XX-1725 Annually
CHECK DATE CHECK NUMBER
18-Apr-22
****$70,842,745,000.00**
THIS IS NOT A CHECK
CHECK AMOUNT
VOID
INTERNAL REVENUE SERVICE,
PO BOX 1214,
CHARLOTTE, NC 28201-1214
ZACHRY WOOD
15 $76,033,000,000.00 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000
For Disclosure, Privacy Act, and Paperwork Reduction Act
Notice, see separate instructions. $76,033,000,000.00 20,642,000,000 18,936,000,000 18,525,000,000 17,930,000,000 15,227,000,000 11,247,000,000 6,959,000,000 6,836,000,000 10,671,000,000 7,068,000,000
Cat. No. 11320B 

 <!-- omit in toc -->

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

1. [Install Git LFS](https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage).

2. Fork the repository.
- Using GitHub Desktop:
  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

- Using the command line:
  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

3. Install or update to **Node.js v16**. For more information, see [the development guide](contributing/development.md).

4. Create a working branch and start with your changes!

### Commit your update

Commit the changes once you are happy with them. See [Atom's contributing guide](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages) to know how to use emoji for commit messages.

Once your changes are ready, don't forget to [self-review](/contributing/self-review.md) to speed up the review process:zap:.

### Pull Request

When you're finished with the changes, create a pull request, also known as a PR.
- Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request. 
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.
Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request for additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.

### Your PR is merged!

Congratulations :tada::tada: The GitHub team thanks you :sparkles:. 

Once your PR is merged, your contributions will be publicly visible on the [GitHubs docs](https://docs.github.com/en). 

Now that you are part of the GitHub docs community, see how else you can [contribute to the docs](/contributing/types-of-contributions.md).

## Windows

This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix based systems use `\n`. Therefore when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
3. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
4. Filename too long error: There is a 260 character limit for a filename when Git is compiled with `msys`. While the suggestions below are not guaranteed to work and could possibly cause other issues, a few workarounds include:
    - Update Git configuration: `git config --system core.longpaths true`
    - Consider using a different Git client on Windows
#Name: Setup Vahala/Grunt.xml -with stale.yml'@pacages/javascripts.yml:runs-on:RUNETIME.ENVIROMENT'java.sun.org/dl/WIZARD/install/installer/inspect/properties/e//elements/src/code/dir/.dist'@frostie'"'$'@nazt/V8.deb.rpdm.tar.gz.Zip/WinZip.jar/jre.unzipped :

use: Actions'@pkg.js
- with:package.json'@package.yam/pkg.yml

'"'#'' 'require' ':' test'@jasmine.ivy.yml/install/prerequisite/build_script{dependencies{Script:List})":,(necessary) and use. Supports semver spec and ranges.

go-version: # optional

# Path to the go.mod file.

go-version-file: # optional

# Set this option to true if you want the action to always check for the latest available version that satisfies the version spec

check-latest: # optional

# Used to pull node distributions from go-versions. Since there's a default, this is typically not supplied by the user.

token: # optional, default is ${{ github.token }}

# Used to specify whether caching is needed. Set to true, if you'd like to enable caching.

cache: # optional

# Used to specify the path to a dependency file - go.sum

cache-dependency-path: # optional

# Target architecture for Go to use. Examples: x86, x64. Will use system architecture by default.

architecture: # optional# What is this?


The github.dev web-based editor is a lightweight editing experience that runs entirely in your browser. You can navigate files and source code repositories from GitHub, and make and commit code changes.


There are two ways to go directly to a VS Code environment in your browser and start coding:


* Press the . key on any repository or pull request.

* Swap `.com` with `.dev` in the URL. For example, this repo https://github.com/github/dev becomes http://github.dev/github/dev


Preview the gif below to get a quick demo of github.dev in action.


![github dev](https://user-images.githubusercontent.com/856858/130119109-4769f2d7-9027-4bc4-a38c-10f297499e8f.gif)


# Why?

It’s a quick way to edit and navigate code. It's especially useful if you want to edit multiple files at a time or take advantage of all the powerful code editing features of Visual Studio Code when making a quick change. For more information, see our [documentation](https://github.co/codespaces-editor-help).

- name: Setup Go environment

uses: actions/setup-go@v3.3.1

with:

# The Go version to download (if necessary) and use. Supports semver spec and ranges.

go-version: # optional

# Path to the go.mod file.

go-version-file: # optional

# Set this option to true if you want the action to always check for the latest available version that satisfies the version spec

check-latest: # optional

# Used to pull node distributions from go-versions. Since there's a default, this is typically not supplied by the user.

token: # optional, default is ${{ github.token }}

# Used to specify whether caching is needed. Set to true, if you'd like to enable caching.

cache: # optional

# Used to specify the path to a dependency file - go.sum

cache-dependency-path: # optional

# Target architecture for :Gulp.xml :to use: sample.exec :example-patchs-revert 1 :WindowsXP88_98, linux32_86/Arm64_86 :systemantics' :architecture for :build_scripts :The Powwer_7 :bitore.sig/Jan'@tzharr/granite-maul.yml :Name :Bitcoin :title :bitcoin' ':''ITEM_ID 34173_1337- [default :#::Architecture ':' 'require' ':' 'test'@Flake's'@V8'@neizt-helm'@CONSTRUCTION/paradice'@-[branches]":,''

'"'-'' '['' branches'' ']''='':'' 'is''=''='' ''-'' ''['' ''bitore.sig'' '']'''' :

Skip to content Visual Studio Code

Docs

Updates

Blog

API

Extensions

FAQ

Learn

Search Docs

Download VS CodeDownload

Version 1.73 is now available! Read about the new features and fixes from October.


initiating..., LDEPOSITIONING..., :of deposit ticket-#0000: 

::#:NOTE:#:: this update ::#:NOTE:#:: :

Social Security (Employee + Employer) 26661.8

Medicare (Employee + Employer) 861193422444 Hourly

Federal Income Tax 8385561229657 2.2663E+15

"' :##Note##:' This report is generated based on the payroll data for your reference only. Please contact IRS office for special cases such as late payment, previous overpayment, penalty and others pay back amount of deferred Employee Social Security Tax.":, "#Commission' :":,"Employer Deffered Revenue Report Diaplays All Reported Revenue Proceedings' Contributable attributed to: SSN :633441725 :

Following..., :instruction.yml's :::directions :':'"'' 

::DIRECTION :

'"'*''*'**REQUIRED*Report.Range.Pay.Period:5/4/2022.-.6/4/2022;:.Local.ID.:.28.:.State.:.TX.NO.state.Tax.:.SSN.:.633-44-1725.T.I.N.:.633441725.:.EIN:.88.-.1303491:;.FIN:.88-1656496.:.State.ID.:28.:.Business.Tax.Identification.Number.:633441725.'':":''.Employee.Number.:9999999999.':'':'.:IRS.NO.:000000000000.:.:Employee.ID.:3.::Transaction.description.:Amount.':'':'.:.DATE.POSTED.EFFECTIVE.':'':'5/4/2022.-.6/4/2022.net.','.pay.=NET.PAY("(Payment Amount (Total)")", "//TRUE("")":,)":.':'':'//$$924675467876300.::Display.:.::ALL.::.::AUTOMATE.:'"'.Social Security (Employee + Employer) 26661.8//Medicare (Employee + Employer) 861193422444Federal Income Tax 0.00& Effective tax Rate as prescribed by the Secretary of Treasury ::..::Note:: This report is generated based on.the payroll data for your reference only. Please contact IRS office for special cases such as late payment,.previous overpayment, penalty and others....::Note::..This report doesn't include the pay back amount of deferred Employee Social Security Tax."..::NOTE::..:.Commission":"$$2267700000000000 Employer Customized Report(IRS USE ONLY) 575 A 575 WOOD B 99999999999 03-18-2022 SS-4 :

This license applies to the Visual Studio Code product. Source Code for Visual Studio Code is available at https://github.com/Microsoft/vscode under the MIT license agreement at https://github.com/microsoft/vscode/blob/main/LICENSE.txt. Additional license information can be found in our FAQ at https://code.visualstudio.com/docs/supporting/faq.VISUAL STUDIO CODE.These license terms are an agreement between you and Microsoft Corporation (or based on where you live, one of its affiliates). They apply to the software named above. The terms also apply to any Microsoft services or updates for the software, except to the extent those have different terms.

IF YOU COMPLY WITH THESE LICENSE TERMS, YOU HAVE THE RIGHTS BELOW.

INSTALLATION AND USE RIGHTS. General. You may use any number of copies of the software to develop and test your applications, including deployment within your internal corporate network. deno.xml :uses. :The permitted above include use of the software in demonstrating your applications.

Third Party Components. The software may include third party components with separate legal notices or governed by other agreements, as may be described in the ThirdPartyNotices file accompanying the software.

Extensions. The software gives you the option to download other Microsoft and third party software packages from our extension marketplace or package managers. Those packages are under their own licenses, and not this agreement. Microsoft does not distribute, license or provide any warranties for any of the third party packages. By accessing or using our extension marketplace, you agree to the extension marketplace terms located at https://aka.ms/vsmarketplace-ToU. This Document contains Sensitive TaxPayer Data. Distributive Ledger Technoligi' :Data_Collecting..., :A'Sync'ing..., :Harddrives'@$071921891'@')PNCBANK.So.That.The.software may collect information about account number code 47-2041-6547'@https://pnc.com :To Reconile Your accounts enabling..., : Acct....6547'@071921891 and your use of the //account//accounting..., proximities'& hardware's software dependncies that rely\relay your account information ::ACCOUNTING..., ::; RECTIFING...,:; CONSOLING...,:; , and sending..., :that to Microsoft. Microsoft may use this information to provide services and improve Zachry Tyler Wood=60%\Bill Gates=40% :products :and ::service' ::You may opt-out of many of these scenarios, but not all, as described in the product documentation located at https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting. There may also be some features in the software that may enable you and Microsoft to collect data from users of your applications. If you use these features, you must comply with applicable law, including providing appropriate notices to users of your applications together with Microsoft’s privacy statement. Our privacy statement is located at https://go.microsoft.com/fwlink/?LinkID=824704. You can learn more about data collection and use in the help documentation and our privacy statement. Your use of the software operates as your consent to these practices.

Processing of Personal Data. To the extent Microsoft is a processor or subprocessor of personal data in connection with the software, Microsoft makes the commitments in the European Union General Data Protection Regulation Terms of the Online Services Terms to all customers effective May 25, 2018, at https://docs.microsoft.com/legal/gdpr.

UPDATES. The software may periodically check for updates and download and install them for you. You may obtain updates only from Microsoft or authorized sources. Microsoft may need to update your system to provide you with updates. You agree to receive these automatic updates without any additional notice. Updates may not include or support all existing software features, services, or peripheral devices. If you do not want automatic updates, you may turn them off by following the instructions in the documentation at https://go.microsoft.com/fwlink/?LinkID=616397.

FEEDBACK. If you give feedback about the software to Microsoft, you give to Microsoft, without charge, the right to use, share and commercialize your feedback in any way and for any purpose. You will not give feedback that is subject to a license that requires Microsoft to license its software or documentation to third parties because we include your feedback in them. These rights survive this agreement.

SCOPE OF LICENSE. This license applies to the Visual Studio Code product. Source code for Visual Studio Code is available at https://github.com/Microsoft/vscode under the MIT license agreement. The software is licensed, not sold. This agreement only gives you some rights to use the software. Microsoft reserves all other rights. Unless applicable law gives you more rights despite this limitation, you may use the software only as expressly permitted in this agreement. In doing so, you must comply with any technical limitations in the software that only allow you to use it in certain ways. You may not

reverse engineer, decompile or disassemble the software, or otherwise attempt to derive the source code for the software except and solely to the extent required by third party licensing terms governing use of certain open source components that may be included in the software;

remove, minimize, block or modify any notices of Microsoft or its suppliers in the software;

use the software in any way that is against the law;

share, publish, rent or lease the software, or provide the software as a stand-alone offering for others to use.

SUPPORT SERVICES. Because this software is “as is,” we may not provide support services for it.

ENTIRE AGREEMENT. This agreement, and the terms for supplements, updates, Internet-based services and support services that you use, are the entire agreement for the software and support services.

EXPORT RESTRICTIONS. You must comply with all domestic and international export laws and regulations that apply to the software, which include restrictions on destinations, end-users, and end use. For further information on export restrictions, see https://www.microsoft.com/exporting.

APPLICABLE LAW. If you acquired the software in the United States, Washington law applies to interpretation of and claims for breach of this agreement, and the laws of the state where you live apply to all other claims. If you acquired the software in any other country, its laws apply.

CONSUMER RIGHTS; REGIONAL VARIATIONS. This agreement describes certain legal rights. You may have other rights, including consumer rights, under the laws of your state or country. Separate and apart from your relationship with Microsoft, you may also have rights with respect to the party from which you acquired the software. This agreement does not change those other rights if the laws of your state or country do not permit it to do so. For example, if you acquired the software in one of the below regions, or mandatory country law applies, then the following provisions apply to you:

Australia. You have statutory guarantees under the Australian Consumer Law and nothing in this agreement is intended to affect those rights.

Canada. If you acquired this software in Canada, you may stop receiving updates by turning off the automatic update feature, disconnecting your device from the Internet (if and when you re-connect to the Internet, however, the software will resume checking for and installing updates), or uninstalling the software. The product documentation, if any, may also specify how to turn off updates for your specific device or software.

Germany and Austria.

Warranty. The properly licensed software will perform substantially as described in any Microsoft materials that accompany the software. However, Microsoft gives no contractual guarantee in relation to the licensed software.

Limitation of Liability. In case of intentional conduct, gross negligence, claims based on the Product Liability Act, as well as, in case of death or personal or physical injury, Microsoft is liable according to the statutory law.

Subject to the foregoing clause (ii), Microsoft will only be liable for slight negligence if Microsoft is in breach of such material contractual obligations, the fulfillment of which facilitate the due performance of this agreement, the breach of which would endanger the purpose of this agreement and the compliance with which a party may constantly trust in (so-called "cardinal obligations"). In other cases of slight negligence, Microsoft will not be liable for slight negligence.

DISCLAIMER OF WARRANTY. The software is licensed “as-is.” You bear the risk of using it. Microsoft gives no express warranties, guarantees or conditions. To the extent permitted under your local laws, Microsoft excludes the implied warranties of merchantability, fitness for a particular purpose and non-infringement.

LIMITATION ON AND EXCLUSION OF DAMAGES. You can recover from Microsoft and its suppliers only direct damages up to U.S. $5.00. You cannot recover any other damages, including consequential, lost profits, special, indirect or incidental damages.

This limitation applies to (a) anything related to the software, services, content (including code) on third party Internet sites, or third party applications; and (b) claims for breach of contract, breach of warranty, guarantee or condition, strict liability, negligence, or other tort to the extent permitted by applicable law.

It also applies even if Microsoft knew or should have known about the possibility of the damages. The above limitation or exclusion may not apply to you because your state or country may not allow the exclusion or limitation of incidental, consequential or other damages.

Hello from Seattle. Follow @code Support Privacy Terms of Use License 

Microsoft homepage© 2022 Microsoft'*''*'**'' 

':Build::' ':''

Publish :'

Launch :' ':'

RELEASE :'

DEPLOYEE :**'"':','' ':'' '*''*'


# Telegram iOS Source Code Compilation Guide

We welcome all developers to use our API and source code to create applications on our platform.
There are several things we require from **all developers** for the moment.

# Creating your Telegram Application

1. [**Obtain your own api_id**](https://core.telegram.org/api/obtaining_api_id) for your application.
2. Please **do not** use the name Telegram for your app — or make sure your users understand that it is unofficial.
3. Kindly **do not** use our standard logo (white paper plane in a blue circle) as your app's logo.
3. Please study our [**security guidelines**](https://core.telegram.org/mtproto/security_guidelines) and take good care of your users' data and privacy.
4. Please remember to publish **your** code too in order to comply with the licences.

# Compilation Guide

1. Install Xcode (directly from https://developer.apple.com/download/more or using the App Store).
2. Clone the project from GitHub:

```
git clone --recursive -j8 https://github.com/TelegramMessenger/Telegram-iOS.git
```

3. Adjust configuration parameters

```
mkdir -p $HOME/telegram-configuration
cp -R build-system/example-configuration/* $HOME/telegram-configuration/
```

- Modify the values in `variables.bzl`
- Replace the provisioning profiles in `provisioning` with valid files

4. (Optional) Create a build cache directory to speed up rebuilds

```
mkdir -p "$HOME/telegram-bazel-cache"
```

5. Build the app

```
python3 build-system/Make/Make.py \
    --cacheDir="$HOME/telegram-bazel-cache" \
    build \
    --configurationPath="$HOME/telegram-configuration" \
    --buildNumber=100001 \
    --configuration=release_universal
```

6. (Optional) Generate an Xcode project

```
python3 build-system/Make/Make.py \
    --cacheDir="$HOME/telegram-bazel-cache" \
    generateProject \
    --configurationPath="$HOME/telegram-configuration" \
    --disableExtensions
```

It is possible to generate a project that does not require any codesigning certificates to be installed: add `--disableProvisioningProfiles` flag:
```
python3 build-system/Make/Make.py \
    --cacheDir="$HOME/telegram-bazel-cache" \
    generateProject \
    --configurationPath="$HOME/telegram-configuration" \
    --disableExtensions \
    --disableProvisioningProfiles
```


Tip: use `--disableExtensions` when developing to speed up development by not building application extensions and the WatchOS app.


# Tips

Bazel is used to build the app. To simplify the development setup a helper script is provided (`build-system/Make/Make.py`). See help:

```
python3 build-system/Make/Make.py --help
python3 build-system/Make/Make.py build --help
python3 build-system/Make/Make.py generateProject --help
```

Bazel is automatically downloaded when running Make.py for the first time. If you wish to use your own build of Bazel, pass `--bazel=path-to-bazel`. If your Bazel version differs from that in `versions.json`, you may use `--overrideBazelVersion` to skip the version check.

Each release is built using specific Xcode and Bazel versions (see `versions.json`). The helper script checks the versions of installed software and reports an error if they don't match the ones specified in `versions.json`. There are flags that allow to bypass these checks:

```
python3 build-system/Make/Make.py --overrideBazelVersion build ... # Don't check the version of Bazel
python3 build-system/Make/Make.py --overrideXcodeVersion build ... # Don't check the version of Xcode
```

