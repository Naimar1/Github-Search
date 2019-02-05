export class Repository {
    constructor(
        public name:string,
        public public_repo: number,
        public bio:string,
        public followers:number,
        public following:number,
        public html_url:string,
        public created_at:Date){

    }
    
}
