import { Grid, MuiThemeProvider, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from '../src';

const styles = () => (
  <style jsx>{`
    .search-container {
      margin-top: 65px;
    }
  `}</style>
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Fecha de registro', field: 'data', filtering: false },
        { title: 'Nombre de la institución', field: 'name', filtering: false },
        { title: 'Programa de fortalecimiento', field: 'program', filtering: false },
        {
          title: 'Estado',
          field: 'status',
          lookup: {
            1: 'Nuevo aspirante',
            2: 'Esperando ficha',
            3: 'Esperando descriptores',
            4: 'Esperando evidencias',
            5: 'Redactando reporte',
            6: 'Reporte enviado',
          },
        },
        { title: 'Persona de contacto', field: 'person', filtering: false },
        { title: 'Correo', field: 'email', filtering: false },
      ],
      data: [
        {
          data: '05/06/19',
          name: 'Fundacion Merced',
          program: 'Propio',
          status: 1,
          person: 'Ana Ruíz Camacho',
          email: 'correo@ejemplo.mx',
        },
        {
          data: '05/06/19',
          name: 'Fundacion MacBook',
          program: 'Propio',
          status: 2,
          person: 'Ana Ruíz Camacho',
          email: 'correo@ejemplo.mx',
        },
        {
          data: '05/06/19',
          name: 'Fundacion Perez',
          program: 'Propio',
          status: 1,
          person: 'Ana Ruíz Camacho',
          email: 'correo@ejemplo.mx',
        },
        {
          data: '05/06/19',
          name: 'Fundacion ',
          program: 'Propio',
          status: 4,
          person: 'Ana Ruíz Camacho',
          email: 'correo@ejemplo.mx',
        },
        {
          data: '05/06/19',
          name: 'Fundacion Merced',
          program: 'Propio',
          status: 5,
          person: 'Ana Ruíz Camacho',
          email: 'correo@ejemplo.mx',
        },
        {
          data: '05/06/19',
          name: 'Fundacion Merced',
          program: 'Propio',
          status: 5,
          person: 'Ana Ruíz Camacho',
          email: 'correo@ejemplo.mx',
        },
        {
          data: '05/06/19',
          name: 'Fundacion Merced',
          program: 'Propio',
          status: 6,
          person: 'Ana Ruíz Camacho',
          email: 'correo@ejemplo.mx',
        },
        {
          data: '05/06/19',
          name: 'Fundacion Merced',
          program: 'Propio',
          status: 3,
          person: 'Ana Ruíz Camacho',
          email: 'correo@ejemplo.mx',
        },
        {
          data: '05/06/19',
          name: 'Fundacion Merced',
          program: 'Propio',
          status: 4,
          person: 'Ana Ruíz Camacho',
          email: 'correo@ejemplo.mx',
        },
        {
          data: '05/06/19',
          name: 'Fundacion Merced',
          program: 'Propio',
          status: 2,
          person: 'Ana Ruíz Camacho',
          email: 'correo@ejemplo.mx',
        },
        {
          data: '05/06/19',
          name: 'Fundacion Merced',
          program: 'Propio',
          status: 1,
          person: 'Ana Ruíz Camacho',
          email: 'correo@ejemplo.mx',
        },
        {
          data: '05/06/19',
          name: 'Fundacion Merced',
          program: 'Propio',
          status: 5,
          person: 'Ana Ruíz Camacho',
          email: 'correo@ejemplo.mx',
        },
        {
          data: '05/06/19',
          name: 'Fundacion ',
          program: 'Propio',
          status: 2,
          person: 'Ana Ruíz Camacho',
          email: 'correo@ejemplo.mx',
        },
        {
          data: '05/06/19',
          name: 'Fundacion Merced',
          program: 'Propio',
          status: 4,
          person: 'Ana Ruíz Camacho',
          email: 'correo@ejemplo.mx',
        },
      ],
    };
  }

  render() {
    return (
      <div className="search-container">
        {styles()}
        <MaterialTable
          columns={this.state.columns}
          data={this.state.data}
          onRowClick={(evt, selectedRow) => this.setState({ selectedRow })}
          options={{
            rowStyle: rowData => ({
              backgroundColor:
                this.state.selectedRow &&
                this.state.selectedRow.tableData.id === rowData.tableData.id
                  ? '#EEE'
                  : '#FFF',
            }),
            headerStyle: {
              backgroundColor: '#F57F85',
              color: '#FFF',
            },
            searchFieldAlignment: 'left',
            showTitle: false,
            filtering: true,
            searchFieldStyle: {
              height: '40px',
              width: '230px',
              borderRadius: '4px',
              backgroundColor: '#FFF',
              boxShadow: '0 3px 15px 0 rgba(161,160,160,0.5)',
              paddingLeft: '10px'
            }
          }}
          localization={{
            body: {
              emptyDataSourceMessage: 'Sin resultados',
            },
            toolbar: {
              searchTooltip: 'Burscar',
              searchPlaceholder: 'Buscar',
            },
            pagination: {
              labelDisplayedRows: ' {from}-{to} de {count}',
              firstTooltip: 'Primer Elemento',
              previousTooltip: 'Regresa',
              nextTooltip: 'Siguiente',
              lastTooltip: 'Último elemento',
            },
          }}
        />
      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();
