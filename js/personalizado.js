$(document).ready(function() {
		$('#calendar').fullCalendar({
			header: {
				left: 'prev, next, today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'			
				},
				locale : 'pt-br',
			//defaultDate: '2017-10-12', //Não settar data
			navLinks: true, // Links de navegação Hoje, Semana, Mês
			editable: true,
			eventLimit: true, // Limitação de visualização de  eventos por dia, mais que isso usa-se o "+"
			events: 'lista_reservas.php',
			//Se tivermos problema com o caching segue codigo:
			extraParams: function (){
				return {
					cachebuster: new Date ().valueOf()

				},
			  eventClick: function(info) { //Abrir as info na Janela Modal de detalhe do evento
			  	 info.jsEvent.preventDefault(); //Não deixa o browser navegar

    			$('#visualizar #RAProfessorReserva'). text (info.event.RAProfessorReserva);
    			$('#visualizar #RGMMonitorReserva'). text (info.event.RGMMonitorReserva);
    			$('#visualizar #NomeEvento'). text (info.event.NomeEvento);
    			$('#visualizar #InicioReserva'). text (info.event.InicioReserva.toLocaleString());
    			$('#visualizar #FimReserva'). text (info.event.FimReserva.toLocaleString());

    			$('#visualizar').modal('show');

  			}

			}
			
		});
	});