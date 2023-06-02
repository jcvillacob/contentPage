import { Component, OnInit } from '@angular/core';

interface Faq {
  question: string;
  answer: string;
  showAnswer: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqs: Faq[] = [
    {
      question: '¿Qué debo buscar al contratar un creador de contenido?',
      answer: 'Al contratar un creador de contenido, deberías buscar experiencia en tu industria, habilidades de escritura creativa, capacidad para cumplir con los plazos, habilidades de comunicación y una sólida cartera de trabajos anteriores.',
      showAnswer: false
    },
    {
      question: '¿Qué es un software de streaming y para qué se utiliza?',
      answer: 'Un software de streaming permite transmitir en vivo audio y video a través de Internet. Se utiliza para difundir eventos en tiempo real, como seminarios web, juegos en línea, podcasts y mucho más.',
      showAnswer: false
    },
    {
      question: '¿Cómo puedo hacer una copia de seguridad de mi contenido?',
      answer: 'Puedes hacer una copia de seguridad de tu contenido utilizando servicios de almacenamiento en la nube, como Google Drive o Dropbox. También puedes utilizar un dispositivo de almacenamiento externo, como un disco duro o una unidad flash USB.',
      showAnswer: false
    },
    {
      question: '¿Qué tipo de contenido debo crear para mi audiencia?',
      answer: 'El tipo de contenido que debes crear depende de tu audiencia y de tus objetivos. Por ejemplo, si tu audiencia está formada principalmente por jóvenes, podrías optar por contenido de video interactivo y divertido. Si tu objetivo es educar, podrías crear contenido en formato de blog o de podcast.',
      showAnswer: false
    },
    {
      question: '¿Cómo puedo promocionar mi contenido?',
      answer: 'Puedes promocionar tu contenido a través de varios canales, como las redes sociales, el email marketing, el SEO y la publicidad pagada. También puedes asociarte con influencers y otros creadores de contenido para alcanzar a una audiencia más amplia.',
      showAnswer: false
    },
    {
      question: '¿Qué debo hacer si mi contenido no está recibiendo suficiente interacción?',
      answer: 'Si tu contenido no está recibiendo suficiente interacción, puedes probar diferentes estrategias, como mejorar tu SEO, promover tu contenido en más canales, interactuar más con tu audiencia o mejorar la calidad de tu contenido.',
      showAnswer: false
    },
    {
      question: '¿Cómo puedo proteger mi contenido de la piratería?',
      answer: 'Puedes proteger tu contenido de la piratería mediante el uso de tecnologías de gestión de derechos digitales (DRM), la inclusión de marcas de agua en tus videos y la monitorización de Internet para detectar posibles infracciones de derechos de autor.',
      showAnswer: false
    },
    {
      question: '¿Necesito un equipo para crear contenido?',
      answer: 'Dependiendo de la complejidad y del volumen de contenido que desees crear, podrías necesitar un equipo. Esto podría incluir escritores, editores, diseñadores gráficos, especialistas en SEO, entre otros. Sin embargo, muchos creadores de contenido comienzan solos y contratan a un equipo a medida que crecen.',
      showAnswer: false
    }
  ]
  


  constructor() { }

  ngOnInit(): void {
  }

  toggleAnswer(faq: Faq): void {
    faq.showAnswer = !faq.showAnswer;
  }
}