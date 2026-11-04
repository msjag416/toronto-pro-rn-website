# torontoprorn.com: how the site works

Last updated: November 4, 2026 (Concierge page search wording for high net worth clients and assistants)

## The files

The site is plain HTML hosted on GitHub Pages, with the domain pointed there through Porkbun. There is no server and no database. Everything lives in these files, all in the same folder:

- **index.html** is the main page (hero, first night timeline, procedures, about, pricing, reviews, FAQ, short booking form).
- **international.html** is the page for patients travelling to Toronto from other countries or provinces (USA, Caribbean, Gulf, UK, elsewhere in Canada). It has its own Google search code: page details, the service, its FAQ and a breadcrumb.
- **intake.html** is the full booking intake form. Its web address is torontoprorn.com/intake.html. You can text or email that link to clients directly.
- **hero.jpg, logo-mark.png, favicon.svg** are the images both pages use.
- **hero.avif, hero@2x.avif, hero.webp, hero@2x.webp** are smaller, faster copies of the hero photo (cropped to the 4:5 frame). The homepage shows these first and falls back to hero.jpg in older browsers. If you replace hero.jpg with a new photo, these four need to be remade too.
- **sitemap.xml** lists all three pages for Google. Update the dates when pages change.
- **SITE-NOTES.md** is this file.

## The styles file (styles.css)

