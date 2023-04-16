# UN DW7 Documentation

This is the documentation for the UN DW7 project for interested and existing volunteers.

このドキュメントは、UN DW7プロジェクトに興味を持っている方や、既存のボランティアの方向けのドキュメントです。

## Basic Editing　/ 編集
You can edit the documentation by editing the markdown files in the `docs/en` folder.

`docs/ja`フォルダ内のmarkdownファイルを編集することでドキュメントを編集できます。

### Advanced Editing / 高度な編集
You can edit the documentation locally by installing mkdocs and the required plugins by following the instructions below.

以下の手順に従って、mkdocsと必要なプラグインをインストールすることで、ローカルでドキュメントを編集できます。

## Installing / インストール
Python 3.6 or higher is required. You can install it from [python.org](https://www.python.org/downloads/).

パイソン3.6以上が必要です。[python.org](https://www.python.org/downloads/)からインストールできます。

```bash
pip install -r requirements.txt
```

## Testing

### English Testing

```bash
mkdocs serve
```

### 日本語でテスト

```bash
mkdocs serve -f mkdocs_ja.yml
```

## Building

### English Build

```bash
mkdocs build
```

### 日本語でビルド

```bash
mkdocs build -f mkdocs_ja.yml -d ja
```

## Deploying to Github Pages / Github Pagesへのデプロイ

```bash
mkdocs gh-deploy --force
```

