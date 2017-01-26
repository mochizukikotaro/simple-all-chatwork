# simple-all-chatwork

This is a Chrome extention.
It enables you to mention to all without name.

[Simple All Chatwork](https://chrome.google.com/webstore/detail/simple-all-chatwork/pdaoeafgcfegogliddglbpocnlbcjeoh)

# Extension usage

- Click [To].
- Click [Simpleにすべて選択]. 

![readme](https://cloud.githubusercontent.com/assets/7911481/22395697/edb68138-e588-11e6-9e5e-f21a3560e9ee.png)

# contribution

```
$ npm install
```

# gulp tasks
This project use [yeomen/generator-chrome-extension](https://github.com/yeoman/generator-chrome-extension).
A complete reference should look at this about it.
ref: [generator-chrome-extension/readme.md](https://github.com/yeoman/generator-chrome-extension/blob/master/readme.md).

詳細なドキュメントは[ここ](https://github.com/yeoman/generator-chrome-extension/blob/master/readme.md)見てください。

## watch
When updating the source code, chrome extension needs to reload it in the browser.
But if you do this it is not necessary.
Of course, it also compiles.

開発する時は、これしとくといいよ。

```
$ gulp watch
```

## babel
The generator supports ES 2015 syntax through babel transforming.
You may have a source files in `script.babel`.

javascriptはES 2015で書いて、`script.babel`ディレクトリに入れておけばおk。
コンパイルはこれでいける。

```
$ gulp babel
```

## Build and Package
When installing as an extension on chrome, doing this will only retrieve the necessary files.

chromeにextensionとして導入したい時は、これをすれば必要なファイルだけを取り出してくれます。

```
$ gulp build
```

To publish on the store, execute this command.

ストアに公開する時はこのコマンドを実行すればzip形式にしてくれます。

```
$ gulp package
```

