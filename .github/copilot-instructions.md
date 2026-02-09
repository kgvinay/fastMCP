# FastMCP Workspace Configuration

This is a FastMCP (Model Context Protocol) workspace for building MCP servers and applications.

## Project Information

**Type:** FastMCP MCP Server (TypeScript)  
**Language:** TypeScript  
**Status:** Ready for development  
**Created:** February 9, 2026  

## Project Structure

```
fastmcp-server/
├── src/
│   └── index.ts              # Main MCP server implementation
├── build/                    # Compiled JavaScript output
├── .vscode/
│   ├── mcp.json             # MCP server configuration
│   └── tasks.json           # VS Code build and run tasks
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── README.md                # Project documentation
└── .gitignore              # Git ignore rules
```

## Documentation References

- **MCP Protocol**: https://modelcontextprotocol.io/
- **TypeScript SDK**: https://github.com/modelcontextprotocol/typescript-sdk
- **MCP Specification**: https://modelcontextprotocol.io/specification/latest
- **MCP Servers Registry**: https://github.com/modelcontextprotocol/servers

## Available Commands

- `npm install` - Install dependencies
- `npm run build` - Build the TypeScript project
- `npm start` - Start the MCP server
- `npm run dev` - Build and run in development mode
- `npm run watch` - Watch for TypeScript changes

## Development Tasks

Three VS Code tasks are available:

1. **FastMCP: Build** - Builds the TypeScript code (Ctrl+Shift+B)
2. **FastMCP: Start Server** - Starts the MCP server in stdio mode
3. **FastMCP: Development Mode** - Builds and runs the server

## Debugging

To debug the MCP server in VS Code:

1. Open the VS Code Run and Debug panel
2. Create a launch configuration that runs the server
3. The server uses stdio transport for communication with clients

## Adding New Tools

To extend the server with new tools:

1. Add tool definitions to the `ListToolsRequestSchema` handler in `src/index.ts`
2. Add corresponding implementations to the `CallToolRequestSchema` handler
3. Run `npm run build` to compile changes
4. Restart the server

## Setup Status

- [x] Clarify Project Requirements (TypeScript-based MCP Server)
- [x] Scaffold the Project (Created structure with build configuration)
- [x] Install Required Extensions (No extensions needed; built on Node.js)
- [x] Compile the Project (Successfully compiled with tsc)
- [x] Create and Run Task (VS Code tasks configured)
- [x] Launch the Project (Ready to run)
- [x] Ensure Documentation is Complete (README.md and configuration complete)

