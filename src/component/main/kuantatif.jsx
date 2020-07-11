import React, {Component} from 'react';

class PercentConvert extends Component{
    _handleChange = (e) =>{
    this.props.onChangeConvert(e.target.value);
  }
  
  render (){
  const {convertLabel, convert} = this.props;
  
  return(
  <>
  <label>
    {convertLabel === '%' ? 'Percent:' : 'Nominal:'};
  <input type="number" value={convert} onChange={this._handleChange}/>
  </label><br/>
  </>
    )
  }
  }

class Kuantatif extends Component {
    constructor(props){
      super(props);
      this.state ={
      percent:0,
      nominal:0
    }
    }
    
    onSubmit=(e)=> {
      e.preventDefault();
      alert(`${this.state.nominal} adalah ${this.state.percent} persen `)
    }
    
    onConvertPercent = (percent) => {
      let nominal = (parseFloat(percent)/100).toFixed(2);
      this.setState({nominal, percent})
    }
    
    onConvertNominal = (nominal) => {
      let percent = (parseFloat(nominal)*100).toFixed(2);
      this.setState({nominal, percent})
    }
    
    
      render() {
        const { percent, nominal} = this.state;
        return(
       <> 
       <form onSubmit={this.onSubmit}>
       <h1 id="kuantatif">Penilaian Kuantatif</h1>
         <h3>Konversi Akhir Nilai</h3>
         <PercentConvert convertLabel="%" convert={percent} onChangeConvert={this.onConvertPercent}/>
         <PercentConvert convertLabel="nominal" convert={nominal} onChangeConvert={this.onConvertNominal}/>
         <button type="submit">Hitung</button>
         </form>   
       </> 
      )
      };
    }

export default Kuantatif;