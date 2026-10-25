import path from 'path'
import { describe, expect, test } from 'vitest'
import {
  isActorExcluded,
  actorTypeMap,
  getProgAccessData,
  isOperationExcludedForFineGrainedPat,
} from '../scripts/sync'

describe('excluded_actors filtering', () => {
  test('returns false when excludedActors is undefined', () => {
    expect(isActorExcluded(undefined, 'server_to_server')).toBe(false)
  })

  test('returns false when excludedActors is null', () => {
    expect(isActorExcluded(null, 'server_to_server')).toBe(false)
  })

  test('returns false when excludedActors is not an array', () => {
    expect(isActorExcluded('not-an-array', 'server_to_server')).toBe(false)
    expect(isActorExcluded({}, 'server_to_server')).toBe(false)
  })

  test('returns false when excludedActors is empty array', () => {
    expect(isActorExcluded([], 'server_to_server')).toBe(false)
  })

  test('returns true when actorType is in excludedActors', () => {
    expect(isActorExcluded(['server_to_server'], 'server_to_server')).toBe(true)
    expect(isActorExcluded(['server_to_server', 'fine_grained_pat'], 'server_to_server')).toBe(true)
    expect(isActorExcluded(['user_to_server', 'fine_grained_pat'], 'fine_grained_pat')).toBe(true)
  })

  test('returns false when actorType is not in excludedActors', () => {
    expect(isActorExcluded(['server_to_server'], 'fine_grained_pat')).toBe(false)
    expect(isActorExcluded(['user_to_server'], 'server_to_server')).toBe(false)
    expect(isActorExcluded(['server_to_server', 'user_to_server'], 'fine_grained_pat')).toBe(false)
  })

  test('handles various actor type values', () => {
    const excludedActors = ['server_to_server', 'fine_grained_pat', 'user_to_server']

    expect(isActorExcluded(excludedActors, 'server_to_server')).toBe(true)
    expect(isActorExcluded(excludedActors, 'fine_grained_pat')).toBe(true)
    expect(isActorExcluded(excludedActors, 'user_to_server')).toBe(true)
    expect(isActorExcluded(excludedActors, 'some_other_actor')).toBe(false)
  })

  test('handles actor type mapping from generic to YAML values', () => {
    expect(isActorExcluded(['UserProgrammaticAccess'], 'fine_grained_pat', actorTypeMap)).toBe(true)
    expect(isActorExcluded(['github_app'], 'server_to_server', actorTypeMap)).toBe(true)
    expect(isActorExcluded(['user_access_token'], 'user_to_server', actorTypeMap)).toBe(true)
    expect(isActorExcluded(['some_unmapped_actor'], 'some_unmapped_actor')).toBe(true)
    expect(isActorExcluded(['some_unmapped_actor'], 'different_actor')).toBe(false)
  })

  test('handles mixed generic and YAML actor type values', () => {
    const mixedExcludedActors = ['UserProgrammaticAccess', 'github_app', 'user_access_token']

    expect(isActorExcluded(mixedExcludedActors, 'fine_grained_pat', actorTypeMap)).toBe(true)
    expect(isActorExcluded(mixedExcludedActors, 'server_to_server', actorTypeMap)).toBe(true)
    expect(isActorExcluded(mixedExcludedActors, 'user_to_server', actorTypeMap)).toBe(true)

    expect(isActorExcluded(mixedExcludedActors, 'unmapped_actor', actorTypeMap)).toBe(false)
  })

  test('verifies independent filtering of server_to_server and user_to_server', () => {
    const onlyServerExcluded = ['server_to_server']
    expect(isActorExcluded(onlyServerExcluded, 'server_to_server')).toBe(true)
    expect(isActorExcluded(onlyServerExcluded, 'user_to_server')).toBe(false)

    const onlyUserExcluded = ['user_to_server']
    expect(isActorExcluded(onlyUserExcluded, 'server_to_server')).toBe(false)
    expect(isActorExcluded(onlyUserExcluded, 'user_to_server')).toBe(true)

    const bothExcluded = ['server_to_server', 'user_to_server']
    expect(isActorExcluded(bothExcluded, 'server_to_server')).toBe(true)
    expect(isActorExcluded(bothExcluded, 'user_to_server')).toBe(true)

    const neitherExcluded = ['fine_grained_pat']
    expect(isActorExcluded(neitherExcluded, 'server_to_server')).toBe(false)
    expect(isActorExcluded(neitherExcluded, 'user_to_server')).toBe(false)
  })

  test('handles actor type mapping from generic to YAML values', () => {
    expect(
      isActorExcluded(['fine_grained_personal_access_token'], 'fine_grained_pat', actorTypeMap),
    ).toBe(true)
    expect(isActorExcluded(['github_app'], 'server_to_server', actorTypeMap)).toBe(true)
    expect(isActorExcluded(['user_access_token'], 'user_to_server', actorTypeMap)).toBe(true)
    expect(isActorExcluded(['some_unmapped_actor'], 'some_unmapped_actor')).toBe(true)
    expect(isActorExcluded(['some_unmapped_actor'], 'different_actor')).toBe(false)
  })

  test('handles mixed generic and YAML actor type values', () => {
    const mixedExcludedActors = [
      'fine_grained_personal_access_token',
      'github_app',
      'user_access_token',
    ]

    expect(isActorExcluded(mixedExcludedActors, 'fine_grained_pat', actorTypeMap)).toBe(true)
    expect(isActorExcluded(mixedExcludedActors, 'server_to_server', actorTypeMap)).toBe(true)

    expect(isActorExcluded(mixedExcludedActors, 'user_to_server', actorTypeMap)).toBe(true)

    expect(isActorExcluded(mixedExcludedActors, 'unmapped_actor', actorTypeMap)).toBe(false)
  })

  test('handles UserProgrammaticAccess alias for fine_grained_pat', () => {
    expect(isActorExcluded(['UserProgrammaticAccess'], 'fine_grained_pat')).toBe(true)

    const mixedWithUserProgrammatic = ['UserProgrammaticAccess', 'github_app']
    expect(isActorExcluded(mixedWithUserProgrammatic, 'fine_grained_pat')).toBe(true)
    expect(isActorExcluded(mixedWithUserProgrammatic, 'server_to_server', actorTypeMap)).toBe(true)
    expect(isActorExcluded(mixedWithUserProgrammatic, 'user_to_server')).toBe(false)

    const bothValues = ['fine_grained_personal_access_token', 'UserProgrammaticAccess']
    expect(isActorExcluded(bothValues, 'fine_grained_pat', actorTypeMap)).toBe(true)
  })
})

