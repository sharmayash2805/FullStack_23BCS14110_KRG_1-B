# Ques 1 — Responsive Navigation Bar

Files:

- `index.html` — HTML page containing a responsive navigation bar with Home, About and Contact links.
- `styles.css` — CSS implementing layout and a CSS-only hamburger collapse for small screens.

How to run:

1. Open `index.html` in a browser (double-click or use your editor's Live Server).
2. Resize the browser window to a narrow width (or open devtools and toggle device toolbar) to see the hamburger icon. Click it to expand/collapse the menu.

Notes:

- This implementation uses the checkbox/label technique so no JavaScript is required.
- If you prefer a JS-based toggle or want accessibility attributes tuned (aria-expanded updates), I can add a tiny script.

<!--
Concept summary — short:

HTML elements used:
- header, nav, main, section: semantic layout containers.
- ul, li, a: navigation list and links.
- input[type=checkbox] + label: CSS-only toggle control for the menu.
- svg: inline icons next to links.

CSS features used:
- :root variables — centralize colors.
- Flexbox (display:flex) — align brand and navigation.
- Media queries (@media) — switch to hamburger layout on small screens.
- Transitions & opacity/max-height — animate menu open/close.
- Positioning (absolute) — dropdown placement.

Short explanation:
- Mobile-first: base styles target small screens; media queries expand for larger screens.
- Checkbox hack: the label toggles the hidden checkbox; CSS selector input:checked + label + nav shows/hides the menu without JS.
- Note: add small JS to update ARIA attributes for improved accessibility if required.
-->
