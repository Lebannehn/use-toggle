# use-toggle

A custom [React](https://react.dev) hook to toggle states.

### Installation

```console
npm i @27-lanterns/use-toggle
```

### Params

| Param          | type              | Optional? | Default value        | Description       |
|----------------|-------------------|--------|----------------------|-------------------|
| initialValue   | `T`               | Yes    | `false`              | An initial value  |
| toggleFunction | `(value: T) => T` | Yes       | `(v: boolean) => !v` | Toggling function |

### Usage

```tsx
import React, { FC } from 'react';
import { useToggle } from '@27-lanterns/use-toggle';

const SomeWizardComponent: FC = () => {
	const [boolValue, toggleBoolValue] = useToggle();
	return <>
        <span>Is enabled? {boolValue ? 'Yes' : 'No'}</span>
        <button onClick={toggleBoolValue}>Toggle</button>
    </>;
};

const togglingFunction = (value: string) => value === 'enabled' ? 'disabled' : 'enabled';

const SomeOtherComponent: FC = () => {
	const [value, toggleValue] = useToggle('disabled', togglingFunction);
	
	return <>
		<span>{value}</span>
		<button onClick={toggleValue}>Toggle</button>
	</>;
};
```
