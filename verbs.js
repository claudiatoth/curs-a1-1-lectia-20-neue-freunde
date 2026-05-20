// ============================================
// VERB-KONJUGATION - Lecția 20 (A1.2): Neue Freunde!
// Claudia Toth · instrument de referință (Präsens / Präteritum / Perfekt)
// 4 verbe utilizate cu cele 6 prepoziții Akk:
// kämpfen (gegen + Akk), rennen (durch + Akk · 🚨 SEIN!), bitten (um + Akk · TARE), brauchen (+ Akk)
// Toate verificate PONS. Präteritum → RO imperfect.
// REGULĂ: NU backticks, NU ghilimele interne care rup template literal!
// ============================================

const verbsData = [
    {
        inf: 'kämpfen', ro: 'a lupta', typ: 'slab / regulat', aux: 'haben', part: 'gekämpft',
        praes: [['ich','kämpfe','lupt'],['du','kämpfst','lupți'],['er/sie/es','kämpft','luptă'],['wir','kämpfen','luptăm'],['ihr','kämpft','luptați'],['sie/Sie','kämpfen','luptă']],
        praet: [['ich','kämpfte','luptam'],['du','kämpftest','luptai'],['er/sie/es','kämpfte','lupta'],['wir','kämpften','luptam'],['ihr','kämpftet','luptați'],['sie/Sie','kämpften','luptau']],
        perf: [['ich','habe gekämpft','am luptat'],['du','hast gekämpft','ai luptat'],['er/sie/es','hat gekämpft','a luptat'],['wir','haben gekämpft','am luptat'],['ihr','habt gekämpft','ați luptat'],['sie/Sie','haben gekämpft','au luptat']],
        note: 'Slab/regulat. Folosire-cheie: kämpfen GEGEN + Akkusativ → Wir kämpfen GEGEN die Umweltverschmutzung (luptăm împotriva poluării). Verificat PONS.'
    },
    {
        inf: 'rennen', ro: 'a alerga', typ: 'tare / neregulat (verb de mișcare)', aux: 'sein', part: 'gerannt',
        praes: [['ich','renne','alerg'],['du','rennst','alergi'],['er/sie/es','rennt','aleargă'],['wir','rennen','alergăm'],['ihr','rennt','alergați'],['sie/Sie','rennen','aleargă']],
        praet: [['ich','rannte','alergam'],['du','ranntest','alergai'],['er/sie/es','rannte','alerga'],['wir','rannten','alergam'],['ihr','ranntet','alergați'],['sie/Sie','rannten','alergau']],
        perf: [['ich','bin gerannt','am alergat'],['du','bist gerannt','ai alergat'],['er/sie/es','ist gerannt','a alergat'],['wir','sind gerannt','am alergat'],['ihr','seid gerannt','ați alergat'],['sie/Sie','sind gerannt','au alergat']],
        note: '🚨 Mixed/neregulat: Präteritum cu vocală schimbată (rannte) + Partizip cu prefix ge- (gerannt). 🚨 Perfekt cu SEIN (verb de mișcare)! Folosire-cheie: rennen DURCH + Akkusativ → Der Hund rennt DURCH den Garten. Verificat PONS.'
    },
    {
        inf: 'bitten', ro: 'a ruga / a cere', typ: 'tare / neregulat', aux: 'haben', part: 'gebeten',
        praes: [['ich','bitte','cer'],['du','bittest','ceri'],['er/sie/es','bittet','cere'],['wir','bitten','cerem'],['ihr','bittet','cereți'],['sie/Sie','bitten','cer']],
        praet: [['ich','bat','ceream'],['du','batest','cereai'],['er/sie/es','bat','cerea'],['wir','baten','ceream'],['ihr','batet','cereați'],['sie/Sie','baten','cereau']],
        perf: [['ich','habe gebeten','am cerut'],['du','hast gebeten','ai cerut'],['er/sie/es','hat gebeten','a cerut'],['wir','haben gebeten','am cerut'],['ihr','habt gebeten','ați cerut'],['sie/Sie','haben gebeten','au cerut']],
        note: '🚨 TARE: Präteritum complet schimbat (bat, nu bittete!) + Partizip neregulat (gebeten). Radicalul -t cere -e la du/er/ihr (bittest, bittet). Folosire-cheie: bitten UM + Akkusativ → Ich bitte UM einen Kaffee (cer o cafea). Verificat PONS.'
    },
    {
        inf: 'brauchen', ro: 'a avea nevoie de', typ: 'slab / regulat', aux: 'haben', part: 'gebraucht',
        praes: [['ich','brauche','am nevoie'],['du','brauchst','ai nevoie'],['er/sie/es','braucht','are nevoie'],['wir','brauchen','avem nevoie'],['ihr','braucht','aveți nevoie'],['sie/Sie','brauchen','au nevoie']],
        praet: [['ich','brauchte','aveam nevoie'],['du','brauchtest','aveai nevoie'],['er/sie/es','brauchte','avea nevoie'],['wir','brauchten','aveam nevoie'],['ihr','brauchtet','aveați nevoie'],['sie/Sie','brauchten','aveau nevoie']],
        perf: [['ich','habe gebraucht','am avut nevoie'],['du','hast gebraucht','ai avut nevoie'],['er/sie/es','hat gebraucht','a avut nevoie'],['wir','haben gebraucht','am avut nevoie'],['ihr','habt gebraucht','ați avut nevoie'],['sie/Sie','haben gebraucht','au avut nevoie']],
        note: 'Slab/regulat. Apare des la A1, dar abia acum e conjugat oficial. Folosire-cheie: brauchen + Akkusativ direct → Ich brauche einen Kaffee. La A2 vei vedea că „nicht brauchen + zu + infinitiv" funcționează ca modalul „müssen". Verificat PONS.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[2] || v.perf[0];
    var hint = '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small>';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex[0] + ' <strong>' + ex[1] + '</strong> · <em style="color:#6b7280;">' + ex[2] + '</em><br>' +
        hint + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe din lecție</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt: auxiliar + participiu).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Instrument de <strong>referință</strong> (caută orice formă).' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Cele 4 verbe sunt asociate cu prepoziții Akk: kämpfen GEGEN (a lupta împotriva), rennen DURCH (a alerga prin · 🚨 Perfekt cu SEIN!), bitten UM (a cere · 🚨 TARE: bat, gebeten), brauchen + Akk direct (a avea nevoie de). Combinația verb + prepoziție fixă e o caracteristică germană pe care o vei vedea masiv la A2! 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('aux') === 0 ? '#7c3aed' : '#047857');
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });

    // 📎 Trambulina A2: verb + prepoziție fixă (preview)
    html += '<div class="sub-section">' +
        '<div class="sub-section-header" onclick="toggleVerb(' + verbsData.length + ')">' +
        '<span>🚀 Trambulina A2 — verb + prepoziție fixă (preview)</span>' +
        '<span class="sub-arrow">▼</span>' +
        '</div>' +
        '<div class="sub-section-content" id="verb-' + verbsData.length + '">' +
        '<div class="theory-box" style="background:#e0e7ff;">' +
        '<h4>🦋 La A2 vei descoperi sute de combinații verb + prepoziție fixă</h4>' +
        '<p>În germană, multe verbe vin LEGATE de o prepoziție specifică. La A2 le vei învăța sistematic. Iată câteva pe care le-ai întâlnit deja:</p>' +
        '<table class="grammar-table">' +
        '<tr><th>Verb + prepoziție</th><th>Caz cerut</th><th>Exemplu</th><th>Traducere RO</th></tr>' +
        '<tr><td><strong>kämpfen GEGEN</strong></td><td>Akk</td><td>kämpfen gegen die Krankheit</td><td><em style="color:#6b7280;">a lupta împotriva bolii</em></td></tr>' +
        '<tr><td><strong>rennen DURCH</strong></td><td>Akk</td><td>rennen durch den Park</td><td><em style="color:#6b7280;">a alerga prin parc</em></td></tr>' +
        '<tr><td><strong>bitten UM</strong></td><td>Akk</td><td>bitten um Hilfe</td><td><em style="color:#6b7280;">a cere ajutor</em></td></tr>' +
        '<tr><td><strong>warten AUF</strong></td><td>Akk (A2)</td><td>warten auf den Bus</td><td><em style="color:#6b7280;">a aștepta autobuzul</em></td></tr>' +
        '<tr><td><strong>denken AN</strong></td><td>Akk (A2)</td><td>denken an dich</td><td><em style="color:#6b7280;">a se gândi la tine</em></td></tr>' +
        '<tr><td><strong>helfen BEI</strong></td><td>Dativ (A2)</td><td>helfen bei der Arbeit</td><td><em style="color:#6b7280;">a ajuta la treabă</em></td></tr>' +
        '</table>' +
        '<p style="margin-top:8px;">🎯 La A2 vei avea o lecție dedicată pentru pattern-ul „<strong>Verben mit Präpositionen</strong>" + întrebări „Worauf? Worüber? Worauf?".</p>' +
        '</div></div></div>';

    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
