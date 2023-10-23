
// getUsers in işi bittikten sonra callback fonksiyonu çağrıldı. Bu şekilde asenkron bir program örneği vermiş olduk.

const getUsers = (callback)=>{

    const xhr = new XMLHttpRequest(); // request objesi oluşturduk.

    xhr.addEventListener("readystatechange",function(){

        if(xhr.readyState == 4 && xhr.status ==200){
            callback(undefined, this.responseText); // undefined yazmamızın sebebi fonksiyonun aşağıda iki durumu karşılatırıyor olmasıdır. 
            // Burası çalışırsa birinci parametre yani err = undefined olduğundan o değilde bir altındaki else durumu çalışır.
        }
        else if(xhr.readyState == 4){
            callback("Veriye ulaşılamadı.",undefined);
        }
    })

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.send();
}

getUsers((err,data)=>{

    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});







