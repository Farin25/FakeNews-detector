# Fake-detektor - A website for detecting fake news

## Wie Funktioniert der Fake detector?

Die Logik der Webseite ist ein Algorithmus der Den Eingegebenen Text nach auffäligkeiten Prüft zum Beispiel wird geprüft ob der Text auffäligkeiten aufzeigt wie zum Beispiel aüffälige wörter wie: "Glauben" oder: "Schockieren / Schock". Außer dem wird der ganze Text auf Groß und klein schreibung geprüft, nur groß geschrieben Wörter sind auch sehr auffällig. Was auch auffälig ist sind viele Ausrufezeichen. Der Algorithmus prüft auch ob eine Qelle Angegeben ist oder nicht. Dann wird noch Geprüft ob zum Teilen Aufgerufen wird oder sich widersprechende Fakten im Text sind. Aber es werden auch auffälig keiten Geprüft die darauf hinweisen das der Text Echt und vertrauenswürdig ist wenn der geneteil der fall ist wie von den Anzeichen für Fake.
<br>
<br>
<br>
Aus dem ergebniss vom Algorithmus wird dann ein Prozentwert: der Fake Anteil und der Echt Anteil Berechnet:
``` 
fakePercent = 50 + (fakeScore - realScore)
realPercent = 100 - fakePercent
```
<br><br>


| **Insgesammt werden Folgende sachen geprüft:** |
|------------------------------------------------|
| Hier noch sachen einfügen .. |

