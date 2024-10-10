const vscode = require('vscode');

function activate(context) {
  // コマンド 'extension.copySelectedText' を登録
  let disposable = vscode.commands.registerCommand('extension.copySelectedText', function () {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      let selection = editor.selection;
      let selectedText = editor.document.getText(selection);

      // テキストが選択されていない場合、すべてのテキストをコピー
      if (selectedText === '') {
        const document = editor.document;
        const fullRange = new vscode.Range(
          document.positionAt(0),
          document.positionAt(document.getText().length)
        );
        selectedText = document.getText(fullRange);
      }

      // クリップボードにコピー
      vscode.env.clipboard.writeText(selectedText).then(() => {
        vscode.window.showInformationMessage('Text copied to clipboard!');
        
        // Webサイトを開く
        vscode.env.openExternal(vscode.Uri.parse('https://makecode.microbit.org/?lang=ja#editor'));
      }).catch(err => {
        vscode.window.showErrorMessage('Failed to copy text or open browser: ' + err.message);
      });
    } else {
      vscode.window.showErrorMessage('No active editor found.');
    }
  });

  // 拡張機能をアクティブにする
  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
