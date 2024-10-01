let text = 'The classes are itec 1158, itec 1258, itec 2560'

let replaced = text.replace('itec', 'ITEC')
console.log(replaced)

let replacedAll = text.replace(/itec/g,'ITEC')
console.log(replacedAll)