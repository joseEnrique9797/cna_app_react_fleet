import logo from './cna.png';
import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import React from "react";
import text from './url.txt';

import myJson from './url_text.json';
import axios from "axios";

// const text_url = require("./url.txt");
// const text_field = require("./url.txt");

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Inject,ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ResourcesDirective, ResourceDirective} from '@syncfusion/ej2-react-schedule';
import { extend,loadCldr ,L10n } from '@syncfusion/ej2-base';

import { DialogUtility } from '@syncfusion/ej2-popups';

import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import {createElement } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';


import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { MultiSelect } from "react-multi-select-component";
import MulitselectDrop from '/Users/K/Documents/react_project/cna_app_react_fleet/cna-app/src/dataSource.json'

import { ListView } from '@syncfusion/ej2-lists';
import { TextBox, NumericTextBox } from '@syncfusion/ej2-inputs'
// import { scheduleData } from './datasource';

// diccionario de idioma para botones 
import * as numberingSystems from "./culture-files/numberingSystems.json";
import * as gregorian from "./culture-files/ca-gregorian.json";
import * as numbers from "./culture-files/numbers.json";
import * as timeZoneNames from "./culture-files/timeZoneNames.json";


// fetch('/path/to/the/file').then((response) => response.text())
//     .then((data) => {
//     // read file lines here
//     console.log('text data ##############################')
//     console.log(data)
//     // find the value you are looking for and compare it to the value you get from the database
// },


loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
L10n.load({
  
  es: {
    schedule: {
      day: "D??a",
      week: "Semana",
      workWeek: "Semana de trabajo",
      month: "Mes",
      agenda: "Agenda",
      weekAgenda: "Agenda de la semana",
      workWeekAgenda: "Agenda de la semana laboral",
      monthAgenda: "Agenda del mes",
      today: "Hoy",
      noEvents: "No hay eventos",
      emptyContainer: "No hay eventos programados para este d??a.",
      allDay: "Todo el dia",
      start: "comienzo",
      end: "Final",
      more: "m??s",
      close: "Cerca",
      cancel: "Cancelar",
      noTitle: "(Sin t??tulo)",
      delete: "Eliminar",
      deleteEvent: "Este evento",
      deleteMultipleEvent: "Eliminar m??ltiples eventos",
      selectedItems: "Art??culos seleccionados",
      deleteSeries: "Serie completa",
      edit: "Editar",
      editSeries: "Serie completa",
      editEvent: "Este evento",
      createEvent: "Crear",
      subject: "Tema",
      addTitle: "A??adir t??tulo",
      moreDetails: "M??s detalles",
      save: "Salvar",
      editContent: "??C??mo le gustar??a cambiar la cita en la serie?",
      deleteContent: "??Seguro que quieres eliminar este evento?",
      deleteMultipleContent:
        "??Est??s seguro de que deseas eliminar los eventos seleccionados?",
      newEvent: "Nuevo evento",
      title: "T??tulo",
      location: "Ubicaci??n",
      description: "Descripci??n",
      timezone: "Zona horaria",
      startTimezone: "Zona horaria de inicio",
      endTimezone: "Zona horaria final",
      repeat: "Repetir",
      saveButton: "Salvar",
      cancelButton: "Cancelar",
      deleteButton: "Eliminar",
      recurrence: "Reaparici??n",
      wrongPattern: "El patr??n de recurrencia no es v??lido.",
      seriesChangeAlert:
        "??Desea cancelar los cambios realizados en instancias espec??ficas de esta serie y volver a vincularlos con toda la serie?",
      createError:
        "La duraci??n del evento debe ser m??s corta que la frecuencia con la que ocurre. Acorte la duraci??n o cambie el patr??n de recurrencia en el editor de eventos de recurrencia.",
      sameDayAlert:
        "Dos ocurrencias del mismo evento no pueden ocurrir en el mismo d??a.",
      editRecurrence: "Editar recurrencia",
      repeats: "Repite",
      alert: "Alerta",
      startEndError:
        "La fecha de finalizaci??n seleccionada ocurre antes de la fecha de inicio.",
      invalidDateError: "El valor de la fecha ingresada no es v??lido.",
      blockAlert:
        "Los eventos no se pueden programar dentro del rango de tiempo bloqueado.",
      ok: "Okay",
      yes: "si",
      no: "No",
      occurrence: "Ocurrencia",
      series: "Serie",
      previous: "Anterior",
      next: "pr??ximo",
      timelineDay: "D??a de la l??nea de tiempo",
      timelineWeek: "Semana de la l??nea de tiempo",
      timelineWorkWeek: "Semana laboral cronol??gica",
      timelineMonth: "Mes de la l??nea de tiempo",
      timelineYear: "Cronolog??a A??o",
      editFollowingEvent: "Eventos siguientes",
      deleteTitle: "Eliminar evento",
      editTitle: "Editar evento",
      beginFrom: "Comience desde",
      endAt: "Termina en"
    },
    recurrenceeditor: {
      none: "Ninguna",
      daily: "Diario",
      weekly: "Semanal",
      monthly: "Mensual",
      month: "Mes",
      yearly: "Anual",
      never: "Nunca",
      until: "Hasta",
      count: "Contar",
      first: "primero",
      second: "Segundo",
      third: "Tercero",
      fourth: "Cuarto",
      last: "??ltimo",
      repeat: "Repetir",
      repeatEvery: "Repite cada",
      on: "Repetir en",
      end: "Final",
      onDay: "D??a",
      days: "Dias)",
      weeks: "Semanas)",
      months: "Meses)",
      years: "A??os)",
      every: "cada",
      summaryTimes: "veces)",
      summaryOn: "en",
      summaryUntil: "hasta",
      summaryRepeat: "Repite",
      summaryDay: "dias)",
      summaryWeek: "semanas)",
      summaryMonth: "meses)",
      summaryYear: "a??os)",
      monthWeek: "Mes Semana",
      monthPosition: "Posici??n del mes",
      monthExpander: "Expansor de mes",
      yearExpander: "Expansor de a??o",
      repeatInterval: "Intervalo de repetici??n"
    },
    calendar: {
      today: "Hoy"
    }
  }
});


