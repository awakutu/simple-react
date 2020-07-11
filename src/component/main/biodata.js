import React, {Component} from 'react';

class Biodata extends Component {
    //Nomor 3
    constructor(props){
      super(props);
      this.state = {
        namaDepan: '',
        namaBelakang:'',
        jenisKelamin: "",
        alamat:''
      }
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
    }

    onSubmit(event){
      event.preventDefault();
      event.stopPropagation();
      const { namaDepan, namaBelakang, nomor, jenisKelamin,  alamat} = this.state;
      alert(`Nama Saya ${namaDepan} ${namaBelakang},  dengan jenis kelamin ${jenisKelamin}
       alamat ${alamat} apabila tertarik hubungi nomor saya ${nomor}`)
    }

    onChange(event){
      const {name, value} = event.target;
      this.setState({[name]: value})
    }

      render() {
        const { namaDepan, namaBelakang, nomor, jenisKelamin, alamat} = this.state;
        return(
     <>   
        <form onSubmit ={this.onSubmit}>
    <label> Nama Depan :<br/>
    <input name="namaDepan" type="text" value={namaDepan} onChange={this.onChange}/>
    </label><br/>
    <label> Nama Belakang :<br/>
    <input name="namaBelakang" type="text" value={namaBelakang} onChange={this.onChange}/>
    </label><br/>
    <label> Nomor Smartphone :<br/>
    <input name="nomor" type="number" value={nomor} onChange={this.onChange}/>
    </label><br/>
    <label> Jenis Kelamin :<br/>
    <input name="jenisKelamin" type="radio" value="laki"
    checked={jenisKelamin ==="laki"}
    onChange={this.onChange}/>Laki-Laki <br/>
    <input name="jenisKelamin" type="radio" value="perempuan"
    checked={jenisKelamin ==="perempuan"} onChange={this.onChange}/>Perempuan <br/>
    </label><br/>
    <label> Alamat : <br/>
    <textarea name="alamat" value={alamat} onChange={this.onChange}/>
    </label><br/>
    <button type="submit">Submit</button>
        </form><br/>
        </> 
      )
      };
    }
    
export default Biodata;