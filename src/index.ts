#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  TextContent,
} from "@modelcontextprotocol/sdk/types.js";

/**
 * FastMCP Server - A Model Context Protocol Server
 * 
 * This server provides tools and resources for LLM applications
 * to interact with external data sources and services.
 */

class FastMCPServer {
  private server: Server;

  constructor() {
    this.server = new Server({
      name: "fastmcp-server",
      version: "1.0.0",
    });

    this.setupHandlers();
  }

  private setupHandlers(): void {
    // Handle list tools request
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: "hello",
            description: "Returns a greeting message",
            inputSchema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  description: "Name to greet",
                },
              },
              required: ["name"],
            },
          },
        ],
      };
    });

    // Handle call tool request
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      if (request.params.name === "hello") {
        const name = (request.params.arguments as Record<string, string>).name;
        return {
          content: [
            {
              type: "text",
              text: `Hello, ${name}! Welcome to FastMCP Server.`,
            } as TextContent,
          ],
        };
      }

      return {
        content: [
          {
            type: "text",
            text: `Unknown tool: ${request.params.name}`,
          } as TextContent,
        ],
        isError: true,
      };
    });
  }

  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("FastMCP Server running on stdio");
  }
}

// Main entry point
const server = new FastMCPServer();
server.run().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