All three pages share one design file, **styles.css**, which must sit in the same folder as the pages. It holds every colour, size and layout rule the pages use, built ahead of time so phones load the site quickly. (Before October 2026 the pages built their design in the visitor's browser on every visit, which was slower.)

Changing words, prices, phone numbers or links on a page is fine and needs nothing else. If new design styling is ever added to a page (for example a new colour or spacing class on a new section), styles.css has to be rebuilt to include it, so ask Claude to "rebuild styles.css" after that kind of change.

## The Recovery Concierge page (concierge.html, at torontoprorn.com/concierge)

The VIP page for high net worth clients, international medical travellers, hotel concierges and family offices. It sells three fixed-fee, all-inclusive packages instead of the hourly rate. It's deliberately kept out of the main page's top menu and phone menu, so local clients see the $85/hour intake path first. The main page links to it quietly in three places: the footer ("Toronto Recovery Concierge (VIP)"), the Hotel Recovery for Out-of-Town Patients card ("View 12 to 48-hour Executive Concierge Packages"), and a small line under the cost planner (search for "concierge-note"). The international page links to it in its top menu and footer. For surgeons' coordinators, family offices and hotel concierges, send the direct link: torontoprorn.com/concierge

**The packages and prices:** one flat concierge rate of $195 USD an hour across four lengths (CAD for clients in Canada, USD for clients outside Canada):
- 12 hours, The First Night: $2,340 USD / $3,275 CAD
- 24 hours, The Executive Reset: $4,680 USD / $6,550 CAD
- 36 hours, The Extended Recovery: $7,020 USD / $9,820 CAD
- 48 hours, The Complete Recovery: $9,360 USD / $13,100 CAD (also includes hotel stay coordination, preparation for drain removal and the flight-readiness report)

The packages show four across on computers, two by two on tablets and one at a time on phones. Extra hours on any package are quoted at the same $195 USD an hour. Prices show in US dollars first. Clients living in Canada can tap "I live in Canada · CAD" to see the Canadian amount, and the page remembers that choice on their device. To change a price, search concierge.html for `data-cad=` and change both the `data-cad` and `data-usd` values and the number shown between the tags. Also change the matching "price" numbers in the Google search code at the top of the file (search for "Offer"), and the "$195 USD an hour" wording in the packages heading and the FAQ.

**What's different from the hourly service:** concierge clients are met inside the surgical clinic at discharge, prescriptions are collected, the private transfer to the hotel is coordinated, and transportation is included. The hourly service on the main page still has no clinic pickup.

**Wording choices on purpose:** clearance to fly is described as the surgeon's decision; the nurse documents flight readiness and sends it to the surgeon. The NDA is "signed by Toronto ProRN and your attending nurse". Longer packages say nurses work planned shifts so the nurse with you is always awake.

**The consultation form** sends through Web3Forms to prorninc@gmail.com with the subject "Concierge consultation request: Toronto ProRN". It arrives with: package, who is making the request (patient, assistant or family office, hotel concierge, family member), name, phone/WhatsApp, email, surgery date, client residence (Canada/CAD or outside Canada/USD), recovery location, notes and whether an NDA is requested. It asks for no medical details. "Request this package" buttons pre-select the package in the form.

**Google search wording (November 4, 2026):** the concierge page is worded so Google shows it to high net worth clients and their personal assistants or family offices looking for a private nurse after plastic surgery in Toronto, Canada. The browser tab title is "Private Recovery Nurse After Plastic Surgery in Toronto, Canada | VIP Concierge". The small line above the big headline ("Private recovery nurse after plastic surgery · Toronto, Canada") is part of the main heading on purpose, because Google reads the main heading to learn what the page is about; please keep it. A section called "For personal assistants and family offices" (search for id="assistants") explains how an assistant books for a principal. The FAQ has two questions aimed at these searches, and every visible FAQ question is also copied into the Google search code at the top of the file (search for "FAQPage"). If you add or change an FAQ, change it in both places.

**The one-page PDF summary (concierge-summary.pdf):** a printable one-page overview for assistants, family offices and hotel concierges, in the site's own fonts and colours. It's downloaded from two places on the Concierge page: a "Download One-Page Overview (PDF)" button in the top section, and "Download printable PDF summary" under the currency switch. Visitors' computers save it as "Toronto-ProRN-Recovery-Concierge.pdf". You can also send its direct link: torontoprorn.com/concierge-summary.pdf. The PDF doesn't update by itself, so if prices or packages change on the page, the PDF needs remaking too. To replace it, upload a new file with the exact same name, concierge-summary.pdf.

**Styling:** the page has its own style block and doesn't use styles.css, so nothing needs rebuilding. It has a dynamic copyright year in the footer like every page.

**Main page menu note:** the computer menu hides Reviews and FAQ on screens narrower than 1366 pixels, and "The First Night" below 1200 pixels, so nothing overlaps the logo. Both are still in the phone menu, and FAQ is in the footer. Search index.html for "desk-nav" to change this.

## The "Reserve your night" card (top of the main page)

The two plain buttons under the headline were replaced by a white card with one question: "When is your surgery?" The visitor picks a date and the card answers right away. A coloured pill says where that date sits in the booking window (less than a week: amber, inside two weeks: amber, 2 to 8 weeks: green "Ideal booking window", further out: grey "Early, and that's a good thing", a past date: red). Under it, the first night is spelled out in plain dates ("Your nurse would arrive on Thursday, December 10 in the evening and stay awake beside you until Friday, December 11 morning"). The black button changes from "Start my intake form" to "Reserve Dec 10" and opens the intake form with the surgery date and first nursing date already filled in (the link looks like intake.html?date=2026-12-10). For dates less than a week away, or already past, the button becomes a WhatsApp message to JoAnne instead, with the date written into the message. "Don't have a date yet? WhatsApp JoAnne" sits at the bottom for everyone else.

If JavaScript doesn't run, the card is still a date box and a working "Start my intake form" button.

**Changing the wording or the windows:** search index.html for "initReserveCard". The day counts (7, 14 and 56 days) and every sentence live in that one function. The card's styling is in the block marked "Reserve-your-night card", so styles.css does not need rebuilding. The intake form reads the date from the link in the block marked "Surgery date handed over" near the bottom of intake.html.

## The first night section (the "night dial")

On the main page, the "What your first night with a recovery nurse looks like" section reacts as the visitor scrolls. A clock ring fills from arrival to morning, a heartbeat line runs beside it, the hour being read lights up while the others dim, and a "Reserve my surgery date" button stays pinned next to it on computers. On phones the ring shrinks into a slim bar that stays under the top menu. At the final step the moon turns into a sun.

**Changing the words:** edit the five steps in index.html as normal (search for "HOUR 0"). Each step also has small labels that feed the ring (`data-top`, `data-main`, `data-sub`), for example "Hours / 1–4 / Close monitoring". If you change a step's wording, update its labels so they still match. Add or remove a step by copying one of the five blocks, and the ring adjusts on its own.

**Where the code lives:** all of its styling is inside index.html (the block marked "First night: scroll-driven night dial"), and the scroll behaviour is the `initNightDial` function near the bottom. Because of that, styles.css does not need rebuilding for this section.

**Safety nets:** if JavaScript doesn't run, the section reads as a normal timeline. If a visitor's device is set to reduce motion, nothing animates and every step stays fully bright.

## The cost planner (What it costs section)

The "What it costs" section on the main page opens with a dark planner card. A visitor picks how many nights (1 to 7, with the minus and plus buttons), hours each night (8, 10 or 12) and whether they'll recover downtown or elsewhere in the GTA, and the estimate on the right updates instantly: nursing care, RN transportation, the 25% deposit and the balance. The green button leads to the intake form, where the address is checked for real.

The numbers are the same as the intake form: $85 an hour, 8-hour minimum, $30 transportation per shift outside the fee-free zone, 25% deposit. If you change the rates in intake.html (see "Changing rates" below), also change them in index.html: search for "initCostPlanner" and update RATE, FEE and DEPOSIT, and the "$680" and "$170" starting figures in the planner HTML (search for "cost-planner"). Its styling lives inside index.html (search for "Cost planner"), so styles.css does not need rebuilding.

## Trust badges and card layouts

The top of the main page and the international page show three trust badges under the buttons: CNO-registered nurses (links to the CNO Registry), PHIPA compliant, and secure card payments (Stripe, or Interac e-Transfer). They are plain text badges with icons, not the official CNO, Stripe or Interac logos, because those logos belong to those organizations and need their permission to use. To change a badge's wording, search for "trust-row" in index.html or international.html.

On the main page, the "What it costs" section shows what the hourly rate covers and the booking rules as icon cards (search for "rule-card"). On the international page, the five "how it works" steps are step cards (search for "step-card"), the planning cards have icons, and each region card has a small badge such as "Nonstop flights" (search for "flight-pill"). Each badge only repeats a fact already written in its own card, so if you change a card's wording, change its badge too. All of this styling lives inside each page's own style block, so styles.css does not need rebuilding.

## Headings and bullet icons

Big headings (the page title and each section title) use a heavier, larger, slightly tighter style than the body text so the eye moves from title to text. These rules sit in each page's own style block (search for "Type hierarchy"), so styles.css does not need rebuilding.

Lists don't use plain browser dots. Add `icon-list icon-list--check` to a list for teal checkmarks (good for service features), or `icon-list icon-list--time` for a teal calendar-clock (used on the cancellation policy, where a checkmark next to "no refund" would be misleading).

## How the two pages connect

The main page links to the intake form from three places: the "Intake form" link in the top menu, the same link in the phone menu, and the "Start my intake form" box in the booking section. The intake page links back with "Back to main site" and the logo.

## Who the pages speak as

Toronto ProRN is a team of ICU-trained Registered Nurses with plastic surgery recovery experience, all registered with the College of Nurses of Ontario. The pages describe the care as "your nurse" and "our nurses."

Two places stay in JoAnne's own voice on purpose. The About section ("Who is with you") is her bio. The booking section and contact buttons ("Tell me your surgery date", "I answer personally", "WhatsApp me") are her, because she answers every inquiry and pairs each client with a nurse. Patient reviews stay exactly as the patients wrote them.

The service is for Toronto and the GTA, Ontario, Canada only. That is stated in the page titles, the top of both pages, the booking form, the footers, and a required confirmation box at the start of the intake form.

## How the intake form works

**Steps.** The form is 12 steps. Only one step shows at a time. Clients can't move forward until every required question on that step is answered. A missed question turns red with a short message.

**Follow-up questions.** Some questions only appear when they apply. For example, "What kind of pets?" only shows if they answer Yes to pets. Hidden questions are never required and are never sent to you.

**Canada or international.** Both forms ask "Where do you live?" with two choices, "I live in Canada" or "International client". One must be picked, and picking one clears the other. On the intake form it sits at the top of step 1, under the Toronto confirmation box, and arrives in your email as "Client residence". On the short booking form on the main page it arrives as "client_residence". It tells you which Stripe link to send (CAD or USD).

**Saving.** Answers save on the client's own phone or computer as they type (in the browser's storage). If they close the page and come back on the same device, everything is still there. It's erased once they submit, or if they press "Start over". Nothing is stored on your website.

