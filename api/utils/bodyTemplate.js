const paymentBodyTemplate = payment => `<p style="font-size: 18px">💸 Recibiste un nuevo pago correspondiente al curso de <strong>${payment.course}</strong>:</p>
<ul>
  <li><strong>Estudiante: </strong>${payment.student.name}</li>
  <li><strong>Email: </strong>${payment.student.email}</li>
  <li><strong>Medio de pago: </strong>${payment.type}</li>
</ul>

<br />

<p style="font-size: 12px"><em>Este correo fue generado automáticamente por el <a href="https://github.com/undefinedschool/mail-service">mail-service</a>.</em></p>
`;

module.exports = paymentBodyTemplate;
