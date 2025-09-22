import { useReducer } from 'react';

const defaultFunction = (value: boolean): boolean => !value;

/**
 * React hook to toggle a passed value with a custom function.
 * Uses boolean toggling by default.
 *
 * @param initialValue
 * @param toggleFunction
 */
function useToggle(
	initialValue = false,
	toggleFunction = defaultFunction
): [boolean, () => void] {
	const [state, toggleState] = useReducer(toggleFunction, initialValue);

	return [state, toggleState];
}

export default useToggle;
