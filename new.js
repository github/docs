// src/firebase/auth.js

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,} from 'firebase/auth'
import { auth } from './firebase-init.js'

/**
 * Creates a new user with email and password.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>} The created user object.
 */
export async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log('Successfully created user:', userCredential.user.uid)
    return userCredential.user
  } catch (error) {
    console.error('Error signing up:', error.message)
    throw error // Re-throw the error to be handled by the caller
  }
}

/**
 * Signs in an existing user.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>} The signed-in user object.
 */
export async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    console.log('Successfully signed in:', userCredential.user.uid)
    return userCredential.user
  } catch (error) {
    console.error('Error signing in:', error.message)
    throw error
  }
}

/**
 * Signs out the current user.
 */
export function logOut() {
  return signOut(auth)
}

/**
 * Listens for changes in the user's authentication state.
 * @param {function} callback - A function to call with the user object (or null).
 * @returns {function} An unsubscribe function.
 */
export function onAuthStateChange(callback) {
  return onAuthStateChanged(auth, callback)
}
