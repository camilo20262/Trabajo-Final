
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para directivas básicas
import { FormsModule } from '@angular/forms';   // ¡NECESARIO para los formularios!
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule], // Importamos FormsModule aquí
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // Asegúrate que coincida con tu archivo CSS
})
export class AppComponent {
  title = 'mi-web-angular';

  // --- LÓGICA DEL FORMULARIO ---
  
  // Objeto para guardar los datos del formulario
  datosFormulario = {
    nombre: '',
    apellido: '',
    documento: '',
    correo: '',
    celular: '',
    inicio: 'Inmediatamente',
    financiacion: '', // Aquí guardaremos la opción seleccionada del select
    escolaridad: '9°',
    contacto: 'Todos',
    aceptaPolitica: false
  };

  // Estado del botón de envío
  enviando = false;
  textoBoton = 'Enviar';

  // --- LÓGICA DEL POPUP DE FINANCIACIÓN ---
  mensajePopup = '';
  mostrarPopup = false;

  // Función que se ejecuta cuando cambia el select de financiación
  verificarFinanciacion() {
    const valor = this.datosFormulario.financiacion;

    if (valor === 'Si') {
      this.mensajePopup = "¡Excelente! Te contactaremos sobre opciones de financiación.";
      this.mostrarPopup = true;
    } else if (valor === 'No') {
      this.mensajePopup = "Entendido. Si cambias de opinión, ¡avísanos!";
      this.mostrarPopup = true;
    } else {
      this.mostrarPopup = false;
    }
  }

  // Función para enviar el formulario (Submit)
  enviarFormulario() {
    // 1. Validaciones
    if (!this.datosFormulario.nombre || !this.datosFormulario.correo) {
      alert('Por favor, completa los campos de Nombre y Correo.');
      return;
    }
    if (!this.datosFormulario.aceptaPolitica) {
      alert('Debes aceptar la Política de Protección de Datos Personales.');
      return;
    }

    // 2. Simular envío
    this.enviando = true;
    this.textoBoton = 'Enviando...';

    // setTimeout simula la espera de una petición al servidor
    setTimeout(() => {
      alert('¡Gracias por tus datos! Te contactaremos pronto.');
      
      // 3. Resetear formulario y estado
      this.enviando = false;
      this.textoBoton = 'Enviar';
      this.limpiarFormulario();
      this.mostrarPopup = false;
    }, 1500);
  }

  limpiarFormulario() {
    this.datosFormulario = {
      nombre: '',
      apellido: '',
      documento: '',
      correo: '',
      celular: '',
      inicio: 'Inmediatamente',
      financiacion: '',
      escolaridad: '9°',
      contacto: 'Todos',
      aceptaPolitica: false
    };
  }
}
