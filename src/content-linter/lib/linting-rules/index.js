import searchReplace from 'markdownlint-rule-search-replace'
import markdownlintGitHub from '@github/markdownlint-github'

import { codeFenceLineLength } from '@/content-linter/lib/linting-rules/code-fence-line-length'
import { imageAltTextEndPunctuation } from '@/content-linter/lib/linting-rules/image-alt-text-end-punctuation'
import { imageFileKebabCase } from '@/content-linter/lib/linting-rules/image-file-kebab-case'
import { incorrectAltTextLength } from '@/content-linter/lib/linting-rules/image-alt-text-length'
import { internalLinksNoLang } from '@/content-linter/lib/linting-rules/internal-links-no-lang'
import { internalLinksSlash } from '@/content-linter/lib/linting-rules/internal-links-slash'
import { imageAltTextExcludeStartWords } from '@/content-linter/lib/linting-rules/image-alt-text-exclude-start-words'
import { listFirstWordCapitalization } from '@/content-linter/lib/linting-rules/list-first-word-capitalization'
import { linkPunctuation } from '@/content-linter/lib/linting-rules/link-punctuation'
import {
  earlyAccessReferences,
  frontmatterEarlyAccessReferences,
} from '@/content-linter/lib/linting-rules/early-access-references'
import { frontmatterHiddenDocs } from '@/content-linter/lib/linting-rules/frontmatter-hidden-docs'
import { frontmatterVideoTranscripts } from '@/content-linter/lib/linting-rules/frontmatter-video-transcripts'
import { yamlScheduledJobs } from '@/content-linter/lib/linting-rules/yaml-scheduled-jobs'
import { internalLinksOldVersion } from '@/content-linter/lib/linting-rules/internal-links-old-version'
import { hardcodedDataVariable } from '@/content-linter/lib/linting-rules/hardcoded-data-variable'
import { githubOwnedActionReferences } from '@/content-linter/lib/linting-rules/github-owned-action-references'
import { liquidQuotedConditionalArg } from '@/content-linter/lib/linting-rules/liquid-quoted-conditional-arg'
import {
  liquidDataReferencesDefined,
  liquidDataTagFormat,
} from '@/content-linter/lib/linting-rules/liquid-data-tags'
import { frontmatterSchema } from '@/content-linter/lib/linting-rules/frontmatter-schema'
import { codeAnnotations } from '@/content-linter/lib/linting-rules/code-annotations'
import { codeAnnotationCommentSpacing } from '@/content-linter/lib/linting-rules/code-annotation-comment-spacing'
import {
  frontmatterLiquidSyntax,
  liquidSyntax,
} from '@/content-linter/lib/linting-rules/liquid-syntax'
import {
  liquidIfTags,
  liquidIfVersionTags,
} from '@/content-linter/lib/linting-rules/liquid-versioning'
import { raiReusableUsage } from '@/content-linter/lib/linting-rules/rai-reusable-usage'
import { imageNoGif } from '@/content-linter/lib/linting-rules/image-no-gif'
import { expiredContent, expiringSoon } from '@/content-linter/lib/linting-rules/expired-content'
import { tableLiquidVersioning } from '@/content-linter/lib/linting-rules/table-liquid-versioning'
import { tableColumnIntegrity } from '@/content-linter/lib/linting-rules/table-column-integrity'
import { thirdPartyActionPinning } from '@/content-linter/lib/linting-rules/third-party-action-pinning'
import { liquidTagWhitespace } from '@/content-linter/lib/linting-rules/liquid-tag-whitespace'
import { linkQuotation } from '@/content-linter/lib/linting-rules/link-quotation'
import { octiconAriaLabels } from '@/content-linter/lib/linting-rules/octicon-aria-labels'
import { liquidIfversionVersions } from '@/content-linter/lib/linting-rules/liquid-ifversion-versions'
import { outdatedReleasePhaseTerminology } from '@/content-linter/lib/linting-rules/outdated-release-phase-terminology'
import { britishEnglishQuotes } from '@/content-linter/lib/linting-rules/british-english-quotes'
import { multipleEmphasisPatterns } from '@/content-linter/lib/linting-rules/multiple-emphasis-patterns'
import { noteWarningFormatting } from '@/content-linter/lib/linting-rules/note-warning-formatting'
import { frontmatterVersionsWhitespace } from '@/content-linter/lib/linting-rules/frontmatter-versions-whitespace'
import { frontmatterValidation } from '@/content-linter/lib/linting-rules/frontmatter-validation'
import { headerContentRequirement } from '@/content-linter/lib/linting-rules/header-content-requirement'
import { thirdPartyActionsReusable } from '@/content-linter/lib/linting-rules/third-party-actions-reusable'

const noDefaultAltText = markdownlintGitHub.find((elem) =>
  elem.names.includes('no-default-alt-text'),
)
const noGenericLinkText = markdownlintGitHub.find((elem) =>
  elem.names.includes('no-generic-link-text'),
)

export const gitHubDocsMarkdownlint = {
  rules: [
    // GH rules (markdownlint-github)
    noDefaultAltText, // GH001
    noGenericLinkText, // GH002

    // GHD rules (GitHub Docs custom rules, in numerical order)
    linkPunctuation, // GHD001
    internalLinksNoLang, // GHD002
    internalLinksSlash, // GHD003
    imageFileKebabCase, // GHD004
    hardcodedDataVariable, // GHD005
    internalLinksOldVersion, // GHD006
    codeAnnotations, // GHD007
    earlyAccessReferences, // GHD008
    frontmatterEarlyAccessReferences, // GHD009
    frontmatterHiddenDocs, // GHD010
    frontmatterVideoTranscripts, // GHD011
    frontmatterSchema, // GHD012
    githubOwnedActionReferences, // GHD013
    liquidDataReferencesDefined, // GHD014
    liquidDataTagFormat, // GHD015
    liquidQuotedConditionalArg, // GHD016
    frontmatterLiquidSyntax, // GHD017
    liquidSyntax, // GHD018
    liquidIfTags, // GHD019
    liquidIfVersionTags, // GHD020
    yamlScheduledJobs, // GHD021
    liquidIfversionVersions, // GHD022
    codeFenceLineLength, // GHD030
    imageAltTextExcludeStartWords, // GHD031
    imageAltTextEndPunctuation, // GHD032
    incorrectAltTextLength, // GHD033
    listFirstWordCapitalization, // GHD034
    raiReusableUsage, // GHD035
    imageNoGif, // GHD036
    expiredContent, // GHD038
    expiringSoon, // GHD039
    tableLiquidVersioning, // GHD040
    thirdPartyActionPinning, // GHD041
    liquidTagWhitespace, // GHD042
    linkQuotation, // GHD043
    octiconAriaLabels, // GHD044
    codeAnnotationCommentSpacing, // GHD045
    outdatedReleasePhaseTerminology, // GHD046
    tableColumnIntegrity, // GHD047
    britishEnglishQuotes, // GHD048
    noteWarningFormatting, // GHD049
    multipleEmphasisPatterns, // GHD050
    frontmatterVersionsWhitespace, // GHD051
    headerContentRequirement, // GHD053
    thirdPartyActionsReusable, // GHD054
    frontmatterValidation, // GHD055

    // Search-replace rules
    searchReplace, // Open-source plugin
  ],
}
