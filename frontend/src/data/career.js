// Career data extracted from CareerSummary.md
// Bilingual (En/Es) following the project's titleEn/titleEs pattern

// ---------------------------------------------------------------------------
// 1. careerTimeline — At-a-glance summary (chronological order)
// ---------------------------------------------------------------------------
export const careerTimeline = [
  {
    company: 'Spring Wireless Mexico S. de R.L. de C.V.',
    period: 'Jan 2011 – Feb 2013',
    location: 'Mexico City, Mexico',
    roleEn: 'Software Developer',
    roleEs: 'Desarrollador de Software',
    domainEn: 'Mobile sales force automation for FMCG',
    domainEs: 'Automatizacion de fuerza de ventas movil para bienes de consumo',
    scaleEn: '434 .csproj, 2,029 .aspx, 2,055 .sql',
    scaleEs: '434 .csproj, 2,029 .aspx, 2,055 .sql',
  },
  {
    company: 'Praxis (Edenred)',
    period: 'Mar 2013 – Feb 2015',
    location: 'Mexico City, Mexico',
    roleEn: 'Software Developer',
    roleEs: 'Desarrollador de Software',
    domainEn: 'Employee benefits card management & invoicing',
    domainEs: 'Gestion de tarjetas de beneficios para empleados y facturacion',
    scaleEn: '205 .csproj; AS400/mainframe integration',
    scaleEs: '205 .csproj; integracion AS400/mainframe',
  },
  {
    company: 'Digital Data S.A. de C.V.',
    period: 'Feb 2015 – Nov 2022',
    location: 'Mexico City, Mexico',
    roleEn: 'Software Architect',
    roleEs: 'Arquitecto de Software',
    domainEn: 'Document processing, OCR, ML/NLP extraction',
    domainEs: 'Procesamiento de documentos, OCR, extraccion ML/NLP',
    scaleEn: '686 .csproj, 5,821 .py, 2,941 .sql',
    scaleEs: '686 .csproj, 5,821 .py, 2,941 .sql',
  },
  {
    company: 'Unosquare (Young Living Essential Oils)',
    period: 'Nov 2022 – Present',
    location: 'Remote (Lehi, UT)',
    roleEn: 'Senior Software Engineer',
    roleEs: 'Ingeniero de Software Senior',
    domainEn: 'Global e-commerce supply chain',
    domainEs: 'Cadena de suministro e-commerce global',
    scaleEn: '139 .csproj, 38 TS packages, 47 .go, 31 CDK, 46 Dockerfiles; 43+ microservices across 6 regions',
    scaleEs: '139 .csproj, 38 paquetes TS, 47 .go, 31 CDK, 46 Dockerfiles; 43+ microservicios en 6 regiones',
  },
];

