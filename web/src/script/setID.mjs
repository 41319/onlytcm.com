import fs from 'fs'
const filename = './src/data/jinfang/shanhan.json';
const json = fs.readFileSync(filename, 'utf-8')
const result = JSON.parse(json).map((e, i) => ({
    ...e,
    important: ''
    
}))
fs.writeFileSync(filename, JSON.stringify(result), 'utf-8')
