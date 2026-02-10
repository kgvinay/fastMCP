import logging
import sys

from mcp.server.fastmcp.server import FastMCP

# Ensure any logging goes to stderr so stdio remains reserved for MCP JSON
logging.basicConfig(stream=sys.stderr, level=logging.INFO)

mcp = FastMCP("Demo 🚀")

@mcp.tool()
def add(a: int, b: int) -> int:
    """Add two numbers"""
    return a + b


if __name__ == "__main__":
    # Run the MCP server. Avoid printing to stdout anywhere in this module
    # because MCP uses stdio for JSON RPC messages.
    mcp.run()