**Health screening (step 8).** Yes or No questions only, on purpose. No boxes for typing medical details. You collect those by phone.

**Sending.** When the client presses Submit, the answers go through Web3Forms (the same service and key as the short form on the main page) and arrive in prorninc@gmail.com. The email subject reads "Intake form: [name] · surgery [date]". At the bottom of the email you also get the zone check result and the cost estimate the client saw.

## The fee-free zone map

The map is a picture file, **toronto-fee-free-zone.jpg**, and it must sit in the same folder as the two pages. It's JoAnne's own Toronto street map with the fee-free zone outlined in red: Bloor St W and Bloor St E (north), Dufferin St (west), the Don Valley (east) and Queens Quay W / Lake Shore (south). Because it's a plain picture, it always shows, including when the files are opened straight from the computer.

It appears in two places: the "What it costs" section of the main page, and step 4 of the intake form. On the intake form, a client can press "Check my address" or tap the map, and a pin drops on the spot and shows $0 or $30.

The red line was traced into map positions (the FEE_FREE_ZONE list in intake.html), so the fee check follows the same border clients see. If the border ever changes, the picture and that list both need redoing, so ask for help rather than editing the numbers by hand.

## Changing rates, the zone or the service area

Open intake.html and search for **SETTINGS**. Near the bottom of the file you'll find:

