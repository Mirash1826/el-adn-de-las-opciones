<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
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
            font-size: 10vw;
            font-weight: 900;
            color: rgba(255, 255, 255, 0.012);
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
            height: 56px;
            padding: 0 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(7, 8, 10, 0.95);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
            z-index: 1000;
        }

        .brand-logo {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .logo-img {
            height: 32px;
            width: auto;
            max-width: 130px;
            object-fit: contain;
        }

        .brand-text {
            color: var(--gold);
            font-weight: 800;
            letter-spacing: 1px;
            font-size: 0.75rem;
            text-transform: uppercase;
            display: none;
        }

        .permanent-ctas {
            display: flex;
            gap: 6px;
            align-items: center;
        }

        .btn {
            padding: 6px 10px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.65rem;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            cursor: pointer;
            border: none;
            letter-spacing: 0.3px;
            white-space: nowrap;
        }

        .btn-gold {
            background: linear-gradient(90deg, var(--gold-dark), var(--gold));
            color: #000;
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
        }

        .btn-outline {
            background: transparent;
            color: var(--green);
            border: 1px solid var(--green);
        }

        .btn-outline:hover {
            background: rgba(0, 255, 127, 0.12);
        }

        .btn-gold:hover {
            background: linear-gradient(90deg, var(--gold), var(--gold-light));
            transform: translateY(-1px);
        }

        #presentation-container {
            position: absolute;
            top: 56px;
            bottom: 52px;
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
            padding: 16px 14px;
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
            font-size: 0.6rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 4px;
            display: block;
        }

        h1 { 
            font-size: 1.6rem; 
            color: var(--gold); 
            margin-bottom: 8px; 
            line-height: 1.1; 
            font-weight: 800; 
        }
        
        h2 { 
            font-size: 1.2rem; 
            color: #fff; 
            margin-bottom: 10px; 
            border-left: 3px solid var(--gold); 
            padding-left: 10px; 
        }
        
        h3 { 
            font-size: 1rem; 
            color: var(--gold-light); 
            margin-bottom: 8px; 
        }
        
        p { 
            font-size: 0.8rem; 
            line-height: 1.5; 
            margin-bottom: 10px; 
            color: var(--text-muted); 
        }
        
        .highlight { color: var(--gold); font-weight: bold; }
        .green-text { color: var(--green); font-weight: bold; }
        .red-text { color: var(--red); font-weight: bold; }

        .glass-card {
            background: var(--bg-glass);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 14px;
            backdrop-filter: blur(10px);
            margin-bottom: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.6);
        }

        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }

        .data-box {
            background: var(--bg-card);
            border: 1px solid rgba(212, 175, 55, 0.15);
            padding: 12px;
            border-radius: 8px;
            text-align: center;
        }
        
        .data-label { 
            font-size: 0.6rem; 
            color: var(--text-muted); 
            text-transform: uppercase; 
            letter-spacing: 0.5px; 
            margin-bottom: 3px; 
        }
        
        .data-value { 
            font-size: 1.1rem; 
            font-weight: bold; 
            color: var(--gold); 
            font-family: monospace; 
        }

        input, select {
            width: 100%; 
            padding: 8px; 
            margin-top: 3px; 
            margin-bottom: 8px;
            background: #000; 
            border: 1px solid var(--border); 
            color: var(--green);
            font-family: monospace; 
            font-size: 0.85rem; 
            border-radius: 6px;
        }
        
        .quiz-option {
            display: block; 
            width: 100%; 
            text-align: left; 
            background: var(--bg-card);
            border: 1px solid var(--border); 
            color: var(--text-main); 
            padding: 10px 14px;
            margin-bottom: 8px; 
            border-radius: 8px; 
            cursor: pointer; 
            transition: 0.2s ease;
            font-size: 0.8rem;
        }
        
        .quiz-option:hover { background: rgba(212, 175, 55, 0.1); border-color: var(--gold); }
        .quiz-feedback { 
            margin-top: 10px; 
            font-weight: bold; 
            font-size: 0.85rem; 
            display: none; 
            padding: 10px; 
            border-radius: 6px; 
        }

        .bottom-controls {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 52px;
            background: rgba(7, 8, 10, 0.95);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 12px;
            border-top: 1px solid var(--border);
            z-index: 1000;
        }

        .nav-btn {
            background: transparent;
            color: var(--text-main);
            border: 1px solid var(--border);
            padding: 6px 12px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 700;
            font-size: 0.65rem;
            transition: all 0.2s;
        }
        
        .nav-btn:hover:not(:disabled) { background: var(--gold); color: #000; }
        .nav-btn:disabled { opacity: 0.3; cursor: not-allowed; }

        .progress-container { 
            width: 30%; 
            height: 4px; 
            background: #1a1d24; 
            border-radius: 3px; 
            overflow: hidden; 
        }
        
        .progress-bar { 
            height: 100%; 
            background: linear-gradient(90deg, var(--gold-dark), var(--gold)); 
            width: 0%; 
            transition: width 0.3s ease; 
        }
        
        .slide-counter { 
            font-family: monospace; 
            color: var(--gold); 
            font-size: 0.7rem; 
            font-weight: bold; 
        }

        /* ============================================================ */
        /* 📱  RESPONSIVE: Ajustes exclusivos para celulares */
        /* ============================================================ */

        /* Pantallas muy pequeñas (iPhone SE, etc.) */
        @media (max-width: 380px) {
            .top-bar { height: 48px; padding: 0 8px; }
            #presentation-container { top: 48px; bottom: 48px; }
            .bottom-controls { height: 48px; padding: 0 8px; }
            
            h1 { font-size: 1.3rem; }
            h2 { font-size: 1rem; padding-left: 8px; }
            h3 { font-size: 0.85rem; }
            p { font-size: 0.7rem; line-height: 1.4; }
            .section-tag { font-size: 0.5rem; }
            
            .slide { padding: 10px 10px; }
            .glass-card { padding: 10px; }
            .grid-2 { gap: 8px; }
            .grid-3 { gap: 6px; }
            
            .btn { font-size: 0.55rem; padding: 4px 8px; }
            .logo-img { height: 26px; max-width: 100px; }
            .data-value { font-size: 0.9rem; }
            .data-label { font-size: 0.5rem; }
            
            .permanent-ctas .btn { 
                padding: 4px 6px; 
                font-size: 0.5rem; 
            }
        }

        /* Pantallas medianas (iPhone 12/13/14/15) */
        @media (min-width: 381px) and (max-width: 500px) {
            h1 { font-size: 1.5rem; }
            h2 { font-size: 1.1rem; }
            h3 { font-size: 0.95rem; }
            p { font-size: 0.75rem; line-height: 1.4; }
            .section-tag { font-size: 0.55rem; }
            
            .slide { padding: 14px 12px; }
            .glass-card { padding: 12px; }
            
            .btn { font-size: 0.6rem; padding: 5px 10px; }
            .logo-img { height: 30px; max-width: 120px; }
            
            .permanent-ctas .btn { 
                padding: 5px 8px; 
                font-size: 0.55rem; 
            }
        }

        /* Pantallas grandes (iPhone Pro Max, tablets pequeñas) */
        @media (min-width: 501px) and (max-width: 768px) {
            h1 { font-size: 2rem; }
            h2 { font-size: 1.4rem; }
            h3 { font-size: 1.1rem; }
            p { font-size: 0.9rem; }
            
            .slide { padding: 20px 18px; }
            .glass-card { padding: 18px; }
            
            .btn { font-size: 0.75rem; padding: 8px 14px; }
            .logo-img { height: 36px; max-width: 150px; }
        }

        /* Pantallas de escritorio (mantener tamaño original) */
        @media (min-width: 769px) {
            h1 { font-size: 3rem; }
            h2 { font-size: 2rem; }
            h3 { font-size: 1.4rem; }
            p { font-size: 1rem; }
            
            .slide { padding: 40px 8%; }
            .glass-card { padding: 24px; }
            
            .btn { font-size: 0.85rem; padding: 10px 20px; }
            .logo-img { height: 40px; max-width: 180px; }
            .brand-text { display: inline; }
        }

        @media print {
            body { background: white; color: black; overflow: visible; }
            .top-bar, .bottom-controls, .watermark { display: none !important; }
            #presentation-container { position: relative; top: 0; }
            .slide { 
                position: relative !important; 
                opacity: 1 !important; 
                visibility: visible !important; 
                page-break-after: always; 
                height: 100vh; 
                background: white; 
                color: black;
                padding: 20px; 
                transform: none !important;
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
            <span class="brand-text">1er Millón de Dólares</span>
        </div>
        <div class="permanent-ctas">
            <button onclick="window.print()" class="btn nav-btn" style="margin-right:4px;">🖨️</button>
            <a href="https://wa.me/573144097004" target="_blank" class="btn btn-outline">WhatsApp</a>
            <a href="https://whatsapp.com/channel/0029Vb7GYKk6rsR1N5uH5Y1Z" target="_blank" class="btn btn-gold">Unirme</a>
        </div>
    </header>

    <div id="presentation-container">

        <div class="slide active">
            <div style="text-align: center; max-width: 850px; margin: 0 auto;">
                <span class="section-tag">CAPACITACION PROFESIONAL DE OPCIONES</span>
                <h1>EL ADN DE LAS OPCIONES</h1>
                <h3 style="font-size: 1.6rem; margin-bottom: 15px; color: #fff;">DELTA • GAMMA • THETA</h3>
                <p style="font-size: 1rem; color: var(--gold-light);">"Comprende que mueve realmente el precio de un contrato."</p>
                <br>
                <div class="glass-card">
                    <p style="margin: 0; color: var(--text-muted); text-transform: uppercase; letter-spacing: 2px; font-size: 0.65rem;">Presentado por la firma institucional</p>
                    <h2 style="border: none; padding: 0; text-align: center; margin-top: 4px; color: var(--gold);">1ER MILLON DE DOLARES</h2>
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
                    <h3 style="font-size:0.9rem;">Componentes del Contrato</h3>
                    <ul style="list-style-type: none; padding: 0; font-size:0.75rem;">
                        <li style="margin-bottom:8px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom:6px;"><strong>Subyacente:</strong> La accion o ETF sobre la que operas.</li>
                        <li style="margin-bottom:8px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom:6px;"><strong>Strike:</strong> El precio objetivo pactado.</li>
                        <li style="margin-bottom:8px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom:6px;"><strong>Vencimiento:</strong> La fecha limite del contrato.</li>
                        <li style="margin-bottom:0;"><strong>Prima:</strong> El valor de mercado actual.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 1: FUNDAMENTOS</span>
            <h2>CALL vs PUT: La Direccion</h2>
            <div class="grid-2">
                <div class="glass-card" style="border-top: 4px solid var(--green);">
                    <h3 class="green-text" style="font-size:0.9rem;">Contrato CALL (Alcista)</h3>
                    <p style="font-size:0.75rem;">Te da el derecho de <strong>comprar</strong> el activo a un precio determinado.</p>
                    <p style="font-size:0.75rem;">Se valoriza rapidamente cuando el precio del activo subyacente <strong>SUBE</strong>.</p>
                </div>
                <div class="glass-card" style="border-top: 4px solid var(--red);">
                    <h3 class="red-text" style="font-size:0.9rem;">Contrato PUT (Bajista)</h3>
                    <p style="font-size:0.75rem;">Te da el derecho de <strong>vender</strong> el activo a un precio determinado.</p>
                    <p style="font-size:0.75rem;">Se valoriza rapidamente cuando el precio del activo subyacente <strong>BAJA</strong>.</p>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 1: FUNDAMENTOS</span>
            <h2>Composicion de la Prima</h2>
            <p style="font-size:0.75rem;">El precio total de un contrato (Prima) esta dividido en dos partes matematicas clave:</p>
            <div class="grid-2">
                <div class="glass-card">
                    <h3 style="font-size:0.85rem;">1. Valor Intrinseco</h3>
                    <p style="font-size:0.7rem;">Es el valor "real" e inmediato que tiene el contrato si expirase en este preciso instante.</p>
                    <div class="data-box" style="margin-top: 8px; padding:10px;">
                        <div class="data-label">Ejemplo CALL Strike $100 (Accion a $108)</div>
                        <div class="data-value" style="color:var(--green); font-size:1rem;">Valor Intrinseco = $8.00</div>
                    </div>
                </div>
                <div class="glass-card">
                    <h3 style="font-size:0.85rem;">2. Valor Extrinseco</h3>
                    <p style="font-size:0.7rem;">Es el valor otorgado al <strong>tiempo restante</strong> y a la <strong>volatilidad implicita</strong> del mercado.</p>
                    <div class="data-box" style="margin-top: 8px; padding:10px;">
                        <div class="data-label">Si la Prima Total cotiza en $9.50</div>
                        <div class="data-value" style="color:var(--gold); font-size:1rem;">Valor Extrinseco = $1.50</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">INDUCCION A LAS GRIEGAS</span>
            <h2>Las Opciones como un Auto 🏎️</h2>
            <p style="font-size:0.75rem;">Imagina que tu contrato es un <strong>vehiculo de alta velocidad</strong>. Asi interactuan las "Griegas":</p>
            
            <div class="grid-3" style="margin-top: 8px;">
                <div class="glass-card" style="border-top: 4px solid var(--green); padding: 10px;">
                    <h3 style="font-size:0.7rem;" class="green-text">Δ DELTA</h3>
                    <p style="font-size:0.6rem; margin-bottom:0;"><strong>Velocimetro</strong> Mide la velocidad.</p>
                </div>
                
                <div class="glass-card" style="border-top: 4px solid var(--gold); padding: 10px;">
                    <h3 style="font-size:0.7rem;" class="highlight">Γ GAMMA</h3>
                    <p style="font-size:0.6rem; margin-bottom:0;"><strong>Nitro</strong> Acelera tu Delta.</p>
                </div>
                
                <div class="glass-card" style="border-top: 4px solid var(--red); padding: 10px;">
                    <h3 style="font-size:0.7rem;" class="red-text">Θ THETA</h3>
                    <p style="font-size:0.6rem; margin-bottom:0;"><strong>Fuga</strong> Pierdes valor cada dia.</p>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 2: LAS GRIEGAS</span>
            <h2><span class="highlight">Δ</span> DELTA: La Velocidad</h2>
            <p style="font-size:0.75rem;">Delta mide cuanto cambia el precio de la opcion por cada <strong>$1.00 dolar</strong> de movimiento.</p>
            <div class="glass-card">
                <div class="grid-3">
                    <div class="data-box" style="padding:8px;">
                        <div class="data-label" style="font-size:0.5rem;">Delta</div>
                        <div class="data-value" style="font-size:1rem;">0.55</div>
                    </div>
                    <div class="data-box" style="padding:8px;">
                        <div class="data-label" style="font-size:0.5rem;">Movimiento</div>
                        <div class="data-value" style="color:var(--green); font-size:1rem;">+$1.00</div>
                    </div>
                    <div class="data-box" style="padding:8px;">
                        <div class="data-label" style="font-size:0.5rem;">Ganancia</div>
                        <div class="data-value" style="color:var(--green); font-size:1rem;">+$0.55</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 2: LAS GRIEGAS</span>
            <h2><span class="highlight">Γ</span> GAMMA: Aceleracion</h2>
            <p style="font-size:0.75rem;">Gamma mide la tasa de cambio del Delta por cada dolar que se mueve.</p>
            <div class="glass-card">
                <h3 style="font-size:0.85rem;">Efecto Bola de Nieve</h3>
                <p style="font-size:0.7rem;">Con Delta 0.40 y Gamma 0.08, cuando la accion sube $1.00:</p>
                <div style="background: rgba(0,0,0,0.4); padding: 10px; border-radius: 8px; font-family: monospace; font-size:0.7rem;">
                    • Ganas $0.40<br>
                    • Gamma suma 0.08 → <span class="green-text">Nuevo Delta = 0.48</span><br>
                    • En el siguiente $1.00, ganas $0.48
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 2: LAS GRIEGAS</span>
            <h2><span class="highlight">Θ</span> THETA: Reloj de Arena</h2>
            <p style="font-size:0.75rem;">Theta mide la perdida de valor extrinseco por el paso del tiempo.</p>
            <div class="grid-2">
                <div class="glass-card" style="border-left: 4px solid var(--red); padding:12px;">
                    <h3 style="font-size:0.8rem;" class="red-text">Aceleracion del Tiempo</h3>
                    <p style="font-size:0.65rem;">La perdida se acelera en los ultimos 30 dias.</p>
                </div>
                <div class="data-box" style="display:flex; flex-direction:column; justify-content:center; padding:12px;">
                    <div class="data-label" style="font-size:0.5rem;">Efecto Theta Diario</div>
                    <div class="data-value" style="color:var(--red); font-size:1.1rem;">-$0.12</div>
                    <p style="margin-top:6px; font-size:0.6rem;">Pierdes $12 USD diarios por contrato.</p>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 3: ESCENARIOS</span>
            <h2>Contratos HOY → HOY (0 DTE)</h2>
            <p style="font-size:0.75rem;">¿Por que un contrato que vence el mismo dia se desvaloriza tan rapido?</p>
            <div class="glass-card grid-2" style="gap:10px;">
                <div style="padding:8px;">
                    <h3 style="font-size:0.8rem;" class="red-text">Theta Extremo</h3>
                    <p style="font-size:0.65rem;">El valor extrinseco cae a cero drasticamente.</p>
                </div>
                <div style="padding:8px;">
                    <h3 style="font-size:0.8rem;" class="green-text">Gamma Explosivo</h3>
                    <p style="font-size:0.65rem;">Pequeños impulsos causan variaciones gigantescas.</p>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECCION 3: ESCENARIOS</span>
            <h2>Contratos HOY → MAÑANA (Gaps)</h2>
            <p style="font-size:0.75rem;">¿Por que se valorizan tan fuerte con un GAP?</p>
            <div class="glass-card">
                <h3 style="font-size:0.85rem;">Aprovechando la Apertura</h3>
                <ol style="margin-left: 16px; color: var(--gold-light); line-height: 1.6; font-size:0.7rem;">
                    <li>El movimiento ocurre fuera del horario regular.</li>
                    <li><strong>Gamma incrementa a Delta</strong> antes que Theta actue.</li>
                    <li>El contrato amanece hiper-reactivo.</li>
                </ol>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">APLICACION EN EL MERCADO</span>
            <h2>Caso Practico: GLD 🏆</h2>
            <p style="font-size:0.75rem;">Veamos como interactua tu "motor" en un escenario real con GLD.</p>
            <div class="grid-2">
                <div class="glass-card" style="padding:12px;">
                    <h3 style="font-size:0.8rem; color: var(--gold-light);">Escenario Inicial</h3>
                    <ul style="list-style-type: none; padding: 0; line-height: 1.6; font-size:0.7rem;">
                        <li><strong>GLD:</strong> $240.00</li>
                        <li><strong>CALL Strike:</strong> $242</li>
                        <li style="color: var(--green);"><strong>Δ Delta = 0.30</strong></li>
                        <li style="color: var(--gold);"><strong>Γ Gamma = 0.10</strong></li>
                        <li style="color: var(--red);"><strong>Θ Theta = -0.05</strong></li>
                    </ul>
                </div>
                <div class="glass-card" style="border-top: 4px solid var(--green); padding:12px;">
                    <h3 style="font-size:0.8rem;" class="green-text">Movimiento +$2.00</h3>
                    <div style="background: rgba(0,0,0,0.4); padding: 10px; border-radius: 8px; font-family: monospace; font-size:0.65rem;">
                        <strong>$240→$241:</strong> +$0.30<br>
                        <em>¡Gamma! Nuevo Delta = 0.40</em><br>
                        <strong>$241→$242:</strong> +$0.40<br>
                        <strong>Ganancia Neta = +$0.65</strong>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">ANALISIS EN VIVO</span>
            <h2>Crash de 15 Minutos (SPY) 📉</h2>
            <p style="font-size:0.75rem;">SPY se desploma aprox. $4.00 en solo 15 minutos.</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; align-items: start;">
                
                <div class="glass-card" style="padding: 10px; border-color: rgba(255,51,51,0.3); text-align: center;">
                    <div style="margin-bottom: 10px;">
                        <h4 style="color: var(--gold-light); margin-bottom: 4px; font-size:0.6rem;">1. Grafico</h4>
                        <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=400&auto=format&fit=crop" alt="Grafico SPY" style="width: 100%; height: auto; border-radius: 8px;">
                    </div>
                    <div>
                        <h4 style="color: var(--green); margin-bottom: 4px; font-size:0.6rem;">2. Ganancias</h4>
                        <img src="https://placehold.co/400x200/12141a/00ff7f?text=Ganancias+SPY" alt="Tickets" style="width: 100%; height: auto; border-radius: 8px; border: 1px solid rgba(0,255,127,0.3);">
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div class="glass-card" style="border-top: 4px solid var(--red); padding: 10px;">
                        <h3 style="font-size:0.75rem;" class="red-text">Efecto Gamma en Caida</h3>
                        <div style="background: rgba(0,0,0,0.4); padding: 8px; border-radius: 8px; font-family: monospace; font-size:0.6rem; line-height:1.4;">
                            <strong>$1:</strong> +$0.30<br>
                            <strong>$2:</strong> +$0.45<br>
                            <strong>$3:</strong> +$0.60<br>
                            <strong>$4:</strong> +$0.75
                        </div>
                    </div>
                    <div class="data-box" style="border-color: var(--green); padding: 10px;">
                        <div class="data-label" style="font-size:0.5rem;">Ganancia en 15 Min</div>
                        <div class="data-value" style="color:var(--green); font-size:1.2rem;">+$2.10 ($210 USD)</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">CASO REAL</span>
            <h2>Swing de 3 Semanas en META ⏳</h2>
            <p style="font-size:0.75rem;">El factor tiempo destruye posiciones. Caso real en META.</p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; align-items: start;">
                <div class="glass-card" style="padding: 10px; border-color: rgba(255,255,255,0.2); text-align: center;">
                    <div style="margin-bottom: 8px;">
                        <h4 style="color: var(--gold-light); margin-bottom: 4px; font-size:0.6rem;">Operacion Ejecutada</h4>
                        <div style="background: #0a0b0e; border: 1px solid #333; border-radius: 6px; padding: 8px; text-align: left; font-family: monospace; font-size:0.55rem;">
                            <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed #444; padding-bottom: 4px; margin-bottom: 6px;">
                                <span style="color: var(--text-muted);">ORDEN #8942-A</span>
                                <span style="color: var(--red);">CERRADA</span>
                            </div>
                            <div style="font-size:0.7rem; color:#fff;"><span style="color:var(--green);">BTO</span> META CALL</div>
                            <div style="font-size:0.6rem; color:var(--text-muted);">Venc: 3 Semanas</div>
                            <div style="display: flex; justify-content: space-between; font-size:0.6rem;">Entrada: <span style="color:#fff;">$4.50</span></div>
                            <div style="display: flex; justify-content: space-between; font-size:0.6rem;">Salida: <span style="color:#fff;">$1.10</span></div>
                            <div style="background: rgba(255,51,51,0.1); border: 1px solid rgba(255,51,51,0.3); padding: 6px; border-radius: 4px; display: flex; justify-content: space-between; margin-top:4px;">
                                <span style="color:var(--text-muted);">P&L:</span>
                                <span style="color:var(--red); font-weight:bold;">-$340 (-75%)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <div class="glass-card" style="border-top: 4px solid var(--red); padding: 10px;">
                        <h3 style="font-size:0.75rem;" class="red-text">¿Por que fallo?</h3>
                        <ul style="list-style-type: none; padding: 0; font-size:0.6rem; line-height:1.4;">
                            <li>🔴 <strong>Theta Constante:</strong> Sangria diaria.</li>
                            <li>🔴 <strong>Falta de Gamma:</strong> Sin aceleracion.</li>
                            <li>🔴 <strong>Vega:</strong> Volatilidad implicita cayo.</li>
                        </ul>
                    </div>
                    <div class="data-box" style="border-color: var(--red); padding: 10px;">
                        <div class="data-label" style="font-size:0.5rem;">Diagnostico</div>
                        <div class="data-value" style="color:var(--red); font-size:0.9rem;">Perdida por Desgaste</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">HERRAMIENTA PRACTICA</span>
            <h2>Calculadora de Prima</h2>
            <div class="grid-2" style="gap:10px;">
                <div class="glass-card" style="padding:12px;">
                    <label style="font-size:0.65rem;">Subyacente ($)</label>
                    <input type="number" id="calc-subyacente" value="108" style="font-size:0.75rem; padding:6px;">
                    
                    <label style="font-size:0.65rem;">Strike ($)</label>
                    <input type="number" id="calc-strike" value="100" style="font-size:0.75rem; padding:6px;">
                    
                    <label style="font-size:0.65rem;">Prima ($)</label>
                    <input type="number" id="calc-prima" value="9.50" style="font-size:0.75rem; padding:6px;">

                    <label style="font-size:0.65rem;">Tipo</label>
                    <select id="calc-tipo" style="font-size:0.75rem; padding:6px;">
                        <option value="call">CALL</option>
                        <option value="put">PUT</option>
                    </select>

                    <button class="btn btn-gold" style="width:100%; justify-content:center; margin-top:4px; font-size:0.7rem; padding:8px;" onclick="calcularOp()">CALCULAR</button>
                </div>
                <div class="glass-card" id="calc-resultados" style="display:flex; flex-direction:column; justify-content:center; padding:12px;">
                    <h3 style="font-size:0.9rem;">Desglose</h3>
                    <p style="font-size:0.65rem; color:var(--text-muted);">Haz clic en "Calcular".</p>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">EVALUACION</span>
            <h2>Quiz Interactivo</h2>
            <div class="glass-card" style="padding:12px;">
                <h3 style="font-size:0.85rem; color:#fff; margin-bottom:10px;">CALL con Delta 0.50, sube $1.00. ¿Cuanto sube la opcion?</h3>
                <div>
                    <button class="quiz-option" onclick="checkQuiz(this, false)" style="font-size:0.7rem; padding:8px 12px;">A. $0.05</button>
                    <button class="quiz-option" onclick="checkQuiz(this, true)" style="font-size:0.7rem; padding:8px 12px;">B. $0.50</button>
                    <button class="quiz-option" onclick="checkQuiz(this, false)" style="font-size:0.7rem; padding:8px 12px;">C. $1.50</button>
                    <button class="quiz-option" onclick="checkQuiz(this, false)" style="font-size:0.7rem; padding:8px 12px;">D. $5.00</button>
                </div>
                <div id="quiz-feedback" class="quiz-feedback" style="font-size:0.75rem; padding:8px;"></div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SECRETO INSTITUCIONAL</span>
            <h2>¿Por que los PUTs pagan mejor?</h2>
            <p style="font-size:0.75rem;">Una caida de $2 genera mas ganancia que una subida de $2. ¿Por que?</p>
            
            <div class="grid-2" style="gap:10px;">
                <div class="glass-card" style="border-top: 4px solid var(--red); padding:10px;">
                    <h3 style="font-size:0.75rem;" class="red-text">1. Efecto "Ascensor"</h3>
                    <p style="font-size:0.6rem;"><em>"Sube por escaleras, baja por ascensor."</em></p>
                    <p style="font-size:0.6rem;">Las caidas son violentas por el panico. <strong>Gamma</strong> multiplica ganancias.</p>
                </div>
                <div class="glass-card" style="border-top: 4px solid var(--gold-dark); padding:10px;">
                    <h3 style="font-size:0.75rem; color:var(--gold-light);">2. Inyeccion de Miedo (IV)</h3>
                    <p style="font-size:0.6rem;">Cuando el mercado cae, el VIX sube. <strong>Vega</strong> encarece los PUTs.</p>
                    <div style="background: rgba(0,0,0,0.5); padding: 8px; border-radius: 6px; border: 1px dashed var(--gold-dark); margin-top:4px;">
                        <p style="font-size:0.55rem; margin:0; color:var(--text-main);">Doble Ganancia: Direccion (Delta) + Miedo (Vega)</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide">
            <span class="section-tag">SINTESIS FINAL</span>
            <h2>El Tridente y Nuestro Enemigo</h2>
            
            <div class="grid-3" style="margin-bottom: 10px; gap:8px;">
                <div class="glass-card" style="padding: 10px; margin-bottom: 0;">
                    <h3 style="font-size:0.7rem;" class="highlight">Δ DELTA</h3>
                    <p style="font-size:0.6rem; margin-bottom:0;">Velocidad. Ganancia por $1.00</p>
                </div>
                <div class="glass-card" style="padding: 10px; margin-bottom: 0;">
                    <h3 style="font-size:0.7rem;" class="highlight">Γ GAMMA</h3>
                    <p style="font-size:0.6rem; margin-bottom:0;">Aceleracion. Crecimiento de Delta</p>
                </div>
                <div class="glass-card" style="padding: 10px; margin-bottom: 0; border-top: 3px solid var(--red);">
                    <h3 style="font-size:0.7rem;" class="red-text">Θ THETA</h3>
                    <p style="font-size:0.6rem; margin-bottom:0;">Desgaste. Perdida diaria</p>
                </div>
            </div>

            <div class="glass-card" style="border: 1px solid var(--red); background: rgba(255, 51, 51, 0.05); padding:12px;">
                <h3 style="font-size:0.8rem;" class="red-text">⏳ El Tiempo: Enemigo Implacable</h3>
                <p style="font-size:0.7rem;">El tiempo corre en nuestra contra. Si el mercado se lateraliza, Theta destruye tu posicion.</p>
            </div>
        </div>

        <div class="slide" style="text-align: center;">
            <div style="max-width: 800px; margin: 0 auto;">
                <div style="width:60px; height:60px; margin: 0 auto 12px auto;">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%2307080a' rx='20'/%3E%3Ctext x='30' y='120' font-family='Segoe UI, sans-serif' font-weight='900' font-size='80' fill='%23d4af37'%3E1M%3C/text%3E%3C/svg%3E"
                         alt="1M" style="width:60px; height:60px;">
                </div>
                <h1 style="font-size:1.8rem;">1ER MILLON DE DOLARES</h1>
                <p style="font-size:0.9rem; color: #fff; margin-bottom: 20px;">¿Quieres acompañarnos en nuestras operativas diarias?</p>
                
                <div style="display:flex; flex-direction:column; gap:10px; align-items:center;">
                    <a href="https://whatsapp.com/channel/0029Vb7GYKk6rsR1N5uH5Y1Z" target="_blank" class="btn btn-gold" style="font-size:0.9rem; padding: 12px 24px; width: 100%; max-width: 350px; justify-content: center;">
                        🚀 UNIRME AL CANAL
                    </a>
                    
                    <a href="https://wa.me/573144097004" target="_blank" class="btn btn-outline" style="font-size:0.8rem; padding: 10px 20px; width: 100%; max-width: 350px; justify-content: center;">
                        📲 HABLAR CON MIGUEL
                    </a>
                </div>
            </div>
        </div>

    </div>

    <div class="bottom-controls">
        <button class="nav-btn" id="prev-btn" onclick="changeSlide(-1)">←</button>
        
        <div class="progress-container">
            <div class="progress-bar" id="progress-bar"></div>
        </div>
        
        <span class="slide-counter" id="slide-counter">1 / 18</span>
        
        <button class="nav-btn" id="next-btn" onclick="changeSlide(1)">→</button>
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

            document.getElementById('slide-counter').innerText = (currentSlide + 1) + ' / ' + totalSlides;
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
                e.preventDefault();
                changeSlide(1);
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                changeSlide(-1);
            }
        });

        // Touch events para móvil
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        document.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 30) {
                if (diff > 0) {
                    changeSlide(1);
                } else {
                    changeSlide(-1);
                }
            }
        }

        function calcularOp() {
            const subyacente = parseFloat(document.getElementById('calc-subyacente').value) || 0;
            const strike = parseFloat(document.getElementById('calc-strike').value) || 0;
            const prima = parseFloat(document.getElementById('calc-prima').value) || 0;
            const tipo = document.getElementById('calc-tipo').value;

            let intrinseco = 0;
            if (tipo === 'call') {
                intrinseco = Math.max(subyacente - strike, 0);
            } else {
                intrinseco = Math.max(strike - subyacente, 0);
            }

            let extrinseco = Math.max(prima - intrinseco, 0);
            let estado = intrinseco > 0 ? 'ITM' : 'OTM';

            const resDiv = document.getElementById('calc-resultados');
            resDiv.innerHTML = `
                <h3 style="font-size:0.8rem;">Desglose</h3>
                <div class="data-box" style="margin-bottom:8px; padding:8px;">
                    <div class="data-label" style="font-size:0.5rem;">Estado</div>
                    <div class="data-value" style="font-size:1rem; color: ${intrinseco > 0 ? 'var(--green)' : 'var(--gold)'}">${estado}</div>
                </div>
                <div class="grid-2" style="gap:8px;">
                    <div class="data-box" style="padding:8px;">
                        <div class="data-label" style="font-size:0.5rem;">Intrinseco</div>
                        <div class="data-value" style="color:var(--green); font-size:0.9rem;">$${intrinseco.toFixed(2)}</div>
                    </div>
                    <div class="data-box" style="padding:8px;">
                        <div class="data-label" style="font-size:0.5rem;">Extrinseco</div>
                        <div class="data-value" style="color:var(--gold); font-size:0.9rem;">$${extrinseco.toFixed(2)}</div>
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
                feedback.innerHTML = '✅ CORRECTO! Delta = $0.50 por cada $1.00.';
            } else {
                btn.style.borderColor = 'var(--red)';
                btn.style.background = 'rgba(255,51,51,0.15)';
                feedback.style.background = 'rgba(255,51,51,0.1)';
                feedback.style.color = 'var(--red)';
                feedback.innerHTML = '❌ Revisa. Delta multiplica $1.00 directamente.';
            }
        }

        updateUI();
    </script>
</body>
</html>
