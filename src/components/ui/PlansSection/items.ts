const plans = [
  {
    name: "Plan Básico",
    price: 50,
    old_price: 100,
    discount_percentage: 50,
    features: [
      "Gestión de residentes: Registro y administración de datos básicos de los residentes.",
      "Control de acceso básico: Registro de entradas y salidas de vehículos y peatones.",
      "Gestión de visitantes: Funcionalidad limitada para registrar visitas manualmente.",
      "Notificaciones por email: Notificaciones automáticas de eventos clave como accesos.",
      "Historial de accesos: Consulta de acceso de hasta 30 días.",
      "Soporte estándar: Atención al cliente vía correo electrónico con tiempo de respuesta extendido.",
    ],
  },
  {
    name: "Plan Avanzado",
    price: 120,
    old_price: 200,
    discount_percentage: 40,
    features: [
      "Todo lo incluido en el Plan Básico.",
      "Control de acceso avanzado: Integración con sistemas de tarjetas RFID, QR, y PIN.",
      "Reservas de áreas comunes: Sistema de reservas con disponibilidad en tiempo real.",
      "Facturación automática: Generación de facturas y gestión de pagos en línea.",
      "Reportes básicos: Informes mensuales de accesos y uso de áreas comunes.",
      "Soporte prioritario: Respuesta rápida por email y soporte vía chat.",
    ],
  },
  {
    name: "Plan Premium",
    price: 240,
    old_price: 400,
    discount_percentage: 40,
    features: [
      "Todo lo incluido en el Plan Avanzado.",
      "Monitoreo de seguridad en tiempo real: Integración con cámaras de seguridad y alertas automáticas.",
      "Automatización IoT: Control y monitoreo de dispositivos conectados (sensores, cámaras, puertas automáticas).",
      "Análisis avanzado: Reportes detallados y gráficos de uso de accesos, visitas y áreas comunes.",
      "Gestión documental: Almacenamiento y compartición de documentos (reglamentos, actas).",
      "Acceso móvil completo: App móvil con acceso a todas las funcionalidades para administradores y residentes.",
      "Notificaciones SMS: Alertas por SMS para eventos de emergencia o notificaciones importantes.",
      "Soporte dedicado: Atención personalizada con gerente de cuenta y soporte 24/7.",
    ],
  },
  {
    name: "Plan Corporativo (a medida)",
    price: 700,
    old_price: 1750,
    discount_percentage: 60,
    features: [
      "Todo lo incluido en el Plan Premium.",
      "Multi-urbanización: Gestión de múltiples comunidades o urbanizaciones desde una sola cuenta.",
      "Personalización avanzada: Integración de funciones específicas solicitadas por el cliente.",
      "Reportes personalizados: Informes a la medida según los KPI del cliente.",
      "Integración con otros sistemas: Soporte para integraciones con software externo (contabilidad, CRM).",
      "Capacitación in situ: Entrenamiento para administradores y personal de seguridad.",
      "Soporte premium: Asistencia técnica continua y mejoras a medida.",
    ],
  },
];

export default plans;