// ---------------------------------------------------------------------------
// 2. companyDeepDives — Expandable detail sections per company
// ---------------------------------------------------------------------------
export const companyDeepDives = [
  // ── Spring ──────────────────────────────────────────────────────────────
  {
    company: 'Spring',
    period: 'Jan 2011 – Feb 2013',
    roleEn: 'Software Developer',
    roleEs: 'Desarrollador de Software',
    domainEn:
      'Built and maintained a complete field sales automation ecosystem for consumer goods companies. Sales reps carried Windows Mobile PDAs on daily routes, taking orders, collecting payments, verifying inventory, and syncing data to back-office servers integrated with ERPs.',
    domainEs:
      'Construyo y mantuvo un ecosistema completo de automatizacion de ventas en campo para empresas de bienes de consumo. Los representantes de ventas portaban PDAs Windows Mobile en rutas diarias, tomando pedidos, cobrando pagos, verificando inventario y sincronizando datos con servidores back-office integrados con ERPs.',
    products: [
      {
        name: 'Mobile Sales App',
        descriptionEn: 'Full offline-capable application for field sales reps on Windows Mobile PDAs with multiple client-specific variants.',
        descriptionEs: 'Aplicacion offline completa para representantes de ventas en campo en PDAs Windows Mobile con multiples variantes especificas por cliente.',
        features: [
          { en: 'Order capture with product search, pricing tiers, tax calculations', es: 'Captura de pedidos con busqueda de productos, niveles de precios, calculos de impuestos' },
          { en: 'Route execution — daily planning, customer sequencing, GPS proximity', es: 'Ejecucion de rutas — planificacion diaria, secuenciacion de clientes, proximidad GPS' },
          { en: 'Collections — cash, check, credit card against invoices', es: 'Cobranza — efectivo, cheque, tarjeta de credito contra facturas' },
          { en: 'Delivery management and warehouse Kardex tracking', es: 'Gestion de entregas y seguimiento de Kardex de almacen' },
          { en: 'Customer credit limit enforcement and AR visibility', es: 'Aplicacion de limite de credito y visibilidad de cuentas por cobrar' },
          { en: 'KPIs — budget vs actual, coverage rates, visit compliance', es: 'KPIs — presupuesto vs real, tasas de cobertura, cumplimiento de visitas' },
        ],
      },
      {
        name: 'Merchandising App',
        descriptionEn: 'PDA applications for merchandisers auditing retail stores. 12 specialized modules.',
        descriptionEs: 'Aplicaciones PDA para mercaderistas auditando tiendas retail. 12 modulos especializados.',
        features: [
          { en: 'Planogram compliance and price auditing', es: 'Cumplimiento de planograma y auditoria de precios' },
          { en: 'Out-of-stock tracking with reason codes', es: 'Seguimiento de faltantes con codigos de razon' },
          { en: 'Display/exhibition audits and promotional tracking', es: 'Auditorias de exhibicion y seguimiento de promociones' },
          { en: 'In-store surveys and competitive intelligence', es: 'Encuestas en tienda e inteligencia competitiva' },
        ],
      },
      {
        name: 'Sales Management Portal',
        descriptionEn: 'ASP.NET Web Forms portal for sales managers with product catalog, pricing, user administration, and dashboards.',
        descriptionEs: 'Portal ASP.NET Web Forms para gerentes de ventas con catalogo de productos, precios, administracion de usuarios y tableros.',
        features: [
          { en: 'Product catalog and pricing/discount configuration', es: 'Catalogo de productos y configuracion de precios/descuentos' },
          { en: 'User/role administration and route territory setup', es: 'Administracion de usuarios/roles y configuracion de territorios de ruta' },
          { en: 'PDA sync scheduling and sales dashboards', es: 'Programacion de sincronizacion PDA y tableros de ventas' },
        ],
      },
      {
        name: 'Sync & Integration Server',
        descriptionEn: 'Backend for PDA synchronization and SAP export services.',
        descriptionEs: 'Backend para sincronizacion de PDAs y servicios de exportacion SAP.',
        features: [
          { en: 'Bidirectional batch sync of master data and field data', es: 'Sincronizacion bidireccional de datos maestros y datos de campo' },
          { en: 'SAP export and ERP connectors', es: 'Exportacion SAP y conectores ERP' },
          { en: 'Sync monitoring dashboards', es: 'Tableros de monitoreo de sincronizacion' },
        ],
      },
    ],
    techTable: [
      { layer: 'Mobile', technology: 'C#, .NET Compact Framework 2.0 / 3.5, Windows Mobile' },
      { layer: 'Web', technology: 'ASP.NET Web Forms, HTML/CSS, JavaScript' },
      { layer: 'Server', technology: '.NET Framework, Windows Services, SOAP / WCF' },
      { layer: 'Desktop', technology: 'Windows Forms' },
      { layer: 'Database', technology: 'SQL Server' },
      { layer: 'Integration', technology: 'SAP export, FTP, SMS' },
    ],
    complexityEn: [
      'Offline-first architecture: Full data model and business logic running on PDAs with no network dependency',
      'Client variant management: Multiple customized builds from shared codebase',
      'Multi-channel coherence: Same domain across PDA, web, server, and desktop',
      'Folio/fiscal compliance: Mexican invoice numbering regulations enforced at device level',
      'Commission engines: Multiple calculation methods with payroll-ready output',
    ],
    complexityEs: [
      'Arquitectura offline-first: Modelo de datos completo y logica de negocio ejecutandose en PDAs sin dependencia de red',
      'Gestion de variantes por cliente: Multiples builds personalizados desde una base de codigo compartida',
      'Coherencia multi-canal: Mismo dominio en PDA, web, servidor y escritorio',
      'Cumplimiento fiscal de folios: Regulaciones mexicanas de numeracion de facturas aplicadas a nivel de dispositivo',
      'Motores de comisiones: Multiples metodos de calculo con salida lista para nomina',
    ],
  },

  // ── Edenred ─────────────────────────────────────────────────────────────
  {
    company: 'Edenred',
    period: 'Mar 2013 – Feb 2015',
    roleEn: 'Software Developer',
    roleEs: 'Desarrollador de Software',
    domainEn:
      'Two interconnected systems for the Mexican market: a prepaid benefit card management platform where employers manage meal/benefit cards for employees, and an electronic invoicing pipeline that generates legally compliant CFDI invoices for Mexican tax authorities. Both integrated with legacy AS400/IBM mainframe systems.',
    domainEs:
      'Dos sistemas interconectados para el mercado mexicano: una plataforma de gestion de tarjetas de beneficios prepagadas donde los empleadores administran tarjetas de vales/beneficios para empleados, y un pipeline de facturacion electronica que genera facturas CFDI legalmente validas para las autoridades fiscales mexicanas. Ambos integrados con sistemas mainframe legacy AS400/IBM.',
    products: [
      {
        name: 'Benefits Card Portal',
        descriptionEn: 'Web portal for corporate clients to manage prepaid meal/benefit cards for their employees.',
        descriptionEs: 'Portal web para clientes corporativos para gestionar tarjetas de vales/beneficios prepagados para sus empleados.',
        features: [
          { en: 'Card lifecycle: order, activate, block, replace, cancel', es: 'Ciclo de vida de tarjetas: ordenar, activar, bloquear, reemplazar, cancelar' },
          { en: 'Hierarchical balance management: client → regional → individual', es: 'Gestion jerarquica de saldos: cliente → regional → individual' },
          { en: 'Account statements and financial operations', es: 'Estados de cuenta y operaciones financieras' },
          { en: 'Employer master data and employee roster management', es: 'Datos maestros de empleadores y gestion de plantilla de empleados' },
        ],
      },
      {
        name: 'Invoicing Pipeline',
        descriptionEn: 'Three-stage automated pipeline for Mexican electronic invoicing compliance.',
        descriptionEs: 'Pipeline automatizado de tres etapas para cumplimiento de facturacion electronica mexicana.',
        features: [
          { en: 'INPUT → INVOICING → OUTPUT three-stage pipeline', es: 'Pipeline de tres etapas INPUT → INVOICING → OUTPUT' },
          { en: 'CFDI-compliant XML generation with taxes and addendums', es: 'Generacion de XML conforme a CFDI con impuestos y adendas' },
          { en: 'AS400/DB2 fixed-width output for legacy accounting', es: 'Salida de ancho fijo AS400/DB2 para contabilidad legacy' },
          { en: 'Folio assignment from SAT-authorized ranges', es: 'Asignacion de folios de rangos autorizados por el SAT' },
        ],
      },
    ],
    techTable: [
      { layer: 'Web', technology: 'C#, ASP.NET Web Forms' },
      { layer: 'Architecture', technology: '5-layer: Entities → Logic → Context → DataAccess → Serializer' },
      { layer: 'Reporting', technology: 'SQL Server Reporting Services (SSRS)' },
      { layer: 'Integration', technology: 'AS400/DB2, SBI card processor, XML, REST' },
      { layer: 'Patterns', technology: 'MEF plugin architecture, decorator, PLINQ' },
    ],
    complexityEn: [
      '5-layer architecture: Clean separation with entities, logic, execution context, data access, and serialization',
      'Plugin system (MEF): Runtime composition of output modules',
      'Mexican fiscal compliance: RFC validation, SAT folio numbering, CFDI schema',
      'Mainframe integration: Bidirectional data exchange with AS400 fixed-width formats',
      'Parallel processing: PLINQ and TPL Dataflow for batch processing',
    ],
    complexityEs: [
      'Arquitectura de 5 capas: Separacion limpia con entidades, logica, contexto de ejecucion, acceso a datos y serializacion',
      'Sistema de plugins (MEF): Composicion en tiempo de ejecucion de modulos de salida',
      'Cumplimiento fiscal mexicano: Validacion de RFC, numeracion de folios SAT, esquema CFDI',
      'Integracion con mainframe: Intercambio bidireccional de datos con formatos de ancho fijo AS400',
      'Procesamiento paralelo: PLINQ y TPL Dataflow para procesamiento por lotes',
    ],
  },

  // ── DigitalData ─────────────────────────────────────────────────────────
  {
    company: 'DigitalData',
    period: 'Feb 2015 – Nov 2022',
    roleEn: 'Software Architect',
    roleEs: 'Arquitecto de Software',
    domainEn:
      'A multi-product document processing platform serving enterprise clients across multiple industries. Three product layers: an enterprise content management system (ECM), an intelligent document processing engine (IDP) with ML/NLP, and an accounts payable automation module.',
    domainEs:
      'Una plataforma multi-producto de procesamiento de documentos que sirve a clientes empresariales en multiples industrias. Tres capas de producto: un sistema de gestion de contenido empresarial (ECM), un motor de procesamiento inteligente de documentos (IDP) con ML/NLP, y un modulo de automatizacion de cuentas por pagar.',
    products: [
      {
        name: 'Document Management Platform',
        descriptionEn: 'Full ECM platform: capture, index, store, search, retrieve, and manage documents at scale.',
        descriptionEs: 'Plataforma ECM completa: captura, indexacion, almacenamiento, busqueda, recuperacion y gestion de documentos a escala.',
        features: [
          { en: 'Hierarchical document repository with custom metadata', es: 'Repositorio jerarquico de documentos con metadatos personalizados' },
          { en: 'Multi-channel capture: scanner, email, folder watchers, web upload', es: 'Captura multicanal: escaner, correo, watchers de carpeta, carga web' },
          { en: 'OCR-powered full-text search across millions of pages', es: 'Busqueda de texto completo con OCR en millones de paginas' },
          { en: 'Role-based security with per-collection permissions', es: 'Seguridad basada en roles con permisos por coleccion' },
          { en: 'Workflow approval chains and completeness tracking', es: 'Cadenas de aprobacion de flujo de trabajo y seguimiento de completitud' },
        ],
      },
      {
        name: 'Intelligent Document Processor',
        descriptionEn: 'AI/ML layer for automatic document classification, data extraction, and validation.',
        descriptionEs: 'Capa de IA/ML para clasificacion automatica de documentos, extraccion de datos y validacion.',
        features: [
          { en: 'TensorFlow/Keras document classification models', es: 'Modelos de clasificacion de documentos con TensorFlow/Keras' },
          { en: 'Data extraction: INE, CFE, invoices, handwritten text', es: 'Extraccion de datos: INE, CFE, facturas, texto manuscrito' },
          { en: 'Invoice QR validation against SAT web service', es: 'Validacion de QR de facturas contra servicio web del SAT' },
          { en: 'Spanish NLP with SpaCy for named entity recognition', es: 'NLP en espanol con SpaCy para reconocimiento de entidades' },
        ],
      },
      {
        name: 'AP Automation Module',
        descriptionEn: 'End-to-end AP processing with multi-channel invoice reception and approval routing.',
        descriptionEs: 'Procesamiento de cuentas por pagar de extremo a extremo con recepcion multicanal de facturas y ruteo de aprobaciones.',
        features: [
          { en: 'Multi-channel invoice reception and CFDI validation', es: 'Recepcion multicanal de facturas y validacion CFDI' },
          { en: 'PO matching and multi-level approval workflows', es: 'Coincidencia de OC y flujos de aprobacion multinivel' },
          { en: 'Business rule validation and duplicate detection', es: 'Validacion de reglas de negocio y deteccion de duplicados' },
        ],
      },
    ],
    techTable: [
      { layer: 'Backend (.NET)', technology: 'C#, ASP.NET Core, ASP.NET MVC' },
      { layer: 'Backend (Python)', technology: 'Python, Flask (uWSGI/Nginx)' },
      { layer: 'ML/AI', technology: 'TensorFlow, Keras, Scikit-learn, BERT' },
      { layer: 'Computer Vision', technology: 'OpenCV, Tesseract OCR' },
      { layer: 'NLP', technology: 'SpaCy, NLTK (Spanish models)' },
      { layer: 'Frontend', technology: 'Angular 12, SignalR' },
      { layer: 'Database', technology: 'SQL Server' },
      { layer: 'Messaging', technology: 'Apache Kafka, RabbitMQ' },
      { layer: 'APIs', technology: 'REST, gRPC / Protocol Buffers' },
      { layer: 'Infrastructure', technology: 'Docker, Supervisor' },
    ],
    complexityEn: [
      'ML training and serving pipeline: Dataset preparation through model deployment via WCF and Flask APIs',
      'Multi-model inference: Classification model picks type, then type-specific extractor runs OCR + NLP',
      'Spanish NLP: SpaCy and NLTK with Spanish models for Mexican document NER',
      'Computer vision preprocessing: OpenCV deskew, denoise, binarize pipeline before OCR',
      'Kafka event streaming: Consumer/producer for async document processing',
      'Multi-tenant deployments: Per-client configurations and workflows',
    ],
    complexityEs: [
      'Pipeline de entrenamiento y servicio de ML: Preparacion de datasets hasta despliegue de modelos via APIs WCF y Flask',
      'Inferencia multi-modelo: Modelo de clasificacion selecciona tipo, luego extractor especifico ejecuta OCR + NLP',
      'NLP en espanol: SpaCy y NLTK con modelos en espanol para NER en documentos mexicanos',
      'Preprocesamiento de vision por computadora: Pipeline de OpenCV para alinear, limpiar y binarizar antes de OCR',
      'Streaming de eventos Kafka: Consumidor/productor para procesamiento asincrono de documentos',
      'Despliegues multi-tenant: Configuraciones y flujos de trabajo por cliente',
    ],
  },

  // ── YoungLiving ─────────────────────────────────────────────────────────
  {
    company: 'YoungLiving',
    period: 'Nov 2022 – Present',
    roleEn: 'Senior Software Engineer',
    roleEs: 'Ingeniero de Software Senior',
    domainEn:
      'A global e-commerce supply chain platform managing the flow from online order to warehouse fulfillment to carrier delivery across 6+ regions. The system orchestrates 43+ microservices, integrates with 15+ third-party logistics providers and multiple shipping carriers, with ERP as the source of truth.',
    domainEs:
      'Una plataforma global de cadena de suministro e-commerce gestionando el flujo desde pedido en linea hasta cumplimiento en almacen y entrega por transportista en mas de 6 regiones. El sistema orquesta mas de 43 microservicios, se integra con mas de 15 proveedores logisticos de terceros y multiples transportistas, con ERP como la fuente de verdad.',
    products: [
      {
        name: '3PL Integration Hub',
        descriptionEn: 'Hub-and-spoke architecture with central fulfillment API and 12+ partner-specific gateways.',
        descriptionEs: 'Arquitectura hub-and-spoke con API central de cumplimiento y mas de 12 gateways especificos por socio.',
        features: [
          { en: 'Central fulfillment API for shipment exposure and confirmations', es: 'API central de cumplimiento para exposicion y confirmacion de envios' },
          { en: '12+ regional gateways for 3PL partners worldwide', es: 'Mas de 12 gateways regionales para socios 3PL en todo el mundo' },
          { en: 'Async resilience via SQS — API stays up when ERP is down', es: 'Resiliencia asincrona via SQS — API disponible cuando el ERP esta caido' },
          { en: 'ASN receipts, inventory adjustments, stock status reports', es: 'Recibos ASN, ajustes de inventario, reportes de estado de stock' },
        ],
      },
      {
        name: 'Shipping Services',
        descriptionEn: 'Multi-carrier integrations with rate quoting, label generation, and freight tracking.',
        descriptionEs: 'Integraciones multi-transportista con cotizacion de tarifas, generacion de etiquetas y seguimiento de carga.',
        features: [
          { en: 'Carrier rate quoting and label generation', es: 'Cotizacion de tarifas y generacion de etiquetas de transportistas' },
          { en: 'Real-time freight tracking', es: 'Seguimiento de carga en tiempo real' },
          { en: 'Shipping method selection for e-commerce checkout', es: 'Seleccion de metodo de envio para checkout e-commerce' },
        ],
      },
      {
        name: 'E-Commerce Backend',
        descriptionEn: 'Go backend for e-commerce storefront with event-driven ERP order pipeline.',
        descriptionEs: 'Backend en Go para storefront e-commerce con pipeline de pedidos ERP orientado a eventos.',
        features: [
          { en: 'Customer management and checkout processing', es: 'Gestion de clientes y procesamiento de checkout' },
          { en: 'Event-driven order flow: e-commerce webhooks → SQS FIFO → Lambda → ERP', es: 'Flujo de pedidos orientado a eventos: webhooks e-commerce → SQS FIFO → Lambda → ERP' },
          { en: 'Refund, cancellation, and ship confirmation processing', es: 'Procesamiento de reembolsos, cancelaciones y confirmaciones de envio' },
        ],
      },
      {
        name: 'Inventory & Delivery',
        descriptionEn: 'Inventory sync between ERP, e-commerce platform, and 3PLs plus pickup point services across regions.',
        descriptionEs: 'Sincronizacion de inventario entre ERP, plataforma e-commerce y 3PLs mas servicios de puntos de recoleccion en regiones.',
        features: [
          { en: 'Three-way inventory sync: ERP, e-commerce platform, and 3PL warehouses', es: 'Sincronizacion de inventario triple: ERP, plataforma e-commerce y almacenes 3PL' },
          { en: 'Pickup point selection with ElasticSearch (Europe, UK)', es: 'Seleccion de puntos de recoleccion con ElasticSearch (Europa, UK)' },
          { en: 'Micro-frontend embedded in checkout flow', es: 'Micro-frontend integrado en flujo de checkout' },
        ],
      },
    ],
    techTable: [
      { layer: 'Backend (.NET)', technology: 'C#, ASP.NET Core (.NET 5.0-9.0), Entity Framework' },
      { layer: 'Backend (Go)', technology: 'Go 1.23, Gin, Ent ORM, GraphQL' },
      { layer: 'Backend (Node)', technology: 'Express.js' },
      { layer: 'Frontend', technology: 'React 18, MUI, Vite, Module Federation' },
      { layer: 'Cloud', technology: 'AWS — CDK, Lambda, ECS/Fargate, DynamoDB, SQS/SNS, API Gateway' },
      { layer: 'IaC', technology: 'AWS CDK (TypeScript), Terraform' },
      { layer: 'Containers', technology: 'Docker (46 Dockerfiles)' },
      { layer: 'Databases', technology: 'SQL Server, PostgreSQL, Oracle, DynamoDB, ElasticSearch' },
      { layer: 'Messaging', technology: 'Kafka, SQS/SNS' },
      { layer: 'CI/CD', technology: 'Jenkins, Octopus Deploy' },
    ],
    complexityEn: [
      '43+ microservices: Independently deployed with own CDK stack, Docker image, and CI/CD pipeline',
      'Hub-and-spoke gateway pattern: Central API with 12+ partner-specific gateways',
      'Async resilience (v2): SQS-based decoupling for ERP downtime tolerance',
      'Multi-language polyglot: C#, Go, TypeScript, Python chosen per use case',
      'Event-driven order pipeline: E-commerce webhooks → SQS FIFO → Lambda → ERP with retry',
      'Global multi-region: Architecture deployed across 6+ regions worldwide',
    ],
    complexityEs: [
      'Mas de 43 microservicios: Desplegados independientemente con su propio stack CDK, imagen Docker y pipeline CI/CD',
      'Patron de gateway hub-and-spoke: API central con mas de 12 gateways especificos por socio',
      'Resiliencia asincrona (v2): Desacoplamiento basado en SQS para tolerancia a caidas del ERP',
      'Poliglota multi-lenguaje: C#, Go, TypeScript, Python seleccionados por caso de uso',
      'Pipeline de pedidos orientado a eventos: Webhooks e-commerce → SQS FIFO → Lambda → ERP con reintentos',
      'Multi-region global: Arquitectura desplegada en mas de 6 regiones a nivel mundial',
    ],
  },
];