describe('isOperationExcludedForFineGrainedPat', () => {
  const progActorResources = {
    checks: { excluded_actors: ['fine_grained_personal_access_token'] },
    legacy: { excluded_actors: ['UserProgrammaticAccess'] },
    contents: {},
  }

  test('keeps operations that have no permission sets', () => {
    expect(isOperationExcludedForFineGrainedPat([], progActorResources)).toBe(false)
  })

  test('excludes operations when every permission set excludes fine-grained PATs', () => {
    expect(isOperationExcludedForFineGrainedPat([{ checks: 'read' }], progActorResources)).toBe(
      true,
    )
  })

  test('keeps operations when any permission set allows fine-grained PATs', () => {
    expect(
      isOperationExcludedForFineGrainedPat(
        [{ checks: 'read' }, { contents: 'read' }],
        progActorResources,
      ),
    ).toBe(false)
  })

  test('keeps operations whose permissions have no excluded actors', () => {
    expect(isOperationExcludedForFineGrainedPat([{ contents: 'read' }], progActorResources)).toBe(
      false,
    )
  })

  test('returns true for the UserProgrammaticAccess alias', () => {
    expect(isOperationExcludedForFineGrainedPat([{ legacy: 'read' }], progActorResources)).toBe(
      true,
    )
  })

  test('returns true when a set requires an excluded permission alongside an allowed one', () => {
    expect(
      isOperationExcludedForFineGrainedPat(
        [{ checks: 'read', contents: 'read' }],
        progActorResources,
      ),
    ).toBe(true)
  })

  test('returns false when another set has only allowed permissions', () => {
    expect(
      isOperationExcludedForFineGrainedPat(
        [{ checks: 'read', contents: 'read' }, { contents: 'read' }],
        progActorResources,
      ),
    ).toBe(false)
  })

  test('returns false when a permission has no resource definition', () => {
    expect(isOperationExcludedForFineGrainedPat([{ unknown: 'read' }], progActorResources)).toBe(
      false,
    )
  })
})

describe('getProgAccessData fine-grained PAT support', () => {
  const fixtureSource = path.join(__dirname, 'fixtures/prog-access')

  test('marks operations whose permissions all exclude fine-grained PATs as unsupported', async () => {
    const { progAccessData } = await getProgAccessData(fixtureSource, true)
    expect(progAccessData['checks/create'].fineGrainedPat).toBe(false)
    expect(progAccessData['checks/create'].userToServerRest).toBe(true)
    expect(progAccessData['checks/create'].permissions).toEqual([
      { '"Checks" repository permissions': 'write' },
    ])
  })

  test('keeps fine-grained PAT support for allowed and permissionless operations', async () => {
    const { progAccessData } = await getProgAccessData(fixtureSource, true)
    expect(progAccessData['repos/get-content'].fineGrainedPat).toBe(true)
    expect(progAccessData['meta/get'].fineGrainedPat).toBe(true)
  })
})
