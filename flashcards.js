// ============================================
// FLASHCARDS - Lecția 20 (A1.2): Neue Freunde! (Tranziție A2)
// Claudia Toth · 32 carduri
// REGULĂ FERMĂ: NICIODATĂ ghilimele interne — CAPS pentru emfază!
// ============================================

const flashcardsData = [
    // === 6 prepoziții cu sens ===
    { de: "bis", ro: "până (la) · cere Akkusativ · ex: bis Freitag", audio: "audio/letters/bis.wav" },
    { de: "durch", ro: "prin / traversând · cere Akkusativ · ex: durch den Tunnel", audio: "audio/letters/durch.wav" },
    { de: "für", ro: "pentru · cere Akkusativ · ex: für die Mutter", audio: "audio/letters/fuer.wav" },
    { de: "gegen", ro: "împotriva / contra · cere Akkusativ · ex: gegen den Baum", audio: "audio/letters/gegen.wav" },
    { de: "ohne", ro: "fără · cere Akkusativ · ex: ohne das Buch", audio: "audio/letters/ohne.wav" },
    { de: "um", ro: "în jurul / la (oră) · cere Akkusativ · ex: um den Park herum", audio: "audio/letters/um.wav" },

    // === 8 expresii fixe ===
    { de: "durch den Tunnel", ro: "prin tunel · clasic pentru durch + masculin", audio: "audio/letters/durch-tunnel.wav" },
    { de: "für die Mutter", ro: "pentru mamă · für + feminin", audio: "audio/letters/fuer-mutter.wav" },
    { de: "gegen den Baum", ro: "în copac (lovește-se) · gegen cu sens fizic", audio: "audio/letters/gegen-baum.wav" },
    { de: "ohne das Buch", ro: "fără carte · ohne + neutru", audio: "audio/letters/ohne-buch.wav" },
    { de: "um den Park herum", ro: "în jurul parcului · pattern um … herum", audio: "audio/letters/um-park-herum.wav" },
    { de: "bis nächsten Freitag", ro: "până vinerea viitoare · bis + zi (Akk!)", audio: "audio/letters/bis-freitag.wav" },
    { de: "ein Geschenk für meinen Vater", ro: "un cadou pentru tatăl meu · für + meinen (Akk masc)", audio: "audio/letters/geschenk-vater.wav" },
    { de: "ohne meinen Bruder", ro: "fără fratele meu · ohne + meinen (Akk masc)", audio: "audio/letters/ohne-bruder.wav" },

    // === 6 um/gegen/bis/für + ore/durate ===
    { de: "um 8 Uhr", ro: "🎯 la ora 8 EXACT · precizie germană", audio: "audio/letters/um-8.wav" },
    { de: "gegen 8 Uhr", ro: "🎯 pe la 8 APROXIMATIV · poate 7:50 sau 8:15", audio: "audio/letters/gegen-8.wav" },
    { de: "für 3 Tage", ro: "pentru 3 zile · für + durată", audio: "audio/letters/fuer-3-tage.wav" },
    { de: "für eine Woche", ro: "pentru o săptămână · für + perioadă", audio: "audio/letters/fuer-woche.wav" },
    { de: "bis Montag", ro: "până luni · bis + zi (FĂRĂ articol cu zile)", audio: "audio/letters/bis-montag.wav" },
    { de: "bis nächste Woche", ro: "până săptămâna viitoare · bis + indicator timp", audio: "audio/letters/bis-naechste-woche.wav" },

    // === 6 recap A1 — câte 1 expresie/grup de lecții ===
    { de: "Ich heiße Andreea.", ro: "📚 L1: identitate (heißen)", audio: "audio/letters/recap-heissen.wav" },
    { de: "Ich kaufe einen Apfel.", ro: "📚 L5: Akkusativ masculin (der → den, ein → einen)", audio: "audio/letters/recap-akk.wav" },
    { de: "Ich kann Deutsch sprechen.", ro: "📚 L6: Modalverben + KLAMMER (infinitivul la final)", audio: "audio/letters/recap-modal.wav" },
    { de: "Das ist mein Bruder.", ro: "📚 L9: Possessivpronomen (mein/dein/sein/ihr)", audio: "audio/letters/recap-possessiv.wav" },
    { de: "Ich habe Pizza gegessen.", ro: "📚 L17: Perfekt + Partizip II", audio: "audio/letters/recap-perfekt.wav" },
    { de: "Entschuldigung, wie bitte?", ro: "📚 L15: strategii de conversație", audio: "audio/letters/recap-strategie.wav" },

    // === 6 trambuline A2 (preview ce vine) ===
    { de: "Wechselpräpositionen", ro: "🚀 A2: prepoziții cu 2 cazuri (in, auf, an, unter, über…) — Dativ sau Akk?", audio: "audio/letters/wechsel.wav" },
    { de: "Adjektivdeklination", ro: "🚀 A2: declinarea adjectivelor (der gute Mann · ein guter Mann)", audio: "audio/letters/adjektiv.wav" },
    { de: "Konjunktiv II", ro: "🚀 A2-B1: condițional (ich würde · wenn ich Zeit hätte)", audio: "audio/letters/konjunktiv.wav" },
    { de: "Nebensätze mit weil", ro: "🚀 A2: propoziții subordonate (verbul la final)", audio: "audio/letters/nebensatz.wav" },
    { de: "Genitiv", ro: "🚀 A2: al patrulea caz (das Buch des Mannes)", audio: "audio/letters/genitiv.wav" },
    { de: "Passiv", ro: "🚀 A2-B1: pasivul (das Haus wird gebaut)", audio: "audio/letters/passiv.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (6 prepoziții · 8 expresii fixe · 6 um/gegen/bis/für cu ore/durate · 6 recap A1 · 6 trambuline A2).<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunția germană.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); }
}

function prevCard() {
    if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => { console.log('Audio nu poate fi redat:', err); });
}

buildFlashcards();
