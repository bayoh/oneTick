<p align="center">
  <img src="https://onetick-public.s3.us-west-1.amazonaws.com/website/onetick-rainbow.png?v=1" alt="OneTick Logo" width="200px">
</p>
<h3 align="center">OneTick</h3>
<p align="center">
<a href="https://demo.onetick/event/1/dog-conf-2030">Demo-Event 🌟</a> <a href="https://onetick?utm_source=gh-readme">Website 🌎</a>  <a href="https://onetick/docs">Dokumentation 📄</a>  <a href="https://onetick/docs/getting-started?utm_source=gh-readme">Installation ⚙️</a>
</p>

<h3 align="center">
 Mühelos Events verwalten und Tickets online verkaufen.
</h3>

<div align="center">

[![OneTick docs](https://img.shields.io/badge/docs-onetick-blue)](https://onetick/docs)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://github.com/HiEventsDev/onetick/LICENCE)
[![GitHub Release](https://img.shields.io/github/v/release/HiEventsDev/onetick?include_prereleases)](https://github.com/HiEventsDev/onetick/releases)
[![Run Unit Tests](https://github.com/HiEventsDev/onetick/actions/workflows/unit-tests.yml/badge.svg?event=push)](https://github.com/HiEventsDev/onetick/actions/workflows/unit-tests.yml)
[![Docker Pulls](https://img.shields.io/docker/pulls/daveearley/onetick-all-in-one)](https://hub.docker.com/r/daveearley/onetick-all-in-one)

</div>

<div align="center">
 🌟 Ein Stern wäre sehr willkommen! 🌟
</div>

<hr/>

## Inhaltsverzeichnis

- [Einführung](#-einführung)
- [Funktionen](#-funktionen)
- [Schnellstart](#-schnellstart)
- [Änderungsprotokoll](#-änderungsprotokoll)
- [Beiträge](#-beiträge)
- [FAQ](#-faq)

## 📚 Einführung

<a href="https://onetick">OneTick</a> ist eine funktionsreiche, selbst gehostete Event-Management- und Ticketing-Plattform. Von Konferenzen bis zu Clubnächten,
OneTick ist darauf ausgelegt, Ihnen zu helfen, Events jeder Größe zu erstellen, zu verwalten und Tickets zu verkaufen.

<img alt="OneTick selbst gehostetes Ticketverkaufs-Dashboard" src="https://onetick-public.s3.us-west-1.amazonaws.com/website/dashboard-screenshot.png"/>

## 🌟 Funktionen

<a href="https://onetick">OneTick</a> ist mit Funktionen ausgestattet, die Ihr Event-Management und Ticketing optimieren:

- 📊 **Event-Analytik:** Gewinnen Sie tiefe Einblicke in die Event-Performance und Ticketverkäufe.
- 🎟 **Einbettbares Ticket-Widget:** Integrieren Sie den Ticketverkauf problemlos in jede Website.
- 🖥 **Anpassbare Event-Homepages:** Erstellen Sie auffällige Event-Seiten mit flexiblen Designoptionen.
- 🔑 **Intuitive Check-In-Tools:** Einfache Check-Ins der Teilnehmer vor Ort mit dem QR-Code-Check-In-Tool von OneTick.
- 💬 **Event-Messaging-Tools:** Senden Sie Teilnehmern wichtige Updates und Erinnerungen.
- 📝 **Anpassbare Bestellformulare:** Sammeln Sie Teilnehmerinformationen mit maßgeschneiderten Fragen beim Checkout.
- 🎫 **Mehrere Ticketarten:** Kostenlose, kostenpflichtige, Spenden- oder gestufte Ticketarten.
- 💸 **Vielseitige Promo-Codes:** Hochgradig vielseitige Rabattcodes. Vorverkaufszugang, mehrere Rabattoptionen.
- 💰 **Sofortige Auszahlungen:** Genießen Sie sofortige Auszahlungen mit nahtloser Stripe-Integration.
- 🧾 **Steuer- und Gebührenkonfiguration:** Steuern und Gebühren pro Ticket hinzufügen.
- 📦 **Datenexporte:** Exportieren Sie Teilnehmer- und Bestelldaten in XLSX oder CSV.
- 💻 **REST-API:** Voll funktionsfähige REST-API für benutzerdefinierte Integrationen.
- 🔍 **SEO-Tools:** SEO-Einstellungen für jedes Event anpassen.
- 🛒 **Schöner Checkout-Prozess:** Sicherstellen eines reibungslosen, schönen Checkout-Erlebnisses.
- 🔐 **Rollenbasierter Zugriff:** Unterstützung für mehrere Benutzerrollen.
- 💻 **Online-Event-Support:** Online-Event-Anweisungen und Links anbieten.
- ⏪ **Unterstützung für vollständige und teilweise Rückerstattungen:** Einfache Verwaltung von vollständigen und teilweisen Rückerstattungen.
- 📧 **E-Mail-Benachrichtigungen:** Halten Sie Teilnehmer mit automatischen E-Mail-Benachrichtigungen auf dem Laufenden.
- 📱 **Mobile-Responsive:** Nahtloses Erlebnis auf jedem Gerät.
- 🌐 **Mehrsprachige Unterstützung:** Unterstützung für mehrere Sprachen.
- 🎉 **Und vieles mehr!**

## 🚀 Schnellstart

Für detaillierte Installationsanweisungen lesen Sie bitte unsere [Dokumentation](https://onetick/docs/getting-started). Für
einen schnellen Start folgen Sie diesen Schritten:

### One-Click Deployments

[![Auf DigitalOcean bereitstellen](https://www.deploytodo.com/do-btn-blue.svg)](https://github.com/HiEventsDev/onetick-digitalocean)

[![Auf Render bereitstellen](https://render.com/images/deploy-to-render-button.svg)](https://github.com/HiEventsDev/onetick-render.com)

[![Auf Railway bereitstellen](https://railway.app/button.svg)](https://railway.app/template/8CGKmu?referralCode=KvSr11)

[![Auf Zeabur bereitstellen](https://zeabur.com/button.svg)](https://zeabur.com/templates/8DIRY6)

### 🐳 Schnellstart mit Docker

> [!WICHTIG]  
> Bitte stellen Sie sicher, dass Docker und Docker Compose auf Ihrem System installiert sind. Wenn nicht, können Sie diese von der
> offiziellen Docker-Website herunterladen: [Docker](https://www.docker.com/get-started).

1. **Repository klonen:**
   ```bash
   git clone git@github.com:HiEventsDev/onetick.git
   ```

2. **Zum Docker-Verzeichnis navigieren:**
   ```bash
   cd onetick/docker/all-in-one
   ```

3. **Docker-Container starten:**
   ```bash
   docker compose up -d
   ```
4. **Ein Konto erstellen:**
   ```bash
   Öffnen Sie Ihren Browser und navigieren Sie zu http://localhost:8123/auth/register.
   ```

ℹ️ Bitte lesen Sie den [Schnellstart-Leitfaden](https://onetick/docs/getting-started) für andere Installationsmethoden und
für die Einrichtung einer Produktions- oder lokalen Entwicklungsumgebung.

## 📝 Änderungsprotokoll

Bleiben Sie auf dem Laufenden mit unseren laufenden Verbesserungen und Funktionserweiterungen auf unserer [GitHub-Releases-Seite](https://github.com/HiEventsDev/onetick/releases).

## 🤝 Beiträge

Wir begrüßen Beiträge, Vorschläge und Fehlerberichte! Bevor Sie ein neues Feature oder eine Erweiterung vorschlagen,
öffnen Sie bitte ein Issue, um es zu besprechen.

## ❓ FAQ

Haben Sie Fragen? Unsere [Dokumentation](https://onetick/docs) hat Antworten. Wenn Sie nicht finden, wonach Sie suchen, können Sie uns gerne unter [hello@onetick](mailto:hello@onetick) kontaktieren.

## 📜 Lizenz

OneTick ist unter den Bedingungen der [AGPL-3.0](https://github.com/HiEventsDev/onetick/blob/main/LICENCE) lizenziert.

Für weitere Lizenzinformationen, einschließlich kommerzieller Lizenzoptionen, besuchen Sie bitte unsere Lizenzseite [hier](https://onetick/licensing).
