function solution(my_strings, parts) {
    let result = ""
    for(let i = 0; i < my_strings.length; i++){
        const [s,e] = parts[i]
        const partialString = my_strings[i].substring(s,e+1)
        result += partialString
    }
    return result
}