import { useReducer } from 'react';

/**
 * Return type of the `useToggle` hook.
 */
type UseToggleReturn<T> = [
	/**
	 * Current value.
	 */
	T,
	/**
	 * Toggle function.
	 */
	() => void
]

/**
 * Default toggle function.
 * Uses boolean toggling.
 * @param {boolean} value
 */
const defaultFunction = (value: boolean): boolean => !value;

/**
 * React hook to toggle a boolean value.
 * Starts with `false` by default.
 */
export function useToggle<T = boolean>(): UseToggleReturn<T>;
/**
 * React hook to toggle a passed boolean value.
 */
export function useToggle<T = boolean>(initialValue: T): UseToggleReturn<T>;
/**
 * React hook to toggle a passed value with a custom function.
 */
export function useToggle<T>(initialValue: T, toggleFunction: (value: T) => T): UseToggleReturn<T>;
/**
 * React hook to toggle a passed value with a custom function.
 * Uses boolean toggling by default.
 */
export function useToggle(
	initialValue = false,
	toggleFunction = defaultFunction
) {
	return useReducer(toggleFunction, initialValue);
}
