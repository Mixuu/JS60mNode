const greet = () => {
    console.log('hello node!')
    }
    
    const add = (a, b) => {
        console.log(a+b)
    }

    console.log('The file is loaded')

    //udostpępnianie funkcji na świat za pomocą obiektu
    module.exports = {
        greet,
        add
    }