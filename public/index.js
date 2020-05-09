if('serviceWorker' in navigator){
    window.addEventListener('load', async ev=>{
        try{
            let registration = await navigator.serviceWorker.register('./sw.js');
            import('./main.js')
        }
        catch(err){
            console.log(err)
        }
    });
}else{
    import('./main.js')
}
