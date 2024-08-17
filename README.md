# `safe-try`

Want this?

```ts
const [result, error] = try await asyncMightFail();
```

Do this!

```ts
const [result, error] = await try_(asyncMightFail());
```

Inspired by Matt Pocock's [tweet](https://x.com/mattpocockuk/status/1823822755562967230):

![tweet-1823822755562967230](https://github.com/user-attachments/assets/3902fc31-123f-46ff-9da9-847a9ceb942c)


## Usage

```ts
import { try_ } from "safe-try";
const [result, error] = await try_(asyncMightFail());
```
