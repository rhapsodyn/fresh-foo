# fresh project

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.


## Demo

magic show

## Same

1. file-system router (pages/folder/path/[id])
1. React ~= Preact
1. coding in tsx

## Diff

| | Fresh | Next.is |
| async-lo | tokio (moderm `rust`) | libuv (old-school `C++`) |
| code base | - 5k loc | - 400k loc |
| serverless | deno deploy | vercel |
| build | JIT build: build on the fly (esbuild powered) | AOT build: webpack (swc powered) |
| hydration | node by node | on root |

### Low-level Lib

1. new-school: `tokio` which powered `linkerd` `tidb' etc, already support `iouring`
1. old-school: old codebase, async-fs in multi-thread: [UV_THREADPQOL_SIZE](https://nodejs.org/api/cli.html#uv_threadpool_sizesize)

### Voyage Of A Request

1. nextis:
	1. `*.js`: static
	1. `*.html`:
		1. with getServerSideProps : render ToString instantly
		1. without "getServerSideProps" : pre-rendered static
	1. `*.json`: just getServerSideProps" and return props json
1. fresh:
	1. `*.html`: [renderToString](/src/server/render.ts) instantly
	1. `*.js`: [#bundler.get (/src/server/context.ts) **instantly**

### lsland Pattern

[islands](https://www.patterns.dev/posts/islands-architecture/)
