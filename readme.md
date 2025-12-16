# UN Smart Maps Documentation

**⚠️ NOTICE: This site has been archived and redirects to https://unopengis.org/DWG7.html**

**⚠️ 注意: このサイトはアーカイブされ、https://unopengis.org/DWG7.html にリダイレクトされます**

---

This is the documentation for the UN Smart Maps project for interested and existing volunteers. This website is built using [Docusaurus 2](https://docusaurus.io/).

このドキュメントは、UN Smart Mapsプロジェクトに興味を持っている方や、既存のボランティアの方向けのドキュメントです。このウェブサイトは[Docusaurus 2](https://docusaurus.io/)を使用して構築されています。

### Requirements / 必要条件

- Node.js version >= 12.13.0.
- Yarn version >= 1.5 (or npm version >= 5.0).

### Installation　/ インストール

``` bash
$ yarn install
```

### Local Development　/ ローカル開発

``` bash
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

このコマンドはローカル開発サーバーを起動し、ブラウザウィンドウを開きます。ほとんどの変更はサーバーを再起動することなくライブで反映されます。

### Japanese Testing　/ 日本語でテスト

``` bash
$ yarn start --locale ja
```
This command starts up a Japanese version of the local development server and opens up a browser window.

このコマンドはローカル開発サーバーの日本語バージョンを起動し、ブラウザウィンドウを開きます。

### Japanese Translation / 日本語翻訳

``` bash
$ yarn write-translations --locale ja
```

This creates a new folder in the `i18n` directory called `ja` which contains all the translated files. You can then edit the files in the `ja` directory to translate the website.

If you want to change or add Japanese only markdown files, then please edit the files in this directory: 

`i18n\ja\docusaurus-plugin-content-docs\current`

The structure is the same as the `docs` directory, but you can modify it to make it unique to the Japanese site.

これにより、すべての翻訳されたファイルが含まれる`i18n`ディレクトリに`ja`という名前の新しいフォルダーが作成されます。次に、`ja`ディレクトリ内のファイルを編集して、ウェブサイトを翻訳できます。

もし、日本語のみのマークダウンファイルを変更または追加したい場合は、このディレクトリのファイルを編集してください。

`i18n\ja\docusaurus-plugin-content-docs\current`

構造は`docs`ディレクトリと同じですが、日本語サイトに固有のものに変更できます。

### Build　/ ビルド

``` bash
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

このコマンドは`build`ディレクトリに静的コンテンツを生成し、任意の静的コンテンツホスティングサービスで提供できます。

### Deployment / デプロイ

Pushing to the `main` branch will trigger a deployment to GitHub pages through GitHub actions.

メインブランチにプッシュすると、GitHubアクションを介してGitHubページにデプロイされます。
<!-- 
### Manually Deploying / 手動デプロイ

Using SSH / SSHを使用する場合:

``` bash
$ USE_SSH=true yarn deploy
```

Not using SSH / SSHを使用しない場合:

```
$ GIT_USER=<Your GitHub username> yarn deploy
``` -->

