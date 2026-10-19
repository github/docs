import { describe, expect, test } from 'vitest'

import {
  filterByAllowlistValues,
  filterAndUpdateGhesDataByAllowlistValues,
  resolveReferenceLinksToMarkdown,
  type TitleResolutionContext,
} from '../../lib'
import type { RawAuditLogEventT, VersionedAuditLogData } from '../../types'

describe('audit log event filtering', () => {
  test('matches single allowlist value', async () => {
    const eventsToProcess: RawAuditLogEventT[] = [
      {
        action: 'repo.create',
        _allowlists: ['user'],
        description: 'repo was created',
        docs_reference_links: '',
        ghes: {},
      },
    ]

    const filteredEvents = await filterByAllowlistValues({
      eventsToCheck: eventsToProcess,
      allowListValues: 'user',
      currentEvents: [],
      pipelineConfig: {
        sha: '',
        appendedDescriptions: {},
      },
    })
    expect(filteredEvents[0].action).toEqual('repo.create')
  })

  test('matches multiple allowlist values', async () => {
    const eventsToProcess: RawAuditLogEventT[] = [
      {
        action: 'repo.create',
        _allowlists: ['user'],
        description: 'repo was created',
        docs_reference_links: '',
        ghes: {},
      },
      {
        action: 'repo.delete',
        _allowlists: ['organization'],
        description: 'repo was deleted',
        docs_reference_links: '',
        ghes: {},
      },
    ]

    const filteredEvents = await filterByAllowlistValues({
      eventsToCheck: eventsToProcess,
      allowListValues: ['user', 'organization'],
      currentEvents: [],
      pipelineConfig: {
        sha: '',
        appendedDescriptions: {},
      },
    })
    expect(filteredEvents[0].action).toEqual('repo.create')
    expect(filteredEvents.length).toEqual(2)
  })

  test('does not match non-matching allowlist value', async () => {
    const eventsToProcess: RawAuditLogEventT[] = [
      {
        action: 'repo.create',
        _allowlists: ['user'],
        description: 'repo was created',
        docs_reference_links: '',
        ghes: {},
      },
    ]

    const filteredEvents = await filterByAllowlistValues({
      eventsToCheck: eventsToProcess,
      allowListValues: 'organization',
      currentEvents: [],
      pipelineConfig: {
        sha: '',
        appendedDescriptions: {},
      },
    })
    expect(filteredEvents.length).toBe(0)
  })

  test('merges global fields with event-specific fields', async () => {
    const eventsToProcess: RawAuditLogEventT[] = [
      {
        action: 'repo.create',
        _allowlists: ['user'],
        description: 'repo was created',
        docs_reference_links: '',
        ghes: {},
        fields: ['repo', 'repo_id'],
      },
    ]

    const filteredEvents = await filterByAllowlistValues({
      eventsToCheck: eventsToProcess,
      allowListValues: 'user',
      currentEvents: [],
      pipelineConfig: { sha: '', appendedDescriptions: {} },
      globalFields: ['@timestamp', 'action'],
    })
    expect(filteredEvents[0].fields).toEqual(
      expect.arrayContaining(['@timestamp', 'action', 'repo', 'repo_id']),
    )
    expect(filteredEvents[0].fields?.length).toBe(4)
  })

  test('deduplicates global fields already present in event fields', async () => {
    const eventsToProcess: RawAuditLogEventT[] = [
      {
        action: 'repo.create',
        _allowlists: ['user'],
        description: 'repo was created',
        docs_reference_links: '',
        ghes: {},
        fields: ['action', 'repo'],
      },
    ]

    const filteredEvents = await filterByAllowlistValues({
      eventsToCheck: eventsToProcess,
      allowListValues: 'user',
      currentEvents: [],
      pipelineConfig: { sha: '', appendedDescriptions: {} },
      globalFields: ['@timestamp', 'action'],
    })
    expect(filteredEvents[0].fields).toEqual(
      expect.arrayContaining(['@timestamp', 'action', 'repo']),
    )
    expect(filteredEvents[0].fields?.length).toBe(3)
  })

  test('uses only global fields when event has no fields', async () => {
    const eventsToProcess: RawAuditLogEventT[] = [
      {
        action: 'code_scanning.alert_created',
        _allowlists: ['user'],
        description: 'alert was created',
        docs_reference_links: '',
        ghes: {},
      },
    ]

    const filteredEvents = await filterByAllowlistValues({
      eventsToCheck: eventsToProcess,
      allowListValues: 'user',
      currentEvents: [],
      pipelineConfig: { sha: '', appendedDescriptions: {} },
      globalFields: ['@timestamp', 'action'],
    })
    expect(filteredEvents[0].fields).toEqual(['@timestamp', 'action'])
  })

  test('handles empty globalFields array', async () => {
    const eventsToProcess: RawAuditLogEventT[] = [
      {
        action: 'repo.create',
        _allowlists: ['user'],
        description: 'repo was created',
        docs_reference_links: '',
        ghes: {},
        fields: ['repo', 'repo_id'],
      },
    ]

    const filteredEvents = await filterByAllowlistValues({
      eventsToCheck: eventsToProcess,
      allowListValues: 'user',
      currentEvents: [],
      pipelineConfig: { sha: '', appendedDescriptions: {} },
      globalFields: [],
    })
    expect(filteredEvents[0].fields).toEqual(['repo', 'repo_id'])
  })

  test('resolves reference links without a language prefix to page titles', async () => {
    const eventsToProcess: RawAuditLogEventT[] = [
      {
        action: 'repo.create',
        _allowlists: ['user'],
        description: 'repo was created',
        docs_reference_links: '/foo/bar-page#frag, /foo/missing-page',
        ghes: {},
      },
    ]
    const titleContext = {
      pages: { '/en/foo/bar-page': { renderProp: async () => 'Bar page title' } },
      redirects: {},
    } as unknown as TitleResolutionContext

    const filteredEvents = await filterByAllowlistValues({
      eventsToCheck: eventsToProcess,
      allowListValues: 'user',
      currentEvents: [],
      pipelineConfig: { sha: '', appendedDescriptions: {} },
      titleContext,
    })
    expect(filteredEvents[0].docs_reference_titles).toBe('Bar page title, /foo/missing-page')
  })

  test('resolves Markdown reference links without a language prefix', async () => {
    const titleContext = {
      pages: { '/en/foo/markdown-page': { renderProp: async () => 'Markdown page title' } },
      redirects: {},
    } as unknown as TitleResolutionContext

    const markdown = await resolveReferenceLinksToMarkdown('/foo/markdown-page', titleContext)
    expect(markdown).toBe('[Markdown page title](/foo/markdown-page)')
  })

  test('resolves reference links without a leading slash', async () => {
    const titleContext = {
      pages: { '/en/foo/slashless-page': { renderProp: async () => 'Slashless page title' } },
      redirects: {},
    } as unknown as TitleResolutionContext

    const markdown = await resolveReferenceLinksToMarkdown('foo/slashless-page', titleContext)
    expect(markdown).toBe('[Slashless page title](/foo/slashless-page)')
  })

  test('ghes filters and updates multiple ghes versions', async () => {
    const eventsToProcess: RawAuditLogEventT[] = [
      {
        action: 'repo.create',
        description: 'repo was created',
        docs_reference_links: '',
        _allowlists: [],
        ghes: {
          '3.10': {
            _allowlists: ['user'],
          },
          '3.11': {
            _allowlists: ['user'],
          },
        },
      },
    ]

    const currentEvents: VersionedAuditLogData = {
      'ghes-3.11': {
        organization: [
          {
            action: 'repo.update',
            description: 'repo was created',
          },
        ],
      },
      'ghes-3.12': {
        enterprise: [
          {
            action: 'repo.delete',
            description: 'repo was deleted',
          },
        ],
      },
    }
    const auditLogPage = 'user'

    // filterAndUpdateGhesDataByAllowlistValues mutates currentEvents in place.
    await filterAndUpdateGhesDataByAllowlistValues({
      eventsToCheck: eventsToProcess,
      allowListValue: 'user',
      currentGhesEvents: currentEvents,
      pipelineConfig: {
        sha: '',
        appendedDescriptions: {},
      },
      auditLogPage,
      supportedGhesVersions: ['3.10', '3.11', '3.12'],
    })
    const getActions = (version: string) =>
      currentEvents[version][auditLogPage].map((event) => event.action)
    expect(getActions('ghes-3.10').includes('repo.create')).toBe(true)
    expect(getActions('ghes-3.11').includes('repo.create')).toBe(true)
    expect(auditLogPage in currentEvents['ghes-3.12']).toBeFalsy()
  })

  test('ghes skips versions not in the supported list', async () => {
    const eventsToProcess: RawAuditLogEventT[] = [
      {
        action: 'repo.create',
        description: 'repo was created',
        docs_reference_links: '',
        _allowlists: [],
        ghes: {
          '3.14': {
            _allowlists: ['user'],
          },
          '3.15': {
            _allowlists: ['user'],
          },
        },
      },
    ]

    const currentEvents: VersionedAuditLogData = {}
    const auditLogPage = 'user'

    await filterAndUpdateGhesDataByAllowlistValues({
      eventsToCheck: eventsToProcess,
      allowListValue: 'user',
      currentGhesEvents: currentEvents,
      pipelineConfig: {
        sha: '',
        appendedDescriptions: {},
      },
      auditLogPage,
      supportedGhesVersions: ['3.15'],
    })
    expect(currentEvents['ghes-3.14']).toBeUndefined()
    expect(currentEvents['ghes-3.15'][auditLogPage].map((event) => event.action)).toContain(
      'repo.create',
    )
  })
})
