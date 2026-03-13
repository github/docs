import searchReplace from 'markdownlint-rule-search-replace'
import markdownlintGitHub from '@github/markdownlint-github'

import { imageAltTextEndPunctuation } from '@/content-linter/lib/linting-rules/image-alt-text-end-punctuation'
import { imageFileKebabCase } from '@/content-linter/lib/linting-rules/image-file-kebab-case'
import { incorrectAltTextLength } from '@/content-linter/lib/linting-rules/image-alt-text-length'
import { internalLinksNoLang } from '@/content-linter/lib/linting-rules/internal-links-no-lang'
import { internalLinksSlash } from '@/content-linter/lib/linting-rules/internal-links-slash'
import { imageAltTextExcludeStartWords } from '@/content-linter/lib/linting-rules/image-alt-text-exclude-start-words'
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
import { liquidIfversionVersions } from '@/content-linter/lib/linting-rules/liquid-ifversion-versions'
import { outdatedReleasePhaseTerminology } from '@/content-linter/lib/linting-rules/outdated-release-phase-terminology'
import { frontmatterVersionsWhitespace } from '@/content-linter/lib/linting-rules/frontmatter-versions-whitespace'
import { thirdPartyActionsReusable } from '@/content-linter/lib/linting-rules/third-party-actions-reusable'
import { frontmatterLandingCarousels } from '@/content-linter/lib/linting-rules/frontmatter-landing-carousels'
import { ctasSchema } from '@/content-linter/lib/linting-rules/ctas-schema'
import { journeyTracksLiquid } from './journey-tracks-liquid'
import { journeyTracksGuidePathExists } from './journey-tracks-guide-path-exists'
import { journeyTracksUniqueIds } from './journey-tracks-unique-ids'
import { frontmatterHeroImage } from './frontmatter-hero-image'
import { frontmatterIntroLinks } from './frontmatter-intro-links'
import { frontmatterChildren } from './frontmatter-children'

// Using any type because @github/markdownlint-github doesn't provide TypeScript declarations
// The elements in the array have a 'names' property that contains rule identifiers
const noDefaultAltText = markdownlintGitHub.find((elem: any) =>
  elem.names.includes('no-default-alt-text'),
)
// Using any type because @github/markdownlint-github doesn't provide TypeScript declarations
const noGenericLinkText = markdownlintGitHub.find((elem: any) =>
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
    imageAltTextExcludeStartWords, // GHD031
    imageAltTextEndPunctuation, // GHD032
    incorrectAltTextLength, // GHD033
    raiReusableUsage, // GHD035
    imageNoGif, // GHD036
    expiredContent, // GHD038
    expiringSoon, // GHD039
    tableLiquidVersioning, // GHD040
    thirdPartyActionPinning, // GHD041
    liquidTagWhitespace, // GHD042
    linkQuotation, // GHD043
    // GHD044 removed - octicon aria-labels are now auto-generated
    codeAnnotationCommentSpacing, // GHD045
    outdatedReleasePhaseTerminology, // GHD046
    tableColumnIntegrity, // GHD047
    frontmatterVersionsWhitespace, // GHD051
    thirdPartyActionsReusable, // GHD054
    frontmatterLandingCarousels, // GHD056
    ctasSchema, // GHD057
    journeyTracksLiquid, // GHD058
    journeyTracksGuidePathExists, // GHD059
    journeyTracksUniqueIds, // GHD060
    frontmatterHeroImage, // GHD061
    frontmatterIntroLinks, // GHD062
    frontmatterChildren, // GHD063

    // Search-replace rules
    searchReplace, // Open-source plugin
  ],
}
