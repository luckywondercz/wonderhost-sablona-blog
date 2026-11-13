# Blog (šablona WonderHost)

Blog v [Astru](https://astro.build). Články jsou soubory Markdownu, web je po sestavení
statický, rychlý a bez databáze.

## Nový článek

1. Ve složce `src/content/clanky` zkopírujte některý článek a přejmenujte ho
   (název souboru je adresa článku).
2. Upravte hlavičku (`titulek`, `popis`, `datum`) a napište text.
3. Nasaďte web znovu.

Rozepsaný článek označte `koncept: true`, na webu se neukáže.

Název blogu a barvy jsou v `src/layouts/Zaklad.astro`.

## Na počítači

```bash
npm install
npm run dev
```
