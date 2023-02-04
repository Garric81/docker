import fs 'fs'

fs.appendFile('my-File.txt', 'файл создан Node.js', (err) => {
    if (err) throw err
    console.log('файл сохранен!')
})

setTimeout(() => console.log ("Завершение"), 20000)