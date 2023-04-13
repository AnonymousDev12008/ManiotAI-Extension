// Code to implement auto debugger feature
function activate(context) {
    // Register command to enable/disable auto debugger
    let disposable = vscode.commands.registerCommand('maniot.toggleAutoDebugger', function () {
      autoDebuggerEnabled = !autoDebuggerEnabled;
      vscode.window.showInformationMessage(`Auto debugger is now ${autoDebuggerEnabled ? 'enabled' : 'disabled'}.`);
    });
  
    context.subscriptions.push(disposable);
  
    // Register event to listen for text document changes
    vscode.workspace.onDidChangeTextDocument((event) => {
      if (!autoDebuggerEnabled) {
        return;
      }
  
      // Code to automatically debug code goes here
    });
  }
  