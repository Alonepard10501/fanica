# -*- coding: utf-8 -*-
"""Baut `runde.js` fuer die Website aus Falks laufender Tipprunde.

Falk 31.07.: "du hast eine Laufende Gruppe bei fanica fun ... vergleiche
ziehen ... du hast viele informationen die nicht jeder hat."

NAMEN: Falk hat am 31.07.2026 entschieden - es werden die **echten
Profilnamen** gezeigt, so wie sie in der App gefuehrt werden ("Jeder ist
mit dem Namen aus seinem Profil verbunden"). Es sind nur Vornamen bzw.
Spitznamen: kein Nachname, keine Mail, kein Ort, kein Beitrittscode -
dieselbe Sichtbarkeit wie in jeder Vereins- oder Sport-Tabelle.

Jede Zahl wird GERECHNET, nichts geschaetzt.
"""
import io, json, os

ANONYM = False          # False = echte Profilnamen (Falks Entscheidung 31.07.)
                        # True  = "Spieler A/B/C" statt der Namen

QUELLE = os.path.join("C:", os.sep, "Users", "falkc", "Desktop", "KI-Studio",
                      "Obsidian Vault", "Projekte", "FaNiCa Fun", "Google Play",
                      "5 Webseite und Webversion", "daten.json")
ZIEL = os.path.join("C:", os.sep, "Users", "falkc", "Desktop", "KI-Studio",
                    "Obsidian Vault", "Projekte", "Webseite", "runde.js")

d = json.loads(io.open(QUELLE, encoding="utf-8").read())
W = d["wertung"]; R = d["rennen"]; S = d["saisons"]; ST = d["spielerstats"]
GEF = d["gefahren"]

# ---------------------------------------------------- Namen
namen = [w["spieler"] for w in sorted(W, key=lambda x: -x["punkte"])]
if ANONYM:
    ersatz = {n: "Spieler %s" % chr(65 + i) for i, n in enumerate(namen)}
else:
    ersatz = {n: n for n in namen}
def nm(n):
    return ersatz.get(n, n)

# ---------------------------------------------------- Tabelle
tabelle = []
for i, w in enumerate(sorted(W, key=lambda x: -x["punkte"]), 1):
    tabelle.append({
        "platz": i,
        "name": nm(w["spieler"]),
        "punkte": w["punkte"],
        "exakt": w["exakt"],
        "dabei": w["dabei"],
        "quote": w["quote"],
        "farbe": w["farbe"],
        "bestes": w["hoch"]["punkte"],
        "bestesOrt": w["hoch"]["stadt"],
    })

# ---------------------------------------------------- Trefferbilanz
getippt = sum(w["getippt"] for w in W)
exakt   = sum(w["exakt"] for w in W)
dabei   = sum(w["dabei"] for w in W)
daneben = sum(w["daneben"] for w in W)

# Wie oft lag jemand mit ALLEN fuenf Positionen richtig?
reihen = 0; voll = 0
for r in R[:GEF]:
    erg = r.get("ergebnis") or []
    for sp, t in (r.get("tipps") or {}).items():
        if not t:
            continue
        reihen += 1
        if list(t[:5]) == list(erg[:5]):
            voll += 1

# ---------------------------------------------------- Saisonsieger
best = {}
for e in S:
    sa = e["saison"]
    if sa not in best or e["punkte"] > best[sa]["punkte"]:
        best[sa] = e
sieger = [{"saison": sa, "name": nm(best[sa]["name"]), "punkte": best[sa]["punkte"]}
          for sa in sorted(best, reverse=True)]

# ---------------------------------------------------- Jahre und Gesamtzahl
jahre = set(e["saison"] for e in S)
gesamtTipps = 0
for name, v in ST.items():
    for s in v.get("seasons", []):
        jahre.add(s["saison"])
        gesamtTipps += s.get("getippt", 0)

# ---------------------------------------------------- Strecken 2026
g26 = sorted([x for x in d["streckenGesamt"] if x["saison"] == 2026],
             key=lambda x: -x["punkte"])
strecken = [{"stadt": x["stadt"], "punkte": x["punkte"]} for x in g26]

# ---------------------------------------------------- Verlauf der Fuehrenden
# Punktestand nach jedem Rennen, fuer die drei Bestplatzierten.
verlauf = []
for w in sorted(W, key=lambda x: -x["punkte"])[:3]:
    lauf = 0; punkte = []
    for e in w["serie"]:
        lauf += e["punkte"]
        punkte.append(lauf)
    verlauf.append({"name": nm(w["spieler"]), "farbe": w["farbe"],
                    "staende": punkte})
orte = [e["stadt"] for e in sorted(W, key=lambda x: -x["punkte"])[0]["serie"]]

daten = {
    "saison": d["saison"],
    "gefahren": GEF,
    "rennenGesamt": len(R),
    "spieler": len(W),
    "jahre": len(jahre),
    "seit": min(jahre),
    "gesamtTipps": gesamtTipps,
    "tabelle": tabelle,
    "bilanz": {"getippt": getippt, "exakt": exakt, "dabei": dabei,
               "daneben": daneben,
               "exaktProzent": round(100 * exakt / getippt),
               "dabeiProzent": round(100 * dabei / getippt),
               "danebenProzent": round(100 * daneben / getippt),
               "reihen": reihen, "vollTreffer": voll},
    "sieger": sieger,
    "strecken": strecken,
    "verlauf": verlauf,
    "orte": orte,
    "abstand": tabelle[0]["punkte"] - tabelle[1]["punkte"],
    "spanne": tabelle[0]["punkte"] - tabelle[-1]["punkte"],
}

kopf = """/* ============================================================
   runde.js — Zahlen aus Falks LAUFENDER Tipprunde
   ------------------------------------------------------------
   Erzeugt aus der echten App-Datenlage (daten.json der Webversion),
   Stand: nach %d von %d Rennen der Saison %d.

   NICHTS ist geschaetzt — jede Zahl ist aus den echten Tipps
   gerechnet. Es stehen nur Spieler-VORNAMEN darin, wie in jeder
   Sport-Tabelle; keine Nachnamen, Mails, Orte oder Beitrittscodes.

   Aktualisieren: Skript `runde_bauen.py` erneut laufen lassen,
   sobald daten.json neuer ist.
   ============================================================ */
window.RUNDE = """ % (GEF, len(R), d["saison"])

io.open(ZIEL, "w", encoding="utf-8").write(
    kopf + json.dumps(daten, ensure_ascii=False, indent=2) + ";\n")

print("geschrieben:", ZIEL)
print("Tabelle:", len(tabelle), "Spieler · Abstand 1-2:", daten["abstand"])
print("Bilanz:", daten["bilanz"])
print("Jahre:", daten["jahre"], "seit", daten["seit"],
      "· Tipps gesamt:", gesamtTipps)
