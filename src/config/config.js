

export const filterSendMessagge = ((data)=>{
    const {nama,pesan,email} = data;
    const _badWord = ["anjing","babi","kontol","tai","memek","henceut","k0ntol","taii","k0nt0l",]
    const RegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    let ValidEmail = RegEx.test(email)
    return new Promise((resolve,reject)=>{
        if(nama.length=== 0 ||nama.length >12){
            return reject({message:"Maaf nama harus lebih dari 0 huruf atau tidak boleh lebih dari 12 huruf."})
        }else if(_badWord.some(x=>nama.includes(x))){
            return reject({message:"maaf nama yang digunakan merupakan nama asli/panggilan,tidak berupa kata kata kasar atau nama hewan."})
        }else if(_badWord.some(x=>pesan.includes(x))){
            return reject({message:"Maaf pesan harus berupa kata kata baik."})
        }else if(pesan.length ===0 || pesan.length > 120){
            return reject({message:"Maaf panjang pesan tidak boleh kosong atau lebih dari 120 karakter/huruf."})
        }else if(!ValidEmail){
            return reject({message:"Maaf email anda tidak valid"})
        } else{
            return resolve(data)
        }
    })
})
