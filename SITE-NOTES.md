# torontoprorn.com: how the site works

Last updated: October 21, 2026

## The files

The site is plain HTML hosted on GitHub Pages, with the domain pointed there through Porkbun. There is no server and no database. Everything lives in these files, all in the same folder:

- **index.html** is the main page (hero, first night timeline, procedures, about, pricing, reviews, FAQ, short booking form).
- **intake.html** is the full booking intake form. Its web address is torontoprorn.com/intake.html. You can text or email that link to clients directly.
- **hero.jpg, logo-mark.png, favicon.svg** are the images both pages use.
- **SITE-NOTES.md** is this file.

## How the two pages connect

The main page links to the intake form from three places: the "Intake form" link in the top menu, the same link in the phone menu, and the "Start my intake form" box in the booking section. The intake page links back with "Back to main site" and the logo.

## Who the pages speak as

Toronto ProRN is a team of ICU-trained Registered Nurses with plastic surgery recovery experience, all registered with the College of Nurses of Ontario. The pages describe the care as "your nurse" and "our nurses."

Two places stay in JoAnne's own voice on purpose. The About section ("Who is with you") is her bio. The booking section and contact buttons ("Tell me your surgery date", "I answer personally", "WhatsApp me") are her, because she answers every inquiry and pairs each client with a nurse. Patient reviews stay exactly as the patients wrote them.

The service is for Toronto and the GTA, Ontario, Canada only. That is stated in the page titles, the top of both pages, the booking form, the footers, and a required confirmation box at the start of the intake form.

## How the intake form works

**Steps.** The form is 12 steps. Only one step shows at a time. Clients can't move forward until every required question on that step is answered. A missed question turns red with a short message.

**Follow-up questions.** Some questions only appear when they apply. For example, "What kind of pets?" only shows if they answer Yes to pets. Hidden questions are never required and are never sent to you.

**Saving.** Answers save on the client's own phone or computer as they type (in the browser's storage). If they close the page and come back on the same device, everything is still there. It's erased once they submit, or if they press "Start over". Nothing is stored on your website.

**Health screening (step 8).** Yes or No questions only, on purpose. No boxes for typing medical details. You collect those by phone.

**Sending.** When the client presses Submit, the answers go through Web3Forms (the same service and key as the short form on the main page) and arrive in prorninc@gmail.com. The email subject reads "Intake form: [name] · surgery [date]". At the bottom of the email you also get the zone check result and the cost estimate the client saw.

## The fee-free zone map

The map uses OpenStreetMap, which is free and needs no account or key. The shaded area is the fee-free zone: south of Bloor, east of Dufferin, west of the Don Valley, north of the waterfront.

When a client presses "Check my address", the page looks up the street address with OpenStreetMap's free search and places a pin. It then shows one of these:

- Inside the zone: $0 fee
- Outside the zone but within about 45 km of downtown: $30 per shift
- Farther than 45 km: "outside our usual service area", you confirm availability
- Not found: client can tap their location on the map instead, or skip it and you confirm the fee later

The zone edges follow the streets closely but not perfectly. For an address right on Bloor or Dufferin, use your own judgment.

## Changing rates, the zone or the service area

Open intake.html and search for **SETTINGS**. Near the bottom of the file you'll find:

- `HOURLY_RATE = 85`
- `MIN_HOURS = 8`
- `TRAVEL_FEE = 30`
- `DEPOSIT_RATE = 0.25`
- `SERVICE_RADIUS_KM = 45`
- `FEE_FREE_ZONE`, a list of map points with the street corner written beside each one

Change the number, save, and upload. If you change the rates, also update the rates table in step 10 (search for "$680.00") and the "$85/hour" line at the top of the page, since those are written out as text.

## Updating the site

1. Go to your torontoprorn repository on GitHub.
2. Click "Add file", then "Upload files".
3. Drag in the changed files (intake.html, index.html).
4. Click "Commit changes". The live site updates within a minute or two.
