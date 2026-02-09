# FastMCP Server

A TypeScript-based Model Context Protocol (MCP) server implementation.

## Overview

FastMCP Server is a starter template for building MCP servers that can integrate with LLM applications. MCP enables seamless communication between language models and external data sources, tools, and services.

## Features

- TypeScript-based implementation
- Built on the official Model Context Protocol SDK
- Structured server setup with stdio transport
- Sample tool implementation

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Install dependencies:

```bash
npm install
```

2. Build the project:

```bash
npm run build
```

## Development

To run in development mode with auto-recompilation:

```bash
npm run dev
```

Or to watch for changes:

```bash
npm run watch
```

## Building

```bash
npm run build
```

The compiled JavaScript will be output to the `build/` directory.

## Running

```bash
npm start
```

## Project Structure

```
fastmcp-server/
├── src/
│   └── index.ts          # Main server implementation
├── build/                # Compiled JavaScript output
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── README.md             # This file
└── .gitignore            # Git ignore rules
```

## Adding Tools

To add new tools to the server, modify the `setupHandlers()` method in `src/index.ts`:

1. Add the tool definition to the `ListToolsRequestSchema` handler
2. Add the tool implementation to the `CallToolRequestSchema` handler

Example:

```typescript
{
  name: "get-weather",
  description: "Get weather information for a location",
  inputSchema: {
    type: "object",
    properties: {
      location: {
        type: "string",
        description: "City name or coordinates",
      },
    },
    required: ["location"],
  },
}
```

## Documentation

For more information on the Model Context Protocol, visit:
- [MCP Documentation](https://modelcontextprotocol.io/)
- [TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [Protocol Specification](https://modelcontextprotocol.io/specification/latest)

## License

MIT
