// ============================================
// EXERCIȚII - Lecția 20 (A1.2): Neue Freunde! (Tranziție A2)
// Claudia Toth · 5 exerciții (toate text inputs)
// Sursă DF: 66 (teorie), 67 (Übung I), 67-Z1 (Übung II), 70-Z3 (Übung III)
// Normalizer pattern v2 (AGENTS-README): / , … ... toate -> SPAȚIU
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/…/g, '...')
        .replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ')
        .replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/[.!?;:]/g, '');
}

// ============================================
// EX 1: Welche Präposition? (alege prepoziția potrivită)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Andreea kauft Blumen ____ ihre Mutter.', translation: 'Andreea cumpără flori pentru mama ei.', correct: 'für', accept: ['für', 'fuer'], hint: 'durch / gegen / ohne / für' },
    { id: 'b', sentence: 'Mihai geht ____ das Einkaufszentrum (în interior).', translation: 'Mihai trece prin centrul comercial.', correct: 'durch', accept: ['durch'], hint: 'durch / gegen / ohne / für' },
    { id: 'c', sentence: 'Carolina spielt Tennis ____ ihren Bruder.', translation: 'Carolina joacă tenis împotriva fratelui ei.', correct: 'gegen', accept: ['gegen'], hint: 'durch / gegen / ohne / für' },
    { id: 'd', sentence: 'Florian geht ____ seinen Hund nicht spazieren.', translation: 'Florian nu se plimbă fără câinele lui.', correct: 'ohne', accept: ['ohne'], hint: 'durch / gegen / ohne / für' },
    { id: 'e', sentence: 'Annette joggt jeden Morgen ____ den Park (herum).', translation: 'Annette aleargă în fiecare dimineață în jurul parcului.', correct: 'um', accept: ['um'], hint: 'um / bis / für / gegen' },
    { id: 'f', sentence: 'Ich arbeite ____ nächste Woche an dem Projekt.', translation: 'Lucrez la proiect până săptămâna viitoare.', correct: 'bis', accept: ['bis'], hint: 'um / bis / für / gegen' },
    { id: 'g', sentence: 'Acar baut ein neues Haus ____ seine Familie.', translation: 'Acar construiește o casă nouă pentru familia lui.', correct: 'für', accept: ['für', 'fuer'], hint: 'durch / gegen / ohne / für' },
    { id: 'h', sentence: 'Der Bus fährt ____ den Tunnel.', translation: 'Autobuzul merge prin tunel.', correct: 'durch', accept: ['durch'], hint: 'durch / gegen / ohne / für' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🟡 Alege prepoziția potrivită din cele 4 opțiuni.</strong><br>Mnemonic-ul: <strong>bis · durch · für · gegen · ohne · um</strong>.<br><em>💡 Ține cont de sens — un câine NU MERGE „pentru" cineva, ci CU/FĂRĂ.</em></div>';
    ex1Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation} <span style="color:#7c3aed;">· opțiuni: ${it.hint}</span></small><input type="text" id="ex1-${it.id}" placeholder="prepoziția..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => { const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`); const u = normalizeAnswer(inp.value); const ok = it.accept.some(a => normalizeAnswer(a) === u); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 2: Articolul/posesivul la Akkusativ după prepoziție
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Mihai kauft Blumen für ____ Mutter. (seine)', translation: 'Mihai cumpără flori pentru mama lui.', correct: 'seine', accept: ['seine'] },
    { id: 'b', sentence: 'Das Auto fährt gegen ____ Baum. (der → ?)', translation: 'Mașina se lovește de copac.', correct: 'den', accept: ['den'] },
    { id: 'c', sentence: 'Andreea kommt ohne ____ Buch in die Schule. (ihr → ?)', translation: 'Andreea vine la școală fără cartea ei.', correct: 'ihr', accept: ['ihr'] },
    { id: 'd', sentence: 'Carolina läuft durch ____ Garten. (unser → ?)', translation: 'Carolina aleargă prin grădina noastră.', correct: 'unseren', accept: ['unseren'] },
    { id: 'e', sentence: 'Acar arbeitet bis ____ Freitag. (nächst-)', translation: 'Acar lucrează până vinerea viitoare.', correct: 'nächsten', accept: ['nächsten', 'naechsten'] },
    { id: 'f', sentence: 'Florian geht um ____ Park herum. (der → ?)', translation: 'Florian merge în jurul parcului.', correct: 'den', accept: ['den'] },
    { id: 'g', sentence: 'Annette spielt gegen ____ Mann Schach. (ein → ?)', translation: 'Annette joacă șah cu un bărbat.', correct: 'einen', accept: ['einen'] },
    { id: 'h', sentence: 'Wir fahren ohne ____ Bruder nach München. (mein → ?)', translation: 'Mergem la München fără fratele meu.', correct: 'meinen', accept: ['meinen'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📝 Completează articolul/posesivul la Akkusativ.</strong><br>Doar masculinul singular își schimbă forma (der → den, ein → einen, mein → meinen).<br><em>💡 Recap Lecția 5 + Lecția 7 + Lecția 9.</em></div>';
    ex2Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="forma Akk..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => { const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`); const u = normalizeAnswer(inp.value); const ok = it.accept.some(a => normalizeAnswer(a) === u); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 3: um ... herum + um vs gegen pentru ORĂ (capcana L13)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Der Hund läuft ____ die Katze ____. (în jurul, cu herum)', translation: 'Câinele aleargă în jurul pisicii.', correct: 'um / herum', accept: ['um herum'] },
    { id: 'b', sentence: 'Wir treffen uns ____ 8 Uhr (exact!).', translation: 'Ne întâlnim la ora 8 fix.', correct: 'um', accept: ['um'] },
    { id: 'c', sentence: 'Mihai kommt ____ 19 Uhr (aproximativ, pe la).', translation: 'Mihai vine pe la ora 19.', correct: 'gegen', accept: ['gegen'] },
    { id: 'd', sentence: 'Annette geht jeden Tag ____ den Park ____.', translation: 'Annette merge în fiecare zi în jurul parcului.', correct: 'um / herum', accept: ['um herum'] },
    { id: 'e', sentence: 'Florian arbeitet ____ 9 Uhr (oră fixă de început).', translation: 'Florian începe lucrul la ora 9 fix.', correct: 'um', accept: ['um'] },
    { id: 'f', sentence: 'Wir kommen ____ Mittag (aproximativ pe la prânz).', translation: 'Venim pe la prânz.', correct: 'gegen', accept: ['gegen'] },
    { id: 'g', sentence: 'Das Auto fährt langsam ____ den See ____.', translation: 'Mașina merge încet în jurul lacului.', correct: 'um / herum', accept: ['um herum'] },
    { id: 'h', sentence: 'Andreeas Zug kommt ____ 17:40 Uhr an (exact!).', translation: 'Trenul Andreei sosește la 17:40 fix.', correct: 'um', accept: ['um'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>⏰ um … herum + capcana um vs gegen pentru ORĂ.</strong><br>Pentru oră: <strong>um</strong> = exact · <strong>gegen</strong> = aproximativ (pe la).<br><em>💡 La um … herum scrie ambele cuvinte cu spațiu, slash sau virgulă — sistemul le acceptă pe toate.</em></div>';
    ex3Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex3-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => { const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`); const u = normalizeAnswer(inp.value); const ok = it.accept.some(a => normalizeAnswer(a) === u); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 4: Înlocuire substantiv → pronume Akk (recap L12) — din 70-Z3 ex.3
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Mihai backt einen Kuchen für seine Freunde. → Mihai backt einen Kuchen für ____.', translation: 'Mihai face o prăjitură pentru ei (plural).', correct: 'sie', accept: ['sie'] },
    { id: 'b', sentence: 'Ich spiele Tennis gegen meinen Bruder. → Ich spiele Tennis gegen ____.', translation: 'Joc tenis împotriva lui (masc. sing).', correct: 'ihn', accept: ['ihn'] },
    { id: 'c', sentence: 'Andreea kauft Blumen für ihre Mutter. → Andreea kauft Blumen für ____.', translation: 'Andreea cumpără flori pentru ea (fem. sing).', correct: 'sie', accept: ['sie'] },
    { id: 'd', sentence: 'Wir lesen das Buch ohne den Lehrer. → Wir lesen das Buch ohne ____.', translation: 'Citim cartea fără el.', correct: 'ihn', accept: ['ihn'] },
    { id: 'e', sentence: 'Florian malt ein Bild für die Kinder. → Florian malt ein Bild für ____.', translation: 'Florian pictează un tablou pentru ei (plural).', correct: 'sie', accept: ['sie'] },
    { id: 'f', sentence: 'Schaust du das Video ohne den Ton an? → Schaust du das Video ohne ____ an?', translation: 'Te uiți la video fără el (sunetul)?', correct: 'ihn', accept: ['ihn'] },
    { id: 'g', sentence: 'Carolina arbeitet ohne mich nicht. → Carolina arbeitet ohne ____ nicht. (eu)', translation: 'Carolina nu lucrează fără mine.', correct: 'mich', accept: ['mich'] },
    { id: 'h', sentence: 'Acar baut ein Haus für dich und mich. → Acar baut ein Haus für ____. (noi)', translation: 'Acar construiește o casă pentru noi.', correct: 'uns', accept: ['uns'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🔄 Înlocuiește substantivul Akk cu pronumele potrivit (recap Lecția 12).</strong><br><strong>mich · dich · ihn · sie · es · uns · euch · sie</strong>.<br><em>💡 Atenție la gen: masculin → ihn · feminin/plural → sie · neutru → es.</em></div>';
    ex4Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="pronume..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => { const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`); const u = normalizeAnswer(inp.value); const ok = it.accept.some(a => normalizeAnswer(a) === u); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// ============================================
// EX 5: Dialog reuniune 6 personaje (recap A1 + prepoziții Akk)
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Andreea: Ich bin ____ Deutschland gefahren — von Berlin bis Köln. (prin)', translation: 'Am călătorit prin Germania.', correct: 'durch', accept: ['durch'] },
    { id: 'b', sentence: 'Mihai: Ich habe einen Kuchen ____ euch gebacken! (pentru)', translation: 'Am copt o prăjitură pentru voi.', correct: 'für', accept: ['für', 'fuer'] },
    { id: 'c', sentence: 'Florian: Heute spielen wir Tennis — Mihai ____ mich! (împotriva)', translation: 'Mihai joacă contra mea.', correct: 'gegen', accept: ['gegen'] },
    { id: 'd', sentence: 'Carolina: ____ meine Kamera gehe ich nirgendwo! (fără)', translation: 'Fără camera mea nu merg nicăieri.', correct: 'Ohne', accept: ['ohne'] },
    { id: 'e', sentence: 'Acar: Wir bauen ____ den See herum ein neues Haus. (în jurul)', translation: 'Construim o casă în jurul lacului.', correct: 'um', accept: ['um'] },
    { id: 'f', sentence: 'Annette: Wir lernen heute ____ 18 Uhr. (până la)', translation: 'Învățăm azi până la 18.', correct: 'bis', accept: ['bis'] },
    { id: 'g', sentence: 'Andreea: Treffen wir uns morgen ____ 10 Uhr? (exact ora 10)', translation: 'Ne întâlnim mâine la 10 fix?', correct: 'um', accept: ['um'] },
    { id: 'h', sentence: 'Annette: Ihr seid bereit ____ A2! Bravo! (pentru)', translation: 'Sunteți pregătiți pentru A2!', correct: 'für', accept: ['für', 'fuer'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎉 Reuniunea celor 6 personaje — finalul cursului A1!</strong><br>Completează prepoziția potrivită din mnemonic-ul nostru.<br><em>💡 Toate sunt Akk-prepoziții: bis · durch · für · gegen · ohne · um.</em></div>';
    ex5Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="prepoziția..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => { const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`); const u = normalizeAnswer(inp.value); const ok = it.accept.some(a => normalizeAnswer(a) === u); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