// ---------------------------------------------------------------------------
// 3. techEvolution — 5-era timeline visualization
// ---------------------------------------------------------------------------
export const techEvolution = [
  {
    era: '2011–2013',
    labelEn: 'Windows Mobile & .NET Compact Framework',
    labelEs: 'Windows Mobile y .NET Compact Framework',
    company: 'Spring',
    techs: ['C#', '.NET CF 2.0/3.5', 'ASP.NET Web Forms', 'SQL Server', 'SOAP/WCF', 'SAP Integration'],
  },
  {
    era: '2013–2015',
    labelEn: 'Enterprise Fintech & Fiscal Compliance',
    labelEs: 'Fintech Empresarial y Cumplimiento Fiscal',
    company: 'Edenred',
    techs: ['C#', 'ASP.NET Web Forms', 'AS400', 'SSRS', 'MEF', 'CFDI'],
  },
  {
    era: '2015–2022',
    labelEn: 'AI/ML Document Processing',
    labelEs: 'Procesamiento de Documentos con IA/ML',
    company: 'DigitalData',
    techs: ['C#', 'Python', 'TensorFlow', 'OpenCV', 'SpaCy', 'Kafka', 'Docker', 'Angular', 'gRPC'],
  },
  {
    era: '2022–Present',
    labelEn: 'Cloud-Native Microservices',
    labelEs: 'Microservicios Nativos de la Nube',
    company: 'YoungLiving',
    techs: ['C#', 'TypeScript', 'Go', 'AWS CDK', 'Lambda', 'ECS', 'React', 'Docker', 'GraphQL', 'Terraform'],
  },
];

