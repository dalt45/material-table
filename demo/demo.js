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
      columns: [],
      data: [],
    };
  }
  columns = [
    { title: 'Fecha de registro', field: 'fecha', filtering: false },
    { title: 'Nombre de la institución', field: 'nombreInstitucion', filtering: false },
    { title: 'Programa de fortalecimiento', field: 'programaFortalecimiento', filtering: false },
    {
      title: 'Estado',
      field: 'status',
      lookup: {
        0: 'aspirant',
      },
    },
    { title: 'Persona de contacto', field: 'nombreContacto', lookup:{1: 'Ana Ruiz Camacho'}},
    { title: 'Correo', field: 'emailContacto', filtering: false },
  ]
  getFoundations = async () => {
    let h = new Headers()
    h.append('Authorization','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTBmM2VlMzAwMDE0MDMxYzY1ZTNhZCIsImlhdCI6MTU2MTQ4MzYyMn0.xFSfSlZT010DlUYi8WfSEeCXuKJxLvUVJWx86T2aq7A')
    let req = new Request('https://funmern.herokuapp.com'+'/admin/list/all',{
      headers: h
    })
    const api_fetch = await fetch(req)
    const fundaciones = await api_fetch.json()
    let list = fundaciones.payload
    let statusArray = list.map( (array,index) => {
        return array.status
    })
    console.log(statusArray)
    let statusList= [...new Set(statusArray)]
    let newList = list.map( element => {
      let object = {}
      let newIndex = statusList.findIndex( (elementComp) => {
        return element.status===elementComp})
      object = {...element, status:newIndex+1 }
      return object
    })
    console.log(newList)
    this.columns[3].lookup = statusList.map((element,index)=>{
      let currObjt={}
      currObjt[index+1] = element
      return currObjt
    })[0]
    this.setState({data: newList, columns: this.columns})
  }
  componentDidMount () {
      this.getFoundations()
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
