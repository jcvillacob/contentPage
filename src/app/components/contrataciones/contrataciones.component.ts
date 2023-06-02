import { Component } from '@angular/core';

@Component({
  selector: 'app-contrataciones',
  templateUrl: './contrataciones.component.html',
  styleUrls: ['./contrataciones.component.css']
})
export class ContratacionesComponent {
  steps = [
    {
      title: 'Identificación de las necesidades de contenido',
      description: 'Lo primero que debes hacer es identificar tus necesidades de contenido. ¿Necesitas contenido para tu blog, redes sociales, sitio web, etc.? ¿Cuánto contenido necesitas y con qué frecuencia?',
      image: '/assets/Grabacion boda.jfif'
    },
    {
      title: 'Definición de la audiencia objetivo',
      description: 'Debes tener una clara comprensión de quién es tu público objetivo y qué tipo de contenido les resultará interesante y valioso. Esto deberá guiar tu estrategia de contenido.',
      image: '/assets/audiencia.jfif'
    },
    {
      title: 'Definición de la voz y tono de tu marca',
      description: 'Antes de buscar a un creador de contenido, debes definir claramente la voz y el tono de tu marca. Esto asegurará que el contenido que se cree esté en línea con tu identidad de marca.',
      image: '/assets/marca.jfif'
    },
    {
      title: 'Búsqueda de proveedores de servicios de creación de contenido',
      description: 'Una vez que tengas una clara comprensión de tus necesidades, comienza a buscar proveedores de servicios de creación de contenido. Esto puede implicar una búsqueda en línea, preguntar a colegas por recomendaciones o incluso contratar a través de una agencia de marketing de contenidos.',
      image: '/assets/proveedores.jfif'
    },
    {
      title: 'Evaluación de portafolios y ejemplos de trabajo',
      description: 'Al revisar a posibles creadores de contenido, asegúrate de mirar sus portafolios y ejemplos de trabajo anteriores. Esto te dará una buena idea de la calidad de su trabajo y si su estilo se alinea con el de tu marca.',
      image: '/assets/portfolio.jfif'
    },
    {
      title: 'Solicitud de propuestas y presupuesto',
      description: 'Una vez que hayas reducido tu lista de posibles creadores de contenido, solicita propuestas y presupuestos. Esto te permitirá comparar lo que cada uno ofrece y a qué precio.',
      image: '/assets/presupuesto.jfif'
    },
    {
      title: 'Realización de entrevistas',
      description: 'Es importante entrevistar a los posibles creadores de contenido para tener una mejor idea de cómo trabajan, su proceso de creación de contenido y si parecen ser una buena opción para tu marca.',
      image: '/assets/interview.jfif'
    },
    {
      title: 'Revisión de términos y condiciones',
      description: 'Antes de contratar a un creador de contenido, asegúrate de leer y entender completamente los términos y condiciones del contrato. Esto debe incluir detalles sobre los plazos de entrega, revisión y aprobación del contenido, derechos de autor, cláusulas de confidencialidad, formas de pago, etc.',
      image: '/assets/terminos.jfif'
    },
    {
      title: 'Inicio de una prueba de proyecto',
      description: 'Si es posible, puede ser útil iniciar con una prueba de proyecto para ver cómo trabajan juntos y si estás contento con los resultados.',
      image: '/assets/working.jfif'
    },
    {
      title: 'Evaluación y seguimiento del rendimiento',
      description: 'Una vez que hayas contratado a un creador de contenido, es importante seguir evaluando el rendimiento del contenido. Utiliza métricas y KPIs relevantes para tu estrategia de contenido para determinar si el contenido está obteniendo los resultados deseados y ajustar la estrategia según sea necesario.',
      image: '/assets/rendimiento.jfif'
    },
  ];
}
