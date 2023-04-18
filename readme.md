# UN DW7 Documentation

This is the documentation for the UN DW7 project for interested and existing volunteers. This website is built using [Docusaurus 2](https://docusaurus.io/).


このドキュメントは、UN DW7プロジェクトに興味を持っている方や、既存のボランティアの方向けのドキュメントです。このウェブサイトは[Docusaurus 2](https://docusaurus.io/)を使用して構築されています。

### Installation　/ インストール

```
$ yarn install
```

### Local Development　/ ローカル開発

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

このコマンドはローカル開発サーバーを起動し、ブラウザウィンドウを開きます。ほとんどの変更はサーバーを再起動することなくライブで反映されます。

###　Japanese Testing　/ 日本語でテスト

```
$ yarn start --locale ja
```
This command starts up a Japanese version of the local development server and opens up a browser window.

このコマンドはローカル開発サーバーの日本語バージョンを起動し、ブラウザウィンドウを開きます。


### Build　/ ビルド

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

このコマンドは`build`ディレクトリに静的コンテンツを生成し、任意の静的コンテンツホスティングサービスで提供できます。

### Deployment / デプロイ

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
