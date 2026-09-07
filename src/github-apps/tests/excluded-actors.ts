import { describe, expect, test } from 'vitest'
import { isActorExcluded, actorTypeMap } from '../scripts/sync'

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
    // Test with actual YAML values that would come from the config files
    expect(isActorExcluded(['UserProgrammaticAccess'], 'fine_grained_pat', actorTypeMap)).toBe(true)
    expect(isActorExcluded(['github_app'], 'server_to_server', actorTypeMap)).toBe(true)
    expect(isActorExcluded(['user_access_token'], 'user_to_server', actorTypeMap)).toBe(true)

    // Test fallback when no mapping exists
    expect(isActorExcluded(['some_unmapped_actor'], 'some_unmapped_actor')).toBe(true)
    expect(isActorExcluded(['some_unmapped_actor'], 'different_actor')).toBe(false)
  })

  test('handles mixed generic and YAML actor type values', () => {
    const mixedExcludedActors = ['UserProgrammaticAccess', 'github_app', 'user_access_token']

    // Should match mapped values
    expect(isActorExcluded(mixedExcludedActors, 'fine_grained_pat', actorTypeMap)).toBe(true)
    expect(isActorExcluded(mixedExcludedActors, 'server_to_server', actorTypeMap)).toBe(true)
    expect(isActorExcluded(mixedExcludedActors, 'user_to_server', actorTypeMap)).toBe(true)

    // Should not match unmapped values
    expect(isActorExcluded(mixedExcludedActors, 'unmapped_actor', actorTypeMap)).toBe(false)
  })

  test('verifies independent filtering of server_to_server and user_to_server', () => {
    // Only server_to_server excluded
    const onlyServerExcluded = ['server_to_server']
    expect(isActorExcluded(onlyServerExcluded, 'server_to_server')).toBe(true)
    expect(isActorExcluded(onlyServerExcluded, 'user_to_server')).toBe(false)

    // Only user_to_server excluded
    const onlyUserExcluded = ['user_to_server']
    expect(isActorExcluded(onlyUserExcluded, 'server_to_server')).toBe(false)
    expect(isActorExcluded(onlyUserExcluded, 'user_to_server')).toBe(true)

    // Both excluded
    const bothExcluded = ['server_to_server', 'user_to_server']
    expect(isActorExcluded(bothExcluded, 'server_to_server')).toBe(true)
    expect(isActorExcluded(bothExcluded, 'user_to_server')).toBe(true)

    // Neither excluded
    const neitherExcluded = ['fine_grained_pat']
    expect(isActorExcluded(neitherExcluded, 'server_to_server')).toBe(false)
    expect(isActorExcluded(neitherExcluded, 'user_to_server')).toBe(false)
  })

  test('handles actor type mapping from generic to YAML values', () => {
    // Test with actual YAML values that would come from the config files
    expect(
      isActorExcluded(['fine_grained_personal_access_token'], 'fine_grained_pat', actorTypeMap),
    ).toBe(true)
    expect(isActorExcluded(['github_app'], 'server_to_server', actorTypeMap)).toBe(true)
    expect(isActorExcluded(['user_access_token'], 'user_to_server', actorTypeMap)).toBe(true)

    // Test fallback when no mapping exists
    expect(isActorExcluded(['some_unmapped_actor'], 'some_unmapped_actor')).toBe(true)
    expect(isActorExcluded(['some_unmapped_actor'], 'different_actor')).toBe(false)
  })

  test('handles mixed generic and YAML actor type values', () => {
    const mixedExcludedActors = [
      'fine_grained_personal_access_token',
      'github_app',
      'user_access_token',
    ]

    // Should match mapped values
    expect(isActorExcluded(mixedExcludedActors, 'fine_grained_pat', actorTypeMap)).toBe(true)
    expect(isActorExcluded(mixedExcludedActors, 'server_to_server', actorTypeMap)).toBe(true)

    // Should match mapped values
    expect(isActorExcluded(mixedExcludedActors, 'user_to_server', actorTypeMap)).toBe(true)

    // Should not match unmapped values
    expect(isActorExcluded(mixedExcludedActors, 'unmapped_actor', actorTypeMap)).toBe(false)
  })

  test('handles UserProgrammaticAccess alias for fine_grained_pat', () => {
    // Test that UserProgrammaticAccess (actual source data value) is recognized as fine_grained_pat
    expect(isActorExcluded(['UserProgrammaticAccess'], 'fine_grained_pat')).toBe(true)

    // Test mixed scenarios with UserProgrammaticAccess
    const mixedWithUserProgrammatic = ['UserProgrammaticAccess', 'github_app']
    expect(isActorExcluded(mixedWithUserProgrammatic, 'fine_grained_pat')).toBe(true)
    expect(isActorExcluded(mixedWithUserProgrammatic, 'server_to_server', actorTypeMap)).toBe(true)
    expect(isActorExcluded(mixedWithUserProgrammatic, 'user_to_server')).toBe(false)

    // Test that both mapped value and alias work
    const bothValues = ['fine_grained_personal_access_token', 'UserProgrammaticAccess']
    expect(isActorExcluded(bothValues, 'fine_grained_pat', actorTypeMap)).toBe(true)
  })
})
