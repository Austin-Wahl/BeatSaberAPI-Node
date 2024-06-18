function parseSearchOptions(searchOptions) {
    let route = ''
    if(Object.keys(searchOptions).length > 0) {
        route += '?'
        let i = 1
        for(key in searchOptions) {
            if(i < Object.keys(searchOptions).length)
                route += `${key}=${searchOptions[key]}&`
            else 
                route += `${key}=${searchOptions[key]}`
            i++
        }
    } 
    return route
}

exports.parseSearchOptions = parseSearchOptions