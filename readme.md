# Snippets for MicroBit

## この拡張機能について

この拡張機能には､以下の機能があります｡

 - JavaScript向けのスニペット
 - MicroBit向けのスニペット
 - コードの自動コピー

> [!WARNING]
> コードのコピーはすべてのファイルで実行されます｡

### JavaScriptスニペットについて

この拡張機能で追加されるスニペットには､以下のようなものがあります｡

```
if (  == "" ) {
      
     } else {
      
     }
```
ifの分岐

```
     "for (let index = 0; index < ; index++) {
     
     }
```
forの繰り返し(回数)

その他にも､いくつかのスニペットを収録しています｡

### MicroBit向けスニペットについて

MicroBitの開発に便利なスニペットを収録しています｡

> [!IMPORTANT]
> デバッグはできません｡<https://makecode.microbit.org/>を使用してください｡

#### スニペットのサンプル

```
basic.showNumber()
```
番号の表示

```
serial.writeLine()
```
シリアルポートに変数を出力

また､JavaScript向けのスニペットに組み込まれたものもあります｡

```
input.onButtonPressed(Button., function() {
     
     })
```
ボタンが押されたときに実行

これら以外にも､様々な便利なスニペットが収録されています｡

> [!WARNING]
> スニペットの説明はすべて日本語です｡英語版の作成予定はありません｡
> 
> All snippet explanations are in Japanese. There are no plans to create an English version.

### 自動コピー機能について

この拡張機能をインストールすると､`F5`キーを押すと､コードがコピーされます｡動作は､以下のようにします｡

#### テキストが選択されてない場合
すべてのコード(開いているファイル内)がコピーされます｡

#### テキストが選択されている場合
選択された部分のみがコピーされます｡


すべてのコードがコピーされない場合は､テキストを選択しないでください｡

> [!TIP]
> コピー成功､失敗した場合に通知を送信します｡
> 