// funcion para cookie token
function getCookie(name) {
  if (!document.cookie) {
     return null;
  }

  const xsrfCookies = document.cookie.split(';')
     .map(c => c.trim())
     .filter(c => c.startsWith(name + '='));

  if (xsrfCookies.length === 0) {
     return null;
  }
  return decodeURIComponent(xsrfCookies[0].split('=')[1]);
}

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    // const [updateDone, setUpdateDone] = useState(true);
    // const [update, setUpdate] = useState(true);
    // this.data = extend([], scheduleData, null, true);
    this.multiSelectRef = React.createRef();
    this.state = {
      fecha: new Date(),
      scheduleData: null,
      romsData: [],
      employeeData: [],
      applicantData: [],
      inventoryData: [],
      DataisLoaded: null
    };
  }

  onRenderCell(event) {
    var backgroundColor = '#' + event.hexColor;
    var style = {
        backgroundColor: backgroundColor,
        borderRadius: '0px',
        opacity: 0.8,
        color: 'black',
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };
  }

  get_validate_required_fields(letra){
    // onClick=escribe('0')
    if ( (document.getElementById("cnaToken").value === ''  &&  document.getElementById("cnaToken").style.display !== 'none'  )   || document.getElementById("cnaRoom").value === ''  || document.getElementById('confirmSend').getElementsByClassName("e-list-item e-level-1 e-checklist")[0].ariaSelected === 'false' || document.getElementById("cnaEmployee").value === '' || document.getElementById("cnaApplicant").value === '') {
      document.getElementsByClassName("e-control e-btn e-lib e-primary e-event-save e-flat")[0].setAttribute('style', 'display:None;')
    }
    else{
      document.getElementsByClassName("e-control e-btn e-lib e-primary e-event-save e-flat")[0].setAttribute('style', '')
    }
  }

  get_rason(letra){
    // onClick=escribe('0')
    if (document.getElementById('cnaCancelState').getElementsByClassName("e-list-item e-level-1 e-checklist e-active")[0] != undefined) {
      
      document.getElementById('cnaRason').setAttribute('style', 'display:block;')      
    }
    else{
      document.getElementById('cnaRason').setAttribute('style', 'display:None;')      
    }
  }


  // loadFile(file) {
  //   let text =  file.text();
  //   console.log(text);
  //   return text
  // }

  get_confirmation(letra){
    // onClick=escribe('0')
    if ( ((document.getElementById("cnaToken").value === ''  &&  document.getElementById("cnaToken").style.display !== 'none'  )   || document.getElementById("cnaRoom").value === '' || document.getElementById("cnaEmployee").value === '' || document.getElementById("cnaApplicant").value === '' || ( document.getElementById('cnaCancelState').getElementsByClassName("e-list-item e-level-1 e-checklist e-active")[0] != undefined &&  document.getElementById("cnaRason").value === '' )   )    ) {
      DialogUtility.alert( {
        content:"Faltan campos obligatorios.",
        title : 'Informaci??n'
      })
      document.getElementById('confirmSend').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[0].setAttribute('aria-selected', false)
      document.getElementById('confirmSend').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[0].setAttribute('aria-checked', false)
      document.getElementById('confirmSend').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[0].getElementsByClassName("e-frame e-icons")[0].setAttribute('class', 'e-frame e-icons')
      document.getElementById('confirmSend').getElementsByClassName("e-list-item e-level-1 e-checklist")[0].setAttribute('aria-selected', false)
    }
    else{
      //pass
    }

    if ( (document.getElementById("cnaToken").value === ''  &&  document.getElementById("cnaToken").style.display !== 'none'  )   || document.getElementById("cnaRoom").value === ''  || document.getElementById('confirmSend').getElementsByClassName("e-list-item e-level-1 e-checklist")[0].ariaSelected === 'false' || document.getElementById("cnaEmployee").value === '' || document.getElementById("cnaApplicant").value === '') {
      document.getElementsByClassName("e-control e-btn e-lib e-primary e-event-save e-flat")[0].setAttribute('style', 'display:None;')
    }
    else{
      document.getElementsByClassName("e-control e-btn e-lib e-primary e-event-save e-flat")[0].setAttribute('style', '')
    }

  }

  // peticion get al backend para citas
  // Trae las citas disponibles en el sistema del backend previamente almacenadas
  getfetche = () => {  
    // var reader = new FileReader();
    
    // reader.readAsDataURL(text);
    // let fetchData = async()=> {
      
    //   console.log(final)
    // }

    // let resp =  axios.get("./url.txt");
    // let final =  resp.text();
    // reader.readAsText(file); 
    // var x = this.loadFile("./url.txt")

    

    // fileReader.readAsText(x);
    console.log(  myJson['url'] );
    fetch (`${myJson['url']}/calendar/data`).then(res => res.json()).then(res => {
      var array = []
      // var count = 0
      if (res) {
        for (var property in res) {
          array.push({
            Id: res[property]['external_id'],
            CategoryColor:  res[property]['CategoryColor'],
            RecurrenceRule: res[property]['RecurrenceRule'],
            name:  res[property]['Subject'],
            cnaEmployee :  res[property]['cnaEmployee'],
            cnaApplicant: res[property]['cnaApplicant'],
            cnaEmployeeName :  res[property]['cnaEmployeeName'],
            cnaQunatityParticipants :  res[property]['cnaQunatityParticipants'],
            Locacion :  res[property]['Locacion'],
            Description :  res[property]['Description'],
            cnaInventory :  res[property]['check_box'],
            cnaRoom :  res[property]['cnaroom'],
            StartTime: new Date( res[property]['StartTime']['year'],  res[property]['StartTime']['month'],  res[property]['StartTime']['day'],  res[property]['StartTime']['hour'],  res[property]['StartTime']['minute']),
            EndTime: new Date( res[property]['EndTime']['year'],  res[property]['EndTime']['month'],  res[property]['EndTime']['day'],  res[property]['EndTime']['hour'],  res[property]['EndTime']['minute']),
          })
        }
      }
      
      this.setState({
        scheduleData: array,
        // DataisLoaded: true
      });
      // }
      
      // return res
    }).catch(function(error) {
      DialogUtility.alert( {
        content:"No se puede conectar con el backend. Contacte con el administrador.",
        title : 'Informaci??n'
      })
    });
  }

  // peticion get al backend para salas
  // almacena todas las salas disponibles en el sistema para luego dejarlas disponible al agregar un evento desde el frontend
  getRoomfetche = () => {  
    fetch (`${myJson['url']}/room/data`).then(res => res.json()).then(res => {
      this.setState({
        romsData: res,
      });

      let body = '<div style ="text-align:center; font-size: 18px"> Salas :'
      for (var obj_i in this.state.romsData) {
        body = body + (`<h6  style=" color: white ; font-size: 18px ; margin-left: 16px;display: inline; width: 30% ;background-color: ${this.state.romsData[obj_i].RoomColor} " >   ${this.state.romsData[obj_i].text}   </h6>`) 
      }
      body = body  + '</div>'
      document.getElementById('list_room_color').insertAdjacentHTML("beforebegin",body)
    
    }).catch(function(error) {
      DialogUtility.alert( {
        content:"Ocurrio un error al traer las salas disponibles. Contacte con el administrador.",
        title : 'Informaci??n'
      })
    });
  }


  // peticion get al backend para empleados
  // almacena todos los empleados disponibles en el sistema para luego mostrarlos en el frontend
  getEmployeefetche = () => {  
    fetch (`${myJson['url']}/employee/data`).then(res => res.json()).then(res => {
      this.setState({
        employeeData: res,
      });
    }).catch(function(error) {
      DialogUtility.alert( {
        content:"Ocurrio un error al traer los empleados disponibles. Contacte con el administrador.",
        title : 'Informaci??n'
      })
    });
  }



  getApplicantfetche = () => {  
    fetch (`${myJson['url']}/applicant/data`).then(res => res.json()).then(res => {
      this.setState({
        applicantData: res,
      });
    }).catch(function(error) {
      DialogUtility.alert( {
        content:"Ocurrio un error al traer los solicitantes disponibles. Contacte con el administrador.",
        title : 'Informaci??n'
      })
    });
  }
  


  async getEmployeefetcheasync(){  
    await fetch (`${myJson['url']}/employee/data`).then(res => res.json()).then(res => {
      this.setState({
        employeeData: res,
      });
    }).catch(function(error) {
      DialogUtility.alert( {
        content:"Ocurrio un error al traer los empleados disponibles. Contacte con el administrador.",
        title : 'Informaci??n'
      })
    });
  }

  // peticion get al backend para el equipo que se puede utilizar
  getInventoryfetche = () => {  
    fetch (`${myJson['url']}/inventory/data`).then(res => res.json()).then(res => {
      this.setState({
        inventoryData: res,
      });
    }).catch(function(error) {
      DialogUtility.alert( {
        content:"Ocurrio un error al traer los requerimientos. Contacte con el administrador.",
        title : 'Informaci??n'
      })
    });
  }

  // get_dialog(){
  //   return DialogUtility.alert({
  //     title: 'Alert Dialog',
  //     content: "This is an Alert Dialog!",
  //     okButton: {  text: 'OK', click: okClick.bind(this) },
  //     showCloseIcon: true,
  //     closeOnEscape: true,
  //     animationSettings: { effect: 'Zoom' }
  //   });
  // }
  
  
  // peticion post al backend
  async setfetche(arg) {  
    
    
    var s = this
    
    let data_check_box = []
    let data_check_box_scheduleData = []
    
    // bloque de codigo para obtener los elementos seleccionados y los guardados del check box
    for (var select_var in document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist e-active")) {
      if (document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist e-active")[select_var].id  != undefined) {
        data_check_box.push( parseInt(document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist e-active")[select_var].id.replace('cnaInventory_', ''), 10)   )
      }
    }



    for (var obj_i in this.state.scheduleData) {
      if (this.state.scheduleData[obj_i]['Id']  === arg.data.Id ) {
        for (var indice in this.state.scheduleData[obj_i]['cnaInventory']) {
          data_check_box_scheduleData.push(this.state.scheduleData[obj_i]['cnaInventory'][indice])
        }
      }
    }
    // calcula la diferencia en el checkBox (si existen cambios a registrar)
    
    const diff_data_check_box_scheduleData = data_check_box_scheduleData.filter(e => !data_check_box.includes(e))
    const diff_data_check_box = data_check_box.filter(e => !data_check_box_scheduleData.includes(e))
    
    // fin bloque-=========================================


    // create ================================ test 222
    if (arg.requestType === 'eventCreate') {
      if (arg.data[0].cnaQunatityParticipants === undefined) {
        arg.data[0].cnaQunatityParticipants = 1
      }
      
      let data_post = {
        data:arg.data[0],
        data_check_box:data_check_box
      }
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' , 'accept':'application/json' },
        body: JSON.stringify(data_post)
      };
      const response =  fetch (`${myJson['url']}/calendar/set_data`, requestOptions).then(res => res.json()).then(res => {
        if (JSON.parse(res['result'])['error'] === true) {
          if (JSON.parse(res['result'])['type'] === 'before_today') {
            DialogUtility.alert( {
              content:"No se puede editar o crear actividades anteriores a la fecha actual.",
              title : 'Informaci??n'
            })
          }
          
          else if (JSON.parse(res['result'])['type'] === 'token_invalid') {
            DialogUtility.alert( {
              content:"La contrase??a ingresada es incorrecta. Intente nuevamente y aseg??rese de escribir la contrase??a correcta.",
              title : 'Informaci??n'
            })
          }

          else if (JSON.parse(res['result'])['type'] === 'token_format') {
            DialogUtility.alert( {
              content:"El c??digo debe de estar compuesto por 4 n??meros comprendidos entre 0-9 eje: 0000, 0101, 9999.",
              title : 'Informaci??n'
            })
          }
          else if (JSON.parse(res['result'])['type'] === 'date_overlap') {
            DialogUtility.alert( {
              content:"Existe un traslape de horas con otro evento.",
              title : 'Informaci??n'
            })
          }
          s.scheduleObj.deleteEvent(arg.addedRecords[0].Id);
        }
        else if (JSON.parse(res['result'])['error'] === false) {
          DialogUtility.alert( {
            content:"Se ha creado la actividad "+ arg.data[0].name + ". \n\n Un mensaje de confirmaci??n se ha enviado a su correo electr??nico.",
            title : 'Informaci??n'
          })
        }

        for (var obj_i in s.state.scheduleData) {
          if (s.state.scheduleData[obj_i]['Id']  === arg.data[0].Id ) {
            s.state.scheduleData[obj_i]['cnaInventory'] = data_check_box
          }
        }
        
        if (JSON.parse(res['result'])['type'] === 'recharged') {
          setTimeout(function(){
            window.location.reload();
          }, 4000);
        }


      }).catch(function(error) {
        return false
      });
    }
    
    // write ================================
          
    if (arg.requestType === 'eventChange' && (  document.getElementById('cnaCancelState').getElementsByClassName("e-list-item e-level-1 e-checklist e-active")[0] != undefined  || diff_data_check_box_scheduleData.length > 0  || diff_data_check_box.length > 0 ||  s.scheduleObj.activeEventData.event.cnaQunatityParticipants != arg.data.cnaQunatityParticipants  ||  s.scheduleObj.activeEventData.event.Description != arg.data.Description ||  s.scheduleObj.activeEventData.event.cnaApplicant != arg.data.cnaApplicant || s.scheduleObj.activeEventData.event.cnaEmployee != arg.data.cnaEmployee ||  s.scheduleObj.activeEventData.event.cnaRoom != arg.data.cnaRoom ||   s.scheduleObj.activeEventData.event.name != arg.data.name || s.scheduleObj.activeEventData.event.StartTime != arg.data.StartTime  || s.scheduleObj.activeEventData.event.EndTime != arg.data.EndTime   )  ) {
      
      // console.log('tipo de evento ===================================>', arg,  arg.requestType === 'eventChange' , diff_data_check_box_scheduleData.length > 0  , diff_data_check_box.length > 0 ,  s.scheduleObj.activeEventData.event.cnaQunatityParticipants != arg.data.cnaQunatityParticipants  ,  s.scheduleObj.activeEventData.event.Description != arg.data.Description ,  s.scheduleObj.activeEventData.event.cnaApplicant != arg.data.cnaApplicant , s.scheduleObj.activeEventData.event.cnaEmployee != arg.data.cnaEmployee ,  s.scheduleObj.activeEventData.event.cnaRoom != arg.data.cnaRoom ,   s.scheduleObj.activeEventData.event.name != arg.data.name , s.scheduleObj.activeEventData.event.StartTime != arg.data.StartTime  , s.scheduleObj.activeEventData.event.EndTime != arg.data.EndTime )
      var data_cancel_state = {}
      
      if (document.getElementById('cnaCancelState').getElementsByClassName("e-list-item e-level-1 e-checklist e-active")[0] != undefined) {
        data_cancel_state = {cancel :true}
        document.getElementById('cnaCancelState').getElementsByClassName("e-list-item e-level-1 e-checklist")[0].setAttribute('class', 'e-list-item e-level-1 e-checklist')
        document.getElementById('cnaCancelState').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[0].setAttribute('aria-selected', false)
        document.getElementById('cnaCancelState').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[0].setAttribute('aria-checked', false)
        document.getElementById('cnaCancelState').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[0].getElementsByClassName("e-frame e-icons")[0].setAttribute('class', 'e-frame e-icons')
        document.getElementById('cnaCancelState').getElementsByClassName("e-list-item e-level-1 e-checklist")[0].setAttribute('aria-selected', false)
      }

      let data_post_write = {
        data:arg.data,
        data_check_box:data_check_box,
        data_cancel_state:data_cancel_state
      }

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data_post_write)
      };
      const response =  fetch (`${myJson['url']}/calendar/write_data`, requestOptions).then(res => res.json()).then(res => {
        if (JSON.parse(res['result'])['error'] === true) {
          
          if (JSON.parse(res['result'])['type'] === 'token_undefined') {
            DialogUtility.alert( {
              content:"Para editar la actividad ingrese el c??digo asociado.",
              title : 'Informaci??n'
            })
          }

          else if (JSON.parse(res['result'])['type'] === 'state_cancel') {
            s.scheduleObj.activeEventData.event.Description = arg.data.Description
            s.scheduleObj.deleteEvent(arg.data.Id);
            DialogUtility.alert( {
              content:"La actividad ha sido cancelada con exito!.",
              title : 'Informaci??n'
            })
            return
          }
          
          else if (JSON.parse(res['result'])['type'] === 'date_overlap') {
            DialogUtility.alert( {
              content:"Existe un traslape de horas con otro evento.",
              title : 'Informaci??n'
            })
          }

          else if (JSON.parse(res['result'])['type'] === 'before_today') {
            DialogUtility.alert( {
              content:"No se puede editar o crear actividades anteriores a la fecha actual.",
              title : 'Informaci??n'
            })
          }

          else if (JSON.parse(res['result'])['type'] === 'token_format') {
            DialogUtility.alert( {
              content:"El c??digo debe de estar compuesto por 4 n??meros comprendidos entre 0-9 eje: 0000, 0101, 9999.",
              title : 'Informaci??n'
            })
          }

          else if (JSON.parse(res['result'])['type'] === 'token_invalid') {
            DialogUtility.alert( {
              content:"La contrase??a ingresada es incorrecta. Intente nuevamente y aseg??rese de escribir la contrase??a correcta.",
              title : 'Informaci??n'
            })
          }
          
          let Data = {
            Id: s.scheduleObj.activeEventData.event.Id,
            Subject: s.scheduleObj.activeEventData.event.Subject,
            StartTime: s.scheduleObj.activeEventData.event.StartTime,
            EndTime: s.scheduleObj.activeEventData.event.EndTime,
            cnaRoom: s.scheduleObj.activeEventData.event.cnaRoom,
            cnaQunatityParticipants: s.scheduleObj.activeEventData.event.cnaQunatityParticipants,
            cnaApplicant: s.scheduleObj.activeEventData.event.cnaApplicant,
            cnaEmployee: s.scheduleObj.activeEventData.event.cnaEmployee,
            name: s.scheduleObj.activeEventData.event.name,
            Description: s.scheduleObj.activeEventData.event.Description,
            Locacion : s.scheduleObj.activeEventData.event.Locacion,
          };
          
          
          // resetear a nivel visual el check box a los valores previos 
          for (var obj_i in s.state.scheduleData) {
            for (var select_var in document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")) {
              if (s.state.scheduleData[obj_i]['Id'] === s.scheduleObj.activeEventData.event.Id ) {
                if (document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")[select_var].id  != undefined) {
                  if ( s.state.scheduleData[obj_i]['cnaInventory'] &&  s.state.scheduleData[obj_i]['cnaInventory'].includes(  parseInt(document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")[select_var].id.replace('cnaInventory_', ''), 10)  ) ) {
                    document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")[select_var].setAttribute('class', 'e-list-item e-level-1 e-checklist e-active')
                    document.getElementById('cnaInventory').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[select_var].setAttribute('aria-selected', true)
                    document.getElementById('cnaInventory').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[select_var].setAttribute('aria-checked', true)
                    document.getElementById('cnaInventory').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[select_var].getElementsByClassName("e-frame e-icons")[0].setAttribute('class', 'e-frame e-icons e-check')
                    document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")[select_var].setAttribute('aria-selected', true)
                  }
                  else{
                    document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")[select_var].setAttribute('class', 'e-list-item e-level-1 e-checklist')
                    document.getElementById('cnaInventory').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[select_var].setAttribute('aria-selected', false)
                    document.getElementById('cnaInventory').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[select_var].setAttribute('aria-checked', false)
                    document.getElementById('cnaInventory').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[select_var].getElementsByClassName("e-frame e-icons")[0].setAttribute('class', 'e-frame e-icons')
                    document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")[select_var].setAttribute('aria-selected', false)
                  }
  
                }


              }
              
            }
          }

          s.scheduleObj.saveEvent(Data);
        }

        else{
          for (var obj_i in this.state.scheduleData) {
            if (this.state.scheduleData[obj_i]['Id']  === arg.data.Id ) {
              this.state.scheduleData[obj_i]['cnaInventory'] = data_check_box
            }
          }
        }
        
      }).catch(function(error) {
        s.scheduleObj.activeEventData.cancel = true
        return false
      });
    }
    // else{
    //   arg.data.cnaInventory = data_check_box
    // }
    

    // unlink ======================================
    // if (arg.requestType === 'eventRemove' &&  Array.isArray(arg.data)) {
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(arg.data[0])
    //   };
    //   arg.cancel = true
     
    //   const response =  fetch (`${myJson['url']}/calendar/delete_data`, requestOptions).then(res => res.json()).then(res => {
    //     console.log('va a borrar el evento ======================1111111111111111111111111111111=============>', s.scheduleObj)
        
        
        
        
    //     if (JSON.parse(res['result'])['error'] === true) {
    //       // return
    //       // alert("Se eliminara el evento");
    //       // arg.cancel = false
    //       // arg.deletedRecords = []
    //       console.log('va a borrar el evento ===================333333333333333333333================>',arg)
    //       s.scheduleObj.deleteEvent(arg.data[0].Id);
    //     }

    //     else if (JSON.parse(res['result'])['type'] === 'token_invalid') {
    //       DialogUtility.alert( {
    //         content:"El c??digo ingresado es incorrecto, contacte con el administrador para que le proporcione el c??digo v??lido para la actividad.",
    //         title : 'Informaci??n'
    //       })
    //     }


    //   }).catch(function(error) {
    //     console.log('va a error============================================>', error)
    //     return false
    //   });
    // }
  }
  
  // funcion para modificar los colores por salas
  onEventRendered(args) {
    // let name_employe
    // if (this.state.employeeData.length === 0) {
    //   setTimeout(function(){
    //       window.location.reload(1);
    //   }, 1400);
    // }
    // for ( var index in  this.state.employeeData) {
      
    //   if (args.data.cnaEmployee === this.state.employeeData[index].value) {
    //     name_employe = this.state.employeeData[index].text
    //   }
    // }
    let name_employee = args.data.cnaEmployeeName

    if (name_employee === undefined) {
      for ( var index in  this.state.employeeData) {
        if (args.data.cnaEmployee === this.state.employeeData[index].value) {
          name_employee = this.state.employeeData[index].text
        }
      }
    }
    
    args.element.innerHTML =  "<div class=\"e-appointment-details\"><div class=\"e-subject\">" + name_employee + "</div> <div class=\"e-subject\">" + args.data.name + "</div><div class=\"e-time\">" +  args.element.innerText.replace(args.data.name, "") + "</div></div>"
    
    if (args.data.CategoryColor === undefined ) {
      for ( var index in  this.state.romsData) {
        if (args.data.cnaRoom === this.state.romsData[index].value) {
          args.data.CategoryColor = this.state.romsData[index].RoomColor
        }
      }
    }
    args.element.style.backgroundColor = args.data.CategoryColor;
    

    // args.element.style.height = '300'+'px';
  }
  
  // registra eventos nuevos
  onActionBegin(args){
    if (args.requestType === 'eventCreate' || args['requestType'] === "eventChange"  || args['requestType'] === "eventRemove"){
      this.setfetche(args)
    }
  }
  
  // fetch al recargar el doom
  componentDidMount(prevProps) {
    this.getfetche();
    this.getRoomfetche();
    this.getEmployeefetche();
    this.getApplicantfetche()
    // this.getEmployeefetcheasync();
    this.getInventoryfetche();
    // const optionListMany2Tags =[{ Game: "Game 1", Id: 1 }, { Game: "Game 2", Id: 2 }];
    // let multiSelectComponent = new MultiSelectComponent({
    //   dataSource: optionListMany2Tags,
    //   fields: { text: 'Game', value: 'Id' },
    //   placeholder: 'm2m tags',
    //   change: this.props.onChange // Asignamos la funci??n onChange a la propiedad change
    // });
    // multiSelectComponent.appendTo(this.multiSelectRef.current);
    
  };

  onPopupOpen(args) {
    // opcion para editar la ventana, agregar campos nuevos a la modal de registro
    if (args.type === 'Editor') {
      
      var recurrence = document.querySelector(".e-recurrenceeditor").ej2_instances[0];
      recurrence.change = function (args) {
        document.getElementsByClassName("e-input-wrapper e-interval e-form-right")[0].setAttribute('style', 'display:None;')

        if (args.value) {
            var repeatType = args.value.split("=")[1].split(";")[0];
            var end = document.querySelector(".e-end-on-element")
                .ej2_instances[0];
            var interval = document.querySelector(".e-repeat-interval.e-numerictextbox").ej2_instances[0];
            end.getItems()[0].style.display = "none";
            if (this.previousType !== repeatType) {
                this.previousType = repeatType;
                
                end.index = 1;
            }
            if (end.index === 0) {
              end.index = 1;
            }
        }
      };

      // console.log('opciones de editar elemento===========33333333333333===========>', this.scheduleObj.eventWindow.recurrenceEditor)
      // onsole.log('opciones de editar elemento===========44444444444444444===========>', this.scheduleObj.eventWindow.recurrenceEditor.endType.properties.dataSource , this.scheduleObj.eventWindow.recurrenceEditor.endType.listData)
      

      document.getElementsByClassName("e-control e-btn e-lib e-primary e-event-save e-flat")[0].setAttribute('style', 'display:None;')
      document.getElementsByClassName("e-control e-btn e-lib e-event-cancel e-flat")[0].setAttribute('style', 'display:None;')
      this.scheduleObj.eventWindow.recurrenceEditor.frequencies = ['none', 'daily', 'weekly'];
      if (!args.element.querySelector('.custom-field-row')) {
          let row = createElement('div', { className: 'custom-field-row' });
          let formElement = args.element.querySelector('.e-schedule-form').querySelector('.e-description-row');
          formElement.firstChild.insertBefore(row, formElement.firstChild.firstChild.nextSibling);
          let container = createElement('div', { className: 'custom-field-container' });
          
          
          let rowBefore = createElement('div', { className: 'custom-field-row' });
          let formElementBefore = args.element.querySelector('.e-schedule-form');
          formElementBefore.firstChild.insertBefore(rowBefore, formElementBefore.firstChild.firstChild);
          let container_before = createElement('div', { className: 'custom-field-container' });
          
          // declaracion de la variable cnaApplicant
          let inputM2t = createElement('input', {
            attrs: { name: 'cnaMany2T' , id: 'cnaMany2T', type:"text"}, type:"text"
          });

          console.log('create m2m ======>', inputM2t)

          // declaracion de la variable cnaApplicant
          let inputApplicant = createElement('input', {
            className: 'e-field', attrs: { name: 'cnaApplicant' , id: 'cnaApplicant'}
          });

          // declaracion de la variable cnaEmployee
          let inputEmployee = createElement('input', {
            className: 'e-field', attrs: { name: 'cnaEmployee' , id: 'cnaEmployee'}
          });


          // array para cnaApplicant
          var arrayApplicant = []
          arrayApplicant = this.state.applicantData
          
          rowBefore.appendChild(container_before);
          
          // array para cnaEmployee
          var arrayEmployee = []
          arrayEmployee = this.state.employeeData
          container_before.appendChild(inputEmployee);

          // declaracion de la variable cnaRoom
          let inputEle = createElement('input', {
              className: 'e-field', attrs: { name: 'cnaRoom' , id: 'cnaRoom' }
          });

          let inputQunatityParticipants = createElement('input', {
            className: 'e-field', attrs: { name: 'cnaQunatityParticipants' , id: 'cnaQunatityParticipants' }
          });

          // declaracion de la variable Inventory
          let inputInventory = createElement('input3', {
            className: 'e-list-content', attrs: { name: 'cnaInventory', id: 'cnaInventory'}
          });
          

          // declaracion de la variable cnaToken
          let inputCnaToken = createElement('input', {
            className: 'e-field e-input', attrs: { name: 'cnaToken', id: 'cnaToken', style: '-webkit-text-security: disc;'}
          });

          // declaracion de la variable cnaRason
          let inputCnaRason = createElement('input', {
            className: 'e-field e-input', attrs: { name: 'cnaRason', id: 'cnaRason', required: true}
          });


          // declaracion de inputConfirmSend
          let inputConfirmSend = createElement('input5', {
            className: 'e-list-content', attrs: { name: 'confirmSend', id: 'confirmSend', required: true}
          });

          // declaracion de inputCancelState
          let inputCancelState = createElement('input6', {
            className: 'e-cancel', attrs: { name: 'cnaCancelState', id: 'cnaCancelState', required: true}
          });
          
          
          // array para cnaRoom
          var array = []
          array = this.state.romsData
          container.appendChild(inputEle);

          
          let drowDownList = new DropDownList({
            // rellenar la data
            dataSource: array,
            fields: { text: 'text', value: 'value'},
            value: args.data.cnaRoom,
            // nombre del campo padre, definido en la lista
            floatLabelType: 'Always', placeholder: 'Sala'
          });

          let drowDownEmployee = new DropDownList({
            // rellenar la data
            dataSource: arrayEmployee,
            fields: { text: 'text', value: 'value' , validation: { required: true }},
            value: args.data.cnaEmployee,
            // nombre del campo padre, definido en la lista
            floatLabelType: 'Always', placeholder: 'Jefe de Unidad'
          });

          let drowDownApplicant = new DropDownList({
            // rellenar la data
            dataSource: arrayApplicant,
            fields: { text: 'text', value: 'value' , validation: { required: true }},
            value: args.data.cnaApplicant,
            // nombre del campo padre, definido en la lista
            floatLabelType: 'Always', placeholder: 'Solicitante'
          });


          // test selecto many2manyTags
          // const optionListMany2Tags = [
          //   { value: "red", label: "Red" },
          //   { value: "green", label: "Green" },
          //   { value: "yellow", label: "Yellow" },
          //   { value: "blue", label: "Blue" },
          //   { value: "white", label: "White" }
          // ];

          const optionListMany2Tags =[{ Game: "Game 1", Id: 1 }, { Game: "Game 2", Id: 2 }];
          const fields={ text: "Game", value: "Game" };

          // let multiSelectComponent = new MultiSelectComponent({
          //   dataSource: optionListMany2Tags,
          //   // fields: fields,
          //   // onFilterChange: false,
          //   fields: { text: 'Game', value: 'Id' },
          //   placeholder: 'm2m tags'
          // });
          
          let multiSelectComponent = new MultiSelectComponent({
            dataSource: optionListMany2Tags,
            fields: { text: 'Game', value: 'Id' },
            placeholder: 'm2m tags'
          });

          // listObj.appendTo('#multi-select');
          // multiSelectComponent.appendTo(inputM2t);
          // inputM2t.setAttribute('name', 'cnaMany2T');

          let d = [
            { text: 'Estoy de acuerdo con la Informaci??n registrada.', id:1 },
          ];

          let c = [
            { text: 'Cancelar este evento .', id:1 },
          ];

          container.appendChild(inputM2t);
          container.appendChild(inputQunatityParticipants);
          container.appendChild(inputInventory);
          container.appendChild(inputApplicant);
          container.appendChild(inputCnaToken);
          container.appendChild(inputCnaRason);
          container.appendChild(inputCancelState);
          container.appendChild(inputConfirmSend);
          
          
          row.appendChild(container);

          
          
          let ListViewInventory = new ListView({
              //Set the data to datasource property
              dataSource: this.state.inventoryData,
              headerTitle: 'Requerimientos',
              showHeader: true,
              value: args.data.cnaInventory,
              //Enable checkbox
              showCheckBox: true,
          });

          
          
          let ConfirmSend = new ListView({
            //Set the data to datasource property
            dataSource: d,
            showCheckBox: true,
          });


          let StateCancel  = new ListView({
            dataSource: c,
            showCheckBox: true,
            value: args.data.cnaStateCancel,
          });

          let TextCnaToken = new TextBox ({
            //Set the data to datasource property
            placeholder: 'Contrase??a',
            value: args.data.cnaToken,
            required : true
          });

          let TextCnaReason = new TextBox ({
            //Set the data to datasource property
            placeholder: 'Motivo de cancelaci??n de evento',
            value: args.data.cnaReason,
            required : true
          });

          
          let numeric = new NumericTextBox({
            format: '####',
            value: args.data.cnaQunatityParticipants,
            min: 1, 
            floatLabelType: 'Always', placeholder: 'Cantidad de participantes'
          });
          
          // let ListViewInventory = new ListView({
          //   // rellenar la data
          //   dataSource: d,
          //   fields: { text: 'text', value: 'value' , validation: { required: true }},
          //   value: d,
          //   // nombre del campo padre, definido en la lista
          //   floatLabelType: 'Always', placeholder: 'Lista inventario'
          // });

          // cnaRoom===========================
          drowDownList.appendTo(inputEle);
          inputEle.setAttribute('name', 'cnaRoom');
          inputEle.setAttribute('validation', { required: true });
          
          // numeric===========================
          numeric.appendTo(inputQunatityParticipants);
          inputQunatityParticipants.setAttribute('name', 'cnaQunatityParticipants');


          // cnaEmployee=====================================
          drowDownEmployee.appendTo(inputEmployee);
          inputEmployee.setAttribute('name', 'cnaEmployee');
          inputEmployee.setAttribute('validation', { required: true });

          
          // cnaInventory=====================================

          // inputInventory.getElementsByClassName("e-list-item e-level-1 e-checklist").setAttribute('className', 'e-field');
          ListViewInventory.appendTo(inputInventory);
          inputInventory.setAttribute('name', 'cnaInventory');

          
          // cnaApplicant=====================================
          drowDownApplicant.appendTo(inputApplicant);
          inputApplicant.setAttribute('name', 'cnaApplicant');
          inputApplicant.setAttribute('validation', { required: true });
          
          multiSelectComponent.appendTo(inputM2t);
          inputM2t.setAttribute('name', 'cnaMany2T');

          TextCnaToken.appendTo(inputCnaToken);
          inputCnaToken.setAttribute('name', 'cnaToken');

          TextCnaReason.appendTo(inputCnaRason);
          inputCnaRason.setAttribute('name', 'cnaReason');

          StateCancel.appendTo(inputCancelState);
          inputCancelState.setAttribute('name', 'cnaStateCancel');
          
          
          ConfirmSend.appendTo(inputConfirmSend);
          inputConfirmSend.setAttribute('name', 'ConfirmSend');

          document.getElementById('cnaRason').setAttribute('style', 'display:None;') 
          document.getElementById('_dialog_wrapper').setAttribute('width', '57% !important;')
          args.element.setAttribute('style', 'width: 57% !important;')

          let multiSelectHtml = inputM2t.outerHTML;




          document.getElementById('_dialog_wrapper_dialog-header').innerHTML=`<div id = "multiSelectContainer"></div>`;
          
          const multiSelectComponentTest = <MultiSelectComponent dataSource={optionListMany2Tags} fields={{ text: 'Game', value: 'Id' }} placeholder='m2m tags' />;
          ReactDOM.render(multiSelectComponentTest, document.getElementById('multiSelectContainer'));


          // document.getElementById('#multiSelectContainer').appendTo(multiSelectComponent);
          console.log('test log ------->', multiSelectHtml )



          
          // document.getElementsByClassName('custom-field-container')[0].innerHTML = <MulitselectDrop></MulitselectDrop>
          
          // private sportsData = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];
          
        //   document.getElementsByClassName('custom-field-container')[0].innerHTML = `
          
        //   <div className="autcomplete-wrapper">
        //   <div className="autcomplete">
        //     <div className="w-full flex flex-col items-center mx-auto">
        //       <div className="w-full">
        //         <div className="flex flex-col items-center relative">
        //           <div className="w-full ">
        //             <div className="my-2 p-1 flex border border-gray-200 bg-white rounded ">
        //               <div className="flex flex-auto flex-wrap">
        //                 {selectedItems.map((tag, index) => {
        //                   return (
        //                     <div
        //                       key={index}
        //                       className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-teal-100 border border-teal-300 "
        //                     >
        //                       <div className="text-xs font-normal leading-none max-w-full flex-initial">
        //                         {tag}
        //                       </div>
        //                       <div className="flex flex-auto flex-row-reverse">
        //                         <div>
    
        //                         </div>
        //                       </div>
        //                     </div>
        //                   );
        //                 })}
        //                 <div className="flex-1">
        //                   <input
        //                     placeholder=""
        //                     className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
        //                   />
        //                 </div>
        //               </div>
        //               <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
        //                 <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
    
        //                 </button>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>`
          console.log(' from modal ====222====>',document.getElementsByClassName('custom-field-container')[0] )
          
          
      }
      else{
        document.getElementById('cnaToken').setAttribute('style', 'display:block;   -webkit-text-security: disc; ')
        document.getElementById('cnaCancelState').setAttribute('style', 'display:block;')
        document.getElementById('cnaRason').setAttribute('style', 'display:None;')
        // document.getElementById('cnaToken').setAttribute('aria-required', 'true')
      }
      
      for (var obj_i in this.state.scheduleData) {
        if (this.state.scheduleData[obj_i]['Id']  === args.data.Id) {
          for (var select_var in document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")) {
            
            if (document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")[select_var].id  != undefined) {
              if ( this.state.scheduleData[obj_i]['cnaInventory'] &&  this.state.scheduleData[obj_i]['cnaInventory'].includes(  parseInt(document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")[select_var].id.replace('cnaInventory_', ''), 10)  ) ) {
                document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")[select_var].setAttribute('class', 'e-list-item e-level-1 e-checklist e-active')
                document.getElementById('cnaInventory').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[select_var].setAttribute('aria-selected', true)
                document.getElementById('cnaInventory').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[select_var].setAttribute('aria-checked', true)
                document.getElementById('cnaInventory').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[select_var].getElementsByClassName("e-frame e-icons")[0].setAttribute('class', 'e-frame e-icons e-check')
                document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")[select_var].setAttribute('aria-selected', true)
              }
              else{
                document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")[select_var].setAttribute('class', 'e-list-item e-level-1 e-checklist')
                document.getElementById('cnaInventory').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[select_var].setAttribute('aria-selected', false)
                document.getElementById('cnaInventory').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[select_var].setAttribute('aria-checked', false)
                document.getElementById('cnaInventory').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[select_var].getElementsByClassName("e-frame e-icons")[0].setAttribute('class', 'e-frame e-icons')
                document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")[select_var].setAttribute('aria-selected', false)
              }

            }
          }
        }
      }
      
      //ventana de eventos nueva 
      // resetea los check box
      if ( args.data.Id === undefined ) {
        // resetea los elementos seleccionados en el checBox
        for (var select_var in document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")) {
          if (document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")[select_var].id  != undefined) {
            document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")[select_var].setAttribute('class', 'e-list-item e-level-1 e-checklist')
            document.getElementById('cnaInventory').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[select_var].setAttribute('aria-selected', false)
            document.getElementById('cnaInventory').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[select_var].setAttribute('aria-checked', false)
            document.getElementById('cnaInventory').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[select_var].getElementsByClassName("e-frame e-icons")[0].setAttribute('class', 'e-frame e-icons')
            document.getElementById('cnaInventory').getElementsByClassName("e-list-item e-level-1 e-checklist")[select_var].setAttribute('aria-selected', false)
          }
        }
        
        // oculta elemento de token
        // document.getElementById('cnaToken').setAttribute('style', 'display:None;')

        // oculta elemento de cancelar evento
        document.getElementById('cnaCancelState').setAttribute('style', 'display:None;')
        document.getElementById('cnaRason').setAttribute('style', 'display:None;') 

      }

      document.getElementById('cnaToken').onchange = this.get_validate_required_fields  
      document.getElementById('cnaRoom_hidden').onchange = this.get_validate_required_fields  
      // revert
      // document.getElementById('cnaEmployee_hidden').onchange = this.get_validate_required_fields 
      
      // document.getElementById('cnaRason').onclick = this.get_confirmation
      document.getElementById('confirmSend').onclick = this.get_confirmation
      document.getElementById('cnaCancelState').onclick = this.get_rason 
      
      
      


      // elimina campos no necesarios zona horaria, duracion todo el dia etc
      document.getElementsByClassName("e-all-day-time-zone-row")[0].setAttribute('style', 'display:None;')
      document.getElementsByClassName("e-input-wrapper e-form-left")[0].setAttribute('style', 'display:None;')

      // elimina el boton delete
      document.getElementsByClassName("e-control e-btn e-lib e-event-delete e-flat")[0].setAttribute('style', 'display:None;')
      // oculta description_location
      document.getElementsByClassName("e-location-container")[0].setAttribute('style', 'display:None;')
      document.getElementsByClassName("e-subject-container")[0].setAttribute('style', 'width:100%;')
      
      
      
      // resetea a false el check de confirmacion
      document.getElementById('confirmSend').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[0].setAttribute('aria-selected', false)
      document.getElementById('confirmSend').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[0].setAttribute('aria-checked', false)
      document.getElementById('confirmSend').getElementsByClassName("e-checkbox-wrapper e-css e-listview-checkbox e-checkbox-left")[0].getElementsByClassName("e-frame e-icons")[0].setAttribute('class', 'e-frame e-icons')
      document.getElementById('confirmSend').getElementsByClassName("e-list-item e-level-1 e-checklist")[0].setAttribute('aria-selected', false)
      
    }
    
    this.scheduleObj.activeCellsData.isAllDay = false
    if (args['type'] === 'QuickInfo') {
      args.cancel = true;
    }
  }
  // MAIN
  // renderiza el componente principal
  render() {
    return (
      // fallback={<Loading />}
      // eventStyleGetter={this.eventStyleGetter.bind(this)}
      
      <div className="App">
        <header  style={{ height: 160, display: 'flex', flexDirection: 'column', fontSize:25, color: 'black'}}>
          <div style={{ width: 'auto'}} >
            <Row>
              <Col xs={3}><img src={logo} alt="logo" style={{ width: 214}} /></Col>
              
              {window.screen.width >= 900 ?   
                <Col xs={7} style={{ textAlign: "center"}}><text style={{ fontWeight: 600}} >CONSEJO NACIONAL ANTICORRUPCI??N</text> <br></br>    <text>ADMINISTRACI??N Y RECURSOS HUMANOS</text> <br></br>  <text>Reserva de salas</text>  <br></br> <div id= "list_room_color">  </div> <br></br> </Col>          :       <text></text> 
              }


            
              
              
              <Col xs={2} style={{ textAlign: "left"}}> </Col>
            </Row>
          </div>
        </header>
        <ScheduleComponent locale = 'es' timezone='America/Tegucigalpa'    height='600' width='auto'  ref={t => this.scheduleObj = t}  currentView = 'Week' selectedDate = {new Date()} eventSettings={{ dataSource: this.state.scheduleData ,
            fields: {
              id: 'Id',
              // cnaRoom: { validation: { required: true } },
              cnaToken: { name: 'cnaToken', title: 'Token', validation: { required: true } },
              subject: { name: 'name', title: 'Nombre de Evento y responsable' , validation: { required: true }},
              location: { name: 'Locacion', title: 'Descripcion de la locaci??n' },
              description: { name: 'Description', title: 'Descripcion del evento' },
              startTime: { name: 'StartTime', title: 'Desde' },
              endTime: { name: 'EndTime', title: 'Hasta' },
              IsAllDay: { default: false}
            }}
          
          
          }actionBegin={this.onActionBegin.bind(this)     }  popupOpen={this.onPopupOpen.bind(this)}  eventRendered={this.onEventRendered.bind(this)}>
            <Inject services = {[Week ,Day, WorkWeek, Month, Agenda]}/>
          </ScheduleComponent>
      </div>
    
    );
  }
}

export default App;