// ---------------------------------------------------------------------------
// 4. keyTransitions — Career evolution table
// ---------------------------------------------------------------------------
export const keyTransitions = [
  {
    transitionEn: 'Mobile platform',
    transitionEs: 'Plataforma movil',
    fromEn: 'Windows Mobile / .NET Compact Framework',
    fromEs: 'Windows Mobile / .NET Compact Framework',
    toEn: 'Cloud-native APIs consumed by any client',
    toEs: 'APIs nativas de la nube consumidas por cualquier cliente',
  },
  {
    transitionEn: 'Web framework',
    transitionEs: 'Framework web',
    fromEn: 'ASP.NET Web Forms (2,029 .aspx)',
    fromEs: 'ASP.NET Web Forms (2,029 .aspx)',
    toEn: 'ASP.NET Core + React 18',
    toEs: 'ASP.NET Core + React 18',
  },
  {
    transitionEn: 'Architecture',
    transitionEs: 'Arquitectura',
    fromEn: 'Monolithic multi-channel apps',
    fromEs: 'Aplicaciones monoliticas multi-canal',
    toEn: '43+ independently deployed microservices',
    toEs: 'Mas de 43 microservicios desplegados independientemente',
  },
  {
    transitionEn: 'Database',
    transitionEs: 'Base de datos',
    fromEn: 'SQL Server only (4,996 .sql files)',
    fromEs: 'Solo SQL Server (4,996 archivos .sql)',
    toEn: 'Polyglot — SQL Server, PostgreSQL, DynamoDB, ElasticSearch',
    toEs: 'Poliglota — SQL Server, PostgreSQL, DynamoDB, ElasticSearch',
  },
  {
    transitionEn: 'Infrastructure',
    transitionEs: 'Infraestructura',
    fromEn: 'On-premises Windows servers',
    fromEs: 'Servidores Windows on-premises',
    toEn: 'AWS (CDK, Lambda, ECS/Fargate, 31 IaC stacks)',
    toEs: 'AWS (CDK, Lambda, ECS/Fargate, 31 stacks IaC)',
  },
  {
    transitionEn: 'Integration style',
    transitionEs: 'Estilo de integracion',
    fromEn: 'FTP file drops, SOAP, socket sync',
    fromEs: 'Archivos FTP, SOAP, sincronizacion por sockets',
    toEn: 'REST APIs, GraphQL, SQS/SNS events, webhooks',
    toEs: 'APIs REST, GraphQL, eventos SQS/SNS, webhooks',
  },
  {
    transitionEn: 'AI/ML',
    transitionEs: 'IA/ML',
    fromEn: 'None',
    fromEs: 'Ninguno',
    toEn: 'TensorFlow, Keras, BERT, OpenCV, SpaCy',
    toEs: 'TensorFlow, Keras, BERT, OpenCV, SpaCy',
  },
  {
    transitionEn: 'Languages',
    transitionEs: 'Lenguajes',
    fromEn: 'C# only',
    fromEs: 'Solo C#',
    toEn: 'C#, TypeScript, Python, Go, SQL',
    toEs: 'C#, TypeScript, Python, Go, SQL',
  },
  {
    transitionEn: 'Deployment',
    transitionEs: 'Despliegue',
    fromEn: 'Manual / Octopus',
    fromEs: 'Manual / Octopus',
    toEn: 'Docker (54 containers), Jenkins pipelines, CDK-managed',
    toEs: 'Docker (54 contenedores), pipelines Jenkins, gestionado por CDK',
  },
];
