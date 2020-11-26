/* export class Info {
    wrapperType: string;
    kind: string;
    artistId: number;
    collectionId: number;
    trackId: number;
    artistName: string;
    collectionName: string;
    trackName: string;
    artworkUrl100: string;
    constructor(
    wrapperType: string,
    kind: string,
    artistId: number,
    collectionId: number,
    trackId: number,
    artistName: string,
    collectionName: string,
    trackName: string,
    artworkUrl100: string,
    ) {
        this.wrapperType = wrapperType;
        this.kind = kind;
        this.artistId = artistId;
        this.collectionId = collectionId;
        this.trackId = trackId;
        this.artistName = artistName;
        this.collectionName = collectionName;
        this.trackName = trackName;
        this.artworkUrl100 = artworkUrl100;
    }
} */

export class Info {
    source: string;
    tipo: string;
    img: string;
    titulo: string;
    descripcion: string;
    constructor(
        source: string,
        tipo: string,
        img: string,
        titulo: string,
        descripcion: string,
    ) {
        this.source = source;
        this.tipo = tipo;
        this.img = img;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
    
}