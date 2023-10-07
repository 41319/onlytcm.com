import fs from 'fs'
const filename = './src/data/jinfang/shanhan.json';
const json = fs.readFileSync(filename, 'utf-8')
const result = JSON.parse(json).map((e, i) => ({
    ...e,
    otid: `OT${i + 1}`,
    id: undefined
    
}))
fs.writeFileSync(filename, JSON.stringify(result), 'utf-8')
