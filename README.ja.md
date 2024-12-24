<p align="center">
  <img src="https://onetick-public.s3.us-west-1.amazonaws.com/website/onetick-rainbow.png?v=1" alt="OneTick ロゴ" width="200px">
</p>
<h3 align="center">OneTick</h3>
<p align="center">
<a href="https://demo.onetick/event/1/dog-conf-2030">デモイベント 🌟</a> <a href="https://onetick?utm_source=gh-readme">ウェブサイト 🌎</a>  <a href="https://onetick/docs">ドキュメント 📄</a>  <a href="https://onetick/docs/getting-started?utm_source=gh-readme">インストール ⚙️</a>
</p>

<h3 align="center">
 簡単にイベントを管理し、オンラインでチケットを販売します。
</h3>

<div align="center">

[![OneTick ドキュメント](https://img.shields.io/badge/docs-onetick-blue)](https://onetick/docs)
[![ライセンス: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://github.com/HiEventsDev/onetick/LICENCE)
[![GitHub リリース](https://img.shields.io/github/v/release/HiEventsDev/onetick?include_prereleases)](https://github.com/HiEventsDev/onetick/releases)
[![ユニットテストの実行](https://github.com/HiEventsDev/onetick/actions/workflows/unit-tests.yml/badge.svg?event=push)](https://github.com/HiEventsDev/onetick/actions/workflows/unit-tests.yml)
[![Docker ダウンロード数](https://img.shields.io/docker/pulls/daveearley/onetick-all-in-one)](https://hub.docker.com/r/daveearley/onetick-all-in-one)

</div>

<div align="center">
 🌟 スターを付けていただけると嬉しいです！ 🌟
</div>

<hr/>

## 目次

- [紹介](#-紹介)
- [機能](#-機能)
- [クイックスタート](#-クイックスタート)
- [変更履歴](#-変更履歴)
- [貢献](#-貢献)
- [FAQ](#-faq)

## 📚 紹介

<a href="https://onetick">OneTick</a> は、機能豊富な自ホスト型イベント管理およびチケット販売プラットフォームです。会議からクラブナイトまで、OneTick はあらゆる規模のイベントの作成、管理、チケット販売を支援するように設計されています。

<img alt="OneTick 自ホスト型チケット販売ダッシュボード" src="https://onetick-public.s3.us-west-1.amazonaws.com/website/dashboard-screenshot.png"/>

## 🌟 機能

<a href="https://onetick">OneTick</a> は、イベント管理とチケット販売を効率化するための機能が満載です：

- 📊 **イベント分析:** イベントのパフォーマンスとチケット販売に関する深い洞察を得る。
- 🎟 **埋め込み可能なチケットウィジェット:** チケット販売を簡単に任意のウェブサイトに統合。
- 🖥 **カスタマイズ可能なイベントホームページ:** 柔軟なデザインオプションで目を引くイベントページを作成。
- 🔑 **直感的なチェックインツール:** OneTick の QR コードチェックインツールで簡単に参加者をチェックイン。
- 💬 **イベントメッセージングツール:** 重要な更新やリマインダーを参加者に送信。
- 📝 **カスタム注文フォーム:** チェックアウト時にカスタマイズされた質問で参加者情報を収集。
- 🎫 **複数のチケットタイプ:** 無料、有料、寄付、または階層型のチケットタイプ。
- 💸 **多用途なプロモコード:** 高度に多用途な割引コード。先行販売アクセス、複数の割引オプション。
- 💰 **即時支払い:** シームレスな Stripe 統合で即時支払いを楽しむ。
- 🧾 **税金と手数料の設定:** チケットごとに税金と手数料を追加。
- 📦 **データエクスポート:** 参加者と注文データを XLSX または CSV にエクスポート。
- 💻 **REST API:** カスタム統合のためのフル機能の REST API。
- 🔍 **SEO ツール:** 各イベントの SEO 設定をカスタマイズ。
- 🛒 **美しいチェックアウトプロセス:** スムーズで美しいチェックアウト体験を確保。
- 🔐 **役割ベースのアクセス:** 複数のユーザーロールをサポート。
- 💻 **オンラインイベントサポート:** オンラインイベントの指示とリンクを提供。
- ⏪ **全額および部分的な払い戻しサポート:** 全額および部分的な払い戻しを簡単に管理。
- 📧 **メール通知:** 自動メール通知で参加者を最新情報に保つ。
- 📱 **モバイル対応:** どのデバイスでもシームレスな体験を楽しむ。
- 🌐 **多言語サポート:** 複数の言語をサポート。
- 🎉 **その他多数！**

## 🚀 クイックスタート

詳細なインストール手順については、[ドキュメント](https://onetick/docs/getting-started) を参照してください。クイックスタートのために、以下の手順に従ってください：

### ワンクリックデプロイ

[![DigitalOcean でデプロイ](https://www.deploytodo.com/do-btn-blue.svg)](https://github.com/HiEventsDev/onetick-digitalocean)

[![Render でデプロイ](https://render.com/images/deploy-to-render-button.svg)](https://github.com/HiEventsDev/onetick-render.com)

[![Railway でデプロイ](https://railway.app/button.svg)](https://railway.app/template/8CGKmu?referralCode=KvSr11)

[![Zeabur でデプロイ](https://zeabur.com/button.svg)](https://zeabur.com/templates/8DIRY6)

### 🐳 Docker を使用したクイックスタート

> [!重要]  
> システムに Docker および Docker Compose がインストールされていることを確認してください。インストールされていない場合は、公式 Docker ウェブサイトからダウンロードできます：[Docker](https://www.docker.com/get-started)。

1. **リポジトリをクローン：**
   ```bash
   git clone git@github.com:HiEventsDev/onetick.git
   ```

2. **Docker ディレクトリに移動：**
   ```bash
   cd onetick/docker/all-in-one
   ```

3. **Docker コンテナを起動：**
   ```bash
   docker compose up -d
   ```
4. **アカウントを作成：**
   ```bash
   ブラウザを開き、http://localhost:8123/auth/register に移動します。
   ```

ℹ️ 他のインストール方法や、プロダクションまたはローカル開発環境の設定については、[クイックスタートガイド](https://onetick/docs/getting-started) を参照してください。

## 📝 変更履歴

継続的な改善と機能追加については、[GitHub リリースページ](https://github.com/HiEventsDev/onetick/releases) をご覧ください。

## 🤝 貢献

貢献、提案、バグ報告を歓迎します！新しい機能や拡張を提案する前に、ディスカッションのために issue を開いてください。

## ❓ FAQ

質問がありますか？[ドキュメント](https://onetick/docs) に答えがあります。探しているものが見つからない場合は、[hello@onetick](mailto:hello@onetick) までお気軽にお問い合わせください。

## 📜 ライセンス

OneTick は [AGPL-3.0](https://github.com/HiEventsDev/onetick/blob/main/LICENCE) ライセンスの条件に基づいてライセンスされています。

商用ライセンスオプションを含むライセンス情報の詳細については、[こちら](https://onetick/licensing) のライセンスページをご覧ください。