- `HOURLY_RATE = 85`
- `MIN_HOURS = 8`
- `TRAVEL_FEE = 30`
- `DEPOSIT_RATE = 0.25`
- `SERVICE_RADIUS_KM = 45`
- `FEE_FREE_ZONE`, the border as map points (see the map section above before changing it)

Change the number, save, and upload. If you change the rates, also update the rates table in step 10 (search for "$680.00") and the "$85/hour" line at the top of the page, since those are written out as text.

## Updating the site

1. Go to your torontoprorn repository on GitHub.
2. Click "Add file", then "Upload files".
3. Drag in the changed files (index.html, intake.html, international.html, and the first time: styles.css and toronto-fee-free-zone.jpg).
4. Click "Commit changes". The live site updates within a minute or two.

## Icon script security check
The Lucide icon script (unpkg.com, version 1.61.0) on all three pages has an "integrity" code. The browser refuses to run the script if the file on unpkg is ever changed. If you change the Lucide version number, the integrity code must be recalculated at the same time, or every icon on the site will disappear.

## Recovery guides (articles)
- Guide pages live in the **guides/** folder. The first one is **guides/faja-after-tummy-tuck-liposuction.html** (JoAnne's faja article, text unchanged).
- Because guides sit one folder down, their links to the main site start with "../" (for example ../index.html, ../styles.css).
- The homepage has a **Recovery guides** section (id "guides") just above the footer, with one card per guide. To add a guide: copy the faja page as a starting point, swap in the new article, add a card to that section, and add the page to sitemap.xml.

