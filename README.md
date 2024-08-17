# `safe-try`

Want this?

```ts
const [result, error] = try await asyncMightFail();
```

Do this!

```ts
const [result, error] = await try_(asyncMightFail());
```

## Usage

```ts
import { try_ } from "safe-try";
const [result, error] = await try_(asyncMightFail());
```
