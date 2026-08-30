<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EL ADN DE LAS OPCIONES | 1er Millón de Dólares</title>
    <style>
        :root {
            --bg-dark: #07080a;
            --bg-card: #12141a;
            --bg-glass: rgba(18, 20, 26, 0.75);
            --gold: #d4af37;
            --gold-light: #f3e5ab;
            --gold-dark: #aa8c2c;
            --green: #00ff7f;
            --red: #ff3333;
            --text-main: #f0f4f8;
            --text-muted: #8a94a6;
            --border: rgba(212, 175, 55, 0.25);
            --font-main: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: var(--font-main);
        }

        body {
            background-color: var(--bg-dark);
            color: var(--text-main);
            overflow: hidden;
            width: 100vw;
            height: 100vh;
        }

        .watermark {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 7vw;
            font-weight: 900;
            color: rgba(255, 255, 255, 0.015);
            white-space: nowrap;
            pointer-events: none;
            z-index: 0;
            user-select: none;
            letter-spacing: 5px;
        }

        .top-bar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 70px;
            padding: 0 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(7, 8, 10, 0.92);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
            z-index: 1000;
        }

        .brand-logo {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .brand-badge {
            width: 42px;
            height: 42px;
            background: linear-gradient(135deg, var(--gold-dark), var(--gold-light));
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000;
            font-weight: 900;
            font-size: 1.1rem;
            box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
        }

        .logo-img {
            height: 40px;
            width: auto;
            max-width: 180px;
            object-fit: contain;
            filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.15));
        }

        .brand-text {
            color: var(--gold);
            font-weight: 800;
            letter-spacing: 2px;
            font-size: 1.1rem;
            text-transform: uppercase;
        }

        .permanent-ctas {
            display: flex;
            gap: 15px;
            align-items: center;
        }

        .btn {
            padding: 10px 20px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.88rem;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            border: none;
            letter-spacing: 0.5px;
        }

        .btn-gold {
            background: linear-gradient(90deg, var(--gold-dark), var(--gold));
            color: #000;
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.25);
        }

        .btn-gold:hover {
            background: linear-gradient(90deg, var(--gold), var(--gold-light));
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
        }

        .btn-outline {
            background: transparent;
            color: var(--green);
            border: 1px solid var(--green);
        }

        .btn-outline:hover {
            background: rgba(0, 255, 127, 0.12);
            transform: translateY(-2px);
        }

        #presentation-container {
            position: absolute;
            top: 70px;
            bottom: 60px;
            left: 0;
            width: 100%;
            z-index: 10;
        }

        .slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 40px 8%;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.4s ease, transform 0.4s ease;
            transform: scale(0.98);
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow-y: auto;
        }

        .slide.active {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
        }

        .section-tag {
            color: var(--gold);
            font-weight: 700;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 8px;
            display: block;
        }

        h1 { font-size: 3.2rem; color: var(--gold); margin-bottom: 15px; line-height: 1.1; font-weight: 800; }
        h2 { font-size: 2.2rem; color: #fff; margin-bottom: 20px; border-left: 4px solid var(--gold); padding-left: 15px; }
        h3 { font-size: 1.5rem; color: var(--gold-light); margin-bottom: 12px; }
        p { font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px; color: var(--text-muted); }
        
        .highlight { color: var(--gold); font-weight: bold; }
        .green-text { color: var(--green); font-weight: bold; }
        .red-text { color: var(--red); font-weight: bold; }

        .glass-card {
            background: var(--bg-glass);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 28px;
            backdrop-filter: blur(10px);
            margin-bottom: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.6);
        }

        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

        .data-box {
            background: var(--bg-card);
            border: 1px solid rgba(212, 175, 55, 0.15);
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }
        .data-label { font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
        .data-value { font-size: 1.8rem; font-weight: bold; color: var(--gold); font-family: monospace; }

        input, select {
            width: 100%; padding: 12px; margin-top: 5px; margin-bottom: 15px;
            background: #000; border: 1px solid var(--border); color: var(--green);
            font-family: monospace; font-size: 1.1rem; border-radius: 6px;
        }
        
        .quiz-option {
            display: block; width: 100%; text-align: left; background: var(--bg-card);
            border: 1px solid var(--border); color: var(--text-main); padding: 15px 20px;
            margin-bottom: 12px; border-radius: 8px; cursor: pointer; transition: 0.2s ease;
            font-size: 1.05rem;
        }
        .quiz-option:hover { background: rgba(212, 175, 55, 0.1); border-color: var(--gold); }
        .quiz-feedback { margin-top: 15px; font-weight: bold; font-size: 1.1rem; display: none; padding: 12px; border-radius: 6px; }

        .bottom-controls {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 60px;
            background: rgba(7, 8, 10, 0.95);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 30px;
            border-top: 1px solid var(--border);
            z-index: 1000;
        }

        .nav-btn {
            background: transparent;
            color: var(--text-main);
            border: 1px solid var(--border);
            padding: 8px 18px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 700;
            font-size: 0.85rem;
            transition: all 0.2s;
        }
        .nav-btn:hover:not(:disabled) { background: var(--gold); color: #000; }
        .nav-btn:disabled { opacity: 0.3; cursor: not-allowed; }

        .progress-container { width: 35%; height: 6px; background: #1a1d24; border-radius: 3px; overflow: hidden; }
        .progress-bar { height: 100%; background: linear-gradient(90deg, var(--gold-dark), var(--gold)); width: 0%; transition: width 0.3s ease; }
        
        .slide-counter { font-family: monospace; color: var(--gold); font-size: 1rem; font-weight: bold; }

        @media print {
            body { background: white; color: black; overflow: visible; }
            .top-bar, .bottom-controls, .watermark { display: none !important; }
            #presentation-container { position: relative; top: 0; }
            .slide { 
                position: relative !important; opacity: 1 !important; visibility: visible !important; 
                page-break-after: always; height: 100vh; background: white; color: black;
                padding: 20px; transform: none !important;
            }
            .glass-card { background: #f8f9fa; border: 1px solid #ddd; color: black; box-shadow: none; }
            h1, h2, h3, p, .text-muted { color: black !important; }
            .btn-gold { background: #d4af37; color: black; }
        }
    </style>
</head>
<body>

    <div class="watermark">1ER MILLON DE DOLARES</div>

    <header class="top-bar">
        <div class="brand-logo">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 120'%3E%3Crect width='400' height='120' fill='%2307080a' rx='12'/%3E%3Ctext x='30' y='75' font-family='Segoe UI, sans-serif' font-weight='900' font-size='46' fill='%23d4af37'%3E1ER MILLON%3C/text%3E%3Ctext x='280' y='75' font-family='Segoe UI, sans-serif' font-weight='700' font-size='32' fill='%23f3e5ab'%3EDE DOLARES%3C/text%3E%3C/svg%3E"
                 alt="1ER MILLON DE DOLARES"
                 class="logo-img">
        </div>
        <div class="permanent-ctas">
            <button onclick="window.print()" class="btn nav-btn" style="margin-right:10px;">PDF / Imprimir</button>
            <a href="https://wa.me/573144097004" target="_blank" class="btn btn-outline">WhatsApp Prof. Miguel</a>
            <a href="https://whatsapp.com/channel/0029Vb7GYKk6rsR1N5uH5Y1Z" target="_blank" class="btn btn-gold">UNIRME AL PRIMER MILLON →</a>
        </div>
    </header>

    <div id="presentation-container">

        <div class="slide active">
            <div style="text-align: center; max-width: 850px; margin: 0 auto;">
                <span class="section-tag">CAPACITACION PROFESIONAL DE OPCIONES</span>
                <h1>EL ADN DE LAS OPCIONES</h1>
                <h3 style="font-size: 2rem; margin-bottom: 25px; color: #fff;">DELTA • GAMMA • THETA</h3>
                <p style="font-size: 1.3rem; color: var(--gold-light);">"Comprende que mueve realmente el precio de un contrato."</p>
                <br>
                <div class="glass-card">
                    <p style="margin: 0; color: var(--text-muted); text-transform: uppercase; letter-spacing: 2px; font-size: 0.85rem;">Presentado por la firma institucional</p>
                    <h2 style="border: none; padding: 0; text-align: center; margin-top: 8px; color: var(--gold);">1ER MILLON DE DOLARES</h2>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 1: FUNDAMENTOS</span>
            <h2>Que es un Contrato de Opcion?</h2>
            <div class="grid-2">
                <div>
                    <p>Una opcion no es una accion. Es un <span class="highlight">contrato financiero</span> que te otorga el derecho (mas no la obligacion) de comprar o vender un activo subyacente (como SPY, NVDA o QQQ) a un precio fijo.</p>
                    <p>Permite obtener <span class="green-text">rendimientos porcentuales elevados</span> aprovechando el apalancamiento financiero con riesgo controlado al valor de la prima.</p>
                </div>
                <div class="glass-card">
                    <h3>Componentes del Contrato</h3>
                    <ul style="list-style-type: none; padding: 0;">
                        <li style="margin-bottom:12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;"><strong>Subyacente:</strong> La accion o ETF sobre la que operas.</li>
                        <li style="margin-bottom:12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;"><strong>Strike (Precio de Ejercicio):</strong> El precio objetivo pactado.</li>
                        <li style="margin-bottom:12px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;"><strong>Vencimiento:</strong> La fecha limite del contrato.</li>
                        <li style="margin-bottom:5px;"><strong>Prima:</strong> El valor de mercado actual del contrato.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 1: FUNDAMENTOS</span>
            <h2>CALL vs PUT: La Direccion</h2>
            <div class="grid-2">
                <div class="glass-card" style="border-top: 4px solid var(--green);">
                    <h3 class="green-text">Contrato CALL (Alcista)</h3>
                    <p>Te da el derecho de <strong>comprar</strong> el activo a un precio determinado.</p>
                    <p>Se valoriza rapidamente cuando el precio del activo subyacente <strong>SUBE</strong>.</p>
                </div>
                <div class="glass-card" style="border-top: 4px solid var(--red);">
                    <h3 class="red-text">Contrato PUT (Bajista)</h3>
                    <p>Te da el derecho de <strong>vender</strong> el activo a un precio determinado.</p>
                    <p>Se valoriza rapidamente cuando el precio del activo subyacente <strong>BAJA</strong>.</p>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 1: FUNDAMENTOS</span>
            <h2>Composicion de la Prima</h2>
            <p>El precio total de un contrato (Prima) esta dividido en dos partes matematicas clave:</p>
            <div class="grid-2">
                <div class="glass-card">
                    <h3>1. Valor Intrinseco</h3>
                    <p>Es el valor "real" e inmediato que tiene el contrato si expirase en este preciso instante.</p>
                    <div class="data-box" style="margin-top: 15px;">
                        <div class="data-label">Ejemplo CALL Strike $100 (Accion a $108)</div>
                        <div class="data-value" style="color:var(--green)">Valor Intrinseco = $8.00</div>
                    </div>
                </div>
                <div class="glass-card">
                    <h3>2. Valor Extrinseco</h3>
                    <p>Es el valor otorgado al <strong>tiempo restante</strong> y a la <strong>volatilidad implicita</strong> del mercado.</p>
                    <div class="data-box" style="margin-top: 15px;">
                        <div class="data-label">Si la Prima Total cotiza en $9.50</div>
                        <div class="data-value" style="color:var(--gold)">Valor Extrinseco = $1.50</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">INDUCCION A LAS GRIEGAS</span>
            <h2>Las Opciones como un Auto de Carreras 🏎️</h2>
            <p>Antes de entrar en las matematicas puras, imagina que tu contrato de opciones es un <strong>vehiculo de alta velocidad</strong>. Asi interactuan las "Griegas" dentro de tu motor:</p>
            
            <div class="grid-3" style="margin-top: 20px;">
                <div class="glass-card" style="border-top: 4px solid var(--green); padding: 20px;">
                    <h3 class="green-text">Δ DELTA: El Velocimetro</h3>
                    <p style="font-size: 0.95rem; margin-bottom: 0;"><strong>(km/h)</strong> Mide la velocidad de tu auto. Si pisas el acelerador, Delta dicta a cuanta velocidad avanzas y cuanto dinero ganas en ese instante.</p>
                </div>
                
                <div class="glass-card" style="border-top: 4px solid var(--gold); padding: 20px;">
                    <h3 class="highlight">Γ GAMMA: El Nitro (Turbo)</h3>
                    <p style="font-size: 0.95rem; margin-bottom: 0;"><strong>(Aceleracion)</strong> No es la velocidad, es que tan rapido <em>aumenta</em> tu velocidad. Gamma es el boton de nitro que dispara tu velocimetro.</p>
                </div>
                
                <div class="glass-card" style="border-top: 4px solid var(--red); padding: 20px;">
                    <h3 class="red-text">Θ THETA: Fuga de Gasolina</h3>
                    <p style="font-size: 0.95rem; margin-bottom: 0;"><strong>(Desgaste)</strong> Tienes un agujero en el tanque. No importa si vas a 200 km/h o estas atrapado en trafico; la gasolina (tu prima) se gotea segundo a segundo.</p>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 2: LAS GRIEGAS</span>
            <h2><span class="highlight">Δ</span> DELTA: La Velocidad</h2>
            <p>Delta mide cuanto cambia el precio de la opcion por cada <strong>$1.00 dolar</strong> de movimiento en el activo subyacente.</p>
            <div class="glass-card">
                <div class="grid-3">
                    <div class="data-box">
                        <div class="data-label">Delta del Contrato</div>
                        <div class="data-value">0.55</div>
                    </div>
                    <div class="data-box">
                        <div class="data-label">Movimiento de la Accion</div>
                        <div class="data-value" style="color:var(--green)">+$1.00</div>
                    </div>
                    <div class="data-box">
                        <div class="data-label">Ganancia en la Opcion</div>
                        <div class="data-value" style="color:var(--green)">+$0.55 / contrato</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 2: LAS GRIEGAS</span>
            <h2><span class="highlight">Γ</span> GAMMA: La Aceleracion</h2>
            <p>Gamma es el "turbo". Mide la tasa de cambio del propio Delta por cada dolar que se mueve el subyacente.</p>
            <div class="glass-card">
                <h3>El Efecto Bola de Nieve</h3>
                <p>Si compras un contrato con Delta 0.40 y Gamma 0.08, cuando la accion sube $1.00:</p>
                <div style="background: rgba(0,0,0,0.4); padding: 15px; border-radius: 8px; font-family: monospace;">
                    • Paso 1: Tu contrato gana $0.40.<br>
                    • Paso 2: Gamma suma 0.08 a tu Delta → <span class="green-text">Nuevo Delta = 0.48</span>.<br>
                    • Paso 3: Si la accion sube otro $1.00, ahora ganas $0.48 en lugar de $0.40.
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 2: LAS GRIEGAS</span>
            <h2><span class="highlight">Θ</span> THETA: El Reloj de Arena</h2>
            <p>Theta es el enemigo silencioso del comprador. Mide la perdida de valor extrinseco por el simple paso del tiempo.</p>
            <div class="grid-2">
                <div class="glass-card" style="border-left: 4px solid var(--red);">
                    <h3 class="red-text">Aceleracion del Tiempo</h3>
                    <p>La perdida de valor temporal no es lineal. Se vuelve agresiva y destructiva en los ultimos 30 dias, alcanzando su maxima aceleracion en los ultimos 7 dias previos al vencimiento.</p>
                </div>
                <div class="data-box" style="display:flex; flex-direction:column; justify-content:center;">
                    <div class="data-label">Efecto Theta Diario</div>
                    <div class="data-value" style="color:var(--red)">-$0.12</div>
                    <p style="margin-top:10px; font-size:0.85rem;">Si el mercado se queda lateral, pierdes $12 USD diarios por contrato pagado.</p>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 3: ESCENARIOS TEMPORALES</span>
            <h2>Contratos HOY → HOY (0 DTE)</h2>
            <p>¿Por que un contrato que vence el mismo dia se desvaloriza extremadamente rapido?</p>
            <div class="glass-card grid-2">
                <div>
                    <h3 class="red-text">Theta Extremo</h3>
                    <p>Al no quedar tiempo, la "esperanza" matematica de que ocurra un movimiento grande se desvanece minuto a minuto. El valor extrinseco cae a cero drasticamente.</p>
                </div>
                <div>
                    <h3 class="green-text">Gamma Explosivo</h3>
                    <p>Cerca del Strike, Gamma esta en su nivel mas alto. Un pequeño impulso en la accion causa variaciones porcentuales gigantescas en el contrato.</p>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 3: ESCENARIOS TEMPORALES</span>
            <h2>Contratos HOY → MAÑANA (Gaps)</h2>
            <p>¿Por que los contratos se valorizan tan fuerte de un dia para otro cuando hay un salto de apertura (GAP)?</p>
            <div class="glass-card">
                <h3>Aprovechando la Apertura</h3>
                <ol style="margin-left: 20px; color: var(--gold-light); line-height: 1.8;">
                    <li>El movimiento se produce fuera del horario regular sin desgastar horas operativas.</li>
                    <li><strong>Gamma incrementa masivamente a Delta</strong> antes de que Theta pueda actuar.</li>
                    <li>El contrato amanece hiper-reactivo con ganancias multiplicadas.</li>
                </ol>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">APLICACION EN EL MERCADO</span>
            <h2>Caso Practico: ETF del Oro (GLD) 🏆</h2>
            <p>Veamos como interactua tu "motor" completo en un escenario real operando un contrato sobre el Oro (GLD).</p>
            <div class="grid-2">
                <div class="glass-card">
                    <h3 style="color: var(--gold-light);">Escenario Inicial</h3>
                    <ul style="list-style-type: none; padding: 0; line-height: 1.8;">
                        <li><strong>Precio GLD hoy:</strong> $240.00</li>
                        <li><strong>Contrato:</strong> CALL Strike $242</li>
                        <li style="padding-left: 15px; color: var(--green);"><strong>Δ Delta = 0.30</strong></li>
                        <li style="padding-left: 15px; color: var(--gold);"><strong>Γ Gamma = 0.10</strong></li>
                        <li style="padding-left: 15px; color: var(--red);"><strong>Θ Theta = -0.05</strong></li>
                    </ul>
                </div>
                <div class="glass-card" style="border-top: 4px solid var(--green);">
                    <h3 class="green-text">Movimiento Explosivo (+$2.00)</h3>
                    <div style="background: rgba(0,0,0,0.4); padding: 12px; border-radius: 8px; font-family: monospace; font-size: 0.9rem;">
                        <strong>1er Dolar ($240 a $241):</strong><br>
                        Ganas tu Delta inicial: +$0.30<br>
                        <em>¡Gamma se activa! Nuevo Delta = 0.40</em><br><br>
                        <strong>2do Dolar ($241 a $242):</strong><br>
                        Ganas tu nuevo Delta mas rapido: +$0.40<br><br>
                        <strong>Ganancia Bruta = $0.70</strong><br>
                        <span class="green-text" style="font-size: 1.1rem;">Ganancia Neta (menos Theta) = +$0.65 ($65 USD)</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">ANALISIS DE GRAFICO EN VIVO</span>
            <h2>El Crash de 15 Minutos (SPY) 📉</h2>
            <p>Analizamos la enorme vela roja de 10:30 a 10:45. SPY se desploma aprox. $4.00 dolares en solo 15 minutos.</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; align-items: start;">
                
                <div class="glass-card" style="padding: 15px; border-color: rgba(255,51,51,0.3); text-align: center;">
                    
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: var(--gold-light); margin-bottom: 8px; font-size: 0.95rem;">1. El Movimiento (Grafico)</h4>
                        <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop" alt="Grafico SPY 15 minutos" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">
                        <a href="https://prnt.sc/yfVvDDsiXZg-" target="_blank" style="display: inline-block; margin-top: 10px; color: #000; background: linear-gradient(90deg, var(--gold-dark), var(--gold)); padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 0.8rem;">VER CAPTURA DE TRADINGVIEW</a>
                    </div>

                    <div style="border-top: 1px dashed rgba(255,255,255,0.2); padding-top: 15px;">
                        <h4 style="color: var(--green); margin-bottom: 8px; font-size: 0.95rem;">2. Ejecucion Real (Ganancias)</h4>
                        <img src="https://placehold.co/600x400/12141a/00ff7f?text=Ganancias+SPY+15+Minutos" alt="Tickets de Venta SPY" style="width: 100%; height: auto; border-radius: 8px; border: 1px solid rgba(0,255,127,0.3); box-shadow: 0 4px 10px rgba(0,255,127,0.1);">
                        <a href="https://prnt.sc/gDApnsnFr9rW" target="_blank" style="display: inline-block; margin-top: 10px; color: #000; background: linear-gradient(90deg, var(--green), #85ffbd); padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 0.8rem;">VER TICKETS DE VENTA</a>
                    </div>

                </div>

                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div class="glass-card" style="border-top: 4px solid var(--red); padding: 20px; margin-bottom: 0;">
                        <h3 class="red-text" style="font-size: 1.2rem;">El Efecto Gamma en Caida Libre</h3>
                        <p style="font-size: 0.85rem; margin-bottom: 8px;">Supongamos un PUT inicial: <strong>Delta -0.30</strong> y <strong>Gamma 0.15</strong>.</p>
                        <div style="background: rgba(0,0,0,0.4); padding: 10px; border-radius: 8px; font-family: monospace; font-size: 0.8rem; line-height: 1.5;">
                            <strong>1er $1 de caida:</strong> Ganas $0.30 <br>
                            <strong>2do $1 de caida:</strong> Ganas $0.45 <br>
                            <strong>3er $1 de caida:</strong> Ganas $0.60<br>
                            <strong>4to $1 (Min 15):</strong> Ganas $0.75
                        </div>
                    </div>
                    <div class="data-box" style="border-color: var(--green); background: rgba(0, 255, 127, 0.05); padding: 15px;">
                        <div class="data-label">Ganancia en 15 Minutos</div>
                        <div class="data-value" style="color:var(--green); font-size: 1.5rem;">+$2.10 ($210 USD)</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">ANALISIS DE ERRORES / CASO REAL</span>
            <h2>El Peligro del Tiempo: Swing de 3 Semanas en META ⏳</h2>
            <p>A veces el analisis parece correcto a largo plazo, pero el <strong>factor tiempo</strong> y la lentitud del mercado destruyen nuestra posicion. Veamos este caso real de una operativa Swing en <strong>META</strong> que no funciono.</p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; align-items: start;">
                <div class="glass-card" style="padding: 15px; border-color: rgba(255,255,255,0.2); text-align: center;">
                    <div style="margin-bottom: 15px;">
                        <h4 style="color: var(--gold-light); margin-bottom: 8px;">1. Operacion Ejecutada (Broker)</h4>
                        
                        <div style="background: #0a0b0e; border: 1px solid #333; border-radius: 8px; padding: 12px; text-align: left; font-family: monospace; position: relative; overflow: hidden; box-shadow: inset 0 0 20px rgba(0,0,0,0.8);">
                            <div style="position: absolute; right: -15px; top: -10px; font-size: 5rem; opacity: 0.03; color: var(--red); font-weight: 900;">META</div>
                            
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed #444; padding-bottom: 8px; margin-bottom: 10px;">
                                <span style="color: var(--text-muted); font-size: 0.75rem;">ORDEN #8942-A • SWING</span>
                                <span style="background: rgba(255,51,51,0.15); color: var(--red); font-size: 0.7rem; padding: 3px 6px; border-radius: 4px; font-weight: bold;">POSICION CERRADA</span>
                            </div>
                            
                            <div style="font-size: 1.2rem; color: #fff; margin-bottom: 4px;">
                                <span style="color: var(--green); font-weight: bold;">BTO</span> META CALL
                            </div>
                            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">
                                Vencimiento inicial: 3 Semanas
                            </div>
                            
                            <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 6px;">
                                <span>Entrada (Prima Pagada):</span>
                                <span style="color: #fff;">$4.50 ($450 USD)</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 12px;">
                                <span>Salida (Prima Cierre):</span>
                                <span style="color: #fff;">$1.10 ($110 USD)</span>
                            </div>
                            
                            <div style="background: rgba(255,51,51,0.1); border: 1px solid rgba(255,51,51,0.3); padding: 10px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; margin-top: 5px;">
                                <span style="font-size: 0.85rem; color: var(--text-muted);">P&L TOTAL (Desgaste Theta):</span>
                                <span style="color: var(--red); font-weight: bold; font-size: 1.2rem;">-$340.00 (-75%)</span>
                            </div>
                        </div>
                        
                        <a href="https://prnt.sc/npELnGEF4Z-A" target="_blank" style="display: inline-block; margin-top: 12px; color: #000; background: linear-gradient(90deg, var(--gold-dark), var(--gold)); padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 0.8rem;">VER CAPTURA ORIGINAL</a>
                    </div>
                    
                    <div>
                        <h4 style="color: var(--gold-light); margin-bottom: 8px;">2. Grafico Semanal META</h4>
                        <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop" alt="Grafico Semanal META" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); opacity: 0.7;">
                        <a href="https://prnt.sc/S71NfCcILNQC" target="_blank" style="display: inline-block; margin-top: 8px; color: #000; background: linear-gradient(90deg, var(--gold-dark), var(--gold)); padding: 8px 16px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 0.8rem;">VER GRAFICO EN SEMANAS</a>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div class="glass-card" style="border-top: 4px solid var(--red); padding: 20px; margin-bottom: 0;">
                        <h3 class="red-text" style="font-size: 1.2rem;">¿Por que fallo la estrategia en META?</h3>
                        <p style="font-size: 0.85rem; margin-bottom: 10px;">En una estrategia extendida de 3 semanas, nos enfrentamos a la implacable sangria del valor extrinseco. <strong>META no despego con la fuerza direccional esperada</strong>, y ocurrio esto:</p>
                        <ul style="list-style-type: none; padding: 0; font-size: 0.85rem; line-height: 1.6;">
                            <li style="margin-bottom: 8px;">🔴 <strong style="color:#fff;">Theta Constante:</strong> Todos los dias (fines de semana incluidos), el contrato de META sangro valor. El tiempo consumio la prima pagada.</li>
                            <li style="margin-bottom: 8px;">🔴 <strong style="color:#fff;">Falta de Gamma:</strong> Al no haber un movimiento rapido a nuestro favor, no hubo "aceleracion". Delta se estanco.</li>
                            <li>🔴 <strong style="color:#fff;">Volatilidad (Vega):</strong> Al lateralizar durante esas semanas, la volatilidad implicita cayo, abaratando aun mas la opcion.</li>
                        </ul>
                    </div>
                    
                    <div class="data-box" style="border-color: var(--red); background: rgba(255, 51, 51, 0.05); padding: 15px;">
                        <div class="data-label">Diagnostico de la Operacion (META)</div>
                        <div class="data-value" style="color:var(--red); font-size: 1.2rem; margin-top:5px;">Perdida por Desgaste (Theta Decay)</div>
                        <p style="font-size: 0.8rem; margin-top: 8px; color: var(--text-muted);">El precio no se movio lo suficientemente rapido para compensar la perdida de valor por el paso del tiempo.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">HERRAMIENTA PRACTICA</span>
            <h2>Calculadora de Prima & Intrinseco</h2>
            <div class="grid-2">
                <div class="glass-card">
                    <label>Precio del Subyacente ($)</label>
                    <input type="number" id="calc-subyacente" value="108">
                    
                    <label>Strike Price ($)</label>
                    <input type="number" id="calc-strike" value="100">
                    
                    <label>Prima Total Pagada ($)</label>
                    <input type="number" id="calc-prima" value="9.50">

                    <label>Tipo de Opcion</label>
                    <select id="calc-tipo">
                        <option value="call">CALL (Alcista)</option>
                        <option value="put">PUT (Bajista)</option>
                    </select>

                    <button class="btn btn-gold" style="width: 100%; justify-content:center; margin-top:5px;" onclick="calcularOp()">CALCULAR DESGLOSE</button>
                </div>
                <div class="glass-card" id="calc-resultados" style="display:flex; flex-direction:column; justify-content:center;">
                    <h3>Desglose Matematico</h3>
                    <p style="color:var(--text-muted)">Haz clic en "Calcular Desglose" para evaluar el contrato.</p>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">EVALUACION DE CONOCIMIENTO</span>
            <h2>Evaluacion Interactiva</h2>
            <div class="glass-card">
                <h3 style="color:#fff; margin-bottom:20px;">Si adquieres una opcion CALL con Delta 0.50 y el activo subyacente sube $1.00 dolar, ¿cuanto se incrementa aproximadamente el valor inicial de la opcion?</h3>
                <div>
                    <button class="quiz-option" onclick="checkQuiz(this, false)">A. Sube $0.05 USD</button>
                    <button class="quiz-option" onclick="checkQuiz(this, true)">B. Sube $0.50 USD</button>
                    <button class="quiz-option" onclick="checkQuiz(this, false)">C. Sube $1.50 USD</button>
                    <button class="quiz-option" onclick="checkQuiz(this, false)">D. Sube $5.00 USD</button>
                </div>
                <div id="quiz-feedback" class="quiz-feedback"></div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECRETO INSTITUCIONAL</span>
            <h2>¿Por que los PUTs pagan mejor que los CALLs? 🩸</h2>
            <p>Muchos traders notan que una caida de $2.00 dolares en un activo genera muchas mas ganancias en un PUT, que una subida de $2.00 dolares en un CALL. ¿Por que ocurre esta asimetria?</p>
            
            <div class="grid-2">
                <div class="glass-card" style="border-top: 4px solid var(--red);">
                    <h3 class="red-text">1. El Efecto "Ascensor"</h3>
                    <p style="font-size: 0.95rem; margin-bottom: 12px;"><em>"El mercado sube por las escaleras, pero baja por el ascensor."</em></p>
                    <p style="font-size: 0.9rem;">Las subidas de mercado suelen ser graduales e impulsadas por la confianza. En cambio, las caidas son provocadas por el <strong>panico</strong>. Las ventas masivas y la activacion de <em>Stop Losses</em> institucionales crean caidas libres violentas. Esta velocidad extrema hace que <strong style="color:var(--gold);">Gamma</strong> multiplique tus ganancias en cuestion de minutos.</p>
                </div>

                <div class="glass-card" style="border-top: 4px solid var(--gold-dark);">
                    <h3 style="color:var(--gold-light);">2. La Inyeccion del Miedo (IV)</h3>
                    <p style="font-size: 0.9rem; margin-bottom: 10px;">Existe una cuarta griega llamada <strong>Vega</strong>, que mide la Volatilidad Implicita (IV). Cuando el mercado cae, el indice del miedo (VIX) se dispara.</p>
                    <div style="background: rgba(0,0,0,0.5); padding: 12px; border-radius: 8px; border: 1px dashed var(--gold-dark);">
                        <p style="font-size: 0.85rem; margin:0; color:var(--text-main);"><strong>Doble Ganancia en PUTs:</strong> Al caer el mercado, ganas por la direccion del precio (Delta) <strong>MAS</strong> una inyeccion de valor porque el miedo general encarece las primas de riesgo (Vega). En los CALLs, la subida suele matar la volatilidad, restandole fuerza a tu prima.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 4: SINTESIS FINAL</span>
            <h2>El Tridente y Nuestro Peor Enemigo</h2>
            
            <div class="grid-3" style="margin-bottom: 20px;">
                <div class="glass-card" style="padding: 20px; margin-bottom: 0;">
                    <h3 class="highlight">Δ DELTA</h3>
                    <p style="font-size: 0.95rem; margin-bottom:0;"><strong>La Velocidad.</strong> Mide direccion y ganancia en dolares por cada $1.00 de movimiento en la accion.</p>
                </div>
                <div class="glass-card" style="padding: 20px; margin-bottom: 0;">
                    <h3 class="highlight">Γ GAMMA</h3>
                    <p style="font-size: 0.95rem; margin-bottom:0;"><strong>La Aceleracion.</strong> Mide como crece tu Delta. Es la chispa para rendimientos exponenciales.</p>
                </div>
                <div class="glass-card" style="padding: 20px; margin-bottom: 0; border-top: 3px solid var(--red);">
                    <h3 class="red-text">Θ THETA</h3>
                    <p style="font-size: 0.95rem; margin-bottom:0;"><strong>El Desgaste.</strong> La perdida diaria y segura del valor de tu prima solo por el paso del tiempo.</p>
                </div>
            </div>

            <div class="glass-card" style="border: 1px solid var(--red); background: rgba(255, 51, 51, 0.05);">
                <h3 class="red-text">⏳ El Tiempo: Un Enemigo Implacable</h3>
                <p>En el trading de opciones, <strong>el tiempo siempre corre en nuestra contra</strong>. Si compras un contrato y el precio del mercado se queda lateral o no se mueve lo suficientemente rapido, perderas dinero de forma matematica todos los dias debido a Theta (como vimos en el caso de 3 semanas).</p>
            </div>
        </div>

        <div class="slide" style="text-align: center;">
            <div style="max-width: 800px; margin: 0 auto;">
                <div style="width:70px; height:70px; margin: 0 auto 20px auto;">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2307080a' rx='20'/%3E%3Ctext x='30' y='120' font-family='Segoe UI, sans-serif' font-weight='900' font-size='80' fill='%23d4af37'%3E1M%3C/text%3E%3C/svg%3E"
                         alt="1M" style="width:70px; height:70px;">
                </div>
                <h1 style="font-size:2.8rem;">1ER MILLON DE DOLARES</h1>
                <p style="font-size: 1.2rem; color: #fff; margin-bottom: 35px;">¿Quieres acompañarnos en nuestras operativas diarias y dominar el mercado?</p>
                
                <div style="display:flex; flex-direction:column; gap:15px; align-items:center;">
                    <a href="https://whatsapp.com/channel/0029Vb7GYKk6rsR1N5uH5Y1Z" target="_blank" class="btn btn-gold" style="font-size: 1.2rem; padding: 18px 35px; width: 100%; max-width: 450px; justify-content: center;">
                        🚀 UNIRME AL CANAL DEL PRIMER MILLON
                    </a>
                    
                    <a href="https://wa.me/573144097004" target="_blank" class="btn btn-outline" style="font-size: 1.05rem; padding: 14px 28px; width: 100%; max-width: 450px; justify-content: center;">
                        📲 HABLAR CON EL PROFESOR MIGUEL
                    </a>
                </div>
            </div>
        </div>

    </div>

    <div class="bottom-controls">
        <button class="nav-btn" id="prev-btn" onclick="changeSlide(-1)">← ANTERIOR</button>
        
        <div class="progress-container">
            <div class="progress-bar" id="progress-bar"></div>
        </div>
        
        <span class="slide-counter" id="slide-counter">1 / 18</span>
        
        <button class="nav-btn" id="next-btn" onclick="changeSlide(1)">SIGUIENTE →</button>
    </div>

    <script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function updateUI() {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[currentSlide].classList.add('active');

            document.getElementById('prev-btn').disabled = currentSlide === 0;
            document.getElementById('next-btn').disabled = currentSlide === totalSlides - 1;

            document.getElementById('slide-counter').innerText = currentSlide + 1 + ' / ' + totalSlides;
            const progress = (currentSlide / (totalSlides - 1)) * 100;
            document.getElementById('progress-bar').style.width = progress + '%';
        }

        function changeSlide(direction) {
            currentSlide += direction;
            if (currentSlide < 0) currentSlide = 0;
            if (currentSlide >= totalSlides) currentSlide = totalSlides - 1;
            updateUI();
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                changeSlide(1);
            } else if (e.key === 'ArrowLeft') {
                changeSlide(-1);
            }
        });

        function calcularOp() {
            const subyacente = parseFloat(document.getElementById('calc-subyacente').value);
            const strike = parseFloat(document.getElementById('calc-strike').value);
            const prima = parseFloat(document.getElementById('calc-prima').value);
            const tipo = document.getElementById('calc-tipo').value;

            let intrinseco = 0;
            if (tipo === 'call') {
                intrinseco = Math.max(subyacente - strike, 0);
            } else {
                intrinseco = Math.max(strike - subyacente, 0);
            }

            let extrinseco = Math.max(prima - intrinseco, 0);
            let estado = intrinseco > 0 ? 'In The Money (ITM)' : 'Out of The Money (OTM)';

            const resDiv = document.getElementById('calc-resultados');
            resDiv.innerHTML = `
                <h3>Desglose Matematico</h3>
                <div class="data-box" style="margin-bottom:12px;">
                    <div class="data-label">Estado del Contrato</div>
                    <div class="data-value" style="font-size:1.4rem; color: ${intrinseco > 0 ? 'var(--green)' : 'var(--gold)'}">${estado}</div>
                </div>
                <div class="grid-2">
                    <div class="data-box">
                        <div class="data-label">Valor Intrinseco</div>
                        <div class="data-value" style="color:var(--green)">$${intrinseco.toFixed(2)}</div>
                    </div>
                    <div class="data-box">
                        <div class="data-label">Valor Extrinseco</div>
                        <div class="data-value" style="color:var(--gold)">$${extrinseco.toFixed(2)}</div>
                    </div>
                </div>
            `;
        }

        function checkQuiz(btn, isCorrect) {
            const allBtns = btn.parentElement.querySelectorAll('.quiz-option');
            allBtns.forEach(function(b) {
                b.style.borderColor = 'var(--border)';
                b.style.background = 'var(--bg-card)';
            });

            const feedback = document.getElementById('quiz-feedback');
            feedback.style.display = 'block';

            if (isCorrect) {
                btn.style.borderColor = 'var(--green)';
                btn.style.background = 'rgba(0,255,127,0.15)';
                feedback.style.background = 'rgba(0,255,127,0.1)';
                feedback.style.color = 'var(--green)';
                feedback.innerHTML = '¡CORRECTO! Delta mide la variacion de precio directa por cada dolar que se desplaza el subyacente.';
            } else {
                btn.style.borderColor = 'var(--red)';
                btn.style.background = 'rgba(255,51,51,0.15)';
                feedback.style.background = 'rgba(255,51,51,0.1)';
                feedback.style.color = 'var(--red)';
                feedback.innerHTML = 'REVISA NUEVAMENTE. Recuerda que Delta multiplica de manera directa el movimiento de $1.00 USD.';
            }
        }

        updateUI();
    </script>
</body>
</html>
