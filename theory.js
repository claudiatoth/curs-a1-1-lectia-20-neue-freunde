// ============================================
// TEORIE - Lecția 20 (A1.2): Neue Freunde! (Tranziție A2)
// Claudia Toth · Annettes Deutschkurs
// Sursă DF: 66 (teorie), 67 (Übung I), 67-Z1 (Übung II), 70-Z3 (Übung III + Pronomen)
// LECȚIE-BILANȚ: cele 6 prepoziții Akk + recapitulare A1 + trambulina A2
// REGULĂ: NU ghilimele interne care rup template literal!
// ============================================

const theoryHTML = `
    <!-- 0: Intro + notice diacritice -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🎉 1. Astăzi: cele 6 personaje se reunesc — finalul A1!</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="andreea-note" style="margin-bottom: 14px;">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (înainte să începem):</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ss</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ß</code></li>
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ae</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ä</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">oe</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ö</code> &nbsp;|&nbsp; <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ue</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ü</code></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat. Diacriticele RO le accept și cu, și fără."</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>🏁 LECȚIE-BILANȚ — finalul A1, trambulina A2</h4>
                <p>Ai parcurs 19 lecții. Cunoști <strong>4 cazuri</strong> (cel puțin atins Dativ + Genitiv), <strong>5 timpuri</strong> (Präsens, Perfekt, Präteritum sein/haben/modale), <strong>verbele modale, separabile, tari</strong>, posesivele complete și strategiile de conversație. Azi <strong>cele 6 personaje se reunesc</strong> + învățăm <strong>ultima piesă</strong>: 6 prepoziții care cer mereu <strong>Akkusativ</strong>.</p>
                <p>Mnemonic-ul de aur: <strong>BIS · DURCH · FÜR · GEGEN · OHNE · UM</strong>. Cu astea în memorie, ai bazele complete pentru A2.</p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette (la o cafenea, finalul cursului)</div>
                        <div class="dialog-text">Heute treffen wir uns alle. Andreea, Mihai, Florian, Carolina, Acar — alle sind da!
                            <span class="translation">Azi ne întâlnim toți. Andreea, Mihai, Florian, Carolina, Acar — toți sunt aici!</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Mihai</div>
                        <div class="dialog-text">Ich habe einen Kuchen für euch gebacken! Ohne dich, Annette, hätten wir kein A1 geschafft.
                            <span class="translation">Am copt o prăjitură pentru voi! Fără tine, Annette, n-am fi terminat A1.</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/florian.png" alt="Florian" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Florian</div>
                        <div class="dialog-text">Wir gehen jetzt durch die Stadt — bis zum Park!
                            <span class="translation">Acum mergem prin oraș — până la parc!</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>🎯 Ce vei putea face la finalul lecției</h4>
                <ul style="margin-left: 18px;">
                    <li>Să folosești corect <strong>6 prepoziții fixe Akkusativ</strong>: bis · durch · für · gegen · ohne · um</li>
                    <li>Să formezi <strong>um … herum</strong> (în jurul + Akk)</li>
                    <li>Să eviți capcana <strong>um vs gegen</strong> pentru oră (recap L13!)</li>
                    <li>Să înlocuiești substantivul Akk după prepoziție cu <strong>pronume</strong> (mich, dich, ihn, sie, es… — recap L12)</li>
                    <li>Să faci o sinteză a celor 19 lecții A1 și să fii pregătit pentru A2</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: Cele 6 prepoziții Akkusativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🟡 2. Cele 6 prepoziții fixe + Akkusativ</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-prep-akk.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Mnemonic: BIS · DURCH · FÜR · GEGEN · OHNE · UM</h4>
                <p>Aceste 6 prepoziții cer <strong>mereu Akkusativ</strong>. Substantivul/pronumele după ele se declină <strong>obligatoriu</strong> la Akk: der → den, ein → einen, mein → meinen, kein → keinen.</p>
                <table class="grammar-table">
                    <tr><th>Prepoziție</th><th>Sens</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>bis</strong></td><td>până (la)</td><td>Ich arbeite <strong>bis</strong> Freitag.</td><td><em style="color:#6b7280;">Lucrez până vineri.</em></td></tr>
                    <tr><td><strong>durch</strong></td><td>prin / traversând</td><td>Der Zug fährt <strong>durch den</strong> Tunnel.</td><td><em style="color:#6b7280;">Trenul merge prin tunel.</em></td></tr>
                    <tr><td><strong>für</strong></td><td>pentru</td><td>Mihai backt einen Kuchen <strong>für seine</strong> Freunde.</td><td><em style="color:#6b7280;">Mihai face o prăjitură pentru prietenii lui.</em></td></tr>
                    <tr><td><strong>gegen</strong></td><td>împotriva / contra</td><td>Acar spielt Tennis <strong>gegen einen</strong> Kollegen.</td><td><em style="color:#6b7280;">Acar joacă tenis împotriva unui coleg.</em></td></tr>
                    <tr><td><strong>ohne</strong></td><td>fără</td><td>Andreea kommt <strong>ohne das</strong> Buch in die Schule.</td><td><em style="color:#6b7280;">Andreea vine fără carte la școală.</em></td></tr>
                    <tr><td><strong>um</strong></td><td>în jurul / la (oră fixă)</td><td>Florian geht <strong>um den</strong> Park.</td><td><em style="color:#6b7280;">Florian merge în jurul parcului.</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>🚨 Capcana 1: bis fără articol (cu indicatori de timp)</h4>
                <p>Cu <strong>indicatori de timp</strong> (zile, luni, momente), <strong>bis</strong> nu primește articol:</p>
                <ul style="margin-left: 18px;">
                    <li>Ich muss meine Hausaufgaben <strong>bis nächste Woche</strong> machen. (până săptămâna viitoare)</li>
                    <li><strong>Bis nächsten Monat</strong> wohne ich in Berlin. (până luna viitoare)</li>
                    <li><strong>Bis Freitag!</strong> (Pe vineri! — la revedere)</li>
                </ul>
                <p>Dar cu obiecte/locuri: <strong>bis zum</strong> + Dativ (combinație de prepoziții, intră la A2). La A1 e suficient <strong>bis</strong> + timp.</p>
            </div>
        </div>
    </div>

    <!-- 2: Declinarea Akk după prepoziție -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>📝 3. Declinarea după prepoziție — recap Akkusativ</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-deklination.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Recap Akk: doar masculinul își schimbă articolul</h4>
                <p>După cele 6 prepoziții, articolul/posesivul se pune la Akkusativ. Aceasta e exact regula din <strong>Lecția 5</strong> (Akkusativ) și <strong>Lecția 7</strong> (extins la posesive).</p>
                <table class="grammar-table">
                    <tr><th>Gen</th><th>Nominativ</th><th>Akkusativ</th><th>Cu prepoziție</th><th>Traducere RO</th></tr>
                    <tr><td><strong>masculin</strong></td><td>der / ein / mein</td><td><strong>den / einen / meinen</strong></td><td>für <strong>den</strong> Hund</td><td><em style="color:#6b7280;">pentru câine</em></td></tr>
                    <tr><td><strong>feminin</strong></td><td>die / eine / meine</td><td>die / eine / meine</td><td>für <strong>die</strong> Katze</td><td><em style="color:#6b7280;">pentru pisică</em></td></tr>
                    <tr><td><strong>neutru</strong></td><td>das / ein / mein</td><td>das / ein / mein</td><td>für <strong>das</strong> Kind</td><td><em style="color:#6b7280;">pentru copil</em></td></tr>
                    <tr><td><strong>plural</strong></td><td>die / meine</td><td>die / meine</td><td>für <strong>die</strong> Eltern</td><td><em style="color:#6b7280;">pentru părinți</em></td></tr>
                </table>
                <p style="margin-top: 8px; font-size: 0.92em;">📌 Doar masculinul își schimbă vizibil articolul (der → den, ein → einen). Feminin/neutru/plural rămân identici la Nom și Akk.</p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>📌 Exemple cu cele 6 personaje (toate Akk masculin pentru claritate)</h4>
                <table class="grammar-table">
                    <tr><th>Propoziție germană</th><th>Traducere RO</th></tr>
                    <tr><td>Andreea kauft Blumen <strong>für ihren</strong> Vater.</td><td><em style="color:#6b7280;">Andreea cumpără flori pentru tatăl ei.</em></td></tr>
                    <tr><td>Mihai läuft <strong>gegen den</strong> Tisch. Aua!</td><td><em style="color:#6b7280;">Mihai se lovește de masă. Au!</em></td></tr>
                    <tr><td>Carolina geht <strong>ohne ihren</strong> Hund spazieren.</td><td><em style="color:#6b7280;">Carolina merge la plimbare fără câinele ei.</em></td></tr>
                    <tr><td>Florian fährt <strong>durch den</strong> Tunnel.</td><td><em style="color:#6b7280;">Florian merge prin tunel.</em></td></tr>
                    <tr><td>Acar arbeitet <strong>bis nächsten</strong> Freitag.</td><td><em style="color:#6b7280;">Acar lucrează până vinerea viitoare.</em></td></tr>
                    <tr><td>Annette geht <strong>um den</strong> Park (herum).</td><td><em style="color:#6b7280;">Annette merge în jurul parcului.</em></td></tr>
                </table>
            </div>
        </div>
    </div>

    <!-- 3: um ... herum + capcane (um vs gegen pentru oră) -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>⏰ 4. um … herum + capcana um vs gegen pentru ORĂ</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-capcane.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🆕 Construcția um … herum (în jurul + Akk)</h4>
                <p>Când vrei să exprimi <strong>mișcare în jurul</strong> ceva, folosești pattern-ul <strong>um + Akk + herum</strong>. Cuvântul <em>herum</em> e opțional, dar des folosit — întărește sensul de „de jur împrejur".</p>
                <table class="grammar-table">
                    <tr><th>Germană</th><th>Traducere RO</th></tr>
                    <tr><td>Florian geht <strong>um den</strong> Supermarkt <strong>herum</strong>.</td><td><em style="color:#6b7280;">Florian merge de jur împrejurul supermarketului.</em></td></tr>
                    <tr><td>Der Hund läuft <strong>um die</strong> Katze <strong>herum</strong>.</td><td><em style="color:#6b7280;">Câinele aleargă în jurul pisicii.</em></td></tr>
                    <tr><td>Das Mädchen geht <strong>um den</strong> Tisch <strong>herum</strong>.</td><td><em style="color:#6b7280;">Fata merge în jurul mesei.</em></td></tr>
                    <tr><td>Der Bus fährt <strong>um den</strong> Park <strong>herum</strong>.</td><td><em style="color:#6b7280;">Autobuzul merge împrejurul parcului.</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>🚨 Capcana: um vs gegen pentru ORĂ (recap Lecția 13!)</h4>
                <p>Ambele prepoziții apar cu ora — dar înseamnă lucruri diferite:</p>
                <table class="grammar-table">
                    <tr><th>Prepoziție</th><th>Sens</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>um</strong></td><td>la oră EXACTĂ</td><td>Wir treffen uns <strong>um</strong> 8 Uhr.</td><td><em style="color:#6b7280;">Ne întâlnim la ora 8 (exact).</em></td></tr>
                    <tr><td><strong>gegen</strong></td><td>la oră APROXIMATIVĂ</td><td>Wir treffen uns <strong>gegen</strong> 8 Uhr.</td><td><em style="color:#6b7280;">Ne întâlnim pe la 8 (poate 7:50, poate 8:15).</em></td></tr>
                </table>
                <p style="margin-top: 8px;">🦋 Truc: <strong>um</strong> = exact (precizie germană), <strong>gegen</strong> = aproximativ (relaxare). În germană precizia contează!</p>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>🚨 Alte folosiri speciale</h4>
                <ul style="margin-left: 18px;">
                    <li><strong>für + durată:</strong> <em>für 3 Tage</em> (pentru 3 zile) · <em>für eine Woche</em> (pentru o săptămână)</li>
                    <li><strong>gegen + adversar (sport):</strong> <em>Deutschland spielt gegen Spanien</em> (Germania joacă cu Spania)</li>
                    <li><strong>ohne + obiect fără articol</strong> (idiomatic): <em>ohne Geld</em> · <em>ohne Pause</em> · <em>ohne Ton</em></li>
                    <li><strong>durch + perioadă (rar):</strong> <em>durch die ganze Nacht</em> (toată noaptea)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 4: Recapitulare A1 - sinteză 19 lecții -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>📚 5. Recapitulare A1 — sinteza celor 19 lecții</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-recap-a1.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🎓 Tot ce-ai parcurs în A1</h4>
                <p>Cele 19 lecții se grupează în 5 mari blocuri tematice. Fiecare aduce o piesă esențială.</p>
                <table class="grammar-table">
                    <tr><th>Bloc</th><th>Lecții</th><th>Cheia gramaticală</th><th>Traducere RO</th></tr>
                    <tr><td><strong>① Identitate + Präsens</strong></td><td>L1-L3</td><td>sein, heißen, Schwache Verben</td><td><em style="color:#6b7280;">a fi, a se numi, verbe regulate</em></td></tr>
                    <tr><td><strong>② Akkusativ + Modale</strong></td><td>L4-L6</td><td>haben, Akk, können/müssen</td><td><em style="color:#6b7280;">a avea, primul caz, verbe modale</em></td></tr>
                    <tr><td><strong>③ Familie + Plural + Posesive</strong></td><td>L7-L9</td><td>der/die/das, Plural, mein/dein/sein</td><td><em style="color:#6b7280;">familia, pluralul, posesivele</em></td></tr>
                    <tr><td><strong>④ Starke Verben + Imperativ + A1.2</strong></td><td>L10-L15</td><td>fahren/lesen, Imperativ, Präteritum, Personalpronomen Akk, Uhrzeit, Dativ, strategii</td><td><em style="color:#6b7280;">verbe tari, ordine, trecut, ora, primul Dativ</em></td></tr>
                    <tr><td><strong>⑤ Wohnen + Perfekt + Sinteză</strong></td><td>L16-L20</td><td>Wohnen+Dativ, Perfekt, welcher, Possessiv Plural, Präp+Akk</td><td><em style="color:#6b7280;">acasă, trecut compus, alegere, posesivii plural, ultimele prepoziții</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🔑 Cele 6 piese-cheie pe care le DUCI la A2</h4>
                <ol style="margin-left: 18px;">
                    <li><strong>4 cazuri ale germanei</strong> — Nominativ, Akkusativ (complet), Dativ (introdus), Genitiv (atins la posesive)</li>
                    <li><strong>Conjugarea</strong> — toate persoanele + 3 timpuri principale (Präsens · Perfekt · Präteritum)</li>
                    <li><strong>Modalele</strong> — toate 6 (können, müssen, wollen, dürfen, sollen, mögen) + regula KLAMMER</li>
                    <li><strong>Verbele separabile</strong> — prefixul zboară la final (steht … auf, fährt … ab)</li>
                    <li><strong>Strategiile de conversație</strong> — cum ceri lămuriri când nu înțelegi</li>
                    <li><strong>Prepozițiile</strong> — fixe Akk (azi), introducere Dativ (L14), locale „in" (L16)</li>
                </ol>
            </div>
        </div>
    </div>

    <!-- 5: Trambulina A2 + dialog final 6 personaje -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🚀 6. Trambulina A2 + reuniunea celor 6 personaje</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-trambulina-dialog.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🦋 Cele 6 personaje, fiecare cu o prepoziție Akk</h4>
                <p>Toți s-au adunat la cafeneaua lui Mihai. Fiecare zice o frază — și fiecare frază are una din cele 6 prepoziții noi:</p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea (cu trenul de Berlin)</div>
                        <div class="dialog-text">Ich bin <strong>durch</strong> Deutschland gefahren — von Berlin <strong>bis</strong> Köln!
                            <span class="translation">Am călătorit prin Germania — de la Berlin până la Köln!</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Mihai (la restaurantul lui)</div>
                        <div class="dialog-text">Ich habe einen Kuchen <strong>für</strong> euch gebacken!
                            <span class="translation">Am copt o prăjitură pentru voi!</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/florian.png" alt="Florian" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Florian (artistul-doctor)</div>
                        <div class="dialog-text">Heute spielen wir Tennis — Mihai <strong>gegen</strong> mich!
                            <span class="translation">Azi jucăm tenis — Mihai contra mea!</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/carolina.png" alt="Carolina" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Carolina (fotografa)</div>
                        <div class="dialog-text"><strong>Ohne</strong> meine Kamera gehe ich nirgendwo — ich fotografiere alles!
                            <span class="translation">Fără camera mea nu merg nicăieri — fotografiez totul!</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/acar.png" alt="Acar" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Acar (Vorarbeiter)</div>
                        <div class="dialog-text">Wir bauen <strong>um den</strong> See <strong>herum</strong> ein neues Haus.
                            <span class="translation">Construim o casă nouă în jurul lacului.</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette (profesoara)</div>
                        <div class="dialog-text">Ihr seid alle fantastisch! Jetzt seid ihr bereit für A2. Auf in den nächsten Kurs!
                            <span class="translation">Sunteți cu toții fantastici! Acum sunteți pregătiți pentru A2. Hai la cursul următor!</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🎯 Cele 6 reguli de aur ale lecției</h4>
                <ol style="margin-left: 18px;">
                    <li><strong>6 prepoziții fixe Akk:</strong> bis · durch · für · gegen · ohne · um</li>
                    <li>Articolul după ele se pune la <strong>Akkusativ</strong> (masc: der → den, ein → einen)</li>
                    <li><strong>um … herum</strong> = în jurul + Akk (herum e opțional, dar des folosit)</li>
                    <li>🚨 <strong>um 8 Uhr</strong> = exact 8 · <strong>gegen 8 Uhr</strong> = pe la 8 (aproximativ)</li>
                    <li><strong>bis + timp</strong> de obicei fără articol (bis nächste Woche, bis Freitag)</li>
                    <li>Substantivul Akk se poate înlocui cu <strong>pronume</strong>: für ihn, gegen sie, ohne uns (recap L12)</li>
                </ol>
                <p style="margin-top: 12px; text-align: center; font-weight: bold; color: #065f46;">🏁 A1 e COMPLET! Drumul tău spre A2 începe acum. Bravo, dragul meu cursant! 🦋🎉</p>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const arrow = document.querySelectorAll('.sub-arrow')[index];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}
