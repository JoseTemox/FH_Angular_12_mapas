// export  class Marcador{

//     constructor(public lat: number, public lng: number){  }

// } esta es otra forma de hacerlo y hace exactamente lo mismo

export  class Marcador{

    public lat: number;
    public lng: number;

    public titulo = 'Sin título';
    public descripcion = 'Sin Descripción';

    constructor(lat: number, lng: number){
        this.lat = lat;
        this.lng = lng;
     }

